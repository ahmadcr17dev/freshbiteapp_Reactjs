function eI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function A_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var R_={exports:{}},qc={},k_={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),tI=Symbol.for("react.portal"),nI=Symbol.for("react.fragment"),rI=Symbol.for("react.strict_mode"),iI=Symbol.for("react.profiler"),sI=Symbol.for("react.provider"),oI=Symbol.for("react.context"),aI=Symbol.for("react.forward_ref"),lI=Symbol.for("react.suspense"),uI=Symbol.for("react.memo"),cI=Symbol.for("react.lazy"),i1=Symbol.iterator;function dI(t){return t===null||typeof t!="object"?null:(t=i1&&t[i1]||t["@@iterator"],typeof t=="function"?t:null)}var P_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b_=Object.assign,N_={};function lo(t,e,n){this.props=t,this.context=e,this.refs=N_,this.updater=n||P_}lo.prototype.isReactComponent={};lo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};lo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function O_(){}O_.prototype=lo.prototype;function Gp(t,e,n){this.props=t,this.context=e,this.refs=N_,this.updater=n||P_}var Kp=Gp.prototype=new O_;Kp.constructor=Gp;b_(Kp,lo.prototype);Kp.isPureReactComponent=!0;var s1=Array.isArray,D_=Object.prototype.hasOwnProperty,Qp={current:null},j_={key:!0,ref:!0,__self:!0,__source:!0};function L_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)D_.call(e,r)&&!j_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ka,type:t,key:s,ref:o,props:i,_owner:Qp.current}}function hI(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function fI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var o1=/\/+/g;function fh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fI(""+t.key):e.toString(36)}function uu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ka:case tI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+fh(o,0):r,s1(i)?(n="",t!=null&&(n=t.replace(o1,"$&/")+"/"),uu(i,e,n,"",function(c){return c})):i!=null&&(Yp(i)&&(i=hI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(o1,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",s1(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+fh(s,a);o+=uu(s,e,n,u,i)}else if(u=dI(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+fh(s,a++),o+=uu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ol(t,e,n){if(t==null)return t;var r=[],i=0;return uu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function pI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},cu={transition:null},mI={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:cu,ReactCurrentOwner:Qp};function M_(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Ol,forEach:function(t,e,n){Ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ol(t,function(){e++}),e},toArray:function(t){return Ol(t,function(e){return e})||[]},only:function(t){if(!Yp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=lo;ee.Fragment=nI;ee.Profiler=iI;ee.PureComponent=Gp;ee.StrictMode=rI;ee.Suspense=lI;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mI;ee.act=M_;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=b_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)D_.call(e,u)&&!j_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ka,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:oI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sI,_context:t},t.Consumer=t};ee.createElement=L_;ee.createFactory=function(t){var e=L_.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:aI,render:t}};ee.isValidElement=Yp;ee.lazy=function(t){return{$$typeof:cI,_payload:{_status:-1,_result:t},_init:pI}};ee.memo=function(t,e){return{$$typeof:uI,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=cu.transition;cu.transition={};try{t()}finally{cu.transition=e}};ee.unstable_act=M_;ee.useCallback=function(t,e){return Tt.current.useCallback(t,e)};ee.useContext=function(t){return Tt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return Tt.current.useEffect(t,e)};ee.useId=function(){return Tt.current.useId()};ee.useImperativeHandle=function(t,e,n){return Tt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return Tt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return Tt.current.useReducer(t,e,n)};ee.useRef=function(t){return Tt.current.useRef(t)};ee.useState=function(t){return Tt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return Tt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return Tt.current.useTransition()};ee.version="18.3.1";k_.exports=ee;var j=k_.exports;const wt=A_(j),lf=eI({__proto__:null,default:wt},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gI=j,yI=Symbol.for("react.element"),vI=Symbol.for("react.fragment"),_I=Object.prototype.hasOwnProperty,wI=gI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,EI={key:!0,ref:!0,__self:!0,__source:!0};function V_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_I.call(e,r)&&!EI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:yI,type:t,key:s,ref:o,props:i,_owner:wI.current}}qc.Fragment=vI;qc.jsx=V_;qc.jsxs=V_;R_.exports=qc;var d=R_.exports,uf={},F_={exports:{}},Gt={},z_={exports:{}},U_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,G){var Q=$.length;$.push(G);e:for(;0<Q;){var ue=Q-1>>>1,te=$[ue];if(0<i(te,G))$[ue]=G,$[Q]=te,Q=ue;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var G=$[0],Q=$.pop();if(Q!==G){$[0]=Q;e:for(var ue=0,te=$.length,Ee=te>>>1;ue<Ee;){var Dt=2*(ue+1)-1,It=$[Dt],gt=Dt+1,Ct=$[gt];if(0>i(It,Q))gt<te&&0>i(Ct,It)?($[ue]=Ct,$[gt]=Q,ue=gt):($[ue]=It,$[Dt]=Q,ue=Dt);else if(gt<te&&0>i(Ct,Q))$[ue]=Ct,$[gt]=Q,ue=gt;else break e}}return G}function i($,G){var Q=$.sortIndex-G.sortIndex;return Q!==0?Q:$.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,p=null,g=3,v=!1,S=!1,C=!1,R=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y($){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=$)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function k($){if(C=!1,y($),!S)if(n(u)!==null)S=!0,di(D);else{var G=n(c);G!==null&&Ot(k,G.startTime-$)}}function D($,G){S=!1,C&&(C=!1,T(_),_=-1),v=!0;var Q=g;try{for(y(G),p=n(u);p!==null&&(!(p.expirationTime>G)||$&&!b());){var ue=p.callback;if(typeof ue=="function"){p.callback=null,g=p.priorityLevel;var te=ue(p.expirationTime<=G);G=t.unstable_now(),typeof te=="function"?p.callback=te:p===n(u)&&r(u),y(G)}else r(u);p=n(u)}if(p!==null)var Ee=!0;else{var Dt=n(c);Dt!==null&&Ot(k,Dt.startTime-G),Ee=!1}return Ee}finally{p=null,g=Q,v=!1}}var L=!1,x=null,_=-1,I=5,A=-1;function b(){return!(t.unstable_now()-A<I)}function N(){if(x!==null){var $=t.unstable_now();A=$;var G=!0;try{G=x(!0,$)}finally{G?P():(L=!1,x=null)}}else L=!1}var P;if(typeof w=="function")P=function(){w(N)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,$n=St.port2;St.port1.onmessage=N,P=function(){$n.postMessage(null)}}else P=function(){R(N,0)};function di($){x=$,L||(L=!0,P())}function Ot($,G){_=R(function(){$(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){S||v||(S=!0,di(D))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Q=g;g=G;try{return $()}finally{g=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,G){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Q=g;g=$;try{return G()}finally{g=Q}},t.unstable_scheduleCallback=function($,G,Q){var ue=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ue+Q:ue):Q=ue,$){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=Q+te,$={id:h++,callback:G,priorityLevel:$,startTime:Q,expirationTime:te,sortIndex:-1},Q>ue?($.sortIndex=Q,e(c,$),n(u)===null&&$===n(c)&&(C?(T(_),_=-1):C=!0,Ot(k,Q-ue))):($.sortIndex=te,e(u,$),S||v||(S=!0,di(D))),$},t.unstable_shouldYield=b,t.unstable_wrapCallback=function($){var G=g;return function(){var Q=g;g=G;try{return $.apply(this,arguments)}finally{g=Q}}}})(U_);z_.exports=U_;var TI=z_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xI=j,Wt=TI;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $_=new Set,ma={};function Yi(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(ma[t]=e,t=0;t<e.length;t++)$_.add(e[t])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cf=Object.prototype.hasOwnProperty,SI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,a1={},l1={};function II(t){return cf.call(l1,t)?!0:cf.call(a1,t)?!1:SI.test(t)?l1[t]=!0:(a1[t]=!0,!1)}function CI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function AI(t,e,n,r){if(e===null||typeof e>"u"||CI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xp=/[\-:]([a-z])/g;function Jp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xp,Jp);nt[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xp,Jp);nt[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xp,Jp);nt[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zp(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(AI(e,n,i,r)&&(n=null),r||i===null?II(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mr=xI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dl=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),em=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),B_=Symbol.for("react.provider"),W_=Symbol.for("react.context"),tm=Symbol.for("react.forward_ref"),hf=Symbol.for("react.suspense"),ff=Symbol.for("react.suspense_list"),nm=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),q_=Symbol.for("react.offscreen"),u1=Symbol.iterator;function No(t){return t===null||typeof t!="object"?null:(t=u1&&t[u1]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,ph;function $o(t){if(ph===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ph=e&&e[1]||""}return`
`+ph+t}var mh=!1;function gh(t,e){if(!t||mh)return"";mh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{mh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$o(t):""}function RI(t){switch(t.tag){case 5:return $o(t.type);case 16:return $o("Lazy");case 13:return $o("Suspense");case 19:return $o("SuspenseList");case 0:case 2:case 15:return t=gh(t.type,!1),t;case 11:return t=gh(t.type.render,!1),t;case 1:return t=gh(t.type,!0),t;default:return""}}function pf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case df:return"Profiler";case em:return"StrictMode";case hf:return"Suspense";case ff:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case W_:return(t.displayName||"Context")+".Consumer";case B_:return(t._context.displayName||"Context")+".Provider";case tm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nm:return e=t.displayName||null,e!==null?e:pf(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return pf(t(e))}catch{}}return null}function kI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pf(e);case 8:return e===em?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function H_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function PI(t){var e=H_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jl(t){t._valueTracker||(t._valueTracker=PI(t))}function G_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=H_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mf(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function c1(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function K_(t,e){e=e.checked,e!=null&&Zp(t,"checked",e,!1)}function gf(t,e){K_(t,e);var n=Yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yf(t,e.type,n):e.hasOwnProperty("defaultValue")&&yf(t,e.type,Yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function d1(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yf(t,e,n){(e!=="number"||Fu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bo=Array.isArray;function Rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function h1(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Bo(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yr(n)}}function Q_(t,e){var n=Yr(e.value),r=Yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function f1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Y_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _f(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Y_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ll,X_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ll=Ll||document.createElement("div"),Ll.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ll.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bI=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(t){bI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ea[e]=ea[t]})});function J_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ea.hasOwnProperty(t)&&ea[t]?(""+e).trim():e+"px"}function Z_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=J_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var NI=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wf(t,e){if(e){if(NI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Ef(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tf=null;function rm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xf=null,ks=null,Ps=null;function p1(t){if(t=Xa(t)){if(typeof xf!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Yc(e),xf(t.stateNode,t.type,e))}}function ew(t){ks?Ps?Ps.push(t):Ps=[t]:ks=t}function tw(){if(ks){var t=ks,e=Ps;if(Ps=ks=null,p1(t),e)for(t=0;t<e.length;t++)p1(e[t])}}function nw(t,e){return t(e)}function rw(){}var yh=!1;function iw(t,e,n){if(yh)return t(e,n);yh=!0;try{return nw(t,e,n)}finally{yh=!1,(ks!==null||Ps!==null)&&(rw(),tw())}}function ya(t,e){var n=t.stateNode;if(n===null)return null;var r=Yc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Sf=!1;if(sr)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Sf=!1}function OI(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ta=!1,zu=null,Uu=!1,If=null,DI={onError:function(t){ta=!0,zu=t}};function jI(t,e,n,r,i,s,o,a,u){ta=!1,zu=null,OI.apply(DI,arguments)}function LI(t,e,n,r,i,s,o,a,u){if(jI.apply(this,arguments),ta){if(ta){var c=zu;ta=!1,zu=null}else throw Error(z(198));Uu||(Uu=!0,If=c)}}function Xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m1(t){if(Xi(t)!==t)throw Error(z(188))}function MI(t){var e=t.alternate;if(!e){if(e=Xi(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return m1(i),t;if(s===r)return m1(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function ow(t){return t=MI(t),t!==null?aw(t):null}function aw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=aw(t);if(e!==null)return e;t=t.sibling}return null}var lw=Wt.unstable_scheduleCallback,g1=Wt.unstable_cancelCallback,VI=Wt.unstable_shouldYield,FI=Wt.unstable_requestPaint,De=Wt.unstable_now,zI=Wt.unstable_getCurrentPriorityLevel,im=Wt.unstable_ImmediatePriority,uw=Wt.unstable_UserBlockingPriority,$u=Wt.unstable_NormalPriority,UI=Wt.unstable_LowPriority,cw=Wt.unstable_IdlePriority,Hc=null,kn=null;function $I(t){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(Hc,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:qI,BI=Math.log,WI=Math.LN2;function qI(t){return t>>>=0,t===0?32:31-(BI(t)/WI|0)|0}var Ml=64,Vl=4194304;function Wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Wo(a):(s&=o,s!==0&&(r=Wo(s)))}else o=n&~i,o!==0?r=Wo(o):s!==0&&(r=Wo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function HI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=HI(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Cf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dw(){var t=Ml;return Ml<<=1,!(Ml&4194240)&&(Ml=64),t}function vh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function KI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function sm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function hw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fw,om,pw,mw,gw,Af=!1,Fl=[],Mr=null,Vr=null,Fr=null,va=new Map,_a=new Map,Ar=[],QI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function y1(t,e){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function Do(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xa(e),e!==null&&om(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function YI(t,e,n,r,i){switch(e){case"focusin":return Mr=Do(Mr,t,e,n,r,i),!0;case"dragenter":return Vr=Do(Vr,t,e,n,r,i),!0;case"mouseover":return Fr=Do(Fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return va.set(s,Do(va.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_a.set(s,Do(_a.get(s)||null,t,e,n,r,i)),!0}return!1}function yw(t){var e=Si(t.target);if(e!==null){var n=Xi(e);if(n!==null){if(e=n.tag,e===13){if(e=sw(n),e!==null){t.blockedOn=e,gw(t.priority,function(){pw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function du(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Tf=r,n.target.dispatchEvent(r),Tf=null}else return e=Xa(n),e!==null&&om(e),t.blockedOn=n,!1;e.shift()}return!0}function v1(t,e,n){du(t)&&n.delete(e)}function XI(){Af=!1,Mr!==null&&du(Mr)&&(Mr=null),Vr!==null&&du(Vr)&&(Vr=null),Fr!==null&&du(Fr)&&(Fr=null),va.forEach(v1),_a.forEach(v1)}function jo(t,e){t.blockedOn===e&&(t.blockedOn=null,Af||(Af=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,XI)))}function wa(t){function e(i){return jo(i,t)}if(0<Fl.length){jo(Fl[0],t);for(var n=1;n<Fl.length;n++){var r=Fl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mr!==null&&jo(Mr,t),Vr!==null&&jo(Vr,t),Fr!==null&&jo(Fr,t),va.forEach(e),_a.forEach(e),n=0;n<Ar.length;n++)r=Ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ar.length&&(n=Ar[0],n.blockedOn===null);)yw(n),n.blockedOn===null&&Ar.shift()}var bs=mr.ReactCurrentBatchConfig,Wu=!0;function JI(t,e,n,r){var i=ce,s=bs.transition;bs.transition=null;try{ce=1,am(t,e,n,r)}finally{ce=i,bs.transition=s}}function ZI(t,e,n,r){var i=ce,s=bs.transition;bs.transition=null;try{ce=4,am(t,e,n,r)}finally{ce=i,bs.transition=s}}function am(t,e,n,r){if(Wu){var i=Rf(t,e,n,r);if(i===null)Rh(t,e,r,qu,n),y1(t,r);else if(YI(i,t,e,n,r))r.stopPropagation();else if(y1(t,r),e&4&&-1<QI.indexOf(t)){for(;i!==null;){var s=Xa(i);if(s!==null&&fw(s),s=Rf(t,e,n,r),s===null&&Rh(t,e,r,qu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Rh(t,e,r,null,n)}}var qu=null;function Rf(t,e,n,r){if(qu=null,t=rm(r),t=Si(t),t!==null)if(e=Xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qu=t,null}function vw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zI()){case im:return 1;case uw:return 4;case $u:case UI:return 16;case cw:return 536870912;default:return 16}default:return 16}}var Or=null,lm=null,hu=null;function _w(){if(hu)return hu;var t,e=lm,n=e.length,r,i="value"in Or?Or.value:Or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return hu=i.slice(t,1<r?1-r:void 0)}function fu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zl(){return!0}function _1(){return!1}function Kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zl:_1,this.isPropagationStopped=_1,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),e}var uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},um=Kt(uo),Ya=Ce({},uo,{view:0,detail:0}),e5=Kt(Ya),_h,wh,Lo,Gc=Ce({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Lo&&(Lo&&t.type==="mousemove"?(_h=t.screenX-Lo.screenX,wh=t.screenY-Lo.screenY):wh=_h=0,Lo=t),_h)},movementY:function(t){return"movementY"in t?t.movementY:wh}}),w1=Kt(Gc),t5=Ce({},Gc,{dataTransfer:0}),n5=Kt(t5),r5=Ce({},Ya,{relatedTarget:0}),Eh=Kt(r5),i5=Ce({},uo,{animationName:0,elapsedTime:0,pseudoElement:0}),s5=Kt(i5),o5=Ce({},uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),a5=Kt(o5),l5=Ce({},uo,{data:0}),E1=Kt(l5),u5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h5(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=d5[t])?!!e[t]:!1}function cm(){return h5}var f5=Ce({},Ya,{key:function(t){if(t.key){var e=u5[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?c5[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cm,charCode:function(t){return t.type==="keypress"?fu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),p5=Kt(f5),m5=Ce({},Gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T1=Kt(m5),g5=Ce({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cm}),y5=Kt(g5),v5=Ce({},uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),_5=Kt(v5),w5=Ce({},Gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),E5=Kt(w5),T5=[9,13,27,32],dm=sr&&"CompositionEvent"in window,na=null;sr&&"documentMode"in document&&(na=document.documentMode);var x5=sr&&"TextEvent"in window&&!na,ww=sr&&(!dm||na&&8<na&&11>=na),x1=" ",S1=!1;function Ew(t,e){switch(t){case"keyup":return T5.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function S5(t,e){switch(t){case"compositionend":return Tw(e);case"keypress":return e.which!==32?null:(S1=!0,x1);case"textInput":return t=e.data,t===x1&&S1?null:t;default:return null}}function I5(t,e){if(ys)return t==="compositionend"||!dm&&Ew(t,e)?(t=_w(),hu=lm=Or=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ww&&e.locale!=="ko"?null:e.data;default:return null}}var C5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function I1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!C5[t.type]:e==="textarea"}function xw(t,e,n,r){ew(r),e=Hu(e,"onChange"),0<e.length&&(n=new um("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ra=null,Ea=null;function A5(t){Dw(t,0)}function Kc(t){var e=ws(t);if(G_(e))return t}function R5(t,e){if(t==="change")return e}var Sw=!1;if(sr){var Th;if(sr){var xh="oninput"in document;if(!xh){var C1=document.createElement("div");C1.setAttribute("oninput","return;"),xh=typeof C1.oninput=="function"}Th=xh}else Th=!1;Sw=Th&&(!document.documentMode||9<document.documentMode)}function A1(){ra&&(ra.detachEvent("onpropertychange",Iw),Ea=ra=null)}function Iw(t){if(t.propertyName==="value"&&Kc(Ea)){var e=[];xw(e,Ea,t,rm(t)),iw(A5,e)}}function k5(t,e,n){t==="focusin"?(A1(),ra=e,Ea=n,ra.attachEvent("onpropertychange",Iw)):t==="focusout"&&A1()}function P5(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kc(Ea)}function b5(t,e){if(t==="click")return Kc(e)}function N5(t,e){if(t==="input"||t==="change")return Kc(e)}function O5(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tn=typeof Object.is=="function"?Object.is:O5;function Ta(t,e){if(Tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cf.call(e,i)||!Tn(t[i],e[i]))return!1}return!0}function R1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function k1(t,e){var n=R1(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=R1(n)}}function Cw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Aw(){for(var t=window,e=Fu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fu(t.document)}return e}function hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function D5(t){var e=Aw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cw(n.ownerDocument.documentElement,n)){if(r!==null&&hm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=k1(n,s);var o=k1(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var j5=sr&&"documentMode"in document&&11>=document.documentMode,vs=null,kf=null,ia=null,Pf=!1;function P1(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pf||vs==null||vs!==Fu(r)||(r=vs,"selectionStart"in r&&hm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ia&&Ta(ia,r)||(ia=r,r=Hu(kf,"onSelect"),0<r.length&&(e=new um("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vs)))}function Ul(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _s={animationend:Ul("Animation","AnimationEnd"),animationiteration:Ul("Animation","AnimationIteration"),animationstart:Ul("Animation","AnimationStart"),transitionend:Ul("Transition","TransitionEnd")},Sh={},Rw={};sr&&(Rw=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Qc(t){if(Sh[t])return Sh[t];if(!_s[t])return t;var e=_s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rw)return Sh[t]=e[n];return t}var kw=Qc("animationend"),Pw=Qc("animationiteration"),bw=Qc("animationstart"),Nw=Qc("transitionend"),Ow=new Map,b1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ri(t,e){Ow.set(t,e),Yi(e,[t])}for(var Ih=0;Ih<b1.length;Ih++){var Ch=b1[Ih],L5=Ch.toLowerCase(),M5=Ch[0].toUpperCase()+Ch.slice(1);ri(L5,"on"+M5)}ri(kw,"onAnimationEnd");ri(Pw,"onAnimationIteration");ri(bw,"onAnimationStart");ri("dblclick","onDoubleClick");ri("focusin","onFocus");ri("focusout","onBlur");ri(Nw,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V5=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function N1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,LI(r,e,void 0,t),t.currentTarget=null}function Dw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;N1(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;N1(i,a,c),s=u}}}if(Uu)throw t=If,Uu=!1,If=null,t}function ye(t,e){var n=e[jf];n===void 0&&(n=e[jf]=new Set);var r=t+"__bubble";n.has(r)||(jw(e,t,2,!1),n.add(r))}function Ah(t,e,n){var r=0;e&&(r|=4),jw(n,t,r,e)}var $l="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[$l]){t[$l]=!0,$_.forEach(function(n){n!=="selectionchange"&&(V5.has(n)||Ah(n,!1,t),Ah(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$l]||(e[$l]=!0,Ah("selectionchange",!1,e))}}function jw(t,e,n,r){switch(vw(e)){case 1:var i=JI;break;case 4:i=ZI;break;default:i=am}n=i.bind(null,e,n,t),i=void 0,!Sf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Rh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Si(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}iw(function(){var c=s,h=rm(n),p=[];e:{var g=Ow.get(t);if(g!==void 0){var v=um,S=t;switch(t){case"keypress":if(fu(n)===0)break e;case"keydown":case"keyup":v=p5;break;case"focusin":S="focus",v=Eh;break;case"focusout":S="blur",v=Eh;break;case"beforeblur":case"afterblur":v=Eh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=w1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=n5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=y5;break;case kw:case Pw:case bw:v=s5;break;case Nw:v=_5;break;case"scroll":v=e5;break;case"wheel":v=E5;break;case"copy":case"cut":case"paste":v=a5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=T1}var C=(e&4)!==0,R=!C&&t==="scroll",T=C?g!==null?g+"Capture":null:g;C=[];for(var w=c,y;w!==null;){y=w;var k=y.stateNode;if(y.tag===5&&k!==null&&(y=k,T!==null&&(k=ya(w,T),k!=null&&C.push(Sa(w,k,y)))),R)break;w=w.return}0<C.length&&(g=new v(g,S,null,n,h),p.push({event:g,listeners:C}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&n!==Tf&&(S=n.relatedTarget||n.fromElement)&&(Si(S)||S[or]))break e;if((v||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,v?(S=n.relatedTarget||n.toElement,v=c,S=S?Si(S):null,S!==null&&(R=Xi(S),S!==R||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=c),v!==S)){if(C=w1,k="onMouseLeave",T="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(C=T1,k="onPointerLeave",T="onPointerEnter",w="pointer"),R=v==null?g:ws(v),y=S==null?g:ws(S),g=new C(k,w+"leave",v,n,h),g.target=R,g.relatedTarget=y,k=null,Si(h)===c&&(C=new C(T,w+"enter",S,n,h),C.target=y,C.relatedTarget=R,k=C),R=k,v&&S)t:{for(C=v,T=S,w=0,y=C;y;y=cs(y))w++;for(y=0,k=T;k;k=cs(k))y++;for(;0<w-y;)C=cs(C),w--;for(;0<y-w;)T=cs(T),y--;for(;w--;){if(C===T||T!==null&&C===T.alternate)break t;C=cs(C),T=cs(T)}C=null}else C=null;v!==null&&O1(p,g,v,C,!1),S!==null&&R!==null&&O1(p,R,S,C,!0)}}e:{if(g=c?ws(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var D=R5;else if(I1(g))if(Sw)D=N5;else{D=P5;var L=k5}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(D=b5);if(D&&(D=D(t,c))){xw(p,D,n,h);break e}L&&L(t,g,c),t==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&yf(g,"number",g.value)}switch(L=c?ws(c):window,t){case"focusin":(I1(L)||L.contentEditable==="true")&&(vs=L,kf=c,ia=null);break;case"focusout":ia=kf=vs=null;break;case"mousedown":Pf=!0;break;case"contextmenu":case"mouseup":case"dragend":Pf=!1,P1(p,n,h);break;case"selectionchange":if(j5)break;case"keydown":case"keyup":P1(p,n,h)}var x;if(dm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ys?Ew(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(ww&&n.locale!=="ko"&&(ys||_!=="onCompositionStart"?_==="onCompositionEnd"&&ys&&(x=_w()):(Or=h,lm="value"in Or?Or.value:Or.textContent,ys=!0)),L=Hu(c,_),0<L.length&&(_=new E1(_,t,null,n,h),p.push({event:_,listeners:L}),x?_.data=x:(x=Tw(n),x!==null&&(_.data=x)))),(x=x5?S5(t,n):I5(t,n))&&(c=Hu(c,"onBeforeInput"),0<c.length&&(h=new E1("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=x))}Dw(p,e)})}function Sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ya(t,n),s!=null&&r.unshift(Sa(t,s,i)),s=ya(t,e),s!=null&&r.push(Sa(t,s,i))),t=t.return}return r}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function O1(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ya(n,s),u!=null&&o.unshift(Sa(n,u,a))):i||(u=ya(n,s),u!=null&&o.push(Sa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var F5=/\r\n?/g,z5=/\u0000|\uFFFD/g;function D1(t){return(typeof t=="string"?t:""+t).replace(F5,`
`).replace(z5,"")}function Bl(t,e,n){if(e=D1(e),D1(t)!==e&&n)throw Error(z(425))}function Gu(){}var bf=null,Nf=null;function Of(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Df=typeof setTimeout=="function"?setTimeout:void 0,U5=typeof clearTimeout=="function"?clearTimeout:void 0,j1=typeof Promise=="function"?Promise:void 0,$5=typeof queueMicrotask=="function"?queueMicrotask:typeof j1<"u"?function(t){return j1.resolve(null).then(t).catch(B5)}:Df;function B5(t){setTimeout(function(){throw t})}function kh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),wa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wa(e)}function zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function L1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var co=Math.random().toString(36).slice(2),Rn="__reactFiber$"+co,Ia="__reactProps$"+co,or="__reactContainer$"+co,jf="__reactEvents$"+co,W5="__reactListeners$"+co,q5="__reactHandles$"+co;function Si(t){var e=t[Rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[or]||n[Rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=L1(t);t!==null;){if(n=t[Rn])return n;t=L1(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[Rn]||t[or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Yc(t){return t[Ia]||null}var Lf=[],Es=-1;function ii(t){return{current:t}}function _e(t){0>Es||(t.current=Lf[Es],Lf[Es]=null,Es--)}function me(t,e){Es++,Lf[Es]=t.current,t.current=e}var Xr={},ft=ii(Xr),Pt=ii(!1),Mi=Xr;function Us(t,e){var n=t.type.contextTypes;if(!n)return Xr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function bt(t){return t=t.childContextTypes,t!=null}function Ku(){_e(Pt),_e(ft)}function M1(t,e,n){if(ft.current!==Xr)throw Error(z(168));me(ft,e),me(Pt,n)}function Lw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,kI(t)||"Unknown",i));return Ce({},n,r)}function Qu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xr,Mi=ft.current,me(ft,t),me(Pt,Pt.current),!0}function V1(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=Lw(t,e,Mi),r.__reactInternalMemoizedMergedChildContext=t,_e(Pt),_e(ft),me(ft,t)):_e(Pt),me(Pt,n)}var Yn=null,Xc=!1,Ph=!1;function Mw(t){Yn===null?Yn=[t]:Yn.push(t)}function H5(t){Xc=!0,Mw(t)}function si(){if(!Ph&&Yn!==null){Ph=!0;var t=0,e=ce;try{var n=Yn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Yn=null,Xc=!1}catch(i){throw Yn!==null&&(Yn=Yn.slice(t+1)),lw(im,si),i}finally{ce=e,Ph=!1}}return null}var Ts=[],xs=0,Yu=null,Xu=0,Yt=[],Xt=0,Vi=null,Xn=1,Jn="";function vi(t,e){Ts[xs++]=Xu,Ts[xs++]=Yu,Yu=t,Xu=e}function Vw(t,e,n){Yt[Xt++]=Xn,Yt[Xt++]=Jn,Yt[Xt++]=Vi,Vi=t;var r=Xn;t=Jn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var s=32-yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xn=1<<32-yn(e)+i|n<<i|r,Jn=s+t}else Xn=1<<s|n<<i|r,Jn=t}function fm(t){t.return!==null&&(vi(t,1),Vw(t,1,0))}function pm(t){for(;t===Yu;)Yu=Ts[--xs],Ts[xs]=null,Xu=Ts[--xs],Ts[xs]=null;for(;t===Vi;)Vi=Yt[--Xt],Yt[Xt]=null,Jn=Yt[--Xt],Yt[Xt]=null,Xn=Yt[--Xt],Yt[Xt]=null}var Ut=null,Vt=null,Te=!1,dn=null;function Fw(t,e){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function F1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Vt=zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vi!==null?{id:Xn,overflow:Jn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Vt=null,!0):!1;default:return!1}}function Mf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vf(t){if(Te){var e=Vt;if(e){var n=e;if(!F1(t,e)){if(Mf(t))throw Error(z(418));e=zr(n.nextSibling);var r=Ut;e&&F1(t,e)?Fw(r,n):(t.flags=t.flags&-4097|2,Te=!1,Ut=t)}}else{if(Mf(t))throw Error(z(418));t.flags=t.flags&-4097|2,Te=!1,Ut=t}}}function z1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function Wl(t){if(t!==Ut)return!1;if(!Te)return z1(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Of(t.type,t.memoizedProps)),e&&(e=Vt)){if(Mf(t))throw zw(),Error(z(418));for(;e;)Fw(t,e),e=zr(e.nextSibling)}if(z1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vt=zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vt=null}}else Vt=Ut?zr(t.stateNode.nextSibling):null;return!0}function zw(){for(var t=Vt;t;)t=zr(t.nextSibling)}function $s(){Vt=Ut=null,Te=!1}function mm(t){dn===null?dn=[t]:dn.push(t)}var G5=mr.ReactCurrentBatchConfig;function Mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function ql(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function U1(t){var e=t._init;return e(t._payload)}function Uw(t){function e(T,w){if(t){var y=T.deletions;y===null?(T.deletions=[w],T.flags|=16):y.push(w)}}function n(T,w){if(!t)return null;for(;w!==null;)e(T,w),w=w.sibling;return null}function r(T,w){for(T=new Map;w!==null;)w.key!==null?T.set(w.key,w):T.set(w.index,w),w=w.sibling;return T}function i(T,w){return T=Wr(T,w),T.index=0,T.sibling=null,T}function s(T,w,y){return T.index=y,t?(y=T.alternate,y!==null?(y=y.index,y<w?(T.flags|=2,w):y):(T.flags|=2,w)):(T.flags|=1048576,w)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,w,y,k){return w===null||w.tag!==6?(w=Mh(y,T.mode,k),w.return=T,w):(w=i(w,y),w.return=T,w)}function u(T,w,y,k){var D=y.type;return D===gs?h(T,w,y.props.children,k,y.key):w!==null&&(w.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Sr&&U1(D)===w.type)?(k=i(w,y.props),k.ref=Mo(T,w,y),k.return=T,k):(k=wu(y.type,y.key,y.props,null,T.mode,k),k.ref=Mo(T,w,y),k.return=T,k)}function c(T,w,y,k){return w===null||w.tag!==4||w.stateNode.containerInfo!==y.containerInfo||w.stateNode.implementation!==y.implementation?(w=Vh(y,T.mode,k),w.return=T,w):(w=i(w,y.children||[]),w.return=T,w)}function h(T,w,y,k,D){return w===null||w.tag!==7?(w=bi(y,T.mode,k,D),w.return=T,w):(w=i(w,y),w.return=T,w)}function p(T,w,y){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Mh(""+w,T.mode,y),w.return=T,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Dl:return y=wu(w.type,w.key,w.props,null,T.mode,y),y.ref=Mo(T,null,w),y.return=T,y;case ms:return w=Vh(w,T.mode,y),w.return=T,w;case Sr:var k=w._init;return p(T,k(w._payload),y)}if(Bo(w)||No(w))return w=bi(w,T.mode,y,null),w.return=T,w;ql(T,w)}return null}function g(T,w,y,k){var D=w!==null?w.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return D!==null?null:a(T,w,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Dl:return y.key===D?u(T,w,y,k):null;case ms:return y.key===D?c(T,w,y,k):null;case Sr:return D=y._init,g(T,w,D(y._payload),k)}if(Bo(y)||No(y))return D!==null?null:h(T,w,y,k,null);ql(T,y)}return null}function v(T,w,y,k,D){if(typeof k=="string"&&k!==""||typeof k=="number")return T=T.get(y)||null,a(w,T,""+k,D);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Dl:return T=T.get(k.key===null?y:k.key)||null,u(w,T,k,D);case ms:return T=T.get(k.key===null?y:k.key)||null,c(w,T,k,D);case Sr:var L=k._init;return v(T,w,y,L(k._payload),D)}if(Bo(k)||No(k))return T=T.get(y)||null,h(w,T,k,D,null);ql(w,k)}return null}function S(T,w,y,k){for(var D=null,L=null,x=w,_=w=0,I=null;x!==null&&_<y.length;_++){x.index>_?(I=x,x=null):I=x.sibling;var A=g(T,x,y[_],k);if(A===null){x===null&&(x=I);break}t&&x&&A.alternate===null&&e(T,x),w=s(A,w,_),L===null?D=A:L.sibling=A,L=A,x=I}if(_===y.length)return n(T,x),Te&&vi(T,_),D;if(x===null){for(;_<y.length;_++)x=p(T,y[_],k),x!==null&&(w=s(x,w,_),L===null?D=x:L.sibling=x,L=x);return Te&&vi(T,_),D}for(x=r(T,x);_<y.length;_++)I=v(x,T,_,y[_],k),I!==null&&(t&&I.alternate!==null&&x.delete(I.key===null?_:I.key),w=s(I,w,_),L===null?D=I:L.sibling=I,L=I);return t&&x.forEach(function(b){return e(T,b)}),Te&&vi(T,_),D}function C(T,w,y,k){var D=No(y);if(typeof D!="function")throw Error(z(150));if(y=D.call(y),y==null)throw Error(z(151));for(var L=D=null,x=w,_=w=0,I=null,A=y.next();x!==null&&!A.done;_++,A=y.next()){x.index>_?(I=x,x=null):I=x.sibling;var b=g(T,x,A.value,k);if(b===null){x===null&&(x=I);break}t&&x&&b.alternate===null&&e(T,x),w=s(b,w,_),L===null?D=b:L.sibling=b,L=b,x=I}if(A.done)return n(T,x),Te&&vi(T,_),D;if(x===null){for(;!A.done;_++,A=y.next())A=p(T,A.value,k),A!==null&&(w=s(A,w,_),L===null?D=A:L.sibling=A,L=A);return Te&&vi(T,_),D}for(x=r(T,x);!A.done;_++,A=y.next())A=v(x,T,_,A.value,k),A!==null&&(t&&A.alternate!==null&&x.delete(A.key===null?_:A.key),w=s(A,w,_),L===null?D=A:L.sibling=A,L=A);return t&&x.forEach(function(N){return e(T,N)}),Te&&vi(T,_),D}function R(T,w,y,k){if(typeof y=="object"&&y!==null&&y.type===gs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Dl:e:{for(var D=y.key,L=w;L!==null;){if(L.key===D){if(D=y.type,D===gs){if(L.tag===7){n(T,L.sibling),w=i(L,y.props.children),w.return=T,T=w;break e}}else if(L.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Sr&&U1(D)===L.type){n(T,L.sibling),w=i(L,y.props),w.ref=Mo(T,L,y),w.return=T,T=w;break e}n(T,L);break}else e(T,L);L=L.sibling}y.type===gs?(w=bi(y.props.children,T.mode,k,y.key),w.return=T,T=w):(k=wu(y.type,y.key,y.props,null,T.mode,k),k.ref=Mo(T,w,y),k.return=T,T=k)}return o(T);case ms:e:{for(L=y.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===y.containerInfo&&w.stateNode.implementation===y.implementation){n(T,w.sibling),w=i(w,y.children||[]),w.return=T,T=w;break e}else{n(T,w);break}else e(T,w);w=w.sibling}w=Vh(y,T.mode,k),w.return=T,T=w}return o(T);case Sr:return L=y._init,R(T,w,L(y._payload),k)}if(Bo(y))return S(T,w,y,k);if(No(y))return C(T,w,y,k);ql(T,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,w!==null&&w.tag===6?(n(T,w.sibling),w=i(w,y),w.return=T,T=w):(n(T,w),w=Mh(y,T.mode,k),w.return=T,T=w),o(T)):n(T,w)}return R}var Bs=Uw(!0),$w=Uw(!1),Ju=ii(null),Zu=null,Ss=null,gm=null;function ym(){gm=Ss=Zu=null}function vm(t){var e=Ju.current;_e(Ju),t._currentValue=e}function Ff(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ns(t,e){Zu=t,gm=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(gm!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(Zu===null)throw Error(z(308));Ss=t,Zu.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Ii=null;function _m(t){Ii===null?Ii=[t]:Ii.push(t)}function Bw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_m(e)):(n.next=i.next,i.next=n),e.interleaved=n,ar(t,r)}function ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ir=!1;function wm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ww(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ar(t,n)}return i=r.interleaved,i===null?(e.next=e,_m(r)):(e.next=i.next,i.next=e),r.interleaved=e,ar(t,n)}function pu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sm(t,n)}}function $1(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ec(t,e,n,r){var i=t.updateQueue;Ir=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,h=c=u=null,a=s;do{var g=a.lane,v=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,C=a;switch(g=e,v=n,C.tag){case 1:if(S=C.payload,typeof S=="function"){p=S.call(v,p,g);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=C.payload,g=typeof S=="function"?S.call(v,p,g):S,g==null)break e;p=Ce({},p,g);break e;case 2:Ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=v,u=p):h=h.next=v,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);zi|=o,t.lanes=o,t.memoizedState=p}}function B1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Ja={},Pn=ii(Ja),Ca=ii(Ja),Aa=ii(Ja);function Ci(t){if(t===Ja)throw Error(z(174));return t}function Em(t,e){switch(me(Aa,e),me(Ca,t),me(Pn,Ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_f(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_f(e,t)}_e(Pn),me(Pn,e)}function Ws(){_e(Pn),_e(Ca),_e(Aa)}function qw(t){Ci(Aa.current);var e=Ci(Pn.current),n=_f(e,t.type);e!==n&&(me(Ca,t),me(Pn,n))}function Tm(t){Ca.current===t&&(_e(Pn),_e(Ca))}var xe=ii(0);function tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bh=[];function xm(){for(var t=0;t<bh.length;t++)bh[t]._workInProgressVersionPrimary=null;bh.length=0}var mu=mr.ReactCurrentDispatcher,Nh=mr.ReactCurrentBatchConfig,Fi=0,Ie=null,Ue=null,qe=null,nc=!1,sa=!1,Ra=0,K5=0;function at(){throw Error(z(321))}function Sm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tn(t[n],e[n]))return!1;return!0}function Im(t,e,n,r,i,s){if(Fi=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,mu.current=t===null||t.memoizedState===null?J5:Z5,t=n(r,i),sa){s=0;do{if(sa=!1,Ra=0,25<=s)throw Error(z(301));s+=1,qe=Ue=null,e.updateQueue=null,mu.current=e4,t=n(r,i)}while(sa)}if(mu.current=rc,e=Ue!==null&&Ue.next!==null,Fi=0,qe=Ue=Ie=null,nc=!1,e)throw Error(z(300));return t}function Cm(){var t=Ra!==0;return Ra=0,t}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Ie.memoizedState=qe=t:qe=qe.next=t,qe}function nn(){if(Ue===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=qe===null?Ie.memoizedState:qe.next;if(e!==null)qe=e,Ue=t;else{if(t===null)throw Error(z(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},qe===null?Ie.memoizedState=qe=t:qe=qe.next=t}return qe}function ka(t,e){return typeof e=="function"?e(t):e}function Oh(t){var e=nn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((Fi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,Ie.lanes|=h,zi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Tn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,zi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Dh(t){var e=nn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tn(s,e.memoizedState)||(Rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Hw(){}function Gw(t,e){var n=Ie,r=nn(),i=e(),s=!Tn(r.memoizedState,i);if(s&&(r.memoizedState=i,Rt=!0),r=r.queue,Am(Yw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Pa(9,Qw.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(z(349));Fi&30||Kw(n,e,i)}return i}function Kw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qw(t,e,n,r){e.value=n,e.getSnapshot=r,Xw(e)&&Jw(t)}function Yw(t,e,n){return n(function(){Xw(e)&&Jw(t)})}function Xw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tn(t,n)}catch{return!0}}function Jw(t){var e=ar(t,1);e!==null&&vn(e,t,1,-1)}function W1(t){var e=Cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:t},e.queue=t,t=t.dispatch=X5.bind(null,Ie,t),[e.memoizedState,t]}function Pa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Zw(){return nn().memoizedState}function gu(t,e,n,r){var i=Cn();Ie.flags|=t,i.memoizedState=Pa(1|e,n,void 0,r===void 0?null:r)}function Jc(t,e,n,r){var i=nn();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&Sm(r,o.deps)){i.memoizedState=Pa(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=Pa(1|e,n,s,r)}function q1(t,e){return gu(8390656,8,t,e)}function Am(t,e){return Jc(2048,8,t,e)}function e2(t,e){return Jc(4,2,t,e)}function t2(t,e){return Jc(4,4,t,e)}function n2(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function r2(t,e,n){return n=n!=null?n.concat([t]):null,Jc(4,4,n2.bind(null,e,t),n)}function Rm(){}function i2(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function s2(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function o2(t,e,n){return Fi&21?(Tn(n,e)||(n=dw(),Ie.lanes|=n,zi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function Q5(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Nh.transition;Nh.transition={};try{t(!1),e()}finally{ce=n,Nh.transition=r}}function a2(){return nn().memoizedState}function Y5(t,e,n){var r=Br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},l2(t))u2(e,n);else if(n=Bw(t,e,n,r),n!==null){var i=Et();vn(n,t,r,i),c2(n,e,r)}}function X5(t,e,n){var r=Br(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(l2(t))u2(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Tn(a,o)){var u=e.interleaved;u===null?(i.next=i,_m(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Bw(t,e,i,r),n!==null&&(i=Et(),vn(n,t,r,i),c2(n,e,r))}}function l2(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function u2(t,e){sa=nc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function c2(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sm(t,n)}}var rc={readContext:tn,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},J5={readContext:tn,useCallback:function(t,e){return Cn().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:q1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gu(4194308,4,n2.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gu(4194308,4,t,e)},useInsertionEffect:function(t,e){return gu(4,2,t,e)},useMemo:function(t,e){var n=Cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Y5.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=Cn();return t={current:t},e.memoizedState=t},useState:W1,useDebugValue:Rm,useDeferredValue:function(t){return Cn().memoizedState=t},useTransition:function(){var t=W1(!1),e=t[0];return t=Q5.bind(null,t[1]),Cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=Cn();if(Te){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),Ge===null)throw Error(z(349));Fi&30||Kw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,q1(Yw.bind(null,r,s,t),[t]),r.flags|=2048,Pa(9,Qw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Cn(),e=Ge.identifierPrefix;if(Te){var n=Jn,r=Xn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=K5++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Z5={readContext:tn,useCallback:i2,useContext:tn,useEffect:Am,useImperativeHandle:r2,useInsertionEffect:e2,useLayoutEffect:t2,useMemo:s2,useReducer:Oh,useRef:Zw,useState:function(){return Oh(ka)},useDebugValue:Rm,useDeferredValue:function(t){var e=nn();return o2(e,Ue.memoizedState,t)},useTransition:function(){var t=Oh(ka)[0],e=nn().memoizedState;return[t,e]},useMutableSource:Hw,useSyncExternalStore:Gw,useId:a2,unstable_isNewReconciler:!1},e4={readContext:tn,useCallback:i2,useContext:tn,useEffect:Am,useImperativeHandle:r2,useInsertionEffect:e2,useLayoutEffect:t2,useMemo:s2,useReducer:Dh,useRef:Zw,useState:function(){return Dh(ka)},useDebugValue:Rm,useDeferredValue:function(t){var e=nn();return Ue===null?e.memoizedState=t:o2(e,Ue.memoizedState,t)},useTransition:function(){var t=Dh(ka)[0],e=nn().memoizedState;return[t,e]},useMutableSource:Hw,useSyncExternalStore:Gw,useId:a2,unstable_isNewReconciler:!1};function un(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zc={isMounted:function(t){return(t=t._reactInternals)?Xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Br(t),s=nr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(vn(e,t,i,r),pu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Br(t),s=nr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(vn(e,t,i,r),pu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=Br(t),i=nr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ur(t,i,r),e!==null&&(vn(e,t,r,n),pu(e,t,r))}};function H1(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ta(n,r)||!Ta(i,s):!0}function d2(t,e,n){var r=!1,i=Xr,s=e.contextType;return typeof s=="object"&&s!==null?s=tn(s):(i=bt(e)?Mi:ft.current,r=e.contextTypes,s=(r=r!=null)?Us(t,i):Xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function G1(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zc.enqueueReplaceState(e,e.state,null)}function Uf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},wm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tn(s):(s=bt(e)?Mi:ft.current,i.context=Us(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zc.enqueueReplaceState(i,i.state,null),ec(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function qs(t,e){try{var n="",r=e;do n+=RI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function jh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $f(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var t4=typeof WeakMap=="function"?WeakMap:Map;function h2(t,e,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){sc||(sc=!0,Jf=r),$f(t,e)},n}function f2(t,e,n){n=nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$f(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$f(t,e),typeof r!="function"&&($r===null?$r=new Set([this]):$r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function K1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new t4;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=m4.bind(null,t,e,n),e.then(t,t))}function Q1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Y1(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nr(-1,1),e.tag=2,Ur(n,e,1))),n.lanes|=1),t)}var n4=mr.ReactCurrentOwner,Rt=!1;function _t(t,e,n,r){e.child=t===null?$w(e,null,n,r):Bs(e,t.child,n,r)}function X1(t,e,n,r,i){n=n.render;var s=e.ref;return Ns(e,i),r=Im(t,e,n,r,s,i),n=Cm(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,lr(t,e,i)):(Te&&n&&fm(e),e.flags|=1,_t(t,e,r,i),e.child)}function J1(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Lm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,p2(t,e,s,r,i)):(t=wu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ta,n(o,r)&&t.ref===e.ref)return lr(t,e,i)}return e.flags|=1,t=Wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function p2(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ta(s,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,lr(t,e,i)}return Bf(t,e,n,r,i)}function m2(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Cs,Mt),Mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(Cs,Mt),Mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(Cs,Mt),Mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,me(Cs,Mt),Mt|=r;return _t(t,e,i,n),e.child}function g2(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bf(t,e,n,r,i){var s=bt(n)?Mi:ft.current;return s=Us(e,s),Ns(e,i),n=Im(t,e,n,r,s,i),r=Cm(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,lr(t,e,i)):(Te&&r&&fm(e),e.flags|=1,_t(t,e,n,i),e.child)}function Z1(t,e,n,r,i){if(bt(n)){var s=!0;Qu(e)}else s=!1;if(Ns(e,i),e.stateNode===null)yu(t,e),d2(e,n,r),Uf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=tn(c):(c=bt(n)?Mi:ft.current,c=Us(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&G1(e,o,r,c),Ir=!1;var g=e.memoizedState;o.state=g,ec(e,r,o,i),u=e.memoizedState,a!==r||g!==u||Pt.current||Ir?(typeof h=="function"&&(zf(e,n,h,r),u=e.memoizedState),(a=Ir||H1(e,n,a,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Ww(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:un(e.type,a),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=tn(u):(u=bt(n)?Mi:ft.current,u=Us(e,u));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||g!==u)&&G1(e,o,r,u),Ir=!1,g=e.memoizedState,o.state=g,ec(e,r,o,i);var S=e.memoizedState;a!==p||g!==S||Pt.current||Ir?(typeof v=="function"&&(zf(e,n,v,r),S=e.memoizedState),(c=Ir||H1(e,n,c,r,g,S,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Wf(t,e,n,r,s,i)}function Wf(t,e,n,r,i,s){g2(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&V1(e,n,!1),lr(t,e,s);r=e.stateNode,n4.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bs(e,t.child,null,s),e.child=Bs(e,null,a,s)):_t(t,e,a,s),e.memoizedState=r.state,i&&V1(e,n,!0),e.child}function y2(t){var e=t.stateNode;e.pendingContext?M1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&M1(t,e.context,!1),Em(t,e.containerInfo)}function ey(t,e,n,r,i){return $s(),mm(i),e.flags|=256,_t(t,e,n,r),e.child}var qf={dehydrated:null,treeContext:null,retryLane:0};function Hf(t){return{baseLanes:t,cachePool:null,transitions:null}}function v2(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(xe,i&1),t===null)return Vf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nd(o,r,0,null),t=bi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hf(n),e.memoizedState=qf,t):km(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return r4(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Wr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wr(a,s):(s=bi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qf,r}return s=t.child,t=s.sibling,r=Wr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function km(t,e){return e=nd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Hl(t,e,n,r){return r!==null&&mm(r),Bs(e,t.child,null,n),t=km(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function r4(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=jh(Error(z(422))),Hl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nd({mode:"visible",children:r.children},i,0,null),s=bi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bs(e,t.child,null,o),e.child.memoizedState=Hf(o),e.memoizedState=qf,s);if(!(e.mode&1))return Hl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=jh(s,r,void 0),Hl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Rt||a){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ar(t,i),vn(r,t,i,-1))}return jm(),r=jh(Error(z(421))),Hl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=g4.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Vt=zr(i.nextSibling),Ut=e,Te=!0,dn=null,t!==null&&(Yt[Xt++]=Xn,Yt[Xt++]=Jn,Yt[Xt++]=Vi,Xn=t.id,Jn=t.overflow,Vi=e),e=km(e,r.children),e.flags|=4096,e)}function ty(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ff(t.return,e,n)}function Lh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _2(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(_t(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ty(t,n,e);else if(t.tag===19)ty(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&tc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Lh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&tc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Lh(e,!0,n,null,s);break;case"together":Lh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function i4(t,e,n){switch(e.tag){case 3:y2(e),$s();break;case 5:qw(e);break;case 1:bt(e.type)&&Qu(e);break;case 4:Em(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(Ju,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?v2(t,e,n):(me(xe,xe.current&1),t=lr(t,e,n),t!==null?t.sibling:null);me(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _2(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,m2(t,e,n)}return lr(t,e,n)}var w2,Gf,E2,T2;w2=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gf=function(){};E2=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ci(Pn.current);var s=null;switch(n){case"input":i=mf(t,i),r=mf(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=vf(t,i),r=vf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gu)}wf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ma.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};T2=function(t,e,n,r){n!==r&&(e.flags|=4)};function Vo(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function s4(t,e,n){var r=e.pendingProps;switch(pm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(e),null;case 1:return bt(e.type)&&Ku(),lt(e),null;case 3:return r=e.stateNode,Ws(),_e(Pt),_e(ft),xm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dn!==null&&(tp(dn),dn=null))),Gf(t,e),lt(e),null;case 5:Tm(e);var i=Ci(Aa.current);if(n=e.type,t!==null&&e.stateNode!=null)E2(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return lt(e),null}if(t=Ci(Pn.current),Wl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Rn]=e,r[Ia]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<qo.length;i++)ye(qo[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":c1(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":h1(r,s),ye("invalid",r)}wf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Bl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Bl(r.textContent,a,t),i=["children",""+a]):ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":jl(r),d1(r,s,!0);break;case"textarea":jl(r),f1(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Y_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rn]=e,t[Ia]=r,w2(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ef(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<qo.length;i++)ye(qo[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":c1(t,r),i=mf(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),ye("invalid",t);break;case"textarea":h1(t,r),i=vf(t,r),ye("invalid",t);break;default:i=r}wf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Z_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&X_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ga(t,u):typeof u=="number"&&ga(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ma.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ye("scroll",t):u!=null&&Zp(t,s,u,o))}switch(n){case"input":jl(t),d1(t,r,!1);break;case"textarea":jl(t),f1(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Rs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Gu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return lt(e),null;case 6:if(t&&e.stateNode!=null)T2(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Ci(Aa.current),Ci(Pn.current),Wl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rn]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:Bl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=e,e.stateNode=r}return lt(e),null;case 13:if(_e(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Vt!==null&&e.mode&1&&!(e.flags&128))zw(),$s(),e.flags|=98560,s=!1;else if(s=Wl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[Rn]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;lt(e),s=!1}else dn!==null&&(tp(dn),dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?$e===0&&($e=3):jm())),e.updateQueue!==null&&(e.flags|=4),lt(e),null);case 4:return Ws(),Gf(t,e),t===null&&xa(e.stateNode.containerInfo),lt(e),null;case 10:return vm(e.type._context),lt(e),null;case 17:return bt(e.type)&&Ku(),lt(e),null;case 19:if(_e(xe),s=e.memoizedState,s===null)return lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Vo(s,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=tc(t),o!==null){for(e.flags|=128,Vo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>Hs&&(e.flags|=128,r=!0,Vo(s,!1),e.lanes=4194304)}else{if(!r)if(t=tc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return lt(e),null}else 2*De()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,r=!0,Vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=xe.current,me(xe,r?n&1|2:n&1),e):(lt(e),null);case 22:case 23:return Dm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Mt&1073741824&&(lt(e),e.subtreeFlags&6&&(e.flags|=8192)):lt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function o4(t,e){switch(pm(e),e.tag){case 1:return bt(e.type)&&Ku(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),_e(Pt),_e(ft),xm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tm(e),null;case 13:if(_e(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(xe),null;case 4:return Ws(),null;case 10:return vm(e.type._context),null;case 22:case 23:return Dm(),null;case 24:return null;default:return null}}var Gl=!1,dt=!1,a4=typeof WeakSet=="function"?WeakSet:Set,W=null;function Is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function Kf(t,e,n){try{n()}catch(r){ke(t,e,r)}}var ny=!1;function l4(t,e){if(bf=Wu,t=Aw(),hm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,p=t,g=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===t)break t;if(g===n&&++c===i&&(a=o),g===s&&++h===r&&(u=o),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nf={focusedElem:t,selectionRange:n},Wu=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var C=S.memoizedProps,R=S.memoizedState,T=e.stateNode,w=T.getSnapshotBeforeUpdate(e.elementType===e.type?C:un(e.type,C),R);T.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(k){ke(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return S=ny,ny=!1,S}function oa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kf(e,n,s)}i=i.next}while(i!==r)}}function ed(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function x2(t){var e=t.alternate;e!==null&&(t.alternate=null,x2(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rn],delete e[Ia],delete e[jf],delete e[W5],delete e[q5])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function S2(t){return t.tag===5||t.tag===3||t.tag===4}function ry(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||S2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gu));else if(r!==4&&(t=t.child,t!==null))for(Yf(t,e,n),t=t.sibling;t!==null;)Yf(t,e,n),t=t.sibling}function Xf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xf(t,e,n),t=t.sibling;t!==null;)Xf(t,e,n),t=t.sibling}var Xe=null,cn=!1;function wr(t,e,n){for(n=n.child;n!==null;)I2(t,e,n),n=n.sibling}function I2(t,e,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(Hc,n)}catch{}switch(n.tag){case 5:dt||Is(n,e);case 6:var r=Xe,i=cn;Xe=null,wr(t,e,n),Xe=r,cn=i,Xe!==null&&(cn?(t=Xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(cn?(t=Xe,n=n.stateNode,t.nodeType===8?kh(t.parentNode,n):t.nodeType===1&&kh(t,n),wa(t)):kh(Xe,n.stateNode));break;case 4:r=Xe,i=cn,Xe=n.stateNode.containerInfo,cn=!0,wr(t,e,n),Xe=r,cn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kf(n,e,o),i=i.next}while(i!==r)}wr(t,e,n);break;case 1:if(!dt&&(Is(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ke(n,e,a)}wr(t,e,n);break;case 21:wr(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,wr(t,e,n),dt=r):wr(t,e,n);break;default:wr(t,e,n)}}function iy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new a4),e.forEach(function(r){var i=y4.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xe=a.stateNode,cn=!1;break e;case 3:Xe=a.stateNode.containerInfo,cn=!0;break e;case 4:Xe=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(Xe===null)throw Error(z(160));I2(s,o,i),Xe=null,cn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ke(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)C2(e,t),e=e.sibling}function C2(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),Sn(t),r&4){try{oa(3,t,t.return),ed(3,t)}catch(C){ke(t,t.return,C)}try{oa(5,t,t.return)}catch(C){ke(t,t.return,C)}}break;case 1:an(e,t),Sn(t),r&512&&n!==null&&Is(n,n.return);break;case 5:if(an(e,t),Sn(t),r&512&&n!==null&&Is(n,n.return),t.flags&32){var i=t.stateNode;try{ga(i,"")}catch(C){ke(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&K_(i,s),Ef(a,o);var c=Ef(a,s);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?Z_(i,p):h==="dangerouslySetInnerHTML"?X_(i,p):h==="children"?ga(i,p):Zp(i,h,p,c)}switch(a){case"input":gf(i,s);break;case"textarea":Q_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Rs(i,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?Rs(i,!!s.multiple,s.defaultValue,!0):Rs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ia]=s}catch(C){ke(t,t.return,C)}}break;case 6:if(an(e,t),Sn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){ke(t,t.return,C)}}break;case 3:if(an(e,t),Sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wa(e.containerInfo)}catch(C){ke(t,t.return,C)}break;case 4:an(e,t),Sn(t);break;case 13:an(e,t),Sn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nm=De())),r&4&&iy(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(c=dt)||h,an(e,t),dt=c):an(e,t),Sn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(W=t,h=t.child;h!==null;){for(p=W=h;W!==null;){switch(g=W,v=g.child,g.tag){case 0:case 11:case 14:case 15:oa(4,g,g.return);break;case 1:Is(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(C){ke(r,n,C)}}break;case 5:Is(g,g.return);break;case 22:if(g.memoizedState!==null){oy(p);continue}}v!==null?(v.return=g,W=v):oy(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=J_("display",o))}catch(C){ke(t,t.return,C)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(C){ke(t,t.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:an(e,t),Sn(t),r&4&&iy(t);break;case 21:break;default:an(e,t),Sn(t)}}function Sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(S2(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ga(i,""),r.flags&=-33);var s=ry(t);Xf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ry(t);Yf(t,a,o);break;default:throw Error(z(161))}}catch(u){ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function u4(t,e,n){W=t,A2(t)}function A2(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Gl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||dt;a=Gl;var c=dt;if(Gl=o,(dt=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?ay(i):u!==null?(u.return=o,W=u):ay(i);for(;s!==null;)W=s,A2(s),s=s.sibling;W=i,Gl=a,dt=c}sy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):sy(t)}}function sy(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||ed(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&B1(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}B1(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&wa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}dt||e.flags&512&&Qf(e)}catch(g){ke(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function oy(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function ay(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ed(4,e)}catch(u){ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ke(e,i,u)}}var s=e.return;try{Qf(e)}catch(u){ke(e,s,u)}break;case 5:var o=e.return;try{Qf(e)}catch(u){ke(e,o,u)}}}catch(u){ke(e,e.return,u)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var c4=Math.ceil,ic=mr.ReactCurrentDispatcher,Pm=mr.ReactCurrentOwner,en=mr.ReactCurrentBatchConfig,se=0,Ge=null,Fe=null,et=0,Mt=0,Cs=ii(0),$e=0,ba=null,zi=0,td=0,bm=0,aa=null,At=null,Nm=0,Hs=1/0,Kn=null,sc=!1,Jf=null,$r=null,Kl=!1,Dr=null,oc=0,la=0,Zf=null,vu=-1,_u=0;function Et(){return se&6?De():vu!==-1?vu:vu=De()}function Br(t){return t.mode&1?se&2&&et!==0?et&-et:G5.transition!==null?(_u===0&&(_u=dw()),_u):(t=ce,t!==0||(t=window.event,t=t===void 0?16:vw(t.type)),t):1}function vn(t,e,n,r){if(50<la)throw la=0,Zf=null,Error(z(185));Qa(t,n,r),(!(se&2)||t!==Ge)&&(t===Ge&&(!(se&2)&&(td|=n),$e===4&&Rr(t,et)),Nt(t,r),n===1&&se===0&&!(e.mode&1)&&(Hs=De()+500,Xc&&si()))}function Nt(t,e){var n=t.callbackNode;GI(t,e);var r=Bu(t,t===Ge?et:0);if(r===0)n!==null&&g1(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&g1(n),e===1)t.tag===0?H5(ly.bind(null,t)):Mw(ly.bind(null,t)),$5(function(){!(se&6)&&si()}),n=null;else{switch(hw(r)){case 1:n=im;break;case 4:n=uw;break;case 16:n=$u;break;case 536870912:n=cw;break;default:n=$u}n=j2(n,R2.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function R2(t,e){if(vu=-1,_u=0,se&6)throw Error(z(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var r=Bu(t,t===Ge?et:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ac(t,r);else{e=r;var i=se;se|=2;var s=P2();(Ge!==t||et!==e)&&(Kn=null,Hs=De()+500,Pi(t,e));do try{f4();break}catch(a){k2(t,a)}while(!0);ym(),ic.current=s,se=i,Fe!==null?e=0:(Ge=null,et=0,e=$e)}if(e!==0){if(e===2&&(i=Cf(t),i!==0&&(r=i,e=ep(t,i))),e===1)throw n=ba,Pi(t,0),Rr(t,r),Nt(t,De()),n;if(e===6)Rr(t,r);else{if(i=t.current.alternate,!(r&30)&&!d4(i)&&(e=ac(t,r),e===2&&(s=Cf(t),s!==0&&(r=s,e=ep(t,s))),e===1))throw n=ba,Pi(t,0),Rr(t,r),Nt(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:_i(t,At,Kn);break;case 3:if(Rr(t,r),(r&130023424)===r&&(e=Nm+500-De(),10<e)){if(Bu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Df(_i.bind(null,t,At,Kn),e);break}_i(t,At,Kn);break;case 4:if(Rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*c4(r/1960))-r,10<r){t.timeoutHandle=Df(_i.bind(null,t,At,Kn),r);break}_i(t,At,Kn);break;case 5:_i(t,At,Kn);break;default:throw Error(z(329))}}}return Nt(t,De()),t.callbackNode===n?R2.bind(null,t):null}function ep(t,e){var n=aa;return t.current.memoizedState.isDehydrated&&(Pi(t,e).flags|=256),t=ac(t,e),t!==2&&(e=At,At=n,e!==null&&tp(e)),t}function tp(t){At===null?At=t:At.push.apply(At,t)}function d4(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rr(t,e){for(e&=~bm,e&=~td,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function ly(t){if(se&6)throw Error(z(327));Os();var e=Bu(t,0);if(!(e&1))return Nt(t,De()),null;var n=ac(t,e);if(t.tag!==0&&n===2){var r=Cf(t);r!==0&&(e=r,n=ep(t,r))}if(n===1)throw n=ba,Pi(t,0),Rr(t,e),Nt(t,De()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_i(t,At,Kn),Nt(t,De()),null}function Om(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Hs=De()+500,Xc&&si())}}function Ui(t){Dr!==null&&Dr.tag===0&&!(se&6)&&Os();var e=se;se|=1;var n=en.transition,r=ce;try{if(en.transition=null,ce=1,t)return t()}finally{ce=r,en.transition=n,se=e,!(se&6)&&si()}}function Dm(){Mt=Cs.current,_e(Cs)}function Pi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,U5(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(pm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ku();break;case 3:Ws(),_e(Pt),_e(ft),xm();break;case 5:Tm(r);break;case 4:Ws();break;case 13:_e(xe);break;case 19:_e(xe);break;case 10:vm(r.type._context);break;case 22:case 23:Dm()}n=n.return}if(Ge=t,Fe=t=Wr(t.current,null),et=Mt=e,$e=0,ba=null,bm=td=zi=0,At=aa=null,Ii!==null){for(e=0;e<Ii.length;e++)if(n=Ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ii=null}return t}function k2(t,e){do{var n=Fe;try{if(ym(),mu.current=rc,nc){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nc=!1}if(Fi=0,qe=Ue=Ie=null,sa=!1,Ra=0,Pm.current=null,n===null||n.return===null){$e=1,ba=e,Fe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=et,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Q1(o);if(v!==null){v.flags&=-257,Y1(v,o,a,s,e),v.mode&1&&K1(s,c,e),e=v,u=c;var S=e.updateQueue;if(S===null){var C=new Set;C.add(u),e.updateQueue=C}else S.add(u);break e}else{if(!(e&1)){K1(s,c,e),jm();break e}u=Error(z(426))}}else if(Te&&a.mode&1){var R=Q1(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Y1(R,o,a,s,e),mm(qs(u,a));break e}}s=u=qs(u,a),$e!==4&&($e=2),aa===null?aa=[s]:aa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=h2(s,u,e);$1(s,T);break e;case 1:a=u;var w=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&($r===null||!$r.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var k=f2(s,a,e);$1(s,k);break e}}s=s.return}while(s!==null)}N2(n)}catch(D){e=D,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function P2(){var t=ic.current;return ic.current=rc,t===null?rc:t}function jm(){($e===0||$e===3||$e===2)&&($e=4),Ge===null||!(zi&268435455)&&!(td&268435455)||Rr(Ge,et)}function ac(t,e){var n=se;se|=2;var r=P2();(Ge!==t||et!==e)&&(Kn=null,Pi(t,e));do try{h4();break}catch(i){k2(t,i)}while(!0);if(ym(),se=n,ic.current=r,Fe!==null)throw Error(z(261));return Ge=null,et=0,$e}function h4(){for(;Fe!==null;)b2(Fe)}function f4(){for(;Fe!==null&&!VI();)b2(Fe)}function b2(t){var e=D2(t.alternate,t,Mt);t.memoizedProps=t.pendingProps,e===null?N2(t):Fe=e,Pm.current=null}function N2(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=o4(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,Fe=null;return}}else if(n=s4(n,e,Mt),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);$e===0&&($e=5)}function _i(t,e,n){var r=ce,i=en.transition;try{en.transition=null,ce=1,p4(t,e,n,r)}finally{en.transition=i,ce=r}return null}function p4(t,e,n,r){do Os();while(Dr!==null);if(se&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(KI(t,s),t===Ge&&(Fe=Ge=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Kl||(Kl=!0,j2($u,function(){return Os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=en.transition,en.transition=null;var o=ce;ce=1;var a=se;se|=4,Pm.current=null,l4(t,n),C2(n,t),D5(Nf),Wu=!!bf,Nf=bf=null,t.current=n,u4(n),FI(),se=a,ce=o,en.transition=s}else t.current=n;if(Kl&&(Kl=!1,Dr=t,oc=i),s=t.pendingLanes,s===0&&($r=null),$I(n.stateNode),Nt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sc)throw sc=!1,t=Jf,Jf=null,t;return oc&1&&t.tag!==0&&Os(),s=t.pendingLanes,s&1?t===Zf?la++:(la=0,Zf=t):la=0,si(),null}function Os(){if(Dr!==null){var t=hw(oc),e=en.transition,n=ce;try{if(en.transition=null,ce=16>t?16:t,Dr===null)var r=!1;else{if(t=Dr,Dr=null,oc=0,se&6)throw Error(z(331));var i=se;for(se|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(W=c;W!==null;){var h=W;switch(h.tag){case 0:case 11:case 15:oa(8,h,s)}var p=h.child;if(p!==null)p.return=h,W=p;else for(;W!==null;){h=W;var g=h.sibling,v=h.return;if(x2(h),h===c){W=null;break}if(g!==null){g.return=v,W=g;break}W=v}}}var S=s.alternate;if(S!==null){var C=S.child;if(C!==null){S.child=null;do{var R=C.sibling;C.sibling=null,C=R}while(C!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,W=T;break e}W=s.return}}var w=t.current;for(W=w;W!==null;){o=W;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,W=y;else e:for(o=w;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ed(9,a)}}catch(D){ke(a,a.return,D)}if(a===o){W=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,W=k;break e}W=a.return}}if(se=i,si(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(Hc,t)}catch{}r=!0}return r}finally{ce=n,en.transition=e}}return!1}function uy(t,e,n){e=qs(n,e),e=h2(t,e,1),t=Ur(t,e,1),e=Et(),t!==null&&(Qa(t,1,e),Nt(t,e))}function ke(t,e,n){if(t.tag===3)uy(t,t,n);else for(;e!==null;){if(e.tag===3){uy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($r===null||!$r.has(r))){t=qs(n,t),t=f2(e,t,1),e=Ur(e,t,1),t=Et(),e!==null&&(Qa(e,1,t),Nt(e,t));break}}e=e.return}}function m4(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(et&n)===n&&($e===4||$e===3&&(et&130023424)===et&&500>De()-Nm?Pi(t,0):bm|=n),Nt(t,e)}function O2(t,e){e===0&&(t.mode&1?(e=Vl,Vl<<=1,!(Vl&130023424)&&(Vl=4194304)):e=1);var n=Et();t=ar(t,e),t!==null&&(Qa(t,e,n),Nt(t,n))}function g4(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),O2(t,n)}function y4(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),O2(t,n)}var D2;D2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,i4(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,Te&&e.flags&1048576&&Vw(e,Xu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yu(t,e),t=e.pendingProps;var i=Us(e,ft.current);Ns(e,n),i=Im(null,e,r,t,i,n);var s=Cm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bt(r)?(s=!0,Qu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wm(e),i.updater=Zc,e.stateNode=i,i._reactInternals=e,Uf(e,r,t,n),e=Wf(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&fm(e),_t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_4(r),t=un(r,t),i){case 0:e=Bf(null,e,r,t,n);break e;case 1:e=Z1(null,e,r,t,n);break e;case 11:e=X1(null,e,r,t,n);break e;case 14:e=J1(null,e,r,un(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Bf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Z1(t,e,r,i,n);case 3:e:{if(y2(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Ww(t,e),ec(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=qs(Error(z(423)),e),e=ey(t,e,r,n,i);break e}else if(r!==i){i=qs(Error(z(424)),e),e=ey(t,e,r,n,i);break e}else for(Vt=zr(e.stateNode.containerInfo.firstChild),Ut=e,Te=!0,dn=null,n=$w(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),r===i){e=lr(t,e,n);break e}_t(t,e,r,n)}e=e.child}return e;case 5:return qw(e),t===null&&Vf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Of(r,i)?o=null:s!==null&&Of(r,s)&&(e.flags|=32),g2(t,e),_t(t,e,o,n),e.child;case 6:return t===null&&Vf(e),null;case 13:return v2(t,e,n);case 4:return Em(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bs(e,null,r,n):_t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),X1(t,e,r,i,n);case 7:return _t(t,e,e.pendingProps,n),e.child;case 8:return _t(t,e,e.pendingProps.children,n),e.child;case 12:return _t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,me(Ju,r._currentValue),r._currentValue=o,s!==null)if(Tn(s.value,o)){if(s.children===i.children&&!Pt.current){e=lr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=nr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ff(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ff(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}_t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ns(e,n),i=tn(i),r=r(i),e.flags|=1,_t(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),J1(t,e,r,i,n);case 15:return p2(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),yu(t,e),e.tag=1,bt(r)?(t=!0,Qu(e)):t=!1,Ns(e,n),d2(e,r,i),Uf(e,r,i,n),Wf(null,e,r,!0,t,n);case 19:return _2(t,e,n);case 22:return m2(t,e,n)}throw Error(z(156,e.tag))};function j2(t,e){return lw(t,e)}function v4(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(t,e,n,r){return new v4(t,e,n,r)}function Lm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _4(t){if(typeof t=="function")return Lm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tm)return 11;if(t===nm)return 14}return 2}function Wr(t,e){var n=t.alternate;return n===null?(n=Zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Lm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gs:return bi(n.children,i,s,e);case em:o=8,i|=8;break;case df:return t=Zt(12,n,e,i|2),t.elementType=df,t.lanes=s,t;case hf:return t=Zt(13,n,e,i),t.elementType=hf,t.lanes=s,t;case ff:return t=Zt(19,n,e,i),t.elementType=ff,t.lanes=s,t;case q_:return nd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B_:o=10;break e;case W_:o=9;break e;case tm:o=11;break e;case nm:o=14;break e;case Sr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=Zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function bi(t,e,n,r){return t=Zt(7,t,r,e),t.lanes=n,t}function nd(t,e,n,r){return t=Zt(22,t,r,e),t.elementType=q_,t.lanes=n,t.stateNode={isHidden:!1},t}function Mh(t,e,n){return t=Zt(6,t,null,e),t.lanes=n,t}function Vh(t,e,n){return e=Zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function w4(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vh(0),this.expirationTimes=vh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mm(t,e,n,r,i,s,o,a,u){return t=new w4(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wm(s),t}function E4(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function L2(t){if(!t)return Xr;t=t._reactInternals;e:{if(Xi(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(bt(n))return Lw(t,n,e)}return e}function M2(t,e,n,r,i,s,o,a,u){return t=Mm(n,r,!0,t,i,s,o,a,u),t.context=L2(null),n=t.current,r=Et(),i=Br(n),s=nr(r,i),s.callback=e??null,Ur(n,s,i),t.current.lanes=i,Qa(t,i,r),Nt(t,r),t}function rd(t,e,n,r){var i=e.current,s=Et(),o=Br(i);return n=L2(n),e.context===null?e.context=n:e.pendingContext=n,e=nr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ur(i,e,o),t!==null&&(vn(t,i,o,s),pu(t,i,o)),o}function lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vm(t,e){cy(t,e),(t=t.alternate)&&cy(t,e)}function T4(){return null}var V2=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fm(t){this._internalRoot=t}id.prototype.render=Fm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));rd(t,e,null,null)};id.prototype.unmount=Fm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ui(function(){rd(null,t,null,null)}),e[or]=null}};function id(t){this._internalRoot=t}id.prototype.unstable_scheduleHydration=function(t){if(t){var e=mw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ar.length&&e!==0&&e<Ar[n].priority;n++);Ar.splice(n,0,t),n===0&&yw(t)}};function zm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dy(){}function x4(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=lc(o);s.call(c)}}var o=M2(e,r,t,0,null,!1,!1,"",dy);return t._reactRootContainer=o,t[or]=o.current,xa(t.nodeType===8?t.parentNode:t),Ui(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=lc(u);a.call(c)}}var u=Mm(t,0,!1,null,null,!1,!1,"",dy);return t._reactRootContainer=u,t[or]=u.current,xa(t.nodeType===8?t.parentNode:t),Ui(function(){rd(e,u,n,r)}),u}function od(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=lc(o);a.call(u)}}rd(e,o,t,i)}else o=x4(n,e,t,i,r);return lc(o)}fw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wo(e.pendingLanes);n!==0&&(sm(e,n|1),Nt(e,De()),!(se&6)&&(Hs=De()+500,si()))}break;case 13:Ui(function(){var r=ar(t,1);if(r!==null){var i=Et();vn(r,t,1,i)}}),Vm(t,1)}};om=function(t){if(t.tag===13){var e=ar(t,134217728);if(e!==null){var n=Et();vn(e,t,134217728,n)}Vm(t,134217728)}};pw=function(t){if(t.tag===13){var e=Br(t),n=ar(t,e);if(n!==null){var r=Et();vn(n,t,e,r)}Vm(t,e)}};mw=function(){return ce};gw=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};xf=function(t,e,n){switch(e){case"input":if(gf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yc(r);if(!i)throw Error(z(90));G_(r),gf(r,i)}}}break;case"textarea":Q_(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};nw=Om;rw=Ui;var S4={usingClientEntryPoint:!1,Events:[Xa,ws,Yc,ew,tw,Om]},Fo={findFiberByHostInstance:Si,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},I4={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ow(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||T4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Hc=Ql.inject(I4),kn=Ql}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S4;Gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zm(e))throw Error(z(200));return E4(t,e,null,n)};Gt.createRoot=function(t,e){if(!zm(t))throw Error(z(299));var n=!1,r="",i=V2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mm(t,1,!1,null,null,n,!1,r,i),t[or]=e.current,xa(t.nodeType===8?t.parentNode:t),new Fm(e)};Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=ow(e),t=t===null?null:t.stateNode,t};Gt.flushSync=function(t){return Ui(t)};Gt.hydrate=function(t,e,n){if(!sd(e))throw Error(z(200));return od(null,t,e,!0,n)};Gt.hydrateRoot=function(t,e,n){if(!zm(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=V2;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=M2(e,null,t,1,n??null,i,!1,s,o),t[or]=e.current,xa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new id(e)};Gt.render=function(t,e,n){if(!sd(e))throw Error(z(200));return od(null,t,e,!1,n)};Gt.unmountComponentAtNode=function(t){if(!sd(t))throw Error(z(40));return t._reactRootContainer?(Ui(function(){od(null,null,t,!1,function(){t._reactRootContainer=null,t[or]=null})}),!0):!1};Gt.unstable_batchedUpdates=Om;Gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sd(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return od(t,e,n,!1,r)};Gt.version="18.3.1-next-f1338f8080-20240426";function F2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F2)}catch(t){console.error(t)}}F2(),F_.exports=Gt;var C4=F_.exports,hy=C4;uf.createRoot=hy.createRoot,uf.hydrateRoot=hy.hydrateRoot;const Um="/freshbiteapp_Reactjs/assets/logo-ClmogISy.png";var kt=function(){return kt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},kt.apply(this,arguments)};function uc(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var ve="-ms-",ua="-moz-",le="-webkit-",z2="comm",ad="rule",$m="decl",A4="@import",U2="@keyframes",R4="@layer",$2=Math.abs,Bm=String.fromCharCode,np=Object.assign;function k4(t,e){return He(t,0)^45?(((e<<2^He(t,0))<<2^He(t,1))<<2^He(t,2))<<2^He(t,3):0}function B2(t){return t.trim()}function Qn(t,e){return(t=e.exec(t))?t[0]:t}function Z(t,e,n){return t.replace(e,n)}function Eu(t,e,n){return t.indexOf(e,n)}function He(t,e){return t.charCodeAt(e)|0}function Gs(t,e,n){return t.slice(e,n)}function An(t){return t.length}function W2(t){return t.length}function Ho(t,e){return e.push(t),t}function P4(t,e){return t.map(e).join("")}function fy(t,e){return t.filter(function(n){return!Qn(n,e)})}var ld=1,Ks=1,q2=0,rn=0,Ve=0,ho="";function ud(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:ld,column:Ks,length:o,return:"",siblings:a}}function xr(t,e){return np(ud("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ds(t){for(;t.root;)t=xr(t.root,{children:[t]});Ho(t,t.siblings)}function b4(){return Ve}function N4(){return Ve=rn>0?He(ho,--rn):0,Ks--,Ve===10&&(Ks=1,ld--),Ve}function _n(){return Ve=rn<q2?He(ho,rn++):0,Ks++,Ve===10&&(Ks=1,ld++),Ve}function Ni(){return He(ho,rn)}function Tu(){return rn}function cd(t,e){return Gs(ho,t,e)}function rp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O4(t){return ld=Ks=1,q2=An(ho=t),rn=0,[]}function D4(t){return ho="",t}function Fh(t){return B2(cd(rn-1,ip(t===91?t+2:t===40?t+1:t)))}function j4(t){for(;(Ve=Ni())&&Ve<33;)_n();return rp(t)>2||rp(Ve)>3?"":" "}function L4(t,e){for(;--e&&_n()&&!(Ve<48||Ve>102||Ve>57&&Ve<65||Ve>70&&Ve<97););return cd(t,Tu()+(e<6&&Ni()==32&&_n()==32))}function ip(t){for(;_n();)switch(Ve){case t:return rn;case 34:case 39:t!==34&&t!==39&&ip(Ve);break;case 40:t===41&&ip(t);break;case 92:_n();break}return rn}function M4(t,e){for(;_n()&&t+Ve!==57;)if(t+Ve===84&&Ni()===47)break;return"/*"+cd(e,rn-1)+"*"+Bm(t===47?t:_n())}function V4(t){for(;!rp(Ni());)_n();return cd(t,rn)}function F4(t){return D4(xu("",null,null,null,[""],t=O4(t),0,[0],t))}function xu(t,e,n,r,i,s,o,a,u){for(var c=0,h=0,p=o,g=0,v=0,S=0,C=1,R=1,T=1,w=0,y="",k=i,D=s,L=r,x=y;R;)switch(S=w,w=_n()){case 40:if(S!=108&&He(x,p-1)==58){Eu(x+=Z(Fh(w),"&","&\f"),"&\f",$2(c?a[c-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:x+=Fh(w);break;case 9:case 10:case 13:case 32:x+=j4(S);break;case 92:x+=L4(Tu()-1,7);continue;case 47:switch(Ni()){case 42:case 47:Ho(z4(M4(_n(),Tu()),e,n,u),u);break;default:x+="/"}break;case 123*C:a[c++]=An(x)*T;case 125*C:case 59:case 0:switch(w){case 0:case 125:R=0;case 59+h:T==-1&&(x=Z(x,/\f/g,"")),v>0&&An(x)-p&&Ho(v>32?my(x+";",r,n,p-1,u):my(Z(x," ","")+";",r,n,p-2,u),u);break;case 59:x+=";";default:if(Ho(L=py(x,e,n,c,h,i,a,y,k=[],D=[],p,s),s),w===123)if(h===0)xu(x,e,L,L,k,s,p,a,D);else switch(g===99&&He(x,3)===110?100:g){case 100:case 108:case 109:case 115:xu(t,L,L,r&&Ho(py(t,L,L,0,0,i,a,y,i,k=[],p,D),D),i,D,p,a,r?k:D);break;default:xu(x,L,L,L,[""],D,0,a,D)}}c=h=v=0,C=T=1,y=x="",p=o;break;case 58:p=1+An(x),v=S;default:if(C<1){if(w==123)--C;else if(w==125&&C++==0&&N4()==125)continue}switch(x+=Bm(w),w*C){case 38:T=h>0?1:(x+="\f",-1);break;case 44:a[c++]=(An(x)-1)*T,T=1;break;case 64:Ni()===45&&(x+=Fh(_n())),g=Ni(),h=p=An(y=x+=V4(Tu())),w++;break;case 45:S===45&&An(x)==2&&(C=0)}}return s}function py(t,e,n,r,i,s,o,a,u,c,h,p){for(var g=i-1,v=i===0?s:[""],S=W2(v),C=0,R=0,T=0;C<r;++C)for(var w=0,y=Gs(t,g+1,g=$2(R=o[C])),k=t;w<S;++w)(k=B2(R>0?v[w]+" "+y:Z(y,/&\f/g,v[w])))&&(u[T++]=k);return ud(t,e,n,i===0?ad:a,u,c,h,p)}function z4(t,e,n,r){return ud(t,e,n,z2,Bm(b4()),Gs(t,2,-2),0,r)}function my(t,e,n,r,i){return ud(t,e,n,$m,Gs(t,0,r),Gs(t,r+1,-1),r,i)}function H2(t,e,n){switch(k4(t,e)){case 5103:return le+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return le+t+t;case 4789:return ua+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return le+t+ua+t+ve+t+t;case 5936:switch(He(t,e+11)){case 114:return le+t+ve+Z(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return le+t+ve+Z(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return le+t+ve+Z(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return le+t+ve+t+t;case 6165:return le+t+ve+"flex-"+t+t;case 5187:return le+t+Z(t,/(\w+).+(:[^]+)/,le+"box-$1$2"+ve+"flex-$1$2")+t;case 5443:return le+t+ve+"flex-item-"+Z(t,/flex-|-self/g,"")+(Qn(t,/flex-|baseline/)?"":ve+"grid-row-"+Z(t,/flex-|-self/g,""))+t;case 4675:return le+t+ve+"flex-line-pack"+Z(t,/align-content|flex-|-self/g,"")+t;case 5548:return le+t+ve+Z(t,"shrink","negative")+t;case 5292:return le+t+ve+Z(t,"basis","preferred-size")+t;case 6060:return le+"box-"+Z(t,"-grow","")+le+t+ve+Z(t,"grow","positive")+t;case 4554:return le+Z(t,/([^-])(transform)/g,"$1"+le+"$2")+t;case 6187:return Z(Z(Z(t,/(zoom-|grab)/,le+"$1"),/(image-set)/,le+"$1"),t,"")+t;case 5495:case 3959:return Z(t,/(image-set\([^]*)/,le+"$1$`$1");case 4968:return Z(Z(t,/(.+:)(flex-)?(.*)/,le+"box-pack:$3"+ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+le+t+t;case 4200:if(!Qn(t,/flex-|baseline/))return ve+"grid-column-align"+Gs(t,e)+t;break;case 2592:case 3360:return ve+Z(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Qn(r.props,/grid-\w+-end/)})?~Eu(t+(n=n[e].value),"span",0)?t:ve+Z(t,"-start","")+t+ve+"grid-row-span:"+(~Eu(n,"span",0)?Qn(n,/\d+/):+Qn(n,/\d+/)-+Qn(t,/\d+/))+";":ve+Z(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Qn(r.props,/grid-\w+-start/)})?t:ve+Z(Z(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Z(t,/(.+)-inline(.+)/,le+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(An(t)-1-e>6)switch(He(t,e+1)){case 109:if(He(t,e+4)!==45)break;case 102:return Z(t,/(.+:)(.+)-([^]+)/,"$1"+le+"$2-$3$1"+ua+(He(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Eu(t,"stretch",0)?H2(Z(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Z(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,u,c){return ve+i+":"+s+c+(o?ve+i+"-span:"+(a?u:+u-+s)+c:"")+t});case 4949:if(He(t,e+6)===121)return Z(t,":",":"+le)+t;break;case 6444:switch(He(t,He(t,14)===45?18:11)){case 120:return Z(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+le+(He(t,14)===45?"inline-":"")+"box$3$1"+le+"$2$3$1"+ve+"$2box$3")+t;case 100:return Z(t,":",":"+ve)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(t,"scroll-","scroll-snap-")+t}return t}function cc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function U4(t,e,n,r){switch(t.type){case R4:if(t.children.length)break;case A4:case $m:return t.return=t.return||t.value;case z2:return"";case U2:return t.return=t.value+"{"+cc(t.children,r)+"}";case ad:if(!An(t.value=t.props.join(",")))return""}return An(n=cc(t.children,r))?t.return=t.value+"{"+n+"}":""}function $4(t){var e=W2(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function B4(t){return function(e){e.root||(e=e.return)&&t(e)}}function W4(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case $m:t.return=H2(t.value,t.length,n);return;case U2:return cc([xr(t,{value:Z(t.value,"@","@"+le)})],r);case ad:if(t.length)return P4(n=t.props,function(i){switch(Qn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ds(xr(t,{props:[Z(i,/:(read-\w+)/,":"+ua+"$1")]})),ds(xr(t,{props:[i]})),np(t,{props:fy(n,r)});break;case"::placeholder":ds(xr(t,{props:[Z(i,/:(plac\w+)/,":"+le+"input-$1")]})),ds(xr(t,{props:[Z(i,/:(plac\w+)/,":"+ua+"$1")]})),ds(xr(t,{props:[Z(i,/:(plac\w+)/,ve+"input-$1")]})),ds(xr(t,{props:[i]})),np(t,{props:fy(n,r)});break}return""})}}var q4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lt={},Qs=typeof process<"u"&&Lt!==void 0&&(Lt.REACT_APP_SC_ATTR||Lt.SC_ATTR)||"data-styled",G2="active",K2="data-styled-version",dd="6.1.13",Wm=`/*!sc*/
`,dc=typeof window<"u"&&"HTMLElement"in window,H4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==""?Lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.SC_DISABLE_SPEEDY!==void 0&&Lt.SC_DISABLE_SPEEDY!==""&&Lt.SC_DISABLE_SPEEDY!=="false"&&Lt.SC_DISABLE_SPEEDY),hd=Object.freeze([]),Ys=Object.freeze({});function G4(t,e,n){return n===void 0&&(n=Ys),t.theme!==n.theme&&t.theme||e||n.theme}var Q2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),K4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Q4=/(^-|-$)/g;function gy(t){return t.replace(K4,"-").replace(Q4,"")}var Y4=/(a)(d)/gi,Yl=52,yy=function(t){return String.fromCharCode(t+(t>25?39:97))};function sp(t){var e,n="";for(e=Math.abs(t);e>Yl;e=e/Yl|0)n=yy(e%Yl)+n;return(yy(e%Yl)+n).replace(Y4,"$1-$2")}var zh,Y2=5381,As=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},X2=function(t){return As(Y2,t)};function X4(t){return sp(X2(t)>>>0)}function J4(t){return t.displayName||t.name||"Component"}function Uh(t){return typeof t=="string"&&!0}var J2=typeof Symbol=="function"&&Symbol.for,Z2=J2?Symbol.for("react.memo"):60115,Z4=J2?Symbol.for("react.forward_ref"):60112,e3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},eE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},n3=((zh={})[Z4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zh[Z2]=eE,zh);function vy(t){return("type"in(e=t)&&e.type.$$typeof)===Z2?eE:"$$typeof"in t?n3[t.$$typeof]:e3;var e}var r3=Object.defineProperty,i3=Object.getOwnPropertyNames,_y=Object.getOwnPropertySymbols,s3=Object.getOwnPropertyDescriptor,o3=Object.getPrototypeOf,wy=Object.prototype;function tE(t,e,n){if(typeof e!="string"){if(wy){var r=o3(e);r&&r!==wy&&tE(t,r,n)}var i=i3(e);_y&&(i=i.concat(_y(e)));for(var s=vy(t),o=vy(e),a=0;a<i.length;++a){var u=i[a];if(!(u in t3||n&&n[u]||o&&u in o||s&&u in s)){var c=s3(e,u);try{r3(t,u,c)}catch{}}}}return t}function Xs(t){return typeof t=="function"}function qm(t){return typeof t=="object"&&"styledComponentId"in t}function Ai(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Ey(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Na(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function op(t,e,n){if(n===void 0&&(n=!1),!n&&!Na(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=op(t[r],e[r]);else if(Na(e))for(var r in e)t[r]=op(t[r],e[r]);return t}function Hm(t,e){Object.defineProperty(t,"toString",{value:e})}function Za(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var a3=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Za(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Wm);return n},t}(),Su=new Map,hc=new Map,Iu=1,Xl=function(t){if(Su.has(t))return Su.get(t);for(;hc.has(Iu);)Iu++;var e=Iu++;return Su.set(t,e),hc.set(e,t),e},l3=function(t,e){Iu=e+1,Su.set(t,e),hc.set(e,t)},u3="style[".concat(Qs,"][").concat(K2,'="').concat(dd,'"]'),c3=new RegExp("^".concat(Qs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),d3=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},h3=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Wm),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var u=a.match(c3);if(u){var c=0|parseInt(u[1],10),h=u[2];c!==0&&(l3(h,c),d3(t,h,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},Ty=function(t){for(var e=document.querySelectorAll(u3),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Qs)!==G2&&(h3(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function f3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var nE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Qs,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Qs,G2),r.setAttribute(K2,dd);var o=f3();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},p3=function(){function t(e){this.element=nE(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Za(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),m3=function(){function t(e){this.element=nE(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),g3=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),xy=dc,y3={isServer:!dc,useCSSOMInjection:!H4},rE=function(){function t(e,n,r){e===void 0&&(e=Ys),n===void 0&&(n={});var i=this;this.options=kt(kt({},y3),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&dc&&xy&&(xy=!1,Ty(this)),Hm(this,function(){return function(s){for(var o=s.getTag(),a=o.length,u="",c=function(p){var g=function(T){return hc.get(T)}(p);if(g===void 0)return"continue";var v=s.names.get(g),S=o.getGroup(p);if(v===void 0||!v.size||S.length===0)return"continue";var C="".concat(Qs,".g").concat(p,'[id="').concat(g,'"]'),R="";v!==void 0&&v.forEach(function(T){T.length>0&&(R+="".concat(T,","))}),u+="".concat(S).concat(C,'{content:"').concat(R,'"}').concat(Wm)},h=0;h<a;h++)c(h);return u}(i)})}return t.registerId=function(e){return Xl(e)},t.prototype.rehydrate=function(){!this.server&&dc&&Ty(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(kt(kt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new g3(i):r?new p3(i):new m3(i)}(this.options),new a3(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Xl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Xl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Xl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),v3=/&/g,_3=/^\s*\/\/.*$/gm;function iE(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=iE(n.children,e)),n})}function w3(t){var e,n,r,i=Ys,s=i.options,o=s===void 0?Ys:s,a=i.plugins,u=a===void 0?hd:a,c=function(g,v,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(e):g},h=u.slice();h.push(function(g){g.type===ad&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(v3,n).replace(r,c))}),o.prefix&&h.push(W4),h.push(U4);var p=function(g,v,S,C){v===void 0&&(v=""),S===void 0&&(S=""),C===void 0&&(C="&"),e=C,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var R=g.replace(_3,""),T=F4(S||v?"".concat(S," ").concat(v," { ").concat(R," }"):R);o.namespace&&(T=iE(T,o.namespace));var w=[];return cc(T,$4(h.concat(B4(function(y){return w.push(y)})))),w};return p.hash=u.length?u.reduce(function(g,v){return v.name||Za(15),As(g,v.name)},Y2).toString():"",p}var E3=new rE,ap=w3(),sE=wt.createContext({shouldForwardProp:void 0,styleSheet:E3,stylis:ap});sE.Consumer;wt.createContext(void 0);function Sy(){return j.useContext(sE)}var T3=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ap);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Hm(this,function(){throw Za(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=ap),this.name+e.hash},t}(),x3=function(t){return t>="A"&&t<="Z"};function Iy(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;x3(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var oE=function(t){return t==null||t===!1||t===""},aE=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!oE(s)&&(Array.isArray(s)&&s.isCss||Xs(s)?r.push("".concat(Iy(i),":"),s,";"):Na(s)?r.push.apply(r,uc(uc(["".concat(i," {")],aE(s),!1),["}"],!1)):r.push("".concat(Iy(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in q4||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Oi(t,e,n,r){if(oE(t))return[];if(qm(t))return[".".concat(t.styledComponentId)];if(Xs(t)){if(!Xs(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Oi(i,e,n,r)}var s;return t instanceof T3?n?(t.inject(n,r),[t.getName(r)]):[t]:Na(t)?aE(t):Array.isArray(t)?Array.prototype.concat.apply(hd,t.map(function(o){return Oi(o,e,n,r)})):[t.toString()]}function S3(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Xs(n)&&!qm(n))return!1}return!0}var I3=X2(dd),C3=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&S3(e),this.componentId=n,this.baseHash=As(I3,n),this.baseStyle=r,rE.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ai(i,this.staticRulesId);else{var s=Ey(Oi(this.rules,e,n,r)),o=sp(As(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Ai(i,o),this.staticRulesId=o}else{for(var u=As(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var p=this.rules[h];if(typeof p=="string")c+=p;else if(p){var g=Ey(Oi(p,e,n,r));u=As(u,g+h),c+=g}}if(c){var v=sp(u>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),i=Ai(i,v)}}return i},t}(),lE=wt.createContext(void 0);lE.Consumer;var $h={};function A3(t,e,n){var r=qm(t),i=t,s=!Uh(t),o=e.attrs,a=o===void 0?hd:o,u=e.componentId,c=u===void 0?function(k,D){var L=typeof k!="string"?"sc":gy(k);$h[L]=($h[L]||0)+1;var x="".concat(L,"-").concat(X4(dd+L+$h[L]));return D?"".concat(D,"-").concat(x):x}(e.displayName,e.parentComponentId):u,h=e.displayName,p=h===void 0?function(k){return Uh(k)?"styled.".concat(k):"Styled(".concat(J4(k),")")}(t):h,g=e.displayName&&e.componentId?"".concat(gy(e.displayName),"-").concat(e.componentId):e.componentId||c,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,S=e.shouldForwardProp;if(r&&i.shouldForwardProp){var C=i.shouldForwardProp;if(e.shouldForwardProp){var R=e.shouldForwardProp;S=function(k,D){return C(k,D)&&R(k,D)}}else S=C}var T=new C3(n,g,r?i.componentStyle:void 0);function w(k,D){return function(L,x,_){var I=L.attrs,A=L.componentStyle,b=L.defaultProps,N=L.foldedComponentIds,P=L.styledComponentId,St=L.target,$n=wt.useContext(lE),di=Sy(),Ot=L.shouldForwardProp||di.shouldForwardProp,$=G4(x,$n,b)||Ys,G=function(It,gt,Ct){for(var hi,Bn=kt(kt({},gt),{className:void 0,theme:Ct}),gr=0;gr<It.length;gr+=1){var Wn=Xs(hi=It[gr])?hi(Bn):hi;for(var Qt in Wn)Bn[Qt]=Qt==="className"?Ai(Bn[Qt],Wn[Qt]):Qt==="style"?kt(kt({},Bn[Qt]),Wn[Qt]):Wn[Qt]}return gt.className&&(Bn.className=Ai(Bn.className,gt.className)),Bn}(I,x,$),Q=G.as||St,ue={};for(var te in G)G[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&G.theme===$||(te==="forwardedAs"?ue.as=G.forwardedAs:Ot&&!Ot(te,Q)||(ue[te]=G[te]));var Ee=function(It,gt){var Ct=Sy(),hi=It.generateAndInjectStyles(gt,Ct.styleSheet,Ct.stylis);return hi}(A,G),Dt=Ai(N,P);return Ee&&(Dt+=" "+Ee),G.className&&(Dt+=" "+G.className),ue[Uh(Q)&&!Q2.has(Q)?"class":"className"]=Dt,ue.ref=_,j.createElement(Q,ue)}(y,k,D)}w.displayName=p;var y=wt.forwardRef(w);return y.attrs=v,y.componentStyle=T,y.displayName=p,y.shouldForwardProp=S,y.foldedComponentIds=r?Ai(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=g,y.target=r?i.target:t,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(D){for(var L=[],x=1;x<arguments.length;x++)L[x-1]=arguments[x];for(var _=0,I=L;_<I.length;_++)op(D,I[_],!0);return D}({},i.defaultProps,k):k}}),Hm(y,function(){return".".concat(y.styledComponentId)}),s&&tE(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Cy(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Ay=function(t){return Object.assign(t,{isCss:!0})};function R3(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Xs(t)||Na(t))return Ay(Oi(Cy(hd,uc([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Oi(r):Ay(Oi(Cy(r,e)))}function lp(t,e,n){if(n===void 0&&(n=Ys),!e)throw Za(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,R3.apply(void 0,uc([i],s,!1)))};return r.attrs=function(i){return lp(t,e,kt(kt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return lp(t,e,kt(kt({},n),i))},r}var uE=function(t){return lp(A3,t)},de=uE;Q2.forEach(function(t){de[t]=uE(t)});var cE={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ry=wt.createContext&&wt.createContext(cE),k3=["attr","size","title"];function P3(t,e){if(t==null)return{};var n=b3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function b3(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function fc(){return fc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fc.apply(this,arguments)}function ky(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function pc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ky(Object(n),!0).forEach(function(r){N3(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ky(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function N3(t,e,n){return e=O3(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function O3(t){var e=D3(t,"string");return typeof e=="symbol"?e:e+""}function D3(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function dE(t){return t&&t.map((e,n)=>wt.createElement(e.tag,pc({key:n},e.attr),dE(e.child)))}function we(t){return e=>wt.createElement(j3,fc({attr:pc({},t.attr)},e),dE(t.child))}function j3(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=P3(t,k3),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),wt.createElement("svg",fc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:pc(pc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&wt.createElement("title",null,s),t.children)};return Ry!==void 0?wt.createElement(Ry.Consumer,null,n=>e(n)):e(cE)}function L3(t){return we({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M232,152v64a8,8,0,0,1-8,8H160a72,72,0,0,1-67.9-48H96a72,72,0,0,0,72-72h0a71.83,71.83,0,0,0-4.07-23.88h0A72,72,0,0,1,232,152Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M169.57,72.59A80,80,0,0,0,16,104v64a16,16,0,0,0,16,16H86.67A80.15,80.15,0,0,0,160,232h64a16,16,0,0,0,16-16V152A80,80,0,0,0,169.57,72.59ZM32,104a64,64,0,1,1,64,64H32ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z"},child:[]}]})(t)}function M3(t){return we({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M228.61,60.16A6,6,0,0,0,224,58H61L54.63,22.93A6,6,0,0,0,48.73,18H24a6,6,0,0,0,0,12H43.72L69.53,171.94a21.93,21.93,0,0,0,6.24,11.77A26,26,0,1,0,113.89,190h52.22A26,26,0,1,0,188,178H91.17a10,10,0,0,1-9.84-8.21L77.73,150H196.1a22,22,0,0,0,21.65-18.06L229.9,65.07A6,6,0,0,0,228.61,60.16ZM106,204a14,14,0,1,1-14-14A14,14,0,0,1,106,204Zm96,0a14,14,0,1,1-14-14A14,14,0,0,1,202,204Zm3.94-74.21A10,10,0,0,1,196.1,138H75.55L63.19,70H216.81Z"},child:[]}]})(t)}function V3(t){return we({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"},child:[]}]})(t)}/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oa.apply(this,arguments)}var jr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(jr||(jr={}));const Py="popstate";function F3(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:u=""}=Ji(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),up("",{pathname:o,search:a,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof s=="string"?s:mc(s))}function r(i,s){Gm(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return U3(e,n,r,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function z3(){return Math.random().toString(36).substr(2,8)}function by(t,e){return{usr:t.state,key:t.key,idx:e}}function up(t,e,n,r){return n===void 0&&(n=null),Oa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ji(e):e,{state:n,key:e&&e.key||r||z3()})}function mc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ji(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function U3(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=jr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Oa({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function p(){a=jr.Pop;let R=h(),T=R==null?null:R-c;c=R,u&&u({action:a,location:C.location,delta:T})}function g(R,T){a=jr.Push;let w=up(C.location,R,T);n&&n(w,R),c=h()+1;let y=by(w,c),k=C.createHref(w);try{o.pushState(y,"",k)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;i.location.assign(k)}s&&u&&u({action:a,location:C.location,delta:1})}function v(R,T){a=jr.Replace;let w=up(C.location,R,T);n&&n(w,R),c=h();let y=by(w,c),k=C.createHref(w);o.replaceState(y,"",k),s&&u&&u({action:a,location:C.location,delta:0})}function S(R){let T=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof R=="string"?R:mc(R);return w=w.replace(/ $/,"%20"),be(T,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,T)}let C={get action(){return a},get location(){return t(i,o)},listen(R){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Py,p),u=R,()=>{i.removeEventListener(Py,p),u=null}},createHref(R){return e(i,R)},createURL:S,encodeLocation(R){let T=S(R);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:g,replace:v,go(R){return o.go(R)}};return C}var Ny;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ny||(Ny={}));function $3(t,e,n){return n===void 0&&(n="/"),B3(t,e,n,!1)}function B3(t,e,n,r){let i=typeof e=="string"?Ji(e):e,s=Js(i.pathname||"/",n);if(s==null)return null;let o=hE(t);W3(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=tC(s);a=Z3(o[u],c,r)}return a}function hE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=qr([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),hE(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:X3(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of fE(s.path))i(s,o,u)}),e}function fE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=fE(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function W3(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:J3(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const q3=/^:[\w-]+$/,H3=3,G3=2,K3=1,Q3=10,Y3=-2,Oy=t=>t==="*";function X3(t,e){let n=t.split("/"),r=n.length;return n.some(Oy)&&(r+=Y3),e&&(r+=G3),n.filter(i=>!Oy(i)).reduce((i,s)=>i+(q3.test(s)?H3:s===""?K3:Q3),r)}function J3(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Z3(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",p=gc({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=gc({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:qr([s,p.pathname]),pathnameBase:sC(qr([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=qr([s,p.pathnameBase]))}return o}function gc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=eC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,p)=>{let{paramName:g,isOptional:v}=h;if(g==="*"){let C=a[p]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const S=a[p];return v&&!S?c[g]=void 0:c[g]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function eC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Gm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function tC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Gm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Js(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function nC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ji(t):t;return{pathname:n?n.startsWith("/")?n:rC(n,e):e,search:oC(r),hash:aC(i)}}function rC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Bh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function iC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function pE(t,e){let n=iC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function mE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ji(t):(i=Oa({},t),be(!i.pathname||!i.pathname.includes("?"),Bh("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),Bh("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),Bh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}a=p>=0?e[p]:"/"}let u=nC(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const qr=t=>t.join("/").replace(/\/\/+/g,"/"),sC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),oC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,aC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function lC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const gE=["post","put","patch","delete"];new Set(gE);const uC=["get",...gE];new Set(uC);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Da(){return Da=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Da.apply(this,arguments)}const fd=j.createContext(null),yE=j.createContext(null),oi=j.createContext(null),pd=j.createContext(null),Zi=j.createContext({outlet:null,matches:[],isDataRoute:!1}),vE=j.createContext(null);function cC(t,e){let{relative:n}=e===void 0?{}:e;el()||be(!1);let{basename:r,navigator:i}=j.useContext(oi),{hash:s,pathname:o,search:a}=gd(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:qr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function el(){return j.useContext(pd)!=null}function tl(){return el()||be(!1),j.useContext(pd).location}function _E(t){j.useContext(oi).static||j.useLayoutEffect(t)}function md(){let{isDataRoute:t}=j.useContext(Zi);return t?xC():dC()}function dC(){el()||be(!1);let t=j.useContext(fd),{basename:e,future:n,navigator:r}=j.useContext(oi),{matches:i}=j.useContext(Zi),{pathname:s}=tl(),o=JSON.stringify(pE(i,n.v7_relativeSplatPath)),a=j.useRef(!1);return _E(()=>{a.current=!0}),j.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=mE(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:qr([e,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[e,r,o,s,t])}function gd(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(oi),{matches:i}=j.useContext(Zi),{pathname:s}=tl(),o=JSON.stringify(pE(i,r.v7_relativeSplatPath));return j.useMemo(()=>mE(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function hC(t,e){return fC(t,e)}function fC(t,e,n,r){el()||be(!1);let{navigator:i}=j.useContext(oi),{matches:s}=j.useContext(Zi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=tl(),h;if(e){var p;let R=typeof e=="string"?Ji(e):e;u==="/"||(p=R.pathname)!=null&&p.startsWith(u)||be(!1),h=R}else h=c;let g=h.pathname||"/",v=g;if(u!=="/"){let R=u.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(R.length).join("/")}let S=$3(t,{pathname:v}),C=vC(S&&S.map(R=>Object.assign({},R,{params:Object.assign({},a,R.params),pathname:qr([u,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?u:qr([u,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),s,n,r);return e&&C?j.createElement(pd.Provider,{value:{location:Da({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:jr.Pop}},C):C}function pC(){let t=TC(),e=lC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const mC=j.createElement(pC,null);class gC extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(Zi.Provider,{value:this.props.routeContext},j.createElement(vE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yC(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(fd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Zi.Provider,{value:e},r)}function vC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);h>=0||be(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:g,errors:v}=n,S=p.route.loader&&g[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||S){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,p,g)=>{let v,S=!1,C=null,R=null;n&&(v=a&&p.route.id?a[p.route.id]:void 0,C=p.route.errorElement||mC,u&&(c<0&&g===0?(S=!0,R=null):c===g&&(S=!0,R=p.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,g+1)),w=()=>{let y;return v?y=C:S?y=R:p.route.Component?y=j.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=h,j.createElement(yC,{match:p,routeContext:{outlet:h,matches:T,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?j.createElement(gC,{location:n.location,revalidation:n.revalidation,component:C,error:v,children:w(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):w()},null)}var wE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(wE||{}),yc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(yc||{});function _C(t){let e=j.useContext(fd);return e||be(!1),e}function wC(t){let e=j.useContext(yE);return e||be(!1),e}function EC(t){let e=j.useContext(Zi);return e||be(!1),e}function EE(t){let e=EC(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function TC(){var t;let e=j.useContext(vE),n=wC(yc.UseRouteError),r=EE(yc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function xC(){let{router:t}=_C(wE.UseNavigateStable),e=EE(yc.UseNavigateStable),n=j.useRef(!1);return _E(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Da({fromRouteId:e},s)))},[t,e])}function ln(t){be(!1)}function SC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=jr.Pop,navigator:s,static:o=!1,future:a}=t;el()&&be(!1);let u=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:s,static:o,future:Da({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Ji(r));let{pathname:h="/",search:p="",hash:g="",state:v=null,key:S="default"}=r,C=j.useMemo(()=>{let R=Js(h,u);return R==null?null:{location:{pathname:R,search:p,hash:g,state:v,key:S},navigationType:i}},[u,h,p,g,v,S,i]);return C==null?null:j.createElement(oi.Provider,{value:c},j.createElement(pd.Provider,{children:n,value:C}))}function IC(t){let{children:e,location:n}=t;return hC(cp(e),n)}new Promise(()=>{});function cp(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,cp(r.props.children,s));return}r.type!==ln&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=cp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vc(){return vc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vc.apply(this,arguments)}function TE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function CC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function AC(t,e){return t.button===0&&(!e||e==="_self")&&!CC(t)}const RC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],kC=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],PC="6";try{window.__reactRouterVersion=PC}catch{}const bC=j.createContext({isTransitioning:!1}),NC="startTransition",Dy=lf[NC];function OC(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=F3({window:i,v5Compat:!0}));let o=s.current,[a,u]=j.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=j.useCallback(p=>{c&&Dy?Dy(()=>u(p)):u(p)},[u,c]);return j.useLayoutEffect(()=>o.listen(h),[o,h]),j.createElement(SC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const DC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,LC=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:h,unstable_viewTransition:p}=e,g=TE(e,RC),{basename:v}=j.useContext(oi),S,C=!1;if(typeof c=="string"&&jC.test(c)&&(S=c,DC))try{let y=new URL(window.location.href),k=c.startsWith("//")?new URL(y.protocol+c):new URL(c),D=Js(k.pathname,v);k.origin===y.origin&&D!=null?c=D+k.search+k.hash:C=!0}catch{}let R=cC(c,{relative:i}),T=VC(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:i,unstable_viewTransition:p});function w(y){r&&r(y),y.defaultPrevented||T(y)}return j.createElement("a",vc({},g,{href:S||R,onClick:C||s?r:w,ref:n,target:u}))}),Pe=j.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,unstable_viewTransition:c,children:h}=e,p=TE(e,kC),g=gd(u,{relative:p.relative}),v=tl(),S=j.useContext(yE),{navigator:C,basename:R}=j.useContext(oi),T=S!=null&&FC(g)&&c===!0,w=C.encodeLocation?C.encodeLocation(g).pathname:g.pathname,y=v.pathname,k=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(y=y.toLowerCase(),k=k?k.toLowerCase():null,w=w.toLowerCase()),k&&R&&(k=Js(k,R)||k);const D=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let L=y===w||!o&&y.startsWith(w)&&y.charAt(D)==="/",x=k!=null&&(k===w||!o&&k.startsWith(w)&&k.charAt(w.length)==="/"),_={isActive:L,isPending:x,isTransitioning:T},I=L?r:void 0,A;typeof s=="function"?A=s(_):A=[s,L?"active":null,x?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let b=typeof a=="function"?a(_):a;return j.createElement(LC,vc({},p,{"aria-current":I,className:A,ref:n,style:b,to:u,unstable_viewTransition:c}),typeof h=="function"?h(_):h)});var dp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(dp||(dp={}));var jy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(jy||(jy={}));function MC(t){let e=j.useContext(fd);return e||be(!1),e}function VC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=md(),c=tl(),h=gd(t,{relative:o});return j.useCallback(p=>{if(AC(p,n)){p.preventDefault();let g=r!==void 0?r:mc(c)===mc(h);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,h,r,i,n,t,s,o,a])}function FC(t,e){e===void 0&&(e={});let n=j.useContext(bC);n==null&&be(!1);let{basename:r}=MC(dp.useViewTransitionState),i=gd(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Js(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Js(n.nextLocation.pathname,r)||n.nextLocation.pathname;return gc(i.pathname,o)!=null||gc(i.pathname,s)!=null}let zC={data:""},UC=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||zC,$C=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,BC=/\/\*[^]*?\*\/|  +/g,Ly=/\n+/g,kr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?kr(o,s):s+"{"+kr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=kr(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,a):a?a+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=kr.p?kr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Gn={},xE=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+xE(t[n]);return e}return t},WC=(t,e,n,r,i)=>{let s=xE(t),o=Gn[s]||(Gn[s]=(u=>{let c=0,h=11;for(;c<u.length;)h=101*h+u.charCodeAt(c++)>>>0;return"go"+h})(s));if(!Gn[o]){let u=s!==t?t:(c=>{let h,p,g=[{}];for(;h=$C.exec(c.replace(BC,""));)h[4]?g.shift():h[3]?(p=h[3].replace(Ly," ").trim(),g.unshift(g[0][p]=g[0][p]||{})):g[0][h[1]]=h[2].replace(Ly," ").trim();return g[0]})(t);Gn[o]=kr(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let a=n&&Gn.g?Gn.g:null;return n&&(Gn.g=Gn[o]),((u,c,h,p)=>{p?c.data=c.data.replace(p,u):c.data.indexOf(u)===-1&&(c.data=h?u+c.data:c.data+u)})(Gn[o],e,r,a),o},qC=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),u=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=u?"."+u:a&&typeof a=="object"?a.props?"":kr(a,""):a===!1?"":a}return r+i+(o??"")},"");function yd(t){let e=this||{},n=t.call?t(e.p):t;return WC(n.unshift?n.raw?qC(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,UC(e.target),e.g,e.o,e.k)}let SE,hp,fp;yd.bind({g:1});let ur=yd.bind({k:1});function HC(t,e,n,r){kr.p=e,SE=t,hp=n,fp=r}function ai(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),u=a.className||i.className;n.p=Object.assign({theme:hp&&hp()},a),n.o=/ *go\d+/.test(u),a.className=yd.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=a.as||t,delete a.as),fp&&c[0]&&fp(a),SE(c,a)}return i}}var GC=t=>typeof t=="function",_c=(t,e)=>GC(t)?t(e):t,KC=(()=>{let t=0;return()=>(++t).toString()})(),IE=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),QC=20,Cu=new Map,YC=1e3,My=t=>{if(Cu.has(t))return;let e=setTimeout(()=>{Cu.delete(t),es({type:4,toastId:t})},YC);Cu.set(t,e)},XC=t=>{let e=Cu.get(t);e&&clearTimeout(e)},pp=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,QC)};case 1:return e.toast.id&&XC(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?pp(t,{type:1,toast:n}):pp(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?My(r):t.toasts.forEach(s=>{My(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},Au=[],Ru={toasts:[],pausedAt:void 0},es=t=>{Ru=pp(Ru,t),Au.forEach(e=>{e(Ru)})},JC={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ZC=(t={})=>{let[e,n]=j.useState(Ru);j.useEffect(()=>(Au.push(n),()=>{let i=Au.indexOf(n);i>-1&&Au.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||JC[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},e9=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||KC()}),nl=t=>(e,n)=>{let r=e9(e,t,n);return es({type:2,toast:r}),r.id},Ft=(t,e)=>nl("blank")(t,e);Ft.error=nl("error");Ft.success=nl("success");Ft.loading=nl("loading");Ft.custom=nl("custom");Ft.dismiss=t=>{es({type:3,toastId:t})};Ft.remove=t=>es({type:4,toastId:t});Ft.promise=(t,e,n)=>{let r=Ft.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(Ft.success(_c(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{Ft.error(_c(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var t9=(t,e)=>{es({type:1,toast:{id:t,height:e}})},n9=()=>{es({type:5,time:Date.now()})},r9=t=>{let{toasts:e,pausedAt:n}=ZC(t);j.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let u=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(u<0){a.visible&&Ft.dismiss(a.id);return}return setTimeout(()=>Ft.dismiss(a.id),u)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=j.useCallback(()=>{n&&es({type:6,time:Date.now()})},[n]),i=j.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:u=8,defaultPosition:c}=o||{},h=e.filter(v=>(v.position||c)===(s.position||c)&&v.height),p=h.findIndex(v=>v.id===s.id),g=h.filter((v,S)=>S<p&&v.visible).length;return h.filter(v=>v.visible).slice(...a?[g+1]:[0,g]).reduce((v,S)=>v+(S.height||0)+u,0)},[e]);return{toasts:e,handlers:{updateHeight:t9,startPause:n9,endPause:r,calculateOffset:i}}},i9=ur`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,s9=ur`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,o9=ur`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,a9=ai("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${i9} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${s9} 0.15s ease-out forwards;
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
    animation: ${o9} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,l9=ur`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,u9=ai("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${l9} 1s linear infinite;
`,c9=ur`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,d9=ur`
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
}`,h9=ai("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${c9} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${d9} 0.2s ease-out forwards;
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
`,f9=ai("div")`
  position: absolute;
`,p9=ai("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,m9=ur`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,g9=ai("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${m9} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,y9=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?j.createElement(g9,null,e):e:n==="blank"?null:j.createElement(p9,null,j.createElement(u9,{...r}),n!=="loading"&&j.createElement(f9,null,n==="error"?j.createElement(a9,{...r}):j.createElement(h9,{...r})))},v9=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,_9=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,w9="0%{opacity:0;} 100%{opacity:1;}",E9="0%{opacity:1;} 100%{opacity:0;}",T9=ai("div")`
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
`,x9=ai("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,S9=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=IE()?[w9,E9]:[v9(n),_9(n)];return{animation:e?`${ur(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${ur(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},I9=j.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?S9(t.position||e||"top-center",t.visible):{opacity:0},s=j.createElement(y9,{toast:t}),o=j.createElement(x9,{...t.ariaProps},_c(t.message,t));return j.createElement(T9,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):j.createElement(j.Fragment,null,s,o))});HC(j.createElement);var C9=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=j.useCallback(o=>{if(o){let a=()=>{let u=o.getBoundingClientRect().height;r(t,u)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return j.createElement("div",{ref:s,className:e,style:n},i)},A9=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:IE()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},R9=yd`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Jl=16,k9=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:u}=r9(n);return j.createElement("div",{style:{position:"fixed",zIndex:9999,top:Jl,left:Jl,right:Jl,bottom:Jl,pointerEvents:"none",...s},className:o,onMouseEnter:u.startPause,onMouseLeave:u.endPause},a.map(c=>{let h=c.position||e,p=u.calculateOffset(c,{reverseOrder:t,gutter:r,defaultPosition:e}),g=A9(h,p);return j.createElement(C9,{id:c.id,key:c.id,onHeightUpdate:u.updateHeight,className:c.visible?R9:"",style:g},c.type==="custom"?_c(c.message,c):i?i(c):j.createElement(I9,{toast:c,position:h}))}))},je=Ft,CE={exports:{}},AE={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rl=j;function P9(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var b9=typeof Object.is=="function"?Object.is:P9,N9=rl.useSyncExternalStore,O9=rl.useRef,D9=rl.useEffect,j9=rl.useMemo,L9=rl.useDebugValue;AE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=O9(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=j9(function(){function u(v){if(!c){if(c=!0,h=v,v=r(v),i!==void 0&&o.hasValue){var S=o.value;if(i(S,v))return p=S}return p=v}if(S=p,b9(h,v))return S;var C=r(v);return i!==void 0&&i(S,C)?S:(h=v,p=C)}var c=!1,h,p,g=n===void 0?null:n;return[function(){return u(e())},g===null?void 0:function(){return u(g())}]},[e,n,r,i]);var a=N9(t,s[0],s[1]);return D9(function(){o.hasValue=!0,o.value=a},[a]),L9(a),a};CE.exports=AE;var M9=CE.exports,zt="default"in lf?wt:lf,Vy=Symbol.for("react-redux-context"),Fy=typeof globalThis<"u"?globalThis:{};function V9(){if(!zt.createContext)return{};const t=Fy[Vy]??(Fy[Vy]=new Map);let e=t.get(zt.createContext);return e||(e=zt.createContext(null),t.set(zt.createContext,e)),e}var Jr=V9(),F9=()=>{throw new Error("uSES not initialized!")};function Km(t=Jr){return function(){return zt.useContext(t)}}var RE=Km(),kE=F9,z9=t=>{kE=t},U9=(t,e)=>t===e;function $9(t=Jr){const e=t===Jr?RE:Km(t),n=(r,i={})=>{const{equalityFn:s=U9,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:u,getServerState:c,stabilityCheck:h,identityFunctionCheck:p}=e();zt.useRef(!0);const g=zt.useCallback({[r.name](S){return r(S)}}[r.name],[r,h,o.stabilityCheck]),v=kE(u.addNestedSub,a.getState,c||a.getState,g,s);return zt.useDebugValue(v),v};return Object.assign(n,{withTypes:()=>n}),n}var $t=$9();function B9(t){t()}function W9(){let t=null,e=null;return{clear(){t=null,e=null},notify(){B9(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var zy={notify(){},get:()=>[]};function q9(t,e){let n,r=zy,i=0,s=!1;function o(C){h();const R=r.subscribe(C);let T=!1;return()=>{T||(T=!0,R(),p())}}function a(){r.notify()}function u(){S.onStateChange&&S.onStateChange()}function c(){return s}function h(){i++,n||(n=t.subscribe(u),r=W9())}function p(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=zy)}function g(){s||(s=!0,h())}function v(){s&&(s=!1,p())}const S={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:u,isSubscribed:c,trySubscribe:g,tryUnsubscribe:v,getListeners:()=>r};return S}var H9=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",G9=typeof navigator<"u"&&navigator.product==="ReactNative",K9=H9||G9?zt.useLayoutEffect:zt.useEffect;function Q9({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=zt.useMemo(()=>{const c=q9(t);return{store:t,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=zt.useMemo(()=>t.getState(),[t]);K9(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,a]);const u=e||Jr;return zt.createElement(u.Provider,{value:o},n)}var Y9=Q9;function PE(t=Jr){const e=t===Jr?RE:Km(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var X9=PE();function J9(t=Jr){const e=t===Jr?X9:PE(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var il=J9();z9(M9.useSyncExternalStoreWithSelector);function Z9(t){return we({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"},child:[]}]})(t)}function e6(t){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Heart"},child:[{tag:"path",attr:{d:"M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"},child:[]}]}]})(t)}function Uy(t){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Login"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M20.944,18.432a2.577,2.577,0,0,1-2.729,2.5c-2.153.012-4.307,0-6.46,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.63a1.545,1.545,0,0,0-.969-1.471,3.027,3.027,0,0,0-1.061-.095H11.755a.5.5,0,0,1,0-1c2.225,0,4.465-.085,6.688,0a2.566,2.566,0,0,1,2.5,2.67Z"},child:[]},{tag:"path",attr:{d:"M15.794,12.354a.459.459,0,0,0,.138-.312A.3.3,0,0,0,15.938,12a.29.29,0,0,0-.006-.041.455.455,0,0,0-.138-.313L12.125,7.978a.5.5,0,0,0-.707.707L14.234,11.5H3.492a.5.5,0,0,0,0,1H14.234l-2.816,2.815a.5.5,0,0,0,.707.707Z"},child:[]}]}]}]})(t)}function $y(t){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Logout"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M20.968,18.448a2.577,2.577,0,0,1-2.73,2.5c-2.153.012-4.306,0-6.459,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.647A1.546,1.546,0,0,0,19,4.175a3.023,3.023,0,0,0-1.061-.095H11.779a.5.5,0,0,1,0-1c2.224,0,4.465-.085,6.687,0a2.567,2.567,0,0,1,2.5,2.67Z"},child:[]},{tag:"path",attr:{d:"M3.176,11.663a.455.455,0,0,0-.138.311c0,.015,0,.028-.006.043s0,.027.006.041a.457.457,0,0,0,.138.312l3.669,3.669a.5.5,0,0,0,.707-.707L4.737,12.516H15.479a.5.5,0,0,0,0-1H4.737L7.552,8.7a.5.5,0,0,0-.707-.707Z"},child:[]}]}]}]})(t)}const t6=de.img`
    width: 7rem;
    height: 5rem;
    @media (max-width: 600px) and (min-width: 0px) {
        width: 7rem;
        height: 5rem;
        margin-left: -1.7rem;
    }
`,n6=de.nav`
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
        margin: 1.9rem 1.5rem 0rem 0rem;
        #wishlist {
            padding: 0px 5px 0px 5px;
            margin-top: 8px;
            span {
                position: absolute;
                top: 2.7rem;
                right: 6.3rem;
                font-size: 10px;
                border-radius: 100%;
                background-color: red;
            }
        }
        #cart {
            padding: 0px 5px 0px 5px;
            margin-top: 8px;
            span {
                position: absolute;
                top: 2.7rem;
                right: 4.19rem;
                font-size: 10px;
                border-radius: 100%;
                background-color: red;
            }
        }
    }
    #login {
        padding: 0px 5px 0px 5px;
        margin-top: 8px;
    }
    #logout {
        padding: 0px 5px 0px 5px;
        margin-top: 8px;
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
            width: 100%;
            height: 100vh;
            background-color: white;
            text-align: center;
            padding-top: 1rem;
            z-index: 1000;
            transition: left 0.5s ease-in-out;
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
            #wishlist {
                margin: 1rem 0rem 0rem 0rem;
                span {
                    position: absolute;
                    top: 3.8rem;
                    right: 8.0rem;
                    z-index: 0;
                }
            }
            #cart {
                margin: 1rem 0rem 0rem 0rem;
                span {
                    position: absolute;
                    top: 3.8rem;
                    right: 5.7rem;
                    z-index: 0;
                }
            }
            #login {
                padding: 0px 5px 0px 5px;
                margin: 1rem 1rem 0rem 0rem;
            }
            #logout {
                padding: 0px 5px 0px 5px;
                margin: 1rem 1rem 0rem 0rem;
            }
        }
        #cross {
            display: block;
            position: absolute;
            right: 3%;
        }
        #bars {
            margin: 1rem -1rem 0rem 0rem;
        }
    }
`,r6=de.a`
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
`,wi=()=>{const t=localStorage.getItem("users");md();const e=$t(o=>o.cart.items.length),n=$t(o=>o.wishlist.items.length),r=()=>{localStorage.clear("users"),je.success("Logout Successfult"),console.log("logout",t)},i=()=>{document.getElementById("menuopen").style.display="flex",document.getElementById("menuopen").style.width="100%"},s=()=>{document.getElementById("menuopen").style.display="none",document.getElementById("menuopen").style.width="0"};return d.jsx(d.Fragment,{children:d.jsxs(n6,{children:[d.jsx("div",{children:d.jsx(t6,{src:Um,alt:"SiteLogo"})}),d.jsx("div",{children:d.jsxs("ul",{id:"menuopen",children:[d.jsx(Pe,{to:"/Home",children:"Home"}),d.jsx(Pe,{to:"/shop",children:"Shop"}),d.jsx(Pe,{to:"/about",children:"About"}),t?d.jsx(Pe,{onClick:r,id:"logout",children:d.jsx($y,{size:"1.5rem",color:"#383838"})}):d.jsx(Pe,{to:"/Login",id:"login",children:d.jsx(Uy,{size:"1.5rem",color:"#383838"})}),d.jsx(Z9,{size:"1.9rem",color:"black",id:"cross",onClick:s})]})}),d.jsxs("div",{children:[d.jsxs("div",{id:"wishlist",children:[d.jsx(Pe,{to:"/wishlist",children:d.jsx(e6,{size:"1.5rem",color:"#383838"})}),n>=0&&d.jsx("span",{className:"badge badge-danger",children:n})]}),d.jsxs("div",{id:"cart",children:[d.jsx(Pe,{to:"/Cart",children:d.jsx(M3,{size:"1.5rem",color:"#383838"})}),e>=0&&d.jsx("span",{className:"badge badge-danger",children:e})]}),t?d.jsx(Pe,{onClick:r,id:"logout",children:d.jsx($y,{size:"1.5rem",color:"#383838"})}):d.jsx(Pe,{to:"/Login",id:"login",children:d.jsx(Uy,{size:"1.5rem",color:"#383838"})}),d.jsx(r6,{children:d.jsx(V3,{id:"bars",size:"1.5rem",onClick:i})})]})]})})};var By={};/**
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
 */const bE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},i6=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},NE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,p=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,v=c&63;u||(v=64,o||(g=64)),r.push(n[h],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i6(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new s6;const g=s<<2|a>>4;if(r.push(g),c!==64){const v=a<<4&240|c>>2;if(r.push(v),p!==64){const S=c<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class s6 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const o6=function(t){const e=bE(t);return NE.encodeByteArray(e,!0)},wc=function(t){return o6(t).replace(/\./g,"")},OE=function(t){try{return NE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function a6(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const l6=()=>a6().__FIREBASE_DEFAULTS__,u6=()=>{if(typeof process>"u"||typeof By>"u")return;const t=By.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},c6=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&OE(t[1]);return e&&JSON.parse(e)},vd=()=>{try{return l6()||u6()||c6()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},DE=t=>{var e,n;return(n=(e=vd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jE=t=>{const e=DE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},LE=()=>{var t;return(t=vd())===null||t===void 0?void 0:t.config},ME=t=>{var e;return(e=vd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class d6{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function VE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[wc(JSON.stringify(n)),wc(JSON.stringify(o)),""].join(".")}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function h6(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function f6(){var t;const e=(t=vd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function p6(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function m6(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function g6(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function y6(){return!f6()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v6(){try{return typeof indexedDB=="object"}catch{return!1}}function _6(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const w6="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=w6,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sl.prototype.create)}}class sl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?E6(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,a,r)}}function E6(t,e){return t.replace(T6,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const T6=/\{\$([^}]+)}/g;function x6(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ec(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wy(s)&&Wy(o)){if(!Ec(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wy(t){return t!==null&&typeof t=="object"}/**
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
 */function ol(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Go(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ko(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function S6(t,e){const n=new I6(t,e);return n.subscribe.bind(n)}class I6{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");C6(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wh),i.error===void 0&&(i.error=Wh),i.complete===void 0&&(i.complete=Wh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function C6(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wh(){}/**
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
 */function mt(t){return t&&t._delegate?t._delegate:t}class Zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class A6{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new d6;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(k6(e))try{this.getOrInitializeService({instanceIdentifier:Ei})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ei){return this.instances.has(e)}getOptions(e=Ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:R6(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ei){return this.component?this.component.multipleInstances?e:Ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function R6(t){return t===Ei?void 0:t}function k6(t){return t.instantiationMode==="EAGER"}/**
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
 */class P6{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new A6(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const b6={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},N6=re.INFO,O6={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},D6=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=O6[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qm{constructor(e){this.name=e,this._logLevel=N6,this._logHandler=D6,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?b6[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const j6=(t,e)=>e.some(n=>t instanceof n);let qy,Hy;function L6(){return qy||(qy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function M6(){return Hy||(Hy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const FE=new WeakMap,mp=new WeakMap,zE=new WeakMap,qh=new WeakMap,Ym=new WeakMap;function V6(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&FE.set(n,t)}).catch(()=>{}),Ym.set(e,t),e}function F6(t){if(mp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});mp.set(t,e)}let gp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function z6(t){gp=t(gp)}function U6(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hh(this),e,...n);return zE.set(r,e.sort?e.sort():[e]),Hr(r)}:M6().includes(t)?function(...e){return t.apply(Hh(this),e),Hr(FE.get(this))}:function(...e){return Hr(t.apply(Hh(this),e))}}function $6(t){return typeof t=="function"?U6(t):(t instanceof IDBTransaction&&F6(t),j6(t,L6())?new Proxy(t,gp):t)}function Hr(t){if(t instanceof IDBRequest)return V6(t);if(qh.has(t))return qh.get(t);const e=$6(t);return e!==t&&(qh.set(t,e),Ym.set(e,t)),e}const Hh=t=>Ym.get(t);function B6(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Hr(o.result),u.oldVersion,u.newVersion,Hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const W6=["get","getKey","getAll","getAllKeys","count"],q6=["put","add","delete","clear"],Gh=new Map;function Gy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gh.get(e))return Gh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=q6.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||W6.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Gh.set(e,s),s}z6(t=>({...t,get:(e,n,r)=>Gy(e,n)||t.get(e,n,r),has:(e,n)=>!!Gy(e,n)||t.has(e,n)}));/**
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
 */class H6{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(G6(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function G6(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yp="@firebase/app",Ky="0.10.10";/**
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
 */const cr=new Qm("@firebase/app"),K6="@firebase/app-compat",Q6="@firebase/analytics-compat",Y6="@firebase/analytics",X6="@firebase/app-check-compat",J6="@firebase/app-check",Z6="@firebase/auth",eA="@firebase/auth-compat",tA="@firebase/database",nA="@firebase/database-compat",rA="@firebase/functions",iA="@firebase/functions-compat",sA="@firebase/installations",oA="@firebase/installations-compat",aA="@firebase/messaging",lA="@firebase/messaging-compat",uA="@firebase/performance",cA="@firebase/performance-compat",dA="@firebase/remote-config",hA="@firebase/remote-config-compat",fA="@firebase/storage",pA="@firebase/storage-compat",mA="@firebase/firestore",gA="@firebase/vertexai-preview",yA="@firebase/firestore-compat",vA="firebase",_A="10.13.1";/**
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
 */const vp="[DEFAULT]",wA={[yp]:"fire-core",[K6]:"fire-core-compat",[Y6]:"fire-analytics",[Q6]:"fire-analytics-compat",[J6]:"fire-app-check",[X6]:"fire-app-check-compat",[Z6]:"fire-auth",[eA]:"fire-auth-compat",[tA]:"fire-rtdb",[nA]:"fire-rtdb-compat",[rA]:"fire-fn",[iA]:"fire-fn-compat",[sA]:"fire-iid",[oA]:"fire-iid-compat",[aA]:"fire-fcm",[lA]:"fire-fcm-compat",[uA]:"fire-perf",[cA]:"fire-perf-compat",[dA]:"fire-rc",[hA]:"fire-rc-compat",[fA]:"fire-gcs",[pA]:"fire-gcs-compat",[mA]:"fire-fst",[yA]:"fire-fst-compat",[gA]:"fire-vertex","fire-js":"fire-js",[vA]:"fire-js-all"};/**
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
 */const Tc=new Map,EA=new Map,_p=new Map;function Qy(t,e){try{t.container.addComponent(e)}catch(n){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $i(t){const e=t.name;if(_p.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;_p.set(e,t);for(const n of Tc.values())Qy(n,t);for(const n of EA.values())Qy(n,t);return!0}function _d(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pn(t){return t.settings!==void 0}/**
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
 */const TA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new sl("app","Firebase",TA);/**
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
 */class xA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
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
 */const ts=_A;function UE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gr.create("bad-app-name",{appName:String(i)});if(n||(n=LE()),!n)throw Gr.create("no-options");const s=Tc.get(i);if(s){if(Ec(n,s.options)&&Ec(r,s.config))return s;throw Gr.create("duplicate-app",{appName:i})}const o=new P6(i);for(const u of _p.values())o.addComponent(u);const a=new xA(n,r,o);return Tc.set(i,a),a}function Xm(t=vp){const e=Tc.get(t);if(!e&&t===vp&&LE())return UE();if(!e)throw Gr.create("no-app",{appName:t});return e}function bn(t,e,n){var r;let i=(r=wA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(a.join(" "));return}$i(new Zr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const SA="firebase-heartbeat-database",IA=1,ja="firebase-heartbeat-store";let Kh=null;function $E(){return Kh||(Kh=B6(SA,IA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ja)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gr.create("idb-open",{originalErrorMessage:t.message})})),Kh}async function CA(t){try{const n=(await $E()).transaction(ja),r=await n.objectStore(ja).get(BE(t));return await n.done,r}catch(e){if(e instanceof Fn)cr.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cr.warn(n.message)}}}async function Yy(t,e){try{const r=(await $E()).transaction(ja,"readwrite");await r.objectStore(ja).put(e,BE(t)),await r.done}catch(n){if(n instanceof Fn)cr.warn(n.message);else{const r=Gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cr.warn(r.message)}}}function BE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const AA=1024,RA=30*24*60*60*1e3;class kA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=RA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){cr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xy(),{heartbeatsToSend:r,unsentEntries:i}=PA(this._heartbeatsCache.heartbeats),s=wc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return cr.warn(n),""}}}function Xy(){return new Date().toISOString().substring(0,10)}function PA(t,e=AA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return v6()?_6().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jy(t){return wc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function NA(t){$i(new Zr("platform-logger",e=>new H6(e),"PRIVATE")),$i(new Zr("heartbeat",e=>new kA(e),"PRIVATE")),bn(yp,Ky,t),bn(yp,Ky,"esm2017"),bn("fire-js","")}NA("");function Jm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function WE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OA=WE,qE=new sl("auth","Firebase",WE());/**
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
 */const xc=new Qm("@firebase/auth");function DA(t,...e){xc.logLevel<=re.WARN&&xc.warn(`Auth (${ts}): ${t}`,...e)}function ku(t,...e){xc.logLevel<=re.ERROR&&xc.error(`Auth (${ts}): ${t}`,...e)}/**
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
 */function sn(t,...e){throw eg(t,...e)}function wn(t,...e){return eg(t,...e)}function Zm(t,e,n){const r=Object.assign(Object.assign({},OA()),{[e]:n});return new sl("auth","Firebase",r).create(e,{appName:t.name})}function rr(t){return Zm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&sn(t,"argument-error"),Zm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qE.create(t,...e)}function K(t,e,...n){if(!t)throw eg(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ku(e),new Error(e)}function dr(t,e){t||Zn(e)}/**
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
 */function wp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function LA(){return Zy()==="http:"||Zy()==="https:"}function Zy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function MA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LA()||p6()||"connection"in navigator)?navigator.onLine:!0}function VA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class al{constructor(e,n){this.shortDelay=e,this.longDelay=n,dr(n>e,"Short delay should be less than long delay!"),this.isMobile=h6()||m6()}get(){return MA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tg(t,e){dr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class HE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const FA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zA=new al(3e4,6e4);function li(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ui(t,e,n,r,i={}){return GE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ol(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),HE.fetch()(KE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function GE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},FA),e);try{const i=new $A(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Zl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Zl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Zl(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Zm(t,h,c);sn(t,h)}}catch(i){if(i instanceof Fn)throw i;sn(t,"network-request-failed",{message:String(i)})}}async function ll(t,e,n,r,i={}){const s=await ui(t,e,n,r,i);return"mfaPendingCredential"in s&&sn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function KE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?tg(t.config,i):`${t.config.apiScheme}://${i}`}function UA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $A{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),zA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}function ev(t){return t!==void 0&&t.enterprise!==void 0}class BA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return UA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function WA(t,e){return ui(t,"GET","/v2/recaptchaConfig",li(t,e))}/**
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
 */async function qA(t,e){return ui(t,"POST","/v1/accounts:delete",e)}async function QE(t,e){return ui(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ca(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HA(t,e=!1){const n=mt(t),r=await n.getIdToken(e),i=ng(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ca(Qh(i.auth_time)),issuedAtTime:ca(Qh(i.iat)),expirationTime:ca(Qh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qh(t){return Number(t)*1e3}function ng(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ku("JWT malformed, contained fewer than 3 sections"),null;try{const i=OE(n);return i?JSON.parse(i):(ku("Failed to decode base64 JWT payload"),null)}catch(i){return ku("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function tv(t){const e=ng(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function La(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&GA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class KA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ep{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ca(this.lastLoginAt),this.creationTime=ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Sc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await La(t,QE(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?YE(s.providerUserInfo):[],a=YA(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ep(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function QA(t){const e=mt(t);await Sc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function YE(t){return t.map(e=>{var{providerId:n}=e,r=Jm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function XA(t,e){const n=await GE(t,{},async()=>{const r=ol({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=KE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",HE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function JA(t,e){return ui(t,"POST","/v2/accounts:revokeToken",li(t,e))}/**
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
 */class Ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=tv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await XA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ds;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ds,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
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
 */function Er(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class er{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Jm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ep(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await La(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HA(this,e)}reload(){return QA(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await La(this,qA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:y,emailVerified:k,isAnonymous:D,providerData:L,stsTokenManager:x}=n;K(y&&x,e,"internal-error");const _=Ds.fromJSON(this.name,x);K(typeof y=="string",e,"internal-error"),Er(p,e.name),Er(g,e.name),K(typeof k=="boolean",e,"internal-error"),K(typeof D=="boolean",e,"internal-error"),Er(v,e.name),Er(S,e.name),Er(C,e.name),Er(R,e.name),Er(T,e.name),Er(w,e.name);const I=new er({uid:y,auth:e,email:g,emailVerified:k,displayName:p,isAnonymous:D,photoURL:S,phoneNumber:v,tenantId:C,stsTokenManager:_,createdAt:T,lastLoginAt:w});return L&&Array.isArray(L)&&(I.providerData=L.map(A=>Object.assign({},A))),R&&(I._redirectEventId=R),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ds;i.updateFromServerResponse(n);const s=new er({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?YE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ds;a.updateFromIdToken(r);const u=new er({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ep(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const nv=new Map;function tr(t){dr(t instanceof Function,"Expected a class definition");let e=nv.get(t);return e?(dr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nv.set(t,e),e)}/**
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
 */class XE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}XE.type="NONE";const rv=XE;/**
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
 */function Pu(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new js(tr(rv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||tr(rv);const o=Pu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const p=er._fromJSON(e,h);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new js(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new js(s,e,r))}}/**
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
 */function iv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(JE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rT(e))return"Blackberry";if(iT(e))return"Webos";if(ZE(e))return"Safari";if((e.includes("chrome/")||eT(e))&&!e.includes("edge/"))return"Chrome";if(nT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function JE(t=pt()){return/firefox\//i.test(t)}function ZE(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eT(t=pt()){return/crios\//i.test(t)}function tT(t=pt()){return/iemobile/i.test(t)}function nT(t=pt()){return/android/i.test(t)}function rT(t=pt()){return/blackberry/i.test(t)}function iT(t=pt()){return/webos/i.test(t)}function rg(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZA(t=pt()){var e;return rg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eR(){return g6()&&document.documentMode===10}function sT(t=pt()){return rg(t)||nT(t)||iT(t)||rT(t)||/windows phone/i.test(t)||tT(t)}/**
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
 */function oT(t,e=[]){let n;switch(t){case"Browser":n=iv(pt());break;case"Worker":n=`${iv(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ts}/${r}`}/**
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
 */class tR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function nR(t,e={}){return ui(t,"GET","/v2/passwordPolicy",li(t,e))}/**
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
 */const rR=6;class iR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:rR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class sR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sv(this),this.idTokenSubscription=new sv(this),this.beforeStateQueue=new tR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await QE(this,{idToken:e}),r=await er._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(rr(this));const n=e?mt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nR(this),n=new iR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new sl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await JA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tr(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ci(t){return mt(t)}class sv{constructor(e){this.auth=e,this.observer=null,this.addObserver=S6(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oR(t){wd=t}function aT(t){return wd.loadJS(t)}function aR(){return wd.recaptchaEnterpriseScript}function lR(){return wd.gapiScript}function uR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cR="recaptcha-enterprise",dR="NO_RECAPTCHA";class hR{constructor(e){this.type=cR,this.auth=ci(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{WA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new BA(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;ev(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(dR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ev(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=aR();u.length!==0&&(u+=a),aT(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ov(t,e,n,r=!1){const i=new hR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Tp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await ov(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ov(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function fR(t,e){const n=_d(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ec(s,e??{}))return i;sn(i,"already-initialized")}return n.initialize({options:e})}function pR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mR(t,e,n){const r=ci(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=lT(e),{host:o,port:a}=gR(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),yR()}function lT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gR(t){const e=lT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:av(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:av(o)}}}function av(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ig{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}async function vR(t,e){return ui(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function _R(t,e){return ll(t,"POST","/v1/accounts:signInWithPassword",li(t,e))}/**
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
 */async function wR(t,e){return ll(t,"POST","/v1/accounts:signInWithEmailLink",li(t,e))}async function ER(t,e){return ll(t,"POST","/v1/accounts:signInWithEmailLink",li(t,e))}/**
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
 */class Ma extends ig{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ma(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ma(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tp(e,n,"signInWithPassword",_R);case"emailLink":return wR(e,{email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tp(e,r,"signUpPassword",vR);case"emailLink":return ER(e,{idToken:n,email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ls(t,e){return ll(t,"POST","/v1/accounts:signInWithIdp",li(t,e))}/**
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
 */const TR="http://localhost";class Bi extends ig{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Jm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Bi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ls(e,n)}buildRequest(){const e={requestUri:TR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ol(n)}return e}}/**
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
 */function xR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SR(t){const e=Go(Ko(t)).link,n=e?Go(Ko(e)).deep_link_id:null,r=Go(Ko(t)).deep_link_id;return(r?Go(Ko(r)).link:null)||r||n||e||t}class sg{constructor(e){var n,r,i,s,o,a;const u=Go(Ko(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,p=xR((i=u.mode)!==null&&i!==void 0?i:null);K(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=SR(e);try{return new sg(n)}catch{return null}}}/**
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
 */class fo{constructor(){this.providerId=fo.PROVIDER_ID}static credential(e,n){return Ma._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sg.parseLink(n);return K(r,"argument-error"),Ma._fromEmailAndCode(e,r.code,r.tenantId)}}fo.PROVIDER_ID="password";fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class og{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ul extends og{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pr extends ul{constructor(){super("facebook.com")}static credential(e){return Bi._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
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
 */class hn extends ul{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bi._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
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
 */class br extends ul{constructor(){super("github.com")}static credential(e){return Bi._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return br.credential(e.oauthAccessToken)}catch{return null}}}br.GITHUB_SIGN_IN_METHOD="github.com";br.PROVIDER_ID="github.com";/**
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
 */class Nr extends ul{constructor(){super("twitter.com")}static credential(e,n){return Bi._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.TWITTER_SIGN_IN_METHOD="twitter.com";Nr.PROVIDER_ID="twitter.com";/**
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
 */async function IR(t,e){return ll(t,"POST","/v1/accounts:signUp",li(t,e))}/**
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
 */class Wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await er._fromIdTokenResponse(e,r,i),o=lv(r);return new Wi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=lv(r);return new Wi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function lv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ic extends Fn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ic.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ic(e,n,r,i)}}function uT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ic._fromErrorAndOperation(t,s,e,r):s})}async function CR(t,e,n=!1){const r=await La(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wi._forOperation(t,"link",r)}/**
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
 */async function AR(t,e,n=!1){const{auth:r}=t;if(pn(r.app))return Promise.reject(rr(r));const i="reauthenticate";try{const s=await La(t,uT(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=ng(s.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),Wi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),s}}/**
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
 */async function cT(t,e,n=!1){if(pn(t.app))return Promise.reject(rr(t));const r="signIn",i=await uT(t,r,e),s=await Wi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function RR(t,e){return cT(ci(t),e)}/**
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
 */async function dT(t){const e=ci(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kR(t,e,n){if(pn(t.app))return Promise.reject(rr(t));const r=ci(t),o=await Tp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",IR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&dT(t),u}),a=await Wi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function PR(t,e,n){return pn(t.app)?Promise.reject(rr(t)):RR(mt(t),fo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dT(t),r})}function bR(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function NR(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}const Cc="__sak";/**
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
 */class hT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cc,"1"),this.storage.removeItem(Cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const OR=1e3,DR=10;class fT extends hT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);eR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,DR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fT.type="LOCAL";const jR=fT;/**
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
 */class pT extends hT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pT.type="SESSION";const mT=pT;/**
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
 */function LR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ed{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ed(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await LR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ed.receivers=[];/**
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
 */function ag(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class MR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=ag("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nn(){return window}function VR(t){Nn().location.href=t}/**
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
 */function gT(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function FR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function UR(){return gT()?self:null}/**
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
 */const yT="firebaseLocalStorageDb",$R=1,Ac="firebaseLocalStorage",vT="fbase_key";class cl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Td(t,e){return t.transaction([Ac],e?"readwrite":"readonly").objectStore(Ac)}function BR(){const t=indexedDB.deleteDatabase(yT);return new cl(t).toPromise()}function xp(){const t=indexedDB.open(yT,$R);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ac,{keyPath:vT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ac)?e(r):(r.close(),await BR(),e(await xp()))})})}async function uv(t,e,n){const r=Td(t,!0).put({[vT]:e,value:n});return new cl(r).toPromise()}async function WR(t,e){const n=Td(t,!1).get(e),r=await new cl(n).toPromise();return r===void 0?null:r.value}function cv(t,e){const n=Td(t,!0).delete(e);return new cl(n).toPromise()}const qR=800,HR=3;class _T{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ed._getInstance(UR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await FR(),!this.activeServiceWorker)return;this.sender=new MR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xp();return await uv(e,Cc,"1"),await cv(e,Cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Td(i,!1).getAll();return new cl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_T.type="LOCAL";const GR=_T;new al(3e4,6e4);/**
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
 */function wT(t,e){return e?tr(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class lg extends ig{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function KR(t){return cT(t.auth,new lg(t),t.bypassAuthState)}function QR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),AR(n,new lg(t),t.bypassAuthState)}async function YR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),CR(n,new lg(t),t.bypassAuthState)}/**
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
 */class ET{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KR;case"linkViaPopup":case"linkViaRedirect":return YR;case"reauthViaPopup":case"reauthViaRedirect":return QR;default:sn(this.auth,"internal-error")}}resolve(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const XR=new al(2e3,1e4);async function JR(t,e,n){if(pn(t.app))return Promise.reject(wn(t,"operation-not-supported-in-this-environment"));const r=ci(t);jA(t,e,og);const i=wT(r,n);return new Ri(r,"signInViaPopup",e,i).executeNotNull()}class Ri extends ET{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ri.currentPopupAction&&Ri.currentPopupAction.cancel(),Ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){dr(this.filter.length===1,"Popup operations only handle one event");const e=ag();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,XR.get())};e()}}Ri.currentPopupAction=null;/**
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
 */const ZR="pendingRedirect",bu=new Map;class ek extends ET{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bu.get(this.auth._key());if(!e){try{const r=await tk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bu.set(this.auth._key(),e)}return this.bypassAuthState||bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tk(t,e){const n=ik(e),r=rk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nk(t,e){bu.set(t._key(),e)}function rk(t){return tr(t._redirectPersistence)}function ik(t){return Pu(ZR,t.config.apiKey,t.name)}async function sk(t,e,n=!1){if(pn(t.app))return Promise.reject(rr(t));const r=ci(t),i=wT(r,e),o=await new ek(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ok=10*60*1e3;class ak{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!TT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ok&&this.cachedEventUids.clear(),this.cachedEventUids.has(dv(e))}saveEventToCache(e){this.cachedEventUids.add(dv(e)),this.lastProcessedEventTime=Date.now()}}function dv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function TT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return TT(t);default:return!1}}/**
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
 */async function uk(t,e={}){return ui(t,"GET","/v1/projects",e)}/**
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
 */const ck=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dk=/^https?/;async function hk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uk(t);for(const n of e)try{if(fk(n))return}catch{}sn(t,"unauthorized-domain")}function fk(t){const e=wp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dk.test(n))return!1;if(ck.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const pk=new al(3e4,6e4);function hv(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mk(t){return new Promise((e,n)=>{var r,i,s;function o(){hv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hv(),n(wn(t,"network-request-failed"))},timeout:pk.get()})}if(!((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nn().gapi)===null||s===void 0)&&s.load)o();else{const a=uR("iframefcb");return Nn()[a]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},aT(`${lR()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Nu=null,e})}let Nu=null;function gk(t){return Nu=Nu||mk(t),Nu}/**
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
 */const yk=new al(5e3,15e3),vk="__/auth/iframe",_k="emulator/auth/iframe",wk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ek=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tk(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tg(e,_k):`https://${t.config.authDomain}/${vk}`,r={apiKey:e.apiKey,appName:t.name,v:ts},i=Ek.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ol(r).slice(1)}`}async function xk(t){const e=await gk(t),n=Nn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:Tk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),a=Nn().setTimeout(()=>{s(o)},yk.get());function u(){Nn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Sk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ik=500,Ck=600,Ak="_blank",Rk="http://localhost";class fv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kk(t,e,n,r=Ik,i=Ck){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},Sk),{width:r.toString(),height:i.toString(),top:s,left:o}),c=pt().toLowerCase();n&&(a=eT(c)?Ak:n),JE(c)&&(e=e||Rk,u.scrollbars="yes");const h=Object.entries(u).reduce((g,[v,S])=>`${g}${v}=${S},`,"");if(ZA(c)&&a!=="_self")return Pk(e||"",a),new fv(null);const p=window.open(e||"",a,h);K(p,t,"popup-blocked");try{p.focus()}catch{}return new fv(p)}function Pk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bk="__/auth/handler",Nk="emulator/auth/handler",Ok=encodeURIComponent("fac");async function pv(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ts,eventId:i};if(e instanceof og){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",x6(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof ul){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${Ok}=${encodeURIComponent(u)}`:"";return`${Dk(t)}?${ol(a).slice(1)}${c}`}function Dk({config:t}){return t.emulator?tg(t,Nk):`https://${t.authDomain}/${bk}`}/**
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
 */const Yh="webStorageSupport";class jk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mT,this._completeRedirectFn=sk,this._overrideRedirectResult=nk}async _openPopup(e,n,r,i){var s;dr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await pv(e,n,r,wp(),i);return kk(e,o,ag())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await pv(e,n,r,wp(),i);return VR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(dr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xk(e),r=new ak(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yh,{type:Yh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yh];o!==void 0&&n(!!o),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sT()||ZE()||rg()}}const Lk=jk;var mv="@firebase/auth",gv="1.7.8";/**
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
 */class Mk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Vk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fk(t){$i(new Zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oT(t)},c=new sR(r,i,s,u);return pR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$i(new Zr("auth-internal",e=>{const n=ci(e.getProvider("auth").getImmediate());return(r=>new Mk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(mv,gv,Vk(t)),bn(mv,gv,"esm2017")}/**
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
 */const zk=5*60,Uk=ME("authIdTokenMaxAge")||zk;let yv=null;const $k=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Uk)return;const i=n==null?void 0:n.token;yv!==i&&(yv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Bk(t=Xm()){const e=_d(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fR(t,{popupRedirectResolver:Lk,persistence:[GR,jR,mT]}),r=ME("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=$k(s.toString());NR(n,o,()=>o(n.currentUser)),bR(n,a=>o(a))}}const i=DE("auth");return i&&mR(n,`http://${i}`),n}function Wk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}oR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Wk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fk("Browser");var qk="firebase",Hk="10.13.1";/**
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
 */bn(qk,Hk,"app");var vv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Di,xT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,_){function I(){}I.prototype=_.prototype,x.D=_.prototype,x.prototype=new I,x.prototype.constructor=x,x.C=function(A,b,N){for(var P=Array(arguments.length-2),St=2;St<arguments.length;St++)P[St-2]=arguments[St];return _.prototype[b].apply(A,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(x,_,I){I||(I=0);var A=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)A[b]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(b=0;16>b;++b)A[b]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=x.g[0],I=x.g[1],b=x.g[2];var N=x.g[3],P=_+(N^I&(b^N))+A[0]+3614090360&4294967295;_=I+(P<<7&4294967295|P>>>25),P=N+(b^_&(I^b))+A[1]+3905402710&4294967295,N=_+(P<<12&4294967295|P>>>20),P=b+(I^N&(_^I))+A[2]+606105819&4294967295,b=N+(P<<17&4294967295|P>>>15),P=I+(_^b&(N^_))+A[3]+3250441966&4294967295,I=b+(P<<22&4294967295|P>>>10),P=_+(N^I&(b^N))+A[4]+4118548399&4294967295,_=I+(P<<7&4294967295|P>>>25),P=N+(b^_&(I^b))+A[5]+1200080426&4294967295,N=_+(P<<12&4294967295|P>>>20),P=b+(I^N&(_^I))+A[6]+2821735955&4294967295,b=N+(P<<17&4294967295|P>>>15),P=I+(_^b&(N^_))+A[7]+4249261313&4294967295,I=b+(P<<22&4294967295|P>>>10),P=_+(N^I&(b^N))+A[8]+1770035416&4294967295,_=I+(P<<7&4294967295|P>>>25),P=N+(b^_&(I^b))+A[9]+2336552879&4294967295,N=_+(P<<12&4294967295|P>>>20),P=b+(I^N&(_^I))+A[10]+4294925233&4294967295,b=N+(P<<17&4294967295|P>>>15),P=I+(_^b&(N^_))+A[11]+2304563134&4294967295,I=b+(P<<22&4294967295|P>>>10),P=_+(N^I&(b^N))+A[12]+1804603682&4294967295,_=I+(P<<7&4294967295|P>>>25),P=N+(b^_&(I^b))+A[13]+4254626195&4294967295,N=_+(P<<12&4294967295|P>>>20),P=b+(I^N&(_^I))+A[14]+2792965006&4294967295,b=N+(P<<17&4294967295|P>>>15),P=I+(_^b&(N^_))+A[15]+1236535329&4294967295,I=b+(P<<22&4294967295|P>>>10),P=_+(b^N&(I^b))+A[1]+4129170786&4294967295,_=I+(P<<5&4294967295|P>>>27),P=N+(I^b&(_^I))+A[6]+3225465664&4294967295,N=_+(P<<9&4294967295|P>>>23),P=b+(_^I&(N^_))+A[11]+643717713&4294967295,b=N+(P<<14&4294967295|P>>>18),P=I+(N^_&(b^N))+A[0]+3921069994&4294967295,I=b+(P<<20&4294967295|P>>>12),P=_+(b^N&(I^b))+A[5]+3593408605&4294967295,_=I+(P<<5&4294967295|P>>>27),P=N+(I^b&(_^I))+A[10]+38016083&4294967295,N=_+(P<<9&4294967295|P>>>23),P=b+(_^I&(N^_))+A[15]+3634488961&4294967295,b=N+(P<<14&4294967295|P>>>18),P=I+(N^_&(b^N))+A[4]+3889429448&4294967295,I=b+(P<<20&4294967295|P>>>12),P=_+(b^N&(I^b))+A[9]+568446438&4294967295,_=I+(P<<5&4294967295|P>>>27),P=N+(I^b&(_^I))+A[14]+3275163606&4294967295,N=_+(P<<9&4294967295|P>>>23),P=b+(_^I&(N^_))+A[3]+4107603335&4294967295,b=N+(P<<14&4294967295|P>>>18),P=I+(N^_&(b^N))+A[8]+1163531501&4294967295,I=b+(P<<20&4294967295|P>>>12),P=_+(b^N&(I^b))+A[13]+2850285829&4294967295,_=I+(P<<5&4294967295|P>>>27),P=N+(I^b&(_^I))+A[2]+4243563512&4294967295,N=_+(P<<9&4294967295|P>>>23),P=b+(_^I&(N^_))+A[7]+1735328473&4294967295,b=N+(P<<14&4294967295|P>>>18),P=I+(N^_&(b^N))+A[12]+2368359562&4294967295,I=b+(P<<20&4294967295|P>>>12),P=_+(I^b^N)+A[5]+4294588738&4294967295,_=I+(P<<4&4294967295|P>>>28),P=N+(_^I^b)+A[8]+2272392833&4294967295,N=_+(P<<11&4294967295|P>>>21),P=b+(N^_^I)+A[11]+1839030562&4294967295,b=N+(P<<16&4294967295|P>>>16),P=I+(b^N^_)+A[14]+4259657740&4294967295,I=b+(P<<23&4294967295|P>>>9),P=_+(I^b^N)+A[1]+2763975236&4294967295,_=I+(P<<4&4294967295|P>>>28),P=N+(_^I^b)+A[4]+1272893353&4294967295,N=_+(P<<11&4294967295|P>>>21),P=b+(N^_^I)+A[7]+4139469664&4294967295,b=N+(P<<16&4294967295|P>>>16),P=I+(b^N^_)+A[10]+3200236656&4294967295,I=b+(P<<23&4294967295|P>>>9),P=_+(I^b^N)+A[13]+681279174&4294967295,_=I+(P<<4&4294967295|P>>>28),P=N+(_^I^b)+A[0]+3936430074&4294967295,N=_+(P<<11&4294967295|P>>>21),P=b+(N^_^I)+A[3]+3572445317&4294967295,b=N+(P<<16&4294967295|P>>>16),P=I+(b^N^_)+A[6]+76029189&4294967295,I=b+(P<<23&4294967295|P>>>9),P=_+(I^b^N)+A[9]+3654602809&4294967295,_=I+(P<<4&4294967295|P>>>28),P=N+(_^I^b)+A[12]+3873151461&4294967295,N=_+(P<<11&4294967295|P>>>21),P=b+(N^_^I)+A[15]+530742520&4294967295,b=N+(P<<16&4294967295|P>>>16),P=I+(b^N^_)+A[2]+3299628645&4294967295,I=b+(P<<23&4294967295|P>>>9),P=_+(b^(I|~N))+A[0]+4096336452&4294967295,_=I+(P<<6&4294967295|P>>>26),P=N+(I^(_|~b))+A[7]+1126891415&4294967295,N=_+(P<<10&4294967295|P>>>22),P=b+(_^(N|~I))+A[14]+2878612391&4294967295,b=N+(P<<15&4294967295|P>>>17),P=I+(N^(b|~_))+A[5]+4237533241&4294967295,I=b+(P<<21&4294967295|P>>>11),P=_+(b^(I|~N))+A[12]+1700485571&4294967295,_=I+(P<<6&4294967295|P>>>26),P=N+(I^(_|~b))+A[3]+2399980690&4294967295,N=_+(P<<10&4294967295|P>>>22),P=b+(_^(N|~I))+A[10]+4293915773&4294967295,b=N+(P<<15&4294967295|P>>>17),P=I+(N^(b|~_))+A[1]+2240044497&4294967295,I=b+(P<<21&4294967295|P>>>11),P=_+(b^(I|~N))+A[8]+1873313359&4294967295,_=I+(P<<6&4294967295|P>>>26),P=N+(I^(_|~b))+A[15]+4264355552&4294967295,N=_+(P<<10&4294967295|P>>>22),P=b+(_^(N|~I))+A[6]+2734768916&4294967295,b=N+(P<<15&4294967295|P>>>17),P=I+(N^(b|~_))+A[13]+1309151649&4294967295,I=b+(P<<21&4294967295|P>>>11),P=_+(b^(I|~N))+A[4]+4149444226&4294967295,_=I+(P<<6&4294967295|P>>>26),P=N+(I^(_|~b))+A[11]+3174756917&4294967295,N=_+(P<<10&4294967295|P>>>22),P=b+(_^(N|~I))+A[2]+718787259&4294967295,b=N+(P<<15&4294967295|P>>>17),P=I+(N^(b|~_))+A[9]+3951481745&4294967295,x.g[0]=x.g[0]+_&4294967295,x.g[1]=x.g[1]+(b+(P<<21&4294967295|P>>>11))&4294967295,x.g[2]=x.g[2]+b&4294967295,x.g[3]=x.g[3]+N&4294967295}r.prototype.u=function(x,_){_===void 0&&(_=x.length);for(var I=_-this.blockSize,A=this.B,b=this.h,N=0;N<_;){if(b==0)for(;N<=I;)i(this,x,N),N+=this.blockSize;if(typeof x=="string"){for(;N<_;)if(A[b++]=x.charCodeAt(N++),b==this.blockSize){i(this,A),b=0;break}}else for(;N<_;)if(A[b++]=x[N++],b==this.blockSize){i(this,A),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var _=1;_<x.length-8;++_)x[_]=0;var I=8*this.o;for(_=x.length-8;_<x.length;++_)x[_]=I&255,I/=256;for(this.u(x),x=Array(16),_=I=0;4>_;++_)for(var A=0;32>A;A+=8)x[I++]=this.g[_]>>>A&255;return x};function s(x,_){var I=a;return Object.prototype.hasOwnProperty.call(I,x)?I[x]:I[x]=_(x)}function o(x,_){this.h=_;for(var I=[],A=!0,b=x.length-1;0<=b;b--){var N=x[b]|0;A&&N==_||(I[b]=N,A=!1)}this.g=I}var a={};function u(x){return-128<=x&&128>x?s(x,function(_){return new o([_|0],0>_?-1:0)}):new o([x|0],0>x?-1:0)}function c(x){if(isNaN(x)||!isFinite(x))return p;if(0>x)return R(c(-x));for(var _=[],I=1,A=0;x>=I;A++)_[A]=x/I|0,I*=4294967296;return new o(_,0)}function h(x,_){if(x.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(x.charAt(0)=="-")return R(h(x.substring(1),_));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(_,8)),A=p,b=0;b<x.length;b+=8){var N=Math.min(8,x.length-b),P=parseInt(x.substring(b,b+N),_);8>N?(N=c(Math.pow(_,N)),A=A.j(N).add(c(P))):(A=A.j(I),A=A.add(c(P)))}return A}var p=u(0),g=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-R(this).m();for(var x=0,_=1,I=0;I<this.g.length;I++){var A=this.i(I);x+=(0<=A?A:4294967296+A)*_,_*=4294967296}return x},t.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(S(this))return"0";if(C(this))return"-"+R(this).toString(x);for(var _=c(Math.pow(x,6)),I=this,A="";;){var b=k(I,_).g;I=T(I,b.j(_));var N=((0<I.g.length?I.g[0]:I.h)>>>0).toString(x);if(I=b,S(I))return N+A;for(;6>N.length;)N="0"+N;A=N+A}},t.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function S(x){if(x.h!=0)return!1;for(var _=0;_<x.g.length;_++)if(x.g[_]!=0)return!1;return!0}function C(x){return x.h==-1}t.l=function(x){return x=T(this,x),C(x)?-1:S(x)?0:1};function R(x){for(var _=x.g.length,I=[],A=0;A<_;A++)I[A]=~x.g[A];return new o(I,~x.h).add(g)}t.abs=function(){return C(this)?R(this):this},t.add=function(x){for(var _=Math.max(this.g.length,x.g.length),I=[],A=0,b=0;b<=_;b++){var N=A+(this.i(b)&65535)+(x.i(b)&65535),P=(N>>>16)+(this.i(b)>>>16)+(x.i(b)>>>16);A=P>>>16,N&=65535,P&=65535,I[b]=P<<16|N}return new o(I,I[I.length-1]&-2147483648?-1:0)};function T(x,_){return x.add(R(_))}t.j=function(x){if(S(this)||S(x))return p;if(C(this))return C(x)?R(this).j(R(x)):R(R(this).j(x));if(C(x))return R(this.j(R(x)));if(0>this.l(v)&&0>x.l(v))return c(this.m()*x.m());for(var _=this.g.length+x.g.length,I=[],A=0;A<2*_;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<x.g.length;b++){var N=this.i(A)>>>16,P=this.i(A)&65535,St=x.i(b)>>>16,$n=x.i(b)&65535;I[2*A+2*b]+=P*$n,w(I,2*A+2*b),I[2*A+2*b+1]+=N*$n,w(I,2*A+2*b+1),I[2*A+2*b+1]+=P*St,w(I,2*A+2*b+1),I[2*A+2*b+2]+=N*St,w(I,2*A+2*b+2)}for(A=0;A<_;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=_;A<2*_;A++)I[A]=0;return new o(I,0)};function w(x,_){for(;(x[_]&65535)!=x[_];)x[_+1]+=x[_]>>>16,x[_]&=65535,_++}function y(x,_){this.g=x,this.h=_}function k(x,_){if(S(_))throw Error("division by zero");if(S(x))return new y(p,p);if(C(x))return _=k(R(x),_),new y(R(_.g),R(_.h));if(C(_))return _=k(x,R(_)),new y(R(_.g),_.h);if(30<x.g.length){if(C(x)||C(_))throw Error("slowDivide_ only works with positive integers.");for(var I=g,A=_;0>=A.l(x);)I=D(I),A=D(A);var b=L(I,1),N=L(A,1);for(A=L(A,2),I=L(I,2);!S(A);){var P=N.add(A);0>=P.l(x)&&(b=b.add(I),N=P),A=L(A,1),I=L(I,1)}return _=T(x,b.j(_)),new y(b,_)}for(b=p;0<=x.l(_);){for(I=Math.max(1,Math.floor(x.m()/_.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),N=c(I),P=N.j(_);C(P)||0<P.l(x);)I-=A,N=c(I),P=N.j(_);S(N)&&(N=g),b=b.add(N),x=T(x,P)}return new y(b,x)}t.A=function(x){return k(this,x).h},t.and=function(x){for(var _=Math.max(this.g.length,x.g.length),I=[],A=0;A<_;A++)I[A]=this.i(A)&x.i(A);return new o(I,this.h&x.h)},t.or=function(x){for(var _=Math.max(this.g.length,x.g.length),I=[],A=0;A<_;A++)I[A]=this.i(A)|x.i(A);return new o(I,this.h|x.h)},t.xor=function(x){for(var _=Math.max(this.g.length,x.g.length),I=[],A=0;A<_;A++)I[A]=this.i(A)^x.i(A);return new o(I,this.h^x.h)};function D(x){for(var _=x.g.length+1,I=[],A=0;A<_;A++)I[A]=x.i(A)<<1|x.i(A-1)>>>31;return new o(I,x.h)}function L(x,_){var I=_>>5;_%=32;for(var A=x.g.length-I,b=[],N=0;N<A;N++)b[N]=0<_?x.i(N+I)>>>_|x.i(N+I+1)<<32-_:x.i(N+I);return new o(b,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Di=o}).apply(typeof vv<"u"?vv:typeof self<"u"?self:typeof window<"u"?window:{});var eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ST,IT,Qo,CT,Ou,Sp,AT,RT,kT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,m){return l==Array.prototype||l==Object.prototype||(l[f]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof eu=="object"&&eu];for(var f=0;f<l.length;++f){var m=l[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,f){if(f)e:{var m=r;l=l.split(".");for(var E=0;E<l.length-1;E++){var O=l[E];if(!(O in m))break e;m=m[O]}l=l[l.length-1],E=m[l],f=f(E),f!=E&&f!=null&&e(m,l,{configurable:!0,writable:!0,value:f})}}function s(l,f){l instanceof String&&(l+="");var m=0,E=!1,O={next:function(){if(!E&&m<l.length){var M=m++;return{value:f(M,l[M]),done:!1}}return E=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function c(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,m){return l.call.apply(l.bind,arguments)}function p(l,f,m){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,E),l.apply(f,O)}}return function(){return l.apply(f,arguments)}}function g(l,f,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,g.apply(null,arguments)}function v(l,f){var m=Array.prototype.slice.call(arguments,1);return function(){var E=m.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function S(l,f){function m(){}m.prototype=f.prototype,l.aa=f.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(E,O,M){for(var U=Array(arguments.length-2),he=2;he<arguments.length;he++)U[he-2]=arguments[he];return f.prototype[O].apply(E,U)}}function C(l){const f=l.length;if(0<f){const m=Array(f);for(let E=0;E<f;E++)m[E]=l[E];return m}return[]}function R(l,f){for(let m=1;m<arguments.length;m++){const E=arguments[m];if(u(E)){const O=l.length||0,M=E.length||0;l.length=O+M;for(let U=0;U<M;U++)l[O+U]=E[U]}else l.push(E)}}class T{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function w(l){return/^[\s\xa0]*$/.test(l)}function y(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function k(l){return k[" "](l),l}k[" "]=function(){};var D=y().indexOf("Gecko")!=-1&&!(y().toLowerCase().indexOf("webkit")!=-1&&y().indexOf("Edge")==-1)&&!(y().indexOf("Trident")!=-1||y().indexOf("MSIE")!=-1)&&y().indexOf("Edge")==-1;function L(l,f,m){for(const E in l)f.call(m,l[E],E,l)}function x(l,f){for(const m in l)f.call(void 0,l[m],m,l)}function _(l){const f={};for(const m in l)f[m]=l[m];return f}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,f){let m,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(m in E)l[m]=E[m];for(let M=0;M<I.length;M++)m=I[M],Object.prototype.hasOwnProperty.call(E,m)&&(l[m]=E[m])}}function b(l){var f=1;l=l.split(":");const m=[];for(;0<f&&l.length;)m.push(l.shift()),f--;return l.length&&m.push(l.join(":")),m}function N(l){a.setTimeout(()=>{throw l},0)}function P(){var l=G;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class St{constructor(){this.h=this.g=null}add(f,m){const E=$n.get();E.set(f,m),this.h?this.h.next=E:this.g=E,this.h=E}}var $n=new T(()=>new di,l=>l.reset());class di{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Ot,$=!1,G=new St,Q=()=>{const l=a.Promise.resolve(void 0);Ot=()=>{l.then(ue)}};var ue=()=>{for(var l;l=P();){try{l.h.call(l.g)}catch(m){N(m)}var f=$n;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}$=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Dt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return l}();function It(l,f){if(Ee.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(D){e:{try{k(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else m=="mouseover"?f=l.fromElement:m=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:gt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&It.aa.h.call(this)}}S(It,Ee);var gt={2:"touch",3:"pen",4:"mouse"};It.prototype.h=function(){It.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Ct="closure_listenable_"+(1e6*Math.random()|0),hi=0;function Bn(l,f,m,E,O){this.listener=l,this.proxy=null,this.src=f,this.type=m,this.capture=!!E,this.ha=O,this.key=++hi,this.da=this.fa=!1}function gr(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Wn(l){this.src=l,this.g={},this.h=0}Wn.prototype.add=function(l,f,m,E,O){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var U=qd(l,f,E,O);return-1<U?(f=l[U],m||(f.fa=!1)):(f=new Bn(f,this.src,M,!!E,O),f.fa=m,l.push(f)),f};function Qt(l,f){var m=f.type;if(m in l.g){var E=l.g[m],O=Array.prototype.indexOf.call(E,f,void 0),M;(M=0<=O)&&Array.prototype.splice.call(E,O,1),M&&(gr(f),l.g[m].length==0&&(delete l.g[m],l.h--))}}function qd(l,f,m,E){for(var O=0;O<l.length;++O){var M=l[O];if(!M.da&&M.listener==f&&M.capture==!!m&&M.ha==E)return O}return-1}var Hd="closure_lm_"+(1e6*Math.random()|0),Gd={};function s0(l,f,m,E,O){if(Array.isArray(f)){for(var M=0;M<f.length;M++)s0(l,f[M],m,E,O);return null}return m=l0(m),l&&l[Ct]?l.K(f,m,c(E)?!!E.capture:!!E,O):IS(l,f,m,!1,E,O)}function IS(l,f,m,E,O,M){if(!f)throw Error("Invalid event type");var U=c(O)?!!O.capture:!!O,he=Qd(l);if(he||(l[Hd]=he=new Wn(l)),m=he.add(f,m,E,U,M),m.proxy)return m;if(E=CS(),m.proxy=E,E.src=l,E.listener=m,l.addEventListener)Dt||(O=U),O===void 0&&(O=!1),l.addEventListener(f.toString(),E,O);else if(l.attachEvent)l.attachEvent(a0(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return m}function CS(){function l(m){return f.call(l.src,l.listener,m)}const f=AS;return l}function o0(l,f,m,E,O){if(Array.isArray(f))for(var M=0;M<f.length;M++)o0(l,f[M],m,E,O);else E=c(E)?!!E.capture:!!E,m=l0(m),l&&l[Ct]?(l=l.i,f=String(f).toString(),f in l.g&&(M=l.g[f],m=qd(M,m,E,O),-1<m&&(gr(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete l.g[f],l.h--)))):l&&(l=Qd(l))&&(f=l.g[f.toString()],l=-1,f&&(l=qd(f,m,E,O)),(m=-1<l?f[l]:null)&&Kd(m))}function Kd(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Ct])Qt(f.i,l);else{var m=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(m,E,l.capture):f.detachEvent?f.detachEvent(a0(m),E):f.addListener&&f.removeListener&&f.removeListener(E),(m=Qd(f))?(Qt(m,l),m.h==0&&(m.src=null,f[Hd]=null)):gr(l)}}}function a0(l){return l in Gd?Gd[l]:Gd[l]="on"+l}function AS(l,f){if(l.da)l=!0;else{f=new It(f,this);var m=l.listener,E=l.ha||l.src;l.fa&&Kd(l),l=m.call(E,f)}return l}function Qd(l){return l=l[Hd],l instanceof Wn?l:null}var Yd="__closure_events_fn_"+(1e9*Math.random()>>>0);function l0(l){return typeof l=="function"?l:(l[Yd]||(l[Yd]=function(f){return l.handleEvent(f)}),l[Yd])}function it(){te.call(this),this.i=new Wn(this),this.M=this,this.F=null}S(it,te),it.prototype[Ct]=!0,it.prototype.removeEventListener=function(l,f,m,E){o0(this,l,f,m,E)};function yt(l,f){var m,E=l.F;if(E)for(m=[];E;E=E.F)m.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new Ee(f,l);else if(f instanceof Ee)f.target=f.target||l;else{var O=f;f=new Ee(E,l),A(f,O)}if(O=!0,m)for(var M=m.length-1;0<=M;M--){var U=f.g=m[M];O=vl(U,E,!0,f)&&O}if(U=f.g=l,O=vl(U,E,!0,f)&&O,O=vl(U,E,!1,f)&&O,m)for(M=0;M<m.length;M++)U=f.g=m[M],O=vl(U,E,!1,f)&&O}it.prototype.N=function(){if(it.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var m=l.g[f],E=0;E<m.length;E++)gr(m[E]);delete l.g[f],l.h--}}this.F=null},it.prototype.K=function(l,f,m,E){return this.i.add(String(l),f,!1,m,E)},it.prototype.L=function(l,f,m,E){return this.i.add(String(l),f,!0,m,E)};function vl(l,f,m,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,M=0;M<f.length;++M){var U=f[M];if(U&&!U.da&&U.capture==m){var he=U.listener,Ke=U.ha||U.src;U.fa&&Qt(l.i,U),O=he.call(Ke,E)!==!1&&O}}return O&&!E.defaultPrevented}function u0(l,f,m){if(typeof l=="function")m&&(l=g(l,m));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function c0(l){l.g=u0(()=>{l.g=null,l.i&&(l.i=!1,c0(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class RS extends te{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:c0(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vo(l){te.call(this),this.h=l,this.g={}}S(vo,te);var d0=[];function h0(l){L(l.g,function(f,m){this.g.hasOwnProperty(m)&&Kd(f)},l),l.g={}}vo.prototype.N=function(){vo.aa.N.call(this),h0(this)},vo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xd=a.JSON.stringify,kS=a.JSON.parse,PS=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Jd(){}Jd.prototype.h=null;function f0(l){return l.h||(l.h=l.i())}function p0(){}var _o={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zd(){Ee.call(this,"d")}S(Zd,Ee);function eh(){Ee.call(this,"c")}S(eh,Ee);var fi={},m0=null;function _l(){return m0=m0||new it}fi.La="serverreachability";function g0(l){Ee.call(this,fi.La,l)}S(g0,Ee);function wo(l){const f=_l();yt(f,new g0(f))}fi.STAT_EVENT="statevent";function y0(l,f){Ee.call(this,fi.STAT_EVENT,l),this.stat=f}S(y0,Ee);function vt(l){const f=_l();yt(f,new y0(f,l))}fi.Ma="timingevent";function v0(l,f){Ee.call(this,fi.Ma,l),this.size=f}S(v0,Ee);function Eo(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function To(){this.g=!0}To.prototype.xa=function(){this.g=!1};function bS(l,f,m,E,O,M){l.info(function(){if(l.g)if(M)for(var U="",he=M.split("&"),Ke=0;Ke<he.length;Ke++){var oe=he[Ke].split("=");if(1<oe.length){var st=oe[0];oe=oe[1];var ot=st.split("_");U=2<=ot.length&&ot[1]=="type"?U+(st+"="+oe+"&"):U+(st+"=redacted&")}}else U=null;else U=M;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+f+`
`+m+`
`+U})}function NS(l,f,m,E,O,M,U){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+f+`
`+m+`
`+M+" "+U})}function os(l,f,m,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+DS(l,m)+(E?" "+E:"")})}function OS(l,f){l.info(function(){return"TIMEOUT: "+f})}To.prototype.info=function(){};function DS(l,f){if(!l.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var E=m[l];if(!(2>E.length)){var O=E[1];if(Array.isArray(O)&&!(1>O.length)){var M=O[0];if(M!="noop"&&M!="stop"&&M!="close")for(var U=1;U<O.length;U++)O[U]=""}}}}return Xd(m)}catch{return f}}var wl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_0={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},th;function El(){}S(El,Jd),El.prototype.g=function(){return new XMLHttpRequest},El.prototype.i=function(){return{}},th=new El;function yr(l,f,m,E){this.j=l,this.i=f,this.l=m,this.R=E||1,this.U=new vo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new w0}function w0(){this.i=null,this.g="",this.h=!1}var E0={},nh={};function rh(l,f,m){l.L=1,l.v=Il(qn(f)),l.m=m,l.P=!0,T0(l,null)}function T0(l,f){l.F=Date.now(),Tl(l),l.A=qn(l.v);var m=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),L0(m.i,"t",E),l.C=0,m=l.j.J,l.h=new w0,l.g=e1(l.j,m?f:null,!l.m),0<l.O&&(l.M=new RS(g(l.Y,l,l.g),l.O)),f=l.U,m=l.g,E=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(d0[0]=O.toString()),O=d0);for(var M=0;M<O.length;M++){var U=s0(m,O[M],E||f.handleEvent,!1,f.h||f);if(!U)break;f.g[U.key]=U}f=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),wo(),bS(l.i,l.u,l.A,l.l,l.R,l.m)}yr.prototype.ca=function(l){l=l.target;const f=this.M;f&&Hn(l)==3?f.j():this.Y(l)},yr.prototype.Y=function(l){try{if(l==this.g)e:{const ot=Hn(this.g);var f=this.g.Ba();const us=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||B0(this.g)))){this.J||ot!=4||f==7||(f==8||0>=us?wo(3):wo(2)),ih(this);var m=this.g.Z();this.X=m;t:if(x0(this)){var E=B0(this.g);l="";var O=E.length,M=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pi(this),xo(this);var U="";break t}this.h.i=new a.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(M&&f==O-1)});E.length=0,this.h.g+=l,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=m==200,NS(this.i,this.u,this.A,this.l,this.R,ot,m),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Ke=this.g;if((he=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(he)){var oe=he;break t}}oe=null}if(m=oe)os(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sh(this,m);else{this.o=!1,this.s=3,vt(12),pi(this),xo(this);break e}}if(this.P){m=!0;let on;for(;!this.J&&this.C<U.length;)if(on=jS(this,U),on==nh){ot==4&&(this.s=4,vt(14),m=!1),os(this.i,this.l,null,"[Incomplete Response]");break}else if(on==E0){this.s=4,vt(15),os(this.i,this.l,U,"[Invalid Chunk]"),m=!1;break}else os(this.i,this.l,on,null),sh(this,on);if(x0(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||U.length!=0||this.h.h||(this.s=1,vt(16),m=!1),this.o=this.o&&m,!m)os(this.i,this.l,U,"[Invalid Chunked Response]"),pi(this),xo(this);else if(0<U.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),dh(st),st.M=!0,vt(11))}}else os(this.i,this.l,U,null),sh(this,U);ot==4&&pi(this),this.o&&!this.J&&(ot==4?Y0(this.j,this):(this.o=!1,Tl(this)))}else JS(this.g),m==400&&0<U.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),pi(this),xo(this)}}}catch{}finally{}};function x0(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function jS(l,f){var m=l.C,E=f.indexOf(`
`,m);return E==-1?nh:(m=Number(f.substring(m,E)),isNaN(m)?E0:(E+=1,E+m>f.length?nh:(f=f.slice(E,E+m),l.C=E+m,f)))}yr.prototype.cancel=function(){this.J=!0,pi(this)};function Tl(l){l.S=Date.now()+l.I,S0(l,l.I)}function S0(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Eo(g(l.ba,l),f)}function ih(l){l.B&&(a.clearTimeout(l.B),l.B=null)}yr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(OS(this.i,this.A),this.L!=2&&(wo(),vt(17)),pi(this),this.s=2,xo(this)):S0(this,this.S-l)};function xo(l){l.j.G==0||l.J||Y0(l.j,l)}function pi(l){ih(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,h0(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function sh(l,f){try{var m=l.j;if(m.G!=0&&(m.g==l||oh(m.h,l))){if(!l.K&&oh(m.h,l)&&m.G==3){try{var E=m.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Pl(m),Rl(m);else break e;ch(m),vt(18)}}else m.za=O[1],0<m.za-m.T&&37500>O[2]&&m.F&&m.v==0&&!m.C&&(m.C=Eo(g(m.Za,m),6e3));if(1>=A0(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else gi(m,11)}else if((l.K||m.g==l)&&Pl(m),!w(f))for(O=m.Da.g.parse(f),f=0;f<O.length;f++){let oe=O[f];if(m.T=oe[0],oe=oe[1],m.G==2)if(oe[0]=="c"){m.K=oe[1],m.ia=oe[2];const st=oe[3];st!=null&&(m.la=st,m.j.info("VER="+m.la));const ot=oe[4];ot!=null&&(m.Aa=ot,m.j.info("SVER="+m.Aa));const us=oe[5];us!=null&&typeof us=="number"&&0<us&&(E=1.5*us,m.L=E,m.j.info("backChannelRequestTimeoutMs_="+E)),E=m;const on=l.g;if(on){const Nl=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nl){var M=E.h;M.g||Nl.indexOf("spdy")==-1&&Nl.indexOf("quic")==-1&&Nl.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(ah(M,M.h),M.h=null))}if(E.D){const hh=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;hh&&(E.ya=hh,ge(E.I,E.D,hh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),E=m;var U=l;if(E.qa=Z0(E,E.J?E.ia:null,E.W),U.K){R0(E.h,U);var he=U,Ke=E.L;Ke&&(he.I=Ke),he.B&&(ih(he),Tl(he)),E.g=U}else K0(E);0<m.i.length&&kl(m)}else oe[0]!="stop"&&oe[0]!="close"||gi(m,7);else m.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?gi(m,7):uh(m):oe[0]!="noop"&&m.l&&m.l.ta(oe),m.v=0)}}wo(4)}catch{}}var LS=class{constructor(l,f){this.g=l,this.map=f}};function I0(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function C0(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function A0(l){return l.h?1:l.g?l.g.size:0}function oh(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function ah(l,f){l.g?l.g.add(f):l.h=f}function R0(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}I0.prototype.cancel=function(){if(this.i=k0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function k0(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const m of l.g.values())f=f.concat(m.D);return f}return C(l.i)}function MS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var f=[],m=l.length,E=0;E<m;E++)f.push(l[E]);return f}f=[],m=0;for(E in l)f[m++]=l[E];return f}function VS(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var f=[];l=l.length;for(var m=0;m<l;m++)f.push(m);return f}f=[],m=0;for(const E in l)f[m++]=E;return f}}}function P0(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var m=VS(l),E=MS(l),O=E.length,M=0;M<O;M++)f.call(void 0,E[M],m&&m[M],l)}var b0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FS(l,f){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var E=l[m].indexOf("="),O=null;if(0<=E){var M=l[m].substring(0,E);O=l[m].substring(E+1)}else M=l[m];f(M,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function mi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof mi){this.h=l.h,xl(this,l.j),this.o=l.o,this.g=l.g,Sl(this,l.s),this.l=l.l;var f=l.i,m=new Co;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),N0(this,m),this.m=l.m}else l&&(f=String(l).match(b0))?(this.h=!1,xl(this,f[1]||"",!0),this.o=So(f[2]||""),this.g=So(f[3]||"",!0),Sl(this,f[4]),this.l=So(f[5]||"",!0),N0(this,f[6]||"",!0),this.m=So(f[7]||"")):(this.h=!1,this.i=new Co(null,this.h))}mi.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Io(f,O0,!0),":");var m=this.g;return(m||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Io(f,O0,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Io(m,m.charAt(0)=="/"?$S:US,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Io(m,WS)),l.join("")};function qn(l){return new mi(l)}function xl(l,f,m){l.j=m?So(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Sl(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function N0(l,f,m){f instanceof Co?(l.i=f,qS(l.i,l.h)):(m||(f=Io(f,BS)),l.i=new Co(f,l.h))}function ge(l,f,m){l.i.set(f,m)}function Il(l){return ge(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function So(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Io(l,f,m){return typeof l=="string"?(l=encodeURI(l).replace(f,zS),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function zS(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var O0=/[#\/\?@]/g,US=/[#\?:]/g,$S=/[#\?]/g,BS=/[#\?@]/g,WS=/#/g;function Co(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function vr(l){l.g||(l.g=new Map,l.h=0,l.i&&FS(l.i,function(f,m){l.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Co.prototype,t.add=function(l,f){vr(this),this.i=null,l=as(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(f),this.h+=1,this};function D0(l,f){vr(l),f=as(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function j0(l,f){return vr(l),f=as(l,f),l.g.has(f)}t.forEach=function(l,f){vr(this),this.g.forEach(function(m,E){m.forEach(function(O){l.call(f,O,E,this)},this)},this)},t.na=function(){vr(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let E=0;E<f.length;E++){const O=l[E];for(let M=0;M<O.length;M++)m.push(f[E])}return m},t.V=function(l){vr(this);let f=[];if(typeof l=="string")j0(this,l)&&(f=f.concat(this.g.get(as(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)f=f.concat(l[m])}return f},t.set=function(l,f){return vr(this),this.i=null,l=as(this,l),j0(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function L0(l,f,m){D0(l,f),0<m.length&&(l.i=null,l.g.set(as(l,f),C(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var E=f[m];const M=encodeURIComponent(String(E)),U=this.V(E);for(E=0;E<U.length;E++){var O=M;U[E]!==""&&(O+="="+encodeURIComponent(String(U[E]))),l.push(O)}}return this.i=l.join("&")};function as(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function qS(l,f){f&&!l.j&&(vr(l),l.i=null,l.g.forEach(function(m,E){var O=E.toLowerCase();E!=O&&(D0(this,E),L0(this,O,m))},l)),l.j=f}function HS(l,f){const m=new To;if(a.Image){const E=new Image;E.onload=v(_r,m,"TestLoadImage: loaded",!0,f,E),E.onerror=v(_r,m,"TestLoadImage: error",!1,f,E),E.onabort=v(_r,m,"TestLoadImage: abort",!1,f,E),E.ontimeout=v(_r,m,"TestLoadImage: timeout",!1,f,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function GS(l,f){const m=new To,E=new AbortController,O=setTimeout(()=>{E.abort(),_r(m,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(M=>{clearTimeout(O),M.ok?_r(m,"TestPingServer: ok",!0,f):_r(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),_r(m,"TestPingServer: error",!1,f)})}function _r(l,f,m,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(m)}catch{}}function KS(){this.g=new PS}function QS(l,f,m){const E=m||"";try{P0(l,function(O,M){let U=O;c(O)&&(U=Xd(O)),f.push(E+M+"="+encodeURIComponent(U))})}catch(O){throw f.push(E+"type="+encodeURIComponent("_badmap")),O}}function Ao(l){this.l=l.Ub||null,this.j=l.eb||!1}S(Ao,Jd),Ao.prototype.g=function(){return new Cl(this.l,this.j)},Ao.prototype.i=function(l){return function(){return l}}({});function Cl(l,f){it.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Cl,it),t=Cl.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,ko(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ro(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ko(this)),this.g&&(this.readyState=3,ko(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;M0(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function M0(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Ro(this):ko(this),this.readyState==3&&M0(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ro(this))},t.Qa=function(l){this.g&&(this.response=l,Ro(this))},t.ga=function(){this.g&&Ro(this)};function Ro(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ko(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=f.next();return l.join(`\r
`)};function ko(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Cl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function V0(l){let f="";return L(l,function(m,E){f+=E,f+=":",f+=m,f+=`\r
`}),f}function lh(l,f,m){e:{for(E in m){var E=!1;break e}E=!0}E||(m=V0(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):ge(l,f,m))}function Re(l){it.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Re,it);var YS=/^https?$/i,XS=["POST","PUT"];t=Re.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,m,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():th.g(),this.v=this.o?f0(this.o):f0(th),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(M){F0(this,M);return}if(l=m||"",m=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)m.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const M of E.keys())m.set(M,E.get(M));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(XS,f,void 0))||E||O||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,U]of m)this.g.setRequestHeader(M,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$0(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){F0(this,M)}};function F0(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,z0(l),Al(l)}function z0(l){l.A||(l.A=!0,yt(l,"complete"),yt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,yt(this,"complete"),yt(this,"abort"),Al(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Al(this,!0)),Re.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?U0(this):this.bb())},t.bb=function(){U0(this)};function U0(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Hn(l)!=4||l.Z()!=2)){if(l.u&&Hn(l)==4)u0(l.Ea,0,l);else if(yt(l,"readystatechange"),Hn(l)==4){l.h=!1;try{const U=l.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var E;if(E=U===0){var O=String(l.D).match(b0)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),E=!YS.test(O?O.toLowerCase():"")}m=E}if(m)yt(l,"complete"),yt(l,"success");else{l.m=6;try{var M=2<Hn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",z0(l)}}finally{Al(l)}}}}function Al(l,f){if(l.g){$0(l);const m=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||yt(l,"ready");try{m.onreadystatechange=E}catch{}}}function $0(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Hn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),kS(f)}};function B0(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function JS(l){const f={};l=(l.g&&2<=Hn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(w(l[E]))continue;var m=b(l[E]);const O=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=f[O]||[];f[O]=M,M.push(m)}x(f,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Po(l,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||f}function W0(l){this.Aa=0,this.i=[],this.j=new To,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Po("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Po("baseRetryDelayMs",5e3,l),this.cb=Po("retryDelaySeedMs",1e4,l),this.Wa=Po("forwardChannelMaxRetries",2,l),this.wa=Po("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new I0(l&&l.concurrentRequestLimit),this.Da=new KS,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=W0.prototype,t.la=8,t.G=1,t.connect=function(l,f,m,E){vt(0),this.W=l,this.H=f||{},m&&E!==void 0&&(this.H.OSID=m,this.H.OAID=E),this.F=this.X,this.I=Z0(this,null,this.W),kl(this)};function uh(l){if(q0(l),l.G==3){var f=l.U++,m=qn(l.I);if(ge(m,"SID",l.K),ge(m,"RID",f),ge(m,"TYPE","terminate"),bo(l,m),f=new yr(l,l.j,f),f.L=2,f.v=Il(qn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=e1(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Tl(f)}J0(l)}function Rl(l){l.g&&(dh(l),l.g.cancel(),l.g=null)}function q0(l){Rl(l),l.u&&(a.clearTimeout(l.u),l.u=null),Pl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function kl(l){if(!C0(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ot||Q(),$||(Ot(),$=!0),G.add(f,l),l.B=0}}function ZS(l,f){return A0(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Eo(g(l.Ga,l,f),X0(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new yr(this,this.j,l);let M=this.o;if(this.S&&(M?(M=_(M),A(M,this.S)):M=this.S),this.m!==null||this.O||(O.H=M,M=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var E=this.i[m];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=G0(this,O,f),m=qn(this.I),ge(m,"RID",l),ge(m,"CVER",22),this.D&&ge(m,"X-HTTP-Session-Id",this.D),bo(this,m),M&&(this.O?f="headers="+encodeURIComponent(String(V0(M)))+"&"+f:this.m&&lh(m,this.m,M)),ah(this.h,O),this.Ua&&ge(m,"TYPE","init"),this.P?(ge(m,"$req",f),ge(m,"SID","null"),O.T=!0,rh(O,m,null)):rh(O,m,f),this.G=2}}else this.G==3&&(l?H0(this,l):this.i.length==0||C0(this.h)||H0(this))};function H0(l,f){var m;f?m=f.l:m=l.U++;const E=qn(l.I);ge(E,"SID",l.K),ge(E,"RID",m),ge(E,"AID",l.T),bo(l,E),l.m&&l.o&&lh(E,l.m,l.o),m=new yr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),f&&(l.i=f.D.concat(l.i)),f=G0(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ah(l.h,m),rh(m,E,f)}function bo(l,f){l.H&&L(l.H,function(m,E){ge(f,E,m)}),l.l&&P0({},function(m,E){ge(f,E,m)})}function G0(l,f,m){m=Math.min(l.i.length,m);var E=l.l?g(l.l.Na,l.l,l):null;e:{var O=l.i;let M=-1;for(;;){const U=["count="+m];M==-1?0<m?(M=O[0].g,U.push("ofs="+M)):M=0:U.push("ofs="+M);let he=!0;for(let Ke=0;Ke<m;Ke++){let oe=O[Ke].g;const st=O[Ke].map;if(oe-=M,0>oe)M=Math.max(0,O[Ke].g-100),he=!1;else try{QS(st,U,"req"+oe+"_")}catch{E&&E(st)}}if(he){E=U.join("&");break e}}}return l=l.i.splice(0,m),f.D=l,E}function K0(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ot||Q(),$||(Ot(),$=!0),G.add(f,l),l.v=0}}function ch(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Eo(g(l.Fa,l),X0(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Q0(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Eo(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),Rl(this),Q0(this))};function dh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Q0(l){l.g=new yr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=qn(l.qa);ge(f,"RID","rpc"),ge(f,"SID",l.K),ge(f,"AID",l.T),ge(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ge(f,"TO",l.ja),ge(f,"TYPE","xmlhttp"),bo(l,f),l.m&&l.o&&lh(f,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Il(qn(f)),m.m=null,m.P=!0,T0(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Rl(this),ch(this),vt(19))};function Pl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Y0(l,f){var m=null;if(l.g==f){Pl(l),dh(l),l.g=null;var E=2}else if(oh(l.h,f))m=f.D,R0(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var O=l.B;E=_l(),yt(E,new v0(E,m)),kl(l)}else K0(l);else if(O=f.s,O==3||O==0&&0<f.X||!(E==1&&ZS(l,f)||E==2&&ch(l)))switch(m&&0<m.length&&(f=l.h,f.i=f.i.concat(m)),O){case 1:gi(l,5);break;case 4:gi(l,10);break;case 3:gi(l,6);break;default:gi(l,2)}}}function X0(l,f){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*f}function gi(l,f){if(l.j.info("Error code "+f),f==2){var m=g(l.fb,l),E=l.Xa;const O=!E;E=new mi(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||xl(E,"https"),Il(E),O?HS(E.toString(),m):GS(E.toString(),m)}else vt(2);l.G=0,l.l&&l.l.sa(f),J0(l),q0(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function J0(l){if(l.G=0,l.ka=[],l.l){const f=k0(l.h);(f.length!=0||l.i.length!=0)&&(R(l.ka,f),R(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function Z0(l,f,m){var E=m instanceof mi?qn(m):new mi(m);if(E.g!="")f&&(E.g=f+"."+E.g),Sl(E,E.s);else{var O=a.location;E=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var M=new mi(null);E&&xl(M,E),f&&(M.g=f),O&&Sl(M,O),m&&(M.l=m),E=M}return m=l.D,f=l.ya,m&&f&&ge(E,m,f),ge(E,"VER",l.la),bo(l,E),E}function e1(l,f,m){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Re(new Ao({eb:m})):new Re(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function t1(){}t=t1.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function bl(){}bl.prototype.g=function(l,f){return new jt(l,f)};function jt(l,f){it.call(this),this.g=new W0(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!w(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!w(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new ls(this)}S(jt,it),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){uh(this.g)},jt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=Xd(l),l=m);f.i.push(new LS(f.Ya++,l)),f.G==3&&kl(f)},jt.prototype.N=function(){this.g.l=null,delete this.j,uh(this.g),delete this.g,jt.aa.N.call(this)};function n1(l){Zd.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const m in f){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}S(n1,Zd);function r1(){eh.call(this),this.status=1}S(r1,eh);function ls(l){this.g=l}S(ls,t1),ls.prototype.ua=function(){yt(this.g,"a")},ls.prototype.ta=function(l){yt(this.g,new n1(l))},ls.prototype.sa=function(l){yt(this.g,new r1)},ls.prototype.ra=function(){yt(this.g,"b")},bl.prototype.createWebChannel=bl.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,kT=function(){return new bl},RT=function(){return _l()},AT=fi,Sp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wl.NO_ERROR=0,wl.TIMEOUT=8,wl.HTTP_ERROR=6,Ou=wl,_0.COMPLETE="complete",CT=_0,p0.EventType=_o,_o.OPEN="a",_o.CLOSE="b",_o.ERROR="c",_o.MESSAGE="d",it.prototype.listen=it.prototype.K,Qo=p0,IT=Ao,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,ST=Re}).apply(typeof eu<"u"?eu:typeof self<"u"?self:typeof window<"u"?window:{});const _v="@firebase/firestore";/**
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
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
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
 */let po="10.13.1";/**
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
 */const qi=new Qm("@firebase/firestore");function zo(){return qi.logLevel}function q(t,...e){if(qi.logLevel<=re.DEBUG){const n=e.map(ug);qi.debug(`Firestore (${po}): ${t}`,...n)}}function hr(t,...e){if(qi.logLevel<=re.ERROR){const n=e.map(ug);qi.error(`Firestore (${po}): ${t}`,...n)}}function Zs(t,...e){if(qi.logLevel<=re.WARN){const n=e.map(ug);qi.warn(`Firestore (${po}): ${t}`,...n)}}function ug(t){if(typeof t=="string")return t;try{/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${po}) INTERNAL ASSERTION FAILED: `+t;throw hr(e),new Error(e)}function fe(t,e){t||Y()}function J(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class PT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Gk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class Kk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Qk{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Kr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new PT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new ct(e)}}class Yk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Xk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Yk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new Jk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function eP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class bT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=eP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function eo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Le(0,0))}static max(){return new X(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Va{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Va.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Va?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends Va{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const tP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends Va{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return tP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(pe.fromString(e))}static fromName(e){return new H(pe.fromString(e).popFirst(5))}static empty(){return new H(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new pe(e.slice()))}}function nP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new ei(i,H.empty(),e)}function rP(t){return new ei(t.readTime,t.key,-1)}class ei{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ei(X.min(),H.empty(),-1)}static max(){return new ei(X.max(),H.empty(),-1)}}function iP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const sP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function dl(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==sP)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function aP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function hl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class cg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}cg.oe=-1;function xd(t){return t==null}function Rc(t){return t===0&&1/t==-1/0}function lP(t){return typeof t=="number"&&Number.isInteger(t)&&!Rc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function wv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function NT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tu(this.root,e,this.comparator,!0)}}class tu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Je.RED,this.left=i??Je.EMPTY,this.right=s??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ev(this.data.getIterator())}getIteratorFrom(e){return new Ev(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class Ev{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mn{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new mn([])}unionWith(e){let n=new tt(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return eo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class OT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new OT("Invalid base64 string: "+s):s}}(e);return new rt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const uP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ti(t){if(fe(!!t),typeof t=="string"){let e=0;const n=uP.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hi(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
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
 */function Sd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dg(t){const e=t.mapValue.fields.__previous_value__;return Sd(e)?dg(e):e}function Fa(t){const e=ti(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */class cP{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class za{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new za("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof za&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const nu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sd(t)?4:hP(t)?9007199254740991:dP(t)?10:11:Y()}function Mn(t,e){if(t===e)return!0;const n=Gi(t);if(n!==Gi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fa(t).isEqual(Fa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ti(i.timestampValue),a=ti(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Hi(i.bytesValue).isEqual(Hi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Oe(i.doubleValue),a=Oe(s.doubleValue);return o===a?Rc(o)===Rc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return eo(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(wv(o)!==wv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Mn(o[u],a[u])))return!1;return!0}(t,e);default:return Y()}}function Ua(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function to(t,e){if(t===e)return 0;const n=Gi(t),r=Gi(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Oe(s.integerValue||s.doubleValue),u=Oe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Tv(t.timestampValue,e.timestampValue);case 4:return Tv(Fa(t),Fa(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Hi(s),u=Hi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=ae(a[c],u[c]);if(h!==0)return h}return ae(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ae(Oe(s.latitude),Oe(o.latitude));return a!==0?a:ae(Oe(s.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return xv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const p=s.fields||{},g=o.fields||{},v=(a=p.value)===null||a===void 0?void 0:a.arrayValue,S=(u=g.value)===null||u===void 0?void 0:u.arrayValue,C=ae(((c=v==null?void 0:v.values)===null||c===void 0?void 0:c.length)||0,((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0);return C!==0?C:xv(v,S)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===nu.mapValue&&o===nu.mapValue)return 0;if(s===nu.mapValue)return 1;if(o===nu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const g=ae(u[p],h[p]);if(g!==0)return g;const v=to(a[u[p]],c[h[p]]);if(v!==0)return v}return ae(u.length,h.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Tv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=ti(t),r=ti(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function xv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=to(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function no(t){return Ip(t)}function Ip(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ti(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Hi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ip(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ip(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function kc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cp(t){return!!t&&"integerValue"in t}function hg(t){return!!t&&"arrayValue"in t}function Sv(t){return!!t&&"nullValue"in t}function Iv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Du(t){return!!t&&"mapValue"in t}function dP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function da(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=da(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=da(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Du(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=da(n)}setAll(e){let n=Ze.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=da(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Du(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Du(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){mo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Jt(da(this.value))}}function DT(t){const e=[];return mo(t.fields,(n,r)=>{const i=new Ze([n]);if(Du(r)){const s=DT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new mn(e)}/**
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
 */class ht{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ht(e,0,X.min(),X.min(),X.min(),Jt.empty(),0)}static newFoundDocument(e,n,r,i){return new ht(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new ht(e,2,n,X.min(),X.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,X.min(),X.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ro{constructor(e,n){this.position=e,this.inclusive=n}}function Cv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=to(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Av(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class $a{constructor(e,n="asc"){this.field=e,this.dir=n}}function fP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class jT{}class ze extends jT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mP(e,n,r):n==="array-contains"?new vP(e,r):n==="in"?new _P(e,r):n==="not-in"?new wP(e,r):n==="array-contains-any"?new EP(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gP(e,r):new yP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(to(n,this.value)):n!==null&&Gi(this.value)===Gi(n)&&this.matchesComparison(to(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends jT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new xn(e,n)}matches(e){return LT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function LT(t){return t.op==="and"}function MT(t){return pP(t)&&LT(t)}function pP(t){for(const e of t.filters)if(e instanceof xn)return!1;return!0}function Ap(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+no(t.value);if(MT(t))return t.filters.map(e=>Ap(e)).join(",");{const e=t.filters.map(n=>Ap(n)).join(",");return`${t.op}(${e})`}}function VT(t,e){return t instanceof ze?function(r,i){return i instanceof ze&&r.op===i.op&&r.field.isEqual(i.field)&&Mn(r.value,i.value)}(t,e):t instanceof xn?function(r,i){return i instanceof xn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&VT(o,i.filters[a]),!0):!1}(t,e):void Y()}function FT(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${no(n.value)}`}(t):t instanceof xn?function(n){return n.op.toString()+" {"+n.getFilters().map(FT).join(" ,")+"}"}(t):"Filter"}class mP extends ze{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class gP extends ze{constructor(e,n){super(e,"in",n),this.keys=zT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yP extends ze{constructor(e,n){super(e,"not-in",n),this.keys=zT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class vP extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hg(n)&&Ua(n.arrayValue,this.value)}}class _P extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ua(this.value.arrayValue,n)}}class wP extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ua(this.value.arrayValue,n)}}class EP extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ua(this.value.arrayValue,r))}}/**
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
 */class TP{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Rv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new TP(t,e,n,r,i,s,o)}function fg(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ap(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),xd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>no(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>no(r)).join(",")),e.ue=n}return e.ue}function pg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!VT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Av(t.startAt,e.startAt)&&Av(t.endAt,e.endAt)}function Rp(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ns{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function xP(t,e,n,r,i,s,o,a){return new ns(t,e,n,r,i,s,o,a)}function mg(t){return new ns(t)}function kv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gg(t){return t.collectionGroup!==null}function Ms(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new tt(Ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new $a(s,r))}),n.has(Ze.keyField().canonicalString())||e.ce.push(new $a(Ze.keyField(),r))}return e.ce}function On(t){const e=J(t);return e.le||(e.le=SP(e,Ms(t))),e.le}function SP(t,e){if(t.limitType==="F")return Rv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new $a(i.field,s)});const n=t.endAt?new ro(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ro(t.startAt.position,t.startAt.inclusive):null;return Rv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kp(t,e){const n=t.filters.concat([e]);return new ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Pc(t,e,n){return new ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Id(t,e){return pg(On(t),On(e))&&t.limitType===e.limitType}function UT(t){return`${fg(On(t))}|lt:${t.limitType}`}function hs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>FT(i)).join(", ")}]`),xd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>no(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>no(i)).join(",")),`Target(${r})`}(On(t))}; limitType=${t.limitType})`}function Cd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ms(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Cv(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Ms(r),i)||r.endAt&&!function(o,a,u){const c=Cv(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Ms(r),i))}(t,e)}function IP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $T(t){return(e,n)=>{let r=!1;for(const i of Ms(t)){const s=CP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function CP(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?to(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class go{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){mo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return NT(this.inner)}size(){return this.innerSize}}/**
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
 */const AP=new Ae(H.comparator);function fr(){return AP}const BT=new Ae(H.comparator);function Yo(...t){let e=BT;for(const n of t)e=e.insert(n.key,n);return e}function WT(t){let e=BT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ki(){return ha()}function qT(){return ha()}function ha(){return new go(t=>t.toString(),(t,e)=>t.isEqual(e))}const RP=new Ae(H.comparator),kP=new tt(H.comparator);function ne(...t){let e=kP;for(const n of t)e=e.add(n);return e}const PP=new tt(ae);function bP(){return PP}/**
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
 */function yg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rc(e)?"-0":e}}function HT(t){return{integerValue:""+t}}function NP(t,e){return lP(e)?HT(e):yg(t,e)}/**
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
 */class Ad{constructor(){this._=void 0}}function OP(t,e,n){return t instanceof bc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Sd(s)&&(s=dg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ba?KT(t,e):t instanceof Wa?QT(t,e):function(i,s){const o=GT(i,s),a=Pv(o)+Pv(i.Pe);return Cp(o)&&Cp(i.Pe)?HT(a):yg(i.serializer,a)}(t,e)}function DP(t,e,n){return t instanceof Ba?KT(t,e):t instanceof Wa?QT(t,e):n}function GT(t,e){return t instanceof Nc?function(r){return Cp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class bc extends Ad{}class Ba extends Ad{constructor(e){super(),this.elements=e}}function KT(t,e){const n=YT(e);for(const r of t.elements)n.some(i=>Mn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Wa extends Ad{constructor(e){super(),this.elements=e}}function QT(t,e){let n=YT(e);for(const r of t.elements)n=n.filter(i=>!Mn(i,r));return{arrayValue:{values:n}}}class Nc extends Ad{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Pv(t){return Oe(t.integerValue||t.doubleValue)}function YT(t){return hg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function jP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ba&&i instanceof Ba||r instanceof Wa&&i instanceof Wa?eo(r.elements,i.elements,Mn):r instanceof Nc&&i instanceof Nc?Mn(r.Pe,i.Pe):r instanceof bc&&i instanceof bc}(t.transform,e.transform)}class LP{constructor(e,n){this.version=e,this.transformResults=n}}class ir{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ir}static exists(e){return new ir(void 0,e)}static updateTime(e){return new ir(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ju(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rd{}function XT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ZT(t.key,ir.none()):new fl(t.key,t.data,ir.none());{const n=t.data,r=Jt.empty();let i=new tt(Ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new rs(t.key,r,new mn(i.toArray()),ir.none())}}function MP(t,e,n){t instanceof fl?function(i,s,o){const a=i.value.clone(),u=Nv(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof rs?function(i,s,o){if(!ju(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Nv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(JT(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function fa(t,e,n,r){return t instanceof fl?function(s,o,a,u){if(!ju(s.precondition,o))return a;const c=s.value.clone(),h=Ov(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof rs?function(s,o,a,u){if(!ju(s.precondition,o))return a;const c=Ov(s.fieldTransforms,u,o),h=o.data;return h.setAll(JT(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return ju(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function VP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=GT(r.transform,i||null);s!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,s))}return n||null}function bv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&eo(r,i,(s,o)=>jP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fl extends Rd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class rs extends Rd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function JT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Nv(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,DP(o,a,n[i]))}return r}function Ov(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,OP(s,o,e))}return r}class ZT extends Rd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class FP extends Rd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&MP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=qT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=XT(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&eo(this.mutations,e.mutations,(n,r)=>bv(n,r))&&eo(this.baseMutations,e.baseMutations,(n,r)=>bv(n,r))}}class vg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=function(){return RP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new vg(e,n,r,i)}}/**
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
 */class UP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $P{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Me,ie;function BP(t){switch(t){default:return Y();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function ex(t){if(t===void 0)return hr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Me.OK:return V.OK;case Me.CANCELLED:return V.CANCELLED;case Me.UNKNOWN:return V.UNKNOWN;case Me.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Me.INTERNAL:return V.INTERNAL;case Me.UNAVAILABLE:return V.UNAVAILABLE;case Me.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Me.NOT_FOUND:return V.NOT_FOUND;case Me.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Me.ABORTED:return V.ABORTED;case Me.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Me.DATA_LOSS:return V.DATA_LOSS;default:return Y()}}(ie=Me||(Me={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function WP(){return new TextEncoder}/**
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
 */const qP=new Di([4294967295,4294967295],0);function Dv(t){const e=WP().encode(t),n=new xT;return n.update(e),new Uint8Array(n.digest())}function jv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Di([n,r],0),new Di([i,s],0)]}class _g{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xo(`Invalid padding: ${n}`);if(r<0)throw new Xo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Di.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Di.fromNumber(r)));return i.compare(qP)===1&&(i=new Di([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Dv(e),[r,i]=jv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new _g(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Dv(e),[r,i]=jv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,pl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new kd(X.min(),i,new Ae(ae),fr(),ne())}}class pl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new pl(r,n,ne(),ne(),ne())}}/**
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
 */class Lu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class tx{constructor(e,n){this.targetId=e,this.me=n}}class nx{constructor(e,n,r=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Lv{constructor(){this.fe=0,this.ge=Vv(),this.pe=rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new pl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Vv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class HP{constructor(e){this.Le=e,this.Be=new Map,this.ke=fr(),this.qe=Mv(),this.Qe=new Ae(ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Rp(s))if(r===0){const o=new H(s.path);this.Ue(n,o,ht.newNoDocument(o,X.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Hi(r).toUint8Array()}catch(u){if(u instanceof OT)return Zs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new _g(o,i,s)}catch(u){return Zs(u instanceof Xo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Rp(a.target)){const u=new H(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ht.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new kd(e,n,this.Qe,this.ke,r);return this.ke=fr(),this.qe=Mv(),this.Qe=new Ae(ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Lv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new tt(ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Lv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Mv(){return new Ae(H.comparator)}function Vv(){return new Ae(H.comparator)}const GP={asc:"ASCENDING",desc:"DESCENDING"},KP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},QP={and:"AND",or:"OR"};class YP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pp(t,e){return t.useProto3Json||xd(e)?e:{value:e}}function Oc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function XP(t,e){return Oc(t,e.toTimestamp())}function Dn(t){return fe(!!t),X.fromTimestamp(function(n){const r=ti(n);return new Le(r.seconds,r.nanos)}(t))}function wg(t,e){return bp(t,e).canonicalString()}function bp(t,e){const n=function(i){return new pe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ix(t){const e=pe.fromString(t);return fe(ux(e)),e}function Np(t,e){return wg(t.databaseId,e.path)}function Xh(t,e){const n=ix(e);if(n.get(1)!==t.databaseId.projectId)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(ox(n))}function sx(t,e){return wg(t.databaseId,e)}function JP(t){const e=ix(t);return e.length===4?pe.emptyPath():ox(e)}function Op(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ox(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Fv(t,e,n){return{name:Np(t,e),fields:n.value.mapValue.fields}}function ZP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(fe(h===void 0||typeof h=="string"),rt.fromBase64String(h||"")):(fe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),rt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?V.UNKNOWN:ex(c.code);return new B(h,c.message||"")}(o);n=new nx(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xh(t,r.document.name),s=Dn(r.document.updateTime),o=r.document.createTime?Dn(r.document.createTime):X.min(),a=new Jt({mapValue:{fields:r.document.fields}}),u=ht.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Lu(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Xh(t,r.document),s=r.readTime?Dn(r.readTime):X.min(),o=ht.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Lu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Xh(t,r.document),s=r.removedTargetIds||[];n=new Lu([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new $P(i,s),a=r.targetId;n=new tx(a,o)}}return n}function eb(t,e){let n;if(e instanceof fl)n={update:Fv(t,e.key,e.value)};else if(e instanceof ZT)n={delete:Np(t,e.key)};else if(e instanceof rs)n={update:Fv(t,e.key,e.data),updateMask:ub(e.fieldMask)};else{if(!(e instanceof FP))return Y();n={verify:Np(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof bc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ba)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Wa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Nc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:XP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function tb(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Dn(i.updateTime):Dn(s);return o.isEqual(X.min())&&(o=Dn(s)),new LP(o,i.transformResults||[])}(n,e))):[]}function nb(t,e){return{documents:[sx(t,e.path)]}}function rb(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=sx(t,i);const s=function(c){if(c.length!==0)return lx(xn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(g){return{field:fs(g.field),direction:ob(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Pp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function ib(t){let e=JP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(p){const g=ax(p);return g instanceof xn&&MT(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(S){return new $a(ps(S.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(p){let g;return g=typeof p=="object"?p.value:p,xd(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,v=p.values||[];return new ro(v,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,v=p.values||[];return new ro(v,g)}(n.endAt)),xP(e,i,o,s,a,"F",u,c)}function sb(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ax(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ps(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ps(n.unaryFilter.field);return ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ps(n.unaryFilter.field);return ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ps(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return ze.create(ps(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xn.create(n.compositeFilter.filters.map(r=>ax(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function ob(t){return GP[t]}function ab(t){return KP[t]}function lb(t){return QP[t]}function fs(t){return{fieldPath:t.canonicalString()}}function ps(t){return Ze.fromServerFormat(t.fieldPath)}function lx(t){return t instanceof ze?function(n){if(n.op==="=="){if(Iv(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NAN"}};if(Sv(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Iv(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NAN"}};if(Sv(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(n.field),op:ab(n.op),value:n.value}}}(t):t instanceof xn?function(n){const r=n.getFilters().map(i=>lx(i));return r.length===1?r[0]:{compositeFilter:{op:lb(n.op),filters:r}}}(t):Y()}function ub(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ux(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Lr{constructor(e,n,r,i,s=X.min(),o=X.min(),a=rt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class cb{constructor(e){this.ct=e}}function db(t){const e=ib({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pc(e,e.limit,"L"):e}/**
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
 */class hb{constructor(){this.un=new fb}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(ei.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(ei.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class fb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new tt(pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new tt(pe.comparator)).toArray()}}/**
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
 */class io{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new io(0)}static kn(){return new io(-1)}}/**
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
 */class pb{constructor(){this.changes=new go(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class mb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class gb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&fa(r.mutation,i,mn.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=ki();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Yo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ki();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=fr();const o=ha(),a=function(){return ha()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof rs)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),fa(h.mutation,c,h.mutation.getFieldMask(),Le.now())):o.set(c.key,mn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var p;return a.set(c,new mb(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ha();let i=new Ae((o,a)=>o-a),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||mn.empty();h=a.applyToLocalView(c,h),r.set(u,h);const p=(i.get(a.batchId)||ne()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,p=qT();h.forEach(g=>{if(!s.has(g)){const v=XT(n.get(g),r.get(g));v!==null&&p.set(g,v),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(ki());let a=-1,u=s;return o.next(c=>F.forEach(c,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(h=>({batchId:a,changes:WT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Yo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Yo();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(p,g){return new ns(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,ht.newInvalidDocument(h)))});let a=Yo();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&fa(h.mutation,c,mn.empty(),Le.now()),Cd(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class yb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Dn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:db(i.bundledQuery),readTime:Dn(i.readTime)}}(n)),F.resolve()}}/**
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
 */class vb{constructor(){this.overlays=new Ae(H.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ki();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=ki(),s=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=ki(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=ki(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new UP(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class _b{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Eg{constructor(){this.Tr=new tt(We.Er),this.dr=new tt(We.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new We(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new We(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new pe([])),r=new We(n,e),i=new We(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new pe([])),r=new We(n,e),i=new We(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new We(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||ae(e.wr,n.wr)}static Ar(e,n){return ae(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
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
 */class wb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new tt(We.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zP(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new We(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),i=new We(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(ae);return n.forEach(i=>{const s=new We(i,0),o=new We(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new We(new H(s),0);let a=new tt(ae);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new We(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new We(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Eb{constructor(e){this.Mr=e,this.docs=function(){return new Ae(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=fr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ht.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=fr();const o=n.path,a=new H(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||iP(rP(h),r)<=0||(i.has(h.key)||Cd(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Tb(this)}getSize(e){return F.resolve(this.size)}}class Tb extends pb{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class xb{constructor(e){this.persistence=e,this.Nr=new go(n=>fg(n),pg),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Eg,this.targetCount=0,this.kr=io.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new io(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
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
 */class Sb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new cg(0),this.Kr=!1,this.Kr=!0,this.$r=new _b,this.referenceDelegate=e(this),this.Ur=new xb(this),this.indexManager=new hb,this.remoteDocumentCache=function(i){return new Eb(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new cb(n),this.Gr=new yb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new wb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new Ib(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Ib extends oP{constructor(e){super(),this.currentSequenceNumber=e}}class Tg{constructor(e){this.persistence=e,this.Jr=new Eg,this.Yr=null}static Zr(e){return new Tg(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class xg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new xg(e,n.fromCache,r,i)}}/**
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
 */class Cb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ab{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return y6()?8:aP(pt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Cb;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(zo()<=re.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",hs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(zo()<=re.DEBUG&&q("QueryEngine","Query:",hs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(zo()<=re.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",hs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(n))):F.resolve())}Yi(e,n){if(kv(n))return F.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Pc(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Pc(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return kv(n)||i.isEqual(X.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(zo()<=re.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hs(n)),this.rs(e,o,n,nP(i,-1)).next(a=>a))})}ts(e,n){let r=new tt($T(e));return n.forEach((i,s)=>{Cd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return zo()<=re.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",hs(n)),this.Ji.getDocumentsMatchingQuery(e,n,ei.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Rb{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ae(ae),this._s=new go(s=>fg(s),pg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function kb(t,e,n,r){return new Rb(t,e,n,r)}async function cx(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ne();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function Pb(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const p=c.batch,g=p.keys();let v=F.resolve();return g.forEach(S=>{v=v.next(()=>h.getEntry(u,S)).next(C=>{const R=c.docVersions.get(S);fe(R!==null),C.version.compareTo(R)<0&&(p.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),h.addEntry(C)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ne();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function dx(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function bb(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,p)=>{const g=i.get(p);if(!g)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,p)));let v=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(rt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),i=i.insert(p,v),function(C,R,T){return C.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(g,v,h)&&a.push(n.Ur.updateTargetData(s,v))});let u=fr(),c=ne();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(Nb(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(X.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function Nb(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=fr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function Ob(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Db(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Dp(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!hl(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function zv(t,e,n){const r=J(t);let i=X.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const p=J(u),g=p._s.get(h);return g!==void 0?F.resolve(p.os.get(g)):p.Ur.getTargetData(c,h)}(r,o,On(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ne())).next(a=>(jb(r,IP(e),a),{documents:a,Ts:s})))}function jb(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Uv{constructor(){this.activeTargetIds=bP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lb{constructor(){this.so=new Uv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Uv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Mb{_o(e){}shutdown(){}}/**
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
 */class $v{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ru=null;function Jh(){return ru===null?ru=function(){return 268435456+Math.round(2147483648*Math.random())}():ru++,"0x"+ru.toString(16)}/**
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
 */const Vb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Fb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ut="WebChannelConnection";class zb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Jh(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(q("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Zs("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+po}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=Vb[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Jh();return new Promise((o,a)=>{const u=new ST;u.setWithCredentials(!0),u.listenOnce(CT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ou.NO_ERROR:const h=u.getResponseJson();q(ut,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Ou.TIMEOUT:q(ut,`RPC '${e}' ${s} timed out`),a(new B(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ou.HTTP_ERROR:const p=u.getStatus();if(q(ut,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const S=function(R){const T=R.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(T)>=0?T:V.UNKNOWN}(v.status);a(new B(S,v.message))}else a(new B(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new B(V.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{q(ut,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(ut,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Jh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kT(),a=RT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new IT({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");q(ut,`Creating RPC '${e}' stream ${i}: ${h}`,u);const p=o.createWebChannel(h,u);let g=!1,v=!1;const S=new Fb({Io:R=>{v?q(ut,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(g||(q(ut,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),q(ut,`RPC '${e}' stream ${i} sending:`,R),p.send(R))},To:()=>p.close()}),C=(R,T,w)=>{R.listen(T,y=>{try{w(y)}catch(k){setTimeout(()=>{throw k},0)}})};return C(p,Qo.EventType.OPEN,()=>{v||(q(ut,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),C(p,Qo.EventType.CLOSE,()=>{v||(v=!0,q(ut,`RPC '${e}' stream ${i} transport closed`),S.So())}),C(p,Qo.EventType.ERROR,R=>{v||(v=!0,Zs(ut,`RPC '${e}' stream ${i} transport errored:`,R),S.So(new B(V.UNAVAILABLE,"The operation could not be completed")))}),C(p,Qo.EventType.MESSAGE,R=>{var T;if(!v){const w=R.data[0];fe(!!w);const y=w,k=y.error||((T=y[0])===null||T===void 0?void 0:T.error);if(k){q(ut,`RPC '${e}' stream ${i} received error:`,k);const D=k.status;let L=function(I){const A=Me[I];if(A!==void 0)return ex(A)}(D),x=k.message;L===void 0&&(L=V.INTERNAL,x="Unknown error status: "+D+" with message "+k.message),v=!0,S.So(new B(L,x)),p.close()}else q(ut,`RPC '${e}' stream ${i} received:`,w),S.bo(w)}}),C(a,AT.STAT_EVENT,R=>{R.stat===Sp.PROXY?q(ut,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===Sp.NOPROXY&&q(ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Zh(){return typeof document<"u"?document:null}/**
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
 */function Pd(t){return new YP(t,!0)}/**
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
 */class hx{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class fx{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new hx(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(hr(n.toString()),hr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new B(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ub extends fx{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=ZP(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Dn(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Op(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Rp(u)?{documents:nb(s,u)}:{query:rb(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=rx(s,o.resumeToken);const c=Pp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Oc(s,o.snapshotVersion.toTimestamp());const c=Pp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=sb(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Op(this.serializer),n.removeTarget=e,this.a_(n)}}class $b extends fx{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return fe(!!e.streamToken),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=tb(e.writeResults,e.commitTime),r=Dn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Op(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>eb(this.serializer,r))};this.a_(n)}}/**
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
 */class Bb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,bp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,bp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Wb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class qb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{is(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.L_.add(4),await ml(c),c.q_.set("Unknown"),c.L_.delete(4),await bd(c)}(this))})}),this.q_=new Wb(r,i)}}async function bd(t){if(is(t))for(const e of t.B_)await e(!0)}async function ml(t){for(const e of t.B_)await e(!1)}function px(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Ag(n)?Cg(n):yo(n).r_()&&Ig(n,e))}function Sg(t,e){const n=J(t),r=yo(n);n.N_.delete(e),r.r_()&&mx(n,e),n.N_.size===0&&(r.r_()?r.o_():is(n)&&n.q_.set("Unknown"))}function Ig(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}yo(t).A_(e)}function mx(t,e){t.Q_.xe(e),yo(t).R_(e)}function Cg(t){t.Q_=new HP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),yo(t).start(),t.q_.v_()}function Ag(t){return is(t)&&!yo(t).n_()&&t.N_.size>0}function is(t){return J(t).L_.size===0}function gx(t){t.Q_=void 0}async function Hb(t){t.q_.set("Online")}async function Gb(t){t.N_.forEach((e,n)=>{Ig(t,e)})}async function Kb(t,e){gx(t),Ag(t)?(t.q_.M_(e),Cg(t)):t.q_.set("Unknown")}async function Qb(t,e,n){if(t.q_.set("Online"),e instanceof nx&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Dc(t,r)}else if(e instanceof Lu?t.Q_.Ke(e):e instanceof tx?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await dx(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(rt.EMPTY_BYTE_STRING,h.snapshotVersion)),mx(s,u);const p=new Lr(h.target,u,c,h.sequenceNumber);Ig(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Dc(t,r)}}async function Dc(t,e,n){if(!hl(e))throw e;t.L_.add(1),await ml(t),t.q_.set("Offline"),n||(n=()=>dx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await bd(t)})}function yx(t,e){return e().catch(n=>Dc(t,n,e))}async function Nd(t){const e=J(t),n=ni(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Yb(e);)try{const i=await Ob(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Xb(e,i)}catch(i){await Dc(e,i)}vx(e)&&_x(e)}function Yb(t){return is(t)&&t.O_.length<10}function Xb(t,e){t.O_.push(e);const n=ni(t);n.r_()&&n.V_&&n.m_(e.mutations)}function vx(t){return is(t)&&!ni(t).n_()&&t.O_.length>0}function _x(t){ni(t).start()}async function Jb(t){ni(t).p_()}async function Zb(t){const e=ni(t);for(const n of t.O_)e.m_(n.mutations)}async function e8(t,e,n){const r=t.O_.shift(),i=vg.from(r,e,n);await yx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Nd(t)}async function t8(t,e){e&&ni(t).V_&&await async function(r,i){if(function(o){return BP(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();ni(r).s_(),await yx(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Nd(r)}}(t,e),vx(t)&&_x(t)}async function Bv(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=is(n);n.L_.add(3),await ml(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await bd(n)}async function n8(t,e){const n=J(t);e?(n.L_.delete(2),await bd(n)):e||(n.L_.add(2),await ml(n),n.q_.set("Unknown"))}function yo(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new Ub(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:Hb.bind(null,t),Ro:Gb.bind(null,t),mo:Kb.bind(null,t),d_:Qb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Ag(t)?Cg(t):t.q_.set("Unknown")):(await t.K_.stop(),gx(t))})),t.K_}function ni(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new $b(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Jb.bind(null,t),mo:t8.bind(null,t),f_:Zb.bind(null,t),g_:e8.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Nd(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Rg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Rg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kg(t,e){if(hr("AsyncQueue",`${e}: ${t}`),hl(t))return new B(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Vs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Yo(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new Vs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Wv{constructor(){this.W_=new Ae(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class so{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new so(e,n,Vs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Id(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class r8{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class i8{constructor(){this.queries=qv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=qv(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new B(V.ABORTED,"Firestore shutting down"))}}function qv(){return new go(t=>UT(t),Id)}async function wx(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new r8,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=kg(o,`Initialization of query '${hs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Pg(n)}async function Ex(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function s8(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Pg(n)}function o8(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Pg(t){t.Y_.forEach(e=>{e.next()})}var jp,Hv;(Hv=jp||(jp={})).ea="default",Hv.Cache="cache";class Tx{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new so(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=so.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==jp.Cache}}/**
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
 */class xx{constructor(e){this.key=e}}class Sx{constructor(e){this.key=e}}class a8{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=$T(e),this.Ra=new Vs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Wv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const g=i.get(h),v=Cd(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),C=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let R=!1;g&&v?g.data.isEqual(v.data)?S!==C&&(r.track({type:3,doc:v}),R=!0):this.ga(g,v)||(r.track({type:2,doc:v}),R=!0,(u&&this.Aa(v,u)>0||c&&this.Aa(v,c)<0)&&(a=!0)):!g&&v?(r.track({type:0,doc:v}),R=!0):g&&!v&&(r.track({type:1,doc:g}),R=!0,(u||c)&&(a=!0)),R&&(v?(o=o.add(v),s=C?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,p)=>function(v,S){const C=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return C(v)-C(S)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new so(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Wv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Sx(r))}),this.da.forEach(r=>{e.has(r)||n.push(new xx(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return so.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class l8{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class u8{constructor(e){this.key=e,this.va=!1}}class c8{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new go(a=>UT(a),Id),this.Ma=new Map,this.xa=new Set,this.Oa=new Ae(H.comparator),this.Na=new Map,this.La=new Eg,this.Ba={},this.ka=new Map,this.qa=io.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function d8(t,e,n=!0){const r=Px(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Ix(r,e,n,!0),i}async function h8(t,e){const n=Px(t);await Ix(n,e,!0,!1)}async function Ix(t,e,n,r){const i=await Db(t.localStore,On(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await f8(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&px(t.remoteStore,i),a}async function f8(t,e,n,r,i){t.Ka=(p,g,v)=>async function(C,R,T,w){let y=R.view.ma(T);y.ns&&(y=await zv(C.localStore,R.query,!1).then(({documents:x})=>R.view.ma(x,y)));const k=w&&w.targetChanges.get(R.targetId),D=w&&w.targetMismatches.get(R.targetId)!=null,L=R.view.applyChanges(y,C.isPrimaryClient,k,D);return Kv(C,R.targetId,L.wa),L.snapshot}(t,p,g,v);const s=await zv(t.localStore,e,!0),o=new a8(e,s.Ts),a=o.ma(s.documents),u=pl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);Kv(t,n,c.wa);const h=new l8(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function p8(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Id(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Dp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Sg(r.remoteStore,i.targetId),Lp(r,i.targetId)}).catch(dl)):(Lp(r,i.targetId),await Dp(r.localStore,i.targetId,!0))}async function m8(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sg(n.remoteStore,r.targetId))}async function g8(t,e,n){const r=x8(t);try{const i=await function(o,a){const u=J(o),c=Le.now(),h=a.reduce((v,S)=>v.add(S.key),ne());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let S=fr(),C=ne();return u.cs.getEntries(v,h).next(R=>{S=R,S.forEach((T,w)=>{w.isValidDocument()||(C=C.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,S)).next(R=>{p=R;const T=[];for(const w of a){const y=VP(w,p.get(w.key).overlayedDocument);y!=null&&T.push(new rs(w.key,y,DT(y.value.mapValue),ir.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,T,a)}).next(R=>{g=R;const T=R.applyToLocalDocumentSet(p,C);return u.documentOverlayCache.saveOverlays(v,R.batchId,T)})}).then(()=>({batchId:g.batchId,changes:WT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ae(ae)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await gl(r,i.changes),await Nd(r.remoteStore)}catch(i){const s=kg(i,"Failed to persist write");n.reject(s)}}async function Cx(t,e){const n=J(t);try{const r=await bb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?fe(o.va):i.removedDocuments.size>0&&(fe(o.va),o.va=!1))}),await gl(n,r,e)}catch(r){await dl(r)}}function Gv(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=J(o);u.onlineState=a;let c=!1;u.queries.forEach((h,p)=>{for(const g of p.j_)g.Z_(a)&&(c=!0)}),c&&Pg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function y8(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ae(H.comparator);o=o.insert(s,ht.newNoDocument(s,X.min()));const a=ne().add(s),u=new kd(X.min(),new Map,new Ae(ae),o,a);await Cx(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),bg(r)}else await Dp(r.localStore,e,!1).then(()=>Lp(r,e,n)).catch(dl)}async function v8(t,e){const n=J(t),r=e.batch.batchId;try{const i=await Pb(n.localStore,e);Rx(n,r,null),Ax(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await gl(n,i)}catch(i){await dl(i)}}async function _8(t,e,n){const r=J(t);try{const i=await function(o,a){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(p=>(fe(p!==null),h=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);Rx(r,e,n),Ax(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await gl(r,i)}catch(i){await dl(i)}}function Ax(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Rx(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Lp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||kx(t,r)})}function kx(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Sg(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),bg(t))}function Kv(t,e,n){for(const r of n)r instanceof xx?(t.La.addReference(r.key,e),w8(t,r)):r instanceof Sx?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||kx(t,r.key)):Y()}function w8(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),bg(t))}function bg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(pe.fromString(e)),r=t.qa.next();t.Na.set(r,new u8(n)),t.Oa=t.Oa.insert(n,r),px(t.remoteStore,new Lr(On(mg(n.path)),r,"TargetPurposeLimboResolution",cg.oe))}}async function gl(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=xg.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=J(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,g=>F.forEach(g.$i,v=>h.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>F.forEach(g.Ui,v=>h.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!hl(p))throw p;q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const v=h.os.get(g),S=v.snapshotVersion,C=v.withLastLimboFreeSnapshotVersion(S);h.os=h.os.insert(g,C)}}}(r.localStore,s))}async function E8(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await cx(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new B(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await gl(n,r.hs)}}function T8(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function Px(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=T8.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y8.bind(null,e),e.Ca.d_=s8.bind(null,e.eventManager),e.Ca.$a=o8.bind(null,e.eventManager),e}function x8(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=v8.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_8.bind(null,e),e}class Qv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Pd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return kb(this.persistence,new Ab,e.initialUser,this.serializer)}createPersistence(e){return new Sb(Tg.Zr,this.serializer)}createSharedClientState(e){return new Lb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class S8{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=E8.bind(null,this.syncEngine),await n8(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new i8}()}createDatastore(e){const n=Pd(e.databaseInfo.databaseId),r=function(s){return new zb(s)}(e.databaseInfo);return function(s,o,a,u){return new Bb(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new qb(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Gv(this.syncEngine,n,0),function(){return $v.D()?new $v:new Mb}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const p=new c8(i,s,o,a,u,c);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ml(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 */class bx{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):hr("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class I8{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=bT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ef(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cx(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Yv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await A8(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Bv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Bv(e.remoteStore,i)),t._onlineComponents=e}function C8(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function A8(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await ef(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!C8(n))throw n;Zs("Error using user provided cache. Falling back to memory cache: "+n),await ef(t,new Qv)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await ef(t,new Qv);return t._offlineComponents}async function Nx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Yv(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Yv(t,new S8))),t._onlineComponents}function R8(t){return Nx(t).then(e=>e.syncEngine)}async function Mp(t){const e=await Nx(t),n=e.eventManager;return n.onListen=d8.bind(null,e.syncEngine),n.onUnlisten=p8.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=h8.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=m8.bind(null,e.syncEngine),n}function k8(t,e,n={}){const r=new Kr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new bx({next:g=>{o.enqueueAndForget(()=>Ex(s,p)),g.fromCache&&u.source==="server"?c.reject(new B(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new Tx(a,h,{includeMetadataChanges:!0,_a:!0});return wx(s,p)}(await Mp(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Ox(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Xv=new Map;/**
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
 */function Dx(t,e,n){if(!n)throw new B(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function P8(t,e,n,r){if(e===!0&&r===!0)throw new B(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jv(t){if(!H.isDocumentKey(t))throw new B(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zv(t){if(H.isDocumentKey(t))throw new B(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Od(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function ji(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Od(t);throw new B(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class e_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}P8("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ox((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new e_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new e_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Gk;switch(r.type){case"firstParty":return new Xk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xv.get(n);r&&(q("ComponentProvider","Removing Datastore"),Xv.delete(n),r.terminate())}(this),Promise.resolve()}}function b8(t,e,n,r={}){var i;const s=(t=ji(t,Dd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=ct.MOCK_USER;else{a=VE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ct(c)}t._authCredentials=new Kk(new PT(a,u))}}/**
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
 */class zn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zn(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Qr extends zn{constructor(e,n,r){super(e,n,mg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new H(e))}withConverter(e){return new Qr(this.firestore,e,this._path)}}function jn(t,e,...n){if(t=mt(t),Dx("collection","path",e),t instanceof Dd){const r=pe.fromString(e,...n);return Zv(r),new Qr(t,null,r)}{if(!(t instanceof Bt||t instanceof Qr))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Zv(r),new Qr(t.firestore,null,r)}}function N8(t,e,...n){if(t=mt(t),arguments.length===1&&(e=bT.newId()),Dx("doc","path",e),t instanceof Dd){const r=pe.fromString(e,...n);return Jv(r),new Bt(t,null,new H(r))}{if(!(t instanceof Bt||t instanceof Qr))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Jv(r),new Bt(t.firestore,t instanceof Qr?t.converter:null,new H(r))}}/**
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
 */class O8{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new hx(this,"async_queue_retry"),this.Eu=()=>{const n=Zh();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Zh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Zh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new Kr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!hl(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw hr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=Rg.createAndSchedule(this,e,n,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&Y()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}function t_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class qa extends Dd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new O8}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Lx(this),this._firestoreClient.terminate()}}function jx(t,e){const n=typeof t=="object"?t:Xm(),r=typeof t=="string"?t:"(default)",i=_d(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=jE("firestore");s&&b8(i,...s)}return i}function Ng(t){return t._firestoreClient||Lx(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Lx(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new cP(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Ox(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new I8(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class oo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oo(rt.fromBase64String(e))}catch(n){throw new B(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new oo(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Og{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Mx{constructor(e){this._methodName=e}}/**
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
 */class Dg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
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
 */class jg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const D8=/^__.*__$/;class j8{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new rs(e,this.data,this.fieldMask,n,this.fieldTransforms):new fl(e,this.data,n,this.fieldTransforms)}}function Vx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Lg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Lg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return jc(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Vx(this.wu)&&D8.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class L8{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Pd(e)}Nu(e,n,r,i=!1){return new Lg({wu:e,methodName:n,Ou:r,path:Ze.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mg(t){const e=t._freezeSettings(),n=Pd(t._databaseId);return new L8(t._databaseId,!!e.ignoreUndefinedProperties,n)}function M8(t,e,n,r,i,s={}){const o=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);$x("Data must be an object, but it was:",o,r);const a=zx(r,o);let u,c;if(s.merge)u=new mn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const g=V8(e,p,n);if(!o.contains(g))throw new B(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);z8(h,g)||h.push(g)}u=new mn(h),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new j8(new Jt(a),u,c)}function Fx(t,e,n,r=!1){return Vg(n,t.Nu(r?4:3,e))}function Vg(t,e){if(Ux(t=mt(t)))return $x("Unsupported field value:",e,t),zx(t,e);if(t instanceof Mx)return function(r,i){if(!Vx(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Vg(a,i.Fu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:Oc(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Oc(i.serializer,s)}}if(r instanceof Dg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof oo)return{bytesValue:rx(i.serializer,r._byteString)};if(r instanceof Bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof jg)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Mu("VectorValues must only contain numeric values.");return yg(a.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${Od(r)}`)}(t,e)}function zx(t,e){const n={};return NT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mo(t,(r,i)=>{const s=Vg(i,e.bu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ux(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Dg||t instanceof oo||t instanceof Bt||t instanceof Mx||t instanceof jg)}function $x(t,e,n){if(!Ux(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Od(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function V8(t,e,n){if((e=mt(e))instanceof Og)return e._internalPath;if(typeof e=="string")return Bx(t,e);throw jc("Field path arguments must be of type string or ",t,!1,void 0,n)}const F8=new RegExp("[~\\*/\\[\\]]");function Bx(t,e,n){if(e.search(F8)>=0)throw jc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Og(...e.split("."))._internalPath}catch{throw jc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(V.INVALID_ARGUMENT,a+t+u)}function z8(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Fg{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new U8(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class U8 extends Fg{data(){return super.data()}}function jd(t,e){return typeof e=="string"?Bx(t,e):e instanceof Og?e._internalPath:e._delegate._internalPath}/**
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
 */function Wx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zg{}class Ld extends zg{}function Lc(t,e,...n){let r=[];e instanceof zg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Ug).length,a=s.filter(u=>u instanceof Md).length;if(o>1||o>0&&a>0)throw new B(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Md extends Ld{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Md(e,n,r)}_apply(e){const n=this._parse(e);return Hx(e._query,n),new zn(e.firestore,e.converter,kp(e._query,n))}_parse(e){const n=Mg(e.firestore);return function(s,o,a,u,c,h,p){let g;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new B(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){s_(p,h);const v=[];for(const S of p)v.push(i_(u,s,S));g={arrayValue:{values:v}}}else g=i_(u,s,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||s_(p,h),g=Fx(a,o,p,h==="in"||h==="not-in");return ze.create(c,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function qx(t,e,n){const r=e,i=jd("where",t);return Md._create(i,r,n)}class Ug extends zg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ug(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:xn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)Hx(o,u),o=kp(o,u)}(e._query,n),new zn(e.firestore,e.converter,kp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $g extends Ld{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new $g(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $a(s,o)}(e._query,this._field,this._direction);return new zn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ns(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function n_(t,e="asc"){const n=e,r=jd("orderBy",t);return $g._create(r,n)}class Bg extends Ld{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Bg(e,n,r)}_apply(e){return new zn(e.firestore,e.converter,Pc(e._query,this._limit,this._limitType))}}function r_(t){return Bg._create("limit",t,"F")}class Wg extends Ld{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Wg(e,n,r)}_apply(e){const n=B8(e,this.type,this._docOrFields,this._inclusive);return new zn(e.firestore,e.converter,function(i,s){return new ns(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function $8(...t){return Wg._create("startAfter",t,!1)}function B8(t,e,n,r){if(n[0]=mt(n[0]),n[0]instanceof Fg)return function(s,o,a,u,c){if(!u)throw new B(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const p of Ms(s))if(p.field.isKeyField())h.push(kc(o,u.key));else{const g=u.data.field(p.field);if(Sd(g))throw new B(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const v=p.field.canonicalString();throw new B(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}h.push(g)}return new ro(h,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Mg(t.firestore);return function(o,a,u,c,h,p){const g=o.explicitOrderBy;if(h.length>g.length)throw new B(V.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let S=0;S<h.length;S++){const C=h[S];if(g[S].field.isKeyField()){if(typeof C!="string")throw new B(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof C}`);if(!gg(o)&&C.indexOf("/")!==-1)throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${C}' contains a slash.`);const R=o.path.child(pe.fromString(C));if(!H.isDocumentKey(R))throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${R}' is not because it contains an odd number of segments.`);const T=new H(R);v.push(kc(a,T))}else{const R=Fx(u,c,C);v.push(R)}}return new ro(v,p)}(t._query,t.firestore._databaseId,i,e,n,r)}}function i_(t,e,n){if(typeof(n=mt(n))=="string"){if(n==="")throw new B(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gg(e)&&n.indexOf("/")!==-1)throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!H.isDocumentKey(r))throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return kc(t,new H(r))}if(n instanceof Bt)return kc(t,n._key);throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Od(n)}.`)}function s_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Hx(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class W8{convertValue(e,n="none"){switch(Gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return mo(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Oe(o.doubleValue));return new jg(s)}convertGeoPoint(e){return new Dg(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=dg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fa(e));default:return null}}convertTimestamp(e){const n=ti(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);fe(ux(r));const i=new za(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||hr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function q8(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Jo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gx extends Fg{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Mu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(jd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Mu extends Gx{data(e={}){return super.data(e)}}class Kx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Jo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Mu(this._firestore,this._userDataWriter,r.key,r,new Jo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Mu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Jo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Mu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Jo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:H8(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function H8(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class qg extends W8{constructor(e){super(),this.firestore=e}convertBytes(e){return new oo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function Li(t){t=ji(t,zn);const e=ji(t.firestore,qa),n=Ng(e),r=new qg(e);return Wx(t._query),k8(n,t._query).then(i=>new Kx(e,r,t,i))}function Hg(t,e){const n=ji(t.firestore,qa),r=N8(t),i=q8(t.converter,e);return K8(n,[M8(Mg(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ir.exists(!1))]).then(()=>r)}function G8(t,...e){var n,r,i;t=mt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||t_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(t_(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,h;if(t instanceof Bt)c=ji(t.firestore,qa),h=mg(t._key.path),u={next:p=>{e[o]&&e[o](Q8(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=ji(t,zn);c=ji(p.firestore,qa),h=p._query;const g=new qg(c);u={next:v=>{e[o]&&e[o](new Kx(c,g,p,v))},error:e[o+1],complete:e[o+2]},Wx(t._query)}return function(g,v,S,C){const R=new bx(C),T=new Tx(v,R,S);return g.asyncQueue.enqueueAndForget(async()=>wx(await Mp(g),T)),()=>{R.za(),g.asyncQueue.enqueueAndForget(async()=>Ex(await Mp(g),T))}}(Ng(c),h,a,u)}function K8(t,e){return function(r,i){const s=new Kr;return r.asyncQueue.enqueueAndForget(async()=>g8(await R8(r),i,s)),s.promise}(Ng(t),e)}function Q8(t,e,n){const r=n.docs.get(e._key),i=new qg(t);return new Gx(t,i,e._key,r,new Jo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){po=i})(ts),$i(new Zr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new qa(new Qk(r.getProvider("auth-internal")),new Zk(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new za(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),bn(_v,"4.7.1",e),bn(_v,"4.7.1","esm2017")})();/**
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
 */const Qx="firebasestorage.googleapis.com",Y8="storageBucket",X8=2*60*1e3,J8=10*60*1e3;/**
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
 */class Un extends Fn{constructor(e,n,r=0){super(tf(e),`Firebase Storage: ${n} (${tf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Un.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return tf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Vn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Vn||(Vn={}));function tf(t){return"storage/"+t}function Z8(){const t="An unknown error occurred, please check the error payload for server response.";return new Un(Vn.UNKNOWN,t)}function eN(){return new Un(Vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function tN(){return new Un(Vn.CANCELED,"User canceled the upload/download.")}function nN(t){return new Un(Vn.INVALID_URL,"Invalid URL '"+t+"'.")}function rN(t){return new Un(Vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function o_(t){return new Un(Vn.INVALID_ARGUMENT,t)}function Yx(){return new Un(Vn.APP_DELETED,"The Firebase app was deleted.")}function iN(t){return new Un(Vn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class gn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=gn.makeFromUrl(e,n)}catch{return new gn(e,"")}if(r.path==="")return r;throw rN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(k){k.path_=decodeURIComponent(k.path)}const h="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${h}/b/${i}/o${g}`,"i"),S={bucket:1,path:3},C=n===Qx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",T=new RegExp(`^https?://${C}/${i}/${R}`,"i"),y=[{regex:a,indices:u,postModify:s},{regex:v,indices:S,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let k=0;k<y.length;k++){const D=y[k],L=D.regex.exec(e);if(L){const x=L[D.indices.bucket];let _=L[D.indices.path];_||(_=""),r=new gn(x,_),D.postModify(r);break}}if(r==null)throw nN(e);return r}}class sN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function oN(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...R){c||(c=!0,e.apply(null,R))}function p(R){i=setTimeout(()=>{i=null,t(v,u())},R)}function g(){s&&clearTimeout(s)}function v(R,...T){if(c){g();return}if(R){g(),h.call(null,R,...T);return}if(u()||o){g(),h.call(null,R,...T);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,p(y)}let S=!1;function C(R){S||(S=!0,g(),!c&&(i!==null?(R||(a=2),clearTimeout(i),p(0)):R||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,C(!0)},n),C}function aN(t){t(!1)}/**
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
 */function lN(t){return t!==void 0}function a_(t,e,n,r){if(r<e)throw o_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw o_(`Invalid value for '${t}'. Expected ${n} or less.`)}function uN(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Mc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Mc||(Mc={}));/**
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
 */function cN(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class dN{constructor(e,n,r,i,s,o,a,u,c,h,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,S)=>{this.resolve_=v,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new iu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Mc.NO_ERROR,u=s.getStatus();if(!a||cN(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Mc.ABORT;r(!1,new iu(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new iu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());lN(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Z8();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?Yx():tN();o(u)}else{const u=eN();o(u)}};this.canceled_?n(!1,new iu(!1,null,!0)):this.backoffId_=oN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class iu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function hN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function fN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function mN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function gN(t,e,n,r,i,s,o=!0){const a=uN(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return pN(c,e),hN(c,n),fN(c,s),mN(c,r),new dN(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function yN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vN(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Vc{constructor(e,n){this._service=e,n instanceof gn?this._location=n:this._location=gn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Vc(e,n)}get root(){const e=new gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vN(this._location.path)}get storage(){return this._service}get parent(){const e=yN(this._location.path);if(e===null)return null;const n=new gn(this._location.bucket,e);return new Vc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw iN(e)}}function l_(t,e){const n=e==null?void 0:e[Y8];return n==null?null:gn.makeFromBucketSpec(n,t)}function _N(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:VE(i,t.app.options.projectId))}class wN{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Qx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=X8,this._maxUploadRetryTime=J8,this._requests=new Set,i!=null?this._bucket=gn.makeFromBucketSpec(i,this._host):this._bucket=l_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gn.makeFromBucketSpec(this._url,e):this._bucket=l_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){a_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){a_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new sN(Yx());{const o=gN(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const u_="@firebase/storage",c_="0.13.1";/**
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
 */const Xx="storage";function EN(t=Xm(),e){t=mt(t);const r=_d(t,Xx).getImmediate({identifier:e}),i=jE("storage");return i&&TN(r,...i),r}function TN(t,e,n,r={}){_N(t,e,n,r)}function xN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new wN(n,r,i,e,ts)}function SN(){$i(new Zr(Xx,xN,"PUBLIC").setMultipleInstances(!0)),bn(u_,c_,""),bn(u_,c_,"esm2017")}SN();const IN={apiKey:"AIzaSyAUoMzD8fdip3Oog3rb4jFLdS4vTHqybuI",authDomain:"estore-react-922c8.firebaseapp.com",projectId:"estore-react-922c8",storageBucket:"estore-react-922c8.appspot.com",messagingSenderId:"36464998952",appId:"1:36464998952:web:69254f1256a6d77180131d"},yl=UE(IN),Vp=Bk(yl),Ln=jx(yl);EN(yl);jx(yl);const CN=new hn(yl);function AN(t){return we({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(t)}const RN=de.img`
    width: 7rem;
    height: 5rem;
    margin-left: -1.5rem;
`,kN=de.div`
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
`,PN=()=>{const[t,e]=j.useState({name:"",email:"",password:"",role:"user"}),n=md(),r=async s=>{s.preventDefault();try{const o=await kR(Vp,t.email,t.password),a={name:t.name,email:o.user.email,uid:o.user.uid,role:t.role,time:Le.now(),date:new Date().toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})},u=jn(Ln,"user");Hg(u,a),e({name:"",email:"",password:""}),je.success("Registration Successful"),n("/Login"),console.log("Account Created",o)}catch{je.error("User Already Existed"),setEmail(""),setPassword(""),setCnfrmpassword(""),console.log("Already Exists")}},i=async()=>{await JR(Vp,CN).then(s=>{const a=hn.credentialFromResult(s).accessToken,u=s.user;console.log("Token :",a),console.log("user :",u),n("/Login"),console.log("Hello Ahmed")}).catch(s=>{const o=s.code,a=s.message,u=s.customData.email,c=hn.credentialFromError(s);console.log("errorcode: ",o),console.log("errormessage: ",a),console.log("email: ",u),console.log("credential: ",c),n("/Register")})};return d.jsx(d.Fragment,{children:d.jsxs(kN,{id:"Registerpanel",children:[d.jsx("div",{children:d.jsx(RN,{src:Um,alt:"SiteLogo"})}),d.jsx("h3",{children:"Make Some Change!"}),d.jsxs("form",{onSubmit:r,children:[d.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[d.jsx("label",{for:"exampleInputEmail1",className:"form-label",children:"Name"}),d.jsx("input",{type:"name",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Name",required:!0,value:t.name,onChange:s=>e({...t,name:s.target.value})})]}),d.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[d.jsx("label",{for:"exampleInputEmail1",className:"form-label",children:"Email"}),d.jsx("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email",required:!0,value:t.email,onChange:s=>e({...t,email:s.target.value})})]}),d.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[d.jsx("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),d.jsx("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",required:!0,value:t.password,onChange:s=>e({...t,password:s.target.value})})]}),d.jsx("button",{type:"submit",className:"btn btn-primary container",children:"Submit"})]}),d.jsxs("div",{className:"register",children:[d.jsx("h5",{children:"Already have an account"}),d.jsx(Pe,{to:"/Login",children:"Login"})]}),d.jsx("div",{children:d.jsxs("button",{className:"container",id:"googlebutton",onClick:i,children:[d.jsx(AN,{size:"1.1rem",id:"googleicon"}),"Continue with Google"]})})]})})},bN=de.img`
    width: 7rem;
    height: 5rem;
    margin-left: -1.5rem;
`,NN=de.div`
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
`,ON=()=>{const[t,e]=j.useState({email:"",password:""}),n=md(),r=async i=>{var s;i.preventDefault();try{const o=await PR(Vp,t.email,t.password);try{const a=Lc(jn(Ln,"user"),qx("uid","==",(s=o==null?void 0:o.user)==null?void 0:s.uid)),u=G8(a,c=>{let h;c.forEach(p=>h=p.data()),localStorage.setItem("users",JSON.stringify(h)),e({email:"",password:""}),je.success("Login Successful"),console.log("User logged in:",o.user),h.role==="user"&&n("/Home")});return()=>u}catch(a){console.log("error",a)}}catch{je.error("Login not found"),e({email:"",password:""})}};return d.jsx(d.Fragment,{children:d.jsxs(NN,{id:"loginpanel",children:[d.jsx("div",{children:d.jsx(bN,{src:Um,alt:"SiteLogo"})}),d.jsx("h3",{children:"Welcome back!"}),d.jsxs("form",{onSubmit:r,children:[d.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[d.jsx("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email"}),d.jsx("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email",required:!0,value:t.email,onChange:i=>e({...t,email:i.target.value})})]}),d.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[d.jsx("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),d.jsx("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",required:!0,value:t.password,onChange:i=>e({...t,password:i.target.value})}),d.jsx("button",{type:"submit",children:"Login"})]})]}),d.jsxs("div",{className:"register",children:[d.jsx("h5",{children:"Don't have an account"}),d.jsx(Pe,{to:"/Register",children:"Register"})]})]})})},DN="/freshbiteapp_Reactjs/assets/veg-C5rJdKzF.jpg",jN="/freshbiteapp_Reactjs/assets/fruit-lXJ3bgGr.jpg",LN=de.div`
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
`,MN=()=>d.jsx(d.Fragment,{children:d.jsxs(LN,{children:[d.jsxs("div",{className:"veg-section",style:{backgroundImage:`url(${DN})`},children:[d.jsxs("h1",{children:["Tasty ",d.jsx("y",{style:{color:"coral"},children:" Vegetables "})," ",d.jsx("br",{})," From Farm ",d.jsx("br",{})," Vendors"]}),d.jsxs("p",{children:["Every Friday Check",d.jsx("br",{})," Best Margla Deals"]}),d.jsx(Pe,{to:"/Shop",children:d.jsx("button",{className:"btn btn-success",children:"Shop Now"})})]}),d.jsxs("div",{className:"fruit-section",style:{backgroundImage:`url(${jN})`},children:[d.jsxs("h1",{children:[d.jsx("y",{style:{color:"coral"},children:" Delicious "})," Fruits ",d.jsx("br",{})," From South ",d.jsx("br",{})," Africa"]}),d.jsxs("p",{children:["Every Friday Check",d.jsx("br",{})," Best Margla Deals"]}),d.jsx(Pe,{to:"/Shop",children:d.jsx("button",{className:"btn btn-success",children:"Shop Now"})})]})]})});function VN(t){return we({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"},child:[]},{tag:"path",attr:{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"},child:[]},{tag:"path",attr:{d:"m18 15-2-2"},child:[]},{tag:"path",attr:{d:"m15 18-2-2"},child:[]}]})(t)}function FN(t){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"},child:[]}]})(t)}function zN(t){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5 1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"},child:[]}]})(t)}function UN(t){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"},child:[]}]})(t)}function $N(t){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M1023.65 290.48c.464-23.664-5.904-78.848-77.84-98.064L223.394 47.794c-52.944 0-96 43.055-96 96v128.704l-32-.08c-52.752.223-95.632 43.15-95.632 95.967v511.808c0 52.945 43.056 96 96 96h832.464c52.945 0 96-43.055 96-96zM191.393 143.793c0-16.72 12.88-30.463 29.216-31.871l706 142.88c.256.128-5.248 17.935-30.88 17.6H191.393zM960.24 880.21c0 17.664-14.336 32-32 32H95.76c-17.664 0-32-14.336-32-32V368.386c0-17.664 14.336-32 32-32h800.064c31.408 0 64.4-10.704 64.4-31.888V880.21h.016zM191.824 560.498c-35.344 0-64 28.656-64 64s28.656 64 64 64 64-28.656 64-64-28.656-64-64-64z"},child:[]}]})(t)}const BN=de.section`
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
`,WN=()=>d.jsx(d.Fragment,{children:d.jsxs(BN,{children:[d.jsxs("div",{children:[d.jsx(L3,{size:"2rem",color:"tomato"}),d.jsx("h4",{children:"Top Notch Support"}),d.jsx("p",{children:"Chat with us if you've any query"})]}),d.jsxs("div",{children:[d.jsx(VN,{size:"2rem",color:"tomato"}),d.jsx("h4",{children:"100% Satisfaction Guarrentae"}),d.jsx("p",{children:"Provide help in case of Dissatisfaction"})]}),d.jsxs("div",{children:[d.jsx(zN,{size:"2rem",color:"tomato"}),d.jsx("h4",{children:"Free Deliverey Acrross all US"}),d.jsx("p",{children:"Free Deliverey for all orders above $500"})]}),d.jsxs("div",{children:[d.jsx($N,{size:"2rem",color:"tomato"}),d.jsx("h4",{children:"Secure Payment"}),d.jsx("p",{children:"We use safest Payment Technologies"})]})]})}),qN="/freshbiteapp_Reactjs/assets/first-Bd_imVfc.jpg",HN="/freshbiteapp_Reactjs/assets/third-Ba3uQAAu.jpg",GN="/freshbiteapp_Reactjs/assets/second-A7lX0XHt.jpeg",KN=de.div`
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
`,QN=()=>d.jsx(d.Fragment,{children:d.jsxs(KN,{children:[d.jsxs("div",{style:{backgroundImage:`url(${GN})`},children:[d.jsxs("h3",{children:["Fresh ",d.jsx("y",{style:{color:"tomato"},children:" Vegies "})," ",d.jsx("br",{})," Everyday "]}),d.jsx(Pe,{to:"/Shop",children:d.jsx("button",{className:"btn btn-secondary",children:"Shop Now"})})]}),d.jsxs("div",{style:{backgroundImage:`url(${qN})`},children:[d.jsxs("h3",{children:["Sweet ",d.jsx("y",{style:{color:"orange"},children:" Organic "})," ",d.jsx("br",{})," Drinks "]}),d.jsx(Pe,{to:"/Shop",children:d.jsx("button",{className:"btn btn-secondary",children:"Shop Now"})})]}),d.jsxs("div",{style:{backgroundImage:`url(${HN})`},children:[d.jsxs("h3",{children:["Fairly ",d.jsx("y",{style:{color:"red"},children:" Meat "})," ",d.jsx("br",{})," Lovers "]}),d.jsx(Pe,{to:"/Shop",children:d.jsx("button",{className:"btn btn-secondary",children:"Shop Now"})})]})]})}),YN=de.section`
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
`,XN=()=>{const[t,e]=j.useState(""),n=async r=>{if(r.preventDefault(),t===""){je.error("Email is required");return}else if(!t.includes("@")||!t.endsWith(".com")){je.error("Put a valid email address");return}else try{const i=jn(Ln,"Subscribe"),s=Lc(i,qx("Email","==",t));if(!(await Li(s)).empty){je.error("Already Registered"),e("");return}await Hg(i,{Email:t,role:"user",time:Le.now(),date:new Date().toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})}),je.success("Successfully Registered")}catch{je.error("Failed to Subscribe. Try again"),e("")}};return d.jsx(d.Fragment,{children:d.jsxs(YN,{children:[d.jsx("label",{children:"Subscribe To Our Newsletter"}),d.jsxs("div",{children:[d.jsx("input",{id:"email",type:"email",placeholder:"Enter Your Email Address",required:!0,value:t,onChange:r=>e(r.target.value)}),d.jsx("button",{onClick:n,children:"Subscribe"})]})]})})},JN=de.section`
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
`,ZN=()=>{const[t,e]=j.useState([]),[n,r]=j.useState([]),[i,s]=j.useState([]);j.useEffect(()=>{(async()=>{const h=jn(Ln,"HomeVegProducts"),g=(await Li(h)).docs.map(y=>({id:y.id,...y.data()}));e(g);const v=jn(Ln,"HomeFruitProducts"),C=(await Li(v)).docs.map(y=>({id:y.id,...y.data()}));r(C);const R=jn(Ln,"HomeOtherProducts"),w=(await Li(R)).docs.map(y=>({id:y.id,...y.data()}));s(w)})()},[]);const o=()=>{document.getElementById("vegies").style.display="flex",document.getElementById("fruits").style.display="none",document.getElementById("others").style.display="none"},a=()=>{document.getElementById("vegies").style.display="none",document.getElementById("fruits").style.display="flex",document.getElementById("others").style.display="none"},u=()=>{document.getElementById("vegies").style.display="none",document.getElementById("fruits").style.display="none",document.getElementById("others").style.display="flex"};return d.jsx(d.Fragment,{children:d.jsxs(JN,{children:[d.jsx("h3",{children:"Best Selling of August"}),d.jsxs("div",{className:"links",children:[d.jsx("i",{onClick:o,children:"Vegies"}),d.jsx("i",{onClick:a,children:"Fruits"}),d.jsx("i",{onClick:u,children:"Others"})]}),d.jsxs("div",{children:[d.jsx("div",{id:"vegies",children:d.jsx("div",{className:"container",children:d.jsx("div",{className:"row",children:t.map((c,h)=>d.jsx("div",{className:"col-md-3 mb-3 col-6",children:d.jsxs("div",{className:"card",children:[d.jsx("img",{src:c.imageurl,className:"card-img-top",alt:c.name}),d.jsxs("div",{className:"card-body",children:[d.jsx("h5",{className:"card-title",children:c.name}),d.jsxs("p",{className:"card-text",style:{color:"red"},children:[" $",c.price]}),c.Bunch&&d.jsxs("p",{className:"card-text",children:[d.jsx("y",{children:"Bunch: "})," ",c.Bunch]}),c.quantity&&d.jsxs("p",{className:"card-text",children:[d.jsx("y",{children:"Quantity: "})," ",c.quantity,"Kg"]})]})]})},h))})})}),d.jsx("div",{id:"fruits",children:d.jsx("div",{className:"container",children:d.jsx("div",{className:"row",children:n.map((c,h)=>d.jsx("div",{className:"col-md-3 mb-3 col-6",children:d.jsxs("div",{className:"card",children:[d.jsx("img",{src:c.imageurl,className:"card-img-top",alt:c.name}),d.jsxs("div",{className:"card-body",children:[d.jsx("h5",{className:"card-title",children:c.name}),d.jsxs("p",{className:"card-text",style:{color:"red"},children:[" $",c.price]}),c.dozen&&d.jsxs("p",{className:"card-text",children:[d.jsx("y",{children:"Dozen: "})," ",c.dozen]}),c.quantity&&d.jsxs("p",{className:"card-text",children:[d.jsx("y",{children:"Quantity: "})," ",c.quantity," Kg"]})]})]})},h))})})}),d.jsx("div",{id:"others",children:d.jsx("div",{className:"container",children:d.jsx("div",{className:"row",children:i.map((c,h)=>d.jsx("div",{className:"col-md-3 mb-3 col-6",children:d.jsxs("div",{className:"card",children:[d.jsx("img",{src:c.imageurl,className:"card-img-top",alt:c.name}),d.jsxs("div",{className:"card-body",children:[d.jsx("h5",{className:"card-title",children:c.name}),d.jsxs("p",{className:"card-text",style:{color:"red"},children:[" $",c.price]}),c.size&&d.jsxs("p",{className:"card-text",children:[d.jsx("y",{children:"Size: "})," ",c.size]})]})]})},h))})})})]})]})})};var e7={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Jx(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return e7[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function d_(t){var e=Jx(t);return"".concat(e.value).concat(e.unit)}var t7=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),r},Cr=function(){return Cr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Cr.apply(this,arguments)},n7=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},h_=t7("MoonLoader","100% {transform: rotate(360deg)}","moon");function ss(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,a=t.cssOverride,u=a===void 0?{}:a,c=t.size,h=c===void 0?60:c,p=n7(t,["loading","color","speedMultiplier","cssOverride","size"]),g=Jx(h),v=g.value,S=g.unit,C=Math.round(v/7),R=Cr({display:"inherit",position:"relative",width:"".concat("".concat(v+C*2).concat(S)),height:"".concat("".concat(v+C*2).concat(S)),animation:"".concat(h_," ").concat(.6/o,"s 0s infinite linear"),animationFillMode:"forwards"},u),T=function(k){return{width:d_(k),height:d_(k),borderRadius:"100%"}},w=Cr(Cr({},T(C)),{backgroundColor:"".concat(i),opacity:"0.8",position:"absolute",top:"".concat("".concat(v/2-C/2).concat(S)),animation:"".concat(h_," ").concat(.6/o,"s 0s infinite linear"),animationFillMode:"forwards"}),y=Cr(Cr({},T(v)),{border:"".concat(C,"px solid ").concat(i),opacity:"0.1",boxSizing:"content-box",position:"absolute"});return n?j.createElement("span",Cr({style:R},p),j.createElement("span",{style:w}),j.createElement("span",{style:y})):null}const Zx=j.createContext();var Gg={},Kg={},Se={},Vd={};(function(t){function e(o,a,u){var c=a.slidesToShow,h=a.currentSlide;return u.length>2*c?o+2*c:h>=u.length?u.length+o:o}function n(o,a){if(a.length>2*o){for(var u={},c=a.length-2*o,h=a.length-c,p=c,g=0;g<h;g++)u[g]=p,p++;var v=a.length+h,S=v+a.slice(0,2*o).length,C=0;for(g=v;g<=S;g++)u[g]=C,C++;var R=v,T=0;for(g=h;g<R;g++)u[g]=T,T++;return u}u={};var w=3*a.length,y=0;for(g=0;g<w;g++)u[g]=y,++y===a.length&&(y=0);return u}function r(o,a){return a.length<o?a:a.length>2*o?a.slice(a.length-2*o,a.length).concat(a,a.slice(0,2*o)):a.concat(a,a)}function i(o,a){return a.length>2*o?2*o:a.length}function s(o,a,u){var c,h=o.currentSlide,p=o.slidesToShow,g=o.itemWidth,v=o.totalItems,S=0,C=0,R=h===0,T=a.length-(a.length-2*p);return a.length<p?(C=S=0,R=c=!1):a.length>2*p?((c=h>=T+a.length)&&(C=-g*(S=h-a.length)),R&&(C=-g*(S=T+(a.length-2*p)))):((c=h>=2*a.length)&&(C=-g*(S=h-a.length)),R&&(C=u.showDots?-g*(S=a.length):-g*(S=v/3))),{isReachingTheEnd:c,isReachingTheStart:R,nextSlide:S,nextPosition:C}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOriginalCounterPart=e,t.getOriginalIndexLookupTableByClones=n,t.getClones=r,t.getInitialSlideInInfiniteMode=i,t.checkClonesPosition=s})(Vd);var Fs={};Object.defineProperty(Fs,"__esModule",{value:!0});function r7(t,e,n,r){var i=0,s=r||n;return e&&s&&(i=t[s].partialVisibilityGutter||t[s].paritialVisibilityGutter),i}function i7(t,e){var n;return e[t]&&(n=(100/e[t].items).toFixed(1)),n}function s7(t,e,n){return Math.round(n/(e+(t.centerMode?1:0)))}Fs.getPartialVisibilityGutter=r7,Fs.getWidthFromDeviceType=i7,Fs.getItemClientSideWidth=s7;var Be={};Object.defineProperty(Be,"__esModule",{value:!0});var Fp=Fs;function Qg(t){var e=t.slidesToShow;return t.totalItems<e}function o7(t,e){var n,r=t.domLoaded,i=t.slidesToShow,s=t.containerWidth,o=t.itemWidth,a=e.deviceType,u=e.responsive,c=e.ssr,h=e.partialVisbile,p=e.partialVisible,g=!!(r&&i&&s&&o);c&&a&&!g&&(n=Fp.getWidthFromDeviceType(a,u));var v=!!(c&&a&&!g&&n);return{shouldRenderOnSSR:v,flexBisis:n,domFullyLoaded:g,partialVisibilityGutter:Fp.getPartialVisibilityGutter(u,h||p,a,t.deviceType),shouldRenderAtAll:v||g}}function a7(t,e){var n=e.currentSlide,r=e.slidesToShow;return n<=t&&t<n+r}function eS(t,e,n){var r=n||t.transform;return!e.infinite&&t.currentSlide===0||Qg(t)?r:r+t.itemWidth/2}function l7(t){return!(0<t.currentSlide)}function tS(t){var e=t.currentSlide,n=t.totalItems;return!(e+t.slidesToShow<n)}function nS(t,e,n,r){e===void 0&&(e=0);var i=t.currentSlide,s=t.slidesToShow,o=tS(t),a=!n.infinite&&o,u=r||t.transform;if(Qg(t))return u;var c=u+i*e;return a?c+(t.containerWidth-(t.itemWidth-e)*s):c}function rS(t,e){return t.rtl?-1*e:e}function u7(t,e,n){var r=e.partialVisbile,i=e.partialVisible,s=e.responsive,o=e.deviceType,a=e.centerMode,u=n||t.transform,c=Fp.getPartialVisibilityGutter(s,r||i,o,t.deviceType);return rS(e,i||r?nS(t,c,e,n):a?eS(t,e,n):u)}function c7(t,e){var n=t.domLoaded,r=t.slidesToShow,i=t.containerWidth,s=t.itemWidth,o=e.deviceType,a=e.responsive,u=e.slidesToSlide||1,c=!!(n&&r&&i&&s);return e.ssr&&e.deviceType&&!c&&Object.keys(a).forEach(function(h){var p=a[h].slidesToSlide;o===h&&p&&(u=p)}),c&&Object.keys(a).forEach(function(h){var p=a[h],g=p.breakpoint,v=p.slidesToSlide,S=g.max,C=g.min;v&&window.innerWidth>=C&&window.innerWidth<=S&&(u=v)}),u}Be.notEnoughChildren=Qg,Be.getInitialState=o7,Be.getIfSlideIsVisbile=a7,Be.getTransformForCenterMode=eS,Be.isInLeftEnd=l7,Be.isInRightEnd=tS,Be.getTransformForPartialVsibile=nS,Be.parsePosition=rS,Be.getTransform=u7,Be.getSlidesToSlide=c7;var Yg={};Object.defineProperty(Yg,"__esModule",{value:!0});var d7=function(t,e,n){var r;return function(){var i=arguments;r||(t.apply(this,i),r=!0,typeof n=="function"&&n(!0),setTimeout(function(){r=!1,typeof n=="function"&&n(!1)},e))}};Yg.default=d7;var iS={};(function(t){function e(n,r){var i=r.partialVisbile,s=r.partialVisible,o=r.centerMode,a=r.ssr,u=r.responsive;if((i||s)&&o)throw new Error("center mode can not be used at the same time with partialVisible");if(!u)throw a?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(u&&typeof u!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=e})(iS);var Xg={};Object.defineProperty(Xg,"__esModule",{value:!0});var h7=Be;function f7(t,e,n){n===void 0&&(n=0);var r,i,s=t.slidesToShow,o=t.currentSlide,a=t.itemWidth,u=t.totalItems,c=h7.getSlidesToSlide(t,e),h=o+1+n+s+(0<n?0:c);return i=h<=u?-a*(r=o+n+(0<n?0:c)):u<h&&o!==u-s?-a*(r=u-s):r=void 0,{nextSlides:r,nextPosition:i}}Xg.populateNextSlides=f7;var Jg={};Object.defineProperty(Jg,"__esModule",{value:!0});var p7=j,m7=Be,g7=Be;function y7(t,e,n){n===void 0&&(n=0);var r,i,s=t.currentSlide,o=t.itemWidth,a=t.slidesToShow,u=e.children,c=e.showDots,h=e.infinite,p=m7.getSlidesToSlide(t,e),g=s-n-(0<n?0:p),v=(p7.Children.toArray(u).length-a)%p;return i=0<=g?(r=g,c&&!h&&0<v&&g7.isInRightEnd(t)&&(r=s-v),-o*r):r=g<0&&s!==0?0:void 0,{nextSlides:r,nextPosition:i}}Jg.populatePreviousSlides=y7;var sS={};(function(t){function e(n,r,i,s,o,a){var u,c,h=n.itemWidth,p=n.slidesToShow,g=n.totalItems,v=n.currentSlide,S=r.infinite,C=!1,R=Math.round((i-s)/h),T=Math.round((s-i)/h),w=i<o;if(o<i&&R<=p){u="right";var y=Math.abs(-h*(g-p)),k=a-(s-o),D=v===g-p;(Math.abs(k)<=y||D&&S)&&(c=k,C=!0)}return w&&T<=p&&(u="left",((k=a+(o-s))<=0||v===0&&S)&&(C=!0,c=k)),{direction:u,nextPosition:c,canContinue:C}}Object.defineProperty(t,"__esModule",{value:!0}),t.populateSlidesOnMouseTouchMove=e})(sS);Object.defineProperty(Se,"__esModule",{value:!0});var su=Vd;Se.getOriginalCounterPart=su.getOriginalCounterPart,Se.getClones=su.getClones,Se.checkClonesPosition=su.checkClonesPosition,Se.getInitialSlideInInfiniteMode=su.getInitialSlideInInfiniteMode;var nf=Fs;Se.getWidthFromDeviceType=nf.getWidthFromDeviceType,Se.getPartialVisibilityGutter=nf.getPartialVisibilityGutter,Se.getItemClientSideWidth=nf.getItemClientSideWidth;var Tr=Be;Se.getInitialState=Tr.getInitialState,Se.getIfSlideIsVisbile=Tr.getIfSlideIsVisbile,Se.getTransformForCenterMode=Tr.getTransformForCenterMode,Se.getTransformForPartialVsibile=Tr.getTransformForPartialVsibile,Se.isInLeftEnd=Tr.isInLeftEnd,Se.isInRightEnd=Tr.isInRightEnd,Se.notEnoughChildren=Tr.notEnoughChildren,Se.getSlidesToSlide=Tr.getSlidesToSlide;var v7=Yg;Se.throttle=v7.default;var _7=iS;Se.throwError=_7.default;var w7=Xg;Se.populateNextSlides=w7.populateNextSlides;var E7=Jg;Se.populatePreviousSlides=E7.populatePreviousSlides;var T7=sS;Se.populateSlidesOnMouseTouchMove=T7.populateSlidesOnMouseTouchMove;var Fd={},x7=Vu&&Vu.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)i.hasOwnProperty(s)&&(r[s]=i[s])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(Fd,"__esModule",{value:!0});var S7=j;function I7(t){return"clientY"in t}Fd.isMouseMoveEvent=I7;var C7=function(t){function e(){return t!==null&&t.apply(this,arguments)||this}return x7(e,t),e}(S7.Component);Fd.default=C7;var Zg={},e0={};Object.defineProperty(e0,"__esModule",{value:!0});var A7=Vd,R7=Be;function k7(t,e,n,r){var i={},s=R7.getSlidesToSlide(e,n);return Array(t).fill(0).forEach(function(o,a){var u=A7.getOriginalCounterPart(a,e,r);if(a===0)i[0]=u;else{var c=i[a-1]+s;i[a]=c}}),i}e0.getLookupTableForNextSlides=k7;Object.defineProperty(Zg,"__esModule",{value:!0});var Uo=j,P7=Vd,b7=e0,f_=Be,N7=function(t){var e=t.props,n=t.state,r=t.goToSlide,i=t.getState,s=e.showDots,o=e.customDot,a=e.dotListClass,u=e.infinite,c=e.children;if(!s||f_.notEnoughChildren(n))return null;var h,p=n.currentSlide,g=n.slidesToShow,v=f_.getSlidesToSlide(n,e),S=Uo.Children.toArray(c);h=u?Math.ceil(S.length/v):Math.ceil((S.length-g)/v)+1;var C=b7.getLookupTableForNextSlides(h,n,e,S),R=P7.getOriginalIndexLookupTableByClones(g,S),T=R[p];return Uo.createElement("ul",{className:"react-multi-carousel-dot-list "+a},Array(h).fill(0).map(function(w,y){var k,D;if(u){D=C[y];var L=R[D];k=T===L||L<=T&&T<L+v}else{var x=S.length-g,_=y*v;k=(D=x<_?x:_)===p||D<p&&p<D+v&&p<S.length-g}return o?Uo.cloneElement(o,{index:y,active:k,key:y,onClick:function(){return r(D)},carouselState:i()}):Uo.createElement("li",{"data-index":y,key:y,className:"react-multi-carousel-dot "+(k?"react-multi-carousel-dot--active":"")},Uo.createElement("button",{"aria-label":"Go to slide "+(y+1),onClick:function(){return r(D)}}))}))};Zg.default=N7;var zd={};Object.defineProperty(zd,"__esModule",{value:!0});var Fc=j,O7=function(t){var e=t.customLeftArrow,n=t.getState,r=t.previous,i=t.disabled,s=t.rtl;if(e)return Fc.cloneElement(e,{onClick:function(){return r()},carouselState:n(),disabled:i,rtl:s});var o=s?"rtl":"";return Fc.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+o,onClick:function(){return r()},type:"button",disabled:i})};zd.LeftArrow=O7;var D7=function(t){var e=t.customRightArrow,n=t.getState,r=t.next,i=t.disabled,s=t.rtl;if(e)return Fc.cloneElement(e,{onClick:function(){return r()},carouselState:n(),disabled:i,rtl:s});var o=s?"rtl":"";return Fc.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+o,onClick:function(){return r()},type:"button",disabled:i})};zd.RightArrow=D7;var t0={};Object.defineProperty(t0,"__esModule",{value:!0});var ou=j,rf=Se,j7=function(t){var e=t.props,n=t.state,r=t.goToSlide,i=t.clones,s=t.notEnoughChildren,o=n.itemWidth,a=e.children,u=e.infinite,c=e.itemClass,h=e.itemAriaLabel,p=e.partialVisbile,g=e.partialVisible,v=rf.getInitialState(n,e),S=v.flexBisis,C=v.shouldRenderOnSSR,R=v.domFullyLoaded,T=v.partialVisibilityGutter;return v.shouldRenderAtAll?(p&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),ou.createElement(ou.Fragment,null,(u?i:ou.Children.toArray(a)).map(function(w,y){return ou.createElement("li",{key:y,"data-index":y,onClick:function(){e.focusOnSelect&&r(y)},"aria-hidden":rf.getIfSlideIsVisbile(y,n)?"false":"true","aria-label":h||(w.props.ariaLabel?w.props.ariaLabel:null),style:{flex:C?"1 0 "+S+"%":"auto",position:"relative",width:R?((p||g)&&T&&!s?o-T:o)+"px":"auto"},className:"react-multi-carousel-item "+(rf.getIfSlideIsVisbile(y,n)?"react-multi-carousel-item--active":"")+" "+c},w)}))):null};t0.default=j7;var L7=Vu&&Vu.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)i.hasOwnProperty(s)&&(r[s]=i[s])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(Kg,"__esModule",{value:!0});var Qe=j,Ne=Se,yi=Fd,M7=Zg,p_=zd,V7=t0,au=Be,In=400,m_="transform 400ms ease-in-out",F7=function(t){function e(n){var r=t.call(this,n)||this;return r.containerRef=Qe.createRef(),r.listRef=Qe.createRef(),r.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:Qe.Children.count(n.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},r.onResize=r.onResize.bind(r),r.handleDown=r.handleDown.bind(r),r.handleMove=r.handleMove.bind(r),r.handleOut=r.handleOut.bind(r),r.onKeyUp=r.onKeyUp.bind(r),r.handleEnter=r.handleEnter.bind(r),r.setIsInThrottle=r.setIsInThrottle.bind(r),r.next=Ne.throttle(r.next.bind(r),n.transitionDuration||In,r.setIsInThrottle),r.previous=Ne.throttle(r.previous.bind(r),n.transitionDuration||In,r.setIsInThrottle),r.goToSlide=Ne.throttle(r.goToSlide.bind(r),n.transitionDuration||In,r.setIsInThrottle),r.onMove=!1,r.initialX=0,r.lastX=0,r.isAnimationAllowed=!1,r.direction="",r.initialY=0,r.isInThrottle=!1,r.transformPlaceHolder=0,r}return L7(e,t),e.prototype.resetTotalItems=function(){var n=this,r=Qe.Children.count(this.props.children),i=Ne.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,r));this.setState({totalItems:r,currentSlide:i},function(){n.setContainerAndItemWidth(n.state.slidesToShow,!0)})},e.prototype.setIsInThrottle=function(n){n===void 0&&(n=!1),this.isInThrottle=n},e.prototype.setTransformDirectly=function(n,r){var i=this.props.additionalTransfrom;this.transformPlaceHolder=n;var s=au.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(r),this.listRef.current.style.transform="translate3d("+(s+i)+"px,0,0)")},e.prototype.setAnimationDirectly=function(n){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=n?this.props.customTransition||m_:"none")},e.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.setClones=function(n,r,i,s){var o=this;s===void 0&&(s=!1),this.isAnimationAllowed=!1;var a=Qe.Children.toArray(this.props.children),u=Ne.getInitialSlideInInfiniteMode(n||this.state.slidesToShow,a),c=Ne.getClones(this.state.slidesToShow,a),h=a.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:c.length,currentSlide:i&&!s?h:u},function(){o.correctItemsPosition(r||o.state.itemWidth)})},e.prototype.setItemsToShow=function(n,r){var i=this,s=this.props.responsive;Object.keys(s).forEach(function(o){var a=s[o],u=a.breakpoint,c=a.items,h=u.max,p=u.min,g=[window.innerWidth];window.screen&&window.screen.width&&g.push(window.screen.width);var v=Math.min.apply(Math,g);p<=v&&v<=h&&(i.setState({slidesToShow:c,deviceType:o}),i.setContainerAndItemWidth(c,n,r))})},e.prototype.setContainerAndItemWidth=function(n,r,i){var s=this;if(this.containerRef&&this.containerRef.current){var o=this.containerRef.current.offsetWidth,a=Ne.getItemClientSideWidth(this.props,n,o);this.setState({containerWidth:o,itemWidth:a},function(){s.props.infinite&&s.setClones(n,a,r,i)}),r&&this.correctItemsPosition(a)}},e.prototype.correctItemsPosition=function(n,r,i){r&&(this.isAnimationAllowed=!0),!r&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var s=this.state.totalItems<this.state.slidesToShow?0:-n*this.state.currentSlide;i&&this.setTransformDirectly(s,!0),this.setState({transform:s})},e.prototype.onResize=function(n){var r;r=!!this.props.infinite&&(typeof n!="boolean"||!n),this.setItemsToShow(r)},e.prototype.componentDidUpdate=function(n,r){var i=this,s=n.keyBoardControl,o=n.autoPlay,a=n.children,u=r.containerWidth,c=r.domLoaded,h=r.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==u&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){i.setItemsToShow(!0)},this.props.transitionDuration||In)),s&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!s&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),o&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),o||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),a.length!==this.props.children.length?e.clonesTimeout=setTimeout(function(){i.props.infinite?i.setClones(i.state.slidesToShow,i.state.itemWidth,!0,!0):i.resetTotalItems()},this.props.transitionDuration||In):this.props.infinite&&this.state.currentSlide!==h&&this.correctClonesPosition({domLoaded:c}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&Ne.isInRightEnd(this.state)){var p=this.props.transitionDuration||In;e.isInThrottleTimeout=setTimeout(function(){i.setIsInThrottle(!1),i.resetAutoplayInterval(),i.goToSlide(0,void 0,!!i.props.rewindWithAnimation)},p+this.props.autoPlaySpeed)}},e.prototype.correctClonesPosition=function(n){var r=this,i=n.domLoaded,s=Qe.Children.toArray(this.props.children),o=Ne.checkClonesPosition(this.state,s,this.props),a=o.isReachingTheEnd,u=o.isReachingTheStart,c=o.nextSlide,h=o.nextPosition;this.state.domLoaded&&i&&(a||u)&&(this.isAnimationAllowed=!1,e.transformTimeout=setTimeout(function(){r.setState({transform:h,currentSlide:c})},this.props.transitionDuration||In))},e.prototype.next=function(n){var r=this;n===void 0&&(n=0);var i=this.props,s=i.afterChange,o=i.beforeChange;if(!Ne.notEnoughChildren(this.state)){var a=Ne.populateNextSlides(this.state,this.props,n),u=a.nextSlides,c=a.nextPosition,h=this.state.currentSlide;u!==void 0&&c!==void 0&&(typeof o=="function"&&o(u,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:c,currentSlide:u},function(){typeof s=="function"&&(e.afterChangeTimeout=setTimeout(function(){s(h,r.getState())},r.props.transitionDuration||In))}))}},e.prototype.previous=function(n){var r=this;n===void 0&&(n=0);var i=this.props,s=i.afterChange,o=i.beforeChange;if(!Ne.notEnoughChildren(this.state)){var a=Ne.populatePreviousSlides(this.state,this.props,n),u=a.nextSlides,c=a.nextPosition;if(u!==void 0&&c!==void 0){var h=this.state.currentSlide;typeof o=="function"&&o(u,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:c,currentSlide:u},function(){typeof s=="function"&&(e.afterChangeTimeout2=setTimeout(function(){s(h,r.getState())},r.props.transitionDuration||In))})}}},e.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),e.clonesTimeout&&clearTimeout(e.clonesTimeout),e.isInThrottleTimeout&&clearTimeout(e.isInThrottleTimeout),e.transformTimeout&&clearTimeout(e.transformTimeout),e.afterChangeTimeout&&clearTimeout(e.afterChangeTimeout),e.afterChangeTimeout2&&clearTimeout(e.afterChangeTimeout2),e.afterChangeTimeout3&&clearTimeout(e.afterChangeTimeout3)},e.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},e.prototype.getCords=function(n){var r=n.clientX,i=n.clientY;return{clientX:au.parsePosition(this.props,r),clientY:au.parsePosition(this.props,i)}},e.prototype.handleDown=function(n){if(!(!yi.isMouseMoveEvent(n)&&!this.props.swipeable||yi.isMouseMoveEvent(n)&&!this.props.draggable||this.isInThrottle)){var r=this.getCords(yi.isMouseMoveEvent(n)?n:n.touches[0]),i=r.clientX,s=r.clientY;this.onMove=!0,this.initialX=i,this.initialY=s,this.lastX=i,this.isAnimationAllowed=!1}},e.prototype.handleMove=function(n){if(!(!yi.isMouseMoveEvent(n)&&!this.props.swipeable||yi.isMouseMoveEvent(n)&&!this.props.draggable||Ne.notEnoughChildren(this.state))){var r=this.getCords(yi.isMouseMoveEvent(n)?n:n.touches[0]),i=r.clientX,s=r.clientY,o=this.initialX-i,a=this.initialY-s;if(this.onMove){if(!(Math.abs(o)>Math.abs(a)))return;var u=Ne.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,i,this.transformPlaceHolder),c=u.direction,h=u.nextPosition,p=u.canContinue;c&&(this.direction=c,p&&h!==void 0&&this.setTransformDirectly(h)),this.lastX=i}}},e.prototype.handleOut=function(n){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var r=n.type==="touchend"&&!this.props.swipeable,i=(n.type==="mouseleave"||n.type==="mouseup")&&!this.props.draggable;if(!r&&!i&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var s=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(s)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(s=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(s)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},e.prototype.isInViewport=function(n){var r=n.getBoundingClientRect(),i=r.top,s=i===void 0?0:i,o=r.left,a=o===void 0?0:o,u=r.bottom,c=u===void 0?0:u,h=r.right,p=h===void 0?0:h;return 0<=s&&0<=a&&c<=(window.innerHeight||document.documentElement.clientHeight)&&p<=(window.innerWidth||document.documentElement.clientWidth)},e.prototype.isChildOfCarousel=function(n){return!!(n instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(n)},e.prototype.onKeyUp=function(n){var r=n.target;switch(n.keyCode){case 37:if(this.isChildOfCarousel(r))return this.previous();break;case 39:if(this.isChildOfCarousel(r))return this.next();break;case 9:if(this.isChildOfCarousel(r)&&r instanceof HTMLInputElement&&this.isInViewport(r))return this.next()}},e.prototype.handleEnter=function(n){yi.isMouseMoveEvent(n)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},e.prototype.goToSlide=function(n,r,i){var s=this;if(i===void 0&&(i=!0),!this.isInThrottle){var o=this.state.itemWidth,a=this.props,u=a.afterChange,c=a.beforeChange,h=this.state.currentSlide;typeof c!="function"||r&&(typeof r!="object"||r.skipBeforeChange)||c(n,this.getState()),this.isAnimationAllowed=i,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:n,transform:-o*n},function(){s.props.infinite&&s.correctClonesPosition({domLoaded:!0}),typeof u!="function"||r&&(typeof r!="object"||r.skipAfterChange)||(e.afterChangeTimeout3=setTimeout(function(){u(h,s.getState())},s.props.transitionDuration||In))})}},e.prototype.getState=function(){return this.state},e.prototype.renderLeftArrow=function(n){var r=this,i=this.props,s=i.customLeftArrow,o=i.rtl;return Qe.createElement(p_.LeftArrow,{customLeftArrow:s,getState:function(){return r.getState()},previous:this.previous,disabled:n,rtl:o})},e.prototype.renderRightArrow=function(n){var r=this,i=this.props,s=i.customRightArrow,o=i.rtl;return Qe.createElement(p_.RightArrow,{customRightArrow:s,getState:function(){return r.getState()},next:this.next,disabled:n,rtl:o})},e.prototype.renderButtonGroups=function(){var n=this,r=this.props.customButtonGroup;return r?Qe.cloneElement(r,{previous:function(){return n.previous()},next:function(){return n.next()},goToSlide:function(i,s){return n.goToSlide(i,s)},carouselState:this.getState()}):null},e.prototype.renderDotsList=function(){var n=this;return Qe.createElement(M7.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return n.getState()}})},e.prototype.renderCarouselItems=function(){var n=[];if(this.props.infinite){var r=Qe.Children.toArray(this.props.children);n=Ne.getClones(this.state.slidesToShow,r)}return Qe.createElement(V7.default,{clones:n,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:Ne.notEnoughChildren(this.state),props:this.props})},e.prototype.render=function(){var n=this.props,r=n.deviceType,i=n.arrows,s=n.renderArrowsWhenDisabled,o=n.removeArrowOnDeviceType,a=n.infinite,u=n.containerClass,c=n.sliderClass,h=n.customTransition,p=n.additionalTransfrom,g=n.renderDotsOutside,v=n.renderButtonGroupOutside,S=n.className,C=n.rtl,R=Ne.getInitialState(this.state,this.props),T=R.shouldRenderOnSSR,w=R.shouldRenderAtAll,y=Ne.isInLeftEnd(this.state),k=Ne.isInRightEnd(this.state),D=i&&!(o&&(r&&-1<o.indexOf(r)||this.state.deviceType&&-1<o.indexOf(this.state.deviceType)))&&!Ne.notEnoughChildren(this.state)&&w,L=!a&&y,x=!a&&k,_=au.getTransform(this.state,this.props);return Qe.createElement(Qe.Fragment,null,Qe.createElement("div",{className:"react-multi-carousel-list "+u+" "+S,dir:C?"rtl":"ltr",ref:this.containerRef},Qe.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+c,style:{transition:this.isAnimationAllowed?h||m_:"none",overflow:T?"hidden":"unset",transform:"translate3d("+(_+p)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),D&&(!L||s)&&this.renderLeftArrow(L),D&&(!x||s)&&this.renderRightArrow(x),w&&!v&&this.renderButtonGroups(),w&&!g&&this.renderDotsList()),w&&g&&this.renderDotsList(),w&&v&&this.renderButtonGroups())},e.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},e}(Qe.Component);Kg.default=F7;Object.defineProperty(Gg,"__esModule",{value:!0});var z7=Kg;Gg.default=z7.default;var U7=Gg;const zp=A_(U7),$7=de.div`
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
`,B7={desktop:{breakpoint:{max:3e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}},W7=[{id:1,name:"Joseph Siant",comment:"The quality of Fresh Bite's fruits, vegetables, and dairy products is consistently top-notch. Everything is always fresh, well-packed, and delivered on time. I couldn't ask for better service!",star:"3.5"},{id:2,name:"Mark Tommy",comment:"Fresh Bite has completely changed the way I shop for groceries. The convenience of having fresh produce delivered to my door is unbeatable, and the products are always in perfect condition.",star:"4.5"},{id:3,name:"Alina Sander",comment:"I've been using Fresh Bite for a few months now, and I'm really impressed. The variety of fresh fruits, vegetables, and dairy is fantastic, and I always receive my orders exactly as requested.",star:"4.5"},{id:4,name:"John Anthony",comment:"Fresh Bite makes healthy eating so much easier! The freshness of their products is unmatched, and the ease of online ordering and fast delivery has saved me so much time in my busy schedule.",star:"3.5"}],q7=()=>d.jsx(d.Fragment,{children:d.jsxs($7,{children:[d.jsx("h1",{children:"Testimonials"}),d.jsx("h7",{children:"See what our clients are saying about us"}),d.jsx(zp,{responsive:B7,showDots:!0,autoPlay:!0,autoPlaySpeed:5e3,infinite:!0,dotListClass:"custom-dot-list",itemClass:"carousel-item-padding-40-px",arrows:!1,pauseOnHover:!1,children:W7.map(t=>d.jsxs("div",{className:"container",children:[d.jsx("p",{className:"card-text",children:t.comment}),d.jsx("h5",{className:"card-title",children:t.name}),d.jsx("div",{className:"stars",children:Array.from({length:t.star},(e,n)=>d.jsx("span",{children:"★"},n))})]},t.id))})]})});function H7(t){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"},child:[]}]})(t)}function G7(t){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M448 0C200.974 0 0 200.974 0 448c0 192.526 122.082 357.042 292.882 420.282-4.919-43.857-4.147-115.682 3.97-150.457 7.602-32.666 49.11-208.167 49.11-208.167S333.43 484.563 333.43 447.5c0-58.244 33.744-101.7 75.767-101.7 35.742 0 52.977 26.834 52.977 58.984 0 35.951-22.857 89.652-34.696 139.422-9.873 41.702 20.907 75.703 62.012 75.703 74.431 0 131.644-78.49 131.644-191.77 0-100.266-72.03-170.38-174.906-170.38-119.144 0-189.081 89.377-189.081 181.752 0 35.983 13.852 74.575 31.167 95.579 3.414 4.155 3.914 7.78 2.9 12-3.174 13.223-10.228 41.669-11.63 47.499-1.82 7.683-6.073 9.278-13.998 5.589-52.314-24.354-85.012-100.813-85.012-162.246 0-132.093 95.965-253.428 276.718-253.428 145.286 0 258.18 103.504 258.18 241.88 0 144.334-91.02 260.482-217.316 260.482-42.441 0-82.323-22.05-95.965-48.096 0 0-21.003 79.956-26.11 99.558-8.813 33.9-46.539 104.13-65.477 136.03A446.164 446.164 0 0 0 448 896c247.035 0 448-200.965 448-448C896 200.974 695.035 0 448 0",transform:"translate(64 64)"},child:[]}]})(t)}function K7(t){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"},child:[]}]})(t)}function oS(t){return we({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{cx:"176",cy:"416",r:"32"},child:[]},{tag:"circle",attr:{cx:"400",cy:"416",r:"32"},child:[]},{tag:"path",attr:{d:"M167.78 304h261.34l38.4-192H133.89l-8.47-48H32v32h66.58l48 272H432v-32H173.42l-5.64-32z"},child:[]}]})(t)}function Q7(t){return we({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M349.13 136.86c-40.32 0-57.36 19.24-85.44 19.24-28.79 0-50.75-19.1-85.69-19.1-34.2 0-70.67 20.88-93.83 56.45-32.52 50.16-27 144.63 25.67 225.11 18.84 28.81 44 61.12 77 61.47h.6c28.68 0 37.2-18.78 76.67-19h.6c38.88 0 46.68 18.89 75.24 18.89h.6c33-.35 59.51-36.15 78.35-64.85 13.56-20.64 18.6-31 29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48z"},child:[]},{tag:"path",attr:{d:"M340.25 32c-24 1.63-52 16.91-68.4 36.86-14.88 18.08-27.12 44.9-22.32 70.91h1.92c25.56 0 51.72-15.39 67-35.11 14.72-18.77 25.88-45.37 21.8-72.66z"},child:[]}]})(t)}function Y7(t){return we({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0 0 48 59.49zM345.8 174 89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z"},child:[]}]})(t)}function X7(t){return we({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 6 C 3.355 6 2 7.355 2 9 L 2 23 C 2 24.645 3.355 26 5 26 L 27 26 C 28.645 26 30 24.645 30 23 L 30 9 C 30 7.355 28.645 6 27 6 L 5 6 z M 5 8 L 27 8 C 27.566 8 28 8.434 28 9 L 28 23 C 28 23.566 27.566 24 27 24 L 5 24 C 4.434 24 4 23.566 4 23 L 4 9 C 4 8.434 4.434 8 5 8 z M 11.523438 10 L 11.382812 10.023438 C 10.942813 10.078437 10.516109 10.243719 10.162109 10.511719 C 10.083109 10.558719 10.014547 10.622547 9.9355469 10.685547 C 9.9275469 10.669547 9.9199219 10.654672 9.9199219 10.638672 C 9.9039219 10.551672 9.8958594 10.457094 9.8808594 10.371094 C 9.8568594 10.229094 9.7787187 10.158203 9.6367188 10.158203 L 9.265625 10.158203 C 9.038625 10.156203 9 10.204781 9 10.425781 L 9 17.25 C 9.008 17.352 9.07025 17.406062 9.15625 17.414062 L 9.8417969 17.414062 C 9.9357969 17.414062 9.9900469 17.352 9.9980469 17.25 C 10.006047 17.219 10.005859 17.18725 10.005859 17.15625 L 10.005859 14.828125 C 10.036859 14.859125 10.060172 14.876578 10.076172 14.892578 C 10.650172 15.372578 11.311156 15.528719 12.035156 15.386719 C 12.696156 15.252719 13.152359 14.852672 13.443359 14.263672 C 13.671359 13.815672 13.765437 13.334844 13.773438 12.839844 C 13.789438 12.295844 13.741672 11.753187 13.513672 11.242188 C 13.246672 10.613188 12.789469 10.195687 12.105469 10.054688 C 12.003469 10.030688 11.894016 10.023813 11.791016 10.007812 C 11.697016 9.9998125 11.610438 10 11.523438 10 z M 16.525391 10 C 16.494391 10.008 16.462641 10.015625 16.431641 10.015625 C 16.116641 10.031625 15.810906 10.071391 15.503906 10.150391 C 15.306906 10.197391 15.118687 10.267078 14.929688 10.330078 C 14.811687 10.369078 14.755859 10.456031 14.755859 10.582031 C 14.763859 10.684031 14.755859 10.794484 14.755859 10.896484 C 14.763859 11.053484 14.827562 11.094688 14.976562 11.054688 C 15.228563 10.991687 15.478469 10.920047 15.730469 10.873047 C 16.123469 10.802047 16.524781 10.771172 16.925781 10.826172 C 17.137781 10.865172 17.33475 10.920562 17.46875 11.101562 C 17.58675 11.250562 17.634578 11.439906 17.642578 11.628906 C 17.650578 11.895906 17.650391 12.162687 17.650391 12.429688 C 17.650391 12.445688 17.650578 12.46075 17.642578 12.46875 L 17.603516 12.46875 C 17.265516 12.38275 16.918266 12.3355 16.572266 12.3125 C 16.210266 12.2965 15.849906 12.3115 15.503906 12.4375 C 15.086906 12.5795 14.748734 12.831234 14.552734 13.240234 C 14.403734 13.554234 14.380734 13.884656 14.427734 14.222656 C 14.498734 14.678656 14.718141 15.024141 15.119141 15.244141 C 15.504141 15.456141 15.912891 15.480969 16.337891 15.417969 C 16.825891 15.346969 17.257766 15.143125 17.634766 14.828125 C 17.650766 14.812125 17.665641 14.804063 17.681641 14.789062 C 17.705641 14.915062 17.720141 15.032578 17.744141 15.142578 C 17.760141 15.244578 17.823969 15.308406 17.917969 15.316406 L 18.445312 15.316406 C 18.524313 15.316406 18.59375 15.244203 18.59375 15.158203 C 18.60175 15.134203 18.601562 15.104266 18.601562 15.072266 L 18.601562 11.658203 C 18.599563 11.524203 18.591359 11.384 18.568359 11.25 C 18.505359 10.833 18.332078 10.487578 17.955078 10.267578 C 17.743078 10.141578 17.507859 10.078063 17.255859 10.039062 C 17.137859 10.023062 17.028156 10.015 16.910156 10 L 16.525391 10 z M 23.240234 10 C 23.130234 9.992 23.027281 10.062062 22.988281 10.164062 C 22.972281 10.212062 22.957406 10.251828 22.941406 10.298828 L 21.816406 13.515625 C 21.737406 13.743625 21.651266 13.978469 21.572266 14.230469 C 21.557266 14.190469 21.550969 14.176344 21.542969 14.152344 C 21.126969 13.004344 20.717781 11.855031 20.300781 10.707031 C 20.238781 10.519031 20.166703 10.339203 20.095703 10.158203 C 20.064703 10.072203 19.994578 10.009766 19.892578 10.009766 C 19.648578 10.001766 19.404344 10.001953 19.152344 10.001953 C 19.074344 10.001953 19.034781 10.071391 19.050781 10.150391 C 19.066781 10.213391 19.089281 10.284656 19.113281 10.347656 C 19.742281 11.903656 20.380578 13.460391 21.017578 15.025391 C 21.072578 15.158391 21.080578 15.268344 21.017578 15.402344 C 20.915578 15.638344 20.82875 15.881187 20.71875 16.117188 C 20.62375 16.329187 20.466469 16.487781 20.230469 16.550781 C 20.073469 16.589781 19.899375 16.604078 19.734375 16.580078 C 19.655375 16.573078 19.577047 16.558781 19.498047 16.550781 C 19.388047 16.542781 19.334172 16.589031 19.326172 16.707031 L 19.326172 17.021484 C 19.334172 17.202484 19.389312 17.2815 19.570312 17.3125 C 19.743312 17.3445 19.924281 17.368953 20.113281 17.376953 C 20.663281 17.384953 21.095906 17.163594 21.378906 16.683594 C 21.496906 16.494594 21.591734 16.29775 21.677734 16.09375 C 22.439734 14.16775 23.194219 12.248453 23.949219 10.314453 C 23.972219 10.259453 23.988094 10.205578 23.996094 10.142578 C 24.012094 10.048578 23.965953 10.001 23.876953 10 L 23.240234 10 z M 11.517578 10.818359 C 11.997578 10.857359 12.38975 11.092391 12.59375 11.650391 C 12.71975 11.996391 12.751953 12.351891 12.751953 12.712891 C 12.751953 13.051891 12.727 13.372312 12.625 13.695312 C 12.405 14.379312 11.902812 14.646234 11.257812 14.615234 C 10.801813 14.591234 10.416688 14.418969 10.054688 14.167969 C 10.015688 14.143969 9.9900469 14.105406 9.9980469 14.066406 L 9.9980469 11.353516 C 9.9900469 11.306516 10.015687 11.266187 10.054688 11.242188 C 10.494687 10.935187 10.982578 10.779359 11.517578 10.818359 z M 16.378906 12.998047 C 16.513656 12.986297 16.649703 12.988406 16.783203 13.003906 C 17.050203 13.027906 17.318937 13.074281 17.585938 13.113281 C 17.640937 13.121281 17.65625 13.145359 17.65625 13.193359 C 17.64925 13.350359 17.65625 13.49925 17.65625 13.65625 C 17.65625 13.81325 17.648437 13.954328 17.648438 14.111328 C 17.656437 14.150328 17.632563 14.182078 17.601562 14.205078 C 17.239563 14.464078 16.846437 14.637547 16.398438 14.685547 C 16.217437 14.701547 16.036281 14.701859 15.863281 14.630859 C 15.666281 14.559859 15.517891 14.395219 15.462891 14.199219 C 15.399891 13.995219 15.398125 13.782125 15.453125 13.578125 C 15.539125 13.311125 15.728469 13.160219 15.980469 13.074219 C 16.109969 13.034719 16.244156 13.009797 16.378906 12.998047 z M 24.53125 17.498047 C 23.83125 17.507797 23.003953 17.663516 22.376953 18.103516 C 22.182953 18.237516 22.218594 18.425391 22.433594 18.400391 C 23.138594 18.316391 24.707281 18.125375 24.988281 18.484375 C 25.269281 18.843375 24.676063 20.321422 24.414062 20.982422 C 24.332062 21.179422 24.504547 21.261328 24.685547 21.111328 C 25.858547 20.128328 26.163828 18.069437 25.923828 17.773438 C 25.803828 17.625438 25.23125 17.488297 24.53125 17.498047 z M 6.1445312 17.890625 C 5.9989375 17.909797 5.9356406 18.088266 6.0878906 18.228516 C 8.6998906 20.584516 12.149469 22 15.980469 22 C 18.713469 22 21.886172 21.141391 24.076172 19.525391 C 24.438172 19.257391 24.130766 18.855625 23.759766 19.015625 C 21.303766 20.057625 18.635984 20.558594 16.208984 20.558594 C 12.611984 20.558594 9.1295 19.572641 6.3125 17.931641 C 6.25075 17.895641 6.1930625 17.884234 6.1445312 17.890625 z"},child:[]}]})(t)}function J7(t){return we({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 6 C 3.355 6 2 7.355 2 9 L 2 23 C 2 24.645 3.355 26 5 26 L 27 26 C 28.645 26 30 24.645 30 23 L 30 9 C 30 7.355 28.645 6 27 6 L 5 6 z M 5 8 L 27 8 C 27.566 8 28 8.434 28 9 L 28 23 C 28 23.566 27.566 24 27 24 L 5 24 C 4.434 24 4 23.566 4 23 L 4 9 C 4 8.434 4.434 8 5 8 z M 10.998047 11 C 10.533047 11 10.002203 11.265344 9.6582031 11.652344 C 9.3922031 11.973344 9.103125 12.483187 9.203125 12.992188 C 9.680125 13.048187 10.201 12.749328 10.5 12.361328 C 10.832 12.007328 11.020047 11.509 10.998047 11 z M 13 13 L 13 19 L 13.931641 19 L 13.931641 16.945312 L 15.228516 16.945312 C 16.403516 16.945312 17.234375 16.136656 17.234375 14.972656 C 17.234375 13.797656 16.414 13 15.25 13 L 13 13 z M 7.8378906 13.523438 C 6.7988906 13.523438 6 14.433281 6 15.738281 C 6 17.438281 7.1944531 19 7.9394531 19 C 8.3894531 19 8.5543437 18.697266 9.1523438 18.697266 C 9.7033437 18.697266 9.8767031 19 10.345703 19 C 11.236703 19 11.972 17.190078 12 17.080078 C 11.853 17.006078 10.997047 16.602906 10.998047 15.628906 C 10.998047 14.682906 11.779406 14.258234 11.816406 14.240234 C 11.384406 13.597234 10.704266 13.523438 10.447266 13.523438 C 9.8502656 13.523438 9.3279688 13.845703 9.0429688 13.845703 C 8.7489688 13.845703 8.3158906 13.523438 7.8378906 13.523438 z M 13.931641 13.787109 L 15.005859 13.787109 C 15.814859 13.787109 16.28125 14.218656 16.28125 14.972656 C 16.28125 15.726656 15.814859 16.169922 15.005859 16.169922 L 13.931641 16.169922 L 13.931641 13.787109 z M 19.429688 14.53125 C 18.443687 14.53125 17.711453 15.097047 17.689453 15.873047 L 18.53125 15.873047 C 18.59825 15.507047 18.94025 15.263672 19.40625 15.263672 C 19.98225 15.263672 20.294922 15.529578 20.294922 16.017578 L 20.294922 16.349609 L 19.130859 16.427734 C 18.055859 16.494734 17.466797 16.938125 17.466797 17.703125 C 17.466797 18.479125 18.065688 19 18.929688 19 C 19.516687 19 20.061688 18.700375 20.304688 18.234375 L 20.326172 18.234375 L 20.326172 18.955078 L 21.191406 18.955078 L 21.191406 15.962891 C 21.191406 15.097891 20.493688 14.53125 19.429688 14.53125 z M 21.574219 14.587891 L 23.148438 18.966797 L 23.070312 19.232422 C 22.926313 19.676422 22.693203 19.853516 22.283203 19.853516 C 22.206203 19.853516 22.062812 19.841797 22.007812 19.841797 L 22.007812 20.5625 C 22.063813 20.5735 22.294328 20.583984 22.361328 20.583984 C 23.270328 20.583984 23.703078 20.2295 24.080078 19.1875 L 25.708984 14.587891 L 24.765625 14.587891 L 23.669922 18.134766 L 23.646484 18.134766 L 22.550781 14.587891 L 21.574219 14.587891 z M 20.294922 16.980469 L 20.294922 17.314453 L 20.292969 17.314453 C 20.292969 17.879453 19.816547 18.277344 19.185547 18.277344 C 18.686547 18.277344 18.376953 18.045688 18.376953 17.679688 C 18.376953 17.302688 18.675672 17.079875 19.263672 17.046875 L 20.294922 16.980469 z"},child:[]}]})(t)}function Z7(t){return we({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 6 C 3.355469 6 2 7.355469 2 9 L 2 23 C 2 24.644531 3.355469 26 5 26 L 27 26 C 28.644531 26 30 24.644531 30 23 L 30 9 C 30 7.355469 28.644531 6 27 6 Z M 5 8 L 27 8 C 27.566406 8 28 8.433594 28 9 L 28 23 C 28 23.566406 27.566406 24 27 24 L 5 24 C 4.433594 24 4 23.566406 4 23 L 4 9 C 4 8.433594 4.433594 8 5 8 Z M 12 9 C 8.144531 9 5 12.144531 5 16 C 5 19.855469 8.144531 23 12 23 C 13.484375 23 14.863281 22.546875 16 21.75 C 17.132813 22.542969 18.511719 23 20 23 C 23.855469 23 27 19.855469 27 16 C 27 12.144531 23.855469 9 20 9 C 18.511719 9 17.132813 9.457031 16 10.25 C 14.863281 9.453125 13.484375 9 12 9 Z M 12 11 C 13.28125 11 14.429688 11.496094 15.3125 12.28125 C 14.902344 12.792969 14.566406 13.371094 14.34375 14 L 16.5625 14 C 16.703125 14.320313 16.835938 14.652344 16.90625 15 L 14.09375 15 C 14.039063 15.324219 14 15.65625 14 16 C 14 16.34375 14.039063 16.675781 14.09375 17 L 16.90625 17 C 16.835938 17.347656 16.703125 17.679688 16.5625 18 L 14.34375 18 C 14.566406 18.628906 14.902344 19.207031 15.3125 19.71875 C 14.429688 20.503906 13.28125 21 12 21 C 9.226563 21 7 18.773438 7 16 C 7 13.226563 9.226563 11 12 11 Z M 20 11 C 22.773438 11 25 13.226563 25 16 C 25 18.773438 22.773438 21 20 21 C 19.085938 21 18.238281 20.742188 17.5 20.3125 C 18.441406 19.121094 19 17.628906 19 16 C 19 14.371094 18.441406 12.878906 17.5 11.6875 C 18.238281 11.257813 19.085938 11 20 11 Z"},child:[]}]})(t)}function eO(t){return we({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 6 C 3.355469 6 2 7.355469 2 9 L 2 23 C 2 24.644531 3.355469 26 5 26 L 27 26 C 28.644531 26 30 24.644531 30 23 L 30 9 C 30 7.355469 28.644531 6 27 6 Z M 5 8 L 27 8 C 27.566406 8 28 8.433594 28 9 L 28 23 C 28 23.566406 27.566406 24 27 24 L 5 24 C 4.433594 24 4 23.566406 4 23 L 4 9 C 4 8.433594 4.433594 8 5 8 Z M 19.40625 12.375 C 17.480469 12.375 16.46875 13.324219 16.46875 14.53125 C 16.46875 16.710938 19.03125 16.410156 19.03125 17.53125 C 19.03125 17.722656 18.871094 18.15625 17.8125 18.15625 C 16.753906 18.15625 16.0625 17.78125 16.0625 17.78125 L 15.75 19.21875 C 15.75 19.21875 16.40625 19.625 17.71875 19.625 C 19.03125 19.625 20.875 18.617188 20.875 17.15625 C 20.875 15.398438 18.3125 15.28125 18.3125 14.5 C 18.3125 14.101563 18.652344 13.78125 19.5625 13.78125 C 20.15625 13.78125 20.8125 14.25 20.8125 14.25 L 21.125 12.71875 C 21.125 12.71875 20.253906 12.375 19.40625 12.375 Z M 11.1875 12.5 L 9.5 17.4375 C 9.5 17.4375 9.414063 17.011719 9.375 16.75 C 8.421875 14.609375 6.875 13.8125 6.875 13.8125 L 8.34375 19.40625 L 10.34375 19.40625 L 13.15625 12.5 Z M 13.875 12.5 L 12.78125 19.40625 L 14.625 19.40625 L 15.71875 12.5 Z M 23.8125 12.5 L 20.8125 19.40625 L 22.625 19.40625 L 23 18.4375 L 25.3125 18.4375 L 25.5 19.40625 L 27.15625 19.40625 L 25.75 12.5 Z M 4.84375 12.53125 C 4.84375 12.53125 8.441406 13.632813 9.28125 16.34375 L 8.65625 13.21875 C 8.65625 13.21875 8.382813 12.53125 7.65625 12.53125 Z M 24.5 14.5 L 25.03125 17.09375 L 23.53125 17.09375 Z"},child:[]}]})(t)}const tO=de.div`
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
`,Ti=()=>d.jsx(d.Fragment,{children:d.jsxs(tO,{children:[d.jsxs("div",{className:"links",children:[d.jsx("a",{href:"#about",children:"About us"}),d.jsx("a",{href:"#contact",children:"Contact us"}),d.jsx("a",{href:"#shipping",children:"Shipping Policy"}),d.jsx("a",{href:"#refund",children:"Refund Policy"}),d.jsx("a",{href:"#privacy",children:"Privacy Policy"}),d.jsx("a",{href:"#deliverey",children:"Deliverey Info"}),d.jsx("a",{href:"#terms",children:"Terms & Conditions"})]}),d.jsxs("div",{className:"info",children:[d.jsx("h4",{children:"Estore"}),d.jsxs("p",{className:"desc",children:["We're at the Estore, an innovative team of food engineers. Our unique ",d.jsx("br",{})," model minimizes fresh food handling by up to 85%, sourcing locally and ",d.jsx("br",{})," dispatching within hours through cold chain logistics in eco-friendly ",d.jsx("br",{})," containers."]}),d.jsx("p",{className:"mobile-desc",children:"We're at the Estore, an innovative team of food engineers. Our unique model minimizes fresh food handling by up to 85%, sourcing locally and dispatching within hours through cold chain logistics in eco-friendly containers."}),d.jsxs("div",{children:[d.jsxs("a",{href:"https://www.facebook.com",children:[" ",d.jsx(UN,{})," "]}),d.jsxs("a",{href:"https://www.instagram.com",children:[" ",d.jsx(H7,{})," "]}),d.jsxs("a",{href:"https://www.pinterest.com",children:[" ",d.jsx(G7,{})," "]}),d.jsxs("a",{href:"https://www.twitter.com",children:[" ",d.jsx(K7,{})," "]})]})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"store",children:[d.jsx("h5",{children:"Download Our App"}),d.jsxs("a",{href:"https://www.googleplaystore.com",children:[" ",d.jsx(Y7,{color:"white",size:"1.1rem",className:"store-icon"})," Play Store"]}),d.jsxs("a",{href:"https://www.applestore.com",children:[" ",d.jsx(Q7,{color:"white",size:"1.1rem",className:"store-icon"})," App Store"]})]}),d.jsxs("div",{className:"payment",children:[d.jsx("h5",{children:"Payment Gateway"}),d.jsxs("div",{className:"payment-icons",children:[d.jsx(Z7,{size:"2.5rem"}),d.jsx(J7,{size:"2.5rem"}),d.jsx(eO,{size:"2.5rem"}),d.jsx(X7,{size:"2.5rem"})]})]})]})]})}),g_=()=>{const[t,e]=j.useState(!0);return j.useContext(Zx),j.useEffect(()=>{const n=setTimeout(()=>{e(!1)},1500);return()=>clearTimeout(n)},[]),d.jsx(d.Fragment,{children:t?d.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",d.jsx(ss,{size:60,color:"red"})," "]}):d.jsxs(d.Fragment,{children:[d.jsx(wi,{}),d.jsx(MN,{}),d.jsx(WN,{}),d.jsx(QN,{}),d.jsx(ZN,{}),d.jsx(q7,{}),d.jsx(XN,{}),d.jsx(Ti,{})]})})};function nO(t){return we({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"},child:[]}]})(t)}function Ye(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var rO=typeof Symbol=="function"&&Symbol.observable||"@@observable",y_=rO,sf=()=>Math.random().toString(36).substring(7).split("").join("."),iO={INIT:`@@redux/INIT${sf()}`,REPLACE:`@@redux/REPLACE${sf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${sf()}`},zc=iO;function n0(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function aS(t,e,n){if(typeof t!="function")throw new Error(Ye(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ye(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ye(1));return n(aS)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,u=!1;function c(){o===s&&(o=new Map,s.forEach((R,T)=>{o.set(T,R)}))}function h(){if(u)throw new Error(Ye(3));return i}function p(R){if(typeof R!="function")throw new Error(Ye(4));if(u)throw new Error(Ye(5));let T=!0;c();const w=a++;return o.set(w,R),function(){if(T){if(u)throw new Error(Ye(6));T=!1,c(),o.delete(w),s=null}}}function g(R){if(!n0(R))throw new Error(Ye(7));if(typeof R.type>"u")throw new Error(Ye(8));if(typeof R.type!="string")throw new Error(Ye(17));if(u)throw new Error(Ye(9));try{u=!0,i=r(i,R)}finally{u=!1}return(s=o).forEach(w=>{w()}),R}function v(R){if(typeof R!="function")throw new Error(Ye(10));r=R,g({type:zc.REPLACE})}function S(){const R=p;return{subscribe(T){if(typeof T!="object"||T===null)throw new Error(Ye(11));function w(){const k=T;k.next&&k.next(h())}return w(),{unsubscribe:R(w)}},[y_](){return this}}}return g({type:zc.INIT}),{dispatch:g,subscribe:p,getState:h,replaceReducer:v,[y_]:S}}function sO(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:zc.INIT})>"u")throw new Error(Ye(12));if(typeof n(void 0,{type:zc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ye(13))})}function oO(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{sO(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let u=!1;const c={};for(let h=0;h<r.length;h++){const p=r[h],g=n[p],v=o[p],S=g(v,a);if(typeof S>"u")throw a&&a.type,new Error(Ye(14));c[p]=S,u=u||S!==v}return u=u||r.length!==Object.keys(o).length,u?c:o}}function Uc(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function aO(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(Ye(15))};const o={getState:i.getState,dispatch:(u,...c)=>s(u,...c)},a=t.map(u=>u(o));return s=Uc(...a)(i.dispatch),{...i,dispatch:s}}}function lO(t){return n0(t)&&"type"in t&&typeof t.type=="string"}var lS=Symbol.for("immer-nothing"),v_=Symbol.for("immer-draftable"),qt=Symbol.for("immer-state");function fn(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var ao=Object.getPrototypeOf;function Ki(t){return!!t&&!!t[qt]}function pr(t){var e;return t?uS(t)||Array.isArray(t)||!!t[v_]||!!((e=t.constructor)!=null&&e[v_])||$d(t)||Bd(t):!1}var uO=Object.prototype.constructor.toString();function uS(t){if(!t||typeof t!="object")return!1;const e=ao(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===uO}function $c(t,e){Ud(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function Ud(t){const e=t[qt];return e?e.type_:Array.isArray(t)?1:$d(t)?2:Bd(t)?3:0}function Up(t,e){return Ud(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function cS(t,e,n){const r=Ud(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function cO(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function $d(t){return t instanceof Map}function Bd(t){return t instanceof Set}function xi(t){return t.copy_||t.base_}function $p(t,e){if($d(t))return new Map(t);if(Bd(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=uS(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[qt];let i=Reflect.ownKeys(r);for(let s=0;s<i.length;s++){const o=i[s],a=r[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[o]})}return Object.create(ao(t),r)}else{const r=ao(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function r0(t,e=!1){return Wd(t)||Ki(t)||!pr(t)||(Ud(t)>1&&(t.set=t.add=t.clear=t.delete=dO),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>r0(r,!0))),t}function dO(){fn(2)}function Wd(t){return Object.isFrozen(t)}var hO={};function Qi(t){const e=hO[t];return e||fn(0,t),e}var Ha;function dS(){return Ha}function fO(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function __(t,e){e&&(Qi("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Bp(t){Wp(t),t.drafts_.forEach(pO),t.drafts_=null}function Wp(t){t===Ha&&(Ha=t.parent_)}function w_(t){return Ha=fO(Ha,t)}function pO(t){const e=t[qt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function E_(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[qt].modified_&&(Bp(e),fn(4)),pr(t)&&(t=Bc(e,t),e.parent_||Wc(e,t)),e.patches_&&Qi("Patches").generateReplacementPatches_(n[qt].base_,t,e.patches_,e.inversePatches_)):t=Bc(e,n,[]),Bp(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==lS?t:void 0}function Bc(t,e,n){if(Wd(e))return e;const r=e[qt];if(!r)return $c(e,(i,s)=>T_(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Wc(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),$c(s,(a,u)=>T_(t,r,i,a,u,n,o)),Wc(t,i,!1),n&&t.patches_&&Qi("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function T_(t,e,n,r,i,s,o){if(Ki(i)){const a=s&&e&&e.type_!==3&&!Up(e.assigned_,r)?s.concat(r):void 0,u=Bc(t,i,a);if(cS(n,r,u),Ki(u))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(pr(i)&&!Wd(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Bc(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&Wc(t,i)}}function Wc(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&r0(e,n)}function mO(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:dS(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=i0;n&&(i=[r],s=Ga);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var i0={get(t,e){if(e===qt)return t;const n=xi(t);if(!Up(n,e))return gO(t,n,e);const r=n[e];return t.finalized_||!pr(r)?r:r===of(t.base_,e)?(af(t),t.copy_[e]=Hp(r,t)):r},has(t,e){return e in xi(t)},ownKeys(t){return Reflect.ownKeys(xi(t))},set(t,e,n){const r=hS(xi(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=of(xi(t),e),s=i==null?void 0:i[qt];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(cO(n,i)&&(n!==void 0||Up(t.base_,e)))return!0;af(t),qp(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return of(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,af(t),qp(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=xi(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){fn(11)},getPrototypeOf(t){return ao(t.base_)},setPrototypeOf(){fn(12)}},Ga={};$c(i0,(t,e)=>{Ga[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Ga.deleteProperty=function(t,e){return Ga.set.call(this,t,e,void 0)};Ga.set=function(t,e,n){return i0.set.call(this,t[0],e,n,t[0])};function of(t,e){const n=t[qt];return(n?xi(n):t)[e]}function gO(t,e,n){var i;const r=hS(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function hS(t,e){if(!(e in t))return;let n=ao(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=ao(n)}}function qp(t){t.modified_||(t.modified_=!0,t.parent_&&qp(t.parent_))}function af(t){t.copy_||(t.copy_=$p(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var yO=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(u=s,...c){return o.produce(u,h=>n.call(this,h,...c))}}typeof n!="function"&&fn(6),r!==void 0&&typeof r!="function"&&fn(7);let i;if(pr(e)){const s=w_(this),o=Hp(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Bp(s):Wp(s)}return __(s,r),E_(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===lS&&(i=void 0),this.autoFreeze_&&r0(i,!0),r){const s=[],o=[];Qi("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else fn(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,u=>e(u,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){pr(t)||fn(8),Ki(t)&&(t=vO(t));const e=w_(this),n=Hp(t,void 0);return n[qt].isManual_=!0,Wp(e),n}finishDraft(t,e){const n=t&&t[qt];(!n||!n.isManual_)&&fn(9);const{scope_:r}=n;return __(r,e),E_(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Qi("Patches").applyPatches_;return Ki(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Hp(t,e){const n=$d(t)?Qi("MapSet").proxyMap_(t,e):Bd(t)?Qi("MapSet").proxySet_(t,e):mO(t,e);return(e?e.scope_:dS()).drafts_.push(n),n}function vO(t){return Ki(t)||fn(10,t),fS(t)}function fS(t){if(!pr(t)||Wd(t))return t;const e=t[qt];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=$p(t,e.scope_.immer_.useStrictShallowCopy_)}else n=$p(t,!0);return $c(n,(r,i)=>{cS(n,r,fS(i))}),e&&(e.finalized_=!1),n}var Ht=new yO,pS=Ht.produce;Ht.produceWithPatches.bind(Ht);Ht.setAutoFreeze.bind(Ht);Ht.setUseStrictShallowCopy.bind(Ht);Ht.applyPatches.bind(Ht);Ht.createDraft.bind(Ht);Ht.finishDraft.bind(Ht);function mS(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var _O=mS(),wO=mS,EO=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Uc:Uc.apply(null,arguments)};function x_(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(En(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>lO(r)&&r.type===t,n}var gS=class Zo extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Zo.prototype)}static get[Symbol.species](){return Zo}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Zo(...e[0].concat(this)):new Zo(...e.concat(this))}};function S_(t){return pr(t)?pS(t,()=>{}):t}function I_(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(En(10));const r=n.insert(e,t);return t.set(e,r),r}function TO(t){return typeof t=="boolean"}var xO=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new gS;return n&&(TO(n)?o.push(_O):o.push(wO(n.extraArgument))),o},SO="RTK_autoBatch",yS=t=>e=>{setTimeout(e,t)},IO=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:yS(10),CO=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,u=t.type==="tick"?queueMicrotask:t.type==="raf"?IO:t.type==="callback"?t.queueNotification:yS(t.timeout),c=()=>{o=!1,s&&(s=!1,a.forEach(h=>h()))};return Object.assign({},r,{subscribe(h){const p=()=>i&&h(),g=r.subscribe(p);return a.add(h),()=>{g(),a.delete(h)}},dispatch(h){var p;try{return i=!((p=h==null?void 0:h.meta)!=null&&p[SO]),s=!i,s&&(o||(o=!0,u(c))),r.dispatch(h)}finally{i=!0}}})},AO=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new gS(t);return r&&i.push(CO(typeof r=="object"?r:void 0)),i};function RO(t){const e=xO(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(n0(n))a=oO(n);else throw new Error(En(1));let u;typeof r=="function"?u=r(e):u=e();let c=Uc;i&&(c=EO({trace:!1,...typeof i=="object"&&i}));const h=aO(...u),p=AO(h);let g=typeof o=="function"?o(p):p();const v=c(...g);return aS(a,s,v)}function vS(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(En(28));if(a in e)throw new Error(En(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function kO(t){return typeof t=="function"}function PO(t,e){let[n,r,i]=vS(e),s;if(kO(t))s=()=>S_(t());else{const a=S_(t);s=()=>a}function o(a=s(),u){let c=[n[u.type],...r.filter(({matcher:h})=>h(u)).map(({reducer:h})=>h)];return c.filter(h=>!!h).length===0&&(c=[i]),c.reduce((h,p)=>{if(p)if(Ki(h)){const v=p(h,u);return v===void 0?h:v}else{if(pr(h))return pS(h,g=>p(g,u));{const g=p(h,u);if(g===void 0){if(h===null)return h;throw new Error(En(9))}return g}}return h},a)}return o.getInitialState=s,o}var bO=Symbol.for("rtk-slice-createasyncthunk");function NO(t,e){return`${t}/${e}`}function OO({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[bO];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(En(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(jO()):i.reducers)||{},u=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},h={addCase(y,k){const D=typeof y=="string"?y:y.type;if(!D)throw new Error(En(12));if(D in c.sliceCaseReducersByType)throw new Error(En(13));return c.sliceCaseReducersByType[D]=k,h},addMatcher(y,k){return c.sliceMatchers.push({matcher:y,reducer:k}),h},exposeAction(y,k){return c.actionCreators[y]=k,h},exposeCaseReducer(y,k){return c.sliceCaseReducersByName[y]=k,h}};u.forEach(y=>{const k=a[y],D={reducerName:y,type:NO(s,y),createNotation:typeof i.reducers=="function"};MO(k)?FO(D,k,h,e):LO(D,k,h)});function p(){const[y={},k=[],D=void 0]=typeof i.extraReducers=="function"?vS(i.extraReducers):[i.extraReducers],L={...y,...c.sliceCaseReducersByType};return PO(i.initialState,x=>{for(let _ in L)x.addCase(_,L[_]);for(let _ of c.sliceMatchers)x.addMatcher(_.matcher,_.reducer);for(let _ of k)x.addMatcher(_.matcher,_.reducer);D&&x.addDefaultCase(D)})}const g=y=>y,v=new Map;let S;function C(y,k){return S||(S=p()),S(y,k)}function R(){return S||(S=p()),S.getInitialState()}function T(y,k=!1){function D(x){let _=x[y];return typeof _>"u"&&k&&(_=R()),_}function L(x=g){const _=I_(v,k,{insert:()=>new WeakMap});return I_(_,x,{insert:()=>{const I={};for(const[A,b]of Object.entries(i.selectors??{}))I[A]=DO(b,x,R,k);return I}})}return{reducerPath:y,getSelectors:L,get selectors(){return L(D)},selectSlice:D}}const w={name:s,reducer:C,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:R,...T(o),injectInto(y,{reducerPath:k,...D}={}){const L=k??o;return y.inject({reducerPath:L,reducer:C},D),{...w,...T(L,!0)}}};return w}}function DO(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var _S=OO();function jO(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function LO({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!VO(r))throw new Error(En(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?x_(t,o):x_(t))}function MO(t){return t._reducerDefinitionType==="asyncThunk"}function VO(t){return t._reducerDefinitionType==="reducerWithPrepare"}function FO({type:t,reducerName:e},n,r,i){if(!i)throw new Error(En(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:u,settled:c,options:h}=n,p=i(t,s,h);r.exposeAction(e,p),o&&r.addCase(p.fulfilled,o),a&&r.addCase(p.pending,a),u&&r.addCase(p.rejected,u),c&&r.addMatcher(p.settled,c),r.exposeCaseReducer(e,{fulfilled:o||lu,pending:a||lu,rejected:u||lu,settled:c||lu})}function lu(){}function En(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const zO=()=>{try{const t=localStorage.getItem("cartitem");return t?JSON.parse(t):[]}catch(t){return console.error("Error loading cart from localStorage:",t),[]}},UO=()=>{try{const t=localStorage.getItem("selectedproduct");return t?JSON.parse(t):null}catch{return console.error("Error loading in products from local storage"),null}},$O={items:zO(),counter:0,selectedproduct:UO(),totalitems:0,totalprice:0},BO=t=>{localStorage.setItem("cartitem",JSON.stringify(t)),localStorage.setItem("cartcount",t.length)},wS=_S({name:"cart",initialState:$O,reducers:{addtocart(t,e){t.items.push(e.payload),localStorage.setItem("cartitem",JSON.stringify(t.items)),console.log("New Product: ",localStorage.getItem("cartitem")),t.cartcount=t.items.length,BO(t.items)},deletefromcart(t,e){const n=t.items.filter(r=>r.id!=e.payload.id);t.items=n,localStorage.setItem("cartitem",JSON.stringify(t.items)),t.cartcount=t.items.length},increment(t,e){const n=t.items.findIndex(r=>r.id===e.payload.id);n>=0&&(t.items[n].quantity+=1)},decrement(t,e){const n=t.items.findIndex(r=>r.id===e.payload.id);n>=0&&t.items[n].quantity>1?t.items[n].quantity-=1:t.items=t.items.filter(r=>r.id!==e.payload.id)},clearcart:t=>{t.items=[],localStorage.setItem("cartitem",JSON.stringify(t.items)),t.cartcount=t.items.length},initializeCart:t=>{const e=localStorage.getItem("cartcount");t.cartcount=e?parseInt(e,10):0},productdetail:(t,e)=>{t.selectedproduct=e.payload,localStorage.setItem("selectedproduct",JSON.stringify(e.payload))}}}),ES=t=>t.cart.items.reduce((e,n)=>e+n.price*n.quantity,0),TS=t=>t.cart.items.reduce((e,n)=>e+(n.quantity+1-1),0),{addtocart:xS,deletefromcart:WO,increment:qO,decrement:HO,clearcart:GO,initializeCart:KO,productdetail:QO,checkout:YO}=wS.actions,XO=wS.reducer,JO=()=>{try{const t=localStorage.getItem("wishlist");return t?JSON.parse(t):[]}catch(t){return console.log("Error in wishlist from local storage:",t),[]}},ZO=()=>{try{const t=localStorage.getItem("cartitem");return t?JSON.parse(t):[]}catch(t){return console.log("Error in cart from local storage:",t),[]}},C_=t=>{localStorage.setItem("wishlist",JSON.stringify(t)),localStorage.setItem("wishcount",JSON.stringify(t))},eD=t=>{localStorage.setItem("cartitem",JSON.stringify(t)),localStorage.setItem("cartcount",JSON.stringify(t))},tD={items:JO(),cart:ZO()},SS=_S({name:"wishlist",initialState:tD,reducers:{addtowishlist(t,e){t.items.push(e.payload),localStorage.setItem("wishlist",JSON.stringify(t.items)),t.wishcount=t.items.length,C_(t.items)},removefromwishlist(t,e){const n=t.items.filter(r=>r.id!==e.payload.id);t.items=n,localStorage.setItem("wishlist",JSON.stringify(t.items)),t.wishcount=t.items.length,C_(t.items)},addtocart(t,e){t.cart.push(e.payload),localStorage.setItem("cartitem",JSON.stringify(t.cart)),t.cartcount=t.cart.length,eD(t.cart)}}}),{addtowishlist:nD,removefromwishlist:rD,addtocart:iD}=SS.actions,sD=SS.reducer,oD=de.section`
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
`,aD=()=>{const[t,e]=j.useState([]),[n,r]=j.useState(),[i,s]=j.useState(!0),[o,a]=j.useState(null),[u,c]=j.useState(1),h=12,p=il(),g=$t(y=>y.cart),v=$t(y=>y.wishlist),S=async()=>{try{const y=Lc(jn(Ln,"shop"),n_("name"),r_(h)),k=await Li(y),D=k.docs.map(L=>({id:L.id,...L.data()}));e(D),a(k.docs[k.docs.length-1]),c(u-1),s(!1)}catch(y){console.log("Error in fetching:",y)}},C=async()=>{try{if(o){const y=Lc(jn(Ln,"shop"),n_("name"),$8(o),r_(h)),k=await Li(y),D=k.docs.map(L=>({id:L.id,...L.data()}));D.length>0&&(e(D),a(k.docs[k.docs.length-1]),c(u+1),s(!1))}}catch(y){console.log("Error",y)}};j.useEffect(()=>{S()},[]);const R=y=>{g.items.some(D=>D.id===y.id)?je.error(`${y.name} is already in the cart`):(p(xS(y)),je.success(`${y.name} is added to the cart`))},T=y=>{p(QO(y))},w=y=>{v.items.some(D=>D.id===y.id)?je.error(`${y.name} is already in the wishlist`):(p(nD(y)),je.success(`${y.name} is added to wishlist`))};return d.jsx(d.Fragment,{children:i?d.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",d.jsx(ss,{size:60,color:"red"})," "]}):d.jsxs(oD,{children:[d.jsxs("div",{id:"sidebar",children:[d.jsx("h1",{children:"Filter"}),d.jsx("input",{id:"search",type:"text",placeholder:"Search here...",value:n,onChange:y=>r(y.target.value)}),d.jsx("h5",{className:"mt-3",children:"Search by Category"}),d.jsxs("div",{className:"form-check",children:[d.jsx("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),d.jsx("label",{className:"form-check-label",for:"flexCheckDefault",children:"Vegetables"})]}),d.jsxs("div",{className:"form-check",children:[d.jsx("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),d.jsx("label",{className:"form-check-label",for:"flexCheckDefault",children:"Fruits"})]}),d.jsxs("div",{className:"form-check",children:[d.jsx("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),d.jsx("label",{className:"form-check-label",for:"flexCheckDefault",children:"Dairy"})]})]}),d.jsxs("div",{id:"shop-products",children:[d.jsx("div",{className:"container",children:d.jsxs("div",{className:"row",children:[t.map(y=>d.jsx("div",{className:'mb-3 col-md-3 col-lg-4 col-xl-3 col-6" mx-0',children:d.jsxs("div",{className:"card",children:[d.jsx("img",{src:y.imageurl,className:"card-img-top",alt:"Product Picture"}),d.jsxs("div",{className:"card-body",children:[d.jsx("p",{className:"card-text",id:"category",children:y.category}),d.jsx("h5",{className:"card-title",id:"name",children:y.name}),d.jsxs("p",{className:"card-text",id:"price",children:["$",y.price]}),d.jsxs("p",{className:"card-text",id:"stock",children:["Stock: ",y.stock]}),y.weigh&&d.jsxs("p",{className:"card-text",id:"quantity",children:["Quantity: ",y.weigh,"kg"]}),y.bunch&&d.jsxs("p",{className:"card-text",id:"bunch",children:["Bunch: ",y.bunch]}),y.size&&d.jsxs("p",{className:"card-text",id:"size",children:["Size: ",y.size," "]}),y.dozen&&d.jsxs("p",{className:"card-text",id:"dozen",children:["Dozen: ",y.dozen," "]}),d.jsxs("div",{id:"icons",children:[d.jsx(Pe,{className:"icons",to:"/ProductDetail",onClick:()=>T(y),children:d.jsx(FN,{className:"icon",size:"1.1rem"})}),d.jsx(Pe,{className:"icons",children:d.jsx(oS,{className:"icon",size:"1.1rem",onClick:()=>R(y)})}),d.jsx(Pe,{className:"icons",children:d.jsx(nO,{className:"icon",size:"1.1rem",onClick:()=>w(y)})})]})]})]})},y.id)),";"]})}),d.jsxs("div",{id:"buttons",children:[d.jsx("button",{onClick:()=>{c(u-1),S()},disabled:u===1,children:"«"}),d.jsx("button",{onClick:C,children:"»"})]})]})]})})},lD=de.section`
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
`,uD=()=>{const[t,e]=j.useState(!0),[n,r]=j.useState(null),i=il(),s=$t(u=>u.cart),o=$t(u=>u.cart.selectedproduct);j.useEffect(()=>{const u=setTimeout(()=>{(async()=>{try{if(n)r(o),e(!1);else{const h=localStorage.getItem("selectedproduct");h&&(r(JSON.parse(h)),e(!1))}}catch(h){console.log("Error in loading: ",h)}})()},1500);return()=>clearTimeout(u)},[o]);const a=u=>{s.items.some(h=>h.id===u.id)?je.error(`${u.name} is already in the cart`):(i(xS(u)),je.success(`${u.name} is added to the cart`))};return d.jsxs(d.Fragment,{children:[t?d.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",d.jsx(ss,{size:60,color:"red"})," "]}):d.jsx(lD,{children:d.jsx("div",{children:d.jsxs("div",{id:"product-detail",children:[d.jsx("div",{children:d.jsx("img",{src:n.imageurl,alt:"Product"})}),d.jsxs("div",{id:"product-info",children:[d.jsxs("p",{id:"category",children:[n.category," / ",n.name]}),d.jsx("h3",{id:"name",children:n.name}),d.jsx("p",{id:"description",children:n.description}),d.jsxs("p",{id:"stock",children:["stock: ",n.stock]}),n.weigh&&d.jsxs("p",{id:"quantity",children:["Weight: ",n.weigh," kg"]}),n.bunch&&d.jsxs("p",{id:"bunch",children:["Bunch: ",n.bunch]}),n.size&&d.jsxs("p",{id:"size",children:["size: ",n.size]}),n.dozen&&d.jsxs("p",{id:"dozen",children:["Dozen: ",n.dozen]}),d.jsxs("p",{id:"price",children:["$",n.price]}),d.jsx("div",{id:"plusminus",children:d.jsx("button",{className:"btn btn-success",id:"addtocart",onClick:()=>a(n),children:" Add to cart"})})]})]})})}),";"]})},cD=de.section`
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
`,dD=()=>{const[t,e]=j.useState(!0),[n,r]=j.useState(""),[i,s]=j.useState(""),[o,a]=j.useState(""),[u,c]=j.useState(""),[h,p]=j.useState(""),[g,v]=j.useState(""),[S,C]=j.useState(""),[R,T]=j.useState([]),[w,y]=j.useState(""),[k,D]=j.useState(""),L=$t(TS),x=$t(ES),_={Islamabad:["Islamabad"],Punjab:["Lahore","Rawalpindi","Faisalabad","Multan","Sargodha","Bahawalpur"],Sindh:["Karachi","Hydrabad","Sakkhar"],Balochistan:["Quetta","Sibbi","Gawadar"],"Khyber Pakhtunkhwa":["Peshawar","Abbotabad","Swat","Mardaan"],"Azad Kashmir":["Muzzaffarabad","Rawalkot","Neelum Valley"],"Gilgit Baltistan":["Balakot","Skardu"]},I=b=>{const N=b.target.value;C(N),T(_[N]||[])};j.useEffect(()=>{const b=setTimeout(()=>{(async()=>{try{e(!1)}catch(P){console.log("Error is:",P)}})()},1500);return()=>clearTimeout(b)},[]);const A=async b=>{b.preventDefault();try{const N=jn(Ln,"billinginfo");await Hg(N,{fname:n,house:i,street:o,state:S,city:k,zip:u,phone:h,email:g,payment:w})}catch(N){console.log("Error: ",N)}};return d.jsx(d.Fragment,{children:t?d.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",d.jsx(ss,{size:60,color:"red"})," "]}):d.jsx(cD,{children:d.jsxs("form",{id:"myform",className:"form-check",onSubmit:A,children:[d.jsxs("div",{id:"formcontent",className:"row g-3",children:[d.jsx("h1",{children:"Billing Information"}),d.jsxs("div",{className:"col-md-12",children:[d.jsx("label",{htmlFor:"firstname",className:"form-label",children:"Full Name"}),d.jsx("input",{type:"text",className:"form-control",placeholder:"first name",value:n,onChange:b=>r(b.target.value),required:!0})]}),d.jsxs("div",{className:"col-12",children:[d.jsx("label",{htmlFor:"address1",className:"form-label",children:"Enter House No."}),d.jsx("input",{type:"text",className:"form-control",placeholder:"Enter your house no.",required:!0,value:i,onChange:b=>s(b.target.value)})]}),d.jsxs("div",{className:"col-12",children:[d.jsx("label",{htmlFor:"address2",className:"form-label",children:"Enter street address"}),d.jsx("input",{type:"text",className:"form-control",placeholder:"Enter street address",required:!0,value:o,onChange:b=>a(b.target.value)})]}),d.jsxs("div",{className:"col-md-4",children:[d.jsx("label",{htmlFor:"inputState",className:"form-label",children:"State"}),d.jsxs("select",{onChange:I,value:S,required:!0,children:[d.jsx("option",{value:"",children:"Select a state"}),Object.keys(_).map(b=>d.jsx("option",{value:b,children:b},b))]})]}),d.jsxs("div",{className:"col-md-6",children:[d.jsx("label",{children:"Select City:"}),d.jsxs("select",{required:!0,value:k,onChange:b=>D(b.target.value),children:[d.jsx("option",{value:"",children:"Select a city"}),R.length>0?R.map(b=>d.jsx("option",{value:b,children:b},b)):d.jsx("option",{disabled:!0,children:"No cities available"})]})]}),d.jsxs("div",{className:"col-md-4",children:[d.jsx("label",{htmlFor:"inputZip",className:"form-label",children:"Zip"}),d.jsx("input",{type:"text",className:"form-control",placeholder:"zip code",required:!0,value:u,onChange:b=>c(b.target.value)})]}),d.jsxs("div",{className:"col-md-4",children:[d.jsx("label",{htmlFor:"inputcell",className:"form-label",children:"Phone"}),d.jsx("input",{type:"cell",className:"form-control",placeholder:"phone",required:!0,value:h,onChange:b=>p(b.target.value)})]}),d.jsxs("div",{className:"col-md-4",children:[d.jsx("label",{htmlFor:"inputemail",className:"form-label",children:"Email"}),d.jsx("input",{type:"email",className:"form-control",placeholder:"email address",required:!0,value:g,onChange:b=>v(b.target.value)})]})]}),d.jsxs("div",{id:"myorder",children:[d.jsx("h5",{children:"Your Order"}),d.jsxs("div",{id:"price",children:[d.jsx("p",{children:"Total Items"}),d.jsxs("p",{children:[L," items"]})]}),d.jsxs("div",{id:"subtotal",children:[d.jsx("p",{children:"SubTotal"}),d.jsxs("p",{style:{color:"black"},children:["$",parseFloat(x).toFixed(2)]})]}),d.jsxs("div",{id:"subtotal",children:[d.jsx("p",{children:"Shipping"}),d.jsx("p",{style:{color:"black"},children:"$5.00"})]}),d.jsx("hr",{}),d.jsxs("div",{id:"total",children:[d.jsx("p",{children:"Total"}),d.jsxs("p",{style:{color:"red"},children:["$",parseFloat(x+5).toFixed(2)]})]}),d.jsx("hr",{}),d.jsx("h6",{children:"Payment Methods"}),d.jsxs("div",{children:[d.jsx("input",{type:"radio",required:!0,name:"option",value:"Direct Bank Transfer",checked:w==="Direct Bank Transfer",onChange:b=>y(b.target.value)}),d.jsx("label",{htmlFor:"Direct Bank Transfer",children:"Direct Bank Transfer"})]}),d.jsxs("div",{children:[d.jsx("input",{type:"radio",required:!0,name:"option",value:"Cash on Deliverey",onChange:b=>y(b.target.value),checked:w==="Cash on Deliverey"}),d.jsx("label",{htmlFor:"Cash on Deliverey",children:"Cash on Deliverey"})]}),d.jsx("p",{id:"para",children:"Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy."}),d.jsx("button",{type:"submit",className:"container btn btn-danger",children:"Confirm order"})]})]})})})};function pa(t){return we({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(t)}const hD=de.section`
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
`,fD=de.div`
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
`,pD=de.section`
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
`,mD=()=>{const[t,e]=j.useState(!0),n=il(),r=$t(p=>p.cart.items),i=$t(ES),s=$t(TS);j.useEffect(()=>{const p=setTimeout(()=>{(async()=>{try{e(!1)}catch(v){console.log("Error is:",v)}})()},1500);return()=>clearTimeout(p)},[]);const o=p=>{n(WO(p)),je.success(`${p.name} is removed from the cart`)},a=p=>{n(qO(p))},u=p=>{n(HO(p))},c=()=>{n(GO()),je.success("Removed all items from the cart")},h=()=>{n(YO())};return d.jsx(d.Fragment,{children:t?d.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",d.jsx(ss,{size:60,color:"red"})," "]}):d.jsxs(d.Fragment,{children:[d.jsxs(hD,{children:[d.jsxs("div",{id:"labels",children:[d.jsx("p",{children:"Product"}),d.jsx("p",{children:"Price"}),d.jsx("p",{children:"Quantity"}),d.jsx("p",{children:"SubTotal"}),d.jsx("p",{children:"Remove"})]}),d.jsx("div",{children:r.length===0?d.jsx("p",{children:"Your cart is empty."}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{children:[r.map(p=>d.jsxs("div",{id:"items",children:[d.jsxs("div",{id:"itemname",children:[d.jsx("img",{src:p.imageurl,alt:"Product Pic"}),d.jsxs("p",{children:[p.name," ",d.jsx("br",{}),p.weigh&&d.jsxs("p",{className:"quantity",children:[p.weigh," kg"]}),p.dozen&&d.jsxs("p",{className:"quantity",children:[p.dozen," dozen"]}),p.bunch&&d.jsxs("p",{className:"quantity",children:[p.bunch," bunch"]}),p.size&&d.jsx("p",{className:"quantity",children:p.size})]})]}),d.jsxs("p",{id:"price",children:["$",p.price]}),d.jsxs("div",{id:"buttons",children:[d.jsx("button",{className:"btn",onClick:()=>u(p),disabled:p.quantity<=1,children:"-"}),d.jsx("p",{children:p.quantity}),d.jsx("button",{className:"btn",onClick:()=>a(p),disabled:p.quantity>=p.stock,children:"+"})]}),d.jsxs("p",{id:"subtotal",children:["$",parseFloat(p.quantity*p.price).toFixed(2)]}),d.jsx(pa,{onClick:()=>o(p),color:"red",id:"trashicon"})]},p.name)),d.jsx("button",{className:"btn btn-danger mt-5",onClick:c,children:"Clear Cart"})]}),d.jsxs("div",{className:"lowerbox",children:[d.jsxs("div",{children:[d.jsx("h6",{children:"Total items: "}),d.jsxs("p",{children:[s," items"]})]}),d.jsxs("div",{children:[d.jsx("h4",{children:"Total"}),d.jsxs("p",{children:["$",parseFloat(i).toFixed(2)]})]}),d.jsx("button",{className:"container btn btn-danger",onClick:h,children:d.jsx(Pe,{to:"/checkout",className:"container text-decoration-none text-white",children:"Prodeed to checkout"})})]})]})})]}),d.jsx(fD,{id:"tablet",children:r.length===0?d.jsx("p",{children:"Your Cart is Empty!"}):d.jsxs("div",{className:"container",children:[r.map(p=>d.jsxs("div",{id:"innerbox",children:[d.jsxs("div",{id:"imagename",children:[d.jsx("img",{src:p.imageurl,alt:p.name}),d.jsxs("div",{children:[d.jsx("h5",{children:p.name}),p.weigh&&d.jsxs("p",{className:"quantity",children:[p.weigh," kg"]}),p.dozen&&d.jsxs("p",{className:"quantity",children:[p.dozen," dozen"]}),p.bunch&&d.jsxs("p",{className:"quantity",children:[p.bunch," bunch"]}),p.size&&d.jsx("p",{className:"quantity",children:p.size})]})]}),d.jsxs("div",{id:"secondbox",children:[d.jsxs("div",{id:"label",children:[d.jsx("p",{children:"Price"}),d.jsx("p",{style:{margin:"0rem 1.5rem 0rem 1.5rem"},children:"Quantity"}),d.jsx("p",{children:"SubTotal"})]}),d.jsxs("div",{id:"items",children:[d.jsxs("p",{children:["$",parseFloat(p.price).toFixed(2)]}),d.jsxs("div",{id:"button",children:[d.jsx("button",{className:"btn",onClick:()=>u(p),disabled:p.quantity<=1,children:"-"}),d.jsx("p",{children:p.quantity}),d.jsx("button",{className:"btn",onClick:()=>a(p),disabled:p.quantity>=p.stock,children:"+"})]}),d.jsxs("p",{children:["$",parseFloat(p.price*p.quantity).toFixed(2)]}),d.jsx(pa,{style:{marginRight:"-15px",marginTop:"5px"},color:"red",size:".8rem",onClick:()=>o(p)})]})]})]},p.id)),d.jsx("button",{className:"btn btn-danger mt-5",onClick:c,children:"Clear Cart"}),d.jsxs("div",{className:"lowerbox",style:{marginTop:"3rem"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("h6",{children:"Total items: "}),d.jsxs("p",{children:[s," items"]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("h4",{children:"Total"}),d.jsxs("p",{children:["$",parseFloat(i).toFixed(2)]})]}),d.jsx("button",{className:"container btn btn-danger",onClick:h,children:d.jsx(Pe,{to:"/checkout",className:"container text-decoration-none text-white",children:"Prodeed to checkout"})})]})]})}),d.jsx(pD,{children:r.length===0?d.jsx("p",{children:"Your cart is empty"}):d.jsxs("div",{className:"container",children:[r.map(p=>d.jsx("div",{children:d.jsxs("div",{id:"product-detail",className:"container",children:[d.jsx("div",{children:d.jsx("img",{src:p.imageurl,alt:"Product"})}),d.jsxs("div",{id:"product-info",children:[d.jsxs("p",{id:"category",children:[p.category," / ",p.name]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("h3",{id:"name",children:p.name}),d.jsx(pa,{id:"trash",onClick:()=>o(p)})]}),p.weigh&&d.jsxs("p",{id:"quantity",children:[p.weigh," kg"]}),p.bunch&&d.jsx("p",{id:"bunch",children:p.bunch}),p.size&&d.jsx("p",{id:"size",children:p.size}),p.dozen&&d.jsx("p",{id:"dozen",children:p.dozen}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsxs("p",{id:"price",children:["$",p.price]}),d.jsxs("div",{id:"mobile-button",style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("button",{className:"btn",onClick:()=>u(p),disabled:p.quantity<=1,children:"-"}),d.jsx("p",{style:{margin:"0rem .8rem 0rem .8rem"},children:p.quantity}),d.jsx("button",{className:"btn",onClick:()=>a(p),disabled:p.quantity===p.stock,children:"+"})]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",margin:"1rem 0rem 0rem 0rem"},children:[d.jsx("h6",{style:{fontSize:"1.3rem",fontWeight:"600"},children:"SubTotal"}),d.jsxs("p",{style:{fontSize:"1.3rem",fontWeight:"630"},children:["$",parseFloat(p.price*p.quantity).toFixed(2)]})]})]})]})})),d.jsx("button",{className:"btn btn-danger mt-5",onClick:c,children:"Clear Cart"}),d.jsxs("div",{className:"lowerbox p-1",style:{margin:"3rem 0rem 3rem 0rem"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("h6",{children:"Total items: "}),d.jsxs("p",{children:[s," items"]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("h4",{style:{fontSize:"1.6rem"},children:"Total"}),d.jsxs("p",{style:{color:"red",fontWeight:"600",fontSize:"1.3rem"},children:["$",parseFloat(i).toFixed(2)]})]}),d.jsx("button",{className:"container btn btn-danger",onClick:h,children:d.jsx(Pe,{to:"/checkout",className:"container text-decoration-none text-white",children:"Prodeed to checkout"})})]})]})})]})})},gD="/freshbiteapp_Reactjs/assets/i-2Rfl6oER.png",yD="/freshbiteapp_Reactjs/assets/ii-BCmbO67r.png",vD="/freshbiteapp_Reactjs/assets/iii-jeyHnwtn.png",_D="/freshbiteapp_Reactjs/assets/iv-Q2Ub1bgE.png",wD=de.section`
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
`,ED=de.section`
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
`,TD=de.section`
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
`,xD=[{id:"1",image:`${gD}`,name:"Annette Black",status:"General Manager"},{id:"2",image:`${yD}`,name:"John Morrison",status:"Stock Manager"},{id:"3",image:`${vD}`,name:"Michael White",status:"Sales Manager"},{id:"4",image:`${_D}`,name:"Alexandria Great",status:"Project Manager"}],SD={desktop:{items:4,breakpoint:{max:1900,min:900}},tablet:{items:3,breakpoint:{max:899,min:600}},mobile:{items:1,breakpoint:{max:599,min:0}}},ID={desktop:{items:3,breakpoint:{max:1900,min:900}},tablet:{items:2,breakpoint:{max:899,min:600}},mobile:{items:1,breakpoint:{max:599,min:0}}},CD=()=>{const[t,e]=j.useState(!0),[n,r]=j.useState([]);return j.useEffect(()=>{const i=setTimeout(()=>{(async()=>{try{const o=jn(Ln,"blog"),u=(await Li(o)).docs.map(c=>({id:c.id,...c.data()}));r(u),e(!1)}catch{e(!0)}})()},3e3);return()=>clearTimeout(i)},[]),d.jsx(d.Fragment,{children:t?d.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",d.jsx(ss,{size:60,color:"red"})," "]}):d.jsxs(d.Fragment,{children:[d.jsx(wD,{children:d.jsxs("div",{id:"first-box",children:[d.jsxs("div",{children:[d.jsx("h3",{children:"What We Do"}),d.jsx("p",{children:"At Freshbite, we are passionate about delivering the freshest fruits, vegetables, and dairy products straight to your doorstep. Our mission is to make healthy eating simple and accessible by sourcing the finest produce from local farms and trusted suppliers."}),d.jsx("button",{className:"btn btn-danger",children:"Read More"})]}),d.jsx("div",{children:d.jsx("img",{src:"https://images.unsplash.com/photo-1528373553865-c5d96fe764f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D",alt:"about image"})})]})}),d.jsx(ED,{children:d.jsxs("div",{id:"second-box",className:"container",children:[d.jsx("h3",{children:"Meet Our Team"}),d.jsxs("p",{id:"para",children:["Our Team consist of very dedicated & hard worker men & women ",d.jsx("br",{})," who will assist you till the end"]}),d.jsx("p",{id:"para-1",children:"Our Team consist of very dedicated & hard worker men & women who will assist you till the end"}),d.jsx("div",{id:"team-members",children:d.jsx(zp,{autoPlay:!0,infiniteLoop:!0,swipeable:!0,showDots:!1,responsive:SD,infinite:!0,keyBoardControl:!0,ssr:!0,itemClass:"carousel-item-padding-0-px",pauseOnHover:!1,arrows:!1,children:xD.map(i=>d.jsxs("div",{children:[d.jsx("img",{src:i.image,alt:"team"}),d.jsxs("h5",{children:[i.name," "]}),d.jsx("p",{children:i.status})]},i.id))})})]})}),d.jsx(TD,{children:d.jsxs("div",{id:"third-box",className:"container",children:[d.jsx("h3",{children:"Our Blog"}),d.jsxs("p",{id:"paras",children:["Our Team consist of very dedicated & hard worker men & women ",d.jsx("br",{})," who will assist you till the end"]}),d.jsx("p",{id:"paras-1",children:"Our Team consist of very dedicated & hard worker men & women who will assist you till the end"}),d.jsx("div",{children:d.jsx(zp,{autoPlay:!0,infiniteLoop:!0,swipeable:!0,showDots:!1,responsive:ID,infinite:!0,keyBoardControl:!0,ssr:!0,itemClass:"carousel-item-padding-0-px",pauseOnHover:!1,arrows:!1,children:n.map(i=>d.jsxs("div",{className:"card",children:[d.jsx("img",{src:i.imageurl,className:"card-img-top",alt:"Blog Pic"}),d.jsxs("div",{className:"card-body",children:[d.jsxs("p",{className:"card-text",children:["In ",i.category]}),d.jsx("h5",{className:"card-title",children:i.title.slice(0,45)}),d.jsx("p",{className:"card-text",children:i.description.slice(0,160)}),d.jsx("a",{href:i.link,className:"btn btn-danger",children:"Read More"})]})]},i.id))})})]})})]})})},AD=t=>{const e={};return d.jsx(Zx.Provider,{value:e,children:t.children})},RD=de.section`
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
        #trashicon {
            margin: 2rem 3rem 0rem 0rem;
        }
        #trashicon:hover {
            cursor: pointer;
        }
        #carticon {
            position: absolute;
            left: 66%;
            margin: 1.9rem 0rem 0rem 0rem;
        }
        #carticon:hover {
            cursor: pointer;
        }
        #price {
            position: absolute;
            left: 29%;
            color: #696969;
            font-weight: 500;
        }
        #quantity {
            position: absolute;
            left: 47%;
            color: #696969;
            font-weight: 500;
        }
        .quantity {
            margin: 0rem;
            font-size: .8rem;
            color: gray;
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
`,kD=de.div`
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
`,PD=de.section`
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
`,bD=()=>{const[t,e]=j.useState(!0),n=il(),r=$t(a=>a.wishlist.items),i=$t(a=>a.cart);j.useEffect(()=>{const a=setTimeout(()=>{(async()=>{try{e(!1)}catch(c){console.log("Error is:",c)}})()},1500);return()=>clearTimeout(a)},[]);const s=a=>{n(rD(a)),je.success(`${a.name} is removed from wishlist`)},o=a=>{i.items.some(c=>c.id===a.id)?je.error(`${a.name} is already in the cart`):(n(iD(a)),je.success(`${a.name} is added to the cart`))};return d.jsx(d.Fragment,{children:t?d.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",d.jsx(ss,{size:60,color:"red"})," "]}):d.jsxs(d.Fragment,{children:[d.jsxs(RD,{children:[d.jsxs("div",{id:"labels",children:[d.jsx("p",{children:"Product"}),d.jsx("p",{children:"Price"}),d.jsx("p",{children:"Quantity"}),d.jsx("p",{children:"Add to Cart"}),d.jsx("p",{children:"Remove"})]}),d.jsx("div",{children:r.length===0?d.jsx("p",{children:"Your Wishlist is Empty."}):d.jsx(d.Fragment,{children:d.jsx("div",{children:r.map(a=>d.jsxs("div",{id:"items",children:[d.jsxs("div",{id:"itemname",children:[d.jsx("img",{src:a.imageurl,alt:"Product Pic"}),d.jsxs("p",{children:[a.name," ",d.jsx("br",{}),a.weigh&&d.jsxs("p",{className:"quantity",children:[a.weigh," kg"]}),a.dozen&&d.jsxs("p",{className:"quantity",children:[a.dozen," dozen"]}),a.bunch&&d.jsxs("p",{className:"quantity",children:[a.bunch," bunch"]}),a.size&&d.jsx("p",{className:"quantity",children:a.size})]})]}),d.jsxs("p",{id:"price",children:["$",a.price]}),d.jsx("p",{id:"quantity",children:a.quantity}),d.jsx(oS,{color:"#393939",id:"carticon",size:"1.3rem",onClick:()=>o(a)}),d.jsx(pa,{color:"red",id:"trashicon",onClick:()=>s(a)})]},a.name))})})})]}),d.jsx(kD,{id:"tablet",children:r.length===0?d.jsx("p",{children:"Your Wishlist is Empty!"}):d.jsx("div",{className:"container",children:r.map(a=>d.jsxs("div",{id:"innerbox",children:[d.jsxs("div",{id:"imagename",children:[d.jsx("img",{src:a.imageurl,alt:a.name}),d.jsxs("div",{children:[d.jsx("h5",{children:a.name}),a.weigh&&d.jsxs("p",{className:"quantity",children:[a.weigh," kg"]}),a.dozen&&d.jsxs("p",{className:"quantity",children:[a.dozen," dozen"]}),a.bunch&&d.jsxs("p",{className:"quantity",children:[a.bunch," bunch"]}),a.size&&d.jsx("p",{className:"quantity",children:a.size})]})]}),d.jsxs("div",{id:"secondbox",children:[d.jsxs("div",{id:"label",children:[d.jsx("p",{children:"Price"}),d.jsx("p",{style:{margin:"0rem 1.5rem 0rem 1.5rem"},children:"Quantity"}),d.jsx("p",{children:"SubTotal"})]}),d.jsxs("div",{id:"items",children:[d.jsxs("p",{children:["$",parseFloat(a.price).toFixed(2)]}),d.jsx(pa,{style:{marginRight:"-15px",marginTop:"5px"},color:"red",size:".8rem"})]})]})]},a.id))})}),d.jsx(PD,{children:r.length===0?d.jsx("p",{children:"Your Wishlist is Empty"}):d.jsx("div",{className:"container",children:r.map(a=>d.jsx("div",{children:d.jsxs("div",{id:"product-detail",className:"container",children:[d.jsx("div",{children:d.jsx("img",{src:a.imageurl,alt:"Product"})}),d.jsxs("div",{id:"product-info",children:[d.jsxs("p",{id:"category",children:[a.category," / ",a.name]}),d.jsx("div",{style:{display:"flex",justifyContent:"space-between"},children:d.jsx("h3",{id:"name",children:a.name})}),a.weigh&&d.jsxs("p",{id:"quantity",children:[a.weigh," kg"]}),a.bunch&&d.jsx("p",{id:"bunch",children:a.bunch}),a.size&&d.jsx("p",{id:"size",children:a.size}),a.dozen&&d.jsx("p",{id:"dozen",children:a.dozen}),d.jsx("div",{style:{display:"flex",justifyContent:"space-between"},children:d.jsxs("p",{id:"price",children:["$",a.price]})}),d.jsx("div",{style:{display:"flex",justifyContent:"space-between",margin:"1rem 0rem 0rem 0rem"},children:d.jsx("h6",{style:{fontSize:"1.3rem",fontWeight:"600"},children:"SubTotal"})})]})]})}))})})]})})},ND=de.div`
    box-sizing: border-box;
    margin: 0%;
    max-width: 100%;
    height: auto;
`,OD=()=>{const t=il();return j.useEffect(()=>{t(KO())},[t]),d.jsx(d.Fragment,{children:d.jsx(AD,{children:d.jsxs(ND,{children:[d.jsxs(IC,{children:[d.jsx(ln,{path:"/",element:d.jsx(g_,{})}),d.jsx(ln,{path:"/Home",element:d.jsx(g_,{})}),d.jsx(ln,{path:"/Login",element:d.jsx(ON,{})}),d.jsx(ln,{path:"/Register",element:d.jsx(PN,{})}),d.jsx(ln,{path:"/shop",element:d.jsxs(d.Fragment,{children:[d.jsx(wi,{}),d.jsx(aD,{}),d.jsx(Ti,{})]})}),d.jsx(ln,{path:"/ProductDetail",element:d.jsxs(d.Fragment,{children:[d.jsx(wi,{}),d.jsx(uD,{}),d.jsx(Ti,{})]})}),d.jsx(ln,{path:"/checkout",element:d.jsxs(d.Fragment,{children:[d.jsx(wi,{}),d.jsx(dD,{}),d.jsx(Ti,{})]})}),d.jsx(ln,{path:"/Cart",element:d.jsxs(d.Fragment,{children:[d.jsx(wi,{}),d.jsx(mD,{}),d.jsx(Ti,{})]})}),d.jsx(ln,{path:"/About",element:d.jsxs(d.Fragment,{children:[d.jsx(wi,{}),d.jsx(CD,{}),d.jsx(Ti,{})]})}),d.jsx(ln,{path:"/wishlist",element:d.jsxs(d.Fragment,{children:[d.jsx(wi,{}),d.jsx(bD,{}),d.jsx(Ti,{})]})})]}),d.jsx(k9,{})]})})})},DD=RO({reducer:{cart:XO,wishlist:sD},devTools:!0}),jD=uf.createRoot(document.getElementById("root"));jD.render(d.jsx(wt.StrictMode,{children:d.jsx(Y9,{store:DD,children:d.jsx(OC,{children:d.jsx(OD,{})})})}));
