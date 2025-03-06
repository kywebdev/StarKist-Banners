(function(){'use strict';var f;function l(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var m=l(this),aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},n;
if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var ba={a:!0},q={};try{q.__proto__=ba;p=q.a;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r=n;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var t=this||self;function u(a,b){a=a.split(".");var c=t;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};var v="center top bottom left right transparent".split(" ");var w=["-ms-","-moz-","-webkit-",""];function x(a,b){var c=void 0===c?!1:c;for(var d,e,g=0;g<w.length;g++)d=w[g]+"transition-duration",e=(c?w[g]:"")+b,a.style.setProperty(d,e)}function ca(a){var b=document,c=b.getElementsByTagName("head")[0];if(!c){var d=b.getElementsByTagName("body")[0];c=b.createElement("head");d.parentNode.insertBefore(c,d)}b=b.createElement("style");b.textContent=a;c.appendChild(b);return b};function y(a,b,c){c=void 0===c?null:c;var d=document.createEvent("CustomEvent");d.initCustomEvent(a,!0,!0,c);b.dispatchEvent(d)}function z(a,b,c){function d(e){a.removeEventListener(b,d);c(e)}a.addEventListener(b,d)};function A(a){for(var b=0;b<v.length;b++)a.classList.remove(v[b])}function da(a,b){function c(){a.removeEventListener("webkitTransitionEnd",c);a.removeEventListener("transitionend",c);b()}a.addEventListener("webkitTransitionEnd",c);a.addEventListener("transitionend",c)}function B(a,b,c,d){c="transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,"+c+","+d+",0,1);";return a+"."+b+"{-webkit-"+c+"-moz-"+c+"-ms-"+c+c+"}"}
function ea(a,b,c){a=(a&&"#")+a+".gwd-pagedeck > .gwd-page";return B(a,"center",0,0)+B(a,"top",0,c)+B(a,"bottom",0,-c)+B(a,"left",b,0)+B(a,"right",-b,0)}
function C(a,b,c,d,e,g,h){d=void 0===d?"none":d;this.g=a;this.h=b;this.m=c;this.i="none"==d?0:void 0===e?1E3:e;this.j=void 0===g?"linear":g;this.l=[];if(this.i){a=d;h=void 0===h?"top":h;if(this.g){this.g.classList.add("gwd-page");this.g.classList.add("center");b="center";if("push"==a)switch(h){case "top":b="top";break;case "bottom":b="bottom";break;case "left":b="left";break;case "right":b="right"}this.l.push(b);"fade"==a&&this.l.push("transparent")}b="center";if("none"!=a&&"fade"!=a)switch(h){case "top":b=
"bottom";break;case "bottom":b="top";break;case "left":b="right";break;case "right":b="left"}this.h.classList.add(b);this.h.classList.add("gwd-page");"fade"==a&&this.h.classList.add("transparent")}}
C.prototype.start=function(){if(this.i){da(this.h,this.s.bind(this));this.g&&(x(this.g,this.i+"ms"),this.g.classList.add(this.j));x(this.h,this.i+"ms");this.h.classList.add(this.j);var a=this.h;a.setAttribute("gwd-reflow",a.offsetWidth);if(this.g)for(a=0;a<this.l.length;a++)this.g.classList.add(this.l[a]);A(this.h)}else this.m()};C.prototype.s=function(){this.g&&(A(this.g),x(this.g,0),this.g.classList.remove(this.j));x(this.h,0);this.h.classList.remove(this.j);this.m()};var D,E;a:{for(var F=["CLOSURE_FLAGS"],G=t,H=0;H<F.length;H++)if(G=G[F[H]],null==G){E=null;break a}E=G}var I=E&&E[610401301];D=null!=I?I:!1;var J,K=t.navigator;J=K?K.userAgentData||null:null;function L(a){return D?J?J.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}function M(a){var b;a:{if(b=t.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function N(){return D?!!J&&0<J.brands.length:!1}function O(){return N()?L("Chromium"):(M("Chrome")||M("CriOS"))&&!(N()?0:M("Edge"))||M("Silk")};!M("Android")||O();O();!M("Safari")||O()||(N()?0:M("Coast"))||(N()?0:M("Opera"))||(N()?0:M("Edge"))||(N()?L("Microsoft Edge"):M("Edg/"))||N()&&L("Opera");Object.freeze({});function P(a,b){var c=void 0===c?t:c;c=c.performance;a={label:a,type:9,value:c&&c.now&&c.timing?Math.floor(c.now()+c.timing.navigationStart):Date.now()};b=b.google_js_reporting_queue=b.google_js_reporting_queue||[];2048>b.length&&b.push(a)};var Q={},R=!1,S=!1;Q.I=function(a){R||(R=!0,P("11",a))};Q.v=function(a){S||(S=!0,P("12",a))};Q.J=function(a,b,c){var d=b;d=void 0===d?t:d;if(d=(d=d.performance)&&d.now?d.now():null)a={label:a,type:void 0===c?0:c,value:d},b=b.google_js_reporting_queue=b.google_js_reporting_queue||[],2048>b.length&&b.push(a)};Q.reset=function(a){S=R=!1;(a.google_js_reporting_queue=a.google_js_reporting_queue||[]).length=0};u("gwd.rumUtil",Q);u("gwd.rumUtil.logContentLoading",Q.I);
u("gwd.rumUtil.logContentRendered",Q.v);u("gwd.rumUtil.logTimingEvent",Q.J);u("gwd.rumUtil.reset",Q.reset);function T(){var a=HTMLElement.call(this)||this;z(window,"WebComponentsReady",a.H.bind(a));a.s=a.o.bind(a,"shake");a.A=a.o.bind(a,"tilt");a.m=a.o.bind(a,"rotatetoportrait");a.l=a.o.bind(a,"rotatetolandscape");a.g=[];a.B=a.G.bind(a);a.D=a.F.bind(a);a.C=null;a.i=null;a.h=-1;a.j=!1;return a}var U=HTMLElement;T.prototype=aa(U.prototype);T.prototype.constructor=T;
if(r)r(T,U);else for(var V in U)if("prototype"!=V)if(Object.defineProperties){var X=Object.getOwnPropertyDescriptor(U,V);X&&Object.defineProperty(T,V,X)}else T[V]=U[V];f=T.prototype;f.connectedCallback=function(){this.addEventListener("pageload",this.B,!1);document.body.addEventListener("shake",this.s,!0);document.body.addEventListener("tilt",this.A,!0);document.body.addEventListener("rotatetoportrait",this.m,!0);document.body.addEventListener("rotatetolandscape",this.l,!0)};
f.disconnectedCallback=function(){this.removeEventListener("pageload",this.B,!1);document.body&&(document.body.removeEventListener("shake",this.s,!0),document.body.removeEventListener("tilt",this.A,!0),document.body.removeEventListener("rotatetoportrait",this.m,!0),document.body.removeEventListener("rotatetolandscape",this.l,!0))};
f.H=function(){this.classList.add("gwd-pagedeck");this.C||(this.C=ca(ea(this.id,this.offsetWidth,this.offsetHeight)));this.g=Array.prototype.slice.call(this.querySelectorAll("gwd-page"));this.g.forEach(function(a){a.classList.add("gwd-page")});for(y("pagesregistered",this,{pages:this.g.slice()});this.firstChild;)this.removeChild(this.firstChild);-1==this.h&&void 0!==this.u&&this.goToPage(this.u)};
function Y(a,b,c,d,e,g){if(!(a.h==b||0>b||b>a.g.length-1||a.i)){var h=a.g[a.h],k=a.g[b];a.h=b;a.i=new C(h,k,a.D,c,d,e,g);var W=k.gwdLoad&&!k.gwdIsLoaded();a.j=W;z(k,"attached",function(){k.gwdActivate();W?k.gwdLoad():Z(a)});a.appendChild(k)}}f.G=function(a){this.j&&a.target.parentNode==this&&(Z(this),this.j=!1)};function Z(a){(0,Q.v)(window);y("pagetransitionstart",a);a.i.start()}
f.F=function(){if(this.i){var a=this.i.g,b=this.i.h;this.i=null;y("pagetransitionend",this,{outgoingPage:a?a:null,incomingPage:b});a&&a.gwdDeactivate();b.gwdPresent()}};f.findPageIndexByAttributeValue=function(a,b){for(var c=this.g.length,d,e=0;e<c;e++)if(d=this.g[e],"boolean"==typeof b){if(d.hasAttribute(a))return e}else if(d.getAttribute(a)==b)return e;return-1};f.goToNextPage=function(a,b,c,d,e){var g=this.h,h=g+1;h>=this.g.length&&(h=a?0:g);Y(this,h,b,c,d,e)};
f.goToPreviousPage=function(a,b,c,d,e){var g=this.h,h=this.g.length,k=g-1;0>k&&(k=a?h-1:g);Y(this,k,b,c,d,e)};f.goToPage=function(a,b,c,d,e){this.g.length?(a="number"==typeof a?a:this.findPageIndexByAttributeValue("id",a),0<=a&&Y(this,a,b,c,d,e)):this.u=a};f.getPages=function(){return this.g};f.getPage=function(a){if("number"!=typeof a){if(!a)return null;a=this.findPageIndexByAttributeValue("id",a)}return 0>a||a>this.g.length-1?null:this.g[a]};f.getCurrentPage=function(){return this.getPage(this.h)};
f.getDefaultPage=function(){var a=this.getAttribute("default-page");return a?this.getPage(this.findPageIndexByAttributeValue("id",a)):this.getPage(0)};f.getOrientationSpecificPage=function(a,b){b=this.getPage(b);var c=b.getAttribute("alt-orientation-page");if(!c)return b;var d=b.isPortrait();a=1==a;c=this.getPage(c);return a==d?b:c};f.o=function(a,b){if(b.target==document.body){var c=this.getPage(this.h);y(a,c,b.detail)}};
f.getElementById=function(a){for(var b=this.g.length,c=0;c<b;c++){var d=this.g[c].querySelector("#"+a);if(d)return d}return null};f.getElementsBySelector=function(a){for(var b=this.g.length,c=[],d=0;d<b;d++){var e=this.g[d].querySelectorAll(a);e&&(c=c.concat(Array.prototype.slice.call(e)))}return c};m.Object.defineProperties(T.prototype,{currentIndex:{configurable:!0,enumerable:!0,get:function(){return 0<=this.h?this.h:void 0}}});customElements.define("gwd-pagedeck",T);}).call(this);
