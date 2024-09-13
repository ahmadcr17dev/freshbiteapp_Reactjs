var tC=Object.defineProperty;var nC=(t,e,n)=>e in t?tC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Hh=(t,e,n)=>nC(t,typeof e!="symbol"?e+"":e,n);function rC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Iw={exports:{}},vd={},xw={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fl=Symbol.for("react.element"),iC=Symbol.for("react.portal"),sC=Symbol.for("react.fragment"),oC=Symbol.for("react.strict_mode"),aC=Symbol.for("react.profiler"),lC=Symbol.for("react.provider"),uC=Symbol.for("react.context"),cC=Symbol.for("react.forward_ref"),dC=Symbol.for("react.suspense"),hC=Symbol.for("react.memo"),fC=Symbol.for("react.lazy"),Y0=Symbol.iterator;function pC(t){return t===null||typeof t!="object"?null:(t=Y0&&t[Y0]||t["@@iterator"],typeof t=="function"?t:null)}var Cw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rw=Object.assign,Pw={};function Eo(t,e,n){this.props=t,this.context=e,this.refs=Pw,this.updater=n||Cw}Eo.prototype.isReactComponent={};Eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Aw(){}Aw.prototype=Eo.prototype;function Mm(t,e,n){this.props=t,this.context=e,this.refs=Pw,this.updater=n||Cw}var jm=Mm.prototype=new Aw;jm.constructor=Mm;Rw(jm,Eo.prototype);jm.isPureReactComponent=!0;var X0=Array.isArray,bw=Object.prototype.hasOwnProperty,Vm={current:null},kw={key:!0,ref:!0,__self:!0,__source:!0};function Nw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bw.call(e,r)&&!kw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fl,type:t,key:s,ref:o,props:i,_owner:Vm.current}}function mC(t,e){return{$$typeof:fl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fm(t){return typeof t=="object"&&t!==null&&t.$$typeof===fl}function gC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var J0=/\/+/g;function qh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gC(""+t.key):e.toString(36)}function Du(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fl:case iC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+qh(o,0):r,X0(i)?(n="",t!=null&&(n=t.replace(J0,"$&/")+"/"),Du(i,e,n,"",function(c){return c})):i!=null&&(Fm(i)&&(i=mC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(J0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",X0(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+qh(s,a);o+=Du(s,e,n,u,i)}else if(u=pC(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+qh(s,a++),o+=Du(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function tu(t,e,n){if(t==null)return t;var r=[],i=0;return Du(t,r,"","",function(s){return e.call(n,s,i++)}),r}function yC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},Lu={transition:null},vC={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:Lu,ReactCurrentOwner:Vm};function Ow(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:tu,forEach:function(t,e,n){tu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tu(t,function(){e++}),e},toArray:function(t){return tu(t,function(e){return e})||[]},only:function(t){if(!Fm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Eo;ne.Fragment=sC;ne.Profiler=aC;ne.PureComponent=Mm;ne.StrictMode=oC;ne.Suspense=dC;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vC;ne.act=Ow;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Rw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)bw.call(e,u)&&!kw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:fl,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:uC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lC,_context:t},t.Consumer=t};ne.createElement=Nw;ne.createFactory=function(t){var e=Nw.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:cC,render:t}};ne.isValidElement=Fm;ne.lazy=function(t){return{$$typeof:fC,_payload:{_status:-1,_result:t},_init:yC}};ne.memo=function(t,e){return{$$typeof:hC,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Lu.transition;Lu.transition={};try{t()}finally{Lu.transition=e}};ne.unstable_act=Ow;ne.useCallback=function(t,e){return Rt.current.useCallback(t,e)};ne.useContext=function(t){return Rt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return Rt.current.useEffect(t,e)};ne.useId=function(){return Rt.current.useId()};ne.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return Rt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};ne.useRef=function(t){return Rt.current.useRef(t)};ne.useState=function(t){return Rt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return Rt.current.useTransition()};ne.version="18.3.1";xw.exports=ne;var M=xw.exports;const xt=Tw(M),Gf=rC({__proto__:null,default:xt},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _C=M,wC=Symbol.for("react.element"),EC=Symbol.for("react.fragment"),SC=Object.prototype.hasOwnProperty,TC=_C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,IC={key:!0,ref:!0,__self:!0,__source:!0};function Dw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)SC.call(e,r)&&!IC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wC,type:t,key:s,ref:o,props:i,_owner:TC.current}}vd.Fragment=EC;vd.jsx=Dw;vd.jsxs=Dw;Iw.exports=vd;var p=Iw.exports,Qf={},Lw={exports:{}},Jt={},Mw={exports:{}},jw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,K){var Q=$.length;$.push(K);e:for(;0<Q;){var de=Q-1>>>1,re=$[de];if(0<i(re,K))$[de]=K,$[Q]=re,Q=de;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var K=$[0],Q=$.pop();if(Q!==K){$[0]=Q;e:for(var de=0,re=$.length,Te=re>>>1;de<Te;){var Ft=2*(de+1)-1,bt=$[Ft],wt=Ft+1,kt=$[wt];if(0>i(bt,Q))wt<re&&0>i(kt,bt)?($[de]=kt,$[wt]=Q,de=wt):($[de]=bt,$[Ft]=Q,de=Ft);else if(wt<re&&0>i(kt,Q))$[de]=kt,$[wt]=Q,de=wt;else break e}}return K}function i($,K){var Q=$.sortIndex-K.sortIndex;return Q!==0?Q:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,h=null,g=3,_=!1,I=!1,R=!1,P=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w($){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=$)r(c),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(c)}}function C($){if(R=!1,w($),!I)if(n(u)!==null)I=!0,Ti(N);else{var K=n(c);K!==null&&Vt(C,K.startTime-$)}}function N($,K){I=!1,R&&(R=!1,E(v),v=-1),_=!0;var Q=g;try{for(w(K),h=n(u);h!==null&&(!(h.expirationTime>K)||$&&!b());){var de=h.callback;if(typeof de=="function"){h.callback=null,g=h.priorityLevel;var re=de(h.expirationTime<=K);K=t.unstable_now(),typeof re=="function"?h.callback=re:h===n(u)&&r(u),w(K)}else r(u);h=n(u)}if(h!==null)var Te=!0;else{var Ft=n(c);Ft!==null&&Vt(C,Ft.startTime-K),Te=!1}return Te}finally{h=null,g=Q,_=!1}}var D=!1,T=null,v=-1,x=5,A=-1;function b(){return!(t.unstable_now()-A<x)}function O(){if(T!==null){var $=t.unstable_now();A=$;var K=!0;try{K=T(!0,$)}finally{K?k():(D=!1,T=null)}}else D=!1}var k;if(typeof y=="function")k=function(){y(O)};else if(typeof MessageChannel<"u"){var At=new MessageChannel,Xn=At.port2;At.port1.onmessage=O,k=function(){Xn.postMessage(null)}}else k=function(){P(O,0)};function Ti($){T=$,D||(D=!0,k())}function Vt($,K){v=P(function(){$(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){I||_||(I=!0,Ti(N))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var Q=g;g=K;try{return $()}finally{g=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Q=g;g=$;try{return K()}finally{g=Q}},t.unstable_scheduleCallback=function($,K,Q){var de=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?de+Q:de):Q=de,$){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Q+re,$={id:d++,callback:K,priorityLevel:$,startTime:Q,expirationTime:re,sortIndex:-1},Q>de?($.sortIndex=Q,e(c,$),n(u)===null&&$===n(c)&&(R?(E(v),v=-1):R=!0,Vt(C,Q-de))):($.sortIndex=re,e(u,$),I||_||(I=!0,Ti(N))),$},t.unstable_shouldYield=b,t.unstable_wrapCallback=function($){var K=g;return function(){var Q=g;g=K;try{return $.apply(this,arguments)}finally{g=Q}}}})(jw);Mw.exports=jw;var xC=Mw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CC=M,Qt=xC;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vw=new Set,Da={};function ls(t,e){Js(t,e),Js(t+"Capture",e)}function Js(t,e){for(Da[t]=e,t=0;t<e.length;t++)Vw.add(e[t])}var gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yf=Object.prototype.hasOwnProperty,RC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Z0={},ey={};function PC(t){return Yf.call(ey,t)?!0:Yf.call(Z0,t)?!1:RC.test(t)?ey[t]=!0:(Z0[t]=!0,!1)}function AC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bC(t,e,n,r){if(e===null||typeof e>"u"||AC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new Pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new Pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new Pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new Pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new Pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new Pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new Pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new Pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new Pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var zm=/[\-:]([a-z])/g;function Um(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zm,Um);rt[e]=new Pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zm,Um);rt[e]=new Pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zm,Um);rt[e]=new Pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new Pt(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new Pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function $m(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bC(e,n,i,r)&&(n=null),r||i===null?PC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Cr=CC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nu=Symbol.for("react.element"),Cs=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),Bm=Symbol.for("react.strict_mode"),Xf=Symbol.for("react.profiler"),Fw=Symbol.for("react.provider"),zw=Symbol.for("react.context"),Wm=Symbol.for("react.forward_ref"),Jf=Symbol.for("react.suspense"),Zf=Symbol.for("react.suspense_list"),Hm=Symbol.for("react.memo"),Mr=Symbol.for("react.lazy"),Uw=Symbol.for("react.offscreen"),ty=Symbol.iterator;function qo(t){return t===null||typeof t!="object"?null:(t=ty&&t[ty]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,Kh;function na(t){if(Kh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kh=e&&e[1]||""}return`
`+Kh+t}var Gh=!1;function Qh(t,e){if(!t||Gh)return"";Gh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Gh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?na(t):""}function kC(t){switch(t.tag){case 5:return na(t.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return t=Qh(t.type,!1),t;case 11:return t=Qh(t.type.render,!1),t;case 1:return t=Qh(t.type,!0),t;default:return""}}function ep(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rs:return"Fragment";case Cs:return"Portal";case Xf:return"Profiler";case Bm:return"StrictMode";case Jf:return"Suspense";case Zf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zw:return(t.displayName||"Context")+".Consumer";case Fw:return(t._context.displayName||"Context")+".Provider";case Wm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hm:return e=t.displayName||null,e!==null?e:ep(t.type)||"Memo";case Mr:e=t._payload,t=t._init;try{return ep(t(e))}catch{}}return null}function NC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ep(e);case 8:return e===Bm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function li(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $w(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function OC(t){var e=$w(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ru(t){t._valueTracker||(t._valueTracker=OC(t))}function Bw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$w(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function uc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tp(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ny(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=li(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ww(t,e){e=e.checked,e!=null&&$m(t,"checked",e,!1)}function np(t,e){Ww(t,e);var n=li(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rp(t,e.type,n):e.hasOwnProperty("defaultValue")&&rp(t,e.type,li(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ry(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rp(t,e,n){(e!=="number"||uc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function Fs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+li(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ip(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function iy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(ra(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:li(n)}}function Hw(t,e){var n=li(e.value),r=li(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function sy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var iu,Kw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(iu=iu||document.createElement("div"),iu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=iu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function La(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DC=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(t){DC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ya[e]=ya[t]})});function Gw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ya.hasOwnProperty(t)&&ya[t]?(""+e).trim():e+"px"}function Qw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Gw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var LC=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function op(t,e){if(e){if(LC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function ap(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lp=null;function qm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var up=null,zs=null,Us=null;function oy(t){if(t=gl(t)){if(typeof up!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Td(e),up(t.stateNode,t.type,e))}}function Yw(t){zs?Us?Us.push(t):Us=[t]:zs=t}function Xw(){if(zs){var t=zs,e=Us;if(Us=zs=null,oy(t),e)for(t=0;t<e.length;t++)oy(e[t])}}function Jw(t,e){return t(e)}function Zw(){}var Yh=!1;function eE(t,e,n){if(Yh)return t(e,n);Yh=!0;try{return Jw(t,e,n)}finally{Yh=!1,(zs!==null||Us!==null)&&(Zw(),Xw())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var r=Td(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var cp=!1;if(gr)try{var Ko={};Object.defineProperty(Ko,"passive",{get:function(){cp=!0}}),window.addEventListener("test",Ko,Ko),window.removeEventListener("test",Ko,Ko)}catch{cp=!1}function MC(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var va=!1,cc=null,dc=!1,dp=null,jC={onError:function(t){va=!0,cc=t}};function VC(t,e,n,r,i,s,o,a,u){va=!1,cc=null,MC.apply(jC,arguments)}function FC(t,e,n,r,i,s,o,a,u){if(VC.apply(this,arguments),va){if(va){var c=cc;va=!1,cc=null}else throw Error(z(198));dc||(dc=!0,dp=c)}}function us(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ay(t){if(us(t)!==t)throw Error(z(188))}function zC(t){var e=t.alternate;if(!e){if(e=us(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ay(i),t;if(s===r)return ay(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function nE(t){return t=zC(t),t!==null?rE(t):null}function rE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rE(t);if(e!==null)return e;t=t.sibling}return null}var iE=Qt.unstable_scheduleCallback,ly=Qt.unstable_cancelCallback,UC=Qt.unstable_shouldYield,$C=Qt.unstable_requestPaint,Me=Qt.unstable_now,BC=Qt.unstable_getCurrentPriorityLevel,Km=Qt.unstable_ImmediatePriority,sE=Qt.unstable_UserBlockingPriority,hc=Qt.unstable_NormalPriority,WC=Qt.unstable_LowPriority,oE=Qt.unstable_IdlePriority,_d=null,Vn=null;function HC(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(_d,t,void 0,(t.current.flags&128)===128)}catch{}}var Tn=Math.clz32?Math.clz32:GC,qC=Math.log,KC=Math.LN2;function GC(t){return t>>>=0,t===0?32:31-(qC(t)/KC|0)|0}var su=64,ou=4194304;function ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ia(a):(s&=o,s!==0&&(r=ia(s)))}else o=n&~i,o!==0?r=ia(o):s!==0&&(r=ia(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Tn(e),i=1<<n,r|=t[n],e&=~i;return r}function QC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Tn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=QC(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function hp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function aE(){var t=su;return su<<=1,!(su&4194240)&&(su=64),t}function Xh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Tn(e),t[e]=n}function XC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Tn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Tn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function lE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uE,Qm,cE,dE,hE,fp=!1,au=[],Qr=null,Yr=null,Xr=null,ja=new Map,Va=new Map,Fr=[],JC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uy(t,e){switch(t){case"focusin":case"focusout":Qr=null;break;case"dragenter":case"dragleave":Yr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(e.pointerId)}}function Go(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=gl(e),e!==null&&Qm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ZC(t,e,n,r,i){switch(e){case"focusin":return Qr=Go(Qr,t,e,n,r,i),!0;case"dragenter":return Yr=Go(Yr,t,e,n,r,i),!0;case"mouseover":return Xr=Go(Xr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ja.set(s,Go(ja.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Va.set(s,Go(Va.get(s)||null,t,e,n,r,i)),!0}return!1}function fE(t){var e=Mi(t.target);if(e!==null){var n=us(e);if(n!==null){if(e=n.tag,e===13){if(e=tE(n),e!==null){t.blockedOn=e,hE(t.priority,function(){cE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);lp=r,n.target.dispatchEvent(r),lp=null}else return e=gl(n),e!==null&&Qm(e),t.blockedOn=n,!1;e.shift()}return!0}function cy(t,e,n){Mu(t)&&n.delete(e)}function e4(){fp=!1,Qr!==null&&Mu(Qr)&&(Qr=null),Yr!==null&&Mu(Yr)&&(Yr=null),Xr!==null&&Mu(Xr)&&(Xr=null),ja.forEach(cy),Va.forEach(cy)}function Qo(t,e){t.blockedOn===e&&(t.blockedOn=null,fp||(fp=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,e4)))}function Fa(t){function e(i){return Qo(i,t)}if(0<au.length){Qo(au[0],t);for(var n=1;n<au.length;n++){var r=au[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qr!==null&&Qo(Qr,t),Yr!==null&&Qo(Yr,t),Xr!==null&&Qo(Xr,t),ja.forEach(e),Va.forEach(e),n=0;n<Fr.length;n++)r=Fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Fr.length&&(n=Fr[0],n.blockedOn===null);)fE(n),n.blockedOn===null&&Fr.shift()}var $s=Cr.ReactCurrentBatchConfig,pc=!0;function t4(t,e,n,r){var i=fe,s=$s.transition;$s.transition=null;try{fe=1,Ym(t,e,n,r)}finally{fe=i,$s.transition=s}}function n4(t,e,n,r){var i=fe,s=$s.transition;$s.transition=null;try{fe=4,Ym(t,e,n,r)}finally{fe=i,$s.transition=s}}function Ym(t,e,n,r){if(pc){var i=pp(t,e,n,r);if(i===null)lf(t,e,r,mc,n),uy(t,r);else if(ZC(i,t,e,n,r))r.stopPropagation();else if(uy(t,r),e&4&&-1<JC.indexOf(t)){for(;i!==null;){var s=gl(i);if(s!==null&&uE(s),s=pp(t,e,n,r),s===null&&lf(t,e,r,mc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else lf(t,e,r,null,n)}}var mc=null;function pp(t,e,n,r){if(mc=null,t=qm(r),t=Mi(t),t!==null)if(e=us(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return mc=t,null}function pE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BC()){case Km:return 1;case sE:return 4;case hc:case WC:return 16;case oE:return 536870912;default:return 16}default:return 16}}var Hr=null,Xm=null,ju=null;function mE(){if(ju)return ju;var t,e=Xm,n=e.length,r,i="value"in Hr?Hr.value:Hr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ju=i.slice(t,1<r?1-r:void 0)}function Vu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lu(){return!0}function dy(){return!1}function Zt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lu:dy,this.isPropagationStopped=dy,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lu)},persist:function(){},isPersistent:lu}),e}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jm=Zt(So),ml=Pe({},So,{view:0,detail:0}),r4=Zt(ml),Jh,Zh,Yo,wd=Pe({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?(Jh=t.screenX-Yo.screenX,Zh=t.screenY-Yo.screenY):Zh=Jh=0,Yo=t),Jh)},movementY:function(t){return"movementY"in t?t.movementY:Zh}}),hy=Zt(wd),i4=Pe({},wd,{dataTransfer:0}),s4=Zt(i4),o4=Pe({},ml,{relatedTarget:0}),ef=Zt(o4),a4=Pe({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),l4=Zt(a4),u4=Pe({},So,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),c4=Zt(u4),d4=Pe({},So,{data:0}),fy=Zt(d4),h4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m4(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=p4[t])?!!e[t]:!1}function Zm(){return m4}var g4=Pe({},ml,{key:function(t){if(t.key){var e=h4[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?f4[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zm,charCode:function(t){return t.type==="keypress"?Vu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),y4=Zt(g4),v4=Pe({},wd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),py=Zt(v4),_4=Pe({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zm}),w4=Zt(_4),E4=Pe({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),S4=Zt(E4),T4=Pe({},wd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),I4=Zt(T4),x4=[9,13,27,32],eg=gr&&"CompositionEvent"in window,_a=null;gr&&"documentMode"in document&&(_a=document.documentMode);var C4=gr&&"TextEvent"in window&&!_a,gE=gr&&(!eg||_a&&8<_a&&11>=_a),my=" ",gy=!1;function yE(t,e){switch(t){case"keyup":return x4.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function R4(t,e){switch(t){case"compositionend":return vE(e);case"keypress":return e.which!==32?null:(gy=!0,my);case"textInput":return t=e.data,t===my&&gy?null:t;default:return null}}function P4(t,e){if(Ps)return t==="compositionend"||!eg&&yE(t,e)?(t=mE(),ju=Xm=Hr=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gE&&e.locale!=="ko"?null:e.data;default:return null}}var A4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!A4[t.type]:e==="textarea"}function _E(t,e,n,r){Yw(r),e=gc(e,"onChange"),0<e.length&&(n=new Jm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wa=null,za=null;function b4(t){bE(t,0)}function Ed(t){var e=ks(t);if(Bw(e))return t}function k4(t,e){if(t==="change")return e}var wE=!1;if(gr){var tf;if(gr){var nf="oninput"in document;if(!nf){var vy=document.createElement("div");vy.setAttribute("oninput","return;"),nf=typeof vy.oninput=="function"}tf=nf}else tf=!1;wE=tf&&(!document.documentMode||9<document.documentMode)}function _y(){wa&&(wa.detachEvent("onpropertychange",EE),za=wa=null)}function EE(t){if(t.propertyName==="value"&&Ed(za)){var e=[];_E(e,za,t,qm(t)),eE(b4,e)}}function N4(t,e,n){t==="focusin"?(_y(),wa=e,za=n,wa.attachEvent("onpropertychange",EE)):t==="focusout"&&_y()}function O4(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ed(za)}function D4(t,e){if(t==="click")return Ed(e)}function L4(t,e){if(t==="input"||t==="change")return Ed(e)}function M4(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pn=typeof Object.is=="function"?Object.is:M4;function Ua(t,e){if(Pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yf.call(e,i)||!Pn(t[i],e[i]))return!1}return!0}function wy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ey(t,e){var n=wy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wy(n)}}function SE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?SE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function TE(){for(var t=window,e=uc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=uc(t.document)}return e}function tg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function j4(t){var e=TE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&SE(n.ownerDocument.documentElement,n)){if(r!==null&&tg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ey(n,s);var o=Ey(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var V4=gr&&"documentMode"in document&&11>=document.documentMode,As=null,mp=null,Ea=null,gp=!1;function Sy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gp||As==null||As!==uc(r)||(r=As,"selectionStart"in r&&tg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ea&&Ua(Ea,r)||(Ea=r,r=gc(mp,"onSelect"),0<r.length&&(e=new Jm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=As)))}function uu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bs={animationend:uu("Animation","AnimationEnd"),animationiteration:uu("Animation","AnimationIteration"),animationstart:uu("Animation","AnimationStart"),transitionend:uu("Transition","TransitionEnd")},rf={},IE={};gr&&(IE=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Sd(t){if(rf[t])return rf[t];if(!bs[t])return t;var e=bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in IE)return rf[t]=e[n];return t}var xE=Sd("animationend"),CE=Sd("animationiteration"),RE=Sd("animationstart"),PE=Sd("transitionend"),AE=new Map,Ty="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mi(t,e){AE.set(t,e),ls(e,[t])}for(var sf=0;sf<Ty.length;sf++){var of=Ty[sf],F4=of.toLowerCase(),z4=of[0].toUpperCase()+of.slice(1);mi(F4,"on"+z4)}mi(xE,"onAnimationEnd");mi(CE,"onAnimationIteration");mi(RE,"onAnimationStart");mi("dblclick","onDoubleClick");mi("focusin","onFocus");mi("focusout","onBlur");mi(PE,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U4=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Iy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,FC(r,e,void 0,t),t.currentTarget=null}function bE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Iy(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Iy(i,a,c),s=u}}}if(dc)throw t=dp,dc=!1,dp=null,t}function _e(t,e){var n=e[Ep];n===void 0&&(n=e[Ep]=new Set);var r=t+"__bubble";n.has(r)||(kE(e,t,2,!1),n.add(r))}function af(t,e,n){var r=0;e&&(r|=4),kE(n,t,r,e)}var cu="_reactListening"+Math.random().toString(36).slice(2);function $a(t){if(!t[cu]){t[cu]=!0,Vw.forEach(function(n){n!=="selectionchange"&&(U4.has(n)||af(n,!1,t),af(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cu]||(e[cu]=!0,af("selectionchange",!1,e))}}function kE(t,e,n,r){switch(pE(e)){case 1:var i=t4;break;case 4:i=n4;break;default:i=Ym}n=i.bind(null,e,n,t),i=void 0,!cp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function lf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Mi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}eE(function(){var c=s,d=qm(n),h=[];e:{var g=AE.get(t);if(g!==void 0){var _=Jm,I=t;switch(t){case"keypress":if(Vu(n)===0)break e;case"keydown":case"keyup":_=y4;break;case"focusin":I="focus",_=ef;break;case"focusout":I="blur",_=ef;break;case"beforeblur":case"afterblur":_=ef;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=hy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=s4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=w4;break;case xE:case CE:case RE:_=l4;break;case PE:_=S4;break;case"scroll":_=r4;break;case"wheel":_=I4;break;case"copy":case"cut":case"paste":_=c4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=py}var R=(e&4)!==0,P=!R&&t==="scroll",E=R?g!==null?g+"Capture":null:g;R=[];for(var y=c,w;y!==null;){w=y;var C=w.stateNode;if(w.tag===5&&C!==null&&(w=C,E!==null&&(C=Ma(y,E),C!=null&&R.push(Ba(y,C,w)))),P)break;y=y.return}0<R.length&&(g=new _(g,I,null,n,d),h.push({event:g,listeners:R}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",g&&n!==lp&&(I=n.relatedTarget||n.fromElement)&&(Mi(I)||I[yr]))break e;if((_||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,_?(I=n.relatedTarget||n.toElement,_=c,I=I?Mi(I):null,I!==null&&(P=us(I),I!==P||I.tag!==5&&I.tag!==6)&&(I=null)):(_=null,I=c),_!==I)){if(R=hy,C="onMouseLeave",E="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(R=py,C="onPointerLeave",E="onPointerEnter",y="pointer"),P=_==null?g:ks(_),w=I==null?g:ks(I),g=new R(C,y+"leave",_,n,d),g.target=P,g.relatedTarget=w,C=null,Mi(d)===c&&(R=new R(E,y+"enter",I,n,d),R.target=w,R.relatedTarget=P,C=R),P=C,_&&I)t:{for(R=_,E=I,y=0,w=R;w;w=Es(w))y++;for(w=0,C=E;C;C=Es(C))w++;for(;0<y-w;)R=Es(R),y--;for(;0<w-y;)E=Es(E),w--;for(;y--;){if(R===E||E!==null&&R===E.alternate)break t;R=Es(R),E=Es(E)}R=null}else R=null;_!==null&&xy(h,g,_,R,!1),I!==null&&P!==null&&xy(h,P,I,R,!0)}}e:{if(g=c?ks(c):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var N=k4;else if(yy(g))if(wE)N=L4;else{N=O4;var D=N4}else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(N=D4);if(N&&(N=N(t,c))){_E(h,N,n,d);break e}D&&D(t,g,c),t==="focusout"&&(D=g._wrapperState)&&D.controlled&&g.type==="number"&&rp(g,"number",g.value)}switch(D=c?ks(c):window,t){case"focusin":(yy(D)||D.contentEditable==="true")&&(As=D,mp=c,Ea=null);break;case"focusout":Ea=mp=As=null;break;case"mousedown":gp=!0;break;case"contextmenu":case"mouseup":case"dragend":gp=!1,Sy(h,n,d);break;case"selectionchange":if(V4)break;case"keydown":case"keyup":Sy(h,n,d)}var T;if(eg)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ps?yE(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(gE&&n.locale!=="ko"&&(Ps||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ps&&(T=mE()):(Hr=d,Xm="value"in Hr?Hr.value:Hr.textContent,Ps=!0)),D=gc(c,v),0<D.length&&(v=new fy(v,t,null,n,d),h.push({event:v,listeners:D}),T?v.data=T:(T=vE(n),T!==null&&(v.data=T)))),(T=C4?R4(t,n):P4(t,n))&&(c=gc(c,"onBeforeInput"),0<c.length&&(d=new fy("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=T))}bE(h,e)})}function Ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ma(t,n),s!=null&&r.unshift(Ba(t,s,i)),s=Ma(t,e),s!=null&&r.push(Ba(t,s,i))),t=t.return}return r}function Es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Ma(n,s),u!=null&&o.unshift(Ba(n,u,a))):i||(u=Ma(n,s),u!=null&&o.push(Ba(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $4=/\r\n?/g,B4=/\u0000|\uFFFD/g;function Cy(t){return(typeof t=="string"?t:""+t).replace($4,`
`).replace(B4,"")}function du(t,e,n){if(e=Cy(e),Cy(t)!==e&&n)throw Error(z(425))}function yc(){}var yp=null,vp=null;function _p(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wp=typeof setTimeout=="function"?setTimeout:void 0,W4=typeof clearTimeout=="function"?clearTimeout:void 0,Ry=typeof Promise=="function"?Promise:void 0,H4=typeof queueMicrotask=="function"?queueMicrotask:typeof Ry<"u"?function(t){return Ry.resolve(null).then(t).catch(q4)}:wp;function q4(t){setTimeout(function(){throw t})}function uf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Fa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fa(e)}function Jr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Py(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var To=Math.random().toString(36).slice(2),Ln="__reactFiber$"+To,Wa="__reactProps$"+To,yr="__reactContainer$"+To,Ep="__reactEvents$"+To,K4="__reactListeners$"+To,G4="__reactHandles$"+To;function Mi(t){var e=t[Ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yr]||n[Ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Py(t);t!==null;){if(n=t[Ln])return n;t=Py(t)}return e}t=n,n=t.parentNode}return null}function gl(t){return t=t[Ln]||t[yr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Td(t){return t[Wa]||null}var Sp=[],Ns=-1;function gi(t){return{current:t}}function Ee(t){0>Ns||(t.current=Sp[Ns],Sp[Ns]=null,Ns--)}function ye(t,e){Ns++,Sp[Ns]=t.current,t.current=e}var ui={},yt=gi(ui),Lt=gi(!1),Qi=ui;function Zs(t,e){var n=t.type.contextTypes;if(!n)return ui;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Mt(t){return t=t.childContextTypes,t!=null}function vc(){Ee(Lt),Ee(yt)}function Ay(t,e,n){if(yt.current!==ui)throw Error(z(168));ye(yt,e),ye(Lt,n)}function NE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,NC(t)||"Unknown",i));return Pe({},n,r)}function _c(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ui,Qi=yt.current,ye(yt,t),ye(Lt,Lt.current),!0}function by(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=NE(t,e,Qi),r.__reactInternalMemoizedMergedChildContext=t,Ee(Lt),Ee(yt),ye(yt,t)):Ee(Lt),ye(Lt,n)}var sr=null,Id=!1,cf=!1;function OE(t){sr===null?sr=[t]:sr.push(t)}function Q4(t){Id=!0,OE(t)}function yi(){if(!cf&&sr!==null){cf=!0;var t=0,e=fe;try{var n=sr;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sr=null,Id=!1}catch(i){throw sr!==null&&(sr=sr.slice(t+1)),iE(Km,yi),i}finally{fe=e,cf=!1}}return null}var Os=[],Ds=0,wc=null,Ec=0,tn=[],nn=0,Yi=null,ar=1,lr="";function ki(t,e){Os[Ds++]=Ec,Os[Ds++]=wc,wc=t,Ec=e}function DE(t,e,n){tn[nn++]=ar,tn[nn++]=lr,tn[nn++]=Yi,Yi=t;var r=ar;t=lr;var i=32-Tn(r)-1;r&=~(1<<i),n+=1;var s=32-Tn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ar=1<<32-Tn(e)+i|n<<i|r,lr=s+t}else ar=1<<s|n<<i|r,lr=t}function ng(t){t.return!==null&&(ki(t,1),DE(t,1,0))}function rg(t){for(;t===wc;)wc=Os[--Ds],Os[Ds]=null,Ec=Os[--Ds],Os[Ds]=null;for(;t===Yi;)Yi=tn[--nn],tn[nn]=null,lr=tn[--nn],tn[nn]=null,ar=tn[--nn],tn[nn]=null}var Kt=null,Wt=null,Ie=!1,yn=null;function LE(t,e){var n=sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ky(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Kt=t,Wt=Jr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kt=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yi!==null?{id:ar,overflow:lr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Kt=t,Wt=null,!0):!1;default:return!1}}function Tp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ip(t){if(Ie){var e=Wt;if(e){var n=e;if(!ky(t,e)){if(Tp(t))throw Error(z(418));e=Jr(n.nextSibling);var r=Kt;e&&ky(t,e)?LE(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Kt=t)}}else{if(Tp(t))throw Error(z(418));t.flags=t.flags&-4097|2,Ie=!1,Kt=t}}}function Ny(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function hu(t){if(t!==Kt)return!1;if(!Ie)return Ny(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_p(t.type,t.memoizedProps)),e&&(e=Wt)){if(Tp(t))throw ME(),Error(z(418));for(;e;)LE(t,e),e=Jr(e.nextSibling)}if(Ny(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wt=Jr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=Kt?Jr(t.stateNode.nextSibling):null;return!0}function ME(){for(var t=Wt;t;)t=Jr(t.nextSibling)}function eo(){Wt=Kt=null,Ie=!1}function ig(t){yn===null?yn=[t]:yn.push(t)}var Y4=Cr.ReactCurrentBatchConfig;function Xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function fu(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Oy(t){var e=t._init;return e(t._payload)}function jE(t){function e(E,y){if(t){var w=E.deletions;w===null?(E.deletions=[y],E.flags|=16):w.push(y)}}function n(E,y){if(!t)return null;for(;y!==null;)e(E,y),y=y.sibling;return null}function r(E,y){for(E=new Map;y!==null;)y.key!==null?E.set(y.key,y):E.set(y.index,y),y=y.sibling;return E}function i(E,y){return E=ni(E,y),E.index=0,E.sibling=null,E}function s(E,y,w){return E.index=w,t?(w=E.alternate,w!==null?(w=w.index,w<y?(E.flags|=2,y):w):(E.flags|=2,y)):(E.flags|=1048576,y)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,y,w,C){return y===null||y.tag!==6?(y=yf(w,E.mode,C),y.return=E,y):(y=i(y,w),y.return=E,y)}function u(E,y,w,C){var N=w.type;return N===Rs?d(E,y,w.props.children,C,w.key):y!==null&&(y.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Mr&&Oy(N)===y.type)?(C=i(y,w.props),C.ref=Xo(E,y,w),C.return=E,C):(C=Hu(w.type,w.key,w.props,null,E.mode,C),C.ref=Xo(E,y,w),C.return=E,C)}function c(E,y,w,C){return y===null||y.tag!==4||y.stateNode.containerInfo!==w.containerInfo||y.stateNode.implementation!==w.implementation?(y=vf(w,E.mode,C),y.return=E,y):(y=i(y,w.children||[]),y.return=E,y)}function d(E,y,w,C,N){return y===null||y.tag!==7?(y=Bi(w,E.mode,C,N),y.return=E,y):(y=i(y,w),y.return=E,y)}function h(E,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return y=yf(""+y,E.mode,w),y.return=E,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nu:return w=Hu(y.type,y.key,y.props,null,E.mode,w),w.ref=Xo(E,null,y),w.return=E,w;case Cs:return y=vf(y,E.mode,w),y.return=E,y;case Mr:var C=y._init;return h(E,C(y._payload),w)}if(ra(y)||qo(y))return y=Bi(y,E.mode,w,null),y.return=E,y;fu(E,y)}return null}function g(E,y,w,C){var N=y!==null?y.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return N!==null?null:a(E,y,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case nu:return w.key===N?u(E,y,w,C):null;case Cs:return w.key===N?c(E,y,w,C):null;case Mr:return N=w._init,g(E,y,N(w._payload),C)}if(ra(w)||qo(w))return N!==null?null:d(E,y,w,C,null);fu(E,w)}return null}function _(E,y,w,C,N){if(typeof C=="string"&&C!==""||typeof C=="number")return E=E.get(w)||null,a(y,E,""+C,N);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case nu:return E=E.get(C.key===null?w:C.key)||null,u(y,E,C,N);case Cs:return E=E.get(C.key===null?w:C.key)||null,c(y,E,C,N);case Mr:var D=C._init;return _(E,y,w,D(C._payload),N)}if(ra(C)||qo(C))return E=E.get(w)||null,d(y,E,C,N,null);fu(y,C)}return null}function I(E,y,w,C){for(var N=null,D=null,T=y,v=y=0,x=null;T!==null&&v<w.length;v++){T.index>v?(x=T,T=null):x=T.sibling;var A=g(E,T,w[v],C);if(A===null){T===null&&(T=x);break}t&&T&&A.alternate===null&&e(E,T),y=s(A,y,v),D===null?N=A:D.sibling=A,D=A,T=x}if(v===w.length)return n(E,T),Ie&&ki(E,v),N;if(T===null){for(;v<w.length;v++)T=h(E,w[v],C),T!==null&&(y=s(T,y,v),D===null?N=T:D.sibling=T,D=T);return Ie&&ki(E,v),N}for(T=r(E,T);v<w.length;v++)x=_(T,E,v,w[v],C),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?v:x.key),y=s(x,y,v),D===null?N=x:D.sibling=x,D=x);return t&&T.forEach(function(b){return e(E,b)}),Ie&&ki(E,v),N}function R(E,y,w,C){var N=qo(w);if(typeof N!="function")throw Error(z(150));if(w=N.call(w),w==null)throw Error(z(151));for(var D=N=null,T=y,v=y=0,x=null,A=w.next();T!==null&&!A.done;v++,A=w.next()){T.index>v?(x=T,T=null):x=T.sibling;var b=g(E,T,A.value,C);if(b===null){T===null&&(T=x);break}t&&T&&b.alternate===null&&e(E,T),y=s(b,y,v),D===null?N=b:D.sibling=b,D=b,T=x}if(A.done)return n(E,T),Ie&&ki(E,v),N;if(T===null){for(;!A.done;v++,A=w.next())A=h(E,A.value,C),A!==null&&(y=s(A,y,v),D===null?N=A:D.sibling=A,D=A);return Ie&&ki(E,v),N}for(T=r(E,T);!A.done;v++,A=w.next())A=_(T,E,v,A.value,C),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?v:A.key),y=s(A,y,v),D===null?N=A:D.sibling=A,D=A);return t&&T.forEach(function(O){return e(E,O)}),Ie&&ki(E,v),N}function P(E,y,w,C){if(typeof w=="object"&&w!==null&&w.type===Rs&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case nu:e:{for(var N=w.key,D=y;D!==null;){if(D.key===N){if(N=w.type,N===Rs){if(D.tag===7){n(E,D.sibling),y=i(D,w.props.children),y.return=E,E=y;break e}}else if(D.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Mr&&Oy(N)===D.type){n(E,D.sibling),y=i(D,w.props),y.ref=Xo(E,D,w),y.return=E,E=y;break e}n(E,D);break}else e(E,D);D=D.sibling}w.type===Rs?(y=Bi(w.props.children,E.mode,C,w.key),y.return=E,E=y):(C=Hu(w.type,w.key,w.props,null,E.mode,C),C.ref=Xo(E,y,w),C.return=E,E=C)}return o(E);case Cs:e:{for(D=w.key;y!==null;){if(y.key===D)if(y.tag===4&&y.stateNode.containerInfo===w.containerInfo&&y.stateNode.implementation===w.implementation){n(E,y.sibling),y=i(y,w.children||[]),y.return=E,E=y;break e}else{n(E,y);break}else e(E,y);y=y.sibling}y=vf(w,E.mode,C),y.return=E,E=y}return o(E);case Mr:return D=w._init,P(E,y,D(w._payload),C)}if(ra(w))return I(E,y,w,C);if(qo(w))return R(E,y,w,C);fu(E,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,y!==null&&y.tag===6?(n(E,y.sibling),y=i(y,w),y.return=E,E=y):(n(E,y),y=yf(w,E.mode,C),y.return=E,E=y),o(E)):n(E,y)}return P}var to=jE(!0),VE=jE(!1),Sc=gi(null),Tc=null,Ls=null,sg=null;function og(){sg=Ls=Tc=null}function ag(t){var e=Sc.current;Ee(Sc),t._currentValue=e}function xp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Bs(t,e){Tc=t,sg=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function an(t){var e=t._currentValue;if(sg!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(Tc===null)throw Error(z(308));Ls=t,Tc.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var ji=null;function lg(t){ji===null?ji=[t]:ji.push(t)}function FE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lg(e)):(n.next=i.next,i.next=n),e.interleaved=n,vr(t,r)}function vr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jr=!1;function ug(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,vr(t,n)}return i=r.interleaved,i===null?(e.next=e,lg(r)):(e.next=i.next,i.next=e),r.interleaved=e,vr(t,n)}function Fu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gm(t,n)}}function Dy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ic(t,e,n,r){var i=t.updateQueue;jr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,d=c=u=null,a=s;do{var g=a.lane,_=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,R=a;switch(g=e,_=n,R.tag){case 1:if(I=R.payload,typeof I=="function"){h=I.call(_,h,g);break e}h=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=R.payload,g=typeof I=="function"?I.call(_,h,g):I,g==null)break e;h=Pe({},h,g);break e;case 2:jr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else _={eventTime:_,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=_,u=h):d=d.next=_,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ji|=o,t.lanes=o,t.memoizedState=h}}function Ly(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var yl={},Fn=gi(yl),Ha=gi(yl),qa=gi(yl);function Vi(t){if(t===yl)throw Error(z(174));return t}function cg(t,e){switch(ye(qa,e),ye(Ha,t),ye(Fn,yl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sp(e,t)}Ee(Fn),ye(Fn,e)}function no(){Ee(Fn),Ee(Ha),Ee(qa)}function UE(t){Vi(qa.current);var e=Vi(Fn.current),n=sp(e,t.type);e!==n&&(ye(Ha,t),ye(Fn,n))}function dg(t){Ha.current===t&&(Ee(Fn),Ee(Ha))}var xe=gi(0);function xc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var df=[];function hg(){for(var t=0;t<df.length;t++)df[t]._workInProgressVersionPrimary=null;df.length=0}var zu=Cr.ReactCurrentDispatcher,hf=Cr.ReactCurrentBatchConfig,Xi=0,Re=null,$e=null,qe=null,Cc=!1,Sa=!1,Ka=0,X4=0;function lt(){throw Error(z(321))}function fg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pn(t[n],e[n]))return!1;return!0}function pg(t,e,n,r,i,s){if(Xi=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zu.current=t===null||t.memoizedState===null?t5:n5,t=n(r,i),Sa){s=0;do{if(Sa=!1,Ka=0,25<=s)throw Error(z(301));s+=1,qe=$e=null,e.updateQueue=null,zu.current=r5,t=n(r,i)}while(Sa)}if(zu.current=Rc,e=$e!==null&&$e.next!==null,Xi=0,qe=$e=Re=null,Cc=!1,e)throw Error(z(300));return t}function mg(){var t=Ka!==0;return Ka=0,t}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Re.memoizedState=qe=t:qe=qe.next=t,qe}function ln(){if($e===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=qe===null?Re.memoizedState:qe.next;if(e!==null)qe=e,$e=t;else{if(t===null)throw Error(z(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},qe===null?Re.memoizedState=qe=t:qe=qe.next=t}return qe}function Ga(t,e){return typeof e=="function"?e(t):e}function ff(t){var e=ln(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=$e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Xi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,Re.lanes|=d,Ji|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Pn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,Ji|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pf(t){var e=ln(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Pn(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $E(){}function BE(t,e){var n=Re,r=ln(),i=e(),s=!Pn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,gg(qE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Qa(9,HE.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(z(349));Xi&30||WE(n,e,i)}return i}function WE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function HE(t,e,n,r){e.value=n,e.getSnapshot=r,KE(e)&&GE(t)}function qE(t,e,n){return n(function(){KE(e)&&GE(t)})}function KE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pn(t,n)}catch{return!0}}function GE(t){var e=vr(t,1);e!==null&&In(e,t,1,-1)}function My(t){var e=On();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},e.queue=t,t=t.dispatch=e5.bind(null,Re,t),[e.memoizedState,t]}function Qa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function QE(){return ln().memoizedState}function Uu(t,e,n,r){var i=On();Re.flags|=t,i.memoizedState=Qa(1|e,n,void 0,r===void 0?null:r)}function xd(t,e,n,r){var i=ln();r=r===void 0?null:r;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,r!==null&&fg(r,o.deps)){i.memoizedState=Qa(e,n,s,r);return}}Re.flags|=t,i.memoizedState=Qa(1|e,n,s,r)}function jy(t,e){return Uu(8390656,8,t,e)}function gg(t,e){return xd(2048,8,t,e)}function YE(t,e){return xd(4,2,t,e)}function XE(t,e){return xd(4,4,t,e)}function JE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ZE(t,e,n){return n=n!=null?n.concat([t]):null,xd(4,4,JE.bind(null,e,t),n)}function yg(){}function e2(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function t2(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function n2(t,e,n){return Xi&21?(Pn(n,e)||(n=aE(),Re.lanes|=n,Ji|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function J4(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=hf.transition;hf.transition={};try{t(!1),e()}finally{fe=n,hf.transition=r}}function r2(){return ln().memoizedState}function Z4(t,e,n){var r=ti(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},i2(t))s2(e,n);else if(n=FE(t,e,n,r),n!==null){var i=Ct();In(n,t,r,i),o2(n,e,r)}}function e5(t,e,n){var r=ti(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(i2(t))s2(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Pn(a,o)){var u=e.interleaved;u===null?(i.next=i,lg(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=FE(t,e,i,r),n!==null&&(i=Ct(),In(n,t,r,i),o2(n,e,r))}}function i2(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function s2(t,e){Sa=Cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function o2(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gm(t,n)}}var Rc={readContext:an,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},t5={readContext:an,useCallback:function(t,e){return On().memoizedState=[t,e===void 0?null:e],t},useContext:an,useEffect:jy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uu(4194308,4,JE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uu(4,2,t,e)},useMemo:function(t,e){var n=On();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=On();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Z4.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=On();return t={current:t},e.memoizedState=t},useState:My,useDebugValue:yg,useDeferredValue:function(t){return On().memoizedState=t},useTransition:function(){var t=My(!1),e=t[0];return t=J4.bind(null,t[1]),On().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=On();if(Ie){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),Ge===null)throw Error(z(349));Xi&30||WE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,jy(qE.bind(null,r,s,t),[t]),r.flags|=2048,Qa(9,HE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=On(),e=Ge.identifierPrefix;if(Ie){var n=lr,r=ar;n=(r&~(1<<32-Tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=X4++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},n5={readContext:an,useCallback:e2,useContext:an,useEffect:gg,useImperativeHandle:ZE,useInsertionEffect:YE,useLayoutEffect:XE,useMemo:t2,useReducer:ff,useRef:QE,useState:function(){return ff(Ga)},useDebugValue:yg,useDeferredValue:function(t){var e=ln();return n2(e,$e.memoizedState,t)},useTransition:function(){var t=ff(Ga)[0],e=ln().memoizedState;return[t,e]},useMutableSource:$E,useSyncExternalStore:BE,useId:r2,unstable_isNewReconciler:!1},r5={readContext:an,useCallback:e2,useContext:an,useEffect:gg,useImperativeHandle:ZE,useInsertionEffect:YE,useLayoutEffect:XE,useMemo:t2,useReducer:pf,useRef:QE,useState:function(){return pf(Ga)},useDebugValue:yg,useDeferredValue:function(t){var e=ln();return $e===null?e.memoizedState=t:n2(e,$e.memoizedState,t)},useTransition:function(){var t=pf(Ga)[0],e=ln().memoizedState;return[t,e]},useMutableSource:$E,useSyncExternalStore:BE,useId:r2,unstable_isNewReconciler:!1};function mn(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cd={isMounted:function(t){return(t=t._reactInternals)?us(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=ti(t),s=hr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zr(t,s,i),e!==null&&(In(e,t,i,r),Fu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=ti(t),s=hr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zr(t,s,i),e!==null&&(In(e,t,i,r),Fu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ct(),r=ti(t),i=hr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zr(t,i,r),e!==null&&(In(e,t,r,n),Fu(e,t,r))}};function Vy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ua(n,r)||!Ua(i,s):!0}function a2(t,e,n){var r=!1,i=ui,s=e.contextType;return typeof s=="object"&&s!==null?s=an(s):(i=Mt(e)?Qi:yt.current,r=e.contextTypes,s=(r=r!=null)?Zs(t,i):ui),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Fy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Cd.enqueueReplaceState(e,e.state,null)}function Rp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ug(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=an(s):(s=Mt(e)?Qi:yt.current,i.context=Zs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Cd.enqueueReplaceState(i,i.state,null),Ic(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ro(t,e){try{var n="",r=e;do n+=kC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function mf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var i5=typeof WeakMap=="function"?WeakMap:Map;function l2(t,e,n){n=hr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ac||(Ac=!0,Vp=r),Pp(t,e)},n}function u2(t,e,n){n=hr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Pp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pp(t,e),typeof r!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function zy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new i5;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=v5.bind(null,t,e,n),e.then(t,t))}function Uy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $y(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hr(-1,1),e.tag=2,Zr(n,e,1))),n.lanes|=1),t)}var s5=Cr.ReactCurrentOwner,Ot=!1;function It(t,e,n,r){e.child=t===null?VE(e,null,n,r):to(e,t.child,n,r)}function By(t,e,n,r,i){n=n.render;var s=e.ref;return Bs(e,i),r=pg(t,e,n,r,s,i),n=mg(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_r(t,e,i)):(Ie&&n&&ng(e),e.flags|=1,It(t,e,r,i),e.child)}function Wy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!xg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,c2(t,e,s,r,i)):(t=Hu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(o,r)&&t.ref===e.ref)return _r(t,e,i)}return e.flags|=1,t=ni(s,r),t.ref=e.ref,t.return=e,e.child=t}function c2(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ua(s,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,_r(t,e,i)}return Ap(t,e,n,r,i)}function d2(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(js,$t),$t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(js,$t),$t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(js,$t),$t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(js,$t),$t|=r;return It(t,e,i,n),e.child}function h2(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ap(t,e,n,r,i){var s=Mt(n)?Qi:yt.current;return s=Zs(e,s),Bs(e,i),n=pg(t,e,n,r,s,i),r=mg(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_r(t,e,i)):(Ie&&r&&ng(e),e.flags|=1,It(t,e,n,i),e.child)}function Hy(t,e,n,r,i){if(Mt(n)){var s=!0;_c(e)}else s=!1;if(Bs(e,i),e.stateNode===null)$u(t,e),a2(e,n,r),Rp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=an(c):(c=Mt(n)?Qi:yt.current,c=Zs(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Fy(e,o,r,c),jr=!1;var g=e.memoizedState;o.state=g,Ic(e,r,o,i),u=e.memoizedState,a!==r||g!==u||Lt.current||jr?(typeof d=="function"&&(Cp(e,n,d,r),u=e.memoizedState),(a=jr||Vy(e,n,a,r,g,u,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,zE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:mn(e.type,a),o.props=c,h=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=an(u):(u=Mt(n)?Qi:yt.current,u=Zs(e,u));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||g!==u)&&Fy(e,o,r,u),jr=!1,g=e.memoizedState,o.state=g,Ic(e,r,o,i);var I=e.memoizedState;a!==h||g!==I||Lt.current||jr?(typeof _=="function"&&(Cp(e,n,_,r),I=e.memoizedState),(c=jr||Vy(e,n,c,r,g,I,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return bp(t,e,n,r,s,i)}function bp(t,e,n,r,i,s){h2(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&by(e,n,!1),_r(t,e,s);r=e.stateNode,s5.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=to(e,t.child,null,s),e.child=to(e,null,a,s)):It(t,e,a,s),e.memoizedState=r.state,i&&by(e,n,!0),e.child}function f2(t){var e=t.stateNode;e.pendingContext?Ay(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ay(t,e.context,!1),cg(t,e.containerInfo)}function qy(t,e,n,r,i){return eo(),ig(i),e.flags|=256,It(t,e,n,r),e.child}var kp={dehydrated:null,treeContext:null,retryLane:0};function Np(t){return{baseLanes:t,cachePool:null,transitions:null}}function p2(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(xe,i&1),t===null)return Ip(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ad(o,r,0,null),t=Bi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Np(n),e.memoizedState=kp,t):vg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return o5(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ni(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ni(a,s):(s=Bi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Np(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kp,r}return s=t.child,t=s.sibling,r=ni(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vg(t,e){return e=Ad({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pu(t,e,n,r){return r!==null&&ig(r),to(e,t.child,null,n),t=vg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function o5(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=mf(Error(z(422))),pu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ad({mode:"visible",children:r.children},i,0,null),s=Bi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&to(e,t.child,null,o),e.child.memoizedState=Np(o),e.memoizedState=kp,s);if(!(e.mode&1))return pu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=mf(s,r,void 0),pu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,vr(t,i),In(r,t,i,-1))}return Ig(),r=mf(Error(z(421))),pu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_5.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Wt=Jr(i.nextSibling),Kt=e,Ie=!0,yn=null,t!==null&&(tn[nn++]=ar,tn[nn++]=lr,tn[nn++]=Yi,ar=t.id,lr=t.overflow,Yi=e),e=vg(e,r.children),e.flags|=4096,e)}function Ky(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xp(t.return,e,n)}function gf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function m2(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(It(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ky(t,n,e);else if(t.tag===19)Ky(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&xc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&xc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gf(e,!0,n,null,s);break;case"together":gf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $u(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _r(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ji|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=ni(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ni(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function a5(t,e,n){switch(e.tag){case 3:f2(e),eo();break;case 5:UE(e);break;case 1:Mt(e.type)&&_c(e);break;case 4:cg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Sc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?p2(t,e,n):(ye(xe,xe.current&1),t=_r(t,e,n),t!==null?t.sibling:null);ye(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return m2(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,d2(t,e,n)}return _r(t,e,n)}var g2,Op,y2,v2;g2=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Op=function(){};y2=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Vi(Fn.current);var s=null;switch(n){case"input":i=tp(t,i),r=tp(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=ip(t,i),r=ip(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=yc)}op(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Da.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Da.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&_e("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};v2=function(t,e,n,r){n!==r&&(e.flags|=4)};function Jo(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function l5(t,e,n){var r=e.pendingProps;switch(rg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return Mt(e.type)&&vc(),ut(e),null;case 3:return r=e.stateNode,no(),Ee(Lt),Ee(yt),hg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(hu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yn!==null&&(Up(yn),yn=null))),Op(t,e),ut(e),null;case 5:dg(e);var i=Vi(qa.current);if(n=e.type,t!==null&&e.stateNode!=null)y2(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return ut(e),null}if(t=Vi(Fn.current),hu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ln]=e,r[Wa]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<sa.length;i++)_e(sa[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":ny(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":iy(r,s),_e("invalid",r)}op(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&du(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&du(r.textContent,a,t),i=["children",""+a]):Da.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":ru(r),ry(r,s,!0);break;case"textarea":ru(r),sy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=yc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ln]=e,t[Wa]=r,g2(t,e,!1,!1),e.stateNode=t;e:{switch(o=ap(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<sa.length;i++)_e(sa[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":ny(t,r),i=tp(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),_e("invalid",t);break;case"textarea":iy(t,r),i=ip(t,r),_e("invalid",t);break;default:i=r}op(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Qw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Kw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&La(t,u):typeof u=="number"&&La(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Da.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&$m(t,s,u,o))}switch(n){case"input":ru(t),ry(t,r,!1);break;case"textarea":ru(t),sy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+li(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=yc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)v2(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Vi(qa.current),Vi(Fn.current),hu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ln]=e,(s=r.nodeValue!==n)&&(t=Kt,t!==null))switch(t.tag){case 3:du(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&du(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ln]=e,e.stateNode=r}return ut(e),null;case 13:if(Ee(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Wt!==null&&e.mode&1&&!(e.flags&128))ME(),eo(),e.flags|=98560,s=!1;else if(s=hu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[Ln]=e}else eo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ut(e),s=!1}else yn!==null&&(Up(yn),yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?Be===0&&(Be=3):Ig())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return no(),Op(t,e),t===null&&$a(e.stateNode.containerInfo),ut(e),null;case 10:return ag(e.type._context),ut(e),null;case 17:return Mt(e.type)&&vc(),ut(e),null;case 19:if(Ee(xe),s=e.memoizedState,s===null)return ut(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Jo(s,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xc(t),o!==null){for(e.flags|=128,Jo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Me()>io&&(e.flags|=128,r=!0,Jo(s,!1),e.lanes=4194304)}else{if(!r)if(t=xc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return ut(e),null}else 2*Me()-s.renderingStartTime>io&&n!==1073741824&&(e.flags|=128,r=!0,Jo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Me(),e.sibling=null,n=xe.current,ye(xe,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return Tg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$t&1073741824&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function u5(t,e){switch(rg(e),e.tag){case 1:return Mt(e.type)&&vc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return no(),Ee(Lt),Ee(yt),hg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dg(e),null;case 13:if(Ee(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));eo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(xe),null;case 4:return no(),null;case 10:return ag(e.type._context),null;case 22:case 23:return Tg(),null;case 24:return null;default:return null}}var mu=!1,pt=!1,c5=typeof WeakSet=="function"?WeakSet:Set,W=null;function Ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function Dp(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var Gy=!1;function d5(t,e){if(yp=pc,t=TE(),tg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,h=t,g=null;t:for(;;){for(var _;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)g=h,h=_;for(;;){if(h===t)break t;if(g===n&&++c===i&&(a=o),g===s&&++d===r&&(u=o),(_=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(vp={focusedElem:t,selectionRange:n},pc=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var R=I.memoizedProps,P=I.memoizedState,E=e.stateNode,y=E.getSnapshotBeforeUpdate(e.elementType===e.type?R:mn(e.type,R),P);E.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(C){Ne(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return I=Gy,Gy=!1,I}function Ta(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Dp(e,n,s)}i=i.next}while(i!==r)}}function Rd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Lp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _2(t){var e=t.alternate;e!==null&&(t.alternate=null,_2(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ln],delete e[Wa],delete e[Ep],delete e[K4],delete e[G4])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function w2(t){return t.tag===5||t.tag===3||t.tag===4}function Qy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||w2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yc));else if(r!==4&&(t=t.child,t!==null))for(Mp(t,e,n),t=t.sibling;t!==null;)Mp(t,e,n),t=t.sibling}function jp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jp(t,e,n),t=t.sibling;t!==null;)jp(t,e,n),t=t.sibling}var Je=null,gn=!1;function kr(t,e,n){for(n=n.child;n!==null;)E2(t,e,n),n=n.sibling}function E2(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(_d,n)}catch{}switch(n.tag){case 5:pt||Ms(n,e);case 6:var r=Je,i=gn;Je=null,kr(t,e,n),Je=r,gn=i,Je!==null&&(gn?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(gn?(t=Je,n=n.stateNode,t.nodeType===8?uf(t.parentNode,n):t.nodeType===1&&uf(t,n),Fa(t)):uf(Je,n.stateNode));break;case 4:r=Je,i=gn,Je=n.stateNode.containerInfo,gn=!0,kr(t,e,n),Je=r,gn=i;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Dp(n,e,o),i=i.next}while(i!==r)}kr(t,e,n);break;case 1:if(!pt&&(Ms(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ne(n,e,a)}kr(t,e,n);break;case 21:kr(t,e,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,kr(t,e,n),pt=r):kr(t,e,n);break;default:kr(t,e,n)}}function Yy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new c5),e.forEach(function(r){var i=w5.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function hn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Je=a.stateNode,gn=!1;break e;case 3:Je=a.stateNode.containerInfo,gn=!0;break e;case 4:Je=a.stateNode.containerInfo,gn=!0;break e}a=a.return}if(Je===null)throw Error(z(160));E2(s,o,i),Je=null,gn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ne(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)S2(e,t),e=e.sibling}function S2(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hn(e,t),bn(t),r&4){try{Ta(3,t,t.return),Rd(3,t)}catch(R){Ne(t,t.return,R)}try{Ta(5,t,t.return)}catch(R){Ne(t,t.return,R)}}break;case 1:hn(e,t),bn(t),r&512&&n!==null&&Ms(n,n.return);break;case 5:if(hn(e,t),bn(t),r&512&&n!==null&&Ms(n,n.return),t.flags&32){var i=t.stateNode;try{La(i,"")}catch(R){Ne(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ww(i,s),ap(a,o);var c=ap(a,s);for(o=0;o<u.length;o+=2){var d=u[o],h=u[o+1];d==="style"?Qw(i,h):d==="dangerouslySetInnerHTML"?Kw(i,h):d==="children"?La(i,h):$m(i,d,h,c)}switch(a){case"input":np(i,s);break;case"textarea":Hw(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Fs(i,!!s.multiple,_,!1):g!==!!s.multiple&&(s.defaultValue!=null?Fs(i,!!s.multiple,s.defaultValue,!0):Fs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wa]=s}catch(R){Ne(t,t.return,R)}}break;case 6:if(hn(e,t),bn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Ne(t,t.return,R)}}break;case 3:if(hn(e,t),bn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fa(e.containerInfo)}catch(R){Ne(t,t.return,R)}break;case 4:hn(e,t),bn(t);break;case 13:hn(e,t),bn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Eg=Me())),r&4&&Yy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(pt=(c=pt)||d,hn(e,t),pt=c):hn(e,t),bn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(h=W=d;W!==null;){switch(g=W,_=g.child,g.tag){case 0:case 11:case 14:case 15:Ta(4,g,g.return);break;case 1:Ms(g,g.return);var I=g.stateNode;if(typeof I.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(R){Ne(r,n,R)}}break;case 5:Ms(g,g.return);break;case 22:if(g.memoizedState!==null){Jy(h);continue}}_!==null?(_.return=g,W=_):Jy(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Gw("display",o))}catch(R){Ne(t,t.return,R)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(R){Ne(t,t.return,R)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:hn(e,t),bn(t),r&4&&Yy(t);break;case 21:break;default:hn(e,t),bn(t)}}function bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(w2(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(La(i,""),r.flags&=-33);var s=Qy(t);jp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Qy(t);Mp(t,a,o);break;default:throw Error(z(161))}}catch(u){Ne(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function h5(t,e,n){W=t,T2(t)}function T2(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||mu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||pt;a=mu;var c=pt;if(mu=o,(pt=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Zy(i):u!==null?(u.return=o,W=u):Zy(i);for(;s!==null;)W=s,T2(s),s=s.sibling;W=i,mu=a,pt=c}Xy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Xy(t)}}function Xy(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pt||Rd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ly(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ly(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Fa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}pt||e.flags&512&&Lp(e)}catch(g){Ne(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Jy(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Zy(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rd(4,e)}catch(u){Ne(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ne(e,i,u)}}var s=e.return;try{Lp(e)}catch(u){Ne(e,s,u)}break;case 5:var o=e.return;try{Lp(e)}catch(u){Ne(e,o,u)}}}catch(u){Ne(e,e.return,u)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var f5=Math.ceil,Pc=Cr.ReactCurrentDispatcher,_g=Cr.ReactCurrentOwner,on=Cr.ReactCurrentBatchConfig,ae=0,Ge=null,Fe=null,tt=0,$t=0,js=gi(0),Be=0,Ya=null,Ji=0,Pd=0,wg=0,Ia=null,Nt=null,Eg=0,io=1/0,rr=null,Ac=!1,Vp=null,ei=null,gu=!1,qr=null,bc=0,xa=0,Fp=null,Bu=-1,Wu=0;function Ct(){return ae&6?Me():Bu!==-1?Bu:Bu=Me()}function ti(t){return t.mode&1?ae&2&&tt!==0?tt&-tt:Y4.transition!==null?(Wu===0&&(Wu=aE()),Wu):(t=fe,t!==0||(t=window.event,t=t===void 0?16:pE(t.type)),t):1}function In(t,e,n,r){if(50<xa)throw xa=0,Fp=null,Error(z(185));pl(t,n,r),(!(ae&2)||t!==Ge)&&(t===Ge&&(!(ae&2)&&(Pd|=n),Be===4&&zr(t,tt)),jt(t,r),n===1&&ae===0&&!(e.mode&1)&&(io=Me()+500,Id&&yi()))}function jt(t,e){var n=t.callbackNode;YC(t,e);var r=fc(t,t===Ge?tt:0);if(r===0)n!==null&&ly(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ly(n),e===1)t.tag===0?Q4(ev.bind(null,t)):OE(ev.bind(null,t)),H4(function(){!(ae&6)&&yi()}),n=null;else{switch(lE(r)){case 1:n=Km;break;case 4:n=sE;break;case 16:n=hc;break;case 536870912:n=oE;break;default:n=hc}n=k2(n,I2.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function I2(t,e){if(Bu=-1,Wu=0,ae&6)throw Error(z(327));var n=t.callbackNode;if(Ws()&&t.callbackNode!==n)return null;var r=fc(t,t===Ge?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=kc(t,r);else{e=r;var i=ae;ae|=2;var s=C2();(Ge!==t||tt!==e)&&(rr=null,io=Me()+500,$i(t,e));do try{g5();break}catch(a){x2(t,a)}while(!0);og(),Pc.current=s,ae=i,Fe!==null?e=0:(Ge=null,tt=0,e=Be)}if(e!==0){if(e===2&&(i=hp(t),i!==0&&(r=i,e=zp(t,i))),e===1)throw n=Ya,$i(t,0),zr(t,r),jt(t,Me()),n;if(e===6)zr(t,r);else{if(i=t.current.alternate,!(r&30)&&!p5(i)&&(e=kc(t,r),e===2&&(s=hp(t),s!==0&&(r=s,e=zp(t,s))),e===1))throw n=Ya,$i(t,0),zr(t,r),jt(t,Me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Ni(t,Nt,rr);break;case 3:if(zr(t,r),(r&130023424)===r&&(e=Eg+500-Me(),10<e)){if(fc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wp(Ni.bind(null,t,Nt,rr),e);break}Ni(t,Nt,rr);break;case 4:if(zr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Tn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*f5(r/1960))-r,10<r){t.timeoutHandle=wp(Ni.bind(null,t,Nt,rr),r);break}Ni(t,Nt,rr);break;case 5:Ni(t,Nt,rr);break;default:throw Error(z(329))}}}return jt(t,Me()),t.callbackNode===n?I2.bind(null,t):null}function zp(t,e){var n=Ia;return t.current.memoizedState.isDehydrated&&($i(t,e).flags|=256),t=kc(t,e),t!==2&&(e=Nt,Nt=n,e!==null&&Up(e)),t}function Up(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function p5(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Pn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zr(t,e){for(e&=~wg,e&=~Pd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Tn(e),r=1<<n;t[n]=-1,e&=~r}}function ev(t){if(ae&6)throw Error(z(327));Ws();var e=fc(t,0);if(!(e&1))return jt(t,Me()),null;var n=kc(t,e);if(t.tag!==0&&n===2){var r=hp(t);r!==0&&(e=r,n=zp(t,r))}if(n===1)throw n=Ya,$i(t,0),zr(t,e),jt(t,Me()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ni(t,Nt,rr),jt(t,Me()),null}function Sg(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(io=Me()+500,Id&&yi())}}function Zi(t){qr!==null&&qr.tag===0&&!(ae&6)&&Ws();var e=ae;ae|=1;var n=on.transition,r=fe;try{if(on.transition=null,fe=1,t)return t()}finally{fe=r,on.transition=n,ae=e,!(ae&6)&&yi()}}function Tg(){$t=js.current,Ee(js)}function $i(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,W4(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(rg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vc();break;case 3:no(),Ee(Lt),Ee(yt),hg();break;case 5:dg(r);break;case 4:no();break;case 13:Ee(xe);break;case 19:Ee(xe);break;case 10:ag(r.type._context);break;case 22:case 23:Tg()}n=n.return}if(Ge=t,Fe=t=ni(t.current,null),tt=$t=e,Be=0,Ya=null,wg=Pd=Ji=0,Nt=Ia=null,ji!==null){for(e=0;e<ji.length;e++)if(n=ji[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ji=null}return t}function x2(t,e){do{var n=Fe;try{if(og(),zu.current=Rc,Cc){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cc=!1}if(Xi=0,qe=$e=Re=null,Sa=!1,Ka=0,_g.current=null,n===null||n.return===null){Be=1,Ya=e,Fe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=tt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Uy(o);if(_!==null){_.flags&=-257,$y(_,o,a,s,e),_.mode&1&&zy(s,c,e),e=_,u=c;var I=e.updateQueue;if(I===null){var R=new Set;R.add(u),e.updateQueue=R}else I.add(u);break e}else{if(!(e&1)){zy(s,c,e),Ig();break e}u=Error(z(426))}}else if(Ie&&a.mode&1){var P=Uy(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),$y(P,o,a,s,e),ig(ro(u,a));break e}}s=u=ro(u,a),Be!==4&&(Be=2),Ia===null?Ia=[s]:Ia.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=l2(s,u,e);Dy(s,E);break e;case 1:a=u;var y=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(ei===null||!ei.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=u2(s,a,e);Dy(s,C);break e}}s=s.return}while(s!==null)}P2(n)}catch(N){e=N,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function C2(){var t=Pc.current;return Pc.current=Rc,t===null?Rc:t}function Ig(){(Be===0||Be===3||Be===2)&&(Be=4),Ge===null||!(Ji&268435455)&&!(Pd&268435455)||zr(Ge,tt)}function kc(t,e){var n=ae;ae|=2;var r=C2();(Ge!==t||tt!==e)&&(rr=null,$i(t,e));do try{m5();break}catch(i){x2(t,i)}while(!0);if(og(),ae=n,Pc.current=r,Fe!==null)throw Error(z(261));return Ge=null,tt=0,Be}function m5(){for(;Fe!==null;)R2(Fe)}function g5(){for(;Fe!==null&&!UC();)R2(Fe)}function R2(t){var e=b2(t.alternate,t,$t);t.memoizedProps=t.pendingProps,e===null?P2(t):Fe=e,_g.current=null}function P2(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=u5(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,Fe=null;return}}else if(n=l5(n,e,$t),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);Be===0&&(Be=5)}function Ni(t,e,n){var r=fe,i=on.transition;try{on.transition=null,fe=1,y5(t,e,n,r)}finally{on.transition=i,fe=r}return null}function y5(t,e,n,r){do Ws();while(qr!==null);if(ae&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(XC(t,s),t===Ge&&(Fe=Ge=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gu||(gu=!0,k2(hc,function(){return Ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=on.transition,on.transition=null;var o=fe;fe=1;var a=ae;ae|=4,_g.current=null,d5(t,n),S2(n,t),j4(vp),pc=!!yp,vp=yp=null,t.current=n,h5(n),$C(),ae=a,fe=o,on.transition=s}else t.current=n;if(gu&&(gu=!1,qr=t,bc=i),s=t.pendingLanes,s===0&&(ei=null),HC(n.stateNode),jt(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ac)throw Ac=!1,t=Vp,Vp=null,t;return bc&1&&t.tag!==0&&Ws(),s=t.pendingLanes,s&1?t===Fp?xa++:(xa=0,Fp=t):xa=0,yi(),null}function Ws(){if(qr!==null){var t=lE(bc),e=on.transition,n=fe;try{if(on.transition=null,fe=16>t?16:t,qr===null)var r=!1;else{if(t=qr,qr=null,bc=0,ae&6)throw Error(z(331));var i=ae;for(ae|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:Ta(8,d,s)}var h=d.child;if(h!==null)h.return=d,W=h;else for(;W!==null;){d=W;var g=d.sibling,_=d.return;if(_2(d),d===c){W=null;break}if(g!==null){g.return=_,W=g;break}W=_}}}var I=s.alternate;if(I!==null){var R=I.child;if(R!==null){I.child=null;do{var P=R.sibling;R.sibling=null,R=P}while(R!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ta(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,W=E;break e}W=s.return}}var y=t.current;for(W=y;W!==null;){o=W;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,W=w;else e:for(o=y;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rd(9,a)}}catch(N){Ne(a,a.return,N)}if(a===o){W=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,W=C;break e}W=a.return}}if(ae=i,yi(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(_d,t)}catch{}r=!0}return r}finally{fe=n,on.transition=e}}return!1}function tv(t,e,n){e=ro(n,e),e=l2(t,e,1),t=Zr(t,e,1),e=Ct(),t!==null&&(pl(t,1,e),jt(t,e))}function Ne(t,e,n){if(t.tag===3)tv(t,t,n);else for(;e!==null;){if(e.tag===3){tv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ei===null||!ei.has(r))){t=ro(n,t),t=u2(e,t,1),e=Zr(e,t,1),t=Ct(),e!==null&&(pl(e,1,t),jt(e,t));break}}e=e.return}}function v5(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ct(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(tt&n)===n&&(Be===4||Be===3&&(tt&130023424)===tt&&500>Me()-Eg?$i(t,0):wg|=n),jt(t,e)}function A2(t,e){e===0&&(t.mode&1?(e=ou,ou<<=1,!(ou&130023424)&&(ou=4194304)):e=1);var n=Ct();t=vr(t,e),t!==null&&(pl(t,e,n),jt(t,n))}function _5(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),A2(t,n)}function w5(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),A2(t,n)}var b2;b2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Lt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,a5(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,Ie&&e.flags&1048576&&DE(e,Ec,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$u(t,e),t=e.pendingProps;var i=Zs(e,yt.current);Bs(e,n),i=pg(null,e,r,t,i,n);var s=mg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mt(r)?(s=!0,_c(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ug(e),i.updater=Cd,e.stateNode=i,i._reactInternals=e,Rp(e,r,t,n),e=bp(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&ng(e),It(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($u(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=S5(r),t=mn(r,t),i){case 0:e=Ap(null,e,r,t,n);break e;case 1:e=Hy(null,e,r,t,n);break e;case 11:e=By(null,e,r,t,n);break e;case 14:e=Wy(null,e,r,mn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Ap(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Hy(t,e,r,i,n);case 3:e:{if(f2(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,zE(t,e),Ic(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ro(Error(z(423)),e),e=qy(t,e,r,n,i);break e}else if(r!==i){i=ro(Error(z(424)),e),e=qy(t,e,r,n,i);break e}else for(Wt=Jr(e.stateNode.containerInfo.firstChild),Kt=e,Ie=!0,yn=null,n=VE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(eo(),r===i){e=_r(t,e,n);break e}It(t,e,r,n)}e=e.child}return e;case 5:return UE(e),t===null&&Ip(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,_p(r,i)?o=null:s!==null&&_p(r,s)&&(e.flags|=32),h2(t,e),It(t,e,o,n),e.child;case 6:return t===null&&Ip(e),null;case 13:return p2(t,e,n);case 4:return cg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=to(e,null,r,n):It(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),By(t,e,r,i,n);case 7:return It(t,e,e.pendingProps,n),e.child;case 8:return It(t,e,e.pendingProps.children,n),e.child;case 12:return It(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Sc,r._currentValue),r._currentValue=o,s!==null)if(Pn(s.value,o)){if(s.children===i.children&&!Lt.current){e=_r(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=hr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),xp(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}It(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Bs(e,n),i=an(i),r=r(i),e.flags|=1,It(t,e,r,n),e.child;case 14:return r=e.type,i=mn(r,e.pendingProps),i=mn(r.type,i),Wy(t,e,r,i,n);case 15:return c2(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),$u(t,e),e.tag=1,Mt(r)?(t=!0,_c(e)):t=!1,Bs(e,n),a2(e,r,i),Rp(e,r,i,n),bp(null,e,r,!0,t,n);case 19:return m2(t,e,n);case 22:return d2(t,e,n)}throw Error(z(156,e.tag))};function k2(t,e){return iE(t,e)}function E5(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(t,e,n,r){return new E5(t,e,n,r)}function xg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function S5(t){if(typeof t=="function")return xg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wm)return 11;if(t===Hm)return 14}return 2}function ni(t,e){var n=t.alternate;return n===null?(n=sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")xg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Rs:return Bi(n.children,i,s,e);case Bm:o=8,i|=8;break;case Xf:return t=sn(12,n,e,i|2),t.elementType=Xf,t.lanes=s,t;case Jf:return t=sn(13,n,e,i),t.elementType=Jf,t.lanes=s,t;case Zf:return t=sn(19,n,e,i),t.elementType=Zf,t.lanes=s,t;case Uw:return Ad(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fw:o=10;break e;case zw:o=9;break e;case Wm:o=11;break e;case Hm:o=14;break e;case Mr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=sn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Bi(t,e,n,r){return t=sn(7,t,r,e),t.lanes=n,t}function Ad(t,e,n,r){return t=sn(22,t,r,e),t.elementType=Uw,t.lanes=n,t.stateNode={isHidden:!1},t}function yf(t,e,n){return t=sn(6,t,null,e),t.lanes=n,t}function vf(t,e,n){return e=sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function T5(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xh(0),this.expirationTimes=Xh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cg(t,e,n,r,i,s,o,a,u){return t=new T5(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ug(s),t}function I5(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function N2(t){if(!t)return ui;t=t._reactInternals;e:{if(us(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Mt(n))return NE(t,n,e)}return e}function O2(t,e,n,r,i,s,o,a,u){return t=Cg(n,r,!0,t,i,s,o,a,u),t.context=N2(null),n=t.current,r=Ct(),i=ti(n),s=hr(r,i),s.callback=e??null,Zr(n,s,i),t.current.lanes=i,pl(t,i,r),jt(t,r),t}function bd(t,e,n,r){var i=e.current,s=Ct(),o=ti(i);return n=N2(n),e.context===null?e.context=n:e.pendingContext=n,e=hr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zr(i,e,o),t!==null&&(In(t,i,o,s),Fu(t,i,o)),o}function Nc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function nv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rg(t,e){nv(t,e),(t=t.alternate)&&nv(t,e)}function x5(){return null}var D2=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pg(t){this._internalRoot=t}kd.prototype.render=Pg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));bd(t,e,null,null)};kd.prototype.unmount=Pg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zi(function(){bd(null,t,null,null)}),e[yr]=null}};function kd(t){this._internalRoot=t}kd.prototype.unstable_scheduleHydration=function(t){if(t){var e=dE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fr.length&&e!==0&&e<Fr[n].priority;n++);Fr.splice(n,0,t),n===0&&fE(t)}};function Ag(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rv(){}function C5(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Nc(o);s.call(c)}}var o=O2(e,r,t,0,null,!1,!1,"",rv);return t._reactRootContainer=o,t[yr]=o.current,$a(t.nodeType===8?t.parentNode:t),Zi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Nc(u);a.call(c)}}var u=Cg(t,0,!1,null,null,!1,!1,"",rv);return t._reactRootContainer=u,t[yr]=u.current,$a(t.nodeType===8?t.parentNode:t),Zi(function(){bd(e,u,n,r)}),u}function Od(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Nc(o);a.call(u)}}bd(e,o,t,i)}else o=C5(n,e,t,i,r);return Nc(o)}uE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ia(e.pendingLanes);n!==0&&(Gm(e,n|1),jt(e,Me()),!(ae&6)&&(io=Me()+500,yi()))}break;case 13:Zi(function(){var r=vr(t,1);if(r!==null){var i=Ct();In(r,t,1,i)}}),Rg(t,1)}};Qm=function(t){if(t.tag===13){var e=vr(t,134217728);if(e!==null){var n=Ct();In(e,t,134217728,n)}Rg(t,134217728)}};cE=function(t){if(t.tag===13){var e=ti(t),n=vr(t,e);if(n!==null){var r=Ct();In(n,t,e,r)}Rg(t,e)}};dE=function(){return fe};hE=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};up=function(t,e,n){switch(e){case"input":if(np(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Td(r);if(!i)throw Error(z(90));Bw(r),np(r,i)}}}break;case"textarea":Hw(t,n);break;case"select":e=n.value,e!=null&&Fs(t,!!n.multiple,e,!1)}};Jw=Sg;Zw=Zi;var R5={usingClientEntryPoint:!1,Events:[gl,ks,Td,Yw,Xw,Sg]},Zo={findFiberByHostInstance:Mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},P5={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nE(t),t===null?null:t.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||x5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{_d=yu.inject(P5),Vn=yu}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R5;Jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ag(e))throw Error(z(200));return I5(t,e,null,n)};Jt.createRoot=function(t,e){if(!Ag(t))throw Error(z(299));var n=!1,r="",i=D2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Cg(t,1,!1,null,null,n,!1,r,i),t[yr]=e.current,$a(t.nodeType===8?t.parentNode:t),new Pg(e)};Jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=nE(e),t=t===null?null:t.stateNode,t};Jt.flushSync=function(t){return Zi(t)};Jt.hydrate=function(t,e,n){if(!Nd(e))throw Error(z(200));return Od(null,t,e,!0,n)};Jt.hydrateRoot=function(t,e,n){if(!Ag(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=D2;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=O2(e,null,t,1,n??null,i,!1,s,o),t[yr]=e.current,$a(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new kd(e)};Jt.render=function(t,e,n){if(!Nd(e))throw Error(z(200));return Od(null,t,e,!1,n)};Jt.unmountComponentAtNode=function(t){if(!Nd(t))throw Error(z(40));return t._reactRootContainer?(Zi(function(){Od(null,null,t,!1,function(){t._reactRootContainer=null,t[yr]=null})}),!0):!1};Jt.unstable_batchedUpdates=Sg;Jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nd(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Od(t,e,n,!1,r)};Jt.version="18.3.1-next-f1338f8080-20240426";function L2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L2)}catch(t){console.error(t)}}L2(),Lw.exports=Jt;var A5=Lw.exports,iv=A5;Qf.createRoot=iv.createRoot,Qf.hydrateRoot=iv.hydrateRoot;const bg="/freshbiteapp_Reactjs/assets/logo-ClmogISy.png";var Dt=function(){return Dt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Dt.apply(this,arguments)};function Oc(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var we="-ms-",Ca="-moz-",ce="-webkit-",M2="comm",Dd="rule",kg="decl",b5="@import",j2="@keyframes",k5="@layer",V2=Math.abs,Ng=String.fromCharCode,$p=Object.assign;function N5(t,e){return Ke(t,0)^45?(((e<<2^Ke(t,0))<<2^Ke(t,1))<<2^Ke(t,2))<<2^Ke(t,3):0}function F2(t){return t.trim()}function ir(t,e){return(t=e.exec(t))?t[0]:t}function Z(t,e,n){return t.replace(e,n)}function qu(t,e,n){return t.indexOf(e,n)}function Ke(t,e){return t.charCodeAt(e)|0}function so(t,e,n){return t.slice(e,n)}function Dn(t){return t.length}function z2(t){return t.length}function oa(t,e){return e.push(t),t}function O5(t,e){return t.map(e).join("")}function sv(t,e){return t.filter(function(n){return!ir(n,e)})}var Ld=1,oo=1,U2=0,un=0,Ve=0,Io="";function Md(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Ld,column:oo,length:o,return:"",siblings:a}}function Lr(t,e){return $p(Md("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ss(t){for(;t.root;)t=Lr(t.root,{children:[t]});oa(t,t.siblings)}function D5(){return Ve}function L5(){return Ve=un>0?Ke(Io,--un):0,oo--,Ve===10&&(oo=1,Ld--),Ve}function xn(){return Ve=un<U2?Ke(Io,un++):0,oo++,Ve===10&&(oo=1,Ld++),Ve}function Wi(){return Ke(Io,un)}function Ku(){return un}function jd(t,e){return so(Io,t,e)}function Bp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function M5(t){return Ld=oo=1,U2=Dn(Io=t),un=0,[]}function j5(t){return Io="",t}function _f(t){return F2(jd(un-1,Wp(t===91?t+2:t===40?t+1:t)))}function V5(t){for(;(Ve=Wi())&&Ve<33;)xn();return Bp(t)>2||Bp(Ve)>3?"":" "}function F5(t,e){for(;--e&&xn()&&!(Ve<48||Ve>102||Ve>57&&Ve<65||Ve>70&&Ve<97););return jd(t,Ku()+(e<6&&Wi()==32&&xn()==32))}function Wp(t){for(;xn();)switch(Ve){case t:return un;case 34:case 39:t!==34&&t!==39&&Wp(Ve);break;case 40:t===41&&Wp(t);break;case 92:xn();break}return un}function z5(t,e){for(;xn()&&t+Ve!==57;)if(t+Ve===84&&Wi()===47)break;return"/*"+jd(e,un-1)+"*"+Ng(t===47?t:xn())}function U5(t){for(;!Bp(Wi());)xn();return jd(t,un)}function $5(t){return j5(Gu("",null,null,null,[""],t=M5(t),0,[0],t))}function Gu(t,e,n,r,i,s,o,a,u){for(var c=0,d=0,h=o,g=0,_=0,I=0,R=1,P=1,E=1,y=0,w="",C=i,N=s,D=r,T=w;P;)switch(I=y,y=xn()){case 40:if(I!=108&&Ke(T,h-1)==58){qu(T+=Z(_f(y),"&","&\f"),"&\f",V2(c?a[c-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:T+=_f(y);break;case 9:case 10:case 13:case 32:T+=V5(I);break;case 92:T+=F5(Ku()-1,7);continue;case 47:switch(Wi()){case 42:case 47:oa(B5(z5(xn(),Ku()),e,n,u),u);break;default:T+="/"}break;case 123*R:a[c++]=Dn(T)*E;case 125*R:case 59:case 0:switch(y){case 0:case 125:P=0;case 59+d:E==-1&&(T=Z(T,/\f/g,"")),_>0&&Dn(T)-h&&oa(_>32?av(T+";",r,n,h-1,u):av(Z(T," ","")+";",r,n,h-2,u),u);break;case 59:T+=";";default:if(oa(D=ov(T,e,n,c,d,i,a,w,C=[],N=[],h,s),s),y===123)if(d===0)Gu(T,e,D,D,C,s,h,a,N);else switch(g===99&&Ke(T,3)===110?100:g){case 100:case 108:case 109:case 115:Gu(t,D,D,r&&oa(ov(t,D,D,0,0,i,a,w,i,C=[],h,N),N),i,N,h,a,r?C:N);break;default:Gu(T,D,D,D,[""],N,0,a,N)}}c=d=_=0,R=E=1,w=T="",h=o;break;case 58:h=1+Dn(T),_=I;default:if(R<1){if(y==123)--R;else if(y==125&&R++==0&&L5()==125)continue}switch(T+=Ng(y),y*R){case 38:E=d>0?1:(T+="\f",-1);break;case 44:a[c++]=(Dn(T)-1)*E,E=1;break;case 64:Wi()===45&&(T+=_f(xn())),g=Wi(),d=h=Dn(w=T+=U5(Ku())),y++;break;case 45:I===45&&Dn(T)==2&&(R=0)}}return s}function ov(t,e,n,r,i,s,o,a,u,c,d,h){for(var g=i-1,_=i===0?s:[""],I=z2(_),R=0,P=0,E=0;R<r;++R)for(var y=0,w=so(t,g+1,g=V2(P=o[R])),C=t;y<I;++y)(C=F2(P>0?_[y]+" "+w:Z(w,/&\f/g,_[y])))&&(u[E++]=C);return Md(t,e,n,i===0?Dd:a,u,c,d,h)}function B5(t,e,n,r){return Md(t,e,n,M2,Ng(D5()),so(t,2,-2),0,r)}function av(t,e,n,r,i){return Md(t,e,n,kg,so(t,0,r),so(t,r+1,-1),r,i)}function $2(t,e,n){switch(N5(t,e)){case 5103:return ce+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+t+t;case 4789:return Ca+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+t+Ca+t+we+t+t;case 5936:switch(Ke(t,e+11)){case 114:return ce+t+we+Z(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ce+t+we+Z(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ce+t+we+Z(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ce+t+we+t+t;case 6165:return ce+t+we+"flex-"+t+t;case 5187:return ce+t+Z(t,/(\w+).+(:[^]+)/,ce+"box-$1$2"+we+"flex-$1$2")+t;case 5443:return ce+t+we+"flex-item-"+Z(t,/flex-|-self/g,"")+(ir(t,/flex-|baseline/)?"":we+"grid-row-"+Z(t,/flex-|-self/g,""))+t;case 4675:return ce+t+we+"flex-line-pack"+Z(t,/align-content|flex-|-self/g,"")+t;case 5548:return ce+t+we+Z(t,"shrink","negative")+t;case 5292:return ce+t+we+Z(t,"basis","preferred-size")+t;case 6060:return ce+"box-"+Z(t,"-grow","")+ce+t+we+Z(t,"grow","positive")+t;case 4554:return ce+Z(t,/([^-])(transform)/g,"$1"+ce+"$2")+t;case 6187:return Z(Z(Z(t,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),t,"")+t;case 5495:case 3959:return Z(t,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return Z(Z(t,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+t+t;case 4200:if(!ir(t,/flex-|baseline/))return we+"grid-column-align"+so(t,e)+t;break;case 2592:case 3360:return we+Z(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,ir(r.props,/grid-\w+-end/)})?~qu(t+(n=n[e].value),"span",0)?t:we+Z(t,"-start","")+t+we+"grid-row-span:"+(~qu(n,"span",0)?ir(n,/\d+/):+ir(n,/\d+/)-+ir(t,/\d+/))+";":we+Z(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return ir(r.props,/grid-\w+-start/)})?t:we+Z(Z(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Z(t,/(.+)-inline(.+)/,ce+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dn(t)-1-e>6)switch(Ke(t,e+1)){case 109:if(Ke(t,e+4)!==45)break;case 102:return Z(t,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Ca+(Ke(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~qu(t,"stretch",0)?$2(Z(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Z(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,u,c){return we+i+":"+s+c+(o?we+i+"-span:"+(a?u:+u-+s)+c:"")+t});case 4949:if(Ke(t,e+6)===121)return Z(t,":",":"+ce)+t;break;case 6444:switch(Ke(t,Ke(t,14)===45?18:11)){case 120:return Z(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(Ke(t,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+we+"$2box$3")+t;case 100:return Z(t,":",":"+we)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(t,"scroll-","scroll-snap-")+t}return t}function Dc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function W5(t,e,n,r){switch(t.type){case k5:if(t.children.length)break;case b5:case kg:return t.return=t.return||t.value;case M2:return"";case j2:return t.return=t.value+"{"+Dc(t.children,r)+"}";case Dd:if(!Dn(t.value=t.props.join(",")))return""}return Dn(n=Dc(t.children,r))?t.return=t.value+"{"+n+"}":""}function H5(t){var e=z2(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function q5(t){return function(e){e.root||(e=e.return)&&t(e)}}function K5(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case kg:t.return=$2(t.value,t.length,n);return;case j2:return Dc([Lr(t,{value:Z(t.value,"@","@"+ce)})],r);case Dd:if(t.length)return O5(n=t.props,function(i){switch(ir(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ss(Lr(t,{props:[Z(i,/:(read-\w+)/,":"+Ca+"$1")]})),Ss(Lr(t,{props:[i]})),$p(t,{props:sv(n,r)});break;case"::placeholder":Ss(Lr(t,{props:[Z(i,/:(plac\w+)/,":"+ce+"input-$1")]})),Ss(Lr(t,{props:[Z(i,/:(plac\w+)/,":"+Ca+"$1")]})),Ss(Lr(t,{props:[Z(i,/:(plac\w+)/,we+"input-$1")]})),Ss(Lr(t,{props:[i]})),$p(t,{props:sv(n,r)});break}return""})}}var G5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ut={},ao=typeof process<"u"&&Ut!==void 0&&(Ut.REACT_APP_SC_ATTR||Ut.SC_ATTR)||"data-styled",B2="active",W2="data-styled-version",Vd="6.1.13",Og=`/*!sc*/
`,Lc=typeof window<"u"&&"HTMLElement"in window,Q5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ut!==void 0&&Ut.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ut.REACT_APP_SC_DISABLE_SPEEDY!==""?Ut.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ut.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ut!==void 0&&Ut.SC_DISABLE_SPEEDY!==void 0&&Ut.SC_DISABLE_SPEEDY!==""&&Ut.SC_DISABLE_SPEEDY!=="false"&&Ut.SC_DISABLE_SPEEDY),Fd=Object.freeze([]),lo=Object.freeze({});function Y5(t,e,n){return n===void 0&&(n=lo),t.theme!==n.theme&&t.theme||e||n.theme}var H2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),X5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,J5=/(^-|-$)/g;function lv(t){return t.replace(X5,"-").replace(J5,"")}var Z5=/(a)(d)/gi,vu=52,uv=function(t){return String.fromCharCode(t+(t>25?39:97))};function Hp(t){var e,n="";for(e=Math.abs(t);e>vu;e=e/vu|0)n=uv(e%vu)+n;return(uv(e%vu)+n).replace(Z5,"$1-$2")}var wf,q2=5381,Vs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},K2=function(t){return Vs(q2,t)};function e3(t){return Hp(K2(t)>>>0)}function t3(t){return t.displayName||t.name||"Component"}function Ef(t){return typeof t=="string"&&!0}var G2=typeof Symbol=="function"&&Symbol.for,Q2=G2?Symbol.for("react.memo"):60115,n3=G2?Symbol.for("react.forward_ref"):60112,r3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Y2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s3=((wf={})[n3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wf[Q2]=Y2,wf);function cv(t){return("type"in(e=t)&&e.type.$$typeof)===Q2?Y2:"$$typeof"in t?s3[t.$$typeof]:r3;var e}var o3=Object.defineProperty,a3=Object.getOwnPropertyNames,dv=Object.getOwnPropertySymbols,l3=Object.getOwnPropertyDescriptor,u3=Object.getPrototypeOf,hv=Object.prototype;function X2(t,e,n){if(typeof e!="string"){if(hv){var r=u3(e);r&&r!==hv&&X2(t,r,n)}var i=a3(e);dv&&(i=i.concat(dv(e)));for(var s=cv(t),o=cv(e),a=0;a<i.length;++a){var u=i[a];if(!(u in i3||n&&n[u]||o&&u in o||s&&u in s)){var c=l3(e,u);try{o3(t,u,c)}catch{}}}}return t}function uo(t){return typeof t=="function"}function Dg(t){return typeof t=="object"&&"styledComponentId"in t}function Fi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function fv(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Xa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function qp(t,e,n){if(n===void 0&&(n=!1),!n&&!Xa(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=qp(t[r],e[r]);else if(Xa(e))for(var r in e)t[r]=qp(t[r],e[r]);return t}function Lg(t,e){Object.defineProperty(t,"toString",{value:e})}function vl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var c3=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw vl(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Og);return n},t}(),Qu=new Map,Mc=new Map,Yu=1,_u=function(t){if(Qu.has(t))return Qu.get(t);for(;Mc.has(Yu);)Yu++;var e=Yu++;return Qu.set(t,e),Mc.set(e,t),e},d3=function(t,e){Yu=e+1,Qu.set(t,e),Mc.set(e,t)},h3="style[".concat(ao,"][").concat(W2,'="').concat(Vd,'"]'),f3=new RegExp("^".concat(ao,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),p3=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},m3=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Og),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var u=a.match(f3);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(d3(d,c),p3(t,d,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},pv=function(t){for(var e=document.querySelectorAll(h3),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(ao)!==B2&&(m3(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function g3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var J2=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(ao,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(ao,B2),r.setAttribute(W2,Vd);var o=g3();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},y3=function(){function t(e){this.element=J2(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw vl(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),v3=function(){function t(e){this.element=J2(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),_3=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),mv=Lc,w3={isServer:!Lc,useCSSOMInjection:!Q5},Z2=function(){function t(e,n,r){e===void 0&&(e=lo),n===void 0&&(n={});var i=this;this.options=Dt(Dt({},w3),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Lc&&mv&&(mv=!1,pv(this)),Lg(this,function(){return function(s){for(var o=s.getTag(),a=o.length,u="",c=function(h){var g=function(E){return Mc.get(E)}(h);if(g===void 0)return"continue";var _=s.names.get(g),I=o.getGroup(h);if(_===void 0||!_.size||I.length===0)return"continue";var R="".concat(ao,".g").concat(h,'[id="').concat(g,'"]'),P="";_!==void 0&&_.forEach(function(E){E.length>0&&(P+="".concat(E,","))}),u+="".concat(I).concat(R,'{content:"').concat(P,'"}').concat(Og)},d=0;d<a;d++)c(d);return u}(i)})}return t.registerId=function(e){return _u(e)},t.prototype.rehydrate=function(){!this.server&&Lc&&pv(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Dt(Dt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new _3(i):r?new y3(i):new v3(i)}(this.options),new c3(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(_u(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(_u(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(_u(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),E3=/&/g,S3=/^\s*\/\/.*$/gm;function eS(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=eS(n.children,e)),n})}function T3(t){var e,n,r,i=lo,s=i.options,o=s===void 0?lo:s,a=i.plugins,u=a===void 0?Fd:a,c=function(g,_,I){return I.startsWith(n)&&I.endsWith(n)&&I.replaceAll(n,"").length>0?".".concat(e):g},d=u.slice();d.push(function(g){g.type===Dd&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(E3,n).replace(r,c))}),o.prefix&&d.push(K5),d.push(W5);var h=function(g,_,I,R){_===void 0&&(_=""),I===void 0&&(I=""),R===void 0&&(R="&"),e=R,n=_,r=new RegExp("\\".concat(n,"\\b"),"g");var P=g.replace(S3,""),E=$5(I||_?"".concat(I," ").concat(_," { ").concat(P," }"):P);o.namespace&&(E=eS(E,o.namespace));var y=[];return Dc(E,H5(d.concat(q5(function(w){return y.push(w)})))),y};return h.hash=u.length?u.reduce(function(g,_){return _.name||vl(15),Vs(g,_.name)},q2).toString():"",h}var I3=new Z2,Kp=T3(),tS=xt.createContext({shouldForwardProp:void 0,styleSheet:I3,stylis:Kp});tS.Consumer;xt.createContext(void 0);function gv(){return M.useContext(tS)}var x3=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Kp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Lg(this,function(){throw vl(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Kp),this.name+e.hash},t}(),C3=function(t){return t>="A"&&t<="Z"};function yv(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;C3(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var nS=function(t){return t==null||t===!1||t===""},rS=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!nS(s)&&(Array.isArray(s)&&s.isCss||uo(s)?r.push("".concat(yv(i),":"),s,";"):Xa(s)?r.push.apply(r,Oc(Oc(["".concat(i," {")],rS(s),!1),["}"],!1)):r.push("".concat(yv(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in G5||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Hi(t,e,n,r){if(nS(t))return[];if(Dg(t))return[".".concat(t.styledComponentId)];if(uo(t)){if(!uo(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Hi(i,e,n,r)}var s;return t instanceof x3?n?(t.inject(n,r),[t.getName(r)]):[t]:Xa(t)?rS(t):Array.isArray(t)?Array.prototype.concat.apply(Fd,t.map(function(o){return Hi(o,e,n,r)})):[t.toString()]}function R3(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(uo(n)&&!Dg(n))return!1}return!0}var P3=K2(Vd),A3=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&R3(e),this.componentId=n,this.baseHash=Vs(P3,n),this.baseStyle=r,Z2.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Fi(i,this.staticRulesId);else{var s=fv(Hi(this.rules,e,n,r)),o=Hp(Vs(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Fi(i,o),this.staticRulesId=o}else{for(var u=Vs(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")c+=h;else if(h){var g=fv(Hi(h,e,n,r));u=Vs(u,g+d),c+=g}}if(c){var _=Hp(u>>>0);n.hasNameForId(this.componentId,_)||n.insertRules(this.componentId,_,r(c,".".concat(_),void 0,this.componentId)),i=Fi(i,_)}}return i},t}(),iS=xt.createContext(void 0);iS.Consumer;var Sf={};function b3(t,e,n){var r=Dg(t),i=t,s=!Ef(t),o=e.attrs,a=o===void 0?Fd:o,u=e.componentId,c=u===void 0?function(C,N){var D=typeof C!="string"?"sc":lv(C);Sf[D]=(Sf[D]||0)+1;var T="".concat(D,"-").concat(e3(Vd+D+Sf[D]));return N?"".concat(N,"-").concat(T):T}(e.displayName,e.parentComponentId):u,d=e.displayName,h=d===void 0?function(C){return Ef(C)?"styled.".concat(C):"Styled(".concat(t3(C),")")}(t):d,g=e.displayName&&e.componentId?"".concat(lv(e.displayName),"-").concat(e.componentId):e.componentId||c,_=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,I=e.shouldForwardProp;if(r&&i.shouldForwardProp){var R=i.shouldForwardProp;if(e.shouldForwardProp){var P=e.shouldForwardProp;I=function(C,N){return R(C,N)&&P(C,N)}}else I=R}var E=new A3(n,g,r?i.componentStyle:void 0);function y(C,N){return function(D,T,v){var x=D.attrs,A=D.componentStyle,b=D.defaultProps,O=D.foldedComponentIds,k=D.styledComponentId,At=D.target,Xn=xt.useContext(iS),Ti=gv(),Vt=D.shouldForwardProp||Ti.shouldForwardProp,$=Y5(T,Xn,b)||lo,K=function(bt,wt,kt){for(var Ii,Jn=Dt(Dt({},wt),{className:void 0,theme:kt}),Rr=0;Rr<bt.length;Rr+=1){var Zn=uo(Ii=bt[Rr])?Ii(Jn):Ii;for(var en in Zn)Jn[en]=en==="className"?Fi(Jn[en],Zn[en]):en==="style"?Dt(Dt({},Jn[en]),Zn[en]):Zn[en]}return wt.className&&(Jn.className=Fi(Jn.className,wt.className)),Jn}(x,T,$),Q=K.as||At,de={};for(var re in K)K[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&K.theme===$||(re==="forwardedAs"?de.as=K.forwardedAs:Vt&&!Vt(re,Q)||(de[re]=K[re]));var Te=function(bt,wt){var kt=gv(),Ii=bt.generateAndInjectStyles(wt,kt.styleSheet,kt.stylis);return Ii}(A,K),Ft=Fi(O,k);return Te&&(Ft+=" "+Te),K.className&&(Ft+=" "+K.className),de[Ef(Q)&&!H2.has(Q)?"class":"className"]=Ft,de.ref=v,M.createElement(Q,de)}(w,C,N)}y.displayName=h;var w=xt.forwardRef(y);return w.attrs=_,w.componentStyle=E,w.displayName=h,w.shouldForwardProp=I,w.foldedComponentIds=r?Fi(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=g,w.target=r?i.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(N){for(var D=[],T=1;T<arguments.length;T++)D[T-1]=arguments[T];for(var v=0,x=D;v<x.length;v++)qp(N,x[v],!0);return N}({},i.defaultProps,C):C}}),Lg(w,function(){return".".concat(w.styledComponentId)}),s&&X2(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function vv(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var _v=function(t){return Object.assign(t,{isCss:!0})};function k3(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(uo(t)||Xa(t))return _v(Hi(vv(Fd,Oc([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Hi(r):_v(Hi(vv(r,e)))}function Gp(t,e,n){if(n===void 0&&(n=lo),!e)throw vl(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,k3.apply(void 0,Oc([i],s,!1)))};return r.attrs=function(i){return Gp(t,e,Dt(Dt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Gp(t,e,Dt(Dt({},n),i))},r}var sS=function(t){return Gp(b3,t)},be=sS;H2.forEach(function(t){be[t]=sS(t)});var oS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},wv=xt.createContext&&xt.createContext(oS),N3=["attr","size","title"];function O3(t,e){if(t==null)return{};var n=D3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function D3(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function jc(){return jc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jc.apply(this,arguments)}function Ev(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Vc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ev(Object(n),!0).forEach(function(r){L3(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ev(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function L3(t,e,n){return e=M3(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M3(t){var e=j3(t,"string");return typeof e=="symbol"?e:e+""}function j3(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function aS(t){return t&&t.map((e,n)=>xt.createElement(e.tag,Vc({key:n},e.attr),aS(e.child)))}function Se(t){return e=>xt.createElement(V3,jc({attr:Vc({},t.attr)},e),aS(t.child))}function V3(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=O3(t,N3),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),xt.createElement("svg",jc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Vc(Vc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&xt.createElement("title",null,s),t.children)};return wv!==void 0?xt.createElement(wv.Consumer,null,n=>e(n)):e(oS)}function F3(t){return Se({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M232,152v64a8,8,0,0,1-8,8H160a72,72,0,0,1-67.9-48H96a72,72,0,0,0,72-72h0a71.83,71.83,0,0,0-4.07-23.88h0A72,72,0,0,1,232,152Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M169.57,72.59A80,80,0,0,0,16,104v64a16,16,0,0,0,16,16H86.67A80.15,80.15,0,0,0,160,232h64a16,16,0,0,0,16-16V152A80,80,0,0,0,169.57,72.59ZM32,104a64,64,0,1,1,64,64H32ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z"},child:[]}]})(t)}function z3(t){return Se({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M222.72,67.91l-88-48.18a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.91ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,178.57,94.57,94.05,48.31ZM122,223,39,177.57a2,2,0,0,1-1-1.75V86.66l84,46ZM43.49,76,81.56,55.15l84.51,46.26L128,122.24ZM218,175.82a2,2,0,0,1-1,1.75h0L134,223V132.64l36-19.71V152a6,6,0,0,0,12,0V106.37l36-19.71Z"},child:[]}]})(t)}function U3(t){return Se({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M228.61,60.16A6,6,0,0,0,224,58H61L54.63,22.93A6,6,0,0,0,48.73,18H24a6,6,0,0,0,0,12H43.72L69.53,171.94a21.93,21.93,0,0,0,6.24,11.77A26,26,0,1,0,113.89,190h52.22A26,26,0,1,0,188,178H91.17a10,10,0,0,1-9.84-8.21L77.73,150H196.1a22,22,0,0,0,21.65-18.06L229.9,65.07A6,6,0,0,0,228.61,60.16ZM106,204a14,14,0,1,1-14-14A14,14,0,0,1,106,204Zm96,0a14,14,0,1,1-14-14A14,14,0,0,1,202,204Zm3.94-74.21A10,10,0,0,1,196.1,138H75.55L63.19,70H216.81Z"},child:[]}]})(t)}function $3(t){return Se({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"},child:[]}]})(t)}/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ja.apply(this,arguments)}var Kr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Kr||(Kr={}));const Sv="popstate";function B3(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:u=""}=cs(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Qp("",{pathname:o,search:a,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof s=="string"?s:Fc(s))}function r(i,s){Mg(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return H3(e,n,r,t)}function Oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Mg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function W3(){return Math.random().toString(36).substr(2,8)}function Tv(t,e){return{usr:t.state,key:t.key,idx:e}}function Qp(t,e,n,r){return n===void 0&&(n=null),Ja({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?cs(e):e,{state:n,key:e&&e.key||r||W3()})}function Fc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function cs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function H3(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Kr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Ja({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=Kr.Pop;let P=d(),E=P==null?null:P-c;c=P,u&&u({action:a,location:R.location,delta:E})}function g(P,E){a=Kr.Push;let y=Qp(R.location,P,E);n&&n(y,P),c=d()+1;let w=Tv(y,c),C=R.createHref(y);try{o.pushState(w,"",C)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(C)}s&&u&&u({action:a,location:R.location,delta:1})}function _(P,E){a=Kr.Replace;let y=Qp(R.location,P,E);n&&n(y,P),c=d();let w=Tv(y,c),C=R.createHref(y);o.replaceState(w,"",C),s&&u&&u({action:a,location:R.location,delta:0})}function I(P){let E=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof P=="string"?P:Fc(P);return y=y.replace(/ $/,"%20"),Oe(E,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,E)}let R={get action(){return a},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Sv,h),u=P,()=>{i.removeEventListener(Sv,h),u=null}},createHref(P){return e(i,P)},createURL:I,encodeLocation(P){let E=I(P);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:_,go(P){return o.go(P)}};return R}var Iv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Iv||(Iv={}));function q3(t,e,n){return n===void 0&&(n="/"),K3(t,e,n,!1)}function K3(t,e,n,r){let i=typeof e=="string"?cs(e):e,s=co(i.pathname||"/",n);if(s==null)return null;let o=lS(t);G3(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=sR(s);a=rR(o[u],c,r)}return a}function lS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Oe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=ri([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),lS(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:tR(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of uS(s.path))i(s,o,u)}),e}function uS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=uS(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function G3(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:nR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Q3=/^:[\w-]+$/,Y3=3,X3=2,J3=1,Z3=10,eR=-2,xv=t=>t==="*";function tR(t,e){let n=t.split("/"),r=n.length;return n.some(xv)&&(r+=eR),e&&(r+=X3),n.filter(i=>!xv(i)).reduce((i,s)=>i+(Q3.test(s)?Y3:s===""?J3:Z3),r)}function nR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function rR(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",h=zc({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),g=u.route;if(!h&&c&&n&&!r[r.length-1].route.index&&(h=zc({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:ri([s,h.pathname]),pathnameBase:uR(ri([s,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(s=ri([s,h.pathnameBase]))}return o}function zc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=iR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,h)=>{let{paramName:g,isOptional:_}=d;if(g==="*"){let R=a[h]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const I=a[h];return _&&!I?c[g]=void 0:c[g]=(I||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function iR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Mg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function sR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function co(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function oR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?cs(t):t;return{pathname:n?n.startsWith("/")?n:aR(n,e):e,search:cR(r),hash:dR(i)}}function aR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Tf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cS(t,e){let n=lR(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function dS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=cs(t):(i=Ja({},t),Oe(!i.pathname||!i.pathname.includes("?"),Tf("?","pathname","search",i)),Oe(!i.pathname||!i.pathname.includes("#"),Tf("#","pathname","hash",i)),Oe(!i.search||!i.search.includes("#"),Tf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}a=h>=0?e[h]:"/"}let u=oR(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const ri=t=>t.join("/").replace(/\/\/+/g,"/"),uR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),cR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,dR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function hR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const hS=["post","put","patch","delete"];new Set(hS);const fR=["get",...hS];new Set(fR);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Za.apply(this,arguments)}const zd=M.createContext(null),fS=M.createContext(null),vi=M.createContext(null),Ud=M.createContext(null),ds=M.createContext({outlet:null,matches:[],isDataRoute:!1}),pS=M.createContext(null);function pR(t,e){let{relative:n}=e===void 0?{}:e;_l()||Oe(!1);let{basename:r,navigator:i}=M.useContext(vi),{hash:s,pathname:o,search:a}=Bd(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:ri([r,o])),i.createHref({pathname:u,search:a,hash:s})}function _l(){return M.useContext(Ud)!=null}function wl(){return _l()||Oe(!1),M.useContext(Ud).location}function mS(t){M.useContext(vi).static||M.useLayoutEffect(t)}function $d(){let{isDataRoute:t}=M.useContext(ds);return t?RR():mR()}function mR(){_l()||Oe(!1);let t=M.useContext(zd),{basename:e,future:n,navigator:r}=M.useContext(vi),{matches:i}=M.useContext(ds),{pathname:s}=wl(),o=JSON.stringify(cS(i,n.v7_relativeSplatPath)),a=M.useRef(!1);return mS(()=>{a.current=!0}),M.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=dS(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:ri([e,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[e,r,o,s,t])}function Bd(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(vi),{matches:i}=M.useContext(ds),{pathname:s}=wl(),o=JSON.stringify(cS(i,r.v7_relativeSplatPath));return M.useMemo(()=>dS(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function gR(t,e){return yR(t,e)}function yR(t,e,n,r){_l()||Oe(!1);let{navigator:i}=M.useContext(vi),{matches:s}=M.useContext(ds),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=wl(),d;if(e){var h;let P=typeof e=="string"?cs(e):e;u==="/"||(h=P.pathname)!=null&&h.startsWith(u)||Oe(!1),d=P}else d=c;let g=d.pathname||"/",_=g;if(u!=="/"){let P=u.replace(/^\//,"").split("/");_="/"+g.replace(/^\//,"").split("/").slice(P.length).join("/")}let I=q3(t,{pathname:_}),R=SR(I&&I.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:ri([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:ri([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&R?M.createElement(Ud.Provider,{value:{location:Za({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Kr.Pop}},R):R}function vR(){let t=CR(),e=hR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const _R=M.createElement(vR,null);class wR extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(ds.Provider,{value:this.props.routeContext},M.createElement(pS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ER(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(zd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(ds.Provider,{value:e},r)}function SR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);d>=0||Oe(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:g,errors:_}=n,I=h.route.loader&&g[h.route.id]===void 0&&(!_||_[h.route.id]===void 0);if(h.route.lazy||I){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,h,g)=>{let _,I=!1,R=null,P=null;n&&(_=a&&h.route.id?a[h.route.id]:void 0,R=h.route.errorElement||_R,u&&(c<0&&g===0?(I=!0,P=null):c===g&&(I=!0,P=h.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,g+1)),y=()=>{let w;return _?w=R:I?w=P:h.route.Component?w=M.createElement(h.route.Component,null):h.route.element?w=h.route.element:w=d,M.createElement(ER,{match:h,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:w})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?M.createElement(wR,{location:n.location,revalidation:n.revalidation,component:R,error:_,children:y(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):y()},null)}var gS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(gS||{}),Uc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Uc||{});function TR(t){let e=M.useContext(zd);return e||Oe(!1),e}function IR(t){let e=M.useContext(fS);return e||Oe(!1),e}function xR(t){let e=M.useContext(ds);return e||Oe(!1),e}function yS(t){let e=xR(),n=e.matches[e.matches.length-1];return n.route.id||Oe(!1),n.route.id}function CR(){var t;let e=M.useContext(pS),n=IR(Uc.UseRouteError),r=yS(Uc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function RR(){let{router:t}=TR(gS.UseNavigateStable),e=yS(Uc.UseNavigateStable),n=M.useRef(!1);return mS(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Za({fromRouteId:e},s)))},[t,e])}function Nn(t){Oe(!1)}function PR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Kr.Pop,navigator:s,static:o=!1,future:a}=t;_l()&&Oe(!1);let u=e.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:u,navigator:s,static:o,future:Za({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=cs(r));let{pathname:d="/",search:h="",hash:g="",state:_=null,key:I="default"}=r,R=M.useMemo(()=>{let P=co(d,u);return P==null?null:{location:{pathname:P,search:h,hash:g,state:_,key:I},navigationType:i}},[u,d,h,g,_,I,i]);return R==null?null:M.createElement(vi.Provider,{value:c},M.createElement(Ud.Provider,{children:n,value:R}))}function AR(t){let{children:e,location:n}=t;return gR(Yp(e),n)}new Promise(()=>{});function Yp(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,Yp(r.props.children,s));return}r.type!==Nn&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Yp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $c(){return $c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$c.apply(this,arguments)}function vS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function bR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function kR(t,e){return t.button===0&&(!e||e==="_self")&&!bR(t)}const NR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],OR=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],DR="6";try{window.__reactRouterVersion=DR}catch{}const LR=M.createContext({isTransitioning:!1}),MR="startTransition",Cv=Gf[MR];function jR(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=B3({window:i,v5Compat:!0}));let o=s.current,[a,u]=M.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=M.useCallback(h=>{c&&Cv?Cv(()=>u(h)):u(h)},[u,c]);return M.useLayoutEffect(()=>o.listen(d),[o,d]),M.createElement(PR,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const VR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",FR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zR=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,unstable_viewTransition:h}=e,g=vS(e,NR),{basename:_}=M.useContext(vi),I,R=!1;if(typeof c=="string"&&FR.test(c)&&(I=c,VR))try{let w=new URL(window.location.href),C=c.startsWith("//")?new URL(w.protocol+c):new URL(c),N=co(C.pathname,_);C.origin===w.origin&&N!=null?c=N+C.search+C.hash:R=!0}catch{}let P=pR(c,{relative:i}),E=$R(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:h});function y(w){r&&r(w),w.defaultPrevented||E(w)}return M.createElement("a",$c({},g,{href:I||P,onClick:R||s?r:y,ref:n,target:u}))}),ht=M.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,unstable_viewTransition:c,children:d}=e,h=vS(e,OR),g=Bd(u,{relative:h.relative}),_=wl(),I=M.useContext(fS),{navigator:R,basename:P}=M.useContext(vi),E=I!=null&&BR(g)&&c===!0,y=R.encodeLocation?R.encodeLocation(g).pathname:g.pathname,w=_.pathname,C=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;i||(w=w.toLowerCase(),C=C?C.toLowerCase():null,y=y.toLowerCase()),C&&P&&(C=co(C,P)||C);const N=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let D=w===y||!o&&w.startsWith(y)&&w.charAt(N)==="/",T=C!=null&&(C===y||!o&&C.startsWith(y)&&C.charAt(y.length)==="/"),v={isActive:D,isPending:T,isTransitioning:E},x=D?r:void 0,A;typeof s=="function"?A=s(v):A=[s,D?"active":null,T?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let b=typeof a=="function"?a(v):a;return M.createElement(zR,$c({},h,{"aria-current":x,className:A,ref:n,style:b,to:u,unstable_viewTransition:c}),typeof d=="function"?d(v):d)});var Xp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Xp||(Xp={}));var Rv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Rv||(Rv={}));function UR(t){let e=M.useContext(zd);return e||Oe(!1),e}function $R(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=$d(),c=wl(),d=Bd(t,{relative:o});return M.useCallback(h=>{if(kR(h,n)){h.preventDefault();let g=r!==void 0?r:Fc(c)===Fc(d);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,d,r,i,n,t,s,o,a])}function BR(t,e){e===void 0&&(e={});let n=M.useContext(LR);n==null&&Oe(!1);let{basename:r}=UR(Xp.useViewTransitionState),i=Bd(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=co(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=co(n.nextLocation.pathname,r)||n.nextLocation.pathname;return zc(i.pathname,o)!=null||zc(i.pathname,s)!=null}let WR={data:""},HR=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||WR,qR=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,KR=/\/\*[^]*?\*\/|  +/g,Pv=/\n+/g,Ur=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Ur(o,s):s+"{"+Ur(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Ur(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,a):a?a+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Ur.p?Ur.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},nr={},_S=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+_S(t[n]);return e}return t},GR=(t,e,n,r,i)=>{let s=_S(t),o=nr[s]||(nr[s]=(u=>{let c=0,d=11;for(;c<u.length;)d=101*d+u.charCodeAt(c++)>>>0;return"go"+d})(s));if(!nr[o]){let u=s!==t?t:(c=>{let d,h,g=[{}];for(;d=qR.exec(c.replace(KR,""));)d[4]?g.shift():d[3]?(h=d[3].replace(Pv," ").trim(),g.unshift(g[0][h]=g[0][h]||{})):g[0][d[1]]=d[2].replace(Pv," ").trim();return g[0]})(t);nr[o]=Ur(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let a=n&&nr.g?nr.g:null;return n&&(nr.g=nr[o]),((u,c,d,h)=>{h?c.data=c.data.replace(h,u):c.data.indexOf(u)===-1&&(c.data=d?u+c.data:c.data+u)})(nr[o],e,r,a),o},QR=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),u=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=u?"."+u:a&&typeof a=="object"?a.props?"":Ur(a,""):a===!1?"":a}return r+i+(o??"")},"");function Wd(t){let e=this||{},n=t.call?t(e.p):t;return GR(n.unshift?n.raw?QR(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,HR(e.target),e.g,e.o,e.k)}let wS,Jp,Zp;Wd.bind({g:1});let wr=Wd.bind({k:1});function YR(t,e,n,r){Ur.p=e,wS=t,Jp=n,Zp=r}function _i(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),u=a.className||i.className;n.p=Object.assign({theme:Jp&&Jp()},a),n.o=/ *go\d+/.test(u),a.className=Wd.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=a.as||t,delete a.as),Zp&&c[0]&&Zp(a),wS(c,a)}return i}}var XR=t=>typeof t=="function",Bc=(t,e)=>XR(t)?t(e):t,JR=(()=>{let t=0;return()=>(++t).toString()})(),ES=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),ZR=20,Xu=new Map,eP=1e3,Av=t=>{if(Xu.has(t))return;let e=setTimeout(()=>{Xu.delete(t),hs({type:4,toastId:t})},eP);Xu.set(t,e)},tP=t=>{let e=Xu.get(t);e&&clearTimeout(e)},em=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,ZR)};case 1:return e.toast.id&&tP(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?em(t,{type:1,toast:n}):em(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?Av(r):t.toasts.forEach(s=>{Av(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},Ju=[],Zu={toasts:[],pausedAt:void 0},hs=t=>{Zu=em(Zu,t),Ju.forEach(e=>{e(Zu)})},nP={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},rP=(t={})=>{let[e,n]=M.useState(Zu);M.useEffect(()=>(Ju.push(n),()=>{let i=Ju.indexOf(n);i>-1&&Ju.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||nP[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},iP=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||JR()}),El=t=>(e,n)=>{let r=iP(e,t,n);return hs({type:2,toast:r}),r.id},Ht=(t,e)=>El("blank")(t,e);Ht.error=El("error");Ht.success=El("success");Ht.loading=El("loading");Ht.custom=El("custom");Ht.dismiss=t=>{hs({type:3,toastId:t})};Ht.remove=t=>hs({type:4,toastId:t});Ht.promise=(t,e,n)=>{let r=Ht.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(Ht.success(Bc(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{Ht.error(Bc(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var sP=(t,e)=>{hs({type:1,toast:{id:t,height:e}})},oP=()=>{hs({type:5,time:Date.now()})},aP=t=>{let{toasts:e,pausedAt:n}=rP(t);M.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let u=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(u<0){a.visible&&Ht.dismiss(a.id);return}return setTimeout(()=>Ht.dismiss(a.id),u)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=M.useCallback(()=>{n&&hs({type:6,time:Date.now()})},[n]),i=M.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:u=8,defaultPosition:c}=o||{},d=e.filter(_=>(_.position||c)===(s.position||c)&&_.height),h=d.findIndex(_=>_.id===s.id),g=d.filter((_,I)=>I<h&&_.visible).length;return d.filter(_=>_.visible).slice(...a?[g+1]:[0,g]).reduce((_,I)=>_+(I.height||0)+u,0)},[e]);return{toasts:e,handlers:{updateHeight:sP,startPause:oP,endPause:r,calculateOffset:i}}},lP=wr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,uP=wr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,cP=wr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,dP=_i("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${lP} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${uP} 0.15s ease-out forwards;
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
    animation: ${cP} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,hP=wr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,fP=_i("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${hP} 1s linear infinite;
`,pP=wr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,mP=wr`
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
}`,gP=_i("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pP} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${mP} 0.2s ease-out forwards;
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
`,yP=_i("div")`
  position: absolute;
`,vP=_i("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,_P=wr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,wP=_i("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${_P} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,EP=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?M.createElement(wP,null,e):e:n==="blank"?null:M.createElement(vP,null,M.createElement(fP,{...r}),n!=="loading"&&M.createElement(yP,null,n==="error"?M.createElement(dP,{...r}):M.createElement(gP,{...r})))},SP=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,TP=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,IP="0%{opacity:0;} 100%{opacity:1;}",xP="0%{opacity:1;} 100%{opacity:0;}",CP=_i("div")`
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
`,RP=_i("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,PP=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=ES()?[IP,xP]:[SP(n),TP(n)];return{animation:e?`${wr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${wr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},AP=M.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?PP(t.position||e||"top-center",t.visible):{opacity:0},s=M.createElement(EP,{toast:t}),o=M.createElement(RP,{...t.ariaProps},Bc(t.message,t));return M.createElement(CP,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):M.createElement(M.Fragment,null,s,o))});YR(M.createElement);var bP=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=M.useCallback(o=>{if(o){let a=()=>{let u=o.getBoundingClientRect().height;r(t,u)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return M.createElement("div",{ref:s,className:e,style:n},i)},kP=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:ES()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},NP=Wd`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,wu=16,OP=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:u}=aP(n);return M.createElement("div",{style:{position:"fixed",zIndex:9999,top:wu,left:wu,right:wu,bottom:wu,pointerEvents:"none",...s},className:o,onMouseEnter:u.startPause,onMouseLeave:u.endPause},a.map(c=>{let d=c.position||e,h=u.calculateOffset(c,{reverseOrder:t,gutter:r,defaultPosition:e}),g=kP(d,h);return M.createElement(bP,{id:c.id,key:c.id,onHeightUpdate:u.updateHeight,className:c.visible?NP:"",style:g},c.type==="custom"?Bc(c.message,c):i?i(c):M.createElement(AP,{toast:c,position:d}))}))},gt=Ht,SS={exports:{}},TS={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sl=M;function DP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var LP=typeof Object.is=="function"?Object.is:DP,MP=Sl.useSyncExternalStore,jP=Sl.useRef,VP=Sl.useEffect,FP=Sl.useMemo,zP=Sl.useDebugValue;TS.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=jP(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=FP(function(){function u(_){if(!c){if(c=!0,d=_,_=r(_),i!==void 0&&o.hasValue){var I=o.value;if(i(I,_))return h=I}return h=_}if(I=h,LP(d,_))return I;var R=r(_);return i!==void 0&&i(I,R)?I:(d=_,h=R)}var c=!1,d,h,g=n===void 0?null:n;return[function(){return u(e())},g===null?void 0:function(){return u(g())}]},[e,n,r,i]);var a=MP(t,s[0],s[1]);return VP(function(){o.hasValue=!0,o.value=a},[a]),zP(a),a};SS.exports=TS;var UP=SS.exports,qt="default"in Gf?xt:Gf,bv=Symbol.for("react-redux-context"),kv=typeof globalThis<"u"?globalThis:{};function $P(){if(!qt.createContext)return{};const t=kv[bv]??(kv[bv]=new Map);let e=t.get(qt.createContext);return e||(e=qt.createContext(null),t.set(qt.createContext,e)),e}var ci=$P(),BP=()=>{throw new Error("uSES not initialized!")};function jg(t=ci){return function(){return qt.useContext(t)}}var IS=jg(),xS=BP,WP=t=>{xS=t},HP=(t,e)=>t===e;function qP(t=ci){const e=t===ci?IS:jg(t),n=(r,i={})=>{const{equalityFn:s=HP,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:u,getServerState:c,stabilityCheck:d,identityFunctionCheck:h}=e();qt.useRef(!0);const g=qt.useCallback({[r.name](I){return r(I)}}[r.name],[r,d,o.stabilityCheck]),_=xS(u.addNestedSub,a.getState,c||a.getState,g,s);return qt.useDebugValue(_),_};return Object.assign(n,{withTypes:()=>n}),n}var fr=qP();function KP(t){t()}function GP(){let t=null,e=null;return{clear(){t=null,e=null},notify(){KP(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var Nv={notify(){},get:()=>[]};function QP(t,e){let n,r=Nv,i=0,s=!1;function o(R){d();const P=r.subscribe(R);let E=!1;return()=>{E||(E=!0,P(),h())}}function a(){r.notify()}function u(){I.onStateChange&&I.onStateChange()}function c(){return s}function d(){i++,n||(n=t.subscribe(u),r=GP())}function h(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Nv)}function g(){s||(s=!0,d())}function _(){s&&(s=!1,h())}const I={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:u,isSubscribed:c,trySubscribe:g,tryUnsubscribe:_,getListeners:()=>r};return I}var YP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",XP=typeof navigator<"u"&&navigator.product==="ReactNative",JP=YP||XP?qt.useLayoutEffect:qt.useEffect;function ZP({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=qt.useMemo(()=>{const c=QP(t);return{store:t,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=qt.useMemo(()=>t.getState(),[t]);JP(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,a]);const u=e||ci;return qt.createElement(u.Provider,{value:o},n)}var e6=ZP;function CS(t=ci){const e=t===ci?IS:jg(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var t6=CS();function n6(t=ci){const e=t===ci?t6:CS(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Hd=n6();WP(UP.useSyncExternalStoreWithSelector);function r6(t){return Se({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"},child:[]}]})(t)}const i6=be.img`
    width: 7rem;
    height: 5rem;
    @media (max-width: 600px) and (min-width: 0px) {
        width: 7rem;
        height: 5rem;
        margin-left: -1.7rem;
    }
`,s6=be.nav`
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
`,o6=be.a`
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
`,aa=()=>{const t=localStorage.getItem("users"),e=$d(),n=fr(o=>o.cart.items.length),r=()=>{localStorage.clear("users"),gt.success("Logout Successfult"),e("/Home"),console.log("logout",t)},i=()=>{document.getElementById("menuopen").style.display="flex",document.getElementById("menuopen").style.width="100%"},s=()=>{document.getElementById("menuopen").style.display="none",document.getElementById("menuopen").style.width="0"};return p.jsx(p.Fragment,{children:p.jsxs(s6,{children:[p.jsx("div",{children:p.jsx(i6,{src:bg,alt:"SiteLogo"})}),p.jsx("div",{children:p.jsxs("ul",{id:"menuopen",children:[p.jsx(ht,{to:"/Home",children:"Home"}),p.jsx(ht,{to:"/shop",children:"Shop"}),p.jsx(ht,{to:"/about",children:"About"}),t?p.jsx(ht,{onClick:r,children:"LogOut"}):p.jsx(ht,{to:"/Login",children:"Login"}),p.jsx(r6,{size:"1.9rem",color:"black",id:"cross",onClick:s})]})}),p.jsxs("div",{children:[p.jsxs("div",{children:[p.jsx(ht,{to:"/Cart",children:p.jsx(U3,{size:"1.7rem",color:"#383838"})}),n>=0&&p.jsx("span",{className:"badge badge-danger",children:n})]}),t?p.jsx(ht,{onClick:r,id:"logout",children:"LogOut"}):p.jsx(ht,{to:"/Login",children:"Login"}),p.jsx(o6,{href:"#",children:p.jsx($3,{size:"1.7rem",onClick:i})})]})]})})};var Ov={};/**
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
 */const RS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},a6=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},PS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(g=64)),r.push(n[d],n[h],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(RS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a6(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new l6;const g=s<<2|a>>4;if(r.push(g),c!==64){const _=a<<4&240|c>>2;if(r.push(_),h!==64){const I=c<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class l6 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u6=function(t){const e=RS(t);return PS.encodeByteArray(e,!0)},Wc=function(t){return u6(t).replace(/\./g,"")},AS=function(t){try{return PS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function c6(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const d6=()=>c6().__FIREBASE_DEFAULTS__,h6=()=>{if(typeof process>"u"||typeof Ov>"u")return;const t=Ov.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},f6=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&AS(t[1]);return e&&JSON.parse(e)},qd=()=>{try{return d6()||h6()||f6()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bS=t=>{var e,n;return(n=(e=qd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kS=t=>{const e=bS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},NS=()=>{var t;return(t=qd())===null||t===void 0?void 0:t.config},OS=t=>{var e;return(e=qd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class p6{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function DS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wc(JSON.stringify(n)),Wc(JSON.stringify(o)),""].join(".")}/**
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
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function m6(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function g6(){var t;const e=(t=qd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function y6(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function v6(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _6(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function w6(){return!g6()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function E6(){try{return typeof indexedDB=="object"}catch{return!1}}function S6(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const T6="FirebaseError";class Gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=T6,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tl.prototype.create)}}class Tl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?I6(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Gn(i,a,r)}}function I6(t,e){return t.replace(x6,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const x6=/\{\$([^}]+)}/g;function C6(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Dv(s)&&Dv(o)){if(!Hc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dv(t){return t!==null&&typeof t=="object"}/**
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
 */function Il(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function la(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ua(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function R6(t,e){const n=new P6(t,e);return n.subscribe.bind(n)}class P6{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");A6(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=If),i.error===void 0&&(i.error=If),i.complete===void 0&&(i.complete=If);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function A6(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function If(){}/**
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
 */function _t(t){return t&&t._delegate?t._delegate:t}class di{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Oi="[DEFAULT]";/**
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
 */class b6{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new p6;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(N6(e))try{this.getOrInitializeService({instanceIdentifier:Oi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Oi){return this.instances.has(e)}getOptions(e=Oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:k6(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Oi){return this.component?this.component.multipleInstances?e:Oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function k6(t){return t===Oi?void 0:t}function N6(t){return t.instantiationMode==="EAGER"}/**
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
 */class O6{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new b6(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const D6={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},L6=se.INFO,M6={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},j6=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=M6[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vg{constructor(e){this.name=e,this._logLevel=L6,this._logHandler=j6,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?D6[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const V6=(t,e)=>e.some(n=>t instanceof n);let Lv,Mv;function F6(){return Lv||(Lv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function z6(){return Mv||(Mv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const LS=new WeakMap,tm=new WeakMap,MS=new WeakMap,xf=new WeakMap,Fg=new WeakMap;function U6(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ii(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&LS.set(n,t)}).catch(()=>{}),Fg.set(e,t),e}function $6(t){if(tm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});tm.set(t,e)}let nm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||MS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ii(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function B6(t){nm=t(nm)}function W6(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cf(this),e,...n);return MS.set(r,e.sort?e.sort():[e]),ii(r)}:z6().includes(t)?function(...e){return t.apply(Cf(this),e),ii(LS.get(this))}:function(...e){return ii(t.apply(Cf(this),e))}}function H6(t){return typeof t=="function"?W6(t):(t instanceof IDBTransaction&&$6(t),V6(t,F6())?new Proxy(t,nm):t)}function ii(t){if(t instanceof IDBRequest)return U6(t);if(xf.has(t))return xf.get(t);const e=H6(t);return e!==t&&(xf.set(t,e),Fg.set(e,t)),e}const Cf=t=>Fg.get(t);function q6(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ii(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ii(o.result),u.oldVersion,u.newVersion,ii(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const K6=["get","getKey","getAll","getAllKeys","count"],G6=["put","add","delete","clear"],Rf=new Map;function jv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rf.get(e))return Rf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=G6.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||K6.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Rf.set(e,s),s}B6(t=>({...t,get:(e,n,r)=>jv(e,n)||t.get(e,n,r),has:(e,n)=>!!jv(e,n)||t.has(e,n)}));/**
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
 */class Q6{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Y6(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Y6(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rm="@firebase/app",Vv="0.10.10";/**
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
 */const Er=new Vg("@firebase/app"),X6="@firebase/app-compat",J6="@firebase/analytics-compat",Z6="@firebase/analytics",e9="@firebase/app-check-compat",t9="@firebase/app-check",n9="@firebase/auth",r9="@firebase/auth-compat",i9="@firebase/database",s9="@firebase/database-compat",o9="@firebase/functions",a9="@firebase/functions-compat",l9="@firebase/installations",u9="@firebase/installations-compat",c9="@firebase/messaging",d9="@firebase/messaging-compat",h9="@firebase/performance",f9="@firebase/performance-compat",p9="@firebase/remote-config",m9="@firebase/remote-config-compat",g9="@firebase/storage",y9="@firebase/storage-compat",v9="@firebase/firestore",_9="@firebase/vertexai-preview",w9="@firebase/firestore-compat",E9="firebase",S9="10.13.1";/**
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
 */const im="[DEFAULT]",T9={[rm]:"fire-core",[X6]:"fire-core-compat",[Z6]:"fire-analytics",[J6]:"fire-analytics-compat",[t9]:"fire-app-check",[e9]:"fire-app-check-compat",[n9]:"fire-auth",[r9]:"fire-auth-compat",[i9]:"fire-rtdb",[s9]:"fire-rtdb-compat",[o9]:"fire-fn",[a9]:"fire-fn-compat",[l9]:"fire-iid",[u9]:"fire-iid-compat",[c9]:"fire-fcm",[d9]:"fire-fcm-compat",[h9]:"fire-perf",[f9]:"fire-perf-compat",[p9]:"fire-rc",[m9]:"fire-rc-compat",[g9]:"fire-gcs",[y9]:"fire-gcs-compat",[v9]:"fire-fst",[w9]:"fire-fst-compat",[_9]:"fire-vertex","fire-js":"fire-js",[E9]:"fire-js-all"};/**
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
 */const qc=new Map,I9=new Map,sm=new Map;function Fv(t,e){try{t.container.addComponent(e)}catch(n){Er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(sm.has(e))return Er.debug(`There were multiple attempts to register component ${e}.`),!1;sm.set(e,t);for(const n of qc.values())Fv(n,t);for(const n of I9.values())Fv(n,t);return!0}function Kd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function wn(t){return t.settings!==void 0}/**
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
 */const x9={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},si=new Tl("app","Firebase",x9);/**
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
 */class C9{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new di("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw si.create("app-deleted",{appName:this._name})}}/**
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
 */const fs=S9;function jS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:im,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw si.create("bad-app-name",{appName:String(i)});if(n||(n=NS()),!n)throw si.create("no-options");const s=qc.get(i);if(s){if(Hc(n,s.options)&&Hc(r,s.config))return s;throw si.create("duplicate-app",{appName:i})}const o=new O6(i);for(const u of sm.values())o.addComponent(u);const a=new C9(n,r,o);return qc.set(i,a),a}function zg(t=im){const e=qc.get(t);if(!e&&t===im&&NS())return jS();if(!e)throw si.create("no-app",{appName:t});return e}function zn(t,e,n){var r;let i=(r=T9[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Er.warn(a.join(" "));return}es(new di(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const R9="firebase-heartbeat-database",P9=1,el="firebase-heartbeat-store";let Pf=null;function VS(){return Pf||(Pf=q6(R9,P9,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(el)}catch(n){console.warn(n)}}}}).catch(t=>{throw si.create("idb-open",{originalErrorMessage:t.message})})),Pf}async function A9(t){try{const n=(await VS()).transaction(el),r=await n.objectStore(el).get(FS(t));return await n.done,r}catch(e){if(e instanceof Gn)Er.warn(e.message);else{const n=si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Er.warn(n.message)}}}async function zv(t,e){try{const r=(await VS()).transaction(el,"readwrite");await r.objectStore(el).put(e,FS(t)),await r.done}catch(n){if(n instanceof Gn)Er.warn(n.message);else{const r=si.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Er.warn(r.message)}}}function FS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const b9=1024,k9=30*24*60*60*1e3;class N9{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new D9(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Uv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=k9}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Er.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uv(),{heartbeatsToSend:r,unsentEntries:i}=O9(this._heartbeatsCache.heartbeats),s=Wc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Er.warn(n),""}}}function Uv(){return new Date().toISOString().substring(0,10)}function O9(t,e=b9){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$v(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$v(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class D9{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return E6()?S6().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await A9(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $v(t){return Wc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function L9(t){es(new di("platform-logger",e=>new Q6(e),"PRIVATE")),es(new di("heartbeat",e=>new N9(e),"PRIVATE")),zn(rm,Vv,t),zn(rm,Vv,"esm2017"),zn("fire-js","")}L9("");function Ug(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function zS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const M9=zS,US=new Tl("auth","Firebase",zS());/**
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
 */const Kc=new Vg("@firebase/auth");function j9(t,...e){Kc.logLevel<=se.WARN&&Kc.warn(`Auth (${fs}): ${t}`,...e)}function ec(t,...e){Kc.logLevel<=se.ERROR&&Kc.error(`Auth (${fs}): ${t}`,...e)}/**
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
 */function cn(t,...e){throw Bg(t,...e)}function Cn(t,...e){return Bg(t,...e)}function $g(t,e,n){const r=Object.assign(Object.assign({},M9()),{[e]:n});return new Tl("auth","Firebase",r).create(e,{appName:t.name})}function pr(t){return $g(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function V9(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&cn(t,"argument-error"),$g(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return US.create(t,...e)}function G(t,e,...n){if(!t)throw Bg(e,...n)}function ur(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ec(e),new Error(e)}function Sr(t,e){t||ur(e)}/**
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
 */function om(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function F9(){return Bv()==="http:"||Bv()==="https:"}function Bv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function z9(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(F9()||y6()||"connection"in navigator)?navigator.onLine:!0}function U9(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sr(n>e,"Short delay should be less than long delay!"),this.isMobile=m6()||v6()}get(){return z9()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wg(t,e){Sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $S{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $9={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const B9=new xl(3e4,6e4);function wi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ei(t,e,n,r,i={}){return BS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Il(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),$S.fetch()(WS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function BS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$9),e);try{const i=new H9(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Eu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Eu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Eu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw $g(t,d,c);cn(t,d)}}catch(i){if(i instanceof Gn)throw i;cn(t,"network-request-failed",{message:String(i)})}}async function Cl(t,e,n,r,i={}){const s=await Ei(t,e,n,r,i);return"mfaPendingCredential"in s&&cn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function WS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Wg(t.config,i):`${t.config.apiScheme}://${i}`}function W9(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class H9{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Cn(this.auth,"network-request-failed")),B9.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Eu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Cn(t,e,r);return i.customData._tokenResponse=n,i}function Wv(t){return t!==void 0&&t.enterprise!==void 0}class q9{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return W9(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function K9(t,e){return Ei(t,"GET","/v2/recaptchaConfig",wi(t,e))}/**
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
 */async function G9(t,e){return Ei(t,"POST","/v1/accounts:delete",e)}async function HS(t,e){return Ei(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ra(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Q9(t,e=!1){const n=_t(t),r=await n.getIdToken(e),i=Hg(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ra(Af(i.auth_time)),issuedAtTime:Ra(Af(i.iat)),expirationTime:Ra(Af(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Af(t){return Number(t)*1e3}function Hg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ec("JWT malformed, contained fewer than 3 sections"),null;try{const i=AS(n);return i?JSON.parse(i):(ec("Failed to decode base64 JWT payload"),null)}catch(i){return ec("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hv(t){const e=Hg(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gn&&Y9(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Y9({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class X9{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class am{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ra(this.lastLoginAt),this.creationTime=Ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await tl(t,HS(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?qS(s.providerUserInfo):[],a=Z9(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new am(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function J9(t){const e=_t(t);await Gc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Z9(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qS(t){return t.map(e=>{var{providerId:n}=e,r=Ug(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function eA(t,e){const n=await BS(t,{},async()=>{const r=Il({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=WS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$S.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tA(t,e){return Ei(t,"POST","/v2/accounts:revokeToken",wi(t,e))}/**
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
 */class Hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Hv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await eA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hs;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hs,this.toJSON())}_performRefresh(){return ur("not implemented")}}/**
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
 */function Nr(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ug(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X9(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new am(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await tl(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Q9(this,e)}reload(){return J9(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Gc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wn(this.auth.app))return Promise.reject(pr(this.auth));const e=await this.getIdToken();return await tl(this,G9(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:w,emailVerified:C,isAnonymous:N,providerData:D,stsTokenManager:T}=n;G(w&&T,e,"internal-error");const v=Hs.fromJSON(this.name,T);G(typeof w=="string",e,"internal-error"),Nr(h,e.name),Nr(g,e.name),G(typeof C=="boolean",e,"internal-error"),G(typeof N=="boolean",e,"internal-error"),Nr(_,e.name),Nr(I,e.name),Nr(R,e.name),Nr(P,e.name),Nr(E,e.name),Nr(y,e.name);const x=new cr({uid:w,auth:e,email:g,emailVerified:C,displayName:h,isAnonymous:N,photoURL:I,phoneNumber:_,tenantId:R,stsTokenManager:v,createdAt:E,lastLoginAt:y});return D&&Array.isArray(D)&&(x.providerData=D.map(A=>Object.assign({},A))),P&&(x._redirectEventId=P),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hs;i.updateFromServerResponse(n);const s=new cr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Gc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?qS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Hs;a.updateFromIdToken(r);const u=new cr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new am(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const qv=new Map;function dr(t){Sr(t instanceof Function,"Expected a class definition");let e=qv.get(t);return e?(Sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qv.set(t,e),e)}/**
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
 */class KS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}KS.type="NONE";const Kv=KS;/**
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
 */function tc(t,e,n){return`firebase:${t}:${e}:${n}`}class qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=tc(this.userKey,i.apiKey,s),this.fullPersistenceKey=tc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qs(dr(Kv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||dr(Kv);const o=tc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const h=cr._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new qs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new qs(s,e,r))}}/**
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
 */function Gv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(XS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(GS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ZS(e))return"Blackberry";if(eT(e))return"Webos";if(QS(e))return"Safari";if((e.includes("chrome/")||YS(e))&&!e.includes("edge/"))return"Chrome";if(JS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function GS(t=vt()){return/firefox\//i.test(t)}function QS(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function YS(t=vt()){return/crios\//i.test(t)}function XS(t=vt()){return/iemobile/i.test(t)}function JS(t=vt()){return/android/i.test(t)}function ZS(t=vt()){return/blackberry/i.test(t)}function eT(t=vt()){return/webos/i.test(t)}function qg(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nA(t=vt()){var e;return qg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rA(){return _6()&&document.documentMode===10}function tT(t=vt()){return qg(t)||JS(t)||eT(t)||ZS(t)||/windows phone/i.test(t)||XS(t)}/**
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
 */function nT(t,e=[]){let n;switch(t){case"Browser":n=Gv(vt());break;case"Worker":n=`${Gv(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
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
 */class iA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function sA(t,e={}){return Ei(t,"GET","/v2/passwordPolicy",wi(t,e))}/**
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
 */const oA=6;class aA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:oA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class lA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qv(this),this.idTokenSubscription=new Qv(this),this.beforeStateQueue=new iA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=US,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await HS(this,{idToken:e}),r=await cr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(wn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=U9()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wn(this.app))return Promise.reject(pr(this));const n=e?_t(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wn(this.app)?Promise.reject(pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wn(this.app)?Promise.reject(pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sA(this),n=new aA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dr(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[dr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&j9(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Si(t){return _t(t)}class Qv{constructor(e){this.auth=e,this.observer=null,this.addObserver=R6(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uA(t){Gd=t}function rT(t){return Gd.loadJS(t)}function cA(){return Gd.recaptchaEnterpriseScript}function dA(){return Gd.gapiScript}function hA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const fA="recaptcha-enterprise",pA="NO_RECAPTCHA";class mA{constructor(e){this.type=fA,this.auth=Si(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{K9(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new q9(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Wv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(pA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Wv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=cA();u.length!==0&&(u+=a),rT(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Yv(t,e,n,r=!1){const i=new mA(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function lm(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Yv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Yv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function gA(t,e){const n=Kd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Hc(s,e??{}))return i;cn(i,"already-initialized")}return n.initialize({options:e})}function yA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vA(t,e,n){const r=Si(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=iT(e),{host:o,port:a}=_A(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),wA()}function iT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _A(t){const e=iT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xv(o)}}}function Xv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Kg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ur("not implemented")}_getIdTokenResponse(e){return ur("not implemented")}_linkToIdToken(e,n){return ur("not implemented")}_getReauthenticationResolver(e){return ur("not implemented")}}async function EA(t,e){return Ei(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function SA(t,e){return Cl(t,"POST","/v1/accounts:signInWithPassword",wi(t,e))}/**
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
 */async function TA(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",wi(t,e))}async function IA(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",wi(t,e))}/**
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
 */class nl extends Kg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new nl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new nl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lm(e,n,"signInWithPassword",SA);case"emailLink":return TA(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lm(e,r,"signUpPassword",EA);case"emailLink":return IA(e,{idToken:n,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ks(t,e){return Cl(t,"POST","/v1/accounts:signInWithIdp",wi(t,e))}/**
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
 */const xA="http://localhost";class ts extends Kg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ug(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ts(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ks(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ks(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ks(e,n)}buildRequest(){const e={requestUri:xA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Il(n)}return e}}/**
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
 */function CA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RA(t){const e=la(ua(t)).link,n=e?la(ua(e)).deep_link_id:null,r=la(ua(t)).deep_link_id;return(r?la(ua(r)).link:null)||r||n||e||t}class Gg{constructor(e){var n,r,i,s,o,a;const u=la(ua(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,h=CA((i=u.mode)!==null&&i!==void 0?i:null);G(c&&d&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=RA(e);try{return new Gg(n)}catch{return null}}}/**
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
 */class xo{constructor(){this.providerId=xo.PROVIDER_ID}static credential(e,n){return nl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gg.parseLink(n);return G(r,"argument-error"),nl._fromEmailAndCode(e,r.code,r.tenantId)}}xo.PROVIDER_ID="password";xo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Rl extends Qg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $r extends Rl{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.FACEBOOK_SIGN_IN_METHOD="facebook.com";$r.PROVIDER_ID="facebook.com";/**
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
 */class vn extends Rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
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
 */class Br extends Rl{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.GITHUB_SIGN_IN_METHOD="github.com";Br.PROVIDER_ID="github.com";/**
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
 */class Wr extends Rl{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.TWITTER_SIGN_IN_METHOD="twitter.com";Wr.PROVIDER_ID="twitter.com";/**
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
 */async function PA(t,e){return Cl(t,"POST","/v1/accounts:signUp",wi(t,e))}/**
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
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await cr._fromIdTokenResponse(e,r,i),o=Jv(r);return new ns({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Jv(r);return new ns({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Jv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Qc extends Gn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Qc(e,n,r,i)}}function sT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qc._fromErrorAndOperation(t,s,e,r):s})}async function AA(t,e,n=!1){const r=await tl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",r)}/**
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
 */async function bA(t,e,n=!1){const{auth:r}=t;if(wn(r.app))return Promise.reject(pr(r));const i="reauthenticate";try{const s=await tl(t,sT(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Hg(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),ns._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&cn(r,"user-mismatch"),s}}/**
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
 */async function oT(t,e,n=!1){if(wn(t.app))return Promise.reject(pr(t));const r="signIn",i=await sT(t,r,e),s=await ns._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function kA(t,e){return oT(Si(t),e)}/**
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
 */async function aT(t){const e=Si(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function NA(t,e,n){if(wn(t.app))return Promise.reject(pr(t));const r=Si(t),o=await lm(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",PA).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&aT(t),u}),a=await ns._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function OA(t,e,n){return wn(t.app)?Promise.reject(pr(t)):kA(_t(t),xo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&aT(t),r})}function DA(t,e,n,r){return _t(t).onIdTokenChanged(e,n,r)}function LA(t,e,n){return _t(t).beforeAuthStateChanged(e,n)}const Yc="__sak";/**
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
 */class lT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yc,"1"),this.storage.removeItem(Yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const MA=1e3,jA=10;class uT extends lT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);rA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},MA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uT.type="LOCAL";const VA=uT;/**
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
 */class cT extends lT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cT.type="SESSION";const dT=cT;/**
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
 */function FA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Qd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await FA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qd.receivers=[];/**
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
 */function Yg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Yg("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const g=h;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Un(){return window}function UA(t){Un().location.href=t}/**
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
 */function hT(){return typeof Un().WorkerGlobalScope<"u"&&typeof Un().importScripts=="function"}async function $A(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function WA(){return hT()?self:null}/**
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
 */const fT="firebaseLocalStorageDb",HA=1,Xc="firebaseLocalStorage",pT="fbase_key";class Pl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yd(t,e){return t.transaction([Xc],e?"readwrite":"readonly").objectStore(Xc)}function qA(){const t=indexedDB.deleteDatabase(fT);return new Pl(t).toPromise()}function um(){const t=indexedDB.open(fT,HA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xc,{keyPath:pT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xc)?e(r):(r.close(),await qA(),e(await um()))})})}async function Zv(t,e,n){const r=Yd(t,!0).put({[pT]:e,value:n});return new Pl(r).toPromise()}async function KA(t,e){const n=Yd(t,!1).get(e),r=await new Pl(n).toPromise();return r===void 0?null:r.value}function e_(t,e){const n=Yd(t,!0).delete(e);return new Pl(n).toPromise()}const GA=800,QA=3;class mT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await um(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>QA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qd._getInstance(WA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $A(),!this.activeServiceWorker)return;this.sender=new zA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await um();return await Zv(e,Yc,"1"),await e_(e,Yc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>e_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yd(i,!1).getAll();return new Pl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mT.type="LOCAL";const YA=mT;new xl(3e4,6e4);/**
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
 */function gT(t,e){return e?dr(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xg extends Kg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function XA(t){return oT(t.auth,new Xg(t),t.bypassAuthState)}function JA(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),bA(n,new Xg(t),t.bypassAuthState)}async function ZA(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),AA(n,new Xg(t),t.bypassAuthState)}/**
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
 */class yT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XA;case"linkViaPopup":case"linkViaRedirect":return ZA;case"reauthViaPopup":case"reauthViaRedirect":return JA;default:cn(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eb=new xl(2e3,1e4);async function tb(t,e,n){if(wn(t.app))return Promise.reject(Cn(t,"operation-not-supported-in-this-environment"));const r=Si(t);V9(t,e,Qg);const i=gT(r,n);return new zi(r,"signInViaPopup",e,i).executeNotNull()}class zi extends yT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const e=Yg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eb.get())};e()}}zi.currentPopupAction=null;/**
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
 */const nb="pendingRedirect",nc=new Map;class rb extends yT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nc.get(this.auth._key());if(!e){try{const r=await ib(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nc.set(this.auth._key(),e)}return this.bypassAuthState||nc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ib(t,e){const n=ab(e),r=ob(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sb(t,e){nc.set(t._key(),e)}function ob(t){return dr(t._redirectPersistence)}function ab(t){return tc(nb,t.config.apiKey,t.name)}async function lb(t,e,n=!1){if(wn(t.app))return Promise.reject(pr(t));const r=Si(t),i=gT(r,e),o=await new rb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ub=10*60*1e3;class cb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!db(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ub&&this.cachedEventUids.clear(),this.cachedEventUids.has(t_(e))}saveEventToCache(e){this.cachedEventUids.add(t_(e)),this.lastProcessedEventTime=Date.now()}}function t_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function db(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vT(t);default:return!1}}/**
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
 */async function hb(t,e={}){return Ei(t,"GET","/v1/projects",e)}/**
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
 */const fb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pb=/^https?/;async function mb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hb(t);for(const n of e)try{if(gb(n))return}catch{}cn(t,"unauthorized-domain")}function gb(t){const e=om(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pb.test(n))return!1;if(fb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const yb=new xl(3e4,6e4);function n_(){const t=Un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vb(t){return new Promise((e,n)=>{var r,i,s;function o(){n_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{n_(),n(Cn(t,"network-request-failed"))},timeout:yb.get()})}if(!((i=(r=Un().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Un().gapi)===null||s===void 0)&&s.load)o();else{const a=hA("iframefcb");return Un()[a]=()=>{gapi.load?o():n(Cn(t,"network-request-failed"))},rT(`${dA()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw rc=null,e})}let rc=null;function _b(t){return rc=rc||vb(t),rc}/**
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
 */const wb=new xl(5e3,15e3),Eb="__/auth/iframe",Sb="emulator/auth/iframe",Tb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ib=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xb(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wg(e,Sb):`https://${t.config.authDomain}/${Eb}`,r={apiKey:e.apiKey,appName:t.name,v:fs},i=Ib.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Il(r).slice(1)}`}async function Cb(t){const e=await _b(t),n=Un().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:xb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Cn(t,"network-request-failed"),a=Un().setTimeout(()=>{s(o)},wb.get());function u(){Un().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Rb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pb=500,Ab=600,bb="_blank",kb="http://localhost";class r_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nb(t,e,n,r=Pb,i=Ab){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},Rb),{width:r.toString(),height:i.toString(),top:s,left:o}),c=vt().toLowerCase();n&&(a=YS(c)?bb:n),GS(c)&&(e=e||kb,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[_,I])=>`${g}${_}=${I},`,"");if(nA(c)&&a!=="_self")return Ob(e||"",a),new r_(null);const h=window.open(e||"",a,d);G(h,t,"popup-blocked");try{h.focus()}catch{}return new r_(h)}function Ob(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Db="__/auth/handler",Lb="emulator/auth/handler",Mb=encodeURIComponent("fac");async function i_(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:i};if(e instanceof Qg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",C6(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Rl){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${Mb}=${encodeURIComponent(u)}`:"";return`${jb(t)}?${Il(a).slice(1)}${c}`}function jb({config:t}){return t.emulator?Wg(t,Lb):`https://${t.authDomain}/${Db}`}/**
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
 */const bf="webStorageSupport";class Vb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dT,this._completeRedirectFn=lb,this._overrideRedirectResult=sb}async _openPopup(e,n,r,i){var s;Sr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await i_(e,n,r,om(),i);return Nb(e,o,Yg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await i_(e,n,r,om(),i);return UA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Sr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Cb(e),r=new cb(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bf,{type:bf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bf];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tT()||QS()||qg()}}const Fb=Vb;var s_="@firebase/auth",o_="1.7.8";/**
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
 */class zb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ub(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $b(t){es(new di("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nT(t)},c=new lA(r,i,s,u);return yA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),es(new di("auth-internal",e=>{const n=Si(e.getProvider("auth").getImmediate());return(r=>new zb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(s_,o_,Ub(t)),zn(s_,o_,"esm2017")}/**
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
 */const Bb=5*60,Wb=OS("authIdTokenMaxAge")||Bb;let a_=null;const Hb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Wb)return;const i=n==null?void 0:n.token;a_!==i&&(a_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qb(t=zg()){const e=Kd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gA(t,{popupRedirectResolver:Fb,persistence:[YA,VA,dT]}),r=OS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Hb(s.toString());LA(n,o,()=>o(n.currentUser)),DA(n,a=>o(a))}}const i=bS("auth");return i&&vA(n,`http://${i}`),n}function Kb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Kb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$b("Browser");var Gb="firebase",Qb="10.13.1";/**
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
 */zn(Gb,Qb,"app");var l_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qi,_T;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function x(){}x.prototype=v.prototype,T.D=v.prototype,T.prototype=new x,T.prototype.constructor=T,T.C=function(A,b,O){for(var k=Array(arguments.length-2),At=2;At<arguments.length;At++)k[At-2]=arguments[At];return v.prototype[b].apply(A,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,v,x){x||(x=0);var A=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)A[b]=v.charCodeAt(x++)|v.charCodeAt(x++)<<8|v.charCodeAt(x++)<<16|v.charCodeAt(x++)<<24;else for(b=0;16>b;++b)A[b]=v[x++]|v[x++]<<8|v[x++]<<16|v[x++]<<24;v=T.g[0],x=T.g[1],b=T.g[2];var O=T.g[3],k=v+(O^x&(b^O))+A[0]+3614090360&4294967295;v=x+(k<<7&4294967295|k>>>25),k=O+(b^v&(x^b))+A[1]+3905402710&4294967295,O=v+(k<<12&4294967295|k>>>20),k=b+(x^O&(v^x))+A[2]+606105819&4294967295,b=O+(k<<17&4294967295|k>>>15),k=x+(v^b&(O^v))+A[3]+3250441966&4294967295,x=b+(k<<22&4294967295|k>>>10),k=v+(O^x&(b^O))+A[4]+4118548399&4294967295,v=x+(k<<7&4294967295|k>>>25),k=O+(b^v&(x^b))+A[5]+1200080426&4294967295,O=v+(k<<12&4294967295|k>>>20),k=b+(x^O&(v^x))+A[6]+2821735955&4294967295,b=O+(k<<17&4294967295|k>>>15),k=x+(v^b&(O^v))+A[7]+4249261313&4294967295,x=b+(k<<22&4294967295|k>>>10),k=v+(O^x&(b^O))+A[8]+1770035416&4294967295,v=x+(k<<7&4294967295|k>>>25),k=O+(b^v&(x^b))+A[9]+2336552879&4294967295,O=v+(k<<12&4294967295|k>>>20),k=b+(x^O&(v^x))+A[10]+4294925233&4294967295,b=O+(k<<17&4294967295|k>>>15),k=x+(v^b&(O^v))+A[11]+2304563134&4294967295,x=b+(k<<22&4294967295|k>>>10),k=v+(O^x&(b^O))+A[12]+1804603682&4294967295,v=x+(k<<7&4294967295|k>>>25),k=O+(b^v&(x^b))+A[13]+4254626195&4294967295,O=v+(k<<12&4294967295|k>>>20),k=b+(x^O&(v^x))+A[14]+2792965006&4294967295,b=O+(k<<17&4294967295|k>>>15),k=x+(v^b&(O^v))+A[15]+1236535329&4294967295,x=b+(k<<22&4294967295|k>>>10),k=v+(b^O&(x^b))+A[1]+4129170786&4294967295,v=x+(k<<5&4294967295|k>>>27),k=O+(x^b&(v^x))+A[6]+3225465664&4294967295,O=v+(k<<9&4294967295|k>>>23),k=b+(v^x&(O^v))+A[11]+643717713&4294967295,b=O+(k<<14&4294967295|k>>>18),k=x+(O^v&(b^O))+A[0]+3921069994&4294967295,x=b+(k<<20&4294967295|k>>>12),k=v+(b^O&(x^b))+A[5]+3593408605&4294967295,v=x+(k<<5&4294967295|k>>>27),k=O+(x^b&(v^x))+A[10]+38016083&4294967295,O=v+(k<<9&4294967295|k>>>23),k=b+(v^x&(O^v))+A[15]+3634488961&4294967295,b=O+(k<<14&4294967295|k>>>18),k=x+(O^v&(b^O))+A[4]+3889429448&4294967295,x=b+(k<<20&4294967295|k>>>12),k=v+(b^O&(x^b))+A[9]+568446438&4294967295,v=x+(k<<5&4294967295|k>>>27),k=O+(x^b&(v^x))+A[14]+3275163606&4294967295,O=v+(k<<9&4294967295|k>>>23),k=b+(v^x&(O^v))+A[3]+4107603335&4294967295,b=O+(k<<14&4294967295|k>>>18),k=x+(O^v&(b^O))+A[8]+1163531501&4294967295,x=b+(k<<20&4294967295|k>>>12),k=v+(b^O&(x^b))+A[13]+2850285829&4294967295,v=x+(k<<5&4294967295|k>>>27),k=O+(x^b&(v^x))+A[2]+4243563512&4294967295,O=v+(k<<9&4294967295|k>>>23),k=b+(v^x&(O^v))+A[7]+1735328473&4294967295,b=O+(k<<14&4294967295|k>>>18),k=x+(O^v&(b^O))+A[12]+2368359562&4294967295,x=b+(k<<20&4294967295|k>>>12),k=v+(x^b^O)+A[5]+4294588738&4294967295,v=x+(k<<4&4294967295|k>>>28),k=O+(v^x^b)+A[8]+2272392833&4294967295,O=v+(k<<11&4294967295|k>>>21),k=b+(O^v^x)+A[11]+1839030562&4294967295,b=O+(k<<16&4294967295|k>>>16),k=x+(b^O^v)+A[14]+4259657740&4294967295,x=b+(k<<23&4294967295|k>>>9),k=v+(x^b^O)+A[1]+2763975236&4294967295,v=x+(k<<4&4294967295|k>>>28),k=O+(v^x^b)+A[4]+1272893353&4294967295,O=v+(k<<11&4294967295|k>>>21),k=b+(O^v^x)+A[7]+4139469664&4294967295,b=O+(k<<16&4294967295|k>>>16),k=x+(b^O^v)+A[10]+3200236656&4294967295,x=b+(k<<23&4294967295|k>>>9),k=v+(x^b^O)+A[13]+681279174&4294967295,v=x+(k<<4&4294967295|k>>>28),k=O+(v^x^b)+A[0]+3936430074&4294967295,O=v+(k<<11&4294967295|k>>>21),k=b+(O^v^x)+A[3]+3572445317&4294967295,b=O+(k<<16&4294967295|k>>>16),k=x+(b^O^v)+A[6]+76029189&4294967295,x=b+(k<<23&4294967295|k>>>9),k=v+(x^b^O)+A[9]+3654602809&4294967295,v=x+(k<<4&4294967295|k>>>28),k=O+(v^x^b)+A[12]+3873151461&4294967295,O=v+(k<<11&4294967295|k>>>21),k=b+(O^v^x)+A[15]+530742520&4294967295,b=O+(k<<16&4294967295|k>>>16),k=x+(b^O^v)+A[2]+3299628645&4294967295,x=b+(k<<23&4294967295|k>>>9),k=v+(b^(x|~O))+A[0]+4096336452&4294967295,v=x+(k<<6&4294967295|k>>>26),k=O+(x^(v|~b))+A[7]+1126891415&4294967295,O=v+(k<<10&4294967295|k>>>22),k=b+(v^(O|~x))+A[14]+2878612391&4294967295,b=O+(k<<15&4294967295|k>>>17),k=x+(O^(b|~v))+A[5]+4237533241&4294967295,x=b+(k<<21&4294967295|k>>>11),k=v+(b^(x|~O))+A[12]+1700485571&4294967295,v=x+(k<<6&4294967295|k>>>26),k=O+(x^(v|~b))+A[3]+2399980690&4294967295,O=v+(k<<10&4294967295|k>>>22),k=b+(v^(O|~x))+A[10]+4293915773&4294967295,b=O+(k<<15&4294967295|k>>>17),k=x+(O^(b|~v))+A[1]+2240044497&4294967295,x=b+(k<<21&4294967295|k>>>11),k=v+(b^(x|~O))+A[8]+1873313359&4294967295,v=x+(k<<6&4294967295|k>>>26),k=O+(x^(v|~b))+A[15]+4264355552&4294967295,O=v+(k<<10&4294967295|k>>>22),k=b+(v^(O|~x))+A[6]+2734768916&4294967295,b=O+(k<<15&4294967295|k>>>17),k=x+(O^(b|~v))+A[13]+1309151649&4294967295,x=b+(k<<21&4294967295|k>>>11),k=v+(b^(x|~O))+A[4]+4149444226&4294967295,v=x+(k<<6&4294967295|k>>>26),k=O+(x^(v|~b))+A[11]+3174756917&4294967295,O=v+(k<<10&4294967295|k>>>22),k=b+(v^(O|~x))+A[2]+718787259&4294967295,b=O+(k<<15&4294967295|k>>>17),k=x+(O^(b|~v))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(b+(k<<21&4294967295|k>>>11))&4294967295,T.g[2]=T.g[2]+b&4294967295,T.g[3]=T.g[3]+O&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var x=v-this.blockSize,A=this.B,b=this.h,O=0;O<v;){if(b==0)for(;O<=x;)i(this,T,O),O+=this.blockSize;if(typeof T=="string"){for(;O<v;)if(A[b++]=T.charCodeAt(O++),b==this.blockSize){i(this,A),b=0;break}}else for(;O<v;)if(A[b++]=T[O++],b==this.blockSize){i(this,A),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var x=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=x&255,x/=256;for(this.u(T),T=Array(16),v=x=0;4>v;++v)for(var A=0;32>A;A+=8)T[x++]=this.g[v]>>>A&255;return T};function s(T,v){var x=a;return Object.prototype.hasOwnProperty.call(x,T)?x[T]:x[T]=v(T)}function o(T,v){this.h=v;for(var x=[],A=!0,b=T.length-1;0<=b;b--){var O=T[b]|0;A&&O==v||(x[b]=O,A=!1)}this.g=x}var a={};function u(T){return-128<=T&&128>T?s(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return h;if(0>T)return P(c(-T));for(var v=[],x=1,A=0;T>=x;A++)v[A]=T/x|0,x*=4294967296;return new o(v,0)}function d(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return P(d(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=c(Math.pow(v,8)),A=h,b=0;b<T.length;b+=8){var O=Math.min(8,T.length-b),k=parseInt(T.substring(b,b+O),v);8>O?(O=c(Math.pow(v,O)),A=A.j(O).add(c(k))):(A=A.j(x),A=A.add(c(k)))}return A}var h=u(0),g=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-P(this).m();for(var T=0,v=1,x=0;x<this.g.length;x++){var A=this.i(x);T+=(0<=A?A:4294967296+A)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(I(this))return"0";if(R(this))return"-"+P(this).toString(T);for(var v=c(Math.pow(T,6)),x=this,A="";;){var b=C(x,v).g;x=E(x,b.j(v));var O=((0<x.g.length?x.g[0]:x.h)>>>0).toString(T);if(x=b,I(x))return O+A;for(;6>O.length;)O="0"+O;A=O+A}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function I(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function R(T){return T.h==-1}t.l=function(T){return T=E(this,T),R(T)?-1:I(T)?0:1};function P(T){for(var v=T.g.length,x=[],A=0;A<v;A++)x[A]=~T.g[A];return new o(x,~T.h).add(g)}t.abs=function(){return R(this)?P(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),x=[],A=0,b=0;b<=v;b++){var O=A+(this.i(b)&65535)+(T.i(b)&65535),k=(O>>>16)+(this.i(b)>>>16)+(T.i(b)>>>16);A=k>>>16,O&=65535,k&=65535,x[b]=k<<16|O}return new o(x,x[x.length-1]&-2147483648?-1:0)};function E(T,v){return T.add(P(v))}t.j=function(T){if(I(this)||I(T))return h;if(R(this))return R(T)?P(this).j(P(T)):P(P(this).j(T));if(R(T))return P(this.j(P(T)));if(0>this.l(_)&&0>T.l(_))return c(this.m()*T.m());for(var v=this.g.length+T.g.length,x=[],A=0;A<2*v;A++)x[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<T.g.length;b++){var O=this.i(A)>>>16,k=this.i(A)&65535,At=T.i(b)>>>16,Xn=T.i(b)&65535;x[2*A+2*b]+=k*Xn,y(x,2*A+2*b),x[2*A+2*b+1]+=O*Xn,y(x,2*A+2*b+1),x[2*A+2*b+1]+=k*At,y(x,2*A+2*b+1),x[2*A+2*b+2]+=O*At,y(x,2*A+2*b+2)}for(A=0;A<v;A++)x[A]=x[2*A+1]<<16|x[2*A];for(A=v;A<2*v;A++)x[A]=0;return new o(x,0)};function y(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function w(T,v){this.g=T,this.h=v}function C(T,v){if(I(v))throw Error("division by zero");if(I(T))return new w(h,h);if(R(T))return v=C(P(T),v),new w(P(v.g),P(v.h));if(R(v))return v=C(T,P(v)),new w(P(v.g),v.h);if(30<T.g.length){if(R(T)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var x=g,A=v;0>=A.l(T);)x=N(x),A=N(A);var b=D(x,1),O=D(A,1);for(A=D(A,2),x=D(x,2);!I(A);){var k=O.add(A);0>=k.l(T)&&(b=b.add(x),O=k),A=D(A,1),x=D(x,1)}return v=E(T,b.j(v)),new w(b,v)}for(b=h;0<=T.l(v);){for(x=Math.max(1,Math.floor(T.m()/v.m())),A=Math.ceil(Math.log(x)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),O=c(x),k=O.j(v);R(k)||0<k.l(T);)x-=A,O=c(x),k=O.j(v);I(O)&&(O=g),b=b.add(O),T=E(T,k)}return new w(b,T)}t.A=function(T){return C(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),x=[],A=0;A<v;A++)x[A]=this.i(A)&T.i(A);return new o(x,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),x=[],A=0;A<v;A++)x[A]=this.i(A)|T.i(A);return new o(x,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),x=[],A=0;A<v;A++)x[A]=this.i(A)^T.i(A);return new o(x,this.h^T.h)};function N(T){for(var v=T.g.length+1,x=[],A=0;A<v;A++)x[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(x,T.h)}function D(T,v){var x=v>>5;v%=32;for(var A=T.g.length-x,b=[],O=0;O<A;O++)b[O]=0<v?T.i(O+x)>>>v|T.i(O+x+1)<<32-v:T.i(O+x);return new o(b,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,_T=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,qi=o}).apply(typeof l_<"u"?l_:typeof self<"u"?self:typeof window<"u"?window:{});var Su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wT,ET,ca,ST,ic,cm,TT,IT,xT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,m){return l==Array.prototype||l==Object.prototype||(l[f]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Su=="object"&&Su];for(var f=0;f<l.length;++f){var m=l[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,f){if(f)e:{var m=r;l=l.split(".");for(var S=0;S<l.length-1;S++){var L=l[S];if(!(L in m))break e;m=m[L]}l=l[l.length-1],S=m[l],f=f(S),f!=S&&f!=null&&e(m,l,{configurable:!0,writable:!0,value:f})}}function s(l,f){l instanceof String&&(l+="");var m=0,S=!1,L={next:function(){if(!S&&m<l.length){var j=m++;return{value:f(j,l[j]),done:!1}}return S=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(l){return l||function(){return s(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function c(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function d(l,f,m){return l.call.apply(l.bind,arguments)}function h(l,f,m){if(!l)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,S),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function g(l,f,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,g.apply(null,arguments)}function _(l,f){var m=Array.prototype.slice.call(arguments,1);return function(){var S=m.slice();return S.push.apply(S,arguments),l.apply(this,S)}}function I(l,f){function m(){}m.prototype=f.prototype,l.aa=f.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(S,L,j){for(var U=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)U[pe-2]=arguments[pe];return f.prototype[L].apply(S,U)}}function R(l){const f=l.length;if(0<f){const m=Array(f);for(let S=0;S<f;S++)m[S]=l[S];return m}return[]}function P(l,f){for(let m=1;m<arguments.length;m++){const S=arguments[m];if(u(S)){const L=l.length||0,j=S.length||0;l.length=L+j;for(let U=0;U<j;U++)l[L+U]=S[U]}else l.push(S)}}class E{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function y(l){return/^[\s\xa0]*$/.test(l)}function w(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function C(l){return C[" "](l),l}C[" "]=function(){};var N=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function D(l,f,m){for(const S in l)f.call(m,l[S],S,l)}function T(l,f){for(const m in l)f.call(void 0,l[m],m,l)}function v(l){const f={};for(const m in l)f[m]=l[m];return f}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,f){let m,S;for(let L=1;L<arguments.length;L++){S=arguments[L];for(m in S)l[m]=S[m];for(let j=0;j<x.length;j++)m=x[j],Object.prototype.hasOwnProperty.call(S,m)&&(l[m]=S[m])}}function b(l){var f=1;l=l.split(":");const m=[];for(;0<f&&l.length;)m.push(l.shift()),f--;return l.length&&m.push(l.join(":")),m}function O(l){a.setTimeout(()=>{throw l},0)}function k(){var l=K;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class At{constructor(){this.h=this.g=null}add(f,m){const S=Xn.get();S.set(f,m),this.h?this.h.next=S:this.g=S,this.h=S}}var Xn=new E(()=>new Ti,l=>l.reset());class Ti{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Vt,$=!1,K=new At,Q=()=>{const l=a.Promise.resolve(void 0);Vt=()=>{l.then(de)}};var de=()=>{for(var l;l=k();){try{l.h.call(l.g)}catch(m){O(m)}var f=Xn;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}$=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var Ft=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return l}();function bt(l,f){if(Te.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,S=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(N){e:{try{C(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else m=="mouseover"?f=l.fromElement:m=="mouseout"&&(f=l.toElement);this.relatedTarget=f,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:wt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&bt.aa.h.call(this)}}I(bt,Te);var wt={2:"touch",3:"pen",4:"mouse"};bt.prototype.h=function(){bt.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var kt="closure_listenable_"+(1e6*Math.random()|0),Ii=0;function Jn(l,f,m,S,L){this.listener=l,this.proxy=null,this.src=f,this.type=m,this.capture=!!S,this.ha=L,this.key=++Ii,this.da=this.fa=!1}function Rr(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Zn(l){this.src=l,this.g={},this.h=0}Zn.prototype.add=function(l,f,m,S,L){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var U=Th(l,f,S,L);return-1<U?(f=l[U],m||(f.fa=!1)):(f=new Jn(f,this.src,j,!!S,L),f.fa=m,l.push(f)),f};function en(l,f){var m=f.type;if(m in l.g){var S=l.g[m],L=Array.prototype.indexOf.call(S,f,void 0),j;(j=0<=L)&&Array.prototype.splice.call(S,L,1),j&&(Rr(f),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Th(l,f,m,S){for(var L=0;L<l.length;++L){var j=l[L];if(!j.da&&j.listener==f&&j.capture==!!m&&j.ha==S)return L}return-1}var Ih="closure_lm_"+(1e6*Math.random()|0),xh={};function X1(l,f,m,S,L){if(Array.isArray(f)){for(var j=0;j<f.length;j++)X1(l,f[j],m,S,L);return null}return m=e0(m),l&&l[kt]?l.K(f,m,c(S)?!!S.capture:!!S,L):Cx(l,f,m,!1,S,L)}function Cx(l,f,m,S,L,j){if(!f)throw Error("Invalid event type");var U=c(L)?!!L.capture:!!L,pe=Rh(l);if(pe||(l[Ih]=pe=new Zn(l)),m=pe.add(f,m,S,U,j),m.proxy)return m;if(S=Rx(),m.proxy=S,S.src=l,S.listener=m,l.addEventListener)Ft||(L=U),L===void 0&&(L=!1),l.addEventListener(f.toString(),S,L);else if(l.attachEvent)l.attachEvent(Z1(f.toString()),S);else if(l.addListener&&l.removeListener)l.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Rx(){function l(m){return f.call(l.src,l.listener,m)}const f=Px;return l}function J1(l,f,m,S,L){if(Array.isArray(f))for(var j=0;j<f.length;j++)J1(l,f[j],m,S,L);else S=c(S)?!!S.capture:!!S,m=e0(m),l&&l[kt]?(l=l.i,f=String(f).toString(),f in l.g&&(j=l.g[f],m=Th(j,m,S,L),-1<m&&(Rr(j[m]),Array.prototype.splice.call(j,m,1),j.length==0&&(delete l.g[f],l.h--)))):l&&(l=Rh(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Th(f,m,S,L)),(m=-1<l?f[l]:null)&&Ch(m))}function Ch(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[kt])en(f.i,l);else{var m=l.type,S=l.proxy;f.removeEventListener?f.removeEventListener(m,S,l.capture):f.detachEvent?f.detachEvent(Z1(m),S):f.addListener&&f.removeListener&&f.removeListener(S),(m=Rh(f))?(en(m,l),m.h==0&&(m.src=null,f[Ih]=null)):Rr(l)}}}function Z1(l){return l in xh?xh[l]:xh[l]="on"+l}function Px(l,f){if(l.da)l=!0;else{f=new bt(f,this);var m=l.listener,S=l.ha||l.src;l.fa&&Ch(l),l=m.call(S,f)}return l}function Rh(l){return l=l[Ih],l instanceof Zn?l:null}var Ph="__closure_events_fn_"+(1e9*Math.random()>>>0);function e0(l){return typeof l=="function"?l:(l[Ph]||(l[Ph]=function(f){return l.handleEvent(f)}),l[Ph])}function st(){re.call(this),this.i=new Zn(this),this.M=this,this.F=null}I(st,re),st.prototype[kt]=!0,st.prototype.removeEventListener=function(l,f,m,S){J1(this,l,f,m,S)};function Et(l,f){var m,S=l.F;if(S)for(m=[];S;S=S.F)m.push(S);if(l=l.M,S=f.type||f,typeof f=="string")f=new Te(f,l);else if(f instanceof Te)f.target=f.target||l;else{var L=f;f=new Te(S,l),A(f,L)}if(L=!0,m)for(var j=m.length-1;0<=j;j--){var U=f.g=m[j];L=zl(U,S,!0,f)&&L}if(U=f.g=l,L=zl(U,S,!0,f)&&L,L=zl(U,S,!1,f)&&L,m)for(j=0;j<m.length;j++)U=f.g=m[j],L=zl(U,S,!1,f)&&L}st.prototype.N=function(){if(st.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var m=l.g[f],S=0;S<m.length;S++)Rr(m[S]);delete l.g[f],l.h--}}this.F=null},st.prototype.K=function(l,f,m,S){return this.i.add(String(l),f,!1,m,S)},st.prototype.L=function(l,f,m,S){return this.i.add(String(l),f,!0,m,S)};function zl(l,f,m,S){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,j=0;j<f.length;++j){var U=f[j];if(U&&!U.da&&U.capture==m){var pe=U.listener,Qe=U.ha||U.src;U.fa&&en(l.i,U),L=pe.call(Qe,S)!==!1&&L}}return L&&!S.defaultPrevented}function t0(l,f,m){if(typeof l=="function")m&&(l=g(l,m));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function n0(l){l.g=t0(()=>{l.g=null,l.i&&(l.i=!1,n0(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Ax extends re{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:n0(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function No(l){re.call(this),this.h=l,this.g={}}I(No,re);var r0=[];function i0(l){D(l.g,function(f,m){this.g.hasOwnProperty(m)&&Ch(f)},l),l.g={}}No.prototype.N=function(){No.aa.N.call(this),i0(this)},No.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ah=a.JSON.stringify,bx=a.JSON.parse,kx=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function bh(){}bh.prototype.h=null;function s0(l){return l.h||(l.h=l.i())}function o0(){}var Oo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function kh(){Te.call(this,"d")}I(kh,Te);function Nh(){Te.call(this,"c")}I(Nh,Te);var xi={},a0=null;function Ul(){return a0=a0||new st}xi.La="serverreachability";function l0(l){Te.call(this,xi.La,l)}I(l0,Te);function Do(l){const f=Ul();Et(f,new l0(f))}xi.STAT_EVENT="statevent";function u0(l,f){Te.call(this,xi.STAT_EVENT,l),this.stat=f}I(u0,Te);function St(l){const f=Ul();Et(f,new u0(f,l))}xi.Ma="timingevent";function c0(l,f){Te.call(this,xi.Ma,l),this.size=f}I(c0,Te);function Lo(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function Mo(){this.g=!0}Mo.prototype.xa=function(){this.g=!1};function Nx(l,f,m,S,L,j){l.info(function(){if(l.g)if(j)for(var U="",pe=j.split("&"),Qe=0;Qe<pe.length;Qe++){var le=pe[Qe].split("=");if(1<le.length){var ot=le[0];le=le[1];var at=ot.split("_");U=2<=at.length&&at[1]=="type"?U+(ot+"="+le+"&"):U+(ot+"=redacted&")}}else U=null;else U=j;return"XMLHTTP REQ ("+S+") [attempt "+L+"]: "+f+`
`+m+`
`+U})}function Ox(l,f,m,S,L,j,U){l.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+L+"]: "+f+`
`+m+`
`+j+" "+U})}function ys(l,f,m,S){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Lx(l,m)+(S?" "+S:"")})}function Dx(l,f){l.info(function(){return"TIMEOUT: "+f})}Mo.prototype.info=function(){};function Lx(l,f){if(!l.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var S=m[l];if(!(2>S.length)){var L=S[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var U=1;U<L.length;U++)L[U]=""}}}}return Ah(m)}catch{return f}}var $l={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},d0={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Oh;function Bl(){}I(Bl,bh),Bl.prototype.g=function(){return new XMLHttpRequest},Bl.prototype.i=function(){return{}},Oh=new Bl;function Pr(l,f,m,S){this.j=l,this.i=f,this.l=m,this.R=S||1,this.U=new No(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new h0}function h0(){this.i=null,this.g="",this.h=!1}var f0={},Dh={};function Lh(l,f,m){l.L=1,l.v=Kl(er(f)),l.m=m,l.P=!0,p0(l,null)}function p0(l,f){l.F=Date.now(),Wl(l),l.A=er(l.v);var m=l.A,S=l.R;Array.isArray(S)||(S=[String(S)]),P0(m.i,"t",S),l.C=0,m=l.j.J,l.h=new h0,l.g=q0(l.j,m?f:null,!l.m),0<l.O&&(l.M=new Ax(g(l.Y,l,l.g),l.O)),f=l.U,m=l.g,S=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(r0[0]=L.toString()),L=r0);for(var j=0;j<L.length;j++){var U=X1(m,L[j],S||f.handleEvent,!1,f.h||f);if(!U)break;f.g[U.key]=U}f=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),Do(),Nx(l.i,l.u,l.A,l.l,l.R,l.m)}Pr.prototype.ca=function(l){l=l.target;const f=this.M;f&&tr(l)==3?f.j():this.Y(l)},Pr.prototype.Y=function(l){try{if(l==this.g)e:{const at=tr(this.g);var f=this.g.Ba();const ws=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||L0(this.g)))){this.J||at!=4||f==7||(f==8||0>=ws?Do(3):Do(2)),Mh(this);var m=this.g.Z();this.X=m;t:if(m0(this)){var S=L0(this.g);l="";var L=S.length,j=tr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ci(this),jo(this);var U="";break t}this.h.i=new a.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(S[f],{stream:!(j&&f==L-1)});S.length=0,this.h.g+=l,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=m==200,Ox(this.i,this.u,this.A,this.l,this.R,at,m),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Qe=this.g;if((pe=Qe.g?Qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(pe)){var le=pe;break t}}le=null}if(m=le)ys(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jh(this,m);else{this.o=!1,this.s=3,St(12),Ci(this),jo(this);break e}}if(this.P){m=!0;let dn;for(;!this.J&&this.C<U.length;)if(dn=Mx(this,U),dn==Dh){at==4&&(this.s=4,St(14),m=!1),ys(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==f0){this.s=4,St(15),ys(this.i,this.l,U,"[Invalid Chunk]"),m=!1;break}else ys(this.i,this.l,dn,null),jh(this,dn);if(m0(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||U.length!=0||this.h.h||(this.s=1,St(16),m=!1),this.o=this.o&&m,!m)ys(this.i,this.l,U,"[Invalid Chunked Response]"),Ci(this),jo(this);else if(0<U.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Bh(ot),ot.M=!0,St(11))}}else ys(this.i,this.l,U,null),jh(this,U);at==4&&Ci(this),this.o&&!this.J&&(at==4?$0(this.j,this):(this.o=!1,Wl(this)))}else Zx(this.g),m==400&&0<U.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Ci(this),jo(this)}}}catch{}finally{}};function m0(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Mx(l,f){var m=l.C,S=f.indexOf(`
`,m);return S==-1?Dh:(m=Number(f.substring(m,S)),isNaN(m)?f0:(S+=1,S+m>f.length?Dh:(f=f.slice(S,S+m),l.C=S+m,f)))}Pr.prototype.cancel=function(){this.J=!0,Ci(this)};function Wl(l){l.S=Date.now()+l.I,g0(l,l.I)}function g0(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Lo(g(l.ba,l),f)}function Mh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Pr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Dx(this.i,this.A),this.L!=2&&(Do(),St(17)),Ci(this),this.s=2,jo(this)):g0(this,this.S-l)};function jo(l){l.j.G==0||l.J||$0(l.j,l)}function Ci(l){Mh(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,i0(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function jh(l,f){try{var m=l.j;if(m.G!=0&&(m.g==l||Vh(m.h,l))){if(!l.K&&Vh(m.h,l)&&m.G==3){try{var S=m.Da.g.parse(f)}catch{S=null}if(Array.isArray(S)&&S.length==3){var L=S;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Jl(m),Yl(m);else break e;$h(m),St(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=Lo(g(m.Za,m),6e3));if(1>=_0(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Pi(m,11)}else if((l.K||m.g==l)&&Jl(m),!y(f))for(L=m.Da.g.parse(f),f=0;f<L.length;f++){let le=L[f];if(m.T=le[0],le=le[1],m.G==2)if(le[0]=="c"){m.K=le[1],m.ia=le[2];const ot=le[3];ot!=null&&(m.la=ot,m.j.info("VER="+m.la));const at=le[4];at!=null&&(m.Aa=at,m.j.info("SVER="+m.Aa));const ws=le[5];ws!=null&&typeof ws=="number"&&0<ws&&(S=1.5*ws,m.L=S,m.j.info("backChannelRequestTimeoutMs_="+S)),S=m;const dn=l.g;if(dn){const eu=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eu){var j=S.h;j.g||eu.indexOf("spdy")==-1&&eu.indexOf("quic")==-1&&eu.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Fh(j,j.h),j.h=null))}if(S.D){const Wh=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;Wh&&(S.ya=Wh,ve(S.I,S.D,Wh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),S=m;var U=l;if(S.qa=H0(S,S.J?S.ia:null,S.W),U.K){w0(S.h,U);var pe=U,Qe=S.L;Qe&&(pe.I=Qe),pe.B&&(Mh(pe),Wl(pe)),S.g=U}else z0(S);0<m.i.length&&Xl(m)}else le[0]!="stop"&&le[0]!="close"||Pi(m,7);else m.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Pi(m,7):Uh(m):le[0]!="noop"&&m.l&&m.l.ta(le),m.v=0)}}Do(4)}catch{}}var jx=class{constructor(l,f){this.g=l,this.map=f}};function y0(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function v0(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function _0(l){return l.h?1:l.g?l.g.size:0}function Vh(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Fh(l,f){l.g?l.g.add(f):l.h=f}function w0(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}y0.prototype.cancel=function(){if(this.i=E0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function E0(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const m of l.g.values())f=f.concat(m.D);return f}return R(l.i)}function Vx(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var f=[],m=l.length,S=0;S<m;S++)f.push(l[S]);return f}f=[],m=0;for(S in l)f[m++]=l[S];return f}function Fx(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var f=[];l=l.length;for(var m=0;m<l;m++)f.push(m);return f}f=[],m=0;for(const S in l)f[m++]=S;return f}}}function S0(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var m=Fx(l),S=Vx(l),L=S.length,j=0;j<L;j++)f.call(void 0,S[j],m&&m[j],l)}var T0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zx(l,f){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var S=l[m].indexOf("="),L=null;if(0<=S){var j=l[m].substring(0,S);L=l[m].substring(S+1)}else j=l[m];f(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Ri(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Ri){this.h=l.h,Hl(this,l.j),this.o=l.o,this.g=l.g,ql(this,l.s),this.l=l.l;var f=l.i,m=new zo;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),I0(this,m),this.m=l.m}else l&&(f=String(l).match(T0))?(this.h=!1,Hl(this,f[1]||"",!0),this.o=Vo(f[2]||""),this.g=Vo(f[3]||"",!0),ql(this,f[4]),this.l=Vo(f[5]||"",!0),I0(this,f[6]||"",!0),this.m=Vo(f[7]||"")):(this.h=!1,this.i=new zo(null,this.h))}Ri.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Fo(f,x0,!0),":");var m=this.g;return(m||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Fo(f,x0,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Fo(m,m.charAt(0)=="/"?Bx:$x,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Fo(m,Hx)),l.join("")};function er(l){return new Ri(l)}function Hl(l,f,m){l.j=m?Vo(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function ql(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function I0(l,f,m){f instanceof zo?(l.i=f,qx(l.i,l.h)):(m||(f=Fo(f,Wx)),l.i=new zo(f,l.h))}function ve(l,f,m){l.i.set(f,m)}function Kl(l){return ve(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Vo(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Fo(l,f,m){return typeof l=="string"?(l=encodeURI(l).replace(f,Ux),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ux(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var x0=/[#\/\?@]/g,$x=/[#\?:]/g,Bx=/[#\?]/g,Wx=/[#\?@]/g,Hx=/#/g;function zo(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Ar(l){l.g||(l.g=new Map,l.h=0,l.i&&zx(l.i,function(f,m){l.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=zo.prototype,t.add=function(l,f){Ar(this),this.i=null,l=vs(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(f),this.h+=1,this};function C0(l,f){Ar(l),f=vs(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function R0(l,f){return Ar(l),f=vs(l,f),l.g.has(f)}t.forEach=function(l,f){Ar(this),this.g.forEach(function(m,S){m.forEach(function(L){l.call(f,L,S,this)},this)},this)},t.na=function(){Ar(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let S=0;S<f.length;S++){const L=l[S];for(let j=0;j<L.length;j++)m.push(f[S])}return m},t.V=function(l){Ar(this);let f=[];if(typeof l=="string")R0(this,l)&&(f=f.concat(this.g.get(vs(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)f=f.concat(l[m])}return f},t.set=function(l,f){return Ar(this),this.i=null,l=vs(this,l),R0(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function P0(l,f,m){C0(l,f),0<m.length&&(l.i=null,l.g.set(vs(l,f),R(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var S=f[m];const j=encodeURIComponent(String(S)),U=this.V(S);for(S=0;S<U.length;S++){var L=j;U[S]!==""&&(L+="="+encodeURIComponent(String(U[S]))),l.push(L)}}return this.i=l.join("&")};function vs(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function qx(l,f){f&&!l.j&&(Ar(l),l.i=null,l.g.forEach(function(m,S){var L=S.toLowerCase();S!=L&&(C0(this,S),P0(this,L,m))},l)),l.j=f}function Kx(l,f){const m=new Mo;if(a.Image){const S=new Image;S.onload=_(br,m,"TestLoadImage: loaded",!0,f,S),S.onerror=_(br,m,"TestLoadImage: error",!1,f,S),S.onabort=_(br,m,"TestLoadImage: abort",!1,f,S),S.ontimeout=_(br,m,"TestLoadImage: timeout",!1,f,S),a.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=l}else f(!1)}function Gx(l,f){const m=new Mo,S=new AbortController,L=setTimeout(()=>{S.abort(),br(m,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:S.signal}).then(j=>{clearTimeout(L),j.ok?br(m,"TestPingServer: ok",!0,f):br(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),br(m,"TestPingServer: error",!1,f)})}function br(l,f,m,S,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),S(m)}catch{}}function Qx(){this.g=new kx}function Yx(l,f,m){const S=m||"";try{S0(l,function(L,j){let U=L;c(L)&&(U=Ah(L)),f.push(S+j+"="+encodeURIComponent(U))})}catch(L){throw f.push(S+"type="+encodeURIComponent("_badmap")),L}}function Uo(l){this.l=l.Ub||null,this.j=l.eb||!1}I(Uo,bh),Uo.prototype.g=function(){return new Gl(this.l,this.j)},Uo.prototype.i=function(l){return function(){return l}}({});function Gl(l,f){st.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Gl,st),t=Gl.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Bo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$o(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Bo(this)),this.g&&(this.readyState=3,Bo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;A0(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function A0(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?$o(this):Bo(this),this.readyState==3&&A0(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,$o(this))},t.Qa=function(l){this.g&&(this.response=l,$o(this))},t.ga=function(){this.g&&$o(this)};function $o(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Bo(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=f.next();return l.join(`\r
`)};function Bo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Gl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function b0(l){let f="";return D(l,function(m,S){f+=S,f+=":",f+=m,f+=`\r
`}),f}function zh(l,f,m){e:{for(S in m){var S=!1;break e}S=!0}S||(m=b0(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):ve(l,f,m))}function ke(l){st.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(ke,st);var Xx=/^https?$/i,Jx=["POST","PUT"];t=ke.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,m,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Oh.g(),this.v=this.o?s0(this.o):s0(Oh),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(j){k0(this,j);return}if(l=m||"",m=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var L in S)m.set(L,S[L]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const j of S.keys())m.set(j,S.get(j));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(m.keys()).find(j=>j.toLowerCase()=="content-type"),L=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Jx,f,void 0))||S||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,U]of m)this.g.setRequestHeader(j,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{D0(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){k0(this,j)}};function k0(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,N0(l),Ql(l)}function N0(l){l.A||(l.A=!0,Et(l,"complete"),Et(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Et(this,"complete"),Et(this,"abort"),Ql(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ql(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?O0(this):this.bb())},t.bb=function(){O0(this)};function O0(l){if(l.h&&typeof o<"u"&&(!l.v[1]||tr(l)!=4||l.Z()!=2)){if(l.u&&tr(l)==4)t0(l.Ea,0,l);else if(Et(l,"readystatechange"),tr(l)==4){l.h=!1;try{const U=l.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var S;if(S=U===0){var L=String(l.D).match(T0)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),S=!Xx.test(L?L.toLowerCase():"")}m=S}if(m)Et(l,"complete"),Et(l,"success");else{l.m=6;try{var j=2<tr(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",N0(l)}}finally{Ql(l)}}}}function Ql(l,f){if(l.g){D0(l);const m=l.g,S=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||Et(l,"ready");try{m.onreadystatechange=S}catch{}}}function D0(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function tr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<tr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),bx(f)}};function L0(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Zx(l){const f={};l=(l.g&&2<=tr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<l.length;S++){if(y(l[S]))continue;var m=b(l[S]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const j=f[L]||[];f[L]=j,j.push(m)}T(f,function(S){return S.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wo(l,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||f}function M0(l){this.Aa=0,this.i=[],this.j=new Mo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wo("baseRetryDelayMs",5e3,l),this.cb=Wo("retryDelaySeedMs",1e4,l),this.Wa=Wo("forwardChannelMaxRetries",2,l),this.wa=Wo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new y0(l&&l.concurrentRequestLimit),this.Da=new Qx,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=M0.prototype,t.la=8,t.G=1,t.connect=function(l,f,m,S){St(0),this.W=l,this.H=f||{},m&&S!==void 0&&(this.H.OSID=m,this.H.OAID=S),this.F=this.X,this.I=H0(this,null,this.W),Xl(this)};function Uh(l){if(j0(l),l.G==3){var f=l.U++,m=er(l.I);if(ve(m,"SID",l.K),ve(m,"RID",f),ve(m,"TYPE","terminate"),Ho(l,m),f=new Pr(l,l.j,f),f.L=2,f.v=Kl(er(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=q0(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Wl(f)}W0(l)}function Yl(l){l.g&&(Bh(l),l.g.cancel(),l.g=null)}function j0(l){Yl(l),l.u&&(a.clearTimeout(l.u),l.u=null),Jl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Xl(l){if(!v0(l.h)&&!l.s){l.s=!0;var f=l.Ga;Vt||Q(),$||(Vt(),$=!0),K.add(f,l),l.B=0}}function eC(l,f){return _0(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Lo(g(l.Ga,l,f),B0(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Pr(this,this.j,l);let j=this.o;if(this.S&&(j?(j=v(j),A(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var S=this.i[m];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(f+=S,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=F0(this,L,f),m=er(this.I),ve(m,"RID",l),ve(m,"CVER",22),this.D&&ve(m,"X-HTTP-Session-Id",this.D),Ho(this,m),j&&(this.O?f="headers="+encodeURIComponent(String(b0(j)))+"&"+f:this.m&&zh(m,this.m,j)),Fh(this.h,L),this.Ua&&ve(m,"TYPE","init"),this.P?(ve(m,"$req",f),ve(m,"SID","null"),L.T=!0,Lh(L,m,null)):Lh(L,m,f),this.G=2}}else this.G==3&&(l?V0(this,l):this.i.length==0||v0(this.h)||V0(this))};function V0(l,f){var m;f?m=f.l:m=l.U++;const S=er(l.I);ve(S,"SID",l.K),ve(S,"RID",m),ve(S,"AID",l.T),Ho(l,S),l.m&&l.o&&zh(S,l.m,l.o),m=new Pr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),f&&(l.i=f.D.concat(l.i)),f=F0(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Fh(l.h,m),Lh(m,S,f)}function Ho(l,f){l.H&&D(l.H,function(m,S){ve(f,S,m)}),l.l&&S0({},function(m,S){ve(f,S,m)})}function F0(l,f,m){m=Math.min(l.i.length,m);var S=l.l?g(l.l.Na,l.l,l):null;e:{var L=l.i;let j=-1;for(;;){const U=["count="+m];j==-1?0<m?(j=L[0].g,U.push("ofs="+j)):j=0:U.push("ofs="+j);let pe=!0;for(let Qe=0;Qe<m;Qe++){let le=L[Qe].g;const ot=L[Qe].map;if(le-=j,0>le)j=Math.max(0,L[Qe].g-100),pe=!1;else try{Yx(ot,U,"req"+le+"_")}catch{S&&S(ot)}}if(pe){S=U.join("&");break e}}}return l=l.i.splice(0,m),f.D=l,S}function z0(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Vt||Q(),$||(Vt(),$=!0),K.add(f,l),l.v=0}}function $h(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Lo(g(l.Fa,l),B0(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,U0(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Lo(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),Yl(this),U0(this))};function Bh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function U0(l){l.g=new Pr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=er(l.qa);ve(f,"RID","rpc"),ve(f,"SID",l.K),ve(f,"AID",l.T),ve(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ve(f,"TO",l.ja),ve(f,"TYPE","xmlhttp"),Ho(l,f),l.m&&l.o&&zh(f,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Kl(er(f)),m.m=null,m.P=!0,p0(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Yl(this),$h(this),St(19))};function Jl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function $0(l,f){var m=null;if(l.g==f){Jl(l),Bh(l),l.g=null;var S=2}else if(Vh(l.h,f))m=f.D,w0(l.h,f),S=1;else return;if(l.G!=0){if(f.o)if(S==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;S=Ul(),Et(S,new c0(S,m)),Xl(l)}else z0(l);else if(L=f.s,L==3||L==0&&0<f.X||!(S==1&&eC(l,f)||S==2&&$h(l)))switch(m&&0<m.length&&(f=l.h,f.i=f.i.concat(m)),L){case 1:Pi(l,5);break;case 4:Pi(l,10);break;case 3:Pi(l,6);break;default:Pi(l,2)}}}function B0(l,f){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*f}function Pi(l,f){if(l.j.info("Error code "+f),f==2){var m=g(l.fb,l),S=l.Xa;const L=!S;S=new Ri(S||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Hl(S,"https"),Kl(S),L?Kx(S.toString(),m):Gx(S.toString(),m)}else St(2);l.G=0,l.l&&l.l.sa(f),W0(l),j0(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function W0(l){if(l.G=0,l.ka=[],l.l){const f=E0(l.h);(f.length!=0||l.i.length!=0)&&(P(l.ka,f),P(l.ka,l.i),l.h.i.length=0,R(l.i),l.i.length=0),l.l.ra()}}function H0(l,f,m){var S=m instanceof Ri?er(m):new Ri(m);if(S.g!="")f&&(S.g=f+"."+S.g),ql(S,S.s);else{var L=a.location;S=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var j=new Ri(null);S&&Hl(j,S),f&&(j.g=f),L&&ql(j,L),m&&(j.l=m),S=j}return m=l.D,f=l.ya,m&&f&&ve(S,m,f),ve(S,"VER",l.la),Ho(l,S),S}function q0(l,f,m){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new ke(new Uo({eb:m})):new ke(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function K0(){}t=K0.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Zl(){}Zl.prototype.g=function(l,f){return new zt(l,f)};function zt(l,f){st.call(this),this.g=new M0(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!y(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!y(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new _s(this)}I(zt,st),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){Uh(this.g)},zt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=Ah(l),l=m);f.i.push(new jx(f.Ya++,l)),f.G==3&&Xl(f)},zt.prototype.N=function(){this.g.l=null,delete this.j,Uh(this.g),delete this.g,zt.aa.N.call(this)};function G0(l){kh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const m in f){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}I(G0,kh);function Q0(){Nh.call(this),this.status=1}I(Q0,Nh);function _s(l){this.g=l}I(_s,K0),_s.prototype.ua=function(){Et(this.g,"a")},_s.prototype.ta=function(l){Et(this.g,new G0(l))},_s.prototype.sa=function(l){Et(this.g,new Q0)},_s.prototype.ra=function(){Et(this.g,"b")},Zl.prototype.createWebChannel=Zl.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,xT=function(){return new Zl},IT=function(){return Ul()},TT=xi,cm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$l.NO_ERROR=0,$l.TIMEOUT=8,$l.HTTP_ERROR=6,ic=$l,d0.COMPLETE="complete",ST=d0,o0.EventType=Oo,Oo.OPEN="a",Oo.CLOSE="b",Oo.ERROR="c",Oo.MESSAGE="d",st.prototype.listen=st.prototype.K,ca=o0,ET=Uo,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,wT=ke}).apply(typeof Su<"u"?Su:typeof self<"u"?self:typeof window<"u"?window:{});const u_="@firebase/firestore";/**
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
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let Co="10.13.1";/**
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
 */const rs=new Vg("@firebase/firestore");function ea(){return rs.logLevel}function H(t,...e){if(rs.logLevel<=se.DEBUG){const n=e.map(Jg);rs.debug(`Firestore (${Co}): ${t}`,...n)}}function Tr(t,...e){if(rs.logLevel<=se.ERROR){const n=e.map(Jg);rs.error(`Firestore (${Co}): ${t}`,...n)}}function ho(t,...e){if(rs.logLevel<=se.WARN){const n=e.map(Jg);rs.warn(`Firestore (${Co}): ${t}`,...n)}}function Jg(t){if(typeof t=="string")return t;try{/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: `+t;throw Tr(e),new Error(e)}function me(t,e){t||Y()}function J(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class oi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class CT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class Xb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Jb{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new oi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new oi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new oi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new CT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new ft(e)}}class Zb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ek{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Zb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new tk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function rk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class RT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=rk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function fo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Ue(0,0))}static max(){return new X(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class rl{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends rl{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const ik=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends rl{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return ik.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ge.fromString(e))}static fromName(e){return new q(ge.fromString(e).popFirst(5))}static empty(){return new q(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ge(e.slice()))}}function sk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new hi(i,q.empty(),e)}function ok(t){return new hi(t.readTime,t.key,-1)}class hi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hi(X.min(),q.empty(),-1)}static max(){return new hi(X.max(),q.empty(),-1)}}function ak(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const lk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Al(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==lk)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ck(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Zg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zg.oe=-1;function Xd(t){return t==null}function Jc(t){return t===0&&1/t==-1/0}function dk(t){return typeof t=="number"&&Number.isInteger(t)&&!Jc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function c_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ro(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function PT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tu(this.root,e,this.comparator,!0)}}class Tu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=i??Ze.EMPTY,this.right=s??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new d_(this.data.getIterator())}getIteratorFrom(e){return new d_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class d_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class En{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new En([])}unionWith(e){let n=new nt(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new En(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class AT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new AT("Invalid base64 string: "+s):s}}(e);return new it(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const hk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fi(t){if(me(!!t),typeof t=="string"){let e=0;const n=hk.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function is(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
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
 */function Jd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function e1(t){const e=t.mapValue.fields.__previous_value__;return Jd(e)?e1(e):e}function il(t){const e=fi(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class fk{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class sl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new sl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Iu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jd(t)?4:mk(t)?9007199254740991:pk(t)?10:11:Y()}function qn(t,e){if(t===e)return!0;const n=ss(t);if(n!==ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return il(t).isEqual(il(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=fi(i.timestampValue),a=fi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return is(i.bytesValue).isEqual(is(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Le(i.doubleValue),a=Le(s.doubleValue);return o===a?Jc(o)===Jc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return fo(t.arrayValue.values||[],e.arrayValue.values||[],qn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(c_(o)!==c_(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!qn(o[u],a[u])))return!1;return!0}(t,e);default:return Y()}}function ol(t,e){return(t.values||[]).find(n=>qn(n,e))!==void 0}function po(t,e){if(t===e)return 0;const n=ss(t),r=ss(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Le(s.integerValue||s.doubleValue),u=Le(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return h_(t.timestampValue,e.timestampValue);case 4:return h_(il(t),il(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const a=is(s),u=is(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=ue(a[c],u[c]);if(d!==0)return d}return ue(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ue(Le(s.latitude),Le(o.latitude));return a!==0?a:ue(Le(s.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return f_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,d;const h=s.fields||{},g=o.fields||{},_=(a=h.value)===null||a===void 0?void 0:a.arrayValue,I=(u=g.value)===null||u===void 0?void 0:u.arrayValue,R=ue(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((d=I==null?void 0:I.values)===null||d===void 0?void 0:d.length)||0);return R!==0?R:f_(_,I)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Iu.mapValue&&o===Iu.mapValue)return 0;if(s===Iu.mapValue)return 1;if(o===Iu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let h=0;h<u.length&&h<d.length;++h){const g=ue(u[h],d[h]);if(g!==0)return g;const _=po(a[u[h]],c[d[h]]);if(_!==0)return _}return ue(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Y()}}function h_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=fi(t),r=fi(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function f_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=po(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function mo(t){return dm(t)}function dm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=fi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return is(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=dm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${dm(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function Zc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function hm(t){return!!t&&"integerValue"in t}function t1(t){return!!t&&"arrayValue"in t}function p_(t){return!!t&&"nullValue"in t}function m_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sc(t){return!!t&&"mapValue"in t}function pk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Pa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ro(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Pa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pa(n)}setAll(e){let n=et.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Pa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());sc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];sc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ro(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new rn(Pa(this.value))}}function bT(t){const e=[];return Ro(t.fields,(n,r)=>{const i=new et([n]);if(sc(r)){const s=bT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new En(e)}/**
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
 */class mt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new mt(e,0,X.min(),X.min(),X.min(),rn.empty(),0)}static newFoundDocument(e,n,r,i){return new mt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new mt(e,2,n,X.min(),X.min(),rn.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,X.min(),X.min(),rn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class go{constructor(e,n){this.position=e,this.inclusive=n}}function g_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=po(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function y_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class al{constructor(e,n="asc"){this.field=e,this.dir=n}}function gk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class kT{}class ze extends kT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vk(e,n,r):n==="array-contains"?new Ek(e,r):n==="in"?new Sk(e,r):n==="not-in"?new Tk(e,r):n==="array-contains-any"?new Ik(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new _k(e,r):new wk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(po(n,this.value)):n!==null&&ss(this.value)===ss(n)&&this.matchesComparison(po(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class An extends kT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new An(e,n)}matches(e){return NT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function NT(t){return t.op==="and"}function OT(t){return yk(t)&&NT(t)}function yk(t){for(const e of t.filters)if(e instanceof An)return!1;return!0}function fm(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+mo(t.value);if(OT(t))return t.filters.map(e=>fm(e)).join(",");{const e=t.filters.map(n=>fm(n)).join(",");return`${t.op}(${e})`}}function DT(t,e){return t instanceof ze?function(r,i){return i instanceof ze&&r.op===i.op&&r.field.isEqual(i.field)&&qn(r.value,i.value)}(t,e):t instanceof An?function(r,i){return i instanceof An&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&DT(o,i.filters[a]),!0):!1}(t,e):void Y()}function LT(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${mo(n.value)}`}(t):t instanceof An?function(n){return n.op.toString()+" {"+n.getFilters().map(LT).join(" ,")+"}"}(t):"Filter"}class vk extends ze{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class _k extends ze{constructor(e,n){super(e,"in",n),this.keys=MT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class wk extends ze{constructor(e,n){super(e,"not-in",n),this.keys=MT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function MT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class Ek extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return t1(n)&&ol(n.arrayValue,this.value)}}class Sk extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ol(this.value.arrayValue,n)}}class Tk extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ol(this.value.arrayValue,n)}}class Ik extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!t1(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ol(this.value.arrayValue,r))}}/**
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
 */class xk{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function v_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new xk(t,e,n,r,i,s,o)}function n1(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Xd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mo(r)).join(",")),e.ue=n}return e.ue}function r1(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!gk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!DT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!y_(t.startAt,e.startAt)&&y_(t.endAt,e.endAt)}function pm(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ps{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ck(t,e,n,r,i,s,o,a){return new ps(t,e,n,r,i,s,o,a)}function i1(t){return new ps(t)}function __(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function s1(t){return t.collectionGroup!==null}function Gs(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new nt(et.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new al(s,r))}),n.has(et.keyField().canonicalString())||e.ce.push(new al(et.keyField(),r))}return e.ce}function $n(t){const e=J(t);return e.le||(e.le=Rk(e,Gs(t))),e.le}function Rk(t,e){if(t.limitType==="F")return v_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new al(i.field,s)});const n=t.endAt?new go(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new go(t.startAt.position,t.startAt.inclusive):null;return v_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function mm(t,e){const n=t.filters.concat([e]);return new ps(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ed(t,e,n){return new ps(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zd(t,e){return r1($n(t),$n(e))&&t.limitType===e.limitType}function jT(t){return`${n1($n(t))}|lt:${t.limitType}`}function Ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>LT(i)).join(", ")}]`),Xd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>mo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>mo(i)).join(",")),`Target(${r})`}($n(t))}; limitType=${t.limitType})`}function eh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Gs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=g_(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Gs(r),i)||r.endAt&&!function(o,a,u){const c=g_(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Gs(r),i))}(t,e)}function Pk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function VT(t){return(e,n)=>{let r=!1;for(const i of Gs(t)){const s=Ak(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Ak(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?po(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class Po{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ro(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return PT(this.inner)}size(){return this.innerSize}}/**
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
 */const bk=new Ae(q.comparator);function Ir(){return bk}const FT=new Ae(q.comparator);function da(...t){let e=FT;for(const n of t)e=e.insert(n.key,n);return e}function zT(t){let e=FT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ui(){return Aa()}function UT(){return Aa()}function Aa(){return new Po(t=>t.toString(),(t,e)=>t.isEqual(e))}const kk=new Ae(q.comparator),Nk=new nt(q.comparator);function ie(...t){let e=Nk;for(const n of t)e=e.add(n);return e}const Ok=new nt(ue);function Dk(){return Ok}/**
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
 */function o1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jc(e)?"-0":e}}function $T(t){return{integerValue:""+t}}function Lk(t,e){return dk(e)?$T(e):o1(t,e)}/**
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
 */class th{constructor(){this._=void 0}}function Mk(t,e,n){return t instanceof td?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Jd(s)&&(s=e1(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ll?WT(t,e):t instanceof ul?HT(t,e):function(i,s){const o=BT(i,s),a=w_(o)+w_(i.Pe);return hm(o)&&hm(i.Pe)?$T(a):o1(i.serializer,a)}(t,e)}function jk(t,e,n){return t instanceof ll?WT(t,e):t instanceof ul?HT(t,e):n}function BT(t,e){return t instanceof nd?function(r){return hm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class td extends th{}class ll extends th{constructor(e){super(),this.elements=e}}function WT(t,e){const n=qT(e);for(const r of t.elements)n.some(i=>qn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ul extends th{constructor(e){super(),this.elements=e}}function HT(t,e){let n=qT(e);for(const r of t.elements)n=n.filter(i=>!qn(i,r));return{arrayValue:{values:n}}}class nd extends th{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function w_(t){return Le(t.integerValue||t.doubleValue)}function qT(t){return t1(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Vk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ll&&i instanceof ll||r instanceof ul&&i instanceof ul?fo(r.elements,i.elements,qn):r instanceof nd&&i instanceof nd?qn(r.Pe,i.Pe):r instanceof td&&i instanceof td}(t.transform,e.transform)}class Fk{constructor(e,n){this.version=e,this.transformResults=n}}class mr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mr}static exists(e){return new mr(void 0,e)}static updateTime(e){return new mr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nh{}function KT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new QT(t.key,mr.none()):new kl(t.key,t.data,mr.none());{const n=t.data,r=rn.empty();let i=new nt(et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ms(t.key,r,new En(i.toArray()),mr.none())}}function zk(t,e,n){t instanceof kl?function(i,s,o){const a=i.value.clone(),u=S_(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ms?function(i,s,o){if(!oc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=S_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(GT(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ba(t,e,n,r){return t instanceof kl?function(s,o,a,u){if(!oc(s.precondition,o))return a;const c=s.value.clone(),d=T_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ms?function(s,o,a,u){if(!oc(s.precondition,o))return a;const c=T_(s.fieldTransforms,u,o),d=o.data;return d.setAll(GT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return oc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Uk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=BT(r.transform,i||null);s!=null&&(n===null&&(n=rn.empty()),n.set(r.field,s))}return n||null}function E_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&fo(r,i,(s,o)=>Vk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class kl extends nh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ms extends nh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function GT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function S_(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,jk(o,a,n[i]))}return r}function T_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Mk(s,o,e))}return r}class QT extends nh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $k extends nh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Bk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&zk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ba(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ba(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=UT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=KT(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&fo(this.mutations,e.mutations,(n,r)=>E_(n,r))&&fo(this.baseMutations,e.baseMutations,(n,r)=>E_(n,r))}}class a1{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return kk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new a1(e,n,r,i)}}/**
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
 */class Wk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Hk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var je,oe;function qk(t){switch(t){default:return Y();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function YT(t){if(t===void 0)return Tr("GRPC error has no .code"),V.UNKNOWN;switch(t){case je.OK:return V.OK;case je.CANCELLED:return V.CANCELLED;case je.UNKNOWN:return V.UNKNOWN;case je.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case je.INTERNAL:return V.INTERNAL;case je.UNAVAILABLE:return V.UNAVAILABLE;case je.UNAUTHENTICATED:return V.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case je.NOT_FOUND:return V.NOT_FOUND;case je.ALREADY_EXISTS:return V.ALREADY_EXISTS;case je.PERMISSION_DENIED:return V.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case je.ABORTED:return V.ABORTED;case je.OUT_OF_RANGE:return V.OUT_OF_RANGE;case je.UNIMPLEMENTED:return V.UNIMPLEMENTED;case je.DATA_LOSS:return V.DATA_LOSS;default:return Y()}}(oe=je||(je={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Kk(){return new TextEncoder}/**
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
 */const Gk=new qi([4294967295,4294967295],0);function I_(t){const e=Kk().encode(t),n=new _T;return n.update(e),new Uint8Array(n.digest())}function x_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new qi([n,r],0),new qi([i,s],0)]}class l1{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ha(`Invalid padding: ${n}`);if(r<0)throw new ha(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ha(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ha(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=qi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(qi.fromNumber(r)));return i.compare(Gk)===1&&(i=new qi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=I_(e),[r,i]=x_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new l1(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=I_(e),[r,i]=x_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ha extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Nl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new rh(X.min(),i,new Ae(ue),Ir(),ie())}}class Nl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Nl(r,n,ie(),ie(),ie())}}/**
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
 */class ac{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class XT{constructor(e,n){this.targetId=e,this.me=n}}class JT{constructor(e,n,r=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class C_{constructor(){this.fe=0,this.ge=P_(),this.pe=it.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Nl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=P_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Qk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ir(),this.qe=R_(),this.Qe=new Ae(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(pm(s))if(r===0){const o=new q(s.path);this.Ue(n,o,mt.newNoDocument(o,X.min()))}else me(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=is(r).toUint8Array()}catch(u){if(u instanceof AT)return ho("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new l1(o,i,s)}catch(u){return ho(u instanceof ha?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&pm(a.target)){const u=new q(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,mt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ie();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new rh(e,n,this.Qe,this.ke,r);return this.ke=Ir(),this.qe=R_(),this.Qe=new Ae(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new C_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new nt(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new C_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function R_(){return new Ae(q.comparator)}function P_(){return new Ae(q.comparator)}const Yk={asc:"ASCENDING",desc:"DESCENDING"},Xk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jk={and:"AND",or:"OR"};class Zk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function gm(t,e){return t.useProto3Json||Xd(e)?e:{value:e}}function rd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ZT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function e8(t,e){return rd(t,e.toTimestamp())}function Bn(t){return me(!!t),X.fromTimestamp(function(n){const r=fi(n);return new Ue(r.seconds,r.nanos)}(t))}function u1(t,e){return ym(t,e).canonicalString()}function ym(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function eI(t){const e=ge.fromString(t);return me(sI(e)),e}function vm(t,e){return u1(t.databaseId,e.path)}function kf(t,e){const n=eI(e);if(n.get(1)!==t.databaseId.projectId)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(nI(n))}function tI(t,e){return u1(t.databaseId,e)}function t8(t){const e=eI(t);return e.length===4?ge.emptyPath():nI(e)}function _m(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nI(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function A_(t,e,n){return{name:vm(t,e),fields:n.value.mapValue.fields}}function n8(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(me(d===void 0||typeof d=="string"),it.fromBase64String(d||"")):(me(d===void 0||d instanceof Buffer||d instanceof Uint8Array),it.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?V.UNKNOWN:YT(c.code);return new B(d,c.message||"")}(o);n=new JT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=kf(t,r.document.name),s=Bn(r.document.updateTime),o=r.document.createTime?Bn(r.document.createTime):X.min(),a=new rn({mapValue:{fields:r.document.fields}}),u=mt.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new ac(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=kf(t,r.document),s=r.readTime?Bn(r.readTime):X.min(),o=mt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ac([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=kf(t,r.document),s=r.removedTargetIds||[];n=new ac([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Hk(i,s),a=r.targetId;n=new XT(a,o)}}return n}function r8(t,e){let n;if(e instanceof kl)n={update:A_(t,e.key,e.value)};else if(e instanceof QT)n={delete:vm(t,e.key)};else if(e instanceof ms)n={update:A_(t,e.key,e.data),updateMask:h8(e.fieldMask)};else{if(!(e instanceof $k))return Y();n={verify:vm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof td)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ll)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ul)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof nd)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:e8(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function i8(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Bn(i.updateTime):Bn(s);return o.isEqual(X.min())&&(o=Bn(s)),new Fk(o,i.transformResults||[])}(n,e))):[]}function s8(t,e){return{documents:[tI(t,e.path)]}}function o8(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=tI(t,i);const s=function(c){if(c.length!==0)return iI(An.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:Is(g.field),direction:u8(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=gm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function a8(t){let e=t8(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(h){const g=rI(h);return g instanceof An&&OT(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(g=>function(I){return new al(xs(I.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(h){let g;return g=typeof h=="object"?h.value:h,Xd(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(h){const g=!!h.before,_=h.values||[];return new go(_,g)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const g=!h.before,_=h.values||[];return new go(_,g)}(n.endAt)),Ck(e,i,o,s,a,"F",u,c)}function l8(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function rI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=xs(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=xs(n.unaryFilter.field);return ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=xs(n.unaryFilter.field);return ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xs(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return ze.create(xs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return An.create(n.compositeFilter.filters.map(r=>rI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function u8(t){return Yk[t]}function c8(t){return Xk[t]}function d8(t){return Jk[t]}function Is(t){return{fieldPath:t.canonicalString()}}function xs(t){return et.fromServerFormat(t.fieldPath)}function iI(t){return t instanceof ze?function(n){if(n.op==="=="){if(m_(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NAN"}};if(p_(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(m_(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NAN"}};if(p_(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Is(n.field),op:c8(n.op),value:n.value}}}(t):t instanceof An?function(n){const r=n.getFilters().map(i=>iI(i));return r.length===1?r[0]:{compositeFilter:{op:d8(n.op),filters:r}}}(t):Y()}function h8(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Gr{constructor(e,n,r,i,s=X.min(),o=X.min(),a=it.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class f8{constructor(e){this.ct=e}}function p8(t){const e=a8({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ed(e,e.limit,"L"):e}/**
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
 */class m8{constructor(){this.un=new g8}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(hi.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(hi.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class g8{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new nt(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new nt(ge.comparator)).toArray()}}/**
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
 */class yo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new yo(0)}static kn(){return new yo(-1)}}/**
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
 */class y8{constructor(){this.changes=new Po(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class v8{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class _8{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ba(r.mutation,i,En.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Ui();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=da();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ui();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ir();const o=Aa(),a=function(){return Aa()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ms)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ba(d.mutation,c,d.mutation.getFieldMask(),Ue.now())):o.set(c.key,En.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var h;return a.set(c,new v8(d,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Aa();let i=new Ae((o,a)=>o-a),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||En.empty();d=a.applyToLocalView(c,d),r.set(u,d);const h=(i.get(a.batchId)||ie()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,h=UT();d.forEach(g=>{if(!s.has(g)){const _=KT(n.get(g),r.get(g));_!==null&&h.set(g,_),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):s1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Ui());let a=-1,u=s;return o.next(c=>F.forEach(c,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ie())).next(d=>({batchId:a,changes:zT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=da();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=da();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(h,g){return new ps(g,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((h,g)=>{o=o.insert(h,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,mt.newInvalidDocument(d)))});let a=da();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ba(d.mutation,c,En.empty(),Ue.now()),eh(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class w8{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Bn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:p8(i.bundledQuery),readTime:Bn(i.readTime)}}(n)),F.resolve()}}/**
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
 */class E8{constructor(){this.overlays=new Ae(q.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ui();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Ui(),s=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Ui(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Ui(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Wk(n,r));let s=this.Ir.get(n);s===void 0&&(s=ie(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class S8{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class c1{constructor(){this.Tr=new nt(He.Er),this.dr=new nt(He.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new He(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new He(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new ge([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new ge([])),r=new He(n,e),i=new He(n,e+1);let s=ie();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
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
 */class T8{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new nt(He.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bk(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new He(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(ue);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new He(new q(s),0);let a=new nt(ue);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new He(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class I8{constructor(e){this.Mr=e,this.docs=function(){return new Ae(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=Ir();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():mt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ir();const o=n.path,a=new q(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||ak(ok(d),r)<=0||(i.has(d.key)||eh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new x8(this)}getSize(e){return F.resolve(this.size)}}class x8 extends y8{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class C8{constructor(e){this.persistence=e,this.Nr=new Po(n=>n1(n),r1),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new c1,this.targetCount=0,this.kr=yo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new yo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
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
 */class R8{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Zg(0),this.Kr=!1,this.Kr=!0,this.$r=new S8,this.referenceDelegate=e(this),this.Ur=new C8(this),this.indexManager=new m8,this.remoteDocumentCache=function(i){return new I8(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new f8(n),this.Gr=new w8(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new E8,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new T8(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new P8(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class P8 extends uk{constructor(e){super(),this.currentSequenceNumber=e}}class d1{constructor(e){this.persistence=e,this.Jr=new c1,this.Yr=null}static Zr(e){return new d1(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class h1{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new h1(e,n.fromCache,r,i)}}/**
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
 */class A8{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class b8{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return w6()?8:ck(vt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new A8;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ea()<=se.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(ea()<=se.DEBUG&&H("QueryEngine","Query:",Ts(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ea()<=se.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$n(n))):F.resolve())}Yi(e,n){if(__(n))return F.resolve(null);let r=$n(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ed(n,null,"F"),r=$n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,ed(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return __(n)||i.isEqual(X.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(ea()<=se.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ts(n)),this.rs(e,o,n,sk(i,-1)).next(a=>a))})}ts(e,n){let r=new nt(VT(e));return n.forEach((i,s)=>{eh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ea()<=se.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ts(n)),this.Ji.getDocumentsMatchingQuery(e,n,hi.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class k8{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ae(ue),this._s=new Po(s=>n1(s),r1),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _8(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function N8(t,e,n,r){return new k8(t,e,n,r)}async function oI(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ie();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function O8(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const h=c.batch,g=h.keys();let _=F.resolve();return g.forEach(I=>{_=_.next(()=>d.getEntry(u,I)).next(R=>{const P=c.docVersions.get(I);me(P!==null),R.version.compareTo(P)<0&&(h.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),d.addEntry(R)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ie();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function aI(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function D8(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((d,h)=>{const g=i.get(h);if(!g)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,h).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,h)));let _=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?_=_.withResumeToken(it.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(h,_),function(R,P,E){return R.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,_,d)&&a.push(n.Ur.updateTargetData(s,_))});let u=Ir(),c=ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(L8(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(X.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(h=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function L8(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ir();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function M8(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function j8(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function wm(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!bl(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function b_(t,e,n){const r=J(t);let i=X.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const h=J(u),g=h._s.get(d);return g!==void 0?F.resolve(h.os.get(g)):h.Ur.getTargetData(c,d)}(r,o,$n(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ie())).next(a=>(V8(r,Pk(e),a),{documents:a,Ts:s})))}function V8(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class k_{constructor(){this.activeTargetIds=Dk()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class F8{constructor(){this.so=new k_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new k_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class z8{_o(e){}shutdown(){}}/**
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
 */class N_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let xu=null;function Nf(){return xu===null?xu=function(){return 268435456+Math.round(2147483648*Math.random())}():xu++,"0x"+xu.toString(16)}/**
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
 */const U8={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class $8{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ct="WebChannelConnection";class B8 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Nf(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(H("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw ho("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Co}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=U8[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Nf();return new Promise((o,a)=>{const u=new wT;u.setWithCredentials(!0),u.listenOnce(ST.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ic.NO_ERROR:const d=u.getResponseJson();H(ct,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case ic.TIMEOUT:H(ct,`RPC '${e}' ${s} timed out`),a(new B(V.DEADLINE_EXCEEDED,"Request time out"));break;case ic.HTTP_ERROR:const h=u.getStatus();if(H(ct,`RPC '${e}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const I=function(P){const E=P.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(E)>=0?E:V.UNKNOWN}(_.status);a(new B(I,_.message))}else a(new B(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new B(V.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{H(ct,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(ct,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Nf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=xT(),a=IT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new ET({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(ct,`Creating RPC '${e}' stream ${i}: ${d}`,u);const h=o.createWebChannel(d,u);let g=!1,_=!1;const I=new $8({Io:P=>{_?H(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(g||(H(ct,`Opening RPC '${e}' stream ${i} transport.`),h.open(),g=!0),H(ct,`RPC '${e}' stream ${i} sending:`,P),h.send(P))},To:()=>h.close()}),R=(P,E,y)=>{P.listen(E,w=>{try{y(w)}catch(C){setTimeout(()=>{throw C},0)}})};return R(h,ca.EventType.OPEN,()=>{_||(H(ct,`RPC '${e}' stream ${i} transport opened.`),I.yo())}),R(h,ca.EventType.CLOSE,()=>{_||(_=!0,H(ct,`RPC '${e}' stream ${i} transport closed`),I.So())}),R(h,ca.EventType.ERROR,P=>{_||(_=!0,ho(ct,`RPC '${e}' stream ${i} transport errored:`,P),I.So(new B(V.UNAVAILABLE,"The operation could not be completed")))}),R(h,ca.EventType.MESSAGE,P=>{var E;if(!_){const y=P.data[0];me(!!y);const w=y,C=w.error||((E=w[0])===null||E===void 0?void 0:E.error);if(C){H(ct,`RPC '${e}' stream ${i} received error:`,C);const N=C.status;let D=function(x){const A=je[x];if(A!==void 0)return YT(A)}(N),T=C.message;D===void 0&&(D=V.INTERNAL,T="Unknown error status: "+N+" with message "+C.message),_=!0,I.So(new B(D,T)),h.close()}else H(ct,`RPC '${e}' stream ${i} received:`,y),I.bo(y)}}),R(a,TT.STAT_EVENT,P=>{P.stat===cm.PROXY?H(ct,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===cm.NOPROXY&&H(ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function Of(){return typeof document<"u"?document:null}/**
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
 */function ih(t){return new Zk(t,!0)}/**
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
 */class lI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class uI{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new lI(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Tr(n.toString()),Tr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new B(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class W8 extends uI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=n8(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Bn(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=_m(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=pm(u)?{documents:s8(s,u)}:{query:o8(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ZT(s,o.resumeToken);const c=gm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=rd(s,o.snapshotVersion.toTimestamp());const c=gm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=l8(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=_m(this.serializer),n.removeTarget=e,this.a_(n)}}class H8 extends uI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=i8(e.writeResults,e.commitTime),r=Bn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=_m(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>r8(this.serializer,r))};this.a_(n)}}/**
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
 */class q8 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,ym(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,ym(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class K8{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Tr(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class G8{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{gs(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.L_.add(4),await Ol(c),c.q_.set("Unknown"),c.L_.delete(4),await sh(c)}(this))})}),this.q_=new K8(r,i)}}async function sh(t){if(gs(t))for(const e of t.B_)await e(!0)}async function Ol(t){for(const e of t.B_)await e(!1)}function cI(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),g1(n)?m1(n):Ao(n).r_()&&p1(n,e))}function f1(t,e){const n=J(t),r=Ao(n);n.N_.delete(e),r.r_()&&dI(n,e),n.N_.size===0&&(r.r_()?r.o_():gs(n)&&n.q_.set("Unknown"))}function p1(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ao(t).A_(e)}function dI(t,e){t.Q_.xe(e),Ao(t).R_(e)}function m1(t){t.Q_=new Qk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ao(t).start(),t.q_.v_()}function g1(t){return gs(t)&&!Ao(t).n_()&&t.N_.size>0}function gs(t){return J(t).L_.size===0}function hI(t){t.Q_=void 0}async function Q8(t){t.q_.set("Online")}async function Y8(t){t.N_.forEach((e,n)=>{p1(t,e)})}async function X8(t,e){hI(t),g1(t)?(t.q_.M_(e),m1(t)):t.q_.set("Unknown")}async function J8(t,e,n){if(t.q_.set("Online"),e instanceof JT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await id(t,r)}else if(e instanceof ac?t.Q_.Ke(e):e instanceof XT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await aI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(it.EMPTY_BYTE_STRING,d.snapshotVersion)),dI(s,u);const h=new Gr(d.target,u,c,d.sequenceNumber);p1(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await id(t,r)}}async function id(t,e,n){if(!bl(e))throw e;t.L_.add(1),await Ol(t),t.q_.set("Offline"),n||(n=()=>aI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await sh(t)})}function fI(t,e){return e().catch(n=>id(t,n,e))}async function oh(t){const e=J(t),n=pi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Z8(e);)try{const i=await M8(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,eN(e,i)}catch(i){await id(e,i)}pI(e)&&mI(e)}function Z8(t){return gs(t)&&t.O_.length<10}function eN(t,e){t.O_.push(e);const n=pi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function pI(t){return gs(t)&&!pi(t).n_()&&t.O_.length>0}function mI(t){pi(t).start()}async function tN(t){pi(t).p_()}async function nN(t){const e=pi(t);for(const n of t.O_)e.m_(n.mutations)}async function rN(t,e,n){const r=t.O_.shift(),i=a1.from(r,e,n);await fI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await oh(t)}async function iN(t,e){e&&pi(t).V_&&await async function(r,i){if(function(o){return qk(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();pi(r).s_(),await fI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await oh(r)}}(t,e),pI(t)&&mI(t)}async function O_(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=gs(n);n.L_.add(3),await Ol(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await sh(n)}async function sN(t,e){const n=J(t);e?(n.L_.delete(2),await sh(n)):e||(n.L_.add(2),await Ol(n),n.q_.set("Unknown"))}function Ao(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new W8(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:Q8.bind(null,t),Ro:Y8.bind(null,t),mo:X8.bind(null,t),d_:J8.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),g1(t)?m1(t):t.q_.set("Unknown")):(await t.K_.stop(),hI(t))})),t.K_}function pi(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new H8(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:tN.bind(null,t),mo:iN.bind(null,t),f_:nN.bind(null,t),g_:rN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await oh(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class y1{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new oi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new y1(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function v1(t,e){if(Tr("AsyncQueue",`${e}: ${t}`),bl(t))return new B(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Qs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=da(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new Qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class D_{constructor(){this.W_=new Ae(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class vo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new vo(e,n,Qs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class oN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class aN{constructor(){this.queries=L_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=L_(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new B(V.ABORTED,"Firestore shutting down"))}}function L_(){return new Po(t=>jT(t),Zd)}async function gI(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new oN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=v1(o,`Initialization of query '${Ts(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&_1(n)}async function yI(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function lN(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&_1(n)}function uN(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function _1(t){t.Y_.forEach(e=>{e.next()})}var Em,M_;(M_=Em||(Em={})).ea="default",M_.Cache="cache";class vI{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new vo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Em.Cache}}/**
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
 */class _I{constructor(e){this.key=e}}class wI{constructor(e){this.key=e}}class cN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ie(),this.mutatedKeys=ie(),this.Aa=VT(e),this.Ra=new Qs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new D_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,h)=>{const g=i.get(d),_=eh(this.query,h)?h:null,I=!!g&&this.mutatedKeys.has(g.key),R=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;g&&_?g.data.isEqual(_.data)?I!==R&&(r.track({type:3,doc:_}),P=!0):this.ga(g,_)||(r.track({type:2,doc:_}),P=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!g&&_?(r.track({type:0,doc:_}),P=!0):g&&!_&&(r.track({type:1,doc:g}),P=!0,(u||c)&&(a=!0)),P&&(_?(o=o.add(_),s=R?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,h)=>function(_,I){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return R(_)-R(I)}(d.type,h.type)||this.Aa(d.doc,h.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new vo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new D_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ie(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new wI(r))}),this.da.forEach(r=>{e.has(r)||n.push(new _I(r))}),n}ba(e){this.Ta=e.Ts,this.da=ie();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return vo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class dN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class hN{constructor(e){this.key=e,this.va=!1}}class fN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Po(a=>jT(a),Zd),this.Ma=new Map,this.xa=new Set,this.Oa=new Ae(q.comparator),this.Na=new Map,this.La=new c1,this.Ba={},this.ka=new Map,this.qa=yo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function pN(t,e,n=!0){const r=CI(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await EI(r,e,n,!0),i}async function mN(t,e){const n=CI(t);await EI(n,e,!0,!1)}async function EI(t,e,n,r){const i=await j8(t.localStore,$n(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await gN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&cI(t.remoteStore,i),a}async function gN(t,e,n,r,i){t.Ka=(h,g,_)=>async function(R,P,E,y){let w=P.view.ma(E);w.ns&&(w=await b_(R.localStore,P.query,!1).then(({documents:T})=>P.view.ma(T,w)));const C=y&&y.targetChanges.get(P.targetId),N=y&&y.targetMismatches.get(P.targetId)!=null,D=P.view.applyChanges(w,R.isPrimaryClient,C,N);return V_(R,P.targetId,D.wa),D.snapshot}(t,h,g,_);const s=await b_(t.localStore,e,!0),o=new cN(e,s.Ts),a=o.ma(s.documents),u=Nl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);V_(t,n,c.wa);const d=new dN(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function yN(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Zd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await wm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&f1(r.remoteStore,i.targetId),Sm(r,i.targetId)}).catch(Al)):(Sm(r,i.targetId),await wm(r.localStore,i.targetId,!0))}async function vN(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),f1(n.remoteStore,r.targetId))}async function _N(t,e,n){const r=CN(t);try{const i=await function(o,a){const u=J(o),c=Ue.now(),d=a.reduce((_,I)=>_.add(I.key),ie());let h,g;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let I=Ir(),R=ie();return u.cs.getEntries(_,d).next(P=>{I=P,I.forEach((E,y)=>{y.isValidDocument()||(R=R.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,I)).next(P=>{h=P;const E=[];for(const y of a){const w=Uk(y,h.get(y.key).overlayedDocument);w!=null&&E.push(new ms(y.key,w,bT(w.value.mapValue),mr.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,E,a)}).next(P=>{g=P;const E=P.applyToLocalDocumentSet(h,R);return u.documentOverlayCache.saveOverlays(_,P.batchId,E)})}).then(()=>({batchId:g.batchId,changes:zT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ae(ue)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Dl(r,i.changes),await oh(r.remoteStore)}catch(i){const s=v1(i,"Failed to persist write");n.reject(s)}}async function SI(t,e){const n=J(t);try{const r=await D8(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?me(o.va):i.removedDocuments.size>0&&(me(o.va),o.va=!1))}),await Dl(n,r,e)}catch(r){await Al(r)}}function j_(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=J(o);u.onlineState=a;let c=!1;u.queries.forEach((d,h)=>{for(const g of h.j_)g.Z_(a)&&(c=!0)}),c&&_1(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wN(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ae(q.comparator);o=o.insert(s,mt.newNoDocument(s,X.min()));const a=ie().add(s),u=new rh(X.min(),new Map,new Ae(ue),o,a);await SI(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),w1(r)}else await wm(r.localStore,e,!1).then(()=>Sm(r,e,n)).catch(Al)}async function EN(t,e){const n=J(t),r=e.batch.batchId;try{const i=await O8(n.localStore,e);II(n,r,null),TI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Dl(n,i)}catch(i){await Al(i)}}async function SN(t,e,n){const r=J(t);try{const i=await function(o,a){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(h=>(me(h!==null),d=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);II(r,e,n),TI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Dl(r,i)}catch(i){await Al(i)}}function TI(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function II(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Sm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||xI(t,r)})}function xI(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(f1(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),w1(t))}function V_(t,e,n){for(const r of n)r instanceof _I?(t.La.addReference(r.key,e),TN(t,r)):r instanceof wI?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||xI(t,r.key)):Y()}function TN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),w1(t))}function w1(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(ge.fromString(e)),r=t.qa.next();t.Na.set(r,new hN(n)),t.Oa=t.Oa.insert(n,r),cI(t.remoteStore,new Gr($n(i1(n.path)),r,"TargetPurposeLimboResolution",Zg.oe))}}async function Dl(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const h=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){i.push(c);const h=h1.Wi(u.targetId,c);s.push(h)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>F.forEach(c,g=>F.forEach(g.$i,_=>d.persistence.referenceDelegate.addReference(h,g.targetId,_)).next(()=>F.forEach(g.Ui,_=>d.persistence.referenceDelegate.removeReference(h,g.targetId,_)))))}catch(h){if(!bl(h))throw h;H("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const g=h.targetId;if(!h.fromCache){const _=d.os.get(g),I=_.snapshotVersion,R=_.withLastLimboFreeSnapshotVersion(I);d.os=d.os.insert(g,R)}}}(r.localStore,s))}async function IN(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await oI(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new B(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Dl(n,r.hs)}}function xN(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return ie().add(r.key);{let i=ie();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function CI(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=SI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wN.bind(null,e),e.Ca.d_=lN.bind(null,e.eventManager),e.Ca.$a=uN.bind(null,e.eventManager),e}function CN(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SN.bind(null,e),e}class F_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ih(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return N8(this.persistence,new b8,e.initialUser,this.serializer)}createPersistence(e){return new R8(d1.Zr,this.serializer)}createSharedClientState(e){return new F8}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class RN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>j_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=IN.bind(null,this.syncEngine),await sN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aN}()}createDatastore(e){const n=ih(e.databaseInfo.databaseId),r=function(s){return new B8(s)}(e.databaseInfo);return function(s,o,a,u){return new q8(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new G8(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>j_(this.syncEngine,n,0),function(){return N_.D()?new N_:new z8}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const h=new fN(i,s,o,a,u,c);return d&&(h.Qa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ol(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 */class RI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):Tr("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class PN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=RT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new oi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=v1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Df(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await oI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function z_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bN(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>O_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>O_(e.remoteStore,i)),t._onlineComponents=e}function AN(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function bN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Df(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!AN(n))throw n;ho("Error using user provided cache. Falling back to memory cache: "+n),await Df(t,new F_)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Df(t,new F_);return t._offlineComponents}async function PI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await z_(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await z_(t,new RN))),t._onlineComponents}function kN(t){return PI(t).then(e=>e.syncEngine)}async function Tm(t){const e=await PI(t),n=e.eventManager;return n.onListen=pN.bind(null,e.syncEngine),n.onUnlisten=yN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=mN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=vN.bind(null,e.syncEngine),n}function NN(t,e,n={}){const r=new oi;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new RI({next:g=>{o.enqueueAndForget(()=>yI(s,h)),g.fromCache&&u.source==="server"?c.reject(new B(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),h=new vI(a,d,{includeMetadataChanges:!0,_a:!0});return gI(s,h)}(await Tm(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function AI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const U_=new Map;/**
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
 */function bI(t,e,n){if(!n)throw new B(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ON(t,e,n,r){if(e===!0&&r===!0)throw new B(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $_(t){if(!q.isDocumentKey(t))throw new B(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function B_(t){if(q.isDocumentKey(t))throw new B(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ah(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Ki(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ah(t);throw new B(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class W_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ON("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=AI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new W_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new W_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Yb;switch(r.type){case"firstParty":return new ek(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=U_.get(n);r&&(H("ComponentProvider","Removing Datastore"),U_.delete(n),r.terminate())}(this),Promise.resolve()}}function DN(t,e,n,r={}){var i;const s=(t=Ki(t,lh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ho("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=ft.MOCK_USER;else{a=DS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ft(c)}t._authCredentials=new Xb(new CT(a,u))}}/**
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
 */class Qn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qn(this.firestore,e,this._query)}}class Gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gt(this.firestore,e,this._key)}}class ai extends Qn{constructor(e,n,r){super(e,n,i1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gt(this.firestore,null,new q(e))}withConverter(e){return new ai(this.firestore,e,this._path)}}function Wn(t,e,...n){if(t=_t(t),bI("collection","path",e),t instanceof lh){const r=ge.fromString(e,...n);return B_(r),new ai(t,null,r)}{if(!(t instanceof Gt||t instanceof ai))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return B_(r),new ai(t.firestore,null,r)}}function LN(t,e,...n){if(t=_t(t),arguments.length===1&&(e=RT.newId()),bI("doc","path",e),t instanceof lh){const r=ge.fromString(e,...n);return $_(r),new Gt(t,null,new q(r))}{if(!(t instanceof Gt||t instanceof ai))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return $_(r),new Gt(t.firestore,t instanceof ai?t.converter:null,new q(r))}}/**
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
 */class MN{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new lI(this,"async_queue_retry"),this.Eu=()=>{const n=Of();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Of();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Of();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new oi;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!bl(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Tr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=y1.createAndSchedule(this,e,n,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&Y()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}function H_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class cl extends lh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new MN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||NI(this),this._firestoreClient.terminate()}}function kI(t,e){const n=typeof t=="object"?t:zg(),r=typeof t=="string"?t:"(default)",i=Kd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=kS("firestore");s&&DN(i,...s)}return i}function E1(t){return t._firestoreClient||NI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function NI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new fk(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,AI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new PN(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class _o{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _o(it.fromBase64String(e))}catch(n){throw new B(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _o(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class S1{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class OI{constructor(e){this._methodName=e}}/**
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
 */class T1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */class I1{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const jN=/^__.*__$/;class VN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ms(e,this.data,this.fieldMask,n,this.fieldTransforms):new kl(e,this.data,n,this.fieldTransforms)}}function DI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class x1{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new x1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return sd(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(DI(this.wu)&&jN.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class FN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ih(e)}Nu(e,n,r,i=!1){return new x1({wu:e,methodName:n,Ou:r,path:et.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function C1(t){const e=t._freezeSettings(),n=ih(t._databaseId);return new FN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zN(t,e,n,r,i,s={}){const o=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);VI("Data must be an object, but it was:",o,r);const a=MI(r,o);let u,c;if(s.merge)u=new En(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const h of s.mergeFields){const g=UN(e,h,n);if(!o.contains(g))throw new B(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);BN(d,g)||d.push(g)}u=new En(d),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new VN(new rn(a),u,c)}function LI(t,e,n,r=!1){return R1(n,t.Nu(r?4:3,e))}function R1(t,e){if(jI(t=_t(t)))return VI("Unsupported field value:",e,t),MI(t,e);if(t instanceof OI)return function(r,i){if(!DI(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=R1(a,i.Fu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=_t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Lk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ue.fromDate(r);return{timestampValue:rd(i.serializer,s)}}if(r instanceof Ue){const s=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rd(i.serializer,s)}}if(r instanceof T1)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _o)return{bytesValue:ZT(i.serializer,r._byteString)};if(r instanceof Gt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:u1(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof I1)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Mu("VectorValues must only contain numeric values.");return o1(a.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${ah(r)}`)}(t,e)}function MI(t,e){const n={};return PT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ro(t,(r,i)=>{const s=R1(i,e.bu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function jI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof T1||t instanceof _o||t instanceof Gt||t instanceof OI||t instanceof I1)}function VI(t,e,n){if(!jI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ah(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function UN(t,e,n){if((e=_t(e))instanceof S1)return e._internalPath;if(typeof e=="string")return FI(t,e);throw sd("Field path arguments must be of type string or ",t,!1,void 0,n)}const $N=new RegExp("[~\\*/\\[\\]]");function FI(t,e,n){if(e.search($N)>=0)throw sd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new S1(...e.split("."))._internalPath}catch{throw sd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(V.INVALID_ARGUMENT,a+t+u)}function BN(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class P1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(uh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class WN extends P1{data(){return super.data()}}function uh(t,e){return typeof e=="string"?FI(t,e):e instanceof S1?e._internalPath:e._delegate._internalPath}/**
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
 */function zI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class A1{}class ch extends A1{}function od(t,e,...n){let r=[];e instanceof A1&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof b1).length,a=s.filter(u=>u instanceof dh).length;if(o>1||o>0&&a>0)throw new B(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class dh extends ch{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new dh(e,n,r)}_apply(e){const n=this._parse(e);return $I(e._query,n),new Qn(e.firestore,e.converter,mm(e._query,n))}_parse(e){const n=C1(e.firestore);return function(s,o,a,u,c,d,h){let g;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new B(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Q_(h,d);const _=[];for(const I of h)_.push(G_(u,s,I));g={arrayValue:{values:_}}}else g=G_(u,s,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Q_(h,d),g=LI(a,o,h,d==="in"||d==="not-in");return ze.create(c,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function UI(t,e,n){const r=e,i=uh("where",t);return dh._create(i,r,n)}class b1 extends A1{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new b1(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:An.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)$I(o,u),o=mm(o,u)}(e._query,n),new Qn(e.firestore,e.converter,mm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class k1 extends ch{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new k1(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new al(s,o)}(e._query,this._field,this._direction);return new Qn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ps(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function q_(t,e="asc"){const n=e,r=uh("orderBy",t);return k1._create(r,n)}class N1 extends ch{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new N1(e,n,r)}_apply(e){return new Qn(e.firestore,e.converter,ed(e._query,this._limit,this._limitType))}}function K_(t){return N1._create("limit",t,"F")}class O1 extends ch{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new O1(e,n,r)}_apply(e){const n=qN(e,this.type,this._docOrFields,this._inclusive);return new Qn(e.firestore,e.converter,function(i,s){return new ps(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function HN(...t){return O1._create("startAfter",t,!1)}function qN(t,e,n,r){if(n[0]=_t(n[0]),n[0]instanceof P1)return function(s,o,a,u,c){if(!u)throw new B(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const h of Gs(s))if(h.field.isKeyField())d.push(Zc(o,u.key));else{const g=u.data.field(h.field);if(Jd(g))throw new B(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const _=h.field.canonicalString();throw new B(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}d.push(g)}return new go(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=C1(t.firestore);return function(o,a,u,c,d,h){const g=o.explicitOrderBy;if(d.length>g.length)throw new B(V.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let I=0;I<d.length;I++){const R=d[I];if(g[I].field.isKeyField()){if(typeof R!="string")throw new B(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof R}`);if(!s1(o)&&R.indexOf("/")!==-1)throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${R}' contains a slash.`);const P=o.path.child(ge.fromString(R));if(!q.isDocumentKey(P))throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${P}' is not because it contains an odd number of segments.`);const E=new q(P);_.push(Zc(a,E))}else{const P=LI(u,c,R);_.push(P)}}return new go(_,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function G_(t,e,n){if(typeof(n=_t(n))=="string"){if(n==="")throw new B(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!s1(e)&&n.indexOf("/")!==-1)throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!q.isDocumentKey(r))throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Zc(t,new q(r))}if(n instanceof Gt)return Zc(t,n._key);throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ah(n)}.`)}function Q_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $I(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class KN{convertValue(e,n="none"){switch(ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ro(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Le(o.doubleValue));return new I1(s)}convertGeoPoint(e){return new T1(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=e1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(il(e));default:return null}}convertTimestamp(e){const n=fi(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);me(sI(r));const i=new sl(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Tr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function GN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class fa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class BI extends P1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(uh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class lc extends BI{data(e={}){return super.data(e)}}class WI{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new fa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new lc(this._firestore,this._userDataWriter,r.key,r,new fa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new lc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new fa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new lc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new fa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:QN(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function QN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class D1 extends KN{constructor(e){super(),this.firestore=e}convertBytes(e){return new _o(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Gt(this.firestore,null,n)}}function Gi(t){t=Ki(t,Qn);const e=Ki(t.firestore,cl),n=E1(e),r=new D1(e);return zI(t._query),NN(n,t._query).then(i=>new WI(e,r,t,i))}function L1(t,e){const n=Ki(t.firestore,cl),r=LN(t),i=GN(t.converter,e);return XN(n,[zN(C1(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,mr.exists(!1))]).then(()=>r)}function YN(t,...e){var n,r,i;t=_t(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||H_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(H_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,c,d;if(t instanceof Gt)c=Ki(t.firestore,cl),d=i1(t._key.path),u={next:h=>{e[o]&&e[o](JN(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ki(t,Qn);c=Ki(h.firestore,cl),d=h._query;const g=new D1(c);u={next:_=>{e[o]&&e[o](new WI(c,g,h,_))},error:e[o+1],complete:e[o+2]},zI(t._query)}return function(g,_,I,R){const P=new RI(R),E=new vI(_,P,I);return g.asyncQueue.enqueueAndForget(async()=>gI(await Tm(g),E)),()=>{P.za(),g.asyncQueue.enqueueAndForget(async()=>yI(await Tm(g),E))}}(E1(c),d,a,u)}function XN(t,e){return function(r,i){const s=new oi;return r.asyncQueue.enqueueAndForget(async()=>_N(await kN(r),i,s)),s.promise}(E1(t),e)}function JN(t,e,n){const r=n.docs.get(e._key),i=new D1(t);return new BI(t,i,e._key,r,new fa(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Co=i})(fs),es(new di("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new cl(new Jb(r.getProvider("auth-internal")),new nk(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sl(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),zn(u_,"4.7.1",e),zn(u_,"4.7.1","esm2017")})();/**
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
 */const HI="firebasestorage.googleapis.com",ZN="storageBucket",eO=2*60*1e3,tO=10*60*1e3;/**
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
 */class Yn extends Gn{constructor(e,n,r=0){super(Lf(e),`Firebase Storage: ${n} (${Lf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Yn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Lf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Kn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Kn||(Kn={}));function Lf(t){return"storage/"+t}function nO(){const t="An unknown error occurred, please check the error payload for server response.";return new Yn(Kn.UNKNOWN,t)}function rO(){return new Yn(Kn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iO(){return new Yn(Kn.CANCELED,"User canceled the upload/download.")}function sO(t){return new Yn(Kn.INVALID_URL,"Invalid URL '"+t+"'.")}function oO(t){return new Yn(Kn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Y_(t){return new Yn(Kn.INVALID_ARGUMENT,t)}function qI(){return new Yn(Kn.APP_DELETED,"The Firebase app was deleted.")}function aO(t){return new Yn(Kn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Sn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Sn.makeFromUrl(e,n)}catch{return new Sn(e,"")}if(r.path==="")return r;throw oO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(C){C.path_=decodeURIComponent(C.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${h}/${d}/b/${i}/o${g}`,"i"),I={bucket:1,path:3},R=n===HI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",E=new RegExp(`^https?://${R}/${i}/${P}`,"i"),w=[{regex:a,indices:u,postModify:s},{regex:_,indices:I,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let C=0;C<w.length;C++){const N=w[C],D=N.regex.exec(e);if(D){const T=D[N.indices.bucket];let v=D[N.indices.path];v||(v=""),r=new Sn(T,v),N.postModify(r);break}}if(r==null)throw sO(e);return r}}class lO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function uO(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...P){c||(c=!0,e.apply(null,P))}function h(P){i=setTimeout(()=>{i=null,t(_,u())},P)}function g(){s&&clearTimeout(s)}function _(P,...E){if(c){g();return}if(P){g(),d.call(null,P,...E);return}if(u()||o){g(),d.call(null,P,...E);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,h(w)}let I=!1;function R(P){I||(I=!0,g(),!c&&(i!==null?(P||(a=2),clearTimeout(i),h(0)):P||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,R(!0)},n),R}function cO(t){t(!1)}/**
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
 */function dO(t){return t!==void 0}function X_(t,e,n,r){if(r<e)throw Y_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Y_(`Invalid value for '${t}'. Expected ${n} or less.`)}function hO(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ad;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ad||(ad={}));/**
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
 */function fO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class pO{constructor(e,n,r,i,s,o,a,u,c,d,h,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=h,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,I)=>{this.resolve_=_,this.reject_=I,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Cu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ad.NO_ERROR,u=s.getStatus();if(!a||fO(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===ad.ABORT;r(!1,new Cu(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Cu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());dO(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=nO();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?qI():iO();o(u)}else{const u=rO();o(u)}};this.canceled_?n(!1,new Cu(!1,null,!0)):this.backoffId_=uO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Cu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function mO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function gO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function yO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function vO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _O(t,e,n,r,i,s,o=!0){const a=hO(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return yO(c,e),mO(c,n),gO(c,s),vO(c,r),new pO(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function wO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function EO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class ld{constructor(e,n){this._service=e,n instanceof Sn?this._location=n:this._location=Sn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ld(e,n)}get root(){const e=new Sn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return EO(this._location.path)}get storage(){return this._service}get parent(){const e=wO(this._location.path);if(e===null)return null;const n=new Sn(this._location.bucket,e);return new ld(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw aO(e)}}function J_(t,e){const n=e==null?void 0:e[ZN];return n==null?null:Sn.makeFromBucketSpec(n,t)}function SO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:DS(i,t.app.options.projectId))}class TO{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=HI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=eO,this._maxUploadRetryTime=tO,this._requests=new Set,i!=null?this._bucket=Sn.makeFromBucketSpec(i,this._host):this._bucket=J_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Sn.makeFromBucketSpec(this._url,e):this._bucket=J_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){X_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){X_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ld(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new lO(qI());{const o=_O(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Z_="@firebase/storage",ew="0.13.1";/**
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
 */const KI="storage";function IO(t=zg(),e){t=_t(t);const r=Kd(t,KI).getImmediate({identifier:e}),i=kS("storage");return i&&xO(r,...i),r}function xO(t,e,n,r={}){SO(t,e,n,r)}function CO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new TO(n,r,i,e,fs)}function RO(){es(new di(KI,CO,"PUBLIC").setMultipleInstances(!0)),zn(Z_,ew,""),zn(Z_,ew,"esm2017")}RO();const PO={apiKey:"AIzaSyAUoMzD8fdip3Oog3rb4jFLdS4vTHqybuI",authDomain:"estore-react-922c8.firebaseapp.com",projectId:"estore-react-922c8",storageBucket:"estore-react-922c8.appspot.com",messagingSenderId:"36464998952",appId:"1:36464998952:web:69254f1256a6d77180131d"},Ll=jS(PO),Im=qb(Ll),Hn=kI(Ll);IO(Ll);kI(Ll);const AO=new vn(Ll);function bO(t){return Se({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(t)}const kO=be.img`
    width: 7rem;
    height: 5rem;
    margin-left: -1.5rem;
`,NO=be.div`
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
`,OO=()=>{const[t,e]=M.useState({name:"",email:"",password:"",role:"user"}),n=$d(),r=async s=>{s.preventDefault();try{const o=await NA(Im,t.email,t.password),a={name:t.name,email:o.user.email,uid:o.user.uid,role:t.role,time:Ue.now(),date:new Date().toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})},u=Wn(Hn,"user");L1(u,a),e({name:"",email:"",password:""}),gt.success("Registration Successful"),n("/Login"),console.log("Account Created",o)}catch{gt.error("User Already Existed"),setEmail(""),setPassword(""),setCnfrmpassword(""),console.log("Already Exists")}},i=async()=>{await tb(Im,AO).then(s=>{const a=vn.credentialFromResult(s).accessToken,u=s.user;console.log("Token :",a),console.log("user :",u),n("/Login"),console.log("Hello Ahmed")}).catch(s=>{const o=s.code,a=s.message,u=s.customData.email,c=vn.credentialFromError(s);console.log("errorcode: ",o),console.log("errormessage: ",a),console.log("email: ",u),console.log("credential: ",c),n("/Register")})};return p.jsx(p.Fragment,{children:p.jsxs(NO,{id:"Registerpanel",children:[p.jsx("div",{children:p.jsx(kO,{src:bg,alt:"SiteLogo"})}),p.jsx("h3",{children:"Make Some Change!"}),p.jsxs("form",{onSubmit:r,children:[p.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[p.jsx("label",{for:"exampleInputEmail1",className:"form-label",children:"Name"}),p.jsx("input",{type:"name",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Name",required:!0,value:t.name,onChange:s=>e({...t,name:s.target.value})})]}),p.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[p.jsx("label",{for:"exampleInputEmail1",className:"form-label",children:"Email"}),p.jsx("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email",required:!0,value:t.email,onChange:s=>e({...t,email:s.target.value})})]}),p.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[p.jsx("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),p.jsx("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",required:!0,value:t.password,onChange:s=>e({...t,password:s.target.value})})]}),p.jsx("button",{type:"submit",className:"btn btn-primary container",children:"Submit"})]}),p.jsxs("div",{className:"register",children:[p.jsx("h5",{children:"Already have an account"}),p.jsx(ht,{to:"/Login",children:"Login"})]}),p.jsx("div",{children:p.jsxs("button",{className:"container",id:"googlebutton",onClick:i,children:[p.jsx(bO,{size:"1.1rem",id:"googleicon"}),"Continue with Google"]})})]})})},DO=be.img`
    width: 7rem;
    height: 5rem;
    margin-left: -1.5rem;
`,LO=be.div`
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
`,MO=()=>{const[t,e]=M.useState({email:"",password:""}),n=$d(),r=async i=>{var s;i.preventDefault();try{const o=await OA(Im,t.email,t.password);try{const a=od(Wn(Hn,"user"),UI("uid","==",(s=o==null?void 0:o.user)==null?void 0:s.uid)),u=YN(a,c=>{let d;c.forEach(h=>d=h.data()),localStorage.setItem("users",JSON.stringify(d)),e({email:"",password:""}),gt.success("Login Successful"),console.log("User logged in:",o.user),d.role==="user"&&n("/Home")});return()=>u}catch(a){console.log("error",a)}}catch{gt.error("Login not found"),e({email:"",password:""})}};return p.jsx(p.Fragment,{children:p.jsxs(LO,{id:"loginpanel",children:[p.jsx("div",{children:p.jsx(DO,{src:bg,alt:"SiteLogo"})}),p.jsx("h3",{children:"Welcome back!"}),p.jsxs("form",{onSubmit:r,children:[p.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[p.jsx("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email"}),p.jsx("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email",required:!0,value:t.email,onChange:i=>e({...t,email:i.target.value})})]}),p.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[p.jsx("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),p.jsx("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",required:!0,value:t.password,onChange:i=>e({...t,password:i.target.value})}),p.jsx("button",{type:"submit",children:"Login"})]})]}),p.jsxs("div",{className:"register",children:[p.jsx("h5",{children:"Don't have an account"}),p.jsx(ht,{to:"/Register",children:"Register"})]})]})})},jO="/freshbiteapp_Reactjs/assets/veg-C5rJdKzF.jpg",VO="/freshbiteapp_Reactjs/assets/fruit-lXJ3bgGr.jpg",FO=be.div`
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
`,zO=()=>p.jsx(p.Fragment,{children:p.jsxs(FO,{children:[p.jsxs("div",{className:"veg-section",style:{backgroundImage:`url(${jO})`},children:[p.jsxs("h1",{children:["Tasty ",p.jsx("y",{style:{color:"coral"},children:" Vegetables "})," ",p.jsx("br",{})," From Farm ",p.jsx("br",{})," Vendors"]}),p.jsxs("p",{children:["Every Friday Check",p.jsx("br",{})," Best Margla Deals"]}),p.jsx("button",{className:"btn btn-success",children:"Shop Now"})]}),p.jsxs("div",{className:"fruit-section",style:{backgroundImage:`url(${VO})`},children:[p.jsxs("h1",{children:[p.jsx("y",{style:{color:"coral"},children:" Delicious "})," Fruits ",p.jsx("br",{})," From South ",p.jsx("br",{})," Africa"]}),p.jsxs("p",{children:["Every Friday Check",p.jsx("br",{})," Best Margla Deals"]}),p.jsx("button",{className:"btn btn-success",children:"Shop Now"})]})]})});function UO(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"},child:[]},{tag:"path",attr:{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"},child:[]},{tag:"path",attr:{d:"m18 15-2-2"},child:[]},{tag:"path",attr:{d:"m15 18-2-2"},child:[]}]})(t)}function $O(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"},child:[]}]})(t)}function BO(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5 1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"},child:[]}]})(t)}function WO(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"},child:[]}]})(t)}function HO(t){return Se({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M1023.65 290.48c.464-23.664-5.904-78.848-77.84-98.064L223.394 47.794c-52.944 0-96 43.055-96 96v128.704l-32-.08c-52.752.223-95.632 43.15-95.632 95.967v511.808c0 52.945 43.056 96 96 96h832.464c52.945 0 96-43.055 96-96zM191.393 143.793c0-16.72 12.88-30.463 29.216-31.871l706 142.88c.256.128-5.248 17.935-30.88 17.6H191.393zM960.24 880.21c0 17.664-14.336 32-32 32H95.76c-17.664 0-32-14.336-32-32V368.386c0-17.664 14.336-32 32-32h800.064c31.408 0 64.4-10.704 64.4-31.888V880.21h.016zM191.824 560.498c-35.344 0-64 28.656-64 64s28.656 64 64 64 64-28.656 64-64-28.656-64-64-64z"},child:[]}]})(t)}const qO=be.section`
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
`,KO=()=>p.jsx(p.Fragment,{children:p.jsxs(qO,{children:[p.jsxs("div",{children:[p.jsx(F3,{size:"2rem",color:"tomato"}),p.jsx("h4",{children:"Top Notch Support"}),p.jsx("p",{children:"Chat with us if you've any query"})]}),p.jsxs("div",{children:[p.jsx(UO,{size:"2rem",color:"tomato"}),p.jsx("h4",{children:"100% Satisfaction Guarrentae"}),p.jsx("p",{children:"Provide help in case of Dissatisfaction"})]}),p.jsxs("div",{children:[p.jsx(BO,{size:"2rem",color:"tomato"}),p.jsx("h4",{children:"Free Deliverey Acrross all US"}),p.jsx("p",{children:"Free Deliverey for all orders above $500"})]}),p.jsxs("div",{children:[p.jsx(HO,{size:"2rem",color:"tomato"}),p.jsx("h4",{children:"Secure Payment"}),p.jsx("p",{children:"We use safest Payment Technologies"})]})]})}),GO="/freshbiteapp_Reactjs/assets/first-Bd_imVfc.jpg",QO="/freshbiteapp_Reactjs/assets/third-Ba3uQAAu.jpg",YO="/freshbiteapp_Reactjs/assets/second-A7lX0XHt.jpeg",XO=be.div`
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
`,JO=()=>p.jsx(p.Fragment,{children:p.jsxs(XO,{children:[p.jsxs("div",{style:{backgroundImage:`url(${YO})`},children:[p.jsxs("h3",{children:["Fresh ",p.jsx("y",{style:{color:"tomato"},children:" Vegies "})," ",p.jsx("br",{})," Everyday "]}),p.jsx("button",{className:"btn btn-secondary",children:"Shop Now"})]}),p.jsxs("div",{style:{backgroundImage:`url(${GO})`},children:[p.jsxs("h3",{children:["Sweet ",p.jsx("y",{style:{color:"orange"},children:" Organic "})," ",p.jsx("br",{})," Drinks "]}),p.jsx("button",{className:"btn btn-secondary",children:"Shop Now"})]}),p.jsxs("div",{style:{backgroundImage:`url(${QO})`},children:[p.jsxs("h3",{children:["Fairly ",p.jsx("y",{style:{color:"red"},children:" Meat "})," ",p.jsx("br",{})," Lovers "]}),p.jsx("button",{className:"btn btn-secondary",children:"Shop Now"})]})]})}),ZO=be.section`
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
`,e7=()=>{const[t,e]=M.useState(""),n=async r=>{if(r.preventDefault(),t===""){gt.error("Email is required");return}else if(!t.includes("@")||!t.endsWith(".com")){gt.error("Put a valid email address");return}else try{const i=Wn(Hn,"Subscribe"),s=od(i,UI("Email","==",t));if(!(await Gi(s)).empty){gt.error("Already Registered"),e("");return}await L1(i,{Email:t}),gt.success("Successfully Registered")}catch{gt.error("Failed to Subscribe. Try again"),e("")}};return p.jsx(p.Fragment,{children:p.jsxs(ZO,{children:[p.jsx("label",{children:"Subscribe To Our Newsletter"}),p.jsxs("div",{children:[p.jsx("input",{id:"email",type:"email",placeholder:"Enter Your Email Address",required:!0,value:t,onChange:r=>e(r.target.value)}),p.jsx("button",{onClick:n,children:"Subscribe"})]})]})})},t7=be.section`
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
`,n7=()=>{const[t,e]=M.useState([]),[n,r]=M.useState([]),[i,s]=M.useState([]);M.useEffect(()=>{(async()=>{const d=Wn(Hn,"HomeVegProducts"),g=(await Gi(d)).docs.map(w=>({id:w.id,...w.data()}));e(g);const _=Wn(Hn,"HomeFruitProducts"),R=(await Gi(_)).docs.map(w=>({id:w.id,...w.data()}));r(R);const P=Wn(Hn,"HomeOtherProducts"),y=(await Gi(P)).docs.map(w=>({id:w.id,...w.data()}));s(y)})()},[]);const o=()=>{document.getElementById("vegies").style.display="flex",document.getElementById("fruits").style.display="none",document.getElementById("others").style.display="none"},a=()=>{document.getElementById("vegies").style.display="none",document.getElementById("fruits").style.display="flex",document.getElementById("others").style.display="none"},u=()=>{document.getElementById("vegies").style.display="none",document.getElementById("fruits").style.display="none",document.getElementById("others").style.display="flex"};return p.jsx(p.Fragment,{children:p.jsxs(t7,{children:[p.jsx("h3",{children:"Best Selling of August"}),p.jsxs("div",{className:"links",children:[p.jsx("i",{onClick:o,children:"Vegies"}),p.jsx("i",{onClick:a,children:"Fruits"}),p.jsx("i",{onClick:u,children:"Others"})]}),p.jsxs("div",{children:[p.jsx("div",{id:"vegies",children:p.jsx("div",{className:"container",children:p.jsx("div",{className:"row",children:t.map((c,d)=>p.jsx("div",{className:"col-md-3 mb-3 col-6",children:p.jsxs("div",{className:"card",children:[p.jsx("img",{src:c.imageurl,className:"card-img-top",alt:c.name}),p.jsxs("div",{className:"card-body",children:[p.jsx("h5",{className:"card-title",children:c.name}),p.jsxs("p",{className:"card-text",style:{color:"red"},children:[" $",c.price]}),c.Bunch&&p.jsxs("p",{className:"card-text",children:[p.jsx("y",{children:"Bunch: "})," ",c.Bunch]}),c.quantity&&p.jsxs("p",{className:"card-text",children:[p.jsx("y",{children:"Quantity: "})," ",c.quantity,"Kg"]})]})]})},d))})})}),p.jsx("div",{id:"fruits",children:p.jsx("div",{className:"container",children:p.jsx("div",{className:"row",children:n.map((c,d)=>p.jsx("div",{className:"col-md-3 mb-3 col-6",children:p.jsxs("div",{className:"card",children:[p.jsx("img",{src:c.imageurl,className:"card-img-top",alt:c.name}),p.jsxs("div",{className:"card-body",children:[p.jsx("h5",{className:"card-title",children:c.name}),p.jsxs("p",{className:"card-text",style:{color:"red"},children:[" $",c.price]}),c.dozen&&p.jsxs("p",{className:"card-text",children:[p.jsx("y",{children:"Dozen: "})," ",c.dozen]}),c.quantity&&p.jsxs("p",{className:"card-text",children:[p.jsx("y",{children:"Quantity: "})," ",c.quantity," Kg"]})]})]})},d))})})}),p.jsx("div",{id:"others",children:p.jsx("div",{className:"container",children:p.jsx("div",{className:"row",children:i.map((c,d)=>p.jsx("div",{className:"col-md-3 mb-3 col-6",children:p.jsxs("div",{className:"card",children:[p.jsx("img",{src:c.imageurl,className:"card-img-top",alt:c.name}),p.jsxs("div",{className:"card-body",children:[p.jsx("h5",{className:"card-title",children:c.name}),p.jsxs("p",{className:"card-text",style:{color:"red"},children:[" $",c.price]}),c.size&&p.jsxs("p",{className:"card-text",children:[p.jsx("y",{children:"Size: "})," ",c.size]})]})]})},d))})})})]})]})})};var r7={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function GI(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return r7[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function tw(t){var e=GI(t);return"".concat(e.value).concat(e.unit)}var i7=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),r},Vr=function(){return Vr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Vr.apply(this,arguments)},s7=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},nw=i7("MoonLoader","100% {transform: rotate(360deg)}","moon");function bo(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,a=t.cssOverride,u=a===void 0?{}:a,c=t.size,d=c===void 0?60:c,h=s7(t,["loading","color","speedMultiplier","cssOverride","size"]),g=GI(d),_=g.value,I=g.unit,R=Math.round(_/7),P=Vr({display:"inherit",position:"relative",width:"".concat("".concat(_+R*2).concat(I)),height:"".concat("".concat(_+R*2).concat(I)),animation:"".concat(nw," ").concat(.6/o,"s 0s infinite linear"),animationFillMode:"forwards"},u),E=function(C){return{width:tw(C),height:tw(C),borderRadius:"100%"}},y=Vr(Vr({},E(R)),{backgroundColor:"".concat(i),opacity:"0.8",position:"absolute",top:"".concat("".concat(_/2-R/2).concat(I)),animation:"".concat(nw," ").concat(.6/o,"s 0s infinite linear"),animationFillMode:"forwards"}),w=Vr(Vr({},E(_)),{border:"".concat(R,"px solid ").concat(i),opacity:"0.1",boxSizing:"content-box",position:"absolute"});return n?M.createElement("span",Vr({style:P},h),M.createElement("span",{style:y}),M.createElement("span",{style:w})):null}function o7(t){return Se({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"},child:[]}]})(t)}function a7(t){return Se({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M448 0C200.974 0 0 200.974 0 448c0 192.526 122.082 357.042 292.882 420.282-4.919-43.857-4.147-115.682 3.97-150.457 7.602-32.666 49.11-208.167 49.11-208.167S333.43 484.563 333.43 447.5c0-58.244 33.744-101.7 75.767-101.7 35.742 0 52.977 26.834 52.977 58.984 0 35.951-22.857 89.652-34.696 139.422-9.873 41.702 20.907 75.703 62.012 75.703 74.431 0 131.644-78.49 131.644-191.77 0-100.266-72.03-170.38-174.906-170.38-119.144 0-189.081 89.377-189.081 181.752 0 35.983 13.852 74.575 31.167 95.579 3.414 4.155 3.914 7.78 2.9 12-3.174 13.223-10.228 41.669-11.63 47.499-1.82 7.683-6.073 9.278-13.998 5.589-52.314-24.354-85.012-100.813-85.012-162.246 0-132.093 95.965-253.428 276.718-253.428 145.286 0 258.18 103.504 258.18 241.88 0 144.334-91.02 260.482-217.316 260.482-42.441 0-82.323-22.05-95.965-48.096 0 0-21.003 79.956-26.11 99.558-8.813 33.9-46.539 104.13-65.477 136.03A446.164 446.164 0 0 0 448 896c247.035 0 448-200.965 448-448C896 200.974 695.035 0 448 0",transform:"translate(64 64)"},child:[]}]})(t)}function l7(t){return Se({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"},child:[]}]})(t)}function u7(t){return Se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{cx:"176",cy:"416",r:"32"},child:[]},{tag:"circle",attr:{cx:"400",cy:"416",r:"32"},child:[]},{tag:"path",attr:{d:"M167.78 304h261.34l38.4-192H133.89l-8.47-48H32v32h66.58l48 272H432v-32H173.42l-5.64-32z"},child:[]}]})(t)}function c7(t){return Se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M349.13 136.86c-40.32 0-57.36 19.24-85.44 19.24-28.79 0-50.75-19.1-85.69-19.1-34.2 0-70.67 20.88-93.83 56.45-32.52 50.16-27 144.63 25.67 225.11 18.84 28.81 44 61.12 77 61.47h.6c28.68 0 37.2-18.78 76.67-19h.6c38.88 0 46.68 18.89 75.24 18.89h.6c33-.35 59.51-36.15 78.35-64.85 13.56-20.64 18.6-31 29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48z"},child:[]},{tag:"path",attr:{d:"M340.25 32c-24 1.63-52 16.91-68.4 36.86-14.88 18.08-27.12 44.9-22.32 70.91h1.92c25.56 0 51.72-15.39 67-35.11 14.72-18.77 25.88-45.37 21.8-72.66z"},child:[]}]})(t)}function d7(t){return Se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0 0 48 59.49zM345.8 174 89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z"},child:[]}]})(t)}function h7(t){return Se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M336 176 225.2 304 176 255.8"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z"},child:[]}]})(t)}function f7(t){return Se({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 6 C 3.355 6 2 7.355 2 9 L 2 23 C 2 24.645 3.355 26 5 26 L 27 26 C 28.645 26 30 24.645 30 23 L 30 9 C 30 7.355 28.645 6 27 6 L 5 6 z M 5 8 L 27 8 C 27.566 8 28 8.434 28 9 L 28 23 C 28 23.566 27.566 24 27 24 L 5 24 C 4.434 24 4 23.566 4 23 L 4 9 C 4 8.434 4.434 8 5 8 z M 11.523438 10 L 11.382812 10.023438 C 10.942813 10.078437 10.516109 10.243719 10.162109 10.511719 C 10.083109 10.558719 10.014547 10.622547 9.9355469 10.685547 C 9.9275469 10.669547 9.9199219 10.654672 9.9199219 10.638672 C 9.9039219 10.551672 9.8958594 10.457094 9.8808594 10.371094 C 9.8568594 10.229094 9.7787187 10.158203 9.6367188 10.158203 L 9.265625 10.158203 C 9.038625 10.156203 9 10.204781 9 10.425781 L 9 17.25 C 9.008 17.352 9.07025 17.406062 9.15625 17.414062 L 9.8417969 17.414062 C 9.9357969 17.414062 9.9900469 17.352 9.9980469 17.25 C 10.006047 17.219 10.005859 17.18725 10.005859 17.15625 L 10.005859 14.828125 C 10.036859 14.859125 10.060172 14.876578 10.076172 14.892578 C 10.650172 15.372578 11.311156 15.528719 12.035156 15.386719 C 12.696156 15.252719 13.152359 14.852672 13.443359 14.263672 C 13.671359 13.815672 13.765437 13.334844 13.773438 12.839844 C 13.789438 12.295844 13.741672 11.753187 13.513672 11.242188 C 13.246672 10.613188 12.789469 10.195687 12.105469 10.054688 C 12.003469 10.030688 11.894016 10.023813 11.791016 10.007812 C 11.697016 9.9998125 11.610438 10 11.523438 10 z M 16.525391 10 C 16.494391 10.008 16.462641 10.015625 16.431641 10.015625 C 16.116641 10.031625 15.810906 10.071391 15.503906 10.150391 C 15.306906 10.197391 15.118687 10.267078 14.929688 10.330078 C 14.811687 10.369078 14.755859 10.456031 14.755859 10.582031 C 14.763859 10.684031 14.755859 10.794484 14.755859 10.896484 C 14.763859 11.053484 14.827562 11.094688 14.976562 11.054688 C 15.228563 10.991687 15.478469 10.920047 15.730469 10.873047 C 16.123469 10.802047 16.524781 10.771172 16.925781 10.826172 C 17.137781 10.865172 17.33475 10.920562 17.46875 11.101562 C 17.58675 11.250562 17.634578 11.439906 17.642578 11.628906 C 17.650578 11.895906 17.650391 12.162687 17.650391 12.429688 C 17.650391 12.445688 17.650578 12.46075 17.642578 12.46875 L 17.603516 12.46875 C 17.265516 12.38275 16.918266 12.3355 16.572266 12.3125 C 16.210266 12.2965 15.849906 12.3115 15.503906 12.4375 C 15.086906 12.5795 14.748734 12.831234 14.552734 13.240234 C 14.403734 13.554234 14.380734 13.884656 14.427734 14.222656 C 14.498734 14.678656 14.718141 15.024141 15.119141 15.244141 C 15.504141 15.456141 15.912891 15.480969 16.337891 15.417969 C 16.825891 15.346969 17.257766 15.143125 17.634766 14.828125 C 17.650766 14.812125 17.665641 14.804063 17.681641 14.789062 C 17.705641 14.915062 17.720141 15.032578 17.744141 15.142578 C 17.760141 15.244578 17.823969 15.308406 17.917969 15.316406 L 18.445312 15.316406 C 18.524313 15.316406 18.59375 15.244203 18.59375 15.158203 C 18.60175 15.134203 18.601562 15.104266 18.601562 15.072266 L 18.601562 11.658203 C 18.599563 11.524203 18.591359 11.384 18.568359 11.25 C 18.505359 10.833 18.332078 10.487578 17.955078 10.267578 C 17.743078 10.141578 17.507859 10.078063 17.255859 10.039062 C 17.137859 10.023062 17.028156 10.015 16.910156 10 L 16.525391 10 z M 23.240234 10 C 23.130234 9.992 23.027281 10.062062 22.988281 10.164062 C 22.972281 10.212062 22.957406 10.251828 22.941406 10.298828 L 21.816406 13.515625 C 21.737406 13.743625 21.651266 13.978469 21.572266 14.230469 C 21.557266 14.190469 21.550969 14.176344 21.542969 14.152344 C 21.126969 13.004344 20.717781 11.855031 20.300781 10.707031 C 20.238781 10.519031 20.166703 10.339203 20.095703 10.158203 C 20.064703 10.072203 19.994578 10.009766 19.892578 10.009766 C 19.648578 10.001766 19.404344 10.001953 19.152344 10.001953 C 19.074344 10.001953 19.034781 10.071391 19.050781 10.150391 C 19.066781 10.213391 19.089281 10.284656 19.113281 10.347656 C 19.742281 11.903656 20.380578 13.460391 21.017578 15.025391 C 21.072578 15.158391 21.080578 15.268344 21.017578 15.402344 C 20.915578 15.638344 20.82875 15.881187 20.71875 16.117188 C 20.62375 16.329187 20.466469 16.487781 20.230469 16.550781 C 20.073469 16.589781 19.899375 16.604078 19.734375 16.580078 C 19.655375 16.573078 19.577047 16.558781 19.498047 16.550781 C 19.388047 16.542781 19.334172 16.589031 19.326172 16.707031 L 19.326172 17.021484 C 19.334172 17.202484 19.389312 17.2815 19.570312 17.3125 C 19.743312 17.3445 19.924281 17.368953 20.113281 17.376953 C 20.663281 17.384953 21.095906 17.163594 21.378906 16.683594 C 21.496906 16.494594 21.591734 16.29775 21.677734 16.09375 C 22.439734 14.16775 23.194219 12.248453 23.949219 10.314453 C 23.972219 10.259453 23.988094 10.205578 23.996094 10.142578 C 24.012094 10.048578 23.965953 10.001 23.876953 10 L 23.240234 10 z M 11.517578 10.818359 C 11.997578 10.857359 12.38975 11.092391 12.59375 11.650391 C 12.71975 11.996391 12.751953 12.351891 12.751953 12.712891 C 12.751953 13.051891 12.727 13.372312 12.625 13.695312 C 12.405 14.379312 11.902812 14.646234 11.257812 14.615234 C 10.801813 14.591234 10.416688 14.418969 10.054688 14.167969 C 10.015688 14.143969 9.9900469 14.105406 9.9980469 14.066406 L 9.9980469 11.353516 C 9.9900469 11.306516 10.015687 11.266187 10.054688 11.242188 C 10.494687 10.935187 10.982578 10.779359 11.517578 10.818359 z M 16.378906 12.998047 C 16.513656 12.986297 16.649703 12.988406 16.783203 13.003906 C 17.050203 13.027906 17.318937 13.074281 17.585938 13.113281 C 17.640937 13.121281 17.65625 13.145359 17.65625 13.193359 C 17.64925 13.350359 17.65625 13.49925 17.65625 13.65625 C 17.65625 13.81325 17.648437 13.954328 17.648438 14.111328 C 17.656437 14.150328 17.632563 14.182078 17.601562 14.205078 C 17.239563 14.464078 16.846437 14.637547 16.398438 14.685547 C 16.217437 14.701547 16.036281 14.701859 15.863281 14.630859 C 15.666281 14.559859 15.517891 14.395219 15.462891 14.199219 C 15.399891 13.995219 15.398125 13.782125 15.453125 13.578125 C 15.539125 13.311125 15.728469 13.160219 15.980469 13.074219 C 16.109969 13.034719 16.244156 13.009797 16.378906 12.998047 z M 24.53125 17.498047 C 23.83125 17.507797 23.003953 17.663516 22.376953 18.103516 C 22.182953 18.237516 22.218594 18.425391 22.433594 18.400391 C 23.138594 18.316391 24.707281 18.125375 24.988281 18.484375 C 25.269281 18.843375 24.676063 20.321422 24.414062 20.982422 C 24.332062 21.179422 24.504547 21.261328 24.685547 21.111328 C 25.858547 20.128328 26.163828 18.069437 25.923828 17.773438 C 25.803828 17.625438 25.23125 17.488297 24.53125 17.498047 z M 6.1445312 17.890625 C 5.9989375 17.909797 5.9356406 18.088266 6.0878906 18.228516 C 8.6998906 20.584516 12.149469 22 15.980469 22 C 18.713469 22 21.886172 21.141391 24.076172 19.525391 C 24.438172 19.257391 24.130766 18.855625 23.759766 19.015625 C 21.303766 20.057625 18.635984 20.558594 16.208984 20.558594 C 12.611984 20.558594 9.1295 19.572641 6.3125 17.931641 C 6.25075 17.895641 6.1930625 17.884234 6.1445312 17.890625 z"},child:[]}]})(t)}function p7(t){return Se({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 6 C 3.355 6 2 7.355 2 9 L 2 23 C 2 24.645 3.355 26 5 26 L 27 26 C 28.645 26 30 24.645 30 23 L 30 9 C 30 7.355 28.645 6 27 6 L 5 6 z M 5 8 L 27 8 C 27.566 8 28 8.434 28 9 L 28 23 C 28 23.566 27.566 24 27 24 L 5 24 C 4.434 24 4 23.566 4 23 L 4 9 C 4 8.434 4.434 8 5 8 z M 10.998047 11 C 10.533047 11 10.002203 11.265344 9.6582031 11.652344 C 9.3922031 11.973344 9.103125 12.483187 9.203125 12.992188 C 9.680125 13.048187 10.201 12.749328 10.5 12.361328 C 10.832 12.007328 11.020047 11.509 10.998047 11 z M 13 13 L 13 19 L 13.931641 19 L 13.931641 16.945312 L 15.228516 16.945312 C 16.403516 16.945312 17.234375 16.136656 17.234375 14.972656 C 17.234375 13.797656 16.414 13 15.25 13 L 13 13 z M 7.8378906 13.523438 C 6.7988906 13.523438 6 14.433281 6 15.738281 C 6 17.438281 7.1944531 19 7.9394531 19 C 8.3894531 19 8.5543437 18.697266 9.1523438 18.697266 C 9.7033437 18.697266 9.8767031 19 10.345703 19 C 11.236703 19 11.972 17.190078 12 17.080078 C 11.853 17.006078 10.997047 16.602906 10.998047 15.628906 C 10.998047 14.682906 11.779406 14.258234 11.816406 14.240234 C 11.384406 13.597234 10.704266 13.523438 10.447266 13.523438 C 9.8502656 13.523438 9.3279688 13.845703 9.0429688 13.845703 C 8.7489688 13.845703 8.3158906 13.523438 7.8378906 13.523438 z M 13.931641 13.787109 L 15.005859 13.787109 C 15.814859 13.787109 16.28125 14.218656 16.28125 14.972656 C 16.28125 15.726656 15.814859 16.169922 15.005859 16.169922 L 13.931641 16.169922 L 13.931641 13.787109 z M 19.429688 14.53125 C 18.443687 14.53125 17.711453 15.097047 17.689453 15.873047 L 18.53125 15.873047 C 18.59825 15.507047 18.94025 15.263672 19.40625 15.263672 C 19.98225 15.263672 20.294922 15.529578 20.294922 16.017578 L 20.294922 16.349609 L 19.130859 16.427734 C 18.055859 16.494734 17.466797 16.938125 17.466797 17.703125 C 17.466797 18.479125 18.065688 19 18.929688 19 C 19.516687 19 20.061688 18.700375 20.304688 18.234375 L 20.326172 18.234375 L 20.326172 18.955078 L 21.191406 18.955078 L 21.191406 15.962891 C 21.191406 15.097891 20.493688 14.53125 19.429688 14.53125 z M 21.574219 14.587891 L 23.148438 18.966797 L 23.070312 19.232422 C 22.926313 19.676422 22.693203 19.853516 22.283203 19.853516 C 22.206203 19.853516 22.062812 19.841797 22.007812 19.841797 L 22.007812 20.5625 C 22.063813 20.5735 22.294328 20.583984 22.361328 20.583984 C 23.270328 20.583984 23.703078 20.2295 24.080078 19.1875 L 25.708984 14.587891 L 24.765625 14.587891 L 23.669922 18.134766 L 23.646484 18.134766 L 22.550781 14.587891 L 21.574219 14.587891 z M 20.294922 16.980469 L 20.294922 17.314453 L 20.292969 17.314453 C 20.292969 17.879453 19.816547 18.277344 19.185547 18.277344 C 18.686547 18.277344 18.376953 18.045688 18.376953 17.679688 C 18.376953 17.302688 18.675672 17.079875 19.263672 17.046875 L 20.294922 16.980469 z"},child:[]}]})(t)}function m7(t){return Se({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 6 C 3.355469 6 2 7.355469 2 9 L 2 23 C 2 24.644531 3.355469 26 5 26 L 27 26 C 28.644531 26 30 24.644531 30 23 L 30 9 C 30 7.355469 28.644531 6 27 6 Z M 5 8 L 27 8 C 27.566406 8 28 8.433594 28 9 L 28 23 C 28 23.566406 27.566406 24 27 24 L 5 24 C 4.433594 24 4 23.566406 4 23 L 4 9 C 4 8.433594 4.433594 8 5 8 Z M 12 9 C 8.144531 9 5 12.144531 5 16 C 5 19.855469 8.144531 23 12 23 C 13.484375 23 14.863281 22.546875 16 21.75 C 17.132813 22.542969 18.511719 23 20 23 C 23.855469 23 27 19.855469 27 16 C 27 12.144531 23.855469 9 20 9 C 18.511719 9 17.132813 9.457031 16 10.25 C 14.863281 9.453125 13.484375 9 12 9 Z M 12 11 C 13.28125 11 14.429688 11.496094 15.3125 12.28125 C 14.902344 12.792969 14.566406 13.371094 14.34375 14 L 16.5625 14 C 16.703125 14.320313 16.835938 14.652344 16.90625 15 L 14.09375 15 C 14.039063 15.324219 14 15.65625 14 16 C 14 16.34375 14.039063 16.675781 14.09375 17 L 16.90625 17 C 16.835938 17.347656 16.703125 17.679688 16.5625 18 L 14.34375 18 C 14.566406 18.628906 14.902344 19.207031 15.3125 19.71875 C 14.429688 20.503906 13.28125 21 12 21 C 9.226563 21 7 18.773438 7 16 C 7 13.226563 9.226563 11 12 11 Z M 20 11 C 22.773438 11 25 13.226563 25 16 C 25 18.773438 22.773438 21 20 21 C 19.085938 21 18.238281 20.742188 17.5 20.3125 C 18.441406 19.121094 19 17.628906 19 16 C 19 14.371094 18.441406 12.878906 17.5 11.6875 C 18.238281 11.257813 19.085938 11 20 11 Z"},child:[]}]})(t)}function g7(t){return Se({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 6 C 3.355469 6 2 7.355469 2 9 L 2 23 C 2 24.644531 3.355469 26 5 26 L 27 26 C 28.644531 26 30 24.644531 30 23 L 30 9 C 30 7.355469 28.644531 6 27 6 Z M 5 8 L 27 8 C 27.566406 8 28 8.433594 28 9 L 28 23 C 28 23.566406 27.566406 24 27 24 L 5 24 C 4.433594 24 4 23.566406 4 23 L 4 9 C 4 8.433594 4.433594 8 5 8 Z M 19.40625 12.375 C 17.480469 12.375 16.46875 13.324219 16.46875 14.53125 C 16.46875 16.710938 19.03125 16.410156 19.03125 17.53125 C 19.03125 17.722656 18.871094 18.15625 17.8125 18.15625 C 16.753906 18.15625 16.0625 17.78125 16.0625 17.78125 L 15.75 19.21875 C 15.75 19.21875 16.40625 19.625 17.71875 19.625 C 19.03125 19.625 20.875 18.617188 20.875 17.15625 C 20.875 15.398438 18.3125 15.28125 18.3125 14.5 C 18.3125 14.101563 18.652344 13.78125 19.5625 13.78125 C 20.15625 13.78125 20.8125 14.25 20.8125 14.25 L 21.125 12.71875 C 21.125 12.71875 20.253906 12.375 19.40625 12.375 Z M 11.1875 12.5 L 9.5 17.4375 C 9.5 17.4375 9.414063 17.011719 9.375 16.75 C 8.421875 14.609375 6.875 13.8125 6.875 13.8125 L 8.34375 19.40625 L 10.34375 19.40625 L 13.15625 12.5 Z M 13.875 12.5 L 12.78125 19.40625 L 14.625 19.40625 L 15.71875 12.5 Z M 23.8125 12.5 L 20.8125 19.40625 L 22.625 19.40625 L 23 18.4375 L 25.3125 18.4375 L 25.5 19.40625 L 27.15625 19.40625 L 25.75 12.5 Z M 4.84375 12.53125 C 4.84375 12.53125 8.441406 13.632813 9.28125 16.34375 L 8.65625 13.21875 C 8.65625 13.21875 8.382813 12.53125 7.65625 12.53125 Z M 24.5 14.5 L 25.03125 17.09375 L 23.53125 17.09375 Z"},child:[]}]})(t)}const y7=be.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-family: "poppins", sans-serif; 
    margin: 0rem 0rem 0rem 0rem;
    background-color: whitesmoke;
    padding: 3rem 0rem 1rem 0rem;
    width: 100%;
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
`,pa=()=>p.jsx(p.Fragment,{children:p.jsxs(y7,{children:[p.jsxs("div",{className:"links",children:[p.jsx("a",{href:"#about",children:"About us"}),p.jsx("a",{href:"#contact",children:"Contact us"}),p.jsx("a",{href:"#shipping",children:"Shipping Policy"}),p.jsx("a",{href:"#refund",children:"Refund Policy"}),p.jsx("a",{href:"#privacy",children:"Privacy Policy"}),p.jsx("a",{href:"#deliverey",children:"Deliverey Info"}),p.jsx("a",{href:"#terms",children:"Terms & Conditions"})]}),p.jsxs("div",{className:"info",children:[p.jsx("h4",{children:"Estore"}),p.jsxs("p",{className:"desc",children:["We're at the Estore, an innovative team of food engineers. Our unique ",p.jsx("br",{})," model minimizes fresh food handling by up to 85%, sourcing locally and ",p.jsx("br",{})," dispatching within hours through cold chain logistics in eco-friendly ",p.jsx("br",{})," containers."]}),p.jsx("p",{className:"mobile-desc",children:"We're at the Estore, an innovative team of food engineers. Our unique model minimizes fresh food handling by up to 85%, sourcing locally and dispatching within hours through cold chain logistics in eco-friendly containers."}),p.jsxs("div",{children:[p.jsxs("a",{href:"https://www.facebook.com",children:[" ",p.jsx(WO,{})," "]}),p.jsxs("a",{href:"https://www.instagram.com",children:[" ",p.jsx(o7,{})," "]}),p.jsxs("a",{href:"https://www.pinterest.com",children:[" ",p.jsx(a7,{})," "]}),p.jsxs("a",{href:"https://www.twitter.com",children:[" ",p.jsx(l7,{})," "]})]})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"store",children:[p.jsx("h5",{children:"Download Our App"}),p.jsxs("a",{href:"https://www.googleplaystore.com",children:[" ",p.jsx(d7,{color:"white",size:"1.1rem",className:"store-icon"})," Play Store"]}),p.jsxs("a",{href:"https://www.applestore.com",children:[" ",p.jsx(c7,{color:"white",size:"1.1rem",className:"store-icon"})," App Store"]})]}),p.jsxs("div",{className:"payment",children:[p.jsx("h5",{children:"Payment Gateway"}),p.jsxs("div",{className:"payment-icons",children:[p.jsx(m7,{size:"2.5rem"}),p.jsx(p7,{size:"2.5rem"}),p.jsx(g7,{size:"2.5rem"}),p.jsx(f7,{size:"2.5rem"})]})]})]})]})}),QI=({children:t})=>p.jsxs(p.Fragment,{children:[p.jsx(aa,{}),p.jsx("div",{className:"content",children:t}),p.jsx(pa,{})]}),YI=M.createContext();var M1={},j1={},Ce={},hh={};(function(t){function e(o,a,u){var c=a.slidesToShow,d=a.currentSlide;return u.length>2*c?o+2*c:d>=u.length?u.length+o:o}function n(o,a){if(a.length>2*o){for(var u={},c=a.length-2*o,d=a.length-c,h=c,g=0;g<d;g++)u[g]=h,h++;var _=a.length+d,I=_+a.slice(0,2*o).length,R=0;for(g=_;g<=I;g++)u[g]=R,R++;var P=_,E=0;for(g=d;g<P;g++)u[g]=E,E++;return u}u={};var y=3*a.length,w=0;for(g=0;g<y;g++)u[g]=w,++w===a.length&&(w=0);return u}function r(o,a){return a.length<o?a:a.length>2*o?a.slice(a.length-2*o,a.length).concat(a,a.slice(0,2*o)):a.concat(a,a)}function i(o,a){return a.length>2*o?2*o:a.length}function s(o,a,u){var c,d=o.currentSlide,h=o.slidesToShow,g=o.itemWidth,_=o.totalItems,I=0,R=0,P=d===0,E=a.length-(a.length-2*h);return a.length<h?(R=I=0,P=c=!1):a.length>2*h?((c=d>=E+a.length)&&(R=-g*(I=d-a.length)),P&&(R=-g*(I=E+(a.length-2*h)))):((c=d>=2*a.length)&&(R=-g*(I=d-a.length)),P&&(R=u.showDots?-g*(I=a.length):-g*(I=_/3))),{isReachingTheEnd:c,isReachingTheStart:P,nextSlide:I,nextPosition:R}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOriginalCounterPart=e,t.getOriginalIndexLookupTableByClones=n,t.getClones=r,t.getInitialSlideInInfiniteMode=i,t.checkClonesPosition=s})(hh);var Ys={};Object.defineProperty(Ys,"__esModule",{value:!0});function v7(t,e,n,r){var i=0,s=r||n;return e&&s&&(i=t[s].partialVisibilityGutter||t[s].paritialVisibilityGutter),i}function _7(t,e){var n;return e[t]&&(n=(100/e[t].items).toFixed(1)),n}function w7(t,e,n){return Math.round(n/(e+(t.centerMode?1:0)))}Ys.getPartialVisibilityGutter=v7,Ys.getWidthFromDeviceType=_7,Ys.getItemClientSideWidth=w7;var We={};Object.defineProperty(We,"__esModule",{value:!0});var xm=Ys;function V1(t){var e=t.slidesToShow;return t.totalItems<e}function E7(t,e){var n,r=t.domLoaded,i=t.slidesToShow,s=t.containerWidth,o=t.itemWidth,a=e.deviceType,u=e.responsive,c=e.ssr,d=e.partialVisbile,h=e.partialVisible,g=!!(r&&i&&s&&o);c&&a&&!g&&(n=xm.getWidthFromDeviceType(a,u));var _=!!(c&&a&&!g&&n);return{shouldRenderOnSSR:_,flexBisis:n,domFullyLoaded:g,partialVisibilityGutter:xm.getPartialVisibilityGutter(u,d||h,a,t.deviceType),shouldRenderAtAll:_||g}}function S7(t,e){var n=e.currentSlide,r=e.slidesToShow;return n<=t&&t<n+r}function XI(t,e,n){var r=n||t.transform;return!e.infinite&&t.currentSlide===0||V1(t)?r:r+t.itemWidth/2}function T7(t){return!(0<t.currentSlide)}function JI(t){var e=t.currentSlide,n=t.totalItems;return!(e+t.slidesToShow<n)}function ZI(t,e,n,r){e===void 0&&(e=0);var i=t.currentSlide,s=t.slidesToShow,o=JI(t),a=!n.infinite&&o,u=r||t.transform;if(V1(t))return u;var c=u+i*e;return a?c+(t.containerWidth-(t.itemWidth-e)*s):c}function ex(t,e){return t.rtl?-1*e:e}function I7(t,e,n){var r=e.partialVisbile,i=e.partialVisible,s=e.responsive,o=e.deviceType,a=e.centerMode,u=n||t.transform,c=xm.getPartialVisibilityGutter(s,r||i,o,t.deviceType);return ex(e,i||r?ZI(t,c,e,n):a?XI(t,e,n):u)}function x7(t,e){var n=t.domLoaded,r=t.slidesToShow,i=t.containerWidth,s=t.itemWidth,o=e.deviceType,a=e.responsive,u=e.slidesToSlide||1,c=!!(n&&r&&i&&s);return e.ssr&&e.deviceType&&!c&&Object.keys(a).forEach(function(d){var h=a[d].slidesToSlide;o===d&&h&&(u=h)}),c&&Object.keys(a).forEach(function(d){var h=a[d],g=h.breakpoint,_=h.slidesToSlide,I=g.max,R=g.min;_&&window.innerWidth>=R&&window.innerWidth<=I&&(u=_)}),u}We.notEnoughChildren=V1,We.getInitialState=E7,We.getIfSlideIsVisbile=S7,We.getTransformForCenterMode=XI,We.isInLeftEnd=T7,We.isInRightEnd=JI,We.getTransformForPartialVsibile=ZI,We.parsePosition=ex,We.getTransform=I7,We.getSlidesToSlide=x7;var F1={};Object.defineProperty(F1,"__esModule",{value:!0});var C7=function(t,e,n){var r;return function(){var i=arguments;r||(t.apply(this,i),r=!0,typeof n=="function"&&n(!0),setTimeout(function(){r=!1,typeof n=="function"&&n(!1)},e))}};F1.default=C7;var tx={};(function(t){function e(n,r){var i=r.partialVisbile,s=r.partialVisible,o=r.centerMode,a=r.ssr,u=r.responsive;if((i||s)&&o)throw new Error("center mode can not be used at the same time with partialVisible");if(!u)throw a?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(u&&typeof u!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=e})(tx);var z1={};Object.defineProperty(z1,"__esModule",{value:!0});var R7=We;function P7(t,e,n){n===void 0&&(n=0);var r,i,s=t.slidesToShow,o=t.currentSlide,a=t.itemWidth,u=t.totalItems,c=R7.getSlidesToSlide(t,e),d=o+1+n+s+(0<n?0:c);return i=d<=u?-a*(r=o+n+(0<n?0:c)):u<d&&o!==u-s?-a*(r=u-s):r=void 0,{nextSlides:r,nextPosition:i}}z1.populateNextSlides=P7;var U1={};Object.defineProperty(U1,"__esModule",{value:!0});var A7=M,b7=We,k7=We;function N7(t,e,n){n===void 0&&(n=0);var r,i,s=t.currentSlide,o=t.itemWidth,a=t.slidesToShow,u=e.children,c=e.showDots,d=e.infinite,h=b7.getSlidesToSlide(t,e),g=s-n-(0<n?0:h),_=(A7.Children.toArray(u).length-a)%h;return i=0<=g?(r=g,c&&!d&&0<_&&k7.isInRightEnd(t)&&(r=s-_),-o*r):r=g<0&&s!==0?0:void 0,{nextSlides:r,nextPosition:i}}U1.populatePreviousSlides=N7;var nx={};(function(t){function e(n,r,i,s,o,a){var u,c,d=n.itemWidth,h=n.slidesToShow,g=n.totalItems,_=n.currentSlide,I=r.infinite,R=!1,P=Math.round((i-s)/d),E=Math.round((s-i)/d),y=i<o;if(o<i&&P<=h){u="right";var w=Math.abs(-d*(g-h)),C=a-(s-o),N=_===g-h;(Math.abs(C)<=w||N&&I)&&(c=C,R=!0)}return y&&E<=h&&(u="left",((C=a+(o-s))<=0||_===0&&I)&&(R=!0,c=C)),{direction:u,nextPosition:c,canContinue:R}}Object.defineProperty(t,"__esModule",{value:!0}),t.populateSlidesOnMouseTouchMove=e})(nx);Object.defineProperty(Ce,"__esModule",{value:!0});var Ru=hh;Ce.getOriginalCounterPart=Ru.getOriginalCounterPart,Ce.getClones=Ru.getClones,Ce.checkClonesPosition=Ru.checkClonesPosition,Ce.getInitialSlideInInfiniteMode=Ru.getInitialSlideInInfiniteMode;var Mf=Ys;Ce.getWidthFromDeviceType=Mf.getWidthFromDeviceType,Ce.getPartialVisibilityGutter=Mf.getPartialVisibilityGutter,Ce.getItemClientSideWidth=Mf.getItemClientSideWidth;var Or=We;Ce.getInitialState=Or.getInitialState,Ce.getIfSlideIsVisbile=Or.getIfSlideIsVisbile,Ce.getTransformForCenterMode=Or.getTransformForCenterMode,Ce.getTransformForPartialVsibile=Or.getTransformForPartialVsibile,Ce.isInLeftEnd=Or.isInLeftEnd,Ce.isInRightEnd=Or.isInRightEnd,Ce.notEnoughChildren=Or.notEnoughChildren,Ce.getSlidesToSlide=Or.getSlidesToSlide;var O7=F1;Ce.throttle=O7.default;var D7=tx;Ce.throwError=D7.default;var L7=z1;Ce.populateNextSlides=L7.populateNextSlides;var M7=U1;Ce.populatePreviousSlides=M7.populatePreviousSlides;var j7=nx;Ce.populateSlidesOnMouseTouchMove=j7.populateSlidesOnMouseTouchMove;var fh={},V7=Xs&&Xs.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)i.hasOwnProperty(s)&&(r[s]=i[s])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(fh,"__esModule",{value:!0});var F7=M;function z7(t){return"clientY"in t}fh.isMouseMoveEvent=z7;var U7=function(t){function e(){return t!==null&&t.apply(this,arguments)||this}return V7(e,t),e}(F7.Component);fh.default=U7;var $1={},B1={};Object.defineProperty(B1,"__esModule",{value:!0});var $7=hh,B7=We;function W7(t,e,n,r){var i={},s=B7.getSlidesToSlide(e,n);return Array(t).fill(0).forEach(function(o,a){var u=$7.getOriginalCounterPart(a,e,r);if(a===0)i[0]=u;else{var c=i[a-1]+s;i[a]=c}}),i}B1.getLookupTableForNextSlides=W7;Object.defineProperty($1,"__esModule",{value:!0});var ta=M,H7=hh,q7=B1,rw=We,K7=function(t){var e=t.props,n=t.state,r=t.goToSlide,i=t.getState,s=e.showDots,o=e.customDot,a=e.dotListClass,u=e.infinite,c=e.children;if(!s||rw.notEnoughChildren(n))return null;var d,h=n.currentSlide,g=n.slidesToShow,_=rw.getSlidesToSlide(n,e),I=ta.Children.toArray(c);d=u?Math.ceil(I.length/_):Math.ceil((I.length-g)/_)+1;var R=q7.getLookupTableForNextSlides(d,n,e,I),P=H7.getOriginalIndexLookupTableByClones(g,I),E=P[h];return ta.createElement("ul",{className:"react-multi-carousel-dot-list "+a},Array(d).fill(0).map(function(y,w){var C,N;if(u){N=R[w];var D=P[N];C=E===D||D<=E&&E<D+_}else{var T=I.length-g,v=w*_;C=(N=T<v?T:v)===h||N<h&&h<N+_&&h<I.length-g}return o?ta.cloneElement(o,{index:w,active:C,key:w,onClick:function(){return r(N)},carouselState:i()}):ta.createElement("li",{"data-index":w,key:w,className:"react-multi-carousel-dot "+(C?"react-multi-carousel-dot--active":"")},ta.createElement("button",{"aria-label":"Go to slide "+(w+1),onClick:function(){return r(N)}}))}))};$1.default=K7;var ph={};Object.defineProperty(ph,"__esModule",{value:!0});var ud=M,G7=function(t){var e=t.customLeftArrow,n=t.getState,r=t.previous,i=t.disabled,s=t.rtl;if(e)return ud.cloneElement(e,{onClick:function(){return r()},carouselState:n(),disabled:i,rtl:s});var o=s?"rtl":"";return ud.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+o,onClick:function(){return r()},type:"button",disabled:i})};ph.LeftArrow=G7;var Q7=function(t){var e=t.customRightArrow,n=t.getState,r=t.next,i=t.disabled,s=t.rtl;if(e)return ud.cloneElement(e,{onClick:function(){return r()},carouselState:n(),disabled:i,rtl:s});var o=s?"rtl":"";return ud.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+o,onClick:function(){return r()},type:"button",disabled:i})};ph.RightArrow=Q7;var W1={};Object.defineProperty(W1,"__esModule",{value:!0});var Pu=M,jf=Ce,Y7=function(t){var e=t.props,n=t.state,r=t.goToSlide,i=t.clones,s=t.notEnoughChildren,o=n.itemWidth,a=e.children,u=e.infinite,c=e.itemClass,d=e.itemAriaLabel,h=e.partialVisbile,g=e.partialVisible,_=jf.getInitialState(n,e),I=_.flexBisis,R=_.shouldRenderOnSSR,P=_.domFullyLoaded,E=_.partialVisibilityGutter;return _.shouldRenderAtAll?(h&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),Pu.createElement(Pu.Fragment,null,(u?i:Pu.Children.toArray(a)).map(function(y,w){return Pu.createElement("li",{key:w,"data-index":w,onClick:function(){e.focusOnSelect&&r(w)},"aria-hidden":jf.getIfSlideIsVisbile(w,n)?"false":"true","aria-label":d||(y.props.ariaLabel?y.props.ariaLabel:null),style:{flex:R?"1 0 "+I+"%":"auto",position:"relative",width:P?((h||g)&&E&&!s?o-E:o)+"px":"auto"},className:"react-multi-carousel-item "+(jf.getIfSlideIsVisbile(w,n)?"react-multi-carousel-item--active":"")+" "+c},y)}))):null};W1.default=Y7;var X7=Xs&&Xs.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)i.hasOwnProperty(s)&&(r[s]=i[s])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(j1,"__esModule",{value:!0});var Ye=M,De=Ce,Ai=fh,J7=$1,iw=ph,Z7=W1,Au=We,kn=400,sw="transform 400ms ease-in-out",eD=function(t){function e(n){var r=t.call(this,n)||this;return r.containerRef=Ye.createRef(),r.listRef=Ye.createRef(),r.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:Ye.Children.count(n.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},r.onResize=r.onResize.bind(r),r.handleDown=r.handleDown.bind(r),r.handleMove=r.handleMove.bind(r),r.handleOut=r.handleOut.bind(r),r.onKeyUp=r.onKeyUp.bind(r),r.handleEnter=r.handleEnter.bind(r),r.setIsInThrottle=r.setIsInThrottle.bind(r),r.next=De.throttle(r.next.bind(r),n.transitionDuration||kn,r.setIsInThrottle),r.previous=De.throttle(r.previous.bind(r),n.transitionDuration||kn,r.setIsInThrottle),r.goToSlide=De.throttle(r.goToSlide.bind(r),n.transitionDuration||kn,r.setIsInThrottle),r.onMove=!1,r.initialX=0,r.lastX=0,r.isAnimationAllowed=!1,r.direction="",r.initialY=0,r.isInThrottle=!1,r.transformPlaceHolder=0,r}return X7(e,t),e.prototype.resetTotalItems=function(){var n=this,r=Ye.Children.count(this.props.children),i=De.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,r));this.setState({totalItems:r,currentSlide:i},function(){n.setContainerAndItemWidth(n.state.slidesToShow,!0)})},e.prototype.setIsInThrottle=function(n){n===void 0&&(n=!1),this.isInThrottle=n},e.prototype.setTransformDirectly=function(n,r){var i=this.props.additionalTransfrom;this.transformPlaceHolder=n;var s=Au.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(r),this.listRef.current.style.transform="translate3d("+(s+i)+"px,0,0)")},e.prototype.setAnimationDirectly=function(n){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=n?this.props.customTransition||sw:"none")},e.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.setClones=function(n,r,i,s){var o=this;s===void 0&&(s=!1),this.isAnimationAllowed=!1;var a=Ye.Children.toArray(this.props.children),u=De.getInitialSlideInInfiniteMode(n||this.state.slidesToShow,a),c=De.getClones(this.state.slidesToShow,a),d=a.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:c.length,currentSlide:i&&!s?d:u},function(){o.correctItemsPosition(r||o.state.itemWidth)})},e.prototype.setItemsToShow=function(n,r){var i=this,s=this.props.responsive;Object.keys(s).forEach(function(o){var a=s[o],u=a.breakpoint,c=a.items,d=u.max,h=u.min,g=[window.innerWidth];window.screen&&window.screen.width&&g.push(window.screen.width);var _=Math.min.apply(Math,g);h<=_&&_<=d&&(i.setState({slidesToShow:c,deviceType:o}),i.setContainerAndItemWidth(c,n,r))})},e.prototype.setContainerAndItemWidth=function(n,r,i){var s=this;if(this.containerRef&&this.containerRef.current){var o=this.containerRef.current.offsetWidth,a=De.getItemClientSideWidth(this.props,n,o);this.setState({containerWidth:o,itemWidth:a},function(){s.props.infinite&&s.setClones(n,a,r,i)}),r&&this.correctItemsPosition(a)}},e.prototype.correctItemsPosition=function(n,r,i){r&&(this.isAnimationAllowed=!0),!r&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var s=this.state.totalItems<this.state.slidesToShow?0:-n*this.state.currentSlide;i&&this.setTransformDirectly(s,!0),this.setState({transform:s})},e.prototype.onResize=function(n){var r;r=!!this.props.infinite&&(typeof n!="boolean"||!n),this.setItemsToShow(r)},e.prototype.componentDidUpdate=function(n,r){var i=this,s=n.keyBoardControl,o=n.autoPlay,a=n.children,u=r.containerWidth,c=r.domLoaded,d=r.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==u&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){i.setItemsToShow(!0)},this.props.transitionDuration||kn)),s&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!s&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),o&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),o||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),a.length!==this.props.children.length?e.clonesTimeout=setTimeout(function(){i.props.infinite?i.setClones(i.state.slidesToShow,i.state.itemWidth,!0,!0):i.resetTotalItems()},this.props.transitionDuration||kn):this.props.infinite&&this.state.currentSlide!==d&&this.correctClonesPosition({domLoaded:c}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&De.isInRightEnd(this.state)){var h=this.props.transitionDuration||kn;e.isInThrottleTimeout=setTimeout(function(){i.setIsInThrottle(!1),i.resetAutoplayInterval(),i.goToSlide(0,void 0,!!i.props.rewindWithAnimation)},h+this.props.autoPlaySpeed)}},e.prototype.correctClonesPosition=function(n){var r=this,i=n.domLoaded,s=Ye.Children.toArray(this.props.children),o=De.checkClonesPosition(this.state,s,this.props),a=o.isReachingTheEnd,u=o.isReachingTheStart,c=o.nextSlide,d=o.nextPosition;this.state.domLoaded&&i&&(a||u)&&(this.isAnimationAllowed=!1,e.transformTimeout=setTimeout(function(){r.setState({transform:d,currentSlide:c})},this.props.transitionDuration||kn))},e.prototype.next=function(n){var r=this;n===void 0&&(n=0);var i=this.props,s=i.afterChange,o=i.beforeChange;if(!De.notEnoughChildren(this.state)){var a=De.populateNextSlides(this.state,this.props,n),u=a.nextSlides,c=a.nextPosition,d=this.state.currentSlide;u!==void 0&&c!==void 0&&(typeof o=="function"&&o(u,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:c,currentSlide:u},function(){typeof s=="function"&&(e.afterChangeTimeout=setTimeout(function(){s(d,r.getState())},r.props.transitionDuration||kn))}))}},e.prototype.previous=function(n){var r=this;n===void 0&&(n=0);var i=this.props,s=i.afterChange,o=i.beforeChange;if(!De.notEnoughChildren(this.state)){var a=De.populatePreviousSlides(this.state,this.props,n),u=a.nextSlides,c=a.nextPosition;if(u!==void 0&&c!==void 0){var d=this.state.currentSlide;typeof o=="function"&&o(u,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:c,currentSlide:u},function(){typeof s=="function"&&(e.afterChangeTimeout2=setTimeout(function(){s(d,r.getState())},r.props.transitionDuration||kn))})}}},e.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),e.clonesTimeout&&clearTimeout(e.clonesTimeout),e.isInThrottleTimeout&&clearTimeout(e.isInThrottleTimeout),e.transformTimeout&&clearTimeout(e.transformTimeout),e.afterChangeTimeout&&clearTimeout(e.afterChangeTimeout),e.afterChangeTimeout2&&clearTimeout(e.afterChangeTimeout2),e.afterChangeTimeout3&&clearTimeout(e.afterChangeTimeout3)},e.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},e.prototype.getCords=function(n){var r=n.clientX,i=n.clientY;return{clientX:Au.parsePosition(this.props,r),clientY:Au.parsePosition(this.props,i)}},e.prototype.handleDown=function(n){if(!(!Ai.isMouseMoveEvent(n)&&!this.props.swipeable||Ai.isMouseMoveEvent(n)&&!this.props.draggable||this.isInThrottle)){var r=this.getCords(Ai.isMouseMoveEvent(n)?n:n.touches[0]),i=r.clientX,s=r.clientY;this.onMove=!0,this.initialX=i,this.initialY=s,this.lastX=i,this.isAnimationAllowed=!1}},e.prototype.handleMove=function(n){if(!(!Ai.isMouseMoveEvent(n)&&!this.props.swipeable||Ai.isMouseMoveEvent(n)&&!this.props.draggable||De.notEnoughChildren(this.state))){var r=this.getCords(Ai.isMouseMoveEvent(n)?n:n.touches[0]),i=r.clientX,s=r.clientY,o=this.initialX-i,a=this.initialY-s;if(this.onMove){if(!(Math.abs(o)>Math.abs(a)))return;var u=De.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,i,this.transformPlaceHolder),c=u.direction,d=u.nextPosition,h=u.canContinue;c&&(this.direction=c,h&&d!==void 0&&this.setTransformDirectly(d)),this.lastX=i}}},e.prototype.handleOut=function(n){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var r=n.type==="touchend"&&!this.props.swipeable,i=(n.type==="mouseleave"||n.type==="mouseup")&&!this.props.draggable;if(!r&&!i&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var s=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(s)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(s=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(s)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},e.prototype.isInViewport=function(n){var r=n.getBoundingClientRect(),i=r.top,s=i===void 0?0:i,o=r.left,a=o===void 0?0:o,u=r.bottom,c=u===void 0?0:u,d=r.right,h=d===void 0?0:d;return 0<=s&&0<=a&&c<=(window.innerHeight||document.documentElement.clientHeight)&&h<=(window.innerWidth||document.documentElement.clientWidth)},e.prototype.isChildOfCarousel=function(n){return!!(n instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(n)},e.prototype.onKeyUp=function(n){var r=n.target;switch(n.keyCode){case 37:if(this.isChildOfCarousel(r))return this.previous();break;case 39:if(this.isChildOfCarousel(r))return this.next();break;case 9:if(this.isChildOfCarousel(r)&&r instanceof HTMLInputElement&&this.isInViewport(r))return this.next()}},e.prototype.handleEnter=function(n){Ai.isMouseMoveEvent(n)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},e.prototype.goToSlide=function(n,r,i){var s=this;if(i===void 0&&(i=!0),!this.isInThrottle){var o=this.state.itemWidth,a=this.props,u=a.afterChange,c=a.beforeChange,d=this.state.currentSlide;typeof c!="function"||r&&(typeof r!="object"||r.skipBeforeChange)||c(n,this.getState()),this.isAnimationAllowed=i,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:n,transform:-o*n},function(){s.props.infinite&&s.correctClonesPosition({domLoaded:!0}),typeof u!="function"||r&&(typeof r!="object"||r.skipAfterChange)||(e.afterChangeTimeout3=setTimeout(function(){u(d,s.getState())},s.props.transitionDuration||kn))})}},e.prototype.getState=function(){return this.state},e.prototype.renderLeftArrow=function(n){var r=this,i=this.props,s=i.customLeftArrow,o=i.rtl;return Ye.createElement(iw.LeftArrow,{customLeftArrow:s,getState:function(){return r.getState()},previous:this.previous,disabled:n,rtl:o})},e.prototype.renderRightArrow=function(n){var r=this,i=this.props,s=i.customRightArrow,o=i.rtl;return Ye.createElement(iw.RightArrow,{customRightArrow:s,getState:function(){return r.getState()},next:this.next,disabled:n,rtl:o})},e.prototype.renderButtonGroups=function(){var n=this,r=this.props.customButtonGroup;return r?Ye.cloneElement(r,{previous:function(){return n.previous()},next:function(){return n.next()},goToSlide:function(i,s){return n.goToSlide(i,s)},carouselState:this.getState()}):null},e.prototype.renderDotsList=function(){var n=this;return Ye.createElement(J7.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return n.getState()}})},e.prototype.renderCarouselItems=function(){var n=[];if(this.props.infinite){var r=Ye.Children.toArray(this.props.children);n=De.getClones(this.state.slidesToShow,r)}return Ye.createElement(Z7.default,{clones:n,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:De.notEnoughChildren(this.state),props:this.props})},e.prototype.render=function(){var n=this.props,r=n.deviceType,i=n.arrows,s=n.renderArrowsWhenDisabled,o=n.removeArrowOnDeviceType,a=n.infinite,u=n.containerClass,c=n.sliderClass,d=n.customTransition,h=n.additionalTransfrom,g=n.renderDotsOutside,_=n.renderButtonGroupOutside,I=n.className,R=n.rtl,P=De.getInitialState(this.state,this.props),E=P.shouldRenderOnSSR,y=P.shouldRenderAtAll,w=De.isInLeftEnd(this.state),C=De.isInRightEnd(this.state),N=i&&!(o&&(r&&-1<o.indexOf(r)||this.state.deviceType&&-1<o.indexOf(this.state.deviceType)))&&!De.notEnoughChildren(this.state)&&y,D=!a&&w,T=!a&&C,v=Au.getTransform(this.state,this.props);return Ye.createElement(Ye.Fragment,null,Ye.createElement("div",{className:"react-multi-carousel-list "+u+" "+I,dir:R?"rtl":"ltr",ref:this.containerRef},Ye.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+c,style:{transition:this.isAnimationAllowed?d||sw:"none",overflow:E?"hidden":"unset",transform:"translate3d("+(v+h)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),N&&(!D||s)&&this.renderLeftArrow(D),N&&(!T||s)&&this.renderRightArrow(T),y&&!_&&this.renderButtonGroups(),y&&!g&&this.renderDotsList()),y&&g&&this.renderDotsList(),y&&_&&this.renderButtonGroups())},e.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},e}(Ye.Component);j1.default=eD;Object.defineProperty(M1,"__esModule",{value:!0});var tD=j1;M1.default=tD.default;var nD=M1;const rD=Tw(nD),iD=be.div`
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
`,sD={desktop:{breakpoint:{max:3e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}},oD=[{id:1,name:"Joseph Siant",comment:"The quality of Fresh Bite's fruits, vegetables, and dairy products is consistently top-notch. Everything is always fresh, well-packed, and delivered on time. I couldn't ask for better service!",star:"3.5"},{id:2,name:"Mark Tommy",comment:"Fresh Bite has completely changed the way I shop for groceries. The convenience of having fresh produce delivered to my door is unbeatable, and the products are always in perfect condition.",star:"4.5"},{id:3,name:"Alina Sander",comment:"I've been using Fresh Bite for a few months now, and I'm really impressed. The variety of fresh fruits, vegetables, and dairy is fantastic, and I always receive my orders exactly as requested.",star:"4.5"},{id:4,name:"John Anthony",comment:"Fresh Bite makes healthy eating so much easier! The freshness of their products is unmatched, and the ease of online ordering and fast delivery has saved me so much time in my busy schedule.",star:"3.5"}],aD=()=>p.jsx(p.Fragment,{children:p.jsxs(iD,{children:[p.jsx("h1",{children:"Testimonials"}),p.jsx("h7",{children:"See what our clients are saying about us"}),p.jsx(rD,{responsive:sD,showDots:!0,autoPlay:!0,autoPlaySpeed:5e3,infinite:!0,dotListClass:"custom-dot-list",itemClass:"carousel-item-padding-40-px",arrows:!1,pauseOnHover:!1,children:oD.map(t=>p.jsxs("div",{className:"container",children:[p.jsx("p",{className:"card-text",children:t.comment}),p.jsx("h5",{className:"card-title",children:t.name}),p.jsx("div",{className:"stars",children:Array.from({length:t.star},(e,n)=>p.jsx("span",{children:"★"},n))})]},t.id))})]})}),ow=()=>{const[t,e]=M.useState(!0);return M.useContext(YI),M.useEffect(()=>{const n=setTimeout(()=>{e(!1)},1500);return()=>clearTimeout(n)},[]),p.jsx(p.Fragment,{children:t?p.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",p.jsx(bo,{size:60,color:"red"})," "]}):p.jsxs(QI,{children:[p.jsx(zO,{}),p.jsx(KO,{}),p.jsx(JO,{}),p.jsx(n7,{}),p.jsx(aD,{}),p.jsx(e7,{})]})})};function lD(t){return Se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"},child:[]}]})(t)}function Xe(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var uD=typeof Symbol=="function"&&Symbol.observable||"@@observable",aw=uD,Vf=()=>Math.random().toString(36).substring(7).split("").join("."),cD={INIT:`@@redux/INIT${Vf()}`,REPLACE:`@@redux/REPLACE${Vf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Vf()}`},cd=cD;function H1(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function rx(t,e,n){if(typeof t!="function")throw new Error(Xe(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Xe(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Xe(1));return n(rx)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,u=!1;function c(){o===s&&(o=new Map,s.forEach((P,E)=>{o.set(E,P)}))}function d(){if(u)throw new Error(Xe(3));return i}function h(P){if(typeof P!="function")throw new Error(Xe(4));if(u)throw new Error(Xe(5));let E=!0;c();const y=a++;return o.set(y,P),function(){if(E){if(u)throw new Error(Xe(6));E=!1,c(),o.delete(y),s=null}}}function g(P){if(!H1(P))throw new Error(Xe(7));if(typeof P.type>"u")throw new Error(Xe(8));if(typeof P.type!="string")throw new Error(Xe(17));if(u)throw new Error(Xe(9));try{u=!0,i=r(i,P)}finally{u=!1}return(s=o).forEach(y=>{y()}),P}function _(P){if(typeof P!="function")throw new Error(Xe(10));r=P,g({type:cd.REPLACE})}function I(){const P=h;return{subscribe(E){if(typeof E!="object"||E===null)throw new Error(Xe(11));function y(){const C=E;C.next&&C.next(d())}return y(),{unsubscribe:P(y)}},[aw](){return this}}}return g({type:cd.INIT}),{dispatch:g,subscribe:h,getState:d,replaceReducer:_,[aw]:I}}function dD(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:cd.INIT})>"u")throw new Error(Xe(12));if(typeof n(void 0,{type:cd.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Xe(13))})}function hD(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{dD(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let u=!1;const c={};for(let d=0;d<r.length;d++){const h=r[d],g=n[h],_=o[h],I=g(_,a);if(typeof I>"u")throw a&&a.type,new Error(Xe(14));c[h]=I,u=u||I!==_}return u=u||r.length!==Object.keys(o).length,u?c:o}}function dd(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function fD(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(Xe(15))};const o={getState:i.getState,dispatch:(u,...c)=>s(u,...c)},a=t.map(u=>u(o));return s=dd(...a)(i.dispatch),{...i,dispatch:s}}}function pD(t){return H1(t)&&"type"in t&&typeof t.type=="string"}var ix=Symbol.for("immer-nothing"),lw=Symbol.for("immer-draftable"),Yt=Symbol.for("immer-state");function _n(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var wo=Object.getPrototypeOf;function os(t){return!!t&&!!t[Yt]}function xr(t){var e;return t?sx(t)||Array.isArray(t)||!!t[lw]||!!((e=t.constructor)!=null&&e[lw])||gh(t)||yh(t):!1}var mD=Object.prototype.constructor.toString();function sx(t){if(!t||typeof t!="object")return!1;const e=wo(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===mD}function hd(t,e){mh(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function mh(t){const e=t[Yt];return e?e.type_:Array.isArray(t)?1:gh(t)?2:yh(t)?3:0}function Cm(t,e){return mh(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function ox(t,e,n){const r=mh(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function gD(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function gh(t){return t instanceof Map}function yh(t){return t instanceof Set}function Di(t){return t.copy_||t.base_}function Rm(t,e){if(gh(t))return new Map(t);if(yh(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=sx(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[Yt];let i=Reflect.ownKeys(r);for(let s=0;s<i.length;s++){const o=i[s],a=r[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[o]})}return Object.create(wo(t),r)}else{const r=wo(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function q1(t,e=!1){return vh(t)||os(t)||!xr(t)||(mh(t)>1&&(t.set=t.add=t.clear=t.delete=yD),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>q1(r,!0))),t}function yD(){_n(2)}function vh(t){return Object.isFrozen(t)}var vD={};function as(t){const e=vD[t];return e||_n(0,t),e}var dl;function ax(){return dl}function _D(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function uw(t,e){e&&(as("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Pm(t){Am(t),t.drafts_.forEach(wD),t.drafts_=null}function Am(t){t===dl&&(dl=t.parent_)}function cw(t){return dl=_D(dl,t)}function wD(t){const e=t[Yt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function dw(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Yt].modified_&&(Pm(e),_n(4)),xr(t)&&(t=fd(e,t),e.parent_||pd(e,t)),e.patches_&&as("Patches").generateReplacementPatches_(n[Yt].base_,t,e.patches_,e.inversePatches_)):t=fd(e,n,[]),Pm(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==ix?t:void 0}function fd(t,e,n){if(vh(e))return e;const r=e[Yt];if(!r)return hd(e,(i,s)=>hw(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return pd(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),hd(s,(a,u)=>hw(t,r,i,a,u,n,o)),pd(t,i,!1),n&&t.patches_&&as("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function hw(t,e,n,r,i,s,o){if(os(i)){const a=s&&e&&e.type_!==3&&!Cm(e.assigned_,r)?s.concat(r):void 0,u=fd(t,i,a);if(ox(n,r,u),os(u))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(xr(i)&&!vh(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;fd(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&pd(t,i)}}function pd(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&q1(e,n)}function ED(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:ax(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=K1;n&&(i=[r],s=hl);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var K1={get(t,e){if(e===Yt)return t;const n=Di(t);if(!Cm(n,e))return SD(t,n,e);const r=n[e];return t.finalized_||!xr(r)?r:r===Ff(t.base_,e)?(zf(t),t.copy_[e]=km(r,t)):r},has(t,e){return e in Di(t)},ownKeys(t){return Reflect.ownKeys(Di(t))},set(t,e,n){const r=lx(Di(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=Ff(Di(t),e),s=i==null?void 0:i[Yt];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(gD(n,i)&&(n!==void 0||Cm(t.base_,e)))return!0;zf(t),bm(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return Ff(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,zf(t),bm(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Di(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){_n(11)},getPrototypeOf(t){return wo(t.base_)},setPrototypeOf(){_n(12)}},hl={};hd(K1,(t,e)=>{hl[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});hl.deleteProperty=function(t,e){return hl.set.call(this,t,e,void 0)};hl.set=function(t,e,n){return K1.set.call(this,t[0],e,n,t[0])};function Ff(t,e){const n=t[Yt];return(n?Di(n):t)[e]}function SD(t,e,n){var i;const r=lx(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function lx(t,e){if(!(e in t))return;let n=wo(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=wo(n)}}function bm(t){t.modified_||(t.modified_=!0,t.parent_&&bm(t.parent_))}function zf(t){t.copy_||(t.copy_=Rm(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var TD=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(u=s,...c){return o.produce(u,d=>n.call(this,d,...c))}}typeof n!="function"&&_n(6),r!==void 0&&typeof r!="function"&&_n(7);let i;if(xr(e)){const s=cw(this),o=km(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Pm(s):Am(s)}return uw(s,r),dw(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===ix&&(i=void 0),this.autoFreeze_&&q1(i,!0),r){const s=[],o=[];as("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else _n(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,u=>e(u,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){xr(t)||_n(8),os(t)&&(t=ID(t));const e=cw(this),n=km(t,void 0);return n[Yt].isManual_=!0,Am(e),n}finishDraft(t,e){const n=t&&t[Yt];(!n||!n.isManual_)&&_n(9);const{scope_:r}=n;return uw(r,e),dw(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=as("Patches").applyPatches_;return os(t)?r(t,e):this.produce(t,i=>r(i,e))}};function km(t,e){const n=gh(t)?as("MapSet").proxyMap_(t,e):yh(t)?as("MapSet").proxySet_(t,e):ED(t,e);return(e?e.scope_:ax()).drafts_.push(n),n}function ID(t){return os(t)||_n(10,t),ux(t)}function ux(t){if(!xr(t)||vh(t))return t;const e=t[Yt];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Rm(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Rm(t,!0);return hd(n,(r,i)=>{ox(n,r,ux(i))}),e&&(e.finalized_=!1),n}var Xt=new TD,cx=Xt.produce;Xt.produceWithPatches.bind(Xt);Xt.setAutoFreeze.bind(Xt);Xt.setUseStrictShallowCopy.bind(Xt);Xt.applyPatches.bind(Xt);Xt.createDraft.bind(Xt);Xt.finishDraft.bind(Xt);function dx(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var xD=dx(),CD=dx,RD=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?dd:dd.apply(null,arguments)},PD=t=>t&&typeof t.match=="function";function ka(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(Rn(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>pD(r)&&r.type===t,n}var hx=class ma extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,ma.prototype)}static get[Symbol.species](){return ma}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new ma(...e[0].concat(this)):new ma(...e.concat(this))}};function fw(t){return xr(t)?cx(t,()=>{}):t}function pw(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(Rn(10));const r=n.insert(e,t);return t.set(e,r),r}function AD(t){return typeof t=="boolean"}var bD=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new hx;return n&&(AD(n)?o.push(xD):o.push(CD(n.extraArgument))),o},kD="RTK_autoBatch",fx=t=>e=>{setTimeout(e,t)},ND=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:fx(10),OD=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,u=t.type==="tick"?queueMicrotask:t.type==="raf"?ND:t.type==="callback"?t.queueNotification:fx(t.timeout),c=()=>{o=!1,s&&(s=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const h=()=>i&&d(),g=r.subscribe(h);return a.add(d),()=>{g(),a.delete(d)}},dispatch(d){var h;try{return i=!((h=d==null?void 0:d.meta)!=null&&h[kD]),s=!i,s&&(o||(o=!0,u(c))),r.dispatch(d)}finally{i=!0}}})},DD=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new hx(t);return r&&i.push(OD(typeof r=="object"?r:void 0)),i};function LD(t){const e=bD(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(H1(n))a=hD(n);else throw new Error(Rn(1));let u;typeof r=="function"?u=r(e):u=e();let c=dd;i&&(c=RD({trace:!1,...typeof i=="object"&&i}));const d=fD(...u),h=DD(d);let g=typeof o=="function"?o(h):h();const _=c(...g);return rx(a,s,_)}function px(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(Rn(28));if(a in e)throw new Error(Rn(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function MD(t){return typeof t=="function"}function jD(t,e){let[n,r,i]=px(e),s;if(MD(t))s=()=>fw(t());else{const a=fw(t);s=()=>a}function o(a=s(),u){let c=[n[u.type],...r.filter(({matcher:d})=>d(u)).map(({reducer:d})=>d)];return c.filter(d=>!!d).length===0&&(c=[i]),c.reduce((d,h)=>{if(h)if(os(d)){const _=h(d,u);return _===void 0?d:_}else{if(xr(d))return cx(d,g=>h(g,u));{const g=h(d,u);if(g===void 0){if(d===null)return d;throw new Error(Rn(9))}return g}}return d},a)}return o.getInitialState=s,o}var VD=(t,e)=>PD(t)?t.match(e):t(e);function FD(...t){return e=>t.some(n=>VD(n,e))}var zD="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",UD=(t=21)=>{let e="",n=t;for(;n--;)e+=zD[Math.random()*64|0];return e},$D=["name","message","stack","code"],Uf=class{constructor(t,e){Hh(this,"_type");this.payload=t,this.meta=e}},mw=class{constructor(t,e){Hh(this,"_type");this.payload=t,this.meta=e}},BD=t=>{if(typeof t=="object"&&t!==null){const e={};for(const n of $D)typeof t[n]=="string"&&(e[n]=t[n]);return e}return{message:String(t)}},WD=(()=>{function t(e,n,r){const i=ka(e+"/fulfilled",(u,c,d,h)=>({payload:u,meta:{...h||{},arg:d,requestId:c,requestStatus:"fulfilled"}})),s=ka(e+"/pending",(u,c,d)=>({payload:void 0,meta:{...d||{},arg:c,requestId:u,requestStatus:"pending"}})),o=ka(e+"/rejected",(u,c,d,h,g)=>({payload:h,error:(r&&r.serializeError||BD)(u||"Rejected"),meta:{...g||{},arg:d,requestId:c,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"}}));function a(u){return(c,d,h)=>{const g=r!=null&&r.idGenerator?r.idGenerator(u):UD(),_=new AbortController;let I,R;function P(y){R=y,_.abort()}const E=async function(){var C,N;let y;try{let D=(C=r==null?void 0:r.condition)==null?void 0:C.call(r,u,{getState:d,extra:h});if(qD(D)&&(D=await D),D===!1||_.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const T=new Promise((v,x)=>{I=()=>{x({name:"AbortError",message:R||"Aborted"})},_.signal.addEventListener("abort",I)});c(s(g,u,(N=r==null?void 0:r.getPendingMeta)==null?void 0:N.call(r,{requestId:g,arg:u},{getState:d,extra:h}))),y=await Promise.race([T,Promise.resolve(n(u,{dispatch:c,getState:d,extra:h,requestId:g,signal:_.signal,abort:P,rejectWithValue:(v,x)=>new Uf(v,x),fulfillWithValue:(v,x)=>new mw(v,x)})).then(v=>{if(v instanceof Uf)throw v;return v instanceof mw?i(v.payload,g,u,v.meta):i(v,g,u)})])}catch(D){y=D instanceof Uf?o(null,g,u,D.payload,D.meta):o(D,g,u)}finally{I&&_.signal.removeEventListener("abort",I)}return r&&!r.dispatchConditionRejection&&o.match(y)&&y.meta.condition||c(y),y}();return Object.assign(E,{abort:P,requestId:g,arg:u,unwrap(){return E.then(HD)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:FD(o,i),typePrefix:e})}return t.withTypes=()=>t,t})();function HD(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function qD(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var KD=Symbol.for("rtk-slice-createasyncthunk");function GD(t,e){return`${t}/${e}`}function QD({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[KD];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(Rn(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(XD()):i.reducers)||{},u=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(w,C){const N=typeof w=="string"?w:w.type;if(!N)throw new Error(Rn(12));if(N in c.sliceCaseReducersByType)throw new Error(Rn(13));return c.sliceCaseReducersByType[N]=C,d},addMatcher(w,C){return c.sliceMatchers.push({matcher:w,reducer:C}),d},exposeAction(w,C){return c.actionCreators[w]=C,d},exposeCaseReducer(w,C){return c.sliceCaseReducersByName[w]=C,d}};u.forEach(w=>{const C=a[w],N={reducerName:w,type:GD(s,w),createNotation:typeof i.reducers=="function"};ZD(C)?tL(N,C,d,e):JD(N,C,d)});function h(){const[w={},C=[],N=void 0]=typeof i.extraReducers=="function"?px(i.extraReducers):[i.extraReducers],D={...w,...c.sliceCaseReducersByType};return jD(i.initialState,T=>{for(let v in D)T.addCase(v,D[v]);for(let v of c.sliceMatchers)T.addMatcher(v.matcher,v.reducer);for(let v of C)T.addMatcher(v.matcher,v.reducer);N&&T.addDefaultCase(N)})}const g=w=>w,_=new Map;let I;function R(w,C){return I||(I=h()),I(w,C)}function P(){return I||(I=h()),I.getInitialState()}function E(w,C=!1){function N(T){let v=T[w];return typeof v>"u"&&C&&(v=P()),v}function D(T=g){const v=pw(_,C,{insert:()=>new WeakMap});return pw(v,T,{insert:()=>{const x={};for(const[A,b]of Object.entries(i.selectors??{}))x[A]=YD(b,T,P,C);return x}})}return{reducerPath:w,getSelectors:D,get selectors(){return D(N)},selectSlice:N}}const y={name:s,reducer:R,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:P,...E(o),injectInto(w,{reducerPath:C,...N}={}){const D=C??o;return w.inject({reducerPath:D,reducer:R},N),{...y,...E(D,!0)}}};return y}}function YD(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var mx=QD();function XD(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function JD({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!eL(r))throw new Error(Rn(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?ka(t,o):ka(t))}function ZD(t){return t._reducerDefinitionType==="asyncThunk"}function eL(t){return t._reducerDefinitionType==="reducerWithPrepare"}function tL({type:t,reducerName:e},n,r,i){if(!i)throw new Error(Rn(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:u,settled:c,options:d}=n,h=i(t,s,d);r.exposeAction(e,h),o&&r.addCase(h.fulfilled,o),a&&r.addCase(h.pending,a),u&&r.addCase(h.rejected,u),c&&r.addMatcher(h.settled,c),r.exposeCaseReducer(e,{fulfilled:o||bu,pending:a||bu,rejected:u||bu,settled:c||bu})}function bu(){}function Rn(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const nL=()=>{try{const t=localStorage.getItem("cartitem");return t?JSON.parse(t):[]}catch(t){return console.error("Error loading cart from localStorage:",t),[]}},rL=()=>{try{const t=localStorage.getItem("selectedproduct");return t?JSON.parse(t):null}catch{return console.error("Error loading in products from local storage"),null}},iL={items:nL(),counter:0,selectedproduct:rL(),totalitems:0,totalprice:0},sL=t=>{localStorage.setItem("cartitem",JSON.stringify(t)),localStorage.setItem("cartcount",t.length)},gx=mx({name:"cart",initialState:iL,reducers:{addtocart(t,e){t.items.push(e.payload),localStorage.setItem("cartitem",JSON.stringify(t.items)),console.log("New Product: ",localStorage.getItem("cartitem")),t.cartcount=t.items.length,sL(t.items)},deletefromcart(t,e){const n=t.items.filter(r=>r.id!=e.payload.id);t.items=n,localStorage.setItem("cartitem",JSON.stringify(t.items)),t.cartcount=t.items.length},increment(t,e){const n=t.items.findIndex(r=>r.id===e.payload.id);n>=0&&(t.items[n].quantity+=1)},decrement(t,e){const n=t.items.findIndex(r=>r.id===e.payload.id);n>=0&&t.items[n].quantity>1?t.items[n].quantity-=1:t.items=t.items.filter(r=>r.id!==e.payload.id)},clearcart:t=>{t.items=[],localStorage.setItem("cartitem",JSON.stringify(t.items)),t.cartcount=t.items.length},initializeCart:t=>{const e=localStorage.getItem("cartcount");t.cartcount=e?parseInt(e,10):0},productdetail:(t,e)=>{t.selectedproduct=e.payload,localStorage.setItem("selectedproduct",JSON.stringify(e.payload))}}}),yx=t=>t.cart.items.reduce((e,n)=>e+n.price*n.quantity,0),vx=t=>t.cart.items.reduce((e,n)=>e+(n.quantity+1-1),0),{addtocart:_x,deletefromcart:oL,increment:aL,decrement:lL,clearcart:uL,initializeCart:cL,productdetail:dL,checkout:hL}=gx.actions,fL=gx.reducer,pL=be.section`
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
`,mL=()=>{const[t,e]=M.useState([]),[n,r]=M.useState(),[i,s]=M.useState(!0),[o,a]=M.useState(null),[u,c]=M.useState(1),d=12,h=Hd(),g=fr(E=>E.cart),_=async()=>{try{const E=od(Wn(Hn,"shop"),q_("name"),K_(d)),y=await Gi(E),w=y.docs.map(C=>({id:C.id,...C.data()}));e(w),a(y.docs[y.docs.length-1]),c(u-1),s(!1)}catch(E){console.log("Error in fetching:",E)}},I=async()=>{try{if(o){const E=od(Wn(Hn,"shop"),q_("name"),HN(o),K_(d)),y=await Gi(E),w=y.docs.map(C=>({id:C.id,...C.data()}));w.length>0&&(e(w),a(y.docs[y.docs.length-1]),c(u+1),s(!1))}}catch(E){console.log("Error",E)}};M.useEffect(()=>{_()},[]);const R=E=>{g.items.some(w=>w.id===E.id)?gt.error(`${E.name} is already in the cart`):(h(_x(E)),gt.success(`${E.name} is added to the cart`))},P=E=>{h(dL(E))};return p.jsx(p.Fragment,{children:i?p.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",p.jsx(bo,{size:60,color:"red"})," "]}):p.jsx(QI,{children:p.jsxs(pL,{children:[p.jsxs("div",{id:"sidebar",children:[p.jsx("h1",{children:"Filter"}),p.jsx("input",{id:"search",type:"text",placeholder:"Search here...",value:n,onChange:E=>r(E.target.value)}),p.jsx("h5",{className:"mt-3",children:"Search by Category"}),p.jsxs("div",{className:"form-check",children:[p.jsx("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),p.jsx("label",{className:"form-check-label",for:"flexCheckDefault",children:"Vegetables"})]}),p.jsxs("div",{className:"form-check",children:[p.jsx("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),p.jsx("label",{className:"form-check-label",for:"flexCheckDefault",children:"Fruits"})]}),p.jsxs("div",{className:"form-check",children:[p.jsx("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),p.jsx("label",{className:"form-check-label",for:"flexCheckDefault",children:"Dairy"})]})]}),p.jsxs("div",{id:"shop-products",children:[p.jsx("div",{className:"container",children:p.jsxs("div",{className:"row",children:[t.map(E=>p.jsx("div",{className:'mb-3 col-md-3 col-lg-4 col-xl-3 col-6" mx-0',children:p.jsxs("div",{className:"card",children:[p.jsx("img",{src:E.imageurl,className:"card-img-top",alt:"Product Picture"}),p.jsxs("div",{className:"card-body",children:[p.jsx("p",{className:"card-text",id:"category",children:E.category}),p.jsx("h5",{className:"card-title",id:"name",children:E.name}),p.jsxs("p",{className:"card-text",id:"price",children:["$",E.price]}),p.jsxs("p",{className:"card-text",id:"stock",children:["Stock: ",E.stock]}),E.weigh&&p.jsxs("p",{className:"card-text",id:"quantity",children:["Quantity: ",E.weigh,"kg"]}),E.bunch&&p.jsxs("p",{className:"card-text",id:"bunch",children:["Bunch: ",E.bunch]}),E.size&&p.jsxs("p",{className:"card-text",id:"size",children:["Size: ",E.size," "]}),E.dozen&&p.jsxs("p",{className:"card-text",id:"dozen",children:["Dozen: ",E.dozen," "]}),p.jsxs("div",{id:"icons",children:[p.jsx(ht,{className:"icons",to:"/ProductDetail",onClick:()=>P(E),children:p.jsx($O,{className:"icon",size:"1.1rem"})}),p.jsx(ht,{className:"icons",children:p.jsx(u7,{className:"icon",size:"1.1rem",onClick:()=>R(E)})}),p.jsx(ht,{className:"icons",children:p.jsx(lD,{className:"icon",size:"1.1rem"})})]})]})]})},E.id)),";"]})}),p.jsxs("div",{id:"buttons",children:[p.jsx("button",{onClick:()=>{c(u-1),_()},disabled:u===1,children:"«"}),p.jsx("button",{onClick:I,children:"»"})]})]})]})})})},gL=be.section`
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
`,yL=()=>{const[t,e]=M.useState(!0),[n,r]=M.useState(null),i=Hd(),s=fr(u=>u.cart),o=fr(u=>u.cart.selectedproduct);M.useEffect(()=>{const u=setTimeout(()=>{(async()=>{try{if(n)r(o),e(!1);else{const d=localStorage.getItem("selectedproduct");d&&(r(JSON.parse(d)),e(!1))}}catch(d){console.log("Error in loading: ",d)}})()},1500);return()=>clearTimeout(u)},[o]);const a=u=>{s.items.some(d=>d.id===u.id)?gt.error(`${u.name} is already in the cart`):(i(_x(u)),gt.success(`${u.name} is added to the cart`))};return p.jsxs(p.Fragment,{children:[t?p.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",p.jsx(bo,{size:60,color:"red"})," "]}):p.jsx(gL,{children:p.jsx("div",{children:p.jsxs("div",{id:"product-detail",children:[p.jsx("div",{children:p.jsx("img",{src:n.imageurl,alt:"Product"})}),p.jsxs("div",{id:"product-info",children:[p.jsxs("p",{id:"category",children:[n.category," / ",n.name]}),p.jsx("h3",{id:"name",children:n.name}),p.jsx("p",{id:"description",children:n.description}),p.jsxs("p",{id:"stock",children:["stock: ",n.stock]}),n.weigh&&p.jsxs("p",{id:"quantity",children:["Weight: ",n.weigh," kg"]}),n.bunch&&p.jsxs("p",{id:"bunch",children:["Bunch: ",n.bunch]}),n.size&&p.jsxs("p",{id:"size",children:["size: ",n.size]}),n.dozen&&p.jsxs("p",{id:"dozen",children:["Dozen: ",n.dozen]}),p.jsxs("p",{id:"price",children:["$",n.price]}),p.jsx("div",{id:"plusminus",children:p.jsx("button",{className:"btn btn-success",id:"addtocart",onClick:()=>a(n),children:" Add to cart"})})]})]})})}),";"]})},vL=be.section`
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
`,_L=()=>{const[t,e]=M.useState(!0),[n,r]=M.useState(""),[i,s]=M.useState(""),[o,a]=M.useState(""),[u,c]=M.useState(""),[d,h]=M.useState(""),[g,_]=M.useState(""),[I,R]=M.useState(""),[P,E]=M.useState([]),[y,w]=M.useState(""),[C,N]=M.useState(""),D=fr(vx),T=fr(yx),v={Islamabad:["Islamabad"],Punjab:["Lahore","Rawalpindi","Faisalabad","Multan","Sargodha","Bahawalpur"],Sindh:["Karachi","Hydrabad","Sakkhar"],Balochistan:["Quetta","Sibbi","Gawadar"],"Khyber Pakhtunkhwa":["Peshawar","Abbotabad","Swat","Mardaan"],"Azad Kashmir":["Muzzaffarabad","Rawalkot","Neelum Valley"],"Gilgit Baltistan":["Balakot","Skardu"]},x=b=>{const O=b.target.value;R(O),E(v[O]||[])};M.useEffect(()=>{const b=setTimeout(()=>{(async()=>{try{e(!1)}catch(k){console.log("Error is:",k)}})()},1500);return()=>clearTimeout(b)},[]);const A=async b=>{b.preventDefault();try{const O=Wn(Hn,"billinginfo");await L1(O,{fname:n,house:i,street:o,state:I,city:C,zip:u,phone:d,email:g,payment:y})}catch(O){console.log("Error: ",O)}};return p.jsx(p.Fragment,{children:t?p.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",p.jsx(bo,{size:60,color:"red"})," "]}):p.jsx(vL,{children:p.jsxs("form",{id:"myform",className:"form-check",onSubmit:A,children:[p.jsxs("div",{id:"formcontent",className:"row g-3",children:[p.jsx("h1",{children:"Billing Information"}),p.jsxs("div",{className:"col-md-12",children:[p.jsx("label",{htmlFor:"firstname",className:"form-label",children:"Full Name"}),p.jsx("input",{type:"text",className:"form-control",placeholder:"first name",value:n,onChange:b=>r(b.target.value),required:!0})]}),p.jsxs("div",{className:"col-12",children:[p.jsx("label",{htmlFor:"address1",className:"form-label",children:"Enter House No."}),p.jsx("input",{type:"text",className:"form-control",placeholder:"Enter your house no.",required:!0,value:i,onChange:b=>s(b.target.value)})]}),p.jsxs("div",{className:"col-12",children:[p.jsx("label",{htmlFor:"address2",className:"form-label",children:"Enter street address"}),p.jsx("input",{type:"text",className:"form-control",placeholder:"Enter street address",required:!0,value:o,onChange:b=>a(b.target.value)})]}),p.jsxs("div",{className:"col-md-4",children:[p.jsx("label",{htmlFor:"inputState",className:"form-label",children:"State"}),p.jsxs("select",{onChange:x,value:I,required:!0,children:[p.jsx("option",{value:"",children:"Select a state"}),Object.keys(v).map(b=>p.jsx("option",{value:b,children:b},b))]})]}),p.jsxs("div",{className:"col-md-6",children:[p.jsx("label",{children:"Select City:"}),p.jsxs("select",{required:!0,value:C,onChange:b=>N(b.target.value),children:[p.jsx("option",{value:"",children:"Select a city"}),P.length>0?P.map(b=>p.jsx("option",{value:b,children:b},b)):p.jsx("option",{disabled:!0,children:"No cities available"})]})]}),p.jsxs("div",{className:"col-md-4",children:[p.jsx("label",{htmlFor:"inputZip",className:"form-label",children:"Zip"}),p.jsx("input",{type:"text",className:"form-control",placeholder:"zip code",required:!0,value:u,onChange:b=>c(b.target.value)})]}),p.jsxs("div",{className:"col-md-4",children:[p.jsx("label",{htmlFor:"inputcell",className:"form-label",children:"Phone"}),p.jsx("input",{type:"cell",className:"form-control",placeholder:"phone",required:!0,value:d,onChange:b=>h(b.target.value)})]}),p.jsxs("div",{className:"col-md-4",children:[p.jsx("label",{htmlFor:"inputemail",className:"form-label",children:"Email"}),p.jsx("input",{type:"email",className:"form-control",placeholder:"email address",required:!0,value:g,onChange:b=>_(b.target.value)})]})]}),p.jsxs("div",{id:"myorder",children:[p.jsx("h5",{children:"Your Order"}),p.jsxs("div",{id:"price",children:[p.jsx("p",{children:"Total Items"}),p.jsxs("p",{children:[D," items"]})]}),p.jsxs("div",{id:"subtotal",children:[p.jsx("p",{children:"SubTotal"}),p.jsxs("p",{style:{color:"black"},children:["$",parseFloat(T).toFixed(2)]})]}),p.jsxs("div",{id:"subtotal",children:[p.jsx("p",{children:"Shipping"}),p.jsx("p",{style:{color:"black"},children:"$5.00"})]}),p.jsx("hr",{}),p.jsxs("div",{id:"total",children:[p.jsx("p",{children:"Total"}),p.jsxs("p",{style:{color:"red"},children:["$",parseFloat(T+5).toFixed(2)]})]}),p.jsx("hr",{}),p.jsx("h6",{children:"Payment Methods"}),p.jsxs("div",{children:[p.jsx("input",{type:"radio",required:!0,name:"option",value:"Direct Bank Transfer",checked:y==="Direct Bank Transfer",onChange:b=>w(b.target.value)}),p.jsx("label",{htmlFor:"Direct Bank Transfer",children:"Direct Bank Transfer"})]}),p.jsxs("div",{children:[p.jsx("input",{type:"radio",required:!0,name:"option",value:"Cash on Deliverey",onChange:b=>w(b.target.value),checked:y==="Cash on Deliverey"}),p.jsx("label",{htmlFor:"Cash on Deliverey",children:"Cash on Deliverey"})]}),p.jsx("p",{id:"para",children:"Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy."}),p.jsx("button",{type:"submit",className:"container btn btn-danger",children:"Confirm order"})]})]})})})};function $f(t){return Se({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(t)}const wL=be.section`
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
`,EL=be.div`
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
`,SL=be.section`
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
`,TL=()=>{const[t,e]=M.useState(!0),n=Hd(),r=fr(h=>h.cart.items),i=fr(yx),s=fr(vx);M.useEffect(()=>{const h=setTimeout(()=>{(async()=>{try{e(!1)}catch(_){console.log("Error is:",_)}})()},1500);return()=>clearTimeout(h)},[]);const o=h=>{n(oL(h)),gt.success(`${h.name} is removed from the cart`)},a=h=>{n(aL(h))},u=h=>{n(lL(h))},c=()=>{n(uL()),gt.success("Removed all items from the cart")},d=()=>{n(hL())};return p.jsx(p.Fragment,{children:t?p.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",p.jsx(bo,{size:60,color:"red"})," "]}):p.jsxs(p.Fragment,{children:[p.jsxs(wL,{children:[p.jsxs("div",{id:"labels",children:[p.jsx("p",{children:"Product"}),p.jsx("p",{children:"Price"}),p.jsx("p",{children:"Quantity"}),p.jsx("p",{children:"SubTotal"}),p.jsx("p",{children:"Remove"})]}),p.jsx("div",{children:r.length===0?p.jsx("p",{children:"Your cart is empty."}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{children:[r.map(h=>p.jsxs("div",{id:"items",children:[p.jsxs("div",{id:"itemname",children:[p.jsx("img",{src:h.imageurl,alt:"Product Pic"}),p.jsxs("p",{children:[h.name," ",p.jsx("br",{}),h.weigh&&p.jsxs("p",{className:"quantity",children:[h.weigh," kg"]}),h.dozen&&p.jsxs("p",{className:"quantity",children:[h.dozen," dozen"]}),h.bunch&&p.jsxs("p",{className:"quantity",children:[h.bunch," bunch"]}),h.size&&p.jsx("p",{className:"quantity",children:h.size})]})]}),p.jsxs("p",{id:"price",children:["$",h.price]}),p.jsxs("div",{id:"buttons",children:[p.jsx("button",{className:"btn",onClick:()=>u(h),disabled:h.quantity<=1,children:"-"}),p.jsx("p",{children:h.quantity}),p.jsx("button",{className:"btn",onClick:()=>a(h),disabled:h.quantity>=h.stock,children:"+"})]}),p.jsxs("p",{id:"subtotal",children:["$",parseFloat(h.quantity*h.price).toFixed(2)]}),p.jsx($f,{onClick:()=>o(h),color:"red",id:"trashicon"})]},h.name)),p.jsx("button",{className:"btn btn-danger mt-5",onClick:c,children:"Clear Cart"})]}),p.jsxs("div",{className:"lowerbox",children:[p.jsxs("div",{children:[p.jsx("h6",{children:"Total items: "}),p.jsxs("p",{children:[s," items"]})]}),p.jsxs("div",{children:[p.jsx("h4",{children:"Total"}),p.jsxs("p",{children:["$",parseFloat(i).toFixed(2)]})]}),p.jsx("button",{className:"container btn btn-danger",onClick:d,children:p.jsx(ht,{to:"/checkout",className:"container text-decoration-none text-white",children:"Prodeed to checkout"})})]})]})})]}),p.jsx(EL,{id:"tablet",children:r.length===0?p.jsx("p",{children:"Your Cart is Empty!"}):p.jsxs("div",{className:"container",children:[r.map(h=>p.jsxs("div",{id:"innerbox",children:[p.jsxs("div",{id:"imagename",children:[p.jsx("img",{src:h.imageurl,alt:h.name}),p.jsxs("div",{children:[p.jsx("h5",{children:h.name}),h.weigh&&p.jsxs("p",{className:"quantity",children:[h.weigh," kg"]}),h.dozen&&p.jsxs("p",{className:"quantity",children:[h.dozen," dozen"]}),h.bunch&&p.jsxs("p",{className:"quantity",children:[h.bunch," bunch"]}),h.size&&p.jsx("p",{className:"quantity",children:h.size})]})]}),p.jsxs("div",{id:"secondbox",children:[p.jsxs("div",{id:"label",children:[p.jsx("p",{children:"Price"}),p.jsx("p",{style:{margin:"0rem 1.5rem 0rem 1.5rem"},children:"Quantity"}),p.jsx("p",{children:"SubTotal"})]}),p.jsxs("div",{id:"items",children:[p.jsxs("p",{children:["$",parseFloat(h.price).toFixed(2)]}),p.jsxs("div",{id:"button",children:[p.jsx("button",{className:"btn",onClick:()=>u(h),disabled:h.quantity<=1,children:"-"}),p.jsx("p",{children:h.quantity}),p.jsx("button",{className:"btn",onClick:()=>a(h),disabled:h.quantity>=h.stock,children:"+"})]}),p.jsxs("p",{children:["$",parseFloat(h.price*h.quantity).toFixed(2)]}),p.jsx($f,{style:{marginRight:"-15px",marginTop:"5px"},color:"red",size:".8rem",onClick:()=>o(h)})]})]})]},h.id)),p.jsx("button",{className:"btn btn-danger mt-5",onClick:c,children:"Clear Cart"}),p.jsxs("div",{className:"lowerbox",style:{marginTop:"3rem"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[p.jsx("h6",{children:"Total items: "}),p.jsxs("p",{children:[s," items"]})]}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[p.jsx("h4",{children:"Total"}),p.jsxs("p",{children:["$",parseFloat(i).toFixed(2)]})]}),p.jsx("button",{className:"container btn btn-danger",onClick:d,children:p.jsx(ht,{to:"/checkout",className:"container text-decoration-none text-white",children:"Prodeed to checkout"})})]})]})}),p.jsx(SL,{children:r.length===0?p.jsx("p",{children:"Your cart is empty"}):p.jsxs("div",{className:"container",children:[r.map(h=>p.jsx("div",{children:p.jsxs("div",{id:"product-detail",className:"container",children:[p.jsx("div",{children:p.jsx("img",{src:h.imageurl,alt:"Product"})}),p.jsxs("div",{id:"product-info",children:[p.jsxs("p",{id:"category",children:[h.category," / ",h.name]}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[p.jsx("h3",{id:"name",children:h.name}),p.jsx($f,{id:"trash",onClick:()=>o(h)})]}),h.weigh&&p.jsxs("p",{id:"quantity",children:[h.weigh," kg"]}),h.bunch&&p.jsx("p",{id:"bunch",children:h.bunch}),h.size&&p.jsx("p",{id:"size",children:h.size}),h.dozen&&p.jsx("p",{id:"dozen",children:h.dozen}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[p.jsxs("p",{id:"price",children:["$",h.price]}),p.jsxs("div",{id:"mobile-button",style:{display:"flex",justifyContent:"space-between"},children:[p.jsx("button",{className:"btn",onClick:()=>u(h),disabled:h.quantity<=1,children:"-"}),p.jsx("p",{style:{margin:"0rem .8rem 0rem .8rem"},children:h.quantity}),p.jsx("button",{className:"btn",onClick:()=>a(h),disabled:h.quantity===h.stock,children:"+"})]})]}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",margin:"1rem 0rem 0rem 0rem"},children:[p.jsx("h6",{style:{fontSize:"1.3rem",fontWeight:"600"},children:"SubTotal"}),p.jsxs("p",{style:{fontSize:"1.3rem",fontWeight:"630"},children:["$",parseFloat(h.price*h.quantity).toFixed(2)]})]})]})]})})),p.jsx("button",{className:"btn btn-danger mt-5",onClick:c,children:"Clear Cart"}),p.jsxs("div",{className:"lowerbox p-1",style:{margin:"3rem 0rem 3rem 0rem"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[p.jsx("h6",{children:"Total items: "}),p.jsxs("p",{children:[s," items"]})]}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[p.jsx("h4",{style:{fontSize:"1.6rem"},children:"Total"}),p.jsxs("p",{style:{color:"red",fontWeight:"600",fontSize:"1.3rem"},children:["$",parseFloat(i).toFixed(2)]})]}),p.jsx("button",{className:"container btn btn-danger",onClick:d,children:p.jsx(ht,{to:"/checkout",className:"container text-decoration-none text-white",children:"Prodeed to checkout"})})]})]})})]})})},IL="/freshbiteapp_Reactjs/assets/aboutimg-dni3sD8E.jpg";function xL(t){return Se({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.97 8.265a1.45 1.45 0 0 0-.487.57.75.75 0 0 1-1.341-.67c.2-.402.513-.826.997-1.148C10.627 6.69 11.244 6.5 12 6.5c.658 0 1.369.195 1.934.619a2.45 2.45 0 0 1 1.004 2.006c0 1.033-.513 1.72-1.027 2.215-.19.183-.399.358-.579.508l-.147.123a4.329 4.329 0 0 0-.435.409v1.37a.75.75 0 1 1-1.5 0v-1.473c0-.237.067-.504.247-.736.22-.28.486-.517.718-.714l.183-.153.001-.001c.172-.143.324-.27.47-.412.368-.355.569-.676.569-1.136a.953.953 0 0 0-.404-.806C12.766 8.118 12.384 8 12 8c-.494 0-.814.121-1.03.265ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"},child:[]},{tag:"path",attr:{d:"M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"},child:[]}]})(t)}var wx={},_h={},G1={},Bf={},Wf={exports:{}},Hf,gw;function CL(){if(gw)return Hf;gw=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Hf=t,Hf}var qf,yw;function RL(){if(yw)return qf;yw=1;var t=CL();function e(){}function n(){}return n.resetWarningCache=e,qf=function(){function r(o,a,u,c,d,h){if(h!==t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}r.isRequired=r;function i(){return r}var s={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:e};return s.PropTypes=s,s},qf}var vw;function PL(){return vw||(vw=1,Wf.exports=RL()()),Wf.exports}var _w;function AL(){return _w||(_w=1,function(t){(function(e,n){n(t,M,PL())})(Xs,function(e,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=I;var i=o(n),s=o(r);function o(y){return y&&y.__esModule?y:{default:y}}var a=Object.assign||function(y){for(var w=1;w<arguments.length;w++){var C=arguments[w];for(var N in C)Object.prototype.hasOwnProperty.call(C,N)&&(y[N]=C[N])}return y};function u(y,w){var C={};for(var N in y)w.indexOf(N)>=0||Object.prototype.hasOwnProperty.call(y,N)&&(C[N]=y[N]);return C}function c(y,w){if(!(y instanceof w))throw new TypeError("Cannot call a class as a function")}var d=function(){function y(w,C){for(var N=0;N<C.length;N++){var D=C[N];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(w,D.key,D)}}return function(w,C,N){return C&&y(w.prototype,C),N&&y(w,N),w}}();function h(y,w){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w&&(typeof w=="object"||typeof w=="function")?w:y}function g(y,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof w);y.prototype=Object.create(w&&w.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),w&&(Object.setPrototypeOf?Object.setPrototypeOf(y,w):y.__proto__=w)}var _=!1;function I(y){_=y}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){I(!0)}}))}catch{}function R(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return _?y:y.capture}function P(y){if("touches"in y){var w=y.touches[0],C=w.pageX,N=w.pageY;return{x:C,y:N}}var D=y.screenX,T=y.screenY;return{x:D,y:T}}var E=function(y){g(w,y);function w(){var C;c(this,w);for(var N=arguments.length,D=Array(N),T=0;T<N;T++)D[T]=arguments[T];var v=h(this,(C=w.__proto__||Object.getPrototypeOf(w)).call.apply(C,[this].concat(D)));return v._handleSwipeStart=v._handleSwipeStart.bind(v),v._handleSwipeMove=v._handleSwipeMove.bind(v),v._handleSwipeEnd=v._handleSwipeEnd.bind(v),v._onMouseDown=v._onMouseDown.bind(v),v._onMouseMove=v._onMouseMove.bind(v),v._onMouseUp=v._onMouseUp.bind(v),v._setSwiperRef=v._setSwiperRef.bind(v),v}return d(w,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,R({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,R({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(N){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(N))}},{key:"_onMouseMove",value:function(N){this.mouseDown&&this._handleSwipeMove(N)}},{key:"_onMouseUp",value:function(N){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(N)}},{key:"_handleSwipeStart",value:function(N){var D=P(N),T=D.x,v=D.y;this.moveStart={x:T,y:v},this.props.onSwipeStart(N)}},{key:"_handleSwipeMove",value:function(N){if(this.moveStart){var D=P(N),T=D.x,v=D.y,x=T-this.moveStart.x,A=v-this.moveStart.y;this.moving=!0;var b=this.props.onSwipeMove({x,y:A},N);b&&N.cancelable&&N.preventDefault(),this.movePosition={deltaX:x,deltaY:A}}}},{key:"_handleSwipeEnd",value:function(N){this.props.onSwipeEnd(N);var D=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-D?this.props.onSwipeLeft(1,N):this.movePosition.deltaX>D&&this.props.onSwipeRight(1,N),this.movePosition.deltaY<-D?this.props.onSwipeUp(1,N):this.movePosition.deltaY>D&&this.props.onSwipeDown(1,N)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(N){this.swiper=N,this.props.innerRef(N)}},{key:"render",value:function(){var N=this.props;N.tagName;var D=N.className,T=N.style,v=N.children;N.allowMouseEvents,N.onSwipeUp,N.onSwipeDown,N.onSwipeLeft,N.onSwipeRight,N.onSwipeStart,N.onSwipeMove,N.onSwipeEnd,N.innerRef,N.tolerance;var x=u(N,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return i.default.createElement(this.props.tagName,a({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:D,style:T},x),v)}}]),w}(n.Component);E.displayName="ReactSwipe",E.propTypes={tagName:s.default.string,className:s.default.string,style:s.default.object,children:s.default.node,allowMouseEvents:s.default.bool,onSwipeUp:s.default.func,onSwipeDown:s.default.func,onSwipeLeft:s.default.func,onSwipeRight:s.default.func,onSwipeStart:s.default.func,onSwipeMove:s.default.func,onSwipeEnd:s.default.func,innerRef:s.default.func,tolerance:s.default.number.isRequired},E.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},e.default=E})}(Bf)),Bf}(function(t){(function(e,n){n(t,AL())})(Xs,function(e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=i(n);function i(s){return s&&s.__esModule?s:{default:s}}e.default=r.default})})(G1);var Ml={},Ex={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Ex);var bL=Ex.exports;Object.defineProperty(Ml,"__esModule",{value:!0});Ml.default=void 0;var Dr=kL(bL);function kL(t){return t&&t.__esModule?t:{default:t}}function NL(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var OL={ROOT:function(e){return(0,Dr.default)(NL({"carousel-root":!0},e||"",!!e))},CAROUSEL:function(e){return(0,Dr.default)({carousel:!0,"carousel-slider":e})},WRAPPER:function(e,n){return(0,Dr.default)({"thumbs-wrapper":!e,"slider-wrapper":e,"axis-horizontal":n==="horizontal","axis-vertical":n!=="horizontal"})},SLIDER:function(e,n){return(0,Dr.default)({thumbs:!e,slider:e,animated:!n})},ITEM:function(e,n,r){return(0,Dr.default)({thumb:!e,slide:e,selected:n,previous:r})},ARROW_PREV:function(e){return(0,Dr.default)({"control-arrow control-prev":!0,"control-disabled":e})},ARROW_NEXT:function(e){return(0,Dr.default)({"control-arrow control-next":!0,"control-disabled":e})},DOT:function(e){return(0,Dr.default)({dot:!0,selected:e})}};Ml.default=OL;var jl={},wh={};Object.defineProperty(wh,"__esModule",{value:!0});wh.outerWidth=void 0;var DL=function(e){var n=e.offsetWidth,r=getComputedStyle(e);return n+=parseInt(r.marginLeft)+parseInt(r.marginRight),n};wh.outerWidth=DL;var ko={};Object.defineProperty(ko,"__esModule",{value:!0});ko.default=void 0;var LL=function(e,n,r){var i=e===0?e:e+n,s=r==="horizontal"?[i,0,0]:[0,i,0],o="translate3d",a="("+s.join(",")+")";return o+a};ko.default=LL;var Vl={};Object.defineProperty(Vl,"__esModule",{value:!0});Vl.default=void 0;var ML=function(){return window};Vl.default=ML;Object.defineProperty(jl,"__esModule",{value:!0});jl.default=void 0;var fn=FL(M),bi=Eh(Ml),jL=wh,ww=Eh(ko),VL=Eh(G1),ku=Eh(Vl);function Eh(t){return t&&t.__esModule?t:{default:t}}function Sx(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return Sx=function(){return t},t}function FL(t){if(t&&t.__esModule)return t;if(t===null||Na(t)!=="object"&&typeof t!="function")return{default:t};var e=Sx();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var s=r?Object.getOwnPropertyDescriptor(t,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=t[i]}return n.default=t,e&&e.set(t,n),n}function Na(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Na=function(n){return typeof n}:Na=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Na(t)}function Nm(){return Nm=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Nm.apply(this,arguments)}function zL(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function UL(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function $L(t,e,n){return e&&UL(t.prototype,e),t}function BL(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Om(t,e)}function Om(t,e){return Om=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Om(t,e)}function WL(t){var e=qL();return function(){var r=md(t),i;if(e){var s=md(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return HL(this,i)}}function HL(t,e){return e&&(Na(e)==="object"||typeof e=="function")?e:Tt(t)}function Tt(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function qL(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function md(t){return md=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},md(t)}function dt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var KL=function(e){return e.hasOwnProperty("key")},Q1=function(t){BL(n,t);var e=WL(n);function n(r){var i;return zL(this,n),i=e.call(this,r),dt(Tt(i),"itemsWrapperRef",void 0),dt(Tt(i),"itemsListRef",void 0),dt(Tt(i),"thumbsRef",void 0),dt(Tt(i),"setItemsWrapperRef",function(s){i.itemsWrapperRef=s}),dt(Tt(i),"setItemsListRef",function(s){i.itemsListRef=s}),dt(Tt(i),"setThumbsRef",function(s,o){i.thumbsRef||(i.thumbsRef=[]),i.thumbsRef[o]=s}),dt(Tt(i),"updateSizes",function(){if(!(!i.props.children||!i.itemsWrapperRef||!i.thumbsRef)){var s=fn.Children.count(i.props.children),o=i.itemsWrapperRef.clientWidth,a=i.props.thumbWidth?i.props.thumbWidth:(0,jL.outerWidth)(i.thumbsRef[0]),u=Math.floor(o/a),c=u<s,d=c?s-u:0;i.setState(function(h,g){return{itemSize:a,visibleItems:u,firstItem:c?i.getFirstItem(g.selectedItem):0,lastPosition:d,showArrows:c}})}}),dt(Tt(i),"handleClickItem",function(s,o,a){if(!KL(a)||a.key==="Enter"){var u=i.props.onSelectItem;typeof u=="function"&&u(s,o)}}),dt(Tt(i),"onSwipeStart",function(){i.setState({swiping:!0})}),dt(Tt(i),"onSwipeEnd",function(){i.setState({swiping:!1})}),dt(Tt(i),"onSwipeMove",function(s){var o=s.x;if(!i.state.itemSize||!i.itemsWrapperRef||!i.state.visibleItems)return!1;var a=0,u=fn.Children.count(i.props.children),c=-(i.state.firstItem*100)/i.state.visibleItems,d=Math.max(u-i.state.visibleItems,0),h=-d*100/i.state.visibleItems;c===a&&o>0&&(o=0),c===h&&o<0&&(o=0);var g=i.itemsWrapperRef.clientWidth,_=c+100/(g/o);return i.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(I){i.itemsListRef.style[I]=(0,ww.default)(_,"%",i.props.axis)}),!0}),dt(Tt(i),"slideRight",function(s){i.moveTo(i.state.firstItem-(typeof s=="number"?s:1))}),dt(Tt(i),"slideLeft",function(s){i.moveTo(i.state.firstItem+(typeof s=="number"?s:1))}),dt(Tt(i),"moveTo",function(s){s=s<0?0:s,s=s>=i.state.lastPosition?i.state.lastPosition:s,i.setState({firstItem:s})}),i.state={selectedItem:r.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},i}return $L(n,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(i){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==i.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,ku.default)().addEventListener("resize",this.updateSizes),(0,ku.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,ku.default)().removeEventListener("resize",this.updateSizes),(0,ku.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(i){var s=i;return i>=this.state.lastPosition&&(s=this.state.lastPosition),i<this.state.firstItem+this.state.visibleItems&&(s=this.state.firstItem),i<this.state.firstItem&&(s=i),s}},{key:"renderItems",value:function(){var i=this;return this.props.children.map(function(s,o){var a=bi.default.ITEM(!1,o===i.state.selectedItem),u={key:o,ref:function(d){return i.setThumbsRef(d,o)},className:a,onClick:i.handleClickItem.bind(i,o,i.props.children[o]),onKeyDown:i.handleClickItem.bind(i,o,i.props.children[o]),"aria-label":"".concat(i.props.labels.item," ").concat(o+1),style:{width:i.props.thumbWidth}};return fn.default.createElement("li",Nm({},u,{role:"button",tabIndex:0}),s)})}},{key:"render",value:function(){var i=this;if(!this.props.children)return null;var s=fn.Children.count(this.props.children)>1,o=this.state.showArrows&&this.state.firstItem>0,a=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,u={},c=-this.state.firstItem*(this.state.itemSize||0),d=(0,ww.default)(c,"px",this.props.axis),h=this.props.transitionTime+"ms";return u={WebkitTransform:d,MozTransform:d,MsTransform:d,OTransform:d,transform:d,msTransform:d,WebkitTransitionDuration:h,MozTransitionDuration:h,MsTransitionDuration:h,OTransitionDuration:h,transitionDuration:h,msTransitionDuration:h},fn.default.createElement("div",{className:bi.default.CAROUSEL(!1)},fn.default.createElement("div",{className:bi.default.WRAPPER(!1),ref:this.setItemsWrapperRef},fn.default.createElement("button",{type:"button",className:bi.default.ARROW_PREV(!o),onClick:function(){return i.slideRight()},"aria-label":this.props.labels.leftArrow}),s?fn.default.createElement(VL.default,{tagName:"ul",className:bi.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:u,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):fn.default.createElement("ul",{className:bi.default.SLIDER(!1,this.state.swiping),ref:function(_){return i.setItemsListRef(_)},style:u},this.renderItems()),fn.default.createElement("button",{type:"button",className:bi.default.ARROW_NEXT(!a),onClick:function(){return i.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),n}(fn.Component);jl.default=Q1;dt(Q1,"displayName","Thumbs");dt(Q1,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350});var Sh={};Object.defineProperty(Sh,"__esModule",{value:!0});Sh.default=void 0;var GL=function(){return document};Sh.default=GL;var Bt={};Object.defineProperty(Bt,"__esModule",{value:!0});Bt.setPosition=Bt.getPosition=Bt.isKeyboardEvent=Bt.defaultStatusFormatter=Bt.noop=void 0;var QL=M,YL=XL(ko);function XL(t){return t&&t.__esModule?t:{default:t}}var JL=function(){};Bt.noop=JL;var ZL=function(e,n){return"".concat(e," of ").concat(n)};Bt.defaultStatusFormatter=ZL;var eM=function(e){return e?e.hasOwnProperty("key"):!1};Bt.isKeyboardEvent=eM;var tM=function(e,n){if(n.infiniteLoop&&++e,e===0)return 0;var r=QL.Children.count(n.children);if(n.centerMode&&n.axis==="horizontal"){var i=-e*n.centerSlidePercentage,s=r-1;return e&&(e!==s||n.infiniteLoop)?i+=(100-n.centerSlidePercentage)/2:e===s&&(i+=100-n.centerSlidePercentage),i}return-e*100};Bt.getPosition=tM;var nM=function(e,n){var r={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(i){r[i]=(0,YL.default)(e,"%",n)}),r};Bt.setPosition=nM;var Mn={};Object.defineProperty(Mn,"__esModule",{value:!0});Mn.fadeAnimationHandler=Mn.slideStopSwipingHandler=Mn.slideSwipeAnimationHandler=Mn.slideAnimationHandler=void 0;var Tx=M,rM=iM(ko),jn=Bt;function iM(t){return t&&t.__esModule?t:{default:t}}function Ew(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Li(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ew(Object(n),!0).forEach(function(r){sM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ew(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function sM(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var oM=function(e,n){var r={},i=n.selectedItem,s=i,o=Tx.Children.count(e.children)-1,a=e.infiniteLoop&&(i<0||i>o);if(a)return s<0?e.centerMode&&e.centerSlidePercentage&&e.axis==="horizontal"?r.itemListStyle=(0,jn.setPosition)(-(o+2)*e.centerSlidePercentage-(100-e.centerSlidePercentage)/2,e.axis):r.itemListStyle=(0,jn.setPosition)(-(o+2)*100,e.axis):s>o&&(r.itemListStyle=(0,jn.setPosition)(0,e.axis)),r;var u=(0,jn.getPosition)(i,e),c=(0,rM.default)(u,"%",e.axis),d=e.transitionTime+"ms";return r.itemListStyle={WebkitTransform:c,msTransform:c,OTransform:c,transform:c},n.swiping||(r.itemListStyle=Li(Li({},r.itemListStyle),{},{WebkitTransitionDuration:d,MozTransitionDuration:d,OTransitionDuration:d,transitionDuration:d,msTransitionDuration:d})),r};Mn.slideAnimationHandler=oM;var aM=function(e,n,r,i){var s={},o=n.axis==="horizontal",a=Tx.Children.count(n.children),u=0,c=(0,jn.getPosition)(r.selectedItem,n),d=n.infiniteLoop?(0,jn.getPosition)(a-1,n)-100:(0,jn.getPosition)(a-1,n),h=o?e.x:e.y,g=h;c===u&&h>0&&(g=0),c===d&&h<0&&(g=0);var _=c+100/(r.itemSize/g),I=Math.abs(h)>n.swipeScrollTolerance;return n.infiniteLoop&&I&&(r.selectedItem===0&&_>-100?_-=a*100:r.selectedItem===a-1&&_<-a*100&&(_+=a*100)),(!n.preventMovementUntilSwipeScrollTolerance||I||r.swipeMovementStarted)&&(r.swipeMovementStarted||i({swipeMovementStarted:!0}),s.itemListStyle=(0,jn.setPosition)(_,n.axis)),I&&!r.cancelClick&&i({cancelClick:!0}),s};Mn.slideSwipeAnimationHandler=aM;var lM=function(e,n){var r=(0,jn.getPosition)(n.selectedItem,e),i=(0,jn.setPosition)(r,e.axis);return{itemListStyle:i}};Mn.slideStopSwipingHandler=lM;var uM=function(e,n){var r=e.transitionTime+"ms",i="ease-in-out",s={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:i,msTransitionTimingFunction:i,MozTransitionTimingFunction:i,WebkitTransitionTimingFunction:i,OTransitionTimingFunction:i};return n.swiping||(s=Li(Li({},s),{},{WebkitTransitionDuration:r,MozTransitionDuration:r,OTransitionDuration:r,transitionDuration:r,msTransitionDuration:r})),{slideStyle:s,selectedStyle:Li(Li({},s),{},{opacity:1,position:"relative"}),prevStyle:Li({},s)}};Mn.fadeAnimationHandler=uM;Object.defineProperty(_h,"__esModule",{value:!0});_h.default=void 0;var he=hM(M),cM=Fl(G1),or=Fl(Ml),dM=Fl(jl),Nu=Fl(Sh),Ou=Fl(Vl),ga=Bt,gd=Mn;function Fl(t){return t&&t.__esModule?t:{default:t}}function Ix(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return Ix=function(){return t},t}function hM(t){if(t&&t.__esModule)return t;if(t===null||Oa(t)!=="object"&&typeof t!="function")return{default:t};var e=Ix();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var s=r?Object.getOwnPropertyDescriptor(t,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=t[i]}return n.default=t,e&&e.set(t,n),n}function Oa(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Oa=function(n){return typeof n}:Oa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Oa(t)}function Dm(){return Dm=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Dm.apply(this,arguments)}function Sw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function pn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Sw(Object(n),!0).forEach(function(r){ee(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Sw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function fM(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function pM(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function mM(t,e,n){return e&&pM(t.prototype,e),t}function gM(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Lm(t,e)}function Lm(t,e){return Lm=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Lm(t,e)}function yM(t){var e=_M();return function(){var r=yd(t),i;if(e){var s=yd(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return vM(this,i)}}function vM(t,e){return e&&(Oa(e)==="object"||typeof e=="function")?e:te(t)}function te(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _M(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function yd(t){return yd=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},yd(t)}function ee(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Y1=function(t){gM(n,t);var e=yM(n);function n(r){var i;fM(this,n),i=e.call(this,r),ee(te(i),"thumbsRef",void 0),ee(te(i),"carouselWrapperRef",void 0),ee(te(i),"listRef",void 0),ee(te(i),"itemsRef",void 0),ee(te(i),"timer",void 0),ee(te(i),"animationHandler",void 0),ee(te(i),"setThumbsRef",function(o){i.thumbsRef=o}),ee(te(i),"setCarouselWrapperRef",function(o){i.carouselWrapperRef=o}),ee(te(i),"setListRef",function(o){i.listRef=o}),ee(te(i),"setItemsRef",function(o,a){i.itemsRef||(i.itemsRef=[]),i.itemsRef[a]=o}),ee(te(i),"autoPlay",function(){he.Children.count(i.props.children)<=1||(i.clearAutoPlay(),i.props.autoPlay&&(i.timer=setTimeout(function(){i.increment()},i.props.interval)))}),ee(te(i),"clearAutoPlay",function(){i.timer&&clearTimeout(i.timer)}),ee(te(i),"resetAutoPlay",function(){i.clearAutoPlay(),i.autoPlay()}),ee(te(i),"stopOnHover",function(){i.setState({isMouseEntered:!0},i.clearAutoPlay)}),ee(te(i),"startOnLeave",function(){i.setState({isMouseEntered:!1},i.autoPlay)}),ee(te(i),"isFocusWithinTheCarousel",function(){return i.carouselWrapperRef?!!((0,Nu.default)().activeElement===i.carouselWrapperRef||i.carouselWrapperRef.contains((0,Nu.default)().activeElement)):!1}),ee(te(i),"navigateWithKeyboard",function(o){if(i.isFocusWithinTheCarousel()){var a=i.props.axis,u=a==="horizontal",c={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},d=u?c.ArrowRight:c.ArrowDown,h=u?c.ArrowLeft:c.ArrowUp;d===o.keyCode?i.increment():h===o.keyCode&&i.decrement()}}),ee(te(i),"updateSizes",function(){if(!(!i.state.initialized||!i.itemsRef||i.itemsRef.length===0)){var o=i.props.axis==="horizontal",a=i.itemsRef[0];if(a){var u=o?a.clientWidth:a.clientHeight;i.setState({itemSize:u}),i.thumbsRef&&i.thumbsRef.updateSizes()}}}),ee(te(i),"setMountState",function(){i.setState({hasMount:!0}),i.updateSizes()}),ee(te(i),"handleClickItem",function(o,a){if(he.Children.count(i.props.children)!==0){if(i.state.cancelClick){i.setState({cancelClick:!1});return}i.props.onClickItem(o,a),o!==i.state.selectedItem&&i.setState({selectedItem:o})}}),ee(te(i),"handleOnChange",function(o,a){he.Children.count(i.props.children)<=1||i.props.onChange(o,a)}),ee(te(i),"handleClickThumb",function(o,a){i.props.onClickThumb(o,a),i.moveTo(o)}),ee(te(i),"onSwipeStart",function(o){i.setState({swiping:!0}),i.props.onSwipeStart(o)}),ee(te(i),"onSwipeEnd",function(o){i.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),i.props.onSwipeEnd(o),i.clearAutoPlay(),i.state.autoPlay&&i.autoPlay()}),ee(te(i),"onSwipeMove",function(o,a){i.props.onSwipeMove(a);var u=i.props.swipeAnimationHandler(o,i.props,i.state,i.setState.bind(te(i)));return i.setState(pn({},u)),!!Object.keys(u).length}),ee(te(i),"decrement",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i.moveTo(i.state.selectedItem-(typeof o=="number"?o:1))}),ee(te(i),"increment",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i.moveTo(i.state.selectedItem+(typeof o=="number"?o:1))}),ee(te(i),"moveTo",function(o){if(typeof o=="number"){var a=he.Children.count(i.props.children)-1;o<0&&(o=i.props.infiniteLoop?a:0),o>a&&(o=i.props.infiniteLoop?0:a),i.selectItem({selectedItem:o}),i.state.autoPlay&&i.state.isMouseEntered===!1&&i.resetAutoPlay()}}),ee(te(i),"onClickNext",function(){i.increment(1)}),ee(te(i),"onClickPrev",function(){i.decrement(1)}),ee(te(i),"onSwipeForward",function(){i.increment(1),i.props.emulateTouch&&i.setState({cancelClick:!0})}),ee(te(i),"onSwipeBackwards",function(){i.decrement(1),i.props.emulateTouch&&i.setState({cancelClick:!0})}),ee(te(i),"changeItem",function(o){return function(a){(!(0,ga.isKeyboardEvent)(a)||a.key==="Enter")&&i.moveTo(o)}}),ee(te(i),"selectItem",function(o){i.setState(pn({previousItem:i.state.selectedItem},o),function(){i.setState(i.animationHandler(i.props,i.state))}),i.handleOnChange(o.selectedItem,he.Children.toArray(i.props.children)[o.selectedItem])}),ee(te(i),"getInitialImage",function(){var o=i.props.selectedItem,a=i.itemsRef&&i.itemsRef[o],u=a&&a.getElementsByTagName("img")||[];return u[0]}),ee(te(i),"getVariableItemHeight",function(o){var a=i.itemsRef&&i.itemsRef[o];if(i.state.hasMount&&a&&a.children.length){var u=a.children[0].getElementsByTagName("img")||[];if(u.length>0){var c=u[0];if(!c.complete){var d=function _(){i.forceUpdate(),c.removeEventListener("load",_)};c.addEventListener("load",d)}}var h=u[0]||a.children[0],g=h.clientHeight;return g>0?g:null}return null});var s={initialized:!1,previousItem:r.selectedItem,selectedItem:r.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:r.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return i.animationHandler=typeof r.animationHandler=="function"&&r.animationHandler||r.animationHandler==="fade"&&gd.fadeAnimationHandler||gd.slideAnimationHandler,i.state=pn(pn({},s),i.animationHandler(r,s)),i}return mM(n,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(i,s){!i.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!i.autoFocus&&this.props.autoFocus&&this.forceFocus(),s.swiping&&!this.state.swiping&&this.setState(pn({},this.props.stopSwipingHandler(this.props,this.state))),(i.selectedItem!==this.props.selectedItem||i.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),i.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var i=this;this.bindEvents(),this.state.autoPlay&&he.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var s=i.getInitialImage();s&&!s.complete?s.addEventListener("load",i.setMountState):i.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var i=this.carouselWrapperRef;this.props.stopOnHover&&i&&(i.addEventListener("mouseenter",this.stopOnHover),i.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var i=this.carouselWrapperRef;this.props.stopOnHover&&i&&(i.removeEventListener("mouseenter",this.stopOnHover),i.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,Ou.default)().addEventListener("resize",this.updateSizes),(0,Ou.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,Nu.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,Ou.default)().removeEventListener("resize",this.updateSizes),(0,Ou.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var i=this.getInitialImage();i&&i.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,Nu.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var i;(i=this.carouselWrapperRef)===null||i===void 0||i.focus()}},{key:"renderItems",value:function(i){var s=this;return this.props.children?he.Children.map(this.props.children,function(o,a){var u=a===s.state.selectedItem,c=a===s.state.previousItem,d=u&&s.state.selectedStyle||c&&s.state.prevStyle||s.state.slideStyle||{};s.props.centerMode&&s.props.axis==="horizontal"&&(d=pn(pn({},d),{},{minWidth:s.props.centerSlidePercentage+"%"})),s.state.swiping&&s.state.swipeMovementStarted&&(d=pn(pn({},d),{},{pointerEvents:"none"}));var h={ref:function(_){return s.setItemsRef(_,a)},key:"itemKey"+a+(i?"clone":""),className:or.default.ITEM(!0,a===s.state.selectedItem,a===s.state.previousItem),onClick:s.handleClickItem.bind(s,a,o),style:d};return he.default.createElement("li",h,s.props.renderItem(o,{isSelected:a===s.state.selectedItem,isPrevious:a===s.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var i=this,s=this.props,o=s.showIndicators,a=s.labels,u=s.renderIndicator,c=s.children;return o?he.default.createElement("ul",{className:"control-dots"},he.Children.map(c,function(d,h){return u&&u(i.changeItem(h),h===i.state.selectedItem,h,a.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?he.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,he.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||he.Children.count(this.props.children)===0?null:he.default.createElement(dM.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var i=this;if(!this.props.children||he.Children.count(this.props.children)===0)return null;var s=this.props.swipeable&&he.Children.count(this.props.children)>1,o=this.props.axis==="horizontal",a=this.props.showArrows&&he.Children.count(this.props.children)>1,u=a&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,c=a&&(this.state.selectedItem<he.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,d=this.renderItems(!0),h=d.shift(),g=d.pop(),_={className:or.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},I={};if(o){if(_.onSwipeLeft=this.onSwipeForward,_.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var R=this.getVariableItemHeight(this.state.selectedItem);I.height=R||"auto"}}else _.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,_.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,_.style=pn(pn({},_.style),{},{height:this.state.itemSize}),I.height=this.state.itemSize;return he.default.createElement("div",{"aria-label":this.props.ariaLabel,className:or.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},he.default.createElement("div",{className:or.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,u,this.props.labels.leftArrow),he.default.createElement("div",{className:or.default.WRAPPER(!0,this.props.axis),style:I},s?he.default.createElement(cM.default,Dm({tagName:"ul",innerRef:this.setListRef},_,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&g,this.renderItems(),this.props.infiniteLoop&&h):he.default.createElement("ul",{className:or.default.SLIDER(!0,this.state.swiping),ref:function(E){return i.setListRef(E)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&g,this.renderItems(),this.props.infiniteLoop&&h)),this.props.renderArrowNext(this.onClickNext,c,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),n}(he.default.Component);_h.default=Y1;ee(Y1,"displayName","Carousel");ee(Y1,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:ga.noop,onClickThumb:ga.noop,onChange:ga.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(e,n,r){return he.default.createElement("button",{type:"button","aria-label":r,className:or.default.ARROW_PREV(!n),onClick:e})},renderArrowNext:function(e,n,r){return he.default.createElement("button",{type:"button","aria-label":r,className:or.default.ARROW_NEXT(!n),onClick:e})},renderIndicator:function(e,n,r,i){return he.default.createElement("li",{className:or.default.DOT(n),onClick:e,onKeyDown:e,value:r,key:r,role:"button",tabIndex:0,"aria-label":"".concat(i," ").concat(r+1)})},renderItem:function(e){return e},renderThumbs:function(e){var n=he.Children.map(e,function(r){var i=r;if(r.type!=="img"&&(i=he.Children.toArray(r.props.children).find(function(s){return s.type==="img"})),!!i)return i});return n.filter(function(r){return r}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):n},statusFormatter:ga.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:gd.slideSwipeAnimationHandler,stopSwipingHandler:gd.slideStopSwipingHandler});var wM={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Carousel",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(t,"CarouselProps",{enumerable:!0,get:function(){return n.CarouselProps}}),Object.defineProperty(t,"Thumbs",{enumerable:!0,get:function(){return r.default}});var e=i(_h),n=wM,r=i(jl);function i(s){return s&&s.__esModule?s:{default:s}}})(wx);const EM="/freshbiteapp_Reactjs/assets/one-Bl1X0hia.jpg",SM="/freshbiteapp_Reactjs/assets/two-D1T_uKJo.jpg",TM="/freshbiteapp_Reactjs/assets/three-CQaFSR_i.jpg",IM="/freshbiteapp_Reactjs/assets/four-CTeATtrS.jpg",xM=be.section`
    display: block;
    margin: 7rem auto 3rem auto;
    width: 85%;
    font-family: "poppins", sans-serif;
    #first-section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        #first {
            width: 45%;
            margin: 1rem 0rem 0rem 0rem;
            p {
                font-size: .9rem;
            }
            .shield {
                display: flex;
                flex-direction: row;
                h6 {
                    font-size: 1.3rem;
                    margin: 0rem 0rem .4rem .5rem;
                }
            }
            .para p {
                font-size: .9rem;
                color: #696969;
            }
            #para-shield {
                
            }
        }
        img {
            width: 35rem;
            height: 40rem;
        }
    }
    .image {
        height: 15rem;
    }
    .card-title {
        margin: 1rem 0rem 1rem 0rem;
    }
    .card-text {
        font-size: .9rem;
    }
    .link {
        text-decoration: none;
        color: red;
        text-align: left;
    }
    @media (max-width: 2000px) and (min-width: 1390px) {
        width: 90%;
        #first-section {
            img {
                width: 38rem;
            }
            #first {
                width: 50%;
                margin: 1rem 0rem 0rem 0rem;
                p {
                    font-size: 1.1rem;
                }
                .shield {
                    display: flex;
                    flex-direction: row;
                    h6 {
                        font-size: 1.3rem;
                        margin: 0rem 0rem .4rem .5rem;
                    }
                }
                .para p {
                    font-size: 1rem;
                    color: #696969;
                }
            }
        }
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        width: 90%;
        #first-section {
            img {
                width: 30rem;
                height: 35rem;
            }
            #first {
                width: 45%;
                margin: 1rem 0rem 0rem 0rem;
                p {
                    font-size: .8rem;
                }
                .shield {
                    display: flex;
                    flex-direction: row;
                    h6 {
                        font-size: 1rem;
                        margin: 0rem 0rem .4rem .5rem;
                    }
                    .icon {
                        width: 1.1rem;
                        height: 1.1rem;
                    }
                }
                .para p {
                    font-size: .7rem;
                    color: #696969;
                }
            }
        }
        .image {
            width: 19rem;
            height: 13rem;
        }
        .card-title {
            font-size: 1.1rem;
        }
        .card-text {
            font-size: .8rem;
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        width: 90%;
        #first-section {
            img {
                width: 20rem;
                height: 25rem;
            }
            #first {
                width: 45%;
                margin: 1rem 0rem 0rem 0rem;
                p {
                    font-size: .8rem;
                }
                #para-shield {
                    display: none;
                }
                .shield {
                    display: flex;
                    flex-direction: row;
                    h6 {
                        font-size: 1rem;
                        margin: 0rem 0rem .4rem .5rem;
                    }
                    .icon {
                        width: 1.1rem;
                        height: 1.1rem;
                    }
                }
                .para p {
                    font-size: .7rem;
                    color: #696969;
                }
            }
        }
        .image {
            width: 18rem;
            height: 10rem;
        }
        .card-title {
            font-size: 1rem;
        }
        .card-text {
            font-size: .7rem;
        }
        .link {
            font-size: .7rem;
        }
    }
    @media (max-width: 599px) and (min-width: 400px) {
        width: 90%;
        #first-section {
            display: flex;
            flex-direction: column-reverse;
            img {
                display: block;
                margin: 0rem auto 0rem auto;
                width: 25rem;
                height: 25rem;
            }
            #first {
                width: 100%;
                margin: 1rem 0rem 0rem 0rem;
                text-align: center;
                p {
                    font-size: .8rem;
                }
                #para-shield {
                    /* display: none; */
                }
                .shield {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    h6 {
                        font-size: 1rem;
                        margin: 0rem 0rem .4rem .5rem;
                    }
                    .icon {
                        width: 1.1rem;
                        height: 1.1rem;
                    }
                }
                .para p {
                    font-size: .7rem;
                    color: #696969;
                }
            }
        }
        
    }
    @media (max-width: 399px) and (min-width: 0px) {
        width: 90%;
        #first-section {
            display: flex;
            flex-direction: column-reverse;
            img {
                display: block;
                margin: 0rem auto 0rem auto;
                width: 18rem;
                height: 21rem;
            }
            #first {
                width: 100%;
                margin: 1rem 0rem 0rem 0rem;
                text-align: center;
                p {
                    font-size: .8rem;
                }
                #para-shield {
                    /* display: none; */
                }
                .shield {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    h6 {
                        font-size: 1rem;
                        margin: 0rem 0rem .4rem .5rem;
                    }
                    .icon {
                        width: 1.1rem;
                        height: 1.1rem;
                    }
                }
                .para p {
                    font-size: .7rem;
                    color: #696969;
                }
            }
        }
    }
`,CM=()=>{const[t,e]=M.useState(!0);M.useEffect(()=>{const r=setTimeout(()=>{e(!1)},3e3);return()=>clearTimeout(r)},[]);const n=[{id:1,title:"Master the Art of Cooking Delicious, Healthy Veggie-Based Dishes Today",description:"your ultimate guide to creating delicious, nutritious, and vibrant meals using fresh vegetables. Whether you're a seasoned chef or a home cook....",img:`${EM}`},{id:2,title:"Explore New Flavors with Simple, Fresh, and Nutritious Vegetable Recipes",description:"your ultimate guide to creating delicious, nutritious, and vibrant meals using fresh vegetables. Whether you're a seasoned chef or a home cook....",img:`${SM}`},{id:3,title:"Delight in Healthy Cooking with Fresh Vegetables for Every Meal",description:"your ultimate guide to creating delicious, nutritious, and vibrant meals using fresh vegetables. Whether you're a seasoned chef or a home cook....",img:`${TM}`},{id:4,title:"Transform Your Meals with Vibrant, Flavorful, and Easy Vegetable Recipes",description:"your ultimate guide to creating delicious, nutritious, and vibrant meals using fresh vegetables. Whether you're a seasoned chef or a home cook....",img:`${IM}`}];return p.jsx(p.Fragment,{children:t?p.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",p.jsx(bo,{size:60,color:"red"})," "]}):p.jsxs(xM,{children:[p.jsxs("div",{id:"first-section",children:[p.jsxs("div",{id:"first",children:[p.jsx("p",{children:"At TastyDaily, we are committed to providing you with the freshest and highest-quality groceries at affordable prices. Our mission is to simplify your shopping experience, save you time, and ensure you have access to a wide range of products to meet all your household needs."}),p.jsx("p",{children:"TastyDaily is a leading online grocery store that brings convenience to your doorstep. We understand the importance of fresh and nutritious food for a healthy lifestyle, and we strive to make it easy for you to access a diverse selection of groceries."}),p.jsx("p",{children:"To be the go-to destination for customers seeking the freshest produce, pantry staples, and household essentials while delivering exceptional customer service and an effortless online shopping experience."}),p.jsxs("div",{id:"para-shield",children:[p.jsxs("div",{className:"para",children:[p.jsxs("div",{className:"shield",children:[p.jsx(h7,{size:"1.5rem",className:"icon"}),p.jsx("h6",{children:"Quality"})]}),p.jsx("p",{children:"We source our products from reputable suppliers to ensure you receive only the best quality items."})]}),p.jsxs("div",{className:"para",children:[p.jsxs("div",{className:"shield",children:[p.jsx(xL,{size:"1.5rem",className:"icon"}),p.jsx("h6",{children:"Customer Support"})]}),p.jsx("p",{children:"Our friendly and knowledgeable customer support team is available to assist you with any inquiries or concerns."})]}),p.jsxs("div",{className:"para",children:[p.jsxs("div",{className:"shield",children:[p.jsx(z3,{size:"1.7rem",className:"icon"}),p.jsx("h6",{children:"Fast Delivery"})]}),p.jsx("p",{children:"We ensure your order reaches your doorstep promptly and in pristine condition."})]})]})]}),p.jsx("div",{children:p.jsx("img",{src:IL,alt:"about"})})]}),p.jsx("div",{style:{marginTop:"7rem"},children:p.jsxs("div",{className:"container mt-3",children:[p.jsx("h1",{className:"container",children:"Our Blog"}),p.jsx(wx.Carousel,{showArrows:!0,showThumbs:!1,infiniteLoop:!0,autoPlay:!0,interval:5e3,showStatus:!0,centerMode:!0,centerSlidePercentage:30,swipeable:!0,emulateTouch:!0,showIndicators:!1,useKeyboardArrows:!0,children:n.map(r=>p.jsx("div",{className:"row card",style:{margin:"10px"},children:p.jsxs("div",{className:"card-body",children:[p.jsx("img",{src:r.img,alt:"one",className:"image"}),p.jsx("h5",{className:"card-title",children:r.title.slice(0,40)}),p.jsx("p",{className:"card-text",children:r.description}),p.jsx("a",{className:"link",children:"Read More"})]})},r.id))})]})})]})})},RM=t=>{const e={};return p.jsx(YI.Provider,{value:e,children:t.children})},PM=be.div`
    box-sizing: border-box;
    margin: 0%;
    max-width: 100%;
    height: auto;
`,AM=()=>{const t=Hd();return M.useEffect(()=>{t(cL())},[t]),p.jsx(p.Fragment,{children:p.jsx(RM,{children:p.jsxs(PM,{children:[p.jsxs(AR,{children:[p.jsx(Nn,{path:"/",element:p.jsx(ow,{})}),p.jsx(Nn,{path:"/Home",element:p.jsx(ow,{})}),p.jsx(Nn,{path:"/Login",element:p.jsx(MO,{})}),p.jsx(Nn,{path:"/Register",element:p.jsx(OO,{})}),p.jsx(Nn,{path:"/shop",element:p.jsx(mL,{})}),p.jsx(Nn,{path:"/ProductDetail",element:p.jsxs(p.Fragment,{children:[p.jsx(aa,{}),p.jsx(yL,{}),p.jsx(pa,{})]})}),p.jsx(Nn,{path:"/checkout",element:p.jsxs(p.Fragment,{children:[p.jsx(aa,{}),p.jsx(_L,{}),p.jsx(pa,{})]})}),p.jsx(Nn,{path:"/Cart",element:p.jsxs(p.Fragment,{children:[p.jsx(aa,{}),p.jsx(TL,{}),p.jsx(pa,{})]})}),p.jsx(Nn,{path:"/About",element:p.jsxs(p.Fragment,{children:[p.jsx(aa,{}),p.jsx(CM,{}),p.jsx(pa,{})]})})]}),p.jsx(OP,{})]})})})},Kf=WD("products/fetchProducts",async()=>(await Gi(Wn(Hn,"shop"))).docs.map(n=>({id:n.id,...n.data()}))),xx=mx({name:"products",initialState:{products:[],filteredProducts:[],load:!1,error:null},reducers:{searchProduct:(t,e)=>{const n=e.payload.toLowerCase();t.filteredProducts=t.products.filter(r=>r.name.toLowerCase().includes(n))}},extraReducers:t=>{t.addCase(Kf.pending,e=>{e.load=!0}).addCase(Kf.fulfilled,(e,n)=>{e.load=!1,e.products=n.payload,e.filteredProducts=n.payload}).addCase(Kf.rejected,(e,n)=>{e.load=!1,e.error=n.error.message})}});xx.actions;const bM=xx.reducer,kM=LD({reducer:{cart:fL,product:bM},devTools:!0}),NM=Qf.createRoot(document.getElementById("root"));NM.render(p.jsx(xt.StrictMode,{children:p.jsx(e6,{store:kM,children:p.jsx(jR,{children:p.jsx(AM,{})})})}));
