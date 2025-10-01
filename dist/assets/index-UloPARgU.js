(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))o(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const A of h.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&o(A)}).observe(document,{childList:!0,subtree:!0});function f(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(m){if(m.ep)return;m.ep=!0;const h=f(m);fetch(m.href,h)}})();function Gd(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var vr={exports:{}},wn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function T0(){if(Td)return wn;Td=1;var c=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function f(o,m,h){var A=null;if(h!==void 0&&(A=""+h),m.key!==void 0&&(A=""+m.key),"key"in m){h={};for(var N in m)N!=="key"&&(h[N]=m[N])}else h=m;return m=h.ref,{$$typeof:c,type:o,key:A,ref:m!==void 0?m:null,props:h}}return wn.Fragment=d,wn.jsx=f,wn.jsxs=f,wn}var wd;function w0(){return wd||(wd=1,vr.exports=T0()),vr.exports}var u=w0(),br={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function M0(){if(Md)return ee;Md=1;var c=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),A=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),_=Symbol.iterator;function U(v){return v===null||typeof v!="object"?null:(v=_&&v[_]||v["@@iterator"],typeof v=="function"?v:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Q={};function G(v,O,L){this.props=v,this.context=O,this.refs=Q,this.updater=L||J}G.prototype.isReactComponent={},G.prototype.setState=function(v,O){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,O,"setState")},G.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function k(){}k.prototype=G.prototype;function ue(v,O,L){this.props=v,this.context=O,this.refs=Q,this.updater=L||J}var I=ue.prototype=new k;I.constructor=ue,X(I,G.prototype),I.isPureReactComponent=!0;var xe=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},Oe=Object.prototype.hasOwnProperty;function Re(v,O,L,H,V,ce){return L=ce.ref,{$$typeof:c,type:v,key:O,ref:L!==void 0?L:null,props:ce}}function _e(v,O){return Re(v.type,O,void 0,void 0,void 0,v.props)}function Ne(v){return typeof v=="object"&&v!==null&&v.$$typeof===c}function Ie(v){var O={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(L){return O[L]})}var ot=/\/+/g;function Ge(v,O){return typeof v=="object"&&v!==null&&v.key!=null?Ie(""+v.key):O.toString(36)}function ja(){}function Na(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(ja,ja):(v.status="pending",v.then(function(O){v.status==="pending"&&(v.status="fulfilled",v.value=O)},function(O){v.status==="pending"&&(v.status="rejected",v.reason=O)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function Xe(v,O,L,H,V){var ce=typeof v;(ce==="undefined"||ce==="boolean")&&(v=null);var P=!1;if(v===null)P=!0;else switch(ce){case"bigint":case"string":case"number":P=!0;break;case"object":switch(v.$$typeof){case c:case d:P=!0;break;case T:return P=v._init,Xe(P(v._payload),O,L,H,V)}}if(P)return V=V(v),P=H===""?"."+Ge(v,0):H,xe(V)?(L="",P!=null&&(L=P.replace(ot,"$&/")+"/"),Xe(V,O,L,"",function(Ft){return Ft})):V!=null&&(Ne(V)&&(V=_e(V,L+(V.key==null||v&&v.key===V.key?"":(""+V.key).replace(ot,"$&/")+"/")+P)),O.push(V)),1;P=0;var et=H===""?".":H+":";if(xe(v))for(var be=0;be<v.length;be++)H=v[be],ce=et+Ge(H,be),P+=Xe(H,O,L,ce,V);else if(be=U(v),typeof be=="function")for(v=be.call(v),be=0;!(H=v.next()).done;)H=H.value,ce=et+Ge(H,be++),P+=Xe(H,O,L,ce,V);else if(ce==="object"){if(typeof v.then=="function")return Xe(Na(v),O,L,H,V);throw O=String(v),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return P}function M(v,O,L){if(v==null)return v;var H=[],V=0;return Xe(v,H,"","",function(ce){return O.call(L,ce,V++)}),H}function B(v){if(v._status===-1){var O=v._result;O=O(),O.then(function(L){(v._status===0||v._status===-1)&&(v._status=1,v._result=L)},function(L){(v._status===0||v._status===-1)&&(v._status=2,v._result=L)}),v._status===-1&&(v._status=0,v._result=O)}if(v._status===1)return v._result.default;throw v._result}var $=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function ge(){}return ee.Children={map:M,forEach:function(v,O,L){M(v,function(){O.apply(this,arguments)},L)},count:function(v){var O=0;return M(v,function(){O++}),O},toArray:function(v){return M(v,function(O){return O})||[]},only:function(v){if(!Ne(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ee.Component=G,ee.Fragment=f,ee.Profiler=m,ee.PureComponent=ue,ee.StrictMode=o,ee.Suspense=x,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ee.__COMPILER_RUNTIME={__proto__:null,c:function(v){return F.H.useMemoCache(v)}},ee.cache=function(v){return function(){return v.apply(null,arguments)}},ee.cloneElement=function(v,O,L){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var H=X({},v.props),V=v.key,ce=void 0;if(O!=null)for(P in O.ref!==void 0&&(ce=void 0),O.key!==void 0&&(V=""+O.key),O)!Oe.call(O,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&O.ref===void 0||(H[P]=O[P]);var P=arguments.length-2;if(P===1)H.children=L;else if(1<P){for(var et=Array(P),be=0;be<P;be++)et[be]=arguments[be+2];H.children=et}return Re(v.type,V,void 0,void 0,ce,H)},ee.createContext=function(v){return v={$$typeof:A,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:h,_context:v},v},ee.createElement=function(v,O,L){var H,V={},ce=null;if(O!=null)for(H in O.key!==void 0&&(ce=""+O.key),O)Oe.call(O,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(V[H]=O[H]);var P=arguments.length-2;if(P===1)V.children=L;else if(1<P){for(var et=Array(P),be=0;be<P;be++)et[be]=arguments[be+2];V.children=et}if(v&&v.defaultProps)for(H in P=v.defaultProps,P)V[H]===void 0&&(V[H]=P[H]);return Re(v,ce,void 0,void 0,null,V)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(v){return{$$typeof:N,render:v}},ee.isValidElement=Ne,ee.lazy=function(v){return{$$typeof:T,_payload:{_status:-1,_result:v},_init:B}},ee.memo=function(v,O){return{$$typeof:p,type:v,compare:O===void 0?null:O}},ee.startTransition=function(v){var O=F.T,L={};F.T=L;try{var H=v(),V=F.S;V!==null&&V(L,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(ge,$)}catch(ce){$(ce)}finally{F.T=O}},ee.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ee.use=function(v){return F.H.use(v)},ee.useActionState=function(v,O,L){return F.H.useActionState(v,O,L)},ee.useCallback=function(v,O){return F.H.useCallback(v,O)},ee.useContext=function(v){return F.H.useContext(v)},ee.useDebugValue=function(){},ee.useDeferredValue=function(v,O){return F.H.useDeferredValue(v,O)},ee.useEffect=function(v,O,L){var H=F.H;if(typeof L=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(v,O)},ee.useId=function(){return F.H.useId()},ee.useImperativeHandle=function(v,O,L){return F.H.useImperativeHandle(v,O,L)},ee.useInsertionEffect=function(v,O){return F.H.useInsertionEffect(v,O)},ee.useLayoutEffect=function(v,O){return F.H.useLayoutEffect(v,O)},ee.useMemo=function(v,O){return F.H.useMemo(v,O)},ee.useOptimistic=function(v,O){return F.H.useOptimistic(v,O)},ee.useReducer=function(v,O,L){return F.H.useReducer(v,O,L)},ee.useRef=function(v){return F.H.useRef(v)},ee.useState=function(v){return F.H.useState(v)},ee.useSyncExternalStore=function(v,O,L){return F.H.useSyncExternalStore(v,O,L)},ee.useTransition=function(){return F.H.useTransition()},ee.version="19.1.1",ee}var Rd;function Tr(){return Rd||(Rd=1,br.exports=M0()),br.exports}var R=Tr();const R0=Gd(R);var yr={exports:{}},Mn={},xr={exports:{}},Sr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function D0(){return Dd||(Dd=1,function(c){function d(M,B){var $=M.length;M.push(B);e:for(;0<$;){var ge=$-1>>>1,v=M[ge];if(0<m(v,B))M[ge]=B,M[$]=v,$=ge;else break e}}function f(M){return M.length===0?null:M[0]}function o(M){if(M.length===0)return null;var B=M[0],$=M.pop();if($!==B){M[0]=$;e:for(var ge=0,v=M.length,O=v>>>1;ge<O;){var L=2*(ge+1)-1,H=M[L],V=L+1,ce=M[V];if(0>m(H,$))V<v&&0>m(ce,H)?(M[ge]=ce,M[V]=$,ge=V):(M[ge]=H,M[L]=$,ge=L);else if(V<v&&0>m(ce,$))M[ge]=ce,M[V]=$,ge=V;else break e}}return B}function m(M,B){var $=M.sortIndex-B.sortIndex;return $!==0?$:M.id-B.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;c.unstable_now=function(){return h.now()}}else{var A=Date,N=A.now();c.unstable_now=function(){return A.now()-N}}var x=[],p=[],T=1,_=null,U=3,J=!1,X=!1,Q=!1,G=!1,k=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function xe(M){for(var B=f(p);B!==null;){if(B.callback===null)o(p);else if(B.startTime<=M)o(p),B.sortIndex=B.expirationTime,d(x,B);else break;B=f(p)}}function F(M){if(Q=!1,xe(M),!X)if(f(x)!==null)X=!0,Oe||(Oe=!0,Ge());else{var B=f(p);B!==null&&Xe(F,B.startTime-M)}}var Oe=!1,Re=-1,_e=5,Ne=-1;function Ie(){return G?!0:!(c.unstable_now()-Ne<_e)}function ot(){if(G=!1,Oe){var M=c.unstable_now();Ne=M;var B=!0;try{e:{X=!1,Q&&(Q=!1,ue(Re),Re=-1),J=!0;var $=U;try{t:{for(xe(M),_=f(x);_!==null&&!(_.expirationTime>M&&Ie());){var ge=_.callback;if(typeof ge=="function"){_.callback=null,U=_.priorityLevel;var v=ge(_.expirationTime<=M);if(M=c.unstable_now(),typeof v=="function"){_.callback=v,xe(M),B=!0;break t}_===f(x)&&o(x),xe(M)}else o(x);_=f(x)}if(_!==null)B=!0;else{var O=f(p);O!==null&&Xe(F,O.startTime-M),B=!1}}break e}finally{_=null,U=$,J=!1}B=void 0}}finally{B?Ge():Oe=!1}}}var Ge;if(typeof I=="function")Ge=function(){I(ot)};else if(typeof MessageChannel<"u"){var ja=new MessageChannel,Na=ja.port2;ja.port1.onmessage=ot,Ge=function(){Na.postMessage(null)}}else Ge=function(){k(ot,0)};function Xe(M,B){Re=k(function(){M(c.unstable_now())},B)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(M){M.callback=null},c.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<M?Math.floor(1e3/M):5},c.unstable_getCurrentPriorityLevel=function(){return U},c.unstable_next=function(M){switch(U){case 1:case 2:case 3:var B=3;break;default:B=U}var $=U;U=B;try{return M()}finally{U=$}},c.unstable_requestPaint=function(){G=!0},c.unstable_runWithPriority=function(M,B){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=U;U=M;try{return B()}finally{U=$}},c.unstable_scheduleCallback=function(M,B,$){var ge=c.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ge+$:ge):$=ge,M){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=$+v,M={id:T++,callback:B,priorityLevel:M,startTime:$,expirationTime:v,sortIndex:-1},$>ge?(M.sortIndex=$,d(p,M),f(x)===null&&M===f(p)&&(Q?(ue(Re),Re=-1):Q=!0,Xe(F,$-ge))):(M.sortIndex=v,d(x,M),X||J||(X=!0,Oe||(Oe=!0,Ge()))),M},c.unstable_shouldYield=Ie,c.unstable_wrapCallback=function(M){var B=U;return function(){var $=U;U=B;try{return M.apply(this,arguments)}finally{U=$}}}}(Sr)),Sr}var Cd;function C0(){return Cd||(Cd=1,xr.exports=D0()),xr.exports}var jr={exports:{}},Ze={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function O0(){if(Od)return Ze;Od=1;var c=Tr();function d(x){var p="https://react.dev/errors/"+x;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)p+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+x+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var o={d:{f,r:function(){throw Error(d(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function h(x,p,T){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:_==null?null:""+_,children:x,containerInfo:p,implementation:T}}var A=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function N(x,p){if(x==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ze.createPortal=function(x,p){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(d(299));return h(x,p,null,T)},Ze.flushSync=function(x){var p=A.T,T=o.p;try{if(A.T=null,o.p=2,x)return x()}finally{A.T=p,o.p=T,o.d.f()}},Ze.preconnect=function(x,p){typeof x=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(x,p))},Ze.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},Ze.preinit=function(x,p){if(typeof x=="string"&&p&&typeof p.as=="string"){var T=p.as,_=N(T,p.crossOrigin),U=typeof p.integrity=="string"?p.integrity:void 0,J=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;T==="style"?o.d.S(x,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:U,fetchPriority:J}):T==="script"&&o.d.X(x,{crossOrigin:_,integrity:U,fetchPriority:J,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ze.preinitModule=function(x,p){if(typeof x=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var T=N(p.as,p.crossOrigin);o.d.M(x,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(x)},Ze.preload=function(x,p){if(typeof x=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var T=p.as,_=N(T,p.crossOrigin);o.d.L(x,T,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ze.preloadModule=function(x,p){if(typeof x=="string")if(p){var T=N(p.as,p.crossOrigin);o.d.m(x,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(x)},Ze.requestFormReset=function(x){o.d.r(x)},Ze.unstable_batchedUpdates=function(x,p){return x(p)},Ze.useFormState=function(x,p,T){return A.H.useFormState(x,p,T)},Ze.useFormStatus=function(){return A.H.useHostTransitionStatus()},Ze.version="19.1.1",Ze}var _d;function _0(){if(_d)return jr.exports;_d=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(d){console.error(d)}}return c(),jr.exports=O0(),jr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function U0(){if(Ud)return Mn;Ud=1;var c=C0(),d=Tr(),f=_0();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function A(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function N(e){if(h(e)!==e)throw Error(o(188))}function x(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return N(n),e;if(i===l)return N(n),t;i=i.sibling}throw Error(o(188))}if(a.return!==l.return)a=n,l=i;else{for(var r=!1,s=n.child;s;){if(s===a){r=!0,a=n,l=i;break}if(s===l){r=!0,l=n,a=i;break}s=s.sibling}if(!r){for(s=i.child;s;){if(s===a){r=!0,a=i,l=n;break}if(s===l){r=!0,l=i,a=n;break}s=s.sibling}if(!r)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,_=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),J=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),ue=Symbol.for("react.consumer"),I=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Ne=Symbol.for("react.activity"),Ie=Symbol.for("react.memo_cache_sentinel"),ot=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=ot&&e[ot]||e["@@iterator"],typeof e=="function"?e:null)}var ja=Symbol.for("react.client.reference");function Na(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ja?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case G:return"Profiler";case Q:return"StrictMode";case F:return"Suspense";case Oe:return"SuspenseList";case Ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case J:return"Portal";case I:return(e.displayName||"Context")+".Provider";case ue:return(e._context.displayName||"Context")+".Consumer";case xe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Re:return t=e.displayName||null,t!==null?t:Na(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return Na(e(t))}catch{}}return null}var Xe=Array.isArray,M=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ge=[],v=-1;function O(e){return{current:e}}function L(e){0>v||(e.current=ge[v],ge[v]=null,v--)}function H(e,t){v++,ge[v]=e.current,e.current=t}var V=O(null),ce=O(null),P=O(null),et=O(null);function be(e,t){switch(H(P,t),H(ce,e),H(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?td(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=td(t),e=ad(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(V),H(V,e)}function Ft(){L(V),L(ce),L(P)}function au(e){e.memoizedState!==null&&H(et,e);var t=V.current,a=ad(t,e.type);t!==a&&(H(ce,e),H(V,a))}function Un(e){ce.current===e&&(L(V),L(ce)),et.current===e&&(L(et),Nn._currentValue=$)}var lu=Object.prototype.hasOwnProperty,nu=c.unstable_scheduleCallback,iu=c.unstable_cancelCallback,im=c.unstable_shouldYield,um=c.unstable_requestPaint,Nt=c.unstable_now,cm=c.unstable_getCurrentPriorityLevel,Or=c.unstable_ImmediatePriority,_r=c.unstable_UserBlockingPriority,kn=c.unstable_NormalPriority,rm=c.unstable_LowPriority,Ur=c.unstable_IdlePriority,sm=c.log,om=c.unstable_setDisableYieldValue,Rl=null,tt=null;function Pt(e){if(typeof sm=="function"&&om(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(Rl,e)}catch{}}var at=Math.clz32?Math.clz32:mm,fm=Math.log,dm=Math.LN2;function mm(e){return e>>>=0,e===0?32:31-(fm(e)/dm|0)|0}var Hn=256,Bn=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ln(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Ea(l):(r&=s,r!==0?n=Ea(r):a||(a=s&~e,a!==0&&(n=Ea(a))))):(s=l&~i,s!==0?n=Ea(s):r!==0?n=Ea(r):a||(a=l&~e,a!==0&&(n=Ea(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Dl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function hm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kr(){var e=Hn;return Hn<<=1,(Hn&4194048)===0&&(Hn=256),e}function Hr(){var e=Bn;return Bn<<=1,(Bn&62914560)===0&&(Bn=4194304),e}function uu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Cl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gm(e,t,a,l,n,i){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,g=e.expirationTimes,j=e.hiddenUpdates;for(a=r&~a;0<a;){var w=31-at(a),C=1<<w;s[w]=0,g[w]=-1;var E=j[w];if(E!==null)for(j[w]=null,w=0;w<E.length;w++){var z=E[w];z!==null&&(z.lane&=-536870913)}a&=~C}l!==0&&Br(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function Br(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-at(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Lr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-at(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function cu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ru(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qr(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Sd(e.type))}function pm(e,t){var a=B.p;try{return B.p=e,t()}finally{B.p=a}}var It=Math.random().toString(36).slice(2),Qe="__reactFiber$"+It,Je="__reactProps$"+It,Xa="__reactContainer$"+It,su="__reactEvents$"+It,vm="__reactListeners$"+It,bm="__reactHandles$"+It,Yr="__reactResources$"+It,Ol="__reactMarker$"+It;function ou(e){delete e[Qe],delete e[Je],delete e[su],delete e[vm],delete e[bm]}function Qa(e){var t=e[Qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Xa]||a[Qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ud(e);e!==null;){if(a=e[Qe])return a;e=ud(e)}return t}e=a,a=e.parentNode}return null}function Va(e){if(e=e[Qe]||e[Xa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function _l(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Za(e){var t=e[Yr];return t||(t=e[Yr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ue(e){e[Ol]=!0}var Gr=new Set,Xr={};function za(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(Xr[e]=t,e=0;e<t.length;e++)Gr.add(t[e])}var ym=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qr={},Vr={};function xm(e){return lu.call(Vr,e)?!0:lu.call(Qr,e)?!1:ym.test(e)?Vr[e]=!0:(Qr[e]=!0,!1)}function qn(e,t,a){if(xm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Yn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function _t(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var fu,Zr;function Ja(e){if(fu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);fu=t&&t[1]||"",Zr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fu+e+Zr}var du=!1;function mu(e,t){if(!e||du)return"";du=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(z){var E=z}Reflect.construct(e,[],C)}else{try{C.call()}catch(z){E=z}e.call(C.prototype)}}else{try{throw Error()}catch(z){E=z}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(z){if(z&&E&&typeof z.stack=="string")return[z.stack,E.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],s=i[1];if(r&&s){var g=r.split(`
`),j=s.split(`
`);for(n=l=0;l<g.length&&!g[l].includes("DetermineComponentFrameRoot");)l++;for(;n<j.length&&!j[n].includes("DetermineComponentFrameRoot");)n++;if(l===g.length||n===j.length)for(l=g.length-1,n=j.length-1;1<=l&&0<=n&&g[l]!==j[n];)n--;for(;1<=l&&0<=n;l--,n--)if(g[l]!==j[n]){if(l!==1||n!==1)do if(l--,n--,0>n||g[l]!==j[n]){var w=`
`+g[l].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=l&&0<=n);break}}}finally{du=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ja(a):""}function Sm(e){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return mu(e.type,!1);case 11:return mu(e.type.render,!1);case 1:return mu(e.type,!0);case 31:return Ja("Activity");default:return""}}function Kr(e){try{var t="";do t+=Sm(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jm(e){var t=Jr(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){l=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(r){l=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gn(e){e._valueTracker||(e._valueTracker=jm(e))}function $r(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Jr(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nm=/[\n"\\]/g;function dt(e){return e.replace(Nm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function hu(e,t,a,l,n,i,r,s){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ft(t)):e.value!==""+ft(t)&&(e.value=""+ft(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?gu(e,r,ft(t)):a!=null?gu(e,r,ft(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+ft(s):e.removeAttribute("name")}function Wr(e,t,a,l,n,i,r,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+ft(a):"",t=t!=null?""+ft(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r)}function gu(e,t,a){t==="number"&&Xn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $a(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ft(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Fr(e,t,a){if(t!=null&&(t=""+ft(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ft(a):""}function Pr(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(Xe(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ft(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function Wa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Em=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ir(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Em.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function es(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Ir(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Ir(e,i,t[i])}function pu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Am=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qn(e){return Am.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var vu=null;function bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,Pa=null;function ts(e){var t=Va(e);if(t&&(e=t.stateNode)){var a=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(hu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Je]||null;if(!n)throw Error(o(90));hu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&$r(l)}break e;case"textarea":Fr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&$a(e,!!a.multiple,t,!1)}}}var yu=!1;function as(e,t,a){if(yu)return e(t,a);yu=!0;try{var l=e(t);return l}finally{if(yu=!1,(Fa!==null||Pa!==null)&&(Mi(),Fa&&(t=Fa,e=Pa,Pa=Fa=null,ts(t),e)))for(t=0;t<e.length;t++)ts(e[t])}}function Ul(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Je]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(Ut)try{var kl={};Object.defineProperty(kl,"passive",{get:function(){xu=!0}}),window.addEventListener("test",kl,kl),window.removeEventListener("test",kl,kl)}catch{xu=!1}var ea=null,Su=null,Vn=null;function ls(){if(Vn)return Vn;var e,t=Su,a=t.length,l,n="value"in ea?ea.value:ea.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var r=a-e;for(l=1;l<=r&&t[a-l]===n[i-l];l++);return Vn=n.slice(e,1<l?1-l:void 0)}function Zn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kn(){return!0}function ns(){return!1}function $e(e){function t(a,l,n,i,r){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Kn:ns,this.isPropagationStopped=ns,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),t}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jn=$e(Aa),Hl=T({},Aa,{view:0,detail:0}),Tm=$e(Hl),ju,Nu,Bl,$n=T({},Hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bl&&(Bl&&e.type==="mousemove"?(ju=e.screenX-Bl.screenX,Nu=e.screenY-Bl.screenY):Nu=ju=0,Bl=e),ju)},movementY:function(e){return"movementY"in e?e.movementY:Nu}}),is=$e($n),wm=T({},$n,{dataTransfer:0}),Mm=$e(wm),Rm=T({},Hl,{relatedTarget:0}),Eu=$e(Rm),Dm=T({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),Cm=$e(Dm),Om=T({},Aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_m=$e(Om),Um=T({},Aa,{data:0}),us=$e(Um),km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bm[e])?!!t[e]:!1}function zu(){return Lm}var qm=T({},Hl,{key:function(e){if(e.key){var t=km[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zu,charCode:function(e){return e.type==="keypress"?Zn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ym=$e(qm),Gm=T({},$n,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cs=$e(Gm),Xm=T({},Hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zu}),Qm=$e(Xm),Vm=T({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zm=$e(Vm),Km=T({},$n,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jm=$e(Km),$m=T({},Aa,{newState:0,oldState:0}),Wm=$e($m),Fm=[9,13,27,32],Au=Ut&&"CompositionEvent"in window,Ll=null;Ut&&"documentMode"in document&&(Ll=document.documentMode);var Pm=Ut&&"TextEvent"in window&&!Ll,rs=Ut&&(!Au||Ll&&8<Ll&&11>=Ll),ss=" ",os=!1;function fs(e,t){switch(e){case"keyup":return Fm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ds(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function Im(e,t){switch(e){case"compositionend":return ds(t);case"keypress":return t.which!==32?null:(os=!0,ss);case"textInput":return e=t.data,e===ss&&os?null:e;default:return null}}function eh(e,t){if(Ia)return e==="compositionend"||!Au&&fs(e,t)?(e=ls(),Vn=Su=ea=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rs&&t.locale!=="ko"?null:t.data;default:return null}}var th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!th[e.type]:t==="textarea"}function hs(e,t,a,l){Fa?Pa?Pa.push(l):Pa=[l]:Fa=l,t=Ui(t,"onChange"),0<t.length&&(a=new Jn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ql=null,Yl=null;function ah(e){Wf(e,0)}function Wn(e){var t=_l(e);if($r(t))return e}function gs(e,t){if(e==="change")return t}var ps=!1;if(Ut){var Tu;if(Ut){var wu="oninput"in document;if(!wu){var vs=document.createElement("div");vs.setAttribute("oninput","return;"),wu=typeof vs.oninput=="function"}Tu=wu}else Tu=!1;ps=Tu&&(!document.documentMode||9<document.documentMode)}function bs(){ql&&(ql.detachEvent("onpropertychange",ys),Yl=ql=null)}function ys(e){if(e.propertyName==="value"&&Wn(Yl)){var t=[];hs(t,Yl,e,bu(e)),as(ah,t)}}function lh(e,t,a){e==="focusin"?(bs(),ql=t,Yl=a,ql.attachEvent("onpropertychange",ys)):e==="focusout"&&bs()}function nh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wn(Yl)}function ih(e,t){if(e==="click")return Wn(t)}function uh(e,t){if(e==="input"||e==="change")return Wn(t)}function ch(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:ch;function Gl(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!lu.call(t,n)||!lt(e[n],t[n]))return!1}return!0}function xs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ss(e,t){var a=xs(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xs(a)}}function js(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?js(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ns(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Xn(e.document)}return t}function Mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var rh=Ut&&"documentMode"in document&&11>=document.documentMode,el=null,Ru=null,Xl=null,Du=!1;function Es(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||el==null||el!==Xn(l)||(l=el,"selectionStart"in l&&Mu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xl&&Gl(Xl,l)||(Xl=l,l=Ui(Ru,"onSelect"),0<l.length&&(t=new Jn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=el)))}function Ta(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tl={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionrun:Ta("Transition","TransitionRun"),transitionstart:Ta("Transition","TransitionStart"),transitioncancel:Ta("Transition","TransitionCancel"),transitionend:Ta("Transition","TransitionEnd")},Cu={},zs={};Ut&&(zs=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function wa(e){if(Cu[e])return Cu[e];if(!tl[e])return e;var t=tl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in zs)return Cu[e]=t[a];return e}var As=wa("animationend"),Ts=wa("animationiteration"),ws=wa("animationstart"),sh=wa("transitionrun"),oh=wa("transitionstart"),fh=wa("transitioncancel"),Ms=wa("transitionend"),Rs=new Map,Ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ou.push("scrollEnd");function xt(e,t){Rs.set(e,t),za(t,[e])}var Ds=new WeakMap;function mt(e,t){if(typeof e=="object"&&e!==null){var a=Ds.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Kr(t)},Ds.set(e,t),t)}return{value:e,source:t,stack:Kr(t)}}var ht=[],al=0,_u=0;function Fn(){for(var e=al,t=_u=al=0;t<e;){var a=ht[t];ht[t++]=null;var l=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var i=ht[t];if(ht[t++]=null,l!==null&&n!==null){var r=l.pending;r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n}i!==0&&Cs(a,n,i)}}function Pn(e,t,a,l){ht[al++]=e,ht[al++]=t,ht[al++]=a,ht[al++]=l,_u|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Uu(e,t,a,l){return Pn(e,t,a,l),In(e)}function ll(e,t){return Pn(e,null,null,t),In(e)}function Cs(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-at(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function In(e){if(50<gn)throw gn=0,Yc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nl={};function dh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,a,l){return new dh(e,t,a,l)}function ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kt(e,t){var a=e.alternate;return a===null?(a=nt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Os(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ei(e,t,a,l,n,i){var r=0;if(l=e,typeof e=="function")ku(e)&&(r=1);else if(typeof e=="string")r=h0(e,a,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ne:return e=nt(31,a,t,n),e.elementType=Ne,e.lanes=i,e;case X:return Ma(a.children,n,i,t);case Q:r=8,n|=24;break;case G:return e=nt(12,a,t,n|2),e.elementType=G,e.lanes=i,e;case F:return e=nt(13,a,t,n),e.elementType=F,e.lanes=i,e;case Oe:return e=nt(19,a,t,n),e.elementType=Oe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:case I:r=10;break e;case ue:r=9;break e;case xe:r=11;break e;case Re:r=14;break e;case _e:r=16,l=null;break e}r=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=nt(r,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ma(e,t,a,l){return e=nt(7,e,l,t),e.lanes=a,e}function Hu(e,t,a){return e=nt(6,e,null,t),e.lanes=a,e}function Bu(e,t,a){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var il=[],ul=0,ti=null,ai=0,gt=[],pt=0,Ra=null,Ht=1,Bt="";function Da(e,t){il[ul++]=ai,il[ul++]=ti,ti=e,ai=t}function _s(e,t,a){gt[pt++]=Ht,gt[pt++]=Bt,gt[pt++]=Ra,Ra=e;var l=Ht;e=Bt;var n=32-at(l)-1;l&=~(1<<n),a+=1;var i=32-at(t)+n;if(30<i){var r=n-n%5;i=(l&(1<<r)-1).toString(32),l>>=r,n-=r,Ht=1<<32-at(t)+n|a<<n|l,Bt=i+e}else Ht=1<<i|a<<n|l,Bt=e}function Lu(e){e.return!==null&&(Da(e,1),_s(e,1,0))}function qu(e){for(;e===ti;)ti=il[--ul],il[ul]=null,ai=il[--ul],il[ul]=null;for(;e===Ra;)Ra=gt[--pt],gt[pt]=null,Bt=gt[--pt],gt[pt]=null,Ht=gt[--pt],gt[pt]=null}var Ke=null,Ee=null,se=!1,Ca=null,Et=!1,Yu=Error(o(519));function Oa(e){var t=Error(o(418,""));throw Zl(mt(t,e)),Yu}function Us(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Qe]=e,t[Je]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<vn.length;a++)ne(vn[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),Wr(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Gn(t);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),Pr(t,l.value,l.defaultValue,l.children),Gn(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||ed(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=ki),t=!0):t=!1,t||Oa(e)}function ks(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Ke=Ke.return}}function Ql(e){if(e!==Ke)return!1;if(!se)return ks(e),se=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||lr(e.type,e.memoizedProps)),a=!a),a&&Ee&&Oa(e),ks(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ee=jt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ee=null}}else t===27?(t=Ee,pa(e.type)?(e=cr,cr=null,Ee=e):Ee=t):Ee=Ke?jt(e.stateNode.nextSibling):null;return!0}function Vl(){Ee=Ke=null,se=!1}function Hs(){var e=Ca;return e!==null&&(Pe===null?Pe=e:Pe.push.apply(Pe,e),Ca=null),e}function Zl(e){Ca===null?Ca=[e]:Ca.push(e)}var Gu=O(null),_a=null,Lt=null;function ta(e,t,a){H(Gu,t._currentValue),t._currentValue=a}function qt(e){e._currentValue=Gu.current,L(Gu)}function Xu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Qu(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var g=0;g<t.length;g++)if(s.context===t[g]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Xu(i.return,a,e),l||(r=null);break e}i=s.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(o(341));r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),Xu(r,a,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function Kl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(o(387));if(r=r.memoizedProps,r!==null){var s=n.type;lt(n.pendingProps.value,r.value)||(e!==null?e.push(s):e=[s])}}else if(n===et.current){if(r=n.alternate,r===null)throw Error(o(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Nn):e=[Nn])}n=n.return}e!==null&&Qu(t,e,a,l),t.flags|=262144}function li(e){for(e=e.firstContext;e!==null;){if(!lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){_a=e,Lt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return Bs(_a,e)}function ni(e,t){return _a===null&&Ua(e),Bs(e,t)}function Bs(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Lt===null){if(e===null)throw Error(o(308));Lt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Lt=Lt.next=t;return a}var mh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},hh=c.unstable_scheduleCallback,gh=c.unstable_NormalPriority,De={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vu(){return{controller:new mh,data:new Map,refCount:0}}function Jl(e){e.refCount--,e.refCount===0&&hh(gh,function(){e.controller.abort()})}var $l=null,Zu=0,cl=0,rl=null;function ph(e,t){if($l===null){var a=$l=[];Zu=0,cl=Jc(),rl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Zu++,t.then(Ls,Ls),t}function Ls(){if(--Zu===0&&$l!==null){rl!==null&&(rl.status="fulfilled");var e=$l;$l=null,cl=0,rl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function vh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var qs=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&ph(e,t),qs!==null&&qs(e,t)};var ka=O(null);function Ku(){var e=ka.current;return e!==null?e:ve.pooledCache}function ii(e,t){t===null?H(ka,ka.current):H(ka,t.pool)}function Ys(){var e=Ku();return e===null?null:{parent:De._currentValue,pool:e}}var Wl=Error(o(460)),Gs=Error(o(474)),ui=Error(o(542)),Ju={then:function(){}};function Xs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ci(){}function Qs(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ci,ci),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zs(e),e;default:if(typeof t.status=="string")t.then(ci,ci);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zs(e),e}throw Fl=t,Wl}}var Fl=null;function Vs(){if(Fl===null)throw Error(o(459));var e=Fl;return Fl=null,e}function Zs(e){if(e===Wl||e===ui)throw Error(o(483))}var aa=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function na(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(oe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=In(e),Cs(e,null,a),t}return Pn(e,l,t,a),In(e)}function Pl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Lr(e,a)}}function Fu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Pu=!1;function Il(){if(Pu){var e=rl;if(e!==null)throw e}}function en(e,t,a,l){Pu=!1;var n=e.updateQueue;aa=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var g=s,j=g.next;g.next=null,r===null?i=j:r.next=j,r=g;var w=e.alternate;w!==null&&(w=w.updateQueue,s=w.lastBaseUpdate,s!==r&&(s===null?w.firstBaseUpdate=j:s.next=j,w.lastBaseUpdate=g))}if(i!==null){var C=n.baseState;r=0,w=j=g=null,s=i;do{var E=s.lane&-536870913,z=E!==s.lane;if(z?(ie&E)===E:(l&E)===E){E!==0&&E===cl&&(Pu=!0),w!==null&&(w=w.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var W=e,Z=s;E=t;var he=a;switch(Z.tag){case 1:if(W=Z.payload,typeof W=="function"){C=W.call(he,C,E);break e}C=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=Z.payload,E=typeof W=="function"?W.call(he,C,E):W,E==null)break e;C=T({},C,E);break e;case 2:aa=!0}}E=s.callback,E!==null&&(e.flags|=64,z&&(e.flags|=8192),z=n.callbacks,z===null?n.callbacks=[E]:z.push(E))}else z={lane:E,tag:s.tag,payload:s.payload,callback:s.callback,next:null},w===null?(j=w=z,g=C):w=w.next=z,r|=E;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;z=s,s=z.next,z.next=null,n.lastBaseUpdate=z,n.shared.pending=null}}while(!0);w===null&&(g=C),n.baseState=g,n.firstBaseUpdate=j,n.lastBaseUpdate=w,i===null&&(n.shared.lanes=0),da|=r,e.lanes=r,e.memoizedState=C}}function Ks(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Js(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ks(a[e],t)}var sl=O(null),ri=O(0);function $s(e,t){e=Kt,H(ri,e),H(sl,t),Kt=e|t.baseLanes}function Iu(){H(ri,Kt),H(sl,sl.current)}function ec(){Kt=ri.current,L(sl),L(ri)}var ia=0,te=null,de=null,we=null,si=!1,ol=!1,Ha=!1,oi=0,tn=0,fl=null,bh=0;function Ae(){throw Error(o(321))}function tc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!lt(e[a],t[a]))return!1;return!0}function ac(e,t,a,l,n,i){return ia=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Oo:_o,Ha=!1,i=a(l,n),Ha=!1,ol&&(i=Fs(t,a,l,n)),Ws(e),i}function Ws(e){M.H=pi;var t=de!==null&&de.next!==null;if(ia=0,we=de=te=null,si=!1,tn=0,fl=null,t)throw Error(o(300));e===null||ke||(e=e.dependencies,e!==null&&li(e)&&(ke=!0))}function Fs(e,t,a,l){te=e;var n=0;do{if(ol&&(fl=null),tn=0,ol=!1,25<=n)throw Error(o(301));if(n+=1,we=de=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=zh,i=t(a,l)}while(ol);return i}function yh(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?an(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(te.flags|=1024),t}function lc(){var e=oi!==0;return oi=0,e}function nc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ic(e){if(si){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}si=!1}ia=0,we=de=te=null,ol=!1,tn=oi=0,fl=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?te.memoizedState=we=e:we=we.next=e,we}function Me(){if(de===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=we===null?te.memoizedState:we.next;if(t!==null)we=t,de=e;else{if(e===null)throw te.alternate===null?Error(o(467)):Error(o(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},we===null?te.memoizedState=we=e:we=we.next=e}return we}function uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function an(e){var t=tn;return tn+=1,fl===null&&(fl=[]),e=Qs(fl,e,t),t=te,(we===null?t.memoizedState:we.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Oo:_o),e}function fi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return an(e);if(e.$$typeof===I)return Ve(e)}throw Error(o(438,String(e)))}function cc(e){var t=null,a=te.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=uc(),te.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ie;return t.index++,a}function Yt(e,t){return typeof t=="function"?t(e):t}function di(e){var t=Me();return rc(t,de,e)}function rc(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=r=null,g=null,j=t,w=!1;do{var C=j.lane&-536870913;if(C!==j.lane?(ie&C)===C:(ia&C)===C){var E=j.revertLane;if(E===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),C===cl&&(w=!0);else if((ia&E)===E){j=j.next,E===cl&&(w=!0);continue}else C={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},g===null?(s=g=C,r=i):g=g.next=C,te.lanes|=E,da|=E;C=j.action,Ha&&a(i,C),i=j.hasEagerState?j.eagerState:a(i,C)}else E={lane:C,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},g===null?(s=g=E,r=i):g=g.next=E,te.lanes|=C,da|=C;j=j.next}while(j!==null&&j!==t);if(g===null?r=i:g.next=s,!lt(i,e.memoizedState)&&(ke=!0,w&&(a=rl,a!==null)))throw a;e.memoizedState=i,e.baseState=r,e.baseQueue=g,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function sc(e){var t=Me(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var r=n=n.next;do i=e(i,r.action),r=r.next;while(r!==n);lt(i,t.memoizedState)||(ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Ps(e,t,a){var l=te,n=Me(),i=se;if(i){if(a===void 0)throw Error(o(407));a=a()}else a=t();var r=!lt((de||n).memoizedState,a);r&&(n.memoizedState=a,ke=!0),n=n.queue;var s=to.bind(null,l,n,e);if(ln(2048,8,s,[e]),n.getSnapshot!==t||r||we!==null&&we.memoizedState.tag&1){if(l.flags|=2048,dl(9,mi(),eo.bind(null,l,n,a,t),null),ve===null)throw Error(o(349));i||(ia&124)!==0||Is(l,t,a)}return a}function Is(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=te.updateQueue,t===null?(t=uc(),te.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function eo(e,t,a,l){t.value=a,t.getSnapshot=l,ao(t)&&lo(e)}function to(e,t,a){return a(function(){ao(t)&&lo(e)})}function ao(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!lt(e,a)}catch{return!0}}function lo(e){var t=ll(e,2);t!==null&&st(t,e,2)}function oc(e){var t=We();if(typeof e=="function"){var a=e;if(e=a(),Ha){Pt(!0);try{a()}finally{Pt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},t}function no(e,t,a,l){return e.baseState=a,rc(e,de,typeof l=="function"?l:Yt)}function xh(e,t,a,l,n){if(gi(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};M.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,io(t,i)):(i.next=a.next,t.pending=a.next=i)}}function io(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=M.T,r={};M.T=r;try{var s=a(n,l),g=M.S;g!==null&&g(r,s),uo(e,t,s)}catch(j){fc(e,t,j)}finally{M.T=i}}else try{i=a(n,l),uo(e,t,i)}catch(j){fc(e,t,j)}}function uo(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){co(e,t,l)},function(l){return fc(e,t,l)}):co(e,t,a)}function co(e,t,a){t.status="fulfilled",t.value=a,ro(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,io(e,a)))}function fc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,ro(t),t=t.next;while(t!==l)}e.action=null}function ro(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function so(e,t){return t}function oo(e,t){if(se){var a=ve.formState;if(a!==null){e:{var l=te;if(se){if(Ee){t:{for(var n=Ee,i=Et;n.nodeType!==8;){if(!i){n=null;break t}if(n=jt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ee=jt(n.nextSibling),l=n.data==="F!";break e}}Oa(l)}l=!1}l&&(t=a[0])}}return a=We(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},a.queue=l,a=Ro.bind(null,te,l),l.dispatch=a,l=oc(!1),i=pc.bind(null,te,!1,l.queue),l=We(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=xh.bind(null,te,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function fo(e){var t=Me();return mo(t,de,e)}function mo(e,t,a){if(t=rc(e,t,so)[0],e=di(Yt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=an(t)}catch(r){throw r===Wl?ui:r}else l=t;t=Me();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(te.flags|=2048,dl(9,mi(),Sh.bind(null,n,a),null)),[l,i,e]}function Sh(e,t){e.action=t}function ho(e){var t=Me(),a=de;if(a!==null)return mo(t,a,e);Me(),t=t.memoizedState,a=Me();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function dl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=te.updateQueue,t===null&&(t=uc(),te.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function mi(){return{destroy:void 0,resource:void 0}}function go(){return Me().memoizedState}function hi(e,t,a,l){var n=We();l=l===void 0?null:l,te.flags|=e,n.memoizedState=dl(1|t,mi(),a,l)}function ln(e,t,a,l){var n=Me();l=l===void 0?null:l;var i=n.memoizedState.inst;de!==null&&l!==null&&tc(l,de.memoizedState.deps)?n.memoizedState=dl(t,i,a,l):(te.flags|=e,n.memoizedState=dl(1|t,i,a,l))}function po(e,t){hi(8390656,8,e,t)}function vo(e,t){ln(2048,8,e,t)}function bo(e,t){return ln(4,2,e,t)}function yo(e,t){return ln(4,4,e,t)}function xo(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function So(e,t,a){a=a!=null?a.concat([e]):null,ln(4,4,xo.bind(null,t,e),a)}function dc(){}function jo(e,t){var a=Me();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&tc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function No(e,t){var a=Me();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&tc(t,l[1]))return l[0];if(l=e(),Ha){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[l,t],l}function mc(e,t,a){return a===void 0||(ia&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Tf(),te.lanes|=e,da|=e,a)}function Eo(e,t,a,l){return lt(a,t)?a:sl.current!==null?(e=mc(e,a,l),lt(e,t)||(ke=!0),e):(ia&42)===0?(ke=!0,e.memoizedState=a):(e=Tf(),te.lanes|=e,da|=e,t)}function zo(e,t,a,l,n){var i=B.p;B.p=i!==0&&8>i?i:8;var r=M.T,s={};M.T=s,pc(e,!1,t,a);try{var g=n(),j=M.S;if(j!==null&&j(s,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var w=vh(g,l);nn(e,t,w,rt(e))}else nn(e,t,l,rt(e))}catch(C){nn(e,t,{then:function(){},status:"rejected",reason:C},rt())}finally{B.p=i,M.T=r}}function jh(){}function hc(e,t,a,l){if(e.tag!==5)throw Error(o(476));var n=Ao(e).queue;zo(e,n,t,$,a===null?jh:function(){return To(e),a(l)})}function Ao(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function To(e){var t=Ao(e).next.queue;nn(e,t,{},rt())}function gc(){return Ve(Nn)}function wo(){return Me().memoizedState}function Mo(){return Me().memoizedState}function Nh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=rt();e=la(a);var l=na(t,e,a);l!==null&&(st(l,t,a),Pl(l,t,a)),t={cache:Vu()},e.payload=t;return}t=t.return}}function Eh(e,t,a){var l=rt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},gi(e)?Do(t,a):(a=Uu(e,t,a,l),a!==null&&(st(a,e,l),Co(a,t,l)))}function Ro(e,t,a){var l=rt();nn(e,t,a,l)}function nn(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(gi(e))Do(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,s=i(r,a);if(n.hasEagerState=!0,n.eagerState=s,lt(s,r))return Pn(e,t,n,0),ve===null&&Fn(),!1}catch{}finally{}if(a=Uu(e,t,n,l),a!==null)return st(a,e,l),Co(a,t,l),!0}return!1}function pc(e,t,a,l){if(l={lane:2,revertLane:Jc(),action:l,hasEagerState:!1,eagerState:null,next:null},gi(e)){if(t)throw Error(o(479))}else t=Uu(e,a,l,2),t!==null&&st(t,e,2)}function gi(e){var t=e.alternate;return e===te||t!==null&&t===te}function Do(e,t){ol=si=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Co(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Lr(e,a)}}var pi={readContext:Ve,use:fi,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae},Oo={readContext:Ve,use:fi,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:po,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,hi(4194308,4,xo.bind(null,t,e),a)},useLayoutEffect:function(e,t){return hi(4194308,4,e,t)},useInsertionEffect:function(e,t){hi(4,2,e,t)},useMemo:function(e,t){var a=We();t=t===void 0?null:t;var l=e();if(Ha){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=We();if(a!==void 0){var n=a(t);if(Ha){Pt(!0);try{a(t)}finally{Pt(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Eh.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:function(e){e=oc(e);var t=e.queue,a=Ro.bind(null,te,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:dc,useDeferredValue:function(e,t){var a=We();return mc(a,e,t)},useTransition:function(){var e=oc(!1);return e=zo.bind(null,te,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=te,n=We();if(se){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),ve===null)throw Error(o(349));(ie&124)!==0||Is(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,po(to.bind(null,l,i,e),[e]),l.flags|=2048,dl(9,mi(),eo.bind(null,l,i,a,t),null),a},useId:function(){var e=We(),t=ve.identifierPrefix;if(se){var a=Bt,l=Ht;a=(l&~(1<<32-at(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=oi++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=bh++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:gc,useFormState:oo,useActionState:oo,useOptimistic:function(e){var t=We();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=pc.bind(null,te,!0,a),a.dispatch=t,[e,t]},useMemoCache:cc,useCacheRefresh:function(){return We().memoizedState=Nh.bind(null,te)}},_o={readContext:Ve,use:fi,useCallback:jo,useContext:Ve,useEffect:vo,useImperativeHandle:So,useInsertionEffect:bo,useLayoutEffect:yo,useMemo:No,useReducer:di,useRef:go,useState:function(){return di(Yt)},useDebugValue:dc,useDeferredValue:function(e,t){var a=Me();return Eo(a,de.memoizedState,e,t)},useTransition:function(){var e=di(Yt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:Ps,useId:wo,useHostTransitionStatus:gc,useFormState:fo,useActionState:fo,useOptimistic:function(e,t){var a=Me();return no(a,de,e,t)},useMemoCache:cc,useCacheRefresh:Mo},zh={readContext:Ve,use:fi,useCallback:jo,useContext:Ve,useEffect:vo,useImperativeHandle:So,useInsertionEffect:bo,useLayoutEffect:yo,useMemo:No,useReducer:sc,useRef:go,useState:function(){return sc(Yt)},useDebugValue:dc,useDeferredValue:function(e,t){var a=Me();return de===null?mc(a,e,t):Eo(a,de.memoizedState,e,t)},useTransition:function(){var e=sc(Yt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:Ps,useId:wo,useHostTransitionStatus:gc,useFormState:ho,useActionState:ho,useOptimistic:function(e,t){var a=Me();return de!==null?no(a,de,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:cc,useCacheRefresh:Mo},ml=null,un=0;function vi(e){var t=un;return un+=1,ml===null&&(ml=[]),Qs(ml,e,t)}function cn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function bi(e,t){throw t.$$typeof===_?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Uo(e){var t=e._init;return t(e._payload)}function ko(e){function t(y,b){if(e){var S=y.deletions;S===null?(y.deletions=[b],y.flags|=16):S.push(b)}}function a(y,b){if(!e)return null;for(;b!==null;)t(y,b),b=b.sibling;return null}function l(y){for(var b=new Map;y!==null;)y.key!==null?b.set(y.key,y):b.set(y.index,y),y=y.sibling;return b}function n(y,b){return y=kt(y,b),y.index=0,y.sibling=null,y}function i(y,b,S){return y.index=S,e?(S=y.alternate,S!==null?(S=S.index,S<b?(y.flags|=67108866,b):S):(y.flags|=67108866,b)):(y.flags|=1048576,b)}function r(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function s(y,b,S,D){return b===null||b.tag!==6?(b=Hu(S,y.mode,D),b.return=y,b):(b=n(b,S),b.return=y,b)}function g(y,b,S,D){var q=S.type;return q===X?w(y,b,S.props.children,D,S.key):b!==null&&(b.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===_e&&Uo(q)===b.type)?(b=n(b,S.props),cn(b,S),b.return=y,b):(b=ei(S.type,S.key,S.props,null,y.mode,D),cn(b,S),b.return=y,b)}function j(y,b,S,D){return b===null||b.tag!==4||b.stateNode.containerInfo!==S.containerInfo||b.stateNode.implementation!==S.implementation?(b=Bu(S,y.mode,D),b.return=y,b):(b=n(b,S.children||[]),b.return=y,b)}function w(y,b,S,D,q){return b===null||b.tag!==7?(b=Ma(S,y.mode,D,q),b.return=y,b):(b=n(b,S),b.return=y,b)}function C(y,b,S){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Hu(""+b,y.mode,S),b.return=y,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case U:return S=ei(b.type,b.key,b.props,null,y.mode,S),cn(S,b),S.return=y,S;case J:return b=Bu(b,y.mode,S),b.return=y,b;case _e:var D=b._init;return b=D(b._payload),C(y,b,S)}if(Xe(b)||Ge(b))return b=Ma(b,y.mode,S,null),b.return=y,b;if(typeof b.then=="function")return C(y,vi(b),S);if(b.$$typeof===I)return C(y,ni(y,b),S);bi(y,b)}return null}function E(y,b,S,D){var q=b!==null?b.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return q!==null?null:s(y,b,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return S.key===q?g(y,b,S,D):null;case J:return S.key===q?j(y,b,S,D):null;case _e:return q=S._init,S=q(S._payload),E(y,b,S,D)}if(Xe(S)||Ge(S))return q!==null?null:w(y,b,S,D,null);if(typeof S.then=="function")return E(y,b,vi(S),D);if(S.$$typeof===I)return E(y,b,ni(y,S),D);bi(y,S)}return null}function z(y,b,S,D,q){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return y=y.get(S)||null,s(b,y,""+D,q);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case U:return y=y.get(D.key===null?S:D.key)||null,g(b,y,D,q);case J:return y=y.get(D.key===null?S:D.key)||null,j(b,y,D,q);case _e:var ae=D._init;return D=ae(D._payload),z(y,b,S,D,q)}if(Xe(D)||Ge(D))return y=y.get(S)||null,w(b,y,D,q,null);if(typeof D.then=="function")return z(y,b,S,vi(D),q);if(D.$$typeof===I)return z(y,b,S,ni(b,D),q);bi(b,D)}return null}function W(y,b,S,D){for(var q=null,ae=null,Y=b,K=b=0,Be=null;Y!==null&&K<S.length;K++){Y.index>K?(Be=Y,Y=null):Be=Y.sibling;var re=E(y,Y,S[K],D);if(re===null){Y===null&&(Y=Be);break}e&&Y&&re.alternate===null&&t(y,Y),b=i(re,b,K),ae===null?q=re:ae.sibling=re,ae=re,Y=Be}if(K===S.length)return a(y,Y),se&&Da(y,K),q;if(Y===null){for(;K<S.length;K++)Y=C(y,S[K],D),Y!==null&&(b=i(Y,b,K),ae===null?q=Y:ae.sibling=Y,ae=Y);return se&&Da(y,K),q}for(Y=l(Y);K<S.length;K++)Be=z(Y,y,K,S[K],D),Be!==null&&(e&&Be.alternate!==null&&Y.delete(Be.key===null?K:Be.key),b=i(Be,b,K),ae===null?q=Be:ae.sibling=Be,ae=Be);return e&&Y.forEach(function(Sa){return t(y,Sa)}),se&&Da(y,K),q}function Z(y,b,S,D){if(S==null)throw Error(o(151));for(var q=null,ae=null,Y=b,K=b=0,Be=null,re=S.next();Y!==null&&!re.done;K++,re=S.next()){Y.index>K?(Be=Y,Y=null):Be=Y.sibling;var Sa=E(y,Y,re.value,D);if(Sa===null){Y===null&&(Y=Be);break}e&&Y&&Sa.alternate===null&&t(y,Y),b=i(Sa,b,K),ae===null?q=Sa:ae.sibling=Sa,ae=Sa,Y=Be}if(re.done)return a(y,Y),se&&Da(y,K),q;if(Y===null){for(;!re.done;K++,re=S.next())re=C(y,re.value,D),re!==null&&(b=i(re,b,K),ae===null?q=re:ae.sibling=re,ae=re);return se&&Da(y,K),q}for(Y=l(Y);!re.done;K++,re=S.next())re=z(Y,y,K,re.value,D),re!==null&&(e&&re.alternate!==null&&Y.delete(re.key===null?K:re.key),b=i(re,b,K),ae===null?q=re:ae.sibling=re,ae=re);return e&&Y.forEach(function(A0){return t(y,A0)}),se&&Da(y,K),q}function he(y,b,S,D){if(typeof S=="object"&&S!==null&&S.type===X&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case U:e:{for(var q=S.key;b!==null;){if(b.key===q){if(q=S.type,q===X){if(b.tag===7){a(y,b.sibling),D=n(b,S.props.children),D.return=y,y=D;break e}}else if(b.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===_e&&Uo(q)===b.type){a(y,b.sibling),D=n(b,S.props),cn(D,S),D.return=y,y=D;break e}a(y,b);break}else t(y,b);b=b.sibling}S.type===X?(D=Ma(S.props.children,y.mode,D,S.key),D.return=y,y=D):(D=ei(S.type,S.key,S.props,null,y.mode,D),cn(D,S),D.return=y,y=D)}return r(y);case J:e:{for(q=S.key;b!==null;){if(b.key===q)if(b.tag===4&&b.stateNode.containerInfo===S.containerInfo&&b.stateNode.implementation===S.implementation){a(y,b.sibling),D=n(b,S.children||[]),D.return=y,y=D;break e}else{a(y,b);break}else t(y,b);b=b.sibling}D=Bu(S,y.mode,D),D.return=y,y=D}return r(y);case _e:return q=S._init,S=q(S._payload),he(y,b,S,D)}if(Xe(S))return W(y,b,S,D);if(Ge(S)){if(q=Ge(S),typeof q!="function")throw Error(o(150));return S=q.call(S),Z(y,b,S,D)}if(typeof S.then=="function")return he(y,b,vi(S),D);if(S.$$typeof===I)return he(y,b,ni(y,S),D);bi(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,b!==null&&b.tag===6?(a(y,b.sibling),D=n(b,S),D.return=y,y=D):(a(y,b),D=Hu(S,y.mode,D),D.return=y,y=D),r(y)):a(y,b)}return function(y,b,S,D){try{un=0;var q=he(y,b,S,D);return ml=null,q}catch(Y){if(Y===Wl||Y===ui)throw Y;var ae=nt(29,Y,null,y.mode);return ae.lanes=D,ae.return=y,ae}finally{}}}var hl=ko(!0),Ho=ko(!1),vt=O(null),zt=null;function ua(e){var t=e.alternate;H(Ce,Ce.current&1),H(vt,e),zt===null&&(t===null||sl.current!==null||t.memoizedState!==null)&&(zt=e)}function Bo(e){if(e.tag===22){if(H(Ce,Ce.current),H(vt,e),zt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(zt=e)}}else ca()}function ca(){H(Ce,Ce.current),H(vt,vt.current)}function Gt(e){L(vt),zt===e&&(zt=null),L(Ce)}var Ce=O(0);function yi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ur(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function vc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:T({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var bc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=rt(),n=la(l);n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(st(t,e,l),Pl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=rt(),n=la(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=na(e,n,l),t!==null&&(st(t,e,l),Pl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=rt(),l=la(a);l.tag=2,t!=null&&(l.callback=t),t=na(e,l,a),t!==null&&(st(t,e,a),Pl(t,e,a))}};function Lo(e,t,a,l,n,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!Gl(a,l)||!Gl(n,i):!0}function qo(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&bc.enqueueReplaceState(t,t.state,null)}function Ba(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=T({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var xi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Yo(e){xi(e)}function Go(e){console.error(e)}function Xo(e){xi(e)}function Si(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Qo(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function yc(e,t,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){Si(e,t)},a}function Vo(e){return e=la(e),e.tag=3,e}function Zo(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Qo(t,a,l)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Qo(t,a,l),typeof n!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Ah(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Kl(t,a,n,!0),a=vt.current,a!==null){switch(a.tag){case 13:return zt===null?Xc():a.alternate===null&&ze===0&&(ze=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Ju?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Vc(e,l,n)),!1;case 22:return a.flags|=65536,l===Ju?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Vc(e,l,n)),!1}throw Error(o(435,a.tag))}return Vc(e,l,n),Xc(),!1}if(se)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Yu&&(e=Error(o(422),{cause:l}),Zl(mt(e,a)))):(l!==Yu&&(t=Error(o(423),{cause:l}),Zl(mt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=mt(l,a),n=yc(e.stateNode,l,n),Fu(e,n),ze!==4&&(ze=2)),!1;var i=Error(o(520),{cause:l});if(i=mt(i,a),hn===null?hn=[i]:hn.push(i),ze!==4&&(ze=2),t===null)return!0;l=mt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=yc(a.stateNode,l,e),Fu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ma===null||!ma.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Vo(n),Zo(n,e,a,l),Fu(a,n),!1}a=a.return}while(a!==null);return!1}var Ko=Error(o(461)),ke=!1;function Le(e,t,a,l){t.child=e===null?Ho(t,null,a,l):hl(t,e.child,a,l)}function Jo(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var r={};for(var s in l)s!=="ref"&&(r[s]=l[s])}else r=l;return Ua(t),l=ac(e,t,a,r,i,n),s=lc(),e!==null&&!ke?(nc(e,t,n),Xt(e,t,n)):(se&&s&&Lu(t),t.flags|=1,Le(e,t,l,n),t.child)}function $o(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!ku(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Wo(e,t,i,l,n)):(e=ei(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Tc(e,n)){var r=i.memoizedProps;if(a=a.compare,a=a!==null?a:Gl,a(r,l)&&e.ref===t.ref)return Xt(e,t,n)}return t.flags|=1,e=kt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Wo(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Gl(i,l)&&e.ref===t.ref)if(ke=!1,t.pendingProps=l=i,Tc(e,n))(e.flags&131072)!==0&&(ke=!0);else return t.lanes=e.lanes,Xt(e,t,n)}return xc(e,t,a,l,n)}function Fo(e,t,a){var l=t.pendingProps,n=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~l}else t.childLanes=0,t.child=null;return Po(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ii(t,i!==null?i.cachePool:null),i!==null?$s(t,i):Iu(),Bo(t);else return t.lanes=t.childLanes=536870912,Po(e,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(ii(t,i.cachePool),$s(t,i),ca(),t.memoizedState=null):(e!==null&&ii(t,null),Iu(),ca());return Le(e,t,n,a),t.child}function Po(e,t,a,l){var n=Ku();return n=n===null?null:{parent:De._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&ii(t,null),Iu(),Bo(t),e!==null&&Kl(e,t,l,!0),null}function ji(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function xc(e,t,a,l,n){return Ua(t),a=ac(e,t,a,l,void 0,n),l=lc(),e!==null&&!ke?(nc(e,t,n),Xt(e,t,n)):(se&&l&&Lu(t),t.flags|=1,Le(e,t,a,n),t.child)}function Io(e,t,a,l,n,i){return Ua(t),t.updateQueue=null,a=Fs(t,l,a,n),Ws(e),l=lc(),e!==null&&!ke?(nc(e,t,i),Xt(e,t,i)):(se&&l&&Lu(t),t.flags|=1,Le(e,t,a,i),t.child)}function ef(e,t,a,l,n){if(Ua(t),t.stateNode===null){var i=nl,r=a.contextType;typeof r=="object"&&r!==null&&(i=Ve(r)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=bc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},$u(t),r=a.contextType,i.context=typeof r=="object"&&r!==null?Ve(r):nl,i.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(vc(t,a,r,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&bc.enqueueReplaceState(i,i.state,null),en(t,l,i,n),Il(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,g=Ba(a,s);i.props=g;var j=i.context,w=a.contextType;r=nl,typeof w=="object"&&w!==null&&(r=Ve(w));var C=a.getDerivedStateFromProps;w=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,w||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||j!==r)&&qo(t,i,l,r),aa=!1;var E=t.memoizedState;i.state=E,en(t,l,i,n),Il(),j=t.memoizedState,s||E!==j||aa?(typeof C=="function"&&(vc(t,a,C,l),j=t.memoizedState),(g=aa||Lo(t,a,g,l,E,j,r))?(w||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=j),i.props=l,i.state=j,i.context=r,l=g):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Wu(e,t),r=t.memoizedProps,w=Ba(a,r),i.props=w,C=t.pendingProps,E=i.context,j=a.contextType,g=nl,typeof j=="object"&&j!==null&&(g=Ve(j)),s=a.getDerivedStateFromProps,(j=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==C||E!==g)&&qo(t,i,l,g),aa=!1,E=t.memoizedState,i.state=E,en(t,l,i,n),Il();var z=t.memoizedState;r!==C||E!==z||aa||e!==null&&e.dependencies!==null&&li(e.dependencies)?(typeof s=="function"&&(vc(t,a,s,l),z=t.memoizedState),(w=aa||Lo(t,a,w,l,E,z,g)||e!==null&&e.dependencies!==null&&li(e.dependencies))?(j||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,z,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,z,g)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=z),i.props=l,i.state=z,i.context=g,l=w):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,ji(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=hl(t,e.child,null,n),t.child=hl(t,null,a,n)):Le(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Xt(e,t,n),e}function tf(e,t,a,l){return Vl(),t.flags|=256,Le(e,t,a,l),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jc(e){return{baseLanes:e,cachePool:Ys()}}function Nc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=bt),e}function af(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),r&&(n=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(n?ua(t):ca(),se){var s=Ee,g;if(g=s){e:{for(g=s,s=Et;g.nodeType!==8;){if(!s){s=null;break e}if(g=jt(g.nextSibling),g===null){s=null;break e}}s=g}s!==null?(t.memoizedState={dehydrated:s,treeContext:Ra!==null?{id:Ht,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},g=nt(18,null,null,0),g.stateNode=s,g.return=t,t.child=g,Ke=t,Ee=null,g=!0):g=!1}g||Oa(t)}if(s=t.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return ur(s)?t.lanes=32:t.lanes=536870912,null;Gt(t)}return s=l.children,l=l.fallback,n?(ca(),n=t.mode,s=Ni({mode:"hidden",children:s},n),l=Ma(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,n=t.child,n.memoizedState=jc(a),n.childLanes=Nc(e,r,a),t.memoizedState=Sc,l):(ua(t),Ec(t,s))}if(g=e.memoizedState,g!==null&&(s=g.dehydrated,s!==null)){if(i)t.flags&256?(ua(t),t.flags&=-257,t=zc(e,t,a)):t.memoizedState!==null?(ca(),t.child=e.child,t.flags|=128,t=null):(ca(),n=l.fallback,s=t.mode,l=Ni({mode:"visible",children:l.children},s),n=Ma(n,s,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,hl(t,e.child,null,a),l=t.child,l.memoizedState=jc(a),l.childLanes=Nc(e,r,a),t.memoizedState=Sc,t=n);else if(ua(t),ur(s)){if(r=s.nextSibling&&s.nextSibling.dataset,r)var j=r.dgst;r=j,l=Error(o(419)),l.stack="",l.digest=r,Zl({value:l,source:null,stack:null}),t=zc(e,t,a)}else if(ke||Kl(e,t,a,!1),r=(a&e.childLanes)!==0,ke||r){if(r=ve,r!==null&&(l=a&-a,l=(l&42)!==0?1:cu(l),l=(l&(r.suspendedLanes|a))!==0?0:l,l!==0&&l!==g.retryLane))throw g.retryLane=l,ll(e,l),st(r,e,l),Ko;s.data==="$?"||Xc(),t=zc(e,t,a)}else s.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,Ee=jt(s.nextSibling),Ke=t,se=!0,Ca=null,Et=!1,e!==null&&(gt[pt++]=Ht,gt[pt++]=Bt,gt[pt++]=Ra,Ht=e.id,Bt=e.overflow,Ra=t),t=Ec(t,l.children),t.flags|=4096);return t}return n?(ca(),n=l.fallback,s=t.mode,g=e.child,j=g.sibling,l=kt(g,{mode:"hidden",children:l.children}),l.subtreeFlags=g.subtreeFlags&65011712,j!==null?n=kt(j,n):(n=Ma(n,s,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,s=e.child.memoizedState,s===null?s=jc(a):(g=s.cachePool,g!==null?(j=De._currentValue,g=g.parent!==j?{parent:j,pool:j}:g):g=Ys(),s={baseLanes:s.baseLanes|a,cachePool:g}),n.memoizedState=s,n.childLanes=Nc(e,r,a),t.memoizedState=Sc,l):(ua(t),a=e.child,e=a.sibling,a=kt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function Ec(e,t){return t=Ni({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ni(e,t){return e=nt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function zc(e,t,a){return hl(t,e.child,null,a),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Xu(e.return,t,a)}function Ac(e,t,a,l,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n)}function nf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;if(Le(e,t,l.children,a),l=Ce.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lf(e,a,t);else if(e.tag===19)lf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(H(Ce,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&yi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Ac(t,!1,n,a,i);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&yi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Ac(t,!0,a,null,i);break;case"together":Ac(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),da|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Kl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=kt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=kt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Tc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&li(e)))}function Th(e,t,a){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ta(t,De,e.memoizedState.cache),Vl();break;case 27:case 5:au(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ua(t),t.flags|=128,null):(a&t.child.childLanes)!==0?af(e,t,a):(ua(t),e=Xt(e,t,a),e!==null?e.sibling:null);ua(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Kl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return nf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),H(Ce,Ce.current),l)break;return null;case 22:case 23:return t.lanes=0,Fo(e,t,a);case 24:ta(t,De,e.memoizedState.cache)}return Xt(e,t,a)}function uf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ke=!0;else{if(!Tc(e,a)&&(t.flags&128)===0)return ke=!1,Th(e,t,a);ke=(e.flags&131072)!==0}else ke=!1,se&&(t.flags&1048576)!==0&&_s(t,ai,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")ku(l)?(e=Ba(l,e),t.tag=1,t=ef(null,t,l,e,a)):(t.tag=0,t=xc(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===xe){t.tag=11,t=Jo(null,t,l,e,a);break e}else if(n===Re){t.tag=14,t=$o(null,t,l,e,a);break e}}throw t=Na(l)||l,Error(o(306,t,""))}}return t;case 0:return xc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ba(l,t.pendingProps),ef(e,t,l,n,a);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Wu(e,t),en(t,l,null,a);var r=t.memoizedState;if(l=r.cache,ta(t,De,l),l!==i.cache&&Qu(t,[De],a,!0),Il(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=tf(e,t,l,a);break e}else if(l!==n){n=mt(Error(o(424)),t),Zl(n),t=tf(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ee=jt(e.firstChild),Ke=t,se=!0,Ca=null,Et=!0,a=Ho(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vl(),l===n){t=Xt(e,t,a);break e}Le(e,t,l,a)}t=t.child}return t;case 26:return ji(e,t),e===null?(a=od(t.type,null,t.pendingProps,null))?t.memoizedState=a:se||(a=t.type,e=t.pendingProps,l=Hi(P.current).createElement(a),l[Qe]=t,l[Je]=e,Ye(l,a,e),Ue(l),t.stateNode=l):t.memoizedState=od(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return au(t),e===null&&se&&(l=t.stateNode=cd(t.type,t.pendingProps,P.current),Ke=t,Et=!0,n=Ee,pa(t.type)?(cr=n,Ee=jt(l.firstChild)):Ee=n),Le(e,t,t.pendingProps.children,a),ji(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((n=l=Ee)&&(l=t0(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Ke=t,Ee=jt(l.firstChild),Et=!1,n=!0):n=!1),n||Oa(t)),au(t),n=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,lr(n,i)?l=null:r!==null&&lr(n,r)&&(t.flags|=32),t.memoizedState!==null&&(n=ac(e,t,yh,null,null,a),Nn._currentValue=n),ji(e,t),Le(e,t,l,a),t.child;case 6:return e===null&&se&&((e=a=Ee)&&(a=a0(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Ke=t,Ee=null,e=!0):e=!1),e||Oa(t)),null;case 13:return af(e,t,a);case 4:return be(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=hl(t,null,l,a):Le(e,t,l,a),t.child;case 11:return Jo(e,t,t.type,t.pendingProps,a);case 7:return Le(e,t,t.pendingProps,a),t.child;case 8:return Le(e,t,t.pendingProps.children,a),t.child;case 12:return Le(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ta(t,t.type,l.value),Le(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ua(t),n=Ve(n),l=l(n),t.flags|=1,Le(e,t,l,a),t.child;case 14:return $o(e,t,t.type,t.pendingProps,a);case 15:return Wo(e,t,t.type,t.pendingProps,a);case 19:return nf(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=Ni(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=kt(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Fo(e,t,a);case 24:return Ua(t),l=Ve(De),e===null?(n=Ku(),n===null&&(n=ve,i=Vu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},$u(t),ta(t,De,n)):((e.lanes&a)!==0&&(Wu(e,t),en(t,null,null,a),Il()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ta(t,De,l)):(l=i.cache,ta(t,De,l),l!==n.cache&&Qu(t,[De],a,!0))),Le(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Qt(e){e.flags|=4}function cf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gd(t)){if(t=vt.current,t!==null&&((ie&4194048)===ie?zt!==null:(ie&62914560)!==ie&&(ie&536870912)===0||t!==zt))throw Fl=Ju,Gs;e.flags|=8192}}function Ei(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Hr():536870912,e.lanes|=t,bl|=t)}function rn(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function wh(e,t,a){var l=t.pendingProps;switch(qu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),qt(De),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ql(t)?Qt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Hs())),Se(t),null;case 26:return a=t.memoizedState,e===null?(Qt(t),a!==null?(Se(t),cf(t,a)):(Se(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Qt(t),Se(t),cf(t,a)):(Se(t),t.flags&=-16777217):(e.memoizedProps!==l&&Qt(t),Se(t),t.flags&=-16777217),null;case 27:Un(t),a=P.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Se(t),null}e=V.current,Ql(t)?Us(t):(e=cd(n,l,a),t.stateNode=e,Qt(t))}return Se(t),null;case 5:if(Un(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Se(t),null}if(e=V.current,Ql(t))Us(t);else{switch(n=Hi(P.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[Qe]=t,e[Je]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Ye(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Qt(t)}}return Se(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=P.current,Ql(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ke,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||ed(e.nodeValue,a)),e||Oa(t)}else e=Hi(e).createTextNode(l),e[Qe]=t,t.stateNode=e}return Se(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ql(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[Qe]=t}else Vl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),n=!1}else n=Hs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Gt(t),t):(Gt(t),null)}if(Gt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Ei(t,t.updateQueue),Se(t),null;case 4:return Ft(),e===null&&Pc(t.stateNode.containerInfo),Se(t),null;case 10:return qt(t.type),Se(t),null;case 19:if(L(Ce),n=t.memoizedState,n===null)return Se(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)rn(n,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=yi(e),i!==null){for(t.flags|=128,rn(n,!1),e=i.updateQueue,t.updateQueue=e,Ei(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Os(a,e),a=a.sibling;return H(Ce,Ce.current&1|2),t.child}e=e.sibling}n.tail!==null&&Nt()>Ti&&(t.flags|=128,l=!0,rn(n,!1),t.lanes=4194304)}else{if(!l)if(e=yi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ei(t,e),rn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!se)return Se(t),null}else 2*Nt()-n.renderingStartTime>Ti&&a!==536870912&&(t.flags|=128,l=!0,rn(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Nt(),t.sibling=null,e=Ce.current,H(Ce,l?e&1|2:e&1),t):(Se(t),null);case 22:case 23:return Gt(t),ec(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),a=t.updateQueue,a!==null&&Ei(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&L(ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qt(De),Se(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Mh(e,t){switch(qu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qt(De),Ft(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Un(t),null;case 13:if(Gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Vl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Ce),null;case 4:return Ft(),null;case 10:return qt(t.type),null;case 22:case 23:return Gt(t),ec(),e!==null&&L(ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qt(De),null;case 25:return null;default:return null}}function rf(e,t){switch(qu(t),t.tag){case 3:qt(De),Ft();break;case 26:case 27:case 5:Un(t);break;case 4:Ft();break;case 13:Gt(t);break;case 19:L(Ce);break;case 10:qt(t.type);break;case 22:case 23:Gt(t),ec(),e!==null&&L(ka);break;case 24:qt(De)}}function sn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,r=a.inst;l=i(),r.destroy=l}a=a.next}while(a!==n)}}catch(s){pe(t,t.return,s)}}function ra(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var r=l.inst,s=r.destroy;if(s!==void 0){r.destroy=void 0,n=t;var g=a,j=s;try{j()}catch(w){pe(n,g,w)}}}l=l.next}while(l!==i)}}catch(w){pe(t,t.return,w)}}function sf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Js(t,a)}catch(l){pe(e,e.return,l)}}}function of(e,t,a){a.props=Ba(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){pe(e,t,l)}}function on(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){pe(e,t,n)}}function At(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){pe(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){pe(e,t,n)}else a.current=null}function ff(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){pe(e,e.return,n)}}function wc(e,t,a){try{var l=e.stateNode;Wh(l,e.type,a,t),l[Je]=t}catch(n){pe(e,e.return,n)}}function df(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function Mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||df(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ki));else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Rc(e,t,a),e=e.sibling;e!==null;)Rc(e,t,a),e=e.sibling}function zi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zi(e,t,a),e=e.sibling;e!==null;)zi(e,t,a),e=e.sibling}function mf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ye(t,l,a),t[Qe]=e,t[Je]=a}catch(i){pe(e,e.return,i)}}var Vt=!1,Te=!1,Dc=!1,hf=typeof WeakSet=="function"?WeakSet:Set,He=null;function Rh(e,t){if(e=e.containerInfo,tr=Xi,e=Ns(e),Mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var r=0,s=-1,g=-1,j=0,w=0,C=e,E=null;t:for(;;){for(var z;C!==a||n!==0&&C.nodeType!==3||(s=r+n),C!==i||l!==0&&C.nodeType!==3||(g=r+l),C.nodeType===3&&(r+=C.nodeValue.length),(z=C.firstChild)!==null;)E=C,C=z;for(;;){if(C===e)break t;if(E===a&&++j===n&&(s=r),E===i&&++w===l&&(g=r),(z=C.nextSibling)!==null)break;C=E,E=C.parentNode}C=z}a=s===-1||g===-1?null:{start:s,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(ar={focusedElem:e,selectionRange:a},Xi=!1,He=t;He!==null;)if(t=He,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,He=e;else for(;He!==null;){switch(t=He,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var W=Ba(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(W,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(Z){pe(a,a.return,Z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ir(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ir(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,He=e;break}He=t.return}}function gf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),l&4&&sn(5,a);break;case 1:if(sa(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){pe(a,a.return,r)}else{var n=Ba(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){pe(a,a.return,r)}}l&64&&sf(a),l&512&&on(a,a.return);break;case 3:if(sa(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Js(e,t)}catch(r){pe(a,a.return,r)}}break;case 27:t===null&&l&4&&mf(a);case 26:case 5:sa(e,a),t===null&&l&4&&ff(a),l&512&&on(a,a.return);break;case 12:sa(e,a);break;case 13:sa(e,a),l&4&&bf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Lh.bind(null,a),l0(e,a))));break;case 22:if(l=a.memoizedState!==null||Vt,!l){t=t!==null&&t.memoizedState!==null||Te,n=Vt;var i=Te;Vt=l,(Te=t)&&!i?oa(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),Vt=n,Te=i}break;case 30:break;default:sa(e,a)}}function pf(e){var t=e.alternate;t!==null&&(e.alternate=null,pf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ou(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ye=null,Fe=!1;function Zt(e,t,a){for(a=a.child;a!==null;)vf(e,t,a),a=a.sibling}function vf(e,t,a){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Rl,a)}catch{}switch(a.tag){case 26:Te||At(a,t),Zt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Te||At(a,t);var l=ye,n=Fe;pa(a.type)&&(ye=a.stateNode,Fe=!1),Zt(e,t,a),yn(a.stateNode),ye=l,Fe=n;break;case 5:Te||At(a,t);case 6:if(l=ye,n=Fe,ye=null,Zt(e,t,a),ye=l,Fe=n,ye!==null)if(Fe)try{(ye.nodeType===9?ye.body:ye.nodeName==="HTML"?ye.ownerDocument.body:ye).removeChild(a.stateNode)}catch(i){pe(a,t,i)}else try{ye.removeChild(a.stateNode)}catch(i){pe(a,t,i)}break;case 18:ye!==null&&(Fe?(e=ye,id(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tn(e)):id(ye,a.stateNode));break;case 4:l=ye,n=Fe,ye=a.stateNode.containerInfo,Fe=!0,Zt(e,t,a),ye=l,Fe=n;break;case 0:case 11:case 14:case 15:Te||ra(2,a,t),Te||ra(4,a,t),Zt(e,t,a);break;case 1:Te||(At(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&of(a,t,l)),Zt(e,t,a);break;case 21:Zt(e,t,a);break;case 22:Te=(l=Te)||a.memoizedState!==null,Zt(e,t,a),Te=l;break;default:Zt(e,t,a)}}function bf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tn(e)}catch(a){pe(t,t.return,a)}}function Dh(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new hf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new hf),t;default:throw Error(o(435,e.tag))}}function Cc(e,t){var a=Dh(e);t.forEach(function(l){var n=qh.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function it(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,r=t,s=r;e:for(;s!==null;){switch(s.tag){case 27:if(pa(s.type)){ye=s.stateNode,Fe=!1;break e}break;case 5:ye=s.stateNode,Fe=!1;break e;case 3:case 4:ye=s.stateNode.containerInfo,Fe=!0;break e}s=s.return}if(ye===null)throw Error(o(160));vf(i,r,n),ye=null,Fe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)yf(t,e),t=t.sibling}var St=null;function yf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:it(t,e),ut(e),l&4&&(ra(3,e,e.return),sn(3,e),ra(5,e,e.return));break;case 1:it(t,e),ut(e),l&512&&(Te||a===null||At(a,a.return)),l&64&&Vt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=St;if(it(t,e),ut(e),l&512&&(Te||a===null||At(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ol]||i[Qe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ye(i,l,a),i[Qe]=e,Ue(i),l=i;break e;case"link":var r=md("link","href",n).get(l+(a.href||""));if(r){for(var s=0;s<r.length;s++)if(i=r[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(s,1);break t}}i=n.createElement(l),Ye(i,l,a),n.head.appendChild(i);break;case"meta":if(r=md("meta","content",n).get(l+(a.content||""))){for(s=0;s<r.length;s++)if(i=r[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(s,1);break t}}i=n.createElement(l),Ye(i,l,a),n.head.appendChild(i);break;default:throw Error(o(468,l))}i[Qe]=e,Ue(i),l=i}e.stateNode=l}else hd(n,e.type,e.stateNode);else e.stateNode=dd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?hd(n,e.type,e.stateNode):dd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&wc(e,e.memoizedProps,a.memoizedProps)}break;case 27:it(t,e),ut(e),l&512&&(Te||a===null||At(a,a.return)),a!==null&&l&4&&wc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(it(t,e),ut(e),l&512&&(Te||a===null||At(a,a.return)),e.flags&32){n=e.stateNode;try{Wa(n,"")}catch(z){pe(e,e.return,z)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,wc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Dc=!0);break;case 6:if(it(t,e),ut(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(z){pe(e,e.return,z)}}break;case 3:if(qi=null,n=St,St=Bi(t.containerInfo),it(t,e),St=n,ut(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Tn(t.containerInfo)}catch(z){pe(e,e.return,z)}Dc&&(Dc=!1,xf(e));break;case 4:l=St,St=Bi(e.stateNode.containerInfo),it(t,e),ut(e),St=l;break;case 12:it(t,e),ut(e);break;case 13:it(t,e),ut(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bc=Nt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Cc(e,l)));break;case 22:n=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,j=Vt,w=Te;if(Vt=j||n,Te=w||g,it(t,e),Te=w,Vt=j,ut(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||g||Vt||Te||La(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(i=g.stateNode,n)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{s=g.stateNode;var C=g.memoizedProps.style,E=C!=null&&C.hasOwnProperty("display")?C.display:null;s.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(z){pe(g,g.return,z)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=n?"":g.memoizedProps}catch(z){pe(g,g.return,z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Cc(e,a))));break;case 19:it(t,e),ut(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Cc(e,l)));break;case 30:break;case 21:break;default:it(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(df(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,i=Mc(e);zi(e,i,n);break;case 5:var r=a.stateNode;a.flags&32&&(Wa(r,""),a.flags&=-33);var s=Mc(e);zi(e,s,r);break;case 3:case 4:var g=a.stateNode.containerInfo,j=Mc(e);Rc(e,j,g);break;default:throw Error(o(161))}}catch(w){pe(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gf(e,t.alternate,t),t=t.sibling}function La(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ra(4,t,t.return),La(t);break;case 1:At(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&of(t,t.return,a),La(t);break;case 27:yn(t.stateNode);case 26:case 5:At(t,t.return),La(t);break;case 22:t.memoizedState===null&&La(t);break;case 30:La(t);break;default:La(t)}e=e.sibling}}function oa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:oa(n,i,a),sn(4,i);break;case 1:if(oa(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(j){pe(l,l.return,j)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var g=n.shared.hiddenCallbacks;if(g!==null)for(n.shared.hiddenCallbacks=null,n=0;n<g.length;n++)Ks(g[n],s)}catch(j){pe(l,l.return,j)}}a&&r&64&&sf(i),on(i,i.return);break;case 27:mf(i);case 26:case 5:oa(n,i,a),a&&l===null&&r&4&&ff(i),on(i,i.return);break;case 12:oa(n,i,a);break;case 13:oa(n,i,a),a&&r&4&&bf(n,i);break;case 22:i.memoizedState===null&&oa(n,i,a),on(i,i.return);break;case 30:break;default:oa(n,i,a)}t=t.sibling}}function Oc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jl(a))}function _c(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e))}function Tt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sf(e,t,a,l),t=t.sibling}function Sf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Tt(e,t,a,l),n&2048&&sn(9,t);break;case 1:Tt(e,t,a,l);break;case 3:Tt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e)));break;case 12:if(n&2048){Tt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,s=i.onPostCommit;typeof s=="function"&&s(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){pe(t,t.return,g)}}else Tt(e,t,a,l);break;case 13:Tt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?Tt(e,t,a,l):fn(e,t):i._visibility&2?Tt(e,t,a,l):(i._visibility|=2,gl(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&Oc(r,t);break;case 24:Tt(e,t,a,l),n&2048&&_c(t.alternate,t);break;default:Tt(e,t,a,l)}}function gl(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,r=t,s=a,g=l,j=r.flags;switch(r.tag){case 0:case 11:case 15:gl(i,r,s,g,n),sn(8,r);break;case 23:break;case 22:var w=r.stateNode;r.memoizedState!==null?w._visibility&2?gl(i,r,s,g,n):fn(i,r):(w._visibility|=2,gl(i,r,s,g,n)),n&&j&2048&&Oc(r.alternate,r);break;case 24:gl(i,r,s,g,n),n&&j&2048&&_c(r.alternate,r);break;default:gl(i,r,s,g,n)}t=t.sibling}}function fn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:fn(a,l),n&2048&&Oc(l.alternate,l);break;case 24:fn(a,l),n&2048&&_c(l.alternate,l);break;default:fn(a,l)}t=t.sibling}}var dn=8192;function pl(e){if(e.subtreeFlags&dn)for(e=e.child;e!==null;)jf(e),e=e.sibling}function jf(e){switch(e.tag){case 26:pl(e),e.flags&dn&&e.memoizedState!==null&&p0(St,e.memoizedState,e.memoizedProps);break;case 5:pl(e);break;case 3:case 4:var t=St;St=Bi(e.stateNode.containerInfo),pl(e),St=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=dn,dn=16777216,pl(e),dn=t):pl(e));break;default:pl(e)}}function Nf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function mn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];He=l,zf(l,e)}Nf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ef(e),e=e.sibling}function Ef(e){switch(e.tag){case 0:case 11:case 15:mn(e),e.flags&2048&&ra(9,e,e.return);break;case 3:mn(e);break;case 12:mn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ai(e)):mn(e);break;default:mn(e)}}function Ai(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];He=l,zf(l,e)}Nf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ra(8,t,t.return),Ai(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ai(t));break;default:Ai(t)}e=e.sibling}}function zf(e,t){for(;He!==null;){var a=He;switch(a.tag){case 0:case 11:case 15:ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Jl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,He=l;else e:for(a=e;He!==null;){l=He;var n=l.sibling,i=l.return;if(pf(l),l===a){He=null;break e}if(n!==null){n.return=i,He=n;break e}He=i}}}var Ch={getCacheForType:function(e){var t=Ve(De),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Oh=typeof WeakMap=="function"?WeakMap:Map,oe=0,ve=null,le=null,ie=0,fe=0,ct=null,fa=!1,vl=!1,Uc=!1,Kt=0,ze=0,da=0,qa=0,kc=0,bt=0,bl=0,hn=null,Pe=null,Hc=!1,Bc=0,Ti=1/0,wi=null,ma=null,qe=0,ha=null,yl=null,xl=0,Lc=0,qc=null,Af=null,gn=0,Yc=null;function rt(){if((oe&2)!==0&&ie!==0)return ie&-ie;if(M.T!==null){var e=cl;return e!==0?e:Jc()}return qr()}function Tf(){bt===0&&(bt=(ie&536870912)===0||se?kr():536870912);var e=vt.current;return e!==null&&(e.flags|=32),bt}function st(e,t,a){(e===ve&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),ga(e,ie,bt,!1)),Cl(e,a),((oe&2)===0||e!==ve)&&(e===ve&&((oe&2)===0&&(qa|=a),ze===4&&ga(e,ie,bt,!1)),wt(e))}function wf(e,t,a){if((oe&6)!==0)throw Error(o(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Dl(e,t),n=l?kh(e,t):Qc(e,t,!0),i=l;do{if(n===0){vl&&!l&&ga(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!_h(a)){n=Qc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var s=e;n=hn;var g=s.current.memoizedState.isDehydrated;if(g&&(Sl(s,r).flags|=256),r=Qc(s,r,!1),r!==2){if(Uc&&!g){s.errorRecoveryDisabledLanes|=i,qa|=i,n=4;break e}i=Pe,Pe=n,i!==null&&(Pe===null?Pe=i:Pe.push.apply(Pe,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){Sl(e,0),ga(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:ga(l,t,bt,!fa);break e;case 2:Pe=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=Bc+300-Nt(),10<n)){if(ga(l,t,bt,!fa),Ln(l,0,!0)!==0)break e;l.timeoutHandle=ld(Mf.bind(null,l,a,Pe,wi,Hc,t,bt,qa,bl,fa,i,2,-0,0),n);break e}Mf(l,a,Pe,wi,Hc,t,bt,qa,bl,fa,i,0,-0,0)}}break}while(!0);wt(e)}function Mf(e,t,a,l,n,i,r,s,g,j,w,C,E,z){if(e.timeoutHandle=-1,C=t.subtreeFlags,(C&8192||(C&16785408)===16785408)&&(jn={stylesheets:null,count:0,unsuspend:g0},jf(t),C=v0(),C!==null)){e.cancelPendingCommit=C(kf.bind(null,e,t,i,a,l,n,r,s,g,w,1,E,z)),ga(e,i,r,!j);return}kf(e,t,i,a,l,n,r,s,g)}function _h(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!lt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ga(e,t,a,l){t&=~kc,t&=~qa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-at(n),r=1<<i;l[i]=-1,n&=~r}a!==0&&Br(e,a,t)}function Mi(){return(oe&6)===0?(pn(0),!1):!0}function Gc(){if(le!==null){if(fe===0)var e=le.return;else e=le,Lt=_a=null,ic(e),ml=null,un=0,e=le;for(;e!==null;)rf(e.alternate,e),e=e.return;le=null}}function Sl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ph(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Gc(),ve=e,le=a=kt(e.current,null),ie=t,fe=0,ct=null,fa=!1,vl=Dl(e,t),Uc=!1,bl=bt=kc=qa=da=ze=0,Pe=hn=null,Hc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-at(l),i=1<<n;t|=e[n],l&=~i}return Kt=t,Fn(),a}function Rf(e,t){te=null,M.H=pi,t===Wl||t===ui?(t=Vs(),fe=3):t===Gs?(t=Vs(),fe=4):fe=t===Ko?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,le===null&&(ze=1,Si(e,mt(t,e.current)))}function Df(){var e=M.H;return M.H=pi,e===null?pi:e}function Cf(){var e=M.A;return M.A=Ch,e}function Xc(){ze=4,fa||(ie&4194048)!==ie&&vt.current!==null||(vl=!0),(da&134217727)===0&&(qa&134217727)===0||ve===null||ga(ve,ie,bt,!1)}function Qc(e,t,a){var l=oe;oe|=2;var n=Df(),i=Cf();(ve!==e||ie!==t)&&(wi=null,Sl(e,t)),t=!1;var r=ze;e:do try{if(fe!==0&&le!==null){var s=le,g=ct;switch(fe){case 8:Gc(),r=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var j=fe;if(fe=0,ct=null,jl(e,s,g,j),a&&vl){r=0;break e}break;default:j=fe,fe=0,ct=null,jl(e,s,g,j)}}Uh(),r=ze;break}catch(w){Rf(e,w)}while(!0);return t&&e.shellSuspendCounter++,Lt=_a=null,oe=l,M.H=n,M.A=i,le===null&&(ve=null,ie=0,Fn()),r}function Uh(){for(;le!==null;)Of(le)}function kh(e,t){var a=oe;oe|=2;var l=Df(),n=Cf();ve!==e||ie!==t?(wi=null,Ti=Nt()+500,Sl(e,t)):vl=Dl(e,t);e:do try{if(fe!==0&&le!==null){t=le;var i=ct;t:switch(fe){case 1:fe=0,ct=null,jl(e,t,i,1);break;case 2:case 9:if(Xs(i)){fe=0,ct=null,_f(t);break}t=function(){fe!==2&&fe!==9||ve!==e||(fe=7),wt(e)},i.then(t,t);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:Xs(i)?(fe=0,ct=null,_f(t)):(fe=0,ct=null,jl(e,t,i,7));break;case 5:var r=null;switch(le.tag){case 26:r=le.memoizedState;case 5:case 27:var s=le;if(!r||gd(r)){fe=0,ct=null;var g=s.sibling;if(g!==null)le=g;else{var j=s.return;j!==null?(le=j,Ri(j)):le=null}break t}}fe=0,ct=null,jl(e,t,i,5);break;case 6:fe=0,ct=null,jl(e,t,i,6);break;case 8:Gc(),ze=6;break e;default:throw Error(o(462))}}Hh();break}catch(w){Rf(e,w)}while(!0);return Lt=_a=null,M.H=l,M.A=n,oe=a,le!==null?0:(ve=null,ie=0,Fn(),ze)}function Hh(){for(;le!==null&&!im();)Of(le)}function Of(e){var t=uf(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?Ri(e):le=t}function _f(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Io(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=Io(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:ic(t);default:rf(a,t),t=le=Os(t,Kt),t=uf(a,t,Kt)}e.memoizedProps=e.pendingProps,t===null?Ri(e):le=t}function jl(e,t,a,l){Lt=_a=null,ic(t),ml=null,un=0;var n=t.return;try{if(Ah(e,n,t,a,ie)){ze=1,Si(e,mt(a,e.current)),le=null;return}}catch(i){if(n!==null)throw le=n,i;ze=1,Si(e,mt(a,e.current)),le=null;return}t.flags&32768?(se||l===1?e=!0:vl||(ie&536870912)!==0?e=!1:(fa=e=!0,(l===2||l===9||l===3||l===6)&&(l=vt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Uf(t,e)):Ri(t)}function Ri(e){var t=e;do{if((t.flags&32768)!==0){Uf(t,fa);return}e=t.return;var a=wh(t.alternate,t,Kt);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ze===0&&(ze=5)}function Uf(e,t){do{var a=Mh(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);ze=6,le=null}function kf(e,t,a,l,n,i,r,s,g){e.cancelPendingCommit=null;do Di();while(qe!==0);if((oe&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=_u,gm(e,a,i,r,s,g),e===ve&&(le=ve=null,ie=0),yl=t,ha=e,xl=a,Lc=i,qc=n,Af=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Yh(kn,function(){return Yf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,n=B.p,B.p=2,r=oe,oe|=4;try{Rh(e,t,a)}finally{oe=r,B.p=n,M.T=l}}qe=1,Hf(),Bf(),Lf()}}function Hf(){if(qe===1){qe=0;var e=ha,t=yl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var l=B.p;B.p=2;var n=oe;oe|=4;try{yf(t,e);var i=ar,r=Ns(e.containerInfo),s=i.focusedElem,g=i.selectionRange;if(r!==s&&s&&s.ownerDocument&&js(s.ownerDocument.documentElement,s)){if(g!==null&&Mu(s)){var j=g.start,w=g.end;if(w===void 0&&(w=j),"selectionStart"in s)s.selectionStart=j,s.selectionEnd=Math.min(w,s.value.length);else{var C=s.ownerDocument||document,E=C&&C.defaultView||window;if(E.getSelection){var z=E.getSelection(),W=s.textContent.length,Z=Math.min(g.start,W),he=g.end===void 0?Z:Math.min(g.end,W);!z.extend&&Z>he&&(r=he,he=Z,Z=r);var y=Ss(s,Z),b=Ss(s,he);if(y&&b&&(z.rangeCount!==1||z.anchorNode!==y.node||z.anchorOffset!==y.offset||z.focusNode!==b.node||z.focusOffset!==b.offset)){var S=C.createRange();S.setStart(y.node,y.offset),z.removeAllRanges(),Z>he?(z.addRange(S),z.extend(b.node,b.offset)):(S.setEnd(b.node,b.offset),z.addRange(S))}}}}for(C=[],z=s;z=z.parentNode;)z.nodeType===1&&C.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<C.length;s++){var D=C[s];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Xi=!!tr,ar=tr=null}finally{oe=n,B.p=l,M.T=a}}e.current=t,qe=2}}function Bf(){if(qe===2){qe=0;var e=ha,t=yl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var l=B.p;B.p=2;var n=oe;oe|=4;try{gf(e,t.alternate,t)}finally{oe=n,B.p=l,M.T=a}}qe=3}}function Lf(){if(qe===4||qe===3){qe=0,um();var e=ha,t=yl,a=xl,l=Af;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,yl=ha=null,qf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ma=null),ru(a),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Rl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=M.T,n=B.p,B.p=2,M.T=null;try{for(var i=e.onRecoverableError,r=0;r<l.length;r++){var s=l[r];i(s.value,{componentStack:s.stack})}}finally{M.T=t,B.p=n}}(xl&3)!==0&&Di(),wt(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===Yc?gn++:(gn=0,Yc=e):gn=0,pn(0)}}function qf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jl(t)))}function Di(e){return Hf(),Bf(),Lf(),Yf()}function Yf(){if(qe!==5)return!1;var e=ha,t=Lc;Lc=0;var a=ru(xl),l=M.T,n=B.p;try{B.p=32>a?32:a,M.T=null,a=qc,qc=null;var i=ha,r=xl;if(qe=0,yl=ha=null,xl=0,(oe&6)!==0)throw Error(o(331));var s=oe;if(oe|=4,Ef(i.current),Sf(i,i.current,r,a),oe=s,pn(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Rl,i)}catch{}return!0}finally{B.p=n,M.T=l,qf(e,t)}}function Gf(e,t,a){t=mt(a,t),t=yc(e.stateNode,t,2),e=na(e,t,2),e!==null&&(Cl(e,2),wt(e))}function pe(e,t,a){if(e.tag===3)Gf(e,e,a);else for(;t!==null;){if(t.tag===3){Gf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ma===null||!ma.has(l))){e=mt(a,e),a=Vo(2),l=na(t,a,2),l!==null&&(Zo(a,l,t,e),Cl(l,2),wt(l));break}}t=t.return}}function Vc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Oh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Uc=!0,n.add(a),e=Bh.bind(null,e,t,a),t.then(e,e))}function Bh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ve===e&&(ie&a)===a&&(ze===4||ze===3&&(ie&62914560)===ie&&300>Nt()-Bc?(oe&2)===0&&Sl(e,0):kc|=a,bl===ie&&(bl=0)),wt(e)}function Xf(e,t){t===0&&(t=Hr()),e=ll(e,t),e!==null&&(Cl(e,t),wt(e))}function Lh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Xf(e,a)}function qh(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Xf(e,a)}function Yh(e,t){return nu(e,t)}var Ci=null,Nl=null,Zc=!1,Oi=!1,Kc=!1,Ya=0;function wt(e){e!==Nl&&e.next===null&&(Nl===null?Ci=Nl=e:Nl=Nl.next=e),Oi=!0,Zc||(Zc=!0,Xh())}function pn(e,t){if(!Kc&&Oi){Kc=!0;do for(var a=!1,l=Ci;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var r=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-at(42|e)+1)-1,i&=n&~(r&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Kf(l,i))}else i=ie,i=Ln(l,l===ve?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Dl(l,i)||(a=!0,Kf(l,i));l=l.next}while(a);Kc=!1}}function Gh(){Qf()}function Qf(){Oi=Zc=!1;var e=0;Ya!==0&&(Fh()&&(e=Ya),Ya=0);for(var t=Nt(),a=null,l=Ci;l!==null;){var n=l.next,i=Vf(l,t);i===0?(l.next=null,a===null?Ci=n:a.next=n,n===null&&(Nl=a)):(a=l,(e!==0||(i&3)!==0)&&(Oi=!0)),l=n}pn(e)}function Vf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-at(i),s=1<<r,g=n[r];g===-1?((s&a)===0||(s&l)!==0)&&(n[r]=hm(s,t)):g<=t&&(e.expiredLanes|=s),i&=~s}if(t=ve,a=ie,a=Ln(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&iu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&iu(l),ru(a)){case 2:case 8:a=_r;break;case 32:a=kn;break;case 268435456:a=Ur;break;default:a=kn}return l=Zf.bind(null,e),a=nu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&iu(l),e.callbackPriority=2,e.callbackNode=null,2}function Zf(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Di()&&e.callbackNode!==a)return null;var l=ie;return l=Ln(e,e===ve?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(wf(e,l,t),Vf(e,Nt()),e.callbackNode!=null&&e.callbackNode===a?Zf.bind(null,e):null)}function Kf(e,t){if(Di())return null;wf(e,t,!0)}function Xh(){Ih(function(){(oe&6)!==0?nu(Or,Gh):Qf()})}function Jc(){return Ya===0&&(Ya=kr()),Ya}function Jf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qn(""+e)}function $f(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Qh(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Jf((n[Je]||null).action),r=l.submitter;r&&(t=(t=r[Je]||null)?Jf(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var s=new Jn("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ya!==0){var g=r?$f(n,r):new FormData(n);hc(a,{pending:!0,data:g,method:n.method,action:i},null,g)}}else typeof i=="function"&&(s.preventDefault(),g=r?$f(n,r):new FormData(n),hc(a,{pending:!0,data:g,method:n.method,action:i},i,g))},currentTarget:n}]})}}for(var $c=0;$c<Ou.length;$c++){var Wc=Ou[$c],Vh=Wc.toLowerCase(),Zh=Wc[0].toUpperCase()+Wc.slice(1);xt(Vh,"on"+Zh)}xt(As,"onAnimationEnd"),xt(Ts,"onAnimationIteration"),xt(ws,"onAnimationStart"),xt("dblclick","onDoubleClick"),xt("focusin","onFocus"),xt("focusout","onBlur"),xt(sh,"onTransitionRun"),xt(oh,"onTransitionStart"),xt(fh,"onTransitionCancel"),xt(Ms,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),za("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),za("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),za("onBeforeInput",["compositionend","keypress","textInput","paste"]),za("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),za("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),za("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vn));function Wf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var s=l[r],g=s.instance,j=s.currentTarget;if(s=s.listener,g!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=j;try{i(n)}catch(w){xi(w)}n.currentTarget=null,i=g}else for(r=0;r<l.length;r++){if(s=l[r],g=s.instance,j=s.currentTarget,s=s.listener,g!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=j;try{i(n)}catch(w){xi(w)}n.currentTarget=null,i=g}}}}function ne(e,t){var a=t[su];a===void 0&&(a=t[su]=new Set);var l=e+"__bubble";a.has(l)||(Ff(t,e,2,!1),a.add(l))}function Fc(e,t,a){var l=0;t&&(l|=4),Ff(a,e,l,t)}var _i="_reactListening"+Math.random().toString(36).slice(2);function Pc(e){if(!e[_i]){e[_i]=!0,Gr.forEach(function(a){a!=="selectionchange"&&(Kh.has(a)||Fc(a,!1,e),Fc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_i]||(t[_i]=!0,Fc("selectionchange",!1,t))}}function Ff(e,t,a,l){switch(Sd(t)){case 2:var n=x0;break;case 8:n=S0;break;default:n=dr}a=n.bind(null,t,a,e),n=void 0,!xu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Ic(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var s=l.stateNode.containerInfo;if(s===n)break;if(r===4)for(r=l.return;r!==null;){var g=r.tag;if((g===3||g===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;s!==null;){if(r=Qa(s),r===null)return;if(g=r.tag,g===5||g===6||g===26||g===27){l=i=r;continue e}s=s.parentNode}}l=l.return}as(function(){var j=i,w=bu(a),C=[];e:{var E=Rs.get(e);if(E!==void 0){var z=Jn,W=e;switch(e){case"keypress":if(Zn(a)===0)break e;case"keydown":case"keyup":z=Ym;break;case"focusin":W="focus",z=Eu;break;case"focusout":W="blur",z=Eu;break;case"beforeblur":case"afterblur":z=Eu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Qm;break;case As:case Ts:case ws:z=Cm;break;case Ms:z=Zm;break;case"scroll":case"scrollend":z=Tm;break;case"wheel":z=Jm;break;case"copy":case"cut":case"paste":z=_m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=cs;break;case"toggle":case"beforetoggle":z=Wm}var Z=(t&4)!==0,he=!Z&&(e==="scroll"||e==="scrollend"),y=Z?E!==null?E+"Capture":null:E;Z=[];for(var b=j,S;b!==null;){var D=b;if(S=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||S===null||y===null||(D=Ul(b,y),D!=null&&Z.push(bn(b,D,S))),he)break;b=b.return}0<Z.length&&(E=new z(E,W,null,a,w),C.push({event:E,listeners:Z}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",E&&a!==vu&&(W=a.relatedTarget||a.fromElement)&&(Qa(W)||W[Xa]))break e;if((z||E)&&(E=w.window===w?w:(E=w.ownerDocument)?E.defaultView||E.parentWindow:window,z?(W=a.relatedTarget||a.toElement,z=j,W=W?Qa(W):null,W!==null&&(he=h(W),Z=W.tag,W!==he||Z!==5&&Z!==27&&Z!==6)&&(W=null)):(z=null,W=j),z!==W)){if(Z=is,D="onMouseLeave",y="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(Z=cs,D="onPointerLeave",y="onPointerEnter",b="pointer"),he=z==null?E:_l(z),S=W==null?E:_l(W),E=new Z(D,b+"leave",z,a,w),E.target=he,E.relatedTarget=S,D=null,Qa(w)===j&&(Z=new Z(y,b+"enter",W,a,w),Z.target=S,Z.relatedTarget=he,D=Z),he=D,z&&W)t:{for(Z=z,y=W,b=0,S=Z;S;S=El(S))b++;for(S=0,D=y;D;D=El(D))S++;for(;0<b-S;)Z=El(Z),b--;for(;0<S-b;)y=El(y),S--;for(;b--;){if(Z===y||y!==null&&Z===y.alternate)break t;Z=El(Z),y=El(y)}Z=null}else Z=null;z!==null&&Pf(C,E,z,Z,!1),W!==null&&he!==null&&Pf(C,he,W,Z,!0)}}e:{if(E=j?_l(j):window,z=E.nodeName&&E.nodeName.toLowerCase(),z==="select"||z==="input"&&E.type==="file")var q=gs;else if(ms(E))if(ps)q=uh;else{q=nh;var ae=lh}else z=E.nodeName,!z||z.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?j&&pu(j.elementType)&&(q=gs):q=ih;if(q&&(q=q(e,j))){hs(C,q,a,w);break e}ae&&ae(e,E,j),e==="focusout"&&j&&E.type==="number"&&j.memoizedProps.value!=null&&gu(E,"number",E.value)}switch(ae=j?_l(j):window,e){case"focusin":(ms(ae)||ae.contentEditable==="true")&&(el=ae,Ru=j,Xl=null);break;case"focusout":Xl=Ru=el=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Es(C,a,w);break;case"selectionchange":if(rh)break;case"keydown":case"keyup":Es(C,a,w)}var Y;if(Au)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Ia?fs(e,a)&&(K="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(K="onCompositionStart");K&&(rs&&a.locale!=="ko"&&(Ia||K!=="onCompositionStart"?K==="onCompositionEnd"&&Ia&&(Y=ls()):(ea=w,Su="value"in ea?ea.value:ea.textContent,Ia=!0)),ae=Ui(j,K),0<ae.length&&(K=new us(K,e,null,a,w),C.push({event:K,listeners:ae}),Y?K.data=Y:(Y=ds(a),Y!==null&&(K.data=Y)))),(Y=Pm?Im(e,a):eh(e,a))&&(K=Ui(j,"onBeforeInput"),0<K.length&&(ae=new us("onBeforeInput","beforeinput",null,a,w),C.push({event:ae,listeners:K}),ae.data=Y)),Qh(C,e,j,a,w)}Wf(C,t)})}function bn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ui(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ul(e,a),n!=null&&l.unshift(bn(e,n,i)),n=Ul(e,t),n!=null&&l.push(bn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function El(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pf(e,t,a,l,n){for(var i=t._reactName,r=[];a!==null&&a!==l;){var s=a,g=s.alternate,j=s.stateNode;if(s=s.tag,g!==null&&g===l)break;s!==5&&s!==26&&s!==27||j===null||(g=j,n?(j=Ul(a,i),j!=null&&r.unshift(bn(a,j,g))):n||(j=Ul(a,i),j!=null&&r.push(bn(a,j,g)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var Jh=/\r\n?/g,$h=/\u0000|\uFFFD/g;function If(e){return(typeof e=="string"?e:""+e).replace(Jh,`
`).replace($h,"")}function ed(e,t){return t=If(t),If(e)===t}function ki(){}function me(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Wa(e,""+l);break;case"className":Yn(e,"class",l);break;case"tabIndex":Yn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Yn(e,a,l);break;case"style":es(e,l,i);break;case"data":if(t!=="object"){Yn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Qn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&me(e,t,"name",n.name,n,null),me(e,t,"formEncType",n.formEncType,n,null),me(e,t,"formMethod",n.formMethod,n,null),me(e,t,"formTarget",n.formTarget,n,null)):(me(e,t,"encType",n.encType,n,null),me(e,t,"method",n.method,n,null),me(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Qn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=ki);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Qn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),qn(e,"popover",l);break;case"xlinkActuate":_t(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":_t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":_t(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":_t(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":_t(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":_t(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":_t(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":_t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":_t(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":qn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zm.get(a)||a,qn(e,a,l))}}function er(e,t,a,l,n,i){switch(a){case"style":es(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&Wa(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Je]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):qn(e,a,l)}}}function Ye(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var r=a[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:me(e,t,i,r,a,null)}}n&&me(e,t,"srcSet",a.srcSet,a,null),l&&me(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var s=i=r=n=null,g=null,j=null;for(l in a)if(a.hasOwnProperty(l)){var w=a[l];if(w!=null)switch(l){case"name":n=w;break;case"type":r=w;break;case"checked":g=w;break;case"defaultChecked":j=w;break;case"value":i=w;break;case"defaultValue":s=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(o(137,t));break;default:me(e,t,l,w,a,null)}}Wr(e,i,s,g,j,r,n,!1),Gn(e);return;case"select":ne("invalid",e),l=r=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":r=s;break;case"multiple":l=s;default:me(e,t,n,s,a,null)}t=i,a=r,e.multiple=!!l,t!=null?$a(e,!!l,t,!1):a!=null&&$a(e,!!l,a,!0);return;case"textarea":ne("invalid",e),i=n=l=null;for(r in a)if(a.hasOwnProperty(r)&&(s=a[r],s!=null))switch(r){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:me(e,t,r,s,a,null)}Pr(e,l,n,i),Gn(e);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(l=a[g],l!=null))switch(g){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:me(e,t,g,l,a,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<vn.length;l++)ne(vn[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(l=a[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:me(e,t,j,l,a,null)}return;default:if(pu(t)){for(w in a)a.hasOwnProperty(w)&&(l=a[w],l!==void 0&&er(e,t,w,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&me(e,t,s,l,a,null))}function Wh(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,s=null,g=null,j=null,w=null;for(z in a){var C=a[z];if(a.hasOwnProperty(z)&&C!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":g=C;default:l.hasOwnProperty(z)||me(e,t,z,null,l,C)}}for(var E in l){var z=l[E];if(C=a[E],l.hasOwnProperty(E)&&(z!=null||C!=null))switch(E){case"type":i=z;break;case"name":n=z;break;case"checked":j=z;break;case"defaultChecked":w=z;break;case"value":r=z;break;case"defaultValue":s=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:z!==C&&me(e,t,E,z,l,C)}}hu(e,r,s,g,j,w,i,n);return;case"select":z=r=s=E=null;for(i in a)if(g=a[i],a.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":z=g;default:l.hasOwnProperty(i)||me(e,t,i,null,l,g)}for(n in l)if(i=l[n],g=a[n],l.hasOwnProperty(n)&&(i!=null||g!=null))switch(n){case"value":E=i;break;case"defaultValue":s=i;break;case"multiple":r=i;default:i!==g&&me(e,t,n,i,l,g)}t=s,a=r,l=z,E!=null?$a(e,!!a,E,!1):!!l!=!!a&&(t!=null?$a(e,!!a,t,!0):$a(e,!!a,a?[]:"",!1));return;case"textarea":z=E=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:me(e,t,s,null,l,n)}for(r in l)if(n=l[r],i=a[r],l.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":E=n;break;case"defaultValue":z=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&me(e,t,r,n,l,i)}Fr(e,E,z);return;case"option":for(var W in a)if(E=a[W],a.hasOwnProperty(W)&&E!=null&&!l.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:me(e,t,W,null,l,E)}for(g in l)if(E=l[g],z=a[g],l.hasOwnProperty(g)&&E!==z&&(E!=null||z!=null))switch(g){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:me(e,t,g,E,l,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in a)E=a[Z],a.hasOwnProperty(Z)&&E!=null&&!l.hasOwnProperty(Z)&&me(e,t,Z,null,l,E);for(j in l)if(E=l[j],z=a[j],l.hasOwnProperty(j)&&E!==z&&(E!=null||z!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(137,t));break;default:me(e,t,j,E,l,z)}return;default:if(pu(t)){for(var he in a)E=a[he],a.hasOwnProperty(he)&&E!==void 0&&!l.hasOwnProperty(he)&&er(e,t,he,void 0,l,E);for(w in l)E=l[w],z=a[w],!l.hasOwnProperty(w)||E===z||E===void 0&&z===void 0||er(e,t,w,E,l,z);return}}for(var y in a)E=a[y],a.hasOwnProperty(y)&&E!=null&&!l.hasOwnProperty(y)&&me(e,t,y,null,l,E);for(C in l)E=l[C],z=a[C],!l.hasOwnProperty(C)||E===z||E==null&&z==null||me(e,t,C,E,l,z)}var tr=null,ar=null;function Hi(e){return e.nodeType===9?e:e.ownerDocument}function td(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ad(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nr=null;function Fh(){var e=window.event;return e&&e.type==="popstate"?e===nr?!1:(nr=e,!0):(nr=null,!1)}var ld=typeof setTimeout=="function"?setTimeout:void 0,Ph=typeof clearTimeout=="function"?clearTimeout:void 0,nd=typeof Promise=="function"?Promise:void 0,Ih=typeof queueMicrotask=="function"?queueMicrotask:typeof nd<"u"?function(e){return nd.resolve(null).then(e).catch(e0)}:ld;function e0(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function id(e,t){var a=t,l=0,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<l&&8>l){a=l;var r=e.ownerDocument;if(a&1&&yn(r.documentElement),a&2&&yn(r.body),a&4)for(a=r.head,yn(a),r=a.firstChild;r;){var s=r.nextSibling,g=r.nodeName;r[Ol]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=s}}if(n===0){e.removeChild(i),Tn(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=i}while(a);Tn(t)}function ir(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ir(a),ou(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function t0(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ol])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=jt(e.nextSibling),e===null)break}return null}function a0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=jt(e.nextSibling),e===null))return null;return e}function ur(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function l0(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var cr=null;function ud(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function cd(e,t,a){switch(t=Hi(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function yn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ou(e)}var yt=new Map,rd=new Set;function Bi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jt=B.d;B.d={f:n0,r:i0,D:u0,C:c0,L:r0,m:s0,X:f0,S:o0,M:d0};function n0(){var e=Jt.f(),t=Mi();return e||t}function i0(e){var t=Va(e);t!==null&&t.tag===5&&t.type==="form"?To(t):Jt.r(e)}var zl=typeof document>"u"?null:document;function sd(e,t,a){var l=zl;if(l&&typeof t=="string"&&t){var n=dt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),rd.has(n)||(rd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ye(t,"link",e),Ue(t),l.head.appendChild(t)))}}function u0(e){Jt.D(e),sd("dns-prefetch",e,null)}function c0(e,t){Jt.C(e,t),sd("preconnect",e,t)}function r0(e,t,a){Jt.L(e,t,a);var l=zl;if(l&&e&&t){var n='link[rel="preload"][as="'+dt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+dt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+dt(a.imageSizes)+'"]')):n+='[href="'+dt(e)+'"]';var i=n;switch(t){case"style":i=Al(e);break;case"script":i=Tl(e)}yt.has(i)||(e=T({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),yt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(xn(i))||t==="script"&&l.querySelector(Sn(i))||(t=l.createElement("link"),Ye(t,"link",e),Ue(t),l.head.appendChild(t)))}}function s0(e,t){Jt.m(e,t);var a=zl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+dt(l)+'"][href="'+dt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Tl(e)}if(!yt.has(i)&&(e=T({rel:"modulepreload",href:e},t),yt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sn(i)))return}l=a.createElement("link"),Ye(l,"link",e),Ue(l),a.head.appendChild(l)}}}function o0(e,t,a){Jt.S(e,t,a);var l=zl;if(l&&e){var n=Za(l).hoistableStyles,i=Al(e);t=t||"default";var r=n.get(i);if(!r){var s={loading:0,preload:null};if(r=l.querySelector(xn(i)))s.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},a),(a=yt.get(i))&&rr(e,a);var g=r=l.createElement("link");Ue(g),Ye(g,"link",e),g._p=new Promise(function(j,w){g.onload=j,g.onerror=w}),g.addEventListener("load",function(){s.loading|=1}),g.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Li(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:s},n.set(i,r)}}}function f0(e,t){Jt.X(e,t);var a=zl;if(a&&e){var l=Za(a).hoistableScripts,n=Tl(e),i=l.get(n);i||(i=a.querySelector(Sn(n)),i||(e=T({src:e,async:!0},t),(t=yt.get(n))&&sr(e,t),i=a.createElement("script"),Ue(i),Ye(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function d0(e,t){Jt.M(e,t);var a=zl;if(a&&e){var l=Za(a).hoistableScripts,n=Tl(e),i=l.get(n);i||(i=a.querySelector(Sn(n)),i||(e=T({src:e,async:!0,type:"module"},t),(t=yt.get(n))&&sr(e,t),i=a.createElement("script"),Ue(i),Ye(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function od(e,t,a,l){var n=(n=P.current)?Bi(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Al(a.href),a=Za(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Al(a.href);var i=Za(n).hoistableStyles,r=i.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=n.querySelector(xn(e)))&&!i._p&&(r.instance=i,r.state.loading=5),yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yt.set(e,a),i||m0(n,e,a,r.state))),t&&l===null)throw Error(o(528,""));return r}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Tl(a),a=Za(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Al(e){return'href="'+dt(e)+'"'}function xn(e){return'link[rel="stylesheet"]['+e+"]"}function fd(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function m0(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ye(t,"link",a),Ue(t),e.head.appendChild(t))}function Tl(e){return'[src="'+dt(e)+'"]'}function Sn(e){return"script[async]"+e}function dd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+dt(a.href)+'"]');if(l)return t.instance=l,Ue(l),l;var n=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ue(l),Ye(l,"style",n),Li(l,a.precedence,e),t.instance=l;case"stylesheet":n=Al(a.href);var i=e.querySelector(xn(n));if(i)return t.state.loading|=4,t.instance=i,Ue(i),i;l=fd(a),(n=yt.get(n))&&rr(l,n),i=(e.ownerDocument||e).createElement("link"),Ue(i);var r=i;return r._p=new Promise(function(s,g){r.onload=s,r.onerror=g}),Ye(i,"link",l),t.state.loading|=4,Li(i,a.precedence,e),t.instance=i;case"script":return i=Tl(a.src),(n=e.querySelector(Sn(i)))?(t.instance=n,Ue(n),n):(l=a,(n=yt.get(i))&&(l=T({},a),sr(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ue(n),Ye(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Li(l,a.precedence,e));return t.instance}function Li(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,r=0;r<l.length;r++){var s=l[r];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function rr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function sr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var qi=null;function md(e,t,a){if(qi===null){var l=new Map,n=qi=new Map;n.set(a,l)}else n=qi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Ol]||i[Qe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var s=l.get(r);s?s.push(i):l.set(r,[i])}}return l}function hd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function h0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function gd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var jn=null;function g0(){}function p0(e,t,a){if(jn===null)throw Error(o(475));var l=jn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Al(a.href),i=e.querySelector(xn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Yi.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=i,Ue(i);return}i=e.ownerDocument||e,a=fd(a),(n=yt.get(n))&&rr(a,n),i=i.createElement("link"),Ue(i);var r=i;r._p=new Promise(function(s,g){r.onload=s,r.onerror=g}),Ye(i,"link",a),t.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Yi.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function v0(){if(jn===null)throw Error(o(475));var e=jn;return e.stylesheets&&e.count===0&&or(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&or(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Yi(){if(this.count--,this.count===0){if(this.stylesheets)or(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gi=null;function or(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gi=new Map,t.forEach(b0,e),Gi=null,Yi.call(e))}function b0(e,t){if(!(t.state.loading&4)){var a=Gi.get(e);if(a)var l=a.get(null);else{a=new Map,Gi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),l=r)}l&&a.set(null,l)}n=t.instance,r=n.getAttribute("data-precedence"),i=a.get(r)||l,i===l&&a.set(null,n),a.set(r,n),this.count++,l=Yi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Nn={$$typeof:I,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function y0(e,t,a,l,n,i,r,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=uu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uu(0),this.hiddenUpdates=uu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function pd(e,t,a,l,n,i,r,s,g,j,w,C){return e=new y0(e,t,a,r,s,g,j,C),t=1,i===!0&&(t|=24),i=nt(3,null,null,t),e.current=i,i.stateNode=e,t=Vu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},$u(i),e}function vd(e){return e?(e=nl,e):nl}function bd(e,t,a,l,n,i){n=vd(n),l.context===null?l.context=n:l.pendingContext=n,l=la(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=na(e,l,t),a!==null&&(st(a,e,t),Pl(a,e,t))}function yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function fr(e,t){yd(e,t),(e=e.alternate)&&yd(e,t)}function xd(e){if(e.tag===13){var t=ll(e,67108864);t!==null&&st(t,e,67108864),fr(e,67108864)}}var Xi=!0;function x0(e,t,a,l){var n=M.T;M.T=null;var i=B.p;try{B.p=2,dr(e,t,a,l)}finally{B.p=i,M.T=n}}function S0(e,t,a,l){var n=M.T;M.T=null;var i=B.p;try{B.p=8,dr(e,t,a,l)}finally{B.p=i,M.T=n}}function dr(e,t,a,l){if(Xi){var n=mr(l);if(n===null)Ic(e,t,l,Qi,a),jd(e,l);else if(N0(n,e,t,a,l))l.stopPropagation();else if(jd(e,l),t&4&&-1<j0.indexOf(e)){for(;n!==null;){var i=Va(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Ea(i.pendingLanes);if(r!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;r;){var g=1<<31-at(r);s.entanglements[1]|=g,r&=~g}wt(i),(oe&6)===0&&(Ti=Nt()+500,pn(0))}}break;case 13:s=ll(i,2),s!==null&&st(s,i,2),Mi(),fr(i,2)}if(i=mr(l),i===null&&Ic(e,t,l,Qi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Ic(e,t,l,null,a)}}function mr(e){return e=bu(e),hr(e)}var Qi=null;function hr(e){if(Qi=null,e=Qa(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=A(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qi=e,null}function Sd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cm()){case Or:return 2;case _r:return 8;case kn:case rm:return 32;case Ur:return 268435456;default:return 32}default:return 32}}var gr=!1,va=null,ba=null,ya=null,En=new Map,zn=new Map,xa=[],j0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jd(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":En.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zn.delete(t.pointerId)}}function An(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Va(t),t!==null&&xd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function N0(e,t,a,l,n){switch(t){case"focusin":return va=An(va,e,t,a,l,n),!0;case"dragenter":return ba=An(ba,e,t,a,l,n),!0;case"mouseover":return ya=An(ya,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return En.set(i,An(En.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,zn.set(i,An(zn.get(i)||null,e,t,a,l,n)),!0}return!1}function Nd(e){var t=Qa(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=A(a),t!==null){e.blockedOn=t,pm(e.priority,function(){if(a.tag===13){var l=rt();l=cu(l);var n=ll(a,l);n!==null&&st(n,a,l),fr(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=mr(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);vu=l,a.target.dispatchEvent(l),vu=null}else return t=Va(a),t!==null&&xd(t),e.blockedOn=a,!1;t.shift()}return!0}function Ed(e,t,a){Vi(e)&&a.delete(t)}function E0(){gr=!1,va!==null&&Vi(va)&&(va=null),ba!==null&&Vi(ba)&&(ba=null),ya!==null&&Vi(ya)&&(ya=null),En.forEach(Ed),zn.forEach(Ed)}function Zi(e,t){e.blockedOn===t&&(e.blockedOn=null,gr||(gr=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,E0)))}var Ki=null;function zd(e){Ki!==e&&(Ki=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){Ki===e&&(Ki=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(hr(l||a)===null)continue;break}var i=Va(a);i!==null&&(e.splice(t,3),t-=3,hc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Tn(e){function t(g){return Zi(g,e)}va!==null&&Zi(va,e),ba!==null&&Zi(ba,e),ya!==null&&Zi(ya,e),En.forEach(t),zn.forEach(t);for(var a=0;a<xa.length;a++){var l=xa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<xa.length&&(a=xa[0],a.blockedOn===null);)Nd(a),a.blockedOn===null&&xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],r=n[Je]||null;if(typeof i=="function")r||zd(a);else if(r){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[Je]||null)s=r.formAction;else if(hr(n)!==null)continue}else s=r.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),zd(a)}}}function pr(e){this._internalRoot=e}Ji.prototype.render=pr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=rt();bd(a,l,e,t,null,null)},Ji.prototype.unmount=pr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bd(e.current,2,null,e,null,null),Mi(),t[Xa]=null}};function Ji(e){this._internalRoot=e}Ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=qr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<xa.length&&t!==0&&t<xa[a].priority;a++);xa.splice(a,0,e),a===0&&Nd(e)}};var Ad=d.version;if(Ad!=="19.1.1")throw Error(o(527,Ad,"19.1.1"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=x(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var z0={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{Rl=$i.inject(z0),tt=$i}catch{}}return Mn.createRoot=function(e,t){if(!m(e))throw Error(o(299));var a=!1,l="",n=Yo,i=Go,r=Xo,s=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(s=t.unstable_transitionCallbacks)),t=pd(e,1,!1,null,null,a,l,n,i,r,s,null),e[Xa]=t.current,Pc(e),new pr(t)},Mn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(o(299));var l=!1,n="",i=Yo,r=Go,s=Xo,g=null,j=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(g=a.unstable_transitionCallbacks),a.formState!==void 0&&(j=a.formState)),t=pd(e,1,!0,t,a??null,l,n,i,r,s,g,j),t.context=vd(null),a=t.current,l=rt(),l=cu(l),n=la(l),n.callback=null,na(a,n,l),a=l,t.current.lanes=a,Cl(t,a),wt(t),e[Xa]=t.current,Pc(e),new Ji(t)},Mn.version="19.1.1",Mn}var kd;function k0(){if(kd)return yr.exports;kd=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(d){console.error(d)}}return c(),yr.exports=U0(),yr.exports}var H0=k0();const B0=Gd(H0);/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Hd="popstate";function L0(c={}){function d(o,m){let{pathname:h,search:A,hash:N}=o.location;return zr("",{pathname:h,search:A,hash:N},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function f(o,m){return typeof m=="string"?m:Dn(m)}return Y0(d,f,null,c)}function je(c,d){if(c===!1||c===null||typeof c>"u")throw new Error(d)}function Dt(c,d){if(!c){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function q0(){return Math.random().toString(36).substring(2,10)}function Bd(c,d){return{usr:c.state,key:c.key,idx:d}}function zr(c,d,f=null,o){return{pathname:typeof c=="string"?c:c.pathname,search:"",hash:"",...typeof d=="string"?wl(d):d,state:f,key:d&&d.key||o||q0()}}function Dn({pathname:c="/",search:d="",hash:f=""}){return d&&d!=="?"&&(c+=d.charAt(0)==="?"?d:"?"+d),f&&f!=="#"&&(c+=f.charAt(0)==="#"?f:"#"+f),c}function wl(c){let d={};if(c){let f=c.indexOf("#");f>=0&&(d.hash=c.substring(f),c=c.substring(0,f));let o=c.indexOf("?");o>=0&&(d.search=c.substring(o),c=c.substring(0,o)),c&&(d.pathname=c)}return d}function Y0(c,d,f,o={}){let{window:m=document.defaultView,v5Compat:h=!1}=o,A=m.history,N="POP",x=null,p=T();p==null&&(p=0,A.replaceState({...A.state,idx:p},""));function T(){return(A.state||{idx:null}).idx}function _(){N="POP";let G=T(),k=G==null?null:G-p;p=G,x&&x({action:N,location:Q.location,delta:k})}function U(G,k){N="PUSH";let ue=zr(Q.location,G,k);p=T()+1;let I=Bd(ue,p),xe=Q.createHref(ue);try{A.pushState(I,"",xe)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;m.location.assign(xe)}h&&x&&x({action:N,location:Q.location,delta:1})}function J(G,k){N="REPLACE";let ue=zr(Q.location,G,k);p=T();let I=Bd(ue,p),xe=Q.createHref(ue);A.replaceState(I,"",xe),h&&x&&x({action:N,location:Q.location,delta:0})}function X(G){return G0(G)}let Q={get action(){return N},get location(){return c(m,A)},listen(G){if(x)throw new Error("A history only accepts one active listener");return m.addEventListener(Hd,_),x=G,()=>{m.removeEventListener(Hd,_),x=null}},createHref(G){return d(m,G)},createURL:X,encodeLocation(G){let k=X(G);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:U,replace:J,go(G){return A.go(G)}};return Q}function G0(c,d=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),je(f,"No window.location.(origin|href) available to create URL");let o=typeof c=="string"?c:Dn(c);return o=o.replace(/ $/,"%20"),!d&&o.startsWith("//")&&(o=f+o),new URL(o,f)}function Xd(c,d,f="/"){return X0(c,d,f,!1)}function X0(c,d,f,o){let m=typeof d=="string"?wl(d):d,h=Wt(m.pathname||"/",f);if(h==null)return null;let A=Qd(c);Q0(A);let N=null;for(let x=0;N==null&&x<A.length;++x){let p=tg(h);N=I0(A[x],p,o)}return N}function Qd(c,d=[],f=[],o=""){let m=(h,A,N)=>{let x={relativePath:N===void 0?h.path||"":N,caseSensitive:h.caseSensitive===!0,childrenIndex:A,route:h};x.relativePath.startsWith("/")&&(je(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length));let p=$t([o,x.relativePath]),T=f.concat(x);h.children&&h.children.length>0&&(je(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Qd(h.children,d,T,p)),!(h.path==null&&!h.index)&&d.push({path:p,score:F0(p,h.index),routesMeta:T})};return c.forEach((h,A)=>{if(h.path===""||!h.path?.includes("?"))m(h,A);else for(let N of Vd(h.path))m(h,A,N)}),d}function Vd(c){let d=c.split("/");if(d.length===0)return[];let[f,...o]=d,m=f.endsWith("?"),h=f.replace(/\?$/,"");if(o.length===0)return m?[h,""]:[h];let A=Vd(o.join("/")),N=[];return N.push(...A.map(x=>x===""?h:[h,x].join("/"))),m&&N.push(...A),N.map(x=>c.startsWith("/")&&x===""?"/":x)}function Q0(c){c.sort((d,f)=>d.score!==f.score?f.score-d.score:P0(d.routesMeta.map(o=>o.childrenIndex),f.routesMeta.map(o=>o.childrenIndex)))}var V0=/^:[\w-]+$/,Z0=3,K0=2,J0=1,$0=10,W0=-2,Ld=c=>c==="*";function F0(c,d){let f=c.split("/"),o=f.length;return f.some(Ld)&&(o+=W0),d&&(o+=K0),f.filter(m=>!Ld(m)).reduce((m,h)=>m+(V0.test(h)?Z0:h===""?J0:$0),o)}function P0(c,d){return c.length===d.length&&c.slice(0,-1).every((o,m)=>o===d[m])?c[c.length-1]-d[d.length-1]:0}function I0(c,d,f=!1){let{routesMeta:o}=c,m={},h="/",A=[];for(let N=0;N<o.length;++N){let x=o[N],p=N===o.length-1,T=h==="/"?d:d.slice(h.length)||"/",_=Ii({path:x.relativePath,caseSensitive:x.caseSensitive,end:p},T),U=x.route;if(!_&&p&&f&&!o[o.length-1].route.index&&(_=Ii({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},T)),!_)return null;Object.assign(m,_.params),A.push({params:m,pathname:$t([h,_.pathname]),pathnameBase:ig($t([h,_.pathnameBase])),route:U}),_.pathnameBase!=="/"&&(h=$t([h,_.pathnameBase]))}return A}function Ii(c,d){typeof c=="string"&&(c={path:c,caseSensitive:!1,end:!0});let[f,o]=eg(c.path,c.caseSensitive,c.end),m=d.match(f);if(!m)return null;let h=m[0],A=h.replace(/(.)\/+$/,"$1"),N=m.slice(1);return{params:o.reduce((p,{paramName:T,isOptional:_},U)=>{if(T==="*"){let X=N[U]||"";A=h.slice(0,h.length-X.length).replace(/(.)\/+$/,"$1")}const J=N[U];return _&&!J?p[T]=void 0:p[T]=(J||"").replace(/%2F/g,"/"),p},{}),pathname:h,pathnameBase:A,pattern:c}}function eg(c,d=!1,f=!0){Dt(c==="*"||!c.endsWith("*")||c.endsWith("/*"),`Route path "${c}" will be treated as if it were "${c.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/,"/*")}".`);let o=[],m="^"+c.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(A,N,x)=>(o.push({paramName:N,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return c.endsWith("*")?(o.push({paramName:"*"}),m+=c==="*"||c==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":c!==""&&c!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,d?void 0:"i"),o]}function tg(c){try{return c.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Dt(!1,`The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),c}}function Wt(c,d){if(d==="/")return c;if(!c.toLowerCase().startsWith(d.toLowerCase()))return null;let f=d.endsWith("/")?d.length-1:d.length,o=c.charAt(f);return o&&o!=="/"?null:c.slice(f)||"/"}function ag(c,d="/"){let{pathname:f,search:o="",hash:m=""}=typeof c=="string"?wl(c):c;return{pathname:f?f.startsWith("/")?f:lg(f,d):d,search:ug(o),hash:cg(m)}}function lg(c,d){let f=d.replace(/\/+$/,"").split("/");return c.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function Nr(c,d,f,o){return`Cannot include a '${c}' character in a manually specified \`to.${d}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ng(c){return c.filter((d,f)=>f===0||d.route.path&&d.route.path.length>0)}function Zd(c){let d=ng(c);return d.map((f,o)=>o===d.length-1?f.pathname:f.pathnameBase)}function Kd(c,d,f,o=!1){let m;typeof c=="string"?m=wl(c):(m={...c},je(!m.pathname||!m.pathname.includes("?"),Nr("?","pathname","search",m)),je(!m.pathname||!m.pathname.includes("#"),Nr("#","pathname","hash",m)),je(!m.search||!m.search.includes("#"),Nr("#","search","hash",m)));let h=c===""||m.pathname==="",A=h?"/":m.pathname,N;if(A==null)N=f;else{let _=d.length-1;if(!o&&A.startsWith("..")){let U=A.split("/");for(;U[0]==="..";)U.shift(),_-=1;m.pathname=U.join("/")}N=_>=0?d[_]:"/"}let x=ag(m,N),p=A&&A!=="/"&&A.endsWith("/"),T=(h||A===".")&&f.endsWith("/");return!x.pathname.endsWith("/")&&(p||T)&&(x.pathname+="/"),x}var $t=c=>c.join("/").replace(/\/\/+/g,"/"),ig=c=>c.replace(/\/+$/,"").replace(/^\/*/,"/"),ug=c=>!c||c==="?"?"":c.startsWith("?")?c:"?"+c,cg=c=>!c||c==="#"?"":c.startsWith("#")?c:"#"+c;function rg(c){return c!=null&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.internal=="boolean"&&"data"in c}var Jd=["POST","PUT","PATCH","DELETE"];new Set(Jd);var sg=["GET",...Jd];new Set(sg);var Ml=R.createContext(null);Ml.displayName="DataRouter";var eu=R.createContext(null);eu.displayName="DataRouterState";R.createContext(!1);var $d=R.createContext({isTransitioning:!1});$d.displayName="ViewTransition";var og=R.createContext(new Map);og.displayName="Fetchers";var fg=R.createContext(null);fg.displayName="Await";var Ct=R.createContext(null);Ct.displayName="Navigation";var Cn=R.createContext(null);Cn.displayName="Location";var Ot=R.createContext({outlet:null,matches:[],isDataRoute:!1});Ot.displayName="Route";var wr=R.createContext(null);wr.displayName="RouteError";function dg(c,{relative:d}={}){je(On(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:o}=R.useContext(Ct),{hash:m,pathname:h,search:A}=_n(c,{relative:d}),N=h;return f!=="/"&&(N=h==="/"?f:$t([f,h])),o.createHref({pathname:N,search:A,hash:m})}function On(){return R.useContext(Cn)!=null}function Ga(){return je(On(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Cn).location}var Wd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fd(c){R.useContext(Ct).static||R.useLayoutEffect(c)}function mg(){let{isDataRoute:c}=R.useContext(Ot);return c?wg():hg()}function hg(){je(On(),"useNavigate() may be used only in the context of a <Router> component.");let c=R.useContext(Ml),{basename:d,navigator:f}=R.useContext(Ct),{matches:o}=R.useContext(Ot),{pathname:m}=Ga(),h=JSON.stringify(Zd(o)),A=R.useRef(!1);return Fd(()=>{A.current=!0}),R.useCallback((x,p={})=>{if(Dt(A.current,Wd),!A.current)return;if(typeof x=="number"){f.go(x);return}let T=Kd(x,JSON.parse(h),m,p.relative==="path");c==null&&d!=="/"&&(T.pathname=T.pathname==="/"?d:$t([d,T.pathname])),(p.replace?f.replace:f.push)(T,p.state,p)},[d,f,h,m,c])}var gg=R.createContext(null);function pg(c){let d=R.useContext(Ot).outlet;return d&&R.createElement(gg.Provider,{value:c},d)}function _n(c,{relative:d}={}){let{matches:f}=R.useContext(Ot),{pathname:o}=Ga(),m=JSON.stringify(Zd(f));return R.useMemo(()=>Kd(c,JSON.parse(m),o,d==="path"),[c,m,o,d])}function vg(c,d){return Pd(c,d)}function Pd(c,d,f,o){je(On(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=R.useContext(Ct),{matches:h}=R.useContext(Ot),A=h[h.length-1],N=A?A.params:{},x=A?A.pathname:"/",p=A?A.pathnameBase:"/",T=A&&A.route;{let k=T&&T.path||"";Id(x,!T||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let _=Ga(),U;if(d){let k=typeof d=="string"?wl(d):d;je(p==="/"||k.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${k.pathname}" was given in the \`location\` prop.`),U=k}else U=_;let J=U.pathname||"/",X=J;if(p!=="/"){let k=p.replace(/^\//,"").split("/");X="/"+J.replace(/^\//,"").split("/").slice(k.length).join("/")}let Q=Xd(c,{pathname:X});Dt(T||Q!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),Dt(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=jg(Q&&Q.map(k=>Object.assign({},k,{params:Object.assign({},N,k.params),pathname:$t([p,m.encodeLocation?m.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?p:$t([p,m.encodeLocation?m.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),h,f,o);return d&&G?R.createElement(Cn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...U},navigationType:"POP"}},G):G}function bg(){let c=Tg(),d=rg(c)?`${c.status} ${c.statusText}`:c instanceof Error?c.message:JSON.stringify(c),f=c instanceof Error?c.stack:null,o="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:o},h={padding:"2px 4px",backgroundColor:o},A=null;return console.error("Error handled by React Router default ErrorBoundary:",c),A=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:h},"ErrorBoundary")," or"," ",R.createElement("code",{style:h},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},d),f?R.createElement("pre",{style:m},f):null,A)}var yg=R.createElement(bg,null),xg=class extends R.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,d){return d.location!==c.location||d.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:d.error,location:d.location,revalidation:c.revalidation||d.revalidation}}componentDidCatch(c,d){console.error("React Router caught the following error during render",c,d)}render(){return this.state.error!==void 0?R.createElement(Ot.Provider,{value:this.props.routeContext},R.createElement(wr.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Sg({routeContext:c,match:d,children:f}){let o=R.useContext(Ml);return o&&o.static&&o.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=d.route.id),R.createElement(Ot.Provider,{value:c},f)}function jg(c,d=[],f=null,o=null){if(c==null){if(!f)return null;if(f.errors)c=f.matches;else if(d.length===0&&!f.initialized&&f.matches.length>0)c=f.matches;else return null}let m=c,h=f?.errors;if(h!=null){let x=m.findIndex(p=>p.route.id&&h?.[p.route.id]!==void 0);je(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),m=m.slice(0,Math.min(m.length,x+1))}let A=!1,N=-1;if(f)for(let x=0;x<m.length;x++){let p=m[x];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(N=x),p.route.id){let{loaderData:T,errors:_}=f,U=p.route.loader&&!T.hasOwnProperty(p.route.id)&&(!_||_[p.route.id]===void 0);if(p.route.lazy||U){A=!0,N>=0?m=m.slice(0,N+1):m=[m[0]];break}}}return m.reduceRight((x,p,T)=>{let _,U=!1,J=null,X=null;f&&(_=h&&p.route.id?h[p.route.id]:void 0,J=p.route.errorElement||yg,A&&(N<0&&T===0?(Id("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),U=!0,X=null):N===T&&(U=!0,X=p.route.hydrateFallbackElement||null)));let Q=d.concat(m.slice(0,T+1)),G=()=>{let k;return _?k=J:U?k=X:p.route.Component?k=R.createElement(p.route.Component,null):p.route.element?k=p.route.element:k=x,R.createElement(Sg,{match:p,routeContext:{outlet:x,matches:Q,isDataRoute:f!=null},children:k})};return f&&(p.route.ErrorBoundary||p.route.errorElement||T===0)?R.createElement(xg,{location:f.location,revalidation:f.revalidation,component:J,error:_,children:G(),routeContext:{outlet:null,matches:Q,isDataRoute:!0}}):G()},null)}function Mr(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ng(c){let d=R.useContext(Ml);return je(d,Mr(c)),d}function Eg(c){let d=R.useContext(eu);return je(d,Mr(c)),d}function zg(c){let d=R.useContext(Ot);return je(d,Mr(c)),d}function Rr(c){let d=zg(c),f=d.matches[d.matches.length-1];return je(f.route.id,`${c} can only be used on routes that contain a unique "id"`),f.route.id}function Ag(){return Rr("useRouteId")}function Tg(){let c=R.useContext(wr),d=Eg("useRouteError"),f=Rr("useRouteError");return c!==void 0?c:d.errors?.[f]}function wg(){let{router:c}=Ng("useNavigate"),d=Rr("useNavigate"),f=R.useRef(!1);return Fd(()=>{f.current=!0}),R.useCallback(async(m,h={})=>{Dt(f.current,Wd),f.current&&(typeof m=="number"?c.navigate(m):await c.navigate(m,{fromRouteId:d,...h}))},[c,d])}var qd={};function Id(c,d,f){!d&&!qd[c]&&(qd[c]=!0,Dt(!1,f))}R.memo(Mg);function Mg({routes:c,future:d,state:f}){return Pd(c,void 0,f,d)}function Rg(c){return pg(c.context)}function Mt(c){je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Dg({basename:c="/",children:d=null,location:f,navigationType:o="POP",navigator:m,static:h=!1}){je(!On(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let A=c.replace(/^\/*/,"/"),N=R.useMemo(()=>({basename:A,navigator:m,static:h,future:{}}),[A,m,h]);typeof f=="string"&&(f=wl(f));let{pathname:x="/",search:p="",hash:T="",state:_=null,key:U="default"}=f,J=R.useMemo(()=>{let X=Wt(x,A);return X==null?null:{location:{pathname:X,search:p,hash:T,state:_,key:U},navigationType:o}},[A,x,p,T,_,U,o]);return Dt(J!=null,`<Router basename="${A}"> is not able to match the URL "${x}${p}${T}" because it does not start with the basename, so the <Router> won't render anything.`),J==null?null:R.createElement(Ct.Provider,{value:N},R.createElement(Cn.Provider,{children:d,value:J}))}function Cg({children:c,location:d}){return vg(Ar(c),d)}function Ar(c,d=[]){let f=[];return R.Children.forEach(c,(o,m)=>{if(!R.isValidElement(o))return;let h=[...d,m];if(o.type===R.Fragment){f.push.apply(f,Ar(o.props.children,h));return}je(o.type===Mt,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),je(!o.props.index||!o.props.children,"An index route cannot have child routes.");let A={id:o.props.id||h.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(A.children=Ar(o.props.children,h)),f.push(A)}),f}var Fi="get",Pi="application/x-www-form-urlencoded";function tu(c){return c!=null&&typeof c.tagName=="string"}function Og(c){return tu(c)&&c.tagName.toLowerCase()==="button"}function _g(c){return tu(c)&&c.tagName.toLowerCase()==="form"}function Ug(c){return tu(c)&&c.tagName.toLowerCase()==="input"}function kg(c){return!!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)}function Hg(c,d){return c.button===0&&(!d||d==="_self")&&!kg(c)}var Wi=null;function Bg(){if(Wi===null)try{new FormData(document.createElement("form"),0),Wi=!1}catch{Wi=!0}return Wi}var Lg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Er(c){return c!=null&&!Lg.has(c)?(Dt(!1,`"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pi}"`),null):c}function qg(c,d){let f,o,m,h,A;if(_g(c)){let N=c.getAttribute("action");o=N?Wt(N,d):null,f=c.getAttribute("method")||Fi,m=Er(c.getAttribute("enctype"))||Pi,h=new FormData(c)}else if(Og(c)||Ug(c)&&(c.type==="submit"||c.type==="image")){let N=c.form;if(N==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=c.getAttribute("formaction")||N.getAttribute("action");if(o=x?Wt(x,d):null,f=c.getAttribute("formmethod")||N.getAttribute("method")||Fi,m=Er(c.getAttribute("formenctype"))||Er(N.getAttribute("enctype"))||Pi,h=new FormData(N,c),!Bg()){let{name:p,type:T,value:_}=c;if(T==="image"){let U=p?`${p}.`:"";h.append(`${U}x`,"0"),h.append(`${U}y`,"0")}else p&&h.append(p,_)}}else{if(tu(c))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=Fi,o=null,m=Pi,A=c}return h&&m==="text/plain"&&(A=h,h=void 0),{action:o,method:f.toLowerCase(),encType:m,formData:h,body:A}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Dr(c,d){if(c===!1||c===null||typeof c>"u")throw new Error(d)}function Yg(c,d,f){let o=typeof c=="string"?new URL(c,typeof window>"u"?"server://singlefetch/":window.location.origin):c;return o.pathname==="/"?o.pathname=`_root.${f}`:d&&Wt(o.pathname,d)==="/"?o.pathname=`${d.replace(/\/$/,"")}/_root.${f}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${f}`,o}async function Gg(c,d){if(c.id in d)return d[c.id];try{let f=await import(c.module);return d[c.id]=f,f}catch(f){return console.error(`Error loading route module \`${c.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xg(c){return c==null?!1:c.href==null?c.rel==="preload"&&typeof c.imageSrcSet=="string"&&typeof c.imageSizes=="string":typeof c.rel=="string"&&typeof c.href=="string"}async function Qg(c,d,f){let o=await Promise.all(c.map(async m=>{let h=d.routes[m.route.id];if(h){let A=await Gg(h,f);return A.links?A.links():[]}return[]}));return Jg(o.flat(1).filter(Xg).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Yd(c,d,f,o,m,h){let A=(x,p)=>f[p]?x.route.id!==f[p].route.id:!0,N=(x,p)=>f[p].pathname!==x.pathname||f[p].route.path?.endsWith("*")&&f[p].params["*"]!==x.params["*"];return h==="assets"?d.filter((x,p)=>A(x,p)||N(x,p)):h==="data"?d.filter((x,p)=>{let T=o.routes[x.route.id];if(!T||!T.hasLoader)return!1;if(A(x,p)||N(x,p))return!0;if(x.route.shouldRevalidate){let _=x.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(c,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function Vg(c,d,{includeHydrateFallback:f}={}){return Zg(c.map(o=>{let m=d.routes[o.route.id];if(!m)return[];let h=[m.module];return m.clientActionModule&&(h=h.concat(m.clientActionModule)),m.clientLoaderModule&&(h=h.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(h=h.concat(m.hydrateFallbackModule)),m.imports&&(h=h.concat(m.imports)),h}).flat(1))}function Zg(c){return[...new Set(c)]}function Kg(c){let d={},f=Object.keys(c).sort();for(let o of f)d[o]=c[o];return d}function Jg(c,d){let f=new Set;return new Set(d),c.reduce((o,m)=>{let h=JSON.stringify(Kg(m));return f.has(h)||(f.add(h),o.push({key:h,link:m})),o},[])}function em(){let c=R.useContext(Ml);return Dr(c,"You must render this element inside a <DataRouterContext.Provider> element"),c}function $g(){let c=R.useContext(eu);return Dr(c,"You must render this element inside a <DataRouterStateContext.Provider> element"),c}var Cr=R.createContext(void 0);Cr.displayName="FrameworkContext";function tm(){let c=R.useContext(Cr);return Dr(c,"You must render this element inside a <HydratedRouter> element"),c}function Wg(c,d){let f=R.useContext(Cr),[o,m]=R.useState(!1),[h,A]=R.useState(!1),{onFocus:N,onBlur:x,onMouseEnter:p,onMouseLeave:T,onTouchStart:_}=d,U=R.useRef(null);R.useEffect(()=>{if(c==="render"&&A(!0),c==="viewport"){let Q=k=>{k.forEach(ue=>{A(ue.isIntersecting)})},G=new IntersectionObserver(Q,{threshold:.5});return U.current&&G.observe(U.current),()=>{G.disconnect()}}},[c]),R.useEffect(()=>{if(o){let Q=setTimeout(()=>{A(!0)},100);return()=>{clearTimeout(Q)}}},[o]);let J=()=>{m(!0)},X=()=>{m(!1),A(!1)};return f?c!=="intent"?[h,U,{}]:[h,U,{onFocus:Rn(N,J),onBlur:Rn(x,X),onMouseEnter:Rn(p,J),onMouseLeave:Rn(T,X),onTouchStart:Rn(_,J)}]:[!1,U,{}]}function Rn(c,d){return f=>{c&&c(f),f.defaultPrevented||d(f)}}function Fg({page:c,...d}){let{router:f}=em(),o=R.useMemo(()=>Xd(f.routes,c,f.basename),[f.routes,c,f.basename]);return o?R.createElement(Ig,{page:c,matches:o,...d}):null}function Pg(c){let{manifest:d,routeModules:f}=tm(),[o,m]=R.useState([]);return R.useEffect(()=>{let h=!1;return Qg(c,d,f).then(A=>{h||m(A)}),()=>{h=!0}},[c,d,f]),o}function Ig({page:c,matches:d,...f}){let o=Ga(),{manifest:m,routeModules:h}=tm(),{basename:A}=em(),{loaderData:N,matches:x}=$g(),p=R.useMemo(()=>Yd(c,d,x,m,o,"data"),[c,d,x,m,o]),T=R.useMemo(()=>Yd(c,d,x,m,o,"assets"),[c,d,x,m,o]),_=R.useMemo(()=>{if(c===o.pathname+o.search+o.hash)return[];let X=new Set,Q=!1;if(d.forEach(k=>{let ue=m.routes[k.route.id];!ue||!ue.hasLoader||(!p.some(I=>I.route.id===k.route.id)&&k.route.id in N&&h[k.route.id]?.shouldRevalidate||ue.hasClientLoader?Q=!0:X.add(k.route.id))}),X.size===0)return[];let G=Yg(c,A,"data");return Q&&X.size>0&&G.searchParams.set("_routes",d.filter(k=>X.has(k.route.id)).map(k=>k.route.id).join(",")),[G.pathname+G.search]},[A,N,o,m,p,d,c,h]),U=R.useMemo(()=>Vg(T,m),[T,m]),J=Pg(T);return R.createElement(R.Fragment,null,_.map(X=>R.createElement("link",{key:X,rel:"prefetch",as:"fetch",href:X,...f})),U.map(X=>R.createElement("link",{key:X,rel:"modulepreload",href:X,...f})),J.map(({key:X,link:Q})=>R.createElement("link",{key:X,...Q})))}function ep(...c){return d=>{c.forEach(f=>{typeof f=="function"?f(d):f!=null&&(f.current=d)})}}var am=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{am&&(window.__reactRouterVersion="7.7.1")}catch{}function tp({basename:c,children:d,window:f}){let o=R.useRef();o.current==null&&(o.current=L0({window:f,v5Compat:!0}));let m=o.current,[h,A]=R.useState({action:m.action,location:m.location}),N=R.useCallback(x=>{R.startTransition(()=>A(x))},[A]);return R.useLayoutEffect(()=>m.listen(N),[m,N]),R.createElement(Dg,{basename:c,children:d,location:h.location,navigationType:h.action,navigator:m})}var lm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rt=R.forwardRef(function({onClick:d,discover:f="render",prefetch:o="none",relative:m,reloadDocument:h,replace:A,state:N,target:x,to:p,preventScrollReset:T,viewTransition:_,...U},J){let{basename:X}=R.useContext(Ct),Q=typeof p=="string"&&lm.test(p),G,k=!1;if(typeof p=="string"&&Q&&(G=p,am))try{let Ne=new URL(window.location.href),Ie=p.startsWith("//")?new URL(Ne.protocol+p):new URL(p),ot=Wt(Ie.pathname,X);Ie.origin===Ne.origin&&ot!=null?p=ot+Ie.search+Ie.hash:k=!0}catch{Dt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ue=dg(p,{relative:m}),[I,xe,F]=Wg(o,U),Oe=ip(p,{replace:A,state:N,target:x,preventScrollReset:T,relative:m,viewTransition:_});function Re(Ne){d&&d(Ne),Ne.defaultPrevented||Oe(Ne)}let _e=R.createElement("a",{...U,...F,href:G||ue,onClick:k||h?d:Re,ref:ep(J,xe),target:x,"data-discover":!Q&&f==="render"?"true":void 0});return I&&!Q?R.createElement(R.Fragment,null,_e,R.createElement(Fg,{page:ue})):_e});Rt.displayName="Link";var ap=R.forwardRef(function({"aria-current":d="page",caseSensitive:f=!1,className:o="",end:m=!1,style:h,to:A,viewTransition:N,children:x,...p},T){let _=_n(A,{relative:p.relative}),U=Ga(),J=R.useContext(eu),{navigator:X,basename:Q}=R.useContext(Ct),G=J!=null&&op(_)&&N===!0,k=X.encodeLocation?X.encodeLocation(_).pathname:_.pathname,ue=U.pathname,I=J&&J.navigation&&J.navigation.location?J.navigation.location.pathname:null;f||(ue=ue.toLowerCase(),I=I?I.toLowerCase():null,k=k.toLowerCase()),I&&Q&&(I=Wt(I,Q)||I);const xe=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let F=ue===k||!m&&ue.startsWith(k)&&ue.charAt(xe)==="/",Oe=I!=null&&(I===k||!m&&I.startsWith(k)&&I.charAt(k.length)==="/"),Re={isActive:F,isPending:Oe,isTransitioning:G},_e=F?d:void 0,Ne;typeof o=="function"?Ne=o(Re):Ne=[o,F?"active":null,Oe?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let Ie=typeof h=="function"?h(Re):h;return R.createElement(Rt,{...p,"aria-current":_e,className:Ne,ref:T,style:Ie,to:A,viewTransition:N},typeof x=="function"?x(Re):x)});ap.displayName="NavLink";var lp=R.forwardRef(({discover:c="render",fetcherKey:d,navigate:f,reloadDocument:o,replace:m,state:h,method:A=Fi,action:N,onSubmit:x,relative:p,preventScrollReset:T,viewTransition:_,...U},J)=>{let X=rp(),Q=sp(N,{relative:p}),G=A.toLowerCase()==="get"?"get":"post",k=typeof N=="string"&&lm.test(N),ue=I=>{if(x&&x(I),I.defaultPrevented)return;I.preventDefault();let xe=I.nativeEvent.submitter,F=xe?.getAttribute("formmethod")||A;X(xe||I.currentTarget,{fetcherKey:d,method:F,navigate:f,replace:m,state:h,relative:p,preventScrollReset:T,viewTransition:_})};return R.createElement("form",{ref:J,method:G,action:Q,onSubmit:o?x:ue,...U,"data-discover":!k&&c==="render"?"true":void 0})});lp.displayName="Form";function np(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nm(c){let d=R.useContext(Ml);return je(d,np(c)),d}function ip(c,{target:d,replace:f,state:o,preventScrollReset:m,relative:h,viewTransition:A}={}){let N=mg(),x=Ga(),p=_n(c,{relative:h});return R.useCallback(T=>{if(Hg(T,d)){T.preventDefault();let _=f!==void 0?f:Dn(x)===Dn(p);N(c,{replace:_,state:o,preventScrollReset:m,relative:h,viewTransition:A})}},[x,N,p,f,o,d,c,m,h,A])}var up=0,cp=()=>`__${String(++up)}__`;function rp(){let{router:c}=nm("useSubmit"),{basename:d}=R.useContext(Ct),f=Ag();return R.useCallback(async(o,m={})=>{let{action:h,method:A,encType:N,formData:x,body:p}=qg(o,d);if(m.navigate===!1){let T=m.fetcherKey||cp();await c.fetch(T,f,m.action||h,{preventScrollReset:m.preventScrollReset,formData:x,body:p,formMethod:m.method||A,formEncType:m.encType||N,flushSync:m.flushSync})}else await c.navigate(m.action||h,{preventScrollReset:m.preventScrollReset,formData:x,body:p,formMethod:m.method||A,formEncType:m.encType||N,replace:m.replace,state:m.state,fromRouteId:f,flushSync:m.flushSync,viewTransition:m.viewTransition})},[c,d,f])}function sp(c,{relative:d}={}){let{basename:f}=R.useContext(Ct),o=R.useContext(Ot);je(o,"useFormAction must be used inside a RouteContext");let[m]=o.matches.slice(-1),h={..._n(c||".",{relative:d})},A=Ga();if(c==null){h.search=A.search;let N=new URLSearchParams(h.search),x=N.getAll("index");if(x.some(T=>T==="")){N.delete("index"),x.filter(_=>_).forEach(_=>N.append("index",_));let T=N.toString();h.search=T?`?${T}`:""}}return(!c||c===".")&&m.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(h.pathname=h.pathname==="/"?f:$t([f,h.pathname])),Dn(h)}function op(c,{relative:d}={}){let f=R.useContext($d);je(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=nm("useViewTransitionState"),m=_n(c,{relative:d});if(!f.isTransitioning)return!1;let h=Wt(f.currentLocation.pathname,o)||f.currentLocation.pathname,A=Wt(f.nextLocation.pathname,o)||f.nextLocation.pathname;return Ii(m.pathname,A)!=null||Ii(m.pathname,h)!=null}const fp=()=>u.jsx("header",{className:"header",children:u.jsx("nav",{className:"navbar",children:u.jsxs("ul",{className:"nav-list",children:[u.jsx("li",{children:u.jsx(Rt,{to:"/",children:"Home"})}),u.jsx("li",{children:u.jsx(Rt,{to:"/about",children:"About"})}),u.jsx("li",{children:u.jsx(Rt,{to:"/projects",children:"Projects"})}),u.jsx("li",{children:u.jsx(Rt,{to:"/skills",children:"Skills"})}),u.jsx("li",{children:u.jsx(Rt,{to:"/experience",children:"Experience"})}),u.jsx("li",{children:u.jsx(Rt,{to:"/resume",children:"Resume"})}),u.jsx("li",{children:u.jsx(Rt,{to:"/blog",children:"Blog"})}),u.jsx("li",{children:u.jsx(Rt,{to:"/contact",children:"Contact"})})]})})}),dp=()=>{const[c,d]=R.useState(!1);R.useEffect(()=>{const N=()=>{d(window.scrollY>500)};return window.addEventListener("scroll",N),()=>window.removeEventListener("scroll",N)},[]);const f=()=>{window.scrollTo({top:0,behavior:"smooth"})},o=N=>{const x=document.getElementById(N);x&&x.scrollIntoView({behavior:"smooth"})},m=[{name:"LinkedIn",url:"https://linkedin.com/in/prathickshaselvaraj",icon:u.jsx("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})},{name:"GitHub",url:"https://github.com/prathickshaselvaraj",icon:u.jsx("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})})},{name:"Email",url:"mailto:prathicksha006@gmail.com",icon:u.jsx("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 10.724l9.615-6.903h.749c.904 0 1.636.732 1.636 1.636z"})})}],h=[{label:"Home",href:"home"},{label:"About",href:"about"},{label:"Projects",href:"projects"},{label:"Skills",href:"skills"},{label:"Experience",href:"experience"},{label:"Resume",href:"resume"},{label:"Blog",href:"blog"},{label:"Contact",href:"contact"}],A=new Date().getFullYear();return u.jsxs("footer",{className:"footer",children:[u.jsx("div",{className:"footer-content",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"footer-grid",children:[u.jsxs("div",{className:"footer-brand",children:[u.jsx("h3",{className:"brand-name",children:"Prathicksha S"}),u.jsx("p",{className:"brand-tagline",children:"M.Sc. Decision & Computing Science Student"}),u.jsx("p",{className:"brand-description",children:"Passionate about technology, continuous learning, and building solutions that make a difference. Currently seeking internship opportunities to apply my skills in real-world projects."}),u.jsxs("div",{className:"brand-stats",children:[u.jsxs("div",{className:"stat",children:[u.jsx("span",{className:"stat-number",children:"5+"}),u.jsx("span",{className:"stat-label",children:"Projects"})]}),u.jsxs("div",{className:"stat",children:[u.jsx("span",{className:"stat-number",children:"10+"}),u.jsx("span",{className:"stat-label",children:"Technologies"})]}),u.jsxs("div",{className:"stat",children:[u.jsx("span",{className:"stat-number",children:"2+"}),u.jsx("span",{className:"stat-label",children:"Leadership Roles"})]})]})]}),u.jsxs("div",{className:"footer-links",children:[u.jsx("h4",{children:"Quick Links"}),u.jsx("div",{className:"links-grid",children:h.map((N,x)=>u.jsx("button",{onClick:()=>o(N.href),className:"footer-link",children:N.label},x))})]}),u.jsxs("div",{className:"footer-skills",children:[u.jsx("h4",{children:"Core Skills"}),u.jsxs("div",{className:"skills-list",children:[u.jsx("span",{className:"skill-item",children:"Python"}),u.jsx("span",{className:"skill-item",children:"Java"}),u.jsx("span",{className:"skill-item",children:"React"}),u.jsx("span",{className:"skill-item",children:"Machine Learning"}),u.jsx("span",{className:"skill-item",children:"Data Structures"}),u.jsx("span",{className:"skill-item",children:"Full-Stack Development"}),u.jsx("span",{className:"skill-item",children:"Leadership"}),u.jsx("span",{className:"skill-item",children:"Project Management"})]})]}),u.jsxs("div",{className:"footer-contact",children:[u.jsx("h4",{children:"Let's Connect"}),u.jsxs("div",{className:"contact-info",children:[u.jsxs("div",{className:"contact-item",children:[u.jsx("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 10.724l9.615-6.903h.749c.904 0 1.636.732 1.636 1.636z"})}),u.jsx("span",{children:"prathicksha006@gmail.com"})]}),u.jsxs("div",{className:"contact-item",children:[u.jsx("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})}),u.jsx("span",{children:"Available for Remote/Hybrid Opportunities"})]}),u.jsxs("div",{className:"contact-item",children:[u.jsx("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})}),u.jsx("span",{children:"Available for Internships"})]})]}),u.jsx("div",{className:"social-links",children:m.map((N,x)=>u.jsx("a",{href:N.url,target:N.url.startsWith("http")?"_blank":"_self",rel:N.url.startsWith("http")?"noopener noreferrer":"",className:"social-link","aria-label":N.name,children:N.icon},x))})]})]})})}),u.jsx("div",{className:"footer-bottom",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"bottom-content",children:[u.jsxs("div",{className:"copyright",children:[u.jsxs("p",{children:["© ",A," Prathicksha S. All rights reserved."]}),u.jsx("p",{className:"built-with",children:"Built with React ⚛️ • Designed with ❤️"})]}),u.jsxs("div",{className:"footer-cta",children:[u.jsx("p",{children:"Ready to collaborate? Let's build something amazing together!"}),u.jsx("button",{onClick:()=>o("contact"),className:"cta-button",children:"Get In Touch"})]})]})})}),c&&u.jsx("button",{className:"back-to-top",onClick:f,"aria-label":"Back to top",children:u.jsx("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"})})}),u.jsx("style",{jsx:!0,children:`
        .footer {
          background: #1a202c;
          color: white;
          position: relative;
        }

        .footer-content {
          padding: 4rem 0 2rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .brand-name {
          font-size: 2rem;
          font-weight: 800;
          color: #60a5fa;
          margin: 0;
        }

        .brand-tagline {
          font-size: 1.1rem;
          color: #94a3b8;
          margin: 0;
          font-weight: 600;
        }

        .brand-description {
          color: #cbd5e0;
          line-height: 1.6;
          margin: 0;
        }

        .brand-stats {
          display: flex;
          gap: 2rem;
          margin-top: 1rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 1.5rem;
          font-weight: 800;
          color: #60a5fa;
        }

        .stat-label {
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .footer-links h4,
        .footer-skills h4,
        .footer-contact h4 {
          color: #60a5fa;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }

        .footer-link {
          background: none;
          border: none;
          color: #cbd5e0;
          text-align: left;
          padding: 0.5rem 0;
          cursor: pointer;
          transition: color 0.3s ease;
          font-size: 0.95rem;
        }

        .footer-link:hover {
          color: #60a5fa;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-item {
          background: rgba(96, 165, 250, 0.1);
          color: #60a5fa;
          padding: 0.4rem 0.8rem;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #cbd5e0;
          font-size: 0.9rem;
        }

        .contact-item svg {
          color: #60a5fa;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(96, 165, 250, 0.1);
          color: #60a5fa;
          border-radius: 50%;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          background: #60a5fa;
          color: white;
          transform: translateY(-3px);
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding: 2rem 0;
        }

        .bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .copyright {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .copyright p {
          margin: 0;
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .built-with {
          font-size: 0.8rem !important;
          color: #6b7280 !important;
        }

        .footer-cta {
          text-align: right;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-end;
        }

        .footer-cta p {
          margin: 0;
          color: #cbd5e0;
          font-size: 0.95rem;
        }

        .cta-button {
          background: linear-gradient(45deg, #60a5fa, #3b82f6);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(96, 165, 250, 0.4);
        }

        .back-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, #60a5fa, #3b82f6);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1000;
          box-shadow: 0 4px 15px rgba(96, 165, 250, 0.4);
        }

        .back-to-top:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(96, 165, 250, 0.6);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .brand-stats {
            justify-content: flex-start;
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            padding: 3rem 0 1.5rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .brand-stats {
            justify-content: space-around;
          }

          .links-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }

          .footer-cta {
            align-items: center;
            text-align: center;
          }

          .back-to-top {
            bottom: 1rem;
            right: 1rem;
            width: 45px;
            height: 45px;
          }
        }

        @media (max-width: 480px) {
          .links-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .brand-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .social-links {
            justify-content: center;
          }
        }
      `})]})},mp=()=>u.jsxs("div",{className:"app-container",children:[u.jsx(fp,{}),u.jsx("main",{className:"main-content",children:u.jsx(Rg,{})}),u.jsx(dp,{})]}),hp=()=>{const c=d=>{const f=document.getElementById(d);f&&f.scrollIntoView({behavior:"smooth"})};return u.jsxs("section",{id:"home",className:"hero",children:[u.jsx("div",{className:"hero-container",children:u.jsx("div",{className:"hero-content",children:u.jsxs("div",{className:"hero-text",children:[u.jsxs("h1",{className:"hero-title",children:["Hi, I'm ",u.jsx("span",{className:"highlight",children:"Prathicksha S"})]}),u.jsx("h2",{className:"hero-subtitle",children:"M.Sc. Decision & Computing Science Student"}),u.jsx("p",{className:"hero-description",children:"Passionate about combining analytical thinking with programming to solve real-world problems. Currently building expertise in full-stack development, data structures, and machine learning while exploring the intersection of technology and impact."}),u.jsxs("div",{className:"hero-stats",children:[u.jsxs("div",{className:"stat",children:[u.jsx("span",{className:"stat-number",children:"5+"}),u.jsx("span",{className:"stat-label",children:"Projects Built"})]}),u.jsxs("div",{className:"stat",children:[u.jsx("span",{className:"stat-number",children:"3rd"}),u.jsx("span",{className:"stat-label",children:"Year Student"})]}),u.jsxs("div",{className:"stat",children:[u.jsx("span",{className:"stat-number",children:"10+"}),u.jsx("span",{className:"stat-label",children:"Technologies"})]})]}),u.jsxs("div",{className:"hero-cta",children:[u.jsx("button",{className:"btn btn-primary",onClick:()=>c("projects"),children:"View My Work"}),u.jsx("button",{className:"btn btn-secondary",onClick:()=>c("contact"),children:"Get In Touch"})]}),u.jsxs("div",{className:"hero-social",children:[u.jsx("a",{href:"https://github.com/prathickshaselvaraj",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"GitHub",children:u.jsx("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})})}),u.jsx("a",{href:"https://linkedin.com/in/prathickshaselvaraj",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"LinkedIn",children:u.jsx("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),u.jsx("a",{href:"mailto:prathicksha006@gmail.com",className:"social-link","aria-label":"Email",children:u.jsx("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 10.724l9.615-6.903h.749c.904 0 1.636.732 1.636 1.636z"})})})]})]})})}),u.jsx("style",{jsx:!0,children:`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 800px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .highlight {
          background: linear-gradient(45deg, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #e2e8f0;
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          color: #cbd5e0;
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          color: #ffd700;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #e2e8f0;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: white;
          color: #667eea;
          transform: translateY(-2px);
        }

        .hero-social {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border-radius: 50%;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .hero-stats {
            gap: 1.5rem;
          }

          .hero-cta {
            flex-direction: column;
            align-items: flex-start;
          }

          .btn {
            width: 100%;
            text-align: center;
          }
        }
      `})]})},gp=()=>{const c=["Full-Stack Development","Machine Learning","Data Structures & Algorithms","Backend Development","Database Management","Financial Technology","Software Engineering","Data-Driven Solutions"];return u.jsxs("section",{id:"about",className:"about",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("h2",{className:"section-title",children:"About Me"}),u.jsx("p",{className:"section-subtitle",children:"Passionate about technology and continuous learning"})]}),u.jsxs("div",{className:"about-content",children:[u.jsxs("div",{className:"about-text",children:[u.jsx("div",{className:"bio-paragraph",children:u.jsx("p",{children:"I am currently pursuing my M.Sc. in Decision and Computing Science, where I'm building a strong foundation in both computer science and finance. With a background in Computer Science from school, I've grown passionate about combining analytical thinking with programming to solve real-world problems."})}),u.jsx("div",{className:"bio-paragraph",children:u.jsx("p",{children:"Currently, I'm deepening my skills in full-stack development, data structures and algorithms, and machine learning. I'm also actively working on projects using Python, Java, and React, while exploring backend development and database management. My interests lie at the intersection of technology and impact—especially in software engineering, data-driven solutions, and AI."})}),u.jsx("div",{className:"bio-paragraph",children:u.jsx("p",{children:"My future goal is to secure a competitive internship that provides hands-on development experience and to transition into a dynamic role in the tech industry after graduation. I am focused on continuous learning, building impactful solutions, and contributing to innovative projects in a professional setting."})}),u.jsxs("div",{className:"career-goals",children:[u.jsx("h3",{children:"Career Goals"}),u.jsxs("ul",{children:[u.jsx("li",{children:"Secure an internship with real development experience"}),u.jsx("li",{children:"Strengthen full-stack and backend engineering skills"}),u.jsx("li",{children:"Master DSA, core CS subjects, and backend systems"}),u.jsx("li",{children:"Contribute to tech projects solving real-world problems"}),u.jsx("li",{children:"Land a growth-oriented software developer role post-grad"})]})]})]}),u.jsxs("div",{className:"about-sidebar",children:[u.jsxs("div",{className:"education-card",children:[u.jsx("h3",{children:"Education"}),u.jsxs("div",{className:"education-item",children:[u.jsx("h4",{children:"M.Sc. Decision and Computing Science"}),u.jsx("p",{children:"3rd Year, 5th Semester"}),u.jsx("span",{className:"status",children:"Currently Pursuing"})]})]}),u.jsxs("div",{className:"interests-card",children:[u.jsx("h3",{children:"Areas of Interest"}),u.jsx("div",{className:"interests-grid",children:c.map((d,f)=>u.jsx("span",{className:"interest-tag",children:d},f))})]}),u.jsxs("div",{className:"leadership-card",children:[u.jsx("h3",{children:"Leadership"}),u.jsxs("div",{className:"leadership-item",children:[u.jsx("h4",{children:"Executive Director"}),u.jsx("p",{children:"Women Empowerment Cell (WEC)"})]}),u.jsxs("div",{className:"leadership-item",children:[u.jsx("h4",{children:"Public Relations Officer"}),u.jsx("p",{children:"Women Empowerment Cell (WEC)"})]})]})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .about {
          padding: 6rem 0;
          background: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text {
          space-y: 2rem;
        }

        .bio-paragraph {
          margin-bottom: 2rem;
        }

        .bio-paragraph p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #4a5568;
          margin: 0;
        }

        .career-goals {
          margin-top: 3rem;
          padding: 2rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .career-goals h3 {
          color: #2563eb;
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .career-goals ul {
          list-style: none;
          padding: 0;
        }

        .career-goals li {
          padding: 0.75rem 0;
          color: #4a5568;
          position: relative;
          padding-left: 1.5rem;
        }

        .career-goals li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #2563eb;
          font-weight: bold;
        }

        .about-sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .education-card,
        .interests-card,
        .leadership-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border-left: 4px solid #2563eb;
        }

        .education-card h3,
        .interests-card h3,
        .leadership-card h3 {
          color: #2563eb;
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .education-item h4 {
          color: #1a202c;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .education-item p {
          color: #64748b;
          margin-bottom: 0.5rem;
        }

        .status {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .interests-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .interest-tag {
          background: #e0f2fe;
          color: #0369a1;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .leadership-item {
          margin-bottom: 1.5rem;
        }

        .leadership-item:last-child {
          margin-bottom: 0;
        }

        .leadership-item h4 {
          color: #1a202c;
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
          font-weight: 600;
        }

        .leadership-item p {
          color: #64748b;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .about {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .career-goals,
          .education-card,
          .interests-card,
          .leadership-card {
            padding: 1.5rem;
          }
        }
      `})]})},pp=()=>{const[c,d]=R.useState("all"),f=[{id:1,title:"Student Management System",description:"A comprehensive CLI CRUD application built with Java and MySQL for managing student records. Features include student registration, grade tracking, and data management with robust database operations.",technologies:["Java","MySQL","CLI"],category:"fullstack",features:["CRUD Operations","Database Management","CLI Interface","Data Validation"],demoLink:"#",codeLink:"https://github.com/prathickshaselvaraj/student-management-system",image:"/api/placeholder/400/250"},{id:2,title:"Option Pricing with Binomial Model",description:"Advanced financial modeling application using Python, Streamlit, and JAX to estimate implied volatility through binomial options pricing model and Newton‑Raphson method.",technologies:["Python","Streamlit","JAX","NumPy"],category:"datascience",features:["Financial Modeling","Newton‑Raphson Method","Interactive UI","Real‑time Calculations"],demoLink:"#",codeLink:"https://github.com/prathickshaselvaraj/option-pricing",image:"/api/placeholder/400/250"},{id:3,title:"Sentiment Prediction System",description:"Machine learning and NLP system for classifying text sentiment using Python and Scikit‑learn. Implements various ML algorithms for accurate sentiment analysis with data preprocessing.",technologies:["Python","Scikit‑learn","NLP","Pandas"],category:"ml",features:["Text Classification","ML Algorithms","Data Preprocessing","Model Evaluation"],demoLink:"#",codeLink:"https://github.com/prathickshaselvaraj/sentiment-prediction",image:"/api/placeholder/400/250"},{id:4,title:"Smart Parcel Delivery System",description:"Academic logistics simulation project using Python and graph algorithms, specifically implementing A* Search algorithm for optimal route planning in parcel delivery systems.",technologies:["Python","Graph Algorithms","A* Search","Data Structures"],category:"algorithms",features:["Route Optimization","Graph Algorithms","A* Search Implementation","Logistics Simulation"],demoLink:"#",codeLink:"https://github.com/prathickshaselvaraj/smart-parcel-delivery",image:"/api/placeholder/400/250"},{id:5,title:"Gamma Distribution Analysis",description:"Statistical modeling and visualization project using R and ggplot2 for comprehensive analysis of Gamma distribution patterns, including parameter estimation and data visualization.",technologies:["R","ggplot2","Statistics","Data Visualization"],category:"datascience",features:["Statistical Modeling","Data Visualization","Parameter Estimation","Distribution Analysis"],demoLink:"#",codeLink:"https://github.com/prathickshaselvaraj/gamma-distribution",image:"/api/placeholder/400/250"}],o=[{key:"all",label:"All Projects"},{key:"fullstack",label:"Full Stack"},{key:"ml",label:"Machine Learning"},{key:"datascience",label:"Data Science"},{key:"algorithms",label:"Algorithms"}],m=c==="all"?f:f.filter(h=>h.category===c);return u.jsxs("section",{id:"projects",className:"projects",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("h2",{className:"section-title",children:"My Projects"}),u.jsx("p",{className:"section-subtitle",children:"A showcase of my technical skills and problem-solving abilities"})]}),u.jsx("div",{className:"filter-tabs",children:o.map(h=>u.jsx("button",{className:`filter-btn ${c===h.key?"active":""}`,onClick:()=>d(h.key),children:h.label},h.key))}),u.jsx("div",{className:"projects-grid",children:m.map(h=>u.jsxs("div",{className:"project-card",children:[u.jsxs("div",{className:"project-image",children:[u.jsx("img",{src:h.image,alt:h.title}),u.jsx("div",{className:"project-overlay",children:u.jsxs("div",{className:"project-links",children:[u.jsxs("a",{href:h.demoLink,className:"project-link demo-link",children:[u.jsx("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})}),"Demo"]}),u.jsxs("a",{href:h.codeLink,className:"project-link code-link",target:"_blank",rel:"noopener noreferrer",children:[u.jsx("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})}),"Code"]})]})})]}),u.jsxs("div",{className:"project-content",children:[u.jsx("h3",{className:"project-title",children:h.title}),u.jsx("p",{className:"project-description",children:h.description}),u.jsxs("div",{className:"project-features",children:[u.jsx("h4",{children:"Key Features:"}),u.jsx("ul",{children:h.features.map((A,N)=>u.jsx("li",{children:A},N))})]}),u.jsx("div",{className:"project-tech",children:h.technologies.map((A,N)=>u.jsx("span",{className:"tech-tag",children:A},N))})]})]},h.id))}),u.jsxs("div",{className:"projects-cta",children:[u.jsx("p",{children:"Interested in seeing more of my work?"}),u.jsx("a",{href:"https://github.com/prathickshaselvaraj",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:"View All on GitHub"})]})]}),u.jsx("style",{jsx:!0,children:`
        /* (your CSS here — omitted for brevity) */
      `})]})},vp=()=>{const[c,d]=R.useState("languages"),f={languages:{title:"Programming Languages",icon:"💻",skills:[{name:"Python",level:90,description:"Advanced proficiency in data analysis, ML, and backend development"},{name:"Java",level:85,description:"Strong OOP skills, desktop applications, and system development"},{name:"SQL",level:80,description:"Database design, complex queries, and data manipulation"},{name:"JavaScript",level:70,description:"Frontend development and basic Node.js applications"},{name:"R",level:75,description:"Statistical analysis, data visualization, and research projects"},{name:"HTML/CSS",level:85,description:"Responsive web design and modern CSS techniques"}]},frameworks:{title:"Frameworks & Tools",icon:"🛠️",skills:[{name:"React",level:80,description:"Modern frontend development with hooks and components"},{name:"Node.js",level:65,description:"Backend development and API creation (learning)"},{name:"Streamlit",level:85,description:"Interactive web applications for data science projects"},{name:"Git",level:80,description:"Version control, collaboration, and project management"},{name:"MySQL",level:85,description:"Database administration and optimization"},{name:"VS Code",level:90,description:"Primary development environment with extensions"}]},libraries:{title:"Libraries & Technologies",icon:"📚",skills:[{name:"Pandas",level:85,description:"Data manipulation and analysis for Python projects"},{name:"NumPy",level:80,description:"Numerical computing and array operations"},{name:"Scikit-learn",level:75,description:"Machine learning algorithms and model building"},{name:"Matplotlib",level:80,description:"Data visualization and plotting"},{name:"Seaborn",level:75,description:"Statistical data visualization"},{name:"JAX",level:70,description:"High-performance computing and numerical analysis"},{name:"ggplot2",level:75,description:"Advanced data visualization in R"}]},concepts:{title:"CS Concepts & Subjects",icon:"🧠",skills:[{name:"Data Structures & Algorithms",level:80,description:"Problem-solving with efficient algorithms"},{name:"Object-Oriented Programming",level:85,description:"Design patterns and clean code practices"},{name:"Database Management",level:80,description:"Relational databases and query optimization"},{name:"Operating Systems",level:75,description:"System concepts and resource management"},{name:"Computer Networks",level:65,description:"Basic networking concepts and protocols"},{name:"Machine Learning",level:70,description:"Supervised learning and model evaluation"}]},soft:{title:"Soft Skills",icon:"🤝",skills:[{name:"Leadership",level:90,description:"Executive Director experience in WEC"},{name:"Communication",level:85,description:"Public speaking and technical writing"},{name:"Problem-solving",level:88,description:"Analytical thinking and creative solutions"},{name:"Teamwork",level:85,description:"Collaborative project management"},{name:"Time Management",level:80,description:"Balancing academics and leadership roles"},{name:"Adaptability",level:85,description:"Learning new technologies quickly"}]}},o=Object.keys(f),m=h=>h>=85?"#10b981":h>=75?"#3b82f6":h>=65?"#f59e0b":"#ef4444";return u.jsxs("section",{id:"skills",className:"skills",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("h2",{className:"section-title",children:"Skills & Expertise"}),u.jsx("p",{className:"section-subtitle",children:"A comprehensive overview of my technical and professional capabilities"})]}),u.jsx("div",{className:"skills-navigation",children:o.map(h=>u.jsxs("button",{className:`nav-btn ${c===h?"active":""}`,onClick:()=>d(h),children:[u.jsx("span",{className:"nav-icon",children:f[h].icon}),u.jsx("span",{className:"nav-label",children:f[h].title})]},h))}),u.jsxs("div",{className:"skills-content",children:[u.jsx("div",{className:"skills-header",children:u.jsxs("h3",{className:"category-title",children:[f[c].icon," ",f[c].title]})}),u.jsx("div",{className:"skills-grid",children:f[c].skills.map((h,A)=>u.jsxs("div",{className:"skill-card",children:[u.jsxs("div",{className:"skill-header",children:[u.jsx("h4",{className:"skill-name",children:h.name}),u.jsxs("span",{className:"skill-percentage",children:[h.level,"%"]})]}),u.jsx("div",{className:"skill-bar",children:u.jsx("div",{className:"skill-progress",style:{width:`${h.level}%`,backgroundColor:m(h.level)}})}),u.jsx("p",{className:"skill-description",children:h.description})]},A))})]}),u.jsxs("div",{className:"skills-summary",children:[u.jsxs("div",{className:"summary-stats",children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"10+"}),u.jsx("span",{className:"stat-label",children:"Programming Languages"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"15+"}),u.jsx("span",{className:"stat-label",children:"Frameworks & Tools"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"6+"}),u.jsx("span",{className:"stat-label",children:"CS Core Subjects"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"5+"}),u.jsx("span",{className:"stat-label",children:"Projects Completed"})]})]}),u.jsxs("div",{className:"learning-journey",children:[u.jsx("h3",{children:"Currently Learning"}),u.jsxs("div",{className:"learning-items",children:[u.jsx("span",{className:"learning-tag",children:"Advanced React Patterns"}),u.jsx("span",{className:"learning-tag",children:"Backend System Design"}),u.jsx("span",{className:"learning-tag",children:"Deep Learning"}),u.jsx("span",{className:"learning-tag",children:"Cloud Computing"})]})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .skills {
          padding: 6rem 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        .skills-navigation {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .nav-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .nav-btn.active {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        .nav-icon {
          font-size: 1.5rem;
        }

        .nav-label {
          font-size: 0.9rem;
          font-weight: 600;
          text-align: center;
        }

        .skills-content {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          margin-bottom: 3rem;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .category-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .skill-name {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }

        .skill-percentage {
          font-size: 0.9rem;
          font-weight: 700;
          opacity: 0.9;
        }

        .skill-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom:H
           1rem;
        }

        .skill-progress {
          height: 100%;
          border-radius: 4px;
          transition: width 0.6s ease;
        }

        .skill-description {
          font-size: 0.9rem;
          opacity: 0.8;
          line-height: 1.4;
          margin: 0;
        }

        .skills-summary {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .summary-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem 1rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .learning-journey {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .learning-journey h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .learning-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .learning-tag {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          text-align: center;
        }

        @media (max-width: 768px) {
          .skills {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .skills-navigation {
            gap: 0.5rem;
          }

          .nav-btn {
            padding: 0.75rem 1rem;
          }

          .nav-label {
            font-size: 0.8rem;
          }

          .skills-content {
            padding: 1.5rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skills-summary {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .summary-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `})]})},bp=()=>{const c=[{id:1,type:"leadership",title:"Executive Director",organization:"Women Empowerment Cell (WEC)",period:"Current",description:"Leading strategic operations to promote women in technology and create inclusive opportunities in the tech industry.",responsibilities:["Spearhead strategic initiatives to empower women in technology","Organize workshops, seminars, and tech-focused events","Lead outreach campaigns to increase female participation in STEM","Collaborate with industry professionals for mentorship programs","Manage team operations and coordinate organizational activities"],achievements:["Successfully organized multiple tech workshops with 100+ participants","Established partnerships with leading tech companies","Increased WEC membership by 150% during tenure","Launched mentorship program connecting students with industry experts"],skills:["Leadership","Event Management","Strategic Planning","Team Coordination","Public Speaking"],icon:"👑"},{id:2,type:"leadership",title:"Public Relations Officer",organization:"Women Empowerment Cell (WEC)",period:"Previous Role",description:"Managed external and internal communications while coordinating high-impact events and outreach initiatives.",responsibilities:["Managed external communications and brand representation","Coordinated internal team communications and updates","Organized hackathons and technical competitions","Led social media campaigns and digital outreach","Facilitated collaboration between different departments"],achievements:["Increased social media engagement by 200%","Successfully coordinated 3 major hackathons","Established communication protocols for efficient operations","Built strong relationships with external stakeholders"],skills:["Communication","Event Planning","Social Media Management","Stakeholder Relations","Content Creation"],icon:"📢"}],d=[{title:"Student Management System",type:"Full-Stack Development",technologies:["Java","MySQL","CLI"],description:"Comprehensive CRUD application for managing student records with robust database operations.",impact:"Streamlined student data management processes",duration:"3 months"},{title:"Option Pricing Model",type:"Financial Technology",technologies:["Python","Streamlit","JAX"],description:"Advanced financial modeling using binomial options pricing and Newton-Raphson method.",impact:"Accurate implied volatility estimation for financial derivatives",duration:"4 months"},{title:"Sentiment Analysis System",type:"Machine Learning",technologies:["Python","Scikit-learn","NLP"],description:"ML-powered sentiment classification system with comprehensive text preprocessing.",impact:"Achieved 87% accuracy in sentiment prediction",duration:"2 months"},{title:"Smart Delivery System",type:"Algorithm Design",technologies:["Python","Graph Algorithms","A*"],description:"Logistics optimization using A* search algorithm for efficient route planning.",impact:"Reduced delivery time by 30% in simulation",duration:"6 weeks"}];return u.jsxs("section",{id:"experience",className:"experience",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("h2",{className:"section-title",children:"Experience & Leadership"}),u.jsx("p",{className:"section-subtitle",children:"Building leadership skills while gaining hands-on technical experience"})]}),u.jsxs("div",{className:"experience-content",children:[u.jsxs("div",{className:"leadership-section",children:[u.jsxs("h3",{className:"subsection-title",children:[u.jsx("span",{className:"title-icon",children:"🌟"}),"Leadership Roles"]}),u.jsx("div",{className:"timeline",children:c.map((f,o)=>u.jsxs("div",{className:"timeline-item",children:[u.jsx("div",{className:"timeline-marker",children:u.jsx("span",{className:"marker-icon",children:f.icon})}),u.jsx("div",{className:"timeline-content",children:u.jsxs("div",{className:"experience-card",children:[u.jsxs("div",{className:"card-header",children:[u.jsxs("div",{className:"title-section",children:[u.jsx("h4",{className:"role-title",children:f.title}),u.jsx("p",{className:"organization",children:f.organization})]}),u.jsx("span",{className:"period-badge",children:f.period})]}),u.jsx("p",{className:"role-description",children:f.description}),u.jsxs("div",{className:"details-grid",children:[u.jsxs("div",{className:"responsibilities",children:[u.jsx("h5",{children:"Key Responsibilities"}),u.jsx("ul",{children:f.responsibilities.map((m,h)=>u.jsx("li",{children:m},h))})]}),u.jsxs("div",{className:"achievements",children:[u.jsx("h5",{children:"Major Achievements"}),u.jsx("ul",{children:f.achievements.map((m,h)=>u.jsx("li",{children:m},h))})]})]}),u.jsxs("div",{className:"skills-gained",children:[u.jsx("h5",{children:"Skills Developed"}),u.jsx("div",{className:"skills-tags",children:f.skills.map((m,h)=>u.jsx("span",{className:"skill-tag",children:m},h))})]})]})})]},f.id))})]}),u.jsxs("div",{className:"projects-section",children:[u.jsxs("h3",{className:"subsection-title",children:[u.jsx("span",{className:"title-icon",children:"🚀"}),"Academic Project Experience"]}),u.jsx("div",{className:"projects-grid",children:d.map((f,o)=>u.jsxs("div",{className:"project-experience-card",children:[u.jsxs("div",{className:"project-header",children:[u.jsx("h4",{className:"project-title",children:f.title}),u.jsx("span",{className:"project-type",children:f.type})]}),u.jsx("p",{className:"project-description",children:f.description}),u.jsxs("div",{className:"project-details",children:[u.jsxs("div",{className:"detail-item",children:[u.jsx("span",{className:"detail-label",children:"Impact:"}),u.jsx("span",{className:"detail-value",children:f.impact})]}),u.jsxs("div",{className:"detail-item",children:[u.jsx("span",{className:"detail-label",children:"Duration:"}),u.jsx("span",{className:"detail-value",children:f.duration})]})]}),u.jsx("div",{className:"project-technologies",children:f.technologies.map((m,h)=>u.jsx("span",{className:"tech-badge",children:m},h))})]},o))})]}),u.jsxs("div",{className:"experience-summary",children:[u.jsxs("div",{className:"summary-stats",children:[u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon",children:"👥"}),u.jsxs("div",{className:"stat-content",children:[u.jsx("span",{className:"stat-number",children:"2+"}),u.jsx("span",{className:"stat-label",children:"Leadership Roles"})]})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon",children:"🎯"}),u.jsxs("div",{className:"stat-content",children:[u.jsx("span",{className:"stat-number",children:"5+"}),u.jsx("span",{className:"stat-label",children:"Projects Completed"})]})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon",children:"🏆"}),u.jsxs("div",{className:"stat-content",children:[u.jsx("span",{className:"stat-number",children:"10+"}),u.jsx("span",{className:"stat-label",children:"Events Organized"})]})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon",children:"🌱"}),u.jsxs("div",{className:"stat-content",children:[u.jsx("span",{className:"stat-number",children:"3+"}),u.jsx("span",{className:"stat-label",children:"Years Learning"})]})]})]}),u.jsxs("div",{className:"next-goals",children:[u.jsx("h4",{children:"What's Next?"}),u.jsx("p",{children:"I'm actively seeking internship opportunities where I can apply my leadership experience and technical skills in a professional development environment. My goal is to contribute to meaningful projects while continuing to grow as a software developer."}),u.jsxs("div",{className:"goals-list",children:[u.jsx("span",{className:"goal-item",children:"🎯 Secure Development Internship"}),u.jsx("span",{className:"goal-item",children:"💡 Contribute to Open Source"}),u.jsx("span",{className:"goal-item",children:"🚀 Build Production Applications"}),u.jsx("span",{className:"goal-item",children:"🤝 Mentor Other Students"})]})]})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .experience {
          padding: 6rem 0;
          background: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        .experience-content {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .subsection-title {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 2rem;
          font-weight: 700;
          color: #2563eb;
          margin-bottom: 2rem;
        }

        .title-icon {
          font-size: 1.5rem;
        }

        /* Timeline Styles */
        .timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }

        .timeline-marker {
          position: absolute;
          left: -1.5rem;
          top: 0;
          width: 3rem;
          height: 3rem;
          background: white;
          border: 3px solid #2563eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .marker-icon {
          font-size: 1.2rem;
        }

        .timeline-content {
          margin-left: 2rem;
        }

        .experience-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border-left: 4px solid #2563eb;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .role-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 0.25rem;
        }

        .organization {
          color: #2563eb;
          font-weight: 600;
          margin: 0;
        }

        .period-badge {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .role-description {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }

        .responsibilities h5,
        .achievements h5 {
          color: #2563eb;
          font-weight: 700;
          margin-bottom: 0.75rem;
          font-size: 1rem;
        }

        .responsibilities ul,
        .achievements ul {
          list-style: none;
          padding: 0;
        }

        .responsibilities li,
        .achievements li {
          color: #4a5568;
          padding: 0.4rem 0;
          position: relative;
          padding-left: 1.25rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .responsibilities li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: #2563eb;
          font-weight: bold;
        }

        .achievements li::before {
          content: '★';
          position: absolute;
          left: 0;
          color: #f59e0b;
          font-weight: bold;
        }

        .skills-gained h5 {
          color: #2563eb;
          font-weight: 700;
          margin-bottom: 0.75rem;
          font-size: 1rem;
        }

        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          background: #e0f2fe;
          color: #0369a1;
          padding: 0.4rem 0.8rem;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .project-experience-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border-top: 4px solid #7c3aed;
          transition: transform 0.3s ease;
        }

        .project-experience-card:hover {
          transform: translateY(-4px);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .project-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a202c;
          margin: 0;
        }

        .project-type {
          background: #f3e8ff;
          color: #7c3aed;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .project-description {
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }

        .project-details {
          margin-bottom: 1rem;
        }

        .detail-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .detail-label {
          font-weight: 600;
          color: #4a5568;
        }

        .detail-value {
          color: #2563eb;
          font-weight: 500;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .tech-badge {
          background: #f1f5f9;
          color: #475569;
          padding: 0.3rem 0.6rem;
          border-radius: 10px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        /* Experience Summary */
        .experience-summary {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .summary-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 12px;
        }

        .stat-icon {
          font-size: 2rem;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 1.8rem;
          font-weight: 800;
          color: #2563eb;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 600;
        }

        .next-goals {
          text-align: center;
        }

        .next-goals h4 {
          font-size: 1.5rem;
          color: #2563eb;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .next-goals p {
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .goals-list {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .goal-item {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .experience {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .details-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .summary-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .goals-list {
            flex-direction: column;
            align-items: center;
          }

          .experience-summary {
            padding: 2rem;
          }
        }
      `})]})},yp=()=>{const c=()=>{const o=document.createElement("a");o.href="/assets/prathicksha-S.pdf",o.download="Prathicksha-S-Resume.pdf",document.body.appendChild(o),o.click(),document.body.removeChild(o)},d=[{name:"LinkedIn",url:"https://linkedin.com/in/prathickshaselvaraj",icon:u.jsx("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})},{name:"GitHub",url:"https://github.com/prathickshaselvaraj",icon:u.jsx("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})})},{name:"Email",url:"mailto:prathicksha006@gmail.com",icon:u.jsx("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 10.724l9.615-6.903h.749c.904 0 1.636.732 1.636 1.636z"})})}],f=[{category:"Education",items:["M.Sc. Decision and Computing Science (3rd Year)","Strong foundation in CS and Finance","Focus on practical application of theory"]},{category:"Technical Skills",items:["10+ Programming Languages & Tools","Full-Stack Development Experience","Machine Learning & Data Science"]},{category:"Leadership",items:["Executive Director - Women Empowerment Cell","Public Relations Officer Experience","Event Management & Team Leadership"]},{category:"Projects",items:["5+ Technical Projects Completed","Financial Modeling Applications","ML/AI Implementation Experience"]}];return u.jsxs("section",{id:"resume",className:"resume",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("h2",{className:"section-title",children:"Resume"}),u.jsx("p",{className:"section-subtitle",children:"Get a comprehensive overview of my qualifications and experience"})]}),u.jsxs("div",{className:"resume-content",children:[u.jsx("div",{className:"resume-preview",children:u.jsxs("div",{className:"resume-card",children:[u.jsx("div",{className:"resume-header",children:u.jsxs("div",{className:"profile-section",children:[u.jsxs("div",{className:"profile-info",children:[u.jsx("h3",{className:"name",children:"Prathicksha S"}),u.jsx("p",{className:"title",children:"M.Sc. Decision & Computing Science Student"}),u.jsx("p",{className:"subtitle",children:"Aspiring Software Developer"})]}),u.jsxs("div",{className:"contact-info",children:[u.jsxs("div",{className:"contact-item",children:[u.jsx("span",{className:"contact-icon",children:"📧"}),u.jsx("span",{children:"prathicksha006@gmail.com"})]}),u.jsxs("div",{className:"contact-item",children:[u.jsx("span",{className:"contact-icon",children:"🔗"}),u.jsx("span",{children:"linkedin.com/in/prathickshaselvaraj"})]}),u.jsxs("div",{className:"contact-item",children:[u.jsx("span",{className:"contact-icon",children:"💻"}),u.jsx("span",{children:"github.com/prathickshaselvaraj"})]})]})]})}),u.jsxs("div",{className:"resume-highlights",children:[u.jsx("h4",{children:"Key Qualifications"}),u.jsx("div",{className:"highlights-grid",children:f.map((o,m)=>u.jsxs("div",{className:"highlight-section",children:[u.jsx("h5",{children:o.category}),u.jsx("ul",{children:o.items.map((h,A)=>u.jsx("li",{children:h},A))})]},m))})]}),u.jsx("div",{className:"resume-preview-note",children:u.jsx("p",{children:"This is a preview of my resume. Download the full PDF for complete details including projects, skills, and achievements."})})]})}),u.jsxs("div",{className:"resume-actions",children:[u.jsxs("div",{className:"download-section",children:[u.jsx("h3",{children:"Download My Resume"}),u.jsx("p",{children:"Get the complete resume with detailed information about my education, projects, skills, and experience."}),u.jsxs("button",{className:"download-btn",onClick:c,children:[u.jsx("svg",{width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",className:"download-icon",children:u.jsx("path",{d:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"})}),"Download PDF Resume"]}),u.jsxs("div",{className:"file-info",children:[u.jsx("span",{className:"file-detail",children:"📄 PDF Format"}),u.jsx("span",{className:"file-detail",children:"📏 2 Pages"}),u.jsx("span",{className:"file-detail",children:"⚡ Updated Recently"})]})]}),u.jsxs("div",{className:"social-section",children:[u.jsx("h3",{children:"Connect With Me"}),u.jsx("p",{children:"Let's connect on professional platforms and stay in touch for opportunities and collaborations."}),u.jsx("div",{className:"social-links",children:d.map((o,m)=>u.jsxs("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",className:"social-link",children:[u.jsx("span",{className:"social-icon",children:o.icon}),u.jsx("span",{className:"social-name",children:o.name})]},m))})]}),u.jsxs("div",{className:"quick-contact",children:[u.jsx("h3",{children:"Quick Contact"}),u.jsx("p",{children:"Ready to discuss opportunities? Feel free to reach out directly."}),u.jsxs("div",{className:"contact-options",children:[u.jsxs("a",{href:"mailto:prathicksha006@gmail.com?subject=Opportunity Discussion",className:"contact-btn email-btn",children:[u.jsx("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 10.724l9.615-6.903h.749c.904 0 1.636.732 1.636 1.636z"})}),"Send Email"]}),u.jsxs("a",{href:"https://linkedin.com/in/prathickshaselvaraj",target:"_blank",rel:"noopener noreferrer",className:"contact-btn linkedin-btn",children:[u.jsx("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),"Connect on LinkedIn"]})]})]})]})]}),u.jsx("div",{className:"resume-cta",children:u.jsxs("div",{className:"cta-content",children:[u.jsx("h3",{children:"Interested in working together?"}),u.jsx("p",{children:"I'm actively seeking internship opportunities and would love to discuss how I can contribute to your team."}),u.jsxs("div",{className:"cta-buttons",children:[u.jsx("button",{className:"btn btn-primary",onClick:c,children:"Download Resume"}),u.jsx("a",{href:"#contact",className:"btn btn-secondary",children:"Get In Touch"})]})]})})]}),u.jsx("style",{jsx:!0,children:`
        .resume {
          padding: 6rem 0;
          background: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        .resume-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
          align-items: start;
        }

        .resume-preview {
          position: sticky;
          top: 2rem;
        }

        .resume-card {
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .resume-header {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 2px solid #f1f5f9;
        }

        .profile-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .profile-info {
          text-align: center;
        }

        .name {
          font-size: 2rem;
          font-weight: 800;
          color: #2563eb;
          margin-bottom: 0.5rem;
        }

        .title {
          font-size: 1.2rem;
          color: #1a202c;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .subtitle {
          color: #64748b;
          font-size: 1rem;
          margin: 0;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: #4a5568;
        }

        .contact-icon {
          font-size: 1rem;
        }

        .resume-highlights h4 {
          font-size: 1.3rem;
          color: #2563eb;
          margin-bottom: 1.5rem;
          font-weight: 700;
          text-align: center;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .highlight-section h5 {
          color: #1a202c;
          font-weight: 700;
          margin-bottom: 0.75rem;
          font-size: 1rem;
        }

        .highlight-section ul {
          list-style: none;
          padding: 0;
        }

        .highlight-section li {
          color: #64748b;
          font-size: 0.85rem;
          line-height: 1.4;
          margin-bottom: 0.5rem;
          position: relative;
          padding-left: 1rem;
        }

        .highlight-section li::before {
          content: '•';
          color: #2563eb;
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .resume-preview-note {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 2px solid #f1f5f9;
          text-align: center;
        }

        .resume-preview-note p {
          color: #64748b;
          font-size: 0.9rem;
          font-style: italic;
          margin: 0;
        }

        .resume-actions {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .download-section,
        .social-section,
        .quick-contact {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 16px;
          border-left: 4px solid #2563eb;
        }

        .download-section h3,
        .social-section h3,
        .quick-contact h3 {
          color: #2563eb;
          font-size: 1.4rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .download-section p,
        .social-section p,
        .quick-contact p {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .download-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .download-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }

        .download-icon {
          transition: transform 0.3s ease;
        }

        .download-btn:hover .download-icon {
          transform: translateY(2px);
        }

        .file-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .file-detail {
          font-size: 0.9rem;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background: white;
          color: #4a5568;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s ease;
          border: 2px solid #e2e8f0;
        }

        .social-link:hover {
          border-color: #2563eb;
          color: #2563eb;
          transform: translateX(8px);
        }

        .social-icon {
          display: flex;
          align-items: center;
        }

        .social-name {
          font-weight: 600;
        }

        .contact-options {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .contact-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          flex: 1;
          justify-content: center;
        }

        .email-btn {
          background: #10b981;
          color: white;
        }

        .email-btn:hover {
          background: #059669;
          transform: translateY(-2px);
        }

        .linkedin-btn {
          background: #0077b5;
          color: white;
        }

        .linkedin-btn:hover {
          background: #005885;
          transform: translateY(-2px);
        }

        .resume-cta {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 4rem 2rem;
          border-radius: 20px;
          text-align: center;
          color: white;
        }

        .cta-content h3 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 0.75rem 2rem;
          border-radius: 25px;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          font-size: 1rem;
        }

        .btn-primary {
          background: white;
          color: #667eea;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: white;
          color: #667eea;
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .resume {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .resume-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .resume-preview {
            position: static;
          }

          .highlights-grid {
            grid-template-columns: 1fr;
          }

          .profile-section {
            text-align: center;
          }

          .contact-options {
            flex-direction: column;
          }

          .file-info {
            flex-direction: column;
            text-align: center;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `})]})},xp=()=>{const[c,d]=R.useState("all"),f=[{id:1,title:"My Journey into Full-Stack Development",excerpt:"Exploring the transition from theoretical computer science to hands-on full-stack development, sharing lessons learned and challenges overcome.",category:"journey",readTime:"5 min read",date:"March 15, 2024",image:"/api/placeholder/400/250",tags:["Full-Stack","Learning","Career"],featured:!0},{id:2,title:"Mastering Data Structures: A Practical Approach",excerpt:"Breaking down complex data structures with real-world examples and implementation tips that helped me ace technical interviews.",category:"dsa",readTime:"8 min read",date:"March 10, 2024",image:"/api/placeholder/400/250",tags:["DSA","Algorithms","Interview Prep"]},{id:3,title:"Building My First ML Project: Sentiment Analysis",excerpt:"A detailed walkthrough of creating a sentiment prediction system using Python and Scikit-learn, from data preprocessing to model deployment.",category:"projects",readTime:"12 min read",date:"March 5, 2024",image:"/api/placeholder/400/250",tags:["Machine Learning","Python","NLP"]},{id:4,title:"Preparing for Tech Internships: A Student's Guide",excerpt:"Essential tips for landing your first tech internship, including resume building, technical preparation, and interview strategies.",category:"career",readTime:"10 min read",date:"February 28, 2024",image:"/api/placeholder/400/250",tags:["Career","Internships","Interview Tips"]},{id:5,title:"Graph Algorithms in Action: Smart Delivery System",excerpt:"Implementing A* search algorithm for route optimization in logistics, exploring the practical applications of graph theory.",category:"dsa",readTime:"15 min read",date:"February 20, 2024",image:"/api/placeholder/400/250",tags:["Algorithms","Graph Theory","Optimization"]},{id:6,title:"Leadership Lessons from Women Empowerment Cell",excerpt:"Insights gained from leading the Women Empowerment Cell, organizing tech events, and promoting diversity in technology.",category:"journey",readTime:"7 min read",date:"February 15, 2024",image:"/api/placeholder/400/250",tags:["Leadership","Diversity","Tech Events"]}],o=[{key:"all",label:"All Posts",count:f.length},{key:"journey",label:"Tech Journey",count:f.filter(N=>N.category==="journey").length},{key:"dsa",label:"DSA Tips",count:f.filter(N=>N.category==="dsa").length},{key:"projects",label:"Project Walkthroughs",count:f.filter(N=>N.category==="projects").length},{key:"career",label:"Career Insights",count:f.filter(N=>N.category==="career").length}],m=c==="all"?f:f.filter(N=>N.category===c),h=f.find(N=>N.featured),A=m.filter(N=>!N.featured);return u.jsxs("section",{id:"blog",className:"blog",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("h2",{className:"section-title",children:"Tech Blog"}),u.jsx("p",{className:"section-subtitle",children:"Sharing my learning journey, technical insights, and career preparation tips"})]}),u.jsx("div",{className:"blog-categories",children:o.map(N=>u.jsxs("button",{className:`category-btn ${c===N.key?"active":""}`,onClick:()=>d(N.key),children:[N.label,u.jsx("span",{className:"post-count",children:N.count})]},N.key))}),u.jsxs("div",{className:"blog-content",children:[c==="all"&&h&&u.jsxs("div",{className:"featured-section",children:[u.jsx("h3",{className:"section-subtitle",children:"Featured Post"}),u.jsxs("article",{className:"featured-post",children:[u.jsxs("div",{className:"post-image",children:[u.jsx("img",{src:h.image,alt:h.title}),u.jsx("div",{className:"featured-badge",children:"Featured"})]}),u.jsxs("div",{className:"post-content",children:[u.jsxs("div",{className:"post-meta",children:[u.jsx("span",{className:"post-date",children:h.date}),u.jsx("span",{className:"post-read-time",children:h.readTime})]}),u.jsx("h3",{className:"post-title",children:h.title}),u.jsx("p",{className:"post-excerpt",children:h.excerpt}),u.jsx("div",{className:"post-tags",children:h.tags.map((N,x)=>u.jsx("span",{className:"tag",children:N},x))}),u.jsxs("button",{className:"read-more-btn",children:["Read Full Article",u.jsx("svg",{width:"16",height:"16",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"})})]})]})]})]}),u.jsxs("div",{className:"posts-section",children:[u.jsx("h3",{className:"section-subtitle",children:c==="all"?"Recent Posts":o.find(N=>N.key===c)?.label}),u.jsx("div",{className:"posts-grid",children:A.map(N=>u.jsxs("article",{className:"blog-card",children:[u.jsxs("div",{className:"card-image",children:[u.jsx("img",{src:N.image,alt:N.title}),u.jsx("div",{className:"image-overlay",children:u.jsx("button",{className:"read-btn",children:"Read Article"})})]}),u.jsxs("div",{className:"card-content",children:[u.jsxs("div",{className:"post-meta",children:[u.jsx("span",{className:"post-date",children:N.date}),u.jsx("span",{className:"post-read-time",children:N.readTime})]}),u.jsx("h4",{className:"card-title",children:N.title}),u.jsx("p",{className:"card-excerpt",children:N.excerpt}),u.jsx("div",{className:"post-tags",children:N.tags.map((x,p)=>u.jsx("span",{className:"tag",children:x},p))})]})]},N.id))})]})]}),u.jsx("div",{className:"blog-cta",children:u.jsxs("div",{className:"cta-content",children:[u.jsx("h3",{children:"Want to read more?"}),u.jsx("p",{children:"I'm constantly sharing new insights about my learning journey, technical projects, and career preparation. Follow me on LinkedIn or GitHub to stay updated with my latest posts."}),u.jsxs("div",{className:"cta-buttons",children:[u.jsxs("a",{href:"https://linkedin.com/in/prathickshaselvaraj",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:[u.jsx("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),"Follow on LinkedIn"]}),u.jsxs("a",{href:"https://github.com/prathickshaselvaraj",target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary",children:[u.jsx("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})}),"View on GitHub"]})]})]})})]}),u.jsx("style",{jsx:!0,children:`
        .blog {
          padding: 6rem 0;
          background: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto 2rem;
        }

        .blog-categories {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: white;
          border: 2px solid #e2e8f0;
          color: #64748b;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .category-btn:hover {
          border-color: #2563eb;
          color: #2563eb;
        }

        .category-btn.active {
          background: #2563eb;
          color: white;
          border-color: #2563eb;
        }

        .post-count {
          background: rgba(0, 0, 0, 0.1);
          color: inherit;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .category-btn.active .post-count {
          background: rgba(255, 255, 255, 0.2);
        }

        .blog-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .featured-section h3 {
          color: #2563eb;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .featured-post {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
        }

        .post-image {
          position: relative;
          height: 300px;
          overflow: hidden;
        }

        .post-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .featured-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .post-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .post-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: #64748b;
        }

        .post-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .post-excerpt {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .post-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tag {
          background: #f1f5f9;
          color: #475569;
          padding: 0.4rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .read-more-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #2563eb;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          align-self: flex-start;
        }

        .read-more-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        .posts-section h3 {
          color: #2563eb;
          font-weight: 700;
          margin-bottom: 2rem;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .blog-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .blog-card:hover .card-image img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .blog-card:hover .image-overlay {
          opacity: 1;
        }

        .read-btn {
          background: white;
          color: #2563eb;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .read-btn:hover {
          background: #f8fafc;
          transform: translateY(-2px);
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .card-excerpt {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .blog-cta {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 4rem 2rem;
          border-radius: 20px;
          text-align: center;
          color: white;
          margin-top: 4rem;
        }

        .cta-content h3 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 2rem;
          border-radius: 25px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .btn-primary {
          background: white;
          color: #667eea;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: white;
          color: #667eea;
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .blog {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .blog-categories {
            gap: 0.5rem;
          }

          .category-btn {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }

          .featured-post {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .post-image {
            height: 250px;
          }

          .post-content {
            padding: 1.5rem;
          }

          .post-title {
            font-size: 1.5rem;
          }

          .posts-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      `})]})},Sp=()=>{const[c,d]=R.useState({name:"",email:"",subject:"",message:""}),[f,o]=R.useState(!1),[m,h]=R.useState(null),A=T=>{const{name:_,value:U}=T.target;d(J=>({...J,[_]:U}))},N=async T=>{T.preventDefault(),o(!0);try{await new Promise(_=>setTimeout(_,2e3)),h("success"),d({name:"",email:"",subject:"",message:""})}catch{h("error")}finally{o(!1)}},x=[{icon:u.jsx("svg",{width:"32",height:"32",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 10.724l9.615-6.903h.749c.904 0 1.636.732 1.636 1.636z"})}),title:"Email",description:"Send me a message anytime",value:"prathicksha006@gmail.com",link:"mailto:prathicksha006@gmail.com",color:"#10b981"},{icon:u.jsx("svg",{width:"32",height:"32",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),title:"LinkedIn",description:"Connect professionally",value:"linkedin.com/in/prathickshaselvaraj",link:"https://linkedin.com/in/prathickshaselvaraj",color:"#0077b5"},{icon:u.jsx("svg",{width:"32",height:"32",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})}),title:"GitHub",description:"View my code and projects",value:"github.com/prathickshaselvaraj",link:"https://github.com/prathickshaselvaraj",color:"#333"}],p=["I'd like to discuss internship opportunities","I'm interested in your projects","Let's collaborate on a project","I have a question about your experience"];return u.jsxs("section",{id:"contact",className:"contact",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("h2",{className:"section-title",children:"Let's Connect"}),u.jsx("p",{className:"section-subtitle",children:"Ready to start a conversation? I'd love to hear from you about opportunities, collaborations, or just to chat about technology."})]}),u.jsxs("div",{className:"contact-content",children:[u.jsxs("div",{className:"contact-info",children:[u.jsxs("div",{className:"intro-section",children:[u.jsx("h3",{children:"Get In Touch"}),u.jsx("p",{children:"I'm actively seeking internship opportunities and always open to discussing interesting projects, learning opportunities, or connecting with fellow developers. Whether you're a recruiter, fellow student, or industry professional, I'd love to hear from you!"})]}),u.jsx("div",{className:"contact-methods",children:x.map((T,_)=>u.jsxs("a",{href:T.link,target:T.link.startsWith("http")?"_blank":"_self",rel:T.link.startsWith("http")?"noopener noreferrer":"",className:"contact-method",style:{"--method-color":T.color},children:[u.jsx("div",{className:"method-icon",children:T.icon}),u.jsxs("div",{className:"method-content",children:[u.jsx("h4",{children:T.title}),u.jsx("p",{children:T.description}),u.jsx("span",{className:"method-value",children:T.value})]})]},_))}),u.jsxs("div",{className:"quick-contact",children:[u.jsx("h4",{children:"Quick Response Time"}),u.jsxs("div",{className:"response-info",children:[u.jsxs("div",{className:"response-item",children:[u.jsx("span",{className:"response-icon",children:"📧"}),u.jsx("span",{children:"Email: Usually within 24 hours"})]}),u.jsxs("div",{className:"response-item",children:[u.jsx("span",{className:"response-icon",children:"💼"}),u.jsx("span",{children:"LinkedIn: Usually within 12 hours"})]})]})]})]}),u.jsx("div",{className:"contact-form-section",children:u.jsxs("div",{className:"form-container",children:[u.jsx("h3",{children:"Send a Message"}),u.jsx("p",{children:"Prefer to send a direct message? Fill out the form below and I'll get back to you soon."}),m==="success"&&u.jsxs("div",{className:"status-message success",children:[u.jsx("span",{className:"status-icon",children:"✅"}),"Thanks for your message! I'll get back to you within 24 hours."]}),m==="error"&&u.jsxs("div",{className:"status-message error",children:[u.jsx("span",{className:"status-icon",children:"❌"}),"Something went wrong. Please try again or send me an email directly."]}),u.jsxs("form",{onSubmit:N,className:"contact-form",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"name",children:"Your Name"}),u.jsx("input",{type:"text",id:"name",name:"name",value:c.name,onChange:A,required:!0,placeholder:"Enter your full name"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"email",children:"Email Address"}),u.jsx("input",{type:"email",id:"email",name:"email",value:c.email,onChange:A,required:!0,placeholder:"Enter your email address"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"subject",children:"Subject"}),u.jsx("input",{type:"text",id:"subject",name:"subject",value:c.subject,onChange:A,required:!0,placeholder:"What's this about?"})]}),u.jsxs("div",{className:"quick-subjects",children:[u.jsx("p",{children:"Or choose a quick subject:"}),u.jsx("div",{className:"subject-buttons",children:p.map((T,_)=>u.jsx("button",{type:"button",className:"subject-btn",onClick:()=>d(U=>({...U,subject:T})),children:T},_))})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"message",children:"Message"}),u.jsx("textarea",{id:"message",name:"message",value:c.message,onChange:A,required:!0,rows:"6",placeholder:"Tell me more about what you'd like to discuss..."})]}),u.jsx("button",{type:"submit",className:"submit-btn",disabled:f,children:f?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"loading-spinner"}),"Sending..."]}):u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})}),"Send Message"]})})]})]})})]}),u.jsx("div",{className:"contact-footer",children:u.jsxs("div",{className:"availability",children:[u.jsx("h4",{children:"Current Availability"}),u.jsxs("div",{className:"availability-status",children:[u.jsx("span",{className:"status-indicator available"}),u.jsx("span",{children:"Available for internships and part-time opportunities"})]}),u.jsx("p",{children:"I'm currently in my 3rd year of M.Sc. Decision and Computing Science and actively seeking internship opportunities for hands-on development experience. I'm also open to freelance projects and collaborative opportunities."})]})})]}),u.jsx("style",{jsx:!0,children:`
        .contact {
          padding: 6rem 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .intro-section {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 16px;
          backdrop-filter: blur(10px);
          margin-bottom: 2rem;
        }

        .intro-section h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .intro-section p {
          opacity: 0.9;
          line-height: 1.6;
          margin: 0;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          text-decoration: none;
          color: white;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 2px solid transparent;
        }

        .contact-method:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(8px);
          border-color: var(--method-color);
        }

        .method-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: var(--method-color);
        }

        .method-content h4 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .method-content p {
          opacity: 0.8;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .method-value {
          font-size: 0.9rem;
          color: var(--method-color);
          font-weight: 600;
        }

        .quick-contact {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .quick-contact h4 {
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .response-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .response-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
        }

        .response-icon {
          font-size: 1.2rem;
        }

        .form-container {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .form-container h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .form-container > p {
          opacity: 0.9;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .status-message {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          font-weight: 600;
        }

        .status-message.success {
          background: rgba(16, 185, 129, 0.2);
          border: 2px solid #10b981;
        }

        .status-message.error {
          background: rgba(239, 68, 68, 0.2);
          border: 2px solid #ef4444;
        }

        .status-icon {
          font-size: 1.2rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 600;
          font-size: 1rem;
        }

        .form-group input,
        .form-group textarea {
          padding: 0.75rem 1rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.2);
        }

        .quick-subjects {
          margin: 1rem 0;
        }

        .quick-subjects p {
          margin-bottom: 1rem;
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .subject-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .subject-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .subject-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.5);
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .submit-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .contact-footer {
          background: rgba(255, 255, 255, 0.1);
          padding: 3rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          text-align: center;
        }

        .availability h4 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .availability-status {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .status-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .status-indicator.available {
          background: #10b981;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        .availability p {
          opacity: 0.9;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .contact {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-method {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .method-icon {
            width: 50px;
            height: 50px;
          }

          .form-container {
            padding: 1.5rem;
          }

          .subject-buttons {
            flex-direction: column;
          }

          .contact-footer {
            padding: 2rem;
          }

          .availability-status {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `})]})},jp=()=>u.jsx(Cg,{children:u.jsxs(Mt,{element:u.jsx(mp,{}),children:[u.jsx(Mt,{path:"/",element:u.jsx(hp,{})}),u.jsx(Mt,{path:"/about",element:u.jsx(gp,{})}),u.jsx(Mt,{path:"/projects",element:u.jsx(pp,{})}),u.jsx(Mt,{path:"/skills",element:u.jsx(vp,{})}),u.jsx(Mt,{path:"/experience",element:u.jsx(bp,{})}),u.jsx(Mt,{path:"/resume",element:u.jsx(yp,{})}),u.jsx(Mt,{path:"/blog",element:u.jsx(xp,{})}),u.jsx(Mt,{path:"/contact",element:u.jsx(Sp,{})})]})});B0.createRoot(document.getElementById("root")).render(u.jsx(R0.StrictMode,{children:u.jsx(tp,{basename:"/",children:u.jsx(jp,{})})}));
