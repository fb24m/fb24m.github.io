function f0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function p0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Em={exports:{}},Bl={},Cm={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js=Symbol.for("react.element"),m0=Symbol.for("react.portal"),g0=Symbol.for("react.fragment"),_0=Symbol.for("react.strict_mode"),v0=Symbol.for("react.profiler"),y0=Symbol.for("react.provider"),w0=Symbol.for("react.context"),E0=Symbol.for("react.forward_ref"),C0=Symbol.for("react.suspense"),S0=Symbol.for("react.memo"),I0=Symbol.for("react.lazy"),Bh=Symbol.iterator;function k0(t){return t===null||typeof t!="object"?null:(t=Bh&&t[Bh]||t["@@iterator"],typeof t=="function"?t:null)}var Sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Im=Object.assign,km={};function Si(t,e,n){this.props=t,this.context=e,this.refs=km,this.updater=n||Sm}Si.prototype.isReactComponent={};Si.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Si.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Tm(){}Tm.prototype=Si.prototype;function $c(t,e,n){this.props=t,this.context=e,this.refs=km,this.updater=n||Sm}var zc=$c.prototype=new Tm;zc.constructor=$c;Im(zc,Si.prototype);zc.isPureReactComponent=!0;var Wh=Array.isArray,Nm=Object.prototype.hasOwnProperty,Bc={current:null},xm={key:!0,ref:!0,__self:!0,__source:!0};function Rm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Nm.call(e,r)&&!xm.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:js,type:t,key:s,ref:o,props:i,_owner:Bc.current}}function T0(t,e){return{$$typeof:js,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wc(t){return typeof t=="object"&&t!==null&&t.$$typeof===js}function N0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hh=/\/+/g;function Ta(t,e){return typeof t=="object"&&t!==null&&t.key!=null?N0(""+t.key):e.toString(36)}function No(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case js:case m0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ta(o,0):r,Wh(i)?(n="",t!=null&&(n=t.replace(Hh,"$&/")+"/"),No(i,e,n,"",function(u){return u})):i!=null&&(Wc(i)&&(i=T0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Hh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Wh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Ta(s,l);o+=No(s,e,n,a,i)}else if(a=k0(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Ta(s,l++),o+=No(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function io(t,e,n){if(t==null)return t;var r=[],i=0;return No(t,r,"","",function(s){return e.call(n,s,i++)}),r}function x0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qe={current:null},xo={transition:null},R0={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:xo,ReactCurrentOwner:Bc};Y.Children={map:io,forEach:function(t,e,n){io(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return io(t,function(){e++}),e},toArray:function(t){return io(t,function(e){return e})||[]},only:function(t){if(!Wc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=Si;Y.Fragment=g0;Y.Profiler=v0;Y.PureComponent=$c;Y.StrictMode=_0;Y.Suspense=C0;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R0;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Im({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Nm.call(e,a)&&!xm.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:js,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:w0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:y0,_context:t},t.Consumer=t};Y.createElement=Rm;Y.createFactory=function(t){var e=Rm.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:E0,render:t}};Y.isValidElement=Wc;Y.lazy=function(t){return{$$typeof:I0,_payload:{_status:-1,_result:t},_init:x0}};Y.memo=function(t,e){return{$$typeof:S0,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=xo.transition;xo.transition={};try{t()}finally{xo.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return qe.current.useCallback(t,e)};Y.useContext=function(t){return qe.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return qe.current.useDeferredValue(t)};Y.useEffect=function(t,e){return qe.current.useEffect(t,e)};Y.useId=function(){return qe.current.useId()};Y.useImperativeHandle=function(t,e,n){return qe.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return qe.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return qe.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return qe.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return qe.current.useReducer(t,e,n)};Y.useRef=function(t){return qe.current.useRef(t)};Y.useState=function(t){return qe.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return qe.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return qe.current.useTransition()};Y.version="18.2.0";Cm.exports=Y;var F=Cm.exports;const jt=p0(F),P0=f0({__proto__:null,default:jt},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0=F,O0=Symbol.for("react.element"),D0=Symbol.for("react.fragment"),L0=Object.prototype.hasOwnProperty,M0=A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b0={key:!0,ref:!0,__self:!0,__source:!0};function Pm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)L0.call(e,r)&&!b0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:O0,type:t,key:s,ref:o,props:i,_owner:M0.current}}Bl.Fragment=D0;Bl.jsx=Pm;Bl.jsxs=Pm;Em.exports=Bl;var E=Em.exports,Cu={},Am={exports:{}},ft={},Om={exports:{}},Dm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,V){var z=R.length;R.push(V);e:for(;0<z;){var ae=z-1>>>1,ve=R[ae];if(0<i(ve,V))R[ae]=V,R[z]=ve,z=ae;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var V=R[0],z=R.pop();if(z!==V){R[0]=z;e:for(var ae=0,ve=R.length,Or=ve>>>1;ae<Or;){var bt=2*(ae+1)-1,Oi=R[bt],Ct=bt+1,Jn=R[Ct];if(0>i(Oi,z))Ct<ve&&0>i(Jn,Oi)?(R[ae]=Jn,R[Ct]=z,ae=Ct):(R[ae]=Oi,R[bt]=z,ae=bt);else if(Ct<ve&&0>i(Jn,z))R[ae]=Jn,R[Ct]=z,ae=Ct;else break e}}return V}function i(R,V){var z=R.sortIndex-V.sortIndex;return z!==0?z:R.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,_=!1,v=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=R)r(u),V.sortIndex=V.expirationTime,e(a,V);else break;V=n(u)}}function C(R){if(w=!1,g(R),!v)if(n(a)!==null)v=!0,Ue(k);else{var V=n(u);V!==null&&Ye(C,V.startTime-R)}}function k(R,V){v=!1,w&&(w=!1,p(M),M=-1),_=!0;var z=h;try{for(g(V),c=n(a);c!==null&&(!(c.expirationTime>V)||R&&!_e());){var ae=c.callback;if(typeof ae=="function"){c.callback=null,h=c.priorityLevel;var ve=ae(c.expirationTime<=V);V=t.unstable_now(),typeof ve=="function"?c.callback=ve:c===n(a)&&r(a),g(V)}else r(a);c=n(a)}if(c!==null)var Or=!0;else{var bt=n(u);bt!==null&&Ye(C,bt.startTime-V),Or=!1}return Or}finally{c=null,h=z,_=!1}}var A=!1,O=null,M=-1,q=5,$=-1;function _e(){return!(t.unstable_now()-$<q)}function Q(){if(O!==null){var R=t.unstable_now();$=R;var V=!0;try{V=O(!0,R)}finally{V?W():(A=!1,O=null)}}else A=!1}var W;if(typeof f=="function")W=function(){f(Q)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,Fe=le.port2;le.port1.onmessage=Q,W=function(){Fe.postMessage(null)}}else W=function(){x(Q,0)};function Ue(R){O=R,A||(A=!0,W())}function Ye(R,V){M=x(function(){R(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,Ue(k))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var V=3;break;default:V=h}var z=h;h=V;try{return R()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,V){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var z=h;h=R;try{return V()}finally{h=z}},t.unstable_scheduleCallback=function(R,V,z){var ae=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ae+z:ae):z=ae,R){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=z+ve,R={id:d++,callback:V,priorityLevel:R,startTime:z,expirationTime:ve,sortIndex:-1},z>ae?(R.sortIndex=z,e(u,R),n(a)===null&&R===n(u)&&(w?(p(M),M=-1):w=!0,Ye(C,z-ae))):(R.sortIndex=ve,e(a,R),v||_||(v=!0,Ue(k))),R},t.unstable_shouldYield=_e,t.unstable_wrapCallback=function(R){var V=h;return function(){var z=h;h=V;try{return R.apply(this,arguments)}finally{h=z}}}})(Dm);Om.exports=Dm;var F0=Om.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm=F,ht=F0;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mm=new Set,ds={};function xr(t,e){ci(t,e),ci(t+"Capture",e)}function ci(t,e){for(ds[t]=e,t=0;t<e.length;t++)Mm.add(e[t])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=Object.prototype.hasOwnProperty,U0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gh={},Kh={};function j0(t){return Su.call(Kh,t)?!0:Su.call(Gh,t)?!1:U0.test(t)?Kh[t]=!0:(Gh[t]=!0,!1)}function V0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $0(t,e,n,r){if(e===null||typeof e>"u"||V0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){be[t]=new Qe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];be[e]=new Qe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){be[t]=new Qe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){be[t]=new Qe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){be[t]=new Qe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){be[t]=new Qe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){be[t]=new Qe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){be[t]=new Qe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){be[t]=new Qe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hc=/[\-:]([a-z])/g;function Gc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hc,Gc);be[e]=new Qe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hc,Gc);be[e]=new Qe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hc,Gc);be[e]=new Qe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){be[t]=new Qe(t,1,!1,t.toLowerCase(),null,!1,!1)});be.xlinkHref=new Qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){be[t]=new Qe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kc(t,e,n,r){var i=be.hasOwnProperty(e)?be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($0(e,n,i,r)&&(n=null),r||i===null?j0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pn=Lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,so=Symbol.for("react.element"),Fr=Symbol.for("react.portal"),Ur=Symbol.for("react.fragment"),qc=Symbol.for("react.strict_mode"),Iu=Symbol.for("react.profiler"),bm=Symbol.for("react.provider"),Fm=Symbol.for("react.context"),Qc=Symbol.for("react.forward_ref"),ku=Symbol.for("react.suspense"),Tu=Symbol.for("react.suspense_list"),Yc=Symbol.for("react.memo"),En=Symbol.for("react.lazy"),Um=Symbol.for("react.offscreen"),qh=Symbol.iterator;function Di(t){return t===null||typeof t!="object"?null:(t=qh&&t[qh]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Object.assign,Na;function Ki(t){if(Na===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Na=e&&e[1]||""}return`
`+Na+t}var xa=!1;function Ra(t,e){if(!t||xa)return"";xa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{xa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ki(t):""}function z0(t){switch(t.tag){case 5:return Ki(t.type);case 16:return Ki("Lazy");case 13:return Ki("Suspense");case 19:return Ki("SuspenseList");case 0:case 2:case 15:return t=Ra(t.type,!1),t;case 11:return t=Ra(t.type.render,!1),t;case 1:return t=Ra(t.type,!0),t;default:return""}}function Nu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ur:return"Fragment";case Fr:return"Portal";case Iu:return"Profiler";case qc:return"StrictMode";case ku:return"Suspense";case Tu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fm:return(t.displayName||"Context")+".Consumer";case bm:return(t._context.displayName||"Context")+".Provider";case Qc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yc:return e=t.displayName||null,e!==null?e:Nu(t.type)||"Memo";case En:e=t._payload,t=t._init;try{return Nu(t(e))}catch{}}return null}function B0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nu(e);case 8:return e===qc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function W0(t){var e=jm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oo(t){t._valueTracker||(t._valueTracker=W0(t))}function Vm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=jm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ho(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xu(t,e){var n=e.checked;return fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Wn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $m(t,e){e=e.checked,e!=null&&Kc(t,"checked",e,!1)}function Ru(t,e){$m(t,e);var n=Wn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pu(t,e.type,Wn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pu(t,e,n){(e!=="number"||Ho(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qi=Array.isArray;function Xr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Wn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Au(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(qi(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wn(n)}}function zm(t,e){var n=Wn(e.value),r=Wn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ou(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lo,Wm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function hs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H0=["Webkit","ms","Moz","O"];Object.keys(Xi).forEach(function(t){H0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xi[e]=Xi[t]})});function Hm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xi.hasOwnProperty(t)&&Xi[t]?(""+e).trim():e+"px"}function Gm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var G0=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Du(t,e){if(e){if(G0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Lu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mu=null;function Xc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bu=null,Jr=null,Zr=null;function Zh(t){if(t=zs(t)){if(typeof bu!="function")throw Error(I(280));var e=t.stateNode;e&&(e=ql(e),bu(t.stateNode,t.type,e))}}function Km(t){Jr?Zr?Zr.push(t):Zr=[t]:Jr=t}function qm(){if(Jr){var t=Jr,e=Zr;if(Zr=Jr=null,Zh(t),e)for(t=0;t<e.length;t++)Zh(e[t])}}function Qm(t,e){return t(e)}function Ym(){}var Pa=!1;function Xm(t,e,n){if(Pa)return t(e,n);Pa=!0;try{return Qm(t,e,n)}finally{Pa=!1,(Jr!==null||Zr!==null)&&(Ym(),qm())}}function fs(t,e){var n=t.stateNode;if(n===null)return null;var r=ql(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Fu=!1;if(ln)try{var Li={};Object.defineProperty(Li,"passive",{get:function(){Fu=!0}}),window.addEventListener("test",Li,Li),window.removeEventListener("test",Li,Li)}catch{Fu=!1}function K0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ji=!1,Go=null,Ko=!1,Uu=null,q0={onError:function(t){Ji=!0,Go=t}};function Q0(t,e,n,r,i,s,o,l,a){Ji=!1,Go=null,K0.apply(q0,arguments)}function Y0(t,e,n,r,i,s,o,l,a){if(Q0.apply(this,arguments),Ji){if(Ji){var u=Go;Ji=!1,Go=null}else throw Error(I(198));Ko||(Ko=!0,Uu=u)}}function Rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ef(t){if(Rr(t)!==t)throw Error(I(188))}function X0(t){var e=t.alternate;if(!e){if(e=Rr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ef(i),t;if(s===r)return ef(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Zm(t){return t=X0(t),t!==null?eg(t):null}function eg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=eg(t);if(e!==null)return e;t=t.sibling}return null}var tg=ht.unstable_scheduleCallback,tf=ht.unstable_cancelCallback,J0=ht.unstable_shouldYield,Z0=ht.unstable_requestPaint,we=ht.unstable_now,ew=ht.unstable_getCurrentPriorityLevel,Jc=ht.unstable_ImmediatePriority,ng=ht.unstable_UserBlockingPriority,qo=ht.unstable_NormalPriority,tw=ht.unstable_LowPriority,rg=ht.unstable_IdlePriority,Wl=null,zt=null;function nw(t){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:sw,rw=Math.log,iw=Math.LN2;function sw(t){return t>>>=0,t===0?32:31-(rw(t)/iw|0)|0}var ao=64,uo=4194304;function Qi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Qi(l):(s&=o,s!==0&&(r=Qi(s)))}else o=n&~i,o!==0?r=Qi(o):s!==0&&(r=Qi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-At(e),i=1<<n,r|=t[n],e&=~i;return r}function ow(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-At(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=ow(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ig(){var t=ao;return ao<<=1,!(ao&4194240)&&(ao=64),t}function Aa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-At(e),t[e]=n}function aw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-At(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-At(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Z=0;function sg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var og,ed,lg,ag,ug,Vu=!1,co=[],On=null,Dn=null,Ln=null,ps=new Map,ms=new Map,Sn=[],uw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nf(t,e){switch(t){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":ps.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ms.delete(e.pointerId)}}function Mi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=zs(e),e!==null&&ed(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function cw(t,e,n,r,i){switch(e){case"focusin":return On=Mi(On,t,e,n,r,i),!0;case"dragenter":return Dn=Mi(Dn,t,e,n,r,i),!0;case"mouseover":return Ln=Mi(Ln,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ps.set(s,Mi(ps.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ms.set(s,Mi(ms.get(s)||null,t,e,n,r,i)),!0}return!1}function cg(t){var e=rr(t.target);if(e!==null){var n=Rr(e);if(n!==null){if(e=n.tag,e===13){if(e=Jm(n),e!==null){t.blockedOn=e,ug(t.priority,function(){lg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ro(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$u(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Mu=r,n.target.dispatchEvent(r),Mu=null}else return e=zs(n),e!==null&&ed(e),t.blockedOn=n,!1;e.shift()}return!0}function rf(t,e,n){Ro(t)&&n.delete(e)}function dw(){Vu=!1,On!==null&&Ro(On)&&(On=null),Dn!==null&&Ro(Dn)&&(Dn=null),Ln!==null&&Ro(Ln)&&(Ln=null),ps.forEach(rf),ms.forEach(rf)}function bi(t,e){t.blockedOn===e&&(t.blockedOn=null,Vu||(Vu=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,dw)))}function gs(t){function e(i){return bi(i,t)}if(0<co.length){bi(co[0],t);for(var n=1;n<co.length;n++){var r=co[n];r.blockedOn===t&&(r.blockedOn=null)}}for(On!==null&&bi(On,t),Dn!==null&&bi(Dn,t),Ln!==null&&bi(Ln,t),ps.forEach(e),ms.forEach(e),n=0;n<Sn.length;n++)r=Sn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Sn.length&&(n=Sn[0],n.blockedOn===null);)cg(n),n.blockedOn===null&&Sn.shift()}var ei=pn.ReactCurrentBatchConfig,Yo=!0;function hw(t,e,n,r){var i=Z,s=ei.transition;ei.transition=null;try{Z=1,td(t,e,n,r)}finally{Z=i,ei.transition=s}}function fw(t,e,n,r){var i=Z,s=ei.transition;ei.transition=null;try{Z=4,td(t,e,n,r)}finally{Z=i,ei.transition=s}}function td(t,e,n,r){if(Yo){var i=$u(t,e,n,r);if(i===null)$a(t,e,r,Xo,n),nf(t,r);else if(cw(i,t,e,n,r))r.stopPropagation();else if(nf(t,r),e&4&&-1<uw.indexOf(t)){for(;i!==null;){var s=zs(i);if(s!==null&&og(s),s=$u(t,e,n,r),s===null&&$a(t,e,r,Xo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $a(t,e,r,null,n)}}var Xo=null;function $u(t,e,n,r){if(Xo=null,t=Xc(r),t=rr(t),t!==null)if(e=Rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xo=t,null}function dg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ew()){case Jc:return 1;case ng:return 4;case qo:case tw:return 16;case rg:return 536870912;default:return 16}default:return 16}}var xn=null,nd=null,Po=null;function hg(){if(Po)return Po;var t,e=nd,n=e.length,r,i="value"in xn?xn.value:xn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Po=i.slice(t,1<r?1-r:void 0)}function Ao(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ho(){return!0}function sf(){return!1}function pt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ho:sf,this.isPropagationStopped=sf,this}return fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),e}var Ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=pt(Ii),$s=fe({},Ii,{view:0,detail:0}),pw=pt($s),Oa,Da,Fi,Hl=fe({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:id,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fi&&(Fi&&t.type==="mousemove"?(Oa=t.screenX-Fi.screenX,Da=t.screenY-Fi.screenY):Da=Oa=0,Fi=t),Oa)},movementY:function(t){return"movementY"in t?t.movementY:Da}}),of=pt(Hl),mw=fe({},Hl,{dataTransfer:0}),gw=pt(mw),_w=fe({},$s,{relatedTarget:0}),La=pt(_w),vw=fe({},Ii,{animationName:0,elapsedTime:0,pseudoElement:0}),yw=pt(vw),ww=fe({},Ii,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ew=pt(ww),Cw=fe({},Ii,{data:0}),lf=pt(Cw),Sw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kw[t])?!!e[t]:!1}function id(){return Tw}var Nw=fe({},$s,{key:function(t){if(t.key){var e=Sw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ao(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Iw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:id,charCode:function(t){return t.type==="keypress"?Ao(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ao(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xw=pt(Nw),Rw=fe({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),af=pt(Rw),Pw=fe({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:id}),Aw=pt(Pw),Ow=fe({},Ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dw=pt(Ow),Lw=fe({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Mw=pt(Lw),bw=[9,13,27,32],sd=ln&&"CompositionEvent"in window,Zi=null;ln&&"documentMode"in document&&(Zi=document.documentMode);var Fw=ln&&"TextEvent"in window&&!Zi,fg=ln&&(!sd||Zi&&8<Zi&&11>=Zi),uf=String.fromCharCode(32),cf=!1;function pg(t,e){switch(t){case"keyup":return bw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function Uw(t,e){switch(t){case"compositionend":return mg(e);case"keypress":return e.which!==32?null:(cf=!0,uf);case"textInput":return t=e.data,t===uf&&cf?null:t;default:return null}}function jw(t,e){if(jr)return t==="compositionend"||!sd&&pg(t,e)?(t=hg(),Po=nd=xn=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fg&&e.locale!=="ko"?null:e.data;default:return null}}var Vw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function df(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Vw[t.type]:e==="textarea"}function gg(t,e,n,r){Km(r),e=Jo(e,"onChange"),0<e.length&&(n=new rd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var es=null,_s=null;function $w(t){Ng(t,0)}function Gl(t){var e=zr(t);if(Vm(e))return t}function zw(t,e){if(t==="change")return e}var _g=!1;if(ln){var Ma;if(ln){var ba="oninput"in document;if(!ba){var hf=document.createElement("div");hf.setAttribute("oninput","return;"),ba=typeof hf.oninput=="function"}Ma=ba}else Ma=!1;_g=Ma&&(!document.documentMode||9<document.documentMode)}function ff(){es&&(es.detachEvent("onpropertychange",vg),_s=es=null)}function vg(t){if(t.propertyName==="value"&&Gl(_s)){var e=[];gg(e,_s,t,Xc(t)),Xm($w,e)}}function Bw(t,e,n){t==="focusin"?(ff(),es=e,_s=n,es.attachEvent("onpropertychange",vg)):t==="focusout"&&ff()}function Ww(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(_s)}function Hw(t,e){if(t==="click")return Gl(e)}function Gw(t,e){if(t==="input"||t==="change")return Gl(e)}function Kw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Lt=typeof Object.is=="function"?Object.is:Kw;function vs(t,e){if(Lt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Su.call(e,i)||!Lt(t[i],e[i]))return!1}return!0}function pf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mf(t,e){var n=pf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pf(n)}}function yg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wg(){for(var t=window,e=Ho();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ho(t.document)}return e}function od(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qw(t){var e=wg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yg(n.ownerDocument.documentElement,n)){if(r!==null&&od(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=mf(n,s);var o=mf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Qw=ln&&"documentMode"in document&&11>=document.documentMode,Vr=null,zu=null,ts=null,Bu=!1;function gf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bu||Vr==null||Vr!==Ho(r)||(r=Vr,"selectionStart"in r&&od(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ts&&vs(ts,r)||(ts=r,r=Jo(zu,"onSelect"),0<r.length&&(e=new rd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vr)))}function fo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $r={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},Fa={},Eg={};ln&&(Eg=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function Kl(t){if(Fa[t])return Fa[t];if(!$r[t])return t;var e=$r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Eg)return Fa[t]=e[n];return t}var Cg=Kl("animationend"),Sg=Kl("animationiteration"),Ig=Kl("animationstart"),kg=Kl("transitionend"),Tg=new Map,_f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(t,e){Tg.set(t,e),xr(e,[t])}for(var Ua=0;Ua<_f.length;Ua++){var ja=_f[Ua],Yw=ja.toLowerCase(),Xw=ja[0].toUpperCase()+ja.slice(1);qn(Yw,"on"+Xw)}qn(Cg,"onAnimationEnd");qn(Sg,"onAnimationIteration");qn(Ig,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(kg,"onTransitionEnd");ci("onMouseEnter",["mouseout","mouseover"]);ci("onMouseLeave",["mouseout","mouseover"]);ci("onPointerEnter",["pointerout","pointerover"]);ci("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));function vf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Y0(r,e,void 0,t),t.currentTarget=null}function Ng(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;vf(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;vf(i,l,u),s=a}}}if(Ko)throw t=Uu,Ko=!1,Uu=null,t}function ie(t,e){var n=e[qu];n===void 0&&(n=e[qu]=new Set);var r=t+"__bubble";n.has(r)||(xg(e,t,2,!1),n.add(r))}function Va(t,e,n){var r=0;e&&(r|=4),xg(n,t,r,e)}var po="_reactListening"+Math.random().toString(36).slice(2);function ys(t){if(!t[po]){t[po]=!0,Mm.forEach(function(n){n!=="selectionchange"&&(Jw.has(n)||Va(n,!1,t),Va(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[po]||(e[po]=!0,Va("selectionchange",!1,e))}}function xg(t,e,n,r){switch(dg(e)){case 1:var i=hw;break;case 4:i=fw;break;default:i=td}n=i.bind(null,e,n,t),i=void 0,!Fu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $a(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=rr(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Xm(function(){var u=s,d=Xc(n),c=[];e:{var h=Tg.get(t);if(h!==void 0){var _=rd,v=t;switch(t){case"keypress":if(Ao(n)===0)break e;case"keydown":case"keyup":_=xw;break;case"focusin":v="focus",_=La;break;case"focusout":v="blur",_=La;break;case"beforeblur":case"afterblur":_=La;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=gw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Aw;break;case Cg:case Sg:case Ig:_=yw;break;case kg:_=Dw;break;case"scroll":_=pw;break;case"wheel":_=Mw;break;case"copy":case"cut":case"paste":_=Ew;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=af}var w=(e&4)!==0,x=!w&&t==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var f=u,g;f!==null;){g=f;var C=g.stateNode;if(g.tag===5&&C!==null&&(g=C,p!==null&&(C=fs(f,p),C!=null&&w.push(ws(f,C,g)))),x)break;f=f.return}0<w.length&&(h=new _(h,v,null,n,d),c.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==Mu&&(v=n.relatedTarget||n.fromElement)&&(rr(v)||v[an]))break e;if((_||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?rr(v):null,v!==null&&(x=Rr(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(w=of,C="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=af,C="onPointerLeave",p="onPointerEnter",f="pointer"),x=_==null?h:zr(_),g=v==null?h:zr(v),h=new w(C,f+"leave",_,n,d),h.target=x,h.relatedTarget=g,C=null,rr(d)===u&&(w=new w(p,f+"enter",v,n,d),w.target=g,w.relatedTarget=x,C=w),x=C,_&&v)t:{for(w=_,p=v,f=0,g=w;g;g=Lr(g))f++;for(g=0,C=p;C;C=Lr(C))g++;for(;0<f-g;)w=Lr(w),f--;for(;0<g-f;)p=Lr(p),g--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=Lr(w),p=Lr(p)}w=null}else w=null;_!==null&&yf(c,h,_,w,!1),v!==null&&x!==null&&yf(c,x,v,w,!0)}}e:{if(h=u?zr(u):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var k=zw;else if(df(h))if(_g)k=Gw;else{k=Ww;var A=Bw}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Hw);if(k&&(k=k(t,u))){gg(c,k,n,d);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Pu(h,"number",h.value)}switch(A=u?zr(u):window,t){case"focusin":(df(A)||A.contentEditable==="true")&&(Vr=A,zu=u,ts=null);break;case"focusout":ts=zu=Vr=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,gf(c,n,d);break;case"selectionchange":if(Qw)break;case"keydown":case"keyup":gf(c,n,d)}var O;if(sd)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else jr?pg(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(fg&&n.locale!=="ko"&&(jr||M!=="onCompositionStart"?M==="onCompositionEnd"&&jr&&(O=hg()):(xn=d,nd="value"in xn?xn.value:xn.textContent,jr=!0)),A=Jo(u,M),0<A.length&&(M=new lf(M,t,null,n,d),c.push({event:M,listeners:A}),O?M.data=O:(O=mg(n),O!==null&&(M.data=O)))),(O=Fw?Uw(t,n):jw(t,n))&&(u=Jo(u,"onBeforeInput"),0<u.length&&(d=new lf("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=O))}Ng(c,e)})}function ws(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fs(t,n),s!=null&&r.unshift(ws(t,s,i)),s=fs(t,e),s!=null&&r.push(ws(t,s,i))),t=t.return}return r}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=fs(n,s),a!=null&&o.unshift(ws(n,a,l))):i||(a=fs(n,s),a!=null&&o.push(ws(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Zw=/\r\n?/g,eE=/\u0000|\uFFFD/g;function wf(t){return(typeof t=="string"?t:""+t).replace(Zw,`
`).replace(eE,"")}function mo(t,e,n){if(e=wf(e),wf(t)!==e&&n)throw Error(I(425))}function Zo(){}var Wu=null,Hu=null;function Gu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ku=typeof setTimeout=="function"?setTimeout:void 0,tE=typeof clearTimeout=="function"?clearTimeout:void 0,Ef=typeof Promise=="function"?Promise:void 0,nE=typeof queueMicrotask=="function"?queueMicrotask:typeof Ef<"u"?function(t){return Ef.resolve(null).then(t).catch(rE)}:Ku;function rE(t){setTimeout(function(){throw t})}function za(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),gs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);gs(e)}function Mn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ki=Math.random().toString(36).slice(2),Vt="__reactFiber$"+ki,Es="__reactProps$"+ki,an="__reactContainer$"+ki,qu="__reactEvents$"+ki,iE="__reactListeners$"+ki,sE="__reactHandles$"+ki;function rr(t){var e=t[Vt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[an]||n[Vt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cf(t);t!==null;){if(n=t[Vt])return n;t=Cf(t)}return e}t=n,n=t.parentNode}return null}function zs(t){return t=t[Vt]||t[an],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function ql(t){return t[Es]||null}var Qu=[],Br=-1;function Qn(t){return{current:t}}function oe(t){0>Br||(t.current=Qu[Br],Qu[Br]=null,Br--)}function re(t,e){Br++,Qu[Br]=t.current,t.current=e}var Hn={},Be=Qn(Hn),tt=Qn(!1),mr=Hn;function di(t,e){var n=t.type.contextTypes;if(!n)return Hn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nt(t){return t=t.childContextTypes,t!=null}function el(){oe(tt),oe(Be)}function Sf(t,e,n){if(Be.current!==Hn)throw Error(I(168));re(Be,e),re(tt,n)}function Rg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,B0(t)||"Unknown",i));return fe({},n,r)}function tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hn,mr=Be.current,re(Be,t),re(tt,tt.current),!0}function If(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Rg(t,e,mr),r.__reactInternalMemoizedMergedChildContext=t,oe(tt),oe(Be),re(Be,t)):oe(tt),re(tt,n)}var Yt=null,Ql=!1,Ba=!1;function Pg(t){Yt===null?Yt=[t]:Yt.push(t)}function oE(t){Ql=!0,Pg(t)}function Yn(){if(!Ba&&Yt!==null){Ba=!0;var t=0,e=Z;try{var n=Yt;for(Z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Yt=null,Ql=!1}catch(i){throw Yt!==null&&(Yt=Yt.slice(t+1)),tg(Jc,Yn),i}finally{Z=e,Ba=!1}}return null}var Wr=[],Hr=0,nl=null,rl=0,gt=[],_t=0,gr=null,Jt=1,Zt="";function Zn(t,e){Wr[Hr++]=rl,Wr[Hr++]=nl,nl=t,rl=e}function Ag(t,e,n){gt[_t++]=Jt,gt[_t++]=Zt,gt[_t++]=gr,gr=t;var r=Jt;t=Zt;var i=32-At(r)-1;r&=~(1<<i),n+=1;var s=32-At(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Jt=1<<32-At(e)+i|n<<i|r,Zt=s+t}else Jt=1<<s|n<<i|r,Zt=t}function ld(t){t.return!==null&&(Zn(t,1),Ag(t,1,0))}function ad(t){for(;t===nl;)nl=Wr[--Hr],Wr[Hr]=null,rl=Wr[--Hr],Wr[Hr]=null;for(;t===gr;)gr=gt[--_t],gt[_t]=null,Zt=gt[--_t],gt[_t]=null,Jt=gt[--_t],gt[_t]=null}var dt=null,ct=null,ce=!1,Tt=null;function Og(t,e){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dt=t,ct=Mn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dt=t,ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gr!==null?{id:Jt,overflow:Zt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dt=t,ct=null,!0):!1;default:return!1}}function Yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xu(t){if(ce){var e=ct;if(e){var n=e;if(!kf(t,e)){if(Yu(t))throw Error(I(418));e=Mn(n.nextSibling);var r=dt;e&&kf(t,e)?Og(r,n):(t.flags=t.flags&-4097|2,ce=!1,dt=t)}}else{if(Yu(t))throw Error(I(418));t.flags=t.flags&-4097|2,ce=!1,dt=t}}}function Tf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dt=t}function go(t){if(t!==dt)return!1;if(!ce)return Tf(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gu(t.type,t.memoizedProps)),e&&(e=ct)){if(Yu(t))throw Dg(),Error(I(418));for(;e;)Og(t,e),e=Mn(e.nextSibling)}if(Tf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ct=Mn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ct=null}}else ct=dt?Mn(t.stateNode.nextSibling):null;return!0}function Dg(){for(var t=ct;t;)t=Mn(t.nextSibling)}function hi(){ct=dt=null,ce=!1}function ud(t){Tt===null?Tt=[t]:Tt.push(t)}var lE=pn.ReactCurrentBatchConfig;function It(t,e){if(t&&t.defaultProps){e=fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var il=Qn(null),sl=null,Gr=null,cd=null;function dd(){cd=Gr=sl=null}function hd(t){var e=il.current;oe(il),t._currentValue=e}function Ju(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ti(t,e){sl=t,cd=Gr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Je=!0),t.firstContext=null)}function wt(t){var e=t._currentValue;if(cd!==t)if(t={context:t,memoizedValue:e,next:null},Gr===null){if(sl===null)throw Error(I(308));Gr=t,sl.dependencies={lanes:0,firstContext:t}}else Gr=Gr.next=t;return e}var ir=null;function fd(t){ir===null?ir=[t]:ir.push(t)}function Lg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fd(e)):(n.next=i.next,i.next=n),e.interleaved=n,un(t,r)}function un(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cn=!1;function pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function bn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,un(t,n)}return i=r.interleaved,i===null?(e.next=e,fd(r)):(e.next=i.next,i.next=e),r.interleaved=e,un(t,n)}function Oo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zc(t,n)}}function Nf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ol(t,e,n,r){var i=t.updateQueue;Cn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,_=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(h=e,_=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){c=v.call(_,c,h);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(_,c,h):v,h==null)break e;c=fe({},c,h);break e;case 2:Cn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else _={eventTime:_,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=_,a=c):d=d.next=_,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);vr|=o,t.lanes=o,t.memoizedState=c}}function xf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var bg=new Lm.Component().refs;function Zu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yl={isMounted:function(t){return(t=t._reactInternals)?Rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ke(),i=Un(t),s=sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=bn(t,s,i),e!==null&&(Ot(e,t,i,r),Oo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ke(),i=Un(t),s=sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=bn(t,s,i),e!==null&&(Ot(e,t,i,r),Oo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ke(),r=Un(t),i=sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=bn(t,i,r),e!==null&&(Ot(e,t,r,n),Oo(e,t,r))}};function Rf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!vs(n,r)||!vs(i,s):!0}function Fg(t,e,n){var r=!1,i=Hn,s=e.contextType;return typeof s=="object"&&s!==null?s=wt(s):(i=nt(e)?mr:Be.current,r=e.contextTypes,s=(r=r!=null)?di(t,i):Hn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Pf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yl.enqueueReplaceState(e,e.state,null)}function ec(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=bg,pd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=wt(s):(s=nt(e)?mr:Be.current,i.context=di(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Yl.enqueueReplaceState(i,i.state,null),ol(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ui(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===bg&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function _o(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Af(t){var e=t._init;return e(t._payload)}function Ug(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=jn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,g,C){return f===null||f.tag!==6?(f=Ya(g,p.mode,C),f.return=p,f):(f=i(f,g),f.return=p,f)}function a(p,f,g,C){var k=g.type;return k===Ur?d(p,f,g.props.children,C,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===En&&Af(k)===f.type)?(C=i(f,g.props),C.ref=Ui(p,f,g),C.return=p,C):(C=Uo(g.type,g.key,g.props,null,p.mode,C),C.ref=Ui(p,f,g),C.return=p,C)}function u(p,f,g,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Xa(g,p.mode,C),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function d(p,f,g,C,k){return f===null||f.tag!==7?(f=hr(g,p.mode,C,k),f.return=p,f):(f=i(f,g),f.return=p,f)}function c(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ya(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case so:return g=Uo(f.type,f.key,f.props,null,p.mode,g),g.ref=Ui(p,null,f),g.return=p,g;case Fr:return f=Xa(f,p.mode,g),f.return=p,f;case En:var C=f._init;return c(p,C(f._payload),g)}if(qi(f)||Di(f))return f=hr(f,p.mode,g,null),f.return=p,f;_o(p,f)}return null}function h(p,f,g,C){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(p,f,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case so:return g.key===k?a(p,f,g,C):null;case Fr:return g.key===k?u(p,f,g,C):null;case En:return k=g._init,h(p,f,k(g._payload),C)}if(qi(g)||Di(g))return k!==null?null:d(p,f,g,C,null);_o(p,g)}return null}function _(p,f,g,C,k){if(typeof C=="string"&&C!==""||typeof C=="number")return p=p.get(g)||null,l(f,p,""+C,k);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case so:return p=p.get(C.key===null?g:C.key)||null,a(f,p,C,k);case Fr:return p=p.get(C.key===null?g:C.key)||null,u(f,p,C,k);case En:var A=C._init;return _(p,f,g,A(C._payload),k)}if(qi(C)||Di(C))return p=p.get(g)||null,d(f,p,C,k,null);_o(f,C)}return null}function v(p,f,g,C){for(var k=null,A=null,O=f,M=f=0,q=null;O!==null&&M<g.length;M++){O.index>M?(q=O,O=null):q=O.sibling;var $=h(p,O,g[M],C);if($===null){O===null&&(O=q);break}t&&O&&$.alternate===null&&e(p,O),f=s($,f,M),A===null?k=$:A.sibling=$,A=$,O=q}if(M===g.length)return n(p,O),ce&&Zn(p,M),k;if(O===null){for(;M<g.length;M++)O=c(p,g[M],C),O!==null&&(f=s(O,f,M),A===null?k=O:A.sibling=O,A=O);return ce&&Zn(p,M),k}for(O=r(p,O);M<g.length;M++)q=_(O,p,M,g[M],C),q!==null&&(t&&q.alternate!==null&&O.delete(q.key===null?M:q.key),f=s(q,f,M),A===null?k=q:A.sibling=q,A=q);return t&&O.forEach(function(_e){return e(p,_e)}),ce&&Zn(p,M),k}function w(p,f,g,C){var k=Di(g);if(typeof k!="function")throw Error(I(150));if(g=k.call(g),g==null)throw Error(I(151));for(var A=k=null,O=f,M=f=0,q=null,$=g.next();O!==null&&!$.done;M++,$=g.next()){O.index>M?(q=O,O=null):q=O.sibling;var _e=h(p,O,$.value,C);if(_e===null){O===null&&(O=q);break}t&&O&&_e.alternate===null&&e(p,O),f=s(_e,f,M),A===null?k=_e:A.sibling=_e,A=_e,O=q}if($.done)return n(p,O),ce&&Zn(p,M),k;if(O===null){for(;!$.done;M++,$=g.next())$=c(p,$.value,C),$!==null&&(f=s($,f,M),A===null?k=$:A.sibling=$,A=$);return ce&&Zn(p,M),k}for(O=r(p,O);!$.done;M++,$=g.next())$=_(O,p,M,$.value,C),$!==null&&(t&&$.alternate!==null&&O.delete($.key===null?M:$.key),f=s($,f,M),A===null?k=$:A.sibling=$,A=$);return t&&O.forEach(function(Q){return e(p,Q)}),ce&&Zn(p,M),k}function x(p,f,g,C){if(typeof g=="object"&&g!==null&&g.type===Ur&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case so:e:{for(var k=g.key,A=f;A!==null;){if(A.key===k){if(k=g.type,k===Ur){if(A.tag===7){n(p,A.sibling),f=i(A,g.props.children),f.return=p,p=f;break e}}else if(A.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===En&&Af(k)===A.type){n(p,A.sibling),f=i(A,g.props),f.ref=Ui(p,A,g),f.return=p,p=f;break e}n(p,A);break}else e(p,A);A=A.sibling}g.type===Ur?(f=hr(g.props.children,p.mode,C,g.key),f.return=p,p=f):(C=Uo(g.type,g.key,g.props,null,p.mode,C),C.ref=Ui(p,f,g),C.return=p,p=C)}return o(p);case Fr:e:{for(A=g.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Xa(g,p.mode,C),f.return=p,p=f}return o(p);case En:return A=g._init,x(p,f,A(g._payload),C)}if(qi(g))return v(p,f,g,C);if(Di(g))return w(p,f,g,C);_o(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Ya(g,p.mode,C),f.return=p,p=f),o(p)):n(p,f)}return x}var fi=Ug(!0),jg=Ug(!1),Bs={},Bt=Qn(Bs),Cs=Qn(Bs),Ss=Qn(Bs);function sr(t){if(t===Bs)throw Error(I(174));return t}function md(t,e){switch(re(Ss,e),re(Cs,t),re(Bt,Bs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ou(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ou(e,t)}oe(Bt),re(Bt,e)}function pi(){oe(Bt),oe(Cs),oe(Ss)}function Vg(t){sr(Ss.current);var e=sr(Bt.current),n=Ou(e,t.type);e!==n&&(re(Cs,t),re(Bt,n))}function gd(t){Cs.current===t&&(oe(Bt),oe(Cs))}var de=Qn(0);function ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wa=[];function _d(){for(var t=0;t<Wa.length;t++)Wa[t]._workInProgressVersionPrimary=null;Wa.length=0}var Do=pn.ReactCurrentDispatcher,Ha=pn.ReactCurrentBatchConfig,_r=0,he=null,Se=null,xe=null,al=!1,ns=!1,Is=0,aE=0;function je(){throw Error(I(321))}function vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Lt(t[n],e[n]))return!1;return!0}function yd(t,e,n,r,i,s){if(_r=s,he=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Do.current=t===null||t.memoizedState===null?hE:fE,t=n(r,i),ns){s=0;do{if(ns=!1,Is=0,25<=s)throw Error(I(301));s+=1,xe=Se=null,e.updateQueue=null,Do.current=pE,t=n(r,i)}while(ns)}if(Do.current=ul,e=Se!==null&&Se.next!==null,_r=0,xe=Se=he=null,al=!1,e)throw Error(I(300));return t}function wd(){var t=Is!==0;return Is=0,t}function Ut(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?he.memoizedState=xe=t:xe=xe.next=t,xe}function Et(){if(Se===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Se.next;var e=xe===null?he.memoizedState:xe.next;if(e!==null)xe=e,Se=t;else{if(t===null)throw Error(I(310));Se=t,t={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},xe===null?he.memoizedState=xe=t:xe=xe.next=t}return xe}function ks(t,e){return typeof e=="function"?e(t):e}function Ga(t){var e=Et(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=Se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((_r&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,he.lanes|=d,vr|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Lt(r,e.memoizedState)||(Je=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,he.lanes|=s,vr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ka(t){var e=Et(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Lt(s,e.memoizedState)||(Je=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $g(){}function zg(t,e){var n=he,r=Et(),i=e(),s=!Lt(r.memoizedState,i);if(s&&(r.memoizedState=i,Je=!0),r=r.queue,Ed(Hg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,Ts(9,Wg.bind(null,n,r,i,e),void 0,null),Ae===null)throw Error(I(349));_r&30||Bg(n,e,i)}return i}function Bg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wg(t,e,n,r){e.value=n,e.getSnapshot=r,Gg(e)&&Kg(t)}function Hg(t,e,n){return n(function(){Gg(e)&&Kg(t)})}function Gg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Lt(t,n)}catch{return!0}}function Kg(t){var e=un(t,1);e!==null&&Ot(e,t,1,-1)}function Of(t){var e=Ut();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:t},e.queue=t,t=t.dispatch=dE.bind(null,he,t),[e.memoizedState,t]}function Ts(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qg(){return Et().memoizedState}function Lo(t,e,n,r){var i=Ut();he.flags|=t,i.memoizedState=Ts(1|e,n,void 0,r===void 0?null:r)}function Xl(t,e,n,r){var i=Et();r=r===void 0?null:r;var s=void 0;if(Se!==null){var o=Se.memoizedState;if(s=o.destroy,r!==null&&vd(r,o.deps)){i.memoizedState=Ts(e,n,s,r);return}}he.flags|=t,i.memoizedState=Ts(1|e,n,s,r)}function Df(t,e){return Lo(8390656,8,t,e)}function Ed(t,e){return Xl(2048,8,t,e)}function Qg(t,e){return Xl(4,2,t,e)}function Yg(t,e){return Xl(4,4,t,e)}function Xg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jg(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4,4,Xg.bind(null,e,t),n)}function Cd(){}function Zg(t,e){var n=Et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function e_(t,e){var n=Et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function t_(t,e,n){return _r&21?(Lt(n,e)||(n=ig(),he.lanes|=n,vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Je=!0),t.memoizedState=n)}function uE(t,e){var n=Z;Z=n!==0&&4>n?n:4,t(!0);var r=Ha.transition;Ha.transition={};try{t(!1),e()}finally{Z=n,Ha.transition=r}}function n_(){return Et().memoizedState}function cE(t,e,n){var r=Un(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},r_(t))i_(e,n);else if(n=Lg(t,e,n,r),n!==null){var i=Ke();Ot(n,t,r,i),s_(n,e,r)}}function dE(t,e,n){var r=Un(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(r_(t))i_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Lt(l,o)){var a=e.interleaved;a===null?(i.next=i,fd(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Lg(t,e,i,r),n!==null&&(i=Ke(),Ot(n,t,r,i),s_(n,e,r))}}function r_(t){var e=t.alternate;return t===he||e!==null&&e===he}function i_(t,e){ns=al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function s_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zc(t,n)}}var ul={readContext:wt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},hE={readContext:wt,useCallback:function(t,e){return Ut().memoizedState=[t,e===void 0?null:e],t},useContext:wt,useEffect:Df,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Lo(4194308,4,Xg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Lo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Lo(4,2,t,e)},useMemo:function(t,e){var n=Ut();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ut();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cE.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var e=Ut();return t={current:t},e.memoizedState=t},useState:Of,useDebugValue:Cd,useDeferredValue:function(t){return Ut().memoizedState=t},useTransition:function(){var t=Of(!1),e=t[0];return t=uE.bind(null,t[1]),Ut().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=he,i=Ut();if(ce){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Ae===null)throw Error(I(349));_r&30||Bg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Df(Hg.bind(null,r,s,t),[t]),r.flags|=2048,Ts(9,Wg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ut(),e=Ae.identifierPrefix;if(ce){var n=Zt,r=Jt;n=(r&~(1<<32-At(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Is++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fE={readContext:wt,useCallback:Zg,useContext:wt,useEffect:Ed,useImperativeHandle:Jg,useInsertionEffect:Qg,useLayoutEffect:Yg,useMemo:e_,useReducer:Ga,useRef:qg,useState:function(){return Ga(ks)},useDebugValue:Cd,useDeferredValue:function(t){var e=Et();return t_(e,Se.memoizedState,t)},useTransition:function(){var t=Ga(ks)[0],e=Et().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:zg,useId:n_,unstable_isNewReconciler:!1},pE={readContext:wt,useCallback:Zg,useContext:wt,useEffect:Ed,useImperativeHandle:Jg,useInsertionEffect:Qg,useLayoutEffect:Yg,useMemo:e_,useReducer:Ka,useRef:qg,useState:function(){return Ka(ks)},useDebugValue:Cd,useDeferredValue:function(t){var e=Et();return Se===null?e.memoizedState=t:t_(e,Se.memoizedState,t)},useTransition:function(){var t=Ka(ks)[0],e=Et().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:zg,useId:n_,unstable_isNewReconciler:!1};function mi(t,e){try{var n="",r=e;do n+=z0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function qa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function tc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mE=typeof WeakMap=="function"?WeakMap:Map;function o_(t,e,n){n=sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){dl||(dl=!0,dc=r),tc(t,e)},n}function l_(t,e,n){n=sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){tc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){tc(t,e),typeof r!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Lf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new mE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=RE.bind(null,t,e,n),e.then(t,t))}function Mf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sn(-1,1),e.tag=2,bn(n,e,1))),n.lanes|=1),t)}var gE=pn.ReactCurrentOwner,Je=!1;function He(t,e,n,r){e.child=t===null?jg(e,null,n,r):fi(e,t.child,n,r)}function Ff(t,e,n,r,i){n=n.render;var s=e.ref;return ti(e,i),r=yd(t,e,n,r,s,i),n=wd(),t!==null&&!Je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cn(t,e,i)):(ce&&n&&ld(e),e.flags|=1,He(t,e,r,i),e.child)}function Uf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,a_(t,e,s,r,i)):(t=Uo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vs,n(o,r)&&t.ref===e.ref)return cn(t,e,i)}return e.flags|=1,t=jn(s,r),t.ref=e.ref,t.return=e,e.child=t}function a_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(vs(s,r)&&t.ref===e.ref)if(Je=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Je=!0);else return e.lanes=t.lanes,cn(t,e,i)}return nc(t,e,n,r,i)}function u_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(qr,ut),ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,re(qr,ut),ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,re(qr,ut),ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,re(qr,ut),ut|=r;return He(t,e,i,n),e.child}function c_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nc(t,e,n,r,i){var s=nt(n)?mr:Be.current;return s=di(e,s),ti(e,i),n=yd(t,e,n,r,s,i),r=wd(),t!==null&&!Je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cn(t,e,i)):(ce&&r&&ld(e),e.flags|=1,He(t,e,n,i),e.child)}function jf(t,e,n,r,i){if(nt(n)){var s=!0;tl(e)}else s=!1;if(ti(e,i),e.stateNode===null)Mo(t,e),Fg(e,n,r),ec(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=nt(n)?mr:Be.current,u=di(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Pf(e,o,r,u),Cn=!1;var h=e.memoizedState;o.state=h,ol(e,r,o,i),a=e.memoizedState,l!==r||h!==a||tt.current||Cn?(typeof d=="function"&&(Zu(e,n,d,r),a=e.memoizedState),(l=Cn||Rf(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Mg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:It(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=wt(a):(a=nt(n)?mr:Be.current,a=di(e,a));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&Pf(e,o,r,a),Cn=!1,h=e.memoizedState,o.state=h,ol(e,r,o,i);var v=e.memoizedState;l!==c||h!==v||tt.current||Cn?(typeof _=="function"&&(Zu(e,n,_,r),v=e.memoizedState),(u=Cn||Rf(e,n,u,r,h,v,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return rc(t,e,n,r,s,i)}function rc(t,e,n,r,i,s){c_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&If(e,n,!1),cn(t,e,s);r=e.stateNode,gE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fi(e,t.child,null,s),e.child=fi(e,null,l,s)):He(t,e,l,s),e.memoizedState=r.state,i&&If(e,n,!0),e.child}function d_(t){var e=t.stateNode;e.pendingContext?Sf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sf(t,e.context,!1),md(t,e.containerInfo)}function Vf(t,e,n,r,i){return hi(),ud(i),e.flags|=256,He(t,e,n,r),e.child}var ic={dehydrated:null,treeContext:null,retryLane:0};function sc(t){return{baseLanes:t,cachePool:null,transitions:null}}function h_(t,e,n){var r=e.pendingProps,i=de.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),re(de,i&1),t===null)return Xu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ea(o,r,0,null),t=hr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sc(n),e.memoizedState=ic,t):Sd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return _E(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=jn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=jn(l,s):(s=hr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?sc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ic,r}return s=t.child,t=s.sibling,r=jn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sd(t,e){return e=ea({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vo(t,e,n,r){return r!==null&&ud(r),fi(e,t.child,null,n),t=Sd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _E(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=qa(Error(I(422))),vo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ea({mode:"visible",children:r.children},i,0,null),s=hr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&fi(e,t.child,null,o),e.child.memoizedState=sc(o),e.memoizedState=ic,s);if(!(e.mode&1))return vo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(I(419)),r=qa(s,r,void 0),vo(t,e,o,r)}if(l=(o&t.childLanes)!==0,Je||l){if(r=Ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,un(t,i),Ot(r,t,i,-1))}return Rd(),r=qa(Error(I(421))),vo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=PE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ct=Mn(i.nextSibling),dt=e,ce=!0,Tt=null,t!==null&&(gt[_t++]=Jt,gt[_t++]=Zt,gt[_t++]=gr,Jt=t.id,Zt=t.overflow,gr=e),e=Sd(e,r.children),e.flags|=4096,e)}function $f(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ju(t.return,e,n)}function Qa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function f_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(He(t,e,r.children,n),r=de.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$f(t,n,e);else if(t.tag===19)$f(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(re(de,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ll(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Qa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ll(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Qa(e,!0,n,null,s);break;case"together":Qa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=jn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vE(t,e,n){switch(e.tag){case 3:d_(e),hi();break;case 5:Vg(e);break;case 1:nt(e.type)&&tl(e);break;case 4:md(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;re(il,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(re(de,de.current&1),e.flags|=128,null):n&e.child.childLanes?h_(t,e,n):(re(de,de.current&1),t=cn(t,e,n),t!==null?t.sibling:null);re(de,de.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return f_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(de,de.current),r)break;return null;case 22:case 23:return e.lanes=0,u_(t,e,n)}return cn(t,e,n)}var p_,oc,m_,g_;p_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oc=function(){};m_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,sr(Bt.current);var s=null;switch(n){case"input":i=xu(t,i),r=xu(t,r),s=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),s=[];break;case"textarea":i=Au(t,i),r=Au(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Zo)}Du(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ds.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ds.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ie("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};g_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ji(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ve(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function yE(t,e,n){var r=e.pendingProps;switch(ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(e),null;case 1:return nt(e.type)&&el(),Ve(e),null;case 3:return r=e.stateNode,pi(),oe(tt),oe(Be),_d(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(go(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tt!==null&&(pc(Tt),Tt=null))),oc(t,e),Ve(e),null;case 5:gd(e);var i=sr(Ss.current);if(n=e.type,t!==null&&e.stateNode!=null)m_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return Ve(e),null}if(t=sr(Bt.current),go(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Vt]=e,r[Es]=s,t=(e.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<Yi.length;i++)ie(Yi[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Qh(r,s),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ie("invalid",r);break;case"textarea":Xh(r,s),ie("invalid",r)}Du(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&mo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&mo(r.textContent,l,t),i=["children",""+l]):ds.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":oo(r),Yh(r,s,!0);break;case"textarea":oo(r),Jh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Zo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Vt]=e,t[Es]=r,p_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Lu(n,r),n){case"dialog":ie("cancel",t),ie("close",t),i=r;break;case"iframe":case"object":case"embed":ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<Yi.length;i++)ie(Yi[i],t);i=r;break;case"source":ie("error",t),i=r;break;case"img":case"image":case"link":ie("error",t),ie("load",t),i=r;break;case"details":ie("toggle",t),i=r;break;case"input":Qh(t,r),i=xu(t,r),ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),ie("invalid",t);break;case"textarea":Xh(t,r),i=Au(t,r),ie("invalid",t);break;default:i=r}Du(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Gm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Wm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&hs(t,a):typeof a=="number"&&hs(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ds.hasOwnProperty(s)?a!=null&&s==="onScroll"&&ie("scroll",t):a!=null&&Kc(t,s,a,o))}switch(n){case"input":oo(t),Yh(t,r,!1);break;case"textarea":oo(t),Jh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Wn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Xr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Xr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ve(e),null;case 6:if(t&&e.stateNode!=null)g_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=sr(Ss.current),sr(Bt.current),go(e)){if(r=e.stateNode,n=e.memoizedProps,r[Vt]=e,(s=r.nodeValue!==n)&&(t=dt,t!==null))switch(t.tag){case 3:mo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=e,e.stateNode=r}return Ve(e),null;case 13:if(oe(de),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&ct!==null&&e.mode&1&&!(e.flags&128))Dg(),hi(),e.flags|=98560,s=!1;else if(s=go(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[Vt]=e}else hi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ve(e),s=!1}else Tt!==null&&(pc(Tt),Tt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||de.current&1?ke===0&&(ke=3):Rd())),e.updateQueue!==null&&(e.flags|=4),Ve(e),null);case 4:return pi(),oc(t,e),t===null&&ys(e.stateNode.containerInfo),Ve(e),null;case 10:return hd(e.type._context),Ve(e),null;case 17:return nt(e.type)&&el(),Ve(e),null;case 19:if(oe(de),s=e.memoizedState,s===null)return Ve(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ji(s,!1);else{if(ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ll(t),o!==null){for(e.flags|=128,ji(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return re(de,de.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>gi&&(e.flags|=128,r=!0,ji(s,!1),e.lanes=4194304)}else{if(!r)if(t=ll(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ji(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return Ve(e),null}else 2*we()-s.renderingStartTime>gi&&n!==1073741824&&(e.flags|=128,r=!0,ji(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=de.current,re(de,r?n&1|2:n&1),e):(Ve(e),null);case 22:case 23:return xd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ut&1073741824&&(Ve(e),e.subtreeFlags&6&&(e.flags|=8192)):Ve(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function wE(t,e){switch(ad(e),e.tag){case 1:return nt(e.type)&&el(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pi(),oe(tt),oe(Be),_d(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gd(e),null;case 13:if(oe(de),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));hi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return oe(de),null;case 4:return pi(),null;case 10:return hd(e.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var yo=!1,$e=!1,EE=typeof WeakSet=="function"?WeakSet:Set,D=null;function Kr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(t,e,r)}else n.current=null}function lc(t,e,n){try{n()}catch(r){me(t,e,r)}}var zf=!1;function CE(t,e){if(Wu=Yo,t=wg(),od(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var _;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(_=c.firstChild)!==null;)h=c,c=_;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(_=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hu={focusedElem:t,selectionRange:n},Yo=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,x=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:It(e.type,w),x);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(C){me(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return v=zf,zf=!1,v}function rs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&lc(e,n,s)}i=i.next}while(i!==r)}}function Jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ac(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function __(t){var e=t.alternate;e!==null&&(t.alternate=null,__(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Vt],delete e[Es],delete e[qu],delete e[iE],delete e[sE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function v_(t){return t.tag===5||t.tag===3||t.tag===4}function Bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||v_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zo));else if(r!==4&&(t=t.child,t!==null))for(uc(t,e,n),t=t.sibling;t!==null;)uc(t,e,n),t=t.sibling}function cc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cc(t,e,n),t=t.sibling;t!==null;)cc(t,e,n),t=t.sibling}var De=null,kt=!1;function _n(t,e,n){for(n=n.child;n!==null;)y_(t,e,n),n=n.sibling}function y_(t,e,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:$e||Kr(n,e);case 6:var r=De,i=kt;De=null,_n(t,e,n),De=r,kt=i,De!==null&&(kt?(t=De,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(kt?(t=De,n=n.stateNode,t.nodeType===8?za(t.parentNode,n):t.nodeType===1&&za(t,n),gs(t)):za(De,n.stateNode));break;case 4:r=De,i=kt,De=n.stateNode.containerInfo,kt=!0,_n(t,e,n),De=r,kt=i;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&lc(n,e,o),i=i.next}while(i!==r)}_n(t,e,n);break;case 1:if(!$e&&(Kr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){me(n,e,l)}_n(t,e,n);break;case 21:_n(t,e,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,_n(t,e,n),$e=r):_n(t,e,n);break;default:_n(t,e,n)}}function Wf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new EE),e.forEach(function(r){var i=AE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:De=l.stateNode,kt=!1;break e;case 3:De=l.stateNode.containerInfo,kt=!0;break e;case 4:De=l.stateNode.containerInfo,kt=!0;break e}l=l.return}if(De===null)throw Error(I(160));y_(s,o,i),De=null,kt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){me(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)w_(e,t),e=e.sibling}function w_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(St(e,t),Ft(t),r&4){try{rs(3,t,t.return),Jl(3,t)}catch(w){me(t,t.return,w)}try{rs(5,t,t.return)}catch(w){me(t,t.return,w)}}break;case 1:St(e,t),Ft(t),r&512&&n!==null&&Kr(n,n.return);break;case 5:if(St(e,t),Ft(t),r&512&&n!==null&&Kr(n,n.return),t.flags&32){var i=t.stateNode;try{hs(i,"")}catch(w){me(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&$m(i,s),Lu(l,o);var u=Lu(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Gm(i,c):d==="dangerouslySetInnerHTML"?Wm(i,c):d==="children"?hs(i,c):Kc(i,d,c,u)}switch(l){case"input":Ru(i,s);break;case"textarea":zm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Xr(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?Xr(i,!!s.multiple,s.defaultValue,!0):Xr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Es]=s}catch(w){me(t,t.return,w)}}break;case 6:if(St(e,t),Ft(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){me(t,t.return,w)}}break;case 3:if(St(e,t),Ft(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gs(e.containerInfo)}catch(w){me(t,t.return,w)}break;case 4:St(e,t),Ft(t);break;case 13:St(e,t),Ft(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Td=we())),r&4&&Wf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?($e=(u=$e)||d,St(e,t),$e=u):St(e,t),Ft(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(D=t,d=t.child;d!==null;){for(c=D=d;D!==null;){switch(h=D,_=h.child,h.tag){case 0:case 11:case 14:case 15:rs(4,h,h.return);break;case 1:Kr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){me(r,n,w)}}break;case 5:Kr(h,h.return);break;case 22:if(h.memoizedState!==null){Gf(c);continue}}_!==null?(_.return=h,D=_):Gf(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Hm("display",o))}catch(w){me(t,t.return,w)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){me(t,t.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:St(e,t),Ft(t),r&4&&Wf(t);break;case 21:break;default:St(e,t),Ft(t)}}function Ft(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(v_(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(hs(i,""),r.flags&=-33);var s=Bf(t);cc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Bf(t);uc(t,l,o);break;default:throw Error(I(161))}}catch(a){me(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function SE(t,e,n){D=t,E_(t)}function E_(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||yo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||$e;l=yo;var u=$e;if(yo=o,($e=a)&&!u)for(D=i;D!==null;)o=D,a=o.child,o.tag===22&&o.memoizedState!==null?Kf(i):a!==null?(a.return=o,D=a):Kf(i);for(;s!==null;)D=s,E_(s),s=s.sibling;D=i,yo=l,$e=u}Hf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):Hf(t)}}function Hf(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$e||Jl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!$e)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:It(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xf(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&gs(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}$e||e.flags&512&&ac(e)}catch(h){me(e,e.return,h)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function Gf(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function Kf(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jl(4,e)}catch(a){me(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){me(e,i,a)}}var s=e.return;try{ac(e)}catch(a){me(e,s,a)}break;case 5:var o=e.return;try{ac(e)}catch(a){me(e,o,a)}}}catch(a){me(e,e.return,a)}if(e===t){D=null;break}var l=e.sibling;if(l!==null){l.return=e.return,D=l;break}D=e.return}}var IE=Math.ceil,cl=pn.ReactCurrentDispatcher,Id=pn.ReactCurrentOwner,yt=pn.ReactCurrentBatchConfig,X=0,Ae=null,Ce=null,Me=0,ut=0,qr=Qn(0),ke=0,Ns=null,vr=0,Zl=0,kd=0,is=null,Xe=null,Td=0,gi=1/0,Qt=null,dl=!1,dc=null,Fn=null,wo=!1,Rn=null,hl=0,ss=0,hc=null,bo=-1,Fo=0;function Ke(){return X&6?we():bo!==-1?bo:bo=we()}function Un(t){return t.mode&1?X&2&&Me!==0?Me&-Me:lE.transition!==null?(Fo===0&&(Fo=ig()),Fo):(t=Z,t!==0||(t=window.event,t=t===void 0?16:dg(t.type)),t):1}function Ot(t,e,n,r){if(50<ss)throw ss=0,hc=null,Error(I(185));Vs(t,n,r),(!(X&2)||t!==Ae)&&(t===Ae&&(!(X&2)&&(Zl|=n),ke===4&&In(t,Me)),rt(t,r),n===1&&X===0&&!(e.mode&1)&&(gi=we()+500,Ql&&Yn()))}function rt(t,e){var n=t.callbackNode;lw(t,e);var r=Qo(t,t===Ae?Me:0);if(r===0)n!==null&&tf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&tf(n),e===1)t.tag===0?oE(qf.bind(null,t)):Pg(qf.bind(null,t)),nE(function(){!(X&6)&&Yn()}),n=null;else{switch(sg(r)){case 1:n=Jc;break;case 4:n=ng;break;case 16:n=qo;break;case 536870912:n=rg;break;default:n=qo}n=R_(n,C_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function C_(t,e){if(bo=-1,Fo=0,X&6)throw Error(I(327));var n=t.callbackNode;if(ni()&&t.callbackNode!==n)return null;var r=Qo(t,t===Ae?Me:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fl(t,r);else{e=r;var i=X;X|=2;var s=I_();(Ae!==t||Me!==e)&&(Qt=null,gi=we()+500,dr(t,e));do try{NE();break}catch(l){S_(t,l)}while(1);dd(),cl.current=s,X=i,Ce!==null?e=0:(Ae=null,Me=0,e=ke)}if(e!==0){if(e===2&&(i=ju(t),i!==0&&(r=i,e=fc(t,i))),e===1)throw n=Ns,dr(t,0),In(t,r),rt(t,we()),n;if(e===6)In(t,r);else{if(i=t.current.alternate,!(r&30)&&!kE(i)&&(e=fl(t,r),e===2&&(s=ju(t),s!==0&&(r=s,e=fc(t,s))),e===1))throw n=Ns,dr(t,0),In(t,r),rt(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:er(t,Xe,Qt);break;case 3:if(In(t,r),(r&130023424)===r&&(e=Td+500-we(),10<e)){if(Qo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ke(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ku(er.bind(null,t,Xe,Qt),e);break}er(t,Xe,Qt);break;case 4:if(In(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-At(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*IE(r/1960))-r,10<r){t.timeoutHandle=Ku(er.bind(null,t,Xe,Qt),r);break}er(t,Xe,Qt);break;case 5:er(t,Xe,Qt);break;default:throw Error(I(329))}}}return rt(t,we()),t.callbackNode===n?C_.bind(null,t):null}function fc(t,e){var n=is;return t.current.memoizedState.isDehydrated&&(dr(t,e).flags|=256),t=fl(t,e),t!==2&&(e=Xe,Xe=n,e!==null&&pc(e)),t}function pc(t){Xe===null?Xe=t:Xe.push.apply(Xe,t)}function kE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Lt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function In(t,e){for(e&=~kd,e&=~Zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-At(e),r=1<<n;t[n]=-1,e&=~r}}function qf(t){if(X&6)throw Error(I(327));ni();var e=Qo(t,0);if(!(e&1))return rt(t,we()),null;var n=fl(t,e);if(t.tag!==0&&n===2){var r=ju(t);r!==0&&(e=r,n=fc(t,r))}if(n===1)throw n=Ns,dr(t,0),In(t,e),rt(t,we()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,er(t,Xe,Qt),rt(t,we()),null}function Nd(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(gi=we()+500,Ql&&Yn())}}function yr(t){Rn!==null&&Rn.tag===0&&!(X&6)&&ni();var e=X;X|=1;var n=yt.transition,r=Z;try{if(yt.transition=null,Z=1,t)return t()}finally{Z=r,yt.transition=n,X=e,!(X&6)&&Yn()}}function xd(){ut=qr.current,oe(qr)}function dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tE(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(ad(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&el();break;case 3:pi(),oe(tt),oe(Be),_d();break;case 5:gd(r);break;case 4:pi();break;case 13:oe(de);break;case 19:oe(de);break;case 10:hd(r.type._context);break;case 22:case 23:xd()}n=n.return}if(Ae=t,Ce=t=jn(t.current,null),Me=ut=e,ke=0,Ns=null,kd=Zl=vr=0,Xe=is=null,ir!==null){for(e=0;e<ir.length;e++)if(n=ir[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ir=null}return t}function S_(t,e){do{var n=Ce;try{if(dd(),Do.current=ul,al){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}al=!1}if(_r=0,xe=Se=he=null,ns=!1,Is=0,Id.current=null,n===null||n.return===null){ke=1,Ns=e,Ce=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Me,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Mf(o);if(_!==null){_.flags&=-257,bf(_,o,l,s,e),_.mode&1&&Lf(s,u,e),e=_,a=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(a),e.updateQueue=w}else v.add(a);break e}else{if(!(e&1)){Lf(s,u,e),Rd();break e}a=Error(I(426))}}else if(ce&&l.mode&1){var x=Mf(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),bf(x,o,l,s,e),ud(mi(a,l));break e}}s=a=mi(a,l),ke!==4&&(ke=2),is===null?is=[s]:is.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=o_(s,a,e);Nf(s,p);break e;case 1:l=a;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Fn===null||!Fn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=l_(s,l,e);Nf(s,C);break e}}s=s.return}while(s!==null)}T_(n)}catch(k){e=k,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function I_(){var t=cl.current;return cl.current=ul,t===null?ul:t}function Rd(){(ke===0||ke===3||ke===2)&&(ke=4),Ae===null||!(vr&268435455)&&!(Zl&268435455)||In(Ae,Me)}function fl(t,e){var n=X;X|=2;var r=I_();(Ae!==t||Me!==e)&&(Qt=null,dr(t,e));do try{TE();break}catch(i){S_(t,i)}while(1);if(dd(),X=n,cl.current=r,Ce!==null)throw Error(I(261));return Ae=null,Me=0,ke}function TE(){for(;Ce!==null;)k_(Ce)}function NE(){for(;Ce!==null&&!J0();)k_(Ce)}function k_(t){var e=x_(t.alternate,t,ut);t.memoizedProps=t.pendingProps,e===null?T_(t):Ce=e,Id.current=null}function T_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wE(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ke=6,Ce=null;return}}else if(n=yE(n,e,ut),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);ke===0&&(ke=5)}function er(t,e,n){var r=Z,i=yt.transition;try{yt.transition=null,Z=1,xE(t,e,n,r)}finally{yt.transition=i,Z=r}return null}function xE(t,e,n,r){do ni();while(Rn!==null);if(X&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(aw(t,s),t===Ae&&(Ce=Ae=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wo||(wo=!0,R_(qo,function(){return ni(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=Z;Z=1;var l=X;X|=4,Id.current=null,CE(t,n),w_(n,t),qw(Hu),Yo=!!Wu,Hu=Wu=null,t.current=n,SE(n),Z0(),X=l,Z=o,yt.transition=s}else t.current=n;if(wo&&(wo=!1,Rn=t,hl=i),s=t.pendingLanes,s===0&&(Fn=null),nw(n.stateNode),rt(t,we()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(dl)throw dl=!1,t=dc,dc=null,t;return hl&1&&t.tag!==0&&ni(),s=t.pendingLanes,s&1?t===hc?ss++:(ss=0,hc=t):ss=0,Yn(),null}function ni(){if(Rn!==null){var t=sg(hl),e=yt.transition,n=Z;try{if(yt.transition=null,Z=16>t?16:t,Rn===null)var r=!1;else{if(t=Rn,Rn=null,hl=0,X&6)throw Error(I(331));var i=X;for(X|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(D=u;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:rs(8,d,s)}var c=d.child;if(c!==null)c.return=d,D=c;else for(;D!==null;){d=D;var h=d.sibling,_=d.return;if(__(d),d===u){D=null;break}if(h!==null){h.return=_,D=h;break}D=_}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:rs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,D=p;break e}D=s.return}}var f=t.current;for(D=f;D!==null;){o=D;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,D=g;else e:for(o=f;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Jl(9,l)}}catch(k){me(l,l.return,k)}if(l===o){D=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,D=C;break e}D=l.return}}if(X=i,Yn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Wl,t)}catch{}r=!0}return r}finally{Z=n,yt.transition=e}}return!1}function Qf(t,e,n){e=mi(n,e),e=o_(t,e,1),t=bn(t,e,1),e=Ke(),t!==null&&(Vs(t,1,e),rt(t,e))}function me(t,e,n){if(t.tag===3)Qf(t,t,n);else for(;e!==null;){if(e.tag===3){Qf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fn===null||!Fn.has(r))){t=mi(n,t),t=l_(e,t,1),e=bn(e,t,1),t=Ke(),e!==null&&(Vs(e,1,t),rt(e,t));break}}e=e.return}}function RE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ke(),t.pingedLanes|=t.suspendedLanes&n,Ae===t&&(Me&n)===n&&(ke===4||ke===3&&(Me&130023424)===Me&&500>we()-Td?dr(t,0):kd|=n),rt(t,e)}function N_(t,e){e===0&&(t.mode&1?(e=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):e=1);var n=Ke();t=un(t,e),t!==null&&(Vs(t,e,n),rt(t,n))}function PE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),N_(t,n)}function AE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),N_(t,n)}var x_;x_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tt.current)Je=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Je=!1,vE(t,e,n);Je=!!(t.flags&131072)}else Je=!1,ce&&e.flags&1048576&&Ag(e,rl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Mo(t,e),t=e.pendingProps;var i=di(e,Be.current);ti(e,n),i=yd(null,e,r,t,i,n);var s=wd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nt(r)?(s=!0,tl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pd(e),i.updater=Yl,e.stateNode=i,i._reactInternals=e,ec(e,r,t,n),e=rc(null,e,r,!0,s,n)):(e.tag=0,ce&&s&&ld(e),He(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Mo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=DE(r),t=It(r,t),i){case 0:e=nc(null,e,r,t,n);break e;case 1:e=jf(null,e,r,t,n);break e;case 11:e=Ff(null,e,r,t,n);break e;case 14:e=Uf(null,e,r,It(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),nc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),jf(t,e,r,i,n);case 3:e:{if(d_(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Mg(t,e),ol(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=mi(Error(I(423)),e),e=Vf(t,e,r,n,i);break e}else if(r!==i){i=mi(Error(I(424)),e),e=Vf(t,e,r,n,i);break e}else for(ct=Mn(e.stateNode.containerInfo.firstChild),dt=e,ce=!0,Tt=null,n=jg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hi(),r===i){e=cn(t,e,n);break e}He(t,e,r,n)}e=e.child}return e;case 5:return Vg(e),t===null&&Xu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Gu(r,i)?o=null:s!==null&&Gu(r,s)&&(e.flags|=32),c_(t,e),He(t,e,o,n),e.child;case 6:return t===null&&Xu(e),null;case 13:return h_(t,e,n);case 4:return md(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fi(e,null,r,n):He(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),Ff(t,e,r,i,n);case 7:return He(t,e,e.pendingProps,n),e.child;case 8:return He(t,e,e.pendingProps.children,n),e.child;case 12:return He(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,re(il,r._currentValue),r._currentValue=o,s!==null)if(Lt(s.value,o)){if(s.children===i.children&&!tt.current){e=cn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=sn(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ju(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ju(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}He(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ti(e,n),i=wt(i),r=r(i),e.flags|=1,He(t,e,r,n),e.child;case 14:return r=e.type,i=It(r,e.pendingProps),i=It(r.type,i),Uf(t,e,r,i,n);case 15:return a_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:It(r,i),Mo(t,e),e.tag=1,nt(r)?(t=!0,tl(e)):t=!1,ti(e,n),Fg(e,r,i),ec(e,r,i,n),rc(null,e,r,!0,t,n);case 19:return f_(t,e,n);case 22:return u_(t,e,n)}throw Error(I(156,e.tag))};function R_(t,e){return tg(t,e)}function OE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(t,e,n,r){return new OE(t,e,n,r)}function Pd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DE(t){if(typeof t=="function")return Pd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qc)return 11;if(t===Yc)return 14}return 2}function jn(t,e){var n=t.alternate;return n===null?(n=vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Uo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ur:return hr(n.children,i,s,e);case qc:o=8,i|=8;break;case Iu:return t=vt(12,n,e,i|2),t.elementType=Iu,t.lanes=s,t;case ku:return t=vt(13,n,e,i),t.elementType=ku,t.lanes=s,t;case Tu:return t=vt(19,n,e,i),t.elementType=Tu,t.lanes=s,t;case Um:return ea(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bm:o=10;break e;case Fm:o=9;break e;case Qc:o=11;break e;case Yc:o=14;break e;case En:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function hr(t,e,n,r){return t=vt(7,t,r,e),t.lanes=n,t}function ea(t,e,n,r){return t=vt(22,t,r,e),t.elementType=Um,t.lanes=n,t.stateNode={isHidden:!1},t}function Ya(t,e,n){return t=vt(6,t,null,e),t.lanes=n,t}function Xa(t,e,n){return e=vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Aa(0),this.expirationTimes=Aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Aa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ad(t,e,n,r,i,s,o,l,a){return t=new LE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pd(s),t}function ME(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function P_(t){if(!t)return Hn;t=t._reactInternals;e:{if(Rr(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(nt(n))return Rg(t,n,e)}return e}function A_(t,e,n,r,i,s,o,l,a){return t=Ad(n,r,!0,t,i,s,o,l,a),t.context=P_(null),n=t.current,r=Ke(),i=Un(n),s=sn(r,i),s.callback=e??null,bn(n,s,i),t.current.lanes=i,Vs(t,i,r),rt(t,r),t}function ta(t,e,n,r){var i=e.current,s=Ke(),o=Un(i);return n=P_(n),e.context===null?e.context=n:e.pendingContext=n,e=sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=bn(i,e,o),t!==null&&(Ot(t,i,o,s),Oo(t,i,o)),o}function pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Od(t,e){Yf(t,e),(t=t.alternate)&&Yf(t,e)}function bE(){return null}var O_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dd(t){this._internalRoot=t}na.prototype.render=Dd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));ta(t,e,null,null)};na.prototype.unmount=Dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yr(function(){ta(null,t,null,null)}),e[an]=null}};function na(t){this._internalRoot=t}na.prototype.unstable_scheduleHydration=function(t){if(t){var e=ag();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Sn.length&&e!==0&&e<Sn[n].priority;n++);Sn.splice(n,0,t),n===0&&cg(t)}};function Ld(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ra(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xf(){}function FE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=pl(o);s.call(u)}}var o=A_(e,r,t,0,null,!1,!1,"",Xf);return t._reactRootContainer=o,t[an]=o.current,ys(t.nodeType===8?t.parentNode:t),yr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=pl(a);l.call(u)}}var a=Ad(t,0,!1,null,null,!1,!1,"",Xf);return t._reactRootContainer=a,t[an]=a.current,ys(t.nodeType===8?t.parentNode:t),yr(function(){ta(e,a,n,r)}),a}function ia(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=pl(o);l.call(a)}}ta(e,o,t,i)}else o=FE(n,e,t,i,r);return pl(o)}og=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qi(e.pendingLanes);n!==0&&(Zc(e,n|1),rt(e,we()),!(X&6)&&(gi=we()+500,Yn()))}break;case 13:yr(function(){var r=un(t,1);if(r!==null){var i=Ke();Ot(r,t,1,i)}}),Od(t,1)}};ed=function(t){if(t.tag===13){var e=un(t,134217728);if(e!==null){var n=Ke();Ot(e,t,134217728,n)}Od(t,134217728)}};lg=function(t){if(t.tag===13){var e=Un(t),n=un(t,e);if(n!==null){var r=Ke();Ot(n,t,e,r)}Od(t,e)}};ag=function(){return Z};ug=function(t,e){var n=Z;try{return Z=t,e()}finally{Z=n}};bu=function(t,e,n){switch(e){case"input":if(Ru(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ql(r);if(!i)throw Error(I(90));Vm(r),Ru(r,i)}}}break;case"textarea":zm(t,n);break;case"select":e=n.value,e!=null&&Xr(t,!!n.multiple,e,!1)}};Qm=Nd;Ym=yr;var UE={usingClientEntryPoint:!1,Events:[zs,zr,ql,Km,qm,Nd]},Vi={findFiberByHostInstance:rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jE={bundleType:Vi.bundleType,version:Vi.version,rendererPackageName:Vi.rendererPackageName,rendererConfig:Vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zm(t),t===null?null:t.stateNode},findFiberByHostInstance:Vi.findFiberByHostInstance||bE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{Wl=Eo.inject(jE),zt=Eo}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UE;ft.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ld(e))throw Error(I(200));return ME(t,e,null,n)};ft.createRoot=function(t,e){if(!Ld(t))throw Error(I(299));var n=!1,r="",i=O_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ad(t,1,!1,null,null,n,!1,r,i),t[an]=e.current,ys(t.nodeType===8?t.parentNode:t),new Dd(e)};ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Zm(e),t=t===null?null:t.stateNode,t};ft.flushSync=function(t){return yr(t)};ft.hydrate=function(t,e,n){if(!ra(e))throw Error(I(200));return ia(null,t,e,!0,n)};ft.hydrateRoot=function(t,e,n){if(!Ld(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=O_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=A_(e,null,t,1,n??null,i,!1,s,o),t[an]=e.current,ys(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new na(e)};ft.render=function(t,e,n){if(!ra(e))throw Error(I(200));return ia(null,t,e,!1,n)};ft.unmountComponentAtNode=function(t){if(!ra(t))throw Error(I(40));return t._reactRootContainer?(yr(function(){ia(null,null,t,!1,function(){t._reactRootContainer=null,t[an]=null})}),!0):!1};ft.unstable_batchedUpdates=Nd;ft.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ra(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return ia(t,e,n,!1,r)};ft.version="18.2.0-next-9e3b772b8-20220608";function D_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D_)}catch(t){console.error(t)}}D_(),Am.exports=ft;var VE=Am.exports,Jf=VE;Cu.createRoot=Jf.createRoot,Cu.hydrateRoot=Jf.hydrateRoot;const Pr=F.createContext({}),$E=t=>E.jsx(Pr.Provider,{value:t.theme,children:t.children}),zE={backgroundColor:"#292929",foregroundColor:"#fff",mainColor:"#6f61c0",hoverColor:"#796cc4",activeColor:"#6556bc"};/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ml(){return ml=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ml.apply(this,arguments)}var Pn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Pn||(Pn={}));const Zf="popstate";function BE(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:a=""}=Ws(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),mc("",{pathname:o,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let a=i.location.href,u=a.indexOf("#");l=u===-1?a:a.slice(0,u)}return l+"#"+(typeof s=="string"?s:L_(s))}function r(i,s){sa(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return HE(e,n,r,t)}function st(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function sa(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function WE(){return Math.random().toString(36).substr(2,8)}function ep(t,e){return{usr:t.state,key:t.key,idx:e}}function mc(t,e,n,r){return n===void 0&&(n=null),ml({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ws(e):e,{state:n,key:e&&e.key||r||WE()})}function L_(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ws(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function HE(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Pn.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(ml({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){l=Pn.Pop;let x=d(),p=x==null?null:x-u;u=x,a&&a({action:l,location:w.location,delta:p})}function h(x,p){l=Pn.Push;let f=mc(w.location,x,p);n&&n(f,x),u=d()+1;let g=ep(f,u),C=w.createHref(f);try{o.pushState(g,"",C)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(C)}s&&a&&a({action:l,location:w.location,delta:1})}function _(x,p){l=Pn.Replace;let f=mc(w.location,x,p);n&&n(f,x),u=d();let g=ep(f,u),C=w.createHref(f);o.replaceState(g,"",C),s&&a&&a({action:l,location:w.location,delta:0})}function v(x){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof x=="string"?x:L_(x);return st(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return l},get location(){return t(i,o)},listen(x){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Zf,c),a=x,()=>{i.removeEventListener(Zf,c),a=null}},createHref(x){return e(i,x)},createURL:v,encodeLocation(x){let p=v(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:_,go(x){return o.go(x)}};return w}var tp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(tp||(tp={}));function GE(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ws(e):e,i=F_(r.pathname||"/",n);if(i==null)return null;let s=M_(t);KE(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=nC(s[l],sC(i));return o}function M_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(st(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=ri([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&(st(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),M_(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:eC(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of b_(s.path))i(s,o,a)}),e}function b_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=b_(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function KE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:tC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qE=/^:\w+$/,QE=3,YE=2,XE=1,JE=10,ZE=-2,np=t=>t==="*";function eC(t,e){let n=t.split("/"),r=n.length;return n.some(np)&&(r+=ZE),e&&(r+=YE),n.filter(i=>!np(i)).reduce((i,s)=>i+(qE.test(s)?QE:s===""?XE:JE),r)}function tC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function nC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=rC({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!d)return null;Object.assign(r,d.params);let c=l.route;s.push({params:r,pathname:ri([i,d.pathname]),pathnameBase:lC(ri([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=ri([i,d.pathnameBase]))}return s}function rC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=iC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let h=l[c]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[d]=oC(l[c]||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function iC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),sa(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function sC(t){try{return decodeURI(t)}catch(e){return sa(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function oC(t,e){try{return decodeURIComponent(t)}catch(n){return sa(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function F_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const ri=t=>t.join("/").replace(/\/\/+/g,"/"),lC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function aC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const U_=["post","put","patch","delete"];new Set(U_);const uC=["get",...U_];new Set(uC);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gc(){return gc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gc.apply(this,arguments)}const cC=F.createContext(null),dC=F.createContext(null),j_=F.createContext(null),oa=F.createContext(null),la=F.createContext({outlet:null,matches:[],isDataRoute:!1}),V_=F.createContext(null);function Md(){return F.useContext(oa)!=null}function hC(){return Md()||st(!1),F.useContext(oa).location}function fC(t,e){return pC(t,e)}function pC(t,e,n){Md()||st(!1);let{navigator:r}=F.useContext(j_),{matches:i}=F.useContext(la),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=hC(),u;if(e){var d;let w=typeof e=="string"?Ws(e):e;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||st(!1),u=w}else u=a;let c=u.pathname||"/",h=l==="/"?c:c.slice(l.length)||"/",_=GE(t,{pathname:h}),v=yC(_&&_.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:ri([l,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:ri([l,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&v?F.createElement(oa.Provider,{value:{location:gc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Pn.Pop}},v):v}function mC(){let t=SC(),e=aC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:i},n):null,s)}const gC=F.createElement(mC,null);class _C extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?F.createElement(la.Provider,{value:this.props.routeContext},F.createElement(V_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vC(t){let{routeContext:e,match:n,children:r}=t,i=F.useContext(cC);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(la.Provider,{value:e},r)}function yC(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=s.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));l>=0||st(!1),s=s.slice(0,Math.min(s.length,l+1))}return s.reduceRight((l,a,u)=>{let d=a.route.id?o==null?void 0:o[a.route.id]:null,c=null;n&&(c=a.route.errorElement||gC);let h=e.concat(s.slice(0,u+1)),_=()=>{let v;return d?v=c:a.route.Component?v=F.createElement(a.route.Component,null):a.route.element?v=a.route.element:v=l,F.createElement(vC,{match:a,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:v})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?F.createElement(_C,{location:n.location,revalidation:n.revalidation,component:c,error:d,children:_(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):_()},null)}var _c=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(_c||{});function wC(t){let e=F.useContext(dC);return e||st(!1),e}function EC(t){let e=F.useContext(la);return e||st(!1),e}function CC(t){let e=EC(),n=e.matches[e.matches.length-1];return n.route.id||st(!1),n.route.id}function SC(){var t;let e=F.useContext(V_),n=wC(_c.UseRouteError),r=CC(_c.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function jo(t){st(!1)}function IC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Pn.Pop,navigator:s,static:o=!1}=t;Md()&&st(!1);let l=e.replace(/^\/*/,"/"),a=F.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Ws(r));let{pathname:u="/",search:d="",hash:c="",state:h=null,key:_="default"}=r,v=F.useMemo(()=>{let w=F_(u,l);return w==null?null:{location:{pathname:w,search:d,hash:c,state:h,key:_},navigationType:i}},[l,u,d,c,h,_,i]);return v==null?null:F.createElement(j_.Provider,{value:a},F.createElement(oa.Provider,{children:n,value:v}))}function kC(t){let{children:e,location:n}=t;return fC(vc(e),n)}new Promise(()=>{});function vc(t,e){e===void 0&&(e=[]);let n=[];return F.Children.forEach(t,(r,i)=>{if(!F.isValidElement(r))return;let s=[...e,i];if(r.type===F.Fragment){n.push.apply(n,vc(r.props.children,s));return}r.type!==jo&&st(!1),!r.props.index||!r.props.children||st(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=vc(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const TC="startTransition",rp=P0[TC];function NC(t){let{basename:e,children:n,future:r,window:i}=t,s=F.useRef();s.current==null&&(s.current=BE({window:i,v5Compat:!0}));let o=s.current,[l,a]=F.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=F.useCallback(c=>{u&&rp?rp(()=>a(c)):a(c)},[a,u]);return F.useLayoutEffect(()=>o.listen(d),[o,d]),F.createElement(IC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o})}var ip;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(ip||(ip={}));var sp;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(sp||(sp={}));const xC=new IntersectionObserver(t=>{t.forEach((e,n)=>{setTimeout(()=>{e.isIntersecting&&e.target.classList.add("active")},n*20)})});const RC="_block_1fhko_1",PC="_columns_1fhko_5",AC="_title_1fhko_25",OC="_description_1fhko_29",DC="_column_1fhko_5",LC="_advantages_1fhko_58",MC="_mobile_1fhko_63",bC="_image_1fhko_82",lt={block:RC,columns:PC,title:AC,description:OC,column:DC,advantages:LC,mobile:MC,image:bC},FC="_label_1biq0_1",UC={label:FC},bd=t=>E.jsx("span",{className:`${UC.label} ${t.className}`,children:t.children}),jC="_link_1k6up_1",VC={link:jC},Co=t=>E.jsx("a",{href:t.href,className:`${VC.link} ${t.className}`,children:t.children}),$C="_title1_54aqc_1",zC={title1:$C},BC=t=>{const e=F.useContext(Pr);return E.jsx("h1",{className:`${e} ${zC.title1} ${t.className}`,children:t.children})},WC="_title2_v2uiz_1",HC={title2:WC},$_=t=>{const e=F.useContext(Pr);return E.jsx("h2",{className:`${e} ${HC.title2} ${t.className}`,children:t.children})},GC="_title3_1q0q1_1",KC={title3:GC},aa=t=>{const e=F.useContext(Pr);return E.jsx("h3",{className:`${e} ${KC.title3} ${t.className}`,children:t.children})},qC="_body1_1bwxd_1",QC={body1:qC},Fd=t=>{const e=F.useContext(Pr);return E.jsx("p",{className:`${e} ${QC.body1} ${t.className}`,children:t.children})};const wr=({as:t,icon:e,className:n,href:r,children:i,appearance:s,...o})=>{const l=F.useContext(Pr);return t==="a"?E.jsxs("a",{className:`button button${s} ${n}`,href:r,children:[e||"",i]}):E.jsxs("button",{...o,className:`button button${s} ${l} ${n}`,children:[e||"",i]})},YC="_icon_3lhvu_1",XC={icon:YC},en=t=>E.jsx("i",{className:`${XC.icon} ${t.className?`${t.className} `:""}material-symbols-outlined`,children:t.name}),JC="_image_2mw7f_1",ZC={image:JC},Hs=t=>E.jsx("img",{src:`img/${t.src}`,alt:t.alt,className:`observe ${ZC.image} ${t.className}`}),eS="_input_34l96_1",tS="_wrapper_34l96_10",nS="_label_34l96_32",Ja={input:eS,wrapper:tS,label:nS},Za=({className:t,icon:e,placeholder:n,name:r,register:i,required:s=!1,...o})=>E.jsxs("div",{className:`${t} ${Ja.wrapper}`,children:[e||"",E.jsx("input",{className:Ja.input,...o,placeholder:" ",...i?i(r,{required:s}):""}),E.jsx("span",{className:Ja.label,children:n})]}),rS="_markedList_1sfrv_1",iS={markedList:rS},sS=t=>E.jsx("ul",{className:iS.markedList,children:t.children}),oS="_card_18v8a_1",lS="_card_small_18v8a_10",aS="_card_normal_18v8a_15",uS="_card_big_18v8a_19",op={card:oS,card_small:lS,card_normal:aS,card_big:uS},z_=t=>{const e=t.size?t.size:"normal";return E.jsx("div",{className:`${op.card} ${op[`card_${e}`]}`,children:t.children})},cS="_header_1380y_1",dS="_icon_1380y_8",eu={header:cS,icon:dS},$i=t=>E.jsxs("div",{className:t.className+" "+eu.card,"data-da":t.dataDa,children:[E.jsxs("div",{className:eu.header,children:[E.jsx(en,{className:`observe ${eu.icon}`,name:t.icon}),E.jsx(aa,{className:"observe",children:t.title})]}),E.jsx(Fd,{className:"observe",children:t.description})]}),hS=()=>{const t=E.jsxs(E.Fragment,{children:[E.jsx($i,{className:lt.mobile,icon:"cycle",title:"Оптимизация",description:"Картинки сжимаются, шрифты уменьшаются - без потери качества. Это обеспечивает быструю загрузку сайтов на медленных устройствах"}),E.jsx($i,{className:lt.mobile,icon:"frame_source",title:"Исходники",description:"Исходники - SCSS и Nunjucks (или любые препроцессоры на ваш выбор). Дам их бесплатно, а если надо - объясню зачем они и куда их деть"})]});return E.jsx("div",{className:lt.block,children:E.jsxs("div",{className:"container",children:[E.jsxs("div",{className:`${lt.columns}`,children:[E.jsxs("div",{className:`observe ${lt.column}`,children:[E.jsx(bd,{className:`observe ${lt.label}`,children:"привет"}),E.jsx(BC,{className:`observe ${lt.title}`,children:"я fb24m"}),E.jsx(Fd,{className:`observe ${lt.description}`,children:"Более 3-ех лет опыта фронтенд-разработки, за это время разработал десятки сайтов, и сотни компонентов, многие из которых работают и приносят доход"}),E.jsx(wr,{className:`observe ${lt.description}`,as:"a",href:"#",icon:E.jsx(en,{name:"laptop"}),appearance:"Primary",children:"В портфолио"})]}),E.jsx("div",{className:lt.column,children:E.jsx(Hs,{src:"home/welcome-image.png",alt:"",className:`observe ${lt.image}`})}),E.jsx("div",{className:lt.column,id:"cards",children:t})]}),E.jsxs("div",{className:lt.advantages,children:[t,E.jsx($i,{icon:"mitre",title:"Библиотеки",description:"Работаю с React, а также с его экосистемой - React Query, Redux, React Router и тп., а также с другими JavaScript библиотеками - Swiper, IMask и другие"}),E.jsx($i,{icon:"data_object",title:"JavaScript",description:"Мелкий функционал пишу сам - не подключаю огромную библиотеку ради маленького блока, чтобы сэкономить 10 минут жизни"}),E.jsx($i,{icon:"aod",title:"Об устройствах",description:"Сайты одинаково хорошо выглядят на всех размерах экранов - от 1920 до 360. А если адаптива в макете нет - сделаю его сам или по вашим пожеланиям"})]})]})})},fS="_wrapper_ureud_1",pS="_title_ureud_5",mS="_container_ureud_9",gS="_cards_ureud_18",_S="_subblock_ureud_25",vS="_image_ureud_29",yS="_card_ureud_18",at={wrapper:fS,title:pS,container:mS,cards:gS,subblock:_S,image:vS,card:yS},wS="_title_jd28y_1",ES={title:wS},So=t=>E.jsxs("div",{className:`${t.className}`,children:[E.jsx(aa,{className:`observe ${ES.title}`,children:t.title}),E.jsx(Fd,{className:"observe",children:t.description})]}),CS=()=>E.jsx("div",{className:at.wrapper,children:E.jsxs("div",{className:`${at.container} container`,children:[E.jsxs("div",{className:at.subblock,children:[E.jsx(bd,{className:`observe ${at.label}`,children:"обо мне"}),E.jsx($_,{className:`observe ${at.title}`,children:"Кто я такой?"}),E.jsxs("div",{className:at.cards,children:[E.jsx(So,{className:at.card,title:"3 года",description:"в сфере Frontend-разработки"}),E.jsx(So,{className:at.card,title:"Более 20",description:"заказчиков за 2 месяца"}),E.jsx(So,{className:at.card,title:"Более 10",description:"проектов за 2 месяца"}),E.jsx(So,{className:at.card,title:"Более 50",description:"страниц за 2 месяца"})]}),E.jsxs("div",{className:`buttons ${at.buttons}`,children:[E.jsx(wr,{className:"observe",icon:E.jsx(en,{name:"phone_enabled"}),as:"a",appearance:"Primary",children:"Связаться"}),E.jsx(wr,{className:"observe",icon:E.jsx(en,{name:"laptop"}),as:"a",appearance:"Secondary",children:"В портфолио"})]})]}),E.jsx("div",{className:at.subblock,children:E.jsx(Hs,{className:at.image,src:"home/about-image.png",alt:""})})]})}),SS="_form_1kr7f_1",IS="_container_1kr7f_7",vn={form:SS,container:IS};var Gs=t=>t.type==="checkbox",Qr=t=>t instanceof Date,Ge=t=>t==null;const B_=t=>typeof t=="object";var Te=t=>!Ge(t)&&!Array.isArray(t)&&B_(t)&&!Qr(t),kS=t=>Te(t)&&t.target?Gs(t.target)?t.target.checked:t.target.value:t,TS=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,NS=(t,e)=>t.has(TS(e)),xS=t=>{const e=t.constructor&&t.constructor.prototype;return Te(e)&&e.hasOwnProperty("isPrototypeOf")},Ud=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function qt(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Ud&&(t instanceof Blob||t instanceof FileList))&&(n||Te(t)))if(e=n?[]:{},!n&&!xS(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=qt(t[r]));else return t;return e}var Ks=t=>Array.isArray(t)?t.filter(Boolean):[],Ee=t=>t===void 0,L=(t,e,n)=>{if(!e||!Te(t))return n;const r=Ks(e.split(/[,[\].]+?/)).reduce((i,s)=>Ge(i)?i:i[s],t);return Ee(r)||r===t?Ee(t[e])?n:t[e]:r},or=t=>typeof t=="boolean";const lp={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Nt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Kt={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};jt.createContext(null);var RS=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==Nt.all&&(e._proxyFormState[o]=!r||Nt.all),n&&(n[o]=!0),t[o]}});return i},mt=t=>Te(t)&&!Object.keys(t).length,PS=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return mt(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||Nt.all))},tu=t=>Array.isArray(t)?t:[t];function AS(t){const e=jt.useRef(t);e.current=t,jt.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var $t=t=>typeof t=="string",OS=(t,e,n,r,i)=>$t(t)?(r&&e.watch.add(t),L(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),L(n,s))):(r&&(e.watchAll=!0),n),jd=t=>/^\w*$/.test(t),W_=t=>Ks(t.replace(/["|']|\]/g,"").split(/\.|\[/));function ue(t,e,n){let r=-1;const i=jd(e)?[e]:W_(e),s=i.length,o=s-1;for(;++r<s;){const l=i[r];let a=n;if(r!==o){const u=t[l];a=Te(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[l]=a,t=t[l]}return t}var DS=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{};const yc=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=L(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else Te(o)&&yc(o,e)}}};var ap=t=>({isOnSubmit:!t||t===Nt.onSubmit,isOnBlur:t===Nt.onBlur,isOnChange:t===Nt.onChange,isOnAll:t===Nt.all,isOnTouch:t===Nt.onTouched}),up=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),LS=(t,e,n)=>{const r=Ks(L(t,n));return ue(r,"root",e[n]),ue(t,n,r),t},Vd=t=>t.type==="file",An=t=>typeof t=="function",gl=t=>{if(!Ud)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},Vo=t=>$t(t),$d=t=>t.type==="radio",_l=t=>t instanceof RegExp;const cp={value:!1,isValid:!1},dp={value:!0,isValid:!0};var H_=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Ee(t[0].attributes.value)?Ee(t[0].value)||t[0].value===""?dp:{value:t[0].value,isValid:!0}:dp:cp}return cp};const hp={isValid:!1,value:null};var G_=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,hp):hp;function fp(t,e,n="validate"){if(Vo(t)||Array.isArray(t)&&t.every(Vo)||or(t)&&!t)return{type:n,message:Vo(t)?t:"",ref:e}}var Mr=t=>Te(t)&&!_l(t)?t:{value:t,message:""},pp=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:l,maxLength:a,minLength:u,min:d,max:c,pattern:h,validate:_,name:v,valueAsNumber:w,mount:x,disabled:p}=t._f,f=L(e,v);if(!x||p)return{};const g=o?o[0]:s,C=Q=>{r&&g.reportValidity&&(g.setCustomValidity(or(Q)?"":Q||""),g.reportValidity())},k={},A=$d(s),O=Gs(s),M=A||O,q=(w||Vd(s))&&Ee(s.value)&&Ee(f)||gl(s)&&s.value===""||f===""||Array.isArray(f)&&!f.length,$=DS.bind(null,v,n,k),_e=(Q,W,le,Fe=Kt.maxLength,Ue=Kt.minLength)=>{const Ye=Q?W:le;k[v]={type:Q?Fe:Ue,message:Ye,ref:s,...$(Q?Fe:Ue,Ye)}};if(i?!Array.isArray(f)||!f.length:l&&(!M&&(q||Ge(f))||or(f)&&!f||O&&!H_(o).isValid||A&&!G_(o).isValid)){const{value:Q,message:W}=Vo(l)?{value:!!l,message:l}:Mr(l);if(Q&&(k[v]={type:Kt.required,message:W,ref:g,...$(Kt.required,W)},!n))return C(W),k}if(!q&&(!Ge(d)||!Ge(c))){let Q,W;const le=Mr(c),Fe=Mr(d);if(!Ge(f)&&!isNaN(f)){const Ue=s.valueAsNumber||f&&+f;Ge(le.value)||(Q=Ue>le.value),Ge(Fe.value)||(W=Ue<Fe.value)}else{const Ue=s.valueAsDate||new Date(f),Ye=z=>new Date(new Date().toDateString()+" "+z),R=s.type=="time",V=s.type=="week";$t(le.value)&&f&&(Q=R?Ye(f)>Ye(le.value):V?f>le.value:Ue>new Date(le.value)),$t(Fe.value)&&f&&(W=R?Ye(f)<Ye(Fe.value):V?f<Fe.value:Ue<new Date(Fe.value))}if((Q||W)&&(_e(!!Q,le.message,Fe.message,Kt.max,Kt.min),!n))return C(k[v].message),k}if((a||u)&&!q&&($t(f)||i&&Array.isArray(f))){const Q=Mr(a),W=Mr(u),le=!Ge(Q.value)&&f.length>+Q.value,Fe=!Ge(W.value)&&f.length<+W.value;if((le||Fe)&&(_e(le,Q.message,W.message),!n))return C(k[v].message),k}if(h&&!q&&$t(f)){const{value:Q,message:W}=Mr(h);if(_l(Q)&&!f.match(Q)&&(k[v]={type:Kt.pattern,message:W,ref:s,...$(Kt.pattern,W)},!n))return C(W),k}if(_){if(An(_)){const Q=await _(f,e),W=fp(Q,g);if(W&&(k[v]={...W,...$(Kt.validate,W.message)},!n))return C(W.message),k}else if(Te(_)){let Q={};for(const W in _){if(!mt(Q)&&!n)break;const le=fp(await _[W](f,e),g,W);le&&(Q={...le,...$(W,le.message)},C(le.message),n&&(k[v]=Q))}if(!mt(Q)&&(k[v]={ref:g,...Q},!n))return k}}return C(!0),k};function MS(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Ee(t)?r++:t[e[r++]];return t}function bS(t){for(const e in t)if(t.hasOwnProperty(e)&&!Ee(t[e]))return!1;return!0}function Oe(t,e){const n=Array.isArray(e)?e:jd(e)?[e]:W_(e),r=n.length===1?t:MS(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(Te(r)&&mt(r)||Array.isArray(r)&&bS(r))&&Oe(t,n.slice(0,-1)),t}function nu(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var vl=t=>Ge(t)||!B_(t);function lr(t,e){if(vl(t)||vl(e))return t===e;if(Qr(t)&&Qr(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(Qr(s)&&Qr(o)||Te(s)&&Te(o)||Array.isArray(s)&&Array.isArray(o)?!lr(s,o):s!==o)return!1}}return!0}var K_=t=>t.type==="select-multiple",FS=t=>$d(t)||Gs(t),ru=t=>gl(t)&&t.isConnected,q_=t=>{for(const e in t)if(An(t[e]))return!0;return!1};function yl(t,e={}){const n=Array.isArray(t);if(Te(t)||n)for(const r in t)Array.isArray(t[r])||Te(t[r])&&!q_(t[r])?(e[r]=Array.isArray(t[r])?[]:{},yl(t[r],e[r])):Ge(t[r])||(e[r]=!0);return e}function Q_(t,e,n){const r=Array.isArray(t);if(Te(t)||r)for(const i in t)Array.isArray(t[i])||Te(t[i])&&!q_(t[i])?Ee(e)||vl(n[i])?n[i]=Array.isArray(t[i])?yl(t[i],[]):{...yl(t[i])}:Q_(t[i],Ge(e)?{}:e[i],n[i]):n[i]=!lr(t[i],e[i]);return n}var iu=(t,e)=>Q_(t,e,yl(e)),Y_=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Ee(t)?t:e?t===""?NaN:t&&+t:n&&$t(t)?new Date(t):r?r(t):t;function su(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return Vd(e)?e.files:$d(e)?G_(t.refs).value:K_(e)?[...e.selectedOptions].map(({value:n})=>n):Gs(e)?H_(t.refs).value:Y_(Ee(e.value)?t.ref.value:e.value,t)}var US=(t,e,n,r)=>{const i={};for(const s of t){const o=L(e,s);o&&ue(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},zi=t=>Ee(t)?t:_l(t)?t.source:Te(t)?_l(t.value)?t.value.source:t.value:t,jS=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function mp(t,e,n){const r=L(t,n);if(r||jd(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=L(e,s),l=L(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(l&&l.type)return{name:s,error:l};i.pop()}return{name:n}}var VS=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,$S=(t,e)=>!Ks(L(t,e)).length&&Oe(t,e);const zS={mode:Nt.onSubmit,reValidateMode:Nt.onChange,shouldFocusError:!0};function BS(t={},e){let n={...zS,...t},r={submitCount:0,isDirty:!1,isLoading:An(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=Te(n.defaultValues)||Te(n.values)?qt(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:qt(s),l={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,d=0;const c={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},h={values:nu(),array:nu(),state:nu()},_=t.resetOptions&&t.resetOptions.keepDirtyValues,v=ap(n.mode),w=ap(n.reValidateMode),x=n.criteriaMode===Nt.all,p=m=>y=>{clearTimeout(d),d=setTimeout(m,y)},f=async m=>{if(c.isValid||m){const y=n.resolver?mt((await q()).errors):await _e(i,!0);y!==r.isValid&&h.state.next({isValid:y})}},g=m=>c.isValidating&&h.state.next({isValidating:m}),C=(m,y=[],S,b,P=!0,N=!0)=>{if(b&&S){if(l.action=!0,N&&Array.isArray(L(i,m))){const U=S(L(i,m),b.argA,b.argB);P&&ue(i,m,U)}if(N&&Array.isArray(L(r.errors,m))){const U=S(L(r.errors,m),b.argA,b.argB);P&&ue(r.errors,m,U),$S(r.errors,m)}if(c.touchedFields&&N&&Array.isArray(L(r.touchedFields,m))){const U=S(L(r.touchedFields,m),b.argA,b.argB);P&&ue(r.touchedFields,m,U)}c.dirtyFields&&(r.dirtyFields=iu(s,o)),h.state.next({name:m,isDirty:W(m,y),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else ue(o,m,y)},k=(m,y)=>{ue(r.errors,m,y),h.state.next({errors:r.errors})},A=(m,y,S,b)=>{const P=L(i,m);if(P){const N=L(o,m,Ee(S)?L(s,m):S);Ee(N)||b&&b.defaultChecked||y?ue(o,m,y?N:su(P._f)):Ue(m,N),l.mount&&f()}},O=(m,y,S,b,P)=>{let N=!1,U=!1;const pe={name:m};if(!S||b){c.isDirty&&(U=r.isDirty,r.isDirty=pe.isDirty=W(),N=U!==pe.isDirty);const ye=lr(L(s,m),y);U=L(r.dirtyFields,m),ye?Oe(r.dirtyFields,m):ue(r.dirtyFields,m,!0),pe.dirtyFields=r.dirtyFields,N=N||c.dirtyFields&&U!==!ye}if(S){const ye=L(r.touchedFields,m);ye||(ue(r.touchedFields,m,S),pe.touchedFields=r.touchedFields,N=N||c.touchedFields&&ye!==S)}return N&&P&&h.state.next(pe),N?pe:{}},M=(m,y,S,b)=>{const P=L(r.errors,m),N=c.isValid&&or(y)&&r.isValid!==y;if(t.delayError&&S?(u=p(()=>k(m,S)),u(t.delayError)):(clearTimeout(d),u=null,S?ue(r.errors,m,S):Oe(r.errors,m)),(S?!lr(P,S):P)||!mt(b)||N){const U={...b,...N&&or(y)?{isValid:y}:{},errors:r.errors,name:m};r={...r,...U},h.state.next(U)}g(!1)},q=async m=>n.resolver(o,n.context,US(m||a.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),$=async m=>{const{errors:y}=await q(m);if(m)for(const S of m){const b=L(y,S);b?ue(r.errors,S,b):Oe(r.errors,S)}else r.errors=y;return y},_e=async(m,y,S={valid:!0})=>{for(const b in m){const P=m[b];if(P){const{_f:N,...U}=P;if(N){const pe=a.array.has(N.name),ye=await pp(P,o,x,n.shouldUseNativeValidation&&!y,pe);if(ye[N.name]&&(S.valid=!1,y))break;!y&&(L(ye,N.name)?pe?LS(r.errors,ye,N.name):ue(r.errors,N.name,ye[N.name]):Oe(r.errors,N.name))}U&&await _e(U,y,S)}}return S.valid},Q=()=>{for(const m of a.unMount){const y=L(i,m);y&&(y._f.refs?y._f.refs.every(S=>!ru(S)):!ru(y._f.ref))&&Ct(m)}a.unMount=new Set},W=(m,y)=>(m&&y&&ue(o,m,y),!lr(ae(),s)),le=(m,y,S)=>OS(m,a,{...l.mount?o:Ee(y)?s:$t(m)?{[m]:y}:y},S,y),Fe=m=>Ks(L(l.mount?o:s,m,t.shouldUnregister?L(s,m,[]):[])),Ue=(m,y,S={})=>{const b=L(i,m);let P=y;if(b){const N=b._f;N&&(!N.disabled&&ue(o,m,Y_(y,N)),P=gl(N.ref)&&Ge(y)?"":y,K_(N.ref)?[...N.ref.options].forEach(U=>U.selected=P.includes(U.value)):N.refs?Gs(N.ref)?N.refs.length>1?N.refs.forEach(U=>(!U.defaultChecked||!U.disabled)&&(U.checked=Array.isArray(P)?!!P.find(pe=>pe===U.value):P===U.value)):N.refs[0]&&(N.refs[0].checked=!!P):N.refs.forEach(U=>U.checked=U.value===P):Vd(N.ref)?N.ref.value="":(N.ref.value=P,N.ref.type||h.values.next({name:m,values:{...o}})))}(S.shouldDirty||S.shouldTouch)&&O(m,P,S.shouldTouch,S.shouldDirty,!0),S.shouldValidate&&z(m)},Ye=(m,y,S)=>{for(const b in y){const P=y[b],N=`${m}.${b}`,U=L(i,N);(a.array.has(m)||!vl(P)||U&&!U._f)&&!Qr(P)?Ye(N,P,S):Ue(N,P,S)}},R=(m,y,S={})=>{const b=L(i,m),P=a.array.has(m),N=qt(y);ue(o,m,N),P?(h.array.next({name:m,values:{...o}}),(c.isDirty||c.dirtyFields)&&S.shouldDirty&&h.state.next({name:m,dirtyFields:iu(s,o),isDirty:W(m,N)})):b&&!b._f&&!Ge(N)?Ye(m,N,S):Ue(m,N,S),up(m,a)&&h.state.next({...r}),h.values.next({name:m,values:{...o}}),!l.mount&&e()},V=async m=>{const y=m.target;let S=y.name,b=!0;const P=L(i,S),N=()=>y.type?su(P._f):kS(m);if(P){let U,pe;const ye=N(),Dr=m.type===lp.BLUR||m.type===lp.FOCUS_OUT,c0=!jS(P._f)&&!n.resolver&&!L(r.errors,S)&&!P._f.deps||VS(Dr,L(r.touchedFields,S),r.isSubmitted,w,v),Ia=up(S,a,Dr);ue(o,S,ye),Dr?(P._f.onBlur&&P._f.onBlur(m),u&&u(0)):P._f.onChange&&P._f.onChange(m);const ka=O(S,ye,Dr,!1),d0=!mt(ka)||Ia;if(!Dr&&h.values.next({name:S,type:m.type,values:{...o}}),c0)return c.isValid&&f(),d0&&h.state.next({name:S,...Ia?{}:ka});if(!Dr&&Ia&&h.state.next({...r}),g(!0),n.resolver){const{errors:$h}=await q([S]),h0=mp(r.errors,i,S),zh=mp($h,i,h0.name||S);U=zh.error,S=zh.name,pe=mt($h)}else U=(await pp(P,o,x,n.shouldUseNativeValidation))[S],b=Number.isNaN(ye)||ye===L(o,S,ye),b&&(U?pe=!1:c.isValid&&(pe=await _e(i,!0)));b&&(P._f.deps&&z(P._f.deps),M(S,pe,U,ka))}},z=async(m,y={})=>{let S,b;const P=tu(m);if(g(!0),n.resolver){const N=await $(Ee(m)?m:P);S=mt(N),b=m?!P.some(U=>L(N,U)):S}else m?(b=(await Promise.all(P.map(async N=>{const U=L(i,N);return await _e(U&&U._f?{[N]:U}:U)}))).every(Boolean),!(!b&&!r.isValid)&&f()):b=S=await _e(i);return h.state.next({...!$t(m)||c.isValid&&S!==r.isValid?{}:{name:m},...n.resolver||!m?{isValid:S}:{},errors:r.errors,isValidating:!1}),y.shouldFocus&&!b&&yc(i,N=>N&&L(r.errors,N),m?P:a.mount),b},ae=m=>{const y={...s,...l.mount?o:{}};return Ee(m)?y:$t(m)?L(y,m):m.map(S=>L(y,S))},ve=(m,y)=>({invalid:!!L((y||r).errors,m),isDirty:!!L((y||r).dirtyFields,m),isTouched:!!L((y||r).touchedFields,m),error:L((y||r).errors,m)}),Or=m=>{m&&tu(m).forEach(y=>Oe(r.errors,y)),h.state.next({errors:m?r.errors:{}})},bt=(m,y,S)=>{const b=(L(i,m,{_f:{}})._f||{}).ref;ue(r.errors,m,{...y,ref:b}),h.state.next({name:m,errors:r.errors,isValid:!1}),S&&S.shouldFocus&&b&&b.focus&&b.focus()},Oi=(m,y)=>An(m)?h.values.subscribe({next:S=>m(le(void 0,y),S)}):le(m,y,!0),Ct=(m,y={})=>{for(const S of m?tu(m):a.mount)a.mount.delete(S),a.array.delete(S),y.keepValue||(Oe(i,S),Oe(o,S)),!y.keepError&&Oe(r.errors,S),!y.keepDirty&&Oe(r.dirtyFields,S),!y.keepTouched&&Oe(r.touchedFields,S),!n.shouldUnregister&&!y.keepDefaultValue&&Oe(s,S);h.values.next({values:{...o}}),h.state.next({...r,...y.keepDirty?{isDirty:W()}:{}}),!y.keepIsValid&&f()},Jn=({disabled:m,name:y,field:S,fields:b})=>{if(or(m)){const P=m?void 0:L(o,y,su(S?S._f:L(b,y)._f));ue(o,y,P),O(y,P,!1,!1,!0)}},Sa=(m,y={})=>{let S=L(i,m);const b=or(y.disabled);return ue(i,m,{...S||{},_f:{...S&&S._f?S._f:{ref:{name:m}},name:m,mount:!0,...y}}),a.mount.add(m),S?Jn({field:S,disabled:y.disabled,name:m}):A(m,!0,y.value),{...b?{disabled:y.disabled}:{},...n.progressive?{required:!!y.required,min:zi(y.min),max:zi(y.max),minLength:zi(y.minLength),maxLength:zi(y.maxLength),pattern:zi(y.pattern)}:{},name:m,onChange:V,onBlur:V,ref:P=>{if(P){Sa(m,y),S=L(i,m);const N=Ee(P.value)&&P.querySelectorAll&&P.querySelectorAll("input,select,textarea")[0]||P,U=FS(N),pe=S._f.refs||[];if(U?pe.find(ye=>ye===N):N===S._f.ref)return;ue(i,m,{_f:{...S._f,...U?{refs:[...pe.filter(ru),N,...Array.isArray(L(s,m))?[{}]:[]],ref:{type:N.type,name:m}}:{ref:N}}}),A(m,!1,void 0,N)}else S=L(i,m,{}),S._f&&(S._f.mount=!1),(n.shouldUnregister||y.shouldUnregister)&&!(NS(a.array,m)&&l.action)&&a.unMount.add(m)}}},Fh=()=>n.shouldFocusError&&yc(i,m=>m&&L(r.errors,m),a.mount),Uh=(m,y)=>async S=>{S&&(S.preventDefault&&S.preventDefault(),S.persist&&S.persist());let b=qt(o);if(h.state.next({isSubmitting:!0}),n.resolver){const{errors:P,values:N}=await q();r.errors=P,b=N}else await _e(i);Oe(r.errors,"root"),mt(r.errors)?(h.state.next({errors:{}}),await m(b,S)):(y&&await y({...r.errors},S),Fh(),setTimeout(Fh)),h.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:mt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},u0=(m,y={})=>{L(i,m)&&(Ee(y.defaultValue)?R(m,L(s,m)):(R(m,y.defaultValue),ue(s,m,y.defaultValue)),y.keepTouched||Oe(r.touchedFields,m),y.keepDirty||(Oe(r.dirtyFields,m),r.isDirty=y.defaultValue?W(m,L(s,m)):W()),y.keepError||(Oe(r.errors,m),c.isValid&&f()),h.state.next({...r}))},jh=(m,y={})=>{const S=m?qt(m):s,b=qt(S),P=m&&!mt(m)?b:s;if(y.keepDefaultValues||(s=S),!y.keepValues){if(y.keepDirtyValues||_)for(const N of a.mount)L(r.dirtyFields,N)?ue(P,N,L(o,N)):R(N,L(P,N));else{if(Ud&&Ee(m))for(const N of a.mount){const U=L(i,N);if(U&&U._f){const pe=Array.isArray(U._f.refs)?U._f.refs[0]:U._f.ref;if(gl(pe)){const ye=pe.closest("form");if(ye){ye.reset();break}}}}i={}}o=t.shouldUnregister?y.keepDefaultValues?qt(s):{}:qt(P),h.array.next({values:{...P}}),h.values.next({values:{...P}})}a={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&e(),l.mount=!c.isValid||!!y.keepIsValid,l.watch=!!t.shouldUnregister,h.state.next({submitCount:y.keepSubmitCount?r.submitCount:0,isDirty:y.keepDirty?r.isDirty:!!(y.keepDefaultValues&&!lr(m,s)),isSubmitted:y.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:y.keepDirtyValues?r.dirtyFields:y.keepDefaultValues&&m?iu(s,m):{},touchedFields:y.keepTouched?r.touchedFields:{},errors:y.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Vh=(m,y)=>jh(An(m)?m(o):m,y);return{control:{register:Sa,unregister:Ct,getFieldState:ve,handleSubmit:Uh,setError:bt,_executeSchema:q,_getWatch:le,_getDirty:W,_updateValid:f,_removeUnmounted:Q,_updateFieldArray:C,_updateDisabledField:Jn,_getFieldArray:Fe,_reset:jh,_resetDefaultValues:()=>An(n.defaultValues)&&n.defaultValues().then(m=>{Vh(m,n.resetOptions),h.state.next({isLoading:!1})}),_updateFormState:m=>{r={...r,...m}},_subjects:h,_proxyFormState:c,get _fields(){return i},get _formValues(){return o},get _state(){return l},set _state(m){l=m},get _defaultValues(){return s},get _names(){return a},set _names(m){a=m},get _formState(){return r},set _formState(m){r=m},get _options(){return n},set _options(m){n={...n,...m}}},trigger:z,register:Sa,handleSubmit:Uh,watch:Oi,setValue:R,getValues:ae,reset:Vh,resetField:u0,clearErrors:Or,unregister:Ct,setError:bt,setFocus:(m,y={})=>{const S=L(i,m),b=S&&S._f;if(b){const P=b.refs?b.refs[0]:b.ref;P.focus&&(P.focus(),y.shouldSelect&&P.select())}},getFieldState:ve}}function WS(t={}){const e=jt.useRef(),n=jt.useRef(),[r,i]=jt.useState({isDirty:!1,isValidating:!1,isLoading:An(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:An(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...BS(t,()=>i(o=>({...o}))),formState:r});const s=e.current.control;return s._options=t,AS({subject:s._subjects.state,next:o=>{PS(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),jt.useEffect(()=>{t.values&&!lr(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values):s._resetDefaultValues()},[t.values,s]),jt.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),e.current.formState=RS(r,s),e.current}const HS=()=>{const{register:t,handleSubmit:e}=WS(),n=r=>{console.log(r);const i=`Заявка от ${r.name}. Контакт: ${r.contact}. Комментарий: ${r.message}`;fetch(`https://api.telegram.org/bot6338485097:AAGW9HW5F5tv_ZNq-0wTFjK-ERdDfcUQghM/sendMessage?chat_id=872777347&text=${i}`)};return E.jsxs("div",{className:`container ${vn.container}`,id:"contact",children:[E.jsxs(sS,{children:[E.jsx("li",{className:`observe ${vn.item}`,children:"Уже нашли подходящую услугу и хотите заказать? Или еще не нашли, и хотите получить помощь в выборе?"}),E.jsx("li",{className:`observe ${vn.item}`,children:"Оставьте контакты, свяжусь, обсудим ваш проект и подберем тариф - это бесплатно и не отнимет много времени"}),E.jsx("li",{className:`observe ${vn.item}`,children:"Если не ответил в течении 1-2 дней, можете оставить заявку еще раз или написать на почту напрямую - hello@fb24m.ru"}),E.jsx("li",{className:`observe ${vn.item}`,children:"При спаме заявками могу не ответить вовсе. Цените мое и ваше время"}),E.jsx("li",{className:`observe ${vn.item}`,children:"Работаю только по предоплате 50%"})]}),E.jsx("form",{className:vn.form,onSubmit:e(n),children:E.jsxs(z_,{size:"big",children:[E.jsx(aa,{children:"Оставить заявку"}),E.jsx(Za,{required:!0,register:t,className:"observe",name:"name",icon:E.jsx(en,{name:"account_circle"}),placeholder:"Ваше имя",autoComplete:"name"}),E.jsx(Za,{required:!0,register:t,name:"contact",className:"observe",icon:E.jsx(en,{name:"alternate_email"}),placeholder:"Email или Telegram",autoComplete:"email"}),E.jsx(Za,{required:!0,register:t,name:"message",className:"observe",icon:E.jsx(en,{name:"comment"}),placeholder:"Комментарий"}),E.jsx(wr,{type:"submit",icon:E.jsx(en,{name:"phone_enabled"}),appearance:"Primary",children:"Отправить"})]})}),E.jsx("div",{className:vn.block,children:E.jsx(Hs,{src:"home/contact.png",alt:""})})]})},GS="_cards_1g9ls_1",KS="_title_1g9ls_17",qS="_wrapper_1g9ls_21",ou={cards:GS,title:KS,wrapper:qS},QS="_image_hisan_1",YS={image:QS},lu=t=>E.jsxs(z_,{children:[E.jsx(Hs,{className:YS.image,src:t.image,alt:""}),E.jsx(aa,{children:t.title})]}),XS=()=>E.jsxs("div",{className:`container ${ou.wrapper}`,children:[E.jsx(bd,{children:"портфолио"}),E.jsx($_,{className:ou.title,children:"Последние работы"}),E.jsxs("div",{className:ou.cards,children:[E.jsx(lu,{image:"home/case-1.png",title:"Верстка лендинга тренинга школы"}),E.jsx(lu,{image:"home/case-2.png",title:"Верстка страницы сайта инвестиций"}),E.jsx(lu,{image:"home/case-3.png",title:"Лендинг китайских заводы под ключ"})]})]}),JS=()=>{const t=F.useContext(Pr),e=Object.keys(t),n=Object.values(t);return e.forEach((r,i)=>{document.documentElement.style.setProperty(`--${r}`,n[i])}),E.jsxs("div",{className:`bg-${t}`,children:[E.jsx(hS,{}),E.jsx(CS,{}),E.jsx(XS,{}),E.jsx(HS,{})]})},ZS="_wrapper_1pyqa_1",eI="_container_1pyqa_5",tI="_list_1pyqa_18",yn={wrapper:ZS,container:eI,list:tI},nI=t=>{document.querySelector(t)&&document.querySelector(t).scrollIntoView({behavior:"smooth"})},rI=()=>E.jsx("header",{className:yn.wrapper,children:E.jsxs("div",{className:`${yn.container} container`,children:[E.jsx(Hs,{src:"logo.png",alt:"",className:yn.logo}),E.jsxs("ul",{className:yn.list,children:[E.jsx("li",{className:`observe ${yn.item}`,children:E.jsx(Co,{href:"/",children:"Главная"})}),E.jsx("li",{className:`observe ${yn.item}`,children:E.jsx(Co,{href:"/#/blog",children:"Блог"})}),E.jsx("li",{className:`observe ${yn.item}`,children:E.jsx(Co,{href:"/#/portfolio",children:"Портфолио"})}),E.jsx("li",{className:`observe ${yn.item}`,children:E.jsx(Co,{href:"/#/contact",children:"Связаться"})})]}),E.jsx(wr,{className:"observe",icon:E.jsx(en,{name:"phone_enabled"}),as:"button",appearance:"Primary",onClick:()=>nI("#contact"),children:"Связаться"})]})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw Ti(e)},Ti=function(t){return new Error("Firebase Database ("+X_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},zd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(h=64)),r.push(n[d],n[c],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(J_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new sI;const h=s<<2|l>>4;if(r.push(h),u!==64){const _=l<<4&240|u>>2;if(r.push(_),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Z_=function(t){const e=J_(t);return zd.encodeByteArray(e,!0)},wl=function(t){return Z_(t).replace(/\./g,"")},El=function(t){try{return zd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t){return ev(void 0,t)}function ev(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!lI(n)||(t[n]=ev(t[n],e[n]));return t}function lI(t){return t!=="__proto__"}/**
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
 */function aI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uI=()=>aI().__FIREBASE_DEFAULTS__,cI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&El(t[1]);return e&&JSON.parse(e)},Bd=()=>{try{return uI()||cI()||dI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tv=t=>{var e,n;return(n=(e=Bd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hI=t=>{const e=tv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nv=()=>{var t;return(t=Bd())===null||t===void 0?void 0:t.config},rv=t=>{var e;return(e=Bd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function fI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[wl(JSON.stringify(n)),wl(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function pI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mI(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sv(){return X_.NODE_ADMIN===!0}function gI(){try{return typeof indexedDB=="object"}catch{return!1}}function _I(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="FirebaseError";class Xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vI,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Xn(i,l,r)}}function yI(t,e){return t.replace(wI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t){return JSON.parse(t)}function Pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=xs(El(s[0])||""),n=xs(El(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},EI=function(t){const e=ov(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},CI=function(t){const e=ov(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _i(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function wc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Sl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(gp(s)&&gp(o)){if(!Sl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function II(t,e){const n=new kI(t,e);return n.subscribe.bind(n)}class kI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=au),i.error===void 0&&(i.error=au),i.complete===void 0&&(i.complete=au);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function au(){}function Hd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ca=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Mt(t){return t&&t._delegate?t._delegate:t}class Er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tr="[DEFAULT]";/**
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
 */class xI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ua;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PI(e))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tr){return this.instances.has(e)}getOptions(e=tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tr){return this.component?this.component.multipleInstances?e:tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RI(t){return t===tr?void 0:t}function PI(t){return t.instantiationMode==="EAGER"}/**
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
 */class AI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const OI={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},DI=ee.INFO,LI={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},MI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=LI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gd{constructor(e){this.name=e,this._logLevel=DI,this._logHandler=MI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const bI=(t,e)=>e.some(n=>t instanceof n);let _p,vp;function FI(){return _p||(_p=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UI(){return vp||(vp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lv=new WeakMap,Ec=new WeakMap,av=new WeakMap,uu=new WeakMap,Kd=new WeakMap;function jI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Vn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lv.set(n,t)}).catch(()=>{}),Kd.set(e,t),e}function VI(t){if(Ec.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ec.set(t,e)}let Cc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ec.get(t);if(e==="objectStoreNames")return t.objectStoreNames||av.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $I(t){Cc=t(Cc)}function zI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cu(this),e,...n);return av.set(r,e.sort?e.sort():[e]),Vn(r)}:UI().includes(t)?function(...e){return t.apply(cu(this),e),Vn(lv.get(this))}:function(...e){return Vn(t.apply(cu(this),e))}}function BI(t){return typeof t=="function"?zI(t):(t instanceof IDBTransaction&&VI(t),bI(t,FI())?new Proxy(t,Cc):t)}function Vn(t){if(t instanceof IDBRequest)return jI(t);if(uu.has(t))return uu.get(t);const e=BI(t);return e!==t&&(uu.set(t,e),Kd.set(e,t)),e}const cu=t=>Kd.get(t);function WI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Vn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Vn(o.result),a.oldVersion,a.newVersion,Vn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const HI=["get","getKey","getAll","getAllKeys","count"],GI=["put","add","delete","clear"],du=new Map;function yp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(du.get(e))return du.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=GI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HI.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return du.set(e,s),s}$I(t=>({...t,get:(e,n,r)=>yp(e,n)||t.get(e,n,r),has:(e,n)=>!!yp(e,n)||t.has(e,n)}));/**
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
 */class KI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sc="@firebase/app",wp="0.9.19";/**
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
 */const Cr=new Gd("@firebase/app"),QI="@firebase/app-compat",YI="@firebase/analytics-compat",XI="@firebase/analytics",JI="@firebase/app-check-compat",ZI="@firebase/app-check",e1="@firebase/auth",t1="@firebase/auth-compat",n1="@firebase/database",r1="@firebase/database-compat",i1="@firebase/functions",s1="@firebase/functions-compat",o1="@firebase/installations",l1="@firebase/installations-compat",a1="@firebase/messaging",u1="@firebase/messaging-compat",c1="@firebase/performance",d1="@firebase/performance-compat",h1="@firebase/remote-config",f1="@firebase/remote-config-compat",p1="@firebase/storage",m1="@firebase/storage-compat",g1="@firebase/firestore",_1="@firebase/firestore-compat",v1="firebase",y1="10.4.0";/**
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
 */const Ic="[DEFAULT]",w1={[Sc]:"fire-core",[QI]:"fire-core-compat",[XI]:"fire-analytics",[YI]:"fire-analytics-compat",[ZI]:"fire-app-check",[JI]:"fire-app-check-compat",[e1]:"fire-auth",[t1]:"fire-auth-compat",[n1]:"fire-rtdb",[r1]:"fire-rtdb-compat",[i1]:"fire-fn",[s1]:"fire-fn-compat",[o1]:"fire-iid",[l1]:"fire-iid-compat",[a1]:"fire-fcm",[u1]:"fire-fcm-compat",[c1]:"fire-perf",[d1]:"fire-perf-compat",[h1]:"fire-rc",[f1]:"fire-rc-compat",[p1]:"fire-gcs",[m1]:"fire-gcs-compat",[g1]:"fire-fst",[_1]:"fire-fst-compat","fire-js":"fire-js",[v1]:"fire-js-all"};/**
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
 */const Il=new Map,kc=new Map;function E1(t,e){try{t.container.addComponent(e)}catch(n){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vi(t){const e=t.name;if(kc.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;kc.set(e,t);for(const n of Il.values())E1(n,t);return!0}function qd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const C1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$n=new qs("app","Firebase",C1);/**
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
 */class S1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
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
 */const xi=y1;function uv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ic,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $n.create("bad-app-name",{appName:String(i)});if(n||(n=nv()),!n)throw $n.create("no-options");const s=Il.get(i);if(s){if(Sl(n,s.options)&&Sl(r,s.config))return s;throw $n.create("duplicate-app",{appName:i})}const o=new AI(i);for(const a of kc.values())o.addComponent(a);const l=new S1(n,r,o);return Il.set(i,l),l}function cv(t=Ic){const e=Il.get(t);if(!e&&t===Ic&&nv())return uv();if(!e)throw $n.create("no-app",{appName:t});return e}function zn(t,e,n){var r;let i=(r=w1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(l.join(" "));return}vi(new Er(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const I1="firebase-heartbeat-database",k1=1,Rs="firebase-heartbeat-store";let hu=null;function dv(){return hu||(hu=WI(I1,k1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rs)}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),hu}async function T1(t){try{return await(await dv()).transaction(Rs).objectStore(Rs).get(hv(t))}catch(e){if(e instanceof Xn)Cr.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(n.message)}}}async function Ep(t,e){try{const r=(await dv()).transaction(Rs,"readwrite");await r.objectStore(Rs).put(e,hv(t)),await r.done}catch(n){if(n instanceof Xn)Cr.warn(n.message);else{const r=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cr.warn(r.message)}}}function hv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const N1=1024,x1=30*24*60*60*1e3;class R1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new A1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=x1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Cp(),{heartbeatsToSend:n,unsentEntries:r}=P1(this._heartbeatsCache.heartbeats),i=wl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Cp(){return new Date().toISOString().substring(0,10)}function P1(t,e=N1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Sp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class A1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gI()?_I().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await T1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ep(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ep(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sp(t){return wl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function O1(t){vi(new Er("platform-logger",e=>new KI(e),"PRIVATE")),vi(new Er("heartbeat",e=>new R1(e),"PRIVATE")),zn(Sc,wp,t),zn(Sc,wp,"esm2017"),zn("fire-js","")}O1("");function Qd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const D1=fv,pv=new qs("auth","Firebase",fv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=new Gd("@firebase/auth");function L1(t,...e){kl.logLevel<=ee.WARN&&kl.warn(`Auth (${xi}): ${t}`,...e)}function $o(t,...e){kl.logLevel<=ee.ERROR&&kl.error(`Auth (${xi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,...e){throw Yd(t,...e)}function Wt(t,...e){return Yd(t,...e)}function mv(t,e,n){const r=Object.assign(Object.assign({},D1()),{[e]:n});return new qs("auth","Firebase",r).create(e,{appName:t.name})}function M1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Gt(t,"argument-error"),mv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pv.create(t,...e)}function B(t,e,...n){if(!t)throw Yd(e,...n)}function tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $o(e),new Error(e)}function dn(t,e){t||tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function b1(){return Ip()==="http:"||Ip()==="https:"}function Ip(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(b1()||pI()||"connection"in navigator)?navigator.onLine:!0}function U1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=Wd()||iv()}get(){return F1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1=new Qs(3e4,6e4);function _v(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ys(t,e,n,r,i={}){return vv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ni(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),gv.fetch()(yv(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function vv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},j1),e);try{const i=new z1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Io(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Io(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Io(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Io(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw mv(t,d,u);Gt(t,d)}}catch(i){if(i instanceof Xn)throw i;Gt(t,"network-request-failed",{message:String(i)})}}async function $1(t,e,n,r,i={}){const s=await Ys(t,e,n,r,i);return"mfaPendingCredential"in s&&Gt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function yv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xd(t.config,i):`${t.config.apiScheme}://${i}`}class z1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wt(this.auth,"network-request-failed")),V1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Wt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(t,e){return Ys(t,"POST","/v1/accounts:delete",e)}async function W1(t,e){return Ys(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function H1(t,e=!1){const n=Mt(t),r=await n.getIdToken(e),i=Jd(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:os(fu(i.auth_time)),issuedAtTime:os(fu(i.iat)),expirationTime:os(fu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fu(t){return Number(t)*1e3}function Jd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $o("JWT malformed, contained fewer than 3 sections"),null;try{const i=El(n);return i?JSON.parse(i):($o("Failed to decode base64 JWT payload"),null)}catch(i){return $o("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function G1(t){const e=Jd(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xn&&K1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function K1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=os(this.lastLoginAt),this.creationTime=os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ps(t,W1(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?X1(s.providerUserInfo):[],l=Y1(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new wv(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function Q1(t){const e=Mt(t);await Tl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Y1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function X1(t){return t.map(e=>{var{providerId:n}=e,r=Qd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(t,e){const n=await vv(t,{},async()=>{const r=Ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=yv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",gv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):G1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await J1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new As;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new As,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new q1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ps(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return H1(this,e)}reload(){return Q1(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ps(this,B1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:C,isAnonymous:k,providerData:A,stsTokenManager:O}=n;B(g&&O,e,"internal-error");const M=As.fromJSON(this.name,O);B(typeof g=="string",e,"internal-error"),wn(c,e.name),wn(h,e.name),B(typeof C=="boolean",e,"internal-error"),B(typeof k=="boolean",e,"internal-error"),wn(_,e.name),wn(v,e.name),wn(w,e.name),wn(x,e.name),wn(p,e.name),wn(f,e.name);const q=new fr({uid:g,auth:e,email:h,emailVerified:C,displayName:c,isAnonymous:k,photoURL:v,phoneNumber:_,tenantId:w,stsTokenManager:M,createdAt:p,lastLoginAt:f});return A&&Array.isArray(A)&&(q.providerData=A.map($=>Object.assign({},$))),x&&(q._redirectEventId=x),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new As;i.updateFromServerResponse(n);const s=new fr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Tl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=new Map;function nn(t){dn(t instanceof Function,"Expected a class definition");let e=kp.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kp.set(t,e),e)}/**
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
 */class Ev{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ev.type="NONE";const Tp=Ev;/**
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
 */function zo(t,e,n){return`firebase:${t}:${e}:${n}`}class ii{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zo(this.userKey,i.apiKey,s),this.fullPersistenceKey=zo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ii(nn(Tp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||nn(Tp);const o=zo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=fr._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new ii(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ii(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tv(e))return"Blackberry";if(Nv(e))return"Webos";if(Zd(e))return"Safari";if((e.includes("chrome/")||Sv(e))&&!e.includes("edge/"))return"Chrome";if(kv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cv(t=We()){return/firefox\//i.test(t)}function Zd(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sv(t=We()){return/crios\//i.test(t)}function Iv(t=We()){return/iemobile/i.test(t)}function kv(t=We()){return/android/i.test(t)}function Tv(t=We()){return/blackberry/i.test(t)}function Nv(t=We()){return/webos/i.test(t)}function da(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Z1(t=We()){var e;return da(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ek(){return mI()&&document.documentMode===10}function xv(t=We()){return da(t)||kv(t)||Nv(t)||Tv(t)||/windows phone/i.test(t)||Iv(t)}function tk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t,e=[]){let n;switch(t){case"Browser":n=Np(We());break;case"Worker":n=`${Np(We())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xi}/${r}`}/**
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
 */class nk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function rk(t,e={}){return Ys(t,"GET","/v2/passwordPolicy",_v(t,e))}/**
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
 */const ik=6;class sk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ik,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xp(this),this.idTokenSubscription=new xp(this),this.beforeStateQueue=new nk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ii.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=U1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Mt(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rk(this),n=new sk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nn(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await ii.create(this,[nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&L1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ha(t){return Mt(t)}class xp{constructor(e){this.auth=e,this.observer=null,this.addObserver=II(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ak(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Wt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lk().appendChild(r)})}function uk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(t,e){const n=qd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Sl(s,e??{}))return i;Gt(i,"already-initialized")}return n.initialize({options:e})}function dk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hk(t,e,n){const r=ha(t);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Pv(e),{host:o,port:l}=fk(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||pk()}function Pv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fk(t){const e=Pv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Rp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Rp(o)}}}function Rp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,n){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t,e){return $1(t,"POST","/v1/accounts:signInWithIdp",_v(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk="http://localhost";class Sr extends Av{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return si(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,si(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,si(e,n)}buildRequest(){const e={requestUri:mk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ni(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xs extends eh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Xs{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com";Xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Xs{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Xs{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await fr._fromIdTokenResponse(e,r,i),o=Pp(r);return new yi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Pp(r);return new yi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Pp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends Xn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Nl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Nl(e,n,r,i)}}function Ov(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Nl._fromErrorAndOperation(t,s,e,r):s})}async function gk(t,e,n=!1){const r=await Ps(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yi._forOperation(t,"link",r)}/**
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
 */async function _k(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ps(t,Ov(r,i,e,t),n);B(s.idToken,r,"internal-error");const o=Jd(s.idToken);B(o,r,"internal-error");const{sub:l}=o;return B(t.uid===l,r,"user-mismatch"),yi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vk(t,e,n=!1){const r="signIn",i=await Ov(t,r,e),s=await yi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function yk(t,e,n,r){return Mt(t).onIdTokenChanged(e,n,r)}function wk(t,e,n){return Mt(t).beforeAuthStateChanged(e,n)}const xl="__sak";/**
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
 */class Dv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xl,"1"),this.storage.removeItem(xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(){const t=We();return Zd(t)||da(t)}const Ck=1e3,Sk=10;class Lv extends Dv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ek()&&tk(),this.fallbackToPolling=xv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ek()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Sk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lv.type="LOCAL";const Ik=Lv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv extends Dv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mv.type="SESSION";const bv=Mv;/**
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
 */function kk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await kk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Tk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=th("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return window}function Nk(t){Ht().location.href=t}/**
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
 */function Fv(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function xk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Pk(){return Fv()?self:null}/**
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
 */const Uv="firebaseLocalStorageDb",Ak=1,Rl="firebaseLocalStorage",jv="fbase_key";class Js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pa(t,e){return t.transaction([Rl],e?"readwrite":"readonly").objectStore(Rl)}function Ok(){const t=indexedDB.deleteDatabase(Uv);return new Js(t).toPromise()}function Nc(){const t=indexedDB.open(Uv,Ak);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rl,{keyPath:jv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rl)?e(r):(r.close(),await Ok(),e(await Nc()))})})}async function Ap(t,e,n){const r=pa(t,!0).put({[jv]:e,value:n});return new Js(r).toPromise()}async function Dk(t,e){const n=pa(t,!1).get(e),r=await new Js(n).toPromise();return r===void 0?null:r.value}function Op(t,e){const n=pa(t,!0).delete(e);return new Js(n).toPromise()}const Lk=800,Mk=3;class Vv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Mk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fa._getInstance(Pk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xk(),!this.activeServiceWorker)return;this.sender=new Tk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nc();return await Ap(e,xl,"1"),await Op(e,xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ap(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Dk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Op(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pa(i,!1).getAll();return new Js(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vv.type="LOCAL";const bk=Vv;new Qs(3e4,6e4);/**
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
 */function $v(t,e){return e?nn(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class nh extends Av{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return si(e,this._buildIdpRequest())}_linkToIdToken(e,n){return si(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return si(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Fk(t){return vk(t.auth,new nh(t),t.bypassAuthState)}function Uk(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),_k(n,new nh(t),t.bypassAuthState)}async function jk(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),gk(n,new nh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fk;case"linkViaPopup":case"linkViaRedirect":return jk;case"reauthViaPopup":case"reauthViaRedirect":return Uk;default:Gt(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=new Qs(2e3,1e4);async function $k(t,e,n){const r=ha(t);M1(t,e,eh);const i=$v(r,n);return new ar(r,"signInViaPopup",e,i).executeNotNull()}class ar extends zv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=th();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Vk.get())};e()}}ar.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk="pendingRedirect",Bo=new Map;class Bk extends zv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bo.get(this.auth._key());if(!e){try{const r=await Wk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bo.set(this.auth._key(),e)}return this.bypassAuthState||Bo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wk(t,e){const n=Kk(e),r=Gk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Hk(t,e){Bo.set(t._key(),e)}function Gk(t){return nn(t._redirectPersistence)}function Kk(t){return zo(zk,t.config.apiKey,t.name)}async function qk(t,e,n=!1){const r=ha(t),i=$v(r,e),o=await new Bk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=10*60*1e3;class Yk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dp(e))}saveEventToCache(e){this.cachedEventUids.add(Dp(e)),this.lastProcessedEventTime=Date.now()}}function Dp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(t,e={}){return Ys(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eT=/^https?/;async function tT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Jk(t);for(const n of e)try{if(nT(n))return}catch{}Gt(t,"unauthorized-domain")}function nT(t){const e=Tc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eT.test(n))return!1;if(Zk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const rT=new Qs(3e4,6e4);function Lp(){const t=Ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iT(t){return new Promise((e,n)=>{var r,i,s;function o(){Lp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lp(),n(Wt(t,"network-request-failed"))},timeout:rT.get()})}if(!((i=(r=Ht().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ht().gapi)===null||s===void 0)&&s.load)o();else{const l=uk("iframefcb");return Ht()[l]=()=>{gapi.load?o():n(Wt(t,"network-request-failed"))},ak(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Wo=null,e})}let Wo=null;function sT(t){return Wo=Wo||iT(t),Wo}/**
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
 */const oT=new Qs(5e3,15e3),lT="__/auth/iframe",aT="emulator/auth/iframe",uT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dT(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xd(e,aT):`https://${t.config.authDomain}/${lT}`,r={apiKey:e.apiKey,appName:t.name,v:xi},i=cT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ni(r).slice(1)}`}async function hT(t){const e=await sT(t),n=Ht().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:dT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Wt(t,"network-request-failed"),l=Ht().setTimeout(()=>{s(o)},oT.get());function a(){Ht().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const fT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pT=500,mT=600,gT="_blank",_T="http://localhost";class Mp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vT(t,e,n,r=pT,i=mT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},fT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=We().toLowerCase();n&&(l=Sv(u)?gT:n),Cv(u)&&(e=e||_T,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[_,v])=>`${h}${_}=${v},`,"");if(Z1(u)&&l!=="_self")return yT(e||"",l),new Mp(null);const c=window.open(e||"",l,d);B(c,t,"popup-blocked");try{c.focus()}catch{}return new Mp(c)}function yT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const wT="__/auth/handler",ET="emulator/auth/handler",CT=encodeURIComponent("fac");async function bp(t,e,n,r,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xi,eventId:i};if(e instanceof eh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof Xs){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${CT}=${encodeURIComponent(a)}`:"";return`${ST(t)}?${Ni(l).slice(1)}${u}`}function ST({config:t}){return t.emulator?Xd(t,ET):`https://${t.authDomain}/${wT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="webStorageSupport";class IT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bv,this._completeRedirectFn=qk,this._overrideRedirectResult=Hk}async _openPopup(e,n,r,i){var s;dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await bp(e,n,r,Tc(),i);return vT(e,o,th())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await bp(e,n,r,Tc(),i);return Nk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hT(e),r=new Yk(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pu,{type:pu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[pu];o!==void 0&&n(!!o),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xv()||Zd()||da()}}const kT=IT;var Fp="@firebase/auth",Up="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xT(t){vi(new Er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rv(t)},u=new ok(r,i,s,a);return dk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vi(new Er("auth-internal",e=>{const n=ha(e.getProvider("auth").getImmediate());return(r=>new TT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(Fp,Up,NT(t)),zn(Fp,Up,"esm2017")}/**
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
 */const RT=5*60,PT=rv("authIdTokenMaxAge")||RT;let jp=null;const AT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>PT)return;const i=n==null?void 0:n.token;jp!==i&&(jp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function OT(t=cv()){const e=qd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ck(t,{popupRedirectResolver:kT,persistence:[bk,Ik,bv]}),r=rv("authTokenSyncURL");if(r){const s=AT(r);wk(n,s,()=>s(n.currentUser)),yk(n,o=>s(o))}const i=tv("auth");return i&&hk(n,`http://${i}`),n}xT("Browser");var DT="firebase",LT="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn(DT,LT,"app");const Vp="@firebase/database",$p="1.0.1";/**
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
 */let Wv="";function MT(t){Wv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:xs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return mn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new bT(e)}}catch{}return new FT},ur=Hv("localStorage"),xc=Hv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new Gd("@firebase/database"),UT=function(){let t=1;return function(){return t++}}(),Gv=function(t){const e=NI(t),n=new SI;n.update(e);const r=n.digest();return zd.encodeByteArray(r)},Zs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Zs.apply(null,r):typeof r=="object"?e+=Pe(r):e+=r,e+=" "}return e};let pr=null,zp=!0;const jT=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(oi.logLevel=ee.VERBOSE,pr=oi.log.bind(oi),e&&xc.set("logging_enabled",!0)):typeof t=="function"?pr=t:(pr=null,xc.remove("logging_enabled"))},ze=function(...t){if(zp===!0&&(zp=!1,pr===null&&xc.get("logging_enabled")===!0&&jT(!0)),pr){const e=Zs.apply(null,t);pr(e)}},eo=function(t){return function(...e){ze(t,...e)}},Rc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Zs(...t);oi.error(e)},hn=function(...t){const e=`FIREBASE FATAL ERROR: ${Zs(...t)}`;throw oi.error(e),new Error(e)},it=function(...t){const e="FIREBASE WARNING: "+Zs(...t);oi.warn(e)},VT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&it("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$T=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wi="[MIN_NAME]",Ir="[MAX_NAME]",Ri=function(t,e){if(t===e)return 0;if(t===wi||e===Ir)return-1;if(e===wi||t===Ir)return 1;{const n=Bp(t),r=Bp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},zT=function(t,e){return t===e?0:t<e?-1:1},Bi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pe(e))},rh=function(t){if(typeof t!="object"||t===null)return Pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Pe(e[r]),n+=":",n+=rh(t[e[r]]);return n+="}",n},qv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ot(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Qv=function(t){T(!Kv(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},BT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},WT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function HT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const GT=new RegExp("^-?(0*)\\d{1,10}$"),KT=-2147483648,qT=2147483647,Bp=function(t){if(GT.test(t)){const e=Number(t);if(e>=KT&&e<=qT)return e}return null},Pi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw it("Exception was thrown by user callback.",n),e},Math.floor(0))}},QT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ls=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class YT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){it(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',it(e)}}class li{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}li.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="5",Yv="v",Xv="s",Jv="r",Zv="f",ey=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ty="ls",ny="p",Pc="ac",ry="websocket",iy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ur.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ur.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function JT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function oy(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===ry)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===iy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);JT(t)&&(n.ns=t.namespace);const i=[];return ot(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.counters_={}}incrementCounter(e,n=1){mn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return oI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu={},gu={};function sh(t){const e=t.toString();return mu[e]||(mu[e]=new ZT),mu[e]}function eN(t,e){const n=t.toString();return gu[n]||(gu[n]=e()),gu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Pi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="start",nN="close",rN="pLPCommand",iN="pRTLPCB",ly="id",ay="pw",uy="ser",sN="cb",oN="seg",lN="ts",aN="d",uN="dframe",cy=1870,dy=30,cN=cy-dy,dN=25e3,hN=3e4;class Yr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=eo(e),this.stats_=sh(n),this.urlFn=a=>(this.appCheckToken&&(a[Pc]=this.appCheckToken),oy(n,iy,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new tN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hN)),$T(()=>{if(this.isClosed_)return;this.scriptTagHolder=new oh((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Wp)this.id=l,this.password=a;else if(o===nN)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Wp]="t",r[uy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[sN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Yv]=ih,this.transportSessionId&&(r[Xv]=this.transportSessionId),this.lastSessionId&&(r[ty]=this.lastSessionId),this.applicationId&&(r[ny]=this.applicationId),this.appCheckToken&&(r[Pc]=this.appCheckToken),typeof location<"u"&&location.hostname&&ey.test(location.hostname)&&(r[Jv]=Zv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Yr.forceAllow_=!0}static forceDisallow(){Yr.forceDisallow_=!0}static isAvailable(){return Yr.forceAllow_?!0:!Yr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!BT()&&!WT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Z_(n),i=qv(r,cN);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[uN]="t",r[ly]=e,r[ay]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class oh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=UT(),window[rN+this.uniqueCallbackIdentifier]=e,window[iN+this.uniqueCallbackIdentifier]=n,this.myIFrame=oh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ze("frame writing exception"),l.stack&&ze(l.stack),ze(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ze("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ly]=this.myID,e[ay]=this.myPW,e[uy]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+dy+r.length<=cy;){const o=this.pendingSegs.shift();r=r+"&"+oN+i+"="+o.seg+"&"+lN+i+"="+o.ts+"&"+aN+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(dN)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=16384,pN=45e3;let Pl=null;typeof MozWebSocket<"u"?Pl=MozWebSocket:typeof WebSocket<"u"&&(Pl=WebSocket);class xt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=eo(this.connId),this.stats_=sh(n),this.connURL=xt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Yv]=ih,typeof location<"u"&&location.hostname&&ey.test(location.hostname)&&(o[Jv]=Zv),n&&(o[Xv]=n),r&&(o[ty]=r),i&&(o[Pc]=i),s&&(o[ny]=s),oy(e,ry,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ur.set("previous_websocket_failure",!0);try{let r;sv(),this.mySock=new Pl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Pl!==null&&!xt.forceDisallow_}static previouslyFailed(){return ur.isInMemoryStorage||ur.get("previous_websocket_failure")===!0}markConnectionHealthy(){ur.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=xs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=qv(n,fN);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xt.responsesRequiredToBeHealthy=2;xt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Yr,xt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=xt&&xt.isAvailable();let r=n&&!xt.previouslyFailed();if(e.webSocketOnly&&(n||it("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[xt];else{const i=this.transports_=[];for(const s of Os.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Os.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Os.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=6e4,gN=5e3,_N=10*1024,vN=100*1024,_u="t",Hp="d",yN="s",Gp="r",wN="e",Kp="o",qp="a",Qp="n",Yp="p",EN="h";class CN{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=eo("c:"+this.id+":"),this.transportManager_=new Os(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ls(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>vN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_N?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_u in e){const n=e[_u];n===qp?this.upgradeIfSecondaryHealthy_():n===Gp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Kp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Bi("t",e),r=Bi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Bi("t",e),r=Bi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Bi(_u,e);if(Hp in e){const r=e[Hp];if(n===EN){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Qp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===yN?this.onConnectionShutdown_(r):n===Gp?this.onReset_(r):n===wN?Rc("Server Error: "+r):n===Kp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Rc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ih!==r&&it("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ls(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ls(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ur.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends fy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Wd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Al}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=32,Jp=768;class te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new te("")}function H(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Gn(t){return t.pieces_.length-t.pieceNum_}function ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new te(t.pieces_,e)}function py(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function SN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function my(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function gy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new te(e,0)}function Ie(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof te)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new te(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function Ze(t,e){const n=H(t),r=H(e);if(n===null)return e;if(n===r)return Ze(ne(t),ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function lh(t,e){if(Gn(t)!==Gn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Rt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Gn(t)>Gn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class IN{constructor(e,n){this.errorPrefix_=n,this.parts_=my(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ca(this.parts_[r]);_y(this)}}function kN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ca(e),_y(t)}function TN(t){const e=t.parts_.pop();t.byteLength_-=ca(e),t.parts_.length>0&&(t.byteLength_-=1)}function _y(t){if(t.byteLength_>Jp)throw new Error(t.errorPrefix_+"has a key path longer than "+Jp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Xp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xp+") or object contains a cycle "+nr(t))}function nr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah extends fy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ah}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=1e3,NN=60*5*1e3,Zp=30*1e3,xN=1.3,RN=3e4,PN="server_kill",em=3;class on extends hy{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=on.nextPersistentConnectionId_++,this.log_=eo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wi,this.maxReconnectDelay_=NN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!sv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ah.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Al.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Pe(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ua,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;on.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&mn(e,"w")){const r=_i(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();it(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||CI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=EI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Rc("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>RN&&(this.reconnectDelay_=Wi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+on.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ze("getToken() completed but was canceled"):(ze("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new CN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{it(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(PN)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&it(c),a())}}}interrupt(e){ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],wc(this.interruptReasons_)&&(this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>rh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new te(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=em&&(this.reconnectDelay_=Zp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=em&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Wv.replace(/\./g,"-")]=1,Wd()?e["framework.cordova"]=1:iv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Al.getInstance().currentlyOnline();return wc(this.interruptReasons_)&&e}}on.nextPersistentConnectionId_=0;on.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new G(wi,e),i=new G(wi,n);return this.compare(r,i)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko;class vy extends ma{static get __EMPTY_NODE(){return ko}static set __EMPTY_NODE(e){ko=e}compare(e,n){return Ri(e.name,n.name)}isDefinedOn(e){throw Ti("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(Ir,ko)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,ko)}toString(){return".key"}}const ai=new vy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Re{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Re.RED,this.left=i??et.EMPTY_NODE,this.right=s??et.EMPTY_NODE}copy(e,n,r,i,s){return new Re(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return et.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Re.RED=!0;Re.BLACK=!1;class AN{copy(e,n,r,i,s){return this}insert(e,n,r){return new Re(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class et{constructor(e,n=et.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new et(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Re.BLACK,null,null))}remove(e){return new et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Re.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new To(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new To(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new To(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new To(this.root_,null,this.comparator_,!0,e)}}et.EMPTY_NODE=new AN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(t,e){return Ri(t.name,e.name)}function uh(t,e){return Ri(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac;function DN(t){Ac=t}const yy=function(t){return typeof t=="number"?"number:"+Qv(t):"string:"+t},wy=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mn(e,".sv"),"Priority must be a string or number.")}else T(t===Ac||t.isEmpty(),"priority of unexpected type.");T(t===Ac||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tm;class Ne{constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),wy(this.priorityNode_)}static set __childrenNodeConstructor(e){tm=e}static get __childrenNodeConstructor(){return tm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:H(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=H(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||Gn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+yy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Qv(this.value_):e+=this.value_,this.lazyHash_=Gv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ne.VALUE_TYPE_ORDER.indexOf(n),s=Ne.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ey,Cy;function LN(t){Ey=t}function MN(t){Cy=t}class bN extends ma{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ri(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(Ir,new Ne("[PRIORITY-POST]",Cy))}makePost(e,n){const r=Ey(e);return new G(n,new Ne("[PRIORITY-POST]",r))}toString(){return".priority"}}const ge=new bN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=Math.log(2);class UN{constructor(e){const n=s=>parseInt(Math.log(s)/FN,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ol=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new Re(h,c.node,Re.BLACK,null,null);{const _=parseInt(d/2,10)+a,v=i(a,_),w=i(_+1,u);return c=t[_],h=n?n(c):c,new Re(h,c.node,Re.BLACK,v,w)}},s=function(a){let u=null,d=null,c=t.length;const h=function(v,w){const x=c-v,p=c;c-=v;const f=i(x+1,p),g=t[x],C=n?n(g):g;_(new Re(C,g.node,w,null,f))},_=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<a.count;++v){const w=a.nextBitIsOne(),x=Math.pow(2,a.count-(v+1));w?h(x,Re.BLACK):(h(x,Re.BLACK),h(x,Re.RED))}return d},o=new UN(t.length),l=s(o);return new et(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu;const br={};class rn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(br&&ge,"ChildrenNode.ts has not been loaded"),vu=vu||new rn({".priority":br},{".priority":ge}),vu}get(e){const n=_i(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof et?n:null}hasIndex(e){return mn(this.indexSet_,e.toString())}addIndex(e,n){T(e!==ai,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(G.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Ol(r,e.getCompare()):l=br;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new rn(d,u)}addToIndexes(e,n){const r=Cl(this.indexes_,(i,s)=>{const o=_i(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===br)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(G.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Ol(l,o.getCompare())}else return br;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new G(e.name,l))),a.insert(e,e.node)}});return new rn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Cl(this.indexes_,i=>{if(i===br)return i;{const s=n.get(e.name);return s?i.remove(new G(e.name,s)):i}});return new rn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hi;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&wy(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Hi||(Hi=new j(new et(uh),null,rn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hi}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Hi:n}}getChild(e){const n=H(e);return n===null?this:this.getImmediateChild(n).getChild(ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new G(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Hi:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=H(e);if(r===null)return n;{T(H(e)!==".priority"||Gn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ne(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ge,(o,l)=>{n[o]=l.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+yy(this.getPriority().val())+":"),this.forEachChild(ge,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Gv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new G(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===to?-1:0}withIndex(e){if(e===ai||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ai||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ge),i=n.getIterator(ge);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ai?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jN extends j{constructor(){super(new et(uh),j.EMPTY_NODE,rn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const to=new jN;Object.defineProperties(G,{MIN:{value:new G(wi,j.EMPTY_NODE)},MAX:{value:new G(Ir,to)}});vy.__EMPTY_NODE=j.EMPTY_NODE;Ne.__childrenNodeConstructor=j;DN(to);MN(to);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=!0;function Le(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,Le(e))}if(!(t instanceof Array)&&VN){const n=[];let r=!1;if(ot(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Le(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new G(o,a)))}}),n.length===0)return j.EMPTY_NODE;const s=Ol(n,ON,o=>o.name,uh);if(r){const o=Ol(n,ge.getCompare());return new j(s,Le(e),new rn({".priority":o},{".priority":ge}))}else return new j(s,Le(e),rn.Default)}else{let n=j.EMPTY_NODE;return ot(t,(r,i)=>{if(mn(t,r)&&r.substring(0,1)!=="."){const s=Le(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Le(e))}}LN(Le);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N extends ma{constructor(e){super(),this.indexPath_=e,T(!K(e)&&H(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ri(e.name,n.name):s}makePost(e,n){const r=Le(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new G(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,to);return new G(Ir,e)}toString(){return my(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN extends ma{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ri(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const r=Le(e);return new G(n,r)}toString(){return".value"}}const BN=new zN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t){return{type:"value",snapshotNode:t}}function Ei(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ds(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ls(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function WN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ds(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Ei(n,r)):o.trackChildChange(Ls(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ge,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ds(i,s))}),n.isLeafNode()||n.forEachChild(ge,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ls(i,s,o))}else r.trackChildChange(Ei(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.indexedFilter_=new ch(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ms.getStartPost_(e),this.endPost_=Ms.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new G(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(ge,(o,l)=>{s.matches(new G(o,l))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ms(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new G(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,_)=>c(_,h)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const a=new G(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(d&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(Ls(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ds(n,c));const w=l.updateImmediateChild(n,j.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Ei(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Ds(u.name,u.node)),s.trackChildChange(Ei(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ge}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wi}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ge}copy(){const e=new dh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function GN(t){return t.loadsAllData()?new ch(t.getIndex()):t.hasLimit()?new HN(t):new Ms(t)}function nm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ge?n="$priority":t.index_===BN?n="$value":t.index_===ai?n="$key":(T(t.index_ instanceof $N,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function rm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ge&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends hy{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=eo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Dl.getListenId_(e,r),l={};this.listens_[o]=l;const a=nm(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),_i(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Dl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=nm(e._queryParams),r=e._path.toString(),i=new ua;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ni(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=xs(l.responseText)}catch{it("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&it("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){return{value:null,children:new Map}}function Iy(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=H(e);t.children.has(r)||t.children.set(r,Ll());const i=t.children.get(r);e=ne(e),Iy(i,e,n)}}function Oc(t,e,n){t.value!==null?n(e,t.value):qN(t,(r,i)=>{const s=new te(e.toString()+"/"+r);Oc(i,s,n)})}function qN(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ot(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=10*1e3,YN=30*1e3,XN=5*60*1e3;class JN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new QN(e);const r=im+(YN-im)*Math.random();ls(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ot(e,(i,s)=>{s>0&&mn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ls(this.reportStats_.bind(this),Math.floor(Math.random()*2*XN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pt||(Pt={}));function ky(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Pt.ACK_USER_WRITE,this.source=ky()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new te(e));return new Ml(J(),n,this.revert)}}else return T(H(this.path)===e,"operationForChild called for unrelated child."),new Ml(ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this.source=e,this.path=n,this.type=Pt.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new bs(this.source,J()):new bs(this.source,ne(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Pt.OVERWRITE}operationForChild(e){return K(this.path)?new kr(this.source,J(),this.snap.getImmediateChild(e)):new kr(this.source,ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Pt.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new te(e));return n.isEmpty()?null:n.value?new kr(this.source,J(),n.value):new Fs(this.source,J(),n)}else return T(H(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fs(this.source,ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=H(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ex(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(WN(o.childName,o.snapshotNode))}),Gi(t,i,"child_removed",e,r,n),Gi(t,i,"child_added",e,r,n),Gi(t,i,"child_moved",s,r,n),Gi(t,i,"child_changed",e,r,n),Gi(t,i,"value",e,r,n),i}function Gi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>nx(t,l,a)),o.forEach(l=>{const a=tx(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function tx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function nx(t,e,n){if(e.childName==null||n.childName==null)throw Ti("Should only compare child_ events.");const r=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t,e){return{eventCache:t,serverCache:e}}function as(t,e,n,r){return ga(new Tr(e,n,r),t.serverCache)}function Ty(t,e,n,r){return ga(t.eventCache,new Tr(e,n,r))}function Dc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Nr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu;const rx=()=>(yu||(yu=new et(zT)),yu);class se{constructor(e,n=rx()){this.value=e,this.children=n}static fromObject(e){let n=new se(null);return ot(e,(r,i)=>{n=n.set(new te(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(K(e))return null;{const r=H(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ne(e),n);return s!=null?{path:Ie(new te(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=H(e),r=this.children.get(n);return r!==null?r.subtree(ne(e)):new se(null)}}set(e,n){if(K(e))return new se(n,this.children);{const r=H(e),s=(this.children.get(r)||new se(null)).set(ne(e),n),o=this.children.insert(r,s);return new se(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new se(null):new se(null,this.children);{const n=H(e),r=this.children.get(n);if(r){const i=r.remove(ne(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new se(null):new se(this.value,s)}else return this}}get(e){if(K(e))return this.value;{const n=H(e),r=this.children.get(n);return r?r.get(ne(e)):null}}setTree(e,n){if(K(e))return n;{const r=H(e),s=(this.children.get(r)||new se(null)).setTree(ne(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new se(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ie(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(K(e))return null;{const s=H(e),o=this.children.get(s);return o?o.findOnPath_(ne(e),Ie(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,r){if(K(e))return this;{this.value&&r(n,this.value);const i=H(e),s=this.children.get(i);return s?s.foreachOnPath_(ne(e),Ie(n,i),r):new se(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ie(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.writeTree_=e}static empty(){return new Dt(new se(null))}}function us(t,e,n){if(K(e))return new Dt(new se(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ze(i,e);return s=s.updateChild(o,n),new Dt(t.writeTree_.set(i,s))}else{const i=new se(n),s=t.writeTree_.setTree(e,i);return new Dt(s)}}}function sm(t,e,n){let r=t;return ot(n,(i,s)=>{r=us(r,Ie(e,i),s)}),r}function om(t,e){if(K(e))return Dt.empty();{const n=t.writeTree_.setTree(e,new se(null));return new Dt(n)}}function Lc(t,e){return Ar(t,e)!=null}function Ar(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ze(n.path,e)):null}function lm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ge,(r,i)=>{e.push(new G(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new G(r,i.value))}),e}function Bn(t,e){if(K(e))return t;{const n=Ar(t,e);return n!=null?new Dt(new se(n)):new Dt(t.writeTree_.subtree(e))}}function Mc(t){return t.writeTree_.isEmpty()}function Ci(t,e){return Ny(J(),t.writeTree_,e)}function Ny(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Ny(Ie(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ie(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(t,e){return Ay(e,t)}function ix(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=us(t.visibleWrites,e,n)),t.lastWriteId=r}function sx(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function ox(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&lx(l,r.path)?i=!1:Rt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return ax(t),!0;if(r.snap)t.visibleWrites=om(t.visibleWrites,r.path);else{const l=r.children;ot(l,a=>{t.visibleWrites=om(t.visibleWrites,Ie(r.path,a))})}return!0}else return!1}function lx(t,e){if(t.snap)return Rt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Rt(Ie(t.path,n),e))return!0;return!1}function ax(t){t.visibleWrites=xy(t.allWrites,ux,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ux(t){return t.visible}function xy(t,e,n){let r=Dt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Rt(n,o)?(l=Ze(n,o),r=us(r,l,s.snap)):Rt(o,n)&&(l=Ze(o,n),r=us(r,J(),s.snap.getChild(l)));else if(s.children){if(Rt(n,o))l=Ze(n,o),r=sm(r,l,s.children);else if(Rt(o,n))if(l=Ze(o,n),K(l))r=sm(r,J(),s.children);else{const a=_i(s.children,H(l));if(a){const u=a.getChild(ne(l));r=us(r,J(),u)}}}else throw Ti("WriteRecord should have .snap or .children")}}return r}function Ry(t,e,n,r,i){if(!r&&!i){const s=Ar(t.visibleWrites,e);if(s!=null)return s;{const o=Bn(t.visibleWrites,e);if(Mc(o))return n;if(n==null&&!Lc(o,J()))return null;{const l=n||j.EMPTY_NODE;return Ci(o,l)}}}else{const s=Bn(t.visibleWrites,e);if(!i&&Mc(s))return n;if(!i&&n==null&&!Lc(s,J()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Rt(u.path,e)||Rt(e,u.path))},l=xy(t.allWrites,o,e),a=n||j.EMPTY_NODE;return Ci(l,a)}}}function cx(t,e,n){let r=j.EMPTY_NODE;const i=Ar(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ge,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Bn(t.visibleWrites,e);return n.forEachChild(ge,(o,l)=>{const a=Ci(Bn(s,new te(o)),l);r=r.updateImmediateChild(o,a)}),lm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Bn(t.visibleWrites,e);return lm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function dx(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ie(e,n);if(Lc(t.visibleWrites,s))return null;{const o=Bn(t.visibleWrites,s);return Mc(o)?i.getChild(n):Ci(o,i.getChild(n))}}function hx(t,e,n,r){const i=Ie(e,n),s=Ar(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Bn(t.visibleWrites,i);return Ci(o,r.getNode().getImmediateChild(n))}else return null}function fx(t,e){return Ar(t.visibleWrites,e)}function px(t,e,n,r,i,s,o){let l;const a=Bn(t.visibleWrites,e),u=Ar(a,J());if(u!=null)l=u;else if(n!=null)l=Ci(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=h.getNext();for(;_&&d.length<i;)c(_,r)!==0&&d.push(_),_=h.getNext();return d}else return[]}function mx(){return{visibleWrites:Dt.empty(),allWrites:[],lastWriteId:-1}}function bl(t,e,n,r){return Ry(t.writeTree,t.treePath,e,n,r)}function mh(t,e){return cx(t.writeTree,t.treePath,e)}function am(t,e,n,r){return dx(t.writeTree,t.treePath,e,n,r)}function Fl(t,e){return fx(t.writeTree,Ie(t.treePath,e))}function gx(t,e,n,r,i,s){return px(t.writeTree,t.treePath,e,n,r,i,s)}function gh(t,e,n){return hx(t.writeTree,t.treePath,e,n)}function Py(t,e){return Ay(Ie(t.treePath,e),t.writeTree)}function Ay(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ls(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ds(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ei(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ls(r,e.snapshotNode,i.oldSnap));else throw Ti("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Oy=new vx;class _h{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Tr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nr(this.viewCache_),s=gx(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(t){return{filter:t}}function wx(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ex(t,e,n,r,i){const s=new _x;let o,l;if(n.type===Pt.OVERWRITE){const u=n;u.source.fromUser?o=bc(t,e,u.path,u.snap,r,i,s):(T(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!K(u.path),o=Ul(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===Pt.MERGE){const u=n;u.source.fromUser?o=Sx(t,e,u.path,u.children,r,i,s):(T(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Fc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===Pt.ACK_USER_WRITE){const u=n;u.revert?o=Tx(t,e,u.path,r,i,s):o=Ix(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Pt.LISTEN_COMPLETE)o=kx(t,e,n.path,r,s);else throw Ti("Unknown operation type: "+n.type);const a=s.getChanges();return Cx(e,o,a),{viewCache:o,changes:a}}function Cx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Dc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Sy(Dc(e)))}}function Dy(t,e,n,r,i,s){const o=e.eventCache;if(Fl(r,n)!=null)return e;{let l,a;if(K(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Nr(e),d=u instanceof j?u:j.EMPTY_NODE,c=mh(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=bl(r,Nr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=H(n);if(u===".priority"){T(Gn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=am(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=ne(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=am(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=gh(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return as(e,l,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function Ul(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(K(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),_,null)}else{const _=H(n);if(!a.isCompleteForPath(n)&&Gn(n)>1)return e;const v=ne(n),x=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=d.updatePriority(a.getNode(),x):u=d.updateChild(a.getNode(),_,x,v,Oy,null)}const c=Ty(e,u,a.isFullyInitialized()||K(n),d.filtersNodes()),h=new _h(i,c,s);return Dy(t,c,n,i,h,l)}function bc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new _h(i,e,s);if(K(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=as(e,u,!0,t.filter.filtersNodes());else{const c=H(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=as(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=ne(n),_=l.getNode().getImmediateChild(c);let v;if(K(h))v=r;else{const w=d.getCompleteChild(c);w!=null?py(h)===".priority"&&w.getChild(gy(h)).isEmpty()?v=w:v=w.updateChild(h,r):v=j.EMPTY_NODE}if(_.equals(v))a=e;else{const w=t.filter.updateChild(l.getNode(),c,v,h,d,o);a=as(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function um(t,e){return t.eventCache.isCompleteForChild(e)}function Sx(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=Ie(n,a);um(e,H(d))&&(l=bc(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=Ie(n,a);um(e,H(d))||(l=bc(t,l,d,u,i,s,o))}),l}function cm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Fc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;K(n)?u=r:u=new se(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const _=e.serverCache.getNode().getImmediateChild(c),v=cm(t,_,h);a=Ul(t,a,new te(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const _=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!_){const v=e.serverCache.getNode().getImmediateChild(c),w=cm(t,v,h);a=Ul(t,a,new te(c),w,i,s,o,l)}}),a}function Ix(t,e,n,r,i,s,o){if(Fl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(K(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ul(t,e,n,a.getNode().getChild(n),i,s,l,o);if(K(n)){let u=new se(null);return a.getNode().forEachChild(ai,(d,c)=>{u=u.set(new te(d),c)}),Fc(t,e,n,u,i,s,l,o)}else return e}else{let u=new se(null);return r.foreach((d,c)=>{const h=Ie(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Fc(t,e,n,u,i,s,l,o)}}function kx(t,e,n,r,i){const s=e.serverCache,o=Ty(e,s.getNode(),s.isFullyInitialized()||K(n),s.isFiltered());return Dy(t,o,n,r,Oy,i)}function Tx(t,e,n,r,i,s){let o;if(Fl(r,n)!=null)return e;{const l=new _h(r,e,i),a=e.eventCache.getNode();let u;if(K(n)||H(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=bl(r,Nr(e));else{const c=e.serverCache.getNode();T(c instanceof j,"serverChildren would be complete if leaf node"),d=mh(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=H(n);let c=gh(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,ne(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,j.EMPTY_NODE,ne(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=bl(r,Nr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Fl(r,J())!=null,as(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new ch(r.getIndex()),s=GN(r);this.processor_=yx(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(j.EMPTY_NODE,l.getNode(),null),d=new Tr(a,o.isFullyInitialized(),i.filtersNodes()),c=new Tr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ga(c,d),this.eventGenerator_=new ZN(this.query_)}get query(){return this.query_}}function xx(t){return t.viewCache_.serverCache.getNode()}function Rx(t,e){const n=Nr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(H(e)).isEmpty())?n.getChild(e):null}function dm(t){return t.eventRegistrations_.length===0}function Px(t,e){t.eventRegistrations_.push(e)}function hm(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function fm(t,e,n,r){e.type===Pt.MERGE&&e.source.queryId!==null&&(T(Nr(t.viewCache_),"We should always have a full cache before handling merges"),T(Dc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Ex(t.processor_,i,e,n,r);return wx(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ly(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Ax(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ge,(s,o)=>{r.push(Ei(s,o))}),n.isFullyInitialized()&&r.push(Sy(n.getNode())),Ly(t,r,n.getNode(),e)}function Ly(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ex(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jl;class Ox{constructor(){this.views=new Map}}function Dx(t){T(!jl,"__referenceConstructor has already been defined"),jl=t}function Lx(){return T(jl,"Reference.ts has not been loaded"),jl}function Mx(t){return t.views.size===0}function vh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),fm(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(fm(o,e,n,r));return s}}function bx(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=bl(n,i?r:null),a=!1;l?a=!0:r instanceof j?(l=mh(n,r),a=!1):(l=j.EMPTY_NODE,a=!1);const u=ga(new Tr(l,a,!1),new Tr(r,i,!1));return new Nx(e,u)}return o}function Fx(t,e,n,r,i,s){const o=bx(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Px(o,n),Ax(o,n)}function Ux(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Kn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(hm(u,n,r)),dm(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(hm(a,n,r)),dm(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Kn(t)&&s.push(new(Lx())(e._repo,e._path)),{removed:s,events:o}}function My(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ui(t,e){let n=null;for(const r of t.views.values())n=n||Rx(r,e);return n}function by(t,e){if(e._queryParams.loadsAllData())return _a(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Fy(t,e){return by(t,e)!=null}function Kn(t){return _a(t)!=null}function _a(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vl;function jx(t){T(!Vl,"__referenceConstructor has already been defined"),Vl=t}function Vx(){return T(Vl,"Reference.ts has not been loaded"),Vl}let $x=1;class pm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new se(null),this.pendingWriteTree_=mx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Uy(t,e,n,r,i){return ix(t.pendingWriteTree_,e,n,r,i),i?no(t,new kr(ky(),e,n)):[]}function cr(t,e,n=!1){const r=sx(t.pendingWriteTree_,e);if(ox(t.pendingWriteTree_,e)){let s=new se(null);return r.snap!=null?s=s.set(J(),!0):ot(r.children,o=>{s=s.set(new te(o),!0)}),no(t,new Ml(r.path,s,n))}else return[]}function va(t,e,n){return no(t,new kr(hh(),e,n))}function zx(t,e,n){const r=se.fromObject(n);return no(t,new Fs(hh(),e,r))}function Bx(t,e){return no(t,new bs(hh(),e))}function Wx(t,e,n){const r=wh(t,n);if(r){const i=Eh(r),s=i.path,o=i.queryId,l=Ze(s,e),a=new bs(fh(o),l);return Ch(t,s,a)}else return[]}function Uc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Fy(o,e))){const a=Ux(o,e,n,r);Mx(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,_)=>Kn(_));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=Kx(h);for(let v=0;v<_.length;++v){const w=_[v],x=w.query,p=$y(t,w);t.listenProvider_.startListening(cs(x),$l(t,x),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(cs(e),null):u.forEach(h=>{const _=t.queryToTagMap.get(ya(h));t.listenProvider_.stopListening(cs(h),_)}))}qx(t,u)}return l}function Hx(t,e,n,r){const i=wh(t,r);if(i!=null){const s=Eh(i),o=s.path,l=s.queryId,a=Ze(o,e),u=new kr(fh(l),a,n);return Ch(t,o,u)}else return[]}function Gx(t,e,n,r){const i=wh(t,r);if(i){const s=Eh(i),o=s.path,l=s.queryId,a=Ze(o,e),u=se.fromObject(n),d=new Fs(fh(l),a,u);return Ch(t,o,d)}else return[]}function mm(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const v=Ze(h,i);s=s||ui(_,v),o=o||Kn(_)});let l=t.syncPointTree_.get(i);l?(o=o||Kn(l),s=s||ui(l,J())):(l=new Ox,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const w=ui(v,J());w&&(s=s.updateImmediateChild(_,w))}));const u=Fy(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=ya(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=Qx();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const d=ph(t.pendingWriteTree_,i);let c=Fx(l,e,n,d,s,a);if(!u&&!o&&!r){const h=by(l,e);c=c.concat(Yx(t,e,h))}return c}function yh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ze(o,e),u=ui(l,a);if(u)return u});return Ry(i,e,s,n,!0)}function no(t,e){return jy(e,t.syncPointTree_,null,ph(t.pendingWriteTree_,J()))}function jy(t,e,n,r){if(K(t.path))return Vy(t,e,n,r);{const i=e.get(J());n==null&&i!=null&&(n=ui(i,J()));let s=[];const o=H(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=Py(r,o);s=s.concat(jy(l,a,u,d))}return i&&(s=s.concat(vh(i,t,r,n))),s}}function Vy(t,e,n,r){const i=e.get(J());n==null&&i!=null&&(n=ui(i,J()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Py(r,o),d=t.operationForChild(o);d&&(s=s.concat(Vy(d,l,a,u)))}),i&&(s=s.concat(vh(i,t,r,n))),s}function $y(t,e){const n=e.query,r=$l(t,n);return{hashFn:()=>(xx(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Wx(t,n._path,r):Bx(t,n._path);{const s=HT(i,n);return Uc(t,n,null,s)}}}}function $l(t,e){const n=ya(e);return t.queryToTagMap.get(n)}function ya(t){return t._path.toString()+"$"+t._queryIdentifier}function wh(t,e){return t.tagToQueryMap.get(e)}function Eh(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new te(t.substr(0,e))}}function Ch(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=ph(t.pendingWriteTree_,e);return vh(r,n,i,null)}function Kx(t){return t.fold((e,n,r)=>{if(n&&Kn(n))return[_a(n)];{let i=[];return n&&(i=My(n)),ot(r,(s,o)=>{i=i.concat(o)}),i}})}function cs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Vx())(t._repo,t._path):t}function qx(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ya(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Qx(){return $x++}function Yx(t,e,n){const r=e._path,i=$l(t,e),s=$y(t,n),o=t.listenProvider_.startListening(cs(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)T(!Kn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!K(u)&&d&&Kn(d))return[_a(d).query];{let h=[];return d&&(h=h.concat(My(d).map(_=>_.query))),ot(c,(_,v)=>{h=h.concat(v)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(cs(d),$l(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Sh(n)}node(){return this.node_}}class Ih{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ie(this.path_,e);return new Ih(this.syncTree_,n)}node(){return yh(this.syncTree_,this.path_)}}const Xx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},gm=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Jx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Zx(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Jx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},Zx=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},eR=function(t,e,n,r){return kh(e,new Ih(n,t),r)},zy=function(t,e,n){return kh(t,new Sh(e),n)};function kh(t,e,n){const r=t.getPriority().val(),i=gm(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=gm(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ne(l,Le(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ne(i))),o.forEachChild(ge,(l,a)=>{const u=kh(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Nh(t,e){let n=e instanceof te?e:new te(e),r=t,i=H(n);for(;i!==null;){const s=_i(r.node.children,i)||{children:{},childCount:0};r=new Th(i,r,s),n=ne(n),i=H(n)}return r}function Ai(t){return t.node.value}function By(t,e){t.node.value=e,jc(t)}function Wy(t){return t.node.childCount>0}function tR(t){return Ai(t)===void 0&&!Wy(t)}function wa(t,e){ot(t.node.children,(n,r)=>{e(new Th(n,t,r))})}function Hy(t,e,n,r){n&&!r&&e(t),wa(t,i=>{Hy(i,e,!0,r)}),n&&r&&e(t)}function nR(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ro(t){return new te(t.parent===null?t.name:ro(t.parent)+"/"+t.name)}function jc(t){t.parent!==null&&rR(t.parent,t.name,t)}function rR(t,e,n){const r=tR(n),i=mn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,jc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,jc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=/[\[\].#$\/\u0000-\u001F\u007F]/,sR=/[\[\].#$\u0000-\u001F\u007F]/,wu=10*1024*1024,Gy=function(t){return typeof t=="string"&&t.length!==0&&!iR.test(t)},Ky=function(t){return typeof t=="string"&&t.length!==0&&!sR.test(t)},oR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ky(t)},lR=function(t,e,n,r){r&&e===void 0||xh(Hd(t,"value"),e,n)},xh=function(t,e,n){const r=n instanceof te?new IN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+nr(r));if(typeof e=="function")throw new Error(t+"contains a function "+nr(r)+" with contents = "+e.toString());if(Kv(e))throw new Error(t+"contains "+e.toString()+" "+nr(r));if(typeof e=="string"&&e.length>wu/3&&ca(e)>wu)throw new Error(t+"contains a string greater than "+wu+" utf8 bytes "+nr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ot(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Gy(o)))throw new Error(t+" contains an invalid key ("+o+") "+nr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);kN(r,o),xh(t,l,r),TN(r)}),i&&s)throw new Error(t+' contains ".value" child '+nr(r)+" in addition to actual children.")}},qy=function(t,e,n,r){if(!(r&&n===void 0)&&!Ky(n))throw new Error(Hd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},aR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),qy(t,e,n,r)},uR=function(t,e){if(H(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},cR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Gy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!oR(n))throw new Error(Hd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Rh(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!lh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Qy(t,e,n){Rh(t,n),Yy(t,r=>lh(r,e))}function fn(t,e,n){Rh(t,n),Yy(t,r=>Rt(r,e)||Rt(e,r))}function Yy(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(hR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function hR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();pr&&ze("event: "+n.toString()),Pi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR="repo_interrupt",pR=25;class mR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ll(),this.transactionQueueTree_=new Th,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function gR(t,e,n){if(t.stats_=sh(t.repoInfo_),t.forceRestClient_||QT())t.server_=new Dl(t.repoInfo_,(r,i,s,o)=>{_m(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>vm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new on(t.repoInfo_,e,(r,i,s,o)=>{_m(t,r,i,s,o)},r=>{vm(t,r)},r=>{vR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=eN(t.repoInfo_,()=>new JN(t.stats_,t.server_)),t.infoData_=new KN,t.infoSyncTree_=new pm({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=va(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ah(t,"connected",!1),t.serverSyncTree_=new pm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);fn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function _R(t){const n=t.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ph(t){return Xx({timestamp:_R(t)})}function _m(t,e,n,r,i){t.dataUpdateCount++;const s=new te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Cl(n,u=>Le(u));o=Gx(t.serverSyncTree_,s,a,i)}else{const a=Le(n);o=Hx(t.serverSyncTree_,s,a,i)}else if(r){const a=Cl(n,u=>Le(u));o=zx(t.serverSyncTree_,s,a)}else{const a=Le(n);o=va(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Ea(t,s)),fn(t.eventQueue_,l,o)}function vm(t,e){Ah(t,"connected",e),e===!1&&wR(t)}function vR(t,e){ot(e,(n,r)=>{Ah(t,n,r)})}function Ah(t,e,n){const r=new te("/.info/"+e),i=Le(n);t.infoData_.updateSnapshot(r,i);const s=va(t.infoSyncTree_,r,i);fn(t.eventQueue_,r,s)}function Xy(t){return t.nextWriteId_++}function yR(t,e,n,r,i){Oh(t,"set",{path:e.toString(),value:n,priority:r});const s=Ph(t),o=Le(n,r),l=yh(t.serverSyncTree_,e),a=zy(o,l,s),u=Xy(t),d=Uy(t.serverSyncTree_,e,a,u,!0);Rh(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const v=h==="ok";v||it("set at "+e+" failed: "+h);const w=cr(t.serverSyncTree_,u,!v);fn(t.eventQueue_,e,w),SR(t,i,h,_)});const c=n0(t,e);Ea(t,c),fn(t.eventQueue_,c,[])}function wR(t){Oh(t,"onDisconnectEvents");const e=Ph(t),n=Ll();Oc(t.onDisconnect_,J(),(i,s)=>{const o=eR(i,s,t.serverSyncTree_,e);Iy(n,i,o)});let r=[];Oc(n,J(),(i,s)=>{r=r.concat(va(t.serverSyncTree_,i,s));const o=n0(t,i);Ea(t,o)}),t.onDisconnect_=Ll(),fn(t.eventQueue_,J(),r)}function ER(t,e,n){let r;H(e._path)===".info"?r=mm(t.infoSyncTree_,e,n):r=mm(t.serverSyncTree_,e,n),Qy(t.eventQueue_,e._path,r)}function ym(t,e,n){let r;H(e._path)===".info"?r=Uc(t.infoSyncTree_,e,n):r=Uc(t.serverSyncTree_,e,n),Qy(t.eventQueue_,e._path,r)}function CR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(fR)}function Oh(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ze(n,...e)}function SR(t,e,n,r){e&&Pi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Jy(t,e,n){return yh(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function Dh(t,e=t.transactionQueueTree_){if(e||Ca(t,e),Ai(e)){const n=e0(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&IR(t,ro(e),n)}else Wy(e)&&wa(e,n=>{Dh(t,n)})}function IR(t,e,n){const r=n.map(u=>u.currentWriteId),i=Jy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];T(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Ze(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Oh(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(cr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Ca(t,Nh(t.transactionQueueTree_,e)),Dh(t,t.transactionQueueTree_),fn(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)Pi(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{it("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Ea(t,e)}},o)}function Ea(t,e){const n=Zy(t,e),r=ro(n),i=e0(t,n);return kR(t,i,r),r}function kR(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ze(n,a.path);let d=!1,c;if(T(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(cr(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=pR)d=!0,c="maxretry",i=i.concat(cr(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Jy(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){xh("transaction failed: Data returned ",_,a.path);let v=Le(_);typeof _=="object"&&_!=null&&mn(_,".priority")||(v=v.updatePriority(h.getPriority()));const x=a.currentWriteId,p=Ph(t),f=zy(v,h,p);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=f,a.currentWriteId=Xy(t),o.splice(o.indexOf(x),1),i=i.concat(Uy(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(cr(t.serverSyncTree_,x,!0))}else d=!0,c="nodata",i=i.concat(cr(t.serverSyncTree_,a.currentWriteId,!0))}fn(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Ca(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Pi(r[l]);Dh(t,t.transactionQueueTree_)}function Zy(t,e){let n,r=t.transactionQueueTree_;for(n=H(e);n!==null&&Ai(r)===void 0;)r=Nh(r,n),e=ne(e),n=H(e);return r}function e0(t,e){const n=[];return t0(t,e,n),n.sort((r,i)=>r.order-i.order),n}function t0(t,e,n){const r=Ai(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);wa(e,i=>{t0(t,i,n)})}function Ca(t,e){const n=Ai(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,By(e,n.length>0?n:void 0)}wa(e,r=>{Ca(t,r)})}function n0(t,e){const n=ro(Zy(t,e)),r=Nh(t.transactionQueueTree_,e);return nR(r,i=>{Eu(t,i)}),Eu(t,r),Hy(r,i=>{Eu(t,i)}),n}function Eu(t,e){const n=Ai(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(cr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?By(e,void 0):n.length=s+1,fn(t.eventQueue_,ro(e),i);for(let o=0;o<r.length;o++)Pi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function NR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):it(`Invalid query segment '${n}' in query '${t}'`)}return e}const wm=function(t,e){const n=xR(t),r=n.namespace;n.domain==="firebase.com"&&hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||VT();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new sy(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new te(n.pathString)}},xR=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=TR(t.substring(d,c)));const h=NR(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class i0{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return K(this._path)?null:py(this._path)}get ref(){return new gn(this._repo,this._path)}get _queryIdentifier(){const e=rm(this._queryParams),n=rh(e);return n==="{}"?"default":n}get _queryObject(){return rm(this._queryParams)}isEqual(e){if(e=Mt(e),!(e instanceof Lh))return!1;const n=this._repo===e._repo,r=lh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+SN(this._path)}}class gn extends Lh{constructor(e,n){super(e,n,new dh,!1)}get parent(){const e=gy(this._path);return e===null?null:new gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Us{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new te(e),r=zl(this.ref,e);return new Us(this._node.getChild(n),r,ge)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Us(i,zl(this.ref,r),ge)))}hasChild(e){const n=new te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function s0(t,e){return t=Mt(t),t._checkNotDeleted("ref"),e!==void 0?zl(t._root,e):t._root}function zl(t,e){return t=Mt(t),H(t._path)===null?aR("child","path",e,!1):qy("child","path",e,!1),new gn(t._repo,Ie(t._path,e))}function PR(t,e){t=Mt(t),uR("set",t._path),lR("set",e,t._path,!1);const n=new ua;return yR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Mh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new r0("value",this,new Us(e.snapshotNode,new gn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new i0(this,e,n):null}matches(e){return e instanceof Mh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class bh{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new i0(this,e,n):null}createEvent(e,n){T(e.childName!=null,"Child events should have a childName.");const r=zl(new gn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new r0(e.type,this,new Us(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof bh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function AR(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{ym(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new RR(n,s||void 0),l=e==="value"?new Mh(o):new bh(e,o);return ER(t._repo,t,l),()=>ym(t._repo,t,l)}function OR(t,e,n,r){return AR(t,"value",e,n,r)}Dx(gn);jx(gn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR="FIREBASE_DATABASE_EMULATOR_HOST",Vc={};let LR=!1;function MR(t,e,n,r){t.repoInfo_=new sy(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function bR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ze("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=wm(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[DR]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=wm(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new li(li.OWNER):new XT(t.name,t.options,e);cR("Invalid Firebase Database URL",o),K(o.path)||hn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=UR(l,t,d,new YT(t.name,n));return new jR(c,t)}function FR(t,e){const n=Vc[e];(!n||n[t.key]!==t)&&hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),CR(t),delete n[t.key]}function UR(t,e,n,r){let i=Vc[e.name];i||(i={},Vc[e.name]=i);let s=i[t.toURLString()];return s&&hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new mR(t,LR,n,r),i[t.toURLString()]=s,s}class jR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(gR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gn(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(FR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hn("Cannot call "+e+" on a deleted database.")}}function VR(t=cv(),e){const n=qd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=hI("database");r&&$R(n,...r)}return n}function $R(t,e,n,r={}){t=Mt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&hn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new li(li.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:fI(r.mockUserToken,t.app.options.projectId);s=new li(o)}MR(i,e,n,s)}/**
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
 */function zR(t){MT(xi),vi(new Er("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return bR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),zn(Vp,$p,t),zn(Vp,$p,"esm2017")}on.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};on.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};zR();const BR={apiKey:"AIzaSyAF11X8psRyUd-y97wnYpvqmj_i3Rwmk6Q",authDomain:"fb24m-6c83c.firebaseapp.com",projectId:"fb24m-6c83c",storageBucket:"fb24m-6c83c.appspot.com",messagingSenderId:"779116236174",appId:"1:779116236174:web:7ee5e46d726d55f45128df",measurementId:"G-CMV1ZF0R91"},o0=uv(BR),WR=new Xt,l0=OT(o0);l0.languageCode="ru";const a0=VR(o0),HR=(t,e)=>{PR(s0(a0,t),e)},GR=t=>{const[e,n]=F.useState(),r=s0(a0,t);return OR(r,i=>{n(i.val())}),e},KR=()=>{const[t,e]=F.useState(!1),[n,r]=F.useState(!1),i=()=>{$k(l0,WR).then(s=>{const o=s.user;e(o)}).catch(s=>{console.log(s)})};if(console.log(t),!n){const s=GR("cards/0");console.log(s),r(!0)}return E.jsxs("div",{className:"container",children:[t?"":E.jsx(wr,{appearance:"Primary",onClick:i,children:"Войти с помощью Google"}),t&&(t==null?void 0:t.email)==="fakem1ner@yandex.ru"?E.jsx(E.Fragment,{children:E.jsx(wr,{onClick:()=>{HR("cards/0",{icon:"search",title:"Заголовок",description:"Описание"})},children:"Записать!"})}):"",t&&(t==null?void 0:t.email)!=="fakem1ner@yandex.ru"?"403 Доступ запрещен":""]})},qR=Cu.createRoot(document.getElementById("root")),QR=()=>(F.useEffect(()=>{document.querySelectorAll(".observe").forEach(e=>{xC.observe(e)})},[]),E.jsxs(NC,{children:[E.jsx(rI,{}),E.jsxs(kC,{children:[E.jsx(jo,{path:"/",Component:JS}),E.jsx(jo,{path:"/admin",Component:KR}),E.jsx(jo,{path:"/*",Component:()=>E.jsx(E.Fragment,{children:"404"})})]})]}));qR.render(E.jsx(jt.StrictMode,{children:E.jsx($E,{theme:zE,children:E.jsx(QR,{})})}));
