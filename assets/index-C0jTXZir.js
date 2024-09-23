function KS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function w_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var E_={exports:{}},Bc={},T_={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=Symbol.for("react.element"),GS=Symbol.for("react.portal"),QS=Symbol.for("react.fragment"),YS=Symbol.for("react.strict_mode"),XS=Symbol.for("react.profiler"),JS=Symbol.for("react.provider"),ZS=Symbol.for("react.context"),eI=Symbol.for("react.forward_ref"),tI=Symbol.for("react.suspense"),nI=Symbol.for("react.memo"),rI=Symbol.for("react.lazy"),J0=Symbol.iterator;function iI(t){return t===null||typeof t!="object"?null:(t=J0&&t[J0]||t["@@iterator"],typeof t=="function"?t:null)}var x_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S_=Object.assign,I_={};function oo(t,e,n){this.props=t,this.context=e,this.refs=I_,this.updater=n||x_}oo.prototype.isReactComponent={};oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function C_(){}C_.prototype=oo.prototype;function Bp(t,e,n){this.props=t,this.context=e,this.refs=I_,this.updater=n||x_}var Wp=Bp.prototype=new C_;Wp.constructor=Bp;S_(Wp,oo.prototype);Wp.isPureReactComponent=!0;var Z0=Array.isArray,R_=Object.prototype.hasOwnProperty,Hp={current:null},k_={key:!0,ref:!0,__self:!0,__source:!0};function A_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)R_.call(e,r)&&!k_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ha,type:t,key:s,ref:o,props:i,_owner:Hp.current}}function sI(t,e){return{$$typeof:Ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ha}function oI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var e1=/\/+/g;function lh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?oI(""+t.key):e.toString(36)}function au(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ha:case GS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+lh(o,0):r,Z0(i)?(n="",t!=null&&(n=t.replace(e1,"$&/")+"/"),au(i,e,n,"",function(c){return c})):i!=null&&(qp(i)&&(i=sI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(e1,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Z0(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+lh(s,a);o+=au(s,e,n,u,i)}else if(u=iI(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+lh(s,a++),o+=au(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function bl(t,e,n){if(t==null)return t;var r=[],i=0;return au(t,r,"","",function(s){return e.call(n,s,i++)}),r}function aI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},lu={transition:null},lI={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:lu,ReactCurrentOwner:Hp};function P_(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:bl,forEach:function(t,e,n){bl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return bl(t,function(){e++}),e},toArray:function(t){return bl(t,function(e){return e})||[]},only:function(t){if(!qp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=oo;ee.Fragment=QS;ee.Profiler=XS;ee.PureComponent=Bp;ee.StrictMode=YS;ee.Suspense=tI;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lI;ee.act=P_;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=S_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)R_.call(e,u)&&!k_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ha,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:ZS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:JS,_context:t},t.Consumer=t};ee.createElement=A_;ee.createFactory=function(t){var e=A_.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:eI,render:t}};ee.isValidElement=qp;ee.lazy=function(t){return{$$typeof:rI,_payload:{_status:-1,_result:t},_init:aI}};ee.memo=function(t,e){return{$$typeof:nI,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=lu.transition;lu.transition={};try{t()}finally{lu.transition=e}};ee.unstable_act=P_;ee.useCallback=function(t,e){return Tt.current.useCallback(t,e)};ee.useContext=function(t){return Tt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return Tt.current.useEffect(t,e)};ee.useId=function(){return Tt.current.useId()};ee.useImperativeHandle=function(t,e,n){return Tt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return Tt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return Tt.current.useReducer(t,e,n)};ee.useRef=function(t){return Tt.current.useRef(t)};ee.useState=function(t){return Tt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return Tt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return Tt.current.useTransition()};ee.version="18.3.1";T_.exports=ee;var D=T_.exports;const _t=w_(D),nf=KS({__proto__:null,default:_t},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uI=D,cI=Symbol.for("react.element"),dI=Symbol.for("react.fragment"),hI=Object.prototype.hasOwnProperty,fI=uI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pI={key:!0,ref:!0,__self:!0,__source:!0};function b_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)hI.call(e,r)&&!pI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:cI,type:t,key:s,ref:o,props:i,_owner:fI.current}}Bc.Fragment=dI;Bc.jsx=b_;Bc.jsxs=b_;E_.exports=Bc;var d=E_.exports,rf={},N_={exports:{}},Kt={},O_={exports:{}},D_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,q){var Q=$.length;$.push(q);e:for(;0<Q;){var ue=Q-1>>>1,te=$[ue];if(0<i(te,q))$[ue]=q,$[Q]=te,Q=ue;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var q=$[0],Q=$.pop();if(Q!==q){$[0]=Q;e:for(var ue=0,te=$.length,Ee=te>>>1;ue<Ee;){var Dt=2*(ue+1)-1,It=$[Dt],mt=Dt+1,Ct=$[mt];if(0>i(It,Q))mt<te&&0>i(Ct,It)?($[ue]=Ct,$[mt]=Q,ue=mt):($[ue]=It,$[Dt]=Q,ue=Dt);else if(mt<te&&0>i(Ct,Q))$[ue]=Ct,$[mt]=Q,ue=mt;else break e}}return q}function i($,q){var Q=$.sortIndex-q.sortIndex;return Q!==0?Q:$.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,p=null,g=3,_=!1,S=!1,R=!1,P=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T($){for(var q=n(c);q!==null;){if(q.callback===null)r(c);else if(q.startTime<=$)r(c),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(c)}}function b($){if(R=!1,T($),!S)if(n(u)!==null)S=!0,ci(j);else{var q=n(c);q!==null&&Ot(b,q.startTime-$)}}function j($,q){S=!1,R&&(R=!1,x(v),v=-1),_=!0;var Q=g;try{for(T(q),p=n(u);p!==null&&(!(p.expirationTime>q)||$&&!k());){var ue=p.callback;if(typeof ue=="function"){p.callback=null,g=p.priorityLevel;var te=ue(p.expirationTime<=q);q=t.unstable_now(),typeof te=="function"?p.callback=te:p===n(u)&&r(u),T(q)}else r(u);p=n(u)}if(p!==null)var Ee=!0;else{var Dt=n(c);Dt!==null&&Ot(b,Dt.startTime-q),Ee=!1}return Ee}finally{p=null,g=Q,_=!1}}var L=!1,y=null,v=-1,I=5,C=-1;function k(){return!(t.unstable_now()-C<I)}function N(){if(y!==null){var $=t.unstable_now();C=$;var q=!0;try{q=y(!0,$)}finally{q?A():(L=!1,y=null)}}else L=!1}var A;if(typeof w=="function")A=function(){w(N)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,Fn=St.port2;St.port1.onmessage=N,A=function(){Fn.postMessage(null)}}else A=function(){P(N,0)};function ci($){y=$,L||(L=!0,A())}function Ot($,q){v=P(function(){$(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){S||_||(S=!0,ci(j))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var Q=g;g=q;try{return $()}finally{g=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Q=g;g=$;try{return q()}finally{g=Q}},t.unstable_scheduleCallback=function($,q,Q){var ue=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ue+Q:ue):Q=ue,$){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=Q+te,$={id:h++,callback:q,priorityLevel:$,startTime:Q,expirationTime:te,sortIndex:-1},Q>ue?($.sortIndex=Q,e(c,$),n(u)===null&&$===n(c)&&(R?(x(v),v=-1):R=!0,Ot(b,Q-ue))):($.sortIndex=te,e(u,$),S||_||(S=!0,ci(j))),$},t.unstable_shouldYield=k,t.unstable_wrapCallback=function($){var q=g;return function(){var Q=g;g=q;try{return $.apply(this,arguments)}finally{g=Q}}}})(D_);O_.exports=D_;var mI=O_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gI=D,Wt=mI;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j_=new Set,fa={};function Gi(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(fa[t]=e,t=0;t<e.length;t++)j_.add(e[t])}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sf=Object.prototype.hasOwnProperty,yI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,t1={},n1={};function vI(t){return sf.call(n1,t)?!0:sf.call(t1,t)?!1:yI.test(t)?n1[t]=!0:(t1[t]=!0,!1)}function _I(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wI(t,e,n,r){if(e===null||typeof e>"u"||_I(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kp=/[\-:]([a-z])/g;function Gp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kp,Gp);nt[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kp,Gp);nt[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kp,Gp);nt[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qp(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wI(e,n,i,r)&&(n=null),r||i===null?vI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pr=gI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nl=Symbol.for("react.element"),fs=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),Yp=Symbol.for("react.strict_mode"),of=Symbol.for("react.profiler"),L_=Symbol.for("react.provider"),M_=Symbol.for("react.context"),Xp=Symbol.for("react.forward_ref"),af=Symbol.for("react.suspense"),lf=Symbol.for("react.suspense_list"),Jp=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),V_=Symbol.for("react.offscreen"),r1=Symbol.iterator;function Po(t){return t===null||typeof t!="object"?null:(t=r1&&t[r1]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,uh;function zo(t){if(uh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uh=e&&e[1]||""}return`
`+uh+t}var ch=!1;function dh(t,e){if(!t||ch)return"";ch=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{ch=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zo(t):""}function EI(t){switch(t.tag){case 5:return zo(t.type);case 16:return zo("Lazy");case 13:return zo("Suspense");case 19:return zo("SuspenseList");case 0:case 2:case 15:return t=dh(t.type,!1),t;case 11:return t=dh(t.type.render,!1),t;case 1:return t=dh(t.type,!0),t;default:return""}}function uf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ps:return"Fragment";case fs:return"Portal";case of:return"Profiler";case Yp:return"StrictMode";case af:return"Suspense";case lf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M_:return(t.displayName||"Context")+".Consumer";case L_:return(t._context.displayName||"Context")+".Provider";case Xp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jp:return e=t.displayName||null,e!==null?e:uf(t.type)||"Memo";case xr:e=t._payload,t=t._init;try{return uf(t(e))}catch{}}return null}function TI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uf(e);case 8:return e===Yp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function F_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xI(t){var e=F_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ol(t){t._valueTracker||(t._valueTracker=xI(t))}function z_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=F_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cf(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function i1(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function U_(t,e){e=e.checked,e!=null&&Qp(t,"checked",e,!1)}function df(t,e){U_(t,e);var n=Qr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hf(t,e.type,n):e.hasOwnProperty("defaultValue")&&hf(t,e.type,Qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function s1(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hf(t,e,n){(e!=="number"||Vu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Uo=Array.isArray;function Cs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ff(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function o1(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Uo(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qr(n)}}function $_(t,e){var n=Qr(e.value),r=Qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function a1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function B_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?B_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Dl,W_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Dl=Dl||document.createElement("div"),Dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SI=["Webkit","ms","Moz","O"];Object.keys(Jo).forEach(function(t){SI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Jo[e]=Jo[t]})});function H_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Jo.hasOwnProperty(t)&&Jo[t]?(""+e).trim():e+"px"}function q_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=H_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var II=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mf(t,e){if(e){if(II[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function gf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yf=null;function Zp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vf=null,Rs=null,ks=null;function l1(t){if(t=Ga(t)){if(typeof vf!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Gc(e),vf(t.stateNode,t.type,e))}}function K_(t){Rs?ks?ks.push(t):ks=[t]:Rs=t}function G_(){if(Rs){var t=Rs,e=ks;if(ks=Rs=null,l1(t),e)for(t=0;t<e.length;t++)l1(e[t])}}function Q_(t,e){return t(e)}function Y_(){}var hh=!1;function X_(t,e,n){if(hh)return t(e,n);hh=!0;try{return Q_(t,e,n)}finally{hh=!1,(Rs!==null||ks!==null)&&(Y_(),G_())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var r=Gc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var _f=!1;if(ir)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){_f=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{_f=!1}function CI(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Zo=!1,Fu=null,zu=!1,wf=null,RI={onError:function(t){Zo=!0,Fu=t}};function kI(t,e,n,r,i,s,o,a,u){Zo=!1,Fu=null,CI.apply(RI,arguments)}function AI(t,e,n,r,i,s,o,a,u){if(kI.apply(this,arguments),Zo){if(Zo){var c=Fu;Zo=!1,Fu=null}else throw Error(z(198));zu||(zu=!0,wf=c)}}function Qi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function J_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function u1(t){if(Qi(t)!==t)throw Error(z(188))}function PI(t){var e=t.alternate;if(!e){if(e=Qi(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return u1(i),t;if(s===r)return u1(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function Z_(t){return t=PI(t),t!==null?ew(t):null}function ew(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ew(t);if(e!==null)return e;t=t.sibling}return null}var tw=Wt.unstable_scheduleCallback,c1=Wt.unstable_cancelCallback,bI=Wt.unstable_shouldYield,NI=Wt.unstable_requestPaint,De=Wt.unstable_now,OI=Wt.unstable_getCurrentPriorityLevel,em=Wt.unstable_ImmediatePriority,nw=Wt.unstable_UserBlockingPriority,Uu=Wt.unstable_NormalPriority,DI=Wt.unstable_LowPriority,rw=Wt.unstable_IdlePriority,Wc=null,An=null;function jI(t){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(Wc,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:VI,LI=Math.log,MI=Math.LN2;function VI(t){return t>>>=0,t===0?32:31-(LI(t)/MI|0)|0}var jl=64,Ll=4194304;function $o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $u(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=$o(a):(s&=o,s!==0&&(r=$o(s)))}else o=n&~i,o!==0?r=$o(o):s!==0&&(r=$o(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function FI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=FI(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Ef(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function iw(){var t=jl;return jl<<=1,!(jl&4194240)&&(jl=64),t}function fh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function UI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function tm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function sw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ow,nm,aw,lw,uw,Tf=!1,Ml=[],Lr=null,Mr=null,Vr=null,ga=new Map,ya=new Map,Cr=[],$I="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function d1(t,e){switch(t){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function No(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ga(e),e!==null&&nm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function BI(t,e,n,r,i){switch(e){case"focusin":return Lr=No(Lr,t,e,n,r,i),!0;case"dragenter":return Mr=No(Mr,t,e,n,r,i),!0;case"mouseover":return Vr=No(Vr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ga.set(s,No(ga.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ya.set(s,No(ya.get(s)||null,t,e,n,r,i)),!0}return!1}function cw(t){var e=xi(t.target);if(e!==null){var n=Qi(e);if(n!==null){if(e=n.tag,e===13){if(e=J_(n),e!==null){t.blockedOn=e,uw(t.priority,function(){aw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);yf=r,n.target.dispatchEvent(r),yf=null}else return e=Ga(n),e!==null&&nm(e),t.blockedOn=n,!1;e.shift()}return!0}function h1(t,e,n){uu(t)&&n.delete(e)}function WI(){Tf=!1,Lr!==null&&uu(Lr)&&(Lr=null),Mr!==null&&uu(Mr)&&(Mr=null),Vr!==null&&uu(Vr)&&(Vr=null),ga.forEach(h1),ya.forEach(h1)}function Oo(t,e){t.blockedOn===e&&(t.blockedOn=null,Tf||(Tf=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,WI)))}function va(t){function e(i){return Oo(i,t)}if(0<Ml.length){Oo(Ml[0],t);for(var n=1;n<Ml.length;n++){var r=Ml[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Lr!==null&&Oo(Lr,t),Mr!==null&&Oo(Mr,t),Vr!==null&&Oo(Vr,t),ga.forEach(e),ya.forEach(e),n=0;n<Cr.length;n++)r=Cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Cr.length&&(n=Cr[0],n.blockedOn===null);)cw(n),n.blockedOn===null&&Cr.shift()}var As=pr.ReactCurrentBatchConfig,Bu=!0;function HI(t,e,n,r){var i=ce,s=As.transition;As.transition=null;try{ce=1,rm(t,e,n,r)}finally{ce=i,As.transition=s}}function qI(t,e,n,r){var i=ce,s=As.transition;As.transition=null;try{ce=4,rm(t,e,n,r)}finally{ce=i,As.transition=s}}function rm(t,e,n,r){if(Bu){var i=xf(t,e,n,r);if(i===null)xh(t,e,r,Wu,n),d1(t,r);else if(BI(i,t,e,n,r))r.stopPropagation();else if(d1(t,r),e&4&&-1<$I.indexOf(t)){for(;i!==null;){var s=Ga(i);if(s!==null&&ow(s),s=xf(t,e,n,r),s===null&&xh(t,e,r,Wu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xh(t,e,r,null,n)}}var Wu=null;function xf(t,e,n,r){if(Wu=null,t=Zp(r),t=xi(t),t!==null)if(e=Qi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=J_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wu=t,null}function dw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OI()){case em:return 1;case nw:return 4;case Uu:case DI:return 16;case rw:return 536870912;default:return 16}default:return 16}}var Nr=null,im=null,cu=null;function hw(){if(cu)return cu;var t,e=im,n=e.length,r,i="value"in Nr?Nr.value:Nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return cu=i.slice(t,1<r?1-r:void 0)}function du(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vl(){return!0}function f1(){return!1}function Gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vl:f1,this.isPropagationStopped=f1,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),e}var ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sm=Gt(ao),Ka=Ce({},ao,{view:0,detail:0}),KI=Gt(Ka),ph,mh,Do,Hc=Ce({},Ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:om,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(ph=t.screenX-Do.screenX,mh=t.screenY-Do.screenY):mh=ph=0,Do=t),ph)},movementY:function(t){return"movementY"in t?t.movementY:mh}}),p1=Gt(Hc),GI=Ce({},Hc,{dataTransfer:0}),QI=Gt(GI),YI=Ce({},Ka,{relatedTarget:0}),gh=Gt(YI),XI=Ce({},ao,{animationName:0,elapsedTime:0,pseudoElement:0}),JI=Gt(XI),ZI=Ce({},ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),e5=Gt(ZI),t5=Ce({},ao,{data:0}),m1=Gt(t5),n5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s5(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=i5[t])?!!e[t]:!1}function om(){return s5}var o5=Ce({},Ka,{key:function(t){if(t.key){var e=n5[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=du(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?r5[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:om,charCode:function(t){return t.type==="keypress"?du(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?du(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),a5=Gt(o5),l5=Ce({},Hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g1=Gt(l5),u5=Ce({},Ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:om}),c5=Gt(u5),d5=Ce({},ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),h5=Gt(d5),f5=Ce({},Hc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),p5=Gt(f5),m5=[9,13,27,32],am=ir&&"CompositionEvent"in window,ea=null;ir&&"documentMode"in document&&(ea=document.documentMode);var g5=ir&&"TextEvent"in window&&!ea,fw=ir&&(!am||ea&&8<ea&&11>=ea),y1=" ",v1=!1;function pw(t,e){switch(t){case"keyup":return m5.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function y5(t,e){switch(t){case"compositionend":return mw(e);case"keypress":return e.which!==32?null:(v1=!0,y1);case"textInput":return t=e.data,t===y1&&v1?null:t;default:return null}}function v5(t,e){if(ms)return t==="compositionend"||!am&&pw(t,e)?(t=hw(),cu=im=Nr=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fw&&e.locale!=="ko"?null:e.data;default:return null}}var _5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_5[t.type]:e==="textarea"}function gw(t,e,n,r){K_(r),e=Hu(e,"onChange"),0<e.length&&(n=new sm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ta=null,_a=null;function w5(t){Rw(t,0)}function qc(t){var e=vs(t);if(z_(e))return t}function E5(t,e){if(t==="change")return e}var yw=!1;if(ir){var yh;if(ir){var vh="oninput"in document;if(!vh){var w1=document.createElement("div");w1.setAttribute("oninput","return;"),vh=typeof w1.oninput=="function"}yh=vh}else yh=!1;yw=yh&&(!document.documentMode||9<document.documentMode)}function E1(){ta&&(ta.detachEvent("onpropertychange",vw),_a=ta=null)}function vw(t){if(t.propertyName==="value"&&qc(_a)){var e=[];gw(e,_a,t,Zp(t)),X_(w5,e)}}function T5(t,e,n){t==="focusin"?(E1(),ta=e,_a=n,ta.attachEvent("onpropertychange",vw)):t==="focusout"&&E1()}function x5(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qc(_a)}function S5(t,e){if(t==="click")return qc(e)}function I5(t,e){if(t==="input"||t==="change")return qc(e)}function C5(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tn=typeof Object.is=="function"?Object.is:C5;function wa(t,e){if(Tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sf.call(e,i)||!Tn(t[i],e[i]))return!1}return!0}function T1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function x1(t,e){var n=T1(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=T1(n)}}function _w(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_w(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ww(){for(var t=window,e=Vu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vu(t.document)}return e}function lm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function R5(t){var e=ww(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_w(n.ownerDocument.documentElement,n)){if(r!==null&&lm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=x1(n,s);var o=x1(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var k5=ir&&"documentMode"in document&&11>=document.documentMode,gs=null,Sf=null,na=null,If=!1;function S1(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;If||gs==null||gs!==Vu(r)||(r=gs,"selectionStart"in r&&lm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),na&&wa(na,r)||(na=r,r=Hu(Sf,"onSelect"),0<r.length&&(e=new sm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gs)))}function Fl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ys={animationend:Fl("Animation","AnimationEnd"),animationiteration:Fl("Animation","AnimationIteration"),animationstart:Fl("Animation","AnimationStart"),transitionend:Fl("Transition","TransitionEnd")},_h={},Ew={};ir&&(Ew=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function Kc(t){if(_h[t])return _h[t];if(!ys[t])return t;var e=ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ew)return _h[t]=e[n];return t}var Tw=Kc("animationend"),xw=Kc("animationiteration"),Sw=Kc("animationstart"),Iw=Kc("transitionend"),Cw=new Map,I1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(t,e){Cw.set(t,e),Gi(e,[t])}for(var wh=0;wh<I1.length;wh++){var Eh=I1[wh],A5=Eh.toLowerCase(),P5=Eh[0].toUpperCase()+Eh.slice(1);ni(A5,"on"+P5)}ni(Tw,"onAnimationEnd");ni(xw,"onAnimationIteration");ni(Sw,"onAnimationStart");ni("dblclick","onDoubleClick");ni("focusin","onFocus");ni("focusout","onBlur");ni(Iw,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),b5=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function C1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,AI(r,e,void 0,t),t.currentTarget=null}function Rw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;C1(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;C1(i,a,c),s=u}}}if(zu)throw t=wf,zu=!1,wf=null,t}function ge(t,e){var n=e[Pf];n===void 0&&(n=e[Pf]=new Set);var r=t+"__bubble";n.has(r)||(kw(e,t,2,!1),n.add(r))}function Th(t,e,n){var r=0;e&&(r|=4),kw(n,t,r,e)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Ea(t){if(!t[zl]){t[zl]=!0,j_.forEach(function(n){n!=="selectionchange"&&(b5.has(n)||Th(n,!1,t),Th(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zl]||(e[zl]=!0,Th("selectionchange",!1,e))}}function kw(t,e,n,r){switch(dw(e)){case 1:var i=HI;break;case 4:i=qI;break;default:i=rm}n=i.bind(null,e,n,t),i=void 0,!_f||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function xh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=xi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}X_(function(){var c=s,h=Zp(n),p=[];e:{var g=Cw.get(t);if(g!==void 0){var _=sm,S=t;switch(t){case"keypress":if(du(n)===0)break e;case"keydown":case"keyup":_=a5;break;case"focusin":S="focus",_=gh;break;case"focusout":S="blur",_=gh;break;case"beforeblur":case"afterblur":_=gh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=p1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=QI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=c5;break;case Tw:case xw:case Sw:_=JI;break;case Iw:_=h5;break;case"scroll":_=KI;break;case"wheel":_=p5;break;case"copy":case"cut":case"paste":_=e5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=g1}var R=(e&4)!==0,P=!R&&t==="scroll",x=R?g!==null?g+"Capture":null:g;R=[];for(var w=c,T;w!==null;){T=w;var b=T.stateNode;if(T.tag===5&&b!==null&&(T=b,x!==null&&(b=ma(w,x),b!=null&&R.push(Ta(w,b,T)))),P)break;w=w.return}0<R.length&&(g=new _(g,S,null,n,h),p.push({event:g,listeners:R}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",g&&n!==yf&&(S=n.relatedTarget||n.fromElement)&&(xi(S)||S[sr]))break e;if((_||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,_?(S=n.relatedTarget||n.toElement,_=c,S=S?xi(S):null,S!==null&&(P=Qi(S),S!==P||S.tag!==5&&S.tag!==6)&&(S=null)):(_=null,S=c),_!==S)){if(R=p1,b="onMouseLeave",x="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(R=g1,b="onPointerLeave",x="onPointerEnter",w="pointer"),P=_==null?g:vs(_),T=S==null?g:vs(S),g=new R(b,w+"leave",_,n,h),g.target=P,g.relatedTarget=T,b=null,xi(h)===c&&(R=new R(x,w+"enter",S,n,h),R.target=T,R.relatedTarget=P,b=R),P=b,_&&S)t:{for(R=_,x=S,w=0,T=R;T;T=ls(T))w++;for(T=0,b=x;b;b=ls(b))T++;for(;0<w-T;)R=ls(R),w--;for(;0<T-w;)x=ls(x),T--;for(;w--;){if(R===x||x!==null&&R===x.alternate)break t;R=ls(R),x=ls(x)}R=null}else R=null;_!==null&&R1(p,g,_,R,!1),S!==null&&P!==null&&R1(p,P,S,R,!0)}}e:{if(g=c?vs(c):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var j=E5;else if(_1(g))if(yw)j=I5;else{j=x5;var L=T5}else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=S5);if(j&&(j=j(t,c))){gw(p,j,n,h);break e}L&&L(t,g,c),t==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&hf(g,"number",g.value)}switch(L=c?vs(c):window,t){case"focusin":(_1(L)||L.contentEditable==="true")&&(gs=L,Sf=c,na=null);break;case"focusout":na=Sf=gs=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,S1(p,n,h);break;case"selectionchange":if(k5)break;case"keydown":case"keyup":S1(p,n,h)}var y;if(am)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else ms?pw(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(fw&&n.locale!=="ko"&&(ms||v!=="onCompositionStart"?v==="onCompositionEnd"&&ms&&(y=hw()):(Nr=h,im="value"in Nr?Nr.value:Nr.textContent,ms=!0)),L=Hu(c,v),0<L.length&&(v=new m1(v,t,null,n,h),p.push({event:v,listeners:L}),y?v.data=y:(y=mw(n),y!==null&&(v.data=y)))),(y=g5?y5(t,n):v5(t,n))&&(c=Hu(c,"onBeforeInput"),0<c.length&&(h=new m1("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=y))}Rw(p,e)})}function Ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ma(t,n),s!=null&&r.unshift(Ta(t,s,i)),s=ma(t,e),s!=null&&r.push(Ta(t,s,i))),t=t.return}return r}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function R1(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ma(n,s),u!=null&&o.unshift(Ta(n,u,a))):i||(u=ma(n,s),u!=null&&o.push(Ta(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var N5=/\r\n?/g,O5=/\u0000|\uFFFD/g;function k1(t){return(typeof t=="string"?t:""+t).replace(N5,`
`).replace(O5,"")}function Ul(t,e,n){if(e=k1(e),k1(t)!==e&&n)throw Error(z(425))}function qu(){}var Cf=null,Rf=null;function kf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Af=typeof setTimeout=="function"?setTimeout:void 0,D5=typeof clearTimeout=="function"?clearTimeout:void 0,A1=typeof Promise=="function"?Promise:void 0,j5=typeof queueMicrotask=="function"?queueMicrotask:typeof A1<"u"?function(t){return A1.resolve(null).then(t).catch(L5)}:Af;function L5(t){setTimeout(function(){throw t})}function Sh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),va(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);va(e)}function Fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function P1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var lo=Math.random().toString(36).slice(2),kn="__reactFiber$"+lo,xa="__reactProps$"+lo,sr="__reactContainer$"+lo,Pf="__reactEvents$"+lo,M5="__reactListeners$"+lo,V5="__reactHandles$"+lo;function xi(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sr]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=P1(t);t!==null;){if(n=t[kn])return n;t=P1(t)}return e}t=n,n=t.parentNode}return null}function Ga(t){return t=t[kn]||t[sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Gc(t){return t[xa]||null}var bf=[],_s=-1;function ri(t){return{current:t}}function _e(t){0>_s||(t.current=bf[_s],bf[_s]=null,_s--)}function pe(t,e){_s++,bf[_s]=t.current,t.current=e}var Yr={},ft=ri(Yr),Pt=ri(!1),ji=Yr;function zs(t,e){var n=t.type.contextTypes;if(!n)return Yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function bt(t){return t=t.childContextTypes,t!=null}function Ku(){_e(Pt),_e(ft)}function b1(t,e,n){if(ft.current!==Yr)throw Error(z(168));pe(ft,e),pe(Pt,n)}function Aw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,TI(t)||"Unknown",i));return Ce({},n,r)}function Gu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yr,ji=ft.current,pe(ft,t),pe(Pt,Pt.current),!0}function N1(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=Aw(t,e,ji),r.__reactInternalMemoizedMergedChildContext=t,_e(Pt),_e(ft),pe(ft,t)):_e(Pt),pe(Pt,n)}var Kn=null,Qc=!1,Ih=!1;function Pw(t){Kn===null?Kn=[t]:Kn.push(t)}function F5(t){Qc=!0,Pw(t)}function ii(){if(!Ih&&Kn!==null){Ih=!0;var t=0,e=ce;try{var n=Kn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Kn=null,Qc=!1}catch(i){throw Kn!==null&&(Kn=Kn.slice(t+1)),tw(em,ii),i}finally{ce=e,Ih=!1}}return null}var ws=[],Es=0,Qu=null,Yu=0,Yt=[],Xt=0,Li=null,Gn=1,Qn="";function yi(t,e){ws[Es++]=Yu,ws[Es++]=Qu,Qu=t,Yu=e}function bw(t,e,n){Yt[Xt++]=Gn,Yt[Xt++]=Qn,Yt[Xt++]=Li,Li=t;var r=Gn;t=Qn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var s=32-yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gn=1<<32-yn(e)+i|n<<i|r,Qn=s+t}else Gn=1<<s|n<<i|r,Qn=t}function um(t){t.return!==null&&(yi(t,1),bw(t,1,0))}function cm(t){for(;t===Qu;)Qu=ws[--Es],ws[Es]=null,Yu=ws[--Es],ws[Es]=null;for(;t===Li;)Li=Yt[--Xt],Yt[Xt]=null,Qn=Yt[--Xt],Yt[Xt]=null,Gn=Yt[--Xt],Yt[Xt]=null}var Ut=null,Vt=null,Te=!1,dn=null;function Nw(t,e){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function O1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Vt=Fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Li!==null?{id:Gn,overflow:Qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Vt=null,!0):!1;default:return!1}}function Nf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Of(t){if(Te){var e=Vt;if(e){var n=e;if(!O1(t,e)){if(Nf(t))throw Error(z(418));e=Fr(n.nextSibling);var r=Ut;e&&O1(t,e)?Nw(r,n):(t.flags=t.flags&-4097|2,Te=!1,Ut=t)}}else{if(Nf(t))throw Error(z(418));t.flags=t.flags&-4097|2,Te=!1,Ut=t}}}function D1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function $l(t){if(t!==Ut)return!1;if(!Te)return D1(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kf(t.type,t.memoizedProps)),e&&(e=Vt)){if(Nf(t))throw Ow(),Error(z(418));for(;e;)Nw(t,e),e=Fr(e.nextSibling)}if(D1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vt=Fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vt=null}}else Vt=Ut?Fr(t.stateNode.nextSibling):null;return!0}function Ow(){for(var t=Vt;t;)t=Fr(t.nextSibling)}function Us(){Vt=Ut=null,Te=!1}function dm(t){dn===null?dn=[t]:dn.push(t)}var z5=pr.ReactCurrentBatchConfig;function jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Bl(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function j1(t){var e=t._init;return e(t._payload)}function Dw(t){function e(x,w){if(t){var T=x.deletions;T===null?(x.deletions=[w],x.flags|=16):T.push(w)}}function n(x,w){if(!t)return null;for(;w!==null;)e(x,w),w=w.sibling;return null}function r(x,w){for(x=new Map;w!==null;)w.key!==null?x.set(w.key,w):x.set(w.index,w),w=w.sibling;return x}function i(x,w){return x=Br(x,w),x.index=0,x.sibling=null,x}function s(x,w,T){return x.index=T,t?(T=x.alternate,T!==null?(T=T.index,T<w?(x.flags|=2,w):T):(x.flags|=2,w)):(x.flags|=1048576,w)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function a(x,w,T,b){return w===null||w.tag!==6?(w=Nh(T,x.mode,b),w.return=x,w):(w=i(w,T),w.return=x,w)}function u(x,w,T,b){var j=T.type;return j===ps?h(x,w,T.props.children,b,T.key):w!==null&&(w.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===xr&&j1(j)===w.type)?(b=i(w,T.props),b.ref=jo(x,w,T),b.return=x,b):(b=vu(T.type,T.key,T.props,null,x.mode,b),b.ref=jo(x,w,T),b.return=x,b)}function c(x,w,T,b){return w===null||w.tag!==4||w.stateNode.containerInfo!==T.containerInfo||w.stateNode.implementation!==T.implementation?(w=Oh(T,x.mode,b),w.return=x,w):(w=i(w,T.children||[]),w.return=x,w)}function h(x,w,T,b,j){return w===null||w.tag!==7?(w=Pi(T,x.mode,b,j),w.return=x,w):(w=i(w,T),w.return=x,w)}function p(x,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Nh(""+w,x.mode,T),w.return=x,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Nl:return T=vu(w.type,w.key,w.props,null,x.mode,T),T.ref=jo(x,null,w),T.return=x,T;case fs:return w=Oh(w,x.mode,T),w.return=x,w;case xr:var b=w._init;return p(x,b(w._payload),T)}if(Uo(w)||Po(w))return w=Pi(w,x.mode,T,null),w.return=x,w;Bl(x,w)}return null}function g(x,w,T,b){var j=w!==null?w.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return j!==null?null:a(x,w,""+T,b);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Nl:return T.key===j?u(x,w,T,b):null;case fs:return T.key===j?c(x,w,T,b):null;case xr:return j=T._init,g(x,w,j(T._payload),b)}if(Uo(T)||Po(T))return j!==null?null:h(x,w,T,b,null);Bl(x,T)}return null}function _(x,w,T,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return x=x.get(T)||null,a(w,x,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Nl:return x=x.get(b.key===null?T:b.key)||null,u(w,x,b,j);case fs:return x=x.get(b.key===null?T:b.key)||null,c(w,x,b,j);case xr:var L=b._init;return _(x,w,T,L(b._payload),j)}if(Uo(b)||Po(b))return x=x.get(T)||null,h(w,x,b,j,null);Bl(w,b)}return null}function S(x,w,T,b){for(var j=null,L=null,y=w,v=w=0,I=null;y!==null&&v<T.length;v++){y.index>v?(I=y,y=null):I=y.sibling;var C=g(x,y,T[v],b);if(C===null){y===null&&(y=I);break}t&&y&&C.alternate===null&&e(x,y),w=s(C,w,v),L===null?j=C:L.sibling=C,L=C,y=I}if(v===T.length)return n(x,y),Te&&yi(x,v),j;if(y===null){for(;v<T.length;v++)y=p(x,T[v],b),y!==null&&(w=s(y,w,v),L===null?j=y:L.sibling=y,L=y);return Te&&yi(x,v),j}for(y=r(x,y);v<T.length;v++)I=_(y,x,v,T[v],b),I!==null&&(t&&I.alternate!==null&&y.delete(I.key===null?v:I.key),w=s(I,w,v),L===null?j=I:L.sibling=I,L=I);return t&&y.forEach(function(k){return e(x,k)}),Te&&yi(x,v),j}function R(x,w,T,b){var j=Po(T);if(typeof j!="function")throw Error(z(150));if(T=j.call(T),T==null)throw Error(z(151));for(var L=j=null,y=w,v=w=0,I=null,C=T.next();y!==null&&!C.done;v++,C=T.next()){y.index>v?(I=y,y=null):I=y.sibling;var k=g(x,y,C.value,b);if(k===null){y===null&&(y=I);break}t&&y&&k.alternate===null&&e(x,y),w=s(k,w,v),L===null?j=k:L.sibling=k,L=k,y=I}if(C.done)return n(x,y),Te&&yi(x,v),j;if(y===null){for(;!C.done;v++,C=T.next())C=p(x,C.value,b),C!==null&&(w=s(C,w,v),L===null?j=C:L.sibling=C,L=C);return Te&&yi(x,v),j}for(y=r(x,y);!C.done;v++,C=T.next())C=_(y,x,v,C.value,b),C!==null&&(t&&C.alternate!==null&&y.delete(C.key===null?v:C.key),w=s(C,w,v),L===null?j=C:L.sibling=C,L=C);return t&&y.forEach(function(N){return e(x,N)}),Te&&yi(x,v),j}function P(x,w,T,b){if(typeof T=="object"&&T!==null&&T.type===ps&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Nl:e:{for(var j=T.key,L=w;L!==null;){if(L.key===j){if(j=T.type,j===ps){if(L.tag===7){n(x,L.sibling),w=i(L,T.props.children),w.return=x,x=w;break e}}else if(L.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===xr&&j1(j)===L.type){n(x,L.sibling),w=i(L,T.props),w.ref=jo(x,L,T),w.return=x,x=w;break e}n(x,L);break}else e(x,L);L=L.sibling}T.type===ps?(w=Pi(T.props.children,x.mode,b,T.key),w.return=x,x=w):(b=vu(T.type,T.key,T.props,null,x.mode,b),b.ref=jo(x,w,T),b.return=x,x=b)}return o(x);case fs:e:{for(L=T.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===T.containerInfo&&w.stateNode.implementation===T.implementation){n(x,w.sibling),w=i(w,T.children||[]),w.return=x,x=w;break e}else{n(x,w);break}else e(x,w);w=w.sibling}w=Oh(T,x.mode,b),w.return=x,x=w}return o(x);case xr:return L=T._init,P(x,w,L(T._payload),b)}if(Uo(T))return S(x,w,T,b);if(Po(T))return R(x,w,T,b);Bl(x,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,w!==null&&w.tag===6?(n(x,w.sibling),w=i(w,T),w.return=x,x=w):(n(x,w),w=Nh(T,x.mode,b),w.return=x,x=w),o(x)):n(x,w)}return P}var $s=Dw(!0),jw=Dw(!1),Xu=ri(null),Ju=null,Ts=null,hm=null;function fm(){hm=Ts=Ju=null}function pm(t){var e=Xu.current;_e(Xu),t._currentValue=e}function Df(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e){Ju=t,hm=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kt=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(hm!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(Ju===null)throw Error(z(308));Ts=t,Ju.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var Si=null;function mm(t){Si===null?Si=[t]:Si.push(t)}function Lw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,mm(e)):(n.next=i.next,i.next=n),e.interleaved=n,or(t,r)}function or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Sr=!1;function gm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,or(t,n)}return i=r.interleaved,i===null?(e.next=e,mm(r)):(e.next=i.next,i.next=e),r.interleaved=e,or(t,n)}function hu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tm(t,n)}}function L1(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zu(t,e,n,r){var i=t.updateQueue;Sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,h=c=u=null,a=s;do{var g=a.lane,_=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,R=a;switch(g=e,_=n,R.tag){case 1:if(S=R.payload,typeof S=="function"){p=S.call(_,p,g);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=R.payload,g=typeof S=="function"?S.call(_,p,g):S,g==null)break e;p=Ce({},p,g);break e;case 2:Sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else _={eventTime:_,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,u=p):h=h.next=_,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Vi|=o,t.lanes=o,t.memoizedState=p}}function M1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Qa={},Pn=ri(Qa),Sa=ri(Qa),Ia=ri(Qa);function Ii(t){if(t===Qa)throw Error(z(174));return t}function ym(t,e){switch(pe(Ia,e),pe(Sa,t),pe(Pn,Qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pf(e,t)}_e(Pn),pe(Pn,e)}function Bs(){_e(Pn),_e(Sa),_e(Ia)}function Vw(t){Ii(Ia.current);var e=Ii(Pn.current),n=pf(e,t.type);e!==n&&(pe(Sa,t),pe(Pn,n))}function vm(t){Sa.current===t&&(_e(Pn),_e(Sa))}var xe=ri(0);function ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ch=[];function _m(){for(var t=0;t<Ch.length;t++)Ch[t]._workInProgressVersionPrimary=null;Ch.length=0}var fu=pr.ReactCurrentDispatcher,Rh=pr.ReactCurrentBatchConfig,Mi=0,Ie=null,Ue=null,He=null,tc=!1,ra=!1,Ca=0,U5=0;function at(){throw Error(z(321))}function wm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tn(t[n],e[n]))return!1;return!0}function Em(t,e,n,r,i,s){if(Mi=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fu.current=t===null||t.memoizedState===null?H5:q5,t=n(r,i),ra){s=0;do{if(ra=!1,Ca=0,25<=s)throw Error(z(301));s+=1,He=Ue=null,e.updateQueue=null,fu.current=K5,t=n(r,i)}while(ra)}if(fu.current=nc,e=Ue!==null&&Ue.next!==null,Mi=0,He=Ue=Ie=null,tc=!1,e)throw Error(z(300));return t}function Tm(){var t=Ca!==0;return Ca=0,t}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ie.memoizedState=He=t:He=He.next=t,He}function nn(){if(Ue===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=He===null?Ie.memoizedState:He.next;if(e!==null)He=e,Ue=t;else{if(t===null)throw Error(z(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},He===null?Ie.memoizedState=He=t:He=He.next=t}return He}function Ra(t,e){return typeof e=="function"?e(t):e}function kh(t){var e=nn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((Mi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,Ie.lanes|=h,Vi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Tn(r,e.memoizedState)||(kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,Vi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ah(t){var e=nn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tn(s,e.memoizedState)||(kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Fw(){}function zw(t,e){var n=Ie,r=nn(),i=e(),s=!Tn(r.memoizedState,i);if(s&&(r.memoizedState=i,kt=!0),r=r.queue,xm(Bw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,ka(9,$w.bind(null,n,r,i,e),void 0,null),Ke===null)throw Error(z(349));Mi&30||Uw(n,e,i)}return i}function Uw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $w(t,e,n,r){e.value=n,e.getSnapshot=r,Ww(e)&&Hw(t)}function Bw(t,e,n){return n(function(){Ww(e)&&Hw(t)})}function Ww(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tn(t,n)}catch{return!0}}function Hw(t){var e=or(t,1);e!==null&&vn(e,t,1,-1)}function V1(t){var e=Cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},e.queue=t,t=t.dispatch=W5.bind(null,Ie,t),[e.memoizedState,t]}function ka(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qw(){return nn().memoizedState}function pu(t,e,n,r){var i=Cn();Ie.flags|=t,i.memoizedState=ka(1|e,n,void 0,r===void 0?null:r)}function Yc(t,e,n,r){var i=nn();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&wm(r,o.deps)){i.memoizedState=ka(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=ka(1|e,n,s,r)}function F1(t,e){return pu(8390656,8,t,e)}function xm(t,e){return Yc(2048,8,t,e)}function Kw(t,e){return Yc(4,2,t,e)}function Gw(t,e){return Yc(4,4,t,e)}function Qw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yw(t,e,n){return n=n!=null?n.concat([t]):null,Yc(4,4,Qw.bind(null,e,t),n)}function Sm(){}function Xw(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Jw(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Zw(t,e,n){return Mi&21?(Tn(n,e)||(n=iw(),Ie.lanes|=n,Vi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kt=!0),t.memoizedState=n)}function $5(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Rh.transition;Rh.transition={};try{t(!1),e()}finally{ce=n,Rh.transition=r}}function e2(){return nn().memoizedState}function B5(t,e,n){var r=$r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},t2(t))n2(e,n);else if(n=Lw(t,e,n,r),n!==null){var i=wt();vn(n,t,r,i),r2(n,e,r)}}function W5(t,e,n){var r=$r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(t2(t))n2(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Tn(a,o)){var u=e.interleaved;u===null?(i.next=i,mm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Lw(t,e,i,r),n!==null&&(i=wt(),vn(n,t,r,i),r2(n,e,r))}}function t2(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function n2(t,e){ra=tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function r2(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tm(t,n)}}var nc={readContext:tn,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},H5={readContext:tn,useCallback:function(t,e){return Cn().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:F1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pu(4194308,4,Qw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pu(4194308,4,t,e)},useInsertionEffect:function(t,e){return pu(4,2,t,e)},useMemo:function(t,e){var n=Cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=B5.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=Cn();return t={current:t},e.memoizedState=t},useState:V1,useDebugValue:Sm,useDeferredValue:function(t){return Cn().memoizedState=t},useTransition:function(){var t=V1(!1),e=t[0];return t=$5.bind(null,t[1]),Cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=Cn();if(Te){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),Ke===null)throw Error(z(349));Mi&30||Uw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,F1(Bw.bind(null,r,s,t),[t]),r.flags|=2048,ka(9,$w.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Cn(),e=Ke.identifierPrefix;if(Te){var n=Qn,r=Gn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=U5++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},q5={readContext:tn,useCallback:Xw,useContext:tn,useEffect:xm,useImperativeHandle:Yw,useInsertionEffect:Kw,useLayoutEffect:Gw,useMemo:Jw,useReducer:kh,useRef:qw,useState:function(){return kh(Ra)},useDebugValue:Sm,useDeferredValue:function(t){var e=nn();return Zw(e,Ue.memoizedState,t)},useTransition:function(){var t=kh(Ra)[0],e=nn().memoizedState;return[t,e]},useMutableSource:Fw,useSyncExternalStore:zw,useId:e2,unstable_isNewReconciler:!1},K5={readContext:tn,useCallback:Xw,useContext:tn,useEffect:xm,useImperativeHandle:Yw,useInsertionEffect:Kw,useLayoutEffect:Gw,useMemo:Jw,useReducer:Ah,useRef:qw,useState:function(){return Ah(Ra)},useDebugValue:Sm,useDeferredValue:function(t){var e=nn();return Ue===null?e.memoizedState=t:Zw(e,Ue.memoizedState,t)},useTransition:function(){var t=Ah(Ra)[0],e=nn().memoizedState;return[t,e]},useMutableSource:Fw,useSyncExternalStore:zw,useId:e2,unstable_isNewReconciler:!1};function un(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xc={isMounted:function(t){return(t=t._reactInternals)?Qi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=$r(t),s=Zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,i),e!==null&&(vn(e,t,i,r),hu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=$r(t),s=Zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,i),e!==null&&(vn(e,t,i,r),hu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=$r(t),i=Zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=zr(t,i,r),e!==null&&(vn(e,t,r,n),hu(e,t,r))}};function z1(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!wa(n,r)||!wa(i,s):!0}function i2(t,e,n){var r=!1,i=Yr,s=e.contextType;return typeof s=="object"&&s!==null?s=tn(s):(i=bt(e)?ji:ft.current,r=e.contextTypes,s=(r=r!=null)?zs(t,i):Yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function U1(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xc.enqueueReplaceState(e,e.state,null)}function Lf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},gm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tn(s):(s=bt(e)?ji:ft.current,i.context=zs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xc.enqueueReplaceState(i,i.state,null),Zu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,e){try{var n="",r=e;do n+=EI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ph(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var G5=typeof WeakMap=="function"?WeakMap:Map;function s2(t,e,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ic||(ic=!0,Kf=r),Mf(t,e)},n}function o2(t,e,n){n=Zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Mf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mf(t,e),typeof r!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function $1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new G5;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=l4.bind(null,t,e,n),e.then(t,t))}function B1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function W1(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zn(-1,1),e.tag=2,zr(n,e,1))),n.lanes|=1),t)}var Q5=pr.ReactCurrentOwner,kt=!1;function vt(t,e,n,r){e.child=t===null?jw(e,null,n,r):$s(e,t.child,n,r)}function H1(t,e,n,r,i){n=n.render;var s=e.ref;return Ps(e,i),r=Em(t,e,n,r,s,i),n=Tm(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ar(t,e,i)):(Te&&n&&um(e),e.flags|=1,vt(t,e,r,i),e.child)}function q1(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Nm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,a2(t,e,s,r,i)):(t=vu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(o,r)&&t.ref===e.ref)return ar(t,e,i)}return e.flags|=1,t=Br(s,r),t.ref=e.ref,t.return=e,e.child=t}function a2(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(wa(s,r)&&t.ref===e.ref)if(kt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,ar(t,e,i)}return Vf(t,e,n,r,i)}function l2(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Ss,Mt),Mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Ss,Mt),Mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Ss,Mt),Mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Ss,Mt),Mt|=r;return vt(t,e,i,n),e.child}function u2(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vf(t,e,n,r,i){var s=bt(n)?ji:ft.current;return s=zs(e,s),Ps(e,i),n=Em(t,e,n,r,s,i),r=Tm(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ar(t,e,i)):(Te&&r&&um(e),e.flags|=1,vt(t,e,n,i),e.child)}function K1(t,e,n,r,i){if(bt(n)){var s=!0;Gu(e)}else s=!1;if(Ps(e,i),e.stateNode===null)mu(t,e),i2(e,n,r),Lf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=tn(c):(c=bt(n)?ji:ft.current,c=zs(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&U1(e,o,r,c),Sr=!1;var g=e.memoizedState;o.state=g,Zu(e,r,o,i),u=e.memoizedState,a!==r||g!==u||Pt.current||Sr?(typeof h=="function"&&(jf(e,n,h,r),u=e.memoizedState),(a=Sr||z1(e,n,a,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Mw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:un(e.type,a),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=tn(u):(u=bt(n)?ji:ft.current,u=zs(e,u));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||g!==u)&&U1(e,o,r,u),Sr=!1,g=e.memoizedState,o.state=g,Zu(e,r,o,i);var S=e.memoizedState;a!==p||g!==S||Pt.current||Sr?(typeof _=="function"&&(jf(e,n,_,r),S=e.memoizedState),(c=Sr||z1(e,n,c,r,g,S,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Ff(t,e,n,r,s,i)}function Ff(t,e,n,r,i,s){u2(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&N1(e,n,!1),ar(t,e,s);r=e.stateNode,Q5.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$s(e,t.child,null,s),e.child=$s(e,null,a,s)):vt(t,e,a,s),e.memoizedState=r.state,i&&N1(e,n,!0),e.child}function c2(t){var e=t.stateNode;e.pendingContext?b1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&b1(t,e.context,!1),ym(t,e.containerInfo)}function G1(t,e,n,r,i){return Us(),dm(i),e.flags|=256,vt(t,e,n,r),e.child}var zf={dehydrated:null,treeContext:null,retryLane:0};function Uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function d2(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(xe,i&1),t===null)return Of(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ed(o,r,0,null),t=Pi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uf(n),e.memoizedState=zf,t):Im(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Y5(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Br(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Br(a,s):(s=Pi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Uf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=zf,r}return s=t.child,t=s.sibling,r=Br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Im(t,e){return e=ed({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wl(t,e,n,r){return r!==null&&dm(r),$s(e,t.child,null,n),t=Im(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Y5(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ph(Error(z(422))),Wl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ed({mode:"visible",children:r.children},i,0,null),s=Pi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&$s(e,t.child,null,o),e.child.memoizedState=Uf(o),e.memoizedState=zf,s);if(!(e.mode&1))return Wl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=Ph(s,r,void 0),Wl(t,e,o,r)}if(a=(o&t.childLanes)!==0,kt||a){if(r=Ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,or(t,i),vn(r,t,i,-1))}return bm(),r=Ph(Error(z(421))),Wl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=u4.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Vt=Fr(i.nextSibling),Ut=e,Te=!0,dn=null,t!==null&&(Yt[Xt++]=Gn,Yt[Xt++]=Qn,Yt[Xt++]=Li,Gn=t.id,Qn=t.overflow,Li=e),e=Im(e,r.children),e.flags|=4096,e)}function Q1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Df(t.return,e,n)}function bh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function h2(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Q1(t,n,e);else if(t.tag===19)Q1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ec(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ec(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bh(e,!0,n,null,s);break;case"together":bh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function X5(t,e,n){switch(e.tag){case 3:c2(e),Us();break;case 5:Vw(e);break;case 1:bt(e.type)&&Gu(e);break;case 4:ym(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(Xu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?d2(t,e,n):(pe(xe,xe.current&1),t=ar(t,e,n),t!==null?t.sibling:null);pe(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return h2(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,l2(t,e,n)}return ar(t,e,n)}var f2,$f,p2,m2;f2=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$f=function(){};p2=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ii(Pn.current);var s=null;switch(n){case"input":i=cf(t,i),r=cf(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=ff(t,i),r=ff(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qu)}mf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ge("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};m2=function(t,e,n,r){n!==r&&(e.flags|=4)};function Lo(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function J5(t,e,n){var r=e.pendingProps;switch(cm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(e),null;case 1:return bt(e.type)&&Ku(),lt(e),null;case 3:return r=e.stateNode,Bs(),_e(Pt),_e(ft),_m(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($l(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dn!==null&&(Yf(dn),dn=null))),$f(t,e),lt(e),null;case 5:vm(e);var i=Ii(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)p2(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return lt(e),null}if(t=Ii(Pn.current),$l(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[kn]=e,r[xa]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<Bo.length;i++)ge(Bo[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":i1(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":o1(r,s),ge("invalid",r)}mf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ul(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ul(r.textContent,a,t),i=["children",""+a]):fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":Ol(r),s1(r,s,!0);break;case"textarea":Ol(r),a1(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=qu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=B_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kn]=e,t[xa]=r,f2(t,e,!1,!1),e.stateNode=t;e:{switch(o=gf(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<Bo.length;i++)ge(Bo[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":i1(t,r),i=cf(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),ge("invalid",t);break;case"textarea":o1(t,r),i=ff(t,r),ge("invalid",t);break;default:i=r}mf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?q_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&W_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&pa(t,u):typeof u=="number"&&pa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ge("scroll",t):u!=null&&Qp(t,s,u,o))}switch(n){case"input":Ol(t),s1(t,r,!1);break;case"textarea":Ol(t),a1(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Cs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Cs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return lt(e),null;case 6:if(t&&e.stateNode!=null)m2(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Ii(Ia.current),Ii(Pn.current),$l(e)){if(r=e.stateNode,n=e.memoizedProps,r[kn]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:Ul(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ul(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return lt(e),null;case 13:if(_e(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Vt!==null&&e.mode&1&&!(e.flags&128))Ow(),Us(),e.flags|=98560,s=!1;else if(s=$l(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[kn]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;lt(e),s=!1}else dn!==null&&(Yf(dn),dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?$e===0&&($e=3):bm())),e.updateQueue!==null&&(e.flags|=4),lt(e),null);case 4:return Bs(),$f(t,e),t===null&&Ea(e.stateNode.containerInfo),lt(e),null;case 10:return pm(e.type._context),lt(e),null;case 17:return bt(e.type)&&Ku(),lt(e),null;case 19:if(_e(xe),s=e.memoizedState,s===null)return lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Lo(s,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ec(t),o!==null){for(e.flags|=128,Lo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>Hs&&(e.flags|=128,r=!0,Lo(s,!1),e.lanes=4194304)}else{if(!r)if(t=ec(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return lt(e),null}else 2*De()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,r=!0,Lo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=xe.current,pe(xe,r?n&1|2:n&1),e):(lt(e),null);case 22:case 23:return Pm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Mt&1073741824&&(lt(e),e.subtreeFlags&6&&(e.flags|=8192)):lt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function Z5(t,e){switch(cm(e),e.tag){case 1:return bt(e.type)&&Ku(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bs(),_e(Pt),_e(ft),_m(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vm(e),null;case 13:if(_e(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(xe),null;case 4:return Bs(),null;case 10:return pm(e.type._context),null;case 22:case 23:return Pm(),null;case 24:return null;default:return null}}var Hl=!1,dt=!1,e4=typeof WeakSet=="function"?WeakSet:Set,B=null;function xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function Bf(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Y1=!1;function t4(t,e){if(Cf=Bu,t=ww(),lm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,p=t,g=null;t:for(;;){for(var _;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(_=p.firstChild)!==null;)g=p,p=_;for(;;){if(p===t)break t;if(g===n&&++c===i&&(a=o),g===s&&++h===r&&(u=o),(_=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rf={focusedElem:t,selectionRange:n},Bu=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var R=S.memoizedProps,P=S.memoizedState,x=e.stateNode,w=x.getSnapshotBeforeUpdate(e.elementType===e.type?R:un(e.type,R),P);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(b){Ae(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return S=Y1,Y1=!1,S}function ia(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Bf(e,n,s)}i=i.next}while(i!==r)}}function Jc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function g2(t){var e=t.alternate;e!==null&&(t.alternate=null,g2(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[xa],delete e[Pf],delete e[M5],delete e[V5])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function y2(t){return t.tag===5||t.tag===3||t.tag===4}function X1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||y2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qu));else if(r!==4&&(t=t.child,t!==null))for(Hf(t,e,n),t=t.sibling;t!==null;)Hf(t,e,n),t=t.sibling}function qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qf(t,e,n),t=t.sibling;t!==null;)qf(t,e,n),t=t.sibling}var Xe=null,cn=!1;function _r(t,e,n){for(n=n.child;n!==null;)v2(t,e,n),n=n.sibling}function v2(t,e,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(Wc,n)}catch{}switch(n.tag){case 5:dt||xs(n,e);case 6:var r=Xe,i=cn;Xe=null,_r(t,e,n),Xe=r,cn=i,Xe!==null&&(cn?(t=Xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(cn?(t=Xe,n=n.stateNode,t.nodeType===8?Sh(t.parentNode,n):t.nodeType===1&&Sh(t,n),va(t)):Sh(Xe,n.stateNode));break;case 4:r=Xe,i=cn,Xe=n.stateNode.containerInfo,cn=!0,_r(t,e,n),Xe=r,cn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bf(n,e,o),i=i.next}while(i!==r)}_r(t,e,n);break;case 1:if(!dt&&(xs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ae(n,e,a)}_r(t,e,n);break;case 21:_r(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,_r(t,e,n),dt=r):_r(t,e,n);break;default:_r(t,e,n)}}function J1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new e4),e.forEach(function(r){var i=c4.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xe=a.stateNode,cn=!1;break e;case 3:Xe=a.stateNode.containerInfo,cn=!0;break e;case 4:Xe=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(Xe===null)throw Error(z(160));v2(s,o,i),Xe=null,cn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_2(e,t),e=e.sibling}function _2(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),Sn(t),r&4){try{ia(3,t,t.return),Jc(3,t)}catch(R){Ae(t,t.return,R)}try{ia(5,t,t.return)}catch(R){Ae(t,t.return,R)}}break;case 1:an(e,t),Sn(t),r&512&&n!==null&&xs(n,n.return);break;case 5:if(an(e,t),Sn(t),r&512&&n!==null&&xs(n,n.return),t.flags&32){var i=t.stateNode;try{pa(i,"")}catch(R){Ae(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&U_(i,s),gf(a,o);var c=gf(a,s);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?q_(i,p):h==="dangerouslySetInnerHTML"?W_(i,p):h==="children"?pa(i,p):Qp(i,h,p,c)}switch(a){case"input":df(i,s);break;case"textarea":$_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Cs(i,!!s.multiple,_,!1):g!==!!s.multiple&&(s.defaultValue!=null?Cs(i,!!s.multiple,s.defaultValue,!0):Cs(i,!!s.multiple,s.multiple?[]:"",!1))}i[xa]=s}catch(R){Ae(t,t.return,R)}}break;case 6:if(an(e,t),Sn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Ae(t,t.return,R)}}break;case 3:if(an(e,t),Sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{va(e.containerInfo)}catch(R){Ae(t,t.return,R)}break;case 4:an(e,t),Sn(t);break;case 13:an(e,t),Sn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(km=De())),r&4&&J1(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(c=dt)||h,an(e,t),dt=c):an(e,t),Sn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(B=t,h=t.child;h!==null;){for(p=B=h;B!==null;){switch(g=B,_=g.child,g.tag){case 0:case 11:case 14:case 15:ia(4,g,g.return);break;case 1:xs(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(R){Ae(r,n,R)}}break;case 5:xs(g,g.return);break;case 22:if(g.memoizedState!==null){ey(p);continue}}_!==null?(_.return=g,B=_):ey(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=H_("display",o))}catch(R){Ae(t,t.return,R)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(R){Ae(t,t.return,R)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:an(e,t),Sn(t),r&4&&J1(t);break;case 21:break;default:an(e,t),Sn(t)}}function Sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(y2(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pa(i,""),r.flags&=-33);var s=X1(t);qf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=X1(t);Hf(t,a,o);break;default:throw Error(z(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function n4(t,e,n){B=t,w2(t)}function w2(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Hl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||dt;a=Hl;var c=dt;if(Hl=o,(dt=u)&&!c)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?ty(i):u!==null?(u.return=o,B=u):ty(i);for(;s!==null;)B=s,w2(s),s=s.sibling;B=i,Hl=a,dt=c}Z1(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):Z1(t)}}function Z1(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||Jc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&M1(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}M1(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&va(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}dt||e.flags&512&&Wf(e)}catch(g){Ae(e,e.return,g)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function ey(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function ty(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jc(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ae(e,i,u)}}var s=e.return;try{Wf(e)}catch(u){Ae(e,s,u)}break;case 5:var o=e.return;try{Wf(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){B=null;break}var a=e.sibling;if(a!==null){a.return=e.return,B=a;break}B=e.return}}var r4=Math.ceil,rc=pr.ReactCurrentDispatcher,Cm=pr.ReactCurrentOwner,en=pr.ReactCurrentBatchConfig,se=0,Ke=null,Fe=null,et=0,Mt=0,Ss=ri(0),$e=0,Aa=null,Vi=0,Zc=0,Rm=0,sa=null,Rt=null,km=0,Hs=1/0,Hn=null,ic=!1,Kf=null,Ur=null,ql=!1,Or=null,sc=0,oa=0,Gf=null,gu=-1,yu=0;function wt(){return se&6?De():gu!==-1?gu:gu=De()}function $r(t){return t.mode&1?se&2&&et!==0?et&-et:z5.transition!==null?(yu===0&&(yu=iw()),yu):(t=ce,t!==0||(t=window.event,t=t===void 0?16:dw(t.type)),t):1}function vn(t,e,n,r){if(50<oa)throw oa=0,Gf=null,Error(z(185));qa(t,n,r),(!(se&2)||t!==Ke)&&(t===Ke&&(!(se&2)&&(Zc|=n),$e===4&&Rr(t,et)),Nt(t,r),n===1&&se===0&&!(e.mode&1)&&(Hs=De()+500,Qc&&ii()))}function Nt(t,e){var n=t.callbackNode;zI(t,e);var r=$u(t,t===Ke?et:0);if(r===0)n!==null&&c1(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&c1(n),e===1)t.tag===0?F5(ny.bind(null,t)):Pw(ny.bind(null,t)),j5(function(){!(se&6)&&ii()}),n=null;else{switch(sw(r)){case 1:n=em;break;case 4:n=nw;break;case 16:n=Uu;break;case 536870912:n=rw;break;default:n=Uu}n=k2(n,E2.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function E2(t,e){if(gu=-1,yu=0,se&6)throw Error(z(327));var n=t.callbackNode;if(bs()&&t.callbackNode!==n)return null;var r=$u(t,t===Ke?et:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=oc(t,r);else{e=r;var i=se;se|=2;var s=x2();(Ke!==t||et!==e)&&(Hn=null,Hs=De()+500,Ai(t,e));do try{o4();break}catch(a){T2(t,a)}while(!0);fm(),rc.current=s,se=i,Fe!==null?e=0:(Ke=null,et=0,e=$e)}if(e!==0){if(e===2&&(i=Ef(t),i!==0&&(r=i,e=Qf(t,i))),e===1)throw n=Aa,Ai(t,0),Rr(t,r),Nt(t,De()),n;if(e===6)Rr(t,r);else{if(i=t.current.alternate,!(r&30)&&!i4(i)&&(e=oc(t,r),e===2&&(s=Ef(t),s!==0&&(r=s,e=Qf(t,s))),e===1))throw n=Aa,Ai(t,0),Rr(t,r),Nt(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:vi(t,Rt,Hn);break;case 3:if(Rr(t,r),(r&130023424)===r&&(e=km+500-De(),10<e)){if($u(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Af(vi.bind(null,t,Rt,Hn),e);break}vi(t,Rt,Hn);break;case 4:if(Rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*r4(r/1960))-r,10<r){t.timeoutHandle=Af(vi.bind(null,t,Rt,Hn),r);break}vi(t,Rt,Hn);break;case 5:vi(t,Rt,Hn);break;default:throw Error(z(329))}}}return Nt(t,De()),t.callbackNode===n?E2.bind(null,t):null}function Qf(t,e){var n=sa;return t.current.memoizedState.isDehydrated&&(Ai(t,e).flags|=256),t=oc(t,e),t!==2&&(e=Rt,Rt=n,e!==null&&Yf(e)),t}function Yf(t){Rt===null?Rt=t:Rt.push.apply(Rt,t)}function i4(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rr(t,e){for(e&=~Rm,e&=~Zc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function ny(t){if(se&6)throw Error(z(327));bs();var e=$u(t,0);if(!(e&1))return Nt(t,De()),null;var n=oc(t,e);if(t.tag!==0&&n===2){var r=Ef(t);r!==0&&(e=r,n=Qf(t,r))}if(n===1)throw n=Aa,Ai(t,0),Rr(t,e),Nt(t,De()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vi(t,Rt,Hn),Nt(t,De()),null}function Am(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Hs=De()+500,Qc&&ii())}}function Fi(t){Or!==null&&Or.tag===0&&!(se&6)&&bs();var e=se;se|=1;var n=en.transition,r=ce;try{if(en.transition=null,ce=1,t)return t()}finally{ce=r,en.transition=n,se=e,!(se&6)&&ii()}}function Pm(){Mt=Ss.current,_e(Ss)}function Ai(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,D5(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(cm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ku();break;case 3:Bs(),_e(Pt),_e(ft),_m();break;case 5:vm(r);break;case 4:Bs();break;case 13:_e(xe);break;case 19:_e(xe);break;case 10:pm(r.type._context);break;case 22:case 23:Pm()}n=n.return}if(Ke=t,Fe=t=Br(t.current,null),et=Mt=e,$e=0,Aa=null,Rm=Zc=Vi=0,Rt=sa=null,Si!==null){for(e=0;e<Si.length;e++)if(n=Si[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Si=null}return t}function T2(t,e){do{var n=Fe;try{if(fm(),fu.current=nc,tc){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tc=!1}if(Mi=0,He=Ue=Ie=null,ra=!1,Ca=0,Cm.current=null,n===null||n.return===null){$e=1,Aa=e,Fe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=et,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=B1(o);if(_!==null){_.flags&=-257,W1(_,o,a,s,e),_.mode&1&&$1(s,c,e),e=_,u=c;var S=e.updateQueue;if(S===null){var R=new Set;R.add(u),e.updateQueue=R}else S.add(u);break e}else{if(!(e&1)){$1(s,c,e),bm();break e}u=Error(z(426))}}else if(Te&&a.mode&1){var P=B1(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),W1(P,o,a,s,e),dm(Ws(u,a));break e}}s=u=Ws(u,a),$e!==4&&($e=2),sa===null?sa=[s]:sa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=s2(s,u,e);L1(s,x);break e;case 1:a=u;var w=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Ur===null||!Ur.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=o2(s,a,e);L1(s,b);break e}}s=s.return}while(s!==null)}I2(n)}catch(j){e=j,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function x2(){var t=rc.current;return rc.current=nc,t===null?nc:t}function bm(){($e===0||$e===3||$e===2)&&($e=4),Ke===null||!(Vi&268435455)&&!(Zc&268435455)||Rr(Ke,et)}function oc(t,e){var n=se;se|=2;var r=x2();(Ke!==t||et!==e)&&(Hn=null,Ai(t,e));do try{s4();break}catch(i){T2(t,i)}while(!0);if(fm(),se=n,rc.current=r,Fe!==null)throw Error(z(261));return Ke=null,et=0,$e}function s4(){for(;Fe!==null;)S2(Fe)}function o4(){for(;Fe!==null&&!bI();)S2(Fe)}function S2(t){var e=R2(t.alternate,t,Mt);t.memoizedProps=t.pendingProps,e===null?I2(t):Fe=e,Cm.current=null}function I2(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Z5(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,Fe=null;return}}else if(n=J5(n,e,Mt),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);$e===0&&($e=5)}function vi(t,e,n){var r=ce,i=en.transition;try{en.transition=null,ce=1,a4(t,e,n,r)}finally{en.transition=i,ce=r}return null}function a4(t,e,n,r){do bs();while(Or!==null);if(se&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(UI(t,s),t===Ke&&(Fe=Ke=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ql||(ql=!0,k2(Uu,function(){return bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=en.transition,en.transition=null;var o=ce;ce=1;var a=se;se|=4,Cm.current=null,t4(t,n),_2(n,t),R5(Rf),Bu=!!Cf,Rf=Cf=null,t.current=n,n4(n),NI(),se=a,ce=o,en.transition=s}else t.current=n;if(ql&&(ql=!1,Or=t,sc=i),s=t.pendingLanes,s===0&&(Ur=null),jI(n.stateNode),Nt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ic)throw ic=!1,t=Kf,Kf=null,t;return sc&1&&t.tag!==0&&bs(),s=t.pendingLanes,s&1?t===Gf?oa++:(oa=0,Gf=t):oa=0,ii(),null}function bs(){if(Or!==null){var t=sw(sc),e=en.transition,n=ce;try{if(en.transition=null,ce=16>t?16:t,Or===null)var r=!1;else{if(t=Or,Or=null,sc=0,se&6)throw Error(z(331));var i=se;for(se|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(B=c;B!==null;){var h=B;switch(h.tag){case 0:case 11:case 15:ia(8,h,s)}var p=h.child;if(p!==null)p.return=h,B=p;else for(;B!==null;){h=B;var g=h.sibling,_=h.return;if(g2(h),h===c){B=null;break}if(g!==null){g.return=_,B=g;break}B=_}}}var S=s.alternate;if(S!==null){var R=S.child;if(R!==null){S.child=null;do{var P=R.sibling;R.sibling=null,R=P}while(R!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ia(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,B=x;break e}B=s.return}}var w=t.current;for(B=w;B!==null;){o=B;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,B=T;else e:for(o=w;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jc(9,a)}}catch(j){Ae(a,a.return,j)}if(a===o){B=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,B=b;break e}B=a.return}}if(se=i,ii(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(Wc,t)}catch{}r=!0}return r}finally{ce=n,en.transition=e}}return!1}function ry(t,e,n){e=Ws(n,e),e=s2(t,e,1),t=zr(t,e,1),e=wt(),t!==null&&(qa(t,1,e),Nt(t,e))}function Ae(t,e,n){if(t.tag===3)ry(t,t,n);else for(;e!==null;){if(e.tag===3){ry(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ur===null||!Ur.has(r))){t=Ws(n,t),t=o2(e,t,1),e=zr(e,t,1),t=wt(),e!==null&&(qa(e,1,t),Nt(e,t));break}}e=e.return}}function l4(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(et&n)===n&&($e===4||$e===3&&(et&130023424)===et&&500>De()-km?Ai(t,0):Rm|=n),Nt(t,e)}function C2(t,e){e===0&&(t.mode&1?(e=Ll,Ll<<=1,!(Ll&130023424)&&(Ll=4194304)):e=1);var n=wt();t=or(t,e),t!==null&&(qa(t,e,n),Nt(t,n))}function u4(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),C2(t,n)}function c4(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),C2(t,n)}var R2;R2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kt=!1,X5(t,e,n);kt=!!(t.flags&131072)}else kt=!1,Te&&e.flags&1048576&&bw(e,Yu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;mu(t,e),t=e.pendingProps;var i=zs(e,ft.current);Ps(e,n),i=Em(null,e,r,t,i,n);var s=Tm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bt(r)?(s=!0,Gu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gm(e),i.updater=Xc,e.stateNode=i,i._reactInternals=e,Lf(e,r,t,n),e=Ff(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&um(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(mu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=h4(r),t=un(r,t),i){case 0:e=Vf(null,e,r,t,n);break e;case 1:e=K1(null,e,r,t,n);break e;case 11:e=H1(null,e,r,t,n);break e;case 14:e=q1(null,e,r,un(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Vf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),K1(t,e,r,i,n);case 3:e:{if(c2(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Mw(t,e),Zu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ws(Error(z(423)),e),e=G1(t,e,r,n,i);break e}else if(r!==i){i=Ws(Error(z(424)),e),e=G1(t,e,r,n,i);break e}else for(Vt=Fr(e.stateNode.containerInfo.firstChild),Ut=e,Te=!0,dn=null,n=jw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Us(),r===i){e=ar(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return Vw(e),t===null&&Of(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,kf(r,i)?o=null:s!==null&&kf(r,s)&&(e.flags|=32),u2(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&Of(e),null;case 13:return d2(t,e,n);case 4:return ym(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$s(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),H1(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(Xu,r._currentValue),r._currentValue=o,s!==null)if(Tn(s.value,o)){if(s.children===i.children&&!Pt.current){e=ar(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Zn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Df(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Df(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ps(e,n),i=tn(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),q1(t,e,r,i,n);case 15:return a2(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),mu(t,e),e.tag=1,bt(r)?(t=!0,Gu(e)):t=!1,Ps(e,n),i2(e,r,i),Lf(e,r,i,n),Ff(null,e,r,!0,t,n);case 19:return h2(t,e,n);case 22:return l2(t,e,n)}throw Error(z(156,e.tag))};function k2(t,e){return tw(t,e)}function d4(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(t,e,n,r){return new d4(t,e,n,r)}function Nm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function h4(t){if(typeof t=="function")return Nm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xp)return 11;if(t===Jp)return 14}return 2}function Br(t,e){var n=t.alternate;return n===null?(n=Zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Nm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ps:return Pi(n.children,i,s,e);case Yp:o=8,i|=8;break;case of:return t=Zt(12,n,e,i|2),t.elementType=of,t.lanes=s,t;case af:return t=Zt(13,n,e,i),t.elementType=af,t.lanes=s,t;case lf:return t=Zt(19,n,e,i),t.elementType=lf,t.lanes=s,t;case V_:return ed(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L_:o=10;break e;case M_:o=9;break e;case Xp:o=11;break e;case Jp:o=14;break e;case xr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=Zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Pi(t,e,n,r){return t=Zt(7,t,r,e),t.lanes=n,t}function ed(t,e,n,r){return t=Zt(22,t,r,e),t.elementType=V_,t.lanes=n,t.stateNode={isHidden:!1},t}function Nh(t,e,n){return t=Zt(6,t,null,e),t.lanes=n,t}function Oh(t,e,n){return e=Zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function f4(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fh(0),this.expirationTimes=fh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Om(t,e,n,r,i,s,o,a,u){return t=new f4(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gm(s),t}function p4(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function A2(t){if(!t)return Yr;t=t._reactInternals;e:{if(Qi(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(bt(n))return Aw(t,n,e)}return e}function P2(t,e,n,r,i,s,o,a,u){return t=Om(n,r,!0,t,i,s,o,a,u),t.context=A2(null),n=t.current,r=wt(),i=$r(n),s=Zn(r,i),s.callback=e??null,zr(n,s,i),t.current.lanes=i,qa(t,i,r),Nt(t,r),t}function td(t,e,n,r){var i=e.current,s=wt(),o=$r(i);return n=A2(n),e.context===null?e.context=n:e.pendingContext=n,e=Zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zr(i,e,o),t!==null&&(vn(t,i,o,s),hu(t,i,o)),o}function ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function iy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dm(t,e){iy(t,e),(t=t.alternate)&&iy(t,e)}function m4(){return null}var b2=typeof reportError=="function"?reportError:function(t){console.error(t)};function jm(t){this._internalRoot=t}nd.prototype.render=jm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));td(t,e,null,null)};nd.prototype.unmount=jm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fi(function(){td(null,t,null,null)}),e[sr]=null}};function nd(t){this._internalRoot=t}nd.prototype.unstable_scheduleHydration=function(t){if(t){var e=lw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cr.length&&e!==0&&e<Cr[n].priority;n++);Cr.splice(n,0,t),n===0&&cw(t)}};function Lm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sy(){}function g4(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ac(o);s.call(c)}}var o=P2(e,r,t,0,null,!1,!1,"",sy);return t._reactRootContainer=o,t[sr]=o.current,Ea(t.nodeType===8?t.parentNode:t),Fi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ac(u);a.call(c)}}var u=Om(t,0,!1,null,null,!1,!1,"",sy);return t._reactRootContainer=u,t[sr]=u.current,Ea(t.nodeType===8?t.parentNode:t),Fi(function(){td(e,u,n,r)}),u}function id(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=ac(o);a.call(u)}}td(e,o,t,i)}else o=g4(n,e,t,i,r);return ac(o)}ow=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$o(e.pendingLanes);n!==0&&(tm(e,n|1),Nt(e,De()),!(se&6)&&(Hs=De()+500,ii()))}break;case 13:Fi(function(){var r=or(t,1);if(r!==null){var i=wt();vn(r,t,1,i)}}),Dm(t,1)}};nm=function(t){if(t.tag===13){var e=or(t,134217728);if(e!==null){var n=wt();vn(e,t,134217728,n)}Dm(t,134217728)}};aw=function(t){if(t.tag===13){var e=$r(t),n=or(t,e);if(n!==null){var r=wt();vn(n,t,e,r)}Dm(t,e)}};lw=function(){return ce};uw=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};vf=function(t,e,n){switch(e){case"input":if(df(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Gc(r);if(!i)throw Error(z(90));z_(r),df(r,i)}}}break;case"textarea":$_(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};Q_=Am;Y_=Fi;var y4={usingClientEntryPoint:!1,Events:[Ga,vs,Gc,K_,G_,Am]},Mo={findFiberByHostInstance:xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},v4={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Z_(t),t===null?null:t.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||m4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Wc=Kl.inject(v4),An=Kl}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y4;Kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lm(e))throw Error(z(200));return p4(t,e,null,n)};Kt.createRoot=function(t,e){if(!Lm(t))throw Error(z(299));var n=!1,r="",i=b2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Om(t,1,!1,null,null,n,!1,r,i),t[sr]=e.current,Ea(t.nodeType===8?t.parentNode:t),new jm(e)};Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=Z_(e),t=t===null?null:t.stateNode,t};Kt.flushSync=function(t){return Fi(t)};Kt.hydrate=function(t,e,n){if(!rd(e))throw Error(z(200));return id(null,t,e,!0,n)};Kt.hydrateRoot=function(t,e,n){if(!Lm(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=b2;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=P2(e,null,t,1,n??null,i,!1,s,o),t[sr]=e.current,Ea(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nd(e)};Kt.render=function(t,e,n){if(!rd(e))throw Error(z(200));return id(null,t,e,!1,n)};Kt.unmountComponentAtNode=function(t){if(!rd(t))throw Error(z(40));return t._reactRootContainer?(Fi(function(){id(null,null,t,!1,function(){t._reactRootContainer=null,t[sr]=null})}),!0):!1};Kt.unstable_batchedUpdates=Am;Kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rd(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return id(t,e,n,!1,r)};Kt.version="18.3.1-next-f1338f8080-20240426";function N2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N2)}catch(t){console.error(t)}}N2(),N_.exports=Kt;var _4=N_.exports,oy=_4;rf.createRoot=oy.createRoot,rf.hydrateRoot=oy.hydrateRoot;const Mm="/freshbiteapp_Reactjs/assets/logo-ClmogISy.png";var At=function(){return At=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},At.apply(this,arguments)};function lc(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var ye="-ms-",aa="-moz-",le="-webkit-",O2="comm",sd="rule",Vm="decl",w4="@import",D2="@keyframes",E4="@layer",j2=Math.abs,Fm=String.fromCharCode,Xf=Object.assign;function T4(t,e){return qe(t,0)^45?(((e<<2^qe(t,0))<<2^qe(t,1))<<2^qe(t,2))<<2^qe(t,3):0}function L2(t){return t.trim()}function qn(t,e){return(t=e.exec(t))?t[0]:t}function Z(t,e,n){return t.replace(e,n)}function _u(t,e,n){return t.indexOf(e,n)}function qe(t,e){return t.charCodeAt(e)|0}function qs(t,e,n){return t.slice(e,n)}function Rn(t){return t.length}function M2(t){return t.length}function Wo(t,e){return e.push(t),t}function x4(t,e){return t.map(e).join("")}function ay(t,e){return t.filter(function(n){return!qn(n,e)})}var od=1,Ks=1,V2=0,rn=0,Ve=0,uo="";function ad(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:od,column:Ks,length:o,return:"",siblings:a}}function Tr(t,e){return Xf(ad("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function us(t){for(;t.root;)t=Tr(t.root,{children:[t]});Wo(t,t.siblings)}function S4(){return Ve}function I4(){return Ve=rn>0?qe(uo,--rn):0,Ks--,Ve===10&&(Ks=1,od--),Ve}function _n(){return Ve=rn<V2?qe(uo,rn++):0,Ks++,Ve===10&&(Ks=1,od++),Ve}function bi(){return qe(uo,rn)}function wu(){return rn}function ld(t,e){return qs(uo,t,e)}function Jf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function C4(t){return od=Ks=1,V2=Rn(uo=t),rn=0,[]}function R4(t){return uo="",t}function Dh(t){return L2(ld(rn-1,Zf(t===91?t+2:t===40?t+1:t)))}function k4(t){for(;(Ve=bi())&&Ve<33;)_n();return Jf(t)>2||Jf(Ve)>3?"":" "}function A4(t,e){for(;--e&&_n()&&!(Ve<48||Ve>102||Ve>57&&Ve<65||Ve>70&&Ve<97););return ld(t,wu()+(e<6&&bi()==32&&_n()==32))}function Zf(t){for(;_n();)switch(Ve){case t:return rn;case 34:case 39:t!==34&&t!==39&&Zf(Ve);break;case 40:t===41&&Zf(t);break;case 92:_n();break}return rn}function P4(t,e){for(;_n()&&t+Ve!==57;)if(t+Ve===84&&bi()===47)break;return"/*"+ld(e,rn-1)+"*"+Fm(t===47?t:_n())}function b4(t){for(;!Jf(bi());)_n();return ld(t,rn)}function N4(t){return R4(Eu("",null,null,null,[""],t=C4(t),0,[0],t))}function Eu(t,e,n,r,i,s,o,a,u){for(var c=0,h=0,p=o,g=0,_=0,S=0,R=1,P=1,x=1,w=0,T="",b=i,j=s,L=r,y=T;P;)switch(S=w,w=_n()){case 40:if(S!=108&&qe(y,p-1)==58){_u(y+=Z(Dh(w),"&","&\f"),"&\f",j2(c?a[c-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:y+=Dh(w);break;case 9:case 10:case 13:case 32:y+=k4(S);break;case 92:y+=A4(wu()-1,7);continue;case 47:switch(bi()){case 42:case 47:Wo(O4(P4(_n(),wu()),e,n,u),u);break;default:y+="/"}break;case 123*R:a[c++]=Rn(y)*x;case 125*R:case 59:case 0:switch(w){case 0:case 125:P=0;case 59+h:x==-1&&(y=Z(y,/\f/g,"")),_>0&&Rn(y)-p&&Wo(_>32?uy(y+";",r,n,p-1,u):uy(Z(y," ","")+";",r,n,p-2,u),u);break;case 59:y+=";";default:if(Wo(L=ly(y,e,n,c,h,i,a,T,b=[],j=[],p,s),s),w===123)if(h===0)Eu(y,e,L,L,b,s,p,a,j);else switch(g===99&&qe(y,3)===110?100:g){case 100:case 108:case 109:case 115:Eu(t,L,L,r&&Wo(ly(t,L,L,0,0,i,a,T,i,b=[],p,j),j),i,j,p,a,r?b:j);break;default:Eu(y,L,L,L,[""],j,0,a,j)}}c=h=_=0,R=x=1,T=y="",p=o;break;case 58:p=1+Rn(y),_=S;default:if(R<1){if(w==123)--R;else if(w==125&&R++==0&&I4()==125)continue}switch(y+=Fm(w),w*R){case 38:x=h>0?1:(y+="\f",-1);break;case 44:a[c++]=(Rn(y)-1)*x,x=1;break;case 64:bi()===45&&(y+=Dh(_n())),g=bi(),h=p=Rn(T=y+=b4(wu())),w++;break;case 45:S===45&&Rn(y)==2&&(R=0)}}return s}function ly(t,e,n,r,i,s,o,a,u,c,h,p){for(var g=i-1,_=i===0?s:[""],S=M2(_),R=0,P=0,x=0;R<r;++R)for(var w=0,T=qs(t,g+1,g=j2(P=o[R])),b=t;w<S;++w)(b=L2(P>0?_[w]+" "+T:Z(T,/&\f/g,_[w])))&&(u[x++]=b);return ad(t,e,n,i===0?sd:a,u,c,h,p)}function O4(t,e,n,r){return ad(t,e,n,O2,Fm(S4()),qs(t,2,-2),0,r)}function uy(t,e,n,r,i){return ad(t,e,n,Vm,qs(t,0,r),qs(t,r+1,-1),r,i)}function F2(t,e,n){switch(T4(t,e)){case 5103:return le+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return le+t+t;case 4789:return aa+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return le+t+aa+t+ye+t+t;case 5936:switch(qe(t,e+11)){case 114:return le+t+ye+Z(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return le+t+ye+Z(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return le+t+ye+Z(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return le+t+ye+t+t;case 6165:return le+t+ye+"flex-"+t+t;case 5187:return le+t+Z(t,/(\w+).+(:[^]+)/,le+"box-$1$2"+ye+"flex-$1$2")+t;case 5443:return le+t+ye+"flex-item-"+Z(t,/flex-|-self/g,"")+(qn(t,/flex-|baseline/)?"":ye+"grid-row-"+Z(t,/flex-|-self/g,""))+t;case 4675:return le+t+ye+"flex-line-pack"+Z(t,/align-content|flex-|-self/g,"")+t;case 5548:return le+t+ye+Z(t,"shrink","negative")+t;case 5292:return le+t+ye+Z(t,"basis","preferred-size")+t;case 6060:return le+"box-"+Z(t,"-grow","")+le+t+ye+Z(t,"grow","positive")+t;case 4554:return le+Z(t,/([^-])(transform)/g,"$1"+le+"$2")+t;case 6187:return Z(Z(Z(t,/(zoom-|grab)/,le+"$1"),/(image-set)/,le+"$1"),t,"")+t;case 5495:case 3959:return Z(t,/(image-set\([^]*)/,le+"$1$`$1");case 4968:return Z(Z(t,/(.+:)(flex-)?(.*)/,le+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+le+t+t;case 4200:if(!qn(t,/flex-|baseline/))return ye+"grid-column-align"+qs(t,e)+t;break;case 2592:case 3360:return ye+Z(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,qn(r.props,/grid-\w+-end/)})?~_u(t+(n=n[e].value),"span",0)?t:ye+Z(t,"-start","")+t+ye+"grid-row-span:"+(~_u(n,"span",0)?qn(n,/\d+/):+qn(n,/\d+/)-+qn(t,/\d+/))+";":ye+Z(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return qn(r.props,/grid-\w+-start/)})?t:ye+Z(Z(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Z(t,/(.+)-inline(.+)/,le+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rn(t)-1-e>6)switch(qe(t,e+1)){case 109:if(qe(t,e+4)!==45)break;case 102:return Z(t,/(.+:)(.+)-([^]+)/,"$1"+le+"$2-$3$1"+aa+(qe(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~_u(t,"stretch",0)?F2(Z(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Z(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,u,c){return ye+i+":"+s+c+(o?ye+i+"-span:"+(a?u:+u-+s)+c:"")+t});case 4949:if(qe(t,e+6)===121)return Z(t,":",":"+le)+t;break;case 6444:switch(qe(t,qe(t,14)===45?18:11)){case 120:return Z(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+le+(qe(t,14)===45?"inline-":"")+"box$3$1"+le+"$2$3$1"+ye+"$2box$3")+t;case 100:return Z(t,":",":"+ye)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(t,"scroll-","scroll-snap-")+t}return t}function uc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function D4(t,e,n,r){switch(t.type){case E4:if(t.children.length)break;case w4:case Vm:return t.return=t.return||t.value;case O2:return"";case D2:return t.return=t.value+"{"+uc(t.children,r)+"}";case sd:if(!Rn(t.value=t.props.join(",")))return""}return Rn(n=uc(t.children,r))?t.return=t.value+"{"+n+"}":""}function j4(t){var e=M2(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function L4(t){return function(e){e.root||(e=e.return)&&t(e)}}function M4(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Vm:t.return=F2(t.value,t.length,n);return;case D2:return uc([Tr(t,{value:Z(t.value,"@","@"+le)})],r);case sd:if(t.length)return x4(n=t.props,function(i){switch(qn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":us(Tr(t,{props:[Z(i,/:(read-\w+)/,":"+aa+"$1")]})),us(Tr(t,{props:[i]})),Xf(t,{props:ay(n,r)});break;case"::placeholder":us(Tr(t,{props:[Z(i,/:(plac\w+)/,":"+le+"input-$1")]})),us(Tr(t,{props:[Z(i,/:(plac\w+)/,":"+aa+"$1")]})),us(Tr(t,{props:[Z(i,/:(plac\w+)/,ye+"input-$1")]})),us(Tr(t,{props:[i]})),Xf(t,{props:ay(n,r)});break}return""})}}var V4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lt={},Gs=typeof process<"u"&&Lt!==void 0&&(Lt.REACT_APP_SC_ATTR||Lt.SC_ATTR)||"data-styled",z2="active",U2="data-styled-version",ud="6.1.13",zm=`/*!sc*/
`,cc=typeof window<"u"&&"HTMLElement"in window,F4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==""?Lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.SC_DISABLE_SPEEDY!==void 0&&Lt.SC_DISABLE_SPEEDY!==""&&Lt.SC_DISABLE_SPEEDY!=="false"&&Lt.SC_DISABLE_SPEEDY),cd=Object.freeze([]),Qs=Object.freeze({});function z4(t,e,n){return n===void 0&&(n=Qs),t.theme!==n.theme&&t.theme||e||n.theme}var $2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),U4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$4=/(^-|-$)/g;function cy(t){return t.replace(U4,"-").replace($4,"")}var B4=/(a)(d)/gi,Gl=52,dy=function(t){return String.fromCharCode(t+(t>25?39:97))};function ep(t){var e,n="";for(e=Math.abs(t);e>Gl;e=e/Gl|0)n=dy(e%Gl)+n;return(dy(e%Gl)+n).replace(B4,"$1-$2")}var jh,B2=5381,Is=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},W2=function(t){return Is(B2,t)};function W4(t){return ep(W2(t)>>>0)}function H4(t){return t.displayName||t.name||"Component"}function Lh(t){return typeof t=="string"&&!0}var H2=typeof Symbol=="function"&&Symbol.for,q2=H2?Symbol.for("react.memo"):60115,q4=H2?Symbol.for("react.forward_ref"):60112,K4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},G4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},K2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Q4=((jh={})[q4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jh[q2]=K2,jh);function hy(t){return("type"in(e=t)&&e.type.$$typeof)===q2?K2:"$$typeof"in t?Q4[t.$$typeof]:K4;var e}var Y4=Object.defineProperty,X4=Object.getOwnPropertyNames,fy=Object.getOwnPropertySymbols,J4=Object.getOwnPropertyDescriptor,Z4=Object.getPrototypeOf,py=Object.prototype;function G2(t,e,n){if(typeof e!="string"){if(py){var r=Z4(e);r&&r!==py&&G2(t,r,n)}var i=X4(e);fy&&(i=i.concat(fy(e)));for(var s=hy(t),o=hy(e),a=0;a<i.length;++a){var u=i[a];if(!(u in G4||n&&n[u]||o&&u in o||s&&u in s)){var c=J4(e,u);try{Y4(t,u,c)}catch{}}}}return t}function Ys(t){return typeof t=="function"}function Um(t){return typeof t=="object"&&"styledComponentId"in t}function Ci(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function my(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Pa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function tp(t,e,n){if(n===void 0&&(n=!1),!n&&!Pa(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=tp(t[r],e[r]);else if(Pa(e))for(var r in e)t[r]=tp(t[r],e[r]);return t}function $m(t,e){Object.defineProperty(t,"toString",{value:e})}function Ya(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var e3=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Ya(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(zm);return n},t}(),Tu=new Map,dc=new Map,xu=1,Ql=function(t){if(Tu.has(t))return Tu.get(t);for(;dc.has(xu);)xu++;var e=xu++;return Tu.set(t,e),dc.set(e,t),e},t3=function(t,e){xu=e+1,Tu.set(t,e),dc.set(e,t)},n3="style[".concat(Gs,"][").concat(U2,'="').concat(ud,'"]'),r3=new RegExp("^".concat(Gs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),i3=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},s3=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(zm),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var u=a.match(r3);if(u){var c=0|parseInt(u[1],10),h=u[2];c!==0&&(t3(h,c),i3(t,h,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},gy=function(t){for(var e=document.querySelectorAll(n3),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Gs)!==z2&&(s3(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function o3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Q2=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Gs,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Gs,z2),r.setAttribute(U2,ud);var o=o3();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},a3=function(){function t(e){this.element=Q2(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ya(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),l3=function(){function t(e){this.element=Q2(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),u3=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),yy=cc,c3={isServer:!cc,useCSSOMInjection:!F4},Y2=function(){function t(e,n,r){e===void 0&&(e=Qs),n===void 0&&(n={});var i=this;this.options=At(At({},c3),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&cc&&yy&&(yy=!1,gy(this)),$m(this,function(){return function(s){for(var o=s.getTag(),a=o.length,u="",c=function(p){var g=function(x){return dc.get(x)}(p);if(g===void 0)return"continue";var _=s.names.get(g),S=o.getGroup(p);if(_===void 0||!_.size||S.length===0)return"continue";var R="".concat(Gs,".g").concat(p,'[id="').concat(g,'"]'),P="";_!==void 0&&_.forEach(function(x){x.length>0&&(P+="".concat(x,","))}),u+="".concat(S).concat(R,'{content:"').concat(P,'"}').concat(zm)},h=0;h<a;h++)c(h);return u}(i)})}return t.registerId=function(e){return Ql(e)},t.prototype.rehydrate=function(){!this.server&&cc&&gy(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(At(At({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new u3(i):r?new a3(i):new l3(i)}(this.options),new e3(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Ql(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Ql(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Ql(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),d3=/&/g,h3=/^\s*\/\/.*$/gm;function X2(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=X2(n.children,e)),n})}function f3(t){var e,n,r,i=Qs,s=i.options,o=s===void 0?Qs:s,a=i.plugins,u=a===void 0?cd:a,c=function(g,_,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(e):g},h=u.slice();h.push(function(g){g.type===sd&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(d3,n).replace(r,c))}),o.prefix&&h.push(M4),h.push(D4);var p=function(g,_,S,R){_===void 0&&(_=""),S===void 0&&(S=""),R===void 0&&(R="&"),e=R,n=_,r=new RegExp("\\".concat(n,"\\b"),"g");var P=g.replace(h3,""),x=N4(S||_?"".concat(S," ").concat(_," { ").concat(P," }"):P);o.namespace&&(x=X2(x,o.namespace));var w=[];return uc(x,j4(h.concat(L4(function(T){return w.push(T)})))),w};return p.hash=u.length?u.reduce(function(g,_){return _.name||Ya(15),Is(g,_.name)},B2).toString():"",p}var p3=new Y2,np=f3(),J2=_t.createContext({shouldForwardProp:void 0,styleSheet:p3,stylis:np});J2.Consumer;_t.createContext(void 0);function vy(){return D.useContext(J2)}var m3=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=np);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,$m(this,function(){throw Ya(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=np),this.name+e.hash},t}(),g3=function(t){return t>="A"&&t<="Z"};function _y(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;g3(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Z2=function(t){return t==null||t===!1||t===""},eE=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!Z2(s)&&(Array.isArray(s)&&s.isCss||Ys(s)?r.push("".concat(_y(i),":"),s,";"):Pa(s)?r.push.apply(r,lc(lc(["".concat(i," {")],eE(s),!1),["}"],!1)):r.push("".concat(_y(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in V4||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ni(t,e,n,r){if(Z2(t))return[];if(Um(t))return[".".concat(t.styledComponentId)];if(Ys(t)){if(!Ys(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Ni(i,e,n,r)}var s;return t instanceof m3?n?(t.inject(n,r),[t.getName(r)]):[t]:Pa(t)?eE(t):Array.isArray(t)?Array.prototype.concat.apply(cd,t.map(function(o){return Ni(o,e,n,r)})):[t.toString()]}function y3(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ys(n)&&!Um(n))return!1}return!0}var v3=W2(ud),_3=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&y3(e),this.componentId=n,this.baseHash=Is(v3,n),this.baseStyle=r,Y2.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ci(i,this.staticRulesId);else{var s=my(Ni(this.rules,e,n,r)),o=ep(Is(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Ci(i,o),this.staticRulesId=o}else{for(var u=Is(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var p=this.rules[h];if(typeof p=="string")c+=p;else if(p){var g=my(Ni(p,e,n,r));u=Is(u,g+h),c+=g}}if(c){var _=ep(u>>>0);n.hasNameForId(this.componentId,_)||n.insertRules(this.componentId,_,r(c,".".concat(_),void 0,this.componentId)),i=Ci(i,_)}}return i},t}(),tE=_t.createContext(void 0);tE.Consumer;var Mh={};function w3(t,e,n){var r=Um(t),i=t,s=!Lh(t),o=e.attrs,a=o===void 0?cd:o,u=e.componentId,c=u===void 0?function(b,j){var L=typeof b!="string"?"sc":cy(b);Mh[L]=(Mh[L]||0)+1;var y="".concat(L,"-").concat(W4(ud+L+Mh[L]));return j?"".concat(j,"-").concat(y):y}(e.displayName,e.parentComponentId):u,h=e.displayName,p=h===void 0?function(b){return Lh(b)?"styled.".concat(b):"Styled(".concat(H4(b),")")}(t):h,g=e.displayName&&e.componentId?"".concat(cy(e.displayName),"-").concat(e.componentId):e.componentId||c,_=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,S=e.shouldForwardProp;if(r&&i.shouldForwardProp){var R=i.shouldForwardProp;if(e.shouldForwardProp){var P=e.shouldForwardProp;S=function(b,j){return R(b,j)&&P(b,j)}}else S=R}var x=new _3(n,g,r?i.componentStyle:void 0);function w(b,j){return function(L,y,v){var I=L.attrs,C=L.componentStyle,k=L.defaultProps,N=L.foldedComponentIds,A=L.styledComponentId,St=L.target,Fn=_t.useContext(tE),ci=vy(),Ot=L.shouldForwardProp||ci.shouldForwardProp,$=z4(y,Fn,k)||Qs,q=function(It,mt,Ct){for(var di,zn=At(At({},mt),{className:void 0,theme:Ct}),mr=0;mr<It.length;mr+=1){var Un=Ys(di=It[mr])?di(zn):di;for(var Qt in Un)zn[Qt]=Qt==="className"?Ci(zn[Qt],Un[Qt]):Qt==="style"?At(At({},zn[Qt]),Un[Qt]):Un[Qt]}return mt.className&&(zn.className=Ci(zn.className,mt.className)),zn}(I,y,$),Q=q.as||St,ue={};for(var te in q)q[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&q.theme===$||(te==="forwardedAs"?ue.as=q.forwardedAs:Ot&&!Ot(te,Q)||(ue[te]=q[te]));var Ee=function(It,mt){var Ct=vy(),di=It.generateAndInjectStyles(mt,Ct.styleSheet,Ct.stylis);return di}(C,q),Dt=Ci(N,A);return Ee&&(Dt+=" "+Ee),q.className&&(Dt+=" "+q.className),ue[Lh(Q)&&!$2.has(Q)?"class":"className"]=Dt,ue.ref=v,D.createElement(Q,ue)}(T,b,j)}w.displayName=p;var T=_t.forwardRef(w);return T.attrs=_,T.componentStyle=x,T.displayName=p,T.shouldForwardProp=S,T.foldedComponentIds=r?Ci(i.foldedComponentIds,i.styledComponentId):"",T.styledComponentId=g,T.target=r?i.target:t,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(j){for(var L=[],y=1;y<arguments.length;y++)L[y-1]=arguments[y];for(var v=0,I=L;v<I.length;v++)tp(j,I[v],!0);return j}({},i.defaultProps,b):b}}),$m(T,function(){return".".concat(T.styledComponentId)}),s&&G2(T,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function wy(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Ey=function(t){return Object.assign(t,{isCss:!0})};function E3(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ys(t)||Pa(t))return Ey(Ni(wy(cd,lc([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Ni(r):Ey(Ni(wy(r,e)))}function rp(t,e,n){if(n===void 0&&(n=Qs),!e)throw Ya(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,E3.apply(void 0,lc([i],s,!1)))};return r.attrs=function(i){return rp(t,e,At(At({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return rp(t,e,At(At({},n),i))},r}var nE=function(t){return rp(w3,t)},de=nE;$2.forEach(function(t){de[t]=nE(t)});var rE={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ty=_t.createContext&&_t.createContext(rE),T3=["attr","size","title"];function x3(t,e){if(t==null)return{};var n=S3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function S3(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function hc(){return hc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hc.apply(this,arguments)}function xy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function fc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?xy(Object(n),!0).forEach(function(r){I3(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function I3(t,e,n){return e=C3(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function C3(t){var e=R3(t,"string");return typeof e=="symbol"?e:e+""}function R3(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function iE(t){return t&&t.map((e,n)=>_t.createElement(e.tag,fc({key:n},e.attr),iE(e.child)))}function we(t){return e=>_t.createElement(k3,hc({attr:fc({},t.attr)},e),iE(t.child))}function k3(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=x3(t,T3),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),_t.createElement("svg",hc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:fc(fc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&_t.createElement("title",null,s),t.children)};return Ty!==void 0?_t.createElement(Ty.Consumer,null,n=>e(n)):e(rE)}function A3(t){return we({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M232,152v64a8,8,0,0,1-8,8H160a72,72,0,0,1-67.9-48H96a72,72,0,0,0,72-72h0a71.83,71.83,0,0,0-4.07-23.88h0A72,72,0,0,1,232,152Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M169.57,72.59A80,80,0,0,0,16,104v64a16,16,0,0,0,16,16H86.67A80.15,80.15,0,0,0,160,232h64a16,16,0,0,0,16-16V152A80,80,0,0,0,169.57,72.59ZM32,104a64,64,0,1,1,64,64H32ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z"},child:[]}]})(t)}function P3(t){return we({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M228.61,60.16A6,6,0,0,0,224,58H61L54.63,22.93A6,6,0,0,0,48.73,18H24a6,6,0,0,0,0,12H43.72L69.53,171.94a21.93,21.93,0,0,0,6.24,11.77A26,26,0,1,0,113.89,190h52.22A26,26,0,1,0,188,178H91.17a10,10,0,0,1-9.84-8.21L77.73,150H196.1a22,22,0,0,0,21.65-18.06L229.9,65.07A6,6,0,0,0,228.61,60.16ZM106,204a14,14,0,1,1-14-14A14,14,0,0,1,106,204Zm96,0a14,14,0,1,1-14-14A14,14,0,0,1,202,204Zm3.94-74.21A10,10,0,0,1,196.1,138H75.55L63.19,70H216.81Z"},child:[]}]})(t)}function b3(t){return we({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"},child:[]}]})(t)}/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ba(){return ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ba.apply(this,arguments)}var Dr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Dr||(Dr={}));const Sy="popstate";function N3(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:u=""}=Yi(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),ip("",{pathname:o,search:a,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof s=="string"?s:pc(s))}function r(i,s){Bm(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return D3(e,n,r,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Bm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function O3(){return Math.random().toString(36).substr(2,8)}function Iy(t,e){return{usr:t.state,key:t.key,idx:e}}function ip(t,e,n,r){return n===void 0&&(n=null),ba({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Yi(e):e,{state:n,key:e&&e.key||r||O3()})}function pc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Yi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function D3(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Dr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(ba({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function p(){a=Dr.Pop;let P=h(),x=P==null?null:P-c;c=P,u&&u({action:a,location:R.location,delta:x})}function g(P,x){a=Dr.Push;let w=ip(R.location,P,x);n&&n(w,P),c=h()+1;let T=Iy(w,c),b=R.createHref(w);try{o.pushState(T,"",b)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(b)}s&&u&&u({action:a,location:R.location,delta:1})}function _(P,x){a=Dr.Replace;let w=ip(R.location,P,x);n&&n(w,P),c=h();let T=Iy(w,c),b=R.createHref(w);o.replaceState(T,"",b),s&&u&&u({action:a,location:R.location,delta:0})}function S(P){let x=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof P=="string"?P:pc(P);return w=w.replace(/ $/,"%20"),be(x,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,x)}let R={get action(){return a},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Sy,p),u=P,()=>{i.removeEventListener(Sy,p),u=null}},createHref(P){return e(i,P)},createURL:S,encodeLocation(P){let x=S(P);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:_,go(P){return o.go(P)}};return R}var Cy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Cy||(Cy={}));function j3(t,e,n){return n===void 0&&(n="/"),L3(t,e,n,!1)}function L3(t,e,n,r){let i=typeof e=="string"?Yi(e):e,s=Xs(i.pathname||"/",n);if(s==null)return null;let o=sE(t);M3(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=G3(s);a=q3(o[u],c,r)}return a}function sE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Wr([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),sE(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:W3(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of oE(s.path))i(s,o,u)}),e}function oE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=oE(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function M3(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:H3(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const V3=/^:[\w-]+$/,F3=3,z3=2,U3=1,$3=10,B3=-2,Ry=t=>t==="*";function W3(t,e){let n=t.split("/"),r=n.length;return n.some(Ry)&&(r+=B3),e&&(r+=z3),n.filter(i=>!Ry(i)).reduce((i,s)=>i+(V3.test(s)?F3:s===""?U3:$3),r)}function H3(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function q3(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",p=mc({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=mc({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Wr([s,p.pathname]),pathnameBase:J3(Wr([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=Wr([s,p.pathnameBase]))}return o}function mc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=K3(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,p)=>{let{paramName:g,isOptional:_}=h;if(g==="*"){let R=a[p]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const S=a[p];return _&&!S?c[g]=void 0:c[g]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function K3(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Bm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function G3(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Bm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Xs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Q3(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Yi(t):t;return{pathname:n?n.startsWith("/")?n:Y3(n,e):e,search:Z3(r),hash:eC(i)}}function Y3(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function X3(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function aE(t,e){let n=X3(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Yi(t):(i=ba({},t),be(!i.pathname||!i.pathname.includes("?"),Vh("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),Vh("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),Vh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}a=p>=0?e[p]:"/"}let u=Q3(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Wr=t=>t.join("/").replace(/\/\/+/g,"/"),J3=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Z3=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,eC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function tC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const uE=["post","put","patch","delete"];new Set(uE);const nC=["get",...uE];new Set(nC);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Na(){return Na=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Na.apply(this,arguments)}const dd=D.createContext(null),cE=D.createContext(null),si=D.createContext(null),hd=D.createContext(null),Xi=D.createContext({outlet:null,matches:[],isDataRoute:!1}),dE=D.createContext(null);function rC(t,e){let{relative:n}=e===void 0?{}:e;Xa()||be(!1);let{basename:r,navigator:i}=D.useContext(si),{hash:s,pathname:o,search:a}=pd(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Wr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Xa(){return D.useContext(hd)!=null}function Ja(){return Xa()||be(!1),D.useContext(hd).location}function hE(t){D.useContext(si).static||D.useLayoutEffect(t)}function fd(){let{isDataRoute:t}=D.useContext(Xi);return t?gC():iC()}function iC(){Xa()||be(!1);let t=D.useContext(dd),{basename:e,future:n,navigator:r}=D.useContext(si),{matches:i}=D.useContext(Xi),{pathname:s}=Ja(),o=JSON.stringify(aE(i,n.v7_relativeSplatPath)),a=D.useRef(!1);return hE(()=>{a.current=!0}),D.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=lE(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Wr([e,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[e,r,o,s,t])}function pd(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(si),{matches:i}=D.useContext(Xi),{pathname:s}=Ja(),o=JSON.stringify(aE(i,r.v7_relativeSplatPath));return D.useMemo(()=>lE(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function sC(t,e){return oC(t,e)}function oC(t,e,n,r){Xa()||be(!1);let{navigator:i}=D.useContext(si),{matches:s}=D.useContext(Xi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ja(),h;if(e){var p;let P=typeof e=="string"?Yi(e):e;u==="/"||(p=P.pathname)!=null&&p.startsWith(u)||be(!1),h=P}else h=c;let g=h.pathname||"/",_=g;if(u!=="/"){let P=u.replace(/^\//,"").split("/");_="/"+g.replace(/^\//,"").split("/").slice(P.length).join("/")}let S=j3(t,{pathname:_}),R=dC(S&&S.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:Wr([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:Wr([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&R?D.createElement(hd.Provider,{value:{location:Na({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Dr.Pop}},R):R}function aC(){let t=mC(),e=tC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,null)}const lC=D.createElement(aC,null);class uC extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(Xi.Provider,{value:this.props.routeContext},D.createElement(dE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cC(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(dd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Xi.Provider,{value:e},r)}function dC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);h>=0||be(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:g,errors:_}=n,S=p.route.loader&&g[p.route.id]===void 0&&(!_||_[p.route.id]===void 0);if(p.route.lazy||S){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,p,g)=>{let _,S=!1,R=null,P=null;n&&(_=a&&p.route.id?a[p.route.id]:void 0,R=p.route.errorElement||lC,u&&(c<0&&g===0?(S=!0,P=null):c===g&&(S=!0,P=p.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,g+1)),w=()=>{let T;return _?T=R:S?T=P:p.route.Component?T=D.createElement(p.route.Component,null):p.route.element?T=p.route.element:T=h,D.createElement(cC,{match:p,routeContext:{outlet:h,matches:x,isDataRoute:n!=null},children:T})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?D.createElement(uC,{location:n.location,revalidation:n.revalidation,component:R,error:_,children:w(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):w()},null)}var fE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(fE||{}),gc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(gc||{});function hC(t){let e=D.useContext(dd);return e||be(!1),e}function fC(t){let e=D.useContext(cE);return e||be(!1),e}function pC(t){let e=D.useContext(Xi);return e||be(!1),e}function pE(t){let e=pC(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function mC(){var t;let e=D.useContext(dE),n=fC(gc.UseRouteError),r=pE(gc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function gC(){let{router:t}=hC(fE.UseNavigateStable),e=pE(gc.UseNavigateStable),n=D.useRef(!1);return hE(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Na({fromRouteId:e},s)))},[t,e])}function ln(t){be(!1)}function yC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Dr.Pop,navigator:s,static:o=!1,future:a}=t;Xa()&&be(!1);let u=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:u,navigator:s,static:o,future:Na({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Yi(r));let{pathname:h="/",search:p="",hash:g="",state:_=null,key:S="default"}=r,R=D.useMemo(()=>{let P=Xs(h,u);return P==null?null:{location:{pathname:P,search:p,hash:g,state:_,key:S},navigationType:i}},[u,h,p,g,_,S,i]);return R==null?null:D.createElement(si.Provider,{value:c},D.createElement(hd.Provider,{children:n,value:R}))}function vC(t){let{children:e,location:n}=t;return sC(sp(e),n)}new Promise(()=>{});function sp(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,sp(r.props.children,s));return}r.type!==ln&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=sp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yc(){return yc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yc.apply(this,arguments)}function mE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function _C(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function wC(t,e){return t.button===0&&(!e||e==="_self")&&!_C(t)}const EC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],TC=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],xC="6";try{window.__reactRouterVersion=xC}catch{}const SC=D.createContext({isTransitioning:!1}),IC="startTransition",ky=nf[IC];function CC(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=N3({window:i,v5Compat:!0}));let o=s.current,[a,u]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=D.useCallback(p=>{c&&ky?ky(()=>u(p)):u(p)},[u,c]);return D.useLayoutEffect(()=>o.listen(h),[o,h]),D.createElement(yC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const RC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,AC=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:h,unstable_viewTransition:p}=e,g=mE(e,EC),{basename:_}=D.useContext(si),S,R=!1;if(typeof c=="string"&&kC.test(c)&&(S=c,RC))try{let T=new URL(window.location.href),b=c.startsWith("//")?new URL(T.protocol+c):new URL(c),j=Xs(b.pathname,_);b.origin===T.origin&&j!=null?c=j+b.search+b.hash:R=!0}catch{}let P=rC(c,{relative:i}),x=bC(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:i,unstable_viewTransition:p});function w(T){r&&r(T),T.defaultPrevented||x(T)}return D.createElement("a",yc({},g,{href:S||P,onClick:R||s?r:w,ref:n,target:u}))}),Pe=D.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,unstable_viewTransition:c,children:h}=e,p=mE(e,TC),g=pd(u,{relative:p.relative}),_=Ja(),S=D.useContext(cE),{navigator:R,basename:P}=D.useContext(si),x=S!=null&&NC(g)&&c===!0,w=R.encodeLocation?R.encodeLocation(g).pathname:g.pathname,T=_.pathname,b=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(T=T.toLowerCase(),b=b?b.toLowerCase():null,w=w.toLowerCase()),b&&P&&(b=Xs(b,P)||b);const j=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let L=T===w||!o&&T.startsWith(w)&&T.charAt(j)==="/",y=b!=null&&(b===w||!o&&b.startsWith(w)&&b.charAt(w.length)==="/"),v={isActive:L,isPending:y,isTransitioning:x},I=L?r:void 0,C;typeof s=="function"?C=s(v):C=[s,L?"active":null,y?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let k=typeof a=="function"?a(v):a;return D.createElement(AC,yc({},p,{"aria-current":I,className:C,ref:n,style:k,to:u,unstable_viewTransition:c}),typeof h=="function"?h(v):h)});var op;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(op||(op={}));var Ay;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ay||(Ay={}));function PC(t){let e=D.useContext(dd);return e||be(!1),e}function bC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=fd(),c=Ja(),h=pd(t,{relative:o});return D.useCallback(p=>{if(wC(p,n)){p.preventDefault();let g=r!==void 0?r:pc(c)===pc(h);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,h,r,i,n,t,s,o,a])}function NC(t,e){e===void 0&&(e={});let n=D.useContext(SC);n==null&&be(!1);let{basename:r}=PC(op.useViewTransitionState),i=pd(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Xs(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Xs(n.nextLocation.pathname,r)||n.nextLocation.pathname;return mc(i.pathname,o)!=null||mc(i.pathname,s)!=null}let OC={data:""},DC=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||OC,jC=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,LC=/\/\*[^]*?\*\/|  +/g,Py=/\n+/g,kr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?kr(o,s):s+"{"+kr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=kr(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,a):a?a+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=kr.p?kr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Wn={},gE=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+gE(t[n]);return e}return t},MC=(t,e,n,r,i)=>{let s=gE(t),o=Wn[s]||(Wn[s]=(u=>{let c=0,h=11;for(;c<u.length;)h=101*h+u.charCodeAt(c++)>>>0;return"go"+h})(s));if(!Wn[o]){let u=s!==t?t:(c=>{let h,p,g=[{}];for(;h=jC.exec(c.replace(LC,""));)h[4]?g.shift():h[3]?(p=h[3].replace(Py," ").trim(),g.unshift(g[0][p]=g[0][p]||{})):g[0][h[1]]=h[2].replace(Py," ").trim();return g[0]})(t);Wn[o]=kr(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let a=n&&Wn.g?Wn.g:null;return n&&(Wn.g=Wn[o]),((u,c,h,p)=>{p?c.data=c.data.replace(p,u):c.data.indexOf(u)===-1&&(c.data=h?u+c.data:c.data+u)})(Wn[o],e,r,a),o},VC=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),u=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=u?"."+u:a&&typeof a=="object"?a.props?"":kr(a,""):a===!1?"":a}return r+i+(o??"")},"");function md(t){let e=this||{},n=t.call?t(e.p):t;return MC(n.unshift?n.raw?VC(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,DC(e.target),e.g,e.o,e.k)}let yE,ap,lp;md.bind({g:1});let lr=md.bind({k:1});function FC(t,e,n,r){kr.p=e,yE=t,ap=n,lp=r}function oi(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),u=a.className||i.className;n.p=Object.assign({theme:ap&&ap()},a),n.o=/ *go\d+/.test(u),a.className=md.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=a.as||t,delete a.as),lp&&c[0]&&lp(a),yE(c,a)}return i}}var zC=t=>typeof t=="function",vc=(t,e)=>zC(t)?t(e):t,UC=(()=>{let t=0;return()=>(++t).toString()})(),vE=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),$C=20,Su=new Map,BC=1e3,by=t=>{if(Su.has(t))return;let e=setTimeout(()=>{Su.delete(t),Ji({type:4,toastId:t})},BC);Su.set(t,e)},WC=t=>{let e=Su.get(t);e&&clearTimeout(e)},up=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,$C)};case 1:return e.toast.id&&WC(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?up(t,{type:1,toast:n}):up(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?by(r):t.toasts.forEach(s=>{by(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},Iu=[],Cu={toasts:[],pausedAt:void 0},Ji=t=>{Cu=up(Cu,t),Iu.forEach(e=>{e(Cu)})},HC={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},qC=(t={})=>{let[e,n]=D.useState(Cu);D.useEffect(()=>(Iu.push(n),()=>{let i=Iu.indexOf(n);i>-1&&Iu.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||HC[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},KC=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||UC()}),Za=t=>(e,n)=>{let r=KC(e,t,n);return Ji({type:2,toast:r}),r.id},Ft=(t,e)=>Za("blank")(t,e);Ft.error=Za("error");Ft.success=Za("success");Ft.loading=Za("loading");Ft.custom=Za("custom");Ft.dismiss=t=>{Ji({type:3,toastId:t})};Ft.remove=t=>Ji({type:4,toastId:t});Ft.promise=(t,e,n)=>{let r=Ft.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(Ft.success(vc(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{Ft.error(vc(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var GC=(t,e)=>{Ji({type:1,toast:{id:t,height:e}})},QC=()=>{Ji({type:5,time:Date.now()})},YC=t=>{let{toasts:e,pausedAt:n}=qC(t);D.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let u=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(u<0){a.visible&&Ft.dismiss(a.id);return}return setTimeout(()=>Ft.dismiss(a.id),u)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=D.useCallback(()=>{n&&Ji({type:6,time:Date.now()})},[n]),i=D.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:u=8,defaultPosition:c}=o||{},h=e.filter(_=>(_.position||c)===(s.position||c)&&_.height),p=h.findIndex(_=>_.id===s.id),g=h.filter((_,S)=>S<p&&_.visible).length;return h.filter(_=>_.visible).slice(...a?[g+1]:[0,g]).reduce((_,S)=>_+(S.height||0)+u,0)},[e]);return{toasts:e,handlers:{updateHeight:GC,startPause:QC,endPause:r,calculateOffset:i}}},XC=lr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,JC=lr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ZC=lr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,e9=oi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${XC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${JC} 0.15s ease-out forwards;
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
    animation: ${ZC} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,t9=lr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,n9=oi("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${t9} 1s linear infinite;
`,r9=lr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,i9=lr`
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
}`,s9=oi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${r9} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${i9} 0.2s ease-out forwards;
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
`,o9=oi("div")`
  position: absolute;
`,a9=oi("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,l9=lr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,u9=oi("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${l9} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,c9=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?D.createElement(u9,null,e):e:n==="blank"?null:D.createElement(a9,null,D.createElement(n9,{...r}),n!=="loading"&&D.createElement(o9,null,n==="error"?D.createElement(e9,{...r}):D.createElement(s9,{...r})))},d9=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,h9=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,f9="0%{opacity:0;} 100%{opacity:1;}",p9="0%{opacity:1;} 100%{opacity:0;}",m9=oi("div")`
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
`,g9=oi("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,y9=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=vE()?[f9,p9]:[d9(n),h9(n)];return{animation:e?`${lr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${lr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},v9=D.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?y9(t.position||e||"top-center",t.visible):{opacity:0},s=D.createElement(c9,{toast:t}),o=D.createElement(g9,{...t.ariaProps},vc(t.message,t));return D.createElement(m9,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):D.createElement(D.Fragment,null,s,o))});FC(D.createElement);var _9=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=D.useCallback(o=>{if(o){let a=()=>{let u=o.getBoundingClientRect().height;r(t,u)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return D.createElement("div",{ref:s,className:e,style:n},i)},w9=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:vE()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},E9=md`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Yl=16,T9=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:u}=YC(n);return D.createElement("div",{style:{position:"fixed",zIndex:9999,top:Yl,left:Yl,right:Yl,bottom:Yl,pointerEvents:"none",...s},className:o,onMouseEnter:u.startPause,onMouseLeave:u.endPause},a.map(c=>{let h=c.position||e,p=u.calculateOffset(c,{reverseOrder:t,gutter:r,defaultPosition:e}),g=w9(h,p);return D.createElement(_9,{id:c.id,key:c.id,onHeightUpdate:u.updateHeight,className:c.visible?E9:"",style:g},c.type==="custom"?vc(c.message,c):i?i(c):D.createElement(v9,{toast:c,position:h}))}))},je=Ft,_E={exports:{}},wE={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=D;function x9(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var S9=typeof Object.is=="function"?Object.is:x9,I9=el.useSyncExternalStore,C9=el.useRef,R9=el.useEffect,k9=el.useMemo,A9=el.useDebugValue;wE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=C9(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=k9(function(){function u(_){if(!c){if(c=!0,h=_,_=r(_),i!==void 0&&o.hasValue){var S=o.value;if(i(S,_))return p=S}return p=_}if(S=p,S9(h,_))return S;var R=r(_);return i!==void 0&&i(S,R)?S:(h=_,p=R)}var c=!1,h,p,g=n===void 0?null:n;return[function(){return u(e())},g===null?void 0:function(){return u(g())}]},[e,n,r,i]);var a=I9(t,s[0],s[1]);return R9(function(){o.hasValue=!0,o.value=a},[a]),A9(a),a};_E.exports=wE;var P9=_E.exports,zt="default"in nf?_t:nf,Ny=Symbol.for("react-redux-context"),Oy=typeof globalThis<"u"?globalThis:{};function b9(){if(!zt.createContext)return{};const t=Oy[Ny]??(Oy[Ny]=new Map);let e=t.get(zt.createContext);return e||(e=zt.createContext(null),t.set(zt.createContext,e)),e}var Xr=b9(),N9=()=>{throw new Error("uSES not initialized!")};function Wm(t=Xr){return function(){return zt.useContext(t)}}var EE=Wm(),TE=N9,O9=t=>{TE=t},D9=(t,e)=>t===e;function j9(t=Xr){const e=t===Xr?EE:Wm(t),n=(r,i={})=>{const{equalityFn:s=D9,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:u,getServerState:c,stabilityCheck:h,identityFunctionCheck:p}=e();zt.useRef(!0);const g=zt.useCallback({[r.name](S){return r(S)}}[r.name],[r,h,o.stabilityCheck]),_=TE(u.addNestedSub,a.getState,c||a.getState,g,s);return zt.useDebugValue(_),_};return Object.assign(n,{withTypes:()=>n}),n}var $t=j9();function L9(t){t()}function M9(){let t=null,e=null;return{clear(){t=null,e=null},notify(){L9(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var Dy={notify(){},get:()=>[]};function V9(t,e){let n,r=Dy,i=0,s=!1;function o(R){h();const P=r.subscribe(R);let x=!1;return()=>{x||(x=!0,P(),p())}}function a(){r.notify()}function u(){S.onStateChange&&S.onStateChange()}function c(){return s}function h(){i++,n||(n=t.subscribe(u),r=M9())}function p(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Dy)}function g(){s||(s=!0,h())}function _(){s&&(s=!1,p())}const S={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:u,isSubscribed:c,trySubscribe:g,tryUnsubscribe:_,getListeners:()=>r};return S}var F9=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z9=typeof navigator<"u"&&navigator.product==="ReactNative",U9=F9||z9?zt.useLayoutEffect:zt.useEffect;function $9({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=zt.useMemo(()=>{const c=V9(t);return{store:t,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=zt.useMemo(()=>t.getState(),[t]);U9(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,a]);const u=e||Xr;return zt.createElement(u.Provider,{value:o},n)}var B9=$9;function xE(t=Xr){const e=t===Xr?EE:Wm(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var W9=xE();function H9(t=Xr){const e=t===Xr?W9:xE(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var tl=H9();O9(P9.useSyncExternalStoreWithSelector);function q9(t){return we({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"},child:[]}]})(t)}function K9(t){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Heart"},child:[{tag:"path",attr:{d:"M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"},child:[]}]}]})(t)}function jy(t){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Login"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M20.944,18.432a2.577,2.577,0,0,1-2.729,2.5c-2.153.012-4.307,0-6.46,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.63a1.545,1.545,0,0,0-.969-1.471,3.027,3.027,0,0,0-1.061-.095H11.755a.5.5,0,0,1,0-1c2.225,0,4.465-.085,6.688,0a2.566,2.566,0,0,1,2.5,2.67Z"},child:[]},{tag:"path",attr:{d:"M15.794,12.354a.459.459,0,0,0,.138-.312A.3.3,0,0,0,15.938,12a.29.29,0,0,0-.006-.041.455.455,0,0,0-.138-.313L12.125,7.978a.5.5,0,0,0-.707.707L14.234,11.5H3.492a.5.5,0,0,0,0,1H14.234l-2.816,2.815a.5.5,0,0,0,.707.707Z"},child:[]}]}]}]})(t)}function Ly(t){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Logout"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M20.968,18.448a2.577,2.577,0,0,1-2.73,2.5c-2.153.012-4.306,0-6.459,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.647A1.546,1.546,0,0,0,19,4.175a3.023,3.023,0,0,0-1.061-.095H11.779a.5.5,0,0,1,0-1c2.224,0,4.465-.085,6.687,0a2.567,2.567,0,0,1,2.5,2.67Z"},child:[]},{tag:"path",attr:{d:"M3.176,11.663a.455.455,0,0,0-.138.311c0,.015,0,.028-.006.043s0,.027.006.041a.457.457,0,0,0,.138.312l3.669,3.669a.5.5,0,0,0,.707-.707L4.737,12.516H15.479a.5.5,0,0,0,0-1H4.737L7.552,8.7a.5.5,0,0,0-.707-.707Z"},child:[]}]}]}]})(t)}const G9=de.img`
    width: 7rem;
    height: 5rem;
    @media (max-width: 600px) and (min-width: 0px) {
        width: 7rem;
        height: 5rem;
        margin-left: -1.7rem;
    }
`,Q9=de.nav`
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
`,Y9=de.a`
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
`,_i=()=>{const t=localStorage.getItem("users");fd();const e=$t(o=>o.cart.items.length),n=$t(o=>o.wishlist.items.length),r=()=>{localStorage.clear("users"),je.success("Logout Successfult"),console.log("logout",t)},i=()=>{document.getElementById("menuopen").style.display="flex",document.getElementById("menuopen").style.width="100%"},s=()=>{document.getElementById("menuopen").style.display="none",document.getElementById("menuopen").style.width="0"};return d.jsx(d.Fragment,{children:d.jsxs(Q9,{children:[d.jsx("div",{children:d.jsx(G9,{src:Mm,alt:"SiteLogo"})}),d.jsx("div",{children:d.jsxs("ul",{id:"menuopen",children:[d.jsx(Pe,{to:"/Home",children:"Home"}),d.jsx(Pe,{to:"/shop",children:"Shop"}),d.jsx(Pe,{to:"/about",children:"About"}),t?d.jsx(Pe,{onClick:r,id:"logout",children:d.jsx(Ly,{size:"1.5rem",color:"#383838"})}):d.jsx(Pe,{to:"/Login",id:"login",children:d.jsx(jy,{size:"1.5rem",color:"#383838"})}),d.jsx(q9,{size:"1.9rem",color:"black",id:"cross",onClick:s})]})}),d.jsxs("div",{children:[d.jsxs("div",{id:"wishlist",children:[d.jsx(Pe,{to:"/wishlist",children:d.jsx(K9,{size:"1.5rem",color:"#383838"})}),n>=0&&d.jsx("span",{className:"badge badge-danger",children:n})]}),d.jsxs("div",{id:"cart",children:[d.jsx(Pe,{to:"/Cart",children:d.jsx(P3,{size:"1.5rem",color:"#383838"})}),e>=0&&d.jsx("span",{className:"badge badge-danger",children:e})]}),t?d.jsx(Pe,{onClick:r,id:"logout",children:d.jsx(Ly,{size:"1.5rem",color:"#383838"})}):d.jsx(Pe,{to:"/Login",id:"login",children:d.jsx(jy,{size:"1.5rem",color:"#383838"})}),d.jsx(Y9,{children:d.jsx(b3,{id:"bars",size:"1.5rem",onClick:i})})]})]})})};var My={};/**
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
 */const SE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},X9=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},IE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,p=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(g=64)),r.push(n[h],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(SE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):X9(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new J9;const g=s<<2|a>>4;if(r.push(g),c!==64){const _=a<<4&240|c>>2;if(r.push(_),p!==64){const S=c<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class J9 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Z9=function(t){const e=SE(t);return IE.encodeByteArray(e,!0)},_c=function(t){return Z9(t).replace(/\./g,"")},CE=function(t){try{return IE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function e6(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const t6=()=>e6().__FIREBASE_DEFAULTS__,n6=()=>{if(typeof process>"u"||typeof My>"u")return;const t=My.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},r6=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&CE(t[1]);return e&&JSON.parse(e)},gd=()=>{try{return t6()||n6()||r6()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},RE=t=>{var e,n;return(n=(e=gd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kE=t=>{const e=RE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},AE=()=>{var t;return(t=gd())===null||t===void 0?void 0:t.config},PE=t=>{var e;return(e=gd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class i6{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function bE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[_c(JSON.stringify(n)),_c(JSON.stringify(o)),""].join(".")}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function s6(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function o6(){var t;const e=(t=gd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function a6(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function l6(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function u6(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function c6(){return!o6()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function d6(){try{return typeof indexedDB=="object"}catch{return!1}}function h6(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const f6="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=f6,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nl.prototype.create)}}class nl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?p6(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mn(i,a,r)}}function p6(t,e){return t.replace(m6,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const m6=/\{\$([^}]+)}/g;function g6(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Vy(s)&&Vy(o)){if(!wc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vy(t){return t!==null&&typeof t=="object"}/**
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
 */function rl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ho(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function y6(t,e){const n=new v6(t,e);return n.subscribe.bind(n)}class v6{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_6(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fh),i.error===void 0&&(i.error=Fh),i.complete===void 0&&(i.complete=Fh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _6(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fh(){}/**
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
 */function Et(t){return t&&t._delegate?t._delegate:t}class Jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wi="[DEFAULT]";/**
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
 */class w6{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new i6;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(T6(e))try{this.getOrInitializeService({instanceIdentifier:wi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wi){return this.instances.has(e)}getOptions(e=wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:E6(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wi){return this.component?this.component.multipleInstances?e:wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function E6(t){return t===wi?void 0:t}function T6(t){return t.instantiationMode==="EAGER"}/**
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
 */class x6{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new w6(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const S6={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},I6=re.INFO,C6={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},R6=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=C6[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hm{constructor(e){this.name=e,this._logLevel=I6,this._logHandler=R6,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?S6[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const k6=(t,e)=>e.some(n=>t instanceof n);let Fy,zy;function A6(){return Fy||(Fy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function P6(){return zy||(zy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const NE=new WeakMap,cp=new WeakMap,OE=new WeakMap,zh=new WeakMap,qm=new WeakMap;function b6(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&NE.set(n,t)}).catch(()=>{}),qm.set(e,t),e}function N6(t){if(cp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cp.set(t,e)}let dp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||OE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function O6(t){dp=t(dp)}function D6(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uh(this),e,...n);return OE.set(r,e.sort?e.sort():[e]),Hr(r)}:P6().includes(t)?function(...e){return t.apply(Uh(this),e),Hr(NE.get(this))}:function(...e){return Hr(t.apply(Uh(this),e))}}function j6(t){return typeof t=="function"?D6(t):(t instanceof IDBTransaction&&N6(t),k6(t,A6())?new Proxy(t,dp):t)}function Hr(t){if(t instanceof IDBRequest)return b6(t);if(zh.has(t))return zh.get(t);const e=j6(t);return e!==t&&(zh.set(t,e),qm.set(e,t)),e}const Uh=t=>qm.get(t);function L6(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Hr(o.result),u.oldVersion,u.newVersion,Hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const M6=["get","getKey","getAll","getAllKeys","count"],V6=["put","add","delete","clear"],$h=new Map;function Uy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($h.get(e))return $h.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=V6.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||M6.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return $h.set(e,s),s}O6(t=>({...t,get:(e,n,r)=>Uy(e,n)||t.get(e,n,r),has:(e,n)=>!!Uy(e,n)||t.has(e,n)}));/**
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
 */class F6{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(z6(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function z6(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hp="@firebase/app",$y="0.10.10";/**
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
 */const ur=new Hm("@firebase/app"),U6="@firebase/app-compat",$6="@firebase/analytics-compat",B6="@firebase/analytics",W6="@firebase/app-check-compat",H6="@firebase/app-check",q6="@firebase/auth",K6="@firebase/auth-compat",G6="@firebase/database",Q6="@firebase/database-compat",Y6="@firebase/functions",X6="@firebase/functions-compat",J6="@firebase/installations",Z6="@firebase/installations-compat",eR="@firebase/messaging",tR="@firebase/messaging-compat",nR="@firebase/performance",rR="@firebase/performance-compat",iR="@firebase/remote-config",sR="@firebase/remote-config-compat",oR="@firebase/storage",aR="@firebase/storage-compat",lR="@firebase/firestore",uR="@firebase/vertexai-preview",cR="@firebase/firestore-compat",dR="firebase",hR="10.13.1";/**
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
 */const fp="[DEFAULT]",fR={[hp]:"fire-core",[U6]:"fire-core-compat",[B6]:"fire-analytics",[$6]:"fire-analytics-compat",[H6]:"fire-app-check",[W6]:"fire-app-check-compat",[q6]:"fire-auth",[K6]:"fire-auth-compat",[G6]:"fire-rtdb",[Q6]:"fire-rtdb-compat",[Y6]:"fire-fn",[X6]:"fire-fn-compat",[J6]:"fire-iid",[Z6]:"fire-iid-compat",[eR]:"fire-fcm",[tR]:"fire-fcm-compat",[nR]:"fire-perf",[rR]:"fire-perf-compat",[iR]:"fire-rc",[sR]:"fire-rc-compat",[oR]:"fire-gcs",[aR]:"fire-gcs-compat",[lR]:"fire-fst",[cR]:"fire-fst-compat",[uR]:"fire-vertex","fire-js":"fire-js",[dR]:"fire-js-all"};/**
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
 */const Ec=new Map,pR=new Map,pp=new Map;function By(t,e){try{t.container.addComponent(e)}catch(n){ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zi(t){const e=t.name;if(pp.has(e))return ur.debug(`There were multiple attempts to register component ${e}.`),!1;pp.set(e,t);for(const n of Ec.values())By(n,t);for(const n of pR.values())By(n,t);return!0}function yd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pn(t){return t.settings!==void 0}/**
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
 */const mR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qr=new nl("app","Firebase",mR);/**
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
 */class gR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
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
 */const Zi=hR;function DE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qr.create("bad-app-name",{appName:String(i)});if(n||(n=AE()),!n)throw qr.create("no-options");const s=Ec.get(i);if(s){if(wc(n,s.options)&&wc(r,s.config))return s;throw qr.create("duplicate-app",{appName:i})}const o=new x6(i);for(const u of pp.values())o.addComponent(u);const a=new gR(n,r,o);return Ec.set(i,a),a}function Km(t=fp){const e=Ec.get(t);if(!e&&t===fp&&AE())return DE();if(!e)throw qr.create("no-app",{appName:t});return e}function bn(t,e,n){var r;let i=(r=fR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ur.warn(a.join(" "));return}zi(new Jr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const yR="firebase-heartbeat-database",vR=1,Oa="firebase-heartbeat-store";let Bh=null;function jE(){return Bh||(Bh=L6(yR,vR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oa)}catch(n){console.warn(n)}}}}).catch(t=>{throw qr.create("idb-open",{originalErrorMessage:t.message})})),Bh}async function _R(t){try{const n=(await jE()).transaction(Oa),r=await n.objectStore(Oa).get(LE(t));return await n.done,r}catch(e){if(e instanceof Mn)ur.warn(e.message);else{const n=qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ur.warn(n.message)}}}async function Wy(t,e){try{const r=(await jE()).transaction(Oa,"readwrite");await r.objectStore(Oa).put(e,LE(t)),await r.done}catch(n){if(n instanceof Mn)ur.warn(n.message);else{const r=qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ur.warn(r.message)}}}function LE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wR=1024,ER=30*24*60*60*1e3;class TR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ER}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ur.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hy(),{heartbeatsToSend:r,unsentEntries:i}=xR(this._heartbeatsCache.heartbeats),s=_c(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ur.warn(n),""}}}function Hy(){return new Date().toISOString().substring(0,10)}function xR(t,e=wR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),qy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return d6()?h6().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _R(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qy(t){return _c(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function IR(t){zi(new Jr("platform-logger",e=>new F6(e),"PRIVATE")),zi(new Jr("heartbeat",e=>new TR(e),"PRIVATE")),bn(hp,$y,t),bn(hp,$y,"esm2017"),bn("fire-js","")}IR("");function Gm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ME(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CR=ME,VE=new nl("auth","Firebase",ME());/**
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
 */const Tc=new Hm("@firebase/auth");function RR(t,...e){Tc.logLevel<=re.WARN&&Tc.warn(`Auth (${Zi}): ${t}`,...e)}function Ru(t,...e){Tc.logLevel<=re.ERROR&&Tc.error(`Auth (${Zi}): ${t}`,...e)}/**
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
 */function sn(t,...e){throw Ym(t,...e)}function wn(t,...e){return Ym(t,...e)}function Qm(t,e,n){const r=Object.assign(Object.assign({},CR()),{[e]:n});return new nl("auth","Firebase",r).create(e,{appName:t.name})}function er(t){return Qm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&sn(t,"argument-error"),Qm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ym(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return VE.create(t,...e)}function G(t,e,...n){if(!t)throw Ym(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ru(e),new Error(e)}function cr(t,e){t||Yn(e)}/**
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
 */function mp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function AR(){return Ky()==="http:"||Ky()==="https:"}function Ky(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function PR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AR()||a6()||"connection"in navigator)?navigator.onLine:!0}function bR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class il{constructor(e,n){this.shortDelay=e,this.longDelay=n,cr(n>e,"Short delay should be less than long delay!"),this.isMobile=s6()||l6()}get(){return PR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xm(t,e){cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class FE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const OR=new il(3e4,6e4);function ai(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function li(t,e,n,r,i={}){return zE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=rl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),FE.fetch()(UE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function zE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NR),e);try{const i=new jR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Xl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Xl(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Qm(t,h,c);sn(t,h)}}catch(i){if(i instanceof Mn)throw i;sn(t,"network-request-failed",{message:String(i)})}}async function sl(t,e,n,r,i={}){const s=await li(t,e,n,r,i);return"mfaPendingCredential"in s&&sn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function UE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xm(t.config,i):`${t.config.apiScheme}://${i}`}function DR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),OR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}function Gy(t){return t!==void 0&&t.enterprise!==void 0}class LR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return DR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function MR(t,e){return li(t,"GET","/v2/recaptchaConfig",ai(t,e))}/**
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
 */async function VR(t,e){return li(t,"POST","/v1/accounts:delete",e)}async function $E(t,e){return li(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function la(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FR(t,e=!1){const n=Et(t),r=await n.getIdToken(e),i=Jm(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:la(Wh(i.auth_time)),issuedAtTime:la(Wh(i.iat)),expirationTime:la(Wh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Wh(t){return Number(t)*1e3}function Jm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ru("JWT malformed, contained fewer than 3 sections"),null;try{const i=CE(n);return i?JSON.parse(i):(Ru("Failed to decode base64 JWT payload"),null)}catch(i){return Ru("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Qy(t){const e=Jm(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Da(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&zR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class UR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=la(this.lastLoginAt),this.creationTime=la(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Da(t,$E(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?BE(s.providerUserInfo):[],a=BR(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gp(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function $R(t){const e=Et(t);await xc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function BE(t){return t.map(e=>{var{providerId:n}=e,r=Gm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function WR(t,e){const n=await zE(t,{},async()=>{const r=rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=UE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",FE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HR(t,e){return li(t,"POST","/v2/accounts:revokeToken",ai(t,e))}/**
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
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Qy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ns;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
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
 */function wr(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Gm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Da(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FR(this,e)}reload(){return $R(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await Da(this,VR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,x=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:T,emailVerified:b,isAnonymous:j,providerData:L,stsTokenManager:y}=n;G(T&&y,e,"internal-error");const v=Ns.fromJSON(this.name,y);G(typeof T=="string",e,"internal-error"),wr(p,e.name),wr(g,e.name),G(typeof b=="boolean",e,"internal-error"),G(typeof j=="boolean",e,"internal-error"),wr(_,e.name),wr(S,e.name),wr(R,e.name),wr(P,e.name),wr(x,e.name),wr(w,e.name);const I=new Xn({uid:T,auth:e,email:g,emailVerified:b,displayName:p,isAnonymous:j,photoURL:S,phoneNumber:_,tenantId:R,stsTokenManager:v,createdAt:x,lastLoginAt:w});return L&&Array.isArray(L)&&(I.providerData=L.map(C=>Object.assign({},C))),P&&(I._redirectEventId=P),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ns;i.updateFromServerResponse(n);const s=new Xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?BE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ns;a.updateFromIdToken(r);const u=new Xn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new gp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Yy=new Map;function Jn(t){cr(t instanceof Function,"Expected a class definition");let e=Yy.get(t);return e?(cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yy.set(t,e),e)}/**
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
 */class WE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}WE.type="NONE";const Xy=WE;/**
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
 */function ku(t,e,n){return`firebase:${t}:${e}:${n}`}class Os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ku(this.userKey,i.apiKey,s),this.fullPersistenceKey=ku("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Os(Jn(Xy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Jn(Xy);const o=ku(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const p=Xn._fromJSON(e,h);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Os(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Os(s,e,r))}}/**
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
 */function Jy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(GE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(HE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(YE(e))return"Blackberry";if(XE(e))return"Webos";if(qE(e))return"Safari";if((e.includes("chrome/")||KE(e))&&!e.includes("edge/"))return"Chrome";if(QE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function HE(t=pt()){return/firefox\//i.test(t)}function qE(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function KE(t=pt()){return/crios\//i.test(t)}function GE(t=pt()){return/iemobile/i.test(t)}function QE(t=pt()){return/android/i.test(t)}function YE(t=pt()){return/blackberry/i.test(t)}function XE(t=pt()){return/webos/i.test(t)}function Zm(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qR(t=pt()){var e;return Zm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KR(){return u6()&&document.documentMode===10}function JE(t=pt()){return Zm(t)||QE(t)||XE(t)||YE(t)||/windows phone/i.test(t)||GE(t)}/**
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
 */function ZE(t,e=[]){let n;switch(t){case"Browser":n=Jy(pt());break;case"Worker":n=`${Jy(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zi}/${r}`}/**
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
 */class GR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function QR(t,e={}){return li(t,"GET","/v2/passwordPolicy",ai(t,e))}/**
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
 */const YR=6;class XR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:YR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class JR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zy(this),this.idTokenSubscription=new Zy(this),this.beforeStateQueue=new GR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=VE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $E(this,{idToken:e}),r=await Xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(er(this));const n=e?Et(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QR(this),n=new XR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await HR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ZE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&RR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ui(t){return Et(t)}class Zy{constructor(e){this.auth=e,this.observer=null,this.addObserver=y6(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZR(t){vd=t}function eT(t){return vd.loadJS(t)}function ek(){return vd.recaptchaEnterpriseScript}function tk(){return vd.gapiScript}function nk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const rk="recaptcha-enterprise",ik="NO_RECAPTCHA";class sk{constructor(e){this.type=rk,this.auth=ui(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{MR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new LR(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Gy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ik)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Gy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=ek();u.length!==0&&(u+=a),eT(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ev(t,e,n,r=!1){const i=new sk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function yp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await ev(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ev(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function ok(t,e){const n=yd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(wc(s,e??{}))return i;sn(i,"already-initialized")}return n.initialize({options:e})}function ak(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lk(t,e,n){const r=ui(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=tT(e),{host:o,port:a}=uk(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ck()}function tT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uk(t){const e=tT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tv(o)}}}function tv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ck(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class eg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}async function dk(t,e){return li(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function hk(t,e){return sl(t,"POST","/v1/accounts:signInWithPassword",ai(t,e))}/**
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
 */async function fk(t,e){return sl(t,"POST","/v1/accounts:signInWithEmailLink",ai(t,e))}async function pk(t,e){return sl(t,"POST","/v1/accounts:signInWithEmailLink",ai(t,e))}/**
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
 */class ja extends eg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ja(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ja(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yp(e,n,"signInWithPassword",hk);case"emailLink":return fk(e,{email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yp(e,r,"signUpPassword",dk);case"emailLink":return pk(e,{idToken:n,email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ds(t,e){return sl(t,"POST","/v1/accounts:signInWithIdp",ai(t,e))}/**
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
 */const mk="http://localhost";class Ui extends eg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ui(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Gm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ui(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ds(e,n)}buildRequest(){const e={requestUri:mk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=rl(n)}return e}}/**
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
 */function gk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yk(t){const e=Ho(qo(t)).link,n=e?Ho(qo(e)).deep_link_id:null,r=Ho(qo(t)).deep_link_id;return(r?Ho(qo(r)).link:null)||r||n||e||t}class tg{constructor(e){var n,r,i,s,o,a;const u=Ho(qo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,p=gk((i=u.mode)!==null&&i!==void 0?i:null);G(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=yk(e);try{return new tg(n)}catch{return null}}}/**
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
 */class co{constructor(){this.providerId=co.PROVIDER_ID}static credential(e,n){return ja._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=tg.parseLink(n);return G(r,"argument-error"),ja._fromEmailAndCode(e,r.code,r.tenantId)}}co.PROVIDER_ID="password";co.EMAIL_PASSWORD_SIGN_IN_METHOD="password";co.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ng{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ol extends ng{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ar extends ol{constructor(){super("facebook.com")}static credential(e){return Ui._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
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
 */class hn extends ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ui._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
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
 */class Pr extends ol{constructor(){super("github.com")}static credential(e){return Ui._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.GITHUB_SIGN_IN_METHOD="github.com";Pr.PROVIDER_ID="github.com";/**
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
 */class br extends ol{constructor(){super("twitter.com")}static credential(e,n){return Ui._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return br.credential(n,r)}catch{return null}}}br.TWITTER_SIGN_IN_METHOD="twitter.com";br.PROVIDER_ID="twitter.com";/**
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
 */async function vk(t,e){return sl(t,"POST","/v1/accounts:signUp",ai(t,e))}/**
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
 */class $i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Xn._fromIdTokenResponse(e,r,i),o=nv(r);return new $i({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=nv(r);return new $i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function nv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Sc extends Mn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Sc(e,n,r,i)}}function nT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Sc._fromErrorAndOperation(t,s,e,r):s})}async function _k(t,e,n=!1){const r=await Da(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $i._forOperation(t,"link",r)}/**
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
 */async function wk(t,e,n=!1){const{auth:r}=t;if(pn(r.app))return Promise.reject(er(r));const i="reauthenticate";try{const s=await Da(t,nT(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Jm(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),$i._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),s}}/**
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
 */async function rT(t,e,n=!1){if(pn(t.app))return Promise.reject(er(t));const r="signIn",i=await nT(t,r,e),s=await $i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ek(t,e){return rT(ui(t),e)}/**
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
 */async function iT(t){const e=ui(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Tk(t,e,n){if(pn(t.app))return Promise.reject(er(t));const r=ui(t),o=await yp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&iT(t),u}),a=await $i._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function xk(t,e,n){return pn(t.app)?Promise.reject(er(t)):Ek(Et(t),co.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iT(t),r})}function Sk(t,e,n,r){return Et(t).onIdTokenChanged(e,n,r)}function Ik(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}const Ic="__sak";/**
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
 */class sT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ic,"1"),this.storage.removeItem(Ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ck=1e3,Rk=10;class oT extends sT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=JE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);KR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Rk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oT.type="LOCAL";const kk=oT;/**
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
 */class aT extends sT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aT.type="SESSION";const lT=aT;/**
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
 */function Ak(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _d{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new _d(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await Ak(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_d.receivers=[];/**
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
 */function rg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Pk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=rg("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nn(){return window}function bk(t){Nn().location.href=t}/**
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
 */function uT(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function Nk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ok(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Dk(){return uT()?self:null}/**
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
 */const cT="firebaseLocalStorageDb",jk=1,Cc="firebaseLocalStorage",dT="fbase_key";class al{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wd(t,e){return t.transaction([Cc],e?"readwrite":"readonly").objectStore(Cc)}function Lk(){const t=indexedDB.deleteDatabase(cT);return new al(t).toPromise()}function vp(){const t=indexedDB.open(cT,jk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cc,{keyPath:dT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cc)?e(r):(r.close(),await Lk(),e(await vp()))})})}async function rv(t,e,n){const r=wd(t,!0).put({[dT]:e,value:n});return new al(r).toPromise()}async function Mk(t,e){const n=wd(t,!1).get(e),r=await new al(n).toPromise();return r===void 0?null:r.value}function iv(t,e){const n=wd(t,!0).delete(e);return new al(n).toPromise()}const Vk=800,Fk=3;class hT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Fk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_d._getInstance(Dk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Nk(),!this.activeServiceWorker)return;this.sender=new Pk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ok()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vp();return await rv(e,Ic,"1"),await iv(e,Ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Mk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>iv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=wd(i,!1).getAll();return new al(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hT.type="LOCAL";const zk=hT;new il(3e4,6e4);/**
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
 */function fT(t,e){return e?Jn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ig extends eg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Uk(t){return rT(t.auth,new ig(t),t.bypassAuthState)}function $k(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),wk(n,new ig(t),t.bypassAuthState)}async function Bk(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),_k(n,new ig(t),t.bypassAuthState)}/**
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
 */class pT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Uk;case"linkViaPopup":case"linkViaRedirect":return Bk;case"reauthViaPopup":case"reauthViaRedirect":return $k;default:sn(this.auth,"internal-error")}}resolve(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Wk=new il(2e3,1e4);async function Hk(t,e,n){if(pn(t.app))return Promise.reject(wn(t,"operation-not-supported-in-this-environment"));const r=ui(t);kR(t,e,ng);const i=fT(r,n);return new Ri(r,"signInViaPopup",e,i).executeNotNull()}class Ri extends pT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ri.currentPopupAction&&Ri.currentPopupAction.cancel(),Ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){cr(this.filter.length===1,"Popup operations only handle one event");const e=rg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wk.get())};e()}}Ri.currentPopupAction=null;/**
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
 */const qk="pendingRedirect",Au=new Map;class Kk extends pT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Au.get(this.auth._key());if(!e){try{const r=await Gk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Au.set(this.auth._key(),e)}return this.bypassAuthState||Au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gk(t,e){const n=Xk(e),r=Yk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Qk(t,e){Au.set(t._key(),e)}function Yk(t){return Jn(t._redirectPersistence)}function Xk(t){return ku(qk,t.config.apiKey,t.name)}async function Jk(t,e,n=!1){if(pn(t.app))return Promise.reject(er(t));const r=ui(t),i=fT(r,e),o=await new Kk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Zk=10*60*1e3;class eA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zk&&this.cachedEventUids.clear(),this.cachedEventUids.has(sv(e))}saveEventToCache(e){this.cachedEventUids.add(sv(e)),this.lastProcessedEventTime=Date.now()}}function sv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mT(t);default:return!1}}/**
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
 */async function nA(t,e={}){return li(t,"GET","/v1/projects",e)}/**
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
 */const rA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iA=/^https?/;async function sA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nA(t);for(const n of e)try{if(oA(n))return}catch{}sn(t,"unauthorized-domain")}function oA(t){const e=mp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iA.test(n))return!1;if(rA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const aA=new il(3e4,6e4);function ov(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lA(t){return new Promise((e,n)=>{var r,i,s;function o(){ov(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ov(),n(wn(t,"network-request-failed"))},timeout:aA.get()})}if(!((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nn().gapi)===null||s===void 0)&&s.load)o();else{const a=nk("iframefcb");return Nn()[a]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},eT(`${tk()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Pu=null,e})}let Pu=null;function uA(t){return Pu=Pu||lA(t),Pu}/**
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
 */const cA=new il(5e3,15e3),dA="__/auth/iframe",hA="emulator/auth/iframe",fA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mA(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xm(e,hA):`https://${t.config.authDomain}/${dA}`,r={apiKey:e.apiKey,appName:t.name,v:Zi},i=pA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${rl(r).slice(1)}`}async function gA(t){const e=await uA(t),n=Nn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:mA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),a=Nn().setTimeout(()=>{s(o)},cA.get());function u(){Nn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const yA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vA=500,_A=600,wA="_blank",EA="http://localhost";class av{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TA(t,e,n,r=vA,i=_A){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},yA),{width:r.toString(),height:i.toString(),top:s,left:o}),c=pt().toLowerCase();n&&(a=KE(c)?wA:n),HE(c)&&(e=e||EA,u.scrollbars="yes");const h=Object.entries(u).reduce((g,[_,S])=>`${g}${_}=${S},`,"");if(qR(c)&&a!=="_self")return xA(e||"",a),new av(null);const p=window.open(e||"",a,h);G(p,t,"popup-blocked");try{p.focus()}catch{}return new av(p)}function xA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SA="__/auth/handler",IA="emulator/auth/handler",CA=encodeURIComponent("fac");async function lv(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zi,eventId:i};if(e instanceof ng){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",g6(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof ol){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${CA}=${encodeURIComponent(u)}`:"";return`${RA(t)}?${rl(a).slice(1)}${c}`}function RA({config:t}){return t.emulator?Xm(t,IA):`https://${t.authDomain}/${SA}`}/**
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
 */const Hh="webStorageSupport";class kA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lT,this._completeRedirectFn=Jk,this._overrideRedirectResult=Qk}async _openPopup(e,n,r,i){var s;cr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await lv(e,n,r,mp(),i);return TA(e,o,rg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await lv(e,n,r,mp(),i);return bk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(cr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gA(e),r=new eA(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hh,{type:Hh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hh];o!==void 0&&n(!!o),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return JE()||qE()||Zm()}}const AA=kA;var uv="@firebase/auth",cv="1.7.8";/**
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
 */class PA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NA(t){zi(new Jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ZE(t)},c=new JR(r,i,s,u);return ak(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zi(new Jr("auth-internal",e=>{const n=ui(e.getProvider("auth").getImmediate());return(r=>new PA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(uv,cv,bA(t)),bn(uv,cv,"esm2017")}/**
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
 */const OA=5*60,DA=PE("authIdTokenMaxAge")||OA;let dv=null;const jA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>DA)return;const i=n==null?void 0:n.token;dv!==i&&(dv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function LA(t=Km()){const e=yd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ok(t,{popupRedirectResolver:AA,persistence:[zk,kk,lT]}),r=PE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=jA(s.toString());Ik(n,o,()=>o(n.currentUser)),Sk(n,a=>o(a))}}const i=RE("auth");return i&&lk(n,`http://${i}`),n}function MA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ZR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",MA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NA("Browser");var VA="firebase",FA="10.13.1";/**
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
 */bn(VA,FA,"app");var hv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oi,gT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,v){function I(){}I.prototype=v.prototype,y.D=v.prototype,y.prototype=new I,y.prototype.constructor=y,y.C=function(C,k,N){for(var A=Array(arguments.length-2),St=2;St<arguments.length;St++)A[St-2]=arguments[St];return v.prototype[k].apply(C,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,v,I){I||(I=0);var C=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)C[k]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(k=0;16>k;++k)C[k]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=y.g[0],I=y.g[1],k=y.g[2];var N=y.g[3],A=v+(N^I&(k^N))+C[0]+3614090360&4294967295;v=I+(A<<7&4294967295|A>>>25),A=N+(k^v&(I^k))+C[1]+3905402710&4294967295,N=v+(A<<12&4294967295|A>>>20),A=k+(I^N&(v^I))+C[2]+606105819&4294967295,k=N+(A<<17&4294967295|A>>>15),A=I+(v^k&(N^v))+C[3]+3250441966&4294967295,I=k+(A<<22&4294967295|A>>>10),A=v+(N^I&(k^N))+C[4]+4118548399&4294967295,v=I+(A<<7&4294967295|A>>>25),A=N+(k^v&(I^k))+C[5]+1200080426&4294967295,N=v+(A<<12&4294967295|A>>>20),A=k+(I^N&(v^I))+C[6]+2821735955&4294967295,k=N+(A<<17&4294967295|A>>>15),A=I+(v^k&(N^v))+C[7]+4249261313&4294967295,I=k+(A<<22&4294967295|A>>>10),A=v+(N^I&(k^N))+C[8]+1770035416&4294967295,v=I+(A<<7&4294967295|A>>>25),A=N+(k^v&(I^k))+C[9]+2336552879&4294967295,N=v+(A<<12&4294967295|A>>>20),A=k+(I^N&(v^I))+C[10]+4294925233&4294967295,k=N+(A<<17&4294967295|A>>>15),A=I+(v^k&(N^v))+C[11]+2304563134&4294967295,I=k+(A<<22&4294967295|A>>>10),A=v+(N^I&(k^N))+C[12]+1804603682&4294967295,v=I+(A<<7&4294967295|A>>>25),A=N+(k^v&(I^k))+C[13]+4254626195&4294967295,N=v+(A<<12&4294967295|A>>>20),A=k+(I^N&(v^I))+C[14]+2792965006&4294967295,k=N+(A<<17&4294967295|A>>>15),A=I+(v^k&(N^v))+C[15]+1236535329&4294967295,I=k+(A<<22&4294967295|A>>>10),A=v+(k^N&(I^k))+C[1]+4129170786&4294967295,v=I+(A<<5&4294967295|A>>>27),A=N+(I^k&(v^I))+C[6]+3225465664&4294967295,N=v+(A<<9&4294967295|A>>>23),A=k+(v^I&(N^v))+C[11]+643717713&4294967295,k=N+(A<<14&4294967295|A>>>18),A=I+(N^v&(k^N))+C[0]+3921069994&4294967295,I=k+(A<<20&4294967295|A>>>12),A=v+(k^N&(I^k))+C[5]+3593408605&4294967295,v=I+(A<<5&4294967295|A>>>27),A=N+(I^k&(v^I))+C[10]+38016083&4294967295,N=v+(A<<9&4294967295|A>>>23),A=k+(v^I&(N^v))+C[15]+3634488961&4294967295,k=N+(A<<14&4294967295|A>>>18),A=I+(N^v&(k^N))+C[4]+3889429448&4294967295,I=k+(A<<20&4294967295|A>>>12),A=v+(k^N&(I^k))+C[9]+568446438&4294967295,v=I+(A<<5&4294967295|A>>>27),A=N+(I^k&(v^I))+C[14]+3275163606&4294967295,N=v+(A<<9&4294967295|A>>>23),A=k+(v^I&(N^v))+C[3]+4107603335&4294967295,k=N+(A<<14&4294967295|A>>>18),A=I+(N^v&(k^N))+C[8]+1163531501&4294967295,I=k+(A<<20&4294967295|A>>>12),A=v+(k^N&(I^k))+C[13]+2850285829&4294967295,v=I+(A<<5&4294967295|A>>>27),A=N+(I^k&(v^I))+C[2]+4243563512&4294967295,N=v+(A<<9&4294967295|A>>>23),A=k+(v^I&(N^v))+C[7]+1735328473&4294967295,k=N+(A<<14&4294967295|A>>>18),A=I+(N^v&(k^N))+C[12]+2368359562&4294967295,I=k+(A<<20&4294967295|A>>>12),A=v+(I^k^N)+C[5]+4294588738&4294967295,v=I+(A<<4&4294967295|A>>>28),A=N+(v^I^k)+C[8]+2272392833&4294967295,N=v+(A<<11&4294967295|A>>>21),A=k+(N^v^I)+C[11]+1839030562&4294967295,k=N+(A<<16&4294967295|A>>>16),A=I+(k^N^v)+C[14]+4259657740&4294967295,I=k+(A<<23&4294967295|A>>>9),A=v+(I^k^N)+C[1]+2763975236&4294967295,v=I+(A<<4&4294967295|A>>>28),A=N+(v^I^k)+C[4]+1272893353&4294967295,N=v+(A<<11&4294967295|A>>>21),A=k+(N^v^I)+C[7]+4139469664&4294967295,k=N+(A<<16&4294967295|A>>>16),A=I+(k^N^v)+C[10]+3200236656&4294967295,I=k+(A<<23&4294967295|A>>>9),A=v+(I^k^N)+C[13]+681279174&4294967295,v=I+(A<<4&4294967295|A>>>28),A=N+(v^I^k)+C[0]+3936430074&4294967295,N=v+(A<<11&4294967295|A>>>21),A=k+(N^v^I)+C[3]+3572445317&4294967295,k=N+(A<<16&4294967295|A>>>16),A=I+(k^N^v)+C[6]+76029189&4294967295,I=k+(A<<23&4294967295|A>>>9),A=v+(I^k^N)+C[9]+3654602809&4294967295,v=I+(A<<4&4294967295|A>>>28),A=N+(v^I^k)+C[12]+3873151461&4294967295,N=v+(A<<11&4294967295|A>>>21),A=k+(N^v^I)+C[15]+530742520&4294967295,k=N+(A<<16&4294967295|A>>>16),A=I+(k^N^v)+C[2]+3299628645&4294967295,I=k+(A<<23&4294967295|A>>>9),A=v+(k^(I|~N))+C[0]+4096336452&4294967295,v=I+(A<<6&4294967295|A>>>26),A=N+(I^(v|~k))+C[7]+1126891415&4294967295,N=v+(A<<10&4294967295|A>>>22),A=k+(v^(N|~I))+C[14]+2878612391&4294967295,k=N+(A<<15&4294967295|A>>>17),A=I+(N^(k|~v))+C[5]+4237533241&4294967295,I=k+(A<<21&4294967295|A>>>11),A=v+(k^(I|~N))+C[12]+1700485571&4294967295,v=I+(A<<6&4294967295|A>>>26),A=N+(I^(v|~k))+C[3]+2399980690&4294967295,N=v+(A<<10&4294967295|A>>>22),A=k+(v^(N|~I))+C[10]+4293915773&4294967295,k=N+(A<<15&4294967295|A>>>17),A=I+(N^(k|~v))+C[1]+2240044497&4294967295,I=k+(A<<21&4294967295|A>>>11),A=v+(k^(I|~N))+C[8]+1873313359&4294967295,v=I+(A<<6&4294967295|A>>>26),A=N+(I^(v|~k))+C[15]+4264355552&4294967295,N=v+(A<<10&4294967295|A>>>22),A=k+(v^(N|~I))+C[6]+2734768916&4294967295,k=N+(A<<15&4294967295|A>>>17),A=I+(N^(k|~v))+C[13]+1309151649&4294967295,I=k+(A<<21&4294967295|A>>>11),A=v+(k^(I|~N))+C[4]+4149444226&4294967295,v=I+(A<<6&4294967295|A>>>26),A=N+(I^(v|~k))+C[11]+3174756917&4294967295,N=v+(A<<10&4294967295|A>>>22),A=k+(v^(N|~I))+C[2]+718787259&4294967295,k=N+(A<<15&4294967295|A>>>17),A=I+(N^(k|~v))+C[9]+3951481745&4294967295,y.g[0]=y.g[0]+v&4294967295,y.g[1]=y.g[1]+(k+(A<<21&4294967295|A>>>11))&4294967295,y.g[2]=y.g[2]+k&4294967295,y.g[3]=y.g[3]+N&4294967295}r.prototype.u=function(y,v){v===void 0&&(v=y.length);for(var I=v-this.blockSize,C=this.B,k=this.h,N=0;N<v;){if(k==0)for(;N<=I;)i(this,y,N),N+=this.blockSize;if(typeof y=="string"){for(;N<v;)if(C[k++]=y.charCodeAt(N++),k==this.blockSize){i(this,C),k=0;break}}else for(;N<v;)if(C[k++]=y[N++],k==this.blockSize){i(this,C),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var v=1;v<y.length-8;++v)y[v]=0;var I=8*this.o;for(v=y.length-8;v<y.length;++v)y[v]=I&255,I/=256;for(this.u(y),y=Array(16),v=I=0;4>v;++v)for(var C=0;32>C;C+=8)y[I++]=this.g[v]>>>C&255;return y};function s(y,v){var I=a;return Object.prototype.hasOwnProperty.call(I,y)?I[y]:I[y]=v(y)}function o(y,v){this.h=v;for(var I=[],C=!0,k=y.length-1;0<=k;k--){var N=y[k]|0;C&&N==v||(I[k]=N,C=!1)}this.g=I}var a={};function u(y){return-128<=y&&128>y?s(y,function(v){return new o([v|0],0>v?-1:0)}):new o([y|0],0>y?-1:0)}function c(y){if(isNaN(y)||!isFinite(y))return p;if(0>y)return P(c(-y));for(var v=[],I=1,C=0;y>=I;C++)v[C]=y/I|0,I*=4294967296;return new o(v,0)}function h(y,v){if(y.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(y.charAt(0)=="-")return P(h(y.substring(1),v));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(v,8)),C=p,k=0;k<y.length;k+=8){var N=Math.min(8,y.length-k),A=parseInt(y.substring(k,k+N),v);8>N?(N=c(Math.pow(v,N)),C=C.j(N).add(c(A))):(C=C.j(I),C=C.add(c(A)))}return C}var p=u(0),g=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-P(this).m();for(var y=0,v=1,I=0;I<this.g.length;I++){var C=this.i(I);y+=(0<=C?C:4294967296+C)*v,v*=4294967296}return y},t.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(S(this))return"0";if(R(this))return"-"+P(this).toString(y);for(var v=c(Math.pow(y,6)),I=this,C="";;){var k=b(I,v).g;I=x(I,k.j(v));var N=((0<I.g.length?I.g[0]:I.h)>>>0).toString(y);if(I=k,S(I))return N+C;for(;6>N.length;)N="0"+N;C=N+C}},t.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function S(y){if(y.h!=0)return!1;for(var v=0;v<y.g.length;v++)if(y.g[v]!=0)return!1;return!0}function R(y){return y.h==-1}t.l=function(y){return y=x(this,y),R(y)?-1:S(y)?0:1};function P(y){for(var v=y.g.length,I=[],C=0;C<v;C++)I[C]=~y.g[C];return new o(I,~y.h).add(g)}t.abs=function(){return R(this)?P(this):this},t.add=function(y){for(var v=Math.max(this.g.length,y.g.length),I=[],C=0,k=0;k<=v;k++){var N=C+(this.i(k)&65535)+(y.i(k)&65535),A=(N>>>16)+(this.i(k)>>>16)+(y.i(k)>>>16);C=A>>>16,N&=65535,A&=65535,I[k]=A<<16|N}return new o(I,I[I.length-1]&-2147483648?-1:0)};function x(y,v){return y.add(P(v))}t.j=function(y){if(S(this)||S(y))return p;if(R(this))return R(y)?P(this).j(P(y)):P(P(this).j(y));if(R(y))return P(this.j(P(y)));if(0>this.l(_)&&0>y.l(_))return c(this.m()*y.m());for(var v=this.g.length+y.g.length,I=[],C=0;C<2*v;C++)I[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<y.g.length;k++){var N=this.i(C)>>>16,A=this.i(C)&65535,St=y.i(k)>>>16,Fn=y.i(k)&65535;I[2*C+2*k]+=A*Fn,w(I,2*C+2*k),I[2*C+2*k+1]+=N*Fn,w(I,2*C+2*k+1),I[2*C+2*k+1]+=A*St,w(I,2*C+2*k+1),I[2*C+2*k+2]+=N*St,w(I,2*C+2*k+2)}for(C=0;C<v;C++)I[C]=I[2*C+1]<<16|I[2*C];for(C=v;C<2*v;C++)I[C]=0;return new o(I,0)};function w(y,v){for(;(y[v]&65535)!=y[v];)y[v+1]+=y[v]>>>16,y[v]&=65535,v++}function T(y,v){this.g=y,this.h=v}function b(y,v){if(S(v))throw Error("division by zero");if(S(y))return new T(p,p);if(R(y))return v=b(P(y),v),new T(P(v.g),P(v.h));if(R(v))return v=b(y,P(v)),new T(P(v.g),v.h);if(30<y.g.length){if(R(y)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var I=g,C=v;0>=C.l(y);)I=j(I),C=j(C);var k=L(I,1),N=L(C,1);for(C=L(C,2),I=L(I,2);!S(C);){var A=N.add(C);0>=A.l(y)&&(k=k.add(I),N=A),C=L(C,1),I=L(I,1)}return v=x(y,k.j(v)),new T(k,v)}for(k=p;0<=y.l(v);){for(I=Math.max(1,Math.floor(y.m()/v.m())),C=Math.ceil(Math.log(I)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),N=c(I),A=N.j(v);R(A)||0<A.l(y);)I-=C,N=c(I),A=N.j(v);S(N)&&(N=g),k=k.add(N),y=x(y,A)}return new T(k,y)}t.A=function(y){return b(this,y).h},t.and=function(y){for(var v=Math.max(this.g.length,y.g.length),I=[],C=0;C<v;C++)I[C]=this.i(C)&y.i(C);return new o(I,this.h&y.h)},t.or=function(y){for(var v=Math.max(this.g.length,y.g.length),I=[],C=0;C<v;C++)I[C]=this.i(C)|y.i(C);return new o(I,this.h|y.h)},t.xor=function(y){for(var v=Math.max(this.g.length,y.g.length),I=[],C=0;C<v;C++)I[C]=this.i(C)^y.i(C);return new o(I,this.h^y.h)};function j(y){for(var v=y.g.length+1,I=[],C=0;C<v;C++)I[C]=y.i(C)<<1|y.i(C-1)>>>31;return new o(I,y.h)}function L(y,v){var I=v>>5;v%=32;for(var C=y.g.length-I,k=[],N=0;N<C;N++)k[N]=0<v?y.i(N+I)>>>v|y.i(N+I+1)<<32-v:y.i(N+I);return new o(k,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,gT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Oi=o}).apply(typeof hv<"u"?hv:typeof self<"u"?self:typeof window<"u"?window:{});var Jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yT,vT,Ko,_T,bu,_p,wT,ET,TT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,m){return l==Array.prototype||l==Object.prototype||(l[f]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jl=="object"&&Jl];for(var f=0;f<l.length;++f){var m=l[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,f){if(f)e:{var m=r;l=l.split(".");for(var E=0;E<l.length-1;E++){var O=l[E];if(!(O in m))break e;m=m[O]}l=l[l.length-1],E=m[l],f=f(E),f!=E&&f!=null&&e(m,l,{configurable:!0,writable:!0,value:f})}}function s(l,f){l instanceof String&&(l+="");var m=0,E=!1,O={next:function(){if(!E&&m<l.length){var M=m++;return{value:f(M,l[M]),done:!1}}return E=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function c(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,m){return l.call.apply(l.bind,arguments)}function p(l,f,m){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,E),l.apply(f,O)}}return function(){return l.apply(f,arguments)}}function g(l,f,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,g.apply(null,arguments)}function _(l,f){var m=Array.prototype.slice.call(arguments,1);return function(){var E=m.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function S(l,f){function m(){}m.prototype=f.prototype,l.aa=f.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(E,O,M){for(var U=Array(arguments.length-2),he=2;he<arguments.length;he++)U[he-2]=arguments[he];return f.prototype[O].apply(E,U)}}function R(l){const f=l.length;if(0<f){const m=Array(f);for(let E=0;E<f;E++)m[E]=l[E];return m}return[]}function P(l,f){for(let m=1;m<arguments.length;m++){const E=arguments[m];if(u(E)){const O=l.length||0,M=E.length||0;l.length=O+M;for(let U=0;U<M;U++)l[O+U]=E[U]}else l.push(E)}}class x{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function w(l){return/^[\s\xa0]*$/.test(l)}function T(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function b(l){return b[" "](l),l}b[" "]=function(){};var j=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function L(l,f,m){for(const E in l)f.call(m,l[E],E,l)}function y(l,f){for(const m in l)f.call(void 0,l[m],m,l)}function v(l){const f={};for(const m in l)f[m]=l[m];return f}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,f){let m,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(m in E)l[m]=E[m];for(let M=0;M<I.length;M++)m=I[M],Object.prototype.hasOwnProperty.call(E,m)&&(l[m]=E[m])}}function k(l){var f=1;l=l.split(":");const m=[];for(;0<f&&l.length;)m.push(l.shift()),f--;return l.length&&m.push(l.join(":")),m}function N(l){a.setTimeout(()=>{throw l},0)}function A(){var l=q;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class St{constructor(){this.h=this.g=null}add(f,m){const E=Fn.get();E.set(f,m),this.h?this.h.next=E:this.g=E,this.h=E}}var Fn=new x(()=>new ci,l=>l.reset());class ci{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Ot,$=!1,q=new St,Q=()=>{const l=a.Promise.resolve(void 0);Ot=()=>{l.then(ue)}};var ue=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(m){N(m)}var f=Fn;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}$=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Dt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return l}();function It(l,f){if(Ee.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(j){e:{try{b(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else m=="mouseover"?f=l.fromElement:m=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:mt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&It.aa.h.call(this)}}S(It,Ee);var mt={2:"touch",3:"pen",4:"mouse"};It.prototype.h=function(){It.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Ct="closure_listenable_"+(1e6*Math.random()|0),di=0;function zn(l,f,m,E,O){this.listener=l,this.proxy=null,this.src=f,this.type=m,this.capture=!!E,this.ha=O,this.key=++di,this.da=this.fa=!1}function mr(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Un(l){this.src=l,this.g={},this.h=0}Un.prototype.add=function(l,f,m,E,O){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var U=zd(l,f,E,O);return-1<U?(f=l[U],m||(f.fa=!1)):(f=new zn(f,this.src,M,!!E,O),f.fa=m,l.push(f)),f};function Qt(l,f){var m=f.type;if(m in l.g){var E=l.g[m],O=Array.prototype.indexOf.call(E,f,void 0),M;(M=0<=O)&&Array.prototype.splice.call(E,O,1),M&&(mr(f),l.g[m].length==0&&(delete l.g[m],l.h--))}}function zd(l,f,m,E){for(var O=0;O<l.length;++O){var M=l[O];if(!M.da&&M.listener==f&&M.capture==!!m&&M.ha==E)return O}return-1}var Ud="closure_lm_"+(1e6*Math.random()|0),$d={};function Zg(l,f,m,E,O){if(Array.isArray(f)){for(var M=0;M<f.length;M++)Zg(l,f[M],m,E,O);return null}return m=n0(m),l&&l[Ct]?l.K(f,m,c(E)?!!E.capture:!!E,O):vS(l,f,m,!1,E,O)}function vS(l,f,m,E,O,M){if(!f)throw Error("Invalid event type");var U=c(O)?!!O.capture:!!O,he=Wd(l);if(he||(l[Ud]=he=new Un(l)),m=he.add(f,m,E,U,M),m.proxy)return m;if(E=_S(),m.proxy=E,E.src=l,E.listener=m,l.addEventListener)Dt||(O=U),O===void 0&&(O=!1),l.addEventListener(f.toString(),E,O);else if(l.attachEvent)l.attachEvent(t0(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return m}function _S(){function l(m){return f.call(l.src,l.listener,m)}const f=wS;return l}function e0(l,f,m,E,O){if(Array.isArray(f))for(var M=0;M<f.length;M++)e0(l,f[M],m,E,O);else E=c(E)?!!E.capture:!!E,m=n0(m),l&&l[Ct]?(l=l.i,f=String(f).toString(),f in l.g&&(M=l.g[f],m=zd(M,m,E,O),-1<m&&(mr(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete l.g[f],l.h--)))):l&&(l=Wd(l))&&(f=l.g[f.toString()],l=-1,f&&(l=zd(f,m,E,O)),(m=-1<l?f[l]:null)&&Bd(m))}function Bd(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Ct])Qt(f.i,l);else{var m=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(m,E,l.capture):f.detachEvent?f.detachEvent(t0(m),E):f.addListener&&f.removeListener&&f.removeListener(E),(m=Wd(f))?(Qt(m,l),m.h==0&&(m.src=null,f[Ud]=null)):mr(l)}}}function t0(l){return l in $d?$d[l]:$d[l]="on"+l}function wS(l,f){if(l.da)l=!0;else{f=new It(f,this);var m=l.listener,E=l.ha||l.src;l.fa&&Bd(l),l=m.call(E,f)}return l}function Wd(l){return l=l[Ud],l instanceof Un?l:null}var Hd="__closure_events_fn_"+(1e9*Math.random()>>>0);function n0(l){return typeof l=="function"?l:(l[Hd]||(l[Hd]=function(f){return l.handleEvent(f)}),l[Hd])}function it(){te.call(this),this.i=new Un(this),this.M=this,this.F=null}S(it,te),it.prototype[Ct]=!0,it.prototype.removeEventListener=function(l,f,m,E){e0(this,l,f,m,E)};function gt(l,f){var m,E=l.F;if(E)for(m=[];E;E=E.F)m.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new Ee(f,l);else if(f instanceof Ee)f.target=f.target||l;else{var O=f;f=new Ee(E,l),C(f,O)}if(O=!0,m)for(var M=m.length-1;0<=M;M--){var U=f.g=m[M];O=gl(U,E,!0,f)&&O}if(U=f.g=l,O=gl(U,E,!0,f)&&O,O=gl(U,E,!1,f)&&O,m)for(M=0;M<m.length;M++)U=f.g=m[M],O=gl(U,E,!1,f)&&O}it.prototype.N=function(){if(it.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var m=l.g[f],E=0;E<m.length;E++)mr(m[E]);delete l.g[f],l.h--}}this.F=null},it.prototype.K=function(l,f,m,E){return this.i.add(String(l),f,!1,m,E)},it.prototype.L=function(l,f,m,E){return this.i.add(String(l),f,!0,m,E)};function gl(l,f,m,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,M=0;M<f.length;++M){var U=f[M];if(U&&!U.da&&U.capture==m){var he=U.listener,Ge=U.ha||U.src;U.fa&&Qt(l.i,U),O=he.call(Ge,E)!==!1&&O}}return O&&!E.defaultPrevented}function r0(l,f,m){if(typeof l=="function")m&&(l=g(l,m));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function i0(l){l.g=r0(()=>{l.g=null,l.i&&(l.i=!1,i0(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class ES extends te{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:i0(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function go(l){te.call(this),this.h=l,this.g={}}S(go,te);var s0=[];function o0(l){L(l.g,function(f,m){this.g.hasOwnProperty(m)&&Bd(f)},l),l.g={}}go.prototype.N=function(){go.aa.N.call(this),o0(this)},go.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qd=a.JSON.stringify,TS=a.JSON.parse,xS=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Kd(){}Kd.prototype.h=null;function a0(l){return l.h||(l.h=l.i())}function l0(){}var yo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gd(){Ee.call(this,"d")}S(Gd,Ee);function Qd(){Ee.call(this,"c")}S(Qd,Ee);var hi={},u0=null;function yl(){return u0=u0||new it}hi.La="serverreachability";function c0(l){Ee.call(this,hi.La,l)}S(c0,Ee);function vo(l){const f=yl();gt(f,new c0(f))}hi.STAT_EVENT="statevent";function d0(l,f){Ee.call(this,hi.STAT_EVENT,l),this.stat=f}S(d0,Ee);function yt(l){const f=yl();gt(f,new d0(f,l))}hi.Ma="timingevent";function h0(l,f){Ee.call(this,hi.Ma,l),this.size=f}S(h0,Ee);function _o(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function wo(){this.g=!0}wo.prototype.xa=function(){this.g=!1};function SS(l,f,m,E,O,M){l.info(function(){if(l.g)if(M)for(var U="",he=M.split("&"),Ge=0;Ge<he.length;Ge++){var oe=he[Ge].split("=");if(1<oe.length){var st=oe[0];oe=oe[1];var ot=st.split("_");U=2<=ot.length&&ot[1]=="type"?U+(st+"="+oe+"&"):U+(st+"=redacted&")}}else U=null;else U=M;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+f+`
`+m+`
`+U})}function IS(l,f,m,E,O,M,U){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+f+`
`+m+`
`+M+" "+U})}function is(l,f,m,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+RS(l,m)+(E?" "+E:"")})}function CS(l,f){l.info(function(){return"TIMEOUT: "+f})}wo.prototype.info=function(){};function RS(l,f){if(!l.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var E=m[l];if(!(2>E.length)){var O=E[1];if(Array.isArray(O)&&!(1>O.length)){var M=O[0];if(M!="noop"&&M!="stop"&&M!="close")for(var U=1;U<O.length;U++)O[U]=""}}}}return qd(m)}catch{return f}}var vl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},f0={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yd;function _l(){}S(_l,Kd),_l.prototype.g=function(){return new XMLHttpRequest},_l.prototype.i=function(){return{}},Yd=new _l;function gr(l,f,m,E){this.j=l,this.i=f,this.l=m,this.R=E||1,this.U=new go(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new p0}function p0(){this.i=null,this.g="",this.h=!1}var m0={},Xd={};function Jd(l,f,m){l.L=1,l.v=xl($n(f)),l.m=m,l.P=!0,g0(l,null)}function g0(l,f){l.F=Date.now(),wl(l),l.A=$n(l.v);var m=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),P0(m.i,"t",E),l.C=0,m=l.j.J,l.h=new p0,l.g=G0(l.j,m?f:null,!l.m),0<l.O&&(l.M=new ES(g(l.Y,l,l.g),l.O)),f=l.U,m=l.g,E=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(s0[0]=O.toString()),O=s0);for(var M=0;M<O.length;M++){var U=Zg(m,O[M],E||f.handleEvent,!1,f.h||f);if(!U)break;f.g[U.key]=U}f=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),vo(),SS(l.i,l.u,l.A,l.l,l.R,l.m)}gr.prototype.ca=function(l){l=l.target;const f=this.M;f&&Bn(l)==3?f.j():this.Y(l)},gr.prototype.Y=function(l){try{if(l==this.g)e:{const ot=Bn(this.g);var f=this.g.Ba();const as=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||M0(this.g)))){this.J||ot!=4||f==7||(f==8||0>=as?vo(3):vo(2)),Zd(this);var m=this.g.Z();this.X=m;t:if(y0(this)){var E=M0(this.g);l="";var O=E.length,M=Bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fi(this),Eo(this);var U="";break t}this.h.i=new a.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(M&&f==O-1)});E.length=0,this.h.g+=l,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=m==200,IS(this.i,this.u,this.A,this.l,this.R,ot,m),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Ge=this.g;if((he=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(he)){var oe=he;break t}}oe=null}if(m=oe)is(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eh(this,m);else{this.o=!1,this.s=3,yt(12),fi(this),Eo(this);break e}}if(this.P){m=!0;let on;for(;!this.J&&this.C<U.length;)if(on=kS(this,U),on==Xd){ot==4&&(this.s=4,yt(14),m=!1),is(this.i,this.l,null,"[Incomplete Response]");break}else if(on==m0){this.s=4,yt(15),is(this.i,this.l,U,"[Invalid Chunk]"),m=!1;break}else is(this.i,this.l,on,null),eh(this,on);if(y0(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||U.length!=0||this.h.h||(this.s=1,yt(16),m=!1),this.o=this.o&&m,!m)is(this.i,this.l,U,"[Invalid Chunked Response]"),fi(this),Eo(this);else if(0<U.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),oh(st),st.M=!0,yt(11))}}else is(this.i,this.l,U,null),eh(this,U);ot==4&&fi(this),this.o&&!this.J&&(ot==4?W0(this.j,this):(this.o=!1,wl(this)))}else HS(this.g),m==400&&0<U.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),fi(this),Eo(this)}}}catch{}finally{}};function y0(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function kS(l,f){var m=l.C,E=f.indexOf(`
`,m);return E==-1?Xd:(m=Number(f.substring(m,E)),isNaN(m)?m0:(E+=1,E+m>f.length?Xd:(f=f.slice(E,E+m),l.C=E+m,f)))}gr.prototype.cancel=function(){this.J=!0,fi(this)};function wl(l){l.S=Date.now()+l.I,v0(l,l.I)}function v0(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=_o(g(l.ba,l),f)}function Zd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}gr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(CS(this.i,this.A),this.L!=2&&(vo(),yt(17)),fi(this),this.s=2,Eo(this)):v0(this,this.S-l)};function Eo(l){l.j.G==0||l.J||W0(l.j,l)}function fi(l){Zd(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,o0(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function eh(l,f){try{var m=l.j;if(m.G!=0&&(m.g==l||th(m.h,l))){if(!l.K&&th(m.h,l)&&m.G==3){try{var E=m.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)kl(m),Cl(m);else break e;sh(m),yt(18)}}else m.za=O[1],0<m.za-m.T&&37500>O[2]&&m.F&&m.v==0&&!m.C&&(m.C=_o(g(m.Za,m),6e3));if(1>=E0(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else mi(m,11)}else if((l.K||m.g==l)&&kl(m),!w(f))for(O=m.Da.g.parse(f),f=0;f<O.length;f++){let oe=O[f];if(m.T=oe[0],oe=oe[1],m.G==2)if(oe[0]=="c"){m.K=oe[1],m.ia=oe[2];const st=oe[3];st!=null&&(m.la=st,m.j.info("VER="+m.la));const ot=oe[4];ot!=null&&(m.Aa=ot,m.j.info("SVER="+m.Aa));const as=oe[5];as!=null&&typeof as=="number"&&0<as&&(E=1.5*as,m.L=E,m.j.info("backChannelRequestTimeoutMs_="+E)),E=m;const on=l.g;if(on){const Pl=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pl){var M=E.h;M.g||Pl.indexOf("spdy")==-1&&Pl.indexOf("quic")==-1&&Pl.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(nh(M,M.h),M.h=null))}if(E.D){const ah=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;ah&&(E.ya=ah,me(E.I,E.D,ah))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),E=m;var U=l;if(E.qa=K0(E,E.J?E.ia:null,E.W),U.K){T0(E.h,U);var he=U,Ge=E.L;Ge&&(he.I=Ge),he.B&&(Zd(he),wl(he)),E.g=U}else $0(E);0<m.i.length&&Rl(m)}else oe[0]!="stop"&&oe[0]!="close"||mi(m,7);else m.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?mi(m,7):ih(m):oe[0]!="noop"&&m.l&&m.l.ta(oe),m.v=0)}}vo(4)}catch{}}var AS=class{constructor(l,f){this.g=l,this.map=f}};function _0(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function w0(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function E0(l){return l.h?1:l.g?l.g.size:0}function th(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function nh(l,f){l.g?l.g.add(f):l.h=f}function T0(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}_0.prototype.cancel=function(){if(this.i=x0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function x0(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const m of l.g.values())f=f.concat(m.D);return f}return R(l.i)}function PS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var f=[],m=l.length,E=0;E<m;E++)f.push(l[E]);return f}f=[],m=0;for(E in l)f[m++]=l[E];return f}function bS(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var f=[];l=l.length;for(var m=0;m<l;m++)f.push(m);return f}f=[],m=0;for(const E in l)f[m++]=E;return f}}}function S0(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var m=bS(l),E=PS(l),O=E.length,M=0;M<O;M++)f.call(void 0,E[M],m&&m[M],l)}var I0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function NS(l,f){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var E=l[m].indexOf("="),O=null;if(0<=E){var M=l[m].substring(0,E);O=l[m].substring(E+1)}else M=l[m];f(M,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function pi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof pi){this.h=l.h,El(this,l.j),this.o=l.o,this.g=l.g,Tl(this,l.s),this.l=l.l;var f=l.i,m=new So;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),C0(this,m),this.m=l.m}else l&&(f=String(l).match(I0))?(this.h=!1,El(this,f[1]||"",!0),this.o=To(f[2]||""),this.g=To(f[3]||"",!0),Tl(this,f[4]),this.l=To(f[5]||"",!0),C0(this,f[6]||"",!0),this.m=To(f[7]||"")):(this.h=!1,this.i=new So(null,this.h))}pi.prototype.toString=function(){var l=[],f=this.j;f&&l.push(xo(f,R0,!0),":");var m=this.g;return(m||f=="file")&&(l.push("//"),(f=this.o)&&l.push(xo(f,R0,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(xo(m,m.charAt(0)=="/"?jS:DS,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",xo(m,MS)),l.join("")};function $n(l){return new pi(l)}function El(l,f,m){l.j=m?To(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Tl(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function C0(l,f,m){f instanceof So?(l.i=f,VS(l.i,l.h)):(m||(f=xo(f,LS)),l.i=new So(f,l.h))}function me(l,f,m){l.i.set(f,m)}function xl(l){return me(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function To(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function xo(l,f,m){return typeof l=="string"?(l=encodeURI(l).replace(f,OS),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function OS(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var R0=/[#\/\?@]/g,DS=/[#\?:]/g,jS=/[#\?]/g,LS=/[#\?@]/g,MS=/#/g;function So(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function yr(l){l.g||(l.g=new Map,l.h=0,l.i&&NS(l.i,function(f,m){l.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=So.prototype,t.add=function(l,f){yr(this),this.i=null,l=ss(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(f),this.h+=1,this};function k0(l,f){yr(l),f=ss(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function A0(l,f){return yr(l),f=ss(l,f),l.g.has(f)}t.forEach=function(l,f){yr(this),this.g.forEach(function(m,E){m.forEach(function(O){l.call(f,O,E,this)},this)},this)},t.na=function(){yr(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let E=0;E<f.length;E++){const O=l[E];for(let M=0;M<O.length;M++)m.push(f[E])}return m},t.V=function(l){yr(this);let f=[];if(typeof l=="string")A0(this,l)&&(f=f.concat(this.g.get(ss(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)f=f.concat(l[m])}return f},t.set=function(l,f){return yr(this),this.i=null,l=ss(this,l),A0(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function P0(l,f,m){k0(l,f),0<m.length&&(l.i=null,l.g.set(ss(l,f),R(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var E=f[m];const M=encodeURIComponent(String(E)),U=this.V(E);for(E=0;E<U.length;E++){var O=M;U[E]!==""&&(O+="="+encodeURIComponent(String(U[E]))),l.push(O)}}return this.i=l.join("&")};function ss(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function VS(l,f){f&&!l.j&&(yr(l),l.i=null,l.g.forEach(function(m,E){var O=E.toLowerCase();E!=O&&(k0(this,E),P0(this,O,m))},l)),l.j=f}function FS(l,f){const m=new wo;if(a.Image){const E=new Image;E.onload=_(vr,m,"TestLoadImage: loaded",!0,f,E),E.onerror=_(vr,m,"TestLoadImage: error",!1,f,E),E.onabort=_(vr,m,"TestLoadImage: abort",!1,f,E),E.ontimeout=_(vr,m,"TestLoadImage: timeout",!1,f,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function zS(l,f){const m=new wo,E=new AbortController,O=setTimeout(()=>{E.abort(),vr(m,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(M=>{clearTimeout(O),M.ok?vr(m,"TestPingServer: ok",!0,f):vr(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),vr(m,"TestPingServer: error",!1,f)})}function vr(l,f,m,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(m)}catch{}}function US(){this.g=new xS}function $S(l,f,m){const E=m||"";try{S0(l,function(O,M){let U=O;c(O)&&(U=qd(O)),f.push(E+M+"="+encodeURIComponent(U))})}catch(O){throw f.push(E+"type="+encodeURIComponent("_badmap")),O}}function Io(l){this.l=l.Ub||null,this.j=l.eb||!1}S(Io,Kd),Io.prototype.g=function(){return new Sl(this.l,this.j)},Io.prototype.i=function(l){return function(){return l}}({});function Sl(l,f){it.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Sl,it),t=Sl.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Ro(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Co(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ro(this)),this.g&&(this.readyState=3,Ro(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;b0(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function b0(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Co(this):Ro(this),this.readyState==3&&b0(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Co(this))},t.Qa=function(l){this.g&&(this.response=l,Co(this))},t.ga=function(){this.g&&Co(this)};function Co(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ro(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=f.next();return l.join(`\r
`)};function Ro(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Sl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function N0(l){let f="";return L(l,function(m,E){f+=E,f+=":",f+=m,f+=`\r
`}),f}function rh(l,f,m){e:{for(E in m){var E=!1;break e}E=!0}E||(m=N0(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):me(l,f,m))}function ke(l){it.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ke,it);var BS=/^https?$/i,WS=["POST","PUT"];t=ke.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,m,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yd.g(),this.v=this.o?a0(this.o):a0(Yd),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(M){O0(this,M);return}if(l=m||"",m=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)m.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const M of E.keys())m.set(M,E.get(M));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(WS,f,void 0))||E||O||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,U]of m)this.g.setRequestHeader(M,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{L0(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){O0(this,M)}};function O0(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,D0(l),Il(l)}function D0(l){l.A||(l.A=!0,gt(l,"complete"),gt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,gt(this,"complete"),gt(this,"abort"),Il(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Il(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?j0(this):this.bb())},t.bb=function(){j0(this)};function j0(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Bn(l)!=4||l.Z()!=2)){if(l.u&&Bn(l)==4)r0(l.Ea,0,l);else if(gt(l,"readystatechange"),Bn(l)==4){l.h=!1;try{const U=l.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var E;if(E=U===0){var O=String(l.D).match(I0)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),E=!BS.test(O?O.toLowerCase():"")}m=E}if(m)gt(l,"complete"),gt(l,"success");else{l.m=6;try{var M=2<Bn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",D0(l)}}finally{Il(l)}}}}function Il(l,f){if(l.g){L0(l);const m=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||gt(l,"ready");try{m.onreadystatechange=E}catch{}}}function L0(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Bn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),TS(f)}};function M0(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function HS(l){const f={};l=(l.g&&2<=Bn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(w(l[E]))continue;var m=k(l[E]);const O=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=f[O]||[];f[O]=M,M.push(m)}y(f,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ko(l,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||f}function V0(l){this.Aa=0,this.i=[],this.j=new wo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ko("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ko("baseRetryDelayMs",5e3,l),this.cb=ko("retryDelaySeedMs",1e4,l),this.Wa=ko("forwardChannelMaxRetries",2,l),this.wa=ko("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new _0(l&&l.concurrentRequestLimit),this.Da=new US,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=V0.prototype,t.la=8,t.G=1,t.connect=function(l,f,m,E){yt(0),this.W=l,this.H=f||{},m&&E!==void 0&&(this.H.OSID=m,this.H.OAID=E),this.F=this.X,this.I=K0(this,null,this.W),Rl(this)};function ih(l){if(F0(l),l.G==3){var f=l.U++,m=$n(l.I);if(me(m,"SID",l.K),me(m,"RID",f),me(m,"TYPE","terminate"),Ao(l,m),f=new gr(l,l.j,f),f.L=2,f.v=xl($n(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=G0(f.j,null),f.g.ea(f.v)),f.F=Date.now(),wl(f)}q0(l)}function Cl(l){l.g&&(oh(l),l.g.cancel(),l.g=null)}function F0(l){Cl(l),l.u&&(a.clearTimeout(l.u),l.u=null),kl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Rl(l){if(!w0(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ot||Q(),$||(Ot(),$=!0),q.add(f,l),l.B=0}}function qS(l,f){return E0(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=_o(g(l.Ga,l,f),H0(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new gr(this,this.j,l);let M=this.o;if(this.S&&(M?(M=v(M),C(M,this.S)):M=this.S),this.m!==null||this.O||(O.H=M,M=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var E=this.i[m];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=U0(this,O,f),m=$n(this.I),me(m,"RID",l),me(m,"CVER",22),this.D&&me(m,"X-HTTP-Session-Id",this.D),Ao(this,m),M&&(this.O?f="headers="+encodeURIComponent(String(N0(M)))+"&"+f:this.m&&rh(m,this.m,M)),nh(this.h,O),this.Ua&&me(m,"TYPE","init"),this.P?(me(m,"$req",f),me(m,"SID","null"),O.T=!0,Jd(O,m,null)):Jd(O,m,f),this.G=2}}else this.G==3&&(l?z0(this,l):this.i.length==0||w0(this.h)||z0(this))};function z0(l,f){var m;f?m=f.l:m=l.U++;const E=$n(l.I);me(E,"SID",l.K),me(E,"RID",m),me(E,"AID",l.T),Ao(l,E),l.m&&l.o&&rh(E,l.m,l.o),m=new gr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),f&&(l.i=f.D.concat(l.i)),f=U0(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),nh(l.h,m),Jd(m,E,f)}function Ao(l,f){l.H&&L(l.H,function(m,E){me(f,E,m)}),l.l&&S0({},function(m,E){me(f,E,m)})}function U0(l,f,m){m=Math.min(l.i.length,m);var E=l.l?g(l.l.Na,l.l,l):null;e:{var O=l.i;let M=-1;for(;;){const U=["count="+m];M==-1?0<m?(M=O[0].g,U.push("ofs="+M)):M=0:U.push("ofs="+M);let he=!0;for(let Ge=0;Ge<m;Ge++){let oe=O[Ge].g;const st=O[Ge].map;if(oe-=M,0>oe)M=Math.max(0,O[Ge].g-100),he=!1;else try{$S(st,U,"req"+oe+"_")}catch{E&&E(st)}}if(he){E=U.join("&");break e}}}return l=l.i.splice(0,m),f.D=l,E}function $0(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ot||Q(),$||(Ot(),$=!0),q.add(f,l),l.v=0}}function sh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=_o(g(l.Fa,l),H0(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,B0(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=_o(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),Cl(this),B0(this))};function oh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function B0(l){l.g=new gr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=$n(l.qa);me(f,"RID","rpc"),me(f,"SID",l.K),me(f,"AID",l.T),me(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&me(f,"TO",l.ja),me(f,"TYPE","xmlhttp"),Ao(l,f),l.m&&l.o&&rh(f,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=xl($n(f)),m.m=null,m.P=!0,g0(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Cl(this),sh(this),yt(19))};function kl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function W0(l,f){var m=null;if(l.g==f){kl(l),oh(l),l.g=null;var E=2}else if(th(l.h,f))m=f.D,T0(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var O=l.B;E=yl(),gt(E,new h0(E,m)),Rl(l)}else $0(l);else if(O=f.s,O==3||O==0&&0<f.X||!(E==1&&qS(l,f)||E==2&&sh(l)))switch(m&&0<m.length&&(f=l.h,f.i=f.i.concat(m)),O){case 1:mi(l,5);break;case 4:mi(l,10);break;case 3:mi(l,6);break;default:mi(l,2)}}}function H0(l,f){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*f}function mi(l,f){if(l.j.info("Error code "+f),f==2){var m=g(l.fb,l),E=l.Xa;const O=!E;E=new pi(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||El(E,"https"),xl(E),O?FS(E.toString(),m):zS(E.toString(),m)}else yt(2);l.G=0,l.l&&l.l.sa(f),q0(l),F0(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function q0(l){if(l.G=0,l.ka=[],l.l){const f=x0(l.h);(f.length!=0||l.i.length!=0)&&(P(l.ka,f),P(l.ka,l.i),l.h.i.length=0,R(l.i),l.i.length=0),l.l.ra()}}function K0(l,f,m){var E=m instanceof pi?$n(m):new pi(m);if(E.g!="")f&&(E.g=f+"."+E.g),Tl(E,E.s);else{var O=a.location;E=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var M=new pi(null);E&&El(M,E),f&&(M.g=f),O&&Tl(M,O),m&&(M.l=m),E=M}return m=l.D,f=l.ya,m&&f&&me(E,m,f),me(E,"VER",l.la),Ao(l,E),E}function G0(l,f,m){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new ke(new Io({eb:m})):new ke(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Q0(){}t=Q0.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Al(){}Al.prototype.g=function(l,f){return new jt(l,f)};function jt(l,f){it.call(this),this.g=new V0(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!w(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!w(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new os(this)}S(jt,it),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){ih(this.g)},jt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=qd(l),l=m);f.i.push(new AS(f.Ya++,l)),f.G==3&&Rl(f)},jt.prototype.N=function(){this.g.l=null,delete this.j,ih(this.g),delete this.g,jt.aa.N.call(this)};function Y0(l){Gd.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const m in f){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}S(Y0,Gd);function X0(){Qd.call(this),this.status=1}S(X0,Qd);function os(l){this.g=l}S(os,Q0),os.prototype.ua=function(){gt(this.g,"a")},os.prototype.ta=function(l){gt(this.g,new Y0(l))},os.prototype.sa=function(l){gt(this.g,new X0)},os.prototype.ra=function(){gt(this.g,"b")},Al.prototype.createWebChannel=Al.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,TT=function(){return new Al},ET=function(){return yl()},wT=hi,_p={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vl.NO_ERROR=0,vl.TIMEOUT=8,vl.HTTP_ERROR=6,bu=vl,f0.COMPLETE="complete",_T=f0,l0.EventType=yo,yo.OPEN="a",yo.CLOSE="b",yo.ERROR="c",yo.MESSAGE="d",it.prototype.listen=it.prototype.K,Ko=l0,vT=Io,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,yT=ke}).apply(typeof Jl<"u"?Jl:typeof self<"u"?self:typeof window<"u"?window:{});const fv="@firebase/firestore";/**
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
 */let ho="10.13.1";/**
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
 */const Bi=new Hm("@firebase/firestore");function Vo(){return Bi.logLevel}function H(t,...e){if(Bi.logLevel<=re.DEBUG){const n=e.map(sg);Bi.debug(`Firestore (${ho}): ${t}`,...n)}}function dr(t,...e){if(Bi.logLevel<=re.ERROR){const n=e.map(sg);Bi.error(`Firestore (${ho}): ${t}`,...n)}}function Js(t,...e){if(Bi.logLevel<=re.WARN){const n=e.map(sg);Bi.warn(`Firestore (${ho}): ${t}`,...n)}}function sg(t){if(typeof t=="string")return t;try{/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${ho}) INTERNAL ASSERTION FAILED: `+t;throw dr(e),new Error(e)}function fe(t,e){t||Y()}function J(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class UA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $A{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Kr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new xT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new ct(e)}}class BA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class WA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new BA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new HA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function KA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ST{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=KA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Zs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class La{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return La.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof La?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends La{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const GA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends La{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return GA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ve.fromString(e))}static fromName(e){return new K(ve.fromString(e).popFirst(5))}static empty(){return new K(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ve(e.slice()))}}function QA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new Zr(i,K.empty(),e)}function YA(t){return new Zr(t.readTime,t.key,-1)}class Zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zr(X.min(),K.empty(),-1)}static max(){return new Zr(X.max(),K.empty(),-1)}}function XA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const JA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ll(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==JA)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function eP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ul(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class og{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}og.oe=-1;function Ed(t){return t==null}function Rc(t){return t===0&&1/t==-1/0}function tP(t){return typeof t=="number"&&Number.isInteger(t)&&!Rc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function pv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function IT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Re{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zl(this.root,e,this.comparator,!0)}}class Zl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Je.RED,this.left=i??Je.EMPTY,this.right=s??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mv(this.data.getIterator())}getIteratorFrom(e){return new mv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class mv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mn{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new mn([])}unionWith(e){let n=new tt(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class CT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new CT("Invalid base64 string: "+s):s}}(e);return new rt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const nP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ei(t){if(fe(!!t),typeof t=="string"){let e=0;const n=nP.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wi(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
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
 */function ag(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lg(t){const e=t.mapValue.fields.__previous_value__;return ag(e)?lg(e):e}function Ma(t){const e=ei(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */class rP{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Va{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Va("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Va&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const eu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ag(t)?4:sP(t)?9007199254740991:iP(t)?10:11:Y()}function jn(t,e){if(t===e)return!0;const n=Hi(t);if(n!==Hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ma(t).isEqual(Ma(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ei(i.timestampValue),a=ei(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Wi(i.bytesValue).isEqual(Wi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Oe(i.doubleValue),a=Oe(s.doubleValue);return o===a?Rc(o)===Rc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Zs(t.arrayValue.values||[],e.arrayValue.values||[],jn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(pv(o)!==pv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!jn(o[u],a[u])))return!1;return!0}(t,e);default:return Y()}}function Fa(t,e){return(t.values||[]).find(n=>jn(n,e))!==void 0}function eo(t,e){if(t===e)return 0;const n=Hi(t),r=Hi(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Oe(s.integerValue||s.doubleValue),u=Oe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return gv(t.timestampValue,e.timestampValue);case 4:return gv(Ma(t),Ma(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Wi(s),u=Wi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=ae(a[c],u[c]);if(h!==0)return h}return ae(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ae(Oe(s.latitude),Oe(o.latitude));return a!==0?a:ae(Oe(s.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return yv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const p=s.fields||{},g=o.fields||{},_=(a=p.value)===null||a===void 0?void 0:a.arrayValue,S=(u=g.value)===null||u===void 0?void 0:u.arrayValue,R=ae(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0);return R!==0?R:yv(_,S)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===eu.mapValue&&o===eu.mapValue)return 0;if(s===eu.mapValue)return 1;if(o===eu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const g=ae(u[p],h[p]);if(g!==0)return g;const _=eo(a[u[p]],c[h[p]]);if(_!==0)return _}return ae(u.length,h.length)}(t.mapValue,e.mapValue);default:throw Y()}}function gv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=ei(t),r=ei(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function yv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=eo(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function to(t){return wp(t)}function wp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ei(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Wi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=wp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${wp(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function vv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ep(t){return!!t&&"integerValue"in t}function ug(t){return!!t&&"arrayValue"in t}function _v(t){return!!t&&"nullValue"in t}function wv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nu(t){return!!t&&"mapValue"in t}function iP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ua(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ua(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ua(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Nu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ua(n)}setAll(e){let n=Ze.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ua(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Nu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Nu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){fo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Jt(ua(this.value))}}function RT(t){const e=[];return fo(t.fields,(n,r)=>{const i=new Ze([n]);if(Nu(r)){const s=RT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new mn(e)}/**
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
 */class kc{constructor(e,n){this.position=e,this.inclusive=n}}function Ev(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=eo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ac{constructor(e,n="asc"){this.field=e,this.dir=n}}function oP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class kT{}class ze extends kT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new lP(e,n,r):n==="array-contains"?new dP(e,r):n==="in"?new hP(e,r):n==="not-in"?new fP(e,r):n==="array-contains-any"?new pP(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new uP(e,r):new cP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(eo(n,this.value)):n!==null&&Hi(this.value)===Hi(n)&&this.matchesComparison(eo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends kT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new xn(e,n)}matches(e){return AT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function AT(t){return t.op==="and"}function PT(t){return aP(t)&&AT(t)}function aP(t){for(const e of t.filters)if(e instanceof xn)return!1;return!0}function Tp(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+to(t.value);if(PT(t))return t.filters.map(e=>Tp(e)).join(",");{const e=t.filters.map(n=>Tp(n)).join(",");return`${t.op}(${e})`}}function bT(t,e){return t instanceof ze?function(r,i){return i instanceof ze&&r.op===i.op&&r.field.isEqual(i.field)&&jn(r.value,i.value)}(t,e):t instanceof xn?function(r,i){return i instanceof xn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&bT(o,i.filters[a]),!0):!1}(t,e):void Y()}function NT(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${to(n.value)}`}(t):t instanceof xn?function(n){return n.op.toString()+" {"+n.getFilters().map(NT).join(" ,")+"}"}(t):"Filter"}class lP extends ze{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class uP extends ze{constructor(e,n){super(e,"in",n),this.keys=OT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cP extends ze{constructor(e,n){super(e,"not-in",n),this.keys=OT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function OT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class dP extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ug(n)&&Fa(n.arrayValue,this.value)}}class hP extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fa(this.value.arrayValue,n)}}class fP extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fa(this.value.arrayValue,n)}}class pP extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ug(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fa(this.value.arrayValue,r))}}/**
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
 */class mP{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function xv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new mP(t,e,n,r,i,s,o)}function cg(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Tp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ed(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>to(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>to(r)).join(",")),e.ue=n}return e.ue}function dg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!oP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tv(t.startAt,e.startAt)&&Tv(t.endAt,e.endAt)}function xp(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class cl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function gP(t,e,n,r,i,s,o,a){return new cl(t,e,n,r,i,s,o,a)}function hg(t){return new cl(t)}function Sv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function DT(t){return t.collectionGroup!==null}function ca(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new tt(Ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ac(s,r))}),n.has(Ze.keyField().canonicalString())||e.ce.push(new Ac(Ze.keyField(),r))}return e.ce}function On(t){const e=J(t);return e.le||(e.le=yP(e,ca(t))),e.le}function yP(t,e){if(t.limitType==="F")return xv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ac(i.field,s)});const n=t.endAt?new kc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new kc(t.startAt.position,t.startAt.inclusive):null;return xv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Sp(t,e){const n=t.filters.concat([e]);return new cl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ip(t,e,n){return new cl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Td(t,e){return dg(On(t),On(e))&&t.limitType===e.limitType}function jT(t){return`${cg(On(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>NT(i)).join(", ")}]`),Ed(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>to(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>to(i)).join(",")),`Target(${r})`}(On(t))}; limitType=${t.limitType})`}function xd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ca(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Ev(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,ca(r),i)||r.endAt&&!function(o,a,u){const c=Ev(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,ca(r),i))}(t,e)}function vP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function LT(t){return(e,n)=>{let r=!1;for(const i of ca(t)){const s=_P(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function _P(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?eo(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class po{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return IT(this.inner)}size(){return this.innerSize}}/**
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
 */const wP=new Re(K.comparator);function hr(){return wP}const MT=new Re(K.comparator);function Go(...t){let e=MT;for(const n of t)e=e.insert(n.key,n);return e}function VT(t){let e=MT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ki(){return da()}function FT(){return da()}function da(){return new po(t=>t.toString(),(t,e)=>t.isEqual(e))}const EP=new Re(K.comparator),TP=new tt(K.comparator);function ne(...t){let e=TP;for(const n of t)e=e.add(n);return e}const xP=new tt(ae);function SP(){return xP}/**
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
 */function fg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rc(e)?"-0":e}}function zT(t){return{integerValue:""+t}}function IP(t,e){return tP(e)?zT(e):fg(t,e)}/**
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
 */class Sd{constructor(){this._=void 0}}function CP(t,e,n){return t instanceof Pc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ag(s)&&(s=lg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof za?$T(t,e):t instanceof Ua?BT(t,e):function(i,s){const o=UT(i,s),a=Iv(o)+Iv(i.Pe);return Ep(o)&&Ep(i.Pe)?zT(a):fg(i.serializer,a)}(t,e)}function RP(t,e,n){return t instanceof za?$T(t,e):t instanceof Ua?BT(t,e):n}function UT(t,e){return t instanceof bc?function(r){return Ep(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Pc extends Sd{}class za extends Sd{constructor(e){super(),this.elements=e}}function $T(t,e){const n=WT(e);for(const r of t.elements)n.some(i=>jn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ua extends Sd{constructor(e){super(),this.elements=e}}function BT(t,e){let n=WT(e);for(const r of t.elements)n=n.filter(i=>!jn(i,r));return{arrayValue:{values:n}}}class bc extends Sd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Iv(t){return Oe(t.integerValue||t.doubleValue)}function WT(t){return ug(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function kP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof za&&i instanceof za||r instanceof Ua&&i instanceof Ua?Zs(r.elements,i.elements,jn):r instanceof bc&&i instanceof bc?jn(r.Pe,i.Pe):r instanceof Pc&&i instanceof Pc}(t.transform,e.transform)}class AP{constructor(e,n){this.version=e,this.transformResults=n}}class tr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tr}static exists(e){return new tr(void 0,e)}static updateTime(e){return new tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ou(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Id{}function HT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new KT(t.key,tr.none()):new dl(t.key,t.data,tr.none());{const n=t.data,r=Jt.empty();let i=new tt(Ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new es(t.key,r,new mn(i.toArray()),tr.none())}}function PP(t,e,n){t instanceof dl?function(i,s,o){const a=i.value.clone(),u=Rv(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof es?function(i,s,o){if(!Ou(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Rv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(qT(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ha(t,e,n,r){return t instanceof dl?function(s,o,a,u){if(!Ou(s.precondition,o))return a;const c=s.value.clone(),h=kv(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof es?function(s,o,a,u){if(!Ou(s.precondition,o))return a;const c=kv(s.fieldTransforms,u,o),h=o.data;return h.setAll(qT(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return Ou(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function bP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=UT(r.transform,i||null);s!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,s))}return n||null}function Cv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zs(r,i,(s,o)=>kP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class dl extends Id{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class es extends Id{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Rv(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,RP(o,a,n[i]))}return r}function kv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,CP(s,o,e))}return r}class KT extends Id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NP extends Id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class OP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&PP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ha(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ha(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=FT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=HT(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Zs(this.mutations,e.mutations,(n,r)=>Cv(n,r))&&Zs(this.baseMutations,e.baseMutations,(n,r)=>Cv(n,r))}}class pg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=function(){return EP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new pg(e,n,r,i)}}/**
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
 */class DP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class jP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Me,ie;function LP(t){switch(t){default:return Y();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function GT(t){if(t===void 0)return dr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Me.OK:return V.OK;case Me.CANCELLED:return V.CANCELLED;case Me.UNKNOWN:return V.UNKNOWN;case Me.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Me.INTERNAL:return V.INTERNAL;case Me.UNAVAILABLE:return V.UNAVAILABLE;case Me.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Me.NOT_FOUND:return V.NOT_FOUND;case Me.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Me.ABORTED:return V.ABORTED;case Me.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Me.DATA_LOSS:return V.DATA_LOSS;default:return Y()}}(ie=Me||(Me={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function MP(){return new TextEncoder}/**
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
 */const VP=new Oi([4294967295,4294967295],0);function Av(t){const e=MP().encode(t),n=new gT;return n.update(e),new Uint8Array(n.digest())}function Pv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Oi([n,r],0),new Oi([i,s],0)]}class mg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qo(`Invalid padding: ${n}`);if(r<0)throw new Qo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Oi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Oi.fromNumber(r)));return i.compare(VP)===1&&(i=new Oi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Av(e),[r,i]=Pv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new mg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Av(e),[r,i]=Pv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Cd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,hl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Cd(X.min(),i,new Re(ae),hr(),ne())}}class hl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new hl(r,n,ne(),ne(),ne())}}/**
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
 */class Du{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class QT{constructor(e,n){this.targetId=e,this.me=n}}class YT{constructor(e,n,r=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class bv{constructor(){this.fe=0,this.ge=Ov(),this.pe=rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new hl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ov()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class FP{constructor(e){this.Le=e,this.Be=new Map,this.ke=hr(),this.qe=Nv(),this.Qe=new Re(ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(xp(s))if(r===0){const o=new K(s.path);this.Ue(n,o,ht.newNoDocument(o,X.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Wi(r).toUint8Array()}catch(u){if(u instanceof CT)return Js("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new mg(o,i,s)}catch(u){return Js(u instanceof Qo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&xp(a.target)){const u=new K(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ht.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Cd(e,n,this.Qe,this.ke,r);return this.ke=hr(),this.qe=Nv(),this.Qe=new Re(ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new bv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new tt(ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Nv(){return new Re(K.comparator)}function Ov(){return new Re(K.comparator)}const zP={asc:"ASCENDING",desc:"DESCENDING"},UP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$P={and:"AND",or:"OR"};class BP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cp(t,e){return t.useProto3Json||Ed(e)?e:{value:e}}function Nc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function XT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function WP(t,e){return Nc(t,e.toTimestamp())}function Dn(t){return fe(!!t),X.fromTimestamp(function(n){const r=ei(n);return new Le(r.seconds,r.nanos)}(t))}function gg(t,e){return Rp(t,e).canonicalString()}function Rp(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function JT(t){const e=ve.fromString(t);return fe(rx(e)),e}function kp(t,e){return gg(t.databaseId,e.path)}function qh(t,e){const n=JT(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(ex(n))}function ZT(t,e){return gg(t.databaseId,e)}function HP(t){const e=JT(t);return e.length===4?ve.emptyPath():ex(e)}function Ap(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ex(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Dv(t,e,n){return{name:kp(t,e),fields:n.value.mapValue.fields}}function qP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(fe(h===void 0||typeof h=="string"),rt.fromBase64String(h||"")):(fe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),rt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?V.UNKNOWN:GT(c.code);return new W(h,c.message||"")}(o);n=new YT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qh(t,r.document.name),s=Dn(r.document.updateTime),o=r.document.createTime?Dn(r.document.createTime):X.min(),a=new Jt({mapValue:{fields:r.document.fields}}),u=ht.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Du(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qh(t,r.document),s=r.readTime?Dn(r.readTime):X.min(),o=ht.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Du([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qh(t,r.document),s=r.removedTargetIds||[];n=new Du([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new jP(i,s),a=r.targetId;n=new QT(a,o)}}return n}function KP(t,e){let n;if(e instanceof dl)n={update:Dv(t,e.key,e.value)};else if(e instanceof KT)n={delete:kp(t,e.key)};else if(e instanceof es)n={update:Dv(t,e.key,e.data),updateMask:nb(e.fieldMask)};else{if(!(e instanceof NP))return Y();n={verify:kp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Pc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof za)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ua)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof bc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:WP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function GP(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Dn(i.updateTime):Dn(s);return o.isEqual(X.min())&&(o=Dn(s)),new AP(o,i.transformResults||[])}(n,e))):[]}function QP(t,e){return{documents:[ZT(t,e.path)]}}function YP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ZT(t,i);const s=function(c){if(c.length!==0)return nx(xn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(g){return{field:ds(g.field),direction:ZP(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Cp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function XP(t){let e=HP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(p){const g=tx(p);return g instanceof xn&&PT(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(S){return new Ac(hs(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(p){let g;return g=typeof p=="object"?p.value:p,Ed(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,_=p.values||[];return new kc(_,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,_=p.values||[];return new kc(_,g)}(n.endAt)),gP(e,i,o,s,a,"F",u,c)}function JP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function tx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hs(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=hs(n.unaryFilter.field);return ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=hs(n.unaryFilter.field);return ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hs(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return ze.create(hs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xn.create(n.compositeFilter.filters.map(r=>tx(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function ZP(t){return zP[t]}function eb(t){return UP[t]}function tb(t){return $P[t]}function ds(t){return{fieldPath:t.canonicalString()}}function hs(t){return Ze.fromServerFormat(t.fieldPath)}function nx(t){return t instanceof ze?function(n){if(n.op==="=="){if(wv(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NAN"}};if(_v(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wv(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NOT_NAN"}};if(_v(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ds(n.field),op:eb(n.op),value:n.value}}}(t):t instanceof xn?function(n){const r=n.getFilters().map(i=>nx(i));return r.length===1?r[0]:{compositeFilter:{op:tb(n.op),filters:r}}}(t):Y()}function nb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class jr{constructor(e,n,r,i,s=X.min(),o=X.min(),a=rt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class rb{constructor(e){this.ct=e}}function ib(t){const e=XP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ip(e,e.limit,"L"):e}/**
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
 */class sb{constructor(){this.un=new ob}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Zr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Zr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class ob{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new tt(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new tt(ve.comparator)).toArray()}}/**
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
 */class no{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new no(0)}static kn(){return new no(-1)}}/**
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
 */class ab{constructor(){this.changes=new po(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class lb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ub{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ha(r.mutation,i,mn.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=ki();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Go();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ki();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=hr();const o=da(),a=function(){return da()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof es)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),ha(h.mutation,c,h.mutation.getFieldMask(),Le.now())):o.set(c.key,mn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var p;return a.set(c,new lb(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=da();let i=new Re((o,a)=>o-a),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||mn.empty();h=a.applyToLocalView(c,h),r.set(u,h);const p=(i.get(a.batchId)||ne()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,p=FT();h.forEach(g=>{if(!s.has(g)){const _=HT(n.get(g),r.get(g));_!==null&&p.set(g,_),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):DT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(ki());let a=-1,u=s;return o.next(c=>F.forEach(c,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(h=>({batchId:a,changes:VT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Go();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Go();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(p,g){return new cl(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,ht.newInvalidDocument(h)))});let a=Go();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&ha(h.mutation,c,mn.empty(),Le.now()),xd(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class cb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Dn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:ib(i.bundledQuery),readTime:Dn(i.readTime)}}(n)),F.resolve()}}/**
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
 */class db{constructor(){this.overlays=new Re(K.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ki();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=ki(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Re((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=ki(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=ki(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new DP(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class hb{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class yg{constructor(){this.Tr=new tt(We.Er),this.dr=new tt(We.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new We(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new We(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new ve([])),r=new We(n,e),i=new We(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new ve([])),r=new We(n,e),i=new We(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new We(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ae(e.wr,n.wr)}static Ar(e,n){return ae(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class fb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new tt(We.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new OP(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new We(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),i=new We(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(ae);return n.forEach(i=>{const s=new We(i,0),o=new We(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new We(new K(s),0);let a=new tt(ae);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new We(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new We(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class pb{constructor(e){this.Mr=e,this.docs=function(){return new Re(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=hr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ht.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=hr();const o=n.path,a=new K(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||XA(YA(h),r)<=0||(i.has(h.key)||xd(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new mb(this)}getSize(e){return F.resolve(this.size)}}class mb extends ab{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class gb{constructor(e){this.persistence=e,this.Nr=new po(n=>cg(n),dg),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new yg,this.targetCount=0,this.kr=no.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new no(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
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
 */class yb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new og(0),this.Kr=!1,this.Kr=!0,this.$r=new hb,this.referenceDelegate=e(this),this.Ur=new gb(this),this.indexManager=new sb,this.remoteDocumentCache=function(i){return new pb(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new rb(n),this.Gr=new cb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new db,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new fb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new vb(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class vb extends ZA{constructor(e){super(),this.currentSequenceNumber=e}}class vg{constructor(e){this.persistence=e,this.Jr=new yg,this.Yr=null}static Zr(e){return new vg(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class _g{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _g(e,n.fromCache,r,i)}}/**
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
 */class _b{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class wb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return c6()?8:eP(pt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new _b;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Vo()<=re.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Vo()<=re.DEBUG&&H("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Vo()<=re.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(n))):F.resolve())}Yi(e,n){if(Sv(n))return F.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ip(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Ip(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Sv(n)||i.isEqual(X.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(Vo()<=re.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),cs(n)),this.rs(e,o,n,QA(i,-1)).next(a=>a))})}ts(e,n){let r=new tt(LT(e));return n.forEach((i,s)=>{xd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Vo()<=re.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",cs(n)),this.Ji.getDocumentsMatchingQuery(e,n,Zr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Eb{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Re(ae),this._s=new po(s=>cg(s),dg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ub(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Tb(t,e,n,r){return new Eb(t,e,n,r)}async function ix(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ne();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function xb(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const p=c.batch,g=p.keys();let _=F.resolve();return g.forEach(S=>{_=_.next(()=>h.getEntry(u,S)).next(R=>{const P=c.docVersions.get(S);fe(P!==null),R.version.compareTo(P)<0&&(p.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),h.addEntry(R)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ne();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function sx(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Sb(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,p)=>{const g=i.get(p);if(!g)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,p)));let _=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(rt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),i=i.insert(p,_),function(R,P,x){return R.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,_,h)&&a.push(n.Ur.updateTargetData(s,_))});let u=hr(),c=ne();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(Ib(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(X.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function Ib(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=hr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function Cb(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Rb(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new jr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Pp(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ul(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function jv(t,e,n){const r=J(t);let i=X.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const p=J(u),g=p._s.get(h);return g!==void 0?F.resolve(p.os.get(g)):p.Ur.getTargetData(c,h)}(r,o,On(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ne())).next(a=>(kb(r,vP(e),a),{documents:a,Ts:s})))}function kb(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Lv{constructor(){this.activeTargetIds=SP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ab{constructor(){this.so=new Lv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Lv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Pb{_o(e){}shutdown(){}}/**
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
 */class Mv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let tu=null;function Kh(){return tu===null?tu=function(){return 268435456+Math.round(2147483648*Math.random())}():tu++,"0x"+tu.toString(16)}/**
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
 */const bb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Nb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ut="WebChannelConnection";class Ob extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Kh(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(H("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Js("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ho}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=bb[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Kh();return new Promise((o,a)=>{const u=new yT;u.setWithCredentials(!0),u.listenOnce(_T.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case bu.NO_ERROR:const h=u.getResponseJson();H(ut,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case bu.TIMEOUT:H(ut,`RPC '${e}' ${s} timed out`),a(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case bu.HTTP_ERROR:const p=u.getStatus();if(H(ut,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const S=function(P){const x=P.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(x)>=0?x:V.UNKNOWN}(_.status);a(new W(S,_.message))}else a(new W(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new W(V.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{H(ut,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(ut,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Kh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=TT(),a=ET(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new vT({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");H(ut,`Creating RPC '${e}' stream ${i}: ${h}`,u);const p=o.createWebChannel(h,u);let g=!1,_=!1;const S=new Nb({Io:P=>{_?H(ut,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(g||(H(ut,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),H(ut,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},To:()=>p.close()}),R=(P,x,w)=>{P.listen(x,T=>{try{w(T)}catch(b){setTimeout(()=>{throw b},0)}})};return R(p,Ko.EventType.OPEN,()=>{_||(H(ut,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),R(p,Ko.EventType.CLOSE,()=>{_||(_=!0,H(ut,`RPC '${e}' stream ${i} transport closed`),S.So())}),R(p,Ko.EventType.ERROR,P=>{_||(_=!0,Js(ut,`RPC '${e}' stream ${i} transport errored:`,P),S.So(new W(V.UNAVAILABLE,"The operation could not be completed")))}),R(p,Ko.EventType.MESSAGE,P=>{var x;if(!_){const w=P.data[0];fe(!!w);const T=w,b=T.error||((x=T[0])===null||x===void 0?void 0:x.error);if(b){H(ut,`RPC '${e}' stream ${i} received error:`,b);const j=b.status;let L=function(I){const C=Me[I];if(C!==void 0)return GT(C)}(j),y=b.message;L===void 0&&(L=V.INTERNAL,y="Unknown error status: "+j+" with message "+b.message),_=!0,S.So(new W(L,y)),p.close()}else H(ut,`RPC '${e}' stream ${i} received:`,w),S.bo(w)}}),R(a,wT.STAT_EVENT,P=>{P.stat===_p.PROXY?H(ut,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===_p.NOPROXY&&H(ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Gh(){return typeof document<"u"?document:null}/**
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
 */function Rd(t){return new BP(t,!0)}/**
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
 */class ox{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class ax{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ox(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(dr(n.toString()),dr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Db extends ax{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=qP(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Dn(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ap(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=xp(u)?{documents:QP(s,u)}:{query:YP(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=XT(s,o.resumeToken);const c=Cp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Nc(s,o.snapshotVersion.toTimestamp());const c=Cp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=JP(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ap(this.serializer),n.removeTarget=e,this.a_(n)}}class jb extends ax{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return fe(!!e.streamToken),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=GP(e.writeResults,e.commitTime),r=Dn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ap(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>KP(this.serializer,r))};this.a_(n)}}/**
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
 */class Lb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Rp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Rp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Mb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(dr(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Vb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ts(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.L_.add(4),await fl(c),c.q_.set("Unknown"),c.L_.delete(4),await kd(c)}(this))})}),this.q_=new Mb(r,i)}}async function kd(t){if(ts(t))for(const e of t.B_)await e(!0)}async function fl(t){for(const e of t.B_)await e(!1)}function lx(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),xg(n)?Tg(n):mo(n).r_()&&Eg(n,e))}function wg(t,e){const n=J(t),r=mo(n);n.N_.delete(e),r.r_()&&ux(n,e),n.N_.size===0&&(r.r_()?r.o_():ts(n)&&n.q_.set("Unknown"))}function Eg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}mo(t).A_(e)}function ux(t,e){t.Q_.xe(e),mo(t).R_(e)}function Tg(t){t.Q_=new FP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),mo(t).start(),t.q_.v_()}function xg(t){return ts(t)&&!mo(t).n_()&&t.N_.size>0}function ts(t){return J(t).L_.size===0}function cx(t){t.Q_=void 0}async function Fb(t){t.q_.set("Online")}async function zb(t){t.N_.forEach((e,n)=>{Eg(t,e)})}async function Ub(t,e){cx(t),xg(t)?(t.q_.M_(e),Tg(t)):t.q_.set("Unknown")}async function $b(t,e,n){if(t.q_.set("Online"),e instanceof YT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Oc(t,r)}else if(e instanceof Du?t.Q_.Ke(e):e instanceof QT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await sx(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(rt.EMPTY_BYTE_STRING,h.snapshotVersion)),ux(s,u);const p=new jr(h.target,u,c,h.sequenceNumber);Eg(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Oc(t,r)}}async function Oc(t,e,n){if(!ul(e))throw e;t.L_.add(1),await fl(t),t.q_.set("Offline"),n||(n=()=>sx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await kd(t)})}function dx(t,e){return e().catch(n=>Oc(t,n,e))}async function Ad(t){const e=J(t),n=ti(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Bb(e);)try{const i=await Cb(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Wb(e,i)}catch(i){await Oc(e,i)}hx(e)&&fx(e)}function Bb(t){return ts(t)&&t.O_.length<10}function Wb(t,e){t.O_.push(e);const n=ti(t);n.r_()&&n.V_&&n.m_(e.mutations)}function hx(t){return ts(t)&&!ti(t).n_()&&t.O_.length>0}function fx(t){ti(t).start()}async function Hb(t){ti(t).p_()}async function qb(t){const e=ti(t);for(const n of t.O_)e.m_(n.mutations)}async function Kb(t,e,n){const r=t.O_.shift(),i=pg.from(r,e,n);await dx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ad(t)}async function Gb(t,e){e&&ti(t).V_&&await async function(r,i){if(function(o){return LP(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();ti(r).s_(),await dx(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ad(r)}}(t,e),hx(t)&&fx(t)}async function Vv(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=ts(n);n.L_.add(3),await fl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await kd(n)}async function Qb(t,e){const n=J(t);e?(n.L_.delete(2),await kd(n)):e||(n.L_.add(2),await fl(n),n.q_.set("Unknown"))}function mo(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new Db(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:Fb.bind(null,t),Ro:zb.bind(null,t),mo:Ub.bind(null,t),d_:$b.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),xg(t)?Tg(t):t.q_.set("Unknown")):(await t.K_.stop(),cx(t))})),t.K_}function ti(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new jb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Hb.bind(null,t),mo:Gb.bind(null,t),f_:qb.bind(null,t),g_:Kb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ad(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Sg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Sg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ig(t,e){if(dr("AsyncQueue",`${e}: ${t}`),ul(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class js{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Go(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new js(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Fv{constructor(){this.W_=new Re(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ro{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ro(e,n,js.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Td(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Yb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Xb{constructor(){this.queries=zv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=zv(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function zv(){return new po(t=>jT(t),Td)}async function px(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Yb,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Ig(o,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Cg(n)}async function mx(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Jb(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Cg(n)}function Zb(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Cg(t){t.Y_.forEach(e=>{e.next()})}var bp,Uv;(Uv=bp||(bp={})).ea="default",Uv.Cache="cache";class gx{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ro(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==bp.Cache}}/**
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
 */class yx{constructor(e){this.key=e}}class vx{constructor(e){this.key=e}}class e8{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=LT(e),this.Ra=new js(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Fv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const g=i.get(h),_=xd(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),R=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;g&&_?g.data.isEqual(_.data)?S!==R&&(r.track({type:3,doc:_}),P=!0):this.ga(g,_)||(r.track({type:2,doc:_}),P=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!g&&_?(r.track({type:0,doc:_}),P=!0):g&&!_&&(r.track({type:1,doc:g}),P=!0,(u||c)&&(a=!0)),P&&(_?(o=o.add(_),s=R?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,p)=>function(_,S){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return R(_)-R(S)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new ro(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Fv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new vx(r))}),this.da.forEach(r=>{e.has(r)||n.push(new yx(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ro.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class t8{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class n8{constructor(e){this.key=e,this.va=!1}}class r8{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new po(a=>jT(a),Td),this.Ma=new Map,this.xa=new Set,this.Oa=new Re(K.comparator),this.Na=new Map,this.La=new yg,this.Ba={},this.ka=new Map,this.qa=no.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function i8(t,e,n=!0){const r=Sx(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await _x(r,e,n,!0),i}async function s8(t,e){const n=Sx(t);await _x(n,e,!0,!1)}async function _x(t,e,n,r){const i=await Rb(t.localStore,On(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await o8(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&lx(t.remoteStore,i),a}async function o8(t,e,n,r,i){t.Ka=(p,g,_)=>async function(R,P,x,w){let T=P.view.ma(x);T.ns&&(T=await jv(R.localStore,P.query,!1).then(({documents:y})=>P.view.ma(y,T)));const b=w&&w.targetChanges.get(P.targetId),j=w&&w.targetMismatches.get(P.targetId)!=null,L=P.view.applyChanges(T,R.isPrimaryClient,b,j);return Bv(R,P.targetId,L.wa),L.snapshot}(t,p,g,_);const s=await jv(t.localStore,e,!0),o=new e8(e,s.Ts),a=o.ma(s.documents),u=hl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);Bv(t,n,c.wa);const h=new t8(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function a8(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Td(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Pp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&wg(r.remoteStore,i.targetId),Np(r,i.targetId)}).catch(ll)):(Np(r,i.targetId),await Pp(r.localStore,i.targetId,!0))}async function l8(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),wg(n.remoteStore,r.targetId))}async function u8(t,e,n){const r=g8(t);try{const i=await function(o,a){const u=J(o),c=Le.now(),h=a.reduce((_,S)=>_.add(S.key),ne());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=hr(),R=ne();return u.cs.getEntries(_,h).next(P=>{S=P,S.forEach((x,w)=>{w.isValidDocument()||(R=R.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,S)).next(P=>{p=P;const x=[];for(const w of a){const T=bP(w,p.get(w.key).overlayedDocument);T!=null&&x.push(new es(w.key,T,RT(T.value.mapValue),tr.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,x,a)}).next(P=>{g=P;const x=P.applyToLocalDocumentSet(p,R);return u.documentOverlayCache.saveOverlays(_,P.batchId,x)})}).then(()=>({batchId:g.batchId,changes:VT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Re(ae)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await pl(r,i.changes),await Ad(r.remoteStore)}catch(i){const s=Ig(i,"Failed to persist write");n.reject(s)}}async function wx(t,e){const n=J(t);try{const r=await Sb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?fe(o.va):i.removedDocuments.size>0&&(fe(o.va),o.va=!1))}),await pl(n,r,e)}catch(r){await ll(r)}}function $v(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=J(o);u.onlineState=a;let c=!1;u.queries.forEach((h,p)=>{for(const g of p.j_)g.Z_(a)&&(c=!0)}),c&&Cg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function c8(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Re(K.comparator);o=o.insert(s,ht.newNoDocument(s,X.min()));const a=ne().add(s),u=new Cd(X.min(),new Map,new Re(ae),o,a);await wx(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Rg(r)}else await Pp(r.localStore,e,!1).then(()=>Np(r,e,n)).catch(ll)}async function d8(t,e){const n=J(t),r=e.batch.batchId;try{const i=await xb(n.localStore,e);Tx(n,r,null),Ex(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pl(n,i)}catch(i){await ll(i)}}async function h8(t,e,n){const r=J(t);try{const i=await function(o,a){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(p=>(fe(p!==null),h=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);Tx(r,e,n),Ex(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pl(r,i)}catch(i){await ll(i)}}function Ex(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Tx(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Np(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||xx(t,r)})}function xx(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(wg(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Rg(t))}function Bv(t,e,n){for(const r of n)r instanceof yx?(t.La.addReference(r.key,e),f8(t,r)):r instanceof vx?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||xx(t,r.key)):Y()}function f8(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),Rg(t))}function Rg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(ve.fromString(e)),r=t.qa.next();t.Na.set(r,new n8(n)),t.Oa=t.Oa.insert(n,r),lx(t.remoteStore,new jr(On(hg(n.path)),r,"TargetPurposeLimboResolution",og.oe))}}async function pl(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=_g.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=J(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,g=>F.forEach(g.$i,_=>h.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>F.forEach(g.Ui,_=>h.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!ul(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const _=h.os.get(g),S=_.snapshotVersion,R=_.withLastLimboFreeSnapshotVersion(S);h.os=h.os.insert(g,R)}}}(r.localStore,s))}async function p8(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await ix(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new W(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pl(n,r.hs)}}function m8(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function Sx(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=m8.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=c8.bind(null,e),e.Ca.d_=Jb.bind(null,e.eventManager),e.Ca.$a=Zb.bind(null,e.eventManager),e}function g8(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=d8.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=h8.bind(null,e),e}class Wv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Rd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Tb(this.persistence,new wb,e.initialUser,this.serializer)}createPersistence(e){return new yb(vg.Zr,this.serializer)}createSharedClientState(e){return new Ab}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class y8{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$v(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=p8.bind(null,this.syncEngine),await Qb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Xb}()}createDatastore(e){const n=Rd(e.databaseInfo.databaseId),r=function(s){return new Ob(s)}(e.databaseInfo);return function(s,o,a,u){return new Lb(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new Vb(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>$v(this.syncEngine,n,0),function(){return Mv.D()?new Mv:new Pb}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const p=new r8(i,s,o,a,u,c);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await fl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 */class Ix{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):dr("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class v8{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=ST.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ig(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qh(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ix(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await w8(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Vv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Vv(e.remoteStore,i)),t._onlineComponents=e}function _8(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function w8(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!_8(n))throw n;Js("Error using user provided cache. Falling back to memory cache: "+n),await Qh(t,new Wv)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Qh(t,new Wv);return t._offlineComponents}async function Cx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Hv(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Hv(t,new y8))),t._onlineComponents}function E8(t){return Cx(t).then(e=>e.syncEngine)}async function Op(t){const e=await Cx(t),n=e.eventManager;return n.onListen=i8.bind(null,e.syncEngine),n.onUnlisten=a8.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=s8.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=l8.bind(null,e.syncEngine),n}function T8(t,e,n={}){const r=new Kr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Ix({next:g=>{o.enqueueAndForget(()=>mx(s,p)),g.fromCache&&u.source==="server"?c.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new gx(a,h,{includeMetadataChanges:!0,_a:!0});return px(s,p)}(await Op(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Rx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const qv=new Map;/**
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
 */function kx(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function x8(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kv(t){if(!K.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gv(t){if(K.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Di(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pd(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Qv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}x8("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zA;switch(r.type){case"firstParty":return new WA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qv.get(n);r&&(H("ComponentProvider","Removing Datastore"),qv.delete(n),r.terminate())}(this),Promise.resolve()}}function S8(t,e,n,r={}){var i;const s=(t=Di(t,bd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=ct.MOCK_USER;else{a=bE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ct(c)}t._authCredentials=new UA(new xT(a,u))}}/**
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
 */class ns{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ns(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Gr extends ns{constructor(e,n,r){super(e,n,hg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new K(e))}withConverter(e){return new Gr(this.firestore,e,this._path)}}function nr(t,e,...n){if(t=Et(t),kx("collection","path",e),t instanceof bd){const r=ve.fromString(e,...n);return Gv(r),new Gr(t,null,r)}{if(!(t instanceof Bt||t instanceof Gr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return Gv(r),new Gr(t.firestore,null,r)}}function I8(t,e,...n){if(t=Et(t),arguments.length===1&&(e=ST.newId()),kx("doc","path",e),t instanceof bd){const r=ve.fromString(e,...n);return Kv(r),new Bt(t,null,new K(r))}{if(!(t instanceof Bt||t instanceof Gr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return Kv(r),new Bt(t.firestore,t instanceof Gr?t.converter:null,new K(r))}}/**
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
 */class C8{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new ox(this,"async_queue_retry"),this.Eu=()=>{const n=Gh();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Gh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Gh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new Kr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!ul(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw dr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=Sg.createAndSchedule(this,e,n,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&Y()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}function Yv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class $a extends bd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new C8}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Px(this),this._firestoreClient.terminate()}}function Ax(t,e){const n=typeof t=="object"?t:Km(),r=typeof t=="string"?t:"(default)",i=yd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=kE("firestore");s&&S8(i,...s)}return i}function kg(t){return t._firestoreClient||Px(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Px(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new rP(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Rx(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new v8(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class io{constructor(e){this._byteString=e}static fromBase64String(e){try{return new io(rt.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new io(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ag{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class bx{constructor(e){this._methodName=e}}/**
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
 */class Pg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
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
 */class bg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const R8=/^__.*__$/;class k8{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new es(e,this.data,this.fieldMask,n,this.fieldTransforms):new dl(e,this.data,n,this.fieldTransforms)}}function Nx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Ng{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Ng(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Dc(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Nx(this.wu)&&R8.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class A8{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Rd(e)}Nu(e,n,r,i=!1){return new Ng({wu:e,methodName:n,Ou:r,path:Ze.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ox(t){const e=t._freezeSettings(),n=Rd(t._databaseId);return new A8(t._databaseId,!!e.ignoreUndefinedProperties,n)}function P8(t,e,n,r,i,s={}){const o=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);Lx("Data must be an object, but it was:",o,r);const a=Dx(r,o);let u,c;if(s.merge)u=new mn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const g=N8(e,p,n);if(!o.contains(g))throw new W(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);D8(h,g)||h.push(g)}u=new mn(h),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new k8(new Jt(a),u,c)}function b8(t,e,n,r=!1){return Og(n,t.Nu(r?4:3,e))}function Og(t,e){if(jx(t=Et(t)))return Lx("Unsupported field value:",e,t),Dx(t,e);if(t instanceof bx)return function(r,i){if(!Nx(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Og(a,i.Fu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return IP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:Nc(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nc(i.serializer,s)}}if(r instanceof Pg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof io)return{bytesValue:XT(i.serializer,r._byteString)};if(r instanceof Bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof bg)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Mu("VectorValues must only contain numeric values.");return fg(a.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${Pd(r)}`)}(t,e)}function Dx(t,e){const n={};return IT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fo(t,(r,i)=>{const s=Og(i,e.bu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function jx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Pg||t instanceof io||t instanceof Bt||t instanceof bx||t instanceof bg)}function Lx(t,e,n){if(!jx(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Pd(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function N8(t,e,n){if((e=Et(e))instanceof Ag)return e._internalPath;if(typeof e=="string")return Mx(t,e);throw Dc("Field path arguments must be of type string or ",t,!1,void 0,n)}const O8=new RegExp("[~\\*/\\[\\]]");function Mx(t,e,n){if(e.search(O8)>=0)throw Dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ag(...e.split("."))._internalPath}catch{throw Dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(V.INVALID_ARGUMENT,a+t+u)}function D8(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Vx{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new j8(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Dg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class j8 extends Vx{data(){return super.data()}}function Dg(t,e){return typeof e=="string"?Mx(t,e):e instanceof Ag?e._internalPath:e._delegate._internalPath}/**
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
 */function Fx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jg{}class L8 extends jg{}function Lg(t,e,...n){let r=[];e instanceof jg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Mg).length,a=s.filter(u=>u instanceof Nd).length;if(o>1||o>0&&a>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Nd extends L8{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Nd(e,n,r)}_apply(e){const n=this._parse(e);return Ux(e._query,n),new ns(e.firestore,e.converter,Sp(e._query,n))}_parse(e){const n=Ox(e.firestore);return function(s,o,a,u,c,h,p){let g;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Jv(p,h);const _=[];for(const S of p)_.push(Xv(u,s,S));g={arrayValue:{values:_}}}else g=Xv(u,s,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Jv(p,h),g=b8(a,o,p,h==="in"||h==="not-in");return ze.create(c,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function zx(t,e,n){const r=e,i=Dg("where",t);return Nd._create(i,r,n)}class Mg extends jg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Mg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:xn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)Ux(o,u),o=Sp(o,u)}(e._query,n),new ns(e.firestore,e.converter,Sp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Xv(t,e,n){if(typeof(n=Et(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!DT(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ve.fromString(n));if(!K.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vv(t,new K(r))}if(n instanceof Bt)return vv(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pd(n)}.`)}function Jv(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ux(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class M8{convertValue(e,n="none"){switch(Hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fo(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Oe(o.doubleValue));return new bg(s)}convertGeoPoint(e){return new Pg(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=lg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ma(e));default:return null}}convertTimestamp(e){const n=ei(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);fe(rx(r));const i=new Va(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||dr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function V8(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Yo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $x extends Vx{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ju(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Dg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ju extends $x{data(e={}){return super.data(e)}}class Bx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Yo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ju(this._firestore,this._userDataWriter,r.key,r,new Yo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new ju(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Yo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new ju(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Yo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:F8(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function F8(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class Vg extends M8{constructor(e){super(),this.firestore=e}convertBytes(e){return new io(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function Ls(t){t=Di(t,ns);const e=Di(t.firestore,$a),n=kg(e),r=new Vg(e);return Fx(t._query),T8(n,t._query).then(i=>new Bx(e,r,t,i))}function Fg(t,e){const n=Di(t.firestore,$a),r=I8(t),i=V8(t.converter,e);return U8(n,[P8(Ox(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,tr.exists(!1))]).then(()=>r)}function z8(t,...e){var n,r,i;t=Et(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Yv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Yv(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,h;if(t instanceof Bt)c=Di(t.firestore,$a),h=hg(t._key.path),u={next:p=>{e[o]&&e[o]($8(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Di(t,ns);c=Di(p.firestore,$a),h=p._query;const g=new Vg(c);u={next:_=>{e[o]&&e[o](new Bx(c,g,p,_))},error:e[o+1],complete:e[o+2]},Fx(t._query)}return function(g,_,S,R){const P=new Ix(R),x=new gx(_,P,S);return g.asyncQueue.enqueueAndForget(async()=>px(await Op(g),x)),()=>{P.za(),g.asyncQueue.enqueueAndForget(async()=>mx(await Op(g),x))}}(kg(c),h,a,u)}function U8(t,e){return function(r,i){const s=new Kr;return r.asyncQueue.enqueueAndForget(async()=>u8(await E8(r),i,s)),s.promise}(kg(t),e)}function $8(t,e,n){const r=n.docs.get(e._key),i=new Vg(t);return new $x(t,i,e._key,r,new Yo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ho=i})(Zi),zi(new Jr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new $a(new $A(r.getProvider("auth-internal")),new qA(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Va(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),bn(fv,"4.7.1",e),bn(fv,"4.7.1","esm2017")})();/**
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
 */const Wx="firebasestorage.googleapis.com",B8="storageBucket",W8=2*60*1e3,H8=10*60*1e3;/**
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
 */class Vn extends Mn{constructor(e,n,r=0){super(Yh(e),`Firebase Storage: ${n} (${Yh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Vn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ln;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ln||(Ln={}));function Yh(t){return"storage/"+t}function q8(){const t="An unknown error occurred, please check the error payload for server response.";return new Vn(Ln.UNKNOWN,t)}function K8(){return new Vn(Ln.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function G8(){return new Vn(Ln.CANCELED,"User canceled the upload/download.")}function Q8(t){return new Vn(Ln.INVALID_URL,"Invalid URL '"+t+"'.")}function Y8(t){return new Vn(Ln.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Zv(t){return new Vn(Ln.INVALID_ARGUMENT,t)}function Hx(){return new Vn(Ln.APP_DELETED,"The Firebase app was deleted.")}function X8(t){return new Vn(Ln.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class gn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=gn.makeFromUrl(e,n)}catch{return new gn(e,"")}if(r.path==="")return r;throw Y8(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const h="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${h}/b/${i}/o${g}`,"i"),S={bucket:1,path:3},R=n===Wx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",x=new RegExp(`^https?://${R}/${i}/${P}`,"i"),T=[{regex:a,indices:u,postModify:s},{regex:_,indices:S,postModify:c},{regex:x,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<T.length;b++){const j=T[b],L=j.regex.exec(e);if(L){const y=L[j.indices.bucket];let v=L[j.indices.path];v||(v=""),r=new gn(y,v),j.postModify(r);break}}if(r==null)throw Q8(e);return r}}class J8{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Z8(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...P){c||(c=!0,e.apply(null,P))}function p(P){i=setTimeout(()=>{i=null,t(_,u())},P)}function g(){s&&clearTimeout(s)}function _(P,...x){if(c){g();return}if(P){g(),h.call(null,P,...x);return}if(u()||o){g(),h.call(null,P,...x);return}r<64&&(r*=2);let T;a===1?(a=2,T=0):T=(r+Math.random())*1e3,p(T)}let S=!1;function R(P){S||(S=!0,g(),!c&&(i!==null?(P||(a=2),clearTimeout(i),p(0)):P||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,R(!0)},n),R}function eN(t){t(!1)}/**
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
 */function tN(t){return t!==void 0}function e_(t,e,n,r){if(r<e)throw Zv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Zv(`Invalid value for '${t}'. Expected ${n} or less.`)}function nN(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var jc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(jc||(jc={}));/**
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
 */function rN(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class iN{constructor(e,n,r,i,s,o,a,u,c,h,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,S)=>{this.resolve_=_,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new nu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===jc.NO_ERROR,u=s.getStatus();if(!a||rN(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===jc.ABORT;r(!1,new nu(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new nu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());tN(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=q8();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?Hx():G8();o(u)}else{const u=K8();o(u)}};this.canceled_?n(!1,new nu(!1,null,!0)):this.backoffId_=Z8(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&eN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class nu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function sN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function oN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function aN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function lN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function uN(t,e,n,r,i,s,o=!0){const a=nN(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return aN(c,e),sN(c,n),oN(c,s),lN(c,r),new iN(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function cN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function dN(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Lc{constructor(e,n){this._service=e,n instanceof gn?this._location=n:this._location=gn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Lc(e,n)}get root(){const e=new gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return dN(this._location.path)}get storage(){return this._service}get parent(){const e=cN(this._location.path);if(e===null)return null;const n=new gn(this._location.bucket,e);return new Lc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw X8(e)}}function t_(t,e){const n=e==null?void 0:e[B8];return n==null?null:gn.makeFromBucketSpec(n,t)}function hN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:bE(i,t.app.options.projectId))}class fN{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Wx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=W8,this._maxUploadRetryTime=H8,this._requests=new Set,i!=null?this._bucket=gn.makeFromBucketSpec(i,this._host):this._bucket=t_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gn.makeFromBucketSpec(this._url,e):this._bucket=t_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){e_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){e_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Lc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new J8(Hx());{const o=uN(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const n_="@firebase/storage",r_="0.13.1";/**
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
 */const qx="storage";function pN(t=Km(),e){t=Et(t);const r=yd(t,qx).getImmediate({identifier:e}),i=kE("storage");return i&&mN(r,...i),r}function mN(t,e,n,r={}){hN(t,e,n,r)}function gN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new fN(n,r,i,e,Zi)}function yN(){zi(new Jr(qx,gN,"PUBLIC").setMultipleInstances(!0)),bn(n_,r_,""),bn(n_,r_,"esm2017")}yN();const vN={apiKey:"AIzaSyAUoMzD8fdip3Oog3rb4jFLdS4vTHqybuI",authDomain:"estore-react-922c8.firebaseapp.com",projectId:"estore-react-922c8",storageBucket:"estore-react-922c8.appspot.com",messagingSenderId:"36464998952",appId:"1:36464998952:web:69254f1256a6d77180131d"},ml=DE(vN),Dp=LA(ml),rr=Ax(ml);pN(ml);Ax(ml);const _N=new hn(ml);function wN(t){return we({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(t)}const EN=de.img`
    width: 7rem;
    height: 5rem;
    margin-left: -1.5rem;
`,TN=de.div`
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
`,xN=()=>{const[t,e]=D.useState({name:"",email:"",password:"",role:"user"}),n=fd(),r=async s=>{s.preventDefault();try{const o=await Tk(Dp,t.email,t.password),a={name:t.name,email:o.user.email,uid:o.user.uid,role:t.role,time:Le.now(),date:new Date().toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})},u=nr(rr,"user");Fg(u,a),e({name:"",email:"",password:""}),je.success("Registration Successful"),n("/Login"),console.log("Account Created",o)}catch{je.error("User Already Existed"),setEmail(""),setPassword(""),setCnfrmpassword(""),console.log("Already Exists")}},i=async()=>{await Hk(Dp,_N).then(s=>{const a=hn.credentialFromResult(s).accessToken,u=s.user;console.log("Token :",a),console.log("user :",u),n("/Login"),console.log("Hello Ahmed")}).catch(s=>{const o=s.code,a=s.message,u=s.customData.email,c=hn.credentialFromError(s);console.log("errorcode: ",o),console.log("errormessage: ",a),console.log("email: ",u),console.log("credential: ",c),n("/Register")})};return d.jsx(d.Fragment,{children:d.jsxs(TN,{id:"Registerpanel",children:[d.jsx("div",{children:d.jsx(EN,{src:Mm,alt:"SiteLogo"})}),d.jsx("h3",{children:"Make Some Change!"}),d.jsxs("form",{onSubmit:r,children:[d.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[d.jsx("label",{for:"exampleInputEmail1",className:"form-label",children:"Name"}),d.jsx("input",{type:"name",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Name",required:!0,value:t.name,onChange:s=>e({...t,name:s.target.value})})]}),d.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[d.jsx("label",{for:"exampleInputEmail1",className:"form-label",children:"Email"}),d.jsx("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email",required:!0,value:t.email,onChange:s=>e({...t,email:s.target.value})})]}),d.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[d.jsx("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),d.jsx("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",required:!0,value:t.password,onChange:s=>e({...t,password:s.target.value})})]}),d.jsx("button",{type:"submit",className:"btn btn-primary container",children:"Submit"})]}),d.jsxs("div",{className:"register",children:[d.jsx("h5",{children:"Already have an account"}),d.jsx(Pe,{to:"/Login",children:"Login"})]}),d.jsx("div",{children:d.jsxs("button",{className:"container",id:"googlebutton",onClick:i,children:[d.jsx(wN,{size:"1.1rem",id:"googleicon"}),"Continue with Google"]})})]})})},SN=de.img`
    width: 7rem;
    height: 5rem;
    margin-left: -1.5rem;
`,IN=de.div`
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
`,CN=()=>{const[t,e]=D.useState({email:"",password:""}),n=fd(),r=async i=>{var s;i.preventDefault();try{const o=await xk(Dp,t.email,t.password);try{const a=Lg(nr(rr,"user"),zx("uid","==",(s=o==null?void 0:o.user)==null?void 0:s.uid)),u=z8(a,c=>{let h;c.forEach(p=>h=p.data()),localStorage.setItem("users",JSON.stringify(h)),e({email:"",password:""}),je.success("Login Successful"),console.log("User logged in:",o.user),h.role==="user"&&n("/Home")});return()=>u}catch(a){console.log("error",a)}}catch{je.error("Login not found"),e({email:"",password:""})}};return d.jsx(d.Fragment,{children:d.jsxs(IN,{id:"loginpanel",children:[d.jsx("div",{children:d.jsx(SN,{src:Mm,alt:"SiteLogo"})}),d.jsx("h3",{children:"Welcome back!"}),d.jsxs("form",{onSubmit:r,children:[d.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[d.jsx("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email"}),d.jsx("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email",required:!0,value:t.email,onChange:i=>e({...t,email:i.target.value})})]}),d.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[d.jsx("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),d.jsx("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",required:!0,value:t.password,onChange:i=>e({...t,password:i.target.value})}),d.jsx("button",{type:"submit",children:"Login"})]})]}),d.jsxs("div",{className:"register",children:[d.jsx("h5",{children:"Don't have an account"}),d.jsx(Pe,{to:"/Register",children:"Register"})]})]})})},RN="/freshbiteapp_Reactjs/assets/veg-C5rJdKzF.jpg",kN="/freshbiteapp_Reactjs/assets/fruit-lXJ3bgGr.jpg",AN=de.div`
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
`,PN=()=>d.jsx(d.Fragment,{children:d.jsxs(AN,{children:[d.jsxs("div",{className:"veg-section",style:{backgroundImage:`url(${RN})`},children:[d.jsxs("h1",{children:["Tasty ",d.jsx("y",{style:{color:"coral"},children:" Vegetables "})," ",d.jsx("br",{})," From Farm ",d.jsx("br",{})," Vendors"]}),d.jsxs("p",{children:["Every Friday Check",d.jsx("br",{})," Best Margla Deals"]}),d.jsx(Pe,{to:"/Shop",children:d.jsx("button",{className:"btn btn-success",children:"Shop Now"})})]}),d.jsxs("div",{className:"fruit-section",style:{backgroundImage:`url(${kN})`},children:[d.jsxs("h1",{children:[d.jsx("y",{style:{color:"coral"},children:" Delicious "})," Fruits ",d.jsx("br",{})," From South ",d.jsx("br",{})," Africa"]}),d.jsxs("p",{children:["Every Friday Check",d.jsx("br",{})," Best Margla Deals"]}),d.jsx(Pe,{to:"/Shop",children:d.jsx("button",{className:"btn btn-success",children:"Shop Now"})})]})]})});function bN(t){return we({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"},child:[]},{tag:"path",attr:{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"},child:[]},{tag:"path",attr:{d:"m18 15-2-2"},child:[]},{tag:"path",attr:{d:"m15 18-2-2"},child:[]}]})(t)}function NN(t){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"},child:[]}]})(t)}function ON(t){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5 1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"},child:[]}]})(t)}function DN(t){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"},child:[]}]})(t)}function jN(t){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M1023.65 290.48c.464-23.664-5.904-78.848-77.84-98.064L223.394 47.794c-52.944 0-96 43.055-96 96v128.704l-32-.08c-52.752.223-95.632 43.15-95.632 95.967v511.808c0 52.945 43.056 96 96 96h832.464c52.945 0 96-43.055 96-96zM191.393 143.793c0-16.72 12.88-30.463 29.216-31.871l706 142.88c.256.128-5.248 17.935-30.88 17.6H191.393zM960.24 880.21c0 17.664-14.336 32-32 32H95.76c-17.664 0-32-14.336-32-32V368.386c0-17.664 14.336-32 32-32h800.064c31.408 0 64.4-10.704 64.4-31.888V880.21h.016zM191.824 560.498c-35.344 0-64 28.656-64 64s28.656 64 64 64 64-28.656 64-64-28.656-64-64-64z"},child:[]}]})(t)}const LN=de.section`
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
`,MN=()=>d.jsx(d.Fragment,{children:d.jsxs(LN,{children:[d.jsxs("div",{children:[d.jsx(A3,{size:"2rem",color:"tomato"}),d.jsx("h4",{children:"Top Notch Support"}),d.jsx("p",{children:"Chat with us if you've any query"})]}),d.jsxs("div",{children:[d.jsx(bN,{size:"2rem",color:"tomato"}),d.jsx("h4",{children:"100% Satisfaction Guarrentae"}),d.jsx("p",{children:"Provide help in case of Dissatisfaction"})]}),d.jsxs("div",{children:[d.jsx(ON,{size:"2rem",color:"tomato"}),d.jsx("h4",{children:"Free Deliverey Acrross all US"}),d.jsx("p",{children:"Free Deliverey for all orders above $500"})]}),d.jsxs("div",{children:[d.jsx(jN,{size:"2rem",color:"tomato"}),d.jsx("h4",{children:"Secure Payment"}),d.jsx("p",{children:"We use safest Payment Technologies"})]})]})}),VN="/freshbiteapp_Reactjs/assets/first-Bd_imVfc.jpg",FN="/freshbiteapp_Reactjs/assets/third-Ba3uQAAu.jpg",zN="/freshbiteapp_Reactjs/assets/second-A7lX0XHt.jpeg",UN=de.div`
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
`,$N=()=>d.jsx(d.Fragment,{children:d.jsxs(UN,{children:[d.jsxs("div",{style:{backgroundImage:`url(${zN})`},children:[d.jsxs("h3",{children:["Fresh ",d.jsx("y",{style:{color:"tomato"},children:" Vegies "})," ",d.jsx("br",{})," Everyday "]}),d.jsx(Pe,{to:"/Shop",children:d.jsx("button",{className:"btn btn-secondary",children:"Shop Now"})})]}),d.jsxs("div",{style:{backgroundImage:`url(${VN})`},children:[d.jsxs("h3",{children:["Sweet ",d.jsx("y",{style:{color:"orange"},children:" Organic "})," ",d.jsx("br",{})," Drinks "]}),d.jsx(Pe,{to:"/Shop",children:d.jsx("button",{className:"btn btn-secondary",children:"Shop Now"})})]}),d.jsxs("div",{style:{backgroundImage:`url(${FN})`},children:[d.jsxs("h3",{children:["Fairly ",d.jsx("y",{style:{color:"red"},children:" Meat "})," ",d.jsx("br",{})," Lovers "]}),d.jsx(Pe,{to:"/Shop",children:d.jsx("button",{className:"btn btn-secondary",children:"Shop Now"})})]})]})}),BN=de.section`
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
`,WN=()=>{const[t,e]=D.useState(""),n=async r=>{if(r.preventDefault(),t===""){je.error("Email is required");return}else if(!t.includes("@")||!t.endsWith(".com")){je.error("Put a valid email address");return}else try{const i=nr(rr,"Subscribe"),s=Lg(i,zx("Email","==",t));if(!(await Ls(s)).empty){je.error("Already Registered"),e("");return}await Fg(i,{Email:t,role:"user",time:Le.now(),date:new Date().toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})}),je.success("Successfully Registered")}catch{je.error("Failed to Subscribe. Try again"),e("")}};return d.jsx(d.Fragment,{children:d.jsxs(BN,{children:[d.jsx("label",{children:"Subscribe To Our Newsletter"}),d.jsxs("div",{children:[d.jsx("input",{id:"email",type:"email",placeholder:"Enter Your Email Address",required:!0,value:t,onChange:r=>e(r.target.value)}),d.jsx("button",{onClick:n,children:"Subscribe"})]})]})})},HN=de.section`
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
`,qN=()=>{const[t,e]=D.useState([]),[n,r]=D.useState([]),[i,s]=D.useState([]);D.useEffect(()=>{(async()=>{const h=nr(rr,"HomeVegProducts"),g=(await Ls(h)).docs.map(T=>({id:T.id,...T.data()}));e(g);const _=nr(rr,"HomeFruitProducts"),R=(await Ls(_)).docs.map(T=>({id:T.id,...T.data()}));r(R);const P=nr(rr,"HomeOtherProducts"),w=(await Ls(P)).docs.map(T=>({id:T.id,...T.data()}));s(w)})()},[]);const o=()=>{document.getElementById("vegies").style.display="flex",document.getElementById("fruits").style.display="none",document.getElementById("others").style.display="none"},a=()=>{document.getElementById("vegies").style.display="none",document.getElementById("fruits").style.display="flex",document.getElementById("others").style.display="none"},u=()=>{document.getElementById("vegies").style.display="none",document.getElementById("fruits").style.display="none",document.getElementById("others").style.display="flex"};return d.jsx(d.Fragment,{children:d.jsxs(HN,{children:[d.jsx("h3",{children:"Best Selling of August"}),d.jsxs("div",{className:"links",children:[d.jsx("i",{onClick:o,children:"Vegies"}),d.jsx("i",{onClick:a,children:"Fruits"}),d.jsx("i",{onClick:u,children:"Others"})]}),d.jsxs("div",{children:[d.jsx("div",{id:"vegies",children:d.jsx("div",{className:"container",children:d.jsx("div",{className:"row",children:t.map((c,h)=>d.jsx("div",{className:"col-md-3 mb-3 col-6",children:d.jsxs("div",{className:"card",children:[d.jsx("img",{src:c.imageurl,className:"card-img-top",alt:c.name}),d.jsxs("div",{className:"card-body",children:[d.jsx("h5",{className:"card-title",children:c.name}),d.jsxs("p",{className:"card-text",style:{color:"red"},children:[" $",c.price]}),c.Bunch&&d.jsxs("p",{className:"card-text",children:[d.jsx("y",{children:"Bunch: "})," ",c.Bunch]}),c.quantity&&d.jsxs("p",{className:"card-text",children:[d.jsx("y",{children:"Quantity: "})," ",c.quantity,"Kg"]})]})]})},h))})})}),d.jsx("div",{id:"fruits",children:d.jsx("div",{className:"container",children:d.jsx("div",{className:"row",children:n.map((c,h)=>d.jsx("div",{className:"col-md-3 mb-3 col-6",children:d.jsxs("div",{className:"card",children:[d.jsx("img",{src:c.imageurl,className:"card-img-top",alt:c.name}),d.jsxs("div",{className:"card-body",children:[d.jsx("h5",{className:"card-title",children:c.name}),d.jsxs("p",{className:"card-text",style:{color:"red"},children:[" $",c.price]}),c.dozen&&d.jsxs("p",{className:"card-text",children:[d.jsx("y",{children:"Dozen: "})," ",c.dozen]}),c.quantity&&d.jsxs("p",{className:"card-text",children:[d.jsx("y",{children:"Quantity: "})," ",c.quantity," Kg"]})]})]})},h))})})}),d.jsx("div",{id:"others",children:d.jsx("div",{className:"container",children:d.jsx("div",{className:"row",children:i.map((c,h)=>d.jsx("div",{className:"col-md-3 mb-3 col-6",children:d.jsxs("div",{className:"card",children:[d.jsx("img",{src:c.imageurl,className:"card-img-top",alt:c.name}),d.jsxs("div",{className:"card-body",children:[d.jsx("h5",{className:"card-title",children:c.name}),d.jsxs("p",{className:"card-text",style:{color:"red"},children:[" $",c.price]}),c.size&&d.jsxs("p",{className:"card-text",children:[d.jsx("y",{children:"Size: "})," ",c.size]})]})]})},h))})})})]})]})})};var KN={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Kx(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return KN[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function i_(t){var e=Kx(t);return"".concat(e.value).concat(e.unit)}var GN=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),r},Ir=function(){return Ir=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ir.apply(this,arguments)},QN=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},s_=GN("MoonLoader","100% {transform: rotate(360deg)}","moon");function rs(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,a=t.cssOverride,u=a===void 0?{}:a,c=t.size,h=c===void 0?60:c,p=QN(t,["loading","color","speedMultiplier","cssOverride","size"]),g=Kx(h),_=g.value,S=g.unit,R=Math.round(_/7),P=Ir({display:"inherit",position:"relative",width:"".concat("".concat(_+R*2).concat(S)),height:"".concat("".concat(_+R*2).concat(S)),animation:"".concat(s_," ").concat(.6/o,"s 0s infinite linear"),animationFillMode:"forwards"},u),x=function(b){return{width:i_(b),height:i_(b),borderRadius:"100%"}},w=Ir(Ir({},x(R)),{backgroundColor:"".concat(i),opacity:"0.8",position:"absolute",top:"".concat("".concat(_/2-R/2).concat(S)),animation:"".concat(s_," ").concat(.6/o,"s 0s infinite linear"),animationFillMode:"forwards"}),T=Ir(Ir({},x(_)),{border:"".concat(R,"px solid ").concat(i),opacity:"0.1",boxSizing:"content-box",position:"absolute"});return n?D.createElement("span",Ir({style:P},p),D.createElement("span",{style:w}),D.createElement("span",{style:T})):null}const Gx=D.createContext();var zg={},Ug={},Se={},Od={};(function(t){function e(o,a,u){var c=a.slidesToShow,h=a.currentSlide;return u.length>2*c?o+2*c:h>=u.length?u.length+o:o}function n(o,a){if(a.length>2*o){for(var u={},c=a.length-2*o,h=a.length-c,p=c,g=0;g<h;g++)u[g]=p,p++;var _=a.length+h,S=_+a.slice(0,2*o).length,R=0;for(g=_;g<=S;g++)u[g]=R,R++;var P=_,x=0;for(g=h;g<P;g++)u[g]=x,x++;return u}u={};var w=3*a.length,T=0;for(g=0;g<w;g++)u[g]=T,++T===a.length&&(T=0);return u}function r(o,a){return a.length<o?a:a.length>2*o?a.slice(a.length-2*o,a.length).concat(a,a.slice(0,2*o)):a.concat(a,a)}function i(o,a){return a.length>2*o?2*o:a.length}function s(o,a,u){var c,h=o.currentSlide,p=o.slidesToShow,g=o.itemWidth,_=o.totalItems,S=0,R=0,P=h===0,x=a.length-(a.length-2*p);return a.length<p?(R=S=0,P=c=!1):a.length>2*p?((c=h>=x+a.length)&&(R=-g*(S=h-a.length)),P&&(R=-g*(S=x+(a.length-2*p)))):((c=h>=2*a.length)&&(R=-g*(S=h-a.length)),P&&(R=u.showDots?-g*(S=a.length):-g*(S=_/3))),{isReachingTheEnd:c,isReachingTheStart:P,nextSlide:S,nextPosition:R}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOriginalCounterPart=e,t.getOriginalIndexLookupTableByClones=n,t.getClones=r,t.getInitialSlideInInfiniteMode=i,t.checkClonesPosition=s})(Od);var Ms={};Object.defineProperty(Ms,"__esModule",{value:!0});function YN(t,e,n,r){var i=0,s=r||n;return e&&s&&(i=t[s].partialVisibilityGutter||t[s].paritialVisibilityGutter),i}function XN(t,e){var n;return e[t]&&(n=(100/e[t].items).toFixed(1)),n}function JN(t,e,n){return Math.round(n/(e+(t.centerMode?1:0)))}Ms.getPartialVisibilityGutter=YN,Ms.getWidthFromDeviceType=XN,Ms.getItemClientSideWidth=JN;var Be={};Object.defineProperty(Be,"__esModule",{value:!0});var jp=Ms;function $g(t){var e=t.slidesToShow;return t.totalItems<e}function ZN(t,e){var n,r=t.domLoaded,i=t.slidesToShow,s=t.containerWidth,o=t.itemWidth,a=e.deviceType,u=e.responsive,c=e.ssr,h=e.partialVisbile,p=e.partialVisible,g=!!(r&&i&&s&&o);c&&a&&!g&&(n=jp.getWidthFromDeviceType(a,u));var _=!!(c&&a&&!g&&n);return{shouldRenderOnSSR:_,flexBisis:n,domFullyLoaded:g,partialVisibilityGutter:jp.getPartialVisibilityGutter(u,h||p,a,t.deviceType),shouldRenderAtAll:_||g}}function e7(t,e){var n=e.currentSlide,r=e.slidesToShow;return n<=t&&t<n+r}function Qx(t,e,n){var r=n||t.transform;return!e.infinite&&t.currentSlide===0||$g(t)?r:r+t.itemWidth/2}function t7(t){return!(0<t.currentSlide)}function Yx(t){var e=t.currentSlide,n=t.totalItems;return!(e+t.slidesToShow<n)}function Xx(t,e,n,r){e===void 0&&(e=0);var i=t.currentSlide,s=t.slidesToShow,o=Yx(t),a=!n.infinite&&o,u=r||t.transform;if($g(t))return u;var c=u+i*e;return a?c+(t.containerWidth-(t.itemWidth-e)*s):c}function Jx(t,e){return t.rtl?-1*e:e}function n7(t,e,n){var r=e.partialVisbile,i=e.partialVisible,s=e.responsive,o=e.deviceType,a=e.centerMode,u=n||t.transform,c=jp.getPartialVisibilityGutter(s,r||i,o,t.deviceType);return Jx(e,i||r?Xx(t,c,e,n):a?Qx(t,e,n):u)}function r7(t,e){var n=t.domLoaded,r=t.slidesToShow,i=t.containerWidth,s=t.itemWidth,o=e.deviceType,a=e.responsive,u=e.slidesToSlide||1,c=!!(n&&r&&i&&s);return e.ssr&&e.deviceType&&!c&&Object.keys(a).forEach(function(h){var p=a[h].slidesToSlide;o===h&&p&&(u=p)}),c&&Object.keys(a).forEach(function(h){var p=a[h],g=p.breakpoint,_=p.slidesToSlide,S=g.max,R=g.min;_&&window.innerWidth>=R&&window.innerWidth<=S&&(u=_)}),u}Be.notEnoughChildren=$g,Be.getInitialState=ZN,Be.getIfSlideIsVisbile=e7,Be.getTransformForCenterMode=Qx,Be.isInLeftEnd=t7,Be.isInRightEnd=Yx,Be.getTransformForPartialVsibile=Xx,Be.parsePosition=Jx,Be.getTransform=n7,Be.getSlidesToSlide=r7;var Bg={};Object.defineProperty(Bg,"__esModule",{value:!0});var i7=function(t,e,n){var r;return function(){var i=arguments;r||(t.apply(this,i),r=!0,typeof n=="function"&&n(!0),setTimeout(function(){r=!1,typeof n=="function"&&n(!1)},e))}};Bg.default=i7;var Zx={};(function(t){function e(n,r){var i=r.partialVisbile,s=r.partialVisible,o=r.centerMode,a=r.ssr,u=r.responsive;if((i||s)&&o)throw new Error("center mode can not be used at the same time with partialVisible");if(!u)throw a?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(u&&typeof u!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=e})(Zx);var Wg={};Object.defineProperty(Wg,"__esModule",{value:!0});var s7=Be;function o7(t,e,n){n===void 0&&(n=0);var r,i,s=t.slidesToShow,o=t.currentSlide,a=t.itemWidth,u=t.totalItems,c=s7.getSlidesToSlide(t,e),h=o+1+n+s+(0<n?0:c);return i=h<=u?-a*(r=o+n+(0<n?0:c)):u<h&&o!==u-s?-a*(r=u-s):r=void 0,{nextSlides:r,nextPosition:i}}Wg.populateNextSlides=o7;var Hg={};Object.defineProperty(Hg,"__esModule",{value:!0});var a7=D,l7=Be,u7=Be;function c7(t,e,n){n===void 0&&(n=0);var r,i,s=t.currentSlide,o=t.itemWidth,a=t.slidesToShow,u=e.children,c=e.showDots,h=e.infinite,p=l7.getSlidesToSlide(t,e),g=s-n-(0<n?0:p),_=(a7.Children.toArray(u).length-a)%p;return i=0<=g?(r=g,c&&!h&&0<_&&u7.isInRightEnd(t)&&(r=s-_),-o*r):r=g<0&&s!==0?0:void 0,{nextSlides:r,nextPosition:i}}Hg.populatePreviousSlides=c7;var eS={};(function(t){function e(n,r,i,s,o,a){var u,c,h=n.itemWidth,p=n.slidesToShow,g=n.totalItems,_=n.currentSlide,S=r.infinite,R=!1,P=Math.round((i-s)/h),x=Math.round((s-i)/h),w=i<o;if(o<i&&P<=p){u="right";var T=Math.abs(-h*(g-p)),b=a-(s-o),j=_===g-p;(Math.abs(b)<=T||j&&S)&&(c=b,R=!0)}return w&&x<=p&&(u="left",((b=a+(o-s))<=0||_===0&&S)&&(R=!0,c=b)),{direction:u,nextPosition:c,canContinue:R}}Object.defineProperty(t,"__esModule",{value:!0}),t.populateSlidesOnMouseTouchMove=e})(eS);Object.defineProperty(Se,"__esModule",{value:!0});var ru=Od;Se.getOriginalCounterPart=ru.getOriginalCounterPart,Se.getClones=ru.getClones,Se.checkClonesPosition=ru.checkClonesPosition,Se.getInitialSlideInInfiniteMode=ru.getInitialSlideInInfiniteMode;var Xh=Ms;Se.getWidthFromDeviceType=Xh.getWidthFromDeviceType,Se.getPartialVisibilityGutter=Xh.getPartialVisibilityGutter,Se.getItemClientSideWidth=Xh.getItemClientSideWidth;var Er=Be;Se.getInitialState=Er.getInitialState,Se.getIfSlideIsVisbile=Er.getIfSlideIsVisbile,Se.getTransformForCenterMode=Er.getTransformForCenterMode,Se.getTransformForPartialVsibile=Er.getTransformForPartialVsibile,Se.isInLeftEnd=Er.isInLeftEnd,Se.isInRightEnd=Er.isInRightEnd,Se.notEnoughChildren=Er.notEnoughChildren,Se.getSlidesToSlide=Er.getSlidesToSlide;var d7=Bg;Se.throttle=d7.default;var h7=Zx;Se.throwError=h7.default;var f7=Wg;Se.populateNextSlides=f7.populateNextSlides;var p7=Hg;Se.populatePreviousSlides=p7.populatePreviousSlides;var m7=eS;Se.populateSlidesOnMouseTouchMove=m7.populateSlidesOnMouseTouchMove;var Dd={},g7=Mu&&Mu.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)i.hasOwnProperty(s)&&(r[s]=i[s])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(Dd,"__esModule",{value:!0});var y7=D;function v7(t){return"clientY"in t}Dd.isMouseMoveEvent=v7;var _7=function(t){function e(){return t!==null&&t.apply(this,arguments)||this}return g7(e,t),e}(y7.Component);Dd.default=_7;var qg={},Kg={};Object.defineProperty(Kg,"__esModule",{value:!0});var w7=Od,E7=Be;function T7(t,e,n,r){var i={},s=E7.getSlidesToSlide(e,n);return Array(t).fill(0).forEach(function(o,a){var u=w7.getOriginalCounterPart(a,e,r);if(a===0)i[0]=u;else{var c=i[a-1]+s;i[a]=c}}),i}Kg.getLookupTableForNextSlides=T7;Object.defineProperty(qg,"__esModule",{value:!0});var Fo=D,x7=Od,S7=Kg,o_=Be,I7=function(t){var e=t.props,n=t.state,r=t.goToSlide,i=t.getState,s=e.showDots,o=e.customDot,a=e.dotListClass,u=e.infinite,c=e.children;if(!s||o_.notEnoughChildren(n))return null;var h,p=n.currentSlide,g=n.slidesToShow,_=o_.getSlidesToSlide(n,e),S=Fo.Children.toArray(c);h=u?Math.ceil(S.length/_):Math.ceil((S.length-g)/_)+1;var R=S7.getLookupTableForNextSlides(h,n,e,S),P=x7.getOriginalIndexLookupTableByClones(g,S),x=P[p];return Fo.createElement("ul",{className:"react-multi-carousel-dot-list "+a},Array(h).fill(0).map(function(w,T){var b,j;if(u){j=R[T];var L=P[j];b=x===L||L<=x&&x<L+_}else{var y=S.length-g,v=T*_;b=(j=y<v?y:v)===p||j<p&&p<j+_&&p<S.length-g}return o?Fo.cloneElement(o,{index:T,active:b,key:T,onClick:function(){return r(j)},carouselState:i()}):Fo.createElement("li",{"data-index":T,key:T,className:"react-multi-carousel-dot "+(b?"react-multi-carousel-dot--active":"")},Fo.createElement("button",{"aria-label":"Go to slide "+(T+1),onClick:function(){return r(j)}}))}))};qg.default=I7;var jd={};Object.defineProperty(jd,"__esModule",{value:!0});var Mc=D,C7=function(t){var e=t.customLeftArrow,n=t.getState,r=t.previous,i=t.disabled,s=t.rtl;if(e)return Mc.cloneElement(e,{onClick:function(){return r()},carouselState:n(),disabled:i,rtl:s});var o=s?"rtl":"";return Mc.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+o,onClick:function(){return r()},type:"button",disabled:i})};jd.LeftArrow=C7;var R7=function(t){var e=t.customRightArrow,n=t.getState,r=t.next,i=t.disabled,s=t.rtl;if(e)return Mc.cloneElement(e,{onClick:function(){return r()},carouselState:n(),disabled:i,rtl:s});var o=s?"rtl":"";return Mc.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+o,onClick:function(){return r()},type:"button",disabled:i})};jd.RightArrow=R7;var Gg={};Object.defineProperty(Gg,"__esModule",{value:!0});var iu=D,Jh=Se,k7=function(t){var e=t.props,n=t.state,r=t.goToSlide,i=t.clones,s=t.notEnoughChildren,o=n.itemWidth,a=e.children,u=e.infinite,c=e.itemClass,h=e.itemAriaLabel,p=e.partialVisbile,g=e.partialVisible,_=Jh.getInitialState(n,e),S=_.flexBisis,R=_.shouldRenderOnSSR,P=_.domFullyLoaded,x=_.partialVisibilityGutter;return _.shouldRenderAtAll?(p&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),iu.createElement(iu.Fragment,null,(u?i:iu.Children.toArray(a)).map(function(w,T){return iu.createElement("li",{key:T,"data-index":T,onClick:function(){e.focusOnSelect&&r(T)},"aria-hidden":Jh.getIfSlideIsVisbile(T,n)?"false":"true","aria-label":h||(w.props.ariaLabel?w.props.ariaLabel:null),style:{flex:R?"1 0 "+S+"%":"auto",position:"relative",width:P?((p||g)&&x&&!s?o-x:o)+"px":"auto"},className:"react-multi-carousel-item "+(Jh.getIfSlideIsVisbile(T,n)?"react-multi-carousel-item--active":"")+" "+c},w)}))):null};Gg.default=k7;var A7=Mu&&Mu.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)i.hasOwnProperty(s)&&(r[s]=i[s])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(Ug,"__esModule",{value:!0});var Qe=D,Ne=Se,gi=Dd,P7=qg,a_=jd,b7=Gg,su=Be,In=400,l_="transform 400ms ease-in-out",N7=function(t){function e(n){var r=t.call(this,n)||this;return r.containerRef=Qe.createRef(),r.listRef=Qe.createRef(),r.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:Qe.Children.count(n.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},r.onResize=r.onResize.bind(r),r.handleDown=r.handleDown.bind(r),r.handleMove=r.handleMove.bind(r),r.handleOut=r.handleOut.bind(r),r.onKeyUp=r.onKeyUp.bind(r),r.handleEnter=r.handleEnter.bind(r),r.setIsInThrottle=r.setIsInThrottle.bind(r),r.next=Ne.throttle(r.next.bind(r),n.transitionDuration||In,r.setIsInThrottle),r.previous=Ne.throttle(r.previous.bind(r),n.transitionDuration||In,r.setIsInThrottle),r.goToSlide=Ne.throttle(r.goToSlide.bind(r),n.transitionDuration||In,r.setIsInThrottle),r.onMove=!1,r.initialX=0,r.lastX=0,r.isAnimationAllowed=!1,r.direction="",r.initialY=0,r.isInThrottle=!1,r.transformPlaceHolder=0,r}return A7(e,t),e.prototype.resetTotalItems=function(){var n=this,r=Qe.Children.count(this.props.children),i=Ne.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,r));this.setState({totalItems:r,currentSlide:i},function(){n.setContainerAndItemWidth(n.state.slidesToShow,!0)})},e.prototype.setIsInThrottle=function(n){n===void 0&&(n=!1),this.isInThrottle=n},e.prototype.setTransformDirectly=function(n,r){var i=this.props.additionalTransfrom;this.transformPlaceHolder=n;var s=su.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(r),this.listRef.current.style.transform="translate3d("+(s+i)+"px,0,0)")},e.prototype.setAnimationDirectly=function(n){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=n?this.props.customTransition||l_:"none")},e.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.setClones=function(n,r,i,s){var o=this;s===void 0&&(s=!1),this.isAnimationAllowed=!1;var a=Qe.Children.toArray(this.props.children),u=Ne.getInitialSlideInInfiniteMode(n||this.state.slidesToShow,a),c=Ne.getClones(this.state.slidesToShow,a),h=a.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:c.length,currentSlide:i&&!s?h:u},function(){o.correctItemsPosition(r||o.state.itemWidth)})},e.prototype.setItemsToShow=function(n,r){var i=this,s=this.props.responsive;Object.keys(s).forEach(function(o){var a=s[o],u=a.breakpoint,c=a.items,h=u.max,p=u.min,g=[window.innerWidth];window.screen&&window.screen.width&&g.push(window.screen.width);var _=Math.min.apply(Math,g);p<=_&&_<=h&&(i.setState({slidesToShow:c,deviceType:o}),i.setContainerAndItemWidth(c,n,r))})},e.prototype.setContainerAndItemWidth=function(n,r,i){var s=this;if(this.containerRef&&this.containerRef.current){var o=this.containerRef.current.offsetWidth,a=Ne.getItemClientSideWidth(this.props,n,o);this.setState({containerWidth:o,itemWidth:a},function(){s.props.infinite&&s.setClones(n,a,r,i)}),r&&this.correctItemsPosition(a)}},e.prototype.correctItemsPosition=function(n,r,i){r&&(this.isAnimationAllowed=!0),!r&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var s=this.state.totalItems<this.state.slidesToShow?0:-n*this.state.currentSlide;i&&this.setTransformDirectly(s,!0),this.setState({transform:s})},e.prototype.onResize=function(n){var r;r=!!this.props.infinite&&(typeof n!="boolean"||!n),this.setItemsToShow(r)},e.prototype.componentDidUpdate=function(n,r){var i=this,s=n.keyBoardControl,o=n.autoPlay,a=n.children,u=r.containerWidth,c=r.domLoaded,h=r.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==u&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){i.setItemsToShow(!0)},this.props.transitionDuration||In)),s&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!s&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),o&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),o||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),a.length!==this.props.children.length?e.clonesTimeout=setTimeout(function(){i.props.infinite?i.setClones(i.state.slidesToShow,i.state.itemWidth,!0,!0):i.resetTotalItems()},this.props.transitionDuration||In):this.props.infinite&&this.state.currentSlide!==h&&this.correctClonesPosition({domLoaded:c}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&Ne.isInRightEnd(this.state)){var p=this.props.transitionDuration||In;e.isInThrottleTimeout=setTimeout(function(){i.setIsInThrottle(!1),i.resetAutoplayInterval(),i.goToSlide(0,void 0,!!i.props.rewindWithAnimation)},p+this.props.autoPlaySpeed)}},e.prototype.correctClonesPosition=function(n){var r=this,i=n.domLoaded,s=Qe.Children.toArray(this.props.children),o=Ne.checkClonesPosition(this.state,s,this.props),a=o.isReachingTheEnd,u=o.isReachingTheStart,c=o.nextSlide,h=o.nextPosition;this.state.domLoaded&&i&&(a||u)&&(this.isAnimationAllowed=!1,e.transformTimeout=setTimeout(function(){r.setState({transform:h,currentSlide:c})},this.props.transitionDuration||In))},e.prototype.next=function(n){var r=this;n===void 0&&(n=0);var i=this.props,s=i.afterChange,o=i.beforeChange;if(!Ne.notEnoughChildren(this.state)){var a=Ne.populateNextSlides(this.state,this.props,n),u=a.nextSlides,c=a.nextPosition,h=this.state.currentSlide;u!==void 0&&c!==void 0&&(typeof o=="function"&&o(u,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:c,currentSlide:u},function(){typeof s=="function"&&(e.afterChangeTimeout=setTimeout(function(){s(h,r.getState())},r.props.transitionDuration||In))}))}},e.prototype.previous=function(n){var r=this;n===void 0&&(n=0);var i=this.props,s=i.afterChange,o=i.beforeChange;if(!Ne.notEnoughChildren(this.state)){var a=Ne.populatePreviousSlides(this.state,this.props,n),u=a.nextSlides,c=a.nextPosition;if(u!==void 0&&c!==void 0){var h=this.state.currentSlide;typeof o=="function"&&o(u,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:c,currentSlide:u},function(){typeof s=="function"&&(e.afterChangeTimeout2=setTimeout(function(){s(h,r.getState())},r.props.transitionDuration||In))})}}},e.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),e.clonesTimeout&&clearTimeout(e.clonesTimeout),e.isInThrottleTimeout&&clearTimeout(e.isInThrottleTimeout),e.transformTimeout&&clearTimeout(e.transformTimeout),e.afterChangeTimeout&&clearTimeout(e.afterChangeTimeout),e.afterChangeTimeout2&&clearTimeout(e.afterChangeTimeout2),e.afterChangeTimeout3&&clearTimeout(e.afterChangeTimeout3)},e.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},e.prototype.getCords=function(n){var r=n.clientX,i=n.clientY;return{clientX:su.parsePosition(this.props,r),clientY:su.parsePosition(this.props,i)}},e.prototype.handleDown=function(n){if(!(!gi.isMouseMoveEvent(n)&&!this.props.swipeable||gi.isMouseMoveEvent(n)&&!this.props.draggable||this.isInThrottle)){var r=this.getCords(gi.isMouseMoveEvent(n)?n:n.touches[0]),i=r.clientX,s=r.clientY;this.onMove=!0,this.initialX=i,this.initialY=s,this.lastX=i,this.isAnimationAllowed=!1}},e.prototype.handleMove=function(n){if(!(!gi.isMouseMoveEvent(n)&&!this.props.swipeable||gi.isMouseMoveEvent(n)&&!this.props.draggable||Ne.notEnoughChildren(this.state))){var r=this.getCords(gi.isMouseMoveEvent(n)?n:n.touches[0]),i=r.clientX,s=r.clientY,o=this.initialX-i,a=this.initialY-s;if(this.onMove){if(!(Math.abs(o)>Math.abs(a)))return;var u=Ne.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,i,this.transformPlaceHolder),c=u.direction,h=u.nextPosition,p=u.canContinue;c&&(this.direction=c,p&&h!==void 0&&this.setTransformDirectly(h)),this.lastX=i}}},e.prototype.handleOut=function(n){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var r=n.type==="touchend"&&!this.props.swipeable,i=(n.type==="mouseleave"||n.type==="mouseup")&&!this.props.draggable;if(!r&&!i&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var s=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(s)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(s=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(s)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},e.prototype.isInViewport=function(n){var r=n.getBoundingClientRect(),i=r.top,s=i===void 0?0:i,o=r.left,a=o===void 0?0:o,u=r.bottom,c=u===void 0?0:u,h=r.right,p=h===void 0?0:h;return 0<=s&&0<=a&&c<=(window.innerHeight||document.documentElement.clientHeight)&&p<=(window.innerWidth||document.documentElement.clientWidth)},e.prototype.isChildOfCarousel=function(n){return!!(n instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(n)},e.prototype.onKeyUp=function(n){var r=n.target;switch(n.keyCode){case 37:if(this.isChildOfCarousel(r))return this.previous();break;case 39:if(this.isChildOfCarousel(r))return this.next();break;case 9:if(this.isChildOfCarousel(r)&&r instanceof HTMLInputElement&&this.isInViewport(r))return this.next()}},e.prototype.handleEnter=function(n){gi.isMouseMoveEvent(n)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},e.prototype.goToSlide=function(n,r,i){var s=this;if(i===void 0&&(i=!0),!this.isInThrottle){var o=this.state.itemWidth,a=this.props,u=a.afterChange,c=a.beforeChange,h=this.state.currentSlide;typeof c!="function"||r&&(typeof r!="object"||r.skipBeforeChange)||c(n,this.getState()),this.isAnimationAllowed=i,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:n,transform:-o*n},function(){s.props.infinite&&s.correctClonesPosition({domLoaded:!0}),typeof u!="function"||r&&(typeof r!="object"||r.skipAfterChange)||(e.afterChangeTimeout3=setTimeout(function(){u(h,s.getState())},s.props.transitionDuration||In))})}},e.prototype.getState=function(){return this.state},e.prototype.renderLeftArrow=function(n){var r=this,i=this.props,s=i.customLeftArrow,o=i.rtl;return Qe.createElement(a_.LeftArrow,{customLeftArrow:s,getState:function(){return r.getState()},previous:this.previous,disabled:n,rtl:o})},e.prototype.renderRightArrow=function(n){var r=this,i=this.props,s=i.customRightArrow,o=i.rtl;return Qe.createElement(a_.RightArrow,{customRightArrow:s,getState:function(){return r.getState()},next:this.next,disabled:n,rtl:o})},e.prototype.renderButtonGroups=function(){var n=this,r=this.props.customButtonGroup;return r?Qe.cloneElement(r,{previous:function(){return n.previous()},next:function(){return n.next()},goToSlide:function(i,s){return n.goToSlide(i,s)},carouselState:this.getState()}):null},e.prototype.renderDotsList=function(){var n=this;return Qe.createElement(P7.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return n.getState()}})},e.prototype.renderCarouselItems=function(){var n=[];if(this.props.infinite){var r=Qe.Children.toArray(this.props.children);n=Ne.getClones(this.state.slidesToShow,r)}return Qe.createElement(b7.default,{clones:n,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:Ne.notEnoughChildren(this.state),props:this.props})},e.prototype.render=function(){var n=this.props,r=n.deviceType,i=n.arrows,s=n.renderArrowsWhenDisabled,o=n.removeArrowOnDeviceType,a=n.infinite,u=n.containerClass,c=n.sliderClass,h=n.customTransition,p=n.additionalTransfrom,g=n.renderDotsOutside,_=n.renderButtonGroupOutside,S=n.className,R=n.rtl,P=Ne.getInitialState(this.state,this.props),x=P.shouldRenderOnSSR,w=P.shouldRenderAtAll,T=Ne.isInLeftEnd(this.state),b=Ne.isInRightEnd(this.state),j=i&&!(o&&(r&&-1<o.indexOf(r)||this.state.deviceType&&-1<o.indexOf(this.state.deviceType)))&&!Ne.notEnoughChildren(this.state)&&w,L=!a&&T,y=!a&&b,v=su.getTransform(this.state,this.props);return Qe.createElement(Qe.Fragment,null,Qe.createElement("div",{className:"react-multi-carousel-list "+u+" "+S,dir:R?"rtl":"ltr",ref:this.containerRef},Qe.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+c,style:{transition:this.isAnimationAllowed?h||l_:"none",overflow:x?"hidden":"unset",transform:"translate3d("+(v+p)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),j&&(!L||s)&&this.renderLeftArrow(L),j&&(!y||s)&&this.renderRightArrow(y),w&&!_&&this.renderButtonGroups(),w&&!g&&this.renderDotsList()),w&&g&&this.renderDotsList(),w&&_&&this.renderButtonGroups())},e.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},e}(Qe.Component);Ug.default=N7;Object.defineProperty(zg,"__esModule",{value:!0});var O7=Ug;zg.default=O7.default;var D7=zg;const Lp=w_(D7),j7=de.div`
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
`,L7={desktop:{breakpoint:{max:3e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}},M7=[{id:1,name:"Joseph Siant",comment:"The quality of Fresh Bite's fruits, vegetables, and dairy products is consistently top-notch. Everything is always fresh, well-packed, and delivered on time. I couldn't ask for better service!",star:"3.5"},{id:2,name:"Mark Tommy",comment:"Fresh Bite has completely changed the way I shop for groceries. The convenience of having fresh produce delivered to my door is unbeatable, and the products are always in perfect condition.",star:"4.5"},{id:3,name:"Alina Sander",comment:"I've been using Fresh Bite for a few months now, and I'm really impressed. The variety of fresh fruits, vegetables, and dairy is fantastic, and I always receive my orders exactly as requested.",star:"4.5"},{id:4,name:"John Anthony",comment:"Fresh Bite makes healthy eating so much easier! The freshness of their products is unmatched, and the ease of online ordering and fast delivery has saved me so much time in my busy schedule.",star:"3.5"}],V7=()=>d.jsx(d.Fragment,{children:d.jsxs(j7,{children:[d.jsx("h1",{children:"Testimonials"}),d.jsx("h7",{children:"See what our clients are saying about us"}),d.jsx(Lp,{responsive:L7,showDots:!0,autoPlay:!0,autoPlaySpeed:5e3,infinite:!0,dotListClass:"custom-dot-list",itemClass:"carousel-item-padding-40-px",arrows:!1,pauseOnHover:!1,children:M7.map(t=>d.jsxs("div",{className:"container",children:[d.jsx("p",{className:"card-text",children:t.comment}),d.jsx("h5",{className:"card-title",children:t.name}),d.jsx("div",{className:"stars",children:Array.from({length:t.star},(e,n)=>d.jsx("span",{children:"★"},n))})]},t.id))})]})});function F7(t){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"},child:[]}]})(t)}function z7(t){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M448 0C200.974 0 0 200.974 0 448c0 192.526 122.082 357.042 292.882 420.282-4.919-43.857-4.147-115.682 3.97-150.457 7.602-32.666 49.11-208.167 49.11-208.167S333.43 484.563 333.43 447.5c0-58.244 33.744-101.7 75.767-101.7 35.742 0 52.977 26.834 52.977 58.984 0 35.951-22.857 89.652-34.696 139.422-9.873 41.702 20.907 75.703 62.012 75.703 74.431 0 131.644-78.49 131.644-191.77 0-100.266-72.03-170.38-174.906-170.38-119.144 0-189.081 89.377-189.081 181.752 0 35.983 13.852 74.575 31.167 95.579 3.414 4.155 3.914 7.78 2.9 12-3.174 13.223-10.228 41.669-11.63 47.499-1.82 7.683-6.073 9.278-13.998 5.589-52.314-24.354-85.012-100.813-85.012-162.246 0-132.093 95.965-253.428 276.718-253.428 145.286 0 258.18 103.504 258.18 241.88 0 144.334-91.02 260.482-217.316 260.482-42.441 0-82.323-22.05-95.965-48.096 0 0-21.003 79.956-26.11 99.558-8.813 33.9-46.539 104.13-65.477 136.03A446.164 446.164 0 0 0 448 896c247.035 0 448-200.965 448-448C896 200.974 695.035 0 448 0",transform:"translate(64 64)"},child:[]}]})(t)}function U7(t){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"},child:[]}]})(t)}function Lu(t){return we({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{cx:"176",cy:"416",r:"32"},child:[]},{tag:"circle",attr:{cx:"400",cy:"416",r:"32"},child:[]},{tag:"path",attr:{d:"M167.78 304h261.34l38.4-192H133.89l-8.47-48H32v32h66.58l48 272H432v-32H173.42l-5.64-32z"},child:[]}]})(t)}function $7(t){return we({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M349.13 136.86c-40.32 0-57.36 19.24-85.44 19.24-28.79 0-50.75-19.1-85.69-19.1-34.2 0-70.67 20.88-93.83 56.45-32.52 50.16-27 144.63 25.67 225.11 18.84 28.81 44 61.12 77 61.47h.6c28.68 0 37.2-18.78 76.67-19h.6c38.88 0 46.68 18.89 75.24 18.89h.6c33-.35 59.51-36.15 78.35-64.85 13.56-20.64 18.6-31 29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48z"},child:[]},{tag:"path",attr:{d:"M340.25 32c-24 1.63-52 16.91-68.4 36.86-14.88 18.08-27.12 44.9-22.32 70.91h1.92c25.56 0 51.72-15.39 67-35.11 14.72-18.77 25.88-45.37 21.8-72.66z"},child:[]}]})(t)}function B7(t){return we({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0 0 48 59.49zM345.8 174 89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z"},child:[]}]})(t)}function W7(t){return we({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 6 C 3.355 6 2 7.355 2 9 L 2 23 C 2 24.645 3.355 26 5 26 L 27 26 C 28.645 26 30 24.645 30 23 L 30 9 C 30 7.355 28.645 6 27 6 L 5 6 z M 5 8 L 27 8 C 27.566 8 28 8.434 28 9 L 28 23 C 28 23.566 27.566 24 27 24 L 5 24 C 4.434 24 4 23.566 4 23 L 4 9 C 4 8.434 4.434 8 5 8 z M 11.523438 10 L 11.382812 10.023438 C 10.942813 10.078437 10.516109 10.243719 10.162109 10.511719 C 10.083109 10.558719 10.014547 10.622547 9.9355469 10.685547 C 9.9275469 10.669547 9.9199219 10.654672 9.9199219 10.638672 C 9.9039219 10.551672 9.8958594 10.457094 9.8808594 10.371094 C 9.8568594 10.229094 9.7787187 10.158203 9.6367188 10.158203 L 9.265625 10.158203 C 9.038625 10.156203 9 10.204781 9 10.425781 L 9 17.25 C 9.008 17.352 9.07025 17.406062 9.15625 17.414062 L 9.8417969 17.414062 C 9.9357969 17.414062 9.9900469 17.352 9.9980469 17.25 C 10.006047 17.219 10.005859 17.18725 10.005859 17.15625 L 10.005859 14.828125 C 10.036859 14.859125 10.060172 14.876578 10.076172 14.892578 C 10.650172 15.372578 11.311156 15.528719 12.035156 15.386719 C 12.696156 15.252719 13.152359 14.852672 13.443359 14.263672 C 13.671359 13.815672 13.765437 13.334844 13.773438 12.839844 C 13.789438 12.295844 13.741672 11.753187 13.513672 11.242188 C 13.246672 10.613188 12.789469 10.195687 12.105469 10.054688 C 12.003469 10.030688 11.894016 10.023813 11.791016 10.007812 C 11.697016 9.9998125 11.610438 10 11.523438 10 z M 16.525391 10 C 16.494391 10.008 16.462641 10.015625 16.431641 10.015625 C 16.116641 10.031625 15.810906 10.071391 15.503906 10.150391 C 15.306906 10.197391 15.118687 10.267078 14.929688 10.330078 C 14.811687 10.369078 14.755859 10.456031 14.755859 10.582031 C 14.763859 10.684031 14.755859 10.794484 14.755859 10.896484 C 14.763859 11.053484 14.827562 11.094688 14.976562 11.054688 C 15.228563 10.991687 15.478469 10.920047 15.730469 10.873047 C 16.123469 10.802047 16.524781 10.771172 16.925781 10.826172 C 17.137781 10.865172 17.33475 10.920562 17.46875 11.101562 C 17.58675 11.250562 17.634578 11.439906 17.642578 11.628906 C 17.650578 11.895906 17.650391 12.162687 17.650391 12.429688 C 17.650391 12.445688 17.650578 12.46075 17.642578 12.46875 L 17.603516 12.46875 C 17.265516 12.38275 16.918266 12.3355 16.572266 12.3125 C 16.210266 12.2965 15.849906 12.3115 15.503906 12.4375 C 15.086906 12.5795 14.748734 12.831234 14.552734 13.240234 C 14.403734 13.554234 14.380734 13.884656 14.427734 14.222656 C 14.498734 14.678656 14.718141 15.024141 15.119141 15.244141 C 15.504141 15.456141 15.912891 15.480969 16.337891 15.417969 C 16.825891 15.346969 17.257766 15.143125 17.634766 14.828125 C 17.650766 14.812125 17.665641 14.804063 17.681641 14.789062 C 17.705641 14.915062 17.720141 15.032578 17.744141 15.142578 C 17.760141 15.244578 17.823969 15.308406 17.917969 15.316406 L 18.445312 15.316406 C 18.524313 15.316406 18.59375 15.244203 18.59375 15.158203 C 18.60175 15.134203 18.601562 15.104266 18.601562 15.072266 L 18.601562 11.658203 C 18.599563 11.524203 18.591359 11.384 18.568359 11.25 C 18.505359 10.833 18.332078 10.487578 17.955078 10.267578 C 17.743078 10.141578 17.507859 10.078063 17.255859 10.039062 C 17.137859 10.023062 17.028156 10.015 16.910156 10 L 16.525391 10 z M 23.240234 10 C 23.130234 9.992 23.027281 10.062062 22.988281 10.164062 C 22.972281 10.212062 22.957406 10.251828 22.941406 10.298828 L 21.816406 13.515625 C 21.737406 13.743625 21.651266 13.978469 21.572266 14.230469 C 21.557266 14.190469 21.550969 14.176344 21.542969 14.152344 C 21.126969 13.004344 20.717781 11.855031 20.300781 10.707031 C 20.238781 10.519031 20.166703 10.339203 20.095703 10.158203 C 20.064703 10.072203 19.994578 10.009766 19.892578 10.009766 C 19.648578 10.001766 19.404344 10.001953 19.152344 10.001953 C 19.074344 10.001953 19.034781 10.071391 19.050781 10.150391 C 19.066781 10.213391 19.089281 10.284656 19.113281 10.347656 C 19.742281 11.903656 20.380578 13.460391 21.017578 15.025391 C 21.072578 15.158391 21.080578 15.268344 21.017578 15.402344 C 20.915578 15.638344 20.82875 15.881187 20.71875 16.117188 C 20.62375 16.329187 20.466469 16.487781 20.230469 16.550781 C 20.073469 16.589781 19.899375 16.604078 19.734375 16.580078 C 19.655375 16.573078 19.577047 16.558781 19.498047 16.550781 C 19.388047 16.542781 19.334172 16.589031 19.326172 16.707031 L 19.326172 17.021484 C 19.334172 17.202484 19.389312 17.2815 19.570312 17.3125 C 19.743312 17.3445 19.924281 17.368953 20.113281 17.376953 C 20.663281 17.384953 21.095906 17.163594 21.378906 16.683594 C 21.496906 16.494594 21.591734 16.29775 21.677734 16.09375 C 22.439734 14.16775 23.194219 12.248453 23.949219 10.314453 C 23.972219 10.259453 23.988094 10.205578 23.996094 10.142578 C 24.012094 10.048578 23.965953 10.001 23.876953 10 L 23.240234 10 z M 11.517578 10.818359 C 11.997578 10.857359 12.38975 11.092391 12.59375 11.650391 C 12.71975 11.996391 12.751953 12.351891 12.751953 12.712891 C 12.751953 13.051891 12.727 13.372312 12.625 13.695312 C 12.405 14.379312 11.902812 14.646234 11.257812 14.615234 C 10.801813 14.591234 10.416688 14.418969 10.054688 14.167969 C 10.015688 14.143969 9.9900469 14.105406 9.9980469 14.066406 L 9.9980469 11.353516 C 9.9900469 11.306516 10.015687 11.266187 10.054688 11.242188 C 10.494687 10.935187 10.982578 10.779359 11.517578 10.818359 z M 16.378906 12.998047 C 16.513656 12.986297 16.649703 12.988406 16.783203 13.003906 C 17.050203 13.027906 17.318937 13.074281 17.585938 13.113281 C 17.640937 13.121281 17.65625 13.145359 17.65625 13.193359 C 17.64925 13.350359 17.65625 13.49925 17.65625 13.65625 C 17.65625 13.81325 17.648437 13.954328 17.648438 14.111328 C 17.656437 14.150328 17.632563 14.182078 17.601562 14.205078 C 17.239563 14.464078 16.846437 14.637547 16.398438 14.685547 C 16.217437 14.701547 16.036281 14.701859 15.863281 14.630859 C 15.666281 14.559859 15.517891 14.395219 15.462891 14.199219 C 15.399891 13.995219 15.398125 13.782125 15.453125 13.578125 C 15.539125 13.311125 15.728469 13.160219 15.980469 13.074219 C 16.109969 13.034719 16.244156 13.009797 16.378906 12.998047 z M 24.53125 17.498047 C 23.83125 17.507797 23.003953 17.663516 22.376953 18.103516 C 22.182953 18.237516 22.218594 18.425391 22.433594 18.400391 C 23.138594 18.316391 24.707281 18.125375 24.988281 18.484375 C 25.269281 18.843375 24.676063 20.321422 24.414062 20.982422 C 24.332062 21.179422 24.504547 21.261328 24.685547 21.111328 C 25.858547 20.128328 26.163828 18.069437 25.923828 17.773438 C 25.803828 17.625438 25.23125 17.488297 24.53125 17.498047 z M 6.1445312 17.890625 C 5.9989375 17.909797 5.9356406 18.088266 6.0878906 18.228516 C 8.6998906 20.584516 12.149469 22 15.980469 22 C 18.713469 22 21.886172 21.141391 24.076172 19.525391 C 24.438172 19.257391 24.130766 18.855625 23.759766 19.015625 C 21.303766 20.057625 18.635984 20.558594 16.208984 20.558594 C 12.611984 20.558594 9.1295 19.572641 6.3125 17.931641 C 6.25075 17.895641 6.1930625 17.884234 6.1445312 17.890625 z"},child:[]}]})(t)}function H7(t){return we({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 6 C 3.355 6 2 7.355 2 9 L 2 23 C 2 24.645 3.355 26 5 26 L 27 26 C 28.645 26 30 24.645 30 23 L 30 9 C 30 7.355 28.645 6 27 6 L 5 6 z M 5 8 L 27 8 C 27.566 8 28 8.434 28 9 L 28 23 C 28 23.566 27.566 24 27 24 L 5 24 C 4.434 24 4 23.566 4 23 L 4 9 C 4 8.434 4.434 8 5 8 z M 10.998047 11 C 10.533047 11 10.002203 11.265344 9.6582031 11.652344 C 9.3922031 11.973344 9.103125 12.483187 9.203125 12.992188 C 9.680125 13.048187 10.201 12.749328 10.5 12.361328 C 10.832 12.007328 11.020047 11.509 10.998047 11 z M 13 13 L 13 19 L 13.931641 19 L 13.931641 16.945312 L 15.228516 16.945312 C 16.403516 16.945312 17.234375 16.136656 17.234375 14.972656 C 17.234375 13.797656 16.414 13 15.25 13 L 13 13 z M 7.8378906 13.523438 C 6.7988906 13.523438 6 14.433281 6 15.738281 C 6 17.438281 7.1944531 19 7.9394531 19 C 8.3894531 19 8.5543437 18.697266 9.1523438 18.697266 C 9.7033437 18.697266 9.8767031 19 10.345703 19 C 11.236703 19 11.972 17.190078 12 17.080078 C 11.853 17.006078 10.997047 16.602906 10.998047 15.628906 C 10.998047 14.682906 11.779406 14.258234 11.816406 14.240234 C 11.384406 13.597234 10.704266 13.523438 10.447266 13.523438 C 9.8502656 13.523438 9.3279688 13.845703 9.0429688 13.845703 C 8.7489688 13.845703 8.3158906 13.523438 7.8378906 13.523438 z M 13.931641 13.787109 L 15.005859 13.787109 C 15.814859 13.787109 16.28125 14.218656 16.28125 14.972656 C 16.28125 15.726656 15.814859 16.169922 15.005859 16.169922 L 13.931641 16.169922 L 13.931641 13.787109 z M 19.429688 14.53125 C 18.443687 14.53125 17.711453 15.097047 17.689453 15.873047 L 18.53125 15.873047 C 18.59825 15.507047 18.94025 15.263672 19.40625 15.263672 C 19.98225 15.263672 20.294922 15.529578 20.294922 16.017578 L 20.294922 16.349609 L 19.130859 16.427734 C 18.055859 16.494734 17.466797 16.938125 17.466797 17.703125 C 17.466797 18.479125 18.065688 19 18.929688 19 C 19.516687 19 20.061688 18.700375 20.304688 18.234375 L 20.326172 18.234375 L 20.326172 18.955078 L 21.191406 18.955078 L 21.191406 15.962891 C 21.191406 15.097891 20.493688 14.53125 19.429688 14.53125 z M 21.574219 14.587891 L 23.148438 18.966797 L 23.070312 19.232422 C 22.926313 19.676422 22.693203 19.853516 22.283203 19.853516 C 22.206203 19.853516 22.062812 19.841797 22.007812 19.841797 L 22.007812 20.5625 C 22.063813 20.5735 22.294328 20.583984 22.361328 20.583984 C 23.270328 20.583984 23.703078 20.2295 24.080078 19.1875 L 25.708984 14.587891 L 24.765625 14.587891 L 23.669922 18.134766 L 23.646484 18.134766 L 22.550781 14.587891 L 21.574219 14.587891 z M 20.294922 16.980469 L 20.294922 17.314453 L 20.292969 17.314453 C 20.292969 17.879453 19.816547 18.277344 19.185547 18.277344 C 18.686547 18.277344 18.376953 18.045688 18.376953 17.679688 C 18.376953 17.302688 18.675672 17.079875 19.263672 17.046875 L 20.294922 16.980469 z"},child:[]}]})(t)}function q7(t){return we({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 6 C 3.355469 6 2 7.355469 2 9 L 2 23 C 2 24.644531 3.355469 26 5 26 L 27 26 C 28.644531 26 30 24.644531 30 23 L 30 9 C 30 7.355469 28.644531 6 27 6 Z M 5 8 L 27 8 C 27.566406 8 28 8.433594 28 9 L 28 23 C 28 23.566406 27.566406 24 27 24 L 5 24 C 4.433594 24 4 23.566406 4 23 L 4 9 C 4 8.433594 4.433594 8 5 8 Z M 12 9 C 8.144531 9 5 12.144531 5 16 C 5 19.855469 8.144531 23 12 23 C 13.484375 23 14.863281 22.546875 16 21.75 C 17.132813 22.542969 18.511719 23 20 23 C 23.855469 23 27 19.855469 27 16 C 27 12.144531 23.855469 9 20 9 C 18.511719 9 17.132813 9.457031 16 10.25 C 14.863281 9.453125 13.484375 9 12 9 Z M 12 11 C 13.28125 11 14.429688 11.496094 15.3125 12.28125 C 14.902344 12.792969 14.566406 13.371094 14.34375 14 L 16.5625 14 C 16.703125 14.320313 16.835938 14.652344 16.90625 15 L 14.09375 15 C 14.039063 15.324219 14 15.65625 14 16 C 14 16.34375 14.039063 16.675781 14.09375 17 L 16.90625 17 C 16.835938 17.347656 16.703125 17.679688 16.5625 18 L 14.34375 18 C 14.566406 18.628906 14.902344 19.207031 15.3125 19.71875 C 14.429688 20.503906 13.28125 21 12 21 C 9.226563 21 7 18.773438 7 16 C 7 13.226563 9.226563 11 12 11 Z M 20 11 C 22.773438 11 25 13.226563 25 16 C 25 18.773438 22.773438 21 20 21 C 19.085938 21 18.238281 20.742188 17.5 20.3125 C 18.441406 19.121094 19 17.628906 19 16 C 19 14.371094 18.441406 12.878906 17.5 11.6875 C 18.238281 11.257813 19.085938 11 20 11 Z"},child:[]}]})(t)}function K7(t){return we({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 6 C 3.355469 6 2 7.355469 2 9 L 2 23 C 2 24.644531 3.355469 26 5 26 L 27 26 C 28.644531 26 30 24.644531 30 23 L 30 9 C 30 7.355469 28.644531 6 27 6 Z M 5 8 L 27 8 C 27.566406 8 28 8.433594 28 9 L 28 23 C 28 23.566406 27.566406 24 27 24 L 5 24 C 4.433594 24 4 23.566406 4 23 L 4 9 C 4 8.433594 4.433594 8 5 8 Z M 19.40625 12.375 C 17.480469 12.375 16.46875 13.324219 16.46875 14.53125 C 16.46875 16.710938 19.03125 16.410156 19.03125 17.53125 C 19.03125 17.722656 18.871094 18.15625 17.8125 18.15625 C 16.753906 18.15625 16.0625 17.78125 16.0625 17.78125 L 15.75 19.21875 C 15.75 19.21875 16.40625 19.625 17.71875 19.625 C 19.03125 19.625 20.875 18.617188 20.875 17.15625 C 20.875 15.398438 18.3125 15.28125 18.3125 14.5 C 18.3125 14.101563 18.652344 13.78125 19.5625 13.78125 C 20.15625 13.78125 20.8125 14.25 20.8125 14.25 L 21.125 12.71875 C 21.125 12.71875 20.253906 12.375 19.40625 12.375 Z M 11.1875 12.5 L 9.5 17.4375 C 9.5 17.4375 9.414063 17.011719 9.375 16.75 C 8.421875 14.609375 6.875 13.8125 6.875 13.8125 L 8.34375 19.40625 L 10.34375 19.40625 L 13.15625 12.5 Z M 13.875 12.5 L 12.78125 19.40625 L 14.625 19.40625 L 15.71875 12.5 Z M 23.8125 12.5 L 20.8125 19.40625 L 22.625 19.40625 L 23 18.4375 L 25.3125 18.4375 L 25.5 19.40625 L 27.15625 19.40625 L 25.75 12.5 Z M 4.84375 12.53125 C 4.84375 12.53125 8.441406 13.632813 9.28125 16.34375 L 8.65625 13.21875 C 8.65625 13.21875 8.382813 12.53125 7.65625 12.53125 Z M 24.5 14.5 L 25.03125 17.09375 L 23.53125 17.09375 Z"},child:[]}]})(t)}const G7=de.div`
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
`,Ei=()=>d.jsx(d.Fragment,{children:d.jsxs(G7,{children:[d.jsxs("div",{className:"links",children:[d.jsx("a",{href:"#about",children:"About us"}),d.jsx("a",{href:"#contact",children:"Contact us"}),d.jsx("a",{href:"#shipping",children:"Shipping Policy"}),d.jsx("a",{href:"#refund",children:"Refund Policy"}),d.jsx("a",{href:"#privacy",children:"Privacy Policy"}),d.jsx("a",{href:"#deliverey",children:"Deliverey Info"}),d.jsx("a",{href:"#terms",children:"Terms & Conditions"})]}),d.jsxs("div",{className:"info",children:[d.jsx("h4",{children:"Estore"}),d.jsxs("p",{className:"desc",children:["We're at the Estore, an innovative team of food engineers. Our unique ",d.jsx("br",{})," model minimizes fresh food handling by up to 85%, sourcing locally and ",d.jsx("br",{})," dispatching within hours through cold chain logistics in eco-friendly ",d.jsx("br",{})," containers."]}),d.jsx("p",{className:"mobile-desc",children:"We're at the Estore, an innovative team of food engineers. Our unique model minimizes fresh food handling by up to 85%, sourcing locally and dispatching within hours through cold chain logistics in eco-friendly containers."}),d.jsxs("div",{children:[d.jsxs("a",{href:"https://www.facebook.com",children:[" ",d.jsx(DN,{})," "]}),d.jsxs("a",{href:"https://www.instagram.com",children:[" ",d.jsx(F7,{})," "]}),d.jsxs("a",{href:"https://www.pinterest.com",children:[" ",d.jsx(z7,{})," "]}),d.jsxs("a",{href:"https://www.twitter.com",children:[" ",d.jsx(U7,{})," "]})]})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"store",children:[d.jsx("h5",{children:"Download Our App"}),d.jsxs("a",{href:"https://www.googleplaystore.com",children:[" ",d.jsx(B7,{color:"white",size:"1.1rem",className:"store-icon"})," Play Store"]}),d.jsxs("a",{href:"https://www.applestore.com",children:[" ",d.jsx($7,{color:"white",size:"1.1rem",className:"store-icon"})," App Store"]})]}),d.jsxs("div",{className:"payment",children:[d.jsx("h5",{children:"Payment Gateway"}),d.jsxs("div",{className:"payment-icons",children:[d.jsx(q7,{size:"2.5rem"}),d.jsx(H7,{size:"2.5rem"}),d.jsx(K7,{size:"2.5rem"}),d.jsx(W7,{size:"2.5rem"})]})]})]})]})}),u_=()=>{const[t,e]=D.useState(!0);return D.useContext(Gx),D.useEffect(()=>{const n=setTimeout(()=>{e(!1)},1500);return()=>clearTimeout(n)},[]),d.jsx(d.Fragment,{children:t?d.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",d.jsx(rs,{size:60,color:"red"})," "]}):d.jsxs(d.Fragment,{children:[d.jsx(_i,{}),d.jsx(PN,{}),d.jsx(MN,{}),d.jsx($N,{}),d.jsx(qN,{}),d.jsx(V7,{}),d.jsx(WN,{}),d.jsx(Ei,{})]})})};function Q7(t){return we({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"},child:[]}]})(t)}function Ye(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var Y7=typeof Symbol=="function"&&Symbol.observable||"@@observable",c_=Y7,Zh=()=>Math.random().toString(36).substring(7).split("").join("."),X7={INIT:`@@redux/INIT${Zh()}`,REPLACE:`@@redux/REPLACE${Zh()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Zh()}`},Vc=X7;function Qg(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function tS(t,e,n){if(typeof t!="function")throw new Error(Ye(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ye(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ye(1));return n(tS)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,u=!1;function c(){o===s&&(o=new Map,s.forEach((P,x)=>{o.set(x,P)}))}function h(){if(u)throw new Error(Ye(3));return i}function p(P){if(typeof P!="function")throw new Error(Ye(4));if(u)throw new Error(Ye(5));let x=!0;c();const w=a++;return o.set(w,P),function(){if(x){if(u)throw new Error(Ye(6));x=!1,c(),o.delete(w),s=null}}}function g(P){if(!Qg(P))throw new Error(Ye(7));if(typeof P.type>"u")throw new Error(Ye(8));if(typeof P.type!="string")throw new Error(Ye(17));if(u)throw new Error(Ye(9));try{u=!0,i=r(i,P)}finally{u=!1}return(s=o).forEach(w=>{w()}),P}function _(P){if(typeof P!="function")throw new Error(Ye(10));r=P,g({type:Vc.REPLACE})}function S(){const P=p;return{subscribe(x){if(typeof x!="object"||x===null)throw new Error(Ye(11));function w(){const b=x;b.next&&b.next(h())}return w(),{unsubscribe:P(w)}},[c_](){return this}}}return g({type:Vc.INIT}),{dispatch:g,subscribe:p,getState:h,replaceReducer:_,[c_]:S}}function J7(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Vc.INIT})>"u")throw new Error(Ye(12));if(typeof n(void 0,{type:Vc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ye(13))})}function Z7(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{J7(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let u=!1;const c={};for(let h=0;h<r.length;h++){const p=r[h],g=n[p],_=o[p],S=g(_,a);if(typeof S>"u")throw a&&a.type,new Error(Ye(14));c[p]=S,u=u||S!==_}return u=u||r.length!==Object.keys(o).length,u?c:o}}function Fc(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function eO(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(Ye(15))};const o={getState:i.getState,dispatch:(u,...c)=>s(u,...c)},a=t.map(u=>u(o));return s=Fc(...a)(i.dispatch),{...i,dispatch:s}}}function tO(t){return Qg(t)&&"type"in t&&typeof t.type=="string"}var nS=Symbol.for("immer-nothing"),d_=Symbol.for("immer-draftable"),Ht=Symbol.for("immer-state");function fn(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var so=Object.getPrototypeOf;function qi(t){return!!t&&!!t[Ht]}function fr(t){var e;return t?rS(t)||Array.isArray(t)||!!t[d_]||!!((e=t.constructor)!=null&&e[d_])||Md(t)||Vd(t):!1}var nO=Object.prototype.constructor.toString();function rS(t){if(!t||typeof t!="object")return!1;const e=so(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===nO}function zc(t,e){Ld(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function Ld(t){const e=t[Ht];return e?e.type_:Array.isArray(t)?1:Md(t)?2:Vd(t)?3:0}function Mp(t,e){return Ld(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function iS(t,e,n){const r=Ld(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function rO(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Md(t){return t instanceof Map}function Vd(t){return t instanceof Set}function Ti(t){return t.copy_||t.base_}function Vp(t,e){if(Md(t))return new Map(t);if(Vd(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=rS(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[Ht];let i=Reflect.ownKeys(r);for(let s=0;s<i.length;s++){const o=i[s],a=r[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[o]})}return Object.create(so(t),r)}else{const r=so(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function Yg(t,e=!1){return Fd(t)||qi(t)||!fr(t)||(Ld(t)>1&&(t.set=t.add=t.clear=t.delete=iO),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>Yg(r,!0))),t}function iO(){fn(2)}function Fd(t){return Object.isFrozen(t)}var sO={};function Ki(t){const e=sO[t];return e||fn(0,t),e}var Ba;function sS(){return Ba}function oO(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function h_(t,e){e&&(Ki("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Fp(t){zp(t),t.drafts_.forEach(aO),t.drafts_=null}function zp(t){t===Ba&&(Ba=t.parent_)}function f_(t){return Ba=oO(Ba,t)}function aO(t){const e=t[Ht];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function p_(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Ht].modified_&&(Fp(e),fn(4)),fr(t)&&(t=Uc(e,t),e.parent_||$c(e,t)),e.patches_&&Ki("Patches").generateReplacementPatches_(n[Ht].base_,t,e.patches_,e.inversePatches_)):t=Uc(e,n,[]),Fp(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==nS?t:void 0}function Uc(t,e,n){if(Fd(e))return e;const r=e[Ht];if(!r)return zc(e,(i,s)=>m_(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return $c(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),zc(s,(a,u)=>m_(t,r,i,a,u,n,o)),$c(t,i,!1),n&&t.patches_&&Ki("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function m_(t,e,n,r,i,s,o){if(qi(i)){const a=s&&e&&e.type_!==3&&!Mp(e.assigned_,r)?s.concat(r):void 0,u=Uc(t,i,a);if(iS(n,r,u),qi(u))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(fr(i)&&!Fd(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Uc(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&$c(t,i)}}function $c(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Yg(e,n)}function lO(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:sS(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=Xg;n&&(i=[r],s=Wa);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var Xg={get(t,e){if(e===Ht)return t;const n=Ti(t);if(!Mp(n,e))return uO(t,n,e);const r=n[e];return t.finalized_||!fr(r)?r:r===ef(t.base_,e)?(tf(t),t.copy_[e]=$p(r,t)):r},has(t,e){return e in Ti(t)},ownKeys(t){return Reflect.ownKeys(Ti(t))},set(t,e,n){const r=oS(Ti(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=ef(Ti(t),e),s=i==null?void 0:i[Ht];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(rO(n,i)&&(n!==void 0||Mp(t.base_,e)))return!0;tf(t),Up(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return ef(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,tf(t),Up(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Ti(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){fn(11)},getPrototypeOf(t){return so(t.base_)},setPrototypeOf(){fn(12)}},Wa={};zc(Xg,(t,e)=>{Wa[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Wa.deleteProperty=function(t,e){return Wa.set.call(this,t,e,void 0)};Wa.set=function(t,e,n){return Xg.set.call(this,t[0],e,n,t[0])};function ef(t,e){const n=t[Ht];return(n?Ti(n):t)[e]}function uO(t,e,n){var i;const r=oS(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function oS(t,e){if(!(e in t))return;let n=so(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=so(n)}}function Up(t){t.modified_||(t.modified_=!0,t.parent_&&Up(t.parent_))}function tf(t){t.copy_||(t.copy_=Vp(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var cO=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(u=s,...c){return o.produce(u,h=>n.call(this,h,...c))}}typeof n!="function"&&fn(6),r!==void 0&&typeof r!="function"&&fn(7);let i;if(fr(e)){const s=f_(this),o=$p(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Fp(s):zp(s)}return h_(s,r),p_(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===nS&&(i=void 0),this.autoFreeze_&&Yg(i,!0),r){const s=[],o=[];Ki("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else fn(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,u=>e(u,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){fr(t)||fn(8),qi(t)&&(t=dO(t));const e=f_(this),n=$p(t,void 0);return n[Ht].isManual_=!0,zp(e),n}finishDraft(t,e){const n=t&&t[Ht];(!n||!n.isManual_)&&fn(9);const{scope_:r}=n;return h_(r,e),p_(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Ki("Patches").applyPatches_;return qi(t)?r(t,e):this.produce(t,i=>r(i,e))}};function $p(t,e){const n=Md(t)?Ki("MapSet").proxyMap_(t,e):Vd(t)?Ki("MapSet").proxySet_(t,e):lO(t,e);return(e?e.scope_:sS()).drafts_.push(n),n}function dO(t){return qi(t)||fn(10,t),aS(t)}function aS(t){if(!fr(t)||Fd(t))return t;const e=t[Ht];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Vp(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Vp(t,!0);return zc(n,(r,i)=>{iS(n,r,aS(i))}),e&&(e.finalized_=!1),n}var qt=new cO,lS=qt.produce;qt.produceWithPatches.bind(qt);qt.setAutoFreeze.bind(qt);qt.setUseStrictShallowCopy.bind(qt);qt.applyPatches.bind(qt);qt.createDraft.bind(qt);qt.finishDraft.bind(qt);function uS(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var hO=uS(),fO=uS,pO=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Fc:Fc.apply(null,arguments)};function g_(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(En(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>tO(r)&&r.type===t,n}var cS=class Xo extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Xo.prototype)}static get[Symbol.species](){return Xo}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Xo(...e[0].concat(this)):new Xo(...e.concat(this))}};function y_(t){return fr(t)?lS(t,()=>{}):t}function v_(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(En(10));const r=n.insert(e,t);return t.set(e,r),r}function mO(t){return typeof t=="boolean"}var gO=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new cS;return n&&(mO(n)?o.push(hO):o.push(fO(n.extraArgument))),o},yO="RTK_autoBatch",dS=t=>e=>{setTimeout(e,t)},vO=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:dS(10),_O=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,u=t.type==="tick"?queueMicrotask:t.type==="raf"?vO:t.type==="callback"?t.queueNotification:dS(t.timeout),c=()=>{o=!1,s&&(s=!1,a.forEach(h=>h()))};return Object.assign({},r,{subscribe(h){const p=()=>i&&h(),g=r.subscribe(p);return a.add(h),()=>{g(),a.delete(h)}},dispatch(h){var p;try{return i=!((p=h==null?void 0:h.meta)!=null&&p[yO]),s=!i,s&&(o||(o=!0,u(c))),r.dispatch(h)}finally{i=!0}}})},wO=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new cS(t);return r&&i.push(_O(typeof r=="object"?r:void 0)),i};function EO(t){const e=gO(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(Qg(n))a=Z7(n);else throw new Error(En(1));let u;typeof r=="function"?u=r(e):u=e();let c=Fc;i&&(c=pO({trace:!1,...typeof i=="object"&&i}));const h=eO(...u),p=wO(h);let g=typeof o=="function"?o(p):p();const _=c(...g);return tS(a,s,_)}function hS(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(En(28));if(a in e)throw new Error(En(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function TO(t){return typeof t=="function"}function xO(t,e){let[n,r,i]=hS(e),s;if(TO(t))s=()=>y_(t());else{const a=y_(t);s=()=>a}function o(a=s(),u){let c=[n[u.type],...r.filter(({matcher:h})=>h(u)).map(({reducer:h})=>h)];return c.filter(h=>!!h).length===0&&(c=[i]),c.reduce((h,p)=>{if(p)if(qi(h)){const _=p(h,u);return _===void 0?h:_}else{if(fr(h))return lS(h,g=>p(g,u));{const g=p(h,u);if(g===void 0){if(h===null)return h;throw new Error(En(9))}return g}}return h},a)}return o.getInitialState=s,o}var SO=Symbol.for("rtk-slice-createasyncthunk");function IO(t,e){return`${t}/${e}`}function CO({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[SO];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(En(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(kO()):i.reducers)||{},u=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},h={addCase(T,b){const j=typeof T=="string"?T:T.type;if(!j)throw new Error(En(12));if(j in c.sliceCaseReducersByType)throw new Error(En(13));return c.sliceCaseReducersByType[j]=b,h},addMatcher(T,b){return c.sliceMatchers.push({matcher:T,reducer:b}),h},exposeAction(T,b){return c.actionCreators[T]=b,h},exposeCaseReducer(T,b){return c.sliceCaseReducersByName[T]=b,h}};u.forEach(T=>{const b=a[T],j={reducerName:T,type:IO(s,T),createNotation:typeof i.reducers=="function"};PO(b)?NO(j,b,h,e):AO(j,b,h)});function p(){const[T={},b=[],j=void 0]=typeof i.extraReducers=="function"?hS(i.extraReducers):[i.extraReducers],L={...T,...c.sliceCaseReducersByType};return xO(i.initialState,y=>{for(let v in L)y.addCase(v,L[v]);for(let v of c.sliceMatchers)y.addMatcher(v.matcher,v.reducer);for(let v of b)y.addMatcher(v.matcher,v.reducer);j&&y.addDefaultCase(j)})}const g=T=>T,_=new Map;let S;function R(T,b){return S||(S=p()),S(T,b)}function P(){return S||(S=p()),S.getInitialState()}function x(T,b=!1){function j(y){let v=y[T];return typeof v>"u"&&b&&(v=P()),v}function L(y=g){const v=v_(_,b,{insert:()=>new WeakMap});return v_(v,y,{insert:()=>{const I={};for(const[C,k]of Object.entries(i.selectors??{}))I[C]=RO(k,y,P,b);return I}})}return{reducerPath:T,getSelectors:L,get selectors(){return L(j)},selectSlice:j}}const w={name:s,reducer:R,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:P,...x(o),injectInto(T,{reducerPath:b,...j}={}){const L=b??o;return T.inject({reducerPath:L,reducer:R},j),{...w,...x(L,!0)}}};return w}}function RO(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var fS=CO();function kO(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function AO({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!bO(r))throw new Error(En(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?g_(t,o):g_(t))}function PO(t){return t._reducerDefinitionType==="asyncThunk"}function bO(t){return t._reducerDefinitionType==="reducerWithPrepare"}function NO({type:t,reducerName:e},n,r,i){if(!i)throw new Error(En(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:u,settled:c,options:h}=n,p=i(t,s,h);r.exposeAction(e,p),o&&r.addCase(p.fulfilled,o),a&&r.addCase(p.pending,a),u&&r.addCase(p.rejected,u),c&&r.addMatcher(p.settled,c),r.exposeCaseReducer(e,{fulfilled:o||ou,pending:a||ou,rejected:u||ou,settled:c||ou})}function ou(){}function En(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const OO=()=>{try{const t=localStorage.getItem("cartitem");return t?JSON.parse(t):[]}catch(t){return console.error("Error loading cart from localStorage:",t),[]}},DO=()=>{try{const t=localStorage.getItem("selectedproduct");return t?JSON.parse(t):null}catch{return console.error("Error loading in products from local storage"),null}},jO={items:OO(),counter:0,selectedproduct:DO(),totalitems:0,totalprice:0},LO=t=>{localStorage.setItem("cartitem",JSON.stringify(t)),localStorage.setItem("cartcount",t.length)},pS=fS({name:"cart",initialState:jO,reducers:{addtocart(t,e){t.items.push(e.payload),localStorage.setItem("cartitem",JSON.stringify(t.items)),console.log("New Product: ",localStorage.getItem("cartitem")),t.cartcount=t.items.length,LO(t.items)},deletefromcart(t,e){const n=t.items.filter(r=>r.id!=e.payload.id);t.items=n,localStorage.setItem("cartitem",JSON.stringify(t.items)),t.cartcount=t.items.length},increment(t,e){const n=t.items.findIndex(r=>r.id===e.payload.id);n>=0&&(t.items[n].quantity+=1)},decrement(t,e){const n=t.items.findIndex(r=>r.id===e.payload.id);n>=0&&t.items[n].quantity>1?t.items[n].quantity-=1:t.items=t.items.filter(r=>r.id!==e.payload.id)},clearcart:t=>{t.items=[],localStorage.setItem("cartitem",JSON.stringify(t.items)),t.cartcount=t.items.length},initializeCart:t=>{const e=localStorage.getItem("cartcount");t.cartcount=e?parseInt(e,10):0},productdetail:(t,e)=>{t.selectedproduct=e.payload,localStorage.setItem("selectedproduct",JSON.stringify(e.payload))}}}),mS=t=>t.cart.items.reduce((e,n)=>e+n.price*n.quantity,0),gS=t=>t.cart.items.reduce((e,n)=>e+(n.quantity+1-1),0),{addtocart:Jg,deletefromcart:MO,increment:VO,decrement:FO,clearcart:zO,initializeCart:UO,productdetail:$O,checkout:BO}=pS.actions,WO=pS.reducer,HO=()=>{try{const t=localStorage.getItem("wishlist");return t?JSON.parse(t):[]}catch(t){return console.log("Error in wishlist from local storage:",t),[]}},__=t=>{localStorage.setItem("wishlist",JSON.stringify(t)),localStorage.setItem("wishcount",JSON.stringify(t))},qO={items:HO()},yS=fS({name:"wishlist",initialState:qO,reducers:{addtowishlist(t,e){t.items.push(e.payload),localStorage.setItem("wishlist",JSON.stringify(t.items)),t.wishcount=t.items.length,__(t.items)},removefromwishlist(t,e){const n=t.items.filter(r=>r.id!==e.payload.id);t.items=n,localStorage.setItem("wishlist",JSON.stringify(t.items)),t.wishcount=t.items.length,__(t.items)}}}),{addtowishlist:KO,removefromwishlist:GO}=yS.actions,QO=yS.reducer,YO=de.section`
    margin: 10rem 2rem 5rem 2rem;
    display: block;
    justify-content: center;
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
`,XO=()=>{const[t,e]=D.useState([]),[n,r]=D.useState([]),[i,s]=D.useState(),[o,a]=D.useState(!0);D.useState([0,100]),D.useState("all");const[u,c]=D.useState(1),h=12,p=tl(),g=$t(y=>y.cart),_=$t(y=>y.wishlist);D.useEffect(()=>{(async()=>{try{const v=Lg(nr(rr,"shop")),C=(await Ls(v)).docs.map(k=>({id:k.id,...k.data()}));e(C),r(C),a(!1)}catch(v){console.log("Error:",v),a(!0)}})()},[]);const S=y=>{const v=y.target.value.toLowerCase();if(s(v),v==="")r(t);else{const I=t.filter(C=>C.name.toLowerCase().includes(v));r(I)}},R=u*h,P=R-h,x=n.slice(P,R),w=()=>{c(y=>y+1)},T=()=>{c(y=>Math.max(y-1,1))},b=y=>{g.items.some(I=>I.id===y.id)?je.error(`${y.name} is already in the cart`):(p(Jg(y)),je.success(`${y.name} is added to the cart`))},j=y=>{p($O(y))},L=y=>{_.items.some(I=>I.id===y.id)?je.error(`${y.name} is already in the wishlist`):(p(KO(y)),je.success(`${y.name} is added to wishlist`))};return d.jsx(d.Fragment,{children:o?d.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",d.jsx(rs,{size:60,color:"red"})," "]}):d.jsx(d.Fragment,{children:d.jsx(YO,{children:d.jsxs("div",{id:"shop-products",className:"container",children:[d.jsxs("div",{className:"container",children:[d.jsx("input",{className:"container mb-3 p-3",style:{height:"3rem"},type:"text",placeholder:"search here",value:i,onChange:S}),d.jsx("div",{className:"row",children:x.length>0?x.map(y=>d.jsx("div",{className:'mb-3 col-md-3 col-lg-4 col-xl-3 col-6" mx-0',children:d.jsxs("div",{className:"card",children:[d.jsx("img",{src:y.imageurl,className:"card-img-top",alt:"Product Picture"}),d.jsxs("div",{className:"card-body",children:[d.jsx("p",{className:"card-text",id:"category",children:y.category}),d.jsx("h5",{className:"card-title",id:"name",children:y.name}),d.jsxs("p",{className:"card-text",id:"price",children:["$",y.price]}),d.jsxs("p",{className:"card-text",id:"stock",children:["Stock: ",y.stock]}),y.weigh&&d.jsxs("p",{className:"card-text",id:"quantity",children:["Quantity: ",y.weigh,"kg"]}),y.bunch&&d.jsxs("p",{className:"card-text",id:"bunch",children:["Bunch: ",y.bunch]}),y.size&&d.jsxs("p",{className:"card-text",id:"size",children:["Size: ",y.size," "]}),y.dozen&&d.jsxs("p",{className:"card-text",id:"dozen",children:["Dozen: ",y.dozen," "]}),d.jsxs("div",{id:"icons",children:[d.jsx(Pe,{className:"icons",to:"/ProductDetail",onClick:()=>j(y),children:d.jsx(NN,{className:"icon",size:"1.1rem"})}),d.jsx(Pe,{className:"icons",children:d.jsx(Lu,{className:"icon",size:"1.1rem",onClick:()=>b(y)})}),d.jsx(Pe,{className:"icons",children:d.jsx(Q7,{className:"icon",size:"1.1rem",onClick:()=>L(y)})})]})]})]})},y.id)):d.jsx("p",{className:"container card-text",children:" No Products "})})]}),d.jsxs("div",{id:"buttons",children:[d.jsx("button",{onClick:T,disabled:u===1,children:"«"}),d.jsx("button",{onClick:w,disabled:R>=n.length,children:"»"})]})]})})})})},JO=de.section`
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
`,ZO=()=>{const[t,e]=D.useState(!0),[n,r]=D.useState(null),i=tl(),s=$t(u=>u.cart),o=$t(u=>u.cart.selectedproduct);D.useEffect(()=>{const u=setTimeout(()=>{(async()=>{try{if(n)r(o),e(!1);else{const h=localStorage.getItem("selectedproduct");h&&(r(JSON.parse(h)),e(!1))}}catch(h){console.log("Error in loading: ",h)}})()},1500);return()=>clearTimeout(u)},[o]);const a=u=>{s.items.some(h=>h.id===u.id)?je.error(`${u.name} is already in the cart`):(i(Jg(u)),je.success(`${u.name} is added to the cart`))};return d.jsxs(d.Fragment,{children:[t?d.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",d.jsx(rs,{size:60,color:"red"})," "]}):d.jsx(JO,{children:d.jsx("div",{children:d.jsxs("div",{id:"product-detail",children:[d.jsx("div",{children:d.jsx("img",{src:n.imageurl,alt:"Product"})}),d.jsxs("div",{id:"product-info",children:[d.jsxs("p",{id:"category",children:[n.category," / ",n.name]}),d.jsx("h3",{id:"name",children:n.name}),d.jsx("p",{id:"description",children:n.description}),d.jsxs("p",{id:"stock",children:["stock: ",n.stock]}),n.weigh&&d.jsxs("p",{id:"quantity",children:["Weight: ",n.weigh," kg"]}),n.bunch&&d.jsxs("p",{id:"bunch",children:["Bunch: ",n.bunch]}),n.size&&d.jsxs("p",{id:"size",children:["size: ",n.size]}),n.dozen&&d.jsxs("p",{id:"dozen",children:["Dozen: ",n.dozen]}),d.jsxs("p",{id:"price",children:["$",n.price]}),d.jsx("div",{id:"plusminus",children:d.jsx("button",{className:"btn btn-success",id:"addtocart",onClick:()=>a(n),children:" Add to cart"})})]})]})})}),";"]})},eD=de.section`
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
`,tD=()=>{const[t,e]=D.useState(!0),[n,r]=D.useState(""),[i,s]=D.useState(""),[o,a]=D.useState(""),[u,c]=D.useState(""),[h,p]=D.useState(""),[g,_]=D.useState(""),[S,R]=D.useState(""),[P,x]=D.useState([]),[w,T]=D.useState(""),[b,j]=D.useState(""),L=$t(gS),y=$t(mS),v={Islamabad:["Islamabad"],Punjab:["Lahore","Rawalpindi","Faisalabad","Multan","Sargodha","Bahawalpur"],Sindh:["Karachi","Hydrabad","Sakkhar"],Balochistan:["Quetta","Sibbi","Gawadar"],"Khyber Pakhtunkhwa":["Peshawar","Abbotabad","Swat","Mardaan"],"Azad Kashmir":["Muzzaffarabad","Rawalkot","Neelum Valley"],"Gilgit Baltistan":["Balakot","Skardu"]},I=k=>{const N=k.target.value;R(N),x(v[N]||[])};D.useEffect(()=>{const k=setTimeout(()=>{(async()=>{try{e(!1)}catch(A){console.log("Error is:",A)}})()},1500);return()=>clearTimeout(k)},[]);const C=async k=>{k.preventDefault();try{const N=nr(rr,"billinginfo");await Fg(N,{fname:n,house:i,street:o,state:S,city:b,zip:u,phone:h,email:g,payment:w})}catch(N){console.log("Error: ",N)}};return d.jsx(d.Fragment,{children:t?d.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",d.jsx(rs,{size:60,color:"red"})," "]}):d.jsx(eD,{children:d.jsxs("form",{id:"myform",className:"form-check",onSubmit:C,children:[d.jsxs("div",{id:"formcontent",className:"row g-3",children:[d.jsx("h1",{children:"Billing Information"}),d.jsxs("div",{className:"col-md-12",children:[d.jsx("label",{htmlFor:"firstname",className:"form-label",children:"Full Name"}),d.jsx("input",{type:"text",className:"form-control",placeholder:"first name",value:n,onChange:k=>r(k.target.value),required:!0})]}),d.jsxs("div",{className:"col-12",children:[d.jsx("label",{htmlFor:"address1",className:"form-label",children:"Enter House No."}),d.jsx("input",{type:"text",className:"form-control",placeholder:"Enter your house no.",required:!0,value:i,onChange:k=>s(k.target.value)})]}),d.jsxs("div",{className:"col-12",children:[d.jsx("label",{htmlFor:"address2",className:"form-label",children:"Enter street address"}),d.jsx("input",{type:"text",className:"form-control",placeholder:"Enter street address",required:!0,value:o,onChange:k=>a(k.target.value)})]}),d.jsxs("div",{className:"col-md-4",children:[d.jsx("label",{htmlFor:"inputState",className:"form-label",children:"State"}),d.jsxs("select",{onChange:I,value:S,required:!0,children:[d.jsx("option",{value:"",children:"Select a state"}),Object.keys(v).map(k=>d.jsx("option",{value:k,children:k},k))]})]}),d.jsxs("div",{className:"col-md-6",children:[d.jsx("label",{children:"Select City:"}),d.jsxs("select",{required:!0,value:b,onChange:k=>j(k.target.value),children:[d.jsx("option",{value:"",children:"Select a city"}),P.length>0?P.map(k=>d.jsx("option",{value:k,children:k},k)):d.jsx("option",{disabled:!0,children:"No cities available"})]})]}),d.jsxs("div",{className:"col-md-4",children:[d.jsx("label",{htmlFor:"inputZip",className:"form-label",children:"Zip"}),d.jsx("input",{type:"text",className:"form-control",placeholder:"zip code",required:!0,value:u,onChange:k=>c(k.target.value)})]}),d.jsxs("div",{className:"col-md-4",children:[d.jsx("label",{htmlFor:"inputcell",className:"form-label",children:"Phone"}),d.jsx("input",{type:"cell",className:"form-control",placeholder:"phone",required:!0,value:h,onChange:k=>p(k.target.value)})]}),d.jsxs("div",{className:"col-md-4",children:[d.jsx("label",{htmlFor:"inputemail",className:"form-label",children:"Email"}),d.jsx("input",{type:"email",className:"form-control",placeholder:"email address",required:!0,value:g,onChange:k=>_(k.target.value)})]})]}),d.jsxs("div",{id:"myorder",children:[d.jsx("h5",{children:"Your Order"}),d.jsxs("div",{id:"price",children:[d.jsx("p",{children:"Total Items"}),d.jsxs("p",{children:[L," items"]})]}),d.jsxs("div",{id:"subtotal",children:[d.jsx("p",{children:"SubTotal"}),d.jsxs("p",{style:{color:"black"},children:["$",parseFloat(y).toFixed(2)]})]}),d.jsxs("div",{id:"subtotal",children:[d.jsx("p",{children:"Shipping"}),d.jsx("p",{style:{color:"black"},children:"$5.00"})]}),d.jsx("hr",{}),d.jsxs("div",{id:"total",children:[d.jsx("p",{children:"Total"}),d.jsxs("p",{style:{color:"red"},children:["$",parseFloat(y+5).toFixed(2)]})]}),d.jsx("hr",{}),d.jsx("h6",{children:"Payment Methods"}),d.jsxs("div",{children:[d.jsx("input",{type:"radio",required:!0,name:"option",value:"Direct Bank Transfer",checked:w==="Direct Bank Transfer",onChange:k=>T(k.target.value)}),d.jsx("label",{htmlFor:"Direct Bank Transfer",children:"Direct Bank Transfer"})]}),d.jsxs("div",{children:[d.jsx("input",{type:"radio",required:!0,name:"option",value:"Cash on Deliverey",onChange:k=>T(k.target.value),checked:w==="Cash on Deliverey"}),d.jsx("label",{htmlFor:"Cash on Deliverey",children:"Cash on Deliverey"})]}),d.jsx("p",{id:"para",children:"Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy."}),d.jsx("button",{type:"submit",className:"container btn btn-danger",children:"Confirm order"})]})]})})})};function Vs(t){return we({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(t)}const nD=de.section`
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
`,rD=de.div`
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
`,iD=de.section`
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
`,sD=()=>{const[t,e]=D.useState(!0),n=tl(),r=$t(p=>p.cart.items),i=$t(mS),s=$t(gS);D.useEffect(()=>{const p=setTimeout(()=>{(async()=>{try{e(!1)}catch(_){console.log("Error is:",_)}})()},1500);return()=>clearTimeout(p)},[]);const o=p=>{n(MO(p)),je.success(`${p.name} is removed from the cart`)},a=p=>{n(VO(p))},u=p=>{n(FO(p))},c=()=>{n(zO()),je.success("Removed all items from the cart")},h=()=>{n(BO())};return d.jsx(d.Fragment,{children:t?d.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",d.jsx(rs,{size:60,color:"red"})," "]}):d.jsxs(d.Fragment,{children:[d.jsxs(nD,{children:[d.jsxs("div",{id:"labels",children:[d.jsx("p",{children:"Product"}),d.jsx("p",{children:"Price"}),d.jsx("p",{children:"Quantity"}),d.jsx("p",{children:"SubTotal"}),d.jsx("p",{children:"Remove"})]}),d.jsx("div",{children:r.length===0?d.jsx("p",{children:"Your cart is empty."}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{children:[r.map(p=>d.jsxs("div",{id:"items",children:[d.jsxs("div",{id:"itemname",children:[d.jsx("img",{src:p.imageurl,alt:"Product Pic"}),d.jsxs("p",{children:[p.name," ",d.jsx("br",{}),p.weigh&&d.jsxs("p",{className:"quantity",children:[p.weigh," kg"]}),p.dozen&&d.jsxs("p",{className:"quantity",children:[p.dozen," dozen"]}),p.bunch&&d.jsxs("p",{className:"quantity",children:[p.bunch," bunch"]}),p.size&&d.jsx("p",{className:"quantity",children:p.size})]})]}),d.jsxs("p",{id:"price",children:["$",p.price]}),d.jsxs("div",{id:"buttons",children:[d.jsx("button",{className:"btn",onClick:()=>u(p),disabled:p.quantity<=1,children:"-"}),d.jsx("p",{children:p.quantity}),d.jsx("button",{className:"btn",onClick:()=>a(p),disabled:p.quantity>=p.stock,children:"+"})]}),d.jsxs("p",{id:"subtotal",children:["$",parseFloat(p.quantity*p.price).toFixed(2)]}),d.jsx(Vs,{onClick:()=>o(p),color:"red",id:"trashicon"})]},p.name)),d.jsx("button",{className:"btn btn-danger mt-5",onClick:c,children:"Clear Cart"})]}),d.jsxs("div",{className:"lowerbox",children:[d.jsxs("div",{children:[d.jsx("h6",{children:"Total items: "}),d.jsxs("p",{children:[s," items"]})]}),d.jsxs("div",{children:[d.jsx("h4",{children:"Total"}),d.jsxs("p",{children:["$",parseFloat(i).toFixed(2)]})]}),d.jsx("button",{className:"container btn btn-danger",onClick:h,children:d.jsx(Pe,{to:"/checkout",className:"container text-decoration-none text-white",children:"Prodeed to checkout"})})]})]})})]}),d.jsx(rD,{id:"tablet",children:r.length===0?d.jsx("p",{children:"Your Cart is Empty!"}):d.jsxs("div",{className:"container",children:[r.map(p=>d.jsxs("div",{id:"innerbox",children:[d.jsxs("div",{id:"imagename",children:[d.jsx("img",{src:p.imageurl,alt:p.name}),d.jsxs("div",{children:[d.jsx("h5",{children:p.name}),p.weigh&&d.jsxs("p",{className:"quantity",children:[p.weigh," kg"]}),p.dozen&&d.jsxs("p",{className:"quantity",children:[p.dozen," dozen"]}),p.bunch&&d.jsxs("p",{className:"quantity",children:[p.bunch," bunch"]}),p.size&&d.jsx("p",{className:"quantity",children:p.size})]})]}),d.jsxs("div",{id:"secondbox",children:[d.jsxs("div",{id:"label",children:[d.jsx("p",{children:"Price"}),d.jsx("p",{style:{margin:"0rem 1.5rem 0rem 1.5rem"},children:"Quantity"}),d.jsx("p",{children:"SubTotal"})]}),d.jsxs("div",{id:"items",children:[d.jsxs("p",{children:["$",parseFloat(p.price).toFixed(2)]}),d.jsxs("div",{id:"button",children:[d.jsx("button",{className:"btn",onClick:()=>u(p),disabled:p.quantity<=1,children:"-"}),d.jsx("p",{children:p.quantity}),d.jsx("button",{className:"btn",onClick:()=>a(p),disabled:p.quantity>=p.stock,children:"+"})]}),d.jsxs("p",{children:["$",parseFloat(p.price*p.quantity).toFixed(2)]}),d.jsx(Vs,{style:{marginRight:"-15px",marginTop:"5px"},color:"red",size:".8rem",onClick:()=>o(p)})]})]})]},p.id)),d.jsx("button",{className:"btn btn-danger mt-5",onClick:c,children:"Clear Cart"}),d.jsxs("div",{className:"lowerbox",style:{marginTop:"3rem"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("h6",{children:"Total items: "}),d.jsxs("p",{children:[s," items"]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("h4",{children:"Total"}),d.jsxs("p",{children:["$",parseFloat(i).toFixed(2)]})]}),d.jsx("button",{className:"container btn btn-danger",onClick:h,children:d.jsx(Pe,{to:"/checkout",className:"container text-decoration-none text-white",children:"Prodeed to checkout"})})]})]})}),d.jsx(iD,{children:r.length===0?d.jsx("p",{children:"Your cart is empty"}):d.jsxs("div",{className:"container",children:[r.map(p=>d.jsx("div",{children:d.jsxs("div",{id:"product-detail",className:"container",children:[d.jsx("div",{children:d.jsx("img",{src:p.imageurl,alt:"Product"})}),d.jsxs("div",{id:"product-info",children:[d.jsxs("p",{id:"category",children:[p.category," / ",p.name]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("h3",{id:"name",children:p.name}),d.jsx(Vs,{id:"trash",onClick:()=>o(p)})]}),p.weigh&&d.jsxs("p",{id:"quantity",children:[p.weigh," kg"]}),p.bunch&&d.jsx("p",{id:"bunch",children:p.bunch}),p.size&&d.jsx("p",{id:"size",children:p.size}),p.dozen&&d.jsx("p",{id:"dozen",children:p.dozen}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsxs("p",{id:"price",children:["$",p.price]}),d.jsxs("div",{id:"mobile-button",style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("button",{className:"btn",onClick:()=>u(p),disabled:p.quantity<=1,children:"-"}),d.jsx("p",{style:{margin:"0rem .8rem 0rem .8rem"},children:p.quantity}),d.jsx("button",{className:"btn",onClick:()=>a(p),disabled:p.quantity===p.stock,children:"+"})]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",margin:"1rem 0rem 0rem 0rem"},children:[d.jsx("h6",{style:{fontSize:"1.3rem",fontWeight:"600"},children:"SubTotal"}),d.jsxs("p",{style:{fontSize:"1.3rem",fontWeight:"630"},children:["$",parseFloat(p.price*p.quantity).toFixed(2)]})]})]})]})})),d.jsx("button",{className:"btn btn-danger mt-5",onClick:c,children:"Clear Cart"}),d.jsxs("div",{className:"lowerbox p-1",style:{margin:"3rem 0rem 3rem 0rem"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("h6",{children:"Total items: "}),d.jsxs("p",{children:[s," items"]})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("h4",{style:{fontSize:"1.6rem"},children:"Total"}),d.jsxs("p",{style:{color:"red",fontWeight:"600",fontSize:"1.3rem"},children:["$",parseFloat(i).toFixed(2)]})]}),d.jsx("button",{className:"container btn btn-danger",onClick:h,children:d.jsx(Pe,{to:"/checkout",className:"container text-decoration-none text-white",children:"Prodeed to checkout"})})]})]})})]})})},oD="/freshbiteapp_Reactjs/assets/i-2Rfl6oER.png",aD="/freshbiteapp_Reactjs/assets/ii-BCmbO67r.png",lD="/freshbiteapp_Reactjs/assets/iii-jeyHnwtn.png",uD="/freshbiteapp_Reactjs/assets/iv-Q2Ub1bgE.png",cD=de.section`
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
`,dD=de.section`
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
`,hD=de.section`
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
`,fD=[{id:"1",image:`${oD}`,name:"Annette Black",status:"General Manager"},{id:"2",image:`${aD}`,name:"John Morrison",status:"Stock Manager"},{id:"3",image:`${lD}`,name:"Michael White",status:"Sales Manager"},{id:"4",image:`${uD}`,name:"Alexandria Great",status:"Project Manager"}],pD={desktop:{items:4,breakpoint:{max:1900,min:900}},tablet:{items:3,breakpoint:{max:899,min:600}},mobile:{items:1,breakpoint:{max:599,min:0}}},mD={desktop:{items:3,breakpoint:{max:1900,min:900}},tablet:{items:2,breakpoint:{max:899,min:600}},mobile:{items:1,breakpoint:{max:599,min:0}}},gD=()=>{const[t,e]=D.useState(!0),[n,r]=D.useState([]);return D.useEffect(()=>{const i=setTimeout(()=>{(async()=>{try{const o=nr(rr,"blog"),u=(await Ls(o)).docs.map(c=>({id:c.id,...c.data()}));r(u),e(!1)}catch{e(!0)}})()},3e3);return()=>clearTimeout(i)},[]),d.jsx(d.Fragment,{children:t?d.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",d.jsx(rs,{size:60,color:"red"})," "]}):d.jsxs(d.Fragment,{children:[d.jsx(cD,{children:d.jsxs("div",{id:"first-box",children:[d.jsxs("div",{children:[d.jsx("h3",{children:"What We Do"}),d.jsx("p",{children:"At Freshbite, we are passionate about delivering the freshest fruits, vegetables, and dairy products straight to your doorstep. Our mission is to make healthy eating simple and accessible by sourcing the finest produce from local farms and trusted suppliers."}),d.jsx("button",{className:"btn btn-danger",children:"Read More"})]}),d.jsx("div",{children:d.jsx("img",{src:"https://images.unsplash.com/photo-1528373553865-c5d96fe764f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D",alt:"about image"})})]})}),d.jsx(dD,{children:d.jsxs("div",{id:"second-box",className:"container",children:[d.jsx("h3",{children:"Meet Our Team"}),d.jsxs("p",{id:"para",children:["Our Team consist of very dedicated & hard worker men & women ",d.jsx("br",{})," who will assist you till the end"]}),d.jsx("p",{id:"para-1",children:"Our Team consist of very dedicated & hard worker men & women who will assist you till the end"}),d.jsx("div",{id:"team-members",children:d.jsx(Lp,{autoPlay:!0,infiniteLoop:!0,swipeable:!0,showDots:!1,responsive:pD,infinite:!0,keyBoardControl:!0,ssr:!0,itemClass:"carousel-item-padding-0-px",pauseOnHover:!1,arrows:!1,children:fD.map(i=>d.jsxs("div",{children:[d.jsx("img",{src:i.image,alt:"team"}),d.jsxs("h5",{children:[i.name," "]}),d.jsx("p",{children:i.status})]},i.id))})})]})}),d.jsx(hD,{children:d.jsxs("div",{id:"third-box",className:"container",children:[d.jsx("h3",{children:"Our Blog"}),d.jsxs("p",{id:"paras",children:["Our Team consist of very dedicated & hard worker men & women ",d.jsx("br",{})," who will assist you till the end"]}),d.jsx("p",{id:"paras-1",children:"Our Team consist of very dedicated & hard worker men & women who will assist you till the end"}),d.jsx("div",{children:d.jsx(Lp,{autoPlay:!0,infiniteLoop:!0,swipeable:!0,showDots:!1,responsive:mD,infinite:!0,keyBoardControl:!0,ssr:!0,itemClass:"carousel-item-padding-0-px",pauseOnHover:!1,arrows:!1,children:n.map(i=>d.jsxs("div",{className:"card",children:[d.jsx("img",{src:i.imageurl,className:"card-img-top",alt:"Blog Pic"}),d.jsxs("div",{className:"card-body",children:[d.jsxs("p",{className:"card-text",children:["In ",i.category]}),d.jsx("h5",{className:"card-title",children:i.title.slice(0,45)}),d.jsx("p",{className:"card-text",children:i.description.slice(0,160)}),d.jsx("a",{href:i.link,className:"btn btn-danger",children:"Read More"})]})]},i.id))})})]})})]})})},yD=t=>{const e={};return d.jsx(Gx.Provider,{value:e,children:t.children})},vD=de.section`
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
`,_D=de.div`
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
`,wD=de.section`
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
`,ED=()=>{const[t,e]=D.useState(!0),n=tl(),r=$t(a=>a.wishlist.items),i=$t(a=>a.cart);D.useEffect(()=>{const a=setTimeout(()=>{(async()=>{try{e(!1)}catch(c){console.log("Error is:",c)}})()},1500);return()=>clearTimeout(a)},[]);const s=a=>{n(GO(a)),je.success(`${a.name} is removed from wishlist`)},o=a=>{i.items.some(c=>c.id===a.id)?je.error(`${a.name} is already in the cart`):(n(Jg(a)),je.success(`${a.name} is added to the cart`))};return d.jsx(d.Fragment,{children:t?d.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",d.jsx(rs,{size:60,color:"red"})," "]}):d.jsxs(d.Fragment,{children:[d.jsxs(vD,{children:[d.jsxs("div",{id:"labels",children:[d.jsx("p",{children:"Product"}),d.jsx("p",{children:"Price"}),d.jsx("p",{children:"Quantity"}),d.jsx("p",{children:"Add to Cart"}),d.jsx("p",{children:"Remove"})]}),d.jsx("div",{children:r.length===0?d.jsx("p",{children:"Your Wishlist is Empty."}):d.jsx(d.Fragment,{children:d.jsx("div",{children:r.map(a=>d.jsxs("div",{id:"items",children:[d.jsxs("div",{id:"itemname",children:[d.jsx("img",{src:a.imageurl,alt:"Product Pic"}),d.jsxs("p",{children:[a.name," ",d.jsx("br",{}),a.weigh&&d.jsxs("p",{className:"quantity",children:[a.weigh," kg"]}),a.dozen&&d.jsxs("p",{className:"quantity",children:[a.dozen," dozen"]}),a.bunch&&d.jsxs("p",{className:"quantity",children:[a.bunch," bunch"]}),a.size&&d.jsx("p",{className:"quantity",children:a.size})]})]}),d.jsxs("p",{id:"price",children:["$",a.price]}),d.jsx("p",{id:"quantity",children:a.quantity}),d.jsx(Lu,{color:"#393939",id:"carticon",size:"1.3rem",onClick:()=>o(a)}),d.jsx(Vs,{color:"red",id:"trashicon",onClick:()=>s(a)})]},a.name))})})})]}),d.jsx(_D,{id:"tablet",children:r.length===0?d.jsx("p",{children:"Your Wishlist is Empty!"}):d.jsx("div",{className:"container",children:r.map(a=>d.jsxs("div",{id:"innerbox",children:[d.jsxs("div",{id:"imagename",children:[d.jsx("img",{src:a.imageurl,alt:a.name}),d.jsxs("div",{children:[d.jsx("h5",{children:a.name}),a.weigh&&d.jsxs("p",{className:"quantity",children:[a.weigh," kg"]}),a.dozen&&d.jsxs("p",{className:"quantity",children:[a.dozen," dozen"]}),a.bunch&&d.jsxs("p",{className:"quantity",children:[a.bunch," bunch"]}),a.size&&d.jsx("p",{className:"quantity",children:a.size})]})]}),d.jsxs("div",{id:"secondbox",children:[d.jsxs("div",{id:"label",children:[d.jsx("p",{children:"Price"}),d.jsx("p",{style:{margin:"0rem 1.5rem 0rem 1.5rem"},children:"Quantity"}),d.jsx("p",{children:"Add to Cart"})]}),d.jsxs("div",{id:"items",children:[d.jsxs("p",{children:["$",parseFloat(a.price).toFixed(2)]}),d.jsx("p",{children:a.quantity}),d.jsx(Lu,{color:"#393939",id:"carticon",size:"1.3rem",onClick:()=>o(a)}),d.jsx(Vs,{style:{marginRight:"-15px",marginTop:"5px"},color:"red",size:".8rem"})]})]})]},a.id))})}),d.jsx(wD,{children:r.length===0?d.jsx("p",{children:"Your Wishlist is Empty"}):d.jsx("div",{className:"container",children:r.map(a=>d.jsx("div",{children:d.jsxs("div",{id:"product-detail",className:"container",children:[d.jsx("div",{children:d.jsx("img",{src:a.imageurl,alt:"Product"})}),d.jsxs("div",{id:"product-info",children:[d.jsxs("p",{id:"category",children:[a.category," / ",a.name]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsx("h3",{id:"name",children:a.name}),d.jsx(Vs,{id:"trash",onClick:()=>s(a)})]}),a.weigh&&d.jsxs("p",{id:"quantity",children:[a.weigh," kg"]}),a.bunch&&d.jsx("p",{id:"bunch",children:a.bunch}),a.size&&d.jsx("p",{id:"size",children:a.size}),a.dozen&&d.jsx("p",{id:"dozen",children:a.dozen}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[d.jsxs("p",{id:"price",children:["$",a.price]}),d.jsx(Lu,{color:"#393939",id:"carticon",size:"1.3rem",onClick:()=>o(item)})]})]})]})}))})})]})})},TD=de.div`
    box-sizing: border-box;
    margin: 0%;
    max-width: 100%;
    height: auto;
`,xD=()=>{const t=tl();return D.useEffect(()=>{t(UO())},[t]),d.jsx(d.Fragment,{children:d.jsx(yD,{children:d.jsxs(TD,{children:[d.jsxs(vC,{children:[d.jsx(ln,{path:"/",element:d.jsx(u_,{})}),d.jsx(ln,{path:"/Home",element:d.jsx(u_,{})}),d.jsx(ln,{path:"/Login",element:d.jsx(CN,{})}),d.jsx(ln,{path:"/Register",element:d.jsx(xN,{})}),d.jsx(ln,{path:"/shop",element:d.jsxs(d.Fragment,{children:[d.jsx(_i,{}),d.jsx(XO,{}),d.jsx(Ei,{})]})}),d.jsx(ln,{path:"/ProductDetail",element:d.jsxs(d.Fragment,{children:[d.jsx(_i,{}),d.jsx(ZO,{}),d.jsx(Ei,{})]})}),d.jsx(ln,{path:"/checkout",element:d.jsxs(d.Fragment,{children:[d.jsx(_i,{}),d.jsx(tD,{}),d.jsx(Ei,{})]})}),d.jsx(ln,{path:"/Cart",element:d.jsxs(d.Fragment,{children:[d.jsx(_i,{}),d.jsx(sD,{}),d.jsx(Ei,{})]})}),d.jsx(ln,{path:"/About",element:d.jsxs(d.Fragment,{children:[d.jsx(_i,{}),d.jsx(gD,{}),d.jsx(Ei,{})]})}),d.jsx(ln,{path:"/wishlist",element:d.jsxs(d.Fragment,{children:[d.jsx(_i,{}),d.jsx(ED,{}),d.jsx(Ei,{})]})})]}),d.jsx(T9,{})]})})})},SD=EO({reducer:{cart:WO,wishlist:QO},devTools:!0}),ID=rf.createRoot(document.getElementById("root"));ID.render(d.jsx(_t.StrictMode,{children:d.jsx(B9,{store:SD,children:d.jsx(CC,{children:d.jsx(xD,{})})})}));
