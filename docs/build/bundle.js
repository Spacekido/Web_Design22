!function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function a(){return Object.create(null)}function i(e){e.forEach(n)}function o(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let s,l;function c(e,t){return s||(s=document.createElement("a")),s.href=t,e===s.href}function d(t,n,a){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const a=t.subscribe(...n);return a.unsubscribe?()=>a.unsubscribe():a}(n,a))}function u(e,t,n,a){if(e){const i=p(e,t,n,a);return e[0](i)}}function p(e,n,a,i){return e[1]&&i?t(a.ctx.slice(),e[1](i(n))):a.ctx}function m(e,t,n,a){if(e[2]&&a){const i=e[2](a(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let a=0;a<n;a+=1)e[a]=t.dirty[a]|i[a];return e}return t.dirty|i}return t.dirty}function g(e,t,n,a,i,o){if(i){const r=p(t,n,a,o);e.p(r,i)}}function f(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function h(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function $(e,t){const n={};t=new Set(t);for(const a in e)t.has(a)||"$"===a[0]||(n[a]=e[a]);return n}function v(t){return t&&o(t.destroy)?t.destroy:e}function b(e,t){e.appendChild(t)}function y(e,t,n){e.insertBefore(t,n||null)}function _(e){e.parentNode.removeChild(e)}function A(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function x(){return w(" ")}function C(){return w("")}function S(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function E(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function T(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const a in t)null==t[a]?e.removeAttribute(a):"style"===a?e.style.cssText=t[a]:"__value"===a?e.value=e[a]=t[a]:n[a]&&n[a].set?e[a]=t[a]:E(e,a,t[a])}function L(e,t){for(const n in t)E(e,n,t[n])}function I(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function z(e,t,n,a){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,a?"important":"")}function O(e,t,n){e.classList[n?"add":"remove"](t)}function q(e){l=e}function M(){if(!l)throw new Error("Function called outside component initialization");return l}function R(e){M().$$.on_mount.push(e)}function B(e,t){M().$$.context.set(e,t)}function D(e){return M().$$.context.get(e)}function P(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const k=[],N=[],H=[],j=[],U=Promise.resolve();let V=!1;function F(e){H.push(e)}const G=new Set;let X=0;function W(){const e=l;do{for(;X<k.length;){const e=k[X];X++,q(e),Y(e.$$)}for(q(null),k.length=0,X=0;N.length;)N.pop()();for(let e=0;e<H.length;e+=1){const t=H[e];G.has(t)||(G.add(t),t())}H.length=0}while(k.length);for(;j.length;)j.pop()();V=!1,G.clear(),q(e)}function Y(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}const Q=new Set;let Z;function J(){Z={r:0,c:[],p:Z}}function K(){Z.r||i(Z.c),Z=Z.p}function ee(e,t){e&&e.i&&(Q.delete(e),e.i(t))}function te(e,t,n,a){if(e&&e.o){if(Q.has(e))return;Q.add(e),Z.c.push((()=>{Q.delete(e),a&&(n&&e.d(1),a())})),e.o(t)}}const ne="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function ae(e,t){const n={},a={},i={$$scope:1};let o=e.length;for(;o--;){const r=e[o],s=t[o];if(s){for(const e in r)e in s||(a[e]=1);for(const e in s)i[e]||(n[e]=s[e],i[e]=1);e[o]=s}else for(const e in r)i[e]=1}for(const e in a)e in n||(n[e]=void 0);return n}function ie(e){return"object"==typeof e&&null!==e?e:{}}function oe(e){e&&e.c()}function re(e,t,a,r){const{fragment:s,on_mount:l,on_destroy:c,after_update:d}=e.$$;s&&s.m(t,a),r||F((()=>{const t=l.map(n).filter(o);c?c.push(...t):i(t),e.$$.on_mount=[]})),d.forEach(F)}function se(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function le(e,t){-1===e.$$.dirty[0]&&(k.push(e),V||(V=!0,U.then(W)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ce(t,n,o,r,s,c,d,u=[-1]){const p=l;q(t);const m=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:s,bound:a(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(p?p.$$.context:[])),callbacks:a(),dirty:u,skip_bound:!1,root:n.target||p.$$.root};d&&d(m.root);let g=!1;if(m.ctx=o?o(t,n.props||{},((e,n,...a)=>{const i=a.length?a[0]:n;return m.ctx&&s(m.ctx[e],m.ctx[e]=i)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](i),g&&le(t,e)),n})):[],m.update(),g=!0,i(m.before_update),m.fragment=!!r&&r(m.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);m.fragment&&m.fragment.l(e),e.forEach(_)}else m.fragment&&m.fragment.c();n.intro&&ee(t.$$.fragment),re(t,n.target,n.anchor,n.customElement),W()}q(p)}class de{$destroy(){se(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var ue=function(e,t){return ue=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},ue(e,t)};function pe(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}ue(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var me=function(){return me=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},me.apply(this,arguments)};function ge(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}
/**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */var fe=function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}();
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */var he=Object.freeze({__proto__:null,applyPassive:function(e){return void 0===e&&(e=window),!!function(e){void 0===e&&(e=window);var t=!1;try{var n={get passive(){return t=!0,!1}},a=function(){};e.document.addEventListener("test",a,n),e.document.removeEventListener("test",a,n)}catch(e){t=!1}return t}(e)&&{passive:!0}}});
/**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */function $e(e,t){return(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t)}var ve,be=Object.freeze({__proto__:null,closest:function(e,t){if(e.closest)return e.closest(t);for(var n=e;n;){if($e(n,t))return n;n=n.parentElement}return null},matches:$e,estimateScrollWidth:function(e){var t=e;if(null!==t.offsetParent)return t.scrollWidth;var n=t.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var a=n.scrollWidth;return document.documentElement.removeChild(n),a}}),ye={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},_e={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Ae={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
/**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
var we=["touchstart","pointerdown","mousedown","keydown"],xe=["touchend","pointerup","mouseup","contextmenu"],Ce=[],Se=function(e){function t(n){var a=e.call(this,me(me({},t.defaultAdapter),n))||this;return a.activationAnimationHasEnded=!1,a.activationTimer=0,a.fgDeactivationRemovalTimer=0,a.fgScale="0",a.frame={width:0,height:0},a.initialSize=0,a.layoutFrame=0,a.maxRadius=0,a.unboundedCoords={left:0,top:0},a.activationState=a.defaultActivationState(),a.activationTimerCallback=function(){a.activationAnimationHasEnded=!0,a.runDeactivationUXLogicIfReady()},a.activateHandler=function(e){a.activateImpl(e)},a.deactivateHandler=function(){a.deactivateImpl()},a.focusHandler=function(){a.handleFocus()},a.blurHandler=function(){a.handleBlur()},a.resizeHandler=function(){a.layout()},a}return pe(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return ye},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return _e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Ae},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var a=t.cssClasses,i=a.ROOT,o=a.UNBOUNDED;requestAnimationFrame((function(){e.adapter.addClass(i),e.adapter.isUnbounded()&&(e.adapter.addClass(o),e.layoutInternal())}))}},t.prototype.destroy=function(){var e=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));var n=t.cssClasses,a=n.ROOT,i=n.UNBOUNDED;requestAnimationFrame((function(){e.adapter.removeClass(a),e.adapter.removeClass(i),e.removeCssVars()}))}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},t.prototype.activate=function(e){this.activateImpl(e)},t.prototype.deactivate=function(){this.deactivateImpl()},t.prototype.layout=function(){var e=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame((function(){e.layoutInternal(),e.layoutFrame=0}))},t.prototype.setUnbounded=function(e){var n=t.cssClasses.UNBOUNDED;e?this.adapter.addClass(n):this.adapter.removeClass(n)},t.prototype.handleFocus=function(){var e=this;requestAnimationFrame((function(){return e.adapter.addClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.handleBlur=function(){var e=this;requestAnimationFrame((function(){return e.adapter.removeClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},t.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},t.prototype.registerRootHandlers=function(e){var t,n;if(e){try{for(var a=ge(we),i=a.next();!i.done;i=a.next()){var o=i.value;this.adapter.registerInteractionHandler(o,this.activateHandler)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},t.prototype.registerDeactivationHandlers=function(e){var t,n;if("keydown"===e.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var a=ge(xe),i=a.next();!i.done;i=a.next()){var o=i.value;this.adapter.registerDocumentInteractionHandler(o,this.deactivateHandler)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}},t.prototype.deregisterRootHandlers=function(){var e,t;try{for(var n=ge(we),a=n.next();!a.done;a=n.next()){var i=a.value;this.adapter.deregisterInteractionHandler(i,this.activateHandler)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},t.prototype.deregisterDeactivationHandlers=function(){var e,t;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var n=ge(xe),a=n.next();!a.done;a=n.next()){var i=a.value;this.adapter.deregisterDocumentInteractionHandler(i,this.deactivateHandler)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}},t.prototype.removeCssVars=function(){var e=this,n=t.strings;Object.keys(n).forEach((function(t){0===t.indexOf("VAR_")&&e.adapter.updateCssVariable(n[t],null)}))},t.prototype.activateImpl=function(e){var t=this;if(!this.adapter.isSurfaceDisabled()){var n=this.activationState;if(!n.isActivated){var a=this.previousActivationEvent;if(!(a&&void 0!==e&&a.type!==e.type))n.isActivated=!0,n.isProgrammatic=void 0===e,n.activationEvent=e,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&Ce.length>0&&Ce.some((function(e){return t.adapter.containsEventTarget(e)}))?this.resetActivationState():(void 0!==e&&(Ce.push(e.target),this.registerDeactivationHandlers(e)),n.wasElementMadeActive=this.checkElementMadeActive(e),n.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame((function(){Ce=[],n.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(n.wasElementMadeActive=t.checkElementMadeActive(e),n.wasElementMadeActive&&t.animateActivation()),n.wasElementMadeActive||(t.activationState=t.defaultActivationState())})))}}},t.prototype.checkElementMadeActive=function(e){return void 0===e||"keydown"!==e.type||this.adapter.isSurfaceActive()},t.prototype.animateActivation=function(){var e=this,n=t.strings,a=n.VAR_FG_TRANSLATE_START,i=n.VAR_FG_TRANSLATE_END,o=t.cssClasses,r=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,l=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var c="",d="";if(!this.adapter.isUnbounded()){var u=this.getFgTranslationCoordinates(),p=u.startPoint,m=u.endPoint;c=p.x+"px, "+p.y+"px",d=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(a,c),this.adapter.updateCssVariable(i,d),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(r),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer=setTimeout((function(){e.activationTimerCallback()}),l)},t.prototype.getFgTranslationCoordinates=function(){var e,t=this.activationState,n=t.activationEvent;return{startPoint:e={x:(e=t.wasActivatedByPointer?function(e,t,n){if(!e)return{x:0,y:0};var a,i,o=t.x,r=t.y,s=o+n.left,l=r+n.top;if("touchstart"===e.type){var c=e;a=c.changedTouches[0].pageX-s,i=c.changedTouches[0].pageY-l}else{var d=e;a=d.pageX-s,i=d.pageY-l}return{x:a,y:i}}(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2}).x-this.initialSize/2,y:e.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},t.prototype.runDeactivationUXLogicIfReady=function(){var e=this,n=t.cssClasses.FG_DEACTIVATION,a=this.activationState,i=a.hasDeactivationUXRun,o=a.isActivated;(i||!o)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout((function(){e.adapter.removeClass(n)}),Ae.FG_DEACTIVATION_MS))},t.prototype.rmBoundedActivationClasses=function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},t.prototype.resetActivationState=function(){var e=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout((function(){return e.previousActivationEvent=void 0}),t.numbers.TAP_DELAY_MS)},t.prototype.deactivateImpl=function(){var e=this,t=this.activationState;if(t.isActivated){var n=me({},t);t.isProgrammatic?(requestAnimationFrame((function(){e.animateDeactivation(n)})),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame((function(){e.activationState.hasDeactivationUXRun=!0,e.animateDeactivation(n),e.resetActivationState()})))}},t.prototype.animateDeactivation=function(e){var t=e.wasActivatedByPointer,n=e.wasElementMadeActive;(t||n)&&this.runDeactivationUXLogicIfReady()},t.prototype.layoutInternal=function(){var e=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?n:Math.sqrt(Math.pow(e.frame.width,2)+Math.pow(e.frame.height,2))+t.numbers.PADDING;var a=Math.floor(n*t.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&a%2!=0?this.initialSize=a-1:this.initialSize=a,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},t.prototype.updateLayoutCssVars=function(){var e=t.strings,n=e.VAR_FG_SIZE,a=e.VAR_LEFT,i=e.VAR_TOP,o=e.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(a,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(i,this.unboundedCoords.top+"px"))},t}(fe),Ee={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},Te={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Le={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},Ie=function(e){function t(n){return e.call(this,me(me({},t.defaultAdapter),n))||this}return pe(t,e),Object.defineProperty(t,"strings",{get:function(){return Le},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return Ee},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Te},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.handleTargetScroll=function(){},t.prototype.handleWindowResize=function(){},t.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},t}(fe),ze=function(e){function t(t){var n=e.call(this,t)||this;return n.wasDocked=!0,n.isDockedShowing=!0,n.currentAppBarOffsetTop=0,n.isCurrentlyBeingResized=!1,n.resizeThrottleId=0,n.resizeDebounceId=0,n.lastScrollPosition=n.adapter.getViewportScrollY(),n.topAppBarHeight=n.adapter.getTopAppBarHeight(),n}return pe(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this.adapter.setStyle("top","")},t.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter.getViewportScrollY(),0),t=e-this.lastScrollPosition;this.lastScrollPosition=e,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=t,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},t.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout((function(){e.resizeThrottleId=0,e.throttledResizeHandler()}),Te.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout((function(){e.handleTargetScroll(),e.isCurrentlyBeingResized=!1,e.resizeDebounceId=0}),Te.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},t.prototype.checkForUpdate=function(){var e=-this.topAppBarHeight,t=this.currentAppBarOffsetTop<0,n=this.currentAppBarOffsetTop>e,a=t&&n;if(a)this.wasDocked=!1;else{if(!this.wasDocked)return this.wasDocked=!0,!0;if(this.isDockedShowing!==n)return this.isDockedShowing=n,!0}return a},t.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var e=this.currentAppBarOffsetTop;Math.abs(e)>=this.topAppBarHeight&&(e=-Te.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",e+"px")}},t.prototype.throttledResizeHandler=function(){var e=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==e&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-e,this.topAppBarHeight=e),this.handleTargetScroll()},t}(Ie),Oe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.wasScrolled=!1,t}return pe(t,e),t.prototype.handleTargetScroll=function(){this.adapter.getViewportScrollY()<=0?this.wasScrolled&&(this.adapter.removeClass(Ee.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(Ee.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},t}(ze),qe=function(e){function t(t){var n=e.call(this,t)||this;return n.collapsed=!1,n.isAlwaysCollapsed=!1,n}return pe(t,e),Object.defineProperty(t.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),t.prototype.init=function(){e.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(Ee.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(Ee.SHORT_COLLAPSED_CLASS))},t.prototype.setAlwaysCollapsed=function(e){this.isAlwaysCollapsed=!!e,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},t.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},t.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},t.prototype.maybeCollapseBar=function(){this.isAlwaysCollapsed||(this.adapter.getViewportScrollY()<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse())},t.prototype.uncollapse=function(){this.adapter.removeClass(Ee.SHORT_COLLAPSED_CLASS),this.collapsed=!1},t.prototype.collapse=function(){this.adapter.addClass(Ee.SHORT_COLLAPSED_CLASS),this.collapsed=!0},t}(Ie);const Me=[];function Re(t,n=e){let a;const i=new Set;function o(e){if(r(t,e)&&(t=e,a)){const e=!Me.length;for(const e of i)e[1](),Me.push(e,t);if(e){for(let e=0;e<Me.length;e+=2)Me[e][0](Me[e+1]);Me.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(r,s=e){const l=[r,s];return i.add(l),1===i.size&&(a=n(o)||e),r(t),()=>{i.delete(l),0===i.size&&(a(),a=null)}}}}function Be(e){return Object.entries(e).filter((([e,t])=>""!==e&&t)).map((([e])=>e)).join(" ")}function De(e,t,n,a={bubbles:!0},i=!1){if("undefined"!=typeof Event&&e){const o=new CustomEvent(t,Object.assign(Object.assign({},a),{detail:n}));if(null==e||e.dispatchEvent(o),i&&t.startsWith("SMUI")){const i=new CustomEvent(t.replace(/^SMUI/g,(()=>"MDC")),Object.assign(Object.assign({},a),{detail:n}));null==e||e.dispatchEvent(i),i.defaultPrevented&&o.preventDefault()}return o}}const Pe=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,ke=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function Ne(e){let t,n=[];function a(t){P(e,t)}return e.$on=(e,a)=>{let i=e,o=()=>{};t?o=t(i,a):n.push([i,a]);return i.match(Pe)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',i),()=>{o()}},e=>{const i=[],o={};t=(t,n)=>{let r=t,s=n,l=!1;const c=r.match(Pe),d=r.match(ke),u=c||d;if(r.match(/^SMUI:\w+:/)){const e=r.split(":");let t="";for(let n=0;n<e.length;n++)t+=n===e.length-1?":"+e[n]:e[n].split("-").map((e=>e.slice(0,1).toUpperCase()+e.slice(1))).join("");console.warn(`The event ${r.split("$")[0]} has been renamed to ${t.split("$")[0]}.`),r=t}if(u){const e=r.split(c?":":"$");r=e[0];const t=Object.fromEntries(e.slice(1).map((e=>[e,!0])));t.passive&&(l=l||{},l.passive=!0),t.nonpassive&&(l=l||{},l.passive=!1),t.capture&&(l=l||{},l.capture=!0),t.once&&(l=l||{},l.once=!0),t.preventDefault&&(p=s,s=function(e){return e.preventDefault(),p.call(this,e)}),t.stopPropagation&&(s=function(e){return function(t){return t.stopPropagation(),e.call(this,t)}}(s))}var p;const m=S(e,r,s,l),g=()=>{m();const e=i.indexOf(g);e>-1&&i.splice(e,1)};return i.push(g),r in o||(o[r]=S(e,r,a)),g};for(let e=0;e<n.length;e++)t(n[e][0],n[e][1]);return{destroy:()=>{for(let e=0;e<i.length;e++)i[e]();for(let e of Object.entries(o))e[1]()}}}}function He(e,t){let n=[];if(t)for(let a=0;a<t.length;a++){const i=t[a],o=Array.isArray(i)?i[0]:i;Array.isArray(i)&&i.length>1?n.push(o(e,i[1])):n.push(o(e))}return{update(e){if((e&&e.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(e)for(let t=0;t<e.length;t++){const a=n[t];if(a&&a.update){const n=e[t];Array.isArray(n)&&n.length>1?a.update(n[1]):a.update()}}},destroy(){for(let e=0;e<n.length;e++){const t=n[e];t&&t.destroy&&t.destroy()}}}}const{window:je}=ne;function Ue(e){let n,a,r,s,l,c,d;const p=e[22].default,h=u(p,e,e[21],null);let $=[{class:a=Be({[e[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":"short"===e[4],"mdc-top-app-bar--short-collapsed":e[0],"mdc-top-app-bar--fixed":"fixed"===e[4],"smui-top-app-bar--static":"static"===e[4],"smui-top-app-bar--color-secondary":"secondary"===e[5],"mdc-top-app-bar--prominent":e[6],"mdc-top-app-bar--dense":e[7],...e[11]})},{style:r=Object.entries(e[12]).map(Ve).concat([e[3]]).join(" ")},e[15]],b={};for(let e=0;e<$.length;e+=1)b=t(b,$[e]);return{c(){n=A("header"),h&&h.c(),T(n,b)},m(t,a){y(t,n,a),h&&h.m(n,null),e[25](n),l=!0,c||(d=[S(je,"resize",e[23]),S(je,"scroll",e[24]),v(s=He.call(null,n,e[1])),v(e[13].call(null,n)),S(n,"SMUITopAppBarIconButton:nav",e[26])],c=!0)},p(e,t){h&&h.p&&(!l||2097152&t[0])&&g(h,p,e,e[21],l?m(p,e[21],t,null):f(e[21]),null),T(n,b=ae($,[(!l||2293&t[0]&&a!==(a=Be({[e[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":"short"===e[4],"mdc-top-app-bar--short-collapsed":e[0],"mdc-top-app-bar--fixed":"fixed"===e[4],"smui-top-app-bar--static":"static"===e[4],"smui-top-app-bar--color-secondary":"secondary"===e[5],"mdc-top-app-bar--prominent":e[6],"mdc-top-app-bar--dense":e[7],...e[11]})))&&{class:a},(!l||4104&t[0]&&r!==(r=Object.entries(e[12]).map(Ve).concat([e[3]]).join(" ")))&&{style:r},32768&t[0]&&e[15]])),s&&o(s.update)&&2&t[0]&&s.update.call(null,e[1])},i(e){l||(ee(h,e),l=!0)},o(e){te(h,e),l=!1},d(t){t&&_(n),h&&h.d(t),e[25](null),c=!1,i(d)}}}const Ve=([e,t])=>`${e}: ${t};`;function Fe(e,n,a){const i=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let o=$(n,i),{$$slots:r={},$$scope:s}=n;const l=Ne(M());let c=()=>{};function d(e){return e===c}let{use:u=[]}=n,{class:p=""}=n,{style:m=""}=n,{variant:g="standard"}=n,{color:f="primary"}=n,{collapsed:v=c}=n;const b=!d(v)&&!!v;d(v)&&(v=!1);let y,_,A,{prominent:w=!1}=n,{dense:x=!1}=n,{scrollTarget:C}=n,S={},E={},T={subscribe:Re({variant:g,prominent:w,dense:x},(e=>{a(18,A=e)})).subscribe};let L,I=g;function z(){return new({static:Ie,short:qe,fixed:Oe}[g]||ze)({hasClass:O,addClass:q,removeClass:B,setStyle:D,getTopAppBarHeight:()=>y.clientHeight,notifyNavigationIconClicked:()=>De(y,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>null==C?window.pageYOffset:C.scrollTop,getTotalActionItems:()=>y.querySelectorAll(".mdc-top-app-bar__action-item").length})}function O(e){return e in S?S[e]:k().classList.contains(e)}function q(e){S[e]||a(11,S[e]=!0,S)}function B(e){e in S&&!S[e]||a(11,S[e]=!1,S)}function D(e,t){E[e]!=t&&(""===t||null==t?(delete E[e],a(12,E),a(20,I),a(4,g),a(9,_)):a(12,E[e]=t,E))}function P(){_&&(_.handleTargetScroll(),"short"===g&&a(0,v="isCollapsed"in _&&_.isCollapsed))}function k(){return y}R((()=>(a(9,_=z()),_.init(),()=>{_.destroy()})));return e.$$set=e=>{n=t(t({},n),h(e)),a(15,o=$(n,i)),"use"in e&&a(1,u=e.use),"class"in e&&a(2,p=e.class),"style"in e&&a(3,m=e.style),"variant"in e&&a(4,g=e.variant),"color"in e&&a(5,f=e.color),"collapsed"in e&&a(0,v=e.collapsed),"prominent"in e&&a(6,w=e.prominent),"dense"in e&&a(7,x=e.dense),"scrollTarget"in e&&a(8,C=e.scrollTarget),"$$scope"in e&&a(21,s=e.$$scope)},e.$$.update=()=>{262352&e.$$.dirty[0]&&A&&A({variant:g,prominent:w,dense:x}),1049104&e.$$.dirty[0]&&I!==g&&_&&(a(20,I=g),_.destroy(),a(11,S={}),a(12,E={}),a(9,_=z()),_.init()),528&e.$$.dirty[0]&&_&&"short"===g&&"setAlwaysCollapsed"in _&&_.setAlwaysCollapsed(b),524544&e.$$.dirty[0]&&L!==C&&(L&&L.removeEventListener("scroll",P),C&&C.addEventListener("scroll",P),a(19,L=C))},[v,u,p,m,g,f,w,x,C,_,y,S,E,l,P,o,function(){return T},k,A,L,I,s,r,()=>"short"!==g&&"fixed"!==g&&_&&_.handleWindowResize(),()=>null==C&&P(),function(e){N[e?"unshift":"push"]((()=>{y=e,a(10,y)}))},()=>_&&_.handleNavigationClick()]}class Ge extends de{constructor(e){super(),ce(this,e,Fe,Ue,r,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}function Xe(e){let n,a,r,s,l;const c=e[6].default,d=u(c,e,e[5],null);let p=[e[3]],h={};for(let e=0;e<p.length;e+=1)h=t(h,p[e]);return{c(){n=A("div"),d&&d.c(),T(n,h)},m(t,i){y(t,n,i),d&&d.m(n,null),e[7](n),r=!0,s||(l=[v(a=He.call(null,n,e[0])),v(e[2].call(null,n))],s=!0)},p(e,[t]){d&&d.p&&(!r||32&t)&&g(d,c,e,e[5],r?m(c,e[5],t,null):f(e[5]),null),T(n,h=ae(p,[8&t&&e[3]])),a&&o(a.update)&&1&t&&a.update.call(null,e[0])},i(e){r||(ee(d,e),r=!0)},o(e){te(d,e),r=!1},d(t){t&&_(n),d&&d.d(t),e[7](null),s=!1,i(l)}}}function We(e,n,a){const i=["use","getElement"];let o=$(n,i),{$$slots:r={},$$scope:s}=n,{use:l=[]}=n;const c=Ne(M());let d;return e.$$set=e=>{n=t(t({},n),h(e)),a(3,o=$(n,i)),"use"in e&&a(0,l=e.use),"$$scope"in e&&a(5,s=e.$$scope)},[l,d,c,o,function(){return d},s,r,function(e){N[e?"unshift":"push"]((()=>{d=e,a(1,d)}))}]}class Ye extends de{constructor(e){super(),ce(this,e,We,Xe,r,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function Qe(e){let t;const n=e[10].default,a=u(n,e,e[12],null);return{c(){a&&a.c()},m(e,n){a&&a.m(e,n),t=!0},p(e,i){a&&a.p&&(!t||4096&i)&&g(a,n,e,e[12],t?m(n,e[12],i,null):f(e[12]),null)},i(e){t||(ee(a,e),t=!0)},o(e){te(a,e),t=!1},d(e){a&&a.d(e)}}}function Ze(e){let n,a,i;const o=[{use:[e[7],...e[0]]},{class:Be({[e[1]]:!0,[e[5]]:!0,...e[4]})},e[6],e[8]];var r=e[2];function s(e){let n={$$slots:{default:[Qe]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return r&&(n=new r(s(e)),e[11](n)),{c(){n&&oe(n.$$.fragment),a=C()},m(e,t){n&&re(n,e,t),y(e,a,t),i=!0},p(e,[t]){const i=499&t?ae(o,[129&t&&{use:[e[7],...e[0]]},50&t&&{class:Be({[e[1]]:!0,[e[5]]:!0,...e[4]})},64&t&&ie(e[6]),256&t&&ie(e[8])]):{};if(4096&t&&(i.$$scope={dirty:t,ctx:e}),r!==(r=e[2])){if(n){J();const e=n;te(e.$$.fragment,1,0,(()=>{se(e,1)})),K()}r?(n=new r(s(e)),e[11](n),oe(n.$$.fragment),ee(n.$$.fragment,1),re(n,a.parentNode,a)):n=null}else r&&n.$set(i)},i(e){i||(n&&ee(n.$$.fragment,e),i=!0)},o(e){n&&te(n.$$.fragment,e),i=!1},d(t){e[11](null),t&&_(a),n&&se(n,t)}}}const Je={component:Ye,class:"",classMap:{},contexts:{},props:{}};function Ke(e,n,a){const i=["use","class","component","getElement"];let o,r=$(n,i),{$$slots:s={},$$scope:l}=n,{use:c=[]}=n,{class:d=""}=n;const u=Je.class,p={},m=[],g=Je.contexts,f=Je.props;let{component:v=Je.component}=n;Object.entries(Je.classMap).forEach((([e,t])=>{const n=D(t);n&&"subscribe"in n&&m.push(n.subscribe((t=>{a(4,p[e]=t,p)})))}));const b=Ne(M());for(let e in g)g.hasOwnProperty(e)&&B(e,g[e]);var y;return y=()=>{for(const e of m)e()},M().$$.on_destroy.push(y),e.$$set=e=>{n=t(t({},n),h(e)),a(8,r=$(n,i)),"use"in e&&a(0,c=e.use),"class"in e&&a(1,d=e.class),"component"in e&&a(2,v=e.component),"$$scope"in e&&a(12,l=e.$$scope)},[c,d,v,o,p,u,f,b,r,function(){return o.getElement()},s,function(e){N[e?"unshift":"push"]((()=>{o=e,a(3,o)}))},l]}class et extends de{constructor(e){super(),ce(this,e,Ke,Ze,r,{use:0,class:1,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const tt=Object.assign({},Je);function nt(e){return new Proxy(et,{construct:function(t,n){return Object.assign(Je,tt,e),new t(...n)},get:function(t,n){return Object.assign(Je,tt,e),t[n]}})}function at(e){let n,a,r,s,l;const c=e[7].default,d=u(c,e,e[6],null);let p=[{href:e[1]},e[4]],h={};for(let e=0;e<p.length;e+=1)h=t(h,p[e]);return{c(){n=A("a"),d&&d.c(),T(n,h)},m(t,i){y(t,n,i),d&&d.m(n,null),e[8](n),r=!0,s||(l=[v(a=He.call(null,n,e[0])),v(e[3].call(null,n))],s=!0)},p(e,[t]){d&&d.p&&(!r||64&t)&&g(d,c,e,e[6],r?m(c,e[6],t,null):f(e[6]),null),T(n,h=ae(p,[(!r||2&t)&&{href:e[1]},16&t&&e[4]])),a&&o(a.update)&&1&t&&a.update.call(null,e[0])},i(e){r||(ee(d,e),r=!0)},o(e){te(d,e),r=!1},d(t){t&&_(n),d&&d.d(t),e[8](null),s=!1,i(l)}}}function it(e,n,a){const i=["use","href","getElement"];let o=$(n,i),{$$slots:r={},$$scope:s}=n,{use:l=[]}=n,{href:c="javascript:void(0);"}=n;const d=Ne(M());let u;return e.$$set=e=>{n=t(t({},n),h(e)),a(4,o=$(n,i)),"use"in e&&a(0,l=e.use),"href"in e&&a(1,c=e.href),"$$scope"in e&&a(6,s=e.$$scope)},[l,c,u,d,o,function(){return u},s,r,function(e){N[e?"unshift":"push"]((()=>{u=e,a(2,u)}))}]}function ot(e){let n,a,r,s,l;const c=e[6].default,d=u(c,e,e[5],null);let p=[e[3]],h={};for(let e=0;e<p.length;e+=1)h=t(h,p[e]);return{c(){n=A("button"),d&&d.c(),T(n,h)},m(t,i){y(t,n,i),d&&d.m(n,null),n.autofocus&&n.focus(),e[7](n),r=!0,s||(l=[v(a=He.call(null,n,e[0])),v(e[2].call(null,n))],s=!0)},p(e,[t]){d&&d.p&&(!r||32&t)&&g(d,c,e,e[5],r?m(c,e[5],t,null):f(e[5]),null),T(n,h=ae(p,[8&t&&e[3]])),a&&o(a.update)&&1&t&&a.update.call(null,e[0])},i(e){r||(ee(d,e),r=!0)},o(e){te(d,e),r=!1},d(t){t&&_(n),d&&d.d(t),e[7](null),s=!1,i(l)}}}function rt(e,n,a){const i=["use","getElement"];let o=$(n,i),{$$slots:r={},$$scope:s}=n,{use:l=[]}=n;const c=Ne(M());let d;return e.$$set=e=>{n=t(t({},n),h(e)),a(3,o=$(n,i)),"use"in e&&a(0,l=e.use),"$$scope"in e&&a(5,s=e.$$scope)},[l,d,c,o,function(){return d},s,r,function(e){N[e?"unshift":"push"]((()=>{d=e,a(1,d)}))}]}function st(e){let n,a,r,s,l;const c=e[6].default,d=u(c,e,e[5],null);let p=[e[3]],h={};for(let e=0;e<p.length;e+=1)h=t(h,p[e]);return{c(){n=A("i"),d&&d.c(),T(n,h)},m(t,i){y(t,n,i),d&&d.m(n,null),e[7](n),r=!0,s||(l=[v(a=He.call(null,n,e[0])),v(e[2].call(null,n))],s=!0)},p(e,[t]){d&&d.p&&(!r||32&t)&&g(d,c,e,e[5],r?m(c,e[5],t,null):f(e[5]),null),T(n,h=ae(p,[8&t&&e[3]])),a&&o(a.update)&&1&t&&a.update.call(null,e[0])},i(e){r||(ee(d,e),r=!0)},o(e){te(d,e),r=!1},d(t){t&&_(n),d&&d.d(t),e[7](null),s=!1,i(l)}}}function lt(e,n,a){const i=["use","getElement"];let o=$(n,i),{$$slots:r={},$$scope:s}=n,{use:l=[]}=n;const c=Ne(M());let d;return e.$$set=e=>{n=t(t({},n),h(e)),a(3,o=$(n,i)),"use"in e&&a(0,l=e.use),"$$scope"in e&&a(5,s=e.$$scope)},[l,d,c,o,function(){return d},s,r,function(e){N[e?"unshift":"push"]((()=>{d=e,a(1,d)}))}]}class ct extends de{constructor(e){super(),ce(this,e,lt,st,r,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function dt(e){let n,a,r,s,l,c,d=[{alt:e[1]},e[4]],p={};for(let e=0;e<d.length;e+=1)p=t(p,d[e]);const h=e[7].default,$=u(h,e,e[6],null);return{c(){n=A("img"),r=x(),$&&$.c(),T(n,p)},m(t,i){y(t,n,i),e[8](n),y(t,r,i),$&&$.m(t,i),s=!0,l||(c=[v(a=He.call(null,n,e[0])),v(e[3].call(null,n))],l=!0)},p(e,[t]){T(n,p=ae(d,[(!s||2&t)&&{alt:e[1]},16&t&&e[4]])),a&&o(a.update)&&1&t&&a.update.call(null,e[0]),$&&$.p&&(!s||64&t)&&g($,h,e,e[6],s?m(h,e[6],t,null):f(e[6]),null)},i(e){s||(ee($,e),s=!0)},o(e){te($,e),s=!1},d(t){t&&_(n),e[8](null),t&&_(r),$&&$.d(t),l=!1,i(c)}}}function ut(e,n,a){const i=["use","alt","getElement"];let o=$(n,i),{$$slots:r={},$$scope:s}=n,{use:l=[]}=n,{alt:c}=n;const d=Ne(M());let u;return e.$$set=e=>{n=t(t({},n),h(e)),a(4,o=$(n,i)),"use"in e&&a(0,l=e.use),"alt"in e&&a(1,c=e.alt),"$$scope"in e&&a(6,s=e.$$scope)},[l,c,u,d,o,function(){return u},s,r,function(e){N[e?"unshift":"push"]((()=>{u=e,a(2,u)}))}]}function pt(e){let n,a,r,s,l;const c=e[6].default,d=u(c,e,e[5],null);let p=[e[3]],h={};for(let e=0;e<p.length;e+=1)h=t(h,p[e]);return{c(){n=A("li"),d&&d.c(),T(n,h)},m(t,i){y(t,n,i),d&&d.m(n,null),e[7](n),r=!0,s||(l=[v(a=He.call(null,n,e[0])),v(e[2].call(null,n))],s=!0)},p(e,[t]){d&&d.p&&(!r||32&t)&&g(d,c,e,e[5],r?m(c,e[5],t,null):f(e[5]),null),T(n,h=ae(p,[8&t&&e[3]])),a&&o(a.update)&&1&t&&a.update.call(null,e[0])},i(e){r||(ee(d,e),r=!0)},o(e){te(d,e),r=!1},d(t){t&&_(n),d&&d.d(t),e[7](null),s=!1,i(l)}}}function mt(e,n,a){const i=["use","getElement"];let o=$(n,i),{$$slots:r={},$$scope:s}=n,{use:l=[]}=n;const c=Ne(M());let d;return e.$$set=e=>{n=t(t({},n),h(e)),a(3,o=$(n,i)),"use"in e&&a(0,l=e.use),"$$scope"in e&&a(5,s=e.$$scope)},[l,d,c,o,function(){return d},s,r,function(e){N[e?"unshift":"push"]((()=>{d=e,a(1,d)}))}]}function gt(e){let n,a,r,s,l;const c=e[6].default,d=u(c,e,e[5],null);let p=[e[3]],h={};for(let e=0;e<p.length;e+=1)h=t(h,p[e]);return{c(){n=A("span"),d&&d.c(),T(n,h)},m(t,i){y(t,n,i),d&&d.m(n,null),e[7](n),r=!0,s||(l=[v(a=He.call(null,n,e[0])),v(e[2].call(null,n))],s=!0)},p(e,[t]){d&&d.p&&(!r||32&t)&&g(d,c,e,e[5],r?m(c,e[5],t,null):f(e[5]),null),T(n,h=ae(p,[8&t&&e[3]])),a&&o(a.update)&&1&t&&a.update.call(null,e[0])},i(e){r||(ee(d,e),r=!0)},o(e){te(d,e),r=!1},d(t){t&&_(n),d&&d.d(t),e[7](null),s=!1,i(l)}}}function ft(e,n,a){const i=["use","getElement"];let o=$(n,i),{$$slots:r={},$$scope:s}=n,{use:l=[]}=n;const c=Ne(M());let d;return e.$$set=e=>{n=t(t({},n),h(e)),a(3,o=$(n,i)),"use"in e&&a(0,l=e.use),"$$scope"in e&&a(5,s=e.$$scope)},[l,d,c,o,function(){return d},s,r,function(e){N[e?"unshift":"push"]((()=>{d=e,a(1,d)}))}]}class ht extends de{constructor(e){super(),ce(this,e,ft,gt,r,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function $t(e){let n,a,r,s,l;const c=e[6].default,d=u(c,e,e[5],null);let p=[e[3]],h={};for(let e=0;e<p.length;e+=1)h=t(h,p[e]);return{c(){var e;e="svg",n=document.createElementNS("http://www.w3.org/2000/svg",e),d&&d.c(),L(n,h)},m(t,i){y(t,n,i),d&&d.m(n,null),e[7](n),r=!0,s||(l=[v(a=He.call(null,n,e[0])),v(e[2].call(null,n))],s=!0)},p(e,[t]){d&&d.p&&(!r||32&t)&&g(d,c,e,e[5],r?m(c,e[5],t,null):f(e[5]),null),L(n,h=ae(p,[8&t&&e[3]])),a&&o(a.update)&&1&t&&a.update.call(null,e[0])},i(e){r||(ee(d,e),r=!0)},o(e){te(d,e),r=!1},d(t){t&&_(n),d&&d.d(t),e[7](null),s=!1,i(l)}}}function vt(e,n,a){const i=["use","getElement"];let o=$(n,i),{$$slots:r={},$$scope:s}=n,{use:l=[]}=n;const c=Ne(M());let d;return e.$$set=e=>{n=t(t({},n),h(e)),a(3,o=$(n,i)),"use"in e&&a(0,l=e.use),"$$scope"in e&&a(5,s=e.$$scope)},[l,d,c,o,function(){return d},s,r,function(e){N[e?"unshift":"push"]((()=>{d=e,a(1,d)}))}]}class bt extends de{constructor(e){super(),ce(this,e,vt,$t,r,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}const yt=class extends de{constructor(e){super(),ce(this,e,it,at,r,{use:0,href:1,getElement:5})}get getElement(){return this.$$.ctx[5]}},_t=class extends de{constructor(e){super(),ce(this,e,rt,ot,r,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}},At=Ye,wt=class extends de{constructor(e){super(),ce(this,e,ut,dt,r,{use:0,alt:1,getElement:5})}get getElement(){return this.$$.ctx[5]}},xt=class extends de{constructor(e){super(),ce(this,e,mt,pt,r,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}},Ct=ht;var St=nt({class:"mdc-top-app-bar__row",component:At});function Et(e){let n,a,r,s,l,c;const d=e[9].default,p=u(d,e,e[8],null);let h=[{class:a=Be({[e[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":"start"===e[2],"mdc-top-app-bar__section--align-end":"end"===e[2]})},e[3]?{role:"toolbar"}:{},e[6]],$={};for(let e=0;e<h.length;e+=1)$=t($,h[e]);return{c(){n=A("section"),p&&p.c(),T(n,$)},m(t,a){y(t,n,a),p&&p.m(n,null),e[10](n),s=!0,l||(c=[v(r=He.call(null,n,e[0])),v(e[5].call(null,n))],l=!0)},p(e,[t]){p&&p.p&&(!s||256&t)&&g(p,d,e,e[8],s?m(d,e[8],t,null):f(e[8]),null),T(n,$=ae(h,[(!s||6&t&&a!==(a=Be({[e[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":"start"===e[2],"mdc-top-app-bar__section--align-end":"end"===e[2]})))&&{class:a},8&t&&(e[3]?{role:"toolbar"}:{}),64&t&&e[6]])),r&&o(r.update)&&1&t&&r.update.call(null,e[0])},i(e){s||(ee(p,e),s=!0)},o(e){te(p,e),s=!1},d(t){t&&_(n),p&&p.d(t),e[10](null),l=!1,i(c)}}}function Tt(e,n,a){const i=["use","class","align","toolbar","getElement"];let o=$(n,i),{$$slots:r={},$$scope:s}=n;const l=Ne(M());let c,{use:d=[]}=n,{class:u=""}=n,{align:p="start"}=n,{toolbar:m=!1}=n;return B("SMUI:icon-button:context",m?"top-app-bar:action":"top-app-bar:navigation"),B("SMUI:button:context",m?"top-app-bar:action":"top-app-bar:navigation"),e.$$set=e=>{n=t(t({},n),h(e)),a(6,o=$(n,i)),"use"in e&&a(0,d=e.use),"class"in e&&a(1,u=e.class),"align"in e&&a(2,p=e.align),"toolbar"in e&&a(3,m=e.toolbar),"$$scope"in e&&a(8,s=e.$$scope)},[d,u,p,m,c,l,o,function(){return c},s,r,function(e){N[e?"unshift":"push"]((()=>{c=e,a(4,c)}))}]}nt({class:"mdc-top-app-bar__title",component:Ct});const Lt=class extends de{constructor(e){super(),ce(this,e,Tt,Et,r,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}};function It(e){let t;const n=e[9].default,a=u(n,e,e[11],null);return{c(){a&&a.c()},m(e,n){a&&a.m(e,n),t=!0},p(e,i){a&&a.p&&(!t||2048&i)&&g(a,n,e,e[11],t?m(n,e[11],i,null):f(e[11]),null)},i(e){t||(ee(a,e),t=!0)},o(e){te(a,e),t=!1},d(e){a&&a.d(e)}}}function zt(e){let n,a,i;const o=[{use:[e[4],...e[0]]},{class:Be({[e[1]]:!0,"mdc-button__label":"button"===e[5],"mdc-fab__label":"fab"===e[5],"mdc-tab__text-label":"tab"===e[5],"mdc-image-list__label":"image-list"===e[5],"mdc-snackbar__label":"snackbar"===e[5],"mdc-banner__text":"banner"===e[5],"mdc-segmented-button__label":"segmented-button"===e[5],"mdc-data-table__pagination-rows-per-page-label":"data-table:pagination"===e[5],"mdc-data-table__header-cell-label":"data-table:sortable-header-cell"===e[5]})},"snackbar"===e[5]?{"aria-atomic":"false"}:{},{tabindex:e[6]},e[7]];var r=e[2];function s(e){let n={$$slots:{default:[It]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return r&&(n=new r(s(e)),e[10](n)),{c(){n&&oe(n.$$.fragment),a=C()},m(e,t){n&&re(n,e,t),y(e,a,t),i=!0},p(e,[t]){const i=243&t?ae(o,[17&t&&{use:[e[4],...e[0]]},34&t&&{class:Be({[e[1]]:!0,"mdc-button__label":"button"===e[5],"mdc-fab__label":"fab"===e[5],"mdc-tab__text-label":"tab"===e[5],"mdc-image-list__label":"image-list"===e[5],"mdc-snackbar__label":"snackbar"===e[5],"mdc-banner__text":"banner"===e[5],"mdc-segmented-button__label":"segmented-button"===e[5],"mdc-data-table__pagination-rows-per-page-label":"data-table:pagination"===e[5],"mdc-data-table__header-cell-label":"data-table:sortable-header-cell"===e[5]})},32&t&&ie("snackbar"===e[5]?{"aria-atomic":"false"}:{}),64&t&&{tabindex:e[6]},128&t&&ie(e[7])]):{};if(2048&t&&(i.$$scope={dirty:t,ctx:e}),r!==(r=e[2])){if(n){J();const e=n;te(e.$$.fragment,1,0,(()=>{se(e,1)})),K()}r?(n=new r(s(e)),e[10](n),oe(n.$$.fragment),ee(n.$$.fragment,1),re(n,a.parentNode,a)):n=null}else r&&n.$set(i)},i(e){i||(n&&ee(n.$$.fragment,e),i=!0)},o(e){n&&te(n.$$.fragment,e),i=!1},d(t){e[10](null),t&&_(a),n&&se(n,t)}}}function Ot(e,n,a){const i=["use","class","component","getElement"];let o=$(n,i),{$$slots:r={},$$scope:s}=n;const l=Ne(M());let c,{use:d=[]}=n,{class:u=""}=n,{component:p=ht}=n;const m=D("SMUI:label:context"),g=D("SMUI:label:tabindex");return e.$$set=e=>{n=t(t({},n),h(e)),a(7,o=$(n,i)),"use"in e&&a(0,d=e.use),"class"in e&&a(1,u=e.class),"component"in e&&a(2,p=e.component),"$$scope"in e&&a(11,s=e.$$scope)},[d,u,p,c,l,m,g,o,function(){return c.getElement()},r,function(e){N[e?"unshift":"push"]((()=>{c=e,a(3,c)}))},s]}nt({class:"mdc-image-list__item",component:xt}),nt({class:"mdc-image-list__image-aspect-container",component:At}),nt({class:"mdc-image-list__image",component:wt}),nt({class:"mdc-image-list__supporting",component:At});function qt(e){let t;const n=e[9].default,a=u(n,e,e[11],null);return{c(){a&&a.c()},m(e,n){a&&a.m(e,n),t=!0},p(e,i){a&&a.p&&(!t||2048&i)&&g(a,n,e,e[11],t?m(n,e[11],i,null):f(e[11]),null)},i(e){t||(ee(a,e),t=!0)},o(e){te(a,e),t=!1},d(e){a&&a.d(e)}}}function Mt(e){let n,a,i;const o=[{use:[e[5],...e[0]]},{class:Be({[e[1]]:!0,"mdc-button__icon":"button"===e[6],"mdc-fab__icon":"fab"===e[6],"mdc-icon-button__icon":"icon-button"===e[6],"mdc-icon-button__icon--on":"icon-button"===e[6]&&e[2],"mdc-tab__icon":"tab"===e[6],"mdc-banner__icon":"banner"===e[6],"mdc-segmented-button__icon":"segmented-button"===e[6]})},{"aria-hidden":"true"},e[3]===bt?{focusable:"false",tabindex:"-1"}:{},e[7]];var r=e[3];function s(e){let n={$$slots:{default:[qt]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return r&&(n=new r(s(e)),e[10](n)),{c(){n&&oe(n.$$.fragment),a=C()},m(e,t){n&&re(n,e,t),y(e,a,t),i=!0},p(e,[t]){const i=239&t?ae(o,[33&t&&{use:[e[5],...e[0]]},70&t&&{class:Be({[e[1]]:!0,"mdc-button__icon":"button"===e[6],"mdc-fab__icon":"fab"===e[6],"mdc-icon-button__icon":"icon-button"===e[6],"mdc-icon-button__icon--on":"icon-button"===e[6]&&e[2],"mdc-tab__icon":"tab"===e[6],"mdc-banner__icon":"banner"===e[6],"mdc-segmented-button__icon":"segmented-button"===e[6]})},o[2],8&t&&ie(e[3]===bt?{focusable:"false",tabindex:"-1"}:{}),128&t&&ie(e[7])]):{};if(2048&t&&(i.$$scope={dirty:t,ctx:e}),r!==(r=e[3])){if(n){J();const e=n;te(e.$$.fragment,1,0,(()=>{se(e,1)})),K()}r?(n=new r(s(e)),e[10](n),oe(n.$$.fragment),ee(n.$$.fragment,1),re(n,a.parentNode,a)):n=null}else r&&n.$set(i)},i(e){i||(n&&ee(n.$$.fragment,e),i=!0)},o(e){n&&te(n.$$.fragment,e),i=!1},d(t){e[10](null),t&&_(a),n&&se(n,t)}}}function Rt(e,n,a){const i=["use","class","on","component","getElement"];let o=$(n,i),{$$slots:r={},$$scope:s}=n;const l=Ne(M());let c,{use:d=[]}=n,{class:u=""}=n,{on:p=!1}=n,{component:m=ct}=n;const g=D("SMUI:icon:context");return e.$$set=e=>{n=t(t({},n),h(e)),a(7,o=$(n,i)),"use"in e&&a(0,d=e.use),"class"in e&&a(1,u=e.class),"on"in e&&a(2,p=e.on),"component"in e&&a(3,m=e.component),"$$scope"in e&&a(11,s=e.$$scope)},[d,u,p,m,c,l,g,o,function(){return c.getElement()},r,function(e){N[e?"unshift":"push"]((()=>{c=e,a(4,c)}))},s]}const Bt=class extends de{constructor(e){super(),ce(this,e,Ot,zt,r,{use:0,class:1,component:2,getElement:8})}get getElement(){return this.$$.ctx[8]}},Dt=class extends de{constructor(e){super(),ce(this,e,Rt,Mt,r,{use:0,class:1,on:2,component:3,getElement:8})}get getElement(){return this.$$.ctx[8]}};function Pt(e){let n,a,o,r,s;const l=e[9].default,c=u(l,e,e[8],null);let d=[{"aria-current":a=e[4]?"page":void 0},e[6],{href:e[2]},{target:e[1]},{rel:e[0]}],p={};for(let e=0;e<d.length;e+=1)p=t(p,d[e]);return{c(){n=A("a"),c&&c.c(),T(n,p),O(n,"active",e[4])},m(t,a){y(t,n,a),c&&c.m(n,null),o=!0,r||(s=[S(n,"click",e[17]),S(n,"mouseover",e[18]),S(n,"mouseenter",e[19]),S(n,"mouseenter",e[24]),S(n,"mouseout",e[20]),S(n,"focus",e[21]),S(n,"blur",e[22]),S(n,"keydown",e[23])],r=!0)},p(e,t){c&&c.p&&(!o||256&t)&&g(c,l,e,e[8],o?m(l,e[8],t,null):f(e[8]),null),T(n,p=ae(d,[(!o||16&t&&a!==(a=e[4]?"page":void 0))&&{"aria-current":a},64&t&&e[6],(!o||4&t)&&{href:e[2]},(!o||2&t)&&{target:e[1]},(!o||1&t)&&{rel:e[0]}])),O(n,"active",e[4])},i(e){o||(ee(c,e),o=!0)},o(e){te(c,e),o=!1},d(e){e&&_(n),c&&c.d(e),r=!1,i(s)}}}function kt(e){let n,a,o,r;const s=e[9].default,l=u(s,e,e[8],null);let c=[e[6]],d={};for(let e=0;e<c.length;e+=1)d=t(d,c[e]);return{c(){n=A("span"),l&&l.c(),T(n,d)},m(t,i){y(t,n,i),l&&l.m(n,null),a=!0,o||(r=[S(n,"click",e[10]),S(n,"mouseover",e[11]),S(n,"mouseenter",e[12]),S(n,"mouseout",e[13]),S(n,"focus",e[14]),S(n,"blur",e[15]),S(n,"keydown",e[16])],o=!0)},p(e,t){l&&l.p&&(!a||256&t)&&g(l,s,e,e[8],a?m(s,e[8],t,null):f(e[8]),null),T(n,d=ae(c,[64&t&&e[6]]))},i(e){a||(ee(l,e),a=!0)},o(e){te(l,e),a=!1},d(e){e&&_(n),l&&l.d(e),o=!1,i(r)}}}function Nt(e){let t,n,a,i;const o=[kt,Pt],r=[];function s(e,t){return e[3]?0:1}return t=s(e),n=r[t]=o[t](e),{c(){n.c(),a=C()},m(e,n){r[t].m(e,n),y(e,a,n),i=!0},p(e,[i]){let l=t;t=s(e),t===l?r[t].p(e,i):(J(),te(r[l],1,1,(()=>{r[l]=null})),K(),n=r[t],n?n.p(e,i):(n=r[t]=o[t](e),n.c()),ee(n,1),n.m(a.parentNode,a))},i(e){i||(ee(n),i=!0)},o(e){te(n),i=!1},d(e){r[t].d(e),e&&_(a)}}}const Ht=new Map;function jt(e,n,a){const i=["href","disabled","outbound","target","rel","active"];let o=$(n,i),{$$slots:r={},$$scope:s}=n,{href:l="javascript:void(0);"}=n,{disabled:c=!1}=n,{outbound:d}=n,{target:u}=n,{rel:p}=n,{active:m=!1}=n;async function g(){if(Ht.has(l))return;(await fetch(l)).ok&&Ht.set(l,!0)}return e.$$set=e=>{n=t(t({},n),h(e)),a(6,o=$(n,i)),"href"in e&&a(2,l=e.href),"disabled"in e&&a(3,c=e.disabled),"outbound"in e&&a(7,d=e.outbound),"target"in e&&a(1,u=e.target),"rel"in e&&a(0,p=e.rel),"active"in e&&a(4,m=e.active),"$$scope"in e&&a(8,s=e.$$scope)},e.$$.update=()=>{if(132&e.$$.dirty&&"undefined"!=typeof window){new URL(l,`${location.protocol}//${location.host}`).host!==location.host&&void 0===d&&a(7,d=!0)}129&e.$$.dirty&&d&&(a(1,u="_blank"),void 0===p&&a(0,p="noopener noreferrer"))},[p,u,l,c,m,g,o,d,s,r,function(t){P.call(this,e,t)},function(t){P.call(this,e,t)},function(t){P.call(this,e,t)},function(t){P.call(this,e,t)},function(t){P.call(this,e,t)},function(t){P.call(this,e,t)},function(t){P.call(this,e,t)},function(t){P.call(this,e,t)},function(t){P.call(this,e,t)},function(t){P.call(this,e,t)},function(t){P.call(this,e,t)},function(t){P.call(this,e,t)},function(t){P.call(this,e,t)},function(t){P.call(this,e,t)},()=>{"prefetch"===p&&g()}]}class Ut extends de{constructor(e){super(),ce(this,e,jt,Nt,r,{href:2,disabled:3,outbound:7,target:1,rel:0,active:4})}}
/**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */var Vt={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function Ft(e,t){if(function(e){return Boolean(e.document)&&"function"==typeof e.document.createElement}(e)&&t in Vt){var n=e.document.createElement("div"),a=Vt[t],i=a.standard,o=a.prefixed;return i in n.style?i:o}return t}
/**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
<<<<<<< Updated upstream
     */var Gt={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},Xt={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},Wt=.8367142,Yt=2.00611057,Qt=.37651913,Zt=.84386165,Jt=1.60277782,Kt=function(e){function t(n){var a=e.call(this,me(me({},t.defaultAdapter),n))||this;return a.observer=null,a}return pe(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return Gt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Xt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this;this.determinate=!this.adapter.hasClass(Gt.INDETERMINATE_CLASS),this.adapter.addClass(Gt.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver((function(t){var n,a;if(!e.determinate)try{for(var i=ge(t),o=i.next();!o.done;o=i.next()){var r=o.value;r.contentRect&&e.calculateAndSetDimensions(r.contentRect.width)}}catch(e){n={error:e}}finally{try{o&&!o.done&&(a=i.return)&&a.call(i)}finally{if(n)throw n.error}}})),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},t.prototype.setDeterminate=function(e){if(this.determinate=e,this.determinate)return this.adapter.removeClass(Gt.INDETERMINATE_CLASS),this.adapter.setAttribute(Xt.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(Xt.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(Xt.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),void this.setBufferBarProgress(this.buffer);this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(Gt.INDETERMINATE_CLASS),this.adapter.removeAttribute(Xt.ARIA_VALUENOW),this.adapter.removeAttribute(Xt.ARIA_VALUEMAX),this.adapter.removeAttribute(Xt.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},t.prototype.isDeterminate=function(){return this.determinate},t.prototype.setProgress=function(e){this.progress=e,this.determinate&&(this.setPrimaryBarProgress(e),this.adapter.setAttribute(Xt.ARIA_VALUENOW,e.toString()))},t.prototype.getProgress=function(){return this.progress},t.prototype.setBuffer=function(e){this.buffer=e,this.determinate&&this.setBufferBarProgress(e)},t.prototype.getBuffer=function(){return this.buffer},t.prototype.open=function(){this.adapter.removeClass(Gt.CLOSED_CLASS),this.adapter.removeClass(Gt.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(Xt.ARIA_HIDDEN)},t.prototype.close=function(){this.adapter.addClass(Gt.CLOSED_CLASS),this.adapter.setAttribute(Xt.ARIA_HIDDEN,"true")},t.prototype.isClosed=function(){return this.adapter.hasClass(Gt.CLOSED_CLASS)},t.prototype.handleTransitionEnd=function(){this.adapter.hasClass(Gt.CLOSED_CLASS)&&this.adapter.addClass(Gt.CLOSED_ANIMATION_OFF_CLASS)},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},t.prototype.restartAnimation=function(){this.adapter.removeClass(Gt.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(Gt.ANIMATION_READY_CLASS)},t.prototype.setPrimaryBarProgress=function(e){var t="scaleX("+e+")",n="undefined"!=typeof window?Ft(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(n,t)},t.prototype.setBufferBarProgress=function(e){var t=100*e+"%";this.adapter.setBufferBarStyle(Xt.FLEX_BASIS,t)},t.prototype.calculateAndSetDimensions=function(e){var t=e*Wt,n=e*Yt,a=e*Qt,i=e*Zt,o=e*Jt;this.adapter.setStyle("--mdc-linear-progress-primary-half",t+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-t+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",i+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-i+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-o+"px"),this.restartAnimation()},t}(fe);function en(n){let a,r,s,l,c,d,u,p,m,g,f,h,$,w,C,L,I,z,O,q,M=[{class:$=Be({[n[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":n[3],"mdc-linear-progress--closed":n[4],"mdc-data-table__linear-progress":"data-table"===n[14],...n[8]})},{style:w=Object.entries(n[10]).map(an).concat([n[2]]).join(" ")},{role:"progressbar"},{"aria-valuemin":C=0},{"aria-valuemax":L=1},{"aria-valuenow":I=n[3]?void 0:n[5]},n[9],n[16]],R={};for(let e=0;e<M.length;e+=1)R=t(R,M[e]);return{c(){a=A("div"),r=A("div"),s=A("div"),c=x(),d=A("div"),u=x(),p=A("div"),m=A("span"),f=x(),h=A("div"),h.innerHTML='<span class="mdc-linear-progress__bar-inner"></span>',E(s,"class","mdc-linear-progress__buffer-bar"),E(s,"style",l=Object.entries(n[11]).map(tn).join(" ")),E(d,"class","mdc-linear-progress__buffer-dots"),E(r,"class","mdc-linear-progress__buffer"),E(m,"class","mdc-linear-progress__bar-inner"),E(p,"class","mdc-linear-progress__bar mdc-linear-progress__primary-bar"),E(p,"style",g=Object.entries(n[12]).map(nn).join(" ")),E(h,"class","mdc-linear-progress__bar mdc-linear-progress__secondary-bar"),T(a,R)},m(e,t){y(e,a,t),b(a,r),b(r,s),b(r,c),b(r,d),b(a,u),b(a,p),b(p,m),b(a,f),b(a,h),n[19](a),O||(q=[v(z=He.call(null,a,n[0])),v(n[13].call(null,a)),S(a,"transitionend",n[20])],O=!0)},p(e,[t]){2048&t&&l!==(l=Object.entries(e[11]).map(tn).join(" "))&&E(s,"style",l),4096&t&&g!==(g=Object.entries(e[12]).map(nn).join(" "))&&E(p,"style",g),T(a,R=ae(M,[282&t&&$!==($=Be({[e[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":e[3],"mdc-linear-progress--closed":e[4],"mdc-data-table__linear-progress":"data-table"===e[14],...e[8]}))&&{class:$},1028&t&&w!==(w=Object.entries(e[10]).map(an).concat([e[2]]).join(" "))&&{style:w},{role:"progressbar"},{"aria-valuemin":0},{"aria-valuemax":1},40&t&&I!==(I=e[3]?void 0:e[5])&&{"aria-valuenow":I},512&t&&e[9],65536&t&&e[16]])),z&&o(z.update)&&1&t&&z.update.call(null,e[0])},i:e,o:e,d(e){e&&_(a),n[19](null),O=!1,i(q)}}}const tn=([e,t])=>`${e}: ${t};`,nn=([e,t])=>`${e}: ${t};`,an=([e,t])=>`${e}: ${t};`;function on(e,n,a){const i=["use","class","style","indeterminate","closed","progress","buffer","getElement"];let o,r=$(n,i);const s=Ne(M());let l,c,{use:u=[]}=n,{class:p=""}=n,{style:m=""}=n,{indeterminate:g=!1}=n,{closed:f=!1}=n,{progress:v=0}=n,{buffer:b}=n,y={},_={},A={},w={},x={},C=D("SMUI:linear-progress:context"),S=D("SMUI:linear-progress:closed");function E(e){return e in y?y[e]:P().classList.contains(e)}function T(e){y[e]||a(8,y[e]=!0,y)}function L(e){e in y&&!y[e]||a(8,y[e]=!1,y)}function I(e,t){_[e]!==t&&a(9,_[e]=t,_)}function z(e){e in _&&null==_[e]||a(9,_[e]=void 0,_)}function O(e,t){A[e]!=t&&(""===t||null==t?(delete A[e],a(10,A)):a(10,A[e]=t,A))}function q(e,t){w[e]!=t&&(""===t||null==t?(delete w[e],a(11,w)):a(11,w[e]=t,w))}function B(e,t){x[e]!=t&&(""===t||null==t?(delete x[e],a(12,x)):a(12,x[e]=t,x))}function P(){return l}d(e,S,(e=>a(21,o=e))),R((()=>(a(6,c=new Kt({addClass:T,forceLayout:()=>{P().getBoundingClientRect()},setBufferBarStyle:q,setPrimaryBarStyle:B,hasClass:E,removeAttribute:z,removeClass:L,setAttribute:I,setStyle:O,attachResizeObserver:e=>{const t=window.ResizeObserver;if(t){const n=new t(e);return n.observe(P()),n}return null},getWidth:()=>P().offsetWidth})),c.init(),()=>{c.destroy()})));return e.$$set=e=>{n=t(t({},n),h(e)),a(16,r=$(n,i)),"use"in e&&a(0,u=e.use),"class"in e&&a(1,p=e.class),"style"in e&&a(2,m=e.style),"indeterminate"in e&&a(3,g=e.indeterminate),"closed"in e&&a(4,f=e.closed),"progress"in e&&a(5,v=e.progress),"buffer"in e&&a(17,b=e.buffer)},e.$$.update=()=>{var t;16&e.$$.dirty&&S&&(o=f,t=o,S.set(t)),72&e.$$.dirty&&c&&c.isDeterminate()!==!g&&c.setDeterminate(!g),96&e.$$.dirty&&c&&c.getProgress()!==v&&c.setProgress(v),131136&e.$$.dirty&&c&&(null==b?c.setBuffer(1):c.setBuffer(b)),80&e.$$.dirty&&c&&(f?c.close():c.open())},[u,p,m,g,f,v,c,l,y,_,A,w,x,s,C,S,r,b,P,function(e){N[e?"unshift":"push"]((()=>{l=e,a(7,l)}))},()=>c&&c.handleTransitionEnd()]}class rn extends de{constructor(e){super(),ce(this,e,on,en,r,{use:0,class:1,style:2,indeterminate:3,closed:4,progress:5,buffer:17,getElement:18})}get getElement(){return this.$$.ctx[18]}}function sn(e){let t;return{c(){t=w("L'Amianto")},m(e,n){y(e,t,n)},d(e){e&&_(t)}}}function ln(e){let t,n;return t=new Ut({props:{href:"#section1-2",$$slots:{default:[sn]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment)},m(e,a){re(t,e,a),n=!0},p(e,n){const a={};2&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function cn(e){let t;return{c(){t=w("Minaçu")},m(e,n){y(e,t,n)},d(e){e&&_(t)}}}function dn(e){let t,n;return t=new Ut({props:{href:"#content2-1",$$slots:{default:[cn]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment)},m(e,a){re(t,e,a),n=!0},p(e,n){const a={};2&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function un(e){let t;return{c(){t=w("Balangero")},m(e,n){y(e,t,n)},d(e){e&&_(t)}}}function pn(e){let t,n;return t=new Ut({props:{href:"#content3-1",$$slots:{default:[un]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment)},m(e,a){re(t,e,a),n=!0},p(e,n){const a={};2&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function mn(e){let t;return{c(){t=w("Libby")},m(e,n){y(e,t,n)},d(e){e&&_(t)}}}function gn(e){let t,n;return t=new Ut({props:{href:"#content4-1",$$slots:{default:[mn]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment)},m(e,a){re(t,e,a),n=!0},p(e,n){const a={};2&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function fn(e){let t;return{c(){t=w("Asbest")},m(e,n){y(e,t,n)},d(e){e&&_(t)}}}function hn(e){let t,n;return t=new Ut({props:{href:"#content5-1",$$slots:{default:[fn]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment)},m(e,a){re(t,e,a),n=!0},p(e,n){const a={};2&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function $n(e){let t;return{c(){t=w("Il futuro")},m(e,n){y(e,t,n)},d(e){e&&_(t)}}}function vn(e){let t,n;return t=new Ut({props:{href:"#section6-1",$$slots:{default:[$n]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment)},m(e,a){re(t,e,a),n=!0},p(e,n){const a={};2&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function bn(e){let t,n,a,i,o,r,s,l,c,d,u,p;return t=new Lt({props:{class:"mdc-typography--headline6",style:"justify-content: center;",$$slots:{default:[ln]},$$scope:{ctx:e}}}),a=new Lt({props:{class:"mdc-typography--headline6",style:"justify-content: center;",$$slots:{default:[dn]},$$scope:{ctx:e}}}),o=new Lt({props:{class:"mdc-typography--headline6",style:"justify-content: center;",$$slots:{default:[pn]},$$scope:{ctx:e}}}),s=new Lt({props:{class:"mdc-typography--headline6",style:"justify-content: center;",$$slots:{default:[gn]},$$scope:{ctx:e}}}),c=new Lt({props:{class:"mdc-typography--headline6",style:"justify-content: center;",$$slots:{default:[hn]},$$scope:{ctx:e}}}),u=new Lt({props:{class:"mdc-typography--headline6",style:"justify-content: center;",$$slots:{default:[vn]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment),n=x(),oe(a.$$.fragment),i=x(),oe(o.$$.fragment),r=x(),oe(s.$$.fragment),l=x(),oe(c.$$.fragment),d=x(),oe(u.$$.fragment)},m(e,m){re(t,e,m),y(e,n,m),re(a,e,m),y(e,i,m),re(o,e,m),y(e,r,m),re(s,e,m),y(e,l,m),re(c,e,m),y(e,d,m),re(u,e,m),p=!0},p(e,n){const i={};2&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i);const r={};2&n&&(r.$$scope={dirty:n,ctx:e}),a.$set(r);const l={};2&n&&(l.$$scope={dirty:n,ctx:e}),o.$set(l);const d={};2&n&&(d.$$scope={dirty:n,ctx:e}),s.$set(d);const p={};2&n&&(p.$$scope={dirty:n,ctx:e}),c.$set(p);const m={};2&n&&(m.$$scope={dirty:n,ctx:e}),u.$set(m)},i(e){p||(ee(t.$$.fragment,e),ee(a.$$.fragment,e),ee(o.$$.fragment,e),ee(s.$$.fragment,e),ee(c.$$.fragment,e),ee(u.$$.fragment,e),p=!0)},o(e){te(t.$$.fragment,e),te(a.$$.fragment,e),te(o.$$.fragment,e),te(s.$$.fragment,e),te(c.$$.fragment,e),te(u.$$.fragment,e),p=!1},d(e){se(t,e),e&&_(n),se(a,e),e&&_(i),se(o,e),e&&_(r),se(s,e),e&&_(l),se(c,e),e&&_(d),se(u,e)}}}function yn(e){let t,n,a,i;return t=new St({props:{class:"mdc-elevation--z4",style:"background-color: white; height: 3.5vw;",$$slots:{default:[bn]},$$scope:{ctx:e}}}),a=new rn({props:{progress:e[0]}}),{c(){oe(t.$$.fragment),n=x(),oe(a.$$.fragment)},m(e,o){re(t,e,o),y(e,n,o),re(a,e,o),i=!0},p(e,n){const i={};2&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i);const o={};1&n&&(o.progress=e[0]),a.$set(o)},i(e){i||(ee(t.$$.fragment,e),ee(a.$$.fragment,e),i=!0)},o(e){te(t.$$.fragment,e),te(a.$$.fragment,e),i=!1},d(e){se(t,e),e&&_(n),se(a,e)}}}function _n(e){let t,n;return t=new Ge({props:{variant:"fixed",class:"transparent",$$slots:{default:[yn]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment)},m(e,a){re(t,e,a),n=!0},p(e,[n]){const a={};3&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function An(e,t,n){let a=0;return R((()=>{n(0,a=0)})),document.addEventListener("scroll",(function(){n(0,a=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight))})),[a]}class wn extends de{constructor(e){super(),ce(this,e,An,_n,r,{})}}const{applyPassive:xn}=he,{matches:Cn}=be;function Sn(e,{ripple:t=!0,surface:n=!1,unbounded:a=!1,disabled:i=!1,color:o,active:r,rippleElement:s,eventTarget:l,activeTarget:c,addClass:d=(t=>e.classList.add(t)),removeClass:u=(t=>e.classList.remove(t)),addStyle:p=((t,n)=>e.style.setProperty(t,n)),initPromise:m=Promise.resolve()}={}){let g,f,h=D("SMUI:addLayoutListener"),$=r,v=l,b=c;function y(){n?(d("mdc-ripple-surface"),"primary"===o?(d("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):"secondary"===o?(u("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary")):(u("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary"))):(u("mdc-ripple-surface"),u("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")),g&&$!==r&&($=r,r?g.activate():!1===r&&g.deactivate()),t&&!g?(g=new Se({addClass:d,browserSupportsCssVars:()=>function(e,t){void 0===t&&(t=!1);var n,a=e.CSS;if("boolean"==typeof ve&&!t)return ve;if(!a||"function"!=typeof a.supports)return!1;var i=a.supports("--css-vars","yes"),o=a.supports("(--css-vars: yes)")&&a.supports("color","#00000000");return n=i||o,t||(ve=n),n}(window),computeBoundingRect:()=>(s||e).getBoundingClientRect(),containsEventTarget:t=>e.contains(t),deregisterDocumentInteractionHandler:(e,t)=>document.documentElement.removeEventListener(e,t,xn()),deregisterInteractionHandler:(t,n)=>(l||e).removeEventListener(t,n,xn()),deregisterResizeHandler:e=>window.removeEventListener("resize",e),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>null==r?Cn(c||e,":active"):r,isSurfaceDisabled:()=>!!i,isUnbounded:()=>!!a,registerDocumentInteractionHandler:(e,t)=>document.documentElement.addEventListener(e,t,xn()),registerInteractionHandler:(t,n)=>(l||e).addEventListener(t,n,xn()),registerResizeHandler:e=>window.addEventListener("resize",e),removeClass:u,updateCssVariable:p}),m.then((()=>{g&&(g.init(),g.setUnbounded(a))}))):g&&!t&&m.then((()=>{g&&(g.destroy(),g=void 0)})),!g||v===l&&b===c||(v=l,b=c,g.destroy(),requestAnimationFrame((()=>{g&&(g.init(),g.setUnbounded(a))}))),!t&&a&&d("mdc-ripple-upgraded--unbounded")}return y(),h&&(f=h((function(){g&&g.layout()}))),{update(g){({ripple:t,surface:n,unbounded:a,disabled:i,color:o,active:r,rippleElement:s,eventTarget:l,activeTarget:c,addClass:d,removeClass:u,addStyle:p,initPromise:m}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),addStyle:(t,n)=>e.style.setProperty(t,n),initPromise:Promise.resolve()},g)),y()},destroy(){g&&(g.destroy(),g=void 0,u("mdc-ripple-surface"),u("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")),f&&f()}}}function En(e){let t;return{c(){t=A("div"),E(t,"class","mdc-fab__touch")},m(e,n){y(e,t,n)},d(e){e&&_(t)}}}function Tn(e){let t,n,a,i;const o=e[20].default,r=u(o,e,e[22],null);let s=e[8]&&En();return{c(){t=A("div"),n=x(),r&&r.c(),s&&s.c(),a=C(),E(t,"class","mdc-fab__ripple")},m(e,o){y(e,t,o),y(e,n,o),r&&r.m(e,o),s&&s.m(e,o),y(e,a,o),i=!0},p(e,t){r&&r.p&&(!i||4194304&t)&&g(r,o,e,e[22],i?m(o,e[22],t,null):f(e[22]),null),e[8]?s||(s=En(),s.c(),s.m(a.parentNode,a)):s&&(s.d(1),s=null)},i(e){i||(ee(r,e),i=!0)},o(e){te(r,e),i=!1},d(e){e&&_(t),e&&_(n),r&&r.d(e),s&&s.d(e),e&&_(a)}}}function Ln(e){let n,a,i;const o=[{use:[[Sn,{ripple:e[3],unbounded:!1,color:e[4],disabled:!!e[18].disabled,addClass:e[15],removeClass:e[16],addStyle:e[17]}],e[14],...e[0]]},{class:Be({[e[1]]:!0,"mdc-fab":!0,"mdc-fab--mini":e[5],"mdc-fab--exited":e[6],"mdc-fab--extended":e[7],"smui-fab--color-primary":"primary"===e[4],"mdc-fab--touch":e[8],...e[12]})},{style:Object.entries(e[13]).map(In).concat([e[2]]).join(" ")},{href:e[9]},e[18]];var r=e[10];function s(e){let n={$$slots:{default:[Tn]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return r&&(n=new r(s(e)),e[21](n)),{c(){n&&oe(n.$$.fragment),a=C()},m(e,t){n&&re(n,e,t),y(e,a,t),i=!0},p(e,[t]){const i=521215&t?ae(o,[507929&t&&{use:[[Sn,{ripple:e[3],unbounded:!1,color:e[4],disabled:!!e[18].disabled,addClass:e[15],removeClass:e[16],addStyle:e[17]}],e[14],...e[0]]},4594&t&&{class:Be({[e[1]]:!0,"mdc-fab":!0,"mdc-fab--mini":e[5],"mdc-fab--exited":e[6],"mdc-fab--extended":e[7],"smui-fab--color-primary":"primary"===e[4],"mdc-fab--touch":e[8],...e[12]})},8196&t&&{style:Object.entries(e[13]).map(In).concat([e[2]]).join(" ")},512&t&&{href:e[9]},262144&t&&ie(e[18])]):{};if(4194560&t&&(i.$$scope={dirty:t,ctx:e}),r!==(r=e[10])){if(n){J();const e=n;te(e.$$.fragment,1,0,(()=>{se(e,1)})),K()}r?(n=new r(s(e)),e[21](n),oe(n.$$.fragment),ee(n.$$.fragment,1),re(n,a.parentNode,a)):n=null}else r&&n.$set(i)},i(e){i||(n&&ee(n.$$.fragment,e),i=!0)},o(e){n&&te(n.$$.fragment,e),i=!1},d(t){e[21](null),t&&_(a),n&&se(n,t)}}}const In=([e,t])=>`${e}: ${t};`;function zn(e,n,a){const i=["use","class","style","ripple","color","mini","exited","extended","touch","href","component","getElement"];let o=$(n,i),{$$slots:r={},$$scope:s}=n;const l=Ne(M());let c,{use:d=[]}=n,{class:u=""}=n,{style:p=""}=n,{ripple:m=!0}=n,{color:g="secondary"}=n,{mini:f=!1}=n,{exited:v=!1}=n,{extended:b=!1}=n,{touch:y=!1}=n,{href:_}=n,A={},w={},{component:x=(null==_?_t:yt)}=n;return B("SMUI:label:context","fab"),B("SMUI:icon:context","fab"),e.$$set=e=>{n=t(t({},n),h(e)),a(18,o=$(n,i)),"use"in e&&a(0,d=e.use),"class"in e&&a(1,u=e.class),"style"in e&&a(2,p=e.style),"ripple"in e&&a(3,m=e.ripple),"color"in e&&a(4,g=e.color),"mini"in e&&a(5,f=e.mini),"exited"in e&&a(6,v=e.exited),"extended"in e&&a(7,b=e.extended),"touch"in e&&a(8,y=e.touch),"href"in e&&a(9,_=e.href),"component"in e&&a(10,x=e.component),"$$scope"in e&&a(22,s=e.$$scope)},[d,u,p,m,g,f,v,b,y,_,x,c,A,w,l,function(e){A[e]||a(12,A[e]=!0,A)},function(e){e in A&&!A[e]||a(12,A[e]=!1,A)},function(e,t){w[e]!=t&&(""===t||null==t?(delete w[e],a(13,w)):a(13,w[e]=t,w))},o,function(){return c.getElement()},r,function(e){N[e?"unshift":"push"]((()=>{c=e,a(11,c)}))},s]}class On extends de{constructor(e){super(),ce(this,e,zn,Ln,r,{use:0,class:1,style:2,ripple:3,color:4,mini:5,exited:6,extended:7,touch:8,href:9,component:10,getElement:19})}get getElement(){return this.$$.ctx[19]}}function qn(e){let t,n;return{c(){t=A("img"),c(t.src,n="img/logo.png")||E(t,"src","img/logo.png"),E(t,"alt","Logo"),E(t,"class","svelte-9qvr9p")},m(e,n){y(e,t,n)},d(e){e&&_(t)}}}function Mn(e){let t;return{c(){t=w(e[1])},m(e,n){y(e,t,n)},p(e,n){2&n&&I(t,e[1])},d(e){e&&_(t)}}}function Rn(e){let t,n,a,i;return t=new Dt({props:{class:"custom-FAB-Icon",$$slots:{default:[qn]},$$scope:{ctx:e}}}),a=new Bt({props:{class:"mdc-typography--body2 bold",style:"overflow: hidden;",$$slots:{default:[Mn]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment),n=x(),oe(a.$$.fragment)},m(e,o){re(t,e,o),y(e,n,o),re(a,e,o),i=!0},p(e,n){const i={};4&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i);const o={};6&n&&(o.$$scope={dirty:n,ctx:e}),a.$set(o)},i(e){i||(ee(t.$$.fragment,e),ee(a.$$.fragment,e),i=!0)},o(e){te(t.$$.fragment,e),te(a.$$.fragment,e),i=!1},d(e){se(t,e),e&&_(n),se(a,e)}}}function Bn(e){let t,n;return t=new On({props:{color:"primary",href:"#"+e[0],extended:!0,class:"custom-FABExtended",$$slots:{default:[Rn]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment)},m(e,a){re(t,e,a),n=!0},p(e,[n]){const a={};1&n&&(a.href="#"+e[0]),6&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function Dn(e,t,n){let{target:a,label:i=""}=t;return e.$$set=e=>{"target"in e&&n(0,a=e.target),"label"in e&&n(1,i=e.label)},[a,i]}class Pn extends de{constructor(e){super(),ce(this,e,Dn,Bn,r,{target:0,label:1})}}function kn(t){let n;return{c(){n=A("footer"),n.innerHTML="© Copyright 2022 — Gruppo 10 <br/> Arena Nicolò — Barnabé Carlos — Cannizzaro Gloria — Caotti Leonardo — Navone Federica — Oneto Alessandro — Sartori Alice\n  — Sattanino Giulia",E(n,"class","mdc-typography--body2 svelte-1huo1b5")},m(e,t){y(e,n,t)},p:e,i:e,o:e,d(e){e&&_(n)}}}class Nn extends de{constructor(e){super(),ce(this,e,null,kn,r,{})}}function Hn(t){let n,a,i,o,r;return{c(){n=A("div"),n.textContent="Sai davvero cos'è l'amianto?",a=x(),i=A("div"),i.innerHTML="Sai come ha rovinato le vite di innumerevoli persone?\n  <br/>Sai quanti danni ha provocato nella storia?",o=x(),r=A("div"),r.innerHTML='Scendi nell&#39;<span class="bold error">Inferno dell&#39;Amianto</span> e lo scoprirai...',E(n,"class","mdc-typography--headline1 uppercase svelte-v5e0jn"),E(i,"class","mdc-typography--headline4 svelte-v5e0jn"),E(r,"class","mdc-typography--headline4 svelte-v5e0jn")},m(e,t){y(e,n,t),y(e,a,t),y(e,i,t),y(e,o,t),y(e,r,t)},p:e,i:e,o:e,d(e){e&&_(n),e&&_(a),e&&_(i),e&&_(o),e&&_(r)}}}class jn extends de{constructor(e){super(),ce(this,e,null,Hn,r,{})}}function Un(t){let n,a,i;return{c(){n=A("div"),n.innerHTML='<div class="mdc-typography--headline4 uppercase">COS&#39;È L&#39;AMIANTO E PERCHÉ VIENE SCAVATO?</div> \n  <div class="mdc-typography--body1">Con il termine <span class="highlight">amianto</span> o asbesto viene identificato un minerale naturale a struttura fibrosa, conosciuto sin dall&#39;antichitá\n    per le sue proprietà termoisolanti e fonoassorbenti. Nel XX secolo, grazie alla sua\n    <span class="highlight">economicità di produzione</span>, è stato largamente adottato da tutto il mondo in innumerevoli applicazioni industriali ed\n    edilizie.\n    <br/><br/>\n    Con il tempo però tale materiale si è rivelato <span class="highlight">nocivo</span> per la salute dell&#39;uomo, a causa del rilascio di fibre che, se inalate,\n    possono provocare patologie <span class="highlight">gravi ed irreversibili</span> all&#39;apparato respiratorio, tra cui le più note sono asbestosi, carcinomi polmonari\n    e mesoteliomi.</div>',a=x(),i=A("div"),i.innerHTML='<div class="mdc-typography--headline4 uppercase">Che reputazione ha oggi l&#39;amianto?</div> \n  <div class="mdc-typography--body1">Negli anni &#39;70 è stato raggiunto il <span class="highlight">picco</span> di produzione di amianto, coinvolgendo 85 paesi diversi nella sua estrazione e\n    lavorazione. In Italia, dal 1992 ad oggi, sono entrate in vigore numerose leggi che <span class="highlight">vietano</span> estrazione, commercializzazione e\n    produzione di amianto. Non tutte le nazioni però hanno bandito questo materiale: Russia, Cina, Brasile e Canada sono gli attuali maggiori\n    <span class="highlight">produttori</span> di amianto.\n    <br/><br/>\n    L&#39;estrazione di amianto rimane ancora oggi uno dei maggiori argomenti di discussione sul campo legislativo e su quello etico. Attraverso questo viaggio\n    metaforico nell&#39;<span class="highlight">Inferno</span>, avrai modo di scoprire l&#39;impatto che questo minerale ha avuto in tutto il mondo, dal suo controverso\n    <span class="highlight">passato</span> alle sue conseguenze letali sul <span class="highlight">presente</span>.</div>',E(n,"class","left svelte-44ybgg"),E(i,"class","right svelte-44ybgg")},m(e,t){y(e,n,t),y(e,a,t),y(e,i,t)},p:e,i:e,o:e,d(e){e&&_(n),e&&_(a),e&&_(i)}}}class Vn extends de{constructor(e){super(),ce(this,e,null,Un,r,{})}}function Fn(e){let n,a,r,s,l,c;const d=e[9].default,p=u(d,e,e[8],null);let h=[{class:a=Be({[e[1]]:!0,"mdc-card":!0,"mdc-card--outlined":"outlined"===e[2],"smui-card--padded":e[3]})},e[6]],$={};for(let e=0;e<h.length;e+=1)$=t($,h[e]);return{c(){n=A("div"),p&&p.c(),T(n,$)},m(t,a){y(t,n,a),p&&p.m(n,null),e[10](n),s=!0,l||(c=[v(r=He.call(null,n,e[0])),v(e[5].call(null,n))],l=!0)},p(e,[t]){p&&p.p&&(!s||256&t)&&g(p,d,e,e[8],s?m(d,e[8],t,null):f(e[8]),null),T(n,$=ae(h,[(!s||14&t&&a!==(a=Be({[e[1]]:!0,"mdc-card":!0,"mdc-card--outlined":"outlined"===e[2],"smui-card--padded":e[3]})))&&{class:a},64&t&&e[6]])),r&&o(r.update)&&1&t&&r.update.call(null,e[0])},i(e){s||(ee(p,e),s=!0)},o(e){te(p,e),s=!1},d(t){t&&_(n),p&&p.d(t),e[10](null),l=!1,i(c)}}}function Gn(e,n,a){const i=["use","class","variant","padded","getElement"];let o=$(n,i),{$$slots:r={},$$scope:s}=n;const l=Ne(M());let c,{use:d=[]}=n,{class:u=""}=n,{variant:p="raised"}=n,{padded:m=!1}=n;return e.$$set=e=>{n=t(t({},n),h(e)),a(6,o=$(n,i)),"use"in e&&a(0,d=e.use),"class"in e&&a(1,u=e.class),"variant"in e&&a(2,p=e.variant),"padded"in e&&a(3,m=e.padded),"$$scope"in e&&a(8,s=e.$$scope)},[d,u,p,m,c,l,o,function(){return c},s,r,function(e){N[e?"unshift":"push"]((()=>{c=e,a(4,c)}))}]}class Xn extends de{constructor(e){super(),ce(this,e,Gn,Fn,r,{use:0,class:1,variant:2,padded:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}var Wn=nt({class:"smui-card__content",component:At});function Yn(e){let n,a,r,s,l,c,d,p,h,$;const w=e[17].default,C=u(w,e,e[16],null);let S=[{class:s=Be({[e[1]]:!0,"mdc-card__primary-action":!0,"smui-card__primary-action--padded":e[5],...e[8]})},{style:l=Object.entries(e[9]).map(Qn).concat([e[2]]).join(" ")},{tabindex:e[6]},e[14]],L={};for(let e=0;e<S.length;e+=1)L=t(L,S[e]);return{c(){n=A("div"),a=A("div"),r=x(),C&&C.c(),E(a,"class","mdc-card__ripple"),T(n,L)},m(t,i){y(t,n,i),b(n,a),b(n,r),C&&C.m(n,null),e[18](n),p=!0,h||($=[v(c=He.call(null,n,e[0])),v(e[10].call(null,n)),v(d=Sn.call(null,n,{ripple:e[3],unbounded:!1,color:e[4],addClass:e[11],removeClass:e[12],addStyle:e[13]}))],h=!0)},p(e,[t]){C&&C.p&&(!p||65536&t)&&g(C,w,e,e[16],p?m(w,e[16],t,null):f(e[16]),null),T(n,L=ae(S,[(!p||290&t&&s!==(s=Be({[e[1]]:!0,"mdc-card__primary-action":!0,"smui-card__primary-action--padded":e[5],...e[8]})))&&{class:s},(!p||516&t&&l!==(l=Object.entries(e[9]).map(Qn).concat([e[2]]).join(" ")))&&{style:l},(!p||64&t)&&{tabindex:e[6]},16384&t&&e[14]])),c&&o(c.update)&&1&t&&c.update.call(null,e[0]),d&&o(d.update)&&24&t&&d.update.call(null,{ripple:e[3],unbounded:!1,color:e[4],addClass:e[11],removeClass:e[12],addStyle:e[13]})},i(e){p||(ee(C,e),p=!0)},o(e){te(C,e),p=!1},d(t){t&&_(n),C&&C.d(t),e[18](null),h=!1,i($)}}}const Qn=([e,t])=>`${e}: ${t};`;function Zn(e,n,a){const i=["use","class","style","ripple","color","padded","tabindex","getElement"];let o=$(n,i),{$$slots:r={},$$scope:s}=n;const l=Ne(M());let c,{use:d=[]}=n,{class:u=""}=n,{style:p=""}=n,{ripple:m=!0}=n,{color:g}=n,{padded:f=!1}=n,{tabindex:v=0}=n,b={},y={};return e.$$set=e=>{n=t(t({},n),h(e)),a(14,o=$(n,i)),"use"in e&&a(0,d=e.use),"class"in e&&a(1,u=e.class),"style"in e&&a(2,p=e.style),"ripple"in e&&a(3,m=e.ripple),"color"in e&&a(4,g=e.color),"padded"in e&&a(5,f=e.padded),"tabindex"in e&&a(6,v=e.tabindex),"$$scope"in e&&a(16,s=e.$$scope)},[d,u,p,m,g,f,v,c,b,y,l,function(e){b[e]||a(8,b[e]=!0,b)},function(e){e in b&&!b[e]||a(8,b[e]=!1,b)},function(e,t){y[e]!=t&&(""===t||null==t?(delete y[e],a(9,y)):a(9,y[e]=t,y))},o,function(){return c},s,r,function(e){N[e?"unshift":"push"]((()=>{c=e,a(7,c)}))}]}function Jn(e){let n,a,r,s,l,c;const d=e[8].default,p=u(d,e,e[7],null);let h=[{class:a=Be({[e[1]]:!0,"mdc-card__actions":!0,"mdc-card__actions--full-bleed":e[2]})},e[5]],$={};for(let e=0;e<h.length;e+=1)$=t($,h[e]);return{c(){n=A("div"),p&&p.c(),T(n,$)},m(t,a){y(t,n,a),p&&p.m(n,null),e[9](n),s=!0,l||(c=[v(r=He.call(null,n,e[0])),v(e[4].call(null,n))],l=!0)},p(e,[t]){p&&p.p&&(!s||128&t)&&g(p,d,e,e[7],s?m(d,e[7],t,null):f(e[7]),null),T(n,$=ae(h,[(!s||6&t&&a!==(a=Be({[e[1]]:!0,"mdc-card__actions":!0,"mdc-card__actions--full-bleed":e[2]})))&&{class:a},32&t&&e[5]])),r&&o(r.update)&&1&t&&r.update.call(null,e[0])},i(e){s||(ee(p,e),s=!0)},o(e){te(p,e),s=!1},d(t){t&&_(n),p&&p.d(t),e[9](null),l=!1,i(c)}}}function Kn(e,n,a){const i=["use","class","fullBleed","getElement"];let o=$(n,i),{$$slots:r={},$$scope:s}=n;const l=Ne(M());let c,{use:d=[]}=n,{class:u=""}=n,{fullBleed:p=!1}=n;return B("SMUI:button:context","card:action"),B("SMUI:icon-button:context","card:action"),e.$$set=e=>{n=t(t({},n),h(e)),a(5,o=$(n,i)),"use"in e&&a(0,d=e.use),"class"in e&&a(1,u=e.class),"fullBleed"in e&&a(2,p=e.fullBleed),"$$scope"in e&&a(7,s=e.$$scope)},[d,u,p,c,l,o,function(){return c},s,r,function(e){N[e?"unshift":"push"]((()=>{c=e,a(3,c)}))}]}nt({class:"mdc-card__media-content",component:At});nt({class:"mdc-card__action-buttons",component:At}),nt({class:"mdc-card__action-icons",component:At});const ea=class extends de{constructor(e){super(),ce(this,e,Zn,Yn,r,{use:0,class:1,style:2,ripple:3,color:4,padded:5,tabindex:6,getElement:15})}get getElement(){return this.$$.ctx[15]}},ta=class extends de{constructor(e){super(),ce(this,e,Kn,Jn,r,{use:0,class:1,fullBleed:2,getElement:6})}get getElement(){return this.$$.ctx[6]}};function na(e){let t,n,a,i,o;return{c(){t=A("div"),n=w(e[2]),a=x(),i=A("div"),o=w(e[3]),E(t,"class","mdc-typography--body2 highlight"),E(i,"class","mdc-typography--body2")},m(e,r){y(e,t,r),b(t,n),y(e,a,r),y(e,i,r),b(i,o)},p(e,t){4&t&&I(n,e[2]),8&t&&I(o,e[3])},d(e){e&&_(t),e&&_(a),e&&_(i)}}}function aa(e){let t,n,a,i,o;return i=new Wn({props:{style:"padding: 1vw;",$$slots:{default:[na]},$$scope:{ctx:e}}}),{c(){t=A("img"),a=x(),oe(i.$$.fragment),c(t.src,n=e[1])||E(t,"src",n),E(t,"alt",e[2]),E(t,"class","svelte-131th0t")},m(e,n){y(e,t,n),y(e,a,n),re(i,e,n),o=!0},p(e,a){(!o||2&a&&!c(t.src,n=e[1]))&&E(t,"src",n),(!o||4&a)&&E(t,"alt",e[2]);const r={};28&a&&(r.$$scope={dirty:a,ctx:e}),i.$set(r)},i(e){o||(ee(i.$$.fragment,e),o=!0)},o(e){te(i.$$.fragment,e),o=!1},d(e){e&&_(t),e&&_(a),se(i,e)}}}function ia(e){let t,n;return t=new ea({props:{$$slots:{default:[aa]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment)},m(e,a){re(t,e,a),n=!0},p(e,n){const a={};30&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function oa(e){let t,n,a;return n=new Xn({props:{style:"max-height: 20vw;",$$slots:{default:[ia]},$$scope:{ctx:e}}}),{c(){t=A("a"),oe(n.$$.fragment),E(t,"href",e[0]),z(t,"width","16vw")},m(e,i){y(e,t,i),re(n,t,null),a=!0},p(e,[i]){const o={};30&i&&(o.$$scope={dirty:i,ctx:e}),n.$set(o),(!a||1&i)&&E(t,"href",e[0])},i(e){a||(ee(n.$$.fragment,e),a=!0)},o(e){te(n.$$.fragment,e),a=!1},d(e){e&&_(t),se(n)}}}function ra(e,t,n){let{href:a,src:i,title:o,subtitle:r}=t;return e.$$set=e=>{"href"in e&&n(0,a=e.href),"src"in e&&n(1,i=e.src),"title"in e&&n(2,o=e.title),"subtitle"in e&&n(3,r=e.subtitle)},[a,i,o,r]}class sa extends de{constructor(e){super(),ce(this,e,ra,oa,r,{href:0,src:1,title:2,subtitle:3})}}function la(t){let n,a,i,o,r,s,l,c,d,u,p;return o=new sa({props:{href:"#content2-1",src:"img/minacu-mine.png",title:"Minaçu, Brasile",subtitle:"L'ultima miniera di amianto del Brasile ancora attiva, nonstante il divieto legale imposto dallo stato."}}),s=new sa({props:{href:"#content3-1",src:"img/balangero-mine.png",title:"Balangero, Italia",subtitle:"La miniera di amianto più grande d'Europa. Rimasta attiva nella provincia di Torino fino al 1990."}}),c=new sa({props:{href:"#content4-1",src:"img/libby-mine.png",title:"Libby, Montana",subtitle:"La città che ha sofferto la contaminazione d'amianto causata dall'estrazione di vermiculite."}}),u=new sa({props:{href:"#content5-1",src:"img/asbest-mine.png",title:"Asbest, Russia",subtitle:"Al giorno d'oggi, la miniera con la maggiore produzione annuale di amianto di tutto il mondo."}}),{c(){n=A("div"),n.innerHTML='<div class="mdc-typography--headline3 uppercase primary">Quali luoghi ti attendono nell&#39;Inferno dell&#39;Amianto?</div> \n  <div class="mdc-typography--body1" style="padding-top: 1vw; padding-bottom: 1.8vw;">Lasciati guidare nel viaggio attraverso i quattro <span class="highlight">gironi</span> infernali.\n    <br/>Le <span class="highlight">città</span> che incontrerai ti mostreranno quanta influenza abbia avuto l&#39;amianto in tutto il mondo.\n    <br/>Ad accompagnarti troverai gli <span class="highlight">uomini</span> che di più hanno sofferto, e potrai ascoltare le loro storie.</div>',a=x(),i=A("div"),oe(o.$$.fragment),r=x(),oe(s.$$.fragment),l=x(),oe(c.$$.fragment),d=x(),oe(u.$$.fragment),E(i,"class","flex-row-2"),E(i,"style","")},m(e,t){y(e,n,t),y(e,a,t),y(e,i,t),re(o,i,null),b(i,r),re(s,i,null),b(i,l),re(c,i,null),b(i,d),re(u,i,null),p=!0},p:e,i(e){p||(ee(o.$$.fragment,e),ee(s.$$.fragment,e),ee(c.$$.fragment,e),ee(u.$$.fragment,e),p=!0)},o(e){te(o.$$.fragment,e),te(s.$$.fragment,e),te(c.$$.fragment,e),te(u.$$.fragment,e),p=!1},d(e){e&&_(n),e&&_(a),e&&_(i),se(o),se(s),se(c),se(u)}}}class ca extends de{constructor(e){super(),ce(this,e,null,la,r,{})}}function da(t){let n,a,i,o,r;return{c(){n=A("div"),n.textContent="Balangero, Italia",a=x(),i=A("div"),i.innerHTML='<div class="mdc-typography--headline4 uppercase">La storia della miniera</div> \n  <div class="mdc-typography--body1">L’Amiantifera di Balangero, situata sul Monte San Vittore nella provincia di Torino, oltre ad essere stata per decenni la\n    <span class="highlight">più grande</span>\n    cava d&#39;amianto dell&#39;Occidente, è stata in primo luogo un&#39;immensa fonte di lavoro e ricchezza per la comunità balangerese e i paesi limitrofi.\n    <br/><br/>\n    Le prime attività di estrazione vennero avviate nel 1918, mentre l’impianto di macinazione e separazione dell’amianto entrò in funzione nel 1921. Con il passare\n    degli anni vennero potenziate le opere di scavo e ingranditi gli impianti di lavorazione, tanto da raggiungere il\n    <span class="highlight">picco di produzione</span>\n    di 36000 tonnellate annue.\n    <br/><br/>\n    In pieno boom di produzione, nel 1983 l&#39;Amiantifera di Balangero S.p.A. venne ceduta, dalla Eternit e dalle Manifatture Colombo, ai fratelli Puccini di Roma, ma\n    nel giro di 7 anni la società subì una grave involuzione e nel 1990 venne <span class="highlight">chiusa per fallimento</span> e i dipendenti licenziati.</div>',o=x(),r=A("div"),r.innerHTML='<div class="mdc-typography--headline4 uppercase primary">Quanta sofferenza ha causato?</div> \n  <div class="mdc-typography--body1">Con la chiusura della miniera e le leggi sulla pericolosità dell’amianto, è stato avviato un progetto di messa in sicurezza del luogo a causa delle numerose\n    <span class="highlight">vittime e malati</span> accertati tra gli ex lavoratori e le loro famiglie. Gli specialisti hanno esaminato le storie sanitarie di\n    1.966 ex addetti all’Amiantifera. Su questo totale, emerge un risultato sconcertante: fra essi ci sono\n    <span class="highlight">214 vittime</span> riferibili proprio al contatto con la fibra killer.\n    <br/><br/>\n    Non solo, negli anni si sono susseguite una serie di inchieste a favore degli operai, indagini che si conclusero con delle\n    <span class="highlight">condanne</span> per gli ex dirigenti della cava. Nel 2012 furono quaranta i casi sotto esame: venticinque morti e quindici malati, tra\n    i quali anche casi di normali cittadini e non solo di lavoratori della cava.</div>',E(n,"class","mdc-typography--headline1 uppercase"),E(i,"class","left svelte-u95hax"),E(r,"class","right svelte-u95hax")},m(e,t){y(e,n,t),y(e,a,t),y(e,i,t),y(e,o,t),y(e,r,t)},p:e,i:e,o:e,d(e){e&&_(n),e&&_(a),e&&_(i),e&&_(o),e&&_(r)}}}class ua extends de{constructor(e){super(),ce(this,e,null,da,r,{})}}function pa(e){let t;return{c(){t=A("div"),E(t,"class","mdc-button__touch")},m(e,n){y(e,t,n)},d(e){e&&_(t)}}}function ma(e){let t,n,a,i;const o=e[27].default,r=u(o,e,e[29],null);let s=e[6]&&pa();return{c(){t=A("div"),n=x(),r&&r.c(),s&&s.c(),a=C(),E(t,"class","mdc-button__ripple")},m(e,o){y(e,t,o),y(e,n,o),r&&r.m(e,o),s&&s.m(e,o),y(e,a,o),i=!0},p(e,t){r&&r.p&&(!i||536870912&t)&&g(r,o,e,e[29],i?m(o,e[29],t,null):f(e[29]),null),e[6]?s||(s=pa(),s.c(),s.m(a.parentNode,a)):s&&(s.d(1),s=null)},i(e){i||(ee(r,e),i=!0)},o(e){te(r,e),i=!1},d(e){e&&_(t),e&&_(n),r&&r.d(e),s&&s.d(e),e&&_(a)}}}function ga(e){let n,a,i;const o=[{use:[[Sn,{ripple:e[3],unbounded:!1,color:e[4],disabled:!!e[22].disabled,addClass:e[18],removeClass:e[19],addStyle:e[20]}],e[16],...e[0]]},{class:Be({[e[1]]:!0,"mdc-button":!0,"mdc-button--raised":"raised"===e[5],"mdc-button--unelevated":"unelevated"===e[5],"mdc-button--outlined":"outlined"===e[5],"smui-button--color-secondary":"secondary"===e[4],"mdc-button--touch":e[6],"mdc-card__action":"card:action"===e[17],"mdc-card__action--button":"card:action"===e[17],"mdc-dialog__button":"dialog:action"===e[17],"mdc-top-app-bar__navigation-icon":"top-app-bar:navigation"===e[17],"mdc-top-app-bar__action-item":"top-app-bar:action"===e[17],"mdc-snackbar__action":"snackbar:actions"===e[17],"mdc-banner__secondary-action":"banner"===e[17]&&e[8],"mdc-banner__primary-action":"banner"===e[17]&&!e[8],"mdc-tooltip__action":"tooltip:rich-actions"===e[17],...e[11]})},{style:Object.entries(e[12]).map(fa).concat([e[2]]).join(" ")},e[15],e[14],e[13],{href:e[7]},e[22]];var r=e[9];function s(e){let n={$$slots:{default:[ma]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return r&&(n=new r(s(e)),e[28](n),n.$on("click",e[21])),{c(){n&&oe(n.$$.fragment),a=C()},m(e,t){n&&re(n,e,t),y(e,a,t),i=!0},p(e,[t]){const i=6289919&t?ae(o,[6094873&t&&{use:[[Sn,{ripple:e[3],unbounded:!1,color:e[4],disabled:!!e[22].disabled,addClass:e[18],removeClass:e[19],addStyle:e[20]}],e[16],...e[0]]},133490&t&&{class:Be({[e[1]]:!0,"mdc-button":!0,"mdc-button--raised":"raised"===e[5],"mdc-button--unelevated":"unelevated"===e[5],"mdc-button--outlined":"outlined"===e[5],"smui-button--color-secondary":"secondary"===e[4],"mdc-button--touch":e[6],"mdc-card__action":"card:action"===e[17],"mdc-card__action--button":"card:action"===e[17],"mdc-dialog__button":"dialog:action"===e[17],"mdc-top-app-bar__navigation-icon":"top-app-bar:navigation"===e[17],"mdc-top-app-bar__action-item":"top-app-bar:action"===e[17],"mdc-snackbar__action":"snackbar:actions"===e[17],"mdc-banner__secondary-action":"banner"===e[17]&&e[8],"mdc-banner__primary-action":"banner"===e[17]&&!e[8],"mdc-tooltip__action":"tooltip:rich-actions"===e[17],...e[11]})},4100&t&&{style:Object.entries(e[12]).map(fa).concat([e[2]]).join(" ")},32768&t&&ie(e[15]),16384&t&&ie(e[14]),8192&t&&ie(e[13]),128&t&&{href:e[7]},4194304&t&&ie(e[22])]):{};if(536870976&t&&(i.$$scope={dirty:t,ctx:e}),r!==(r=e[9])){if(n){J();const e=n;te(e.$$.fragment,1,0,(()=>{se(e,1)})),K()}r?(n=new r(s(e)),e[28](n),n.$on("click",e[21]),oe(n.$$.fragment),ee(n.$$.fragment,1),re(n,a.parentNode,a)):n=null}else r&&n.$set(i)},i(e){i||(n&&ee(n.$$.fragment,e),i=!0)},o(e){n&&te(n.$$.fragment,e),i=!1},d(t){e[28](null),t&&_(a),n&&se(n,t)}}}const fa=([e,t])=>`${e}: ${t};`;function ha(e,n,a){let i,o,r;const s=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"];let l=$(n,s),{$$slots:c={},$$scope:d}=n;const u=Ne(M());let p,{use:m=[]}=n,{class:g=""}=n,{style:f=""}=n,{ripple:v=!0}=n,{color:b="primary"}=n,{variant:y="text"}=n,{touch:_=!1}=n,{href:A}=n,{action:w="close"}=n,{defaultAction:x=!1}=n,{secondary:C=!1}=n,S={},E={},T=D("SMUI:button:context"),{component:L=(null==A?_t:yt)}=n,I=l.disabled;function z(){return p.getElement()}return B("SMUI:label:context","button"),B("SMUI:icon:context","button"),e.$$set=e=>{a(30,n=t(t({},n),h(e))),a(22,l=$(n,s)),"use"in e&&a(0,m=e.use),"class"in e&&a(1,g=e.class),"style"in e&&a(2,f=e.style),"ripple"in e&&a(3,v=e.ripple),"color"in e&&a(4,b=e.color),"variant"in e&&a(5,y=e.variant),"touch"in e&&a(6,_=e.touch),"href"in e&&a(7,A=e.href),"action"in e&&a(23,w=e.action),"defaultAction"in e&&a(24,x=e.defaultAction),"secondary"in e&&a(8,C=e.secondary),"component"in e&&a(9,L=e.component),"$$scope"in e&&a(29,d=e.$$scope)},e.$$.update=()=>{a(15,i="dialog:action"===T&&null!=w?{"data-mdc-dialog-action":w}:{action:n.action}),a(14,o="dialog:action"===T&&x?{"data-mdc-dialog-button-default":""}:{default:n.default}),a(13,r="banner"===T?{}:{secondary:n.secondary}),I!==l.disabled&&(z().blur(),a(26,I=l.disabled))},n=h(n),[m,g,f,v,b,y,_,A,C,L,p,S,E,r,o,i,u,T,function(e){S[e]||a(11,S[e]=!0,S)},function(e){e in S&&!S[e]||a(11,S[e]=!1,S)},function(e,t){E[e]!=t&&(""===t||null==t?(delete E[e],a(12,E)):a(12,E[e]=t,E))},function(){"banner"===T&&De(z(),C?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")},l,w,x,z,I,c,function(e){N[e?"unshift":"push"]((()=>{p=e,a(10,p)}))},d]}class $a extends de{constructor(e){super(),ce(this,e,ha,ga,r,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,defaultAction:24,secondary:8,component:9,getElement:25})}get getElement(){return this.$$.ctx[25]}}function va(e){let t;return{c(){t=w(e[0])},m(e,n){y(e,t,n)},p(e,n){1&n&&I(t,e[0])},d(e){e&&_(t)}}}function ba(e){let t,n;return t=new Bt({props:{class:"mdc-typography--body2 bold",$$slots:{default:[va]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment)},m(e,a){re(t,e,a),n=!0},p(e,n){const a={};9&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function ya(e){let t,n;return t=new $a({props:{class:e[2],variant:"raised",href:e[1],style:"height: 2.5vw;",$$slots:{default:[ba]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment)},m(e,a){re(t,e,a),n=!0},p(e,[n]){const a={};4&n&&(a.class=e[2]),2&n&&(a.href=e[1]),9&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function _a(e,t,n){let{label:a,href:i,direction:o}=t;return e.$$set=e=>{"label"in e&&n(0,a=e.label),"href"in e&&n(1,i=e.href),"direction"in e&&n(2,o=e.direction)},[a,i,o]}class Aa extends de{constructor(e){super(),ce(this,e,_a,ya,r,{label:0,href:1,direction:2})}}function wa(e){let t,n,a,i,o;return{c(){t=A("div"),n=w(e[2]),a=x(),i=A("div"),o=w(e[3]),E(t,"class","mdc-typography--body2 highlight"),E(i,"class","mdc-typography--body2")},m(e,r){y(e,t,r),b(t,n),y(e,a,r),y(e,i,r),b(i,o)},p(e,t){4&t&&I(n,e[2]),8&t&&I(o,e[3])},d(e){e&&_(t),e&&_(a),e&&_(i)}}}function xa(e){let t,n,a,i;return a=new Bt({props:{class:"mdc-typography--body2 bold",$$slots:{default:[Sa]},$$scope:{ctx:e}}}),{c(){t=A("i"),t.textContent="arrow_back",n=x(),oe(a.$$.fragment),E(t,"class","material-icons svelte-2n91h2"),E(t,"aria-hidden","true")},m(e,o){y(e,t,o),y(e,n,o),re(a,e,o),i=!0},p(e,t){const n={};144&t&&(n.$$scope={dirty:t,ctx:e}),a.$set(n)},i(e){i||(ee(a.$$.fragment,e),i=!0)},o(e){te(a.$$.fragment,e),i=!1},d(e){e&&_(t),e&&_(n),se(a,e)}}}function Ca(e){let t,n,a,i;return t=new Bt({props:{class:"mdc-typography--body2 bold",$$slots:{default:[Ea]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment),n=x(),a=A("i"),a.textContent="arrow_forward",E(a,"class","material-icons svelte-2n91h2"),E(a,"aria-hidden","true")},m(e,o){re(t,e,o),y(e,n,o),y(e,a,o),i=!0},p(e,n){const a={};144&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){i||(ee(t.$$.fragment,e),i=!0)},o(e){te(t.$$.fragment,e),i=!1},d(e){se(t,e),e&&_(n),e&&_(a)}}}function Sa(e){let t;return{c(){t=w(e[4])},m(e,n){y(e,t,n)},p(e,n){16&n&&I(t,e[4])},d(e){e&&_(t)}}}function Ea(e){let t;return{c(){t=w(e[4])},m(e,n){y(e,t,n)},p(e,n){16&n&&I(t,e[4])},d(e){e&&_(t)}}}function Ta(e){let t,n,a,i;const o=[Ca,xa],r=[];function s(e,t){return"left-card"===e[5]?0:"right-card"===e[5]?1:-1}return~(t=s(e))&&(n=r[t]=o[t](e)),{c(){n&&n.c(),a=C()},m(e,n){~t&&r[t].m(e,n),y(e,a,n),i=!0},p(e,i){let l=t;t=s(e),t===l?~t&&r[t].p(e,i):(n&&(J(),te(r[l],1,1,(()=>{r[l]=null})),K()),~t?(n=r[t],n?n.p(e,i):(n=r[t]=o[t](e),n.c()),ee(n,1),n.m(a.parentNode,a)):n=null)},i(e){i||(ee(n),i=!0)},o(e){te(n),i=!1},d(e){~t&&r[t].d(e),e&&_(a)}}}function La(e){let t,n;return t=new $a({props:{style:"padding: 0 1.6vw 0.8vw 1.6vw;",$$slots:{default:[Ta]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment)},m(e,a){re(t,e,a),n=!0},p(e,n){const a={};176&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function Ia(e){let t,n,a,i,o,r,s;return i=new Wn({props:{style:"padding: 1vw;",$$slots:{default:[wa]},$$scope:{ctx:e}}}),r=new ta({props:{fullBleed:!0,style:"min-height: 0;",$$slots:{default:[La]},$$scope:{ctx:e}}}),{c(){t=A("img"),a=x(),oe(i.$$.fragment),o=x(),oe(r.$$.fragment),c(t.src,n=e[1])||E(t,"src",n),E(t,"alt",e[2]),E(t,"class","svelte-2n91h2")},m(e,n){y(e,t,n),y(e,a,n),re(i,e,n),y(e,o,n),re(r,e,n),s=!0},p(e,a){(!s||2&a&&!c(t.src,n=e[1]))&&E(t,"src",n),(!s||4&a)&&E(t,"alt",e[2]);const o={};140&a&&(o.$$scope={dirty:a,ctx:e}),i.$set(o);const l={};176&a&&(l.$$scope={dirty:a,ctx:e}),r.$set(l)},i(e){s||(ee(i.$$.fragment,e),ee(r.$$.fragment,e),s=!0)},o(e){te(i.$$.fragment,e),te(r.$$.fragment,e),s=!1},d(e){e&&_(t),e&&_(a),se(i,e),e&&_(o),se(r,e)}}}function za(e){let t,n;return t=new ea({props:{$$slots:{default:[Ia]},$$scope:{ctx:e}}}),t.$on("click",e[6]),{c(){oe(t.$$.fragment)},m(e,a){re(t,e,a),n=!0},p(e,n){const a={};190&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function Oa(e){let t,n;return t=new Xn({props:{class:"custom-card "+e[5],$$slots:{default:[za]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment)},m(e,a){re(t,e,a),n=!0},p(e,[n]){const a={};32&n&&(a.class="custom-card "+e[5]),191&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function qa(e,t,n){let{contentId:a,src:i,title:o,subtitle:r,buttonLabel:s,direction:l=""}=t;return e.$$set=e=>{"contentId"in e&&n(0,a=e.contentId),"src"in e&&n(1,i=e.src),"title"in e&&n(2,o=e.title),"subtitle"in e&&n(3,r=e.subtitle),"buttonLabel"in e&&n(4,s=e.buttonLabel),"direction"in e&&n(5,l=e.direction)},[a,i,o,r,s,l,()=>document.getElementById(a).classList.toggle("hidden")]}class Ma extends de{constructor(e){super(),ce(this,e,qa,Oa,r,{contentId:0,src:1,title:2,subtitle:3,buttonLabel:4,direction:5})}}function Ra(t){let n,a,i,o,r,s,l,c,d,u,p,m,g,f,h,$,v,w;return o=new Ma({props:{contentId:"content-balangero1",src:"img/balangero-berrino.jpg",title:"Dott. Franco Berrino",subtitle:"Laureatosi in medicina all'Università di Torino nel 1969 e specializzatosi in anatomia patologica, si è poi dedicato all'epidemiologia dei tumori.",buttonLabel:"Scopri la sua testimonianza",direction:"left-card"}}),d=new Aa({props:{direction:"right-button",label:"Leggi l'intervista",href:"https://www.corriere.it/cook/news/21_maggio_10/franco-berrino-vivo-solitudine-la-morte-mia-moglie-jo-b48c0c7c-a78d-11eb-b37e-07dee681b819.shtml"}}),h=new Aa({props:{direction:"left-button",label:"Leggi l'articolo",href:"https://www.inail.it/cs/internet/comunicazione/news-ed-eventi/news/ucm_106891_amianto_a_balangero_la_minier.html"}}),v=new Ma({props:{contentId:"content-balangero2",src:"img/balangero-levi-calvino.jpg",title:"Primo Levi e Italo Calvino",subtitle:"L'Amiantifera di Balangero viene denunciata anche dalla letteratura italiana del Novecento",buttonLabel:"Scopri i loro racconti",direction:"right-card"}}),{c(){n=A("div"),n.textContent="La miniera raccontata direttamente dai suoi testimoni",a=x(),i=A("div"),oe(o.$$.fragment),r=x(),s=A("div"),l=A("div"),l.innerHTML='Una testimonianza diretta della tragedia causata dall&#39;amianto ci arriva dal medico epidemiologo ed esperto di tumori\n      <span class="highlight">Franco Berrino</span>, cresciuto proprio a Balangero dove il padre, l&#39;ingegnere Giovanni Berrino, era stato nominato direttore\n      tecnico della miniera.\n      <br/><br/> \n      <span class="italic">&quot;Non c’era alcuna prevenzione: mio padre fu invitato a dimettersi perché ai padroni non piacevano i suoi investimenti per mettere i filtri, delle\n        maniche di cotone. Alla fine è morto di amianto: <span class="highlight">tumore al polmone</span> a 72 anni senza mai aver fumato una sigaretta. Stesso destino\n        per mio fratello: mesotelioma, a 67 anni.&quot;</span>',c=x(),oe(d.$$.fragment),u=x(),p=A("div"),m=A("div"),g=A("div"),g.innerHTML='Nel novembre del 1941 <span class="highlight">Primo Levi</span>, neolaureato in chimica, lavorò presso la cava di Balangero per compiere ricerche\n      sull’estrazione del prezioso nichel dalla roccia di serpentino. Levi descrive la cava paragonandola alla rappresentazione dantesca dei\n      <span class="highlight">gironi infernali</span>, con fibre di amianto onnipresenti, raffigurate come un demone, asfissiante e ostile. Celebre è diventata\n      la sua frase <span class="italic">&quot;C’era amianto dappertutto, come una neve cenerina&quot;</span>.\n      <br/><br/>\n      Nel 1954 <span class="highlight">Italo Calvino</span> arriva nella miniera piemontese come redattore del quotidiano &quot;l’Unità&quot; occupandosi del rischio\n      amianto e della sorte degli operai della cava. Italo Calvino diede una lettura emblematica della situazione dei minatori, scrivendo\n      <span class="italic">&quot;Il grigio polverone d’asbesto della cava che dove arriva <span class="highlight">brucia</span>, <span class="highlight">foglie e polmoni</span>&quot;</span>.',f=x(),oe(h.$$.fragment),$=x(),oe(v.$$.fragment),E(n,"class","mdc-typography--headline3 uppercase"),z(n,"margin-top","23vw"),E(s,"class","mdc-typography--body1 hidden right-align flex-column-2"),E(s,"id","content-balangero1"),E(i,"class","flex-row-4"),z(i,"margin-top","4vw"),E(m,"class","mdc-typography--body1 hidden left-align flex-column-2"),E(m,"id","content-balangero2"),E(p,"class","flex-row-4"),z(p,"margin-top","4vw")},m(e,t){y(e,n,t),y(e,a,t),y(e,i,t),re(o,i,null),b(i,r),b(i,s),b(s,l),b(s,c),re(d,s,null),y(e,u,t),y(e,p,t),b(p,m),b(m,g),b(m,f),re(h,m,null),b(p,$),re(v,p,null),w=!0},p:e,i(e){w||(ee(o.$$.fragment,e),ee(d.$$.fragment,e),ee(h.$$.fragment,e),ee(v.$$.fragment,e),w=!0)},o(e){te(o.$$.fragment,e),te(d.$$.fragment,e),te(h.$$.fragment,e),te(v.$$.fragment,e),w=!1},d(e){e&&_(n),e&&_(a),e&&_(i),se(o),se(d),e&&_(u),e&&_(p),se(h),se(v)}}}class Ba extends de{constructor(e){super(),ce(this,e,null,Ra,r,{})}}function Da(e){let t,n,a,i,o;return{c(){t=A("div"),n=w(e[1]),a=x(),i=A("div"),o=w(e[0]),E(t,"class","mdc-typography--headline4 highlight"),E(i,"class","mdc-typography--body2 bold")},m(e,r){y(e,t,r),b(t,n),y(e,a,r),y(e,i,r),b(i,o)},p(e,t){2&t&&I(n,e[1]),1&t&&I(o,e[0])},d(e){e&&_(t),e&&_(a),e&&_(i)}}}function Pa(e){let t,n;return t=new Wn({props:{style:"padding: 1vw;",$$slots:{default:[Da]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment)},m(e,a){re(t,e,a),n=!0},p(e,n){const a={};7&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function ka(e){let t,n;return t=new Xn({props:{class:"stats-card",padded:!0,$$slots:{default:[Pa]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment)},m(e,a){re(t,e,a),n=!0},p(e,[n]){const a={};7&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(ee(t.$$.fragment,e),n=!0)},o(e){te(t.$$.fragment,e),n=!1},d(e){se(t,e)}}}function Na(e,t,n){let{caption:a,value:i}=t;return e.$$set=e=>{"caption"in e&&n(0,a=e.caption),"value"in e&&n(1,i=e.value)},[a,i]}class Ha extends de{constructor(e){super(),ce(this,e,Na,ka,r,{caption:0,value:1})}}function ja(t){let n,a,i,o,r,s,l,c,d,u,p,m;return o=new Ha({props:{value:"1918-1990",caption:"Periodo di attivitá"}}),s=new Ha({props:{value:"35-40.000 Ton",caption:"Estrazioni annue"}}),c=new Ha({props:{value:"214",caption:"Vittime accertate"}}),p=new Pn({props:{target:"content4-1",label:"Continua il viaggio"}}),{c(){n=A("div"),n.textContent="La miniera in numeri",a=x(),i=A("div"),oe(o.$$.fragment),r=x(),oe(s.$$.fragment),l=x(),oe(c.$$.fragment),d=x(),u=A("div"),oe(p.$$.fragment),E(n,"class","mdc-typography--headline3 uppercase"),z(n,"margin-top","8vw"),E(i,"class","flex-row-2"),z(i,"margin-top","2vw"),z(u,"margin-top","3.5vw")},m(e,t){y(e,n,t),y(e,a,t),y(e,i,t),re(o,i,null),b(i,r),re(s,i,null),b(i,l),re(c,i,null),y(e,d,t),y(e,u,t),re(p,u,null),m=!0},p:e,i(e){m||(ee(o.$$.fragment,e),ee(s.$$.fragment,e),ee(c.$$.fragment,e),ee(p.$$.fragment,e),m=!0)},o(e){te(o.$$.fragment,e),te(s.$$.fragment,e),te(c.$$.fragment,e),te(p.$$.fragment,e),m=!1},d(e){e&&_(n),e&&_(a),e&&_(i),se(o),se(s),se(c),e&&_(d),e&&_(u),se(p)}}}class Ua extends de{constructor(e){super(),ce(this,e,null,ja,r,{})}}function Va(t){let n,a,i,o,r,s,l,c,d,u,p,m,g,f,h,$,v,C,S,T,L;return T=new Aa({props:{label:"Guarda il documentario",href:"https://youtu.be/cy3piCUPIkc?t=492",direction:"right-button"}}),{c(){n=A("div"),n.textContent="Libby, USA",a=x(),i=A("div"),i.innerHTML='<div class="mdc-typography--headline4 uppercase">Storia del passato</div> \n  <div class="mdc-typography--body1">La cittadina di Libby, in Montana, è il sito di uno dei peggiori <span class="highlight">disastri ambientali</span> causati dall&#39;uomo. La polvere di amianto\n    tossico proveniente dalle miniere di vermiculite ha ucciso centinaia di residenti, ammalandone altre migliaia.\n    <br/><br/>\n    Nel 1963, la W.R. Grace &amp; Company iniziò a scavare un deposito di <span class="highlight">vermiculite</span> su una cima boschiva vicino a Libby. Il\n    minerale, relativamente innocuo, è stato utilizzato come isolamento delle soffitte fino agli anni &#39;80. Ma nello stesso deposito è stato trovato un tipo\n    naturale di <span class="highlight">amianto mortale</span>.\n    <br/><br/>\n    Per decenni, la miniera ha prodotto <span class="highlight">tonnellate di polvere</span> al giorno, che non solo fluttuava ovunque negli stabilimenti, ma\n    inondava l&#39;aria respirabile di gran parte della città. L&#39;azienda sapeva che la vermiculite era <span class="highlight">contaminata</span> dall&#39;amianto, ma non\n    avvertì nessuno e continuò ad operare fino al 1990.</div>',o=x(),r=A("div"),s=A("div"),s.textContent="Conseguenze sul presente",l=x(),c=A("div"),d=w("Quando l'azienda venne chiusa, gli operai del governo chiamati per il risanamento hanno trovato l'amianto quasi "),u=A("span"),u.textContent="dappertutto",p=w(":\r\n    nei polmoni degli operai e delle loro famiglie, sul campo da baseball e sulle piste da corsa del liceo a cui l'azienda aveva donato il materiale per la\r\n    copertura.\r\n    "),m=A("br"),g=A("br"),f=w("\r\n    Gli effetti dolorosi delle polveri continuano "),h=A("span"),h.textContent="lenti ma inesorabili",$=w(": ci vogliono decenni perché i sintomi delle malattie da\r\n    amianto si manifestino, infatti i bambini che hanno giocato a baseball o corso sulle piste a contatto con l'amianto stanno iniziando ad ammalarsi solo ora.\r\n    "),v=A("br"),C=A("br"),S=x(),oe(T.$$.fragment),E(n,"class","mdc-typography--headline1 uppercase"),E(i,"class","left svelte-tz0xuf"),E(s,"class","mdc-typography--headline4 uppercase primary"),E(u,"class","highlight"),E(h,"class","highlight"),E(c,"class","mdc-typography--body1"),E(r,"class","right svelte-tz0xuf")},m(e,t){y(e,n,t),y(e,a,t),y(e,i,t),y(e,o,t),y(e,r,t),b(r,s),b(r,l),b(r,c),b(c,d),b(c,u),b(c,p),b(c,m),b(c,g),b(c,f),b(c,h),b(c,$),b(c,v),b(c,C),b(c,S),re(T,c,null),L=!0},p:e,i(e){L||(ee(T.$$.fragment,e),L=!0)},o(e){te(T.$$.fragment,e),L=!1},d(e){e&&_(n),e&&_(a),e&&_(i),e&&_(o),e&&_(r),se(T)}}}class Fa extends de{constructor(e){super(),ce(this,e,null,Va,r,{})}}function Ga(t){let n,a,i,o,r,s,l,c,d,u,p,m,g,f,h,$,v,w;return o=new Ma({props:{contentId:"content-libby1",src:"img/libby-hutt.jpg",title:"Ralph Hutt",subtitle:"La testimonianza di un ex-operaio presso l'azienda mineraria W.R. Grace & Company.",buttonLabel:"Ascolta la sua storia",direction:"left-card"}}),d=new Aa({props:{direction:"right-button",label:"Guarda l'intervista",href:"https://youtu.be/ILklSy6QLbI"}}),h=new Aa({props:{direction:"left-button",label:"Leggi lo studio",href:"https://www.nature.com/articles/jes201618"}}),v=new Ma({props:{contentId:"content-libby2",src:"img/libby-today.jpg",title:"La situazione a Libby oggi",subtitle:"Come le attivitá di sanificazione hanno provato a rimediare al disastro causato dalla miniera.",buttonLabel:"Scopri di piú",direction:"right-card"}}),{c(){n=A("div"),n.textContent="Si può tornare indietro da questo disastro?",a=x(),i=A("div"),oe(o.$$.fragment),r=x(),s=A("div"),l=A("div"),l.innerHTML='Il signor <span class="highlight">Ralph Hutt</span> ha lavorato a contatto con l&#39;amianto soltanto per <span class="highlight">18 mesi</span> e gli è stata\n      diagnosticata l&#39;asbestosi polmonare nel 2002. Ai tempi, le uniche precauzioni fornite ai lavoratori dall&#39;azienda erano\n      <span class="highlight">mascherine di carta</span>. Quando ha chiesto al suo supervisore una maggiore protezione, gli fu detto di non preoccuparsi poiché\n      ciò che respiravano era solo polvere.\n      <br/><br/>\n      Già da allora le sue radiografie mostravano segni dei danni da amianto ai polmoni, tra cui la graduale perdita della\n      <span class="highlight">capacità di respirare</span>. I dirigenti dell&#39;azienda erano al corrente della presenza di amianto nello stabilimento, ma decisero\n      di tenere tutti i lavoratori, tra cui Ralph, all&#39;oscuro.\n      <br/><br/> \n      <span class="italic">&quot;Questo non è il modo in cui me ne voglio andare&quot;</span>, ha detto.\n      <span class="italic">&quot;Lasciate che qualcuno mi spari. Non voglio essere schiacciato sott&#39;acqua o <span class="highlight">strangolato</span>. È così che ci si sente&quot;</span>.',c=x(),oe(d.$$.fragment),u=x(),p=A("div"),m=A("div"),g=A("div"),g.innerHTML='Secondo uno studio del 2017 pubblicato sul Journal of Exposure Science and Environmental Epidemiology, circa 694 residenti di Libby sono\n      <span class="highlight">morti</span> per malattie correlate all&#39;amianto e circa 1 su 10 tra tutti gli abitanti è\n      <span class="highlight">attualmente malato</span>.\n      <br/><br/>\n      L’Agenzia per la Protezione Ambientale Americana ha effettuato sopralluoghi in circa <span class="highlight">8200 proprietà</span>, di cui più di 2400\n      siti sono stati risanificati completamente. Tra questi rientravano attività commerciali, giardini, abitazioni private, parchi e altri\n      <span class="highlight">spazi pubblici</span> frequentati.\n      <br/><br/>\n      Ad oggi, per la decontaminazione e il <span class="highlight">risanamento</span> della città di Libby, sono stati rimossi e rimpiazzati complessivamente più\n      di 750’000 metri cubi di rifiuti e materiali da costruzione, causando una spesa di oltre 600 milioni di dollari statali.',f=x(),oe(h.$$.fragment),$=x(),oe(v.$$.fragment),E(n,"class","mdc-typography--headline3 uppercase"),z(n,"margin-top","16vw"),E(s,"class","mdc-typography--body1 hidden right-align flex-column-2"),E(s,"id","content-libby1"),E(i,"class","flex-row-4"),z(i,"margin","4vw 0 0 2vw"),E(m,"class","mdc-typography--body1 hidden left-align flex-column-2"),E(m,"id","content-libby2"),E(p,"class","flex-row-4"),z(p,"margin-top","6vw")},m(e,t){y(e,n,t),y(e,a,t),y(e,i,t),re(o,i,null),b(i,r),b(i,s),b(s,l),b(s,c),re(d,s,null),y(e,u,t),y(e,p,t),b(p,m),b(m,g),b(m,f),re(h,m,null),b(p,$),re(v,p,null),w=!0},p:e,i(e){w||(ee(o.$$.fragment,e),ee(d.$$.fragment,e),ee(h.$$.fragment,e),ee(v.$$.fragment,e),w=!0)},o(e){te(o.$$.fragment,e),te(d.$$.fragment,e),te(h.$$.fragment,e),te(v.$$.fragment,e),w=!1},d(e){e&&_(n),e&&_(a),e&&_(i),se(o),se(d),e&&_(u),e&&_(p),se(h),se(v)}}}class Xa extends de{constructor(e){super(),ce(this,e,null,Ga,r,{})}}function Wa(t){let n,a,i,o,r,s,l,c,d,u,p,m;return o=new Ha({props:{value:"1919-1990",caption:"Periodo di attivitá"}}),s=new Ha({props:{value:"2,400+",caption:"Tumori diagnosticati"}}),c=new Ha({props:{value:"694",caption:"Vittime accertate"}}),p=new Pn({props:{target:"content5-1",label:"Continua il viaggio"}}),{c(){n=A("div"),n.textContent="La miniera in numeri",a=x(),i=A("div"),oe(o.$$.fragment),r=x(),oe(s.$$.fragment),l=x(),oe(c.$$.fragment),d=x(),u=A("div"),oe(p.$$.fragment),E(n,"class","mdc-typography--headline3 uppercase"),z(n,"margin-top","6vw"),E(i,"class","flex-row-2"),z(i,"margin-top","2vw"),z(u,"margin-top","3vw")},m(e,t){y(e,n,t),y(e,a,t),y(e,i,t),re(o,i,null),b(i,r),re(s,i,null),b(i,l),re(c,i,null),y(e,d,t),y(e,u,t),re(p,u,null),m=!0},p:e,i(e){m||(ee(o.$$.fragment,e),ee(s.$$.fragment,e),ee(c.$$.fragment,e),ee(p.$$.fragment,e),m=!0)},o(e){te(o.$$.fragment,e),te(s.$$.fragment,e),te(c.$$.fragment,e),te(p.$$.fragment,e),m=!1},d(e){e&&_(n),e&&_(a),e&&_(i),se(o),se(s),se(c),e&&_(d),e&&_(u),se(p)}}}class Ya extends de{constructor(e){super(),ce(this,e,null,Wa,r,{})}}function Qa(t){let n,a,i,o,r;return{c(){n=A("div"),n.textContent="Minaçu, Brasile",a=x(),i=A("div"),i.innerHTML='<div class="mdc-typography--headline4 uppercase">Una storia controversa</div> \n  <div class="mdc-typography--body1">Minaçu è un comune brasiliano dello stato del Goiás dove opera la <span class="highlight">SAMA</span>, un&#39;industria franco-brasiliana dedita all’estrazione\n    di amianto crisotilo, e dove è presente la più grande miniera di amianto del Brasile chiamata <span class="highlight">Cana Brava</span>. L&#39;amianto ha reso\n    Minaçu uno dei comuni più ricchi del paese.\n    <br/><br/>\n    Le leggi federali in Brasile attestano chiaramente la pericolosità dell’amianto. Ciononostante, l’estrazione, la manipolazione e la commercializzazione di quest’ultimo\n    sono rimaste attive fino al 2017, anno in cui la Corte Suprema Federale ha <span class="highlight">vietato</span> l’uso del minerale.\n    <br/><br/>\n    Nel 2019, però, il governatore del Brasile ha emanato una <span class="highlight">legislazione</span> nello stato di Goiás, approvando l’estrazione e l&#39;esportazione\n    di amianto, facendo continuare così l’operato di Cana Brava. Questa mossa politica ha portato gli abitanti di Minaçu in una situazione delicata di fronte a un\n    bivio: in qualsiasi momento una decisione del tribunale potrebbe interrompere l&#39;attività mineraria della città, caduta proprio in un periodo economico difficile.</div>',o=x(),r=A("div"),r.innerHTML='<div class="mdc-typography--headline4 uppercase primary">L&#39;opinione degli abitanti</div> \n  <div class="mdc-typography--body1">Alcuni residenti desiderano che la città abbandoni l’amianto e si rinnovi, secondo altri invece senza amianto la città è finita.\n    <span class="italic">&quot;Se SAMA si ferma, la città si ferma&quot;</span>,\n    ha detto Joaquim de Souza, 54 anni, operaio della SAMA, che vive vicino alla massiccia <span class="highlight">collina di detriti</span> di\n    amianto di Minaçu.\n    <br/><br/>\n    Molti si riferiscono all&#39;azienda come la <span class="italic">&quot;<span class="highlight">madre</span> di Minaçu, che si prende cura dei suoi abitanti&quot;</span>,\n    mentre altri la ritengono in realtá una <span class="italic">&quot;madre perversa che fa ammalare le persone, voltandogli poi le spalle&quot;</span>.\n    <br/><br/>\n    In tanti ancora negano che l&#39;amianto sia <span class="highlight">dannoso</span>, sostenendo che\n    <span class="italic">&quot;la maggior parte dei lavoratori fumava, e solo dopo essersi ammalati per le sigarette hanno accusato SAMA&quot;</span>.</div>',E(n,"class","mdc-typography--headline1 uppercase"),E(i,"class","left svelte-1b0ac56"),E(r,"class","right svelte-1b0ac56")},m(e,t){y(e,n,t),y(e,a,t),y(e,i,t),y(e,o,t),y(e,r,t)},p:e,i:e,o:e,d(e){e&&_(n),e&&_(a),e&&_(i),e&&_(o),e&&_(r)}}}class Za extends de{constructor(e){super(),ce(this,e,null,Qa,r,{})}}function Ja(t){let n,a,i,o,r,s,l,c,d,u,p,m,g,f,h,$,v,w;return o=new Ma({props:{contentId:"content-minacu1",src:"img/minacu-court.png",title:"Le infinite battaglie legali",subtitle:"Come le vittime hanno cercato giustizia contro i danni della miniera",buttonLabel:"Scopri di più",direction:"left-card"}}),d=new Aa({props:{direction:"right-button",label:"Approfondisci l'inchiesta",href:"https://www.reuters.com/article/brazil-mining-environment-asbestos-idINL8N2T241L"}}),h=new Aa({props:{direction:"left-button",label:"Leggi l'articolo",href:"https://ejatlas.org/conflict/amianto-mining-in-minacu-goias"}}),v=new Ma({props:{contentId:"content-minacu2",src:"img/minacu-evandra.jpg",title:"Evandra Vieira Brito",subtitle:"Vedova di un ex dipendente di SAMA",buttonLabel:"Leggi la testimonianza",direction:"right-card"}}),{c(){n=A("div"),n.textContent="Come si sono schierati i cittadini con ideologie differenti?",a=x(),i=A("div"),oe(o.$$.fragment),r=x(),s=A("div"),l=A("div"),l.innerHTML='Quando l&#39;industria dell&#39;amianto era forte a Minaçu, SAMA ha finanziato eventi culturali, religiosi e sportivi, ed è stato un importante donatore politico,\n      scegliendo sindaci, consiglieri e sacerdoti schierati a <span class="highlight">difesa dell&#39;amianto</span>. Denigrare pubblicamente SAMA può essere\n      considerato tabù da alcuni residenti, infatti, in migliaia hanno tranquillamente firmato\n      <span class="highlight">accordi</span>\n      con la compagnia per ottenere un risarcimento sui danni sanitari.\n      <br/><br/>\n      La causa in corso è portata avanti dalla <span class="highlight">ABREA</span>, associazione brasiliana a difesa delle vittime di amianto, fondata da\n      Fernanda Giannasi nel 1995. L&#39;ultima sentenza del tribunale, nel Novembre del 2021, ha ordinato alla compagnia di pagare le\n      <span class="highlight">spese mediche</span> per i prossimi 30 anni a tutti i lavoratori che abbiano manifestato problemi di salute &quot;associabili all&#39;amianto&quot;.',c=x(),oe(d.$$.fragment),u=x(),p=A("div"),m=A("div"),g=A("div"),g.innerHTML='Nel cosiddetto &quot;letto di polvere&quot;, luogo in cui il minerale veniva separato, gli operai, tra i quali molte donne, erano coperti di polvere.<br/>\n      Ce ne dà una testimonianza chiara <span class="highlight">Evandra Vieira Brito</span>, che ha perso il marito (un ex dipendente di SAMA) a causa di un\n      cancro nel 2009, ricordando:\n      <span class="italic">&quot;C&#39;erano circa 20 ragazze coperte dalla polvere. Sono <span class="highlight">morte tutte</span> dopo aver vomitato sangue&quot;</span>.\n      <br/><br/>\n      Nonostante questo tipo di testimonianze, gruppi favorevoli alla miniera hanno dichiarato che\n      <span class="italic">&quot;il modo in cui viene estratto l&#39;amianto a Minaçu non è dannoso per la salute&quot;</span> e che\n      <span class="italic">&quot;l&#39;azienda rispetta tutte le leggi relative alla <span class="highlight">salute sul lavoro</span>&quot;</span>. Affermano inoltre che le\n      persone che si ammalano in miniera in questo momento è perché si sono ammalate a causa del lavoro svolto precedentemente presso un&#39;altra miniera e sono\n      successivamente emigrate per lavoro a Cana Brava.',f=x(),oe(h.$$.fragment),$=x(),oe(v.$$.fragment),E(n,"class","mdc-typography--headline3 uppercase"),z(n,"margin-top","12vw"),E(s,"class","mdc-typography--body1 hidden right-align flex-column-2"),E(s,"id","content-minacu1"),E(i,"class","flex-row-4"),z(i,"margin-top","4vw"),E(m,"class","mdc-typography--body1 hidden left-align flex-column-2"),E(m,"id","content-minacu2"),E(p,"class","flex-row-4"),z(p,"margin-top","4vw")},m(e,t){y(e,n,t),y(e,a,t),y(e,i,t),re(o,i,null),b(i,r),b(i,s),b(s,l),b(s,c),re(d,s,null),y(e,u,t),y(e,p,t),b(p,m),b(m,g),b(m,f),re(h,m,null),b(p,$),re(v,p,null),w=!0},p:e,i(e){w||(ee(o.$$.fragment,e),ee(d.$$.fragment,e),ee(h.$$.fragment,e),ee(v.$$.fragment,e),w=!0)},o(e){te(o.$$.fragment,e),te(d.$$.fragment,e),te(h.$$.fragment,e),te(v.$$.fragment,e),w=!1},d(e){e&&_(n),e&&_(a),e&&_(i),se(o),se(d),e&&_(u),e&&_(p),se(h),se(v)}}}class Ka extends de{constructor(e){super(),ce(this,e,null,Ja,r,{})}}function ei(t){let n,a,i,o,r,s,l,c,d,u;return o=new Ha({props:{value:"1967 - oggi",caption:"Periodo di attivitá"}}),s=new Ha({props:{value:"13%",caption:"Produzione globale"}}),d=new Pn({props:{target:"content3-1",label:"Continua il viaggio"}}),{c(){n=A("div"),n.textContent="La miniera in numeri",a=x(),i=A("div"),oe(o.$$.fragment),r=x(),oe(s.$$.fragment),l=x(),c=A("div"),oe(d.$$.fragment),E(n,"class","mdc-typography--headline3 uppercase"),z(n,"margin-top","8vw"),E(i,"class","flex-row-2"),z(i,"margin-top","2vw"),z(c,"margin-top","3vw")},m(e,t){y(e,n,t),y(e,a,t),y(e,i,t),re(o,i,null),b(i,r),re(s,i,null),y(e,l,t),y(e,c,t),re(d,c,null),u=!0},p:e,i(e){u||(ee(o.$$.fragment,e),ee(s.$$.fragment,e),ee(d.$$.fragment,e),u=!0)},o(e){te(o.$$.fragment,e),te(s.$$.fragment,e),te(d.$$.fragment,e),u=!1},d(e){e&&_(n),e&&_(a),e&&_(i),se(o),se(s),e&&_(l),e&&_(c),se(d)}}}class ti extends de{constructor(e){super(),ce(this,e,null,ei,r,{})}}function ni(t){let n,a,i,o,r,s,l,c,d,u,p,m,g,f,h,$,v,C,S,T,L,I,z,O,q,M,R,B,D,P,k,N,H,j;return k=new Aa({props:{label:"L'azienda Uralasbest",href:"https://www.uralasbest.ru/en/about-company",direction:"left-button"}}),{c(){n=A("div"),n.textContent="Asbest, Russia",a=x(),i=A("div"),o=A("div"),o.textContent="Storia del passato",r=x(),s=A("div"),l=w("Ci troviamo in Russia, più precisamente ad Asbest, una piccola città chiamata così proprio per la presenza del\r\n    "),c=A("span"),c.textContent="più grande",d=w(" giacimento a cielo aperto di amianto "),u=A("span"),u.textContent="nel mondo",p=w(": quasi mezzo milione di tonnellate\r\n    di amianto vengono scavate ogni anno nella miniera dall'impresa "),m=A("span"),m.textContent="Uralasbest",g=w(".\r\n    "),f=A("br"),h=A("br"),$=w("\r\n    Circa settantamila persone vivono ad Asbest, un tempo conosciuta come "),v=A("span"),v.textContent='"la città che muore"',C=w(" per i suoi altissimi tassi di\r\n    cancro ai polmoni.\r\n    "),S=A("br"),T=A("br"),L=w("\r\n    Nonostante il "),I=A("span"),I.textContent="divieto",z=w(" di estrazione e distribuzione dell'amianto da parte degli altri paesi, l'azienda locale ha cercato di\r\n    eliminare l'associazione popolare tra amianto e cancro ai polmoni e altre malattie, "),O=A("span"),O.textContent="rinominando",q=w(" il suo prodotto come\r\n    "),M=A("span"),M.textContent='"crisotilo"',R=w(", il nome blando e tecnico del tipo specifico del minerale estratto.\r\n    "),B=A("br"),D=A("br"),P=x(),oe(k.$$.fragment),N=x(),H=A("div"),H.innerHTML='<div class="mdc-typography--headline4 uppercase primary">Conseguenze sul presente</div> \n  <div class="mdc-typography--body1">Tutt&#39;oggi i produttori russi operano noncuranti dei pericoli e <span class="highlight">sostenuti dal governo</span>, il quale fa leva sugli abitanti sapendo\n    che la miniera è l’unica importante fonte economica della città.<br/>\n    Asbest, dopo un secolo di estrazione mineraria intensiva, ha ancora abbastanza amianto crisotilo sepolto nel terreno per mantenere Uralasbest in attività per\n    almeno <span class="highlight">un altro secolo</span>.\n    <br/><br/>\n    L&#39;opinione di molti residenti di Asbest è che ci sono così tante <span class="highlight">altre questioni</span> di cui preoccuparsi nella loro regione\n    fortemente industrializzata, inclusa una centrale nucleare a poche miglia di distanza e una centrale elettrica a carbone ancora più vicina, che l&#39;amianto è\n    probabilmente\n    <span class="highlight">l&#39;ultima delle loro preoccupazioni</span>.\n    <br/><br/>\n    La vita dei cittadini è fortemente intrecciata con quella della miniera, tanto che la città possiede un <span class="highlight">inno municipale</span>\n    chiamato\n    <span class="italic">&quot;Amianto, la mia città e il mio destino&quot;</span>. Dal 2002 il Consiglio Comunale ha adottato perfino una nuova\n    <span class="highlight">bandiera</span>: le linee bianche, che simboleggiano le fibre di amianto, passano attraverso un anello di fiamme. Un cartellone\n    affisso da Uralasbest proclama\n    <span class="italic">&quot;L&#39;amianto è il nostro futuro&quot;</span>.</div>',E(n,"class","mdc-typography--headline2 uppercase"),E(o,"class","mdc-typography--headline4 uppercase"),E(c,"class","highlight"),E(u,"class","highlight"),E(m,"class","highlight"),E(v,"class","highlight"),E(I,"class","highlight"),E(O,"class","highlight"),E(M,"class","highlight"),E(s,"class","mdc-typography--body1"),E(i,"class","left svelte-14vy1zp"),E(H,"class","right svelte-14vy1zp")},m(e,t){y(e,n,t),y(e,a,t),y(e,i,t),b(i,o),b(i,r),b(i,s),b(s,l),b(s,c),b(s,d),b(s,u),b(s,p),b(s,m),b(s,g),b(s,f),b(s,h),b(s,$),b(s,v),b(s,C),b(s,S),b(s,T),b(s,L),b(s,I),b(s,z),b(s,O),b(s,q),b(s,M),b(s,R),b(s,B),b(s,D),b(s,P),re(k,s,null),y(e,N,t),y(e,H,t),j=!0},p:e,i(e){j||(ee(k.$$.fragment,e),j=!0)},o(e){te(k.$$.fragment,e),j=!1},d(e){e&&_(n),e&&_(a),e&&_(i),se(k),e&&_(N),e&&_(H)}}}class ai extends de{constructor(e){super(),ce(this,e,null,ni,r,{})}}function ii(t){let n,a,i,o,r,s,l,c,d,u,p,m,g,f,h,$,v,w,C,S,T,L,I,O,q,M,R,B,D,P,k;return o=new Ma({props:{contentId:"content-asbest1",src:"img/asbest-trump.jpeg",title:"Donald Trump",subtitle:"Come il 45° presidente degli Stati Uniti viene usato nella propaganda a favore dell'amianto",buttonLabel:"Approfondisci la storia",direction:"left-card"}}),d=new Aa({props:{direction:"right-button",label:"Leggi l'articolo",href:"https://www.washingtonpost.com/news/business/wp/2018/07/11/approved-by-donald-trump-asbestos-sold-by-russian-company-is-branded-with-the-presidents-face/"}}),f=new Ma({props:{contentId:"content-asbest2",src:"img/asbest-city.jpg",title:"Igor Bragin",subtitle:"Medico capo del complesso ospedaliero Asbest City Hospital",buttonLabel:"Scopri la sua opinione",direction:"right-card"}}),v=new Ma({props:{contentId:"content-asbest3",src:"img/asbest-stepanov.jpg",title:"Viktor Stepanov",subtitle:"Ex lavoratore della fabbrica di Uralasbest",buttonLabel:"Leggi le sua parole",direction:"left-card"}}),L=new Aa({props:{direction:"right-button",label:"Leggi l'articolo",href:"https://www.nytimes.com/2019/04/07/world/europe/asbestos-russia-mine.html"}}),B=new Aa({props:{direction:"left-button",label:"Leggi l'articolo",href:"https://www.nytimes.com/2013/07/14/business/global/city-in-russia-unable-to-kick-asbestos-habit.html"}}),P=new Ma({props:{contentId:"content-asbest4",src:"img/asbest-miner.png",title:"Valentin K. Zemskov",subtitle:"Ex lavoratore della miniera",buttonLabel:"Scopri la testimonianza",direction:"right-card"}}),{c(){n=A("div"),n.textContent="Perché preoccuparsi così tanto dell'amianto?",a=x(),i=A("div"),oe(o.$$.fragment),r=x(),s=A("div"),l=A("div"),l.innerHTML='Attaccato per decenni dai difensori della salute, l&#39;ostinatamente\n      <span class="highlight">provocatoria</span> azienda russa produttrice di amianto, trova \n      nell&#39;ex presidente statunitense Donald Trump, la figura perfetta per una campagna volta a\n      <span class="highlight">riabilitare</span> l&#39;immagine profondamente macchiata del proprio prodotto.\n      <br/><br/>\n      Nel 2018 la società Russa ha messo in circolazione pallet adornati con un sigillo raffigurante la faccia di Trump e recitante la seguente\n      frase <span class="italic">&quot;Approvato da <span class="highlight">Donald Trump</span>, 45° presidente degli Stati Uniti&quot;</span>',c=x(),oe(d.$$.fragment),u=x(),p=A("div"),m=A("div"),m.innerHTML='<div>Il dottor <span class="highlight">Igor Bragin</span> ha liquidato come <span class="italic">&quot;non corrispondente alla realtà&quot;</span> uno studio scientifico del 2016 che mostrava tassi\n      elevati di cancro ai polmoni nei pressi della miniera.\n      <br/><br/>\n      Lo studio, una revisione comparativa dei <span class="highlight">tassi di mortalità</span> ad Asbest e nella regione circostante di Sverdlovsk, ha\n      rilevato che &quot;i tassi di mortalità per tumori del polmone, dello stomaco e del colon erano statisticamente e significativamente\n      <span class="highlight">più alti</span>\n      nella città di Asbest&quot;.\n      <br/><br/>\n      L&#39;incidenza del <span class="highlight">mesotelioma</span>, una malattia polmonare ampiamente attribuita all&#39;amianto in Occidente,\n      <span class="highlight">non è stata studiata</span> a sufficienza dalla Russia impedendone il corretto monitoraggio sanitario.</div>',g=x(),oe(f.$$.fragment),h=x(),$=A("div"),oe(v.$$.fragment),w=x(),C=A("div"),S=A("div"),S.innerHTML='&quot;Sono un pensionato di 88 anni che ha trascorso decenni a lavorare nella fabbrica di amianto. La mia stessa età avanzata e il mantenimento di una buona\n      salute sono la prova che tutta l&#39;<span class="highlight">isteria sull&#39;amianto</span> non poteva essere vera.\n      <br/><br/>\n      Mentre lavoravo bevevo una <span class="highlight">bottiglia di latte</span> al giorno, l&#39;azienda le forniva gratuitamente per aiutare i lavoratori a difendersi\n      dalle malattie. Tutto è pericoloso in una certa misura. Il cento per cento di certezza che qualcosa non sia dannoso non puó esistere&quot;.',T=x(),oe(L.$$.fragment),I=x(),O=A("div"),q=A("div"),M=A("div"),M.innerHTML='<span class="highlight">Valentin K. Zemskov</span>, 82 anni, ha lavorato nella miniera per 40 anni e ha sviluppato l&#39;asbestosi, causata dall’inalazione\n      delle fibre di amianto.\n      <br/><br/> \n      <span class="italic">&quot;C&#39;era così tanta polvere che non potevi vedere un uomo in piedi accanto a te&quot;</span>, dice ricordando gli anni di lavoro.<br/>\n      Per la disabilità, la fabbrica aggiunge <span class="highlight">4.500 rubli</span> al suo assegno mensile per la pensione, una cifra ridicola sufficiente\n      a coprire solo pochi pasti.\n      <br/><br/>\n      Tuttavia, è convinto che la città non abbia altra scelta.\n      <span class="italic">&quot;Se non avessimo la fabbrica, <span class="highlight">come vivremmo?</span>\n        Dobbiamo continuare a tenerla aperta in modo da avere <span class="highlight">posti di lavoro</span> per tutti&quot;</span>, afferma senza fiato mentre parla nel cortile di una casa di riposo.',R=x(),oe(B.$$.fragment),D=x(),oe(P.$$.fragment),E(n,"class","mdc-typography--headline3 uppercase"),z(n,"margin-top","14vw"),E(s,"class","mdc-typography--body1 hidden right-align flex-column-2"),E(s,"id","content-asbest1"),E(i,"class","flex-row-4"),z(i,"margin-top","3vw"),E(m,"class","mdc-typography--body1 hidden left-align flex-column-2"),E(m,"id","content-asbest2"),E(p,"class","flex-row-4"),z(p,"margin-top","3vw"),E(C,"class","mdc-typography--body1 hidden right-align flex-column-2 italic"),E(C,"id","content-asbest3"),E($,"class","flex-row-4"),z($,"margin-top","3vw"),E(q,"class","mdc-typography--body1 hidden left-align flex-column-2"),E(q,"id","content-asbest4"),E(O,"class","flex-row-4"),z(O,"margin-top","3vw")},m(e,t){y(e,n,t),y(e,a,t),y(e,i,t),re(o,i,null),b(i,r),b(i,s),b(s,l),b(s,c),re(d,s,null),y(e,u,t),y(e,p,t),b(p,m),b(p,g),re(f,p,null),y(e,h,t),y(e,$,t),re(v,$,null),b($,w),b($,C),b(C,S),b(C,T),re(L,C,null),y(e,I,t),y(e,O,t),b(O,q),b(q,M),b(q,R),re(B,q,null),b(O,D),re(P,O,null),k=!0},p:e,i(e){k||(ee(o.$$.fragment,e),ee(d.$$.fragment,e),ee(f.$$.fragment,e),ee(v.$$.fragment,e),ee(L.$$.fragment,e),ee(B.$$.fragment,e),ee(P.$$.fragment,e),k=!0)},o(e){te(o.$$.fragment,e),te(d.$$.fragment,e),te(f.$$.fragment,e),te(v.$$.fragment,e),te(L.$$.fragment,e),te(B.$$.fragment,e),te(P.$$.fragment,e),k=!1},d(e){e&&_(n),e&&_(a),e&&_(i),se(o),se(d),e&&_(u),e&&_(p),se(f),e&&_(h),e&&_($),se(v),se(L),e&&_(I),e&&_(O),se(B),se(P)}}}class oi extends de{constructor(e){super(),ce(this,e,null,ii,r,{})}}function ri(t){let n,a,i,o,r,s,l,c,d,u,p,m;return o=new Ha({props:{value:"1922 - oggi",caption:"Periodo di attivitá"}}),s=new Ha({props:{value:"500.000 ton",caption:"Estratte ogni anno"}}),c=new Ha({props:{value:"68,893",caption:"Cittadini a rischio"}}),p=new Pn({props:{target:"content6-1",label:"Cosa ci attende nel futuro?"}}),{c(){n=A("div"),n.textContent="La miniera in numeri",a=x(),i=A("div"),oe(o.$$.fragment),r=x(),oe(s.$$.fragment),l=x(),oe(c.$$.fragment),d=x(),u=A("div"),oe(p.$$.fragment),E(n,"class","mdc-typography--headline3 uppercase"),z(n,"margin-top","8vw"),E(i,"class","flex-row-2"),z(i,"margin-top","2vw"),z(u,"margin-top","3vw")},m(e,t){y(e,n,t),y(e,a,t),y(e,i,t),re(o,i,null),b(i,r),re(s,i,null),b(i,l),re(c,i,null),y(e,d,t),y(e,u,t),re(p,u,null),m=!0},p:e,i(e){m||(ee(o.$$.fragment,e),ee(s.$$.fragment,e),ee(c.$$.fragment,e),ee(p.$$.fragment,e),m=!0)},o(e){te(o.$$.fragment,e),te(s.$$.fragment,e),te(c.$$.fragment,e),te(p.$$.fragment,e),m=!1},d(e){e&&_(n),e&&_(a),e&&_(i),se(o),se(s),se(c),e&&_(d),e&&_(u),se(p)}}}class si extends de{constructor(e){super(),ce(this,e,null,ri,r,{})}}function li(t){let n,a,i,o,r,s,l,d,u,p,m,g,f,h,$,v,C,S,T,L,I,O,q,M,R,B,D,P,k,N,H,j,U,V,F,G,X,W,Y,Q,Z,J,K,ne,ae,ie,le,ce,de,ue,pe,me,ge,fe,he,$e,ve,be,ye,_e,Ae;return H=new Aa({props:{label:"Amianto naturale",href:"https://www.arpal.liguria.it/tematiche/suolo/amianto-naturale.html",direction:"left-button"}}),me=new Aa({props:{label:"Lo studio completo",href:"https://www.regione.liguria.it/homepage/ambiente/territorio/bonifiche-siti-contaminati/mappatura-amianto/amianto-naturale.html",direction:"right-button"}}),_e=new Aa({props:{label:"Mappa interattiva",href:"http://srvcarto.regione.liguria.it/geoviewer2/pages/apps/geoportale/index.html?id=1200",direction:"right-button"}}),{c(){n=A("div"),n.textContent="Parco del Beigua, Liguria",a=x(),i=A("div"),o=A("div"),o.textContent="Potrebbe succedere anche a noi?",r=x(),s=A("div"),l=w("Con la legge 257 del 1992 l’Italia ha messo "),d=A("span"),d.textContent="al bando",u=w(" l'amianto, ma non ha risolto i problemi legati alla sua presenza\r\n    "),p=A("span"),p.textContent="in natura",m=w(" e all'utilizzo dei materiali a base di amianto già messi in opera.\r\n    "),g=A("br"),f=A("br"),h=w("\r\n    Ai sensi della L.R. 20/2006 Arpal provvede, su richiesta della Regione o degli Enti locali, ad effettuare le attività di\r\n    "),$=A("span"),$.textContent="controllo",v=w(" e "),C=A("span"),C.textContent="monitoraggio",S=w(" di siti estrattivi o di affioramenti naturali interessati dalla\r\n    presenza di "),T=A("span"),T.textContent='"Pietre verdi"',L=w(" (rocce ofiolitiche) a potenziale rischio amianto.\r\n    "),I=A("br"),O=A("br"),q=w("\r\n    Quindi se non facciamo attenzione a dove si vorrà introdurre un nuovo sito estrattivo, le polveri sottili che si potrebbero alzare a seguito degli scavi potrebbero\r\n    mescolarsi all'aria che respiriamo e "),M=A("span"),M.textContent="contaminare",R=w(" l'intera Ligura e il basso Piemonte, rendendo così inabitabili questi\r\n    "),B=A("span"),B.textContent="territori",D=w(" a noi tanto cari.\r\n    "),P=A("br"),k=A("br"),N=x(),oe(H.$$.fragment),j=x(),U=A("div"),V=A("div"),V.textContent="Cosa sono le pietre verdi?",F=x(),G=A("div"),X=w("Le "),W=A("span"),W.textContent='"Pietre verdi"',Y=w(" rappresentano i frammenti di un antico fondale oceanico successivamente compresso ed emerso in seguito ad\r\n    imponenti movimenti della crosta terreste. Tali rocce spesso contengono "),Q=A("span"),Q.textContent="fibre di amianto",Z=w(" e, pertanto, è\r\n    importante conoscere dove possono essere trovate, soprattutto in tema di gestione ed utilizzo delle terre e rocce da scavo.\r\n    "),J=A("br"),K=A("br"),ne=w("\r\n    La "),ae=A("span"),ae.textContent="cartografia",ie=w(" sotto riportata raffigura i territori in cui, in relazione alle rocce riconosciute in affioramento o\r\n    subaffioramento, potrebbero rinvenirsi concentrazioni di "),le=A("span"),le.textContent="minerali asbestiformi",ce=w(" con alte probabilità.\r\n    "),de=A("br"),ue=A("br"),pe=x(),oe(me.$$.fragment),ge=x(),fe=A("div"),he=A("img"),ve=x(),be=A("div"),be.textContent="Mappa della presenza di Pietre Verdi in Liguria, con evidenza sul territorio protetto del Parco del Beigua",ye=x(),oe(_e.$$.fragment),E(n,"class","mdc-typography--headline2 uppercase"),E(o,"class","mdc-typography--headline4 uppercase"),E(d,"class","highlight"),E(p,"class","highlight"),E($,"class","highlight"),E(C,"class","highlight"),E(T,"class","italic"),E(M,"class","highlight"),E(B,"class","highlight"),E(s,"class","mdc-typography--body1"),E(i,"class","left svelte-asx7jm"),E(V,"class","mdc-typography--headline4 uppercase primary"),E(W,"class","italic"),E(Q,"class","highlight"),E(ae,"class","highlight"),E(le,"class","highlight"),E(G,"class","mdc-typography--body1"),E(U,"class","right svelte-asx7jm"),c(he.src,$e="img/beigua-mappa.png")||E(he,"src","img/beigua-mappa.png"),E(he,"alt","Mappa della presenza di Pietre Verdi in Liguria, con evidenza sul territorio protetto del parco del Beigua"),E(he,"class","svelte-asx7jm"),E(be,"class","mdc-typography--body1"),z(be,"margin-block","1vw"),E(fe,"class","center svelte-asx7jm")},m(e,t){y(e,n,t),y(e,a,t),y(e,i,t),b(i,o),b(i,r),b(i,s),b(s,l),b(s,d),b(s,u),b(s,p),b(s,m),b(s,g),b(s,f),b(s,h),b(s,$),b(s,v),b(s,C),b(s,S),b(s,T),b(s,L),b(s,I),b(s,O),b(s,q),b(s,M),b(s,R),b(s,B),b(s,D),b(s,P),b(s,k),b(s,N),re(H,s,null),y(e,j,t),y(e,U,t),b(U,V),b(U,F),b(U,G),b(G,X),b(G,W),b(G,Y),b(G,Q),b(G,Z),b(G,J),b(G,K),b(G,ne),b(G,ae),b(G,ie),b(G,le),b(G,ce),b(G,de),b(G,ue),b(G,pe),re(me,G,null),y(e,ge,t),y(e,fe,t),b(fe,he),b(fe,ve),b(fe,be),b(fe,ye),re(_e,fe,null),Ae=!0},p:e,i(e){Ae||(ee(H.$$.fragment,e),ee(me.$$.fragment,e),ee(_e.$$.fragment,e),Ae=!0)},o(e){te(H.$$.fragment,e),te(me.$$.fragment,e),te(_e.$$.fragment,e),Ae=!1},d(e){e&&_(n),e&&_(a),e&&_(i),se(H),e&&_(j),e&&_(U),se(me),e&&_(ge),e&&_(fe),se(_e)}}}class ci extends de{constructor(e){super(),ce(this,e,null,li,r,{})}}function di(t){let n,a,i,o,r,s,l,c,d,u,p,m,g,f,h,$,v,w,C,S;return o=new Ma({props:{contentId:"content-beigua1",src:"img/beigua-parco.jpg",title:"Parco Naturale Regionale del Beigua",subtitle:"L'importanza del giacimento di titanio di Pianpaludo",buttonLabel:"Scopri cosa c'è sotto",direction:"left-card"}}),d=new Aa({props:{direction:"right-button",label:"Approfondisci l'articolo",href:"https://www.ivg.it/2021/04/titanio-del-beigua-ecco-perche-il-giacimento-di-piampaludo-fa-gola/"}}),h=new Aa({props:{direction:"left-button",label:"Leggi l'articolo",href:"https://genova.repubblica.it/cronaca/2022/05/28/news/liguria_titanio_nel_beigua_tar_conferma_no_a_ricerche_minerarie-351535040/"}}),v=new Ma({props:{contentId:"content-beigua2",src:"img/beigua-tar.jpg",title:"Il no del TAR",subtitle:"Confermato il divieto di effettuare ricerche minerarie nell'area del Monte Tarinè",buttonLabel:"Scopri la sentenza",direction:"right-card"}}),{c(){n=A("div"),n.textContent="La situazione attuale del territorio",a=x(),i=A("div"),oe(o.$$.fragment),r=x(),s=A("div"),l=A("div"),l.innerHTML='Nel 1970 tra i comuni di Urbe e Sassello è stato scoperto un giacimento di biossido di <span class="highlight">titanio</span>, sepolto in corrispondenza\n      dei Monti Antenna e Tariné. Sono stimate circa 9 milioni di tonnellate di biossido di Titanio, sottoforma di rutilo. Nel 1976 il ministero dell’Industria ha rilasciato alla\n      Mineraria Italiana Srl una concessione ventennale sul territorio, ceduta poi alla Compagnia Europea per il Titanio.\n      <br/><br/>\n      Secondo uno studio dell’Università di Genova degli anni &#39;90, per sfruttare questo giacimento e ricavare solo il 6% di rutilo, si potrebbe arrivare a smuovere\n      circa\n      <span class="highlight">200 milioni</span> di metri cubi di terra, di cui le rocce amiantifere compongono tra il <span class="highlight">10%</span> e il\n      <span class="highlight">15%</span>: una tale quantità equivale a una movimentazione pari a 30 aeroporti di Genova.',c=x(),oe(d.$$.fragment),u=x(),p=A("div"),m=A("div"),g=A("div"),g.innerHTML='È stata depositata il <span class="highlight">21 maggio 2022</span> la\n      &quot;sentenza del Tribunale Amministrativo Regionale della Liguria che di fatto conferma il <span class="highlight">divieto</span> di effettuare ricerche\n      minerarie nell&#39;area del Monte Tariné&quot;.\n      <br/><br/>\n      L&#39;associazione di <span class="highlight">Legambiente Liguria</span> esprime\n      <span class="italic">&quot;soddisfazione in merito alla sentenza del TAR che rappresenta la pietra tombale su qualsiasi ipotesi di sfruttamento minerario del comprensorio del\n        Beigua&quot;</span>.\n      <br/><br/>\n      L&#39;assessore regionale all&#39;Urbanistica e alle attività estrattive <span class="highlight">Marco Scajola</span> afferma che\n      <span class="italic">&quot;La sentenza del Tar va nella direzione della <span class="highlight">tutela</span> del territorio voluta dalla Giunta regionale, da sempre contraria a\n        qualsiasi attività estrattiva all&#39;interno dell&#39;area del Parco&quot;</span>.',f=x(),oe(h.$$.fragment),$=x(),oe(v.$$.fragment),w=x(),C=A("div"),C.innerHTML='<div class="mdc-typography--headline3 uppercase" style="margin-top: 10vw;">E noi, vogliamo dare vita a questo inferno?</div> \n  <img src="img/logo.png" alt="Logo" class="svelte-1dbqn48"/>',E(n,"class","mdc-typography--headline3 uppercase"),z(n,"margin-top","15vw"),E(s,"class","mdc-typography--body1 hidden right-align flex-column-2"),E(s,"id","content-beigua1"),E(i,"class","flex-row-4"),z(i,"margin-top","4vw"),E(m,"class","mdc-typography--body1 hidden left-align flex-column-2"),E(m,"id","content-beigua2"),E(p,"class","flex-row-4"),z(p,"margin-top","10vw")},m(e,t){y(e,n,t),y(e,a,t),y(e,i,t),re(o,i,null),b(i,r),b(i,s),b(s,l),b(s,c),re(d,s,null),y(e,u,t),y(e,p,t),b(p,m),b(m,g),b(m,f),re(h,m,null),b(p,$),re(v,p,null),y(e,w,t),y(e,C,t),S=!0},p:e,i(e){S||(ee(o.$$.fragment,e),ee(d.$$.fragment,e),ee(h.$$.fragment,e),ee(v.$$.fragment,e),S=!0)},o(e){te(o.$$.fragment,e),te(d.$$.fragment,e),te(h.$$.fragment,e),te(v.$$.fragment,e),S=!1},d(e){e&&_(n),e&&_(a),e&&_(i),se(o),se(d),e&&_(u),e&&_(p),se(h),se(v),e&&_(w),e&&_(C)}}}class ui extends de{constructor(e){super(),ce(this,e,null,di,r,{})}}function pi(t){let n,a,i,o,r,s,l,d,u,p,m,g,f,h,$,v,w,C,S,T,L,I,O,q,M,R,B,D,P,k,N,H,j,U,V,F,G,X,W,Y,Q,Z,J,K,ne,ae,ie,le,ce,de,ue,pe,me,ge,fe,he,$e,ve,be,ye,_e,Ae,we,xe,Ce,Se,Ee,Te,Le,Ie,ze,Oe,qe,Me,Re,Be,De,Pe,ke,Ne,He,je,Ue,Ve,Fe,Ge,Xe,We,Ye,Qe,Ze,Je,Ke,et,tt,nt,at,it,ot,rt,st,lt,ct,dt,ut,pt,mt,gt,ft,ht,$t,vt,bt,yt,_t,At,wt,xt,Ct,St,Et,Tt,Lt,It,zt,Ot,qt,Mt,Rt;return n=new wn({}),u=new jn({}),m=new Pn({props:{target:"section1-2",label:"Comincia il viaggio"}}),C=new Vn({}),M=new ca({}),D=new Pn({props:{target:"content2-1",label:"Entra nella miniera"}}),V=new Za({}),Z=new Ka({}),ce=new ti({}),he=new ua({}),we=new Ba({}),Ie=new Ua({}),De=new Fa({}),Ve=new Xa({}),Ze=new Ya({}),it=new ai({}),ut=new oi({}),vt=new si({}),Ct=new ci({}),Ot=new ui({}),Mt=new Nn({}),{c(){oe(n.$$.fragment),a=x(),i=A("main"),o=A("div"),r=A("img"),l=x(),d=A("div"),oe(u.$$.fragment),p=x(),oe(m.$$.fragment),g=x(),f=A("div"),h=A("img"),v=x(),w=A("div"),oe(C.$$.fragment),S=x(),T=A("div"),L=A("img"),O=x(),q=A("div"),oe(M.$$.fragment),R=x(),B=A("div"),oe(D.$$.fragment),P=x(),k=A("div"),N=A("img"),j=x(),U=A("div"),oe(V.$$.fragment),F=x(),G=A("div"),X=A("img"),Y=x(),Q=A("div"),oe(Z.$$.fragment),J=x(),K=A("div"),ne=A("img"),ie=x(),le=A("div"),oe(ce.$$.fragment),de=x(),ue=A("div"),pe=A("img"),ge=x(),fe=A("div"),oe(he.$$.fragment),$e=x(),ve=A("div"),be=A("img"),_e=x(),Ae=A("div"),oe(we.$$.fragment),xe=x(),Ce=A("div"),Se=A("img"),Te=x(),Le=A("div"),oe(Ie.$$.fragment),ze=x(),Oe=A("div"),qe=A("img"),Re=x(),Be=A("div"),oe(De.$$.fragment),Pe=x(),ke=A("div"),Ne=A("img"),je=x(),Ue=A("div"),oe(Ve.$$.fragment),Fe=x(),Ge=A("div"),Xe=A("img"),Ye=x(),Qe=A("div"),oe(Ze.$$.fragment),Je=x(),Ke=A("div"),et=A("img"),nt=x(),at=A("div"),oe(it.$$.fragment),ot=x(),rt=A("div"),st=A("img"),ct=x(),dt=A("div"),oe(ut.$$.fragment),pt=x(),mt=A("div"),gt=A("img"),ht=x(),$t=A("div"),oe(vt.$$.fragment),bt=x(),yt=A("div"),_t=A("img"),wt=x(),xt=A("div"),oe(Ct.$$.fragment),St=x(),Et=A("div"),Tt=A("img"),It=x(),zt=A("div"),oe(Ot.$$.fragment),qt=x(),oe(Mt.$$.fragment),E(r,"class","background svelte-q1onv1"),c(r.src,s="img/background-1-1.png")||E(r,"src","img/background-1-1.png"),E(r,"alt",""),E(d,"id","content1-1"),E(d,"class","svelte-q1onv1"),E(o,"id","section1-1"),E(o,"class","svelte-q1onv1"),E(h,"class","background svelte-q1onv1"),c(h.src,$="img/background-1-2.png")||E(h,"src","img/background-1-2.png"),E(h,"alt",""),E(w,"id","content1-2"),E(w,"class","svelte-q1onv1"),E(f,"id","section1-2"),E(f,"class","svelte-q1onv1"),E(L,"class","background svelte-q1onv1"),c(L.src,I="img/background-1-3.png")||E(L,"src","img/background-1-3.png"),E(L,"alt",""),z(B,"margin-top","2vw"),E(q,"id","content1-3"),E(q,"class","svelte-q1onv1"),E(T,"id","section1-3"),E(T,"class","svelte-q1onv1"),E(N,"class","background svelte-q1onv1"),c(N.src,H="img/background-2-1.png")||E(N,"src","img/background-2-1.png"),E(N,"alt",""),E(U,"id","content2-1"),E(U,"class","svelte-q1onv1"),E(k,"id","section2-1"),E(k,"class","svelte-q1onv1"),E(X,"class","background svelte-q1onv1"),c(X.src,W="img/background-2-2.png")||E(X,"src","img/background-2-2.png"),E(X,"alt",""),E(Q,"id","content2-2"),E(Q,"class","svelte-q1onv1"),E(G,"id","section2-2"),E(G,"class","svelte-q1onv1"),E(ne,"class","background svelte-q1onv1"),c(ne.src,ae="img/background-2-3.png")||E(ne,"src","img/background-2-3.png"),E(ne,"alt",""),E(le,"id","content2-3"),E(le,"class","svelte-q1onv1"),E(K,"id","section2-3"),E(K,"class","svelte-q1onv1"),E(pe,"class","background svelte-q1onv1"),c(pe.src,me="img/background-3-1.png")||E(pe,"src","img/background-3-1.png"),E(pe,"alt",""),E(fe,"id","content3-1"),E(fe,"class","svelte-q1onv1"),E(ue,"id","section3-1"),E(ue,"class","svelte-q1onv1"),E(be,"class","background svelte-q1onv1"),c(be.src,ye="img/background-3-2.png")||E(be,"src","img/background-3-2.png"),E(be,"alt",""),E(Ae,"id","content3-2"),E(Ae,"class","svelte-q1onv1"),E(ve,"id","section3-2"),E(ve,"class","svelte-q1onv1"),E(Se,"class","background svelte-q1onv1"),c(Se.src,Ee="img/background-3-3.png")||E(Se,"src","img/background-3-3.png"),E(Se,"alt",""),E(Le,"id","content3-3"),E(Le,"class","svelte-q1onv1"),E(Ce,"id","section3-3"),E(Ce,"class","svelte-q1onv1"),E(qe,"class","background svelte-q1onv1"),c(qe.src,Me="img/background-4-1.png")||E(qe,"src","img/background-4-1.png"),E(qe,"alt",""),E(Be,"id","content4-1"),E(Be,"class","svelte-q1onv1"),E(Oe,"id","section4-1"),E(Oe,"class","svelte-q1onv1"),E(Ne,"class","background svelte-q1onv1"),c(Ne.src,He="img/background-4-2.png")||E(Ne,"src","img/background-4-2.png"),E(Ne,"alt",""),E(Ue,"id","content4-2"),E(Ue,"class","svelte-q1onv1"),E(ke,"id","section4-2"),E(ke,"class","svelte-q1onv1"),E(Xe,"class","background svelte-q1onv1"),c(Xe.src,We="img/background-4-3.png")||E(Xe,"src","img/background-4-3.png"),E(Xe,"alt",""),E(Qe,"id","content4-3"),E(Qe,"class","svelte-q1onv1"),E(Ge,"id","section4-3"),E(Ge,"class","svelte-q1onv1"),E(et,"class","background svelte-q1onv1"),c(et.src,tt="img/background-5-1.png")||E(et,"src","img/background-5-1.png"),E(et,"alt",""),E(at,"id","content5-1"),E(at,"class","svelte-q1onv1"),E(Ke,"id","section5-1"),E(Ke,"class","svelte-q1onv1"),E(st,"class","background svelte-q1onv1"),c(st.src,lt="img/background-5-2.png")||E(st,"src","img/background-5-2.png"),E(st,"alt",""),E(dt,"id","content5-2"),E(dt,"class","svelte-q1onv1"),E(rt,"id","section5-2"),E(rt,"class","svelte-q1onv1"),E(gt,"class","background svelte-q1onv1"),c(gt.src,ft="img/background-5-3.png")||E(gt,"src","img/background-5-3.png"),E(gt,"alt",""),E($t,"id","content5-3"),E($t,"class","svelte-q1onv1"),E(mt,"id","section5-3"),E(mt,"class","svelte-q1onv1"),E(_t,"class","background svelte-q1onv1"),c(_t.src,At="img/background-6-1.png")||E(_t,"src","img/background-6-1.png"),E(_t,"alt",""),E(xt,"id","content6-1"),E(xt,"class","svelte-q1onv1"),E(yt,"id","section6-1"),E(yt,"class","svelte-q1onv1"),E(Tt,"class","background svelte-q1onv1"),c(Tt.src,Lt="img/background-6-2.png")||E(Tt,"src","img/background-6-2.png"),E(Tt,"alt",""),E(zt,"id","content6-2"),E(zt,"class","svelte-q1onv1"),E(Et,"id","section6-2"),E(Et,"class","svelte-q1onv1"),E(i,"class","svelte-q1onv1")},m(e,t){re(n,e,t),y(e,a,t),y(e,i,t),b(i,o),b(o,r),b(o,l),b(o,d),re(u,d,null),b(d,p),re(m,d,null),b(i,g),b(i,f),b(f,h),b(f,v),b(f,w),re(C,w,null),b(i,S),b(i,T),b(T,L),b(T,O),b(T,q),re(M,q,null),b(q,R),b(q,B),re(D,B,null),b(i,P),b(i,k),b(k,N),b(k,j),b(k,U),re(V,U,null),b(i,F),b(i,G),b(G,X),b(G,Y),b(G,Q),re(Z,Q,null),b(i,J),b(i,K),b(K,ne),b(K,ie),b(K,le),re(ce,le,null),b(i,de),b(i,ue),b(ue,pe),b(ue,ge),b(ue,fe),re(he,fe,null),b(i,$e),b(i,ve),b(ve,be),b(ve,_e),b(ve,Ae),re(we,Ae,null),b(i,xe),b(i,Ce),b(Ce,Se),b(Ce,Te),b(Ce,Le),re(Ie,Le,null),b(i,ze),b(i,Oe),b(Oe,qe),b(Oe,Re),b(Oe,Be),re(De,Be,null),b(i,Pe),b(i,ke),b(ke,Ne),b(ke,je),b(ke,Ue),re(Ve,Ue,null),b(i,Fe),b(i,Ge),b(Ge,Xe),b(Ge,Ye),b(Ge,Qe),re(Ze,Qe,null),b(i,Je),b(i,Ke),b(Ke,et),b(Ke,nt),b(Ke,at),re(it,at,null),b(i,ot),b(i,rt),b(rt,st),b(rt,ct),b(rt,dt),re(ut,dt,null),b(i,pt),b(i,mt),b(mt,gt),b(mt,ht),b(mt,$t),re(vt,$t,null),b(i,bt),b(i,yt),b(yt,_t),b(yt,wt),b(yt,xt),re(Ct,xt,null),b(i,St),b(i,Et),b(Et,Tt),b(Et,It),b(Et,zt),re(Ot,zt,null),b(i,qt),re(Mt,i,null),Rt=!0},p:e,i(e){Rt||(ee(n.$$.fragment,e),ee(u.$$.fragment,e),ee(m.$$.fragment,e),ee(C.$$.fragment,e),ee(M.$$.fragment,e),ee(D.$$.fragment,e),ee(V.$$.fragment,e),ee(Z.$$.fragment,e),ee(ce.$$.fragment,e),ee(he.$$.fragment,e),ee(we.$$.fragment,e),ee(Ie.$$.fragment,e),ee(De.$$.fragment,e),ee(Ve.$$.fragment,e),ee(Ze.$$.fragment,e),ee(it.$$.fragment,e),ee(ut.$$.fragment,e),ee(vt.$$.fragment,e),ee(Ct.$$.fragment,e),ee(Ot.$$.fragment,e),ee(Mt.$$.fragment,e),Rt=!0)},o(e){te(n.$$.fragment,e),te(u.$$.fragment,e),te(m.$$.fragment,e),te(C.$$.fragment,e),te(M.$$.fragment,e),te(D.$$.fragment,e),te(V.$$.fragment,e),te(Z.$$.fragment,e),te(ce.$$.fragment,e),te(he.$$.fragment,e),te(we.$$.fragment,e),te(Ie.$$.fragment,e),te(De.$$.fragment,e),te(Ve.$$.fragment,e),te(Ze.$$.fragment,e),te(it.$$.fragment,e),te(ut.$$.fragment,e),te(vt.$$.fragment,e),te(Ct.$$.fragment,e),te(Ot.$$.fragment,e),te(Mt.$$.fragment,e),Rt=!1},d(e){se(n,e),e&&_(a),e&&_(i),se(u),se(m),se(C),se(M),se(D),se(V),se(Z),se(ce),se(he),se(we),se(Ie),se(De),se(Ve),se(Ze),se(it),se(ut),se(vt),se(Ct),se(Ot),se(Mt)}}}new class extends de{constructor(e){super(),ce(this,e,null,pi,r,{})}}({target:document.body,props:{}})}();
=======
     */
    var MDCLinearProgressFoundation = /** @class */ (function (_super) {
        __extends(MDCLinearProgressFoundation, _super);
        function MDCLinearProgressFoundation(adapter) {
            var _this = _super.call(this, __assign(__assign({}, MDCLinearProgressFoundation.defaultAdapter), adapter)) || this;
            _this.observer = null;
            return _this;
        }
        Object.defineProperty(MDCLinearProgressFoundation, "cssClasses", {
            get: function () {
                return cssClasses;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCLinearProgressFoundation, "strings", {
            get: function () {
                return strings;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCLinearProgressFoundation, "defaultAdapter", {
            get: function () {
                return {
                    addClass: function () { return undefined; },
                    attachResizeObserver: function () { return null; },
                    forceLayout: function () { return undefined; },
                    getWidth: function () { return 0; },
                    hasClass: function () { return false; },
                    setBufferBarStyle: function () { return null; },
                    setPrimaryBarStyle: function () { return null; },
                    setStyle: function () { return undefined; },
                    removeAttribute: function () { return undefined; },
                    removeClass: function () { return undefined; },
                    setAttribute: function () { return undefined; },
                };
            },
            enumerable: false,
            configurable: true
        });
        MDCLinearProgressFoundation.prototype.init = function () {
            var _this = this;
            this.determinate = !this.adapter.hasClass(cssClasses.INDETERMINATE_CLASS);
            this.adapter.addClass(cssClasses.ANIMATION_READY_CLASS);
            this.progress = 0;
            this.buffer = 1;
            this.observer = this.adapter.attachResizeObserver(function (entries) {
                var e_1, _a;
                if (_this.determinate) {
                    return;
                }
                try {
                    for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                        var entry = entries_1_1.value;
                        if (entry.contentRect) {
                            _this.calculateAndSetDimensions(entry.contentRect.width);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
            if (!this.determinate && this.observer) {
                this.calculateAndSetDimensions(this.adapter.getWidth());
            }
        };
        MDCLinearProgressFoundation.prototype.setDeterminate = function (isDeterminate) {
            this.determinate = isDeterminate;
            if (this.determinate) {
                this.adapter.removeClass(cssClasses.INDETERMINATE_CLASS);
                this.adapter.setAttribute(strings.ARIA_VALUENOW, this.progress.toString());
                this.adapter.setAttribute(strings.ARIA_VALUEMAX, '1');
                this.adapter.setAttribute(strings.ARIA_VALUEMIN, '0');
                this.setPrimaryBarProgress(this.progress);
                this.setBufferBarProgress(this.buffer);
                return;
            }
            if (this.observer) {
                this.calculateAndSetDimensions(this.adapter.getWidth());
            }
            this.adapter.addClass(cssClasses.INDETERMINATE_CLASS);
            this.adapter.removeAttribute(strings.ARIA_VALUENOW);
            this.adapter.removeAttribute(strings.ARIA_VALUEMAX);
            this.adapter.removeAttribute(strings.ARIA_VALUEMIN);
            this.setPrimaryBarProgress(1);
            this.setBufferBarProgress(1);
        };
        MDCLinearProgressFoundation.prototype.isDeterminate = function () {
            return this.determinate;
        };
        MDCLinearProgressFoundation.prototype.setProgress = function (value) {
            this.progress = value;
            if (this.determinate) {
                this.setPrimaryBarProgress(value);
                this.adapter.setAttribute(strings.ARIA_VALUENOW, value.toString());
            }
        };
        MDCLinearProgressFoundation.prototype.getProgress = function () {
            return this.progress;
        };
        MDCLinearProgressFoundation.prototype.setBuffer = function (value) {
            this.buffer = value;
            if (this.determinate) {
                this.setBufferBarProgress(value);
            }
        };
        MDCLinearProgressFoundation.prototype.getBuffer = function () {
            return this.buffer;
        };
        MDCLinearProgressFoundation.prototype.open = function () {
            this.adapter.removeClass(cssClasses.CLOSED_CLASS);
            this.adapter.removeClass(cssClasses.CLOSED_ANIMATION_OFF_CLASS);
            this.adapter.removeAttribute(strings.ARIA_HIDDEN);
        };
        MDCLinearProgressFoundation.prototype.close = function () {
            this.adapter.addClass(cssClasses.CLOSED_CLASS);
            this.adapter.setAttribute(strings.ARIA_HIDDEN, 'true');
        };
        MDCLinearProgressFoundation.prototype.isClosed = function () {
            return this.adapter.hasClass(cssClasses.CLOSED_CLASS);
        };
        /**
         * Handles the transitionend event emitted after `close()` is called and the
         * opacity fades out. This is so that animations are removed only after the
         * progress indicator is completely hidden.
         */
        MDCLinearProgressFoundation.prototype.handleTransitionEnd = function () {
            if (this.adapter.hasClass(cssClasses.CLOSED_CLASS)) {
                this.adapter.addClass(cssClasses.CLOSED_ANIMATION_OFF_CLASS);
            }
        };
        MDCLinearProgressFoundation.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            if (this.observer) {
                this.observer.disconnect();
            }
        };
        MDCLinearProgressFoundation.prototype.restartAnimation = function () {
            this.adapter.removeClass(cssClasses.ANIMATION_READY_CLASS);
            this.adapter.forceLayout();
            this.adapter.addClass(cssClasses.ANIMATION_READY_CLASS);
        };
        MDCLinearProgressFoundation.prototype.setPrimaryBarProgress = function (progressValue) {
            var value = "scaleX(" + progressValue + ")";
            // Accessing `window` without a `typeof` check will throw on Node
            // environments.
            var transformProp = typeof window !== 'undefined' ?
                getCorrectPropertyName(window, 'transform') :
                'transform';
            this.adapter.setPrimaryBarStyle(transformProp, value);
        };
        MDCLinearProgressFoundation.prototype.setBufferBarProgress = function (progressValue) {
            var value = progressValue * 100 + "%";
            this.adapter.setBufferBarStyle(strings.FLEX_BASIS, value);
        };
        MDCLinearProgressFoundation.prototype.calculateAndSetDimensions = function (width) {
            var primaryHalf = width * animationDimensionPercentages.PRIMARY_HALF;
            var primaryFull = width * animationDimensionPercentages.PRIMARY_FULL;
            var secondaryQuarter = width * animationDimensionPercentages.SECONDARY_QUARTER;
            var secondaryHalf = width * animationDimensionPercentages.SECONDARY_HALF;
            var secondaryFull = width * animationDimensionPercentages.SECONDARY_FULL;
            this.adapter.setStyle('--mdc-linear-progress-primary-half', primaryHalf + "px");
            this.adapter.setStyle('--mdc-linear-progress-primary-half-neg', -primaryHalf + "px");
            this.adapter.setStyle('--mdc-linear-progress-primary-full', primaryFull + "px");
            this.adapter.setStyle('--mdc-linear-progress-primary-full-neg', -primaryFull + "px");
            this.adapter.setStyle('--mdc-linear-progress-secondary-quarter', secondaryQuarter + "px");
            this.adapter.setStyle('--mdc-linear-progress-secondary-quarter-neg', -secondaryQuarter + "px");
            this.adapter.setStyle('--mdc-linear-progress-secondary-half', secondaryHalf + "px");
            this.adapter.setStyle('--mdc-linear-progress-secondary-half-neg', -secondaryHalf + "px");
            this.adapter.setStyle('--mdc-linear-progress-secondary-full', secondaryFull + "px");
            this.adapter.setStyle('--mdc-linear-progress-secondary-full-neg', -secondaryFull + "px");
            // need to restart animation for custom props to apply to keyframes
            this.restartAnimation();
        };
        return MDCLinearProgressFoundation;
    }(MDCFoundation));

    /* node_modules\@smui\linear-progress\dist\LinearProgress.svelte generated by Svelte v3.46.6 */
    const file$s = "node_modules\\@smui\\linear-progress\\dist\\LinearProgress.svelte";

    function create_fragment$u(ctx) {
    	let div5;
    	let div2;
    	let div0;
    	let div0_style_value;
    	let t0;
    	let div1;
    	let t1;
    	let div3;
    	let span0;
    	let div3_style_value;
    	let t2;
    	let div4;
    	let span1;
    	let div5_class_value;
    	let div5_style_value;
    	let div5_aria_valuemin_value;
    	let div5_aria_valuemax_value;
    	let div5_aria_valuenow_value;
    	let useActions_action;
    	let mounted;
    	let dispose;

    	let div5_levels = [
    		{
    			class: div5_class_value = classMap({
    				[/*className*/ ctx[1]]: true,
    				'mdc-linear-progress': true,
    				'mdc-linear-progress--indeterminate': /*indeterminate*/ ctx[3],
    				'mdc-linear-progress--closed': /*closed*/ ctx[4],
    				'mdc-data-table__linear-progress': /*context*/ ctx[14] === 'data-table',
    				.../*internalClasses*/ ctx[8]
    			})
    		},
    		{
    			style: div5_style_value = Object.entries(/*internalStyles*/ ctx[10]).map(func_2).concat([/*style*/ ctx[2]]).join(' ')
    		},
    		{ role: "progressbar" },
    		{
    			"aria-valuemin": div5_aria_valuemin_value = 0
    		},
    		{
    			"aria-valuemax": div5_aria_valuemax_value = 1
    		},
    		{
    			"aria-valuenow": div5_aria_valuenow_value = /*indeterminate*/ ctx[3]
    			? undefined
    			: /*progress*/ ctx[5]
    		},
    		/*internalAttrs*/ ctx[9],
    		/*$$restProps*/ ctx[16]
    	];

    	let div5_data = {};

    	for (let i = 0; i < div5_levels.length; i += 1) {
    		div5_data = assign(div5_data, div5_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			div5 = element("div");
    			div2 = element("div");
    			div0 = element("div");
    			t0 = space();
    			div1 = element("div");
    			t1 = space();
    			div3 = element("div");
    			span0 = element("span");
    			t2 = space();
    			div4 = element("div");
    			span1 = element("span");
    			attr_dev(div0, "class", "mdc-linear-progress__buffer-bar");
    			attr_dev(div0, "style", div0_style_value = Object.entries(/*bufferBarStyles*/ ctx[11]).map(func$3).join(' '));
    			add_location(div0, file$s, 25, 4, 744);
    			attr_dev(div1, "class", "mdc-linear-progress__buffer-dots");
    			add_location(div1, file$s, 31, 4, 925);
    			attr_dev(div2, "class", "mdc-linear-progress__buffer");
    			add_location(div2, file$s, 24, 2, 698);
    			attr_dev(span0, "class", "mdc-linear-progress__bar-inner");
    			add_location(span0, file$s, 39, 4, 1182);
    			attr_dev(div3, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar");
    			attr_dev(div3, "style", div3_style_value = Object.entries(/*primaryBarStyles*/ ctx[12]).map(func_1).join(' '));
    			add_location(div3, file$s, 33, 2, 985);
    			attr_dev(span1, "class", "mdc-linear-progress__bar-inner");
    			add_location(span1, file$s, 42, 4, 1319);
    			attr_dev(div4, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar");
    			add_location(div4, file$s, 41, 2, 1241);
    			set_attributes(div5, div5_data);
    			add_location(div5, file$s, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div5, anchor);
    			append_dev(div5, div2);
    			append_dev(div2, div0);
    			append_dev(div2, t0);
    			append_dev(div2, div1);
    			append_dev(div5, t1);
    			append_dev(div5, div3);
    			append_dev(div3, span0);
    			append_dev(div5, t2);
    			append_dev(div5, div4);
    			append_dev(div4, span1);
    			/*div5_binding*/ ctx[19](div5);

    			if (!mounted) {
    				dispose = [
    					action_destroyer(useActions_action = useActions.call(null, div5, /*use*/ ctx[0])),
    					action_destroyer(/*forwardEvents*/ ctx[13].call(null, div5)),
    					listen_dev(div5, "transitionend", /*transitionend_handler*/ ctx[20], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*bufferBarStyles*/ 2048 && div0_style_value !== (div0_style_value = Object.entries(/*bufferBarStyles*/ ctx[11]).map(func$3).join(' '))) {
    				attr_dev(div0, "style", div0_style_value);
    			}

    			if (dirty & /*primaryBarStyles*/ 4096 && div3_style_value !== (div3_style_value = Object.entries(/*primaryBarStyles*/ ctx[12]).map(func_1).join(' '))) {
    				attr_dev(div3, "style", div3_style_value);
    			}

    			set_attributes(div5, div5_data = get_spread_update(div5_levels, [
    				dirty & /*className, indeterminate, closed, internalClasses*/ 282 && div5_class_value !== (div5_class_value = classMap({
    					[/*className*/ ctx[1]]: true,
    					'mdc-linear-progress': true,
    					'mdc-linear-progress--indeterminate': /*indeterminate*/ ctx[3],
    					'mdc-linear-progress--closed': /*closed*/ ctx[4],
    					'mdc-data-table__linear-progress': /*context*/ ctx[14] === 'data-table',
    					.../*internalClasses*/ ctx[8]
    				})) && { class: div5_class_value },
    				dirty & /*internalStyles, style*/ 1028 && div5_style_value !== (div5_style_value = Object.entries(/*internalStyles*/ ctx[10]).map(func_2).concat([/*style*/ ctx[2]]).join(' ')) && { style: div5_style_value },
    				{ role: "progressbar" },
    				{
    					"aria-valuemin": div5_aria_valuemin_value
    				},
    				{
    					"aria-valuemax": div5_aria_valuemax_value
    				},
    				dirty & /*indeterminate, progress*/ 40 && div5_aria_valuenow_value !== (div5_aria_valuenow_value = /*indeterminate*/ ctx[3]
    				? undefined
    				: /*progress*/ ctx[5]) && {
    					"aria-valuenow": div5_aria_valuenow_value
    				},
    				dirty & /*internalAttrs*/ 512 && /*internalAttrs*/ ctx[9],
    				dirty & /*$$restProps*/ 65536 && /*$$restProps*/ ctx[16]
    			]));

    			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div5);
    			/*div5_binding*/ ctx[19](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$u.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func$3 = ([name, value]) => `${name}: ${value};`;
    const func_1 = ([name, value]) => `${name}: ${value};`;
    const func_2 = ([name, value]) => `${name}: ${value};`;

    function instance_1($$self, $$props, $$invalidate) {
    	const omit_props_names = [
    		"use","class","style","indeterminate","closed","progress","buffer","getElement"
    	];

    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let $closedStore;
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('LinearProgress', slots, []);
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let { use = [] } = $$props;
    	let { class: className = '' } = $$props;
    	let { style = '' } = $$props;
    	let { indeterminate = false } = $$props;
    	let { closed = false } = $$props;
    	let { progress = 0 } = $$props;
    	let { buffer = undefined } = $$props;
    	let element;
    	let instance;
    	let internalClasses = {};
    	let internalAttrs = {};
    	let internalStyles = {};
    	let bufferBarStyles = {};
    	let primaryBarStyles = {};
    	let context = getContext('SMUI:linear-progress:context');
    	let closedStore = getContext('SMUI:linear-progress:closed');
    	validate_store(closedStore, 'closedStore');
    	component_subscribe($$self, closedStore, value => $$invalidate(21, $closedStore = value));

    	onMount(() => {
    		$$invalidate(6, instance = new MDCLinearProgressFoundation({
    				addClass,
    				forceLayout: () => {
    					getElement().getBoundingClientRect();
    				},
    				setBufferBarStyle: addBufferBarStyle,
    				setPrimaryBarStyle: addPrimaryBarStyle,
    				hasClass,
    				removeAttribute: removeAttr,
    				removeClass,
    				setAttribute: addAttr,
    				setStyle: addStyle,
    				attachResizeObserver: callback => {
    					const RO = window.ResizeObserver;

    					if (RO) {
    						const ro = new RO(callback);
    						ro.observe(getElement());
    						return ro;
    					}

    					return null;
    				},
    				getWidth: () => getElement().offsetWidth
    			}));

    		instance.init();

    		return () => {
    			instance.destroy();
    		};
    	});

    	function hasClass(className) {
    		return className in internalClasses
    		? internalClasses[className]
    		: getElement().classList.contains(className);
    	}

    	function addClass(className) {
    		if (!internalClasses[className]) {
    			$$invalidate(8, internalClasses[className] = true, internalClasses);
    		}
    	}

    	function removeClass(className) {
    		if (!(className in internalClasses) || internalClasses[className]) {
    			$$invalidate(8, internalClasses[className] = false, internalClasses);
    		}
    	}

    	function addAttr(name, value) {
    		if (internalAttrs[name] !== value) {
    			$$invalidate(9, internalAttrs[name] = value, internalAttrs);
    		}
    	}

    	function removeAttr(name) {
    		if (!(name in internalAttrs) || internalAttrs[name] != null) {
    			$$invalidate(9, internalAttrs[name] = undefined, internalAttrs);
    		}
    	}

    	function addStyle(name, value) {
    		if (internalStyles[name] != value) {
    			if (value === '' || value == null) {
    				delete internalStyles[name];
    				$$invalidate(10, internalStyles);
    			} else {
    				$$invalidate(10, internalStyles[name] = value, internalStyles);
    			}
    		}
    	}

    	function addBufferBarStyle(name, value) {
    		if (bufferBarStyles[name] != value) {
    			if (value === '' || value == null) {
    				delete bufferBarStyles[name];
    				$$invalidate(11, bufferBarStyles);
    			} else {
    				$$invalidate(11, bufferBarStyles[name] = value, bufferBarStyles);
    			}
    		}
    	}

    	function addPrimaryBarStyle(name, value) {
    		if (primaryBarStyles[name] != value) {
    			if (value === '' || value == null) {
    				delete primaryBarStyles[name];
    				$$invalidate(12, primaryBarStyles);
    			} else {
    				$$invalidate(12, primaryBarStyles[name] = value, primaryBarStyles);
    			}
    		}
    	}

    	function getElement() {
    		return element;
    	}

    	function div5_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(7, element);
    		});
    	}

    	const transitionend_handler = () => instance && instance.handleTransitionEnd();

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(16, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
    		if ('style' in $$new_props) $$invalidate(2, style = $$new_props.style);
    		if ('indeterminate' in $$new_props) $$invalidate(3, indeterminate = $$new_props.indeterminate);
    		if ('closed' in $$new_props) $$invalidate(4, closed = $$new_props.closed);
    		if ('progress' in $$new_props) $$invalidate(5, progress = $$new_props.progress);
    		if ('buffer' in $$new_props) $$invalidate(17, buffer = $$new_props.buffer);
    	};

    	$$self.$capture_state = () => ({
    		MDCLinearProgressFoundation,
    		onMount,
    		getContext,
    		get_current_component,
    		forwardEventsBuilder,
    		classMap,
    		useActions,
    		forwardEvents,
    		use,
    		className,
    		style,
    		indeterminate,
    		closed,
    		progress,
    		buffer,
    		element,
    		instance,
    		internalClasses,
    		internalAttrs,
    		internalStyles,
    		bufferBarStyles,
    		primaryBarStyles,
    		context,
    		closedStore,
    		hasClass,
    		addClass,
    		removeClass,
    		addAttr,
    		removeAttr,
    		addStyle,
    		addBufferBarStyle,
    		addPrimaryBarStyle,
    		getElement,
    		$closedStore
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('className' in $$props) $$invalidate(1, className = $$new_props.className);
    		if ('style' in $$props) $$invalidate(2, style = $$new_props.style);
    		if ('indeterminate' in $$props) $$invalidate(3, indeterminate = $$new_props.indeterminate);
    		if ('closed' in $$props) $$invalidate(4, closed = $$new_props.closed);
    		if ('progress' in $$props) $$invalidate(5, progress = $$new_props.progress);
    		if ('buffer' in $$props) $$invalidate(17, buffer = $$new_props.buffer);
    		if ('element' in $$props) $$invalidate(7, element = $$new_props.element);
    		if ('instance' in $$props) $$invalidate(6, instance = $$new_props.instance);
    		if ('internalClasses' in $$props) $$invalidate(8, internalClasses = $$new_props.internalClasses);
    		if ('internalAttrs' in $$props) $$invalidate(9, internalAttrs = $$new_props.internalAttrs);
    		if ('internalStyles' in $$props) $$invalidate(10, internalStyles = $$new_props.internalStyles);
    		if ('bufferBarStyles' in $$props) $$invalidate(11, bufferBarStyles = $$new_props.bufferBarStyles);
    		if ('primaryBarStyles' in $$props) $$invalidate(12, primaryBarStyles = $$new_props.primaryBarStyles);
    		if ('context' in $$props) $$invalidate(14, context = $$new_props.context);
    		if ('closedStore' in $$props) $$invalidate(15, closedStore = $$new_props.closedStore);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*closed*/ 16) {
    			if (closedStore) {
    				set_store_value(closedStore, $closedStore = closed, $closedStore);
    			}
    		}

    		if ($$self.$$.dirty & /*instance, indeterminate*/ 72) {
    			if (instance && instance.isDeterminate() !== !indeterminate) {
    				instance.setDeterminate(!indeterminate);
    			}
    		}

    		if ($$self.$$.dirty & /*instance, progress*/ 96) {
    			if (instance && instance.getProgress() !== progress) {
    				instance.setProgress(progress);
    			}
    		}

    		if ($$self.$$.dirty & /*instance, buffer*/ 131136) {
    			if (instance) {
    				if (buffer == null) {
    					instance.setBuffer(1);
    				} else {
    					instance.setBuffer(buffer);
    				}
    			}
    		}

    		if ($$self.$$.dirty & /*instance, closed*/ 80) {
    			if (instance) {
    				if (closed) {
    					instance.close();
    				} else {
    					instance.open();
    				}
    			}
    		}
    	};

    	return [
    		use,
    		className,
    		style,
    		indeterminate,
    		closed,
    		progress,
    		instance,
    		element,
    		internalClasses,
    		internalAttrs,
    		internalStyles,
    		bufferBarStyles,
    		primaryBarStyles,
    		forwardEvents,
    		context,
    		closedStore,
    		$$restProps,
    		buffer,
    		getElement,
    		div5_binding,
    		transitionend_handler
    	];
    }

    class LinearProgress extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance_1, create_fragment$u, safe_not_equal, {
    			use: 0,
    			class: 1,
    			style: 2,
    			indeterminate: 3,
    			closed: 4,
    			progress: 5,
    			buffer: 17,
    			getElement: 18
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "LinearProgress",
    			options,
    			id: create_fragment$u.name
    		});
    	}

    	get use() {
    		throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get class() {
    		throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set class(value) {
    		throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get indeterminate() {
    		throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set indeterminate(value) {
    		throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get closed() {
    		throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set closed(value) {
    		throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get progress() {
    		throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set progress(value) {
    		throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get buffer() {
    		throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set buffer(value) {
    		throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[18];
    	}

    	set getElement(value) {
    		throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Components\TopAppBar.svelte generated by Svelte v3.46.6 */

    // (22:80) <Link href="#section1-2">
    function create_default_slot_13(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("L'Amianto");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_13.name,
    		type: "slot",
    		source: "(22:80) <Link href=\\\"#section1-2\\\">",
    		ctx
    	});

    	return block;
    }

    // (22:4) <Section class="mdc-typography--headline6" style="justify-content: center;">
    function create_default_slot_12(ctx) {
    	let link;
    	let current;

    	link = new Link({
    			props: {
    				href: "#section1-2",
    				$$slots: { default: [create_default_slot_13] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(link.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(link, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const link_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				link_changes.$$scope = { dirty, ctx };
    			}

    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(link, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_12.name,
    		type: "slot",
    		source: "(22:4) <Section class=\\\"mdc-typography--headline6\\\" style=\\\"justify-content: center;\\\">",
    		ctx
    	});

    	return block;
    }

    // (23:80) <Link href="#content2-1">
    function create_default_slot_11(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Minaçu");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_11.name,
    		type: "slot",
    		source: "(23:80) <Link href=\\\"#content2-1\\\">",
    		ctx
    	});

    	return block;
    }

    // (23:4) <Section class="mdc-typography--headline6" style="justify-content: center;">
    function create_default_slot_10(ctx) {
    	let link;
    	let current;

    	link = new Link({
    			props: {
    				href: "#content2-1",
    				$$slots: { default: [create_default_slot_11] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(link.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(link, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const link_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				link_changes.$$scope = { dirty, ctx };
    			}

    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(link, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_10.name,
    		type: "slot",
    		source: "(23:4) <Section class=\\\"mdc-typography--headline6\\\" style=\\\"justify-content: center;\\\">",
    		ctx
    	});

    	return block;
    }

    // (24:80) <Link href="#content3-1">
    function create_default_slot_9(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Balangero");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_9.name,
    		type: "slot",
    		source: "(24:80) <Link href=\\\"#content3-1\\\">",
    		ctx
    	});

    	return block;
    }

    // (24:4) <Section class="mdc-typography--headline6" style="justify-content: center;">
    function create_default_slot_8(ctx) {
    	let link;
    	let current;

    	link = new Link({
    			props: {
    				href: "#content3-1",
    				$$slots: { default: [create_default_slot_9] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(link.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(link, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const link_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				link_changes.$$scope = { dirty, ctx };
    			}

    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(link, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8.name,
    		type: "slot",
    		source: "(24:4) <Section class=\\\"mdc-typography--headline6\\\" style=\\\"justify-content: center;\\\">",
    		ctx
    	});

    	return block;
    }

    // (25:80) <Link href="#content4-1">
    function create_default_slot_7(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Libby");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7.name,
    		type: "slot",
    		source: "(25:80) <Link href=\\\"#content4-1\\\">",
    		ctx
    	});

    	return block;
    }

    // (25:4) <Section class="mdc-typography--headline6" style="justify-content: center;">
    function create_default_slot_6$1(ctx) {
    	let link;
    	let current;

    	link = new Link({
    			props: {
    				href: "#content4-1",
    				$$slots: { default: [create_default_slot_7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(link.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(link, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const link_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				link_changes.$$scope = { dirty, ctx };
    			}

    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(link, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6$1.name,
    		type: "slot",
    		source: "(25:4) <Section class=\\\"mdc-typography--headline6\\\" style=\\\"justify-content: center;\\\">",
    		ctx
    	});

    	return block;
    }

    // (26:80) <Link href="#content5-1">
    function create_default_slot_5$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Asbest");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$1.name,
    		type: "slot",
    		source: "(26:80) <Link href=\\\"#content5-1\\\">",
    		ctx
    	});

    	return block;
    }

    // (26:4) <Section class="mdc-typography--headline6" style="justify-content: center;">
    function create_default_slot_4$1(ctx) {
    	let link;
    	let current;

    	link = new Link({
    			props: {
    				href: "#content5-1",
    				$$slots: { default: [create_default_slot_5$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(link.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(link, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const link_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				link_changes.$$scope = { dirty, ctx };
    			}

    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(link, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$1.name,
    		type: "slot",
    		source: "(26:4) <Section class=\\\"mdc-typography--headline6\\\" style=\\\"justify-content: center;\\\">",
    		ctx
    	});

    	return block;
    }

    // (27:80) <Link href="#section6-1">
    function create_default_slot_3$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Il futuro");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$1.name,
    		type: "slot",
    		source: "(27:80) <Link href=\\\"#section6-1\\\">",
    		ctx
    	});

    	return block;
    }

    // (27:4) <Section class="mdc-typography--headline6" style="justify-content: center;">
    function create_default_slot_2$3(ctx) {
    	let link;
    	let current;

    	link = new Link({
    			props: {
    				href: "#section6-1",
    				$$slots: { default: [create_default_slot_3$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(link.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(link, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const link_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				link_changes.$$scope = { dirty, ctx };
    			}

    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(link, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$3.name,
    		type: "slot",
    		source: "(27:4) <Section class=\\\"mdc-typography--headline6\\\" style=\\\"justify-content: center;\\\">",
    		ctx
    	});

    	return block;
    }

    // (21:2) <Row id="row" class="mdc-elevation--z4" style="background-color: white; ">
    function create_default_slot_1$5(ctx) {
    	let section0;
    	let t0;
    	let section1;
    	let t1;
    	let section2;
    	let t2;
    	let section3;
    	let t3;
    	let section4;
    	let t4;
    	let section5;
    	let current;

    	section0 = new Section({
    			props: {
    				class: "mdc-typography--headline6",
    				style: "justify-content: center;",
    				$$slots: { default: [create_default_slot_12] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	section1 = new Section({
    			props: {
    				class: "mdc-typography--headline6",
    				style: "justify-content: center;",
    				$$slots: { default: [create_default_slot_10] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	section2 = new Section({
    			props: {
    				class: "mdc-typography--headline6",
    				style: "justify-content: center;",
    				$$slots: { default: [create_default_slot_8] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	section3 = new Section({
    			props: {
    				class: "mdc-typography--headline6",
    				style: "justify-content: center;",
    				$$slots: { default: [create_default_slot_6$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	section4 = new Section({
    			props: {
    				class: "mdc-typography--headline6",
    				style: "justify-content: center;",
    				$$slots: { default: [create_default_slot_4$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	section5 = new Section({
    			props: {
    				class: "mdc-typography--headline6",
    				style: "justify-content: center;",
    				$$slots: { default: [create_default_slot_2$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(section0.$$.fragment);
    			t0 = space();
    			create_component(section1.$$.fragment);
    			t1 = space();
    			create_component(section2.$$.fragment);
    			t2 = space();
    			create_component(section3.$$.fragment);
    			t3 = space();
    			create_component(section4.$$.fragment);
    			t4 = space();
    			create_component(section5.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(section0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(section1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(section2, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(section3, target, anchor);
    			insert_dev(target, t3, anchor);
    			mount_component(section4, target, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(section5, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const section0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				section0_changes.$$scope = { dirty, ctx };
    			}

    			section0.$set(section0_changes);
    			const section1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				section1_changes.$$scope = { dirty, ctx };
    			}

    			section1.$set(section1_changes);
    			const section2_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				section2_changes.$$scope = { dirty, ctx };
    			}

    			section2.$set(section2_changes);
    			const section3_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				section3_changes.$$scope = { dirty, ctx };
    			}

    			section3.$set(section3_changes);
    			const section4_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				section4_changes.$$scope = { dirty, ctx };
    			}

    			section4.$set(section4_changes);
    			const section5_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				section5_changes.$$scope = { dirty, ctx };
    			}

    			section5.$set(section5_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(section0.$$.fragment, local);
    			transition_in(section1.$$.fragment, local);
    			transition_in(section2.$$.fragment, local);
    			transition_in(section3.$$.fragment, local);
    			transition_in(section4.$$.fragment, local);
    			transition_in(section5.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(section0.$$.fragment, local);
    			transition_out(section1.$$.fragment, local);
    			transition_out(section2.$$.fragment, local);
    			transition_out(section3.$$.fragment, local);
    			transition_out(section4.$$.fragment, local);
    			transition_out(section5.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(section0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(section1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(section2, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(section3, detaching);
    			if (detaching) detach_dev(t3);
    			destroy_component(section4, detaching);
    			if (detaching) detach_dev(t4);
    			destroy_component(section5, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$5.name,
    		type: "slot",
    		source: "(21:2) <Row id=\\\"row\\\" class=\\\"mdc-elevation--z4\\\" style=\\\"background-color: white; \\\">",
    		ctx
    	});

    	return block;
    }

    // (20:0) <TopAppBar variant="fixed" class="transparent">
    function create_default_slot$7(ctx) {
    	let row;
    	let t;
    	let linearprogress;
    	let current;

    	row = new Row({
    			props: {
    				id: "row",
    				class: "mdc-elevation--z4",
    				style: "background-color: white; ",
    				$$slots: { default: [create_default_slot_1$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	linearprogress = new LinearProgress({
    			props: { progress: /*progress*/ ctx[0] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(row.$$.fragment);
    			t = space();
    			create_component(linearprogress.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(row, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(linearprogress, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const row_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				row_changes.$$scope = { dirty, ctx };
    			}

    			row.$set(row_changes);
    			const linearprogress_changes = {};
    			if (dirty & /*progress*/ 1) linearprogress_changes.progress = /*progress*/ ctx[0];
    			linearprogress.$set(linearprogress_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(row.$$.fragment, local);
    			transition_in(linearprogress.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(row.$$.fragment, local);
    			transition_out(linearprogress.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(row, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(linearprogress, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$7.name,
    		type: "slot",
    		source: "(20:0) <TopAppBar variant=\\\"fixed\\\" class=\\\"transparent\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$t(ctx) {
    	let topappbar;
    	let current;

    	topappbar = new TopAppBar({
    			props: {
    				variant: "fixed",
    				class: "transparent",
    				$$slots: { default: [create_default_slot$7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(topappbar.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(topappbar, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const topappbar_changes = {};

    			if (dirty & /*$$scope, progress*/ 3) {
    				topappbar_changes.$$scope = { dirty, ctx };
    			}

    			topappbar.$set(topappbar_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(topappbar.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(topappbar.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(topappbar, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$t.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$t($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('TopAppBar', slots, []);
    	let progress = 0;

    	onMount(() => {
    		$$invalidate(0, progress = 0);
    	});

    	document.addEventListener("scroll", function () {
    		$$invalidate(0, progress = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
    	});

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<TopAppBar> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		TopAppBar,
    		Row,
    		Section,
    		Title: Title$1,
    		Image,
    		Link,
    		onMount,
    		LinearProgress,
    		progress
    	});

    	$$self.$inject_state = $$props => {
    		if ('progress' in $$props) $$invalidate(0, progress = $$props.progress);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [progress];
    }

    class TopAppBar_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$t, create_fragment$t, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "TopAppBar_1",
    			options,
    			id: create_fragment$t.name
    		});
    	}
    }

    const { applyPassive } = events;
    const { matches } = ponyfill;
    function Ripple(node, { ripple = true, surface = false, unbounded = false, disabled = false, color, active, rippleElement, eventTarget, activeTarget, addClass = (className) => node.classList.add(className), removeClass = (className) => node.classList.remove(className), addStyle = (name, value) => node.style.setProperty(name, value), initPromise = Promise.resolve(), } = {}) {
        let instance;
        let addLayoutListener = getContext('SMUI:addLayoutListener');
        let removeLayoutListener;
        let oldActive = active;
        let oldEventTarget = eventTarget;
        let oldActiveTarget = activeTarget;
        function handleProps() {
            if (surface) {
                addClass('mdc-ripple-surface');
                if (color === 'primary') {
                    addClass('smui-ripple-surface--primary');
                    removeClass('smui-ripple-surface--secondary');
                }
                else if (color === 'secondary') {
                    removeClass('smui-ripple-surface--primary');
                    addClass('smui-ripple-surface--secondary');
                }
                else {
                    removeClass('smui-ripple-surface--primary');
                    removeClass('smui-ripple-surface--secondary');
                }
            }
            else {
                removeClass('mdc-ripple-surface');
                removeClass('smui-ripple-surface--primary');
                removeClass('smui-ripple-surface--secondary');
            }
            // Handle activation first.
            if (instance && oldActive !== active) {
                oldActive = active;
                if (active) {
                    instance.activate();
                }
                else if (active === false) {
                    instance.deactivate();
                }
            }
            // Then create/destroy an instance.
            if (ripple && !instance) {
                instance = new MDCRippleFoundation({
                    addClass,
                    browserSupportsCssVars: () => supportsCssVariables(window),
                    computeBoundingRect: () => (rippleElement || node).getBoundingClientRect(),
                    containsEventTarget: (target) => node.contains(target),
                    deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()),
                    deregisterInteractionHandler: (evtType, handler) => (eventTarget || node).removeEventListener(evtType, handler, applyPassive()),
                    deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
                    getWindowPageOffset: () => ({
                        x: window.pageXOffset,
                        y: window.pageYOffset,
                    }),
                    isSurfaceActive: () => active == null ? matches(activeTarget || node, ':active') : active,
                    isSurfaceDisabled: () => !!disabled,
                    isUnbounded: () => !!unbounded,
                    registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
                    registerInteractionHandler: (evtType, handler) => (eventTarget || node).addEventListener(evtType, handler, applyPassive()),
                    registerResizeHandler: (handler) => window.addEventListener('resize', handler),
                    removeClass,
                    updateCssVariable: addStyle,
                });
                initPromise.then(() => {
                    if (instance) {
                        instance.init();
                        instance.setUnbounded(unbounded);
                    }
                });
            }
            else if (instance && !ripple) {
                initPromise.then(() => {
                    if (instance) {
                        instance.destroy();
                        instance = undefined;
                    }
                });
            }
            // Now handle event/active targets
            if (instance &&
                (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)) {
                oldEventTarget = eventTarget;
                oldActiveTarget = activeTarget;
                instance.destroy();
                requestAnimationFrame(() => {
                    if (instance) {
                        instance.init();
                        instance.setUnbounded(unbounded);
                    }
                });
            }
            if (!ripple && unbounded) {
                addClass('mdc-ripple-upgraded--unbounded');
            }
        }
        handleProps();
        if (addLayoutListener) {
            removeLayoutListener = addLayoutListener(layout);
        }
        function layout() {
            if (instance) {
                instance.layout();
            }
        }
        return {
            update(props) {
                ({
                    ripple,
                    surface,
                    unbounded,
                    disabled,
                    color,
                    active,
                    rippleElement,
                    eventTarget,
                    activeTarget,
                    addClass,
                    removeClass,
                    addStyle,
                    initPromise,
                } = Object.assign({ ripple: true, surface: false, unbounded: false, disabled: false, color: undefined, active: undefined, rippleElement: undefined, eventTarget: undefined, activeTarget: undefined, addClass: (className) => node.classList.add(className), removeClass: (className) => node.classList.remove(className), addStyle: (name, value) => node.style.setProperty(name, value), initPromise: Promise.resolve() }, props));
                handleProps();
            },
            destroy() {
                if (instance) {
                    instance.destroy();
                    instance = undefined;
                    removeClass('mdc-ripple-surface');
                    removeClass('smui-ripple-surface--primary');
                    removeClass('smui-ripple-surface--secondary');
                }
                if (removeLayoutListener) {
                    removeLayoutListener();
                }
            },
        };
    }

    /* node_modules\@smui\fab\dist\Fab.svelte generated by Svelte v3.46.6 */
    const file$r = "node_modules\\@smui\\fab\\dist\\Fab.svelte";

    // (37:10) {#if touch}
    function create_if_block$2(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			attr_dev(div, "class", "mdc-fab__touch");
    			add_location(div, file$r, 36, 21, 783);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$2.name,
    		type: "if",
    		source: "(37:10) {#if touch}",
    		ctx
    	});

    	return block;
    }

    // (1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: false,         color,         disabled: !!$$restProps.disabled,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-fab': true,     'mdc-fab--mini': mini,     'mdc-fab--exited': exited,     'mdc-fab--extended': extended,     'smui-fab--color-primary': color === 'primary',     'mdc-fab--touch': touch,     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   {href}   {...$$restProps}   >
    function create_default_slot$6(ctx) {
    	let div;
    	let t;
    	let if_block_anchor;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[20].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[22], null);
    	let if_block = /*touch*/ ctx[8] && create_if_block$2(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			t = space();
    			if (default_slot) default_slot.c();
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    			attr_dev(div, "class", "mdc-fab__ripple");
    			add_location(div, file$r, 35, 3, 730);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			insert_dev(target, t, anchor);

    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 4194304)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[22],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[22])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[22], dirty, null),
    						null
    					);
    				}
    			}

    			if (/*touch*/ ctx[8]) {
    				if (if_block) ; else {
    					if_block = create_if_block$2(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (detaching) detach_dev(t);
    			if (default_slot) default_slot.d(detaching);
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$6.name,
    		type: "slot",
    		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: false,         color,         disabled: !!$$restProps.disabled,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-fab': true,     'mdc-fab--mini': mini,     'mdc-fab--exited': exited,     'mdc-fab--extended': extended,     'smui-fab--color-primary': color === 'primary',     'mdc-fab--touch': touch,     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   {href}   {...$$restProps}   >",
    		ctx
    	});

    	return block;
    }

    function create_fragment$s(ctx) {
    	let switch_instance;
    	let switch_instance_anchor;
    	let current;

    	const switch_instance_spread_levels = [
    		{
    			use: [
    				[
    					Ripple,
    					{
    						ripple: /*ripple*/ ctx[3],
    						unbounded: false,
    						color: /*color*/ ctx[4],
    						disabled: !!/*$$restProps*/ ctx[18].disabled,
    						addClass: /*addClass*/ ctx[15],
    						removeClass: /*removeClass*/ ctx[16],
    						addStyle: /*addStyle*/ ctx[17]
    					}
    				],
    				/*forwardEvents*/ ctx[14],
    				.../*use*/ ctx[0]
    			]
    		},
    		{
    			class: classMap({
    				[/*className*/ ctx[1]]: true,
    				'mdc-fab': true,
    				'mdc-fab--mini': /*mini*/ ctx[5],
    				'mdc-fab--exited': /*exited*/ ctx[6],
    				'mdc-fab--extended': /*extended*/ ctx[7],
    				'smui-fab--color-primary': /*color*/ ctx[4] === 'primary',
    				'mdc-fab--touch': /*touch*/ ctx[8],
    				.../*internalClasses*/ ctx[12]
    			})
    		},
    		{
    			style: Object.entries(/*internalStyles*/ ctx[13]).map(func$2).concat([/*style*/ ctx[2]]).join(' ')
    		},
    		{ href: /*href*/ ctx[9] },
    		/*$$restProps*/ ctx[18]
    	];

    	var switch_value = /*component*/ ctx[10];

    	function switch_props(ctx) {
    		let switch_instance_props = {
    			$$slots: { default: [create_default_slot$6] },
    			$$scope: { ctx }
    		};

    		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
    			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    		}

    		return {
    			props: switch_instance_props,
    			$$inline: true
    		};
    	}

    	if (switch_value) {
    		switch_instance = new switch_value(switch_props(ctx));
    		/*switch_instance_binding*/ ctx[21](switch_instance);
    	}

    	const block = {
    		c: function create() {
    			if (switch_instance) create_component(switch_instance.$$.fragment);
    			switch_instance_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (switch_instance) {
    				mount_component(switch_instance, target, anchor);
    			}

    			insert_dev(target, switch_instance_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const switch_instance_changes = (dirty & /*Ripple, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, classMap, className, mini, exited, extended, touch, internalClasses, Object, internalStyles, style, href*/ 521215)
    			? get_spread_update(switch_instance_spread_levels, [
    					dirty & /*Ripple, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/ 507929 && {
    						use: [
    							[
    								Ripple,
    								{
    									ripple: /*ripple*/ ctx[3],
    									unbounded: false,
    									color: /*color*/ ctx[4],
    									disabled: !!/*$$restProps*/ ctx[18].disabled,
    									addClass: /*addClass*/ ctx[15],
    									removeClass: /*removeClass*/ ctx[16],
    									addStyle: /*addStyle*/ ctx[17]
    								}
    							],
    							/*forwardEvents*/ ctx[14],
    							.../*use*/ ctx[0]
    						]
    					},
    					dirty & /*classMap, className, mini, exited, extended, color, touch, internalClasses*/ 4594 && {
    						class: classMap({
    							[/*className*/ ctx[1]]: true,
    							'mdc-fab': true,
    							'mdc-fab--mini': /*mini*/ ctx[5],
    							'mdc-fab--exited': /*exited*/ ctx[6],
    							'mdc-fab--extended': /*extended*/ ctx[7],
    							'smui-fab--color-primary': /*color*/ ctx[4] === 'primary',
    							'mdc-fab--touch': /*touch*/ ctx[8],
    							.../*internalClasses*/ ctx[12]
    						})
    					},
    					dirty & /*Object, internalStyles, style*/ 8196 && {
    						style: Object.entries(/*internalStyles*/ ctx[13]).map(func$2).concat([/*style*/ ctx[2]]).join(' ')
    					},
    					dirty & /*href*/ 512 && { href: /*href*/ ctx[9] },
    					dirty & /*$$restProps*/ 262144 && get_spread_object(/*$$restProps*/ ctx[18])
    				])
    			: {};

    			if (dirty & /*$$scope, touch*/ 4194560) {
    				switch_instance_changes.$$scope = { dirty, ctx };
    			}

    			if (switch_value !== (switch_value = /*component*/ ctx[10])) {
    				if (switch_instance) {
    					group_outros();
    					const old_component = switch_instance;

    					transition_out(old_component.$$.fragment, 1, 0, () => {
    						destroy_component(old_component, 1);
    					});

    					check_outros();
    				}

    				if (switch_value) {
    					switch_instance = new switch_value(switch_props(ctx));
    					/*switch_instance_binding*/ ctx[21](switch_instance);
    					create_component(switch_instance.$$.fragment);
    					transition_in(switch_instance.$$.fragment, 1);
    					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
    				} else {
    					switch_instance = null;
    				}
    			} else if (switch_value) {
    				switch_instance.$set(switch_instance_changes);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			/*switch_instance_binding*/ ctx[21](null);
    			if (detaching) detach_dev(switch_instance_anchor);
    			if (switch_instance) destroy_component(switch_instance, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$s.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func$2 = ([name, value]) => `${name}: ${value};`;

    function instance$s($$self, $$props, $$invalidate) {
    	const omit_props_names = [
    		"use","class","style","ripple","color","mini","exited","extended","touch","href","component","getElement"
    	];

    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Fab', slots, ['default']);
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let { use = [] } = $$props;
    	let { class: className = '' } = $$props;
    	let { style = '' } = $$props;
    	let { ripple = true } = $$props;
    	let { color = 'secondary' } = $$props;
    	let { mini = false } = $$props;
    	let { exited = false } = $$props;
    	let { extended = false } = $$props;
    	let { touch = false } = $$props;
    	let { href = undefined } = $$props;
    	let element;
    	let internalClasses = {};
    	let internalStyles = {};
    	let { component = href == null ? Button : A } = $$props;
    	setContext('SMUI:label:context', 'fab');
    	setContext('SMUI:icon:context', 'fab');

    	function addClass(className) {
    		if (!internalClasses[className]) {
    			$$invalidate(12, internalClasses[className] = true, internalClasses);
    		}
    	}

    	function removeClass(className) {
    		if (!(className in internalClasses) || internalClasses[className]) {
    			$$invalidate(12, internalClasses[className] = false, internalClasses);
    		}
    	}

    	function addStyle(name, value) {
    		if (internalStyles[name] != value) {
    			if (value === '' || value == null) {
    				delete internalStyles[name];
    				$$invalidate(13, internalStyles);
    			} else {
    				$$invalidate(13, internalStyles[name] = value, internalStyles);
    			}
    		}
    	}

    	function getElement() {
    		return element.getElement();
    	}

    	function switch_instance_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(11, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(18, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
    		if ('style' in $$new_props) $$invalidate(2, style = $$new_props.style);
    		if ('ripple' in $$new_props) $$invalidate(3, ripple = $$new_props.ripple);
    		if ('color' in $$new_props) $$invalidate(4, color = $$new_props.color);
    		if ('mini' in $$new_props) $$invalidate(5, mini = $$new_props.mini);
    		if ('exited' in $$new_props) $$invalidate(6, exited = $$new_props.exited);
    		if ('extended' in $$new_props) $$invalidate(7, extended = $$new_props.extended);
    		if ('touch' in $$new_props) $$invalidate(8, touch = $$new_props.touch);
    		if ('href' in $$new_props) $$invalidate(9, href = $$new_props.href);
    		if ('component' in $$new_props) $$invalidate(10, component = $$new_props.component);
    		if ('$$scope' in $$new_props) $$invalidate(22, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		setContext,
    		get_current_component,
    		forwardEventsBuilder,
    		classMap,
    		Ripple,
    		A,
    		Button,
    		forwardEvents,
    		use,
    		className,
    		style,
    		ripple,
    		color,
    		mini,
    		exited,
    		extended,
    		touch,
    		href,
    		element,
    		internalClasses,
    		internalStyles,
    		component,
    		addClass,
    		removeClass,
    		addStyle,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('className' in $$props) $$invalidate(1, className = $$new_props.className);
    		if ('style' in $$props) $$invalidate(2, style = $$new_props.style);
    		if ('ripple' in $$props) $$invalidate(3, ripple = $$new_props.ripple);
    		if ('color' in $$props) $$invalidate(4, color = $$new_props.color);
    		if ('mini' in $$props) $$invalidate(5, mini = $$new_props.mini);
    		if ('exited' in $$props) $$invalidate(6, exited = $$new_props.exited);
    		if ('extended' in $$props) $$invalidate(7, extended = $$new_props.extended);
    		if ('touch' in $$props) $$invalidate(8, touch = $$new_props.touch);
    		if ('href' in $$props) $$invalidate(9, href = $$new_props.href);
    		if ('element' in $$props) $$invalidate(11, element = $$new_props.element);
    		if ('internalClasses' in $$props) $$invalidate(12, internalClasses = $$new_props.internalClasses);
    		if ('internalStyles' in $$props) $$invalidate(13, internalStyles = $$new_props.internalStyles);
    		if ('component' in $$props) $$invalidate(10, component = $$new_props.component);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		use,
    		className,
    		style,
    		ripple,
    		color,
    		mini,
    		exited,
    		extended,
    		touch,
    		href,
    		component,
    		element,
    		internalClasses,
    		internalStyles,
    		forwardEvents,
    		addClass,
    		removeClass,
    		addStyle,
    		$$restProps,
    		getElement,
    		slots,
    		switch_instance_binding,
    		$$scope
    	];
    }

    class Fab extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$s, create_fragment$s, safe_not_equal, {
    			use: 0,
    			class: 1,
    			style: 2,
    			ripple: 3,
    			color: 4,
    			mini: 5,
    			exited: 6,
    			extended: 7,
    			touch: 8,
    			href: 9,
    			component: 10,
    			getElement: 19
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Fab",
    			options,
    			id: create_fragment$s.name
    		});
    	}

    	get use() {
    		throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get class() {
    		throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set class(value) {
    		throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get ripple() {
    		throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set ripple(value) {
    		throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get color() {
    		throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set color(value) {
    		throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get mini() {
    		throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set mini(value) {
    		throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get exited() {
    		throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set exited(value) {
    		throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get extended() {
    		throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set extended(value) {
    		throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get touch() {
    		throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set touch(value) {
    		throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get href() {
    		throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set href(value) {
    		throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get component() {
    		throw new Error("<Fab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set component(value) {
    		throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[19];
    	}

    	set getElement(value) {
    		throw new Error("<Fab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Components\CustomFAB.svelte generated by Svelte v3.46.6 */
    const file$q = "src\\Components\\CustomFAB.svelte";

    // (9:2) <Icon class="custom-FAB-Icon">
    function create_default_slot_2$2(ctx) {
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			if (!src_url_equal(img.src, img_src_value = "img/logo.png")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Logo");
    			attr_dev(img, "class", "svelte-25nunp");
    			add_location(img, file$q, 9, 4, 237);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$2.name,
    		type: "slot",
    		source: "(9:2) <Icon class=\\\"custom-FAB-Icon\\\">",
    		ctx
    	});

    	return block;
    }

    // (12:2) <Label class="mdc-typography--button bold" style="overflow: hidden;">
    function create_default_slot_1$4(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text(/*label*/ ctx[1]);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*label*/ 2) set_data_dev(t, /*label*/ ctx[1]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$4.name,
    		type: "slot",
    		source: "(12:2) <Label class=\\\"mdc-typography--button bold\\\" style=\\\"overflow: hidden;\\\">",
    		ctx
    	});

    	return block;
    }

    // (8:0) <Fab color="primary" href="#{target}" extended class="custom-FABExtended">
    function create_default_slot$5(ctx) {
    	let icon;
    	let t;
    	let label_1;
    	let current;

    	icon = new Icon({
    			props: {
    				class: "custom-FAB-Icon",
    				$$slots: { default: [create_default_slot_2$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	label_1 = new Label({
    			props: {
    				class: "mdc-typography--button bold",
    				style: "overflow: hidden;",
    				$$slots: { default: [create_default_slot_1$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(icon.$$.fragment);
    			t = space();
    			create_component(label_1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(icon, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(label_1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const icon_changes = {};

    			if (dirty & /*$$scope*/ 4) {
    				icon_changes.$$scope = { dirty, ctx };
    			}

    			icon.$set(icon_changes);
    			const label_1_changes = {};

    			if (dirty & /*$$scope, label*/ 6) {
    				label_1_changes.$$scope = { dirty, ctx };
    			}

    			label_1.$set(label_1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(icon.$$.fragment, local);
    			transition_in(label_1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(icon.$$.fragment, local);
    			transition_out(label_1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(icon, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(label_1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$5.name,
    		type: "slot",
    		source: "(8:0) <Fab color=\\\"primary\\\" href=\\\"#{target}\\\" extended class=\\\"custom-FABExtended\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$r(ctx) {
    	let fab;
    	let current;

    	fab = new Fab({
    			props: {
    				color: "primary",
    				href: "#" + /*target*/ ctx[0],
    				extended: true,
    				class: "custom-FABExtended",
    				$$slots: { default: [create_default_slot$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(fab.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(fab, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const fab_changes = {};
    			if (dirty & /*target*/ 1) fab_changes.href = "#" + /*target*/ ctx[0];

    			if (dirty & /*$$scope, label*/ 6) {
    				fab_changes.$$scope = { dirty, ctx };
    			}

    			fab.$set(fab_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(fab.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(fab.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(fab, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$r.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$r($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('CustomFAB', slots, []);
    	let { target, label = "" } = $$props;
    	const writable_props = ['target', 'label'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<CustomFAB> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('target' in $$props) $$invalidate(0, target = $$props.target);
    		if ('label' in $$props) $$invalidate(1, label = $$props.label);
    	};

    	$$self.$capture_state = () => ({ Fab, Label, Icon, target, label });

    	$$self.$inject_state = $$props => {
    		if ('target' in $$props) $$invalidate(0, target = $$props.target);
    		if ('label' in $$props) $$invalidate(1, label = $$props.label);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [target, label];
    }

    class CustomFAB extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$r, create_fragment$r, safe_not_equal, { target: 0, label: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "CustomFAB",
    			options,
    			id: create_fragment$r.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*target*/ ctx[0] === undefined && !('target' in props)) {
    			console.warn("<CustomFAB> was created without expected prop 'target'");
    		}
    	}

    	get target() {
    		throw new Error("<CustomFAB>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set target(value) {
    		throw new Error("<CustomFAB>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get label() {
    		throw new Error("<CustomFAB>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set label(value) {
    		throw new Error("<CustomFAB>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Components\Footer.svelte generated by Svelte v3.46.6 */

    const file$p = "src\\Components\\Footer.svelte";

    function create_fragment$q(ctx) {
    	let footer;
    	let t0;
    	let br;
    	let t1;

    	const block = {
    		c: function create() {
    			footer = element("footer");
    			t0 = text("© Copyright 2022 — Gruppo 10 ");
    			br = element("br");
    			t1 = text(" Arena Nicoló — Barnabe Carlos — Cannizzaro Gloria — Caotti Leonardo — Navone Federica — Oneto Alessandro — Sartori Alice\r\n  — Sattanino Giulia");
    			add_location(br, file$p, 1, 36, 76);
    			attr_dev(footer, "class", "mdc-typography--body2 svelte-1huo1b5");
    			add_location(footer, file$p, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, footer, anchor);
    			append_dev(footer, t0);
    			append_dev(footer, br);
    			append_dev(footer, t1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(footer);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$q.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$q($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Footer', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Footer> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Footer extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$q, create_fragment$q, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Footer",
    			options,
    			id: create_fragment$q.name
    		});
    	}
    }

    /* src\Amianto\Title.svelte generated by Svelte v3.46.6 */

    const file$o = "src\\Amianto\\Title.svelte";

    function create_fragment$p(ctx) {
    	let div0;
    	let t1;
    	let div1;
    	let t2;
    	let br;
    	let t3;
    	let t4;
    	let div2;
    	let t5;
    	let span;
    	let t7;

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			div0.textContent = "Sai davvero cos'é l'amianto?";
    			t1 = space();
    			div1 = element("div");
    			t2 = text("Sai come ha rovinato le vite di innumerevoli persone?\r\n  ");
    			br = element("br");
    			t3 = text("Sai quanti danni ha provocato nella storia?");
    			t4 = space();
    			div2 = element("div");
    			t5 = text("Scendi nell'");
    			span = element("span");
    			span.textContent = "Inferno dell'Amianto";
    			t7 = text(" e lo scoprirai...");
    			attr_dev(div0, "class", "mdc-typography--headline1 uppercase svelte-v5e0jn");
    			add_location(div0, file$o, 0, 0, 0);
    			add_location(br, file$o, 3, 2, 185);
    			attr_dev(div1, "class", "mdc-typography--headline4 svelte-v5e0jn");
    			add_location(div1, file$o, 1, 0, 85);
    			attr_dev(span, "class", "bold error");
    			add_location(span, file$o, 5, 51, 295);
    			attr_dev(div2, "class", "mdc-typography--headline4 svelte-v5e0jn");
    			add_location(div2, file$o, 5, 0, 244);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, t2);
    			append_dev(div1, br);
    			append_dev(div1, t3);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, div2, anchor);
    			append_dev(div2, t5);
    			append_dev(div2, span);
    			append_dev(div2, t7);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div1);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(div2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$p.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$p($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Title', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Title> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Title extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$p, create_fragment$p, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Title",
    			options,
    			id: create_fragment$p.name
    		});
    	}
    }

    /* src\Amianto\Intro.svelte generated by Svelte v3.46.6 */

    const file$n = "src\\Amianto\\Intro.svelte";

    function create_fragment$o(ctx) {
    	let div2;
    	let div0;
    	let t1;
    	let div1;
    	let t2;
    	let span0;
    	let t4;
    	let span1;
    	let t6;
    	let br0;
    	let br1;
    	let t7;
    	let span2;
    	let t9;
    	let span3;
    	let t11;
    	let t12;
    	let div5;
    	let div3;
    	let t14;
    	let div4;
    	let t15;
    	let span4;
    	let t17;
    	let span5;
    	let t19;
    	let span6;
    	let t21;
    	let br2;
    	let br3;
    	let t22;
    	let span7;
    	let t24;
    	let span8;
    	let t26;
    	let span9;
    	let t28;

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			div0.textContent = "COS'É L'AMIANTO E PERCHÉ VIENE SCAVATO?";
    			t1 = space();
    			div1 = element("div");
    			t2 = text("Con il termine ");
    			span0 = element("span");
    			span0.textContent = "AMIANTO";
    			t4 = text(" o asbesto viene identificato un minerale naturale a struttura fibrosa, conosciuto sin dall'antichitá\r\n    per le sue proprietá termoisolanti e fonoassorbenti. Nel XX secolo, grazie alla sua\r\n    ");
    			span1 = element("span");
    			span1.textContent = "economicitá di PRODUZIONE";
    			t6 = text(", é stato largamente adottato da tutto il mondo in innumerevoli applicazioni industriali ed\r\n    edilizie.\r\n    ");
    			br0 = element("br");
    			br1 = element("br");
    			t7 = text("\r\n    Con il tempo però tale materiale si è rivelato ");
    			span2 = element("span");
    			span2.textContent = "NOCIVO";
    			t9 = text(" per la salute dell'uomo, a causa del rilascio di fibre che, se inalate,\r\n    possono provocare patologie ");
    			span3 = element("span");
    			span3.textContent = "gravi ed irreversibili";
    			t11 = text(" all'apparato respiratorio, tra cui le piú note sono asbestosi, carcinomi polmonari\r\n    e mesoteliomi.");
    			t12 = space();
    			div5 = element("div");
    			div3 = element("div");
    			div3.textContent = "Che reputazione ha oggi l'amianto?";
    			t14 = space();
    			div4 = element("div");
    			t15 = text("Negli anni '70 é stato raggiunto il ");
    			span4 = element("span");
    			span4.textContent = "PICCO";
    			t17 = text(" di produzione di amianto, coinvolgendo 85 paesi diversi nella sua estrazione e\r\n    lavorazione. In Italia, dal 1992 ad oggi, sono entrate in vigore numerose leggi che ");
    			span5 = element("span");
    			span5.textContent = "VIETANO";
    			t19 = text(" estrazione, commercializzazione e\r\n    produzione di amianto. Ma non tutte le nazioni hanno bandito questo materiale: Russia, Cina, Brasile e Canada sono gli attuali maggiori\r\n    ");
    			span6 = element("span");
    			span6.textContent = "PRODUTTORI";
    			t21 = text(" di amianto.\r\n    ");
    			br2 = element("br");
    			br3 = element("br");
    			t22 = text("\r\n    Infatti, l'estrazione di amianto rimane ancora oggi uno dei maggiori argomenti di discussione, sul campo legislativo e su quello etico. Attraverso questo viaggio\r\n    metaforico nell'");
    			span7 = element("span");
    			span7.textContent = "Inferno";
    			t24 = text(", avrai modo di scoprire l'impatto che questo minerale ha avuto in tutto il mondo, dal suo controverso\r\n    ");
    			span8 = element("span");
    			span8.textContent = "passato";
    			t26 = text(" alle sue conseguenze letali sul ");
    			span9 = element("span");
    			span9.textContent = "presente";
    			t28 = text(".");
    			attr_dev(div0, "class", "mdc-typography--headline4 uppercase");
    			add_location(div0, file$n, 1, 2, 22);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$n, 3, 19, 176);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$n, 5, 4, 410);
    			add_location(br0, file$n, 7, 4, 578);
    			add_location(br1, file$n, 7, 10, 584);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$n, 8, 51, 643);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$n, 9, 32, 786);
    			attr_dev(div1, "class", "mdc-typography--body1");
    			add_location(div1, file$n, 2, 2, 120);
    			attr_dev(div2, "class", "left svelte-1jctsza");
    			add_location(div2, file$n, 0, 0, 0);
    			attr_dev(div3, "class", "mdc-typography--headline4 uppercase");
    			add_location(div3, file$n, 15, 2, 987);
    			attr_dev(span4, "class", "highlight");
    			add_location(span4, file$n, 17, 40, 1157);
    			attr_dev(span5, "class", "highlight");
    			add_location(span5, file$n, 18, 88, 1362);
    			attr_dev(span6, "class", "highlight");
    			add_location(span6, file$n, 20, 4, 1581);
    			add_location(br2, file$n, 21, 4, 1640);
    			add_location(br3, file$n, 21, 10, 1646);
    			attr_dev(span7, "class", "highlight");
    			add_location(span7, file$n, 23, 20, 1841);
    			attr_dev(span8, "class", "highlight");
    			add_location(span8, file$n, 24, 4, 1987);
    			attr_dev(span9, "class", "highlight");
    			add_location(span9, file$n, 24, 75, 2058);
    			attr_dev(div4, "class", "mdc-typography--body1");
    			add_location(div4, file$n, 16, 2, 1080);
    			attr_dev(div5, "class", "right svelte-1jctsza");
    			add_location(div5, file$n, 14, 0, 964);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			append_dev(div2, t1);
    			append_dev(div2, div1);
    			append_dev(div1, t2);
    			append_dev(div1, span0);
    			append_dev(div1, t4);
    			append_dev(div1, span1);
    			append_dev(div1, t6);
    			append_dev(div1, br0);
    			append_dev(div1, br1);
    			append_dev(div1, t7);
    			append_dev(div1, span2);
    			append_dev(div1, t9);
    			append_dev(div1, span3);
    			append_dev(div1, t11);
    			insert_dev(target, t12, anchor);
    			insert_dev(target, div5, anchor);
    			append_dev(div5, div3);
    			append_dev(div5, t14);
    			append_dev(div5, div4);
    			append_dev(div4, t15);
    			append_dev(div4, span4);
    			append_dev(div4, t17);
    			append_dev(div4, span5);
    			append_dev(div4, t19);
    			append_dev(div4, span6);
    			append_dev(div4, t21);
    			append_dev(div4, br2);
    			append_dev(div4, br3);
    			append_dev(div4, t22);
    			append_dev(div4, span7);
    			append_dev(div4, t24);
    			append_dev(div4, span8);
    			append_dev(div4, t26);
    			append_dev(div4, span9);
    			append_dev(div4, t28);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    			if (detaching) detach_dev(t12);
    			if (detaching) detach_dev(div5);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$o.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$o($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Intro', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Intro> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Intro$5 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$o, create_fragment$o, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Intro",
    			options,
    			id: create_fragment$o.name
    		});
    	}
    }

    /* node_modules\@smui\card\dist\Card.svelte generated by Svelte v3.46.6 */
    const file$m = "node_modules\\@smui\\card\\dist\\Card.svelte";

    function create_fragment$n(ctx) {
    	let div;
    	let div_class_value;
    	let useActions_action;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[9].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);

    	let div_levels = [
    		{
    			class: div_class_value = classMap({
    				[/*className*/ ctx[1]]: true,
    				'mdc-card': true,
    				'mdc-card--outlined': /*variant*/ ctx[2] === 'outlined',
    				'smui-card--padded': /*padded*/ ctx[3]
    			})
    		},
    		/*$$restProps*/ ctx[6]
    	];

    	let div_data = {};

    	for (let i = 0; i < div_levels.length; i += 1) {
    		div_data = assign(div_data, div_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (default_slot) default_slot.c();
    			set_attributes(div, div_data);
    			add_location(div, file$m, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			if (default_slot) {
    				default_slot.m(div, null);
    			}

    			/*div_binding*/ ctx[10](div);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					action_destroyer(useActions_action = useActions.call(null, div, /*use*/ ctx[0])),
    					action_destroyer(/*forwardEvents*/ ctx[5].call(null, div))
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 256)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[8],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[8])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[8], dirty, null),
    						null
    					);
    				}
    			}

    			set_attributes(div, div_data = get_spread_update(div_levels, [
    				(!current || dirty & /*className, variant, padded*/ 14 && div_class_value !== (div_class_value = classMap({
    					[/*className*/ ctx[1]]: true,
    					'mdc-card': true,
    					'mdc-card--outlined': /*variant*/ ctx[2] === 'outlined',
    					'smui-card--padded': /*padded*/ ctx[3]
    				}))) && { class: div_class_value },
    				dirty & /*$$restProps*/ 64 && /*$$restProps*/ ctx[6]
    			]));

    			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (default_slot) default_slot.d(detaching);
    			/*div_binding*/ ctx[10](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$n.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$n($$self, $$props, $$invalidate) {
    	const omit_props_names = ["use","class","variant","padded","getElement"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Card', slots, ['default']);
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let { use = [] } = $$props;
    	let { class: className = '' } = $$props;
    	let { variant = 'raised' } = $$props;
    	let { padded = false } = $$props;
    	let element;

    	function getElement() {
    		return element;
    	}

    	function div_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(4, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
    		if ('variant' in $$new_props) $$invalidate(2, variant = $$new_props.variant);
    		if ('padded' in $$new_props) $$invalidate(3, padded = $$new_props.padded);
    		if ('$$scope' in $$new_props) $$invalidate(8, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		get_current_component,
    		forwardEventsBuilder,
    		classMap,
    		useActions,
    		forwardEvents,
    		use,
    		className,
    		variant,
    		padded,
    		element,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('className' in $$props) $$invalidate(1, className = $$new_props.className);
    		if ('variant' in $$props) $$invalidate(2, variant = $$new_props.variant);
    		if ('padded' in $$props) $$invalidate(3, padded = $$new_props.padded);
    		if ('element' in $$props) $$invalidate(4, element = $$new_props.element);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		use,
    		className,
    		variant,
    		padded,
    		element,
    		forwardEvents,
    		$$restProps,
    		getElement,
    		$$scope,
    		slots,
    		div_binding
    	];
    }

    class Card extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$n, create_fragment$n, safe_not_equal, {
    			use: 0,
    			class: 1,
    			variant: 2,
    			padded: 3,
    			getElement: 7
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Card",
    			options,
    			id: create_fragment$n.name
    		});
    	}

    	get use() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get class() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set class(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get variant() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set variant(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get padded() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set padded(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[7];
    	}

    	set getElement(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    var Content = classAdderBuilder({
        class: 'smui-card__content',
        component: Div,
    });

    /* node_modules\@smui\card\dist\PrimaryAction.svelte generated by Svelte v3.46.6 */
    const file$l = "node_modules\\@smui\\card\\dist\\PrimaryAction.svelte";

    function create_fragment$m(ctx) {
    	let div1;
    	let div0;
    	let t;
    	let div1_class_value;
    	let div1_style_value;
    	let useActions_action;
    	let Ripple_action;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[17].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[16], null);

    	let div1_levels = [
    		{
    			class: div1_class_value = classMap({
    				[/*className*/ ctx[1]]: true,
    				'mdc-card__primary-action': true,
    				'smui-card__primary-action--padded': /*padded*/ ctx[5],
    				.../*internalClasses*/ ctx[8]
    			})
    		},
    		{
    			style: div1_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func$1).concat([/*style*/ ctx[2]]).join(' ')
    		},
    		{ tabindex: /*tabindex*/ ctx[6] },
    		/*$$restProps*/ ctx[14]
    	];

    	let div1_data = {};

    	for (let i = 0; i < div1_levels.length; i += 1) {
    		div1_data = assign(div1_data, div1_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");
    			t = space();
    			if (default_slot) default_slot.c();
    			attr_dev(div0, "class", "mdc-card__ripple");
    			add_location(div0, file$l, 25, 2, 504);
    			set_attributes(div1, div1_data);
    			add_location(div1, file$l, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			append_dev(div1, t);

    			if (default_slot) {
    				default_slot.m(div1, null);
    			}

    			/*div1_binding*/ ctx[18](div1);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					action_destroyer(useActions_action = useActions.call(null, div1, /*use*/ ctx[0])),
    					action_destroyer(/*forwardEvents*/ ctx[10].call(null, div1)),
    					action_destroyer(Ripple_action = Ripple.call(null, div1, {
    						ripple: /*ripple*/ ctx[3],
    						unbounded: false,
    						color: /*color*/ ctx[4],
    						addClass: /*addClass*/ ctx[11],
    						removeClass: /*removeClass*/ ctx[12],
    						addStyle: /*addStyle*/ ctx[13]
    					}))
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 65536)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[16],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[16])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[16], dirty, null),
    						null
    					);
    				}
    			}

    			set_attributes(div1, div1_data = get_spread_update(div1_levels, [
    				(!current || dirty & /*className, padded, internalClasses*/ 290 && div1_class_value !== (div1_class_value = classMap({
    					[/*className*/ ctx[1]]: true,
    					'mdc-card__primary-action': true,
    					'smui-card__primary-action--padded': /*padded*/ ctx[5],
    					.../*internalClasses*/ ctx[8]
    				}))) && { class: div1_class_value },
    				(!current || dirty & /*internalStyles, style*/ 516 && div1_style_value !== (div1_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func$1).concat([/*style*/ ctx[2]]).join(' '))) && { style: div1_style_value },
    				(!current || dirty & /*tabindex*/ 64) && { tabindex: /*tabindex*/ ctx[6] },
    				dirty & /*$$restProps*/ 16384 && /*$$restProps*/ ctx[14]
    			]));

    			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);

    			if (Ripple_action && is_function(Ripple_action.update) && dirty & /*ripple, color*/ 24) Ripple_action.update.call(null, {
    				ripple: /*ripple*/ ctx[3],
    				unbounded: false,
    				color: /*color*/ ctx[4],
    				addClass: /*addClass*/ ctx[11],
    				removeClass: /*removeClass*/ ctx[12],
    				addStyle: /*addStyle*/ ctx[13]
    			});
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			if (default_slot) default_slot.d(detaching);
    			/*div1_binding*/ ctx[18](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$m.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func$1 = ([name, value]) => `${name}: ${value};`;

    function instance$m($$self, $$props, $$invalidate) {
    	const omit_props_names = ["use","class","style","ripple","color","padded","tabindex","getElement"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('PrimaryAction', slots, ['default']);
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let { use = [] } = $$props;
    	let { class: className = '' } = $$props;
    	let { style = '' } = $$props;
    	let { ripple = true } = $$props;
    	let { color = undefined } = $$props;
    	let { padded = false } = $$props;
    	let { tabindex = 0 } = $$props;
    	let element;
    	let internalClasses = {};
    	let internalStyles = {};

    	function addClass(className) {
    		if (!internalClasses[className]) {
    			$$invalidate(8, internalClasses[className] = true, internalClasses);
    		}
    	}

    	function removeClass(className) {
    		if (!(className in internalClasses) || internalClasses[className]) {
    			$$invalidate(8, internalClasses[className] = false, internalClasses);
    		}
    	}

    	function addStyle(name, value) {
    		if (internalStyles[name] != value) {
    			if (value === '' || value == null) {
    				delete internalStyles[name];
    				$$invalidate(9, internalStyles);
    			} else {
    				$$invalidate(9, internalStyles[name] = value, internalStyles);
    			}
    		}
    	}

    	function getElement() {
    		return element;
    	}

    	function div1_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(7, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(14, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
    		if ('style' in $$new_props) $$invalidate(2, style = $$new_props.style);
    		if ('ripple' in $$new_props) $$invalidate(3, ripple = $$new_props.ripple);
    		if ('color' in $$new_props) $$invalidate(4, color = $$new_props.color);
    		if ('padded' in $$new_props) $$invalidate(5, padded = $$new_props.padded);
    		if ('tabindex' in $$new_props) $$invalidate(6, tabindex = $$new_props.tabindex);
    		if ('$$scope' in $$new_props) $$invalidate(16, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		get_current_component,
    		forwardEventsBuilder,
    		classMap,
    		useActions,
    		Ripple,
    		forwardEvents,
    		use,
    		className,
    		style,
    		ripple,
    		color,
    		padded,
    		tabindex,
    		element,
    		internalClasses,
    		internalStyles,
    		addClass,
    		removeClass,
    		addStyle,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('className' in $$props) $$invalidate(1, className = $$new_props.className);
    		if ('style' in $$props) $$invalidate(2, style = $$new_props.style);
    		if ('ripple' in $$props) $$invalidate(3, ripple = $$new_props.ripple);
    		if ('color' in $$props) $$invalidate(4, color = $$new_props.color);
    		if ('padded' in $$props) $$invalidate(5, padded = $$new_props.padded);
    		if ('tabindex' in $$props) $$invalidate(6, tabindex = $$new_props.tabindex);
    		if ('element' in $$props) $$invalidate(7, element = $$new_props.element);
    		if ('internalClasses' in $$props) $$invalidate(8, internalClasses = $$new_props.internalClasses);
    		if ('internalStyles' in $$props) $$invalidate(9, internalStyles = $$new_props.internalStyles);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		use,
    		className,
    		style,
    		ripple,
    		color,
    		padded,
    		tabindex,
    		element,
    		internalClasses,
    		internalStyles,
    		forwardEvents,
    		addClass,
    		removeClass,
    		addStyle,
    		$$restProps,
    		getElement,
    		$$scope,
    		slots,
    		div1_binding
    	];
    }

    class PrimaryAction$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$m, create_fragment$m, safe_not_equal, {
    			use: 0,
    			class: 1,
    			style: 2,
    			ripple: 3,
    			color: 4,
    			padded: 5,
    			tabindex: 6,
    			getElement: 15
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PrimaryAction",
    			options,
    			id: create_fragment$m.name
    		});
    	}

    	get use() {
    		throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get class() {
    		throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set class(value) {
    		throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get ripple() {
    		throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set ripple(value) {
    		throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get color() {
    		throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set color(value) {
    		throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get padded() {
    		throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set padded(value) {
    		throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get tabindex() {
    		throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set tabindex(value) {
    		throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[15];
    	}

    	set getElement(value) {
    		throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    classAdderBuilder({
        class: 'mdc-card__media-content',
        component: Div,
    });

    /* node_modules\@smui\card\dist\Actions.svelte generated by Svelte v3.46.6 */
    const file$k = "node_modules\\@smui\\card\\dist\\Actions.svelte";

    function create_fragment$l(ctx) {
    	let div;
    	let div_class_value;
    	let useActions_action;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[8].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

    	let div_levels = [
    		{
    			class: div_class_value = classMap({
    				[/*className*/ ctx[1]]: true,
    				'mdc-card__actions': true,
    				'mdc-card__actions--full-bleed': /*fullBleed*/ ctx[2]
    			})
    		},
    		/*$$restProps*/ ctx[5]
    	];

    	let div_data = {};

    	for (let i = 0; i < div_levels.length; i += 1) {
    		div_data = assign(div_data, div_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (default_slot) default_slot.c();
    			set_attributes(div, div_data);
    			add_location(div, file$k, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			if (default_slot) {
    				default_slot.m(div, null);
    			}

    			/*div_binding*/ ctx[9](div);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					action_destroyer(useActions_action = useActions.call(null, div, /*use*/ ctx[0])),
    					action_destroyer(/*forwardEvents*/ ctx[4].call(null, div))
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[7],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[7])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[7], dirty, null),
    						null
    					);
    				}
    			}

    			set_attributes(div, div_data = get_spread_update(div_levels, [
    				(!current || dirty & /*className, fullBleed*/ 6 && div_class_value !== (div_class_value = classMap({
    					[/*className*/ ctx[1]]: true,
    					'mdc-card__actions': true,
    					'mdc-card__actions--full-bleed': /*fullBleed*/ ctx[2]
    				}))) && { class: div_class_value },
    				dirty & /*$$restProps*/ 32 && /*$$restProps*/ ctx[5]
    			]));

    			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (default_slot) default_slot.d(detaching);
    			/*div_binding*/ ctx[9](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$l.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$l($$self, $$props, $$invalidate) {
    	const omit_props_names = ["use","class","fullBleed","getElement"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Actions', slots, ['default']);
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let { use = [] } = $$props;
    	let { class: className = '' } = $$props;
    	let { fullBleed = false } = $$props;
    	let element;
    	setContext('SMUI:button:context', 'card:action');
    	setContext('SMUI:icon-button:context', 'card:action');

    	function getElement() {
    		return element;
    	}

    	function div_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(3, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
    		if ('fullBleed' in $$new_props) $$invalidate(2, fullBleed = $$new_props.fullBleed);
    		if ('$$scope' in $$new_props) $$invalidate(7, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		setContext,
    		get_current_component,
    		forwardEventsBuilder,
    		classMap,
    		useActions,
    		forwardEvents,
    		use,
    		className,
    		fullBleed,
    		element,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('className' in $$props) $$invalidate(1, className = $$new_props.className);
    		if ('fullBleed' in $$props) $$invalidate(2, fullBleed = $$new_props.fullBleed);
    		if ('element' in $$props) $$invalidate(3, element = $$new_props.element);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		use,
    		className,
    		fullBleed,
    		element,
    		forwardEvents,
    		$$restProps,
    		getElement,
    		$$scope,
    		slots,
    		div_binding
    	];
    }

    class Actions$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$l, create_fragment$l, safe_not_equal, {
    			use: 0,
    			class: 1,
    			fullBleed: 2,
    			getElement: 6
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Actions",
    			options,
    			id: create_fragment$l.name
    		});
    	}

    	get use() {
    		throw new Error("<Actions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<Actions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get class() {
    		throw new Error("<Actions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set class(value) {
    		throw new Error("<Actions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get fullBleed() {
    		throw new Error("<Actions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set fullBleed(value) {
    		throw new Error("<Actions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[6];
    	}

    	set getElement(value) {
    		throw new Error("<Actions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    classAdderBuilder({
        class: 'mdc-card__action-buttons',
        component: Div,
    });

    classAdderBuilder({
        class: 'mdc-card__action-icons',
        component: Div,
    });

    const PrimaryAction = PrimaryAction$1;
    const Actions = Actions$1;

    /* src\Components\LinkCard.svelte generated by Svelte v3.46.6 */
    const file$j = "src\\Components\\LinkCard.svelte";

    // (11:6) <Content class="link-card-content" style="">
    function create_default_slot_2$1(ctx) {
    	let div0;
    	let t0;
    	let t1;
    	let div1;
    	let t2;

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			t0 = text(/*title*/ ctx[2]);
    			t1 = space();
    			div1 = element("div");
    			t2 = text(/*subtitle*/ ctx[3]);
    			attr_dev(div0, "class", "mdc-typography--body2 highlight");
    			add_location(div0, file$j, 11, 8, 311);
    			attr_dev(div1, "class", "mdc-typography--body2");
    			add_location(div1, file$j, 12, 8, 379);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			append_dev(div0, t0);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, t2);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*title*/ 4) set_data_dev(t0, /*title*/ ctx[2]);
    			if (dirty & /*subtitle*/ 8) set_data_dev(t2, /*subtitle*/ ctx[3]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$1.name,
    		type: "slot",
    		source: "(11:6) <Content class=\\\"link-card-content\\\" style=\\\"\\\">",
    		ctx
    	});

    	return block;
    }

    // (9:4) <PrimaryAction>
    function create_default_slot_1$3(ctx) {
    	let img;
    	let img_src_value;
    	let t;
    	let content;
    	let current;

    	content = new Content({
    			props: {
    				class: "link-card-content",
    				style: "",
    				$$slots: { default: [create_default_slot_2$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			img = element("img");
    			t = space();
    			create_component(content.$$.fragment);
    			if (!src_url_equal(img.src, img_src_value = /*src*/ ctx[1])) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", /*title*/ ctx[2]);
    			attr_dev(img, "class", "svelte-rqmlsf");
    			add_location(img, file$j, 9, 6, 224);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(content, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (!current || dirty & /*src*/ 2 && !src_url_equal(img.src, img_src_value = /*src*/ ctx[1])) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (!current || dirty & /*title*/ 4) {
    				attr_dev(img, "alt", /*title*/ ctx[2]);
    			}

    			const content_changes = {};

    			if (dirty & /*$$scope, subtitle, title*/ 28) {
    				content_changes.$$scope = { dirty, ctx };
    			}

    			content.$set(content_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(content.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(content.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    			if (detaching) detach_dev(t);
    			destroy_component(content, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$3.name,
    		type: "slot",
    		source: "(9:4) <PrimaryAction>",
    		ctx
    	});

    	return block;
    }

    // (8:2) <Card class="link-card" style="">
    function create_default_slot$4(ctx) {
    	let primaryaction;
    	let current;

    	primaryaction = new PrimaryAction({
    			props: {
    				$$slots: { default: [create_default_slot_1$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(primaryaction.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(primaryaction, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const primaryaction_changes = {};

    			if (dirty & /*$$scope, subtitle, title, src*/ 30) {
    				primaryaction_changes.$$scope = { dirty, ctx };
    			}

    			primaryaction.$set(primaryaction_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(primaryaction.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(primaryaction.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(primaryaction, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$4.name,
    		type: "slot",
    		source: "(8:2) <Card class=\\\"link-card\\\" style=\\\"\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$k(ctx) {
    	let a;
    	let card;
    	let current;

    	card = new Card({
    			props: {
    				class: "link-card",
    				style: "",
    				$$slots: { default: [create_default_slot$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			a = element("a");
    			create_component(card.$$.fragment);
    			attr_dev(a, "href", /*href*/ ctx[0]);
    			attr_dev(a, "style", "");
    			attr_dev(a, "class", "svelte-rqmlsf");
    			add_location(a, file$j, 6, 0, 139);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			mount_component(card, a, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const card_changes = {};

    			if (dirty & /*$$scope, subtitle, title, src*/ 30) {
    				card_changes.$$scope = { dirty, ctx };
    			}

    			card.$set(card_changes);

    			if (!current || dirty & /*href*/ 1) {
    				attr_dev(a, "href", /*href*/ ctx[0]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			destroy_component(card);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$k.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$k($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('LinkCard', slots, []);
    	let { href, src, title, subtitle } = $$props;
    	const writable_props = ['href', 'src', 'title', 'subtitle'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<LinkCard> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('href' in $$props) $$invalidate(0, href = $$props.href);
    		if ('src' in $$props) $$invalidate(1, src = $$props.src);
    		if ('title' in $$props) $$invalidate(2, title = $$props.title);
    		if ('subtitle' in $$props) $$invalidate(3, subtitle = $$props.subtitle);
    	};

    	$$self.$capture_state = () => ({
    		Card,
    		Content,
    		PrimaryAction,
    		href,
    		src,
    		title,
    		subtitle
    	});

    	$$self.$inject_state = $$props => {
    		if ('href' in $$props) $$invalidate(0, href = $$props.href);
    		if ('src' in $$props) $$invalidate(1, src = $$props.src);
    		if ('title' in $$props) $$invalidate(2, title = $$props.title);
    		if ('subtitle' in $$props) $$invalidate(3, subtitle = $$props.subtitle);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [href, src, title, subtitle];
    }

    class LinkCard extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$k, create_fragment$k, safe_not_equal, { href: 0, src: 1, title: 2, subtitle: 3 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "LinkCard",
    			options,
    			id: create_fragment$k.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*href*/ ctx[0] === undefined && !('href' in props)) {
    			console.warn("<LinkCard> was created without expected prop 'href'");
    		}

    		if (/*src*/ ctx[1] === undefined && !('src' in props)) {
    			console.warn("<LinkCard> was created without expected prop 'src'");
    		}

    		if (/*title*/ ctx[2] === undefined && !('title' in props)) {
    			console.warn("<LinkCard> was created without expected prop 'title'");
    		}

    		if (/*subtitle*/ ctx[3] === undefined && !('subtitle' in props)) {
    			console.warn("<LinkCard> was created without expected prop 'subtitle'");
    		}
    	}

    	get href() {
    		throw new Error("<LinkCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set href(value) {
    		throw new Error("<LinkCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get src() {
    		throw new Error("<LinkCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set src(value) {
    		throw new Error("<LinkCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get title() {
    		throw new Error("<LinkCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<LinkCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get subtitle() {
    		throw new Error("<LinkCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set subtitle(value) {
    		throw new Error("<LinkCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Amianto\Cards.svelte generated by Svelte v3.46.6 */
    const file$i = "src\\Amianto\\Cards.svelte";

    function create_fragment$j(ctx) {
    	let div2;
    	let div0;
    	let t1;
    	let div1;
    	let t2;
    	let span0;
    	let t4;
    	let br0;
    	let t5;
    	let span1;
    	let t7;
    	let br1;
    	let t8;
    	let span2;
    	let t10;
    	let t11;
    	let div3;
    	let linkcard0;
    	let t12;
    	let linkcard1;
    	let t13;
    	let linkcard2;
    	let t14;
    	let linkcard3;
    	let current;

    	linkcard0 = new LinkCard({
    			props: {
    				href: "#content2-1",
    				src: "img/minacu-mine.png",
    				title: "Minaçu, Brasile",
    				subtitle: "L'ultima miniera di amianto del Brasile ancora attiva, nonstante il divieto legale imposto dallo stato."
    			},
    			$$inline: true
    		});

    	linkcard1 = new LinkCard({
    			props: {
    				href: "#content3-1",
    				src: "img/balangero-mine.png",
    				title: "Balangero, Italia",
    				subtitle: "La miniera di amianto piú grande d'Europa. Rimasta attiva nella provincia di Torino fino al 1990."
    			},
    			$$inline: true
    		});

    	linkcard2 = new LinkCard({
    			props: {
    				href: "#content4-1",
    				src: "img/libby-mine.png",
    				title: "Libby, Montana",
    				subtitle: "La cittá che ha sofferto la contaminazione d'amianto causata dall'estrazione di vermiculite."
    			},
    			$$inline: true
    		});

    	linkcard3 = new LinkCard({
    			props: {
    				href: "#content5-1",
    				src: "img/asbest-mine.png",
    				title: "Asbest, Russia",
    				subtitle: "Al giorno d'oggi, la miniera con la maggiore produzione annuale di amianto di tutto il mondo."
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			div0.textContent = "Quali luoghi ti attendono nell'Inferno dell'Amianto?";
    			t1 = space();
    			div1 = element("div");
    			t2 = text("Lasciati guidare nel viaggio attraverso i quattro ");
    			span0 = element("span");
    			span0.textContent = "gironi";
    			t4 = text(" infernali.\r\n    ");
    			br0 = element("br");
    			t5 = text("Le ");
    			span1 = element("span");
    			span1.textContent = "cittá";
    			t7 = text(" che incontrerai ti mostreranno quanta influenza abbia avuto l'amianto in tutto il mondo.\r\n    ");
    			br1 = element("br");
    			t8 = text("Ad accompagnarti troverai gli ");
    			span2 = element("span");
    			span2.textContent = "uomini";
    			t10 = text(" che di piú hanno sofferto, e potrai ascoltare le loro storie.");
    			t11 = space();
    			div3 = element("div");
    			create_component(linkcard0.$$.fragment);
    			t12 = space();
    			create_component(linkcard1.$$.fragment);
    			t13 = space();
    			create_component(linkcard2.$$.fragment);
    			t14 = space();
    			create_component(linkcard3.$$.fragment);
    			attr_dev(div0, "class", "mdc-typography--headline3 uppercase primary");
    			add_location(div0, file$i, 5, 2, 99);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$i, 7, 54, 358);
    			add_location(br0, file$i, 8, 4, 412);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$i, 8, 13, 421);
    			add_location(br1, file$i, 9, 4, 552);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$i, 9, 40, 588);
    			attr_dev(div1, "class", "mdc-typography--body1");
    			set_style(div1, "padding-top", "1vw");
    			set_style(div1, "padding-bottom", "1.8vw");
    			add_location(div1, file$i, 6, 2, 218);
    			add_location(div2, file$i, 4, 0, 90);
    			attr_dev(div3, "id", "link-cards");
    			attr_dev(div3, "style", "");
    			attr_dev(div3, "class", "svelte-7sl4wl");
    			add_location(div3, file$i, 12, 0, 707);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			append_dev(div2, t1);
    			append_dev(div2, div1);
    			append_dev(div1, t2);
    			append_dev(div1, span0);
    			append_dev(div1, t4);
    			append_dev(div1, br0);
    			append_dev(div1, t5);
    			append_dev(div1, span1);
    			append_dev(div1, t7);
    			append_dev(div1, br1);
    			append_dev(div1, t8);
    			append_dev(div1, span2);
    			append_dev(div1, t10);
    			insert_dev(target, t11, anchor);
    			insert_dev(target, div3, anchor);
    			mount_component(linkcard0, div3, null);
    			append_dev(div3, t12);
    			mount_component(linkcard1, div3, null);
    			append_dev(div3, t13);
    			mount_component(linkcard2, div3, null);
    			append_dev(div3, t14);
    			mount_component(linkcard3, div3, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkcard0.$$.fragment, local);
    			transition_in(linkcard1.$$.fragment, local);
    			transition_in(linkcard2.$$.fragment, local);
    			transition_in(linkcard3.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(linkcard0.$$.fragment, local);
    			transition_out(linkcard1.$$.fragment, local);
    			transition_out(linkcard2.$$.fragment, local);
    			transition_out(linkcard3.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    			if (detaching) detach_dev(t11);
    			if (detaching) detach_dev(div3);
    			destroy_component(linkcard0);
    			destroy_component(linkcard1);
    			destroy_component(linkcard2);
    			destroy_component(linkcard3);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$j.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$j($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Cards', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Cards> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ LinkCard });
    	return [];
    }

    class Cards$5 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$j, create_fragment$j, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Cards",
    			options,
    			id: create_fragment$j.name
    		});
    	}
    }

    /* src\Balangero\Intro.svelte generated by Svelte v3.46.6 */

    const file$h = "src\\Balangero\\Intro.svelte";

    function create_fragment$i(ctx) {
    	let div0;
    	let t1;
    	let div3;
    	let div1;
    	let t3;
    	let div2;
    	let t4;
    	let span0;
    	let t6;
    	let br0;
    	let br1;
    	let t7;
    	let span1;
    	let t9;
    	let br2;
    	let br3;
    	let t10;
    	let span2;
    	let t12;
    	let t13;
    	let div6;
    	let div4;
    	let t15;
    	let div5;
    	let t16;
    	let span3;
    	let t18;
    	let span4;
    	let t20;
    	let br4;
    	let br5;
    	let t21;
    	let span5;
    	let t23;

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			div0.textContent = "Balangero, Italia";
    			t1 = space();
    			div3 = element("div");
    			div1 = element("div");
    			div1.textContent = "La storia della miniera";
    			t3 = space();
    			div2 = element("div");
    			t4 = text("L’Amiantifera di Balangero, situata sul Monte San Vittore nella provincia di Torino, oltre ad essere stata per decenni la\r\n    ");
    			span0 = element("span");
    			span0.textContent = "più grande";
    			t6 = text("\r\n    cava d'amianto dell'Occidente, è stata in primo luogo un'immensa fonte di lavoro e ricchezza per la comunità balangerese e i paesi limitrofi.\r\n    ");
    			br0 = element("br");
    			br1 = element("br");
    			t7 = text("\r\n    Le prime attività di estrazione vennero avviate nel 1918 mentre l’impianto di macinazione e separazione dell’amianto entrò in funzione nel 1921. Con il passare\r\n    degli anni vennero potenziate le opere di scavo e ingranditi gli impianti di lavorazione tanto da raggiungere il\r\n    ");
    			span1 = element("span");
    			span1.textContent = "picco di produzione";
    			t9 = text("\r\n    di 36000 tonnellate annue.\r\n    ");
    			br2 = element("br");
    			br3 = element("br");
    			t10 = text("\r\n    In pieno boom di produzione, nel 1983 l'Amiantifera di Balangero S.p.A. venne ceduta dalla Eternit e dalle Manifatture Colombo ai fratelli Puccini di Roma, ma\r\n    nel giro di 7 anni la società subì una grave involuzione e nel 1990 venne ");
    			span2 = element("span");
    			span2.textContent = "chiusa per fallimento";
    			t12 = text(" e i dipendenti licenziati.");
    			t13 = space();
    			div6 = element("div");
    			div4 = element("div");
    			div4.textContent = "Quanta sofferenza ha causato?";
    			t15 = space();
    			div5 = element("div");
    			t16 = text("Con la chiusura della miniera e le leggi sulla pericolosità dell’amianto, è stato avviato un progetto di messa in sicurezza del luogo a causa delle numerose\r\n    ");
    			span3 = element("span");
    			span3.textContent = "vittime e malati";
    			t18 = text(" accertati tra gli ex lavoratori e le loro famiglie. Gli specialisti hanno esaminato le storie sanitarie di\r\n    1.966 ex addetti all’Amiantifera. Su questo totale, emerge un risultato sconcertante: fra essi ci sono\r\n    ");
    			span4 = element("span");
    			span4.textContent = "214 vittime";
    			t20 = text(" riferibili proprio al contatto con la fibra killer.\r\n    ");
    			br4 = element("br");
    			br5 = element("br");
    			t21 = text("\r\n    Non solo, negli anni si sono susseguite una serie di inchieste a favore degli operai, indagini che si conclusero con delle\r\n    ");
    			span5 = element("span");
    			span5.textContent = "condanne";
    			t23 = text(" per gli ex dirigenti della cava. Nel 2012 furono quaranta i casi sotto esame: venticinque morti e quindici malati, tra\r\n    i quali anche casi di normali cittadini e non solo di lavoratori della cava.");
    			attr_dev(div0, "class", "mdc-typography--headline1 uppercase");
    			add_location(div0, file$h, 0, 0, 0);
    			attr_dev(div1, "class", "mdc-typography--headline4 uppercase");
    			add_location(div1, file$h, 3, 2, 98);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$h, 6, 4, 348);
    			add_location(br0, file$h, 8, 4, 542);
    			add_location(br1, file$h, 8, 10, 548);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$h, 11, 4, 843);
    			add_location(br2, file$h, 13, 4, 931);
    			add_location(br3, file$h, 13, 10, 937);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$h, 15, 78, 1187);
    			attr_dev(div2, "class", "mdc-typography--body1");
    			add_location(div2, file$h, 4, 2, 180);
    			attr_dev(div3, "class", "left svelte-u95hax");
    			add_location(div3, file$h, 2, 0, 76);
    			attr_dev(div4, "class", "mdc-typography--headline4 uppercase primary");
    			add_location(div4, file$h, 20, 2, 1311);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$h, 23, 4, 1610);
    			attr_dev(span4, "class", "highlight");
    			add_location(span4, file$h, 25, 4, 1878);
    			add_location(br4, file$h, 26, 4, 1978);
    			add_location(br5, file$h, 26, 10, 1984);
    			attr_dev(span5, "class", "highlight");
    			add_location(span5, file$h, 28, 4, 2124);
    			attr_dev(div5, "class", "mdc-typography--body1");
    			add_location(div5, file$h, 21, 2, 1407);
    			attr_dev(div6, "class", "right svelte-u95hax");
    			add_location(div6, file$h, 19, 0, 1288);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div1);
    			append_dev(div3, t3);
    			append_dev(div3, div2);
    			append_dev(div2, t4);
    			append_dev(div2, span0);
    			append_dev(div2, t6);
    			append_dev(div2, br0);
    			append_dev(div2, br1);
    			append_dev(div2, t7);
    			append_dev(div2, span1);
    			append_dev(div2, t9);
    			append_dev(div2, br2);
    			append_dev(div2, br3);
    			append_dev(div2, t10);
    			append_dev(div2, span2);
    			append_dev(div2, t12);
    			insert_dev(target, t13, anchor);
    			insert_dev(target, div6, anchor);
    			append_dev(div6, div4);
    			append_dev(div6, t15);
    			append_dev(div6, div5);
    			append_dev(div5, t16);
    			append_dev(div5, span3);
    			append_dev(div5, t18);
    			append_dev(div5, span4);
    			append_dev(div5, t20);
    			append_dev(div5, br4);
    			append_dev(div5, br5);
    			append_dev(div5, t21);
    			append_dev(div5, span5);
    			append_dev(div5, t23);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			if (detaching) detach_dev(t13);
    			if (detaching) detach_dev(div6);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$i.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$i($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Intro', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Intro> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Intro$4 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$i, create_fragment$i, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Intro",
    			options,
    			id: create_fragment$i.name
    		});
    	}
    }

    /* node_modules\@smui\button\dist\Button.svelte generated by Svelte v3.46.6 */
    const file$g = "node_modules\\@smui\\button\\dist\\Button.svelte";

    // (50:10) {#if touch}
    function create_if_block$1(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			attr_dev(div, "class", "mdc-button__touch");
    			add_location(div, file$g, 49, 21, 1522);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(50:10) {#if touch}",
    		ctx
    	});

    	return block;
    }

    // (1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: false,         color,         disabled: !!$$restProps.disabled,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-button': true,     'mdc-button--raised': variant === 'raised',     'mdc-button--unelevated': variant === 'unelevated',     'mdc-button--outlined': variant === 'outlined',     'smui-button--color-secondary': color === 'secondary',     'mdc-button--touch': touch,     'mdc-card__action': context === 'card:action',     'mdc-card__action--button': context === 'card:action',     'mdc-dialog__button': context === 'dialog:action',     'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',     'mdc-top-app-bar__action-item': context === 'top-app-bar:action',     'mdc-snackbar__action': context === 'snackbar:actions',     'mdc-banner__secondary-action': context === 'banner' && secondary,     'mdc-banner__primary-action': context === 'banner' && !secondary,     'mdc-tooltip__action': context === 'tooltip:rich-actions',     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   {...actionProp}   {...defaultProp}   {...secondaryProp}   {href}   on:click={handleClick}   {...$$restProps}   >
    function create_default_slot$3(ctx) {
    	let div;
    	let t;
    	let if_block_anchor;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[27].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[29], null);
    	let if_block = /*touch*/ ctx[6] && create_if_block$1(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			t = space();
    			if (default_slot) default_slot.c();
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    			attr_dev(div, "class", "mdc-button__ripple");
    			add_location(div, file$g, 48, 3, 1466);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			insert_dev(target, t, anchor);

    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 536870912)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[29],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[29])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[29], dirty, null),
    						null
    					);
    				}
    			}

    			if (/*touch*/ ctx[6]) {
    				if (if_block) ; else {
    					if_block = create_if_block$1(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (detaching) detach_dev(t);
    			if (default_slot) default_slot.d(detaching);
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$3.name,
    		type: "slot",
    		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: false,         color,         disabled: !!$$restProps.disabled,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-button': true,     'mdc-button--raised': variant === 'raised',     'mdc-button--unelevated': variant === 'unelevated',     'mdc-button--outlined': variant === 'outlined',     'smui-button--color-secondary': color === 'secondary',     'mdc-button--touch': touch,     'mdc-card__action': context === 'card:action',     'mdc-card__action--button': context === 'card:action',     'mdc-dialog__button': context === 'dialog:action',     'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',     'mdc-top-app-bar__action-item': context === 'top-app-bar:action',     'mdc-snackbar__action': context === 'snackbar:actions',     'mdc-banner__secondary-action': context === 'banner' && secondary,     'mdc-banner__primary-action': context === 'banner' && !secondary,     'mdc-tooltip__action': context === 'tooltip:rich-actions',     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   {...actionProp}   {...defaultProp}   {...secondaryProp}   {href}   on:click={handleClick}   {...$$restProps}   >",
    		ctx
    	});

    	return block;
    }

    function create_fragment$h(ctx) {
    	let switch_instance;
    	let switch_instance_anchor;
    	let current;

    	const switch_instance_spread_levels = [
    		{
    			use: [
    				[
    					Ripple,
    					{
    						ripple: /*ripple*/ ctx[3],
    						unbounded: false,
    						color: /*color*/ ctx[4],
    						disabled: !!/*$$restProps*/ ctx[22].disabled,
    						addClass: /*addClass*/ ctx[18],
    						removeClass: /*removeClass*/ ctx[19],
    						addStyle: /*addStyle*/ ctx[20]
    					}
    				],
    				/*forwardEvents*/ ctx[16],
    				.../*use*/ ctx[0]
    			]
    		},
    		{
    			class: classMap({
    				[/*className*/ ctx[1]]: true,
    				'mdc-button': true,
    				'mdc-button--raised': /*variant*/ ctx[5] === 'raised',
    				'mdc-button--unelevated': /*variant*/ ctx[5] === 'unelevated',
    				'mdc-button--outlined': /*variant*/ ctx[5] === 'outlined',
    				'smui-button--color-secondary': /*color*/ ctx[4] === 'secondary',
    				'mdc-button--touch': /*touch*/ ctx[6],
    				'mdc-card__action': /*context*/ ctx[17] === 'card:action',
    				'mdc-card__action--button': /*context*/ ctx[17] === 'card:action',
    				'mdc-dialog__button': /*context*/ ctx[17] === 'dialog:action',
    				'mdc-top-app-bar__navigation-icon': /*context*/ ctx[17] === 'top-app-bar:navigation',
    				'mdc-top-app-bar__action-item': /*context*/ ctx[17] === 'top-app-bar:action',
    				'mdc-snackbar__action': /*context*/ ctx[17] === 'snackbar:actions',
    				'mdc-banner__secondary-action': /*context*/ ctx[17] === 'banner' && /*secondary*/ ctx[8],
    				'mdc-banner__primary-action': /*context*/ ctx[17] === 'banner' && !/*secondary*/ ctx[8],
    				'mdc-tooltip__action': /*context*/ ctx[17] === 'tooltip:rich-actions',
    				.../*internalClasses*/ ctx[11]
    			})
    		},
    		{
    			style: Object.entries(/*internalStyles*/ ctx[12]).map(func).concat([/*style*/ ctx[2]]).join(' ')
    		},
    		/*actionProp*/ ctx[15],
    		/*defaultProp*/ ctx[14],
    		/*secondaryProp*/ ctx[13],
    		{ href: /*href*/ ctx[7] },
    		/*$$restProps*/ ctx[22]
    	];

    	var switch_value = /*component*/ ctx[9];

    	function switch_props(ctx) {
    		let switch_instance_props = {
    			$$slots: { default: [create_default_slot$3] },
    			$$scope: { ctx }
    		};

    		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
    			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    		}

    		return {
    			props: switch_instance_props,
    			$$inline: true
    		};
    	}

    	if (switch_value) {
    		switch_instance = new switch_value(switch_props(ctx));
    		/*switch_instance_binding*/ ctx[28](switch_instance);
    		switch_instance.$on("click", /*handleClick*/ ctx[21]);
    	}

    	const block = {
    		c: function create() {
    			if (switch_instance) create_component(switch_instance.$$.fragment);
    			switch_instance_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (switch_instance) {
    				mount_component(switch_instance, target, anchor);
    			}

    			insert_dev(target, switch_instance_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const switch_instance_changes = (dirty & /*Ripple, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, classMap, className, variant, touch, context, secondary, internalClasses, Object, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/ 6289919)
    			? get_spread_update(switch_instance_spread_levels, [
    					dirty & /*Ripple, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/ 6094873 && {
    						use: [
    							[
    								Ripple,
    								{
    									ripple: /*ripple*/ ctx[3],
    									unbounded: false,
    									color: /*color*/ ctx[4],
    									disabled: !!/*$$restProps*/ ctx[22].disabled,
    									addClass: /*addClass*/ ctx[18],
    									removeClass: /*removeClass*/ ctx[19],
    									addStyle: /*addStyle*/ ctx[20]
    								}
    							],
    							/*forwardEvents*/ ctx[16],
    							.../*use*/ ctx[0]
    						]
    					},
    					dirty & /*classMap, className, variant, color, touch, context, secondary, internalClasses*/ 133490 && {
    						class: classMap({
    							[/*className*/ ctx[1]]: true,
    							'mdc-button': true,
    							'mdc-button--raised': /*variant*/ ctx[5] === 'raised',
    							'mdc-button--unelevated': /*variant*/ ctx[5] === 'unelevated',
    							'mdc-button--outlined': /*variant*/ ctx[5] === 'outlined',
    							'smui-button--color-secondary': /*color*/ ctx[4] === 'secondary',
    							'mdc-button--touch': /*touch*/ ctx[6],
    							'mdc-card__action': /*context*/ ctx[17] === 'card:action',
    							'mdc-card__action--button': /*context*/ ctx[17] === 'card:action',
    							'mdc-dialog__button': /*context*/ ctx[17] === 'dialog:action',
    							'mdc-top-app-bar__navigation-icon': /*context*/ ctx[17] === 'top-app-bar:navigation',
    							'mdc-top-app-bar__action-item': /*context*/ ctx[17] === 'top-app-bar:action',
    							'mdc-snackbar__action': /*context*/ ctx[17] === 'snackbar:actions',
    							'mdc-banner__secondary-action': /*context*/ ctx[17] === 'banner' && /*secondary*/ ctx[8],
    							'mdc-banner__primary-action': /*context*/ ctx[17] === 'banner' && !/*secondary*/ ctx[8],
    							'mdc-tooltip__action': /*context*/ ctx[17] === 'tooltip:rich-actions',
    							.../*internalClasses*/ ctx[11]
    						})
    					},
    					dirty & /*Object, internalStyles, style*/ 4100 && {
    						style: Object.entries(/*internalStyles*/ ctx[12]).map(func).concat([/*style*/ ctx[2]]).join(' ')
    					},
    					dirty & /*actionProp*/ 32768 && get_spread_object(/*actionProp*/ ctx[15]),
    					dirty & /*defaultProp*/ 16384 && get_spread_object(/*defaultProp*/ ctx[14]),
    					dirty & /*secondaryProp*/ 8192 && get_spread_object(/*secondaryProp*/ ctx[13]),
    					dirty & /*href*/ 128 && { href: /*href*/ ctx[7] },
    					dirty & /*$$restProps*/ 4194304 && get_spread_object(/*$$restProps*/ ctx[22])
    				])
    			: {};

    			if (dirty & /*$$scope, touch*/ 536870976) {
    				switch_instance_changes.$$scope = { dirty, ctx };
    			}

    			if (switch_value !== (switch_value = /*component*/ ctx[9])) {
    				if (switch_instance) {
    					group_outros();
    					const old_component = switch_instance;

    					transition_out(old_component.$$.fragment, 1, 0, () => {
    						destroy_component(old_component, 1);
    					});

    					check_outros();
    				}

    				if (switch_value) {
    					switch_instance = new switch_value(switch_props(ctx));
    					/*switch_instance_binding*/ ctx[28](switch_instance);
    					switch_instance.$on("click", /*handleClick*/ ctx[21]);
    					create_component(switch_instance.$$.fragment);
    					transition_in(switch_instance.$$.fragment, 1);
    					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
    				} else {
    					switch_instance = null;
    				}
    			} else if (switch_value) {
    				switch_instance.$set(switch_instance_changes);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			/*switch_instance_binding*/ ctx[28](null);
    			if (detaching) detach_dev(switch_instance_anchor);
    			if (switch_instance) destroy_component(switch_instance, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$h.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func = ([name, value]) => `${name}: ${value};`;

    function instance$h($$self, $$props, $$invalidate) {
    	let actionProp;
    	let defaultProp;
    	let secondaryProp;

    	const omit_props_names = [
    		"use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"
    	];

    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Button', slots, ['default']);
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let { use = [] } = $$props;
    	let { class: className = '' } = $$props;
    	let { style = '' } = $$props;
    	let { ripple = true } = $$props;
    	let { color = 'primary' } = $$props;
    	let { variant = 'text' } = $$props;
    	let { touch = false } = $$props;
    	let { href = undefined } = $$props;
    	let { action = 'close' } = $$props;
    	let { defaultAction = false } = $$props;
    	let { secondary = false } = $$props;
    	let element;
    	let internalClasses = {};
    	let internalStyles = {};
    	let context = getContext('SMUI:button:context');
    	let { component = href == null ? Button : A } = $$props;
    	let previousDisabled = $$restProps.disabled;
    	setContext('SMUI:label:context', 'button');
    	setContext('SMUI:icon:context', 'button');

    	function addClass(className) {
    		if (!internalClasses[className]) {
    			$$invalidate(11, internalClasses[className] = true, internalClasses);
    		}
    	}

    	function removeClass(className) {
    		if (!(className in internalClasses) || internalClasses[className]) {
    			$$invalidate(11, internalClasses[className] = false, internalClasses);
    		}
    	}

    	function addStyle(name, value) {
    		if (internalStyles[name] != value) {
    			if (value === '' || value == null) {
    				delete internalStyles[name];
    				$$invalidate(12, internalStyles);
    			} else {
    				$$invalidate(12, internalStyles[name] = value, internalStyles);
    			}
    		}
    	}

    	function handleClick() {
    		if (context === 'banner') {
    			dispatch(getElement(), secondary
    			? 'SMUIBannerButton:secondaryActionClick'
    			: 'SMUIBannerButton:primaryActionClick');
    		}
    	}

    	function getElement() {
    		return element.getElement();
    	}

    	function switch_instance_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(10, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$invalidate(30, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    		$$invalidate(22, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
    		if ('style' in $$new_props) $$invalidate(2, style = $$new_props.style);
    		if ('ripple' in $$new_props) $$invalidate(3, ripple = $$new_props.ripple);
    		if ('color' in $$new_props) $$invalidate(4, color = $$new_props.color);
    		if ('variant' in $$new_props) $$invalidate(5, variant = $$new_props.variant);
    		if ('touch' in $$new_props) $$invalidate(6, touch = $$new_props.touch);
    		if ('href' in $$new_props) $$invalidate(7, href = $$new_props.href);
    		if ('action' in $$new_props) $$invalidate(23, action = $$new_props.action);
    		if ('defaultAction' in $$new_props) $$invalidate(24, defaultAction = $$new_props.defaultAction);
    		if ('secondary' in $$new_props) $$invalidate(8, secondary = $$new_props.secondary);
    		if ('component' in $$new_props) $$invalidate(9, component = $$new_props.component);
    		if ('$$scope' in $$new_props) $$invalidate(29, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		setContext,
    		getContext,
    		get_current_component,
    		forwardEventsBuilder,
    		classMap,
    		dispatch,
    		Ripple,
    		A,
    		Button,
    		forwardEvents,
    		use,
    		className,
    		style,
    		ripple,
    		color,
    		variant,
    		touch,
    		href,
    		action,
    		defaultAction,
    		secondary,
    		element,
    		internalClasses,
    		internalStyles,
    		context,
    		component,
    		previousDisabled,
    		addClass,
    		removeClass,
    		addStyle,
    		handleClick,
    		getElement,
    		secondaryProp,
    		defaultProp,
    		actionProp
    	});

    	$$self.$inject_state = $$new_props => {
    		$$invalidate(30, $$props = assign(assign({}, $$props), $$new_props));
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('className' in $$props) $$invalidate(1, className = $$new_props.className);
    		if ('style' in $$props) $$invalidate(2, style = $$new_props.style);
    		if ('ripple' in $$props) $$invalidate(3, ripple = $$new_props.ripple);
    		if ('color' in $$props) $$invalidate(4, color = $$new_props.color);
    		if ('variant' in $$props) $$invalidate(5, variant = $$new_props.variant);
    		if ('touch' in $$props) $$invalidate(6, touch = $$new_props.touch);
    		if ('href' in $$props) $$invalidate(7, href = $$new_props.href);
    		if ('action' in $$props) $$invalidate(23, action = $$new_props.action);
    		if ('defaultAction' in $$props) $$invalidate(24, defaultAction = $$new_props.defaultAction);
    		if ('secondary' in $$props) $$invalidate(8, secondary = $$new_props.secondary);
    		if ('element' in $$props) $$invalidate(10, element = $$new_props.element);
    		if ('internalClasses' in $$props) $$invalidate(11, internalClasses = $$new_props.internalClasses);
    		if ('internalStyles' in $$props) $$invalidate(12, internalStyles = $$new_props.internalStyles);
    		if ('context' in $$props) $$invalidate(17, context = $$new_props.context);
    		if ('component' in $$props) $$invalidate(9, component = $$new_props.component);
    		if ('previousDisabled' in $$props) $$invalidate(26, previousDisabled = $$new_props.previousDisabled);
    		if ('secondaryProp' in $$props) $$invalidate(13, secondaryProp = $$new_props.secondaryProp);
    		if ('defaultProp' in $$props) $$invalidate(14, defaultProp = $$new_props.defaultProp);
    		if ('actionProp' in $$props) $$invalidate(15, actionProp = $$new_props.actionProp);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		$$invalidate(15, actionProp = context === 'dialog:action' && action != null
    		? { 'data-mdc-dialog-action': action }
    		: { action: $$props.action });

    		$$invalidate(14, defaultProp = context === 'dialog:action' && defaultAction
    		? { 'data-mdc-dialog-button-default': '' }
    		: { default: $$props.default });

    		$$invalidate(13, secondaryProp = context === 'banner'
    		? {}
    		: { secondary: $$props.secondary });

    		if (previousDisabled !== $$restProps.disabled) {
    			getElement().blur();
    			$$invalidate(26, previousDisabled = $$restProps.disabled);
    		}
    	};

    	$$props = exclude_internal_props($$props);

    	return [
    		use,
    		className,
    		style,
    		ripple,
    		color,
    		variant,
    		touch,
    		href,
    		secondary,
    		component,
    		element,
    		internalClasses,
    		internalStyles,
    		secondaryProp,
    		defaultProp,
    		actionProp,
    		forwardEvents,
    		context,
    		addClass,
    		removeClass,
    		addStyle,
    		handleClick,
    		$$restProps,
    		action,
    		defaultAction,
    		getElement,
    		previousDisabled,
    		slots,
    		switch_instance_binding,
    		$$scope
    	];
    }

    class Button_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$h, create_fragment$h, safe_not_equal, {
    			use: 0,
    			class: 1,
    			style: 2,
    			ripple: 3,
    			color: 4,
    			variant: 5,
    			touch: 6,
    			href: 7,
    			action: 23,
    			defaultAction: 24,
    			secondary: 8,
    			component: 9,
    			getElement: 25
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Button_1",
    			options,
    			id: create_fragment$h.name
    		});
    	}

    	get use() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get class() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set class(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get ripple() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set ripple(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get color() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set color(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get variant() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set variant(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get touch() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set touch(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get href() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set href(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get action() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set action(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get defaultAction() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set defaultAction(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get secondary() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set secondary(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get component() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set component(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[25];
    	}

    	set getElement(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Components\CustomButton.svelte generated by Svelte v3.46.6 */

    // (8:2) <Label class="mdc-typography--body2 bold">
    function create_default_slot_1$2(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text(/*label*/ ctx[0]);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*label*/ 1) set_data_dev(t, /*label*/ ctx[0]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$2.name,
    		type: "slot",
    		source: "(8:2) <Label class=\\\"mdc-typography--body2 bold\\\">",
    		ctx
    	});

    	return block;
    }

    // (7:0) <Button class={direction} variant="raised" {href} style="height: 2.5vw;">
    function create_default_slot$2(ctx) {
    	let label_1;
    	let current;

    	label_1 = new Label({
    			props: {
    				class: "mdc-typography--body2 bold",
    				$$slots: { default: [create_default_slot_1$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(label_1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(label_1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const label_1_changes = {};

    			if (dirty & /*$$scope, label*/ 9) {
    				label_1_changes.$$scope = { dirty, ctx };
    			}

    			label_1.$set(label_1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(label_1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(label_1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(label_1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$2.name,
    		type: "slot",
    		source: "(7:0) <Button class={direction} variant=\\\"raised\\\" {href} style=\\\"height: 2.5vw;\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$g(ctx) {
    	let button;
    	let current;

    	button = new Button_1({
    			props: {
    				class: /*direction*/ ctx[2],
    				variant: "raised",
    				href: /*href*/ ctx[1],
    				style: "height: 2.5vw;",
    				$$slots: { default: [create_default_slot$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(button.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(button, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const button_changes = {};
    			if (dirty & /*direction*/ 4) button_changes.class = /*direction*/ ctx[2];
    			if (dirty & /*href*/ 2) button_changes.href = /*href*/ ctx[1];

    			if (dirty & /*$$scope, label*/ 9) {
    				button_changes.$$scope = { dirty, ctx };
    			}

    			button.$set(button_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$g.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$g($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('CustomButton', slots, []);
    	let { label, href, direction } = $$props;
    	const writable_props = ['label', 'href', 'direction'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<CustomButton> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('label' in $$props) $$invalidate(0, label = $$props.label);
    		if ('href' in $$props) $$invalidate(1, href = $$props.href);
    		if ('direction' in $$props) $$invalidate(2, direction = $$props.direction);
    	};

    	$$self.$capture_state = () => ({ Button: Button_1, Label, label, href, direction });

    	$$self.$inject_state = $$props => {
    		if ('label' in $$props) $$invalidate(0, label = $$props.label);
    		if ('href' in $$props) $$invalidate(1, href = $$props.href);
    		if ('direction' in $$props) $$invalidate(2, direction = $$props.direction);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [label, href, direction];
    }

    class CustomButton extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$g, create_fragment$g, safe_not_equal, { label: 0, href: 1, direction: 2 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "CustomButton",
    			options,
    			id: create_fragment$g.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*label*/ ctx[0] === undefined && !('label' in props)) {
    			console.warn("<CustomButton> was created without expected prop 'label'");
    		}

    		if (/*href*/ ctx[1] === undefined && !('href' in props)) {
    			console.warn("<CustomButton> was created without expected prop 'href'");
    		}

    		if (/*direction*/ ctx[2] === undefined && !('direction' in props)) {
    			console.warn("<CustomButton> was created without expected prop 'direction'");
    		}
    	}

    	get label() {
    		throw new Error("<CustomButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set label(value) {
    		throw new Error("<CustomButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get href() {
    		throw new Error("<CustomButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set href(value) {
    		throw new Error("<CustomButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get direction() {
    		throw new Error("<CustomButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set direction(value) {
    		throw new Error("<CustomButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Components\ContentCard.svelte generated by Svelte v3.46.6 */
    const file$f = "src\\Components\\ContentCard.svelte";

    // (16:4) <Content style="padding: 1vw;">
    function create_default_slot_6(ctx) {
    	let div0;
    	let t0;
    	let t1;
    	let div1;
    	let t2;

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			t0 = text(/*title*/ ctx[2]);
    			t1 = space();
    			div1 = element("div");
    			t2 = text(/*subtitle*/ ctx[3]);
    			attr_dev(div0, "class", "mdc-typography--body2 highlight");
    			add_location(div0, file$f, 16, 6, 468);
    			attr_dev(div1, "class", "mdc-typography--body2");
    			add_location(div1, file$f, 17, 6, 534);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			append_dev(div0, t0);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, t2);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*title*/ 4) set_data_dev(t0, /*title*/ ctx[2]);
    			if (dirty & /*subtitle*/ 8) set_data_dev(t2, /*subtitle*/ ctx[3]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6.name,
    		type: "slot",
    		source: "(16:4) <Content style=\\\"padding: 1vw;\\\">",
    		ctx
    	});

    	return block;
    }

    // (25:45) 
    function create_if_block_1(ctx) {
    	let i;
    	let t1;
    	let label;
    	let current;

    	label = new Label({
    			props: {
    				class: "mdc-typography--body2 bold",
    				$$slots: { default: [create_default_slot_5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			i = element("i");
    			i.textContent = "arrow_back";
    			t1 = space();
    			create_component(label.$$.fragment);
    			attr_dev(i, "class", "material-icons svelte-2n91h2");
    			attr_dev(i, "aria-hidden", "true");
    			add_location(i, file$f, 25, 10, 952);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(label, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const label_changes = {};

    			if (dirty & /*$$scope, buttonLabel*/ 144) {
    				label_changes.$$scope = { dirty, ctx };
    			}

    			label.$set(label_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(label.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(label.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(i);
    			if (detaching) detach_dev(t1);
    			destroy_component(label, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(25:45) ",
    		ctx
    	});

    	return block;
    }

    // (22:8) {#if direction === "left-card"}
    function create_if_block(ctx) {
    	let label;
    	let t0;
    	let i;
    	let current;

    	label = new Label({
    			props: {
    				class: "mdc-typography--body2 bold",
    				$$slots: { default: [create_default_slot_4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(label.$$.fragment);
    			t0 = space();
    			i = element("i");
    			i.textContent = "arrow_forward";
    			attr_dev(i, "class", "material-icons svelte-2n91h2");
    			attr_dev(i, "aria-hidden", "true");
    			add_location(i, file$f, 23, 10, 831);
    		},
    		m: function mount(target, anchor) {
    			mount_component(label, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, i, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const label_changes = {};

    			if (dirty & /*$$scope, buttonLabel*/ 144) {
    				label_changes.$$scope = { dirty, ctx };
    			}

    			label.$set(label_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(label.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(label.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(label, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(i);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(22:8) {#if direction === \\\"left-card\\\"}",
    		ctx
    	});

    	return block;
    }

    // (27:10) <Label class="mdc-typography--body2 bold">
    function create_default_slot_5(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text(/*buttonLabel*/ ctx[4]);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*buttonLabel*/ 16) set_data_dev(t, /*buttonLabel*/ ctx[4]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5.name,
    		type: "slot",
    		source: "(27:10) <Label class=\\\"mdc-typography--body2 bold\\\">",
    		ctx
    	});

    	return block;
    }

    // (23:10) <Label class="mdc-typography--body2 bold">
    function create_default_slot_4(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text(/*buttonLabel*/ ctx[4]);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*buttonLabel*/ 16) set_data_dev(t, /*buttonLabel*/ ctx[4]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4.name,
    		type: "slot",
    		source: "(23:10) <Label class=\\\"mdc-typography--body2 bold\\\">",
    		ctx
    	});

    	return block;
    }

    // (21:6) <Button style="padding: 0 1.6vw 0.8vw 1.6vw;">
    function create_default_slot_3(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block, create_if_block_1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*direction*/ ctx[5] === "left-card") return 0;
    		if (/*direction*/ ctx[5] === "right-card") return 1;
    		return -1;
    	}

    	if (~(current_block_type_index = select_block_type(ctx))) {
    		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	}

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].m(target, anchor);
    			}

    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if (~current_block_type_index) {
    					if_blocks[current_block_type_index].p(ctx, dirty);
    				}
    			} else {
    				if (if_block) {
    					group_outros();

    					transition_out(if_blocks[previous_block_index], 1, 1, () => {
    						if_blocks[previous_block_index] = null;
    					});

    					check_outros();
    				}

    				if (~current_block_type_index) {
    					if_block = if_blocks[current_block_type_index];

    					if (!if_block) {
    						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    						if_block.c();
    					} else {
    						if_block.p(ctx, dirty);
    					}

    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				} else {
    					if_block = null;
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].d(detaching);
    			}

    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3.name,
    		type: "slot",
    		source: "(21:6) <Button style=\\\"padding: 0 1.6vw 0.8vw 1.6vw;\\\">",
    		ctx
    	});

    	return block;
    }

    // (20:4) <Actions fullBleed style="min-height: 0;">
    function create_default_slot_2(ctx) {
    	let button;
    	let current;

    	button = new Button_1({
    			props: {
    				style: "padding: 0 1.6vw 0.8vw 1.6vw;",
    				$$slots: { default: [create_default_slot_3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(button.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button_changes = {};

    			if (dirty & /*$$scope, buttonLabel, direction*/ 176) {
    				button_changes.$$scope = { dirty, ctx };
    			}

    			button.$set(button_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2.name,
    		type: "slot",
    		source: "(20:4) <Actions fullBleed style=\\\"min-height: 0;\\\">",
    		ctx
    	});

    	return block;
    }

    // (14:2) <PrimaryAction on:click={() => document.getElementById(contentId).classList.toggle("hidden")}>
    function create_default_slot_1$1(ctx) {
    	let img;
    	let img_src_value;
    	let t0;
    	let content;
    	let t1;
    	let actions;
    	let current;

    	content = new Content({
    			props: {
    				style: "padding: 1vw;",
    				$$slots: { default: [create_default_slot_6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	actions = new Actions({
    			props: {
    				fullBleed: true,
    				style: "min-height: 0;",
    				$$slots: { default: [create_default_slot_2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			img = element("img");
    			t0 = space();
    			create_component(content.$$.fragment);
    			t1 = space();
    			create_component(actions.$$.fragment);
    			if (!src_url_equal(img.src, img_src_value = /*src*/ ctx[1])) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", /*title*/ ctx[2]);
    			attr_dev(img, "class", "svelte-2n91h2");
    			add_location(img, file$f, 14, 4, 398);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(content, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(actions, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (!current || dirty & /*src*/ 2 && !src_url_equal(img.src, img_src_value = /*src*/ ctx[1])) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (!current || dirty & /*title*/ 4) {
    				attr_dev(img, "alt", /*title*/ ctx[2]);
    			}

    			const content_changes = {};

    			if (dirty & /*$$scope, subtitle, title*/ 140) {
    				content_changes.$$scope = { dirty, ctx };
    			}

    			content.$set(content_changes);
    			const actions_changes = {};

    			if (dirty & /*$$scope, buttonLabel, direction*/ 176) {
    				actions_changes.$$scope = { dirty, ctx };
    			}

    			actions.$set(actions_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(content.$$.fragment, local);
    			transition_in(actions.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(content.$$.fragment, local);
    			transition_out(actions.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    			if (detaching) detach_dev(t0);
    			destroy_component(content, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(actions, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$1.name,
    		type: "slot",
    		source: "(14:2) <PrimaryAction on:click={() => document.getElementById(contentId).classList.toggle(\\\"hidden\\\")}>",
    		ctx
    	});

    	return block;
    }

    // (13:0) <Card class="custom-card {direction}">
    function create_default_slot$1(ctx) {
    	let primaryaction;
    	let current;

    	primaryaction = new PrimaryAction({
    			props: {
    				$$slots: { default: [create_default_slot_1$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	primaryaction.$on("click", /*click_handler*/ ctx[6]);

    	const block = {
    		c: function create() {
    			create_component(primaryaction.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(primaryaction, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const primaryaction_changes = {};

    			if (dirty & /*$$scope, buttonLabel, direction, subtitle, title, src*/ 190) {
    				primaryaction_changes.$$scope = { dirty, ctx };
    			}

    			primaryaction.$set(primaryaction_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(primaryaction.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(primaryaction.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(primaryaction, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$1.name,
    		type: "slot",
    		source: "(13:0) <Card class=\\\"custom-card {direction}\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$f(ctx) {
    	let card;
    	let current;

    	card = new Card({
    			props: {
    				class: "custom-card " + /*direction*/ ctx[5],
    				$$slots: { default: [create_default_slot$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(card.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(card, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const card_changes = {};
    			if (dirty & /*direction*/ 32) card_changes.class = "custom-card " + /*direction*/ ctx[5];

    			if (dirty & /*$$scope, contentId, buttonLabel, direction, subtitle, title, src*/ 191) {
    				card_changes.$$scope = { dirty, ctx };
    			}

    			card.$set(card_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(card, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$f.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$f($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('ContentCard', slots, []);
    	let { contentId, src, title, subtitle, buttonLabel, direction = "" } = $$props;
    	const writable_props = ['contentId', 'src', 'title', 'subtitle', 'buttonLabel', 'direction'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<ContentCard> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => document.getElementById(contentId).classList.toggle("hidden");

    	$$self.$$set = $$props => {
    		if ('contentId' in $$props) $$invalidate(0, contentId = $$props.contentId);
    		if ('src' in $$props) $$invalidate(1, src = $$props.src);
    		if ('title' in $$props) $$invalidate(2, title = $$props.title);
    		if ('subtitle' in $$props) $$invalidate(3, subtitle = $$props.subtitle);
    		if ('buttonLabel' in $$props) $$invalidate(4, buttonLabel = $$props.buttonLabel);
    		if ('direction' in $$props) $$invalidate(5, direction = $$props.direction);
    	};

    	$$self.$capture_state = () => ({
    		Card,
    		Content,
    		Actions,
    		PrimaryAction,
    		Button: Button_1,
    		Label,
    		contentId,
    		src,
    		title,
    		subtitle,
    		buttonLabel,
    		direction
    	});

    	$$self.$inject_state = $$props => {
    		if ('contentId' in $$props) $$invalidate(0, contentId = $$props.contentId);
    		if ('src' in $$props) $$invalidate(1, src = $$props.src);
    		if ('title' in $$props) $$invalidate(2, title = $$props.title);
    		if ('subtitle' in $$props) $$invalidate(3, subtitle = $$props.subtitle);
    		if ('buttonLabel' in $$props) $$invalidate(4, buttonLabel = $$props.buttonLabel);
    		if ('direction' in $$props) $$invalidate(5, direction = $$props.direction);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [contentId, src, title, subtitle, buttonLabel, direction, click_handler];
    }

    class ContentCard extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$f, create_fragment$f, safe_not_equal, {
    			contentId: 0,
    			src: 1,
    			title: 2,
    			subtitle: 3,
    			buttonLabel: 4,
    			direction: 5
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ContentCard",
    			options,
    			id: create_fragment$f.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*contentId*/ ctx[0] === undefined && !('contentId' in props)) {
    			console.warn("<ContentCard> was created without expected prop 'contentId'");
    		}

    		if (/*src*/ ctx[1] === undefined && !('src' in props)) {
    			console.warn("<ContentCard> was created without expected prop 'src'");
    		}

    		if (/*title*/ ctx[2] === undefined && !('title' in props)) {
    			console.warn("<ContentCard> was created without expected prop 'title'");
    		}

    		if (/*subtitle*/ ctx[3] === undefined && !('subtitle' in props)) {
    			console.warn("<ContentCard> was created without expected prop 'subtitle'");
    		}

    		if (/*buttonLabel*/ ctx[4] === undefined && !('buttonLabel' in props)) {
    			console.warn("<ContentCard> was created without expected prop 'buttonLabel'");
    		}
    	}

    	get contentId() {
    		throw new Error("<ContentCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set contentId(value) {
    		throw new Error("<ContentCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get src() {
    		throw new Error("<ContentCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set src(value) {
    		throw new Error("<ContentCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get title() {
    		throw new Error("<ContentCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<ContentCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get subtitle() {
    		throw new Error("<ContentCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set subtitle(value) {
    		throw new Error("<ContentCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get buttonLabel() {
    		throw new Error("<ContentCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set buttonLabel(value) {
    		throw new Error("<ContentCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get direction() {
    		throw new Error("<ContentCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set direction(value) {
    		throw new Error("<ContentCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Balangero\Cards.svelte generated by Svelte v3.46.6 */
    const file$e = "src\\Balangero\\Cards.svelte";

    function create_fragment$e(ctx) {
    	let div0;
    	let t1;
    	let div3;
    	let contentcard0;
    	let t2;
    	let div2;
    	let div1;
    	let t3;
    	let span0;
    	let t5;
    	let br0;
    	let br1;
    	let t6;
    	let span2;
    	let t7;
    	let span1;
    	let t9;
    	let t10;
    	let custombutton0;
    	let t11;
    	let div6;
    	let div5;
    	let div4;
    	let t12;
    	let span3;
    	let t14;
    	let span4;
    	let t16;
    	let span5;
    	let t18;
    	let br2;
    	let br3;
    	let t19;
    	let span6;
    	let t21;
    	let span8;
    	let t22;
    	let span7;
    	let t24;
    	let t25;
    	let t26;
    	let custombutton1;
    	let t27;
    	let contentcard1;
    	let current;

    	contentcard0 = new ContentCard({
    			props: {
    				contentId: "content-balangero1",
    				src: "img/balangero-berrino.jpg",
    				title: "Dott. Franco Berrino",
    				subtitle: "Laureatosi in medicina all'Università di Torino nel 1969 e specializzatosi in anatomia patologica, si è poi dedicato all'epidemiologia dei tumori.",
    				buttonLabel: "Scopri la sua testimonianza",
    				direction: "left-card"
    			},
    			$$inline: true
    		});

    	custombutton0 = new CustomButton({
    			props: {
    				direction: "right-button",
    				label: "Leggi l'intervista",
    				href: "https://www.corriere.it/cook/news/21_maggio_10/franco-berrino-vivo-solitudine-la-morte-mia-moglie-jo-b48c0c7c-a78d-11eb-b37e-07dee681b819.shtml"
    			},
    			$$inline: true
    		});

    	custombutton1 = new CustomButton({
    			props: {
    				direction: "left-button",
    				label: "Leggi l'articolo",
    				href: "https://www.inail.it/cs/internet/comunicazione/news-ed-eventi/news/ucm_106891_amianto_a_balangero_la_minier.html"
    			},
    			$$inline: true
    		});

    	contentcard1 = new ContentCard({
    			props: {
    				contentId: "content-balangero2",
    				src: "img/balangero-levi-calvino.jpg",
    				title: "Primo Levi e Italo Calvino",
    				subtitle: "L'Amiantifera di Balangero viene denunciata anche dalla letteratura italiana del Novecento",
    				buttonLabel: "Scopri i loro racconti",
    				direction: "right-card"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			div0.textContent = "La miniera raccontata direttamente dai suoi testimoni";
    			t1 = space();
    			div3 = element("div");
    			create_component(contentcard0.$$.fragment);
    			t2 = space();
    			div2 = element("div");
    			div1 = element("div");
    			t3 = text("Una testimonianza diretta della tragedia causata dall'amianto ci arriva dal medico epidemiologo ed esperto di tumori\r\n      ");
    			span0 = element("span");
    			span0.textContent = "Franco Berrino";
    			t5 = text(", cresciuto proprio a Balangero dove il padre, l'ingegnere Giovanni Berrino, era stato nominato direttore\r\n      tecnico della miniera.\r\n      ");
    			br0 = element("br");
    			br1 = element("br");
    			t6 = space();
    			span2 = element("span");
    			t7 = text("\"Non c’era alcuna prevenzione: mio padre fu invitato a dimettersi perché ai padroni non piacevano i suoi investimenti per mettere i filtri, delle\r\n        maniche di cotone. Alla fine è morto di amianto: ");
    			span1 = element("span");
    			span1.textContent = "tumore al polmone";
    			t9 = text(" a 72 anni senza mai aver fumato una sigaretta. Stesso destino\r\n        per mio fratello: mesotelioma, a 67 anni.\"");
    			t10 = space();
    			create_component(custombutton0.$$.fragment);
    			t11 = space();
    			div6 = element("div");
    			div5 = element("div");
    			div4 = element("div");
    			t12 = text("Nel novembre del 1941 ");
    			span3 = element("span");
    			span3.textContent = "Primo Levi";
    			t14 = text(", neolaureato in chimica, lavorò presso la cava di Balangero per compiere ricerche\r\n      sull’estrazione del prezioso nichel dalla roccia di serpentino. Levi descrive la cava paragonandola alla rappresentazione dantesca dei\r\n      ");
    			span4 = element("span");
    			span4.textContent = "gironi infernali";
    			t16 = text(", con fibre di amianto onnipresenti, raffigurate come un demone, asfissiante e ostile. Celebre é diventata\r\n      la sua frase ");
    			span5 = element("span");
    			span5.textContent = "“C’era amianto dappertutto, come una neve cenerina”";
    			t18 = text(".\r\n      ");
    			br2 = element("br");
    			br3 = element("br");
    			t19 = text("\r\n      Nel 1954 ");
    			span6 = element("span");
    			span6.textContent = "Italo Calvino";
    			t21 = text(" arriva nella miniera piemontese come redattore del quotidiano “L’Unità” occupandosi del rischio\r\n      amianto e della sorte degli operai della cava. Italo Calvino diede una lettura emblematica della situazione dei minatori, scrivendo\r\n      ");
    			span8 = element("span");
    			t22 = text("“Il grigio polverone d’asbesto della cava che dove arriva ");
    			span7 = element("span");
    			span7.textContent = "brucia, foglie e polmoni";
    			t24 = text("”");
    			t25 = text(".");
    			t26 = space();
    			create_component(custombutton1.$$.fragment);
    			t27 = space();
    			create_component(contentcard1.$$.fragment);
    			attr_dev(div0, "class", "mdc-typography--headline3 uppercase");
    			set_style(div0, "margin-top", "23vw");
    			add_location(div0, file$e, 5, 0, 161);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$e, 19, 6, 965);
    			add_location(br0, file$e, 21, 6, 1153);
    			add_location(br1, file$e, 21, 12, 1159);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$e, 24, 57, 1408);
    			attr_dev(span2, "class", "italic");
    			add_location(span2, file$e, 22, 6, 1173);
    			add_location(div1, file$e, 17, 4, 828);
    			attr_dev(div2, "class", "mdc-typography--body1 hidden right-align flex-column-2");
    			attr_dev(div2, "id", "content-balangero1");
    			add_location(div2, file$e, 16, 2, 730);
    			attr_dev(div3, "class", "flex-row-4");
    			set_style(div3, "margin-top", "4vw");
    			add_location(div3, file$e, 6, 0, 297);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$e, 39, 28, 2061);
    			attr_dev(span4, "class", "highlight");
    			add_location(span4, file$e, 41, 6, 2334);
    			attr_dev(span5, "class", "italic");
    			add_location(span5, file$e, 42, 19, 2508);
    			add_location(br2, file$e, 43, 6, 2596);
    			add_location(br3, file$e, 43, 12, 2602);
    			attr_dev(span6, "class", "highlight");
    			add_location(span6, file$e, 44, 15, 2625);
    			attr_dev(span7, "class", "highlight");
    			add_location(span7, file$e, 46, 85, 2991);
    			attr_dev(span8, "class", "italic");
    			add_location(span8, file$e, 46, 6, 2912);
    			add_location(div4, file$e, 38, 4, 2026);
    			attr_dev(div5, "class", "mdc-typography--body1 hidden left-align flex-column-2");
    			attr_dev(div5, "id", "content-balangero2");
    			add_location(div5, file$e, 37, 2, 1929);
    			attr_dev(div6, "class", "flex-row-4");
    			set_style(div6, "margin-top", "4vw");
    			add_location(div6, file$e, 36, 0, 1876);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			mount_component(contentcard0, div3, null);
    			append_dev(div3, t2);
    			append_dev(div3, div2);
    			append_dev(div2, div1);
    			append_dev(div1, t3);
    			append_dev(div1, span0);
    			append_dev(div1, t5);
    			append_dev(div1, br0);
    			append_dev(div1, br1);
    			append_dev(div1, t6);
    			append_dev(div1, span2);
    			append_dev(span2, t7);
    			append_dev(span2, span1);
    			append_dev(span2, t9);
    			append_dev(div2, t10);
    			mount_component(custombutton0, div2, null);
    			insert_dev(target, t11, anchor);
    			insert_dev(target, div6, anchor);
    			append_dev(div6, div5);
    			append_dev(div5, div4);
    			append_dev(div4, t12);
    			append_dev(div4, span3);
    			append_dev(div4, t14);
    			append_dev(div4, span4);
    			append_dev(div4, t16);
    			append_dev(div4, span5);
    			append_dev(div4, t18);
    			append_dev(div4, br2);
    			append_dev(div4, br3);
    			append_dev(div4, t19);
    			append_dev(div4, span6);
    			append_dev(div4, t21);
    			append_dev(div4, span8);
    			append_dev(span8, t22);
    			append_dev(span8, span7);
    			append_dev(span8, t24);
    			append_dev(div4, t25);
    			append_dev(div5, t26);
    			mount_component(custombutton1, div5, null);
    			append_dev(div6, t27);
    			mount_component(contentcard1, div6, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(contentcard0.$$.fragment, local);
    			transition_in(custombutton0.$$.fragment, local);
    			transition_in(custombutton1.$$.fragment, local);
    			transition_in(contentcard1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(contentcard0.$$.fragment, local);
    			transition_out(custombutton0.$$.fragment, local);
    			transition_out(custombutton1.$$.fragment, local);
    			transition_out(contentcard1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			destroy_component(contentcard0);
    			destroy_component(custombutton0);
    			if (detaching) detach_dev(t11);
    			if (detaching) detach_dev(div6);
    			destroy_component(custombutton1);
    			destroy_component(contentcard1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$e.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$e($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Cards', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Cards> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ CustomButton, ContentCard });
    	return [];
    }

    class Cards$4 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$e, create_fragment$e, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Cards",
    			options,
    			id: create_fragment$e.name
    		});
    	}
    }

    /* src\Components\StatsCard.svelte generated by Svelte v3.46.6 */
    const file$d = "src\\Components\\StatsCard.svelte";

    // (8:2) <Content style="padding: 1vw;">
    function create_default_slot_1(ctx) {
    	let div0;
    	let t0;
    	let t1;
    	let div1;
    	let t2;

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			t0 = text(/*value*/ ctx[1]);
    			t1 = space();
    			div1 = element("div");
    			t2 = text(/*caption*/ ctx[0]);
    			attr_dev(div0, "class", "mdc-typography--headline4 highlight");
    			add_location(div0, file$d, 8, 4, 265);
    			attr_dev(div1, "class", "mdc-typography--body2 bold");
    			add_location(div1, file$d, 9, 4, 333);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			append_dev(div0, t0);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, t2);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*value*/ 2) set_data_dev(t0, /*value*/ ctx[1]);
    			if (dirty & /*caption*/ 1) set_data_dev(t2, /*caption*/ ctx[0]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1.name,
    		type: "slot",
    		source: "(8:2) <Content style=\\\"padding: 1vw;\\\">",
    		ctx
    	});

    	return block;
    }

    // (7:0) <Card class="stats-card" padded>
    function create_default_slot(ctx) {
    	let content;
    	let current;

    	content = new Content({
    			props: {
    				style: "padding: 1vw;",
    				$$slots: { default: [create_default_slot_1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(content.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(content, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const content_changes = {};

    			if (dirty & /*$$scope, caption, value*/ 7) {
    				content_changes.$$scope = { dirty, ctx };
    			}

    			content.$set(content_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(content.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(content.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(content, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot.name,
    		type: "slot",
    		source: "(7:0) <Card class=\\\"stats-card\\\" padded>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$d(ctx) {
    	let card;
    	let current;

    	card = new Card({
    			props: {
    				class: "stats-card",
    				padded: true,
    				$$slots: { default: [create_default_slot] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(card.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(card, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const card_changes = {};

    			if (dirty & /*$$scope, caption, value*/ 7) {
    				card_changes.$$scope = { dirty, ctx };
    			}

    			card.$set(card_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(card, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$d.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$d($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('StatsCard', slots, []);
    	let { caption, value } = $$props;
    	const writable_props = ['caption', 'value'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<StatsCard> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('caption' in $$props) $$invalidate(0, caption = $$props.caption);
    		if ('value' in $$props) $$invalidate(1, value = $$props.value);
    	};

    	$$self.$capture_state = () => ({ Card, Content, caption, value });

    	$$self.$inject_state = $$props => {
    		if ('caption' in $$props) $$invalidate(0, caption = $$props.caption);
    		if ('value' in $$props) $$invalidate(1, value = $$props.value);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [caption, value];
    }

    class StatsCard extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$d, create_fragment$d, safe_not_equal, { caption: 0, value: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "StatsCard",
    			options,
    			id: create_fragment$d.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*caption*/ ctx[0] === undefined && !('caption' in props)) {
    			console.warn("<StatsCard> was created without expected prop 'caption'");
    		}

    		if (/*value*/ ctx[1] === undefined && !('value' in props)) {
    			console.warn("<StatsCard> was created without expected prop 'value'");
    		}
    	}

    	get caption() {
    		throw new Error("<StatsCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set caption(value) {
    		throw new Error("<StatsCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get value() {
    		throw new Error("<StatsCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set value(value) {
    		throw new Error("<StatsCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Balangero\Stats.svelte generated by Svelte v3.46.6 */
    const file$c = "src\\Balangero\\Stats.svelte";

    function create_fragment$c(ctx) {
    	let div0;
    	let t1;
    	let div1;
    	let statscard0;
    	let t2;
    	let statscard1;
    	let t3;
    	let statscard2;
    	let t4;
    	let div2;
    	let fab;
    	let current;

    	statscard0 = new StatsCard({
    			props: {
    				value: "1918-1990",
    				caption: "Periodo di attivitá"
    			},
    			$$inline: true
    		});

    	statscard1 = new StatsCard({
    			props: {
    				value: "35-40.000 Ton",
    				caption: "Estrazioni annue"
    			},
    			$$inline: true
    		});

    	statscard2 = new StatsCard({
    			props: {
    				value: "214",
    				caption: "Vittime accertate"
    			},
    			$$inline: true
    		});

    	fab = new CustomFAB({
    			props: {
    				target: "content4-1",
    				label: "Continua il viaggio"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			div0.textContent = "La miniera in numeri";
    			t1 = space();
    			div1 = element("div");
    			create_component(statscard0.$$.fragment);
    			t2 = space();
    			create_component(statscard1.$$.fragment);
    			t3 = space();
    			create_component(statscard2.$$.fragment);
    			t4 = space();
    			div2 = element("div");
    			create_component(fab.$$.fragment);
    			attr_dev(div0, "class", "mdc-typography--headline3 uppercase");
    			set_style(div0, "margin-top", "8vw");
    			add_location(div0, file$c, 6, 0, 193);
    			attr_dev(div1, "class", "flex-row-2");
    			set_style(div1, "margin-top", "2vw");
    			add_location(div1, file$c, 7, 0, 295);
    			set_style(div2, "margin-top", "3.5vw");
    			add_location(div2, file$c, 12, 0, 542);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div1, anchor);
    			mount_component(statscard0, div1, null);
    			append_dev(div1, t2);
    			mount_component(statscard1, div1, null);
    			append_dev(div1, t3);
    			mount_component(statscard2, div1, null);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, div2, anchor);
    			mount_component(fab, div2, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(statscard0.$$.fragment, local);
    			transition_in(statscard1.$$.fragment, local);
    			transition_in(statscard2.$$.fragment, local);
    			transition_in(fab.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(statscard0.$$.fragment, local);
    			transition_out(statscard1.$$.fragment, local);
    			transition_out(statscard2.$$.fragment, local);
    			transition_out(fab.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div1);
    			destroy_component(statscard0);
    			destroy_component(statscard1);
    			destroy_component(statscard2);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(div2);
    			destroy_component(fab);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$c.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$c($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Stats', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Stats> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ StatsCard, FAB: CustomFAB });
    	return [];
    }

    class Stats$3 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$c, create_fragment$c, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Stats",
    			options,
    			id: create_fragment$c.name
    		});
    	}
    }

    /* src\Libby\Intro.svelte generated by Svelte v3.46.6 */
    const file$b = "src\\Libby\\Intro.svelte";

    function create_fragment$b(ctx) {
    	let div0;
    	let t1;
    	let div3;
    	let div1;
    	let t3;
    	let div2;
    	let t4;
    	let span0;
    	let t6;
    	let br0;
    	let br1;
    	let t7;
    	let span1;
    	let t9;
    	let span2;
    	let t11;
    	let br2;
    	let br3;
    	let t12;
    	let span3;
    	let t14;
    	let span4;
    	let t16;
    	let t17;
    	let div6;
    	let div4;
    	let t19;
    	let div5;
    	let t20;
    	let span5;
    	let t22;
    	let br4;
    	let br5;
    	let t23;
    	let span6;
    	let t25;
    	let br6;
    	let br7;
    	let t26;
    	let custombutton;
    	let current;

    	custombutton = new CustomButton({
    			props: {
    				label: "Guarda il documentario",
    				href: "https://youtu.be/cy3piCUPIkc?t=492",
    				direction: "right-button"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			div0.textContent = "Libby, USA";
    			t1 = space();
    			div3 = element("div");
    			div1 = element("div");
    			div1.textContent = "Storia del passato";
    			t3 = space();
    			div2 = element("div");
    			t4 = text("La cittadina di Libby in Montana è il sito di uno dei peggiori ");
    			span0 = element("span");
    			span0.textContent = "disastri ambientali";
    			t6 = text(" causati dall'uomo. La polvere di amianto\r\n    tossico proveniente dalle miniere di vermiculite ha ucciso centinaia di residenti, ammalandone altre migliaia.\r\n    ");
    			br0 = element("br");
    			br1 = element("br");
    			t7 = text("\r\n    Nel 1963, la W.R. Grace & Company, iniziò a scavare un deposito di ");
    			span1 = element("span");
    			span1.textContent = "vermiculite";
    			t9 = text(" su una cima boschiva vicino a Libby. Il\r\n    minerale, relativamente innocuo, è stato utilizzato come isolamento delle soffitte fino agli anni 1980. Ma nello stesso deposito è stato trovato un tipo\r\n    naturale di ");
    			span2 = element("span");
    			span2.textContent = "amianto mortale";
    			t11 = text(".\r\n    ");
    			br2 = element("br");
    			br3 = element("br");
    			t12 = text("\r\n    Per decenni, la miniera ha prodotto ");
    			span3 = element("span");
    			span3.textContent = "tonnellate di polvere";
    			t14 = text(" al giorno, che non solo fluttuava ovunque negli stabilimenti, ma\r\n    inondava l'aria respirabile di gran parte della città. L'azienda sapeva che la vermiculite era ");
    			span4 = element("span");
    			span4.textContent = "contaminata";
    			t16 = text(" dall'amianto, ma non\r\n    avvertì nessuno e continuò ad operare fino al 1990.");
    			t17 = space();
    			div6 = element("div");
    			div4 = element("div");
    			div4.textContent = "Conseguenze sul presente";
    			t19 = space();
    			div5 = element("div");
    			t20 = text("Quando l'azienda venne chiusa, gli operai del governo chiamati per il risanamento hanno trovato l'amianto quasi ");
    			span5 = element("span");
    			span5.textContent = "dappertutto";
    			t22 = text(":\r\n    nei polmoni degli operai e delle loro famiglie, sul campo da baseball e sulle piste da corsa del liceo a cui l'azienda aveva donato il materiale per la\r\n    copertura.\r\n    ");
    			br4 = element("br");
    			br5 = element("br");
    			t23 = text("\r\n    Gli effetti dolorosi delle polveri continuano ");
    			span6 = element("span");
    			span6.textContent = "lenti ma inesorabili";
    			t25 = text(": ci vogliono decenni perchè i sintomi delle malattie da\r\n    amianto si manifestino, infatti i bambini che hanno giocato a baseball o corso sulle piste a contatto con l'amianto stanno iniziando ad ammalarsi solo ora.\r\n    ");
    			br6 = element("br");
    			br7 = element("br");
    			t26 = space();
    			create_component(custombutton.$$.fragment);
    			attr_dev(div0, "class", "mdc-typography--headline1 uppercase");
    			add_location(div0, file$b, 4, 0, 88);
    			attr_dev(div1, "class", "mdc-typography--headline4 uppercase");
    			add_location(div1, file$b, 7, 2, 179);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$b, 9, 67, 360);
    			add_location(br0, file$b, 11, 4, 573);
    			add_location(br1, file$b, 11, 10, 579);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$b, 12, 71, 658);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$b, 14, 16, 916);
    			add_location(br2, file$b, 15, 4, 969);
    			add_location(br3, file$b, 15, 10, 975);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$b, 16, 40, 1023);
    			attr_dev(span4, "class", "highlight");
    			add_location(span4, file$b, 17, 99, 1241);
    			attr_dev(div2, "class", "mdc-typography--body1");
    			add_location(div2, file$b, 8, 2, 256);
    			attr_dev(div3, "class", "left svelte-tz0xuf");
    			add_location(div3, file$b, 6, 0, 157);
    			attr_dev(div4, "class", "mdc-typography--headline4 uppercase primary");
    			add_location(div4, file$b, 23, 2, 1406);
    			attr_dev(span5, "class", "highlight");
    			add_location(span5, file$b, 25, 116, 1650);
    			add_location(br4, file$b, 28, 4, 1872);
    			add_location(br5, file$b, 28, 10, 1878);
    			attr_dev(span6, "class", "highlight");
    			add_location(span6, file$b, 29, 50, 1936);
    			add_location(br6, file$b, 31, 4, 2210);
    			add_location(br7, file$b, 31, 10, 2216);
    			attr_dev(div5, "class", "mdc-typography--body1");
    			add_location(div5, file$b, 24, 2, 1497);
    			attr_dev(div6, "class", "right svelte-tz0xuf");
    			add_location(div6, file$b, 22, 0, 1383);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div1);
    			append_dev(div3, t3);
    			append_dev(div3, div2);
    			append_dev(div2, t4);
    			append_dev(div2, span0);
    			append_dev(div2, t6);
    			append_dev(div2, br0);
    			append_dev(div2, br1);
    			append_dev(div2, t7);
    			append_dev(div2, span1);
    			append_dev(div2, t9);
    			append_dev(div2, span2);
    			append_dev(div2, t11);
    			append_dev(div2, br2);
    			append_dev(div2, br3);
    			append_dev(div2, t12);
    			append_dev(div2, span3);
    			append_dev(div2, t14);
    			append_dev(div2, span4);
    			append_dev(div2, t16);
    			insert_dev(target, t17, anchor);
    			insert_dev(target, div6, anchor);
    			append_dev(div6, div4);
    			append_dev(div6, t19);
    			append_dev(div6, div5);
    			append_dev(div5, t20);
    			append_dev(div5, span5);
    			append_dev(div5, t22);
    			append_dev(div5, br4);
    			append_dev(div5, br5);
    			append_dev(div5, t23);
    			append_dev(div5, span6);
    			append_dev(div5, t25);
    			append_dev(div5, br6);
    			append_dev(div5, br7);
    			append_dev(div5, t26);
    			mount_component(custombutton, div5, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(custombutton.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(custombutton.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			if (detaching) detach_dev(t17);
    			if (detaching) detach_dev(div6);
    			destroy_component(custombutton);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$b.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$b($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Intro', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Intro> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ CustomButton });
    	return [];
    }

    class Intro$3 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$b, create_fragment$b, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Intro",
    			options,
    			id: create_fragment$b.name
    		});
    	}
    }

    /* src\Libby\Cards.svelte generated by Svelte v3.46.6 */
    const file$a = "src\\Libby\\Cards.svelte";

    function create_fragment$a(ctx) {
    	let div0;
    	let t1;
    	let div4;
    	let contentcard0;
    	let t2;
    	let div3;
    	let div2;
    	let t3;
    	let span0;
    	let t5;
    	let span1;
    	let t7;
    	let span2;
    	let t9;
    	let br0;
    	let br1;
    	let t10;
    	let span3;
    	let t12;
    	let br2;
    	let br3;
    	let t13;
    	let div1;
    	let t14;
    	let span4;
    	let t16;
    	let t17;
    	let custombutton0;
    	let t18;
    	let div7;
    	let div6;
    	let div5;
    	let t19;
    	let span5;
    	let t21;
    	let span6;
    	let t23;
    	let br4;
    	let br5;
    	let t24;
    	let span7;
    	let t26;
    	let span8;
    	let t28;
    	let br6;
    	let br7;
    	let t29;
    	let span9;
    	let t31;
    	let t32;
    	let custombutton1;
    	let t33;
    	let contentcard1;
    	let current;

    	contentcard0 = new ContentCard({
    			props: {
    				contentId: "content-libby1",
    				src: "img/libby-hutt.jpg",
    				title: "Ralph Hutt",
    				subtitle: "La testimonianza di un ex-operaio presso l'azienda mineraria W.R. Grace & Company.",
    				buttonLabel: "Ascolta la sua storia",
    				direction: "left-card"
    			},
    			$$inline: true
    		});

    	custombutton0 = new CustomButton({
    			props: {
    				direction: "right-button",
    				label: "Guarda l'intervista",
    				href: "https://youtu.be/ILklSy6QLbI"
    			},
    			$$inline: true
    		});

    	custombutton1 = new CustomButton({
    			props: {
    				direction: "left-button",
    				label: "Leggi lo studio",
    				href: "https://www.nature.com/articles/jes201618"
    			},
    			$$inline: true
    		});

    	contentcard1 = new ContentCard({
    			props: {
    				contentId: "content-libby2",
    				src: "img/libby-today.jpg",
    				title: "La situazione a Libby oggi",
    				subtitle: "Come le attivitá di sanificazione hanno provato a rimediare al disastro causato dalla miniera.",
    				buttonLabel: "Scopri di piú",
    				direction: "right-card"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			div0.textContent = "Si puó tornare indietro da questo disastro?";
    			t1 = space();
    			div4 = element("div");
    			create_component(contentcard0.$$.fragment);
    			t2 = space();
    			div3 = element("div");
    			div2 = element("div");
    			t3 = text("Il signor ");
    			span0 = element("span");
    			span0.textContent = "Ralph Hutt";
    			t5 = text(" ha lavorato a contatto con l'amianto soltanto per ");
    			span1 = element("span");
    			span1.textContent = "18 mesi";
    			t7 = text(" e gli è stata\r\n      diagnosticata l'asbestosi polmonare nel 2002. Ai tempi, le uniche precauzioni fornite ai lavoratori dall'azienda erano\r\n      ");
    			span2 = element("span");
    			span2.textContent = "mascherine di carta";
    			t9 = text(". Quando ha chiesto al suo supervisore una maggiore protezione, gli fu detto di non preoccuparsi poiché\r\n      ció che respiravano era solo polvere.\r\n      ");
    			br0 = element("br");
    			br1 = element("br");
    			t10 = text("\r\n      Giá da allora le sue radiografie mostravano segni dei danni da amianto ai polmoni, tra cui la graduale perdita della\r\n      ");
    			span3 = element("span");
    			span3.textContent = "capacità di respirare";
    			t12 = text(". I dirigenti dell'azienda erano al corrente della presenza di amianto nello stabilimento, ma decisero\r\n      di tenere tutti i lavoratori, tra cui Ralph, all'oscuro.\r\n      ");
    			br2 = element("br");
    			br3 = element("br");
    			t13 = space();
    			div1 = element("div");
    			t14 = text("\"Questo non è il modo in cui me ne voglio andare,\" ha detto. \"Lasciate che qualcuno mi spari. Non voglio essere schiacciato sott'acqua o ");
    			span4 = element("span");
    			span4.textContent = "strangolato";
    			t16 = text(". È così che ci si sente.\"");
    			t17 = space();
    			create_component(custombutton0.$$.fragment);
    			t18 = space();
    			div7 = element("div");
    			div6 = element("div");
    			div5 = element("div");
    			t19 = text("Secondo uno studio del 2017 pubblicato sul Journal of Exposure Science and Environmental Epidemiology, circa 694 residenti di Libby sono\r\n      ");
    			span5 = element("span");
    			span5.textContent = "morti";
    			t21 = text(" per malattie correlate all'amianto, e circa 1 su 10 tra tutti abitanti é\r\n      ");
    			span6 = element("span");
    			span6.textContent = "attualmente malato";
    			t23 = text(".\r\n      ");
    			br4 = element("br");
    			br5 = element("br");
    			t24 = text("\r\n      L’Agenzia per la Protezione Ambientale Americana ha effettuato sopralluoghi in circa ");
    			span7 = element("span");
    			span7.textContent = "8200 proprietà";
    			t26 = text(", di cui piú di 2400\r\n      siti sono stati risanificati completamente. Tra questi rientravano attività commerciali, giardini, abitazioni private, parchi e altri\r\n      ");
    			span8 = element("span");
    			span8.textContent = "spazi pubblici";
    			t28 = text(" frequentati.\r\n      ");
    			br6 = element("br");
    			br7 = element("br");
    			t29 = text("\r\n      Ad oggi, per la decontaminazione e il ");
    			span9 = element("span");
    			span9.textContent = "risanamento";
    			t31 = text(" della città di Libby, sono stati rimossi e rimpiazzati complessivamente più\r\n      di 750’000 metri cubi di rifiuti e materiali da costruzione, causando una spesa di oltre 600 milioni di dollari statali.");
    			t32 = space();
    			create_component(custombutton1.$$.fragment);
    			t33 = space();
    			create_component(contentcard1.$$.fragment);
    			attr_dev(div0, "class", "mdc-typography--headline3 uppercase");
    			set_style(div0, "margin-top", "16vw");
    			add_location(div0, file$a, 5, 0, 161);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$a, 17, 16, 748);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$a, 17, 108, 840);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$a, 19, 6, 1026);
    			add_location(br0, file$a, 21, 6, 1232);
    			add_location(br1, file$a, 21, 12, 1238);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$a, 23, 6, 1376);
    			add_location(br2, file$a, 25, 6, 1602);
    			add_location(br3, file$a, 25, 12, 1608);
    			attr_dev(span4, "class", "highlight");
    			add_location(span4, file$a, 27, 145, 1789);
    			attr_dev(div1, "class", "italic");
    			add_location(div1, file$a, 26, 6, 1622);
    			add_location(div2, file$a, 16, 4, 725);
    			attr_dev(div3, "class", "mdc-typography--body1 hidden right-align flex-column-2");
    			attr_dev(div3, "id", "content-libby1");
    			add_location(div3, file$a, 15, 2, 631);
    			attr_dev(div4, "class", "flex-row-4");
    			set_style(div4, "margin", "4vw 0 0 2vw");
    			add_location(div4, file$a, 6, 0, 287);
    			attr_dev(span5, "class", "highlight");
    			add_location(span5, file$a, 40, 6, 2346);
    			attr_dev(span6, "class", "highlight");
    			add_location(span6, file$a, 41, 6, 2463);
    			add_location(br4, file$a, 42, 6, 2521);
    			add_location(br5, file$a, 42, 12, 2527);
    			attr_dev(span7, "class", "highlight");
    			add_location(span7, file$a, 43, 91, 2626);
    			attr_dev(span8, "class", "highlight");
    			add_location(span8, file$a, 45, 6, 2840);
    			add_location(br6, file$a, 46, 6, 2906);
    			add_location(br7, file$a, 46, 12, 2912);
    			attr_dev(span9, "class", "highlight");
    			add_location(span9, file$a, 47, 44, 2964);
    			add_location(div5, file$a, 38, 4, 2189);
    			attr_dev(div6, "class", "mdc-typography--body1 hidden left-align flex-column-2");
    			attr_dev(div6, "id", "content-libby2");
    			add_location(div6, file$a, 37, 2, 2096);
    			attr_dev(div7, "class", "flex-row-4");
    			set_style(div7, "margin-top", "6vw");
    			add_location(div7, file$a, 36, 0, 2043);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div4, anchor);
    			mount_component(contentcard0, div4, null);
    			append_dev(div4, t2);
    			append_dev(div4, div3);
    			append_dev(div3, div2);
    			append_dev(div2, t3);
    			append_dev(div2, span0);
    			append_dev(div2, t5);
    			append_dev(div2, span1);
    			append_dev(div2, t7);
    			append_dev(div2, span2);
    			append_dev(div2, t9);
    			append_dev(div2, br0);
    			append_dev(div2, br1);
    			append_dev(div2, t10);
    			append_dev(div2, span3);
    			append_dev(div2, t12);
    			append_dev(div2, br2);
    			append_dev(div2, br3);
    			append_dev(div2, t13);
    			append_dev(div2, div1);
    			append_dev(div1, t14);
    			append_dev(div1, span4);
    			append_dev(div1, t16);
    			append_dev(div3, t17);
    			mount_component(custombutton0, div3, null);
    			insert_dev(target, t18, anchor);
    			insert_dev(target, div7, anchor);
    			append_dev(div7, div6);
    			append_dev(div6, div5);
    			append_dev(div5, t19);
    			append_dev(div5, span5);
    			append_dev(div5, t21);
    			append_dev(div5, span6);
    			append_dev(div5, t23);
    			append_dev(div5, br4);
    			append_dev(div5, br5);
    			append_dev(div5, t24);
    			append_dev(div5, span7);
    			append_dev(div5, t26);
    			append_dev(div5, span8);
    			append_dev(div5, t28);
    			append_dev(div5, br6);
    			append_dev(div5, br7);
    			append_dev(div5, t29);
    			append_dev(div5, span9);
    			append_dev(div5, t31);
    			append_dev(div6, t32);
    			mount_component(custombutton1, div6, null);
    			append_dev(div7, t33);
    			mount_component(contentcard1, div7, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(contentcard0.$$.fragment, local);
    			transition_in(custombutton0.$$.fragment, local);
    			transition_in(custombutton1.$$.fragment, local);
    			transition_in(contentcard1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(contentcard0.$$.fragment, local);
    			transition_out(custombutton0.$$.fragment, local);
    			transition_out(custombutton1.$$.fragment, local);
    			transition_out(contentcard1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div4);
    			destroy_component(contentcard0);
    			destroy_component(custombutton0);
    			if (detaching) detach_dev(t18);
    			if (detaching) detach_dev(div7);
    			destroy_component(custombutton1);
    			destroy_component(contentcard1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$a.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$a($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Cards', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Cards> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ CustomButton, ContentCard });
    	return [];
    }

    class Cards$3 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$a, create_fragment$a, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Cards",
    			options,
    			id: create_fragment$a.name
    		});
    	}
    }

    /* src\Libby\Stats.svelte generated by Svelte v3.46.6 */
    const file$9 = "src\\Libby\\Stats.svelte";

    function create_fragment$9(ctx) {
    	let div0;
    	let t1;
    	let div1;
    	let statscard0;
    	let t2;
    	let statscard1;
    	let t3;
    	let statscard2;
    	let t4;
    	let div2;
    	let fab;
    	let current;

    	statscard0 = new StatsCard({
    			props: {
    				value: "1919-1990",
    				caption: "Periodo di attivitá"
    			},
    			$$inline: true
    		});

    	statscard1 = new StatsCard({
    			props: {
    				value: "2,400+",
    				caption: "Tumori diagnosticati"
    			},
    			$$inline: true
    		});

    	statscard2 = new StatsCard({
    			props: {
    				value: "694",
    				caption: "Vittime accertate"
    			},
    			$$inline: true
    		});

    	fab = new CustomFAB({
    			props: {
    				target: "content5-1",
    				label: "Continua il viaggio"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			div0.textContent = "La miniera in numeri";
    			t1 = space();
    			div1 = element("div");
    			create_component(statscard0.$$.fragment);
    			t2 = space();
    			create_component(statscard1.$$.fragment);
    			t3 = space();
    			create_component(statscard2.$$.fragment);
    			t4 = space();
    			div2 = element("div");
    			create_component(fab.$$.fragment);
    			attr_dev(div0, "class", "mdc-typography--headline3 uppercase");
    			set_style(div0, "margin-top", "6vw");
    			add_location(div0, file$9, 6, 0, 193);
    			attr_dev(div1, "class", "flex-row-2");
    			set_style(div1, "margin-top", "2vw");
    			add_location(div1, file$9, 7, 0, 295);
    			set_style(div2, "margin-top", "3vw");
    			add_location(div2, file$9, 12, 0, 539);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div1, anchor);
    			mount_component(statscard0, div1, null);
    			append_dev(div1, t2);
    			mount_component(statscard1, div1, null);
    			append_dev(div1, t3);
    			mount_component(statscard2, div1, null);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, div2, anchor);
    			mount_component(fab, div2, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(statscard0.$$.fragment, local);
    			transition_in(statscard1.$$.fragment, local);
    			transition_in(statscard2.$$.fragment, local);
    			transition_in(fab.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(statscard0.$$.fragment, local);
    			transition_out(statscard1.$$.fragment, local);
    			transition_out(statscard2.$$.fragment, local);
    			transition_out(fab.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div1);
    			destroy_component(statscard0);
    			destroy_component(statscard1);
    			destroy_component(statscard2);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(div2);
    			destroy_component(fab);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$9.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$9($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Stats', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Stats> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ StatsCard, FAB: CustomFAB });
    	return [];
    }

    class Stats$2 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$9, create_fragment$9, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Stats",
    			options,
    			id: create_fragment$9.name
    		});
    	}
    }

    /* src\Minacu\Intro.svelte generated by Svelte v3.46.6 */

    const file$8 = "src\\Minacu\\Intro.svelte";

    function create_fragment$8(ctx) {
    	let div0;
    	let t1;
    	let div3;
    	let div1;
    	let t3;
    	let div2;
    	let t4;
    	let span0;
    	let t6;
    	let span1;
    	let t8;
    	let br0;
    	let br1;
    	let t9;
    	let span2;
    	let t11;
    	let br2;
    	let br3;
    	let t12;
    	let span3;
    	let t14;
    	let t15;
    	let div6;
    	let div4;
    	let t17;
    	let div5;
    	let t18;
    	let span4;
    	let t20;
    	let span5;
    	let t22;
    	let br4;
    	let br5;
    	let t23;
    	let span7;
    	let t24;
    	let span6;
    	let t26;
    	let t27;
    	let span8;
    	let t29;
    	let br6;
    	let br7;
    	let t30;
    	let span9;
    	let t32;
    	let span10;
    	let t34;

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			div0.textContent = "Minaçu, Brasile";
    			t1 = space();
    			div3 = element("div");
    			div1 = element("div");
    			div1.textContent = "Una storia controversa";
    			t3 = space();
    			div2 = element("div");
    			t4 = text("Minaçu è un comune brasiliano dello stato del Goiàs dove opera la ");
    			span0 = element("span");
    			span0.textContent = "SAMA";
    			t6 = text(", un'industria franco-brasiliana dedita all’estrazione\r\n    di amianto crisotilo, e dove è presente la più grande miniera di amianto del Brasile chiamata ");
    			span1 = element("span");
    			span1.textContent = "Cana Brava";
    			t8 = text(". L'amianto ha reso\r\n    Minaçu uno dei comuni più ricchi del paese.\r\n    ");
    			br0 = element("br");
    			br1 = element("br");
    			t9 = text("\r\n    Le leggi federali in Brasile attestano chiaramente la pericolosità dell’amianto. Ciononostante l’estrazione, la manipolazione e la commercializzazione di quest’ultimo\r\n    son rimaste attive fino al 2017, anno in cui la Corte Suprema Federale ha ");
    			span2 = element("span");
    			span2.textContent = "vietato";
    			t11 = text(" l’uso del minerale.\r\n    ");
    			br2 = element("br");
    			br3 = element("br");
    			t12 = text("\r\n    Nel 2019, peró, il governatore del Brasile ha emanato una ");
    			span3 = element("span");
    			span3.textContent = "legislazione";
    			t14 = text(" nello stato di Goiás, approvando l’estrazione ed esportazione\r\n    di amianto, facendo continuare così l’operato di Cana Brava. Questa mossa politica ha portato gli abitanti di Minaçu in una situazione delicata di fronte a un\r\n    bivio: in qualsiasi momento una decisione del tribunale potrebbe interrompere l'attività mineraria della cittá caduta proprio in un periodo economico difficile.");
    			t15 = space();
    			div6 = element("div");
    			div4 = element("div");
    			div4.textContent = "L'opinione degli abitanti";
    			t17 = space();
    			div5 = element("div");
    			t18 = text("Alcuni residenti desiderano che la città abbandoni l’amianto e si rinnovi, secondo altri invece senza amianto la città è finita. ");
    			span4 = element("span");
    			span4.textContent = "\"Se SAMA si ferma, la città si ferma\"";
    			t20 = text(", ha detto Joaquim de Souza, 54 anni, operaio della SAMA, che vive vicino alla massiccia collina di ");
    			span5 = element("span");
    			span5.textContent = "legislazione";
    			t22 = text("detriti di\r\n    amianto di Minaçu.\r\n    ");
    			br4 = element("br");
    			br5 = element("br");
    			t23 = text("\r\n    Molti si riferiscono all'azienda come la ");
    			span7 = element("span");
    			t24 = text("\"");
    			span6 = element("span");
    			span6.textContent = "madre";
    			t26 = text(" di Minaçu, che si prende cura dei suoi abitanti\"");
    			t27 = text(",\r\n    mentre altri la ritengono in realtá una ");
    			span8 = element("span");
    			span8.textContent = "\"madre perversa che fa ammalare le persone, voltandogli poi le spalle\"";
    			t29 = text(".\r\n    ");
    			br6 = element("br");
    			br7 = element("br");
    			t30 = text("\r\n    In tanti ancora negano che l'amianto sia ");
    			span9 = element("span");
    			span9.textContent = "dannoso";
    			t32 = text(", sostenendo che\r\n    ");
    			span10 = element("span");
    			span10.textContent = "\"la maggior parte dei lavoratori fumava, e solo dopo essersi ammalati per le sigarette hanno accusato SAMA\"";
    			t34 = text(".");
    			attr_dev(div0, "class", "mdc-typography--headline1 uppercase");
    			add_location(div0, file$8, 0, 0, 0);
    			attr_dev(div1, "class", "mdc-typography--headline4 uppercase");
    			add_location(div1, file$8, 3, 2, 96);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$8, 5, 70, 284);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$8, 6, 98, 473);
    			add_location(br0, file$8, 8, 4, 588);
    			add_location(br1, file$8, 8, 10, 594);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$8, 10, 78, 852);
    			add_location(br2, file$8, 11, 4, 916);
    			add_location(br3, file$8, 11, 10, 922);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$8, 12, 62, 992);
    			attr_dev(div2, "class", "mdc-typography--body1");
    			add_location(div2, file$8, 4, 2, 177);
    			attr_dev(div3, "class", "left svelte-1b0ac56");
    			add_location(div3, file$8, 2, 0, 74);
    			attr_dev(div4, "class", "mdc-typography--headline4 uppercase primary");
    			add_location(div4, file$8, 19, 2, 1472);
    			attr_dev(span4, "class", "italic");
    			add_location(span4, file$8, 21, 133, 1734);
    			attr_dev(span5, "class", "highlight");
    			add_location(span5, file$8, 23, 105, 1913);
    			add_location(br4, file$8, 25, 4, 1996);
    			add_location(br5, file$8, 25, 10, 2002);
    			attr_dev(span6, "class", "highlight");
    			add_location(span6, file$8, 26, 67, 2077);
    			attr_dev(span7, "class", "italic");
    			add_location(span7, file$8, 26, 45, 2055);
    			attr_dev(span8, "class", "italic");
    			add_location(span8, file$8, 27, 44, 2216);
    			add_location(br6, file$8, 28, 4, 2321);
    			add_location(br7, file$8, 28, 10, 2327);
    			attr_dev(span9, "class", "highlight");
    			add_location(span9, file$8, 29, 45, 2380);
    			attr_dev(span10, "class", "italic");
    			add_location(span10, file$8, 30, 4, 2440);
    			attr_dev(div5, "class", "mdc-typography--body1");
    			add_location(div5, file$8, 20, 2, 1564);
    			attr_dev(div6, "class", "right svelte-1b0ac56");
    			add_location(div6, file$8, 18, 0, 1449);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div1);
    			append_dev(div3, t3);
    			append_dev(div3, div2);
    			append_dev(div2, t4);
    			append_dev(div2, span0);
    			append_dev(div2, t6);
    			append_dev(div2, span1);
    			append_dev(div2, t8);
    			append_dev(div2, br0);
    			append_dev(div2, br1);
    			append_dev(div2, t9);
    			append_dev(div2, span2);
    			append_dev(div2, t11);
    			append_dev(div2, br2);
    			append_dev(div2, br3);
    			append_dev(div2, t12);
    			append_dev(div2, span3);
    			append_dev(div2, t14);
    			insert_dev(target, t15, anchor);
    			insert_dev(target, div6, anchor);
    			append_dev(div6, div4);
    			append_dev(div6, t17);
    			append_dev(div6, div5);
    			append_dev(div5, t18);
    			append_dev(div5, span4);
    			append_dev(div5, t20);
    			append_dev(div5, span5);
    			append_dev(div5, t22);
    			append_dev(div5, br4);
    			append_dev(div5, br5);
    			append_dev(div5, t23);
    			append_dev(div5, span7);
    			append_dev(span7, t24);
    			append_dev(span7, span6);
    			append_dev(span7, t26);
    			append_dev(div5, t27);
    			append_dev(div5, span8);
    			append_dev(div5, t29);
    			append_dev(div5, br6);
    			append_dev(div5, br7);
    			append_dev(div5, t30);
    			append_dev(div5, span9);
    			append_dev(div5, t32);
    			append_dev(div5, span10);
    			append_dev(div5, t34);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			if (detaching) detach_dev(t15);
    			if (detaching) detach_dev(div6);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$8.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$8($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Intro', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Intro> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Intro$2 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$8, create_fragment$8, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Intro",
    			options,
    			id: create_fragment$8.name
    		});
    	}
    }

    /* src\Minacu\Cards.svelte generated by Svelte v3.46.6 */
    const file$7 = "src\\Minacu\\Cards.svelte";

    function create_fragment$7(ctx) {
    	let div0;
    	let t1;
    	let div3;
    	let contentcard0;
    	let t2;
    	let div2;
    	let div1;
    	let t3;
    	let span0;
    	let t5;
    	let span1;
    	let t7;
    	let br0;
    	let br1;
    	let t8;
    	let span2;
    	let t10;
    	let span3;
    	let t12;
    	let t13;
    	let custombutton0;
    	let t14;
    	let div6;
    	let div5;
    	let div4;
    	let t15;
    	let br2;
    	let t16;
    	let span4;
    	let t18;
    	let span6;
    	let t19;
    	let span5;
    	let t21;
    	let t22;
    	let br3;
    	let br4;
    	let t23;
    	let span7;
    	let t25;
    	let span9;
    	let t26;
    	let span8;
    	let t28;
    	let t29;
    	let t30;
    	let custombutton1;
    	let t31;
    	let contentcard1;
    	let current;

    	contentcard0 = new ContentCard({
    			props: {
    				contentId: "content-minacu1",
    				src: "img/minacu-court.png",
    				title: "Le infinite battaglie legali",
    				subtitle: "Come le vittime hanno cercato giustizia contro i danni della miniera",
    				buttonLabel: "Scopri di più",
    				direction: "left-card"
    			},
    			$$inline: true
    		});

    	custombutton0 = new CustomButton({
    			props: {
    				direction: "right-button",
    				label: "Approfondisci l'inchiesta",
    				href: "https://www.reuters.com/article/brazil-mining-environment-asbestos-idINL8N2T241L"
    			},
    			$$inline: true
    		});

    	custombutton1 = new CustomButton({
    			props: {
    				direction: "left-button",
    				label: "Leggi l'articolo",
    				href: "https://ejatlas.org/conflict/amianto-mining-in-minacu-goias"
    			},
    			$$inline: true
    		});

    	contentcard1 = new ContentCard({
    			props: {
    				contentId: "content-minacu2",
    				src: "img/minacu-evandra.jpg",
    				title: "Evandra Vieira Brito",
    				subtitle: "Vedova di un ex dipendente di SAMA",
    				buttonLabel: "Leggi la testimonianza",
    				direction: "right-card"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			div0.textContent = "Come si sono schierati i cittadini con ideologie differenti?";
    			t1 = space();
    			div3 = element("div");
    			create_component(contentcard0.$$.fragment);
    			t2 = space();
    			div2 = element("div");
    			div1 = element("div");
    			t3 = text("Quando l'industria dell'amianto era forte a Minaçu, SAMA ha finanziato eventi culturali, religiosi e sportivi, ed è stato un importante donatore politico,\r\n      scegliendo sindaci, consiglieri e sacerdoti schierati a ");
    			span0 = element("span");
    			span0.textContent = "difesa dell'amianto";
    			t5 = text(". Denigrare pubblicamente SAMA può essere\r\n      considerato tabù da alcuni residenti, infatti in migliaia hanno tranquillamente firmato\r\n      ");
    			span1 = element("span");
    			span1.textContent = "accordi";
    			t7 = text("\r\n      con la compagnia per ottenere un risarcimento sui danni sanitari.\r\n      ");
    			br0 = element("br");
    			br1 = element("br");
    			t8 = text("\r\n      La causa in corso é portata avanti dalla ");
    			span2 = element("span");
    			span2.textContent = "ABREA";
    			t10 = text(", associazione brasiliana a difesa delle vittime di amianto fondata da\r\n      Fernanda Giannasi nel 1995. L'ultima sentenza del tribunale nel Novembre del 2021 ha ordinato alla compagnia di pagare le\r\n      ");
    			span3 = element("span");
    			span3.textContent = "spese mediche";
    			t12 = text(" per i prossimi 30 anni a tutti i lavoratori che abbiano manifestato problemi di salute \"associabili all'amianto\".");
    			t13 = space();
    			create_component(custombutton0.$$.fragment);
    			t14 = space();
    			div6 = element("div");
    			div5 = element("div");
    			div4 = element("div");
    			t15 = text("Nel cosiddetto \"letto di polvere\", luogo in cui il minerale veniva separato, gli operai, tra i quali molte donne, erano coperti di polvere.");
    			br2 = element("br");
    			t16 = text("\r\n      Ce ne da una testimonianza chiara ");
    			span4 = element("span");
    			span4.textContent = "Evandra Vieira Brito";
    			t18 = text(", che ha perso il marito (un ex dipendente di SAMA) a causa di un\r\n      cancro nel 2009, ricordando:\r\n      ");
    			span6 = element("span");
    			t19 = text("\"C'erano circa 20 ragazze coperte dalla polvere. Sono ");
    			span5 = element("span");
    			span5.textContent = "morte tutte";
    			t21 = text(" dopo aver vomitato sangue\"");
    			t22 = text(".\r\n      ");
    			br3 = element("br");
    			br4 = element("br");
    			t23 = text("\r\n      Nonostante questo tipo di testimonianze, gruppi favorevoli alla miniera hanno dichiarato che\r\n      ");
    			span7 = element("span");
    			span7.textContent = "\"il modo in cui viene estratto l'amianto a Minaçu non è dannoso per la salute\"";
    			t25 = text(" e che\r\n      ");
    			span9 = element("span");
    			t26 = text("\"l'azienda rispetta tutte le leggi relative alla ");
    			span8 = element("span");
    			span8.textContent = "salute sul lavoro";
    			t28 = text("\"");
    			t29 = text(". Affermano inoltre che le\r\n      persone che si ammalano in miniera in questo momento è perché si sono ammalate a causa del lavoro svolto precedentemente presso un' altra miniera e sono\r\n      successivamente emigrate per lavoro a Cana Brava.");
    			t30 = space();
    			create_component(custombutton1.$$.fragment);
    			t31 = space();
    			create_component(contentcard1.$$.fragment);
    			attr_dev(div0, "class", "mdc-typography--headline3 uppercase");
    			set_style(div0, "margin-top", "12vw");
    			add_location(div0, file$7, 5, 0, 161);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$7, 18, 62, 969);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$7, 20, 6, 1163);
    			add_location(br0, file$7, 22, 6, 1282);
    			add_location(br1, file$7, 22, 12, 1288);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$7, 23, 47, 1343);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$7, 25, 6, 1586);
    			add_location(div1, file$7, 16, 4, 738);
    			attr_dev(div2, "class", "mdc-typography--body1 hidden right-align flex-column-2");
    			attr_dev(div2, "id", "content-minacu1");
    			add_location(div2, file$7, 15, 2, 643);
    			attr_dev(div3, "class", "flex-row-4");
    			set_style(div3, "margin-top", "4vw");
    			add_location(div3, file$7, 6, 0, 304);
    			add_location(br2, file$7, 38, 145, 2278);
    			attr_dev(span4, "class", "highlight");
    			add_location(span4, file$7, 39, 40, 2326);
    			attr_dev(span5, "class", "highlight");
    			add_location(span5, file$7, 41, 81, 2561);
    			attr_dev(span6, "class", "italic");
    			add_location(span6, file$7, 41, 6, 2486);
    			add_location(br3, file$7, 42, 6, 2646);
    			add_location(br4, file$7, 42, 12, 2652);
    			attr_dev(span7, "class", "italic");
    			add_location(span7, file$7, 44, 6, 2766);
    			attr_dev(span8, "class", "highlight");
    			add_location(span8, file$7, 45, 76, 2956);
    			attr_dev(span9, "class", "italic");
    			add_location(span9, file$7, 45, 6, 2886);
    			add_location(div4, file$7, 37, 4, 2126);
    			attr_dev(div5, "class", "mdc-typography--body1 hidden left-align flex-column-2");
    			attr_dev(div5, "id", "content-minacu2");
    			add_location(div5, file$7, 36, 2, 2032);
    			attr_dev(div6, "class", "flex-row-4");
    			set_style(div6, "margin-top", "4vw");
    			add_location(div6, file$7, 35, 0, 1979);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			mount_component(contentcard0, div3, null);
    			append_dev(div3, t2);
    			append_dev(div3, div2);
    			append_dev(div2, div1);
    			append_dev(div1, t3);
    			append_dev(div1, span0);
    			append_dev(div1, t5);
    			append_dev(div1, span1);
    			append_dev(div1, t7);
    			append_dev(div1, br0);
    			append_dev(div1, br1);
    			append_dev(div1, t8);
    			append_dev(div1, span2);
    			append_dev(div1, t10);
    			append_dev(div1, span3);
    			append_dev(div1, t12);
    			append_dev(div2, t13);
    			mount_component(custombutton0, div2, null);
    			insert_dev(target, t14, anchor);
    			insert_dev(target, div6, anchor);
    			append_dev(div6, div5);
    			append_dev(div5, div4);
    			append_dev(div4, t15);
    			append_dev(div4, br2);
    			append_dev(div4, t16);
    			append_dev(div4, span4);
    			append_dev(div4, t18);
    			append_dev(div4, span6);
    			append_dev(span6, t19);
    			append_dev(span6, span5);
    			append_dev(span6, t21);
    			append_dev(div4, t22);
    			append_dev(div4, br3);
    			append_dev(div4, br4);
    			append_dev(div4, t23);
    			append_dev(div4, span7);
    			append_dev(div4, t25);
    			append_dev(div4, span9);
    			append_dev(span9, t26);
    			append_dev(span9, span8);
    			append_dev(span9, t28);
    			append_dev(div4, t29);
    			append_dev(div5, t30);
    			mount_component(custombutton1, div5, null);
    			append_dev(div6, t31);
    			mount_component(contentcard1, div6, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(contentcard0.$$.fragment, local);
    			transition_in(custombutton0.$$.fragment, local);
    			transition_in(custombutton1.$$.fragment, local);
    			transition_in(contentcard1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(contentcard0.$$.fragment, local);
    			transition_out(custombutton0.$$.fragment, local);
    			transition_out(custombutton1.$$.fragment, local);
    			transition_out(contentcard1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			destroy_component(contentcard0);
    			destroy_component(custombutton0);
    			if (detaching) detach_dev(t14);
    			if (detaching) detach_dev(div6);
    			destroy_component(custombutton1);
    			destroy_component(contentcard1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$7.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Cards', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Cards> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ CustomButton, ContentCard });
    	return [];
    }

    class Cards$2 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$7, create_fragment$7, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Cards",
    			options,
    			id: create_fragment$7.name
    		});
    	}
    }

    /* src\Minacu\Stats.svelte generated by Svelte v3.46.6 */
    const file$6 = "src\\Minacu\\Stats.svelte";

    function create_fragment$6(ctx) {
    	let div0;
    	let t1;
    	let div1;
    	let statscard0;
    	let t2;
    	let statscard1;
    	let t3;
    	let div2;
    	let fab;
    	let current;

    	statscard0 = new StatsCard({
    			props: {
    				value: "1967 - oggi",
    				caption: "Periodo di attivitá"
    			},
    			$$inline: true
    		});

    	statscard1 = new StatsCard({
    			props: {
    				value: "13%",
    				caption: "Produzione globale"
    			},
    			$$inline: true
    		});

    	fab = new CustomFAB({
    			props: {
    				target: "content3-1",
    				label: "Continua il viaggio"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			div0.textContent = "La miniera in numeri";
    			t1 = space();
    			div1 = element("div");
    			create_component(statscard0.$$.fragment);
    			t2 = space();
    			create_component(statscard1.$$.fragment);
    			t3 = space();
    			div2 = element("div");
    			create_component(fab.$$.fragment);
    			attr_dev(div0, "class", "mdc-typography--headline3 uppercase");
    			set_style(div0, "margin-top", "8vw");
    			add_location(div0, file$6, 6, 0, 193);
    			attr_dev(div1, "class", "flex-row-2");
    			set_style(div1, "margin-top", "2vw");
    			add_location(div1, file$6, 7, 0, 295);
    			set_style(div2, "margin-top", "3vw");
    			add_location(div2, file$6, 11, 0, 478);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div1, anchor);
    			mount_component(statscard0, div1, null);
    			append_dev(div1, t2);
    			mount_component(statscard1, div1, null);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, div2, anchor);
    			mount_component(fab, div2, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(statscard0.$$.fragment, local);
    			transition_in(statscard1.$$.fragment, local);
    			transition_in(fab.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(statscard0.$$.fragment, local);
    			transition_out(statscard1.$$.fragment, local);
    			transition_out(fab.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div1);
    			destroy_component(statscard0);
    			destroy_component(statscard1);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(div2);
    			destroy_component(fab);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Stats', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Stats> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ StatsCard, FAB: CustomFAB });
    	return [];
    }

    class Stats$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Stats",
    			options,
    			id: create_fragment$6.name
    		});
    	}
    }

    /* src\Asbest\Intro.svelte generated by Svelte v3.46.6 */
    const file$5 = "src\\Asbest\\Intro.svelte";

    function create_fragment$5(ctx) {
    	let div0;
    	let t1;
    	let div3;
    	let div1;
    	let t3;
    	let div2;
    	let t4;
    	let span0;
    	let t6;
    	let span1;
    	let t8;
    	let span2;
    	let t10;
    	let br0;
    	let br1;
    	let t11;
    	let span3;
    	let t13;
    	let br2;
    	let br3;
    	let t14;
    	let span4;
    	let t16;
    	let span5;
    	let t18;
    	let span6;
    	let t20;
    	let br4;
    	let br5;
    	let t21;
    	let custombutton;
    	let t22;
    	let div6;
    	let div4;
    	let t24;
    	let div5;
    	let t25;
    	let span7;
    	let t27;
    	let br6;
    	let t28;
    	let span8;
    	let t30;
    	let br7;
    	let br8;
    	let t31;
    	let span9;
    	let t33;
    	let span10;
    	let t35;
    	let br9;
    	let br10;
    	let t36;
    	let span11;
    	let t38;
    	let span12;
    	let t40;
    	let span13;
    	let t42;
    	let span14;
    	let t44;
    	let current;

    	custombutton = new CustomButton({
    			props: {
    				label: "L'azienda Uralasbest",
    				href: "https://www.uralasbest.ru/en/about-company",
    				direction: "left-button"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			div0.textContent = "Asbest, Russia";
    			t1 = space();
    			div3 = element("div");
    			div1 = element("div");
    			div1.textContent = "Storia del passato";
    			t3 = space();
    			div2 = element("div");
    			t4 = text("Ci troviamo in Russia, più precisamente ad Asbest, una piccola città chiamata così proprio per la presenza del\r\n    ");
    			span0 = element("span");
    			span0.textContent = "più grande";
    			t6 = text(" giacimento a cielo aperto di amianto ");
    			span1 = element("span");
    			span1.textContent = "nel mondo";
    			t8 = text(": quasi mezzo milione di tonnellate\r\n    di amianto vengono scavate ogni anno nella miniera dall'impresa ");
    			span2 = element("span");
    			span2.textContent = "Uralasbest";
    			t10 = text(".\r\n    ");
    			br0 = element("br");
    			br1 = element("br");
    			t11 = text("\r\n    Circa settantamila persone vivono ad Asbest, un tempo conosciuta come ");
    			span3 = element("span");
    			span3.textContent = "\"la città che muore\"";
    			t13 = text(" per i suoi altissimi tassi di\r\n    cancro ai polmoni.\r\n    ");
    			br2 = element("br");
    			br3 = element("br");
    			t14 = text("\r\n    Nonostante il ");
    			span4 = element("span");
    			span4.textContent = "divieto";
    			t16 = text(" di estrazione e distribuzione dell'amianto da parte degli altri paesi, l'azienda locale ha cercato di\r\n    eliminare l'associazione popolare tra amianto e cancro ai polmoni e altre malattie, ");
    			span5 = element("span");
    			span5.textContent = "rinominando";
    			t18 = text(" il suo prodotto come\r\n    ");
    			span6 = element("span");
    			span6.textContent = "\"crisotilo\"";
    			t20 = text(", il nome blando e tecnico del tipo specifico del minerale estratto.\r\n    ");
    			br4 = element("br");
    			br5 = element("br");
    			t21 = space();
    			create_component(custombutton.$$.fragment);
    			t22 = space();
    			div6 = element("div");
    			div4 = element("div");
    			div4.textContent = "Conseguenze sul presente";
    			t24 = space();
    			div5 = element("div");
    			t25 = text("Tutt'oggi i produttori russi operano noncuranti dei pericoli e ");
    			span7 = element("span");
    			span7.textContent = "sostenuti dal governo";
    			t27 = text(", il quale fa leva sugli abitanti sapendo\r\n    che la miniera è l’unica importante fonte economica della città.");
    			br6 = element("br");
    			t28 = text("\r\n    Asbest, dopo un secolo di estrazione mineraria intensiva, ha ancora abbastanza amianto crisotilo sepolto nel terreno per mantenere Uralasbest in attività per\r\n    almeno ");
    			span8 = element("span");
    			span8.textContent = "un altro secolo";
    			t30 = text(".\r\n    ");
    			br7 = element("br");
    			br8 = element("br");
    			t31 = text("\r\n    L'opinione di molti residenti di Asbest è che ci sono così tante ");
    			span9 = element("span");
    			span9.textContent = "altre questioni";
    			t33 = text(" di cui preoccuparsi nella loro regione\r\n    fortemente industrializzata, inclusa una centrale nucleare a poche miglia di distanza e una centrale elettrica a carbone ancora più vicina, che l'amianto è\r\n    probabilmente\r\n    ");
    			span10 = element("span");
    			span10.textContent = "l'ultima delle loro preoccupazioni";
    			t35 = text(".\r\n    ");
    			br9 = element("br");
    			br10 = element("br");
    			t36 = text("\r\n    La vita dei cittadini è fortemente intrecciata con quella della miniera, tanto che la città possiede un ");
    			span11 = element("span");
    			span11.textContent = "inno municipale";
    			t38 = text("\r\n    chiamato\r\n    ");
    			span12 = element("span");
    			span12.textContent = "\"Amianto, la mia città e il mio destino\"";
    			t40 = text(". Dal 2002 il Consiglio Comunale ha adottato perfino una nuova\r\n    ");
    			span13 = element("span");
    			span13.textContent = "bandiera";
    			t42 = text(": le linee bianche, che simboleggiano le fibre di amianto, passano attraverso un anello di fiamme. Un cartellone\r\n    affisso da Uralasbest proclama\r\n    ");
    			span14 = element("span");
    			span14.textContent = "\"L'amianto è il nostro futuro\"";
    			t44 = text(".");
    			attr_dev(div0, "class", "mdc-typography--headline2 uppercase");
    			add_location(div0, file$5, 4, 0, 88);
    			attr_dev(div1, "class", "mdc-typography--headline4 uppercase");
    			add_location(div1, file$5, 6, 2, 181);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$5, 9, 4, 415);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$5, 9, 83, 494);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$5, 10, 68, 639);
    			add_location(br0, file$5, 11, 4, 687);
    			add_location(br1, file$5, 11, 10, 693);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$5, 12, 74, 775);
    			add_location(br2, file$5, 14, 4, 886);
    			add_location(br3, file$5, 14, 10, 892);
    			attr_dev(span4, "class", "highlight");
    			add_location(span4, file$5, 15, 18, 918);
    			attr_dev(span5, "class", "highlight");
    			add_location(span5, file$5, 16, 88, 1148);
    			attr_dev(span6, "class", "highlight");
    			add_location(span6, file$5, 17, 4, 1217);
    			add_location(br4, file$5, 18, 4, 1333);
    			add_location(br5, file$5, 18, 10, 1339);
    			attr_dev(div2, "class", "mdc-typography--body1");
    			add_location(div2, file$5, 7, 2, 258);
    			attr_dev(div3, "class", "left svelte-14vy1zp");
    			add_location(div3, file$5, 5, 0, 159);
    			attr_dev(div4, "class", "mdc-typography--headline4 uppercase primary");
    			add_location(div4, file$5, 24, 2, 1515);
    			attr_dev(span7, "class", "highlight");
    			add_location(span7, file$5, 26, 67, 1710);
    			add_location(br6, file$5, 27, 68, 1873);
    			attr_dev(span8, "class", "highlight");
    			add_location(span8, file$5, 29, 11, 2055);
    			add_location(br7, file$5, 30, 4, 2108);
    			add_location(br8, file$5, 30, 10, 2114);
    			attr_dev(span9, "class", "highlight");
    			add_location(span9, file$5, 31, 69, 2191);
    			attr_dev(span10, "class", "highlight");
    			add_location(span10, file$5, 34, 4, 2462);
    			add_location(br9, file$5, 35, 4, 2534);
    			add_location(br10, file$5, 35, 10, 2540);
    			attr_dev(span11, "class", "highlight");
    			add_location(span11, file$5, 36, 108, 2656);
    			attr_dev(span12, "class", "italic");
    			add_location(span12, file$5, 38, 4, 2722);
    			attr_dev(span13, "class", "highlight");
    			add_location(span13, file$5, 39, 4, 2858);
    			attr_dev(span14, "class", "italic");
    			add_location(span14, file$5, 41, 4, 3051);
    			attr_dev(div5, "class", "mdc-typography--body1");
    			add_location(div5, file$5, 25, 2, 1606);
    			attr_dev(div6, "class", "right svelte-14vy1zp");
    			add_location(div6, file$5, 23, 0, 1492);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div1);
    			append_dev(div3, t3);
    			append_dev(div3, div2);
    			append_dev(div2, t4);
    			append_dev(div2, span0);
    			append_dev(div2, t6);
    			append_dev(div2, span1);
    			append_dev(div2, t8);
    			append_dev(div2, span2);
    			append_dev(div2, t10);
    			append_dev(div2, br0);
    			append_dev(div2, br1);
    			append_dev(div2, t11);
    			append_dev(div2, span3);
    			append_dev(div2, t13);
    			append_dev(div2, br2);
    			append_dev(div2, br3);
    			append_dev(div2, t14);
    			append_dev(div2, span4);
    			append_dev(div2, t16);
    			append_dev(div2, span5);
    			append_dev(div2, t18);
    			append_dev(div2, span6);
    			append_dev(div2, t20);
    			append_dev(div2, br4);
    			append_dev(div2, br5);
    			append_dev(div2, t21);
    			mount_component(custombutton, div2, null);
    			insert_dev(target, t22, anchor);
    			insert_dev(target, div6, anchor);
    			append_dev(div6, div4);
    			append_dev(div6, t24);
    			append_dev(div6, div5);
    			append_dev(div5, t25);
    			append_dev(div5, span7);
    			append_dev(div5, t27);
    			append_dev(div5, br6);
    			append_dev(div5, t28);
    			append_dev(div5, span8);
    			append_dev(div5, t30);
    			append_dev(div5, br7);
    			append_dev(div5, br8);
    			append_dev(div5, t31);
    			append_dev(div5, span9);
    			append_dev(div5, t33);
    			append_dev(div5, span10);
    			append_dev(div5, t35);
    			append_dev(div5, br9);
    			append_dev(div5, br10);
    			append_dev(div5, t36);
    			append_dev(div5, span11);
    			append_dev(div5, t38);
    			append_dev(div5, span12);
    			append_dev(div5, t40);
    			append_dev(div5, span13);
    			append_dev(div5, t42);
    			append_dev(div5, span14);
    			append_dev(div5, t44);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(custombutton.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(custombutton.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			destroy_component(custombutton);
    			if (detaching) detach_dev(t22);
    			if (detaching) detach_dev(div6);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Intro', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Intro> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ CustomButton });
    	return [];
    }

    class Intro$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Intro",
    			options,
    			id: create_fragment$5.name
    		});
    	}
    }

    /* src\Asbest\Cards.svelte generated by Svelte v3.46.6 */
    const file$4 = "src\\Asbest\\Cards.svelte";

    function create_fragment$4(ctx) {
    	let div0;
    	let t1;
    	let div3;
    	let contentcard0;
    	let t2;
    	let div2;
    	let div1;
    	let t3;
    	let span0;
    	let t5;
    	let span1;
    	let t7;
    	let br0;
    	let br1;
    	let t8;
    	let span3;
    	let t9;
    	let span2;
    	let t11;
    	let t12;
    	let custombutton0;
    	let t13;
    	let div6;
    	let div5;
    	let div4;
    	let t14;
    	let span4;
    	let t16;
    	let br2;
    	let br3;
    	let t17;
    	let span5;
    	let t19;
    	let span6;
    	let t21;
    	let br4;
    	let br5;
    	let t22;
    	let span7;
    	let t24;
    	let span8;
    	let t26;
    	let t27;
    	let contentcard1;
    	let t28;
    	let div9;
    	let contentcard2;
    	let t29;
    	let div8;
    	let div7;
    	let t30;
    	let span9;
    	let t32;
    	let br6;
    	let br7;
    	let t33;
    	let span10;
    	let t35;
    	let t36;
    	let custombutton1;
    	let t37;
    	let div12;
    	let div11;
    	let div10;
    	let span11;
    	let t39;
    	let br8;
    	let br9;
    	let t40;
    	let span12;
    	let t42;
    	let br10;
    	let t43;
    	let span13;
    	let t45;
    	let br11;
    	let br12;
    	let t46;
    	let span16;
    	let t47;
    	let span14;
    	let t49;
    	let span15;
    	let t51;
    	let t52;
    	let t53;
    	let custombutton2;
    	let t54;
    	let contentcard3;
    	let current;

    	contentcard0 = new ContentCard({
    			props: {
    				contentId: "content-asbest1",
    				src: "img/asbest-trump.jpeg",
    				title: "Donald Trump",
    				subtitle: "Come il 45° presidente degli Stati Uniti viene usato nella propaganda a favore dell'amianto",
    				buttonLabel: "Approfondisci la storia",
    				direction: "left-card"
    			},
    			$$inline: true
    		});

    	custombutton0 = new CustomButton({
    			props: {
    				direction: "right-button",
    				label: "Leggi l'articolo",
    				href: "https://www.washingtonpost.com/news/business/wp/2018/07/11/approved-by-donald-trump-asbestos-sold-by-russian-company-is-branded-with-the-presidents-face/"
    			},
    			$$inline: true
    		});

    	contentcard1 = new ContentCard({
    			props: {
    				contentId: "content-asbest2",
    				src: "img/asbest-city.jpg",
    				title: "Igor Bragin",
    				subtitle: "Medico capo del complesso ospedaliero Asbest City Hospital",
    				buttonLabel: "Scopri la sua opinione",
    				direction: "right-card"
    			},
    			$$inline: true
    		});

    	contentcard2 = new ContentCard({
    			props: {
    				contentId: "content-asbest3",
    				src: "img/asbest-stepanov.jpg",
    				title: "Viktor Stepanov",
    				subtitle: "Ex lavoratore della fabbrica di Uralasbest",
    				buttonLabel: "Leggi le sua parole",
    				direction: "left-card"
    			},
    			$$inline: true
    		});

    	custombutton1 = new CustomButton({
    			props: {
    				direction: "right-button",
    				label: "Leggi l'articolo",
    				href: "https://www.nytimes.com/2019/04/07/world/europe/asbestos-russia-mine.html"
    			},
    			$$inline: true
    		});

    	custombutton2 = new CustomButton({
    			props: {
    				direction: "left-button",
    				label: "Leggi l'articolo",
    				href: "https://www.nytimes.com/2013/07/14/business/global/city-in-russia-unable-to-kick-asbestos-habit.html"
    			},
    			$$inline: true
    		});

    	contentcard3 = new ContentCard({
    			props: {
    				contentId: "content-asbest4",
    				src: "img/asbest-miner.png",
    				title: "Valentin K. Zemskov",
    				subtitle: "Ex lavoratore della miniera",
    				buttonLabel: "Scopri la testimonianza",
    				direction: "right-card"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			div0.textContent = "Perché preoccuparsi così tanto dell'amianto?";
    			t1 = space();
    			div3 = element("div");
    			create_component(contentcard0.$$.fragment);
    			t2 = space();
    			div2 = element("div");
    			div1 = element("div");
    			t3 = text("Attaccato per decenni dai difensori della salute, l'ex presidente statunitense Donald Trump viene utilizzato dall'ostinatamente\r\n      ");
    			span0 = element("span");
    			span0.textContent = "provocatoria";
    			t5 = text(" azienda russa produttrice di amianto come figura perfetta per una campagna volta a\r\n      ");
    			span1 = element("span");
    			span1.textContent = "riabilitare";
    			t7 = text(" l'immagine profondamente macchiata del proprio prodotto:.\r\n      ");
    			br0 = element("br");
    			br1 = element("br");
    			t8 = text("\r\n      Nel 2018 la società Russa ha messo in circolazione pallet del proprio prodotto adornati con un sigillo raffigurante la faccia di Trump e recitante la seguente\r\n      frase ");
    			span3 = element("span");
    			t9 = text("\"Approvato da ");
    			span2 = element("span");
    			span2.textContent = "Donald Trump";
    			t11 = text(", 45° presidente degli Stati Uniti\"");
    			t12 = space();
    			create_component(custombutton0.$$.fragment);
    			t13 = space();
    			div6 = element("div");
    			div5 = element("div");
    			div4 = element("div");
    			t14 = text("Il dottor ");
    			span4 = element("span");
    			span4.textContent = "Igor Bragin";
    			t16 = text(" ha liquidato come \"non corrispondente alla realtà\" uno studio scientifico del 2016 che mostrava tassi\r\n      elevati di cancro ai polmoni nei pressi della miniera.\r\n      ");
    			br2 = element("br");
    			br3 = element("br");
    			t17 = text("\r\n      Lo studio, una revisione comparativa dei ");
    			span5 = element("span");
    			span5.textContent = "tassi di mortalità";
    			t19 = text(" ad Asbest e nella regione circostante di Sverdlovsk, ha\r\n      rilevato che \"i tassi di mortalità per tumori del polmone, dello stomaco e del colon erano statisticamente e significativamente\r\n      ");
    			span6 = element("span");
    			span6.textContent = "più alti";
    			t21 = text("\r\n      nella città di Asbest\".\r\n      ");
    			br4 = element("br");
    			br5 = element("br");
    			t22 = text("\r\n      L'incidenza del ");
    			span7 = element("span");
    			span7.textContent = "mesotelioma";
    			t24 = text(", una malattia polmonare ampiamente attribuita all'amianto in Occidente,\r\n      ");
    			span8 = element("span");
    			span8.textContent = "non è stata studiata";
    			t26 = text(" a sufficienza dalla Russia impedendone il corretto monitoraggio sanitario.");
    			t27 = space();
    			create_component(contentcard1.$$.fragment);
    			t28 = space();
    			div9 = element("div");
    			create_component(contentcard2.$$.fragment);
    			t29 = space();
    			div8 = element("div");
    			div7 = element("div");
    			t30 = text("\"Sono un pensionato di 88 anni che ha trascorso decenni a lavorare nella fabbrica di amianto. La mia stessa età avanzata e il mantenimento di una buona\r\n      salute sono la prova che tutta l'");
    			span9 = element("span");
    			span9.textContent = "isteria sull'amianto";
    			t32 = text(" non poteva essere vera.\r\n      ");
    			br6 = element("br");
    			br7 = element("br");
    			t33 = text("\r\n      Mentre lavoravo bevevo una ");
    			span10 = element("span");
    			span10.textContent = "bottiglia di latte";
    			t35 = text(" al giorno, l'azienda le forniva gratuitamente per aiutare i lavoratori a difendersi\r\n      dalle malattie. Tutto è pericoloso in una certa misura. Il cento per cento di certezza che qualcosa non sia dannoso non puó esistere\".");
    			t36 = space();
    			create_component(custombutton1.$$.fragment);
    			t37 = space();
    			div12 = element("div");
    			div11 = element("div");
    			div10 = element("div");
    			span11 = element("span");
    			span11.textContent = "Valentin K. Zemskov";
    			t39 = text(", 82 anni, ha lavorato nella miniera per 40 anni e ha sviluppato l'asbestosi, causata dall’inalazione\r\n      delle fibre di amianto.\r\n      ");
    			br8 = element("br");
    			br9 = element("br");
    			t40 = space();
    			span12 = element("span");
    			span12.textContent = "\"C'era così tanta polvere che non potevi vedere un uomo in piedi accanto a te\"";
    			t42 = text(", dice ricordando gli anni di lavoro.");
    			br10 = element("br");
    			t43 = text("\r\n      Per la disabilità, la fabbrica aggiunge ");
    			span13 = element("span");
    			span13.textContent = "4.500 rubli";
    			t45 = text(" al suo assegno mensile per la pensione, una cifra ridicola sufficiente\r\n      a coprire solo pochi pasti.\r\n      ");
    			br11 = element("br");
    			br12 = element("br");
    			t46 = text("\r\n      Tuttavia, è convinto che la città non abbia altra scelta.\r\n      ");
    			span16 = element("span");
    			t47 = text("\"Se non avessimo la fabbrica, ");
    			span14 = element("span");
    			span14.textContent = "come vivremmo?";
    			t49 = text("\r\n        Dobbiamo continuare a tenerla aperta in modo da avere ");
    			span15 = element("span");
    			span15.textContent = "posti di lavoro";
    			t51 = text(" per tutti\"");
    			t52 = text(", afferma senza fiato mentre parla nel cortile di una casa di riposo.");
    			t53 = space();
    			create_component(custombutton2.$$.fragment);
    			t54 = space();
    			create_component(contentcard3.$$.fragment);
    			attr_dev(div0, "class", "mdc-typography--headline3 uppercase");
    			set_style(div0, "margin-top", "14vw");
    			add_location(div0, file$4, 5, 0, 161);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$4, 18, 6, 888);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$4, 19, 6, 1022);
    			add_location(br0, file$4, 20, 6, 1130);
    			add_location(br1, file$4, 20, 12, 1136);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$4, 22, 47, 1357);
    			attr_dev(span3, "class", "italic");
    			add_location(span3, file$4, 22, 12, 1322);
    			add_location(div1, file$4, 16, 4, 740);
    			attr_dev(div2, "class", "mdc-typography--body1 hidden right-align flex-column-2");
    			attr_dev(div2, "id", "content-asbest1");
    			add_location(div2, file$4, 15, 2, 645);
    			attr_dev(div3, "class", "flex-row-4");
    			set_style(div3, "margin-top", "3vw");
    			add_location(div3, file$4, 6, 0, 288);
    			attr_dev(span4, "class", "highlight");
    			add_location(span4, file$4, 35, 16, 1911);
    			add_location(br2, file$4, 37, 6, 2125);
    			add_location(br3, file$4, 37, 12, 2131);
    			attr_dev(span5, "class", "highlight");
    			add_location(span5, file$4, 38, 47, 2186);
    			attr_dev(span6, "class", "highlight");
    			add_location(span6, file$4, 40, 6, 2434);
    			add_location(br4, file$4, 42, 6, 2512);
    			add_location(br5, file$4, 42, 12, 2518);
    			attr_dev(span7, "class", "highlight");
    			add_location(span7, file$4, 43, 22, 2548);
    			attr_dev(span8, "class", "highlight");
    			add_location(span8, file$4, 44, 6, 2670);
    			add_location(div4, file$4, 34, 4, 1888);
    			attr_dev(div5, "class", "mdc-typography--body1 hidden left-align flex-column-2");
    			attr_dev(div5, "id", "content-asbest2");
    			add_location(div5, file$4, 33, 2, 1794);
    			attr_dev(div6, "class", "flex-row-4");
    			set_style(div6, "margin-top", "3vw");
    			add_location(div6, file$4, 32, 0, 1741);
    			attr_dev(span9, "class", "highlight");
    			add_location(span9, file$4, 69, 39, 3714);
    			add_location(br6, file$4, 70, 6, 3797);
    			add_location(br7, file$4, 70, 12, 3803);
    			attr_dev(span10, "class", "highlight");
    			add_location(span10, file$4, 71, 33, 3844);
    			add_location(div7, file$4, 67, 4, 3509);
    			attr_dev(div8, "class", "mdc-typography--body1 hidden right-align flex-column-2 italic");
    			attr_dev(div8, "id", "content-asbest3");
    			add_location(div8, file$4, 66, 2, 3407);
    			attr_dev(div9, "class", "flex-row-4");
    			set_style(div9, "margin-top", "3vw");
    			add_location(div9, file$4, 57, 0, 3098);
    			attr_dev(span11, "class", "highlight");
    			add_location(span11, file$4, 81, 6, 4472);
    			add_location(br8, file$4, 83, 6, 4662);
    			add_location(br9, file$4, 83, 12, 4668);
    			attr_dev(span12, "class", "italic");
    			add_location(span12, file$4, 84, 6, 4682);
    			add_location(br10, file$4, 84, 149, 4825);
    			attr_dev(span13, "class", "highlight");
    			add_location(span13, file$4, 85, 46, 4879);
    			add_location(br11, file$4, 87, 6, 5035);
    			add_location(br12, file$4, 87, 12, 5041);
    			attr_dev(span14, "class", "highlight");
    			add_location(span14, file$4, 90, 39, 5181);
    			attr_dev(span15, "class", "highlight");
    			add_location(span15, file$4, 91, 62, 5290);
    			attr_dev(span16, "class", "italic");
    			add_location(span16, file$4, 89, 6, 5120);
    			add_location(div10, file$4, 80, 4, 4459);
    			attr_dev(div11, "class", "mdc-typography--body1 hidden left-align flex-column-2");
    			attr_dev(div11, "id", "content-asbest4");
    			add_location(div11, file$4, 79, 2, 4365);
    			attr_dev(div12, "class", "flex-row-4");
    			set_style(div12, "margin-top", "3vw");
    			add_location(div12, file$4, 78, 0, 4312);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			mount_component(contentcard0, div3, null);
    			append_dev(div3, t2);
    			append_dev(div3, div2);
    			append_dev(div2, div1);
    			append_dev(div1, t3);
    			append_dev(div1, span0);
    			append_dev(div1, t5);
    			append_dev(div1, span1);
    			append_dev(div1, t7);
    			append_dev(div1, br0);
    			append_dev(div1, br1);
    			append_dev(div1, t8);
    			append_dev(div1, span3);
    			append_dev(span3, t9);
    			append_dev(span3, span2);
    			append_dev(span3, t11);
    			append_dev(div2, t12);
    			mount_component(custombutton0, div2, null);
    			insert_dev(target, t13, anchor);
    			insert_dev(target, div6, anchor);
    			append_dev(div6, div5);
    			append_dev(div5, div4);
    			append_dev(div4, t14);
    			append_dev(div4, span4);
    			append_dev(div4, t16);
    			append_dev(div4, br2);
    			append_dev(div4, br3);
    			append_dev(div4, t17);
    			append_dev(div4, span5);
    			append_dev(div4, t19);
    			append_dev(div4, span6);
    			append_dev(div4, t21);
    			append_dev(div4, br4);
    			append_dev(div4, br5);
    			append_dev(div4, t22);
    			append_dev(div4, span7);
    			append_dev(div4, t24);
    			append_dev(div4, span8);
    			append_dev(div4, t26);
    			append_dev(div6, t27);
    			mount_component(contentcard1, div6, null);
    			insert_dev(target, t28, anchor);
    			insert_dev(target, div9, anchor);
    			mount_component(contentcard2, div9, null);
    			append_dev(div9, t29);
    			append_dev(div9, div8);
    			append_dev(div8, div7);
    			append_dev(div7, t30);
    			append_dev(div7, span9);
    			append_dev(div7, t32);
    			append_dev(div7, br6);
    			append_dev(div7, br7);
    			append_dev(div7, t33);
    			append_dev(div7, span10);
    			append_dev(div7, t35);
    			append_dev(div8, t36);
    			mount_component(custombutton1, div8, null);
    			insert_dev(target, t37, anchor);
    			insert_dev(target, div12, anchor);
    			append_dev(div12, div11);
    			append_dev(div11, div10);
    			append_dev(div10, span11);
    			append_dev(div10, t39);
    			append_dev(div10, br8);
    			append_dev(div10, br9);
    			append_dev(div10, t40);
    			append_dev(div10, span12);
    			append_dev(div10, t42);
    			append_dev(div10, br10);
    			append_dev(div10, t43);
    			append_dev(div10, span13);
    			append_dev(div10, t45);
    			append_dev(div10, br11);
    			append_dev(div10, br12);
    			append_dev(div10, t46);
    			append_dev(div10, span16);
    			append_dev(span16, t47);
    			append_dev(span16, span14);
    			append_dev(span16, t49);
    			append_dev(span16, span15);
    			append_dev(span16, t51);
    			append_dev(div10, t52);
    			append_dev(div11, t53);
    			mount_component(custombutton2, div11, null);
    			append_dev(div12, t54);
    			mount_component(contentcard3, div12, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(contentcard0.$$.fragment, local);
    			transition_in(custombutton0.$$.fragment, local);
    			transition_in(contentcard1.$$.fragment, local);
    			transition_in(contentcard2.$$.fragment, local);
    			transition_in(custombutton1.$$.fragment, local);
    			transition_in(custombutton2.$$.fragment, local);
    			transition_in(contentcard3.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(contentcard0.$$.fragment, local);
    			transition_out(custombutton0.$$.fragment, local);
    			transition_out(contentcard1.$$.fragment, local);
    			transition_out(contentcard2.$$.fragment, local);
    			transition_out(custombutton1.$$.fragment, local);
    			transition_out(custombutton2.$$.fragment, local);
    			transition_out(contentcard3.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			destroy_component(contentcard0);
    			destroy_component(custombutton0);
    			if (detaching) detach_dev(t13);
    			if (detaching) detach_dev(div6);
    			destroy_component(contentcard1);
    			if (detaching) detach_dev(t28);
    			if (detaching) detach_dev(div9);
    			destroy_component(contentcard2);
    			destroy_component(custombutton1);
    			if (detaching) detach_dev(t37);
    			if (detaching) detach_dev(div12);
    			destroy_component(custombutton2);
    			destroy_component(contentcard3);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Cards', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Cards> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ CustomButton, ContentCard });
    	return [];
    }

    class Cards$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Cards",
    			options,
    			id: create_fragment$4.name
    		});
    	}
    }

    /* src\Asbest\Stats.svelte generated by Svelte v3.46.6 */
    const file$3 = "src\\Asbest\\Stats.svelte";

    function create_fragment$3(ctx) {
    	let div0;
    	let t1;
    	let div1;
    	let statscard0;
    	let t2;
    	let statscard1;
    	let t3;
    	let statscard2;
    	let t4;
    	let div2;
    	let fab;
    	let current;

    	statscard0 = new StatsCard({
    			props: {
    				value: "1922 - oggi",
    				caption: "Periodo di attivitá"
    			},
    			$$inline: true
    		});

    	statscard1 = new StatsCard({
    			props: {
    				value: "500.000 ton",
    				caption: "Estratte ogni anno"
    			},
    			$$inline: true
    		});

    	statscard2 = new StatsCard({
    			props: {
    				value: "68,893",
    				caption: "Cittadini a rischio"
    			},
    			$$inline: true
    		});

    	fab = new CustomFAB({
    			props: {
    				target: "content6-1",
    				label: "Cosa ci attende nel futuro?"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			div0.textContent = "La miniera in numeri";
    			t1 = space();
    			div1 = element("div");
    			create_component(statscard0.$$.fragment);
    			t2 = space();
    			create_component(statscard1.$$.fragment);
    			t3 = space();
    			create_component(statscard2.$$.fragment);
    			t4 = space();
    			div2 = element("div");
    			create_component(fab.$$.fragment);
    			attr_dev(div0, "class", "mdc-typography--headline3 uppercase");
    			set_style(div0, "margin-top", "8vw");
    			add_location(div0, file$3, 6, 0, 193);
    			attr_dev(div1, "class", "flex-row-2");
    			set_style(div1, "margin-top", "2vw");
    			add_location(div1, file$3, 7, 0, 295);
    			set_style(div2, "margin-top", "3vw");
    			add_location(div2, file$3, 12, 0, 549);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div1, anchor);
    			mount_component(statscard0, div1, null);
    			append_dev(div1, t2);
    			mount_component(statscard1, div1, null);
    			append_dev(div1, t3);
    			mount_component(statscard2, div1, null);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, div2, anchor);
    			mount_component(fab, div2, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(statscard0.$$.fragment, local);
    			transition_in(statscard1.$$.fragment, local);
    			transition_in(statscard2.$$.fragment, local);
    			transition_in(fab.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(statscard0.$$.fragment, local);
    			transition_out(statscard1.$$.fragment, local);
    			transition_out(statscard2.$$.fragment, local);
    			transition_out(fab.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div1);
    			destroy_component(statscard0);
    			destroy_component(statscard1);
    			destroy_component(statscard2);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(div2);
    			destroy_component(fab);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Stats', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Stats> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ StatsCard, FAB: CustomFAB });
    	return [];
    }

    class Stats extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Stats",
    			options,
    			id: create_fragment$3.name
    		});
    	}
    }

    /* src\Beigua\Intro.svelte generated by Svelte v3.46.6 */
    const file$2 = "src\\Beigua\\Intro.svelte";

    function create_fragment$2(ctx) {
    	let div0;
    	let t1;
    	let div3;
    	let div1;
    	let t3;
    	let div2;
    	let t4;
    	let span0;
    	let t6;
    	let span1;
    	let t8;
    	let br0;
    	let br1;
    	let t9;
    	let span2;
    	let t11;
    	let span3;
    	let t13;
    	let span4;
    	let t15;
    	let br2;
    	let br3;
    	let t16;
    	let span5;
    	let t18;
    	let span6;
    	let t20;
    	let br4;
    	let br5;
    	let t21;
    	let custombutton0;
    	let t22;
    	let div6;
    	let div4;
    	let t24;
    	let div5;
    	let t25;
    	let span7;
    	let t27;
    	let span8;
    	let t29;
    	let br6;
    	let br7;
    	let t30;
    	let span9;
    	let t32;
    	let span10;
    	let t34;
    	let br8;
    	let br9;
    	let t35;
    	let custombutton1;
    	let t36;
    	let div8;
    	let img;
    	let img_src_value;
    	let t37;
    	let div7;
    	let t39;
    	let custombutton2;
    	let current;

    	custombutton0 = new CustomButton({
    			props: {
    				label: "Amianto naturale",
    				href: "https://www.arpal.liguria.it/tematiche/suolo/amianto-naturale.html",
    				direction: "left-button"
    			},
    			$$inline: true
    		});

    	custombutton1 = new CustomButton({
    			props: {
    				label: "Lo studio completo",
    				href: "https://www.regione.liguria.it/homepage/ambiente/territorio/bonifiche-siti-contaminati/mappatura-amianto/amianto-naturale.html",
    				direction: "right-button"
    			},
    			$$inline: true
    		});

    	custombutton2 = new CustomButton({
    			props: {
    				label: "Mappa interattiva",
    				href: "http://srvcarto.regione.liguria.it/geoviewer2/pages/apps/geoportale/index.html?id=1200",
    				direction: "right-button"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			div0.textContent = "Parco del Beigua, Liguria";
    			t1 = space();
    			div3 = element("div");
    			div1 = element("div");
    			div1.textContent = "Potrebbe succedere anche a noi?";
    			t3 = space();
    			div2 = element("div");
    			t4 = text("Con la legge 257 del 1992 l’Italia ha messo ");
    			span0 = element("span");
    			span0.textContent = "al bando";
    			t6 = text(" l'amianto, ma non ha risolto i problemi legati alla sua presenza\r\n    ");
    			span1 = element("span");
    			span1.textContent = "in natura";
    			t8 = text(" e all'utilizzo dei materiali a base di amianto già messi in opera.\r\n    ");
    			br0 = element("br");
    			br1 = element("br");
    			t9 = text("\r\n    Ai sensi della L.R. 20/2006 Arpal provvede, su richiesta della Regione o degli Enti locali, ad effettuare le attività di\r\n    ");
    			span2 = element("span");
    			span2.textContent = "controllo";
    			t11 = text(" e ");
    			span3 = element("span");
    			span3.textContent = "monitoraggio";
    			t13 = text(" di siti estrattivi o di affioramenti naturali interessati dalla\r\n    presenza di ");
    			span4 = element("span");
    			span4.textContent = "\"Pietre verdi\"";
    			t15 = text(" (rocce ofiolitiche) a potenziale rischio amianto.\r\n    ");
    			br2 = element("br");
    			br3 = element("br");
    			t16 = text("\r\n    Quindi se non facciamo attenzione a dove si vorrà introdurre un nuovo sito estrattivo, le polveri sottili che si potrebbero alzare a seguito degli scavi potrebbero\r\n    mescolarsi all'aria che respiriamo e ");
    			span5 = element("span");
    			span5.textContent = "contaminare";
    			t18 = text(" l'intera Ligura e il basso Piemonte, rendendo così inabitabili questi\r\n    ");
    			span6 = element("span");
    			span6.textContent = "territori";
    			t20 = text(" a noi tanto cari.\r\n    ");
    			br4 = element("br");
    			br5 = element("br");
    			t21 = space();
    			create_component(custombutton0.$$.fragment);
    			t22 = space();
    			div6 = element("div");
    			div4 = element("div");
    			div4.textContent = "Cosa sono le pietre verdi?";
    			t24 = space();
    			div5 = element("div");
    			t25 = text("Le ");
    			span7 = element("span");
    			span7.textContent = "\"Pietre verdi\"";
    			t27 = text(" rappresentano i frammenti di un antico fondale oceanico successivamente compresso ed emerso in seguito ad\r\n    imponenti movimenti della crosta terreste. Tali rocce spesso contengono ");
    			span8 = element("span");
    			span8.textContent = "fibre di amianto";
    			t29 = text(" all'interno e, pertanto, è\r\n    importante conoscere dove possono essere trovate, soprattutto in tema di gestione ed utilizzo delle terre e rocce da scavo.\r\n    ");
    			br6 = element("br");
    			br7 = element("br");
    			t30 = text("\r\n    La ");
    			span9 = element("span");
    			span9.textContent = "cartografia";
    			t32 = text(" sotto riportata raffigura i territori in cui, in relazione alle rocce riconosciute in affioramento o\r\n    subaffioramento, potrebbero rinvenirsi concentrazioni di ");
    			span10 = element("span");
    			span10.textContent = "minerali asbestiformi";
    			t34 = text(" con alte probabilitá.\r\n    ");
    			br8 = element("br");
    			br9 = element("br");
    			t35 = space();
    			create_component(custombutton1.$$.fragment);
    			t36 = space();
    			div8 = element("div");
    			img = element("img");
    			t37 = space();
    			div7 = element("div");
    			div7.textContent = "Mappa della presenza di Pietre Verdi in Liguria, con evidenza sul territorio protetto del parco del Beigua";
    			t39 = space();
    			create_component(custombutton2.$$.fragment);
    			attr_dev(div0, "class", "mdc-typography--headline2 uppercase");
    			add_location(div0, file$2, 4, 0, 88);
    			attr_dev(div1, "class", "mdc-typography--headline4 uppercase");
    			add_location(div1, file$2, 7, 2, 194);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$2, 9, 48, 369);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$2, 10, 4, 479);
    			add_location(br0, file$2, 11, 4, 592);
    			add_location(br1, file$2, 11, 10, 598);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$2, 13, 4, 736);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$2, 13, 47, 779);
    			attr_dev(span4, "class", "italic");
    			add_location(span4, file$2, 14, 16, 904);
    			add_location(br2, file$2, 15, 4, 1002);
    			add_location(br3, file$2, 15, 10, 1008);
    			attr_dev(span5, "class", "highlight");
    			add_location(span5, file$2, 17, 41, 1226);
    			attr_dev(span6, "class", "highlight");
    			add_location(span6, file$2, 18, 4, 1344);
    			add_location(br4, file$2, 19, 4, 1408);
    			add_location(br5, file$2, 19, 10, 1414);
    			attr_dev(div2, "class", "mdc-typography--body1");
    			add_location(div2, file$2, 8, 2, 284);
    			attr_dev(div3, "class", "left svelte-asx7jm");
    			add_location(div3, file$2, 6, 0, 172);
    			attr_dev(div4, "class", "mdc-typography--headline4 uppercase primary");
    			add_location(div4, file$2, 25, 2, 1610);
    			attr_dev(span7, "class", "italic");
    			add_location(span7, file$2, 27, 7, 1747);
    			attr_dev(span8, "class", "highlight");
    			add_location(span8, file$2, 28, 76, 1973);
    			add_location(br6, file$2, 30, 4, 2182);
    			add_location(br7, file$2, 30, 10, 2188);
    			attr_dev(span9, "class", "highlight");
    			add_location(span9, file$2, 31, 7, 2203);
    			attr_dev(span10, "class", "highlight");
    			add_location(span10, file$2, 32, 61, 2409);
    			add_location(br8, file$2, 33, 4, 2489);
    			add_location(br9, file$2, 33, 10, 2495);
    			attr_dev(div5, "class", "mdc-typography--body1");
    			add_location(div5, file$2, 26, 2, 1703);
    			attr_dev(div6, "class", "right svelte-asx7jm");
    			add_location(div6, file$2, 24, 0, 1587);
    			if (!src_url_equal(img.src, img_src_value = "img/beigua-mappa.png")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Mappa della presenza di Pietre Verdi in Liguria, con evidenza sul territorio protetto del parco del Beigua");
    			attr_dev(img, "class", "svelte-asx7jm");
    			add_location(img, file$2, 43, 2, 2781);
    			attr_dev(div7, "class", "mdc-typography--body1");
    			set_style(div7, "margin-block", "1vw");
    			add_location(div7, file$2, 44, 2, 2932);
    			attr_dev(div8, "class", "center svelte-asx7jm");
    			add_location(div8, file$2, 42, 0, 2757);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div1);
    			append_dev(div3, t3);
    			append_dev(div3, div2);
    			append_dev(div2, t4);
    			append_dev(div2, span0);
    			append_dev(div2, t6);
    			append_dev(div2, span1);
    			append_dev(div2, t8);
    			append_dev(div2, br0);
    			append_dev(div2, br1);
    			append_dev(div2, t9);
    			append_dev(div2, span2);
    			append_dev(div2, t11);
    			append_dev(div2, span3);
    			append_dev(div2, t13);
    			append_dev(div2, span4);
    			append_dev(div2, t15);
    			append_dev(div2, br2);
    			append_dev(div2, br3);
    			append_dev(div2, t16);
    			append_dev(div2, span5);
    			append_dev(div2, t18);
    			append_dev(div2, span6);
    			append_dev(div2, t20);
    			append_dev(div2, br4);
    			append_dev(div2, br5);
    			append_dev(div2, t21);
    			mount_component(custombutton0, div2, null);
    			insert_dev(target, t22, anchor);
    			insert_dev(target, div6, anchor);
    			append_dev(div6, div4);
    			append_dev(div6, t24);
    			append_dev(div6, div5);
    			append_dev(div5, t25);
    			append_dev(div5, span7);
    			append_dev(div5, t27);
    			append_dev(div5, span8);
    			append_dev(div5, t29);
    			append_dev(div5, br6);
    			append_dev(div5, br7);
    			append_dev(div5, t30);
    			append_dev(div5, span9);
    			append_dev(div5, t32);
    			append_dev(div5, span10);
    			append_dev(div5, t34);
    			append_dev(div5, br8);
    			append_dev(div5, br9);
    			append_dev(div5, t35);
    			mount_component(custombutton1, div5, null);
    			insert_dev(target, t36, anchor);
    			insert_dev(target, div8, anchor);
    			append_dev(div8, img);
    			append_dev(div8, t37);
    			append_dev(div8, div7);
    			append_dev(div8, t39);
    			mount_component(custombutton2, div8, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(custombutton0.$$.fragment, local);
    			transition_in(custombutton1.$$.fragment, local);
    			transition_in(custombutton2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(custombutton0.$$.fragment, local);
    			transition_out(custombutton1.$$.fragment, local);
    			transition_out(custombutton2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			destroy_component(custombutton0);
    			if (detaching) detach_dev(t22);
    			if (detaching) detach_dev(div6);
    			destroy_component(custombutton1);
    			if (detaching) detach_dev(t36);
    			if (detaching) detach_dev(div8);
    			destroy_component(custombutton2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Intro', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Intro> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ CustomButton });
    	return [];
    }

    class Intro extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Intro",
    			options,
    			id: create_fragment$2.name
    		});
    	}
    }

    /* src\Beigua\Cards.svelte generated by Svelte v3.46.6 */
    const file$1 = "src\\Beigua\\Cards.svelte";

    function create_fragment$1(ctx) {
    	let div0;
    	let t1;
    	let div3;
    	let contentcard0;
    	let t2;
    	let div2;
    	let div1;
    	let t3;
    	let span0;
    	let t5;
    	let br0;
    	let br1;
    	let t6;
    	let span1;
    	let t8;
    	let span2;
    	let t10;
    	let span3;
    	let t12;
    	let t13;
    	let custombutton0;
    	let t14;
    	let div6;
    	let div5;
    	let div4;
    	let t15;
    	let span4;
    	let t17;
    	let span6;
    	let t18;
    	let span5;
    	let t20;
    	let t21;
    	let br2;
    	let br3;
    	let t22;
    	let span7;
    	let t24;
    	let span8;
    	let t26;
    	let br4;
    	let br5;
    	let t27;
    	let span9;
    	let t29;
    	let span11;
    	let t30;
    	let span10;
    	let t32;
    	let t33;
    	let t34;
    	let custombutton1;
    	let t35;
    	let contentcard1;
    	let t36;
    	let div8;
    	let div7;
    	let t38;
    	let img;
    	let img_src_value;
    	let current;

    	contentcard0 = new ContentCard({
    			props: {
    				contentId: "content-beigua1",
    				src: "img/beigua-parco.jpg",
    				title: "Parco Naturale Regionale del Beigua",
    				subtitle: "L'importanza del giacimento di titanio di Pianpaludo",
    				buttonLabel: "Scopri cosa c'è sotto",
    				direction: "left-card"
    			},
    			$$inline: true
    		});

    	custombutton0 = new CustomButton({
    			props: {
    				direction: "right-button",
    				label: "Approfondisci l'articolo",
    				href: "https://www.ivg.it/2021/04/titanio-del-beigua-ecco-perche-il-giacimento-di-piampaludo-fa-gola/"
    			},
    			$$inline: true
    		});

    	custombutton1 = new CustomButton({
    			props: {
    				direction: "left-button",
    				label: "Leggi l'articolo",
    				href: "https://genova.repubblica.it/cronaca/2022/05/28/news/liguria_titanio_nel_beigua_tar_conferma_no_a_ricerche_minerarie-351535040/"
    			},
    			$$inline: true
    		});

    	contentcard1 = new ContentCard({
    			props: {
    				contentId: "content-beigua2",
    				src: "img/beigua-tar.jpg",
    				title: "Il no del TAR",
    				subtitle: "Confermato il divieto di effettuare ricerche minerarie nell'area del Monte Tarinè",
    				buttonLabel: "Scopri la sentenza",
    				direction: "right-card"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			div0.textContent = "La situazione attuale del territorio";
    			t1 = space();
    			div3 = element("div");
    			create_component(contentcard0.$$.fragment);
    			t2 = space();
    			div2 = element("div");
    			div1 = element("div");
    			t3 = text("Nel 1970 tra i comuni di Urbe e Sassello è stato scoperto un giacimento di biossido di ");
    			span0 = element("span");
    			span0.textContent = "titanio";
    			t5 = text(", sepolto in corrispondenza\r\n      dei Monti Antenna e Tariné, il cui contenuto é stato stimato a circa 9 milioni di tonnellate. Nel 1976 il ministero dell’Industria ha rilasciato alla\r\n      Mineraria Italiana Srl una concessione ventennale sul territorio, ceduta poi alla Compagnia Europea per il Titanio.\r\n      ");
    			br0 = element("br");
    			br1 = element("br");
    			t6 = text("\r\n      Secondo uno studio dell’Università di Genova degli anni '90, per sfruttare questo giacimento e ricavare solo il 6% di titanio, si potrebbe arrivare a smuovere\r\n      circa\r\n      ");
    			span1 = element("span");
    			span1.textContent = "200 milioni";
    			t8 = text(" di metri cubi di terra, di cui le rocce amiantifere compongono tra il ");
    			span2 = element("span");
    			span2.textContent = "10%";
    			t10 = text(" e il\r\n      ");
    			span3 = element("span");
    			span3.textContent = "15%";
    			t12 = text(". Una tale quantitá equivale a una movimentazione pari a 30 aeroporti di Genova.");
    			t13 = space();
    			create_component(custombutton0.$$.fragment);
    			t14 = space();
    			div6 = element("div");
    			div5 = element("div");
    			div4 = element("div");
    			t15 = text("É stata depositata il ");
    			span4 = element("span");
    			span4.textContent = "21 maggio 2022";
    			t17 = text(" la\r\n      ");
    			span6 = element("span");
    			t18 = text("\"la sentenza del Tribunale Amministrativo Regionale della Liguria che di fatto conferma il ");
    			span5 = element("span");
    			span5.textContent = "divieto";
    			t20 = text(" di effettuare ricerche\r\n        minerarie");
    			t21 = text("\r\n      nell'area del Monte Tarinè\".\r\n      ");
    			br2 = element("br");
    			br3 = element("br");
    			t22 = text("\r\n      L'associazione di ");
    			span7 = element("span");
    			span7.textContent = "Legambiente Liguria";
    			t24 = text(" esprime\r\n      ");
    			span8 = element("span");
    			span8.textContent = "\"soddisfazione in merito alla sentenza del Tar che rappresenta la pietra tombale su qualsiasi ipotesi di sfruttamento minerario del comprensorio del\r\n        Beigua\"";
    			t26 = text(".\r\n      ");
    			br4 = element("br");
    			br5 = element("br");
    			t27 = text("\r\n      L'assessore regionale all'Urbanistica e alle attività estrattive ");
    			span9 = element("span");
    			span9.textContent = "Marco Scajola";
    			t29 = text(" afferma che\r\n      ");
    			span11 = element("span");
    			t30 = text("\"La sentenza del Tar va nella direzione della ");
    			span10 = element("span");
    			span10.textContent = "tutela";
    			t32 = text(" del territorio voluta dalla Giunta regionale, da sempre contraria a\r\n        qualsiasi attività estrattiva all'interno dell'area del Parco\"");
    			t33 = text(".");
    			t34 = space();
    			create_component(custombutton1.$$.fragment);
    			t35 = space();
    			create_component(contentcard1.$$.fragment);
    			t36 = space();
    			div8 = element("div");
    			div7 = element("div");
    			div7.textContent = "E noi, vogliamo dare vita a questo inferno?";
    			t38 = space();
    			img = element("img");
    			attr_dev(div0, "class", "mdc-typography--headline3 uppercase");
    			set_style(div0, "margin-top", "15vw");
    			add_location(div0, file$1, 5, 0, 161);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$1, 18, 93, 815);
    			add_location(br0, file$1, 21, 6, 1168);
    			add_location(br1, file$1, 21, 12, 1174);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$1, 24, 6, 1367);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$1, 24, 119, 1480);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$1, 25, 6, 1527);
    			add_location(div1, file$1, 17, 4, 715);
    			attr_dev(div2, "class", "mdc-typography--body1 hidden right-align flex-column-2");
    			attr_dev(div2, "id", "content-beigua1");
    			add_location(div2, file$1, 16, 2, 620);
    			attr_dev(div3, "class", "flex-row-4");
    			set_style(div3, "margin-top", "4vw");
    			add_location(div3, file$1, 6, 0, 280);
    			attr_dev(span4, "class", "highlight");
    			add_location(span4, file$1, 38, 28, 2072);
    			attr_dev(span5, "class", "highlight");
    			add_location(span5, file$1, 40, 99, 2250);
    			attr_dev(span6, "class", "italic");
    			add_location(span6, file$1, 39, 6, 2128);
    			add_location(br2, file$1, 44, 6, 2389);
    			add_location(br3, file$1, 44, 12, 2395);
    			attr_dev(span7, "class", "highlight");
    			add_location(span7, file$1, 45, 24, 2427);
    			attr_dev(span8, "class", "italic");
    			add_location(span8, file$1, 46, 6, 2493);
    			add_location(br4, file$1, 50, 6, 2713);
    			add_location(br5, file$1, 50, 12, 2719);
    			attr_dev(span9, "class", "highlight");
    			add_location(span9, file$1, 51, 71, 2798);
    			attr_dev(span10, "class", "highlight");
    			add_location(span10, file$1, 53, 55, 2939);
    			attr_dev(span11, "class", "italic");
    			add_location(span11, file$1, 52, 6, 2862);
    			add_location(div4, file$1, 37, 4, 2037);
    			attr_dev(div5, "class", "mdc-typography--body1 hidden left-align flex-column-2");
    			attr_dev(div5, "id", "content-beigua2");
    			add_location(div5, file$1, 36, 2, 1943);
    			attr_dev(div6, "class", "flex-row-4");
    			set_style(div6, "margin-top", "10vw");
    			add_location(div6, file$1, 35, 0, 1889);
    			attr_dev(div7, "class", "mdc-typography--headline3 uppercase");
    			set_style(div7, "margin-top", "10vw");
    			add_location(div7, file$1, 74, 2, 3701);
    			if (!src_url_equal(img.src, img_src_value = "img/logo.png")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Logo");
    			attr_dev(img, "class", "svelte-1dbqn48");
    			add_location(img, file$1, 75, 2, 3829);
    			add_location(div8, file$1, 73, 0, 3692);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			mount_component(contentcard0, div3, null);
    			append_dev(div3, t2);
    			append_dev(div3, div2);
    			append_dev(div2, div1);
    			append_dev(div1, t3);
    			append_dev(div1, span0);
    			append_dev(div1, t5);
    			append_dev(div1, br0);
    			append_dev(div1, br1);
    			append_dev(div1, t6);
    			append_dev(div1, span1);
    			append_dev(div1, t8);
    			append_dev(div1, span2);
    			append_dev(div1, t10);
    			append_dev(div1, span3);
    			append_dev(div1, t12);
    			append_dev(div2, t13);
    			mount_component(custombutton0, div2, null);
    			insert_dev(target, t14, anchor);
    			insert_dev(target, div6, anchor);
    			append_dev(div6, div5);
    			append_dev(div5, div4);
    			append_dev(div4, t15);
    			append_dev(div4, span4);
    			append_dev(div4, t17);
    			append_dev(div4, span6);
    			append_dev(span6, t18);
    			append_dev(span6, span5);
    			append_dev(span6, t20);
    			append_dev(div4, t21);
    			append_dev(div4, br2);
    			append_dev(div4, br3);
    			append_dev(div4, t22);
    			append_dev(div4, span7);
    			append_dev(div4, t24);
    			append_dev(div4, span8);
    			append_dev(div4, t26);
    			append_dev(div4, br4);
    			append_dev(div4, br5);
    			append_dev(div4, t27);
    			append_dev(div4, span9);
    			append_dev(div4, t29);
    			append_dev(div4, span11);
    			append_dev(span11, t30);
    			append_dev(span11, span10);
    			append_dev(span11, t32);
    			append_dev(div4, t33);
    			append_dev(div5, t34);
    			mount_component(custombutton1, div5, null);
    			append_dev(div6, t35);
    			mount_component(contentcard1, div6, null);
    			insert_dev(target, t36, anchor);
    			insert_dev(target, div8, anchor);
    			append_dev(div8, div7);
    			append_dev(div8, t38);
    			append_dev(div8, img);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(contentcard0.$$.fragment, local);
    			transition_in(custombutton0.$$.fragment, local);
    			transition_in(custombutton1.$$.fragment, local);
    			transition_in(contentcard1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(contentcard0.$$.fragment, local);
    			transition_out(custombutton0.$$.fragment, local);
    			transition_out(custombutton1.$$.fragment, local);
    			transition_out(contentcard1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			destroy_component(contentcard0);
    			destroy_component(custombutton0);
    			if (detaching) detach_dev(t14);
    			if (detaching) detach_dev(div6);
    			destroy_component(custombutton1);
    			destroy_component(contentcard1);
    			if (detaching) detach_dev(t36);
    			if (detaching) detach_dev(div8);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Cards', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Cards> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ CustomButton, ContentCard });
    	return [];
    }

    class Cards extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Cards",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* src\Main.svelte generated by Svelte v3.46.6 */
    const file = "src\\Main.svelte";

    function create_fragment(ctx) {
    	let topappbar;
    	let t0;
    	let main;
    	let div1;
    	let img0;
    	let img0_src_value;
    	let t1;
    	let img1;
    	let img1_src_value;
    	let t2;
    	let div0;
    	let introtitle;
    	let t3;
    	let fab0;
    	let t4;
    	let div3;
    	let img2;
    	let img2_src_value;
    	let t5;
    	let img3;
    	let img3_src_value;
    	let t6;
    	let div2;
    	let introintro;
    	let t7;
    	let div6;
    	let img4;
    	let img4_src_value;
    	let t8;
    	let img5;
    	let img5_src_value;
    	let t9;
    	let div5;
    	let introcards;
    	let t10;
    	let div4;
    	let fab1;
    	let current;
    	topappbar = new TopAppBar_1({ $$inline: true });
    	introtitle = new Title({ $$inline: true });

    	fab0 = new CustomFAB({
    			props: {
    				target: "section1-2",
    				label: "Comincia il viaggio"
    			},
    			$$inline: true
    		});

    	introintro = new Intro$5({ $$inline: true });
    	introcards = new Cards$5({ $$inline: true });

    	fab1 = new CustomFAB({
    			props: {
    				target: "content2-1",
    				label: "Entra nella miniera"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(topappbar.$$.fragment);
    			t0 = space();
    			main = element("main");
    			div1 = element("div");
    			img0 = element("img");
    			t1 = space();
    			img1 = element("img");
    			t2 = space();
    			div0 = element("div");
    			create_component(introtitle.$$.fragment);
    			t3 = space();
    			create_component(fab0.$$.fragment);
    			t4 = space();
    			div3 = element("div");
    			img2 = element("img");
    			t5 = space();
    			img3 = element("img");
    			t6 = space();
    			div2 = element("div");
    			create_component(introintro.$$.fragment);
    			t7 = space();
    			div6 = element("div");
    			img4 = element("img");
    			t8 = space();
    			img5 = element("img");
    			t9 = space();
    			div5 = element("div");
    			create_component(introcards.$$.fragment);
    			t10 = space();
    			div4 = element("div");
    			create_component(fab1.$$.fragment);
    			attr_dev(img0, "class", "background-lg svelte-1o0ewtw");
    			if (!src_url_equal(img0.src, img0_src_value = "img/background-1-1.png")) attr_dev(img0, "src", img0_src_value);
    			attr_dev(img0, "alt", "");
    			add_location(img0, file, 27, 4, 1195);
    			attr_dev(img1, "class", "background-sm svelte-1o0ewtw");
    			if (!src_url_equal(img1.src, img1_src_value = "img/background-1-1-sm.png")) attr_dev(img1, "src", img1_src_value);
    			attr_dev(img1, "alt", "");
    			add_location(img1, file, 28, 4, 1266);
    			attr_dev(div0, "id", "content1-1");
    			attr_dev(div0, "class", "svelte-1o0ewtw");
    			add_location(div0, file, 29, 4, 1340);
    			attr_dev(div1, "id", "section1-1");
    			attr_dev(div1, "class", "svelte-1o0ewtw");
    			add_location(div1, file, 26, 2, 1168);
    			attr_dev(img2, "class", "background-lg svelte-1o0ewtw");
    			if (!src_url_equal(img2.src, img2_src_value = "img/background-1-2.png")) attr_dev(img2, "src", img2_src_value);
    			attr_dev(img2, "alt", "");
    			add_location(img2, file, 36, 4, 1505);
    			attr_dev(img3, "class", "background-sm svelte-1o0ewtw");
    			if (!src_url_equal(img3.src, img3_src_value = "img/background-1-1-sm.png")) attr_dev(img3, "src", img3_src_value);
    			attr_dev(img3, "alt", "");
    			add_location(img3, file, 37, 4, 1576);
    			attr_dev(div2, "id", "content1-2");
    			attr_dev(div2, "class", "svelte-1o0ewtw");
    			add_location(div2, file, 38, 4, 1650);
    			attr_dev(div3, "id", "section1-2");
    			attr_dev(div3, "class", "svelte-1o0ewtw");
    			add_location(div3, file, 35, 2, 1478);
    			attr_dev(img4, "class", "background-lg svelte-1o0ewtw");
    			if (!src_url_equal(img4.src, img4_src_value = "img/background-1-3.png")) attr_dev(img4, "src", img4_src_value);
    			attr_dev(img4, "alt", "");
    			add_location(img4, file, 44, 4, 1748);
    			attr_dev(img5, "class", "background-sm svelte-1o0ewtw");
    			if (!src_url_equal(img5.src, img5_src_value = "img/background-1-1-sm.png")) attr_dev(img5, "src", img5_src_value);
    			attr_dev(img5, "alt", "");
    			add_location(img5, file, 45, 4, 1819);
    			set_style(div4, "margin-top", "2vw");
    			add_location(div4, file, 48, 6, 1944);
    			attr_dev(div5, "id", "content1-3");
    			attr_dev(div5, "class", "svelte-1o0ewtw");
    			add_location(div5, file, 46, 4, 1893);
    			attr_dev(div6, "id", "section1-3");
    			attr_dev(div6, "class", "svelte-1o0ewtw");
    			add_location(div6, file, 43, 2, 1721);
    			attr_dev(main, "class", "svelte-1o0ewtw");
    			add_location(main, file, 25, 0, 1158);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(topappbar, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, main, anchor);
    			append_dev(main, div1);
    			append_dev(div1, img0);
    			append_dev(div1, t1);
    			append_dev(div1, img1);
    			append_dev(div1, t2);
    			append_dev(div1, div0);
    			mount_component(introtitle, div0, null);
    			append_dev(div0, t3);
    			mount_component(fab0, div0, null);
    			append_dev(main, t4);
    			append_dev(main, div3);
    			append_dev(div3, img2);
    			append_dev(div3, t5);
    			append_dev(div3, img3);
    			append_dev(div3, t6);
    			append_dev(div3, div2);
    			mount_component(introintro, div2, null);
    			append_dev(main, t7);
    			append_dev(main, div6);
    			append_dev(div6, img4);
    			append_dev(div6, t8);
    			append_dev(div6, img5);
    			append_dev(div6, t9);
    			append_dev(div6, div5);
    			mount_component(introcards, div5, null);
    			append_dev(div5, t10);
    			append_dev(div5, div4);
    			mount_component(fab1, div4, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(topappbar.$$.fragment, local);
    			transition_in(introtitle.$$.fragment, local);
    			transition_in(fab0.$$.fragment, local);
    			transition_in(introintro.$$.fragment, local);
    			transition_in(introcards.$$.fragment, local);
    			transition_in(fab1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(topappbar.$$.fragment, local);
    			transition_out(introtitle.$$.fragment, local);
    			transition_out(fab0.$$.fragment, local);
    			transition_out(introintro.$$.fragment, local);
    			transition_out(introcards.$$.fragment, local);
    			transition_out(fab1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(topappbar, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(main);
    			destroy_component(introtitle);
    			destroy_component(fab0);
    			destroy_component(introintro);
    			destroy_component(introcards);
    			destroy_component(fab1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Main', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Main> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		TopAppBar: TopAppBar_1,
    		FAB: CustomFAB,
    		Footer,
    		IntroTitle: Title,
    		IntroIntro: Intro$5,
    		IntroCards: Cards$5,
    		BalangeroIntro: Intro$4,
    		BalangeroCards: Cards$4,
    		BalangeroStats: Stats$3,
    		LibbyIntro: Intro$3,
    		LibbyCards: Cards$3,
    		LibbyStats: Stats$2,
    		MinacuIntro: Intro$2,
    		MinacuCards: Cards$2,
    		MinacuStats: Stats$1,
    		AsbestIntro: Intro$1,
    		AsbestCards: Cards$1,
    		AsbestStats: Stats,
    		BeiguaIntro: Intro,
    		BeiguaCards: Cards
    	});

    	return [];
    }

    class Main extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Main",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    // import TopAppBar from "./TopAppBar.svelte";

    // const topAppBar = new TopAppBar({
    //   target: document.body,
    //   props: {},
    // });

    new Main({
      target: document.body,
      props: {},
    });

    // export { app, topAppBar };

})();
>>>>>>> Stashed changes
//# sourceMappingURL=bundle.js.map
