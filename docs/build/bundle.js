
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
    'use strict';

    function noop() { }
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function validate_store(store, name) {
        if (store != null && typeof store.subscribe !== 'function') {
            throw new Error(`'${name}' is not a store with a 'subscribe' method`);
        }
    }
    function subscribe(store, ...callbacks) {
        if (store == null) {
            return noop;
        }
        const unsub = store.subscribe(...callbacks);
        return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
    }
    function component_subscribe(component, store, callback) {
        component.$$.on_destroy.push(subscribe(store, callback));
    }
    function create_slot(definition, ctx, $$scope, fn) {
        if (definition) {
            const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
            return definition[0](slot_ctx);
        }
    }
    function get_slot_context(definition, ctx, $$scope, fn) {
        return definition[1] && fn
            ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
            : $$scope.ctx;
    }
    function get_slot_changes(definition, $$scope, dirty, fn) {
        if (definition[2] && fn) {
            const lets = definition[2](fn(dirty));
            if ($$scope.dirty === undefined) {
                return lets;
            }
            if (typeof lets === 'object') {
                const merged = [];
                const len = Math.max($$scope.dirty.length, lets.length);
                for (let i = 0; i < len; i += 1) {
                    merged[i] = $$scope.dirty[i] | lets[i];
                }
                return merged;
            }
            return $$scope.dirty | lets;
        }
        return $$scope.dirty;
    }
    function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
        if (slot_changes) {
            const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
            slot.p(slot_context, slot_changes);
        }
    }
    function get_all_dirty_from_scope($$scope) {
        if ($$scope.ctx.length > 32) {
            const dirty = [];
            const length = $$scope.ctx.length / 32;
            for (let i = 0; i < length; i++) {
                dirty[i] = -1;
            }
            return dirty;
        }
        return -1;
    }
    function exclude_internal_props(props) {
        const result = {};
        for (const k in props)
            if (k[0] !== '$')
                result[k] = props[k];
        return result;
    }
    function compute_rest_props(props, keys) {
        const rest = {};
        keys = new Set(keys);
        for (const k in props)
            if (!keys.has(k) && k[0] !== '$')
                rest[k] = props[k];
        return rest;
    }
    function set_store_value(store, ret, value) {
        store.set(value);
        return ret;
    }
    function action_destroyer(action_result) {
        return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function svg_element(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function prevent_default(fn) {
        return function (event) {
            event.preventDefault();
            // @ts-ignore
            return fn.call(this, event);
        };
    }
    function stop_propagation(fn) {
        return function (event) {
            event.stopPropagation();
            // @ts-ignore
            return fn.call(this, event);
        };
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function set_attributes(node, attributes) {
        // @ts-ignore
        const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
        for (const key in attributes) {
            if (attributes[key] == null) {
                node.removeAttribute(key);
            }
            else if (key === 'style') {
                node.style.cssText = attributes[key];
            }
            else if (key === '__value') {
                node.value = node[key] = attributes[key];
            }
            else if (descriptors[key] && descriptors[key].set) {
                node[key] = attributes[key];
            }
            else {
                attr(node, key, attributes[key]);
            }
        }
    }
    function set_svg_attributes(node, attributes) {
        for (const key in attributes) {
            attr(node, key, attributes[key]);
        }
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_style(node, key, value, important) {
        if (value === null) {
            node.style.removeProperty(key);
        }
        else {
            node.style.setProperty(key, value, important ? 'important' : '');
        }
    }
    function toggle_class(element, name, toggle) {
        element.classList[toggle ? 'add' : 'remove'](name);
    }
    function custom_event(type, detail, bubbles = false) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }
    function onDestroy(fn) {
        get_current_component().$$.on_destroy.push(fn);
    }
    function setContext(key, context) {
        get_current_component().$$.context.set(key, context);
    }
    function getContext(key) {
        return get_current_component().$$.context.get(key);
    }
    // TODO figure out if we still want to support
    // shorthand events, or if we want to implement
    // a real bubbling mechanism
    function bubble(component, event) {
        const callbacks = component.$$.callbacks[event.type];
        if (callbacks) {
            // @ts-ignore
            callbacks.slice().forEach(fn => fn.call(this, event));
        }
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    function add_flush_callback(fn) {
        flush_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            while (flushidx < dirty_components.length) {
                const component = dirty_components[flushidx];
                flushidx++;
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);

    function get_spread_update(levels, updates) {
        const update = {};
        const to_null_out = {};
        const accounted_for = { $$scope: 1 };
        let i = levels.length;
        while (i--) {
            const o = levels[i];
            const n = updates[i];
            if (n) {
                for (const key in o) {
                    if (!(key in n))
                        to_null_out[key] = 1;
                }
                for (const key in n) {
                    if (!accounted_for[key]) {
                        update[key] = n[key];
                        accounted_for[key] = 1;
                    }
                }
                levels[i] = n;
            }
            else {
                for (const key in o) {
                    accounted_for[key] = 1;
                }
            }
        }
        for (const key in to_null_out) {
            if (!(key in update))
                update[key] = undefined;
        }
        return update;
    }
    function get_spread_object(spread_props) {
        return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
    }

    function bind(component, name, callback) {
        const index = component.$$.props[name];
        if (index !== undefined) {
            component.$$.bound[index] = callback;
            callback(component.$$.ctx[index]);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.46.6' }, detail), true));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

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
    var MDCFoundation = /** @class */ (function () {
        function MDCFoundation(adapter) {
            if (adapter === void 0) { adapter = {}; }
            this.adapter = adapter;
        }
        Object.defineProperty(MDCFoundation, "cssClasses", {
            get: function () {
                // Classes extending MDCFoundation should implement this method to return an object which exports every
                // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
                return {};
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCFoundation, "strings", {
            get: function () {
                // Classes extending MDCFoundation should implement this method to return an object which exports all
                // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
                return {};
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCFoundation, "numbers", {
            get: function () {
                // Classes extending MDCFoundation should implement this method to return an object which exports all
                // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
                return {};
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCFoundation, "defaultAdapter", {
            get: function () {
                // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
                // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
                // validation.
                return {};
            },
            enumerable: false,
            configurable: true
        });
        MDCFoundation.prototype.init = function () {
            // Subclasses should override this method to perform initialization routines (registering events, etc.)
        };
        MDCFoundation.prototype.destroy = function () {
            // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
        };
        return MDCFoundation;
    }());

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
     */
    /**
     * Determine whether the current browser supports passive event listeners, and
     * if so, use them.
     */
    function applyPassive$1(globalObj) {
        if (globalObj === void 0) { globalObj = window; }
        return supportsPassiveOption(globalObj) ?
            { passive: true } :
            false;
    }
    function supportsPassiveOption(globalObj) {
        if (globalObj === void 0) { globalObj = window; }
        // See
        // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
        var passiveSupported = false;
        try {
            var options = {
                // This function will be called when the browser
                // attempts to access the passive property.
                get passive() {
                    passiveSupported = true;
                    return false;
                }
            };
            var handler = function () { };
            globalObj.document.addEventListener('test', handler, options);
            globalObj.document.removeEventListener('test', handler, options);
        }
        catch (err) {
            passiveSupported = false;
        }
        return passiveSupported;
    }

    var events = /*#__PURE__*/Object.freeze({
        __proto__: null,
        applyPassive: applyPassive$1
    });

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
     */
    /**
     * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
     * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
     */
    function closest(element, selector) {
        if (element.closest) {
            return element.closest(selector);
        }
        var el = element;
        while (el) {
            if (matches$1(el, selector)) {
                return el;
            }
            el = el.parentElement;
        }
        return null;
    }
    function matches$1(element, selector) {
        var nativeMatches = element.matches
            || element.webkitMatchesSelector
            || element.msMatchesSelector;
        return nativeMatches.call(element, selector);
    }
    /**
     * Used to compute the estimated scroll width of elements. When an element is
     * hidden due to display: none; being applied to a parent element, the width is
     * returned as 0. However, the element will have a true width once no longer
     * inside a display: none context. This method computes an estimated width when
     * the element is hidden or returns the true width when the element is visble.
     * @param {Element} element the element whose width to estimate
     */
    function estimateScrollWidth(element) {
        // Check the offsetParent. If the element inherits display: none from any
        // parent, the offsetParent property will be null (see
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
        // This check ensures we only clone the node when necessary.
        var htmlEl = element;
        if (htmlEl.offsetParent !== null) {
            return htmlEl.scrollWidth;
        }
        var clone = htmlEl.cloneNode(true);
        clone.style.setProperty('position', 'absolute');
        clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
        document.documentElement.appendChild(clone);
        var scrollWidth = clone.scrollWidth;
        document.documentElement.removeChild(clone);
        return scrollWidth;
    }

    var ponyfill = /*#__PURE__*/Object.freeze({
        __proto__: null,
        closest: closest,
        matches: matches$1,
        estimateScrollWidth: estimateScrollWidth
    });

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
    var cssClasses$3 = {
        // Ripple is a special case where the "root" component is really a "mixin" of sorts,
        // given that it's an 'upgrade' to an existing component. That being said it is the root
        // CSS class that all other CSS classes derive from.
        BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
        FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
        FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
        ROOT: 'mdc-ripple-upgraded',
        UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
    };
    var strings$3 = {
        VAR_FG_SCALE: '--mdc-ripple-fg-scale',
        VAR_FG_SIZE: '--mdc-ripple-fg-size',
        VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
        VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
        VAR_LEFT: '--mdc-ripple-left',
        VAR_TOP: '--mdc-ripple-top',
    };
    var numbers$2 = {
        DEACTIVATION_TIMEOUT_MS: 225,
        FG_DEACTIVATION_MS: 150,
        INITIAL_ORIGIN_SCALE: 0.6,
        PADDING: 10,
        TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
    };

    /**
     * Stores result from supportsCssVariables to avoid redundant processing to
     * detect CSS custom variable support.
     */
    var supportsCssVariables_;
    function supportsCssVariables(windowObj, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = false; }
        var CSS = windowObj.CSS;
        var supportsCssVars = supportsCssVariables_;
        if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
            return supportsCssVariables_;
        }
        var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
        if (!supportsFunctionPresent) {
            return false;
        }
        var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
        // See: https://bugs.webkit.org/show_bug.cgi?id=154669
        // See: README section on Safari
        var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
            CSS.supports('color', '#00000000'));
        supportsCssVars =
            explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
        if (!forceRefresh) {
            supportsCssVariables_ = supportsCssVars;
        }
        return supportsCssVars;
    }
    function getNormalizedEventCoords(evt, pageOffset, clientRect) {
        if (!evt) {
            return { x: 0, y: 0 };
        }
        var x = pageOffset.x, y = pageOffset.y;
        var documentX = x + clientRect.left;
        var documentY = y + clientRect.top;
        var normalizedX;
        var normalizedY;
        // Determine touch point relative to the ripple container.
        if (evt.type === 'touchstart') {
            var touchEvent = evt;
            normalizedX = touchEvent.changedTouches[0].pageX - documentX;
            normalizedY = touchEvent.changedTouches[0].pageY - documentY;
        }
        else {
            var mouseEvent = evt;
            normalizedX = mouseEvent.pageX - documentX;
            normalizedY = mouseEvent.pageY - documentY;
        }
        return { x: normalizedX, y: normalizedY };
    }

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
    // Activation events registered on the root element of each instance for activation
    var ACTIVATION_EVENT_TYPES = [
        'touchstart', 'pointerdown', 'mousedown', 'keydown',
    ];
    // Deactivation events registered on documentElement when a pointer-related down event occurs
    var POINTER_DEACTIVATION_EVENT_TYPES = [
        'touchend', 'pointerup', 'mouseup', 'contextmenu',
    ];
    // simultaneous nested activations
    var activatedTargets = [];
    var MDCRippleFoundation = /** @class */ (function (_super) {
        __extends(MDCRippleFoundation, _super);
        function MDCRippleFoundation(adapter) {
            var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
            _this.activationAnimationHasEnded = false;
            _this.activationTimer = 0;
            _this.fgDeactivationRemovalTimer = 0;
            _this.fgScale = '0';
            _this.frame = { width: 0, height: 0 };
            _this.initialSize = 0;
            _this.layoutFrame = 0;
            _this.maxRadius = 0;
            _this.unboundedCoords = { left: 0, top: 0 };
            _this.activationState = _this.defaultActivationState();
            _this.activationTimerCallback = function () {
                _this.activationAnimationHasEnded = true;
                _this.runDeactivationUXLogicIfReady();
            };
            _this.activateHandler = function (e) {
                _this.activateImpl(e);
            };
            _this.deactivateHandler = function () {
                _this.deactivateImpl();
            };
            _this.focusHandler = function () {
                _this.handleFocus();
            };
            _this.blurHandler = function () {
                _this.handleBlur();
            };
            _this.resizeHandler = function () {
                _this.layout();
            };
            return _this;
        }
        Object.defineProperty(MDCRippleFoundation, "cssClasses", {
            get: function () {
                return cssClasses$3;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCRippleFoundation, "strings", {
            get: function () {
                return strings$3;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCRippleFoundation, "numbers", {
            get: function () {
                return numbers$2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
            get: function () {
                return {
                    addClass: function () { return undefined; },
                    browserSupportsCssVars: function () { return true; },
                    computeBoundingRect: function () {
                        return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                    },
                    containsEventTarget: function () { return true; },
                    deregisterDocumentInteractionHandler: function () { return undefined; },
                    deregisterInteractionHandler: function () { return undefined; },
                    deregisterResizeHandler: function () { return undefined; },
                    getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                    isSurfaceActive: function () { return true; },
                    isSurfaceDisabled: function () { return true; },
                    isUnbounded: function () { return true; },
                    registerDocumentInteractionHandler: function () { return undefined; },
                    registerInteractionHandler: function () { return undefined; },
                    registerResizeHandler: function () { return undefined; },
                    removeClass: function () { return undefined; },
                    updateCssVariable: function () { return undefined; },
                };
            },
            enumerable: false,
            configurable: true
        });
        MDCRippleFoundation.prototype.init = function () {
            var _this = this;
            var supportsPressRipple = this.supportsPressRipple();
            this.registerRootHandlers(supportsPressRipple);
            if (supportsPressRipple) {
                var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
                requestAnimationFrame(function () {
                    _this.adapter.addClass(ROOT_1);
                    if (_this.adapter.isUnbounded()) {
                        _this.adapter.addClass(UNBOUNDED_1);
                        // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                        _this.layoutInternal();
                    }
                });
            }
        };
        MDCRippleFoundation.prototype.destroy = function () {
            var _this = this;
            if (this.supportsPressRipple()) {
                if (this.activationTimer) {
                    clearTimeout(this.activationTimer);
                    this.activationTimer = 0;
                    this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
                }
                if (this.fgDeactivationRemovalTimer) {
                    clearTimeout(this.fgDeactivationRemovalTimer);
                    this.fgDeactivationRemovalTimer = 0;
                    this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
                }
                var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
                requestAnimationFrame(function () {
                    _this.adapter.removeClass(ROOT_2);
                    _this.adapter.removeClass(UNBOUNDED_2);
                    _this.removeCssVars();
                });
            }
            this.deregisterRootHandlers();
            this.deregisterDeactivationHandlers();
        };
        /**
         * @param evt Optional event containing position information.
         */
        MDCRippleFoundation.prototype.activate = function (evt) {
            this.activateImpl(evt);
        };
        MDCRippleFoundation.prototype.deactivate = function () {
            this.deactivateImpl();
        };
        MDCRippleFoundation.prototype.layout = function () {
            var _this = this;
            if (this.layoutFrame) {
                cancelAnimationFrame(this.layoutFrame);
            }
            this.layoutFrame = requestAnimationFrame(function () {
                _this.layoutInternal();
                _this.layoutFrame = 0;
            });
        };
        MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
            var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
            if (unbounded) {
                this.adapter.addClass(UNBOUNDED);
            }
            else {
                this.adapter.removeClass(UNBOUNDED);
            }
        };
        MDCRippleFoundation.prototype.handleFocus = function () {
            var _this = this;
            requestAnimationFrame(function () { return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
        };
        MDCRippleFoundation.prototype.handleBlur = function () {
            var _this = this;
            requestAnimationFrame(function () { return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
        };
        /**
         * We compute this property so that we are not querying information about the client
         * until the point in time where the foundation requests it. This prevents scenarios where
         * client-side feature-detection may happen too early, such as when components are rendered on the server
         * and then initialized at mount time on the client.
         */
        MDCRippleFoundation.prototype.supportsPressRipple = function () {
            return this.adapter.browserSupportsCssVars();
        };
        MDCRippleFoundation.prototype.defaultActivationState = function () {
            return {
                activationEvent: undefined,
                hasDeactivationUXRun: false,
                isActivated: false,
                isProgrammatic: false,
                wasActivatedByPointer: false,
                wasElementMadeActive: false,
            };
        };
        /**
         * supportsPressRipple Passed from init to save a redundant function call
         */
        MDCRippleFoundation.prototype.registerRootHandlers = function (supportsPressRipple) {
            var e_1, _a;
            if (supportsPressRipple) {
                try {
                    for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
                        var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
                        this.adapter.registerInteractionHandler(evtType, this.activateHandler);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (this.adapter.isUnbounded()) {
                    this.adapter.registerResizeHandler(this.resizeHandler);
                }
            }
            this.adapter.registerInteractionHandler('focus', this.focusHandler);
            this.adapter.registerInteractionHandler('blur', this.blurHandler);
        };
        MDCRippleFoundation.prototype.registerDeactivationHandlers = function (evt) {
            var e_2, _a;
            if (evt.type === 'keydown') {
                this.adapter.registerInteractionHandler('keyup', this.deactivateHandler);
            }
            else {
                try {
                    for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
                        var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
                        this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        };
        MDCRippleFoundation.prototype.deregisterRootHandlers = function () {
            var e_3, _a;
            try {
                for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
                    var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
                    this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
            this.adapter.deregisterInteractionHandler('focus', this.focusHandler);
            this.adapter.deregisterInteractionHandler('blur', this.blurHandler);
            if (this.adapter.isUnbounded()) {
                this.adapter.deregisterResizeHandler(this.resizeHandler);
            }
        };
        MDCRippleFoundation.prototype.deregisterDeactivationHandlers = function () {
            var e_4, _a;
            this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler);
            try {
                for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
                    var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
                    this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        MDCRippleFoundation.prototype.removeCssVars = function () {
            var _this = this;
            var rippleStrings = MDCRippleFoundation.strings;
            var keys = Object.keys(rippleStrings);
            keys.forEach(function (key) {
                if (key.indexOf('VAR_') === 0) {
                    _this.adapter.updateCssVariable(rippleStrings[key], null);
                }
            });
        };
        MDCRippleFoundation.prototype.activateImpl = function (evt) {
            var _this = this;
            if (this.adapter.isSurfaceDisabled()) {
                return;
            }
            var activationState = this.activationState;
            if (activationState.isActivated) {
                return;
            }
            // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
            var previousActivationEvent = this.previousActivationEvent;
            var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
            if (isSameInteraction) {
                return;
            }
            activationState.isActivated = true;
            activationState.isProgrammatic = evt === undefined;
            activationState.activationEvent = evt;
            activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
            var hasActivatedChild = evt !== undefined &&
                activatedTargets.length > 0 &&
                activatedTargets.some(function (target) { return _this.adapter.containsEventTarget(target); });
            if (hasActivatedChild) {
                // Immediately reset activation state, while preserving logic that prevents touch follow-on events
                this.resetActivationState();
                return;
            }
            if (evt !== undefined) {
                activatedTargets.push(evt.target);
                this.registerDeactivationHandlers(evt);
            }
            activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
            if (activationState.wasElementMadeActive) {
                this.animateActivation();
            }
            requestAnimationFrame(function () {
                // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
                activatedTargets = [];
                if (!activationState.wasElementMadeActive
                    && evt !== undefined
                    && (evt.key === ' ' || evt.keyCode === 32)) {
                    // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                    // active states inconsistently when they're called within event handling code:
                    // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                    // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                    // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                    // variable is set within a rAF callback for a submit button interaction (#2241).
                    activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
                    if (activationState.wasElementMadeActive) {
                        _this.animateActivation();
                    }
                }
                if (!activationState.wasElementMadeActive) {
                    // Reset activation state immediately if element was not made active.
                    _this.activationState = _this.defaultActivationState();
                }
            });
        };
        MDCRippleFoundation.prototype.checkElementMadeActive = function (evt) {
            return (evt !== undefined && evt.type === 'keydown') ?
                this.adapter.isSurfaceActive() :
                true;
        };
        MDCRippleFoundation.prototype.animateActivation = function () {
            var _this = this;
            var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
            var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
            var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
            this.layoutInternal();
            var translateStart = '';
            var translateEnd = '';
            if (!this.adapter.isUnbounded()) {
                var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
                translateStart = startPoint.x + "px, " + startPoint.y + "px";
                translateEnd = endPoint.x + "px, " + endPoint.y + "px";
            }
            this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
            this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
            // Cancel any ongoing activation/deactivation animations
            clearTimeout(this.activationTimer);
            clearTimeout(this.fgDeactivationRemovalTimer);
            this.rmBoundedActivationClasses();
            this.adapter.removeClass(FG_DEACTIVATION);
            // Force layout in order to re-trigger the animation.
            this.adapter.computeBoundingRect();
            this.adapter.addClass(FG_ACTIVATION);
            this.activationTimer = setTimeout(function () {
                _this.activationTimerCallback();
            }, DEACTIVATION_TIMEOUT_MS);
        };
        MDCRippleFoundation.prototype.getFgTranslationCoordinates = function () {
            var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
            var startPoint;
            if (wasActivatedByPointer) {
                startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
            }
            else {
                startPoint = {
                    x: this.frame.width / 2,
                    y: this.frame.height / 2,
                };
            }
            // Center the element around the start point.
            startPoint = {
                x: startPoint.x - (this.initialSize / 2),
                y: startPoint.y - (this.initialSize / 2),
            };
            var endPoint = {
                x: (this.frame.width / 2) - (this.initialSize / 2),
                y: (this.frame.height / 2) - (this.initialSize / 2),
            };
            return { startPoint: startPoint, endPoint: endPoint };
        };
        MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady = function () {
            var _this = this;
            // This method is called both when a pointing device is released, and when the activation animation ends.
            // The deactivation animation should only run after both of those occur.
            var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
            var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
            var activationHasEnded = hasDeactivationUXRun || !isActivated;
            if (activationHasEnded && this.activationAnimationHasEnded) {
                this.rmBoundedActivationClasses();
                this.adapter.addClass(FG_DEACTIVATION);
                this.fgDeactivationRemovalTimer = setTimeout(function () {
                    _this.adapter.removeClass(FG_DEACTIVATION);
                }, numbers$2.FG_DEACTIVATION_MS);
            }
        };
        MDCRippleFoundation.prototype.rmBoundedActivationClasses = function () {
            var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
            this.adapter.removeClass(FG_ACTIVATION);
            this.activationAnimationHasEnded = false;
            this.adapter.computeBoundingRect();
        };
        MDCRippleFoundation.prototype.resetActivationState = function () {
            var _this = this;
            this.previousActivationEvent = this.activationState.activationEvent;
            this.activationState = this.defaultActivationState();
            // Touch devices may fire additional events for the same interaction within a short time.
            // Store the previous event until it's safe to assume that subsequent events are for new interactions.
            setTimeout(function () { return _this.previousActivationEvent = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
        };
        MDCRippleFoundation.prototype.deactivateImpl = function () {
            var _this = this;
            var activationState = this.activationState;
            // This can happen in scenarios such as when you have a keyup event that blurs the element.
            if (!activationState.isActivated) {
                return;
            }
            var state = __assign({}, activationState);
            if (activationState.isProgrammatic) {
                requestAnimationFrame(function () {
                    _this.animateDeactivation(state);
                });
                this.resetActivationState();
            }
            else {
                this.deregisterDeactivationHandlers();
                requestAnimationFrame(function () {
                    _this.activationState.hasDeactivationUXRun = true;
                    _this.animateDeactivation(state);
                    _this.resetActivationState();
                });
            }
        };
        MDCRippleFoundation.prototype.animateDeactivation = function (_a) {
            var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
            if (wasActivatedByPointer || wasElementMadeActive) {
                this.runDeactivationUXLogicIfReady();
            }
        };
        MDCRippleFoundation.prototype.layoutInternal = function () {
            var _this = this;
            this.frame = this.adapter.computeBoundingRect();
            var maxDim = Math.max(this.frame.height, this.frame.width);
            // Surface diameter is treated differently for unbounded vs. bounded ripples.
            // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
            // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
            // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
            // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
            // `overflow: hidden`.
            var getBoundedRadius = function () {
                var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
                return hypotenuse + MDCRippleFoundation.numbers.PADDING;
            };
            this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
            // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
            var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
            // Unbounded ripple size should always be even number to equally center align.
            if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
                this.initialSize = initialSize - 1;
            }
            else {
                this.initialSize = initialSize;
            }
            this.fgScale = "" + this.maxRadius / this.initialSize;
            this.updateLayoutCssVars();
        };
        MDCRippleFoundation.prototype.updateLayoutCssVars = function () {
            var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
            this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
            this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
            if (this.adapter.isUnbounded()) {
                this.unboundedCoords = {
                    left: Math.round((this.frame.width / 2) - (this.initialSize / 2)),
                    top: Math.round((this.frame.height / 2) - (this.initialSize / 2)),
                };
                this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
                this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
            }
        };
        return MDCRippleFoundation;
    }(MDCFoundation));

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
     */
    var cssClasses$2 = {
        FIXED_CLASS: 'mdc-top-app-bar--fixed',
        FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
        SHORT_CLASS: 'mdc-top-app-bar--short',
        SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
        SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
    };
    var numbers$1 = {
        DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
        MAX_TOP_APP_BAR_HEIGHT: 128,
    };
    var strings$2 = {
        ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
        NAVIGATION_EVENT: 'MDCTopAppBar:nav',
        NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
        ROOT_SELECTOR: '.mdc-top-app-bar',
        TITLE_SELECTOR: '.mdc-top-app-bar__title',
    };

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
     */
    var MDCTopAppBarBaseFoundation = /** @class */ (function (_super) {
        __extends(MDCTopAppBarBaseFoundation, _super);
        /* istanbul ignore next: optional argument is not a branch statement */
        function MDCTopAppBarBaseFoundation(adapter) {
            return _super.call(this, __assign(__assign({}, MDCTopAppBarBaseFoundation.defaultAdapter), adapter)) || this;
        }
        Object.defineProperty(MDCTopAppBarBaseFoundation, "strings", {
            get: function () {
                return strings$2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCTopAppBarBaseFoundation, "cssClasses", {
            get: function () {
                return cssClasses$2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCTopAppBarBaseFoundation, "numbers", {
            get: function () {
                return numbers$1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCTopAppBarBaseFoundation, "defaultAdapter", {
            /**
             * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
             */
            get: function () {
                // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                return {
                    addClass: function () { return undefined; },
                    removeClass: function () { return undefined; },
                    hasClass: function () { return false; },
                    setStyle: function () { return undefined; },
                    getTopAppBarHeight: function () { return 0; },
                    notifyNavigationIconClicked: function () { return undefined; },
                    getViewportScrollY: function () { return 0; },
                    getTotalActionItems: function () { return 0; },
                };
                // tslint:enable:object-literal-sort-keys
            },
            enumerable: false,
            configurable: true
        });
        /** Other variants of TopAppBar foundation overrides this method */
        MDCTopAppBarBaseFoundation.prototype.handleTargetScroll = function () { }; // tslint:disable-line:no-empty
        /** Other variants of TopAppBar foundation overrides this method */
        MDCTopAppBarBaseFoundation.prototype.handleWindowResize = function () { }; // tslint:disable-line:no-empty
        MDCTopAppBarBaseFoundation.prototype.handleNavigationClick = function () {
            this.adapter.notifyNavigationIconClicked();
        };
        return MDCTopAppBarBaseFoundation;
    }(MDCFoundation));

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
     */
    var INITIAL_VALUE = 0;
    var MDCTopAppBarFoundation = /** @class */ (function (_super) {
        __extends(MDCTopAppBarFoundation, _super);
        /* istanbul ignore next: optional argument is not a branch statement */
        function MDCTopAppBarFoundation(adapter) {
            var _this = _super.call(this, adapter) || this;
            /**
             * Indicates if the top app bar was docked in the previous scroll handler iteration.
             */
            _this.wasDocked = true;
            /**
             * Indicates if the top app bar is docked in the fully shown position.
             */
            _this.isDockedShowing = true;
            /**
             * Variable for current scroll position of the top app bar
             */
            _this.currentAppBarOffsetTop = 0;
            /**
             * Used to prevent the top app bar from being scrolled out of view during resize events
             */
            _this.isCurrentlyBeingResized = false;
            /**
             * The timeout that's used to throttle the resize events
             */
            _this.resizeThrottleId = INITIAL_VALUE;
            /**
             * The timeout that's used to debounce toggling the isCurrentlyBeingResized
             * variable after a resize
             */
            _this.resizeDebounceId = INITIAL_VALUE;
            _this.lastScrollPosition = _this.adapter.getViewportScrollY();
            _this.topAppBarHeight = _this.adapter.getTopAppBarHeight();
            return _this;
        }
        MDCTopAppBarFoundation.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.adapter.setStyle('top', '');
        };
        /**
         * Scroll handler for the default scroll behavior of the top app bar.
         * @override
         */
        MDCTopAppBarFoundation.prototype.handleTargetScroll = function () {
            var currentScrollPosition = Math.max(this.adapter.getViewportScrollY(), 0);
            var diff = currentScrollPosition - this.lastScrollPosition;
            this.lastScrollPosition = currentScrollPosition;
            // If the window is being resized the lastScrollPosition needs to be updated
            // but the current scroll of the top app bar should stay in the same
            // position.
            if (!this.isCurrentlyBeingResized) {
                this.currentAppBarOffsetTop -= diff;
                if (this.currentAppBarOffsetTop > 0) {
                    this.currentAppBarOffsetTop = 0;
                }
                else if (Math.abs(this.currentAppBarOffsetTop) > this.topAppBarHeight) {
                    this.currentAppBarOffsetTop = -this.topAppBarHeight;
                }
                this.moveTopAppBar();
            }
        };
        /**
         * Top app bar resize handler that throttle/debounce functions that execute updates.
         * @override
         */
        MDCTopAppBarFoundation.prototype.handleWindowResize = function () {
            var _this = this;
            // Throttle resize events 10 p/s
            if (!this.resizeThrottleId) {
                this.resizeThrottleId = setTimeout(function () {
                    _this.resizeThrottleId = INITIAL_VALUE;
                    _this.throttledResizeHandler();
                }, numbers$1.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
            }
            this.isCurrentlyBeingResized = true;
            if (this.resizeDebounceId) {
                clearTimeout(this.resizeDebounceId);
            }
            this.resizeDebounceId = setTimeout(function () {
                _this.handleTargetScroll();
                _this.isCurrentlyBeingResized = false;
                _this.resizeDebounceId = INITIAL_VALUE;
            }, numbers$1.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
        };
        /**
         * Function to determine if the DOM needs to update.
         */
        MDCTopAppBarFoundation.prototype.checkForUpdate = function () {
            var offscreenBoundaryTop = -this.topAppBarHeight;
            var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop < 0;
            var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop > offscreenBoundaryTop;
            var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
            // If it's partially showing, it can't be docked.
            if (partiallyShowing) {
                this.wasDocked = false;
            }
            else {
                // Not previously docked and not partially showing, it's now docked.
                if (!this.wasDocked) {
                    this.wasDocked = true;
                    return true;
                }
                else if (this.isDockedShowing !== hasAnyPixelsOnscreen) {
                    this.isDockedShowing = hasAnyPixelsOnscreen;
                    return true;
                }
            }
            return partiallyShowing;
        };
        /**
         * Function to move the top app bar if needed.
         */
        MDCTopAppBarFoundation.prototype.moveTopAppBar = function () {
            if (this.checkForUpdate()) {
                // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
                // so the top app bar doesn't show if the window resizes and the new height > the old height.
                var offset = this.currentAppBarOffsetTop;
                if (Math.abs(offset) >= this.topAppBarHeight) {
                    offset = -numbers$1.MAX_TOP_APP_BAR_HEIGHT;
                }
                this.adapter.setStyle('top', offset + 'px');
            }
        };
        /**
         * Throttled function that updates the top app bar scrolled values if the
         * top app bar height changes.
         */
        MDCTopAppBarFoundation.prototype.throttledResizeHandler = function () {
            var currentHeight = this.adapter.getTopAppBarHeight();
            if (this.topAppBarHeight !== currentHeight) {
                this.wasDocked = false;
                // Since the top app bar has a different height depending on the screen width, this
                // will ensure that the top app bar remains in the correct location if
                // completely hidden and a resize makes the top app bar a different height.
                this.currentAppBarOffsetTop -= this.topAppBarHeight - currentHeight;
                this.topAppBarHeight = currentHeight;
            }
            this.handleTargetScroll();
        };
        return MDCTopAppBarFoundation;
    }(MDCTopAppBarBaseFoundation));

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
     */
    var MDCFixedTopAppBarFoundation = /** @class */ (function (_super) {
        __extends(MDCFixedTopAppBarFoundation, _super);
        function MDCFixedTopAppBarFoundation() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * State variable for the previous scroll iteration top app bar state
             */
            _this.wasScrolled = false;
            return _this;
        }
        /**
         * Scroll handler for applying/removing the modifier class on the fixed top app bar.
         * @override
         */
        MDCFixedTopAppBarFoundation.prototype.handleTargetScroll = function () {
            var currentScroll = this.adapter.getViewportScrollY();
            if (currentScroll <= 0) {
                if (this.wasScrolled) {
                    this.adapter.removeClass(cssClasses$2.FIXED_SCROLLED_CLASS);
                    this.wasScrolled = false;
                }
            }
            else {
                if (!this.wasScrolled) {
                    this.adapter.addClass(cssClasses$2.FIXED_SCROLLED_CLASS);
                    this.wasScrolled = true;
                }
            }
        };
        return MDCFixedTopAppBarFoundation;
    }(MDCTopAppBarFoundation));

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
     */
    var MDCShortTopAppBarFoundation = /** @class */ (function (_super) {
        __extends(MDCShortTopAppBarFoundation, _super);
        /* istanbul ignore next: optional argument is not a branch statement */
        function MDCShortTopAppBarFoundation(adapter) {
            var _this = _super.call(this, adapter) || this;
            _this.collapsed = false;
            _this.isAlwaysCollapsed = false;
            return _this;
        }
        Object.defineProperty(MDCShortTopAppBarFoundation.prototype, "isCollapsed", {
            // Public visibility for backward compatibility.
            get: function () {
                return this.collapsed;
            },
            enumerable: false,
            configurable: true
        });
        MDCShortTopAppBarFoundation.prototype.init = function () {
            _super.prototype.init.call(this);
            if (this.adapter.getTotalActionItems() > 0) {
                this.adapter.addClass(cssClasses$2.SHORT_HAS_ACTION_ITEM_CLASS);
            }
            // If initialized with SHORT_COLLAPSED_CLASS, the bar should always be collapsed
            this.setAlwaysCollapsed(this.adapter.hasClass(cssClasses$2.SHORT_COLLAPSED_CLASS));
        };
        /**
         * Set if the short top app bar should always be collapsed.
         *
         * @param value When `true`, bar will always be collapsed. When `false`, bar may collapse or expand based on scroll.
         */
        MDCShortTopAppBarFoundation.prototype.setAlwaysCollapsed = function (value) {
            this.isAlwaysCollapsed = !!value;
            if (this.isAlwaysCollapsed) {
                this.collapse();
            }
            else {
                // let maybeCollapseBar determine if the bar should be collapsed
                this.maybeCollapseBar();
            }
        };
        MDCShortTopAppBarFoundation.prototype.getAlwaysCollapsed = function () {
            return this.isAlwaysCollapsed;
        };
        /**
         * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
         * @override
         */
        MDCShortTopAppBarFoundation.prototype.handleTargetScroll = function () {
            this.maybeCollapseBar();
        };
        MDCShortTopAppBarFoundation.prototype.maybeCollapseBar = function () {
            if (this.isAlwaysCollapsed) {
                return;
            }
            var currentScroll = this.adapter.getViewportScrollY();
            if (currentScroll <= 0) {
                if (this.collapsed) {
                    this.uncollapse();
                }
            }
            else {
                if (!this.collapsed) {
                    this.collapse();
                }
            }
        };
        MDCShortTopAppBarFoundation.prototype.uncollapse = function () {
            this.adapter.removeClass(cssClasses$2.SHORT_COLLAPSED_CLASS);
            this.collapsed = false;
        };
        MDCShortTopAppBarFoundation.prototype.collapse = function () {
            this.adapter.addClass(cssClasses$2.SHORT_COLLAPSED_CLASS);
            this.collapsed = true;
        };
        return MDCShortTopAppBarFoundation;
    }(MDCTopAppBarBaseFoundation));

    const subscriber_queue = [];
    /**
     * Creates a `Readable` store that allows reading by subscription.
     * @param value initial value
     * @param {StartStopNotifier}start start and stop notifications for subscriptions
     */
    function readable(value, start) {
        return {
            subscribe: writable(value, start).subscribe
        };
    }
    /**
     * Create a `Writable` store that allows both updating and reading by subscription.
     * @param {*=}value initial value
     * @param {StartStopNotifier=}start start and stop notifications for subscriptions
     */
    function writable(value, start = noop) {
        let stop;
        const subscribers = new Set();
        function set(new_value) {
            if (safe_not_equal(value, new_value)) {
                value = new_value;
                if (stop) { // store is ready
                    const run_queue = !subscriber_queue.length;
                    for (const subscriber of subscribers) {
                        subscriber[1]();
                        subscriber_queue.push(subscriber, value);
                    }
                    if (run_queue) {
                        for (let i = 0; i < subscriber_queue.length; i += 2) {
                            subscriber_queue[i][0](subscriber_queue[i + 1]);
                        }
                        subscriber_queue.length = 0;
                    }
                }
            }
        }
        function update(fn) {
            set(fn(value));
        }
        function subscribe(run, invalidate = noop) {
            const subscriber = [run, invalidate];
            subscribers.add(subscriber);
            if (subscribers.size === 1) {
                stop = start(set) || noop;
            }
            run(value);
            return () => {
                subscribers.delete(subscriber);
                if (subscribers.size === 0) {
                    stop();
                    stop = null;
                }
            };
        }
        return { set, update, subscribe };
    }

    function classMap(classObj) {
        return Object.entries(classObj)
            .filter(([name, value]) => name !== '' && value)
            .map(([name]) => name)
            .join(' ');
    }

    function dispatch(element, eventType, detail, eventInit = { bubbles: true }, 
    /** This is an internal thing used by SMUI to duplicate some SMUI events as MDC events. */
    duplicateEventForMDC = false) {
        if (typeof Event !== 'undefined' && element) {
            const event = new CustomEvent(eventType, Object.assign(Object.assign({}, eventInit), { detail }));
            element === null || element === void 0 ? void 0 : element.dispatchEvent(event);
            if (duplicateEventForMDC && eventType.startsWith('SMUI')) {
                const duplicateEvent = new CustomEvent(eventType.replace(/^SMUI/g, () => 'MDC'), Object.assign(Object.assign({}, eventInit), { detail }));
                element === null || element === void 0 ? void 0 : element.dispatchEvent(duplicateEvent);
                if (duplicateEvent.defaultPrevented) {
                    event.preventDefault();
                }
            }
            return event;
        }
    }

    function exclude(obj, keys) {
        let names = Object.getOwnPropertyNames(obj);
        const newObj = {};
        for (let i = 0; i < names.length; i++) {
            const name = names[i];
            const cashIndex = name.indexOf('$');
            if (cashIndex !== -1 &&
                keys.indexOf(name.substring(0, cashIndex + 1)) !== -1) {
                continue;
            }
            if (keys.indexOf(name) !== -1) {
                continue;
            }
            newObj[name] = obj[name];
        }
        return newObj;
    }

    // Match old modifiers. (only works on DOM events)
    const oldModifierRegex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
    // Match new modifiers.
    const newModifierRegex = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
    function forwardEventsBuilder(component) {
        // This is our pseudo $on function. It is defined on component mount.
        let $on;
        // This is a list of events bound before mount.
        let events = [];
        // And we override the $on function to forward all bound events.
        component.$on = (fullEventType, callback) => {
            let eventType = fullEventType;
            let destructor = () => { };
            if ($on) {
                // The event was bound programmatically.
                destructor = $on(eventType, callback);
            }
            else {
                // The event was bound before mount by Svelte.
                events.push([eventType, callback]);
            }
            const oldModifierMatch = eventType.match(oldModifierRegex);
            if (oldModifierMatch && console) {
                console.warn('Event modifiers in SMUI now use "$" instead of ":", so that ' +
                    'all events can be bound with modifiers. Please update your ' +
                    'event binding: ', eventType);
            }
            return () => {
                destructor();
            };
        };
        function forward(e) {
            // Internally bubble the event up from Svelte components.
            bubble(component, e);
        }
        return (node) => {
            const destructors = [];
            const forwardDestructors = {};
            // This function is responsible for listening and forwarding
            // all bound events.
            $on = (fullEventType, callback) => {
                let eventType = fullEventType;
                let handler = callback;
                // DOM addEventListener options argument.
                let options = false;
                const oldModifierMatch = eventType.match(oldModifierRegex);
                const newModifierMatch = eventType.match(newModifierRegex);
                const modifierMatch = oldModifierMatch || newModifierMatch;
                if (eventType.match(/^SMUI:\w+:/)) {
                    const newEventTypeParts = eventType.split(':');
                    let newEventType = '';
                    for (let i = 0; i < newEventTypeParts.length; i++) {
                        newEventType +=
                            i === newEventTypeParts.length - 1
                                ? ':' + newEventTypeParts[i]
                                : newEventTypeParts[i]
                                    .split('-')
                                    .map((value) => value.slice(0, 1).toUpperCase() + value.slice(1))
                                    .join('');
                    }
                    console.warn(`The event ${eventType.split('$')[0]} has been renamed to ${newEventType.split('$')[0]}.`);
                    eventType = newEventType;
                }
                if (modifierMatch) {
                    // Parse the event modifiers.
                    // Supported modifiers:
                    // - preventDefault
                    // - stopPropagation
                    // - passive
                    // - nonpassive
                    // - capture
                    // - once
                    const parts = eventType.split(oldModifierMatch ? ':' : '$');
                    eventType = parts[0];
                    const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
                    if (eventOptions.passive) {
                        options = options || {};
                        options.passive = true;
                    }
                    if (eventOptions.nonpassive) {
                        options = options || {};
                        options.passive = false;
                    }
                    if (eventOptions.capture) {
                        options = options || {};
                        options.capture = true;
                    }
                    if (eventOptions.once) {
                        options = options || {};
                        options.once = true;
                    }
                    if (eventOptions.preventDefault) {
                        handler = prevent_default(handler);
                    }
                    if (eventOptions.stopPropagation) {
                        handler = stop_propagation(handler);
                    }
                }
                // Listen for the event directly, with the given options.
                const off = listen(node, eventType, handler, options);
                const destructor = () => {
                    off();
                    const idx = destructors.indexOf(destructor);
                    if (idx > -1) {
                        destructors.splice(idx, 1);
                    }
                };
                destructors.push(destructor);
                // Forward the event from Svelte.
                if (!(eventType in forwardDestructors)) {
                    forwardDestructors[eventType] = listen(node, eventType, forward);
                }
                return destructor;
            };
            for (let i = 0; i < events.length; i++) {
                // Listen to all the events added before mount.
                $on(events[i][0], events[i][1]);
            }
            return {
                destroy: () => {
                    // Remove all event listeners.
                    for (let i = 0; i < destructors.length; i++) {
                        destructors[i]();
                    }
                    // Remove all event forwarders.
                    for (let entry of Object.entries(forwardDestructors)) {
                        entry[1]();
                    }
                },
            };
        };
    }

    function prefixFilter(obj, prefix) {
        let names = Object.getOwnPropertyNames(obj);
        const newObj = {};
        for (let i = 0; i < names.length; i++) {
            const name = names[i];
            if (name.substring(0, prefix.length) === prefix) {
                newObj[name.substring(prefix.length)] = obj[name];
            }
        }
        return newObj;
    }

    function useActions(node, actions) {
        let actionReturns = [];
        if (actions) {
            for (let i = 0; i < actions.length; i++) {
                const actionEntry = actions[i];
                const action = Array.isArray(actionEntry) ? actionEntry[0] : actionEntry;
                if (Array.isArray(actionEntry) && actionEntry.length > 1) {
                    actionReturns.push(action(node, actionEntry[1]));
                }
                else {
                    actionReturns.push(action(node));
                }
            }
        }
        return {
            update(actions) {
                if (((actions && actions.length) || 0) != actionReturns.length) {
                    throw new Error('You must not change the length of an actions array.');
                }
                if (actions) {
                    for (let i = 0; i < actions.length; i++) {
                        const returnEntry = actionReturns[i];
                        if (returnEntry && returnEntry.update) {
                            const actionEntry = actions[i];
                            if (Array.isArray(actionEntry) && actionEntry.length > 1) {
                                returnEntry.update(actionEntry[1]);
                            }
                            else {
                                returnEntry.update();
                            }
                        }
                    }
                }
            },
            destroy() {
                for (let i = 0; i < actionReturns.length; i++) {
                    const returnEntry = actionReturns[i];
                    if (returnEntry && returnEntry.destroy) {
                        returnEntry.destroy();
                    }
                }
            },
        };
    }

    /* node_modules\@smui\top-app-bar\dist\TopAppBar.svelte generated by Svelte v3.46.6 */

    const { window: window_1$1 } = globals;

    const file$G = "node_modules\\@smui\\top-app-bar\\dist\\TopAppBar.svelte";

    function create_fragment$L(ctx) {
    	let header;
    	let header_class_value;
    	let header_style_value;
    	let useActions_action;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[22].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[21], null);

    	let header_levels = [
    		{
    			class: header_class_value = classMap({
    				[/*className*/ ctx[2]]: true,
    				'mdc-top-app-bar': true,
    				'mdc-top-app-bar--short': /*variant*/ ctx[4] === 'short',
    				'mdc-top-app-bar--short-collapsed': /*collapsed*/ ctx[0],
    				'mdc-top-app-bar--fixed': /*variant*/ ctx[4] === 'fixed',
    				'smui-top-app-bar--static': /*variant*/ ctx[4] === 'static',
    				'smui-top-app-bar--color-secondary': /*color*/ ctx[5] === 'secondary',
    				'mdc-top-app-bar--prominent': /*prominent*/ ctx[6],
    				'mdc-top-app-bar--dense': /*dense*/ ctx[7],
    				.../*internalClasses*/ ctx[11]
    			})
    		},
    		{
    			style: header_style_value = Object.entries(/*internalStyles*/ ctx[12]).map(func$4).concat([/*style*/ ctx[3]]).join(' ')
    		},
    		/*$$restProps*/ ctx[15]
    	];

    	let header_data = {};

    	for (let i = 0; i < header_levels.length; i += 1) {
    		header_data = assign(header_data, header_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			header = element("header");
    			if (default_slot) default_slot.c();
    			set_attributes(header, header_data);
    			add_location(header, file$G, 9, 0, 208);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, header, anchor);

    			if (default_slot) {
    				default_slot.m(header, null);
    			}

    			/*header_binding*/ ctx[25](header);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					listen_dev(window_1$1, "resize", /*resize_handler*/ ctx[23], false, false, false),
    					listen_dev(window_1$1, "scroll", /*scroll_handler*/ ctx[24], false, false, false),
    					action_destroyer(useActions_action = useActions.call(null, header, /*use*/ ctx[1])),
    					action_destroyer(/*forwardEvents*/ ctx[13].call(null, header)),
    					listen_dev(header, "SMUITopAppBarIconButton:nav", /*SMUITopAppBarIconButton_nav_handler*/ ctx[26], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty[0] & /*$$scope*/ 2097152)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[21],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[21])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[21], dirty, null),
    						null
    					);
    				}
    			}

    			set_attributes(header, header_data = get_spread_update(header_levels, [
    				(!current || dirty[0] & /*className, variant, collapsed, color, prominent, dense, internalClasses*/ 2293 && header_class_value !== (header_class_value = classMap({
    					[/*className*/ ctx[2]]: true,
    					'mdc-top-app-bar': true,
    					'mdc-top-app-bar--short': /*variant*/ ctx[4] === 'short',
    					'mdc-top-app-bar--short-collapsed': /*collapsed*/ ctx[0],
    					'mdc-top-app-bar--fixed': /*variant*/ ctx[4] === 'fixed',
    					'smui-top-app-bar--static': /*variant*/ ctx[4] === 'static',
    					'smui-top-app-bar--color-secondary': /*color*/ ctx[5] === 'secondary',
    					'mdc-top-app-bar--prominent': /*prominent*/ ctx[6],
    					'mdc-top-app-bar--dense': /*dense*/ ctx[7],
    					.../*internalClasses*/ ctx[11]
    				}))) && { class: header_class_value },
    				(!current || dirty[0] & /*internalStyles, style*/ 4104 && header_style_value !== (header_style_value = Object.entries(/*internalStyles*/ ctx[12]).map(func$4).concat([/*style*/ ctx[3]]).join(' '))) && { style: header_style_value },
    				dirty[0] & /*$$restProps*/ 32768 && /*$$restProps*/ ctx[15]
    			]));

    			if (useActions_action && is_function(useActions_action.update) && dirty[0] & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);
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
    			if (detaching) detach_dev(header);
    			if (default_slot) default_slot.d(detaching);
    			/*header_binding*/ ctx[25](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$L.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func$4 = ([name, value]) => `${name}: ${value};`;

    function instance_1$2($$self, $$props, $$invalidate) {
    	const omit_props_names = [
    		"use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"
    	];

    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('TopAppBar', slots, ['default']);
    	const forwardEvents = forwardEventsBuilder(get_current_component());

    	let uninitializedValue = () => {
    		
    	};

    	function isUninitializedValue(value) {
    		return value === uninitializedValue;
    	}

    	let { use = [] } = $$props;
    	let { class: className = '' } = $$props;
    	let { style = '' } = $$props;
    	let { variant = 'standard' } = $$props;
    	let { color = 'primary' } = $$props;
    	let { collapsed = uninitializedValue } = $$props;
    	const alwaysCollapsed = !isUninitializedValue(collapsed) && !!collapsed;

    	if (isUninitializedValue(collapsed)) {
    		collapsed = false;
    	}

    	let { prominent = false } = $$props;
    	let { dense = false } = $$props;
    	let { scrollTarget = undefined } = $$props;
    	let element;
    	let instance;
    	let internalClasses = {};
    	let internalStyles = {};
    	let propStoreSet;

    	let propStore = readable({ variant, prominent, dense }, set => {
    		$$invalidate(18, propStoreSet = set);
    	});

    	let oldScrollTarget = undefined;
    	let oldVariant = variant;

    	onMount(() => {
    		$$invalidate(9, instance = getInstance());
    		instance.init();

    		return () => {
    			instance.destroy();
    		};
    	});

    	function getInstance() {
    		const Foundation = ({
    			static: MDCTopAppBarBaseFoundation,
    			short: MDCShortTopAppBarFoundation,
    			fixed: MDCFixedTopAppBarFoundation
    		})[variant] || MDCTopAppBarFoundation;

    		return new Foundation({
    				hasClass,
    				addClass,
    				removeClass,
    				setStyle: addStyle,
    				getTopAppBarHeight: () => element.clientHeight,
    				notifyNavigationIconClicked: () => dispatch(element, 'SMUITopAppBar:nav', undefined, undefined, true),
    				getViewportScrollY: () => scrollTarget == null
    				? window.pageYOffset
    				: scrollTarget.scrollTop,
    				getTotalActionItems: () => element.querySelectorAll('.mdc-top-app-bar__action-item').length
    			});
    	}

    	function hasClass(className) {
    		return className in internalClasses
    		? internalClasses[className]
    		: getElement().classList.contains(className);
    	}

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
    				((($$invalidate(12, internalStyles), $$invalidate(20, oldVariant)), $$invalidate(4, variant)), $$invalidate(9, instance));
    			} else {
    				$$invalidate(12, internalStyles[name] = value, internalStyles);
    			}
    		}
    	}

    	function handleTargetScroll() {
    		if (instance) {
    			instance.handleTargetScroll();

    			if (variant === 'short') {
    				$$invalidate(0, collapsed = 'isCollapsed' in instance && instance.isCollapsed);
    			}
    		}
    	}

    	function getPropStore() {
    		return propStore;
    	}

    	function getElement() {
    		return element;
    	}

    	const resize_handler = () => variant !== 'short' && variant !== 'fixed' && instance && instance.handleWindowResize();
    	const scroll_handler = () => scrollTarget == null && handleTargetScroll();

    	function header_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(10, element);
    		});
    	}

    	const SMUITopAppBarIconButton_nav_handler = () => instance && instance.handleNavigationClick();

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(15, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(1, use = $$new_props.use);
    		if ('class' in $$new_props) $$invalidate(2, className = $$new_props.class);
    		if ('style' in $$new_props) $$invalidate(3, style = $$new_props.style);
    		if ('variant' in $$new_props) $$invalidate(4, variant = $$new_props.variant);
    		if ('color' in $$new_props) $$invalidate(5, color = $$new_props.color);
    		if ('collapsed' in $$new_props) $$invalidate(0, collapsed = $$new_props.collapsed);
    		if ('prominent' in $$new_props) $$invalidate(6, prominent = $$new_props.prominent);
    		if ('dense' in $$new_props) $$invalidate(7, dense = $$new_props.dense);
    		if ('scrollTarget' in $$new_props) $$invalidate(8, scrollTarget = $$new_props.scrollTarget);
    		if ('$$scope' in $$new_props) $$invalidate(21, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		MDCTopAppBarBaseFoundation,
    		MDCTopAppBarFoundation,
    		MDCFixedTopAppBarFoundation,
    		MDCShortTopAppBarFoundation,
    		onMount,
    		get_current_component,
    		readable,
    		forwardEventsBuilder,
    		classMap,
    		useActions,
    		dispatch,
    		forwardEvents,
    		uninitializedValue,
    		isUninitializedValue,
    		use,
    		className,
    		style,
    		variant,
    		color,
    		collapsed,
    		alwaysCollapsed,
    		prominent,
    		dense,
    		scrollTarget,
    		element,
    		instance,
    		internalClasses,
    		internalStyles,
    		propStoreSet,
    		propStore,
    		oldScrollTarget,
    		oldVariant,
    		getInstance,
    		hasClass,
    		addClass,
    		removeClass,
    		addStyle,
    		handleTargetScroll,
    		getPropStore,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('uninitializedValue' in $$props) uninitializedValue = $$new_props.uninitializedValue;
    		if ('use' in $$props) $$invalidate(1, use = $$new_props.use);
    		if ('className' in $$props) $$invalidate(2, className = $$new_props.className);
    		if ('style' in $$props) $$invalidate(3, style = $$new_props.style);
    		if ('variant' in $$props) $$invalidate(4, variant = $$new_props.variant);
    		if ('color' in $$props) $$invalidate(5, color = $$new_props.color);
    		if ('collapsed' in $$props) $$invalidate(0, collapsed = $$new_props.collapsed);
    		if ('prominent' in $$props) $$invalidate(6, prominent = $$new_props.prominent);
    		if ('dense' in $$props) $$invalidate(7, dense = $$new_props.dense);
    		if ('scrollTarget' in $$props) $$invalidate(8, scrollTarget = $$new_props.scrollTarget);
    		if ('element' in $$props) $$invalidate(10, element = $$new_props.element);
    		if ('instance' in $$props) $$invalidate(9, instance = $$new_props.instance);
    		if ('internalClasses' in $$props) $$invalidate(11, internalClasses = $$new_props.internalClasses);
    		if ('internalStyles' in $$props) $$invalidate(12, internalStyles = $$new_props.internalStyles);
    		if ('propStoreSet' in $$props) $$invalidate(18, propStoreSet = $$new_props.propStoreSet);
    		if ('propStore' in $$props) propStore = $$new_props.propStore;
    		if ('oldScrollTarget' in $$props) $$invalidate(19, oldScrollTarget = $$new_props.oldScrollTarget);
    		if ('oldVariant' in $$props) $$invalidate(20, oldVariant = $$new_props.oldVariant);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty[0] & /*propStoreSet, variant, prominent, dense*/ 262352) {
    			if (propStoreSet) {
    				propStoreSet({ variant, prominent, dense });
    			}
    		}

    		if ($$self.$$.dirty[0] & /*oldVariant, variant, instance*/ 1049104) {
    			if (oldVariant !== variant && instance) {
    				$$invalidate(20, oldVariant = variant);
    				instance.destroy();
    				$$invalidate(11, internalClasses = {});
    				$$invalidate(12, internalStyles = {});
    				$$invalidate(9, instance = getInstance());
    				instance.init();
    			}
    		}

    		if ($$self.$$.dirty[0] & /*instance, variant*/ 528) {
    			if (instance && variant === 'short' && 'setAlwaysCollapsed' in instance) {
    				instance.setAlwaysCollapsed(alwaysCollapsed);
    			}
    		}

    		if ($$self.$$.dirty[0] & /*oldScrollTarget, scrollTarget*/ 524544) {
    			if (oldScrollTarget !== scrollTarget) {
    				if (oldScrollTarget) {
    					oldScrollTarget.removeEventListener('scroll', handleTargetScroll);
    				}

    				if (scrollTarget) {
    					scrollTarget.addEventListener('scroll', handleTargetScroll);
    				}

    				$$invalidate(19, oldScrollTarget = scrollTarget);
    			}
    		}
    	};

    	return [
    		collapsed,
    		use,
    		className,
    		style,
    		variant,
    		color,
    		prominent,
    		dense,
    		scrollTarget,
    		instance,
    		element,
    		internalClasses,
    		internalStyles,
    		forwardEvents,
    		handleTargetScroll,
    		$$restProps,
    		getPropStore,
    		getElement,
    		propStoreSet,
    		oldScrollTarget,
    		oldVariant,
    		$$scope,
    		slots,
    		resize_handler,
    		scroll_handler,
    		header_binding,
    		SMUITopAppBarIconButton_nav_handler
    	];
    }

    class TopAppBar extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(
    			this,
    			options,
    			instance_1$2,
    			create_fragment$L,
    			safe_not_equal,
    			{
    				use: 1,
    				class: 2,
    				style: 3,
    				variant: 4,
    				color: 5,
    				collapsed: 0,
    				prominent: 6,
    				dense: 7,
    				scrollTarget: 8,
    				getPropStore: 16,
    				getElement: 17
    			},
    			null,
    			[-1, -1]
    		);

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "TopAppBar",
    			options,
    			id: create_fragment$L.name
    		});
    	}

    	get use() {
    		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get class() {
    		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set class(value) {
    		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get variant() {
    		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set variant(value) {
    		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get color() {
    		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set color(value) {
    		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get collapsed() {
    		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set collapsed(value) {
    		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get prominent() {
    		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set prominent(value) {
    		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get dense() {
    		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set dense(value) {
    		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get scrollTarget() {
    		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set scrollTarget(value) {
    		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getPropStore() {
    		return this.$$.ctx[16];
    	}

    	set getPropStore(value) {
    		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[17];
    	}

    	set getElement(value) {
    		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules\@smui\common\dist\elements\Div.svelte generated by Svelte v3.46.6 */
    const file$F = "node_modules\\@smui\\common\\dist\\elements\\Div.svelte";

    function create_fragment$K(ctx) {
    	let div;
    	let useActions_action;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[6].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
    	let div_levels = [/*$$restProps*/ ctx[3]];
    	let div_data = {};

    	for (let i = 0; i < div_levels.length; i += 1) {
    		div_data = assign(div_data, div_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (default_slot) default_slot.c();
    			set_attributes(div, div_data);
    			add_location(div, file$F, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			if (default_slot) {
    				default_slot.m(div, null);
    			}

    			/*div_binding*/ ctx[7](div);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					action_destroyer(useActions_action = useActions.call(null, div, /*use*/ ctx[0])),
    					action_destroyer(/*forwardEvents*/ ctx[2].call(null, div))
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[5],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[5])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
    						null
    					);
    				}
    			}

    			set_attributes(div, div_data = get_spread_update(div_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
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
    			/*div_binding*/ ctx[7](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$K.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$I($$self, $$props, $$invalidate) {
    	const omit_props_names = ["use","getElement"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Div', slots, ['default']);
    	let { use = [] } = $$props;
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let element;

    	function getElement() {
    		return element;
    	}

    	function div_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(1, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('$$scope' in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		get_current_component,
    		forwardEventsBuilder,
    		useActions,
    		use,
    		forwardEvents,
    		element,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('element' in $$props) $$invalidate(1, element = $$new_props.element);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		use,
    		element,
    		forwardEvents,
    		$$restProps,
    		getElement,
    		$$scope,
    		slots,
    		div_binding
    	];
    }

    class Div$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$I, create_fragment$K, safe_not_equal, { use: 0, getElement: 4 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Div",
    			options,
    			id: create_fragment$K.name
    		});
    	}

    	get use() {
    		throw new Error("<Div>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<Div>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[4];
    	}

    	set getElement(value) {
    		throw new Error("<Div>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules\@smui\common\dist\classadder\ClassAdder.svelte generated by Svelte v3.46.6 */

    // (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     [smuiClass]: true,     ...smuiClassMap,   })}   {...props}   {...$$restProps}>
    function create_default_slot$c(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[10].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[12], null);

    	const block = {
    		c: function create() {
    			if (default_slot) default_slot.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 4096)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[12],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[12])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[12], dirty, null),
    						null
    					);
    				}
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
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$c.name,
    		type: "slot",
    		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     [smuiClass]: true,     ...smuiClassMap,   })}   {...props}   {...$$restProps}>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$J(ctx) {
    	let switch_instance;
    	let switch_instance_anchor;
    	let current;

    	const switch_instance_spread_levels = [
    		{
    			use: [/*forwardEvents*/ ctx[7], .../*use*/ ctx[0]]
    		},
    		{
    			class: classMap({
    				[/*className*/ ctx[1]]: true,
    				[/*smuiClass*/ ctx[5]]: true,
    				.../*smuiClassMap*/ ctx[4]
    			})
    		},
    		/*props*/ ctx[6],
    		/*$$restProps*/ ctx[8]
    	];

    	var switch_value = /*component*/ ctx[2];

    	function switch_props(ctx) {
    		let switch_instance_props = {
    			$$slots: { default: [create_default_slot$c] },
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
    		/*switch_instance_binding*/ ctx[11](switch_instance);
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
    			const switch_instance_changes = (dirty & /*forwardEvents, use, classMap, className, smuiClass, smuiClassMap, props, $$restProps*/ 499)
    			? get_spread_update(switch_instance_spread_levels, [
    					dirty & /*forwardEvents, use*/ 129 && {
    						use: [/*forwardEvents*/ ctx[7], .../*use*/ ctx[0]]
    					},
    					dirty & /*classMap, className, smuiClass, smuiClassMap*/ 50 && {
    						class: classMap({
    							[/*className*/ ctx[1]]: true,
    							[/*smuiClass*/ ctx[5]]: true,
    							.../*smuiClassMap*/ ctx[4]
    						})
    					},
    					dirty & /*props*/ 64 && get_spread_object(/*props*/ ctx[6]),
    					dirty & /*$$restProps*/ 256 && get_spread_object(/*$$restProps*/ ctx[8])
    				])
    			: {};

    			if (dirty & /*$$scope*/ 4096) {
    				switch_instance_changes.$$scope = { dirty, ctx };
    			}

    			if (switch_value !== (switch_value = /*component*/ ctx[2])) {
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
    					/*switch_instance_binding*/ ctx[11](switch_instance);
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
    			/*switch_instance_binding*/ ctx[11](null);
    			if (detaching) detach_dev(switch_instance_anchor);
    			if (switch_instance) destroy_component(switch_instance, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$J.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const internals = {
    	component: Div$1,
    	class: '',
    	classMap: {},
    	contexts: {},
    	props: {}
    };

    function instance$H($$self, $$props, $$invalidate) {
    	const omit_props_names = ["use","class","component","getElement"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('ClassAdder', slots, ['default']);
    	let { use = [] } = $$props;
    	let { class: className = '' } = $$props;
    	let element;
    	const smuiClass = internals.class;
    	const smuiClassMap = {};
    	const smuiClassUnsubscribes = [];
    	const contexts = internals.contexts;
    	const props = internals.props;
    	let { component = internals.component } = $$props;

    	Object.entries(internals.classMap).forEach(([name, context]) => {
    		const store = getContext(context);

    		if (store && 'subscribe' in store) {
    			smuiClassUnsubscribes.push(store.subscribe(value => {
    				$$invalidate(4, smuiClassMap[name] = value, smuiClassMap);
    			}));
    		}
    	});

    	const forwardEvents = forwardEventsBuilder(get_current_component());

    	for (let context in contexts) {
    		if (contexts.hasOwnProperty(context)) {
    			setContext(context, contexts[context]);
    		}
    	}

    	onDestroy(() => {
    		for (const unsubscribe of smuiClassUnsubscribes) {
    			unsubscribe();
    		}
    	});

    	function getElement() {
    		return element.getElement();
    	}

    	function switch_instance_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(3, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
    		if ('component' in $$new_props) $$invalidate(2, component = $$new_props.component);
    		if ('$$scope' in $$new_props) $$invalidate(12, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		Div: Div$1,
    		internals,
    		onDestroy,
    		getContext,
    		setContext,
    		get_current_component,
    		forwardEventsBuilder,
    		classMap,
    		use,
    		className,
    		element,
    		smuiClass,
    		smuiClassMap,
    		smuiClassUnsubscribes,
    		contexts,
    		props,
    		component,
    		forwardEvents,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('className' in $$props) $$invalidate(1, className = $$new_props.className);
    		if ('element' in $$props) $$invalidate(3, element = $$new_props.element);
    		if ('component' in $$props) $$invalidate(2, component = $$new_props.component);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		use,
    		className,
    		component,
    		element,
    		smuiClassMap,
    		smuiClass,
    		props,
    		forwardEvents,
    		$$restProps,
    		getElement,
    		slots,
    		switch_instance_binding,
    		$$scope
    	];
    }

    class ClassAdder extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$H, create_fragment$J, safe_not_equal, {
    			use: 0,
    			class: 1,
    			component: 2,
    			getElement: 9
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ClassAdder",
    			options,
    			id: create_fragment$J.name
    		});
    	}

    	get use() {
    		throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get class() {
    		throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set class(value) {
    		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get component() {
    		throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set component(value) {
    		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[9];
    	}

    	set getElement(value) {
    		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    // @ts-ignore: Internals is exported... argh.
    const defaults = Object.assign({}, internals);
    function classAdderBuilder(props) {
        return new Proxy(ClassAdder, {
            construct: function (target, args) {
                Object.assign(internals, defaults, props);
                // @ts-ignore: Need spread arg.
                return new target(...args);
            },
            get: function (target, prop) {
                Object.assign(internals, defaults, props);
                return target[prop];
            },
        });
    }

    /* node_modules\@smui\common\dist\elements\A.svelte generated by Svelte v3.46.6 */
    const file$E = "node_modules\\@smui\\common\\dist\\elements\\A.svelte";

    function create_fragment$I(ctx) {
    	let a;
    	let useActions_action;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[7].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);
    	let a_levels = [{ href: /*href*/ ctx[1] }, /*$$restProps*/ ctx[4]];
    	let a_data = {};

    	for (let i = 0; i < a_levels.length; i += 1) {
    		a_data = assign(a_data, a_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			a = element("a");
    			if (default_slot) default_slot.c();
    			set_attributes(a, a_data);
    			add_location(a, file$E, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);

    			if (default_slot) {
    				default_slot.m(a, null);
    			}

    			/*a_binding*/ ctx[8](a);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					action_destroyer(useActions_action = useActions.call(null, a, /*use*/ ctx[0])),
    					action_destroyer(/*forwardEvents*/ ctx[3].call(null, a))
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 64)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[6],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[6])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[6], dirty, null),
    						null
    					);
    				}
    			}

    			set_attributes(a, a_data = get_spread_update(a_levels, [
    				(!current || dirty & /*href*/ 2) && { href: /*href*/ ctx[1] },
    				dirty & /*$$restProps*/ 16 && /*$$restProps*/ ctx[4]
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
    			if (detaching) detach_dev(a);
    			if (default_slot) default_slot.d(detaching);
    			/*a_binding*/ ctx[8](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$I.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$G($$self, $$props, $$invalidate) {
    	const omit_props_names = ["use","href","getElement"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('A', slots, ['default']);
    	let { use = [] } = $$props;
    	let { href = 'javascript:void(0);' } = $$props;
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let element;

    	function getElement() {
    		return element;
    	}

    	function a_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(2, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('href' in $$new_props) $$invalidate(1, href = $$new_props.href);
    		if ('$$scope' in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		get_current_component,
    		forwardEventsBuilder,
    		useActions,
    		use,
    		href,
    		forwardEvents,
    		element,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('href' in $$props) $$invalidate(1, href = $$new_props.href);
    		if ('element' in $$props) $$invalidate(2, element = $$new_props.element);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		use,
    		href,
    		element,
    		forwardEvents,
    		$$restProps,
    		getElement,
    		$$scope,
    		slots,
    		a_binding
    	];
    }

    class A$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$G, create_fragment$I, safe_not_equal, { use: 0, href: 1, getElement: 5 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "A",
    			options,
    			id: create_fragment$I.name
    		});
    	}

    	get use() {
    		throw new Error("<A>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<A>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get href() {
    		throw new Error("<A>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set href(value) {
    		throw new Error("<A>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[5];
    	}

    	set getElement(value) {
    		throw new Error("<A>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules\@smui\common\dist\elements\Button.svelte generated by Svelte v3.46.6 */
    const file$D = "node_modules\\@smui\\common\\dist\\elements\\Button.svelte";

    function create_fragment$H(ctx) {
    	let button;
    	let useActions_action;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[6].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
    	let button_levels = [/*$$restProps*/ ctx[3]];
    	let button_data = {};

    	for (let i = 0; i < button_levels.length; i += 1) {
    		button_data = assign(button_data, button_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			button = element("button");
    			if (default_slot) default_slot.c();
    			set_attributes(button, button_data);
    			add_location(button, file$D, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);

    			if (default_slot) {
    				default_slot.m(button, null);
    			}

    			if (button.autofocus) button.focus();
    			/*button_binding*/ ctx[7](button);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					action_destroyer(useActions_action = useActions.call(null, button, /*use*/ ctx[0])),
    					action_destroyer(/*forwardEvents*/ ctx[2].call(null, button))
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[5],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[5])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
    						null
    					);
    				}
    			}

    			set_attributes(button, button_data = get_spread_update(button_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
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
    			if (detaching) detach_dev(button);
    			if (default_slot) default_slot.d(detaching);
    			/*button_binding*/ ctx[7](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$H.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$F($$self, $$props, $$invalidate) {
    	const omit_props_names = ["use","getElement"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Button', slots, ['default']);
    	let { use = [] } = $$props;
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let element;

    	function getElement() {
    		return element;
    	}

    	function button_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(1, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('$$scope' in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		get_current_component,
    		forwardEventsBuilder,
    		useActions,
    		use,
    		forwardEvents,
    		element,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('element' in $$props) $$invalidate(1, element = $$new_props.element);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		use,
    		element,
    		forwardEvents,
    		$$restProps,
    		getElement,
    		$$scope,
    		slots,
    		button_binding
    	];
    }

    class Button$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$F, create_fragment$H, safe_not_equal, { use: 0, getElement: 4 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Button",
    			options,
    			id: create_fragment$H.name
    		});
    	}

    	get use() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[4];
    	}

    	set getElement(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules\@smui\common\dist\elements\H2.svelte generated by Svelte v3.46.6 */
    const file$C = "node_modules\\@smui\\common\\dist\\elements\\H2.svelte";

    function create_fragment$G(ctx) {
    	let h2;
    	let useActions_action;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[6].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
    	let h2_levels = [/*$$restProps*/ ctx[3]];
    	let h2_data = {};

    	for (let i = 0; i < h2_levels.length; i += 1) {
    		h2_data = assign(h2_data, h2_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			h2 = element("h2");
    			if (default_slot) default_slot.c();
    			set_attributes(h2, h2_data);
    			add_location(h2, file$C, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h2, anchor);

    			if (default_slot) {
    				default_slot.m(h2, null);
    			}

    			/*h2_binding*/ ctx[7](h2);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					action_destroyer(useActions_action = useActions.call(null, h2, /*use*/ ctx[0])),
    					action_destroyer(/*forwardEvents*/ ctx[2].call(null, h2))
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[5],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[5])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
    						null
    					);
    				}
    			}

    			set_attributes(h2, h2_data = get_spread_update(h2_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
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
    			if (detaching) detach_dev(h2);
    			if (default_slot) default_slot.d(detaching);
    			/*h2_binding*/ ctx[7](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$G.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$E($$self, $$props, $$invalidate) {
    	const omit_props_names = ["use","getElement"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('H2', slots, ['default']);
    	let { use = [] } = $$props;
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let element;

    	function getElement() {
    		return element;
    	}

    	function h2_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(1, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('$$scope' in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		get_current_component,
    		forwardEventsBuilder,
    		useActions,
    		use,
    		forwardEvents,
    		element,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('element' in $$props) $$invalidate(1, element = $$new_props.element);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		use,
    		element,
    		forwardEvents,
    		$$restProps,
    		getElement,
    		$$scope,
    		slots,
    		h2_binding
    	];
    }

    class H2$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$E, create_fragment$G, safe_not_equal, { use: 0, getElement: 4 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "H2",
    			options,
    			id: create_fragment$G.name
    		});
    	}

    	get use() {
    		throw new Error("<H2>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<H2>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[4];
    	}

    	set getElement(value) {
    		throw new Error("<H2>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules\@smui\common\dist\elements\I.svelte generated by Svelte v3.46.6 */
    const file$B = "node_modules\\@smui\\common\\dist\\elements\\I.svelte";

    function create_fragment$F(ctx) {
    	let i;
    	let useActions_action;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[6].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
    	let i_levels = [/*$$restProps*/ ctx[3]];
    	let i_data = {};

    	for (let i = 0; i < i_levels.length; i += 1) {
    		i_data = assign(i_data, i_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			i = element("i");
    			if (default_slot) default_slot.c();
    			set_attributes(i, i_data);
    			add_location(i, file$B, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);

    			if (default_slot) {
    				default_slot.m(i, null);
    			}

    			/*i_binding*/ ctx[7](i);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					action_destroyer(useActions_action = useActions.call(null, i, /*use*/ ctx[0])),
    					action_destroyer(/*forwardEvents*/ ctx[2].call(null, i))
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[5],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[5])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
    						null
    					);
    				}
    			}

    			set_attributes(i, i_data = get_spread_update(i_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
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
    			if (detaching) detach_dev(i);
    			if (default_slot) default_slot.d(detaching);
    			/*i_binding*/ ctx[7](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$F.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$D($$self, $$props, $$invalidate) {
    	const omit_props_names = ["use","getElement"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('I', slots, ['default']);
    	let { use = [] } = $$props;
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let element;

    	function getElement() {
    		return element;
    	}

    	function i_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(1, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('$$scope' in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		get_current_component,
    		forwardEventsBuilder,
    		useActions,
    		use,
    		forwardEvents,
    		element,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('element' in $$props) $$invalidate(1, element = $$new_props.element);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		use,
    		element,
    		forwardEvents,
    		$$restProps,
    		getElement,
    		$$scope,
    		slots,
    		i_binding
    	];
    }

    class I extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$D, create_fragment$F, safe_not_equal, { use: 0, getElement: 4 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "I",
    			options,
    			id: create_fragment$F.name
    		});
    	}

    	get use() {
    		throw new Error("<I>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<I>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[4];
    	}

    	set getElement(value) {
    		throw new Error("<I>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules\@smui\common\dist\elements\Img.svelte generated by Svelte v3.46.6 */
    const file$A = "node_modules\\@smui\\common\\dist\\elements\\Img.svelte";

    function create_fragment$E(ctx) {
    	let img;
    	let useActions_action;
    	let t;
    	let current;
    	let mounted;
    	let dispose;
    	let img_levels = [{ alt: /*alt*/ ctx[1] }, /*$$restProps*/ ctx[4]];
    	let img_data = {};

    	for (let i = 0; i < img_levels.length; i += 1) {
    		img_data = assign(img_data, img_levels[i]);
    	}

    	const default_slot_template = /*#slots*/ ctx[7].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

    	const block = {
    		c: function create() {
    			img = element("img");
    			t = space();
    			if (default_slot) default_slot.c();
    			set_attributes(img, img_data);
    			add_location(img, file$A, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    			/*img_binding*/ ctx[8](img);
    			insert_dev(target, t, anchor);

    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			current = true;

    			if (!mounted) {
    				dispose = [
    					action_destroyer(useActions_action = useActions.call(null, img, /*use*/ ctx[0])),
    					action_destroyer(/*forwardEvents*/ ctx[3].call(null, img))
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			set_attributes(img, img_data = get_spread_update(img_levels, [
    				(!current || dirty & /*alt*/ 2) && { alt: /*alt*/ ctx[1] },
    				dirty & /*$$restProps*/ 16 && /*$$restProps*/ ctx[4]
    			]));

    			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);

    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 64)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[6],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[6])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[6], dirty, null),
    						null
    					);
    				}
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
    			if (detaching) detach_dev(img);
    			/*img_binding*/ ctx[8](null);
    			if (detaching) detach_dev(t);
    			if (default_slot) default_slot.d(detaching);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$E.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$C($$self, $$props, $$invalidate) {
    	const omit_props_names = ["use","alt","getElement"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Img', slots, ['default']);
    	let { use = [] } = $$props;
    	let { alt = undefined } = $$props;
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let element;

    	function getElement() {
    		return element;
    	}

    	function img_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(2, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('alt' in $$new_props) $$invalidate(1, alt = $$new_props.alt);
    		if ('$$scope' in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		get_current_component,
    		forwardEventsBuilder,
    		useActions,
    		use,
    		alt,
    		forwardEvents,
    		element,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('alt' in $$props) $$invalidate(1, alt = $$new_props.alt);
    		if ('element' in $$props) $$invalidate(2, element = $$new_props.element);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		use,
    		alt,
    		element,
    		forwardEvents,
    		$$restProps,
    		getElement,
    		$$scope,
    		slots,
    		img_binding
    	];
    }

    class Img$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$C, create_fragment$E, safe_not_equal, { use: 0, alt: 1, getElement: 5 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Img",
    			options,
    			id: create_fragment$E.name
    		});
    	}

    	get use() {
    		throw new Error("<Img>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<Img>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get alt() {
    		throw new Error("<Img>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set alt(value) {
    		throw new Error("<Img>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[5];
    	}

    	set getElement(value) {
    		throw new Error("<Img>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules\@smui\common\dist\elements\Li.svelte generated by Svelte v3.46.6 */
    const file$z = "node_modules\\@smui\\common\\dist\\elements\\Li.svelte";

    function create_fragment$D(ctx) {
    	let li;
    	let useActions_action;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[6].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
    	let li_levels = [/*$$restProps*/ ctx[3]];
    	let li_data = {};

    	for (let i = 0; i < li_levels.length; i += 1) {
    		li_data = assign(li_data, li_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			li = element("li");
    			if (default_slot) default_slot.c();
    			set_attributes(li, li_data);
    			add_location(li, file$z, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, li, anchor);

    			if (default_slot) {
    				default_slot.m(li, null);
    			}

    			/*li_binding*/ ctx[7](li);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					action_destroyer(useActions_action = useActions.call(null, li, /*use*/ ctx[0])),
    					action_destroyer(/*forwardEvents*/ ctx[2].call(null, li))
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[5],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[5])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
    						null
    					);
    				}
    			}

    			set_attributes(li, li_data = get_spread_update(li_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
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
    			if (detaching) detach_dev(li);
    			if (default_slot) default_slot.d(detaching);
    			/*li_binding*/ ctx[7](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$D.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$B($$self, $$props, $$invalidate) {
    	const omit_props_names = ["use","getElement"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Li', slots, ['default']);
    	let { use = [] } = $$props;
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let element;

    	function getElement() {
    		return element;
    	}

    	function li_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(1, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('$$scope' in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		get_current_component,
    		forwardEventsBuilder,
    		useActions,
    		use,
    		forwardEvents,
    		element,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('element' in $$props) $$invalidate(1, element = $$new_props.element);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		use,
    		element,
    		forwardEvents,
    		$$restProps,
    		getElement,
    		$$scope,
    		slots,
    		li_binding
    	];
    }

    class Li$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$B, create_fragment$D, safe_not_equal, { use: 0, getElement: 4 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Li",
    			options,
    			id: create_fragment$D.name
    		});
    	}

    	get use() {
    		throw new Error("<Li>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<Li>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[4];
    	}

    	set getElement(value) {
    		throw new Error("<Li>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules\@smui\common\dist\elements\Span.svelte generated by Svelte v3.46.6 */
    const file$y = "node_modules\\@smui\\common\\dist\\elements\\Span.svelte";

    function create_fragment$C(ctx) {
    	let span;
    	let useActions_action;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[6].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
    	let span_levels = [/*$$restProps*/ ctx[3]];
    	let span_data = {};

    	for (let i = 0; i < span_levels.length; i += 1) {
    		span_data = assign(span_data, span_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			span = element("span");
    			if (default_slot) default_slot.c();
    			set_attributes(span, span_data);
    			add_location(span, file$y, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);

    			if (default_slot) {
    				default_slot.m(span, null);
    			}

    			/*span_binding*/ ctx[7](span);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					action_destroyer(useActions_action = useActions.call(null, span, /*use*/ ctx[0])),
    					action_destroyer(/*forwardEvents*/ ctx[2].call(null, span))
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[5],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[5])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
    						null
    					);
    				}
    			}

    			set_attributes(span, span_data = get_spread_update(span_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
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
    			if (detaching) detach_dev(span);
    			if (default_slot) default_slot.d(detaching);
    			/*span_binding*/ ctx[7](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$C.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$A($$self, $$props, $$invalidate) {
    	const omit_props_names = ["use","getElement"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Span', slots, ['default']);
    	let { use = [] } = $$props;
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let element;

    	function getElement() {
    		return element;
    	}

    	function span_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(1, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('$$scope' in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		get_current_component,
    		forwardEventsBuilder,
    		useActions,
    		use,
    		forwardEvents,
    		element,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('element' in $$props) $$invalidate(1, element = $$new_props.element);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		use,
    		element,
    		forwardEvents,
    		$$restProps,
    		getElement,
    		$$scope,
    		slots,
    		span_binding
    	];
    }

    class Span$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$A, create_fragment$C, safe_not_equal, { use: 0, getElement: 4 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Span",
    			options,
    			id: create_fragment$C.name
    		});
    	}

    	get use() {
    		throw new Error("<Span>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<Span>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[4];
    	}

    	set getElement(value) {
    		throw new Error("<Span>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules\@smui\common\dist\elements\Svg.svelte generated by Svelte v3.46.6 */
    const file$x = "node_modules\\@smui\\common\\dist\\elements\\Svg.svelte";

    function create_fragment$B(ctx) {
    	let svg;
    	let useActions_action;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[6].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
    	let svg_levels = [/*$$restProps*/ ctx[3]];
    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			if (default_slot) default_slot.c();
    			set_svg_attributes(svg, svg_data);
    			add_location(svg, file$x, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);

    			if (default_slot) {
    				default_slot.m(svg, null);
    			}

    			/*svg_binding*/ ctx[7](svg);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					action_destroyer(useActions_action = useActions.call(null, svg, /*use*/ ctx[0])),
    					action_destroyer(/*forwardEvents*/ ctx[2].call(null, svg))
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[5],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[5])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
    						null
    					);
    				}
    			}

    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
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
    			if (detaching) detach_dev(svg);
    			if (default_slot) default_slot.d(detaching);
    			/*svg_binding*/ ctx[7](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$B.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$z($$self, $$props, $$invalidate) {
    	const omit_props_names = ["use","getElement"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Svg', slots, ['default']);
    	let { use = [] } = $$props;
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let element;

    	function getElement() {
    		return element;
    	}

    	function svg_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(1, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('$$scope' in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		get_current_component,
    		forwardEventsBuilder,
    		useActions,
    		use,
    		forwardEvents,
    		element,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('element' in $$props) $$invalidate(1, element = $$new_props.element);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		use,
    		element,
    		forwardEvents,
    		$$restProps,
    		getElement,
    		$$scope,
    		slots,
    		svg_binding
    	];
    }

    class Svg extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$z, create_fragment$B, safe_not_equal, { use: 0, getElement: 4 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Svg",
    			options,
    			id: create_fragment$B.name
    		});
    	}

    	get use() {
    		throw new Error("<Svg>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<Svg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[4];
    	}

    	set getElement(value) {
    		throw new Error("<Svg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    const A = A$1;
    const Button = Button$1;
    const Div = Div$1;
    const H2 = H2$1;
    const Img = Img$1;
    const Li = Li$1;
    const Span = Span$1;

    var Row = classAdderBuilder({
        class: 'mdc-top-app-bar__row',
        component: Div,
    });

    /* node_modules\@smui\top-app-bar\dist\Section.svelte generated by Svelte v3.46.6 */
    const file$w = "node_modules\\@smui\\top-app-bar\\dist\\Section.svelte";

    function create_fragment$A(ctx) {
    	let section;
    	let section_class_value;
    	let useActions_action;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[9].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);

    	let section_levels = [
    		{
    			class: section_class_value = classMap({
    				[/*className*/ ctx[1]]: true,
    				'mdc-top-app-bar__section': true,
    				'mdc-top-app-bar__section--align-start': /*align*/ ctx[2] === 'start',
    				'mdc-top-app-bar__section--align-end': /*align*/ ctx[2] === 'end'
    			})
    		},
    		/*toolbar*/ ctx[3] ? { role: 'toolbar' } : {},
    		/*$$restProps*/ ctx[6]
    	];

    	let section_data = {};

    	for (let i = 0; i < section_levels.length; i += 1) {
    		section_data = assign(section_data, section_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			section = element("section");
    			if (default_slot) default_slot.c();
    			set_attributes(section, section_data);
    			add_location(section, file$w, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, section, anchor);

    			if (default_slot) {
    				default_slot.m(section, null);
    			}

    			/*section_binding*/ ctx[10](section);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					action_destroyer(useActions_action = useActions.call(null, section, /*use*/ ctx[0])),
    					action_destroyer(/*forwardEvents*/ ctx[5].call(null, section))
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

    			set_attributes(section, section_data = get_spread_update(section_levels, [
    				(!current || dirty & /*className, align*/ 6 && section_class_value !== (section_class_value = classMap({
    					[/*className*/ ctx[1]]: true,
    					'mdc-top-app-bar__section': true,
    					'mdc-top-app-bar__section--align-start': /*align*/ ctx[2] === 'start',
    					'mdc-top-app-bar__section--align-end': /*align*/ ctx[2] === 'end'
    				}))) && { class: section_class_value },
    				dirty & /*toolbar*/ 8 && (/*toolbar*/ ctx[3] ? { role: 'toolbar' } : {}),
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
    			if (detaching) detach_dev(section);
    			if (default_slot) default_slot.d(detaching);
    			/*section_binding*/ ctx[10](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$A.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$y($$self, $$props, $$invalidate) {
    	const omit_props_names = ["use","class","align","toolbar","getElement"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Section', slots, ['default']);
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let { use = [] } = $$props;
    	let { class: className = '' } = $$props;
    	let { align = 'start' } = $$props;
    	let { toolbar = false } = $$props;
    	let element;

    	setContext('SMUI:icon-button:context', toolbar
    	? 'top-app-bar:action'
    	: 'top-app-bar:navigation');

    	setContext('SMUI:button:context', toolbar
    	? 'top-app-bar:action'
    	: 'top-app-bar:navigation');

    	function getElement() {
    		return element;
    	}

    	function section_binding($$value) {
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
    		if ('align' in $$new_props) $$invalidate(2, align = $$new_props.align);
    		if ('toolbar' in $$new_props) $$invalidate(3, toolbar = $$new_props.toolbar);
    		if ('$$scope' in $$new_props) $$invalidate(8, $$scope = $$new_props.$$scope);
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
    		align,
    		toolbar,
    		element,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('className' in $$props) $$invalidate(1, className = $$new_props.className);
    		if ('align' in $$props) $$invalidate(2, align = $$new_props.align);
    		if ('toolbar' in $$props) $$invalidate(3, toolbar = $$new_props.toolbar);
    		if ('element' in $$props) $$invalidate(4, element = $$new_props.element);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		use,
    		className,
    		align,
    		toolbar,
    		element,
    		forwardEvents,
    		$$restProps,
    		getElement,
    		$$scope,
    		slots,
    		section_binding
    	];
    }

    class Section$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$y, create_fragment$A, safe_not_equal, {
    			use: 0,
    			class: 1,
    			align: 2,
    			toolbar: 3,
    			getElement: 7
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Section",
    			options,
    			id: create_fragment$A.name
    		});
    	}

    	get use() {
    		throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get class() {
    		throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set class(value) {
    		throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get align() {
    		throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set align(value) {
    		throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get toolbar() {
    		throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set toolbar(value) {
    		throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[7];
    	}

    	set getElement(value) {
    		throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    var Title$2 = classAdderBuilder({
        class: 'mdc-top-app-bar__title',
        component: Span,
    });

    const Section = Section$1;

    classAdderBuilder({
        class: 'mdc-image-list__item',
        component: Li,
    });

    classAdderBuilder({
        class: 'mdc-image-list__image-aspect-container',
        component: Div,
    });

    var Image = classAdderBuilder({
        class: 'mdc-image-list__image',
        component: Img,
    });

    classAdderBuilder({
        class: 'mdc-image-list__supporting',
        component: Div,
    });

    /* node_modules\@smui\common\dist\CommonLabel.svelte generated by Svelte v3.46.6 */

    // (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__label': context === 'button',     'mdc-fab__label': context === 'fab',     'mdc-tab__text-label': context === 'tab',     'mdc-image-list__label': context === 'image-list',     'mdc-snackbar__label': context === 'snackbar',     'mdc-banner__text': context === 'banner',     'mdc-segmented-button__label': context === 'segmented-button',     'mdc-data-table__pagination-rows-per-page-label':       context === 'data-table:pagination',     'mdc-data-table__header-cell-label':       context === 'data-table:sortable-header-cell',   })}   {...context === 'snackbar' ? { 'aria-atomic': 'false' } : {}}   {tabindex}   {...$$restProps}>
    function create_default_slot$b(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[9].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], null);

    	const block = {
    		c: function create() {
    			if (default_slot) default_slot.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 2048)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[11],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[11])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[11], dirty, null),
    						null
    					);
    				}
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
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$b.name,
    		type: "slot",
    		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__label': context === 'button',     'mdc-fab__label': context === 'fab',     'mdc-tab__text-label': context === 'tab',     'mdc-image-list__label': context === 'image-list',     'mdc-snackbar__label': context === 'snackbar',     'mdc-banner__text': context === 'banner',     'mdc-segmented-button__label': context === 'segmented-button',     'mdc-data-table__pagination-rows-per-page-label':       context === 'data-table:pagination',     'mdc-data-table__header-cell-label':       context === 'data-table:sortable-header-cell',   })}   {...context === 'snackbar' ? { 'aria-atomic': 'false' } : {}}   {tabindex}   {...$$restProps}>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$z(ctx) {
    	let switch_instance;
    	let switch_instance_anchor;
    	let current;

    	const switch_instance_spread_levels = [
    		{
    			use: [/*forwardEvents*/ ctx[4], .../*use*/ ctx[0]]
    		},
    		{
    			class: classMap({
    				[/*className*/ ctx[1]]: true,
    				'mdc-button__label': /*context*/ ctx[5] === 'button',
    				'mdc-fab__label': /*context*/ ctx[5] === 'fab',
    				'mdc-tab__text-label': /*context*/ ctx[5] === 'tab',
    				'mdc-image-list__label': /*context*/ ctx[5] === 'image-list',
    				'mdc-snackbar__label': /*context*/ ctx[5] === 'snackbar',
    				'mdc-banner__text': /*context*/ ctx[5] === 'banner',
    				'mdc-segmented-button__label': /*context*/ ctx[5] === 'segmented-button',
    				'mdc-data-table__pagination-rows-per-page-label': /*context*/ ctx[5] === 'data-table:pagination',
    				'mdc-data-table__header-cell-label': /*context*/ ctx[5] === 'data-table:sortable-header-cell'
    			})
    		},
    		/*context*/ ctx[5] === 'snackbar'
    		? { 'aria-atomic': 'false' }
    		: {},
    		{ tabindex: /*tabindex*/ ctx[6] },
    		/*$$restProps*/ ctx[7]
    	];

    	var switch_value = /*component*/ ctx[2];

    	function switch_props(ctx) {
    		let switch_instance_props = {
    			$$slots: { default: [create_default_slot$b] },
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
    		/*switch_instance_binding*/ ctx[10](switch_instance);
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
    			const switch_instance_changes = (dirty & /*forwardEvents, use, classMap, className, context, tabindex, $$restProps*/ 243)
    			? get_spread_update(switch_instance_spread_levels, [
    					dirty & /*forwardEvents, use*/ 17 && {
    						use: [/*forwardEvents*/ ctx[4], .../*use*/ ctx[0]]
    					},
    					dirty & /*classMap, className, context*/ 34 && {
    						class: classMap({
    							[/*className*/ ctx[1]]: true,
    							'mdc-button__label': /*context*/ ctx[5] === 'button',
    							'mdc-fab__label': /*context*/ ctx[5] === 'fab',
    							'mdc-tab__text-label': /*context*/ ctx[5] === 'tab',
    							'mdc-image-list__label': /*context*/ ctx[5] === 'image-list',
    							'mdc-snackbar__label': /*context*/ ctx[5] === 'snackbar',
    							'mdc-banner__text': /*context*/ ctx[5] === 'banner',
    							'mdc-segmented-button__label': /*context*/ ctx[5] === 'segmented-button',
    							'mdc-data-table__pagination-rows-per-page-label': /*context*/ ctx[5] === 'data-table:pagination',
    							'mdc-data-table__header-cell-label': /*context*/ ctx[5] === 'data-table:sortable-header-cell'
    						})
    					},
    					dirty & /*context*/ 32 && get_spread_object(/*context*/ ctx[5] === 'snackbar'
    					? { 'aria-atomic': 'false' }
    					: {}),
    					dirty & /*tabindex*/ 64 && { tabindex: /*tabindex*/ ctx[6] },
    					dirty & /*$$restProps*/ 128 && get_spread_object(/*$$restProps*/ ctx[7])
    				])
    			: {};

    			if (dirty & /*$$scope*/ 2048) {
    				switch_instance_changes.$$scope = { dirty, ctx };
    			}

    			if (switch_value !== (switch_value = /*component*/ ctx[2])) {
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
    					/*switch_instance_binding*/ ctx[10](switch_instance);
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
    			/*switch_instance_binding*/ ctx[10](null);
    			if (detaching) detach_dev(switch_instance_anchor);
    			if (switch_instance) destroy_component(switch_instance, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$z.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$x($$self, $$props, $$invalidate) {
    	const omit_props_names = ["use","class","component","getElement"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('CommonLabel', slots, ['default']);
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let { use = [] } = $$props;
    	let { class: className = '' } = $$props;
    	let element;
    	let { component = Span$1 } = $$props;
    	const context = getContext('SMUI:label:context');
    	const tabindex = getContext('SMUI:label:tabindex');

    	function getElement() {
    		return element.getElement();
    	}

    	function switch_instance_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(3, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
    		if ('component' in $$new_props) $$invalidate(2, component = $$new_props.component);
    		if ('$$scope' in $$new_props) $$invalidate(11, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		getContext,
    		get_current_component,
    		forwardEventsBuilder,
    		classMap,
    		Span: Span$1,
    		forwardEvents,
    		use,
    		className,
    		element,
    		component,
    		context,
    		tabindex,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('className' in $$props) $$invalidate(1, className = $$new_props.className);
    		if ('element' in $$props) $$invalidate(3, element = $$new_props.element);
    		if ('component' in $$props) $$invalidate(2, component = $$new_props.component);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		use,
    		className,
    		component,
    		element,
    		forwardEvents,
    		context,
    		tabindex,
    		$$restProps,
    		getElement,
    		slots,
    		switch_instance_binding,
    		$$scope
    	];
    }

    class CommonLabel extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$x, create_fragment$z, safe_not_equal, {
    			use: 0,
    			class: 1,
    			component: 2,
    			getElement: 8
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "CommonLabel",
    			options,
    			id: create_fragment$z.name
    		});
    	}

    	get use() {
    		throw new Error("<CommonLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<CommonLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get class() {
    		throw new Error("<CommonLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set class(value) {
    		throw new Error("<CommonLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get component() {
    		throw new Error("<CommonLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set component(value) {
    		throw new Error("<CommonLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[8];
    	}

    	set getElement(value) {
    		throw new Error("<CommonLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules\@smui\common\dist\CommonIcon.svelte generated by Svelte v3.46.6 */

    // (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__icon': context === 'button',     'mdc-fab__icon': context === 'fab',     'mdc-icon-button__icon': context === 'icon-button',     'mdc-icon-button__icon--on': context === 'icon-button' && on,     'mdc-tab__icon': context === 'tab',     'mdc-banner__icon': context === 'banner',     'mdc-segmented-button__icon': context === 'segmented-button',   })}   aria-hidden="true"   {...component === Svg ? { focusable: 'false', tabindex: '-1' } : {}}   {...$$restProps}>
    function create_default_slot$a(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[9].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], null);

    	const block = {
    		c: function create() {
    			if (default_slot) default_slot.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 2048)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[11],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[11])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[11], dirty, null),
    						null
    					);
    				}
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
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$a.name,
    		type: "slot",
    		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__icon': context === 'button',     'mdc-fab__icon': context === 'fab',     'mdc-icon-button__icon': context === 'icon-button',     'mdc-icon-button__icon--on': context === 'icon-button' && on,     'mdc-tab__icon': context === 'tab',     'mdc-banner__icon': context === 'banner',     'mdc-segmented-button__icon': context === 'segmented-button',   })}   aria-hidden=\\\"true\\\"   {...component === Svg ? { focusable: 'false', tabindex: '-1' } : {}}   {...$$restProps}>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$y(ctx) {
    	let switch_instance;
    	let switch_instance_anchor;
    	let current;

    	const switch_instance_spread_levels = [
    		{
    			use: [/*forwardEvents*/ ctx[5], .../*use*/ ctx[0]]
    		},
    		{
    			class: classMap({
    				[/*className*/ ctx[1]]: true,
    				'mdc-button__icon': /*context*/ ctx[6] === 'button',
    				'mdc-fab__icon': /*context*/ ctx[6] === 'fab',
    				'mdc-icon-button__icon': /*context*/ ctx[6] === 'icon-button',
    				'mdc-icon-button__icon--on': /*context*/ ctx[6] === 'icon-button' && /*on*/ ctx[2],
    				'mdc-tab__icon': /*context*/ ctx[6] === 'tab',
    				'mdc-banner__icon': /*context*/ ctx[6] === 'banner',
    				'mdc-segmented-button__icon': /*context*/ ctx[6] === 'segmented-button'
    			})
    		},
    		{ "aria-hidden": "true" },
    		/*component*/ ctx[3] === Svg
    		? { focusable: 'false', tabindex: '-1' }
    		: {},
    		/*$$restProps*/ ctx[7]
    	];

    	var switch_value = /*component*/ ctx[3];

    	function switch_props(ctx) {
    		let switch_instance_props = {
    			$$slots: { default: [create_default_slot$a] },
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
    		/*switch_instance_binding*/ ctx[10](switch_instance);
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
    			const switch_instance_changes = (dirty & /*forwardEvents, use, classMap, className, context, on, component, Svg, $$restProps*/ 239)
    			? get_spread_update(switch_instance_spread_levels, [
    					dirty & /*forwardEvents, use*/ 33 && {
    						use: [/*forwardEvents*/ ctx[5], .../*use*/ ctx[0]]
    					},
    					dirty & /*classMap, className, context, on*/ 70 && {
    						class: classMap({
    							[/*className*/ ctx[1]]: true,
    							'mdc-button__icon': /*context*/ ctx[6] === 'button',
    							'mdc-fab__icon': /*context*/ ctx[6] === 'fab',
    							'mdc-icon-button__icon': /*context*/ ctx[6] === 'icon-button',
    							'mdc-icon-button__icon--on': /*context*/ ctx[6] === 'icon-button' && /*on*/ ctx[2],
    							'mdc-tab__icon': /*context*/ ctx[6] === 'tab',
    							'mdc-banner__icon': /*context*/ ctx[6] === 'banner',
    							'mdc-segmented-button__icon': /*context*/ ctx[6] === 'segmented-button'
    						})
    					},
    					switch_instance_spread_levels[2],
    					dirty & /*component, Svg*/ 8 && get_spread_object(/*component*/ ctx[3] === Svg
    					? { focusable: 'false', tabindex: '-1' }
    					: {}),
    					dirty & /*$$restProps*/ 128 && get_spread_object(/*$$restProps*/ ctx[7])
    				])
    			: {};

    			if (dirty & /*$$scope*/ 2048) {
    				switch_instance_changes.$$scope = { dirty, ctx };
    			}

    			if (switch_value !== (switch_value = /*component*/ ctx[3])) {
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
    					/*switch_instance_binding*/ ctx[10](switch_instance);
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
    			/*switch_instance_binding*/ ctx[10](null);
    			if (detaching) detach_dev(switch_instance_anchor);
    			if (switch_instance) destroy_component(switch_instance, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$y.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$w($$self, $$props, $$invalidate) {
    	const omit_props_names = ["use","class","on","component","getElement"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('CommonIcon', slots, ['default']);
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let { use = [] } = $$props;
    	let { class: className = '' } = $$props;
    	let { on = false } = $$props;
    	let element;
    	let { component = I } = $$props;
    	const context = getContext('SMUI:icon:context');

    	function getElement() {
    		return element.getElement();
    	}

    	function switch_instance_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(4, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(0, use = $$new_props.use);
    		if ('class' in $$new_props) $$invalidate(1, className = $$new_props.class);
    		if ('on' in $$new_props) $$invalidate(2, on = $$new_props.on);
    		if ('component' in $$new_props) $$invalidate(3, component = $$new_props.component);
    		if ('$$scope' in $$new_props) $$invalidate(11, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		getContext,
    		get_current_component,
    		forwardEventsBuilder,
    		classMap,
    		I,
    		Svg,
    		forwardEvents,
    		use,
    		className,
    		on,
    		element,
    		component,
    		context,
    		getElement
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('use' in $$props) $$invalidate(0, use = $$new_props.use);
    		if ('className' in $$props) $$invalidate(1, className = $$new_props.className);
    		if ('on' in $$props) $$invalidate(2, on = $$new_props.on);
    		if ('element' in $$props) $$invalidate(4, element = $$new_props.element);
    		if ('component' in $$props) $$invalidate(3, component = $$new_props.component);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		use,
    		className,
    		on,
    		component,
    		element,
    		forwardEvents,
    		context,
    		$$restProps,
    		getElement,
    		slots,
    		switch_instance_binding,
    		$$scope
    	];
    }

    class CommonIcon extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$w, create_fragment$y, safe_not_equal, {
    			use: 0,
    			class: 1,
    			on: 2,
    			component: 3,
    			getElement: 8
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "CommonIcon",
    			options,
    			id: create_fragment$y.name
    		});
    	}

    	get use() {
    		throw new Error("<CommonIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<CommonIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get class() {
    		throw new Error("<CommonIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set class(value) {
    		throw new Error("<CommonIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get on() {
    		throw new Error("<CommonIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set on(value) {
    		throw new Error("<CommonIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get component() {
    		throw new Error("<CommonIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set component(value) {
    		throw new Error("<CommonIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[8];
    	}

    	set getElement(value) {
    		throw new Error("<CommonIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    const Label = CommonLabel;
    const Icon = CommonIcon;

    /* node_modules\svelte-link\src\Link.svelte generated by Svelte v3.46.6 */

    const file$v = "node_modules\\svelte-link\\src\\Link.svelte";

    // (77:0) {:else}
    function create_else_block$1(ctx) {
    	let a;
    	let a_aria_current_value;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[9].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);

    	let a_levels = [
    		{
    			"aria-current": a_aria_current_value = /*active*/ ctx[4] ? "page" : undefined
    		},
    		/*$$restProps*/ ctx[6],
    		{ href: /*href*/ ctx[2] },
    		{ target: /*target*/ ctx[1] },
    		{ rel: /*rel*/ ctx[0] }
    	];

    	let a_data = {};

    	for (let i = 0; i < a_levels.length; i += 1) {
    		a_data = assign(a_data, a_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			a = element("a");
    			if (default_slot) default_slot.c();
    			set_attributes(a, a_data);
    			toggle_class(a, "active", /*active*/ ctx[4]);
    			add_location(a, file$v, 77, 2, 1589);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);

    			if (default_slot) {
    				default_slot.m(a, null);
    			}

    			current = true;

    			if (!mounted) {
    				dispose = [
    					listen_dev(a, "click", /*click_handler_1*/ ctx[17], false, false, false),
    					listen_dev(a, "mouseover", /*mouseover_handler_1*/ ctx[18], false, false, false),
    					listen_dev(a, "mouseenter", /*mouseenter_handler_1*/ ctx[19], false, false, false),
    					listen_dev(a, "mouseenter", /*mouseenter_handler_2*/ ctx[24], false, false, false),
    					listen_dev(a, "mouseout", /*mouseout_handler_1*/ ctx[20], false, false, false),
    					listen_dev(a, "focus", /*focus_handler_1*/ ctx[21], false, false, false),
    					listen_dev(a, "blur", /*blur_handler_1*/ ctx[22], false, false, false),
    					listen_dev(a, "keydown", /*keydown_handler_1*/ ctx[23], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
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

    			set_attributes(a, a_data = get_spread_update(a_levels, [
    				(!current || dirty & /*active*/ 16 && a_aria_current_value !== (a_aria_current_value = /*active*/ ctx[4] ? "page" : undefined)) && { "aria-current": a_aria_current_value },
    				dirty & /*$$restProps*/ 64 && /*$$restProps*/ ctx[6],
    				(!current || dirty & /*href*/ 4) && { href: /*href*/ ctx[2] },
    				(!current || dirty & /*target*/ 2) && { target: /*target*/ ctx[1] },
    				(!current || dirty & /*rel*/ 1) && { rel: /*rel*/ ctx[0] }
    			]));

    			toggle_class(a, "active", /*active*/ ctx[4]);
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
    			if (detaching) detach_dev(a);
    			if (default_slot) default_slot.d(detaching);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$1.name,
    		type: "else",
    		source: "(77:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (64:0) {#if disabled}
    function create_if_block$6(ctx) {
    	let span;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[9].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);
    	let span_levels = [/*$$restProps*/ ctx[6]];
    	let span_data = {};

    	for (let i = 0; i < span_levels.length; i += 1) {
    		span_data = assign(span_data, span_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			span = element("span");
    			if (default_slot) default_slot.c();
    			set_attributes(span, span_data);
    			add_location(span, file$v, 64, 2, 1421);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);

    			if (default_slot) {
    				default_slot.m(span, null);
    			}

    			current = true;

    			if (!mounted) {
    				dispose = [
    					listen_dev(span, "click", /*click_handler*/ ctx[10], false, false, false),
    					listen_dev(span, "mouseover", /*mouseover_handler*/ ctx[11], false, false, false),
    					listen_dev(span, "mouseenter", /*mouseenter_handler*/ ctx[12], false, false, false),
    					listen_dev(span, "mouseout", /*mouseout_handler*/ ctx[13], false, false, false),
    					listen_dev(span, "focus", /*focus_handler*/ ctx[14], false, false, false),
    					listen_dev(span, "blur", /*blur_handler*/ ctx[15], false, false, false),
    					listen_dev(span, "keydown", /*keydown_handler*/ ctx[16], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
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

    			set_attributes(span, span_data = get_spread_update(span_levels, [dirty & /*$$restProps*/ 64 && /*$$restProps*/ ctx[6]]));
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
    			if (detaching) detach_dev(span);
    			if (default_slot) default_slot.d(detaching);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$6.name,
    		type: "if",
    		source: "(64:0) {#if disabled}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$x(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block$6, create_else_block$1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*disabled*/ ctx[3]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				} else {
    					if_block.p(ctx, dirty);
    				}

    				transition_in(if_block, 1);
    				if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$x.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const fetched = new Map();

    function instance$v($$self, $$props, $$invalidate) {
    	const omit_props_names = ["href","disabled","outbound","target","rel","active"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Link', slots, ['default']);
    	let { href = "javascript:void(0);" } = $$props;
    	let { disabled = false } = $$props;
    	let { outbound = undefined } = $$props;
    	let { target = undefined } = $$props;
    	let { rel = undefined } = $$props;
    	let { active = false } = $$props;

    	async function prefetch() {
    		if (fetched.has(href)) return;
    		const response = await fetch(href);
    		if (response.ok) fetched.set(href, true);
    	}

    	function click_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function mouseover_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function mouseenter_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function mouseout_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function focus_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function blur_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function keydown_handler(event) {
    		bubble.call(this, $$self, event);
    	}

    	function click_handler_1(event) {
    		bubble.call(this, $$self, event);
    	}

    	function mouseover_handler_1(event) {
    		bubble.call(this, $$self, event);
    	}

    	function mouseenter_handler_1(event) {
    		bubble.call(this, $$self, event);
    	}

    	function mouseout_handler_1(event) {
    		bubble.call(this, $$self, event);
    	}

    	function focus_handler_1(event) {
    		bubble.call(this, $$self, event);
    	}

    	function blur_handler_1(event) {
    		bubble.call(this, $$self, event);
    	}

    	function keydown_handler_1(event) {
    		bubble.call(this, $$self, event);
    	}

    	const mouseenter_handler_2 = () => {
    		if (rel === "prefetch") prefetch();
    	};

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('href' in $$new_props) $$invalidate(2, href = $$new_props.href);
    		if ('disabled' in $$new_props) $$invalidate(3, disabled = $$new_props.disabled);
    		if ('outbound' in $$new_props) $$invalidate(7, outbound = $$new_props.outbound);
    		if ('target' in $$new_props) $$invalidate(1, target = $$new_props.target);
    		if ('rel' in $$new_props) $$invalidate(0, rel = $$new_props.rel);
    		if ('active' in $$new_props) $$invalidate(4, active = $$new_props.active);
    		if ('$$scope' in $$new_props) $$invalidate(8, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		fetched,
    		href,
    		disabled,
    		outbound,
    		target,
    		rel,
    		active,
    		prefetch
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('href' in $$props) $$invalidate(2, href = $$new_props.href);
    		if ('disabled' in $$props) $$invalidate(3, disabled = $$new_props.disabled);
    		if ('outbound' in $$props) $$invalidate(7, outbound = $$new_props.outbound);
    		if ('target' in $$props) $$invalidate(1, target = $$new_props.target);
    		if ('rel' in $$props) $$invalidate(0, rel = $$new_props.rel);
    		if ('active' in $$props) $$invalidate(4, active = $$new_props.active);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*href, outbound*/ 132) {
    			if (typeof window !== "undefined") {
    				const isExternal = new URL(href, `${location.protocol}//${location.host}`).host !== location.host;

    				if (isExternal && outbound === undefined) {
    					$$invalidate(7, outbound = true);
    				}
    			}
    		}

    		if ($$self.$$.dirty & /*outbound, rel*/ 129) {
    			if (outbound) {
    				$$invalidate(1, target = "_blank");
    				if (rel === undefined) $$invalidate(0, rel = "noopener noreferrer");
    			}
    		}
    	};

    	return [
    		rel,
    		target,
    		href,
    		disabled,
    		active,
    		prefetch,
    		$$restProps,
    		outbound,
    		$$scope,
    		slots,
    		click_handler,
    		mouseover_handler,
    		mouseenter_handler,
    		mouseout_handler,
    		focus_handler,
    		blur_handler,
    		keydown_handler,
    		click_handler_1,
    		mouseover_handler_1,
    		mouseenter_handler_1,
    		mouseout_handler_1,
    		focus_handler_1,
    		blur_handler_1,
    		keydown_handler_1,
    		mouseenter_handler_2
    	];
    }

    class Link extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$v, create_fragment$x, safe_not_equal, {
    			href: 2,
    			disabled: 3,
    			outbound: 7,
    			target: 1,
    			rel: 0,
    			active: 4
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Link",
    			options,
    			id: create_fragment$x.name
    		});
    	}

    	get href() {
    		throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set href(value) {
    		throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get disabled() {
    		throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set disabled(value) {
    		throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get outbound() {
    		throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set outbound(value) {
    		throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get target() {
    		throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set target(value) {
    		throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get rel() {
    		throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set rel(value) {
    		throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get active() {
    		throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set active(value) {
    		throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

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
    var cssPropertyNameMap = {
        animation: {
            prefixed: '-webkit-animation',
            standard: 'animation',
        },
        transform: {
            prefixed: '-webkit-transform',
            standard: 'transform',
        },
        transition: {
            prefixed: '-webkit-transition',
            standard: 'transition',
        },
    };
    function isWindow(windowObj) {
        return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
    }
    function getCorrectPropertyName(windowObj, cssProperty) {
        if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
            var el = windowObj.document.createElement('div');
            var _a = cssPropertyNameMap[cssProperty], standard = _a.standard, prefixed = _a.prefixed;
            var isStandard = standard in el.style;
            return isStandard ? standard : prefixed;
        }
        return cssProperty;
    }

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
     */
    var cssClasses$1 = {
        CLOSED_CLASS: 'mdc-linear-progress--closed',
        CLOSED_ANIMATION_OFF_CLASS: 'mdc-linear-progress--closed-animation-off',
        INDETERMINATE_CLASS: 'mdc-linear-progress--indeterminate',
        REVERSED_CLASS: 'mdc-linear-progress--reversed',
        ANIMATION_READY_CLASS: 'mdc-linear-progress--animation-ready',
    };
    var strings$1 = {
        ARIA_HIDDEN: 'aria-hidden',
        ARIA_VALUEMAX: 'aria-valuemax',
        ARIA_VALUEMIN: 'aria-valuemin',
        ARIA_VALUENOW: 'aria-valuenow',
        BUFFER_BAR_SELECTOR: '.mdc-linear-progress__buffer-bar',
        FLEX_BASIS: 'flex-basis',
        PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar',
    };
    // these are percentages pulled from keyframes.scss
    var animationDimensionPercentages = {
        PRIMARY_HALF: .8367142,
        PRIMARY_FULL: 2.00611057,
        SECONDARY_QUARTER: .37651913,
        SECONDARY_HALF: .84386165,
        SECONDARY_FULL: 1.60277782,
    };

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
                return cssClasses$1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCLinearProgressFoundation, "strings", {
            get: function () {
                return strings$1;
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
            this.determinate = !this.adapter.hasClass(cssClasses$1.INDETERMINATE_CLASS);
            this.adapter.addClass(cssClasses$1.ANIMATION_READY_CLASS);
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
                this.adapter.removeClass(cssClasses$1.INDETERMINATE_CLASS);
                this.adapter.setAttribute(strings$1.ARIA_VALUENOW, this.progress.toString());
                this.adapter.setAttribute(strings$1.ARIA_VALUEMAX, '1');
                this.adapter.setAttribute(strings$1.ARIA_VALUEMIN, '0');
                this.setPrimaryBarProgress(this.progress);
                this.setBufferBarProgress(this.buffer);
                return;
            }
            if (this.observer) {
                this.calculateAndSetDimensions(this.adapter.getWidth());
            }
            this.adapter.addClass(cssClasses$1.INDETERMINATE_CLASS);
            this.adapter.removeAttribute(strings$1.ARIA_VALUENOW);
            this.adapter.removeAttribute(strings$1.ARIA_VALUEMAX);
            this.adapter.removeAttribute(strings$1.ARIA_VALUEMIN);
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
                this.adapter.setAttribute(strings$1.ARIA_VALUENOW, value.toString());
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
            this.adapter.removeClass(cssClasses$1.CLOSED_CLASS);
            this.adapter.removeClass(cssClasses$1.CLOSED_ANIMATION_OFF_CLASS);
            this.adapter.removeAttribute(strings$1.ARIA_HIDDEN);
        };
        MDCLinearProgressFoundation.prototype.close = function () {
            this.adapter.addClass(cssClasses$1.CLOSED_CLASS);
            this.adapter.setAttribute(strings$1.ARIA_HIDDEN, 'true');
        };
        MDCLinearProgressFoundation.prototype.isClosed = function () {
            return this.adapter.hasClass(cssClasses$1.CLOSED_CLASS);
        };
        /**
         * Handles the transitionend event emitted after `close()` is called and the
         * opacity fades out. This is so that animations are removed only after the
         * progress indicator is completely hidden.
         */
        MDCLinearProgressFoundation.prototype.handleTransitionEnd = function () {
            if (this.adapter.hasClass(cssClasses$1.CLOSED_CLASS)) {
                this.adapter.addClass(cssClasses$1.CLOSED_ANIMATION_OFF_CLASS);
            }
        };
        MDCLinearProgressFoundation.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            if (this.observer) {
                this.observer.disconnect();
            }
        };
        MDCLinearProgressFoundation.prototype.restartAnimation = function () {
            this.adapter.removeClass(cssClasses$1.ANIMATION_READY_CLASS);
            this.adapter.forceLayout();
            this.adapter.addClass(cssClasses$1.ANIMATION_READY_CLASS);
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
            this.adapter.setBufferBarStyle(strings$1.FLEX_BASIS, value);
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
    const file$u = "node_modules\\@smui\\linear-progress\\dist\\LinearProgress.svelte";

    function create_fragment$w(ctx) {
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
    			add_location(div0, file$u, 25, 4, 744);
    			attr_dev(div1, "class", "mdc-linear-progress__buffer-dots");
    			add_location(div1, file$u, 31, 4, 925);
    			attr_dev(div2, "class", "mdc-linear-progress__buffer");
    			add_location(div2, file$u, 24, 2, 698);
    			attr_dev(span0, "class", "mdc-linear-progress__bar-inner");
    			add_location(span0, file$u, 39, 4, 1182);
    			attr_dev(div3, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar");
    			attr_dev(div3, "style", div3_style_value = Object.entries(/*primaryBarStyles*/ ctx[12]).map(func_1).join(' '));
    			add_location(div3, file$u, 33, 2, 985);
    			attr_dev(span1, "class", "mdc-linear-progress__bar-inner");
    			add_location(span1, file$u, 42, 4, 1319);
    			attr_dev(div4, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar");
    			add_location(div4, file$u, 41, 2, 1241);
    			set_attributes(div5, div5_data);
    			add_location(div5, file$u, 0, 0, 0);
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
    		id: create_fragment$w.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func$3 = ([name, value]) => `${name}: ${value};`;
    const func_1 = ([name, value]) => `${name}: ${value};`;
    const func_2 = ([name, value]) => `${name}: ${value};`;

    function instance_1$1($$self, $$props, $$invalidate) {
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

    		init(this, options, instance_1$1, create_fragment$w, safe_not_equal, {
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
    			id: create_fragment$w.name
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
    function create_default_slot_10$1(ctx) {
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
    		id: create_default_slot_10$1.name,
    		type: "slot",
    		source: "(23:4) <Section class=\\\"mdc-typography--headline6\\\" style=\\\"justify-content: center;\\\">",
    		ctx
    	});

    	return block;
    }

    // (24:80) <Link href="#content3-1">
    function create_default_slot_9$1(ctx) {
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
    		id: create_default_slot_9$1.name,
    		type: "slot",
    		source: "(24:80) <Link href=\\\"#content3-1\\\">",
    		ctx
    	});

    	return block;
    }

    // (24:4) <Section class="mdc-typography--headline6" style="justify-content: center;">
    function create_default_slot_8$1(ctx) {
    	let link;
    	let current;

    	link = new Link({
    			props: {
    				href: "#content3-1",
    				$$slots: { default: [create_default_slot_9$1] },
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
    		id: create_default_slot_8$1.name,
    		type: "slot",
    		source: "(24:4) <Section class=\\\"mdc-typography--headline6\\\" style=\\\"justify-content: center;\\\">",
    		ctx
    	});

    	return block;
    }

    // (25:80) <Link href="#content4-1">
    function create_default_slot_7$1(ctx) {
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
    		id: create_default_slot_7$1.name,
    		type: "slot",
    		source: "(25:80) <Link href=\\\"#content4-1\\\">",
    		ctx
    	});

    	return block;
    }

    // (25:4) <Section class="mdc-typography--headline6" style="justify-content: center;">
    function create_default_slot_6$2(ctx) {
    	let link;
    	let current;

    	link = new Link({
    			props: {
    				href: "#content4-1",
    				$$slots: { default: [create_default_slot_7$1] },
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
    		id: create_default_slot_6$2.name,
    		type: "slot",
    		source: "(25:4) <Section class=\\\"mdc-typography--headline6\\\" style=\\\"justify-content: center;\\\">",
    		ctx
    	});

    	return block;
    }

    // (26:80) <Link href="#content5-1">
    function create_default_slot_5$2(ctx) {
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
    		id: create_default_slot_5$2.name,
    		type: "slot",
    		source: "(26:80) <Link href=\\\"#content5-1\\\">",
    		ctx
    	});

    	return block;
    }

    // (26:4) <Section class="mdc-typography--headline6" style="justify-content: center;">
    function create_default_slot_4$2(ctx) {
    	let link;
    	let current;

    	link = new Link({
    			props: {
    				href: "#content5-1",
    				$$slots: { default: [create_default_slot_5$2] },
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
    		id: create_default_slot_4$2.name,
    		type: "slot",
    		source: "(26:4) <Section class=\\\"mdc-typography--headline6\\\" style=\\\"justify-content: center;\\\">",
    		ctx
    	});

    	return block;
    }

    // (27:80) <Link href="#section6-1">
    function create_default_slot_3$3(ctx) {
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
    		id: create_default_slot_3$3.name,
    		type: "slot",
    		source: "(27:80) <Link href=\\\"#section6-1\\\">",
    		ctx
    	});

    	return block;
    }

    // (27:4) <Section class="mdc-typography--headline6" style="justify-content: center;">
    function create_default_slot_2$5(ctx) {
    	let link;
    	let current;

    	link = new Link({
    			props: {
    				href: "#section6-1",
    				$$slots: { default: [create_default_slot_3$3] },
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
    		id: create_default_slot_2$5.name,
    		type: "slot",
    		source: "(27:4) <Section class=\\\"mdc-typography--headline6\\\" style=\\\"justify-content: center;\\\">",
    		ctx
    	});

    	return block;
    }

    // (21:2) <Row id="row" class="mdc-elevation--z4" style="background-color: white; ">
    function create_default_slot_1$7(ctx) {
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
    				$$slots: { default: [create_default_slot_10$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	section2 = new Section({
    			props: {
    				class: "mdc-typography--headline6",
    				style: "justify-content: center;",
    				$$slots: { default: [create_default_slot_8$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	section3 = new Section({
    			props: {
    				class: "mdc-typography--headline6",
    				style: "justify-content: center;",
    				$$slots: { default: [create_default_slot_6$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	section4 = new Section({
    			props: {
    				class: "mdc-typography--headline6",
    				style: "justify-content: center;",
    				$$slots: { default: [create_default_slot_4$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	section5 = new Section({
    			props: {
    				class: "mdc-typography--headline6",
    				style: "justify-content: center;",
    				$$slots: { default: [create_default_slot_2$5] },
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
    		id: create_default_slot_1$7.name,
    		type: "slot",
    		source: "(21:2) <Row id=\\\"row\\\" class=\\\"mdc-elevation--z4\\\" style=\\\"background-color: white; \\\">",
    		ctx
    	});

    	return block;
    }

    // (20:0) <TopAppBar variant="fixed" class="transparent">
    function create_default_slot$9(ctx) {
    	let row;
    	let t;
    	let linearprogress;
    	let current;

    	row = new Row({
    			props: {
    				id: "row",
    				class: "mdc-elevation--z4",
    				style: "background-color: white; ",
    				$$slots: { default: [create_default_slot_1$7] },
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
    		id: create_default_slot$9.name,
    		type: "slot",
    		source: "(20:0) <TopAppBar variant=\\\"fixed\\\" class=\\\"transparent\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$v(ctx) {
    	let topappbar;
    	let current;

    	topappbar = new TopAppBar({
    			props: {
    				variant: "fixed",
    				class: "transparent",
    				$$slots: { default: [create_default_slot$9] },
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
    		id: create_fragment$v.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$u($$self, $$props, $$invalidate) {
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
    		Title: Title$2,
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
    		init(this, options, instance$u, create_fragment$v, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "TopAppBar_1",
    			options,
    			id: create_fragment$v.name
    		});
    	}
    }

    /**
     * @license
     * Copyright 2020 Google Inc.
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
    var FOCUS_SENTINEL_CLASS = 'mdc-dom-focus-sentinel';
    /**
     * Utility to trap focus in a given root element, e.g. for modal components such
     * as dialogs. The root should have at least one focusable child element,
     * for setting initial focus when trapping focus.
     * Also tracks the previously focused element, and restores focus to that
     * element when releasing focus.
     */
    var FocusTrap = /** @class */ (function () {
        function FocusTrap(root, options) {
            if (options === void 0) { options = {}; }
            this.root = root;
            this.options = options;
            // Previously focused element before trapping focus.
            this.elFocusedBeforeTrapFocus = null;
        }
        /**
         * Traps focus in `root`. Also focuses on either `initialFocusEl` if set;
         * otherwises sets initial focus to the first focusable child element.
         */
        FocusTrap.prototype.trapFocus = function () {
            var focusableEls = this.getFocusableElements(this.root);
            if (focusableEls.length === 0) {
                throw new Error('FocusTrap: Element must have at least one focusable child.');
            }
            this.elFocusedBeforeTrapFocus =
                document.activeElement instanceof HTMLElement ? document.activeElement :
                    null;
            this.wrapTabFocus(this.root);
            if (!this.options.skipInitialFocus) {
                this.focusInitialElement(focusableEls, this.options.initialFocusEl);
            }
        };
        /**
         * Releases focus from `root`. Also restores focus to the previously focused
         * element.
         */
        FocusTrap.prototype.releaseFocus = function () {
            [].slice.call(this.root.querySelectorAll("." + FOCUS_SENTINEL_CLASS))
                .forEach(function (sentinelEl) {
                sentinelEl.parentElement.removeChild(sentinelEl);
            });
            if (!this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus) {
                this.elFocusedBeforeTrapFocus.focus();
            }
        };
        /**
         * Wraps tab focus within `el` by adding two hidden sentinel divs which are
         * used to mark the beginning and the end of the tabbable region. When
         * focused, these sentinel elements redirect focus to the first/last
         * children elements of the tabbable region, ensuring that focus is trapped
         * within that region.
         */
        FocusTrap.prototype.wrapTabFocus = function (el) {
            var _this = this;
            var sentinelStart = this.createSentinel();
            var sentinelEnd = this.createSentinel();
            sentinelStart.addEventListener('focus', function () {
                var focusableEls = _this.getFocusableElements(el);
                if (focusableEls.length > 0) {
                    focusableEls[focusableEls.length - 1].focus();
                }
            });
            sentinelEnd.addEventListener('focus', function () {
                var focusableEls = _this.getFocusableElements(el);
                if (focusableEls.length > 0) {
                    focusableEls[0].focus();
                }
            });
            el.insertBefore(sentinelStart, el.children[0]);
            el.appendChild(sentinelEnd);
        };
        /**
         * Focuses on `initialFocusEl` if defined and a child of the root element.
         * Otherwise, focuses on the first focusable child element of the root.
         */
        FocusTrap.prototype.focusInitialElement = function (focusableEls, initialFocusEl) {
            var focusIndex = 0;
            if (initialFocusEl) {
                focusIndex = Math.max(focusableEls.indexOf(initialFocusEl), 0);
            }
            focusableEls[focusIndex].focus();
        };
        FocusTrap.prototype.getFocusableElements = function (root) {
            var focusableEls = [].slice.call(root.querySelectorAll('[autofocus], [tabindex], a, input, textarea, select, button'));
            return focusableEls.filter(function (el) {
                var isDisabledOrHidden = el.getAttribute('aria-disabled') === 'true' ||
                    el.getAttribute('disabled') != null ||
                    el.getAttribute('hidden') != null ||
                    el.getAttribute('aria-hidden') === 'true';
                var isTabbableAndVisible = el.tabIndex >= 0 &&
                    el.getBoundingClientRect().width > 0 &&
                    !el.classList.contains(FOCUS_SENTINEL_CLASS) && !isDisabledOrHidden;
                var isProgrammaticallyHidden = false;
                if (isTabbableAndVisible) {
                    var style = getComputedStyle(el);
                    isProgrammaticallyHidden =
                        style.display === 'none' || style.visibility === 'hidden';
                }
                return isTabbableAndVisible && !isProgrammaticallyHidden;
            });
        };
        FocusTrap.prototype.createSentinel = function () {
            var sentinel = document.createElement('div');
            sentinel.setAttribute('tabindex', '0');
            // Don't announce in screen readers.
            sentinel.setAttribute('aria-hidden', 'true');
            sentinel.classList.add(FOCUS_SENTINEL_CLASS);
            return sentinel;
        };
        return FocusTrap;
    }());

    var domFocusTrap = /*#__PURE__*/Object.freeze({
        __proto__: null,
        FocusTrap: FocusTrap
    });

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
    const file$t = "node_modules\\@smui\\fab\\dist\\Fab.svelte";

    // (37:10) {#if touch}
    function create_if_block$5(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			attr_dev(div, "class", "mdc-fab__touch");
    			add_location(div, file$t, 36, 21, 783);
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
    		id: create_if_block$5.name,
    		type: "if",
    		source: "(37:10) {#if touch}",
    		ctx
    	});

    	return block;
    }

    // (1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: false,         color,         disabled: !!$$restProps.disabled,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-fab': true,     'mdc-fab--mini': mini,     'mdc-fab--exited': exited,     'mdc-fab--extended': extended,     'smui-fab--color-primary': color === 'primary',     'mdc-fab--touch': touch,     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   {href}   {...$$restProps}   >
    function create_default_slot$8(ctx) {
    	let div;
    	let t;
    	let if_block_anchor;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[20].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[22], null);
    	let if_block = /*touch*/ ctx[8] && create_if_block$5(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			t = space();
    			if (default_slot) default_slot.c();
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    			attr_dev(div, "class", "mdc-fab__ripple");
    			add_location(div, file$t, 35, 3, 730);
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
    					if_block = create_if_block$5(ctx);
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
    		id: create_default_slot$8.name,
    		type: "slot",
    		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: false,         color,         disabled: !!$$restProps.disabled,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-fab': true,     'mdc-fab--mini': mini,     'mdc-fab--exited': exited,     'mdc-fab--extended': extended,     'smui-fab--color-primary': color === 'primary',     'mdc-fab--touch': touch,     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   {href}   {...$$restProps}   >",
    		ctx
    	});

    	return block;
    }

    function create_fragment$u(ctx) {
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
    			$$slots: { default: [create_default_slot$8] },
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
    		id: create_fragment$u.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func$2 = ([name, value]) => `${name}: ${value};`;

    function instance$t($$self, $$props, $$invalidate) {
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

    		init(this, options, instance$t, create_fragment$u, safe_not_equal, {
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
    			id: create_fragment$u.name
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
    const file$s = "src\\Components\\CustomFAB.svelte";

    // (9:2) <Icon class="custom-FAB-Icon">
    function create_default_slot_2$4(ctx) {
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			if (!src_url_equal(img.src, img_src_value = "img/logo.png")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Logo");
    			attr_dev(img, "class", "svelte-25nunp");
    			add_location(img, file$s, 9, 4, 237);
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
    		id: create_default_slot_2$4.name,
    		type: "slot",
    		source: "(9:2) <Icon class=\\\"custom-FAB-Icon\\\">",
    		ctx
    	});

    	return block;
    }

    // (12:2) <Label class="mdc-typography--button bold" style="overflow: hidden;">
    function create_default_slot_1$6(ctx) {
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
    		id: create_default_slot_1$6.name,
    		type: "slot",
    		source: "(12:2) <Label class=\\\"mdc-typography--button bold\\\" style=\\\"overflow: hidden;\\\">",
    		ctx
    	});

    	return block;
    }

    // (8:0) <Fab color="primary" href="#{target}" extended class="custom-FABExtended">
    function create_default_slot$7(ctx) {
    	let icon;
    	let t;
    	let label_1;
    	let current;

    	icon = new Icon({
    			props: {
    				class: "custom-FAB-Icon",
    				$$slots: { default: [create_default_slot_2$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	label_1 = new Label({
    			props: {
    				class: "mdc-typography--button bold",
    				style: "overflow: hidden;",
    				$$slots: { default: [create_default_slot_1$6] },
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
    		id: create_default_slot$7.name,
    		type: "slot",
    		source: "(8:0) <Fab color=\\\"primary\\\" href=\\\"#{target}\\\" extended class=\\\"custom-FABExtended\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$t(ctx) {
    	let fab;
    	let current;

    	fab = new Fab({
    			props: {
    				color: "primary",
    				href: "#" + /*target*/ ctx[0],
    				extended: true,
    				class: "custom-FABExtended",
    				$$slots: { default: [create_default_slot$7] },
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
    		id: create_fragment$t.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$s($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$s, create_fragment$t, safe_not_equal, { target: 0, label: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "CustomFAB",
    			options,
    			id: create_fragment$t.name
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

    const file$r = "src\\Components\\Footer.svelte";

    function create_fragment$s(ctx) {
    	let footer;
    	let t0;
    	let br;
    	let t1;

    	const block = {
    		c: function create() {
    			footer = element("footer");
    			t0 = text("© Copyright 2022 — Gruppo 10 ");
    			br = element("br");
    			t1 = text(" Arena Nicolò — Barnabé Carlos — Cannizzaro Gloria — Caotti Leonardo — Navone Federica — Oneto Alessandro — Sartori Alice\r\n  — Sattanino Giulia");
    			add_location(br, file$r, 1, 36, 76);
    			attr_dev(footer, "class", "mdc-typography--body2 svelte-1huo1b5");
    			add_location(footer, file$r, 0, 0, 0);
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
    		id: create_fragment$s.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$r($$self, $$props) {
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
    		init(this, options, instance$r, create_fragment$s, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Footer",
    			options,
    			id: create_fragment$s.name
    		});
    	}
    }

    /* src\Amianto\Title.svelte generated by Svelte v3.46.6 */

    const file$q = "src\\Amianto\\Title.svelte";

    function create_fragment$r(ctx) {
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
    			div0.textContent = "Sai davvero cos'è l'amianto?";
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
    			add_location(div0, file$q, 0, 0, 0);
    			add_location(br, file$q, 3, 2, 185);
    			attr_dev(div1, "class", "mdc-typography--headline4 svelte-v5e0jn");
    			add_location(div1, file$q, 1, 0, 85);
    			attr_dev(span, "class", "bold error");
    			add_location(span, file$q, 5, 51, 295);
    			attr_dev(div2, "class", "mdc-typography--headline4 svelte-v5e0jn");
    			add_location(div2, file$q, 5, 0, 244);
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
    		id: create_fragment$r.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$q($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Title', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Title> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Title$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$q, create_fragment$r, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Title",
    			options,
    			id: create_fragment$r.name
    		});
    	}
    }

    /* src\Amianto\Intro.svelte generated by Svelte v3.46.6 */

    const file$p = "src\\Amianto\\Intro.svelte";

    function create_fragment$q(ctx) {
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
    			div0.textContent = "COS'È L'AMIANTO E PERCHÉ VIENE SCAVATO?";
    			t1 = space();
    			div1 = element("div");
    			t2 = text("Con il termine ");
    			span0 = element("span");
    			span0.textContent = "amianto";
    			t4 = text(" o asbesto viene identificato un minerale naturale a struttura fibrosa, conosciuto sin dall'antichitá\r\n    per le sue proprietà termoisolanti e fonoassorbenti. Nel XX secolo, grazie alla sua\r\n    ");
    			span1 = element("span");
    			span1.textContent = "economicità di produzione";
    			t6 = text(", è stato largamente adottato da tutto il mondo in innumerevoli applicazioni industriali ed\r\n    edilizie.\r\n    ");
    			br0 = element("br");
    			br1 = element("br");
    			t7 = text("\r\n    Con il tempo però tale materiale si è rivelato ");
    			span2 = element("span");
    			span2.textContent = "nocivo";
    			t9 = text(" per la salute dell'uomo, a causa del rilascio di fibre che, se inalate,\r\n    possono provocare patologie ");
    			span3 = element("span");
    			span3.textContent = "gravi ed irreversibili";
    			t11 = text(" all'apparato respiratorio, tra cui le più note sono asbestosi, carcinomi polmonari\r\n    e mesoteliomi.");
    			t12 = space();
    			div5 = element("div");
    			div3 = element("div");
    			div3.textContent = "Che reputazione ha oggi l'amianto?";
    			t14 = space();
    			div4 = element("div");
    			t15 = text("Negli anni '70 è stato raggiunto il ");
    			span4 = element("span");
    			span4.textContent = "picco";
    			t17 = text(" di produzione di amianto, coinvolgendo 85 paesi diversi nella sua estrazione e\r\n    lavorazione. In Italia, dal 1992 ad oggi, sono entrate in vigore numerose leggi che ");
    			span5 = element("span");
    			span5.textContent = "vietano";
    			t19 = text(" estrazione, commercializzazione e\r\n    produzione di amianto. Non tutte le nazioni però hanno bandito questo materiale: Russia, Cina, Brasile e Canada sono gli attuali maggiori\r\n    ");
    			span6 = element("span");
    			span6.textContent = "produttori";
    			t21 = text(" di amianto.\r\n    ");
    			br2 = element("br");
    			br3 = element("br");
    			t22 = text("\r\n    L'estrazione di amianto rimane ancora oggi uno dei maggiori argomenti di discussione sul campo legislativo e su quello etico. Attraverso questo viaggio\r\n    metaforico nell'");
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
    			add_location(div0, file$p, 1, 2, 22);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$p, 3, 19, 176);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$p, 5, 4, 410);
    			add_location(br0, file$p, 7, 4, 578);
    			add_location(br1, file$p, 7, 10, 584);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$p, 8, 51, 643);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$p, 9, 32, 786);
    			attr_dev(div1, "class", "mdc-typography--body1");
    			add_location(div1, file$p, 2, 2, 120);
    			attr_dev(div2, "class", "left svelte-1jctsza");
    			add_location(div2, file$p, 0, 0, 0);
    			attr_dev(div3, "class", "mdc-typography--headline4 uppercase");
    			add_location(div3, file$p, 15, 2, 987);
    			attr_dev(span4, "class", "highlight");
    			add_location(span4, file$p, 17, 40, 1157);
    			attr_dev(span5, "class", "highlight");
    			add_location(span5, file$p, 18, 88, 1362);
    			attr_dev(span6, "class", "highlight");
    			add_location(span6, file$p, 20, 4, 1583);
    			add_location(br2, file$p, 21, 4, 1642);
    			add_location(br3, file$p, 21, 10, 1648);
    			attr_dev(span7, "class", "highlight");
    			add_location(span7, file$p, 23, 20, 1833);
    			attr_dev(span8, "class", "highlight");
    			add_location(span8, file$p, 24, 4, 1979);
    			attr_dev(span9, "class", "highlight");
    			add_location(span9, file$p, 24, 75, 2050);
    			attr_dev(div4, "class", "mdc-typography--body1");
    			add_location(div4, file$p, 16, 2, 1080);
    			attr_dev(div5, "class", "right svelte-1jctsza");
    			add_location(div5, file$p, 14, 0, 964);
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
    		id: create_fragment$q.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$p($$self, $$props) {
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
    		init(this, options, instance$p, create_fragment$q, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Intro",
    			options,
    			id: create_fragment$q.name
    		});
    	}
    }

    /* node_modules\@smui\card\dist\Card.svelte generated by Svelte v3.46.6 */
    const file$o = "node_modules\\@smui\\card\\dist\\Card.svelte";

    function create_fragment$p(ctx) {
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
    			add_location(div, file$o, 0, 0, 0);
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
    		id: create_fragment$p.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$o($$self, $$props, $$invalidate) {
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

    		init(this, options, instance$o, create_fragment$p, safe_not_equal, {
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
    			id: create_fragment$p.name
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

    var Content$1 = classAdderBuilder({
        class: 'smui-card__content',
        component: Div,
    });

    /* node_modules\@smui\card\dist\PrimaryAction.svelte generated by Svelte v3.46.6 */
    const file$n = "node_modules\\@smui\\card\\dist\\PrimaryAction.svelte";

    function create_fragment$o(ctx) {
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
    			add_location(div0, file$n, 25, 2, 504);
    			set_attributes(div1, div1_data);
    			add_location(div1, file$n, 0, 0, 0);
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
    		id: create_fragment$o.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func$1 = ([name, value]) => `${name}: ${value};`;

    function instance$n($$self, $$props, $$invalidate) {
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

    		init(this, options, instance$n, create_fragment$o, safe_not_equal, {
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
    			id: create_fragment$o.name
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
    const file$m = "node_modules\\@smui\\card\\dist\\Actions.svelte";

    function create_fragment$n(ctx) {
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
    		id: create_fragment$n.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$m($$self, $$props, $$invalidate) {
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

    class Actions$2 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$m, create_fragment$n, safe_not_equal, {
    			use: 0,
    			class: 1,
    			fullBleed: 2,
    			getElement: 6
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Actions",
    			options,
    			id: create_fragment$n.name
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
    const Actions$1 = Actions$2;

    /* src\Components\LinkCard.svelte generated by Svelte v3.46.6 */
    const file$l = "src\\Components\\LinkCard.svelte";

    // (11:6) <Content class="link-card-content" style="">
    function create_default_slot_2$3(ctx) {
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
    			add_location(div0, file$l, 11, 8, 311);
    			attr_dev(div1, "class", "mdc-typography--body2");
    			add_location(div1, file$l, 12, 8, 379);
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
    		id: create_default_slot_2$3.name,
    		type: "slot",
    		source: "(11:6) <Content class=\\\"link-card-content\\\" style=\\\"\\\">",
    		ctx
    	});

    	return block;
    }

    // (9:4) <PrimaryAction>
    function create_default_slot_1$5(ctx) {
    	let img;
    	let img_src_value;
    	let t;
    	let content;
    	let current;

    	content = new Content$1({
    			props: {
    				class: "link-card-content",
    				style: "",
    				$$slots: { default: [create_default_slot_2$3] },
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
    			add_location(img, file$l, 9, 6, 224);
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
    		id: create_default_slot_1$5.name,
    		type: "slot",
    		source: "(9:4) <PrimaryAction>",
    		ctx
    	});

    	return block;
    }

    // (8:2) <Card class="link-card" style="">
    function create_default_slot$6(ctx) {
    	let primaryaction;
    	let current;

    	primaryaction = new PrimaryAction({
    			props: {
    				$$slots: { default: [create_default_slot_1$5] },
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
    		id: create_default_slot$6.name,
    		type: "slot",
    		source: "(8:2) <Card class=\\\"link-card\\\" style=\\\"\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$m(ctx) {
    	let a;
    	let card;
    	let current;

    	card = new Card({
    			props: {
    				class: "link-card",
    				style: "",
    				$$slots: { default: [create_default_slot$6] },
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
    			add_location(a, file$l, 6, 0, 139);
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
    		id: create_fragment$m.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$l($$self, $$props, $$invalidate) {
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
    		Content: Content$1,
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
    		init(this, options, instance$l, create_fragment$m, safe_not_equal, { href: 0, src: 1, title: 2, subtitle: 3 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "LinkCard",
    			options,
    			id: create_fragment$m.name
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
    const file$k = "src\\Amianto\\Cards.svelte";

    function create_fragment$l(ctx) {
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
    				subtitle: "La miniera di amianto più grande d'Europa. Rimasta attiva nella provincia di Torino fino al 1990."
    			},
    			$$inline: true
    		});

    	linkcard2 = new LinkCard({
    			props: {
    				href: "#content4-1",
    				src: "img/libby-mine.png",
    				title: "Libby, Montana",
    				subtitle: "La città che ha sofferto la contaminazione d'amianto causata dall'estrazione di vermiculite."
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
    			span1.textContent = "città";
    			t7 = text(" che incontrerai ti mostreranno quanta influenza abbia avuto l'amianto in tutto il mondo.\r\n    ");
    			br1 = element("br");
    			t8 = text("Ad accompagnarti troverai gli ");
    			span2 = element("span");
    			span2.textContent = "uomini";
    			t10 = text(" che di più hanno sofferto, e potrai ascoltare le loro storie.");
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
    			add_location(div0, file$k, 5, 2, 99);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$k, 7, 54, 358);
    			add_location(br0, file$k, 8, 4, 412);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$k, 8, 13, 421);
    			add_location(br1, file$k, 9, 4, 552);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$k, 9, 40, 588);
    			attr_dev(div1, "class", "mdc-typography--body1");
    			set_style(div1, "padding-top", "1vw");
    			set_style(div1, "padding-bottom", "1.8vw");
    			add_location(div1, file$k, 6, 2, 218);
    			add_location(div2, file$k, 4, 0, 90);
    			attr_dev(div3, "id", "link-cards");
    			attr_dev(div3, "style", "");
    			attr_dev(div3, "class", "svelte-7sl4wl");
    			add_location(div3, file$k, 12, 0, 707);
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
    		id: create_fragment$l.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$k($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$k, create_fragment$l, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Cards",
    			options,
    			id: create_fragment$l.name
    		});
    	}
    }

    /* src\Balangero\Intro.svelte generated by Svelte v3.46.6 */

    const file$j = "src\\Balangero\\Intro.svelte";

    function create_fragment$k(ctx) {
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
    			t7 = text("\r\n    Le prime attività di estrazione vennero avviate nel 1918, mentre l’impianto di macinazione e separazione dell’amianto entrò in funzione nel 1921. Con il passare\r\n    degli anni vennero potenziate le opere di scavo e ingranditi gli impianti di lavorazione, tanto da raggiungere il\r\n    ");
    			span1 = element("span");
    			span1.textContent = "picco di produzione";
    			t9 = text("\r\n    di 36000 tonnellate annue.\r\n    ");
    			br2 = element("br");
    			br3 = element("br");
    			t10 = text("\r\n    In pieno boom di produzione, nel 1983 l'Amiantifera di Balangero S.p.A. venne ceduta, dalla Eternit e dalle Manifatture Colombo, ai fratelli Puccini di Roma,\r\n    ma nel giro di 7 anni la società subì una grave involuzione e nel 1990 venne ");
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
    			add_location(div0, file$j, 0, 0, 0);
    			attr_dev(div1, "class", "mdc-typography--headline4 uppercase");
    			add_location(div1, file$j, 3, 2, 98);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$j, 6, 4, 348);
    			add_location(br0, file$j, 8, 4, 542);
    			add_location(br1, file$j, 8, 10, 548);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$j, 11, 4, 845);
    			add_location(br2, file$j, 13, 4, 933);
    			add_location(br3, file$j, 13, 10, 939);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$j, 15, 81, 1191);
    			attr_dev(div2, "class", "mdc-typography--body1");
    			add_location(div2, file$j, 4, 2, 180);
    			attr_dev(div3, "class", "left svelte-2r5nqk");
    			add_location(div3, file$j, 2, 0, 76);
    			attr_dev(div4, "class", "mdc-typography--headline4 uppercase primary");
    			add_location(div4, file$j, 20, 2, 1315);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$j, 23, 4, 1614);
    			attr_dev(span4, "class", "highlight");
    			add_location(span4, file$j, 25, 4, 1882);
    			add_location(br4, file$j, 26, 4, 1982);
    			add_location(br5, file$j, 26, 10, 1988);
    			attr_dev(span5, "class", "highlight");
    			add_location(span5, file$j, 28, 4, 2128);
    			attr_dev(div5, "class", "mdc-typography--body1");
    			add_location(div5, file$j, 21, 2, 1411);
    			attr_dev(div6, "class", "right svelte-2r5nqk");
    			add_location(div6, file$j, 19, 0, 1292);
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
    		id: create_fragment$k.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$j($$self, $$props) {
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
    		init(this, options, instance$j, create_fragment$k, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Intro",
    			options,
    			id: create_fragment$k.name
    		});
    	}
    }

    /* node_modules\@smui\button\dist\Button.svelte generated by Svelte v3.46.6 */
    const file$i = "node_modules\\@smui\\button\\dist\\Button.svelte";

    // (50:10) {#if touch}
    function create_if_block$4(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			attr_dev(div, "class", "mdc-button__touch");
    			add_location(div, file$i, 49, 21, 1522);
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
    		id: create_if_block$4.name,
    		type: "if",
    		source: "(50:10) {#if touch}",
    		ctx
    	});

    	return block;
    }

    // (1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: false,         color,         disabled: !!$$restProps.disabled,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-button': true,     'mdc-button--raised': variant === 'raised',     'mdc-button--unelevated': variant === 'unelevated',     'mdc-button--outlined': variant === 'outlined',     'smui-button--color-secondary': color === 'secondary',     'mdc-button--touch': touch,     'mdc-card__action': context === 'card:action',     'mdc-card__action--button': context === 'card:action',     'mdc-dialog__button': context === 'dialog:action',     'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',     'mdc-top-app-bar__action-item': context === 'top-app-bar:action',     'mdc-snackbar__action': context === 'snackbar:actions',     'mdc-banner__secondary-action': context === 'banner' && secondary,     'mdc-banner__primary-action': context === 'banner' && !secondary,     'mdc-tooltip__action': context === 'tooltip:rich-actions',     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   {...actionProp}   {...defaultProp}   {...secondaryProp}   {href}   on:click={handleClick}   {...$$restProps}   >
    function create_default_slot$5(ctx) {
    	let div;
    	let t;
    	let if_block_anchor;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[27].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[29], null);
    	let if_block = /*touch*/ ctx[6] && create_if_block$4(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			t = space();
    			if (default_slot) default_slot.c();
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    			attr_dev(div, "class", "mdc-button__ripple");
    			add_location(div, file$i, 48, 3, 1466);
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
    					if_block = create_if_block$4(ctx);
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
    		id: create_default_slot$5.name,
    		type: "slot",
    		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: false,         color,         disabled: !!$$restProps.disabled,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-button': true,     'mdc-button--raised': variant === 'raised',     'mdc-button--unelevated': variant === 'unelevated',     'mdc-button--outlined': variant === 'outlined',     'smui-button--color-secondary': color === 'secondary',     'mdc-button--touch': touch,     'mdc-card__action': context === 'card:action',     'mdc-card__action--button': context === 'card:action',     'mdc-dialog__button': context === 'dialog:action',     'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',     'mdc-top-app-bar__action-item': context === 'top-app-bar:action',     'mdc-snackbar__action': context === 'snackbar:actions',     'mdc-banner__secondary-action': context === 'banner' && secondary,     'mdc-banner__primary-action': context === 'banner' && !secondary,     'mdc-tooltip__action': context === 'tooltip:rich-actions',     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   {...actionProp}   {...defaultProp}   {...secondaryProp}   {href}   on:click={handleClick}   {...$$restProps}   >",
    		ctx
    	});

    	return block;
    }

    function create_fragment$j(ctx) {
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
    			$$slots: { default: [create_default_slot$5] },
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
    		id: create_fragment$j.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func = ([name, value]) => `${name}: ${value};`;

    function instance$i($$self, $$props, $$invalidate) {
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

    		init(this, options, instance$i, create_fragment$j, safe_not_equal, {
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
    			id: create_fragment$j.name
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

    // (13:0) {:else}
    function create_else_block(ctx) {
    	let button;
    	let current;

    	button = new Button_1({
    			props: {
    				class: /*direction*/ ctx[2],
    				variant: "raised",
    				style: "height: 10vw;",
    				$$slots: { default: [create_default_slot_2$2] },
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
    			if (dirty & /*direction*/ 4) button_changes.class = /*direction*/ ctx[2];

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
    		id: create_else_block.name,
    		type: "else",
    		source: "(13:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (9:0) {#if href !== ""}
    function create_if_block$3(ctx) {
    	let button;
    	let current;

    	button = new Button_1({
    			props: {
    				class: /*direction*/ ctx[2],
    				variant: "raised",
    				href: /*href*/ ctx[1],
    				style: "height: 10vw;",
    				$$slots: { default: [create_default_slot$4] },
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
    		id: create_if_block$3.name,
    		type: "if",
    		source: "(9:0) {#if href !== \\\"\\\"}",
    		ctx
    	});

    	return block;
    }

    // (15:4) <Label class="mdc-typography--button bold">
    function create_default_slot_3$2(ctx) {
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
    		id: create_default_slot_3$2.name,
    		type: "slot",
    		source: "(15:4) <Label class=\\\"mdc-typography--button bold\\\">",
    		ctx
    	});

    	return block;
    }

    // (14:2) <Button class={direction} variant="raised" style="height: 10vw;">
    function create_default_slot_2$2(ctx) {
    	let label_1;
    	let current;

    	label_1 = new Label({
    			props: {
    				class: "mdc-typography--button bold",
    				$$slots: { default: [create_default_slot_3$2] },
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
    		id: create_default_slot_2$2.name,
    		type: "slot",
    		source: "(14:2) <Button class={direction} variant=\\\"raised\\\" style=\\\"height: 10vw;\\\">",
    		ctx
    	});

    	return block;
    }

    // (11:4) <Label class="mdc-typography--button bold">
    function create_default_slot_1$4(ctx) {
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
    		id: create_default_slot_1$4.name,
    		type: "slot",
    		source: "(11:4) <Label class=\\\"mdc-typography--button bold\\\">",
    		ctx
    	});

    	return block;
    }

    // (10:2) <Button class={direction} variant="raised" {href} style="height: 10vw;">
    function create_default_slot$4(ctx) {
    	let label_1;
    	let current;

    	label_1 = new Label({
    			props: {
    				class: "mdc-typography--button bold",
    				$$slots: { default: [create_default_slot_1$4] },
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
    		id: create_default_slot$4.name,
    		type: "slot",
    		source: "(10:2) <Button class={direction} variant=\\\"raised\\\" {href} style=\\\"height: 10vw;\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$i(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block$3, create_else_block];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*href*/ ctx[1] !== "") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				} else {
    					if_block.p(ctx, dirty);
    				}

    				transition_in(if_block, 1);
    				if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
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

    function instance$h($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('CustomButton', slots, []);
    	let { label, href = "", direction } = $$props;
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
    		init(this, options, instance$h, create_fragment$i, safe_not_equal, { label: 0, href: 1, direction: 2 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "CustomButton",
    			options,
    			id: create_fragment$i.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*label*/ ctx[0] === undefined && !('label' in props)) {
    			console.warn("<CustomButton> was created without expected prop 'label'");
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
    const file$h = "src\\Components\\ContentCard.svelte";

    // (16:4) <Content style="padding: 1vw;">
    function create_default_slot_6$1(ctx) {
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
    			add_location(div0, file$h, 16, 6, 469);
    			attr_dev(div1, "class", "mdc-typography--body2");
    			add_location(div1, file$h, 17, 6, 535);
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
    		id: create_default_slot_6$1.name,
    		type: "slot",
    		source: "(16:4) <Content style=\\\"padding: 1vw;\\\">",
    		ctx
    	});

    	return block;
    }

    // (25:45) 
    function create_if_block_1$1(ctx) {
    	let i;
    	let t1;
    	let label;
    	let current;

    	label = new Label({
    			props: {
    				class: "mdc-typography--body2 bold",
    				$$slots: { default: [create_default_slot_5$1] },
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
    			attr_dev(i, "class", "material-icons svelte-ihribd");
    			attr_dev(i, "aria-hidden", "true");
    			add_location(i, file$h, 25, 10, 943);
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
    		id: create_if_block_1$1.name,
    		type: "if",
    		source: "(25:45) ",
    		ctx
    	});

    	return block;
    }

    // (22:8) {#if direction === "left-card"}
    function create_if_block$2(ctx) {
    	let label;
    	let t0;
    	let i;
    	let current;

    	label = new Label({
    			props: {
    				class: "mdc-typography--body2 bold",
    				$$slots: { default: [create_default_slot_4$1] },
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
    			attr_dev(i, "class", "material-icons svelte-ihribd");
    			attr_dev(i, "aria-hidden", "true");
    			add_location(i, file$h, 23, 10, 822);
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
    		id: create_if_block$2.name,
    		type: "if",
    		source: "(22:8) {#if direction === \\\"left-card\\\"}",
    		ctx
    	});

    	return block;
    }

    // (27:10) <Label class="mdc-typography--body2 bold">
    function create_default_slot_5$1(ctx) {
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
    		id: create_default_slot_5$1.name,
    		type: "slot",
    		source: "(27:10) <Label class=\\\"mdc-typography--body2 bold\\\">",
    		ctx
    	});

    	return block;
    }

    // (23:10) <Label class="mdc-typography--body2 bold">
    function create_default_slot_4$1(ctx) {
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
    		id: create_default_slot_4$1.name,
    		type: "slot",
    		source: "(23:10) <Label class=\\\"mdc-typography--body2 bold\\\">",
    		ctx
    	});

    	return block;
    }

    // (21:6) <Button class="content-card-button">
    function create_default_slot_3$1(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block$2, create_if_block_1$1];
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
    		id: create_default_slot_3$1.name,
    		type: "slot",
    		source: "(21:6) <Button class=\\\"content-card-button\\\">",
    		ctx
    	});

    	return block;
    }

    // (20:4) <Actions fullBleed style="min-height: 0;">
    function create_default_slot_2$1(ctx) {
    	let button;
    	let current;

    	button = new Button_1({
    			props: {
    				class: "content-card-button",
    				$$slots: { default: [create_default_slot_3$1] },
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
    		id: create_default_slot_2$1.name,
    		type: "slot",
    		source: "(20:4) <Actions fullBleed style=\\\"min-height: 0;\\\">",
    		ctx
    	});

    	return block;
    }

    // (14:2) <PrimaryAction on:click={() => document.getElementById(contentId).classList.toggle("hidden")}>
    function create_default_slot_1$3(ctx) {
    	let img;
    	let img_src_value;
    	let t0;
    	let content;
    	let t1;
    	let actions;
    	let current;

    	content = new Content$1({
    			props: {
    				style: "padding: 1vw;",
    				$$slots: { default: [create_default_slot_6$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	actions = new Actions$1({
    			props: {
    				fullBleed: true,
    				style: "min-height: 0;",
    				$$slots: { default: [create_default_slot_2$1] },
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
    			attr_dev(img, "class", "svelte-ihribd");
    			add_location(img, file$h, 14, 4, 399);
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
    		id: create_default_slot_1$3.name,
    		type: "slot",
    		source: "(14:2) <PrimaryAction on:click={() => document.getElementById(contentId).classList.toggle(\\\"hidden\\\")}>",
    		ctx
    	});

    	return block;
    }

    // (13:0) <Card class="content-card {direction}">
    function create_default_slot$3(ctx) {
    	let primaryaction;
    	let current;

    	primaryaction = new PrimaryAction({
    			props: {
    				$$slots: { default: [create_default_slot_1$3] },
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
    		id: create_default_slot$3.name,
    		type: "slot",
    		source: "(13:0) <Card class=\\\"content-card {direction}\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$h(ctx) {
    	let card;
    	let current;

    	card = new Card({
    			props: {
    				class: "content-card " + /*direction*/ ctx[5],
    				$$slots: { default: [create_default_slot$3] },
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
    			if (dirty & /*direction*/ 32) card_changes.class = "content-card " + /*direction*/ ctx[5];

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
    		id: create_fragment$h.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$g($$self, $$props, $$invalidate) {
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
    		Content: Content$1,
    		Actions: Actions$1,
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

    		init(this, options, instance$g, create_fragment$h, safe_not_equal, {
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
    			id: create_fragment$h.name
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
    const file$g = "src\\Balangero\\Cards.svelte";

    function create_fragment$g(ctx) {
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
    	let span9;
    	let t22;
    	let span7;
    	let t24;
    	let span8;
    	let t26;
    	let t27;
    	let t28;
    	let custombutton1;
    	let t29;
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
    			t16 = text(", con fibre di amianto onnipresenti, raffigurate come un demone, asfissiante e ostile. Celebre è diventata\r\n      la sua frase ");
    			span5 = element("span");
    			span5.textContent = "\"C’era amianto dappertutto, come una neve cenerina\"";
    			t18 = text(".\r\n      ");
    			br2 = element("br");
    			br3 = element("br");
    			t19 = text("\r\n      Nel 1954 ");
    			span6 = element("span");
    			span6.textContent = "Italo Calvino";
    			t21 = text(" arriva nella miniera piemontese come redattore del quotidiano \"l’Unità\" occupandosi del rischio\r\n      amianto e della sorte degli operai della cava. Italo Calvino diede una lettura emblematica della situazione dei minatori, scrivendo\r\n      ");
    			span9 = element("span");
    			t22 = text("\"Il grigio polverone d’asbesto della cava che dove arriva ");
    			span7 = element("span");
    			span7.textContent = "brucia";
    			t24 = text(", ");
    			span8 = element("span");
    			span8.textContent = "foglie e polmoni";
    			t26 = text("\"");
    			t27 = text(".");
    			t28 = space();
    			create_component(custombutton1.$$.fragment);
    			t29 = space();
    			create_component(contentcard1.$$.fragment);
    			attr_dev(div0, "class", "mdc-typography--headline3 uppercase");
    			set_style(div0, "margin-top", "23vw");
    			add_location(div0, file$g, 5, 0, 161);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$g, 19, 6, 965);
    			add_location(br0, file$g, 21, 6, 1153);
    			add_location(br1, file$g, 21, 12, 1159);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$g, 24, 57, 1408);
    			attr_dev(span2, "class", "italic");
    			add_location(span2, file$g, 22, 6, 1173);
    			add_location(div1, file$g, 17, 4, 828);
    			attr_dev(div2, "class", "mdc-typography--body1 hidden right-align flex-column-2");
    			attr_dev(div2, "id", "content-balangero1");
    			add_location(div2, file$g, 16, 2, 730);
    			attr_dev(div3, "class", "flex-row-4");
    			set_style(div3, "margin-top", "4vw");
    			add_location(div3, file$g, 6, 0, 297);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$g, 39, 28, 2061);
    			attr_dev(span4, "class", "highlight");
    			add_location(span4, file$g, 41, 6, 2334);
    			attr_dev(span5, "class", "italic");
    			add_location(span5, file$g, 42, 19, 2508);
    			add_location(br2, file$g, 43, 6, 2596);
    			add_location(br3, file$g, 43, 12, 2602);
    			attr_dev(span6, "class", "highlight");
    			add_location(span6, file$g, 44, 15, 2625);
    			attr_dev(span7, "class", "highlight");
    			add_location(span7, file$g, 46, 85, 2991);
    			attr_dev(span8, "class", "highlight");
    			add_location(span8, file$g, 46, 124, 3030);
    			attr_dev(span9, "class", "italic");
    			add_location(span9, file$g, 46, 6, 2912);
    			add_location(div4, file$g, 38, 4, 2026);
    			attr_dev(div5, "class", "mdc-typography--body1 hidden left-align flex-column-2");
    			attr_dev(div5, "id", "content-balangero2");
    			add_location(div5, file$g, 37, 2, 1929);
    			attr_dev(div6, "class", "flex-row-4");
    			set_style(div6, "margin-top", "4vw");
    			add_location(div6, file$g, 36, 0, 1876);
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
    			append_dev(div4, span9);
    			append_dev(span9, t22);
    			append_dev(span9, span7);
    			append_dev(span9, t24);
    			append_dev(span9, span8);
    			append_dev(span9, t26);
    			append_dev(div4, t27);
    			append_dev(div5, t28);
    			mount_component(custombutton1, div5, null);
    			append_dev(div6, t29);
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
    		id: create_fragment$g.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$f($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$f, create_fragment$g, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Cards",
    			options,
    			id: create_fragment$g.name
    		});
    	}
    }

    /* src\Components\StatsCard.svelte generated by Svelte v3.46.6 */
    const file$f = "src\\Components\\StatsCard.svelte";

    // (8:2) <Content style="padding: 1vw;">
    function create_default_slot_1$2(ctx) {
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
    			add_location(div0, file$f, 8, 4, 265);
    			attr_dev(div1, "class", "mdc-typography--body2 bold");
    			add_location(div1, file$f, 9, 4, 333);
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
    		id: create_default_slot_1$2.name,
    		type: "slot",
    		source: "(8:2) <Content style=\\\"padding: 1vw;\\\">",
    		ctx
    	});

    	return block;
    }

    // (7:0) <Card class="stats-card" padded>
    function create_default_slot$2(ctx) {
    	let content;
    	let current;

    	content = new Content$1({
    			props: {
    				style: "padding: 1vw;",
    				$$slots: { default: [create_default_slot_1$2] },
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
    		id: create_default_slot$2.name,
    		type: "slot",
    		source: "(7:0) <Card class=\\\"stats-card\\\" padded>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$f(ctx) {
    	let card;
    	let current;

    	card = new Card({
    			props: {
    				class: "stats-card",
    				padded: true,
    				$$slots: { default: [create_default_slot$2] },
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
    		id: create_fragment$f.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$e($$self, $$props, $$invalidate) {
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

    	$$self.$capture_state = () => ({ Card, Content: Content$1, caption, value });

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
    		init(this, options, instance$e, create_fragment$f, safe_not_equal, { caption: 0, value: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "StatsCard",
    			options,
    			id: create_fragment$f.name
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
    const file$e = "src\\Balangero\\Stats.svelte";

    function create_fragment$e(ctx) {
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
    			add_location(div0, file$e, 6, 0, 193);
    			attr_dev(div1, "class", "flex-row-2");
    			set_style(div1, "margin-top", "2vw");
    			add_location(div1, file$e, 7, 0, 295);
    			set_style(div2, "margin-top", "3.5vw");
    			add_location(div2, file$e, 12, 0, 542);
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
    		id: create_fragment$e.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$d($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$d, create_fragment$e, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Stats",
    			options,
    			id: create_fragment$e.name
    		});
    	}
    }

    /* src\Libby\Intro.svelte generated by Svelte v3.46.6 */
    const file$d = "src\\Libby\\Intro.svelte";

    function create_fragment$d(ctx) {
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
    			t4 = text("La cittadina di Libby, in Montana, è il sito di uno dei peggiori ");
    			span0 = element("span");
    			span0.textContent = "disastri ambientali";
    			t6 = text(" causati dall'uomo. La polvere di amianto\r\n    tossico proveniente dalle miniere di vermiculite ha ucciso centinaia di residenti, ammalandone altre migliaia.\r\n    ");
    			br0 = element("br");
    			br1 = element("br");
    			t7 = text("\r\n    Nel 1963, la W.R. Grace & Company iniziò a scavare un deposito di ");
    			span1 = element("span");
    			span1.textContent = "vermiculite";
    			t9 = text(" su una cima boschiva vicino a Libby. Il\r\n    minerale, relativamente innocuo, è stato utilizzato come isolamento delle soffitte fino agli anni '80. Ma nello stesso deposito è stato trovato un tipo\r\n    naturale di ");
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
    			t25 = text(": ci vogliono decenni perché i sintomi delle malattie da\r\n    amianto si manifestino, infatti i bambini che hanno giocato a baseball o corso sulle piste a contatto con l'amianto stanno iniziando ad ammalarsi solo ora.\r\n    ");
    			br6 = element("br");
    			br7 = element("br");
    			t26 = space();
    			create_component(custombutton.$$.fragment);
    			attr_dev(div0, "class", "mdc-typography--headline1 uppercase");
    			add_location(div0, file$d, 4, 0, 88);
    			attr_dev(div1, "class", "mdc-typography--headline4 uppercase");
    			add_location(div1, file$d, 7, 2, 179);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$d, 9, 69, 362);
    			add_location(br0, file$d, 11, 4, 575);
    			add_location(br1, file$d, 11, 10, 581);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$d, 12, 70, 659);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$d, 14, 16, 916);
    			add_location(br2, file$d, 15, 4, 969);
    			add_location(br3, file$d, 15, 10, 975);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$d, 16, 40, 1023);
    			attr_dev(span4, "class", "highlight");
    			add_location(span4, file$d, 17, 99, 1241);
    			attr_dev(div2, "class", "mdc-typography--body1");
    			add_location(div2, file$d, 8, 2, 256);
    			attr_dev(div3, "class", "left svelte-tz0xuf");
    			add_location(div3, file$d, 6, 0, 157);
    			attr_dev(div4, "class", "mdc-typography--headline4 uppercase primary");
    			add_location(div4, file$d, 23, 2, 1406);
    			attr_dev(span5, "class", "highlight");
    			add_location(span5, file$d, 25, 116, 1650);
    			add_location(br4, file$d, 28, 4, 1872);
    			add_location(br5, file$d, 28, 10, 1878);
    			attr_dev(span6, "class", "highlight");
    			add_location(span6, file$d, 29, 50, 1936);
    			add_location(br6, file$d, 31, 4, 2210);
    			add_location(br7, file$d, 31, 10, 2216);
    			attr_dev(div5, "class", "mdc-typography--body1");
    			add_location(div5, file$d, 24, 2, 1497);
    			attr_dev(div6, "class", "right svelte-tz0xuf");
    			add_location(div6, file$d, 22, 0, 1383);
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
    		id: create_fragment$d.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$c($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$c, create_fragment$d, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Intro",
    			options,
    			id: create_fragment$d.name
    		});
    	}
    }

    /* src\Libby\Cards.svelte generated by Svelte v3.46.6 */
    const file$c = "src\\Libby\\Cards.svelte";

    function create_fragment$c(ctx) {
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
    	let span4;
    	let t15;
    	let span6;
    	let t16;
    	let span5;
    	let t18;
    	let t19;
    	let t20;
    	let custombutton0;
    	let t21;
    	let div6;
    	let div5;
    	let div4;
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
    	let span10;
    	let t31;
    	let br6;
    	let br7;
    	let t32;
    	let span11;
    	let t34;
    	let t35;
    	let custombutton1;
    	let t36;
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
    			div0.textContent = "Si può tornare indietro da questo disastro?";
    			t1 = space();
    			div3 = element("div");
    			create_component(contentcard0.$$.fragment);
    			t2 = space();
    			div2 = element("div");
    			div1 = element("div");
    			t3 = text("Il signor ");
    			span0 = element("span");
    			span0.textContent = "Ralph Hutt";
    			t5 = text(" ha lavorato a contatto con l'amianto soltanto per ");
    			span1 = element("span");
    			span1.textContent = "18 mesi";
    			t7 = text(" e gli è stata\r\n      diagnosticata l'asbestosi polmonare nel 2002. Ai tempi, le uniche precauzioni fornite ai lavoratori dall'azienda erano\r\n      ");
    			span2 = element("span");
    			span2.textContent = "mascherine di carta";
    			t9 = text(". Quando ha chiesto al suo supervisore una maggiore protezione, gli fu detto di non preoccuparsi poiché\r\n      ciò che respiravano era solo polvere.\r\n      ");
    			br0 = element("br");
    			br1 = element("br");
    			t10 = text("\r\n      Già da allora le sue radiografie mostravano segni dei danni da amianto ai polmoni, tra cui la graduale perdita della\r\n      ");
    			span3 = element("span");
    			span3.textContent = "capacità di respirare";
    			t12 = text(". I dirigenti dell'azienda erano al corrente della presenza di amianto nello stabilimento, ma decisero\r\n      di tenere tutti i lavoratori, tra cui Ralph, all'oscuro.\r\n      ");
    			br2 = element("br");
    			br3 = element("br");
    			t13 = space();
    			span4 = element("span");
    			span4.textContent = "\"Questo non è il modo in cui me ne voglio andare\"";
    			t15 = text(", ha detto.\r\n      ");
    			span6 = element("span");
    			t16 = text("\"Lasciate che qualcuno mi spari. Non voglio essere schiacciato sott'acqua o ");
    			span5 = element("span");
    			span5.textContent = "strangolato";
    			t18 = text(". È così che ci si sente\"");
    			t19 = text(".");
    			t20 = space();
    			create_component(custombutton0.$$.fragment);
    			t21 = space();
    			div6 = element("div");
    			div5 = element("div");
    			div4 = element("div");
    			t22 = text("Secondo uno studio del 2017 pubblicato sul Journal of Exposure Science and Environmental Epidemiology, circa 694 residenti di Libby sono\r\n      ");
    			span7 = element("span");
    			span7.textContent = "morti";
    			t24 = text(" per malattie correlate all'amianto e circa 1 su 10 tra tutti gli abitanti è\r\n      ");
    			span8 = element("span");
    			span8.textContent = "attualmente malato";
    			t26 = text(".\r\n      ");
    			br4 = element("br");
    			br5 = element("br");
    			t27 = text("\r\n      L’Agenzia per la Protezione Ambientale Americana ha effettuato sopralluoghi in circa ");
    			span9 = element("span");
    			span9.textContent = "8200 proprietà";
    			t29 = text(", di cui più di 2400\r\n      siti sono stati risanificati completamente. Tra questi rientravano attività commerciali, giardini, abitazioni private, parchi e altri\r\n      ");
    			span10 = element("span");
    			span10.textContent = "spazi pubblici";
    			t31 = text(" frequentati.\r\n      ");
    			br6 = element("br");
    			br7 = element("br");
    			t32 = text("\r\n      Ad oggi, per la decontaminazione e il ");
    			span11 = element("span");
    			span11.textContent = "risanamento";
    			t34 = text(" della città di Libby, sono stati rimossi e rimpiazzati complessivamente più\r\n      di 750’000 metri cubi di rifiuti e materiali da costruzione, causando una spesa di oltre 600 milioni di dollari statali.");
    			t35 = space();
    			create_component(custombutton1.$$.fragment);
    			t36 = space();
    			create_component(contentcard1.$$.fragment);
    			attr_dev(div0, "class", "mdc-typography--headline3 uppercase");
    			set_style(div0, "margin-top", "16vw");
    			add_location(div0, file$c, 5, 0, 161);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$c, 17, 16, 748);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$c, 17, 108, 840);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$c, 19, 6, 1026);
    			add_location(br0, file$c, 21, 6, 1232);
    			add_location(br1, file$c, 21, 12, 1238);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$c, 23, 6, 1376);
    			add_location(br2, file$c, 25, 6, 1602);
    			add_location(br3, file$c, 25, 12, 1608);
    			attr_dev(span4, "class", "italic");
    			add_location(span4, file$c, 26, 6, 1622);
    			attr_dev(span5, "class", "highlight");
    			add_location(span5, file$c, 27, 103, 1815);
    			attr_dev(span6, "class", "italic");
    			add_location(span6, file$c, 27, 6, 1718);
    			add_location(div1, file$c, 16, 4, 725);
    			attr_dev(div2, "class", "mdc-typography--body1 hidden right-align flex-column-2");
    			attr_dev(div2, "id", "content-libby1");
    			add_location(div2, file$c, 15, 2, 631);
    			attr_dev(div3, "class", "flex-row-4");
    			set_style(div3, "margin", "4vw 0 0 2vw");
    			add_location(div3, file$c, 6, 0, 287);
    			attr_dev(span7, "class", "highlight");
    			add_location(span7, file$c, 38, 6, 2355);
    			attr_dev(span8, "class", "highlight");
    			add_location(span8, file$c, 39, 6, 2475);
    			add_location(br4, file$c, 40, 6, 2533);
    			add_location(br5, file$c, 40, 12, 2539);
    			attr_dev(span9, "class", "highlight");
    			add_location(span9, file$c, 41, 91, 2638);
    			attr_dev(span10, "class", "highlight");
    			add_location(span10, file$c, 43, 6, 2852);
    			add_location(br6, file$c, 44, 6, 2918);
    			add_location(br7, file$c, 44, 12, 2924);
    			attr_dev(span11, "class", "highlight");
    			add_location(span11, file$c, 45, 44, 2976);
    			add_location(div4, file$c, 36, 4, 2198);
    			attr_dev(div5, "class", "mdc-typography--body1 hidden left-align flex-column-2");
    			attr_dev(div5, "id", "content-libby2");
    			add_location(div5, file$c, 35, 2, 2105);
    			attr_dev(div6, "class", "flex-row-4");
    			set_style(div6, "margin-top", "6vw");
    			add_location(div6, file$c, 34, 0, 2052);
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
    			append_dev(div1, span2);
    			append_dev(div1, t9);
    			append_dev(div1, br0);
    			append_dev(div1, br1);
    			append_dev(div1, t10);
    			append_dev(div1, span3);
    			append_dev(div1, t12);
    			append_dev(div1, br2);
    			append_dev(div1, br3);
    			append_dev(div1, t13);
    			append_dev(div1, span4);
    			append_dev(div1, t15);
    			append_dev(div1, span6);
    			append_dev(span6, t16);
    			append_dev(span6, span5);
    			append_dev(span6, t18);
    			append_dev(div1, t19);
    			append_dev(div2, t20);
    			mount_component(custombutton0, div2, null);
    			insert_dev(target, t21, anchor);
    			insert_dev(target, div6, anchor);
    			append_dev(div6, div5);
    			append_dev(div5, div4);
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
    			append_dev(div4, span10);
    			append_dev(div4, t31);
    			append_dev(div4, br6);
    			append_dev(div4, br7);
    			append_dev(div4, t32);
    			append_dev(div4, span11);
    			append_dev(div4, t34);
    			append_dev(div5, t35);
    			mount_component(custombutton1, div5, null);
    			append_dev(div6, t36);
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
    			if (detaching) detach_dev(t21);
    			if (detaching) detach_dev(div6);
    			destroy_component(custombutton1);
    			destroy_component(contentcard1);
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

    function instance$b($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$b, create_fragment$c, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Cards",
    			options,
    			id: create_fragment$c.name
    		});
    	}
    }

    /* src\Libby\Stats.svelte generated by Svelte v3.46.6 */
    const file$b = "src\\Libby\\Stats.svelte";

    function create_fragment$b(ctx) {
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
    			add_location(div0, file$b, 6, 0, 193);
    			attr_dev(div1, "class", "flex-row-2");
    			set_style(div1, "margin-top", "2vw");
    			add_location(div1, file$b, 7, 0, 295);
    			set_style(div2, "margin-top", "3vw");
    			add_location(div2, file$b, 12, 0, 539);
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
    		id: create_fragment$b.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$a($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$a, create_fragment$b, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Stats",
    			options,
    			id: create_fragment$b.name
    		});
    	}
    }

    /* src\Minacu\Intro.svelte generated by Svelte v3.46.6 */

    const file$a = "src\\Minacu\\Intro.svelte";

    function create_fragment$a(ctx) {
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
    			t4 = text("Minaçu è un comune brasiliano dello stato del Goiás dove opera la ");
    			span0 = element("span");
    			span0.textContent = "SAMA";
    			t6 = text(", un'industria franco-brasiliana dedita all’estrazione\r\n    di amianto crisotilo, e dove è presente la più grande miniera di amianto del Brasile chiamata ");
    			span1 = element("span");
    			span1.textContent = "Cana Brava";
    			t8 = text(". L'amianto ha reso\r\n    Minaçu uno dei comuni più ricchi del paese.\r\n    ");
    			br0 = element("br");
    			br1 = element("br");
    			t9 = text("\r\n    Le leggi federali in Brasile attestano chiaramente la pericolosità dell’amianto. Ciononostante, l’estrazione, la manipolazione e la commercializzazione di quest’ultimo\r\n    sono rimaste attive fino al 2017, anno in cui la Corte Suprema Federale ha ");
    			span2 = element("span");
    			span2.textContent = "vietato";
    			t11 = text(" l’uso del minerale.\r\n    ");
    			br2 = element("br");
    			br3 = element("br");
    			t12 = text("\r\n    Nel 2019, però, il governatore del Brasile ha emanato una ");
    			span3 = element("span");
    			span3.textContent = "legislazione";
    			t14 = text(" nello stato di Goiás, approvando l’estrazione e l'esportazione\r\n    di amianto, facendo continuare così l’operato di Cana Brava. Questa mossa politica ha portato gli abitanti di Minaçu in una situazione delicata di fronte a un\r\n    bivio: in qualsiasi momento una decisione del tribunale potrebbe interrompere l'attività mineraria della città, caduta proprio in un periodo economico difficile.");
    			t15 = space();
    			div6 = element("div");
    			div4 = element("div");
    			div4.textContent = "L'opinione degli abitanti";
    			t17 = space();
    			div5 = element("div");
    			t18 = text("Alcuni residenti desiderano che la città abbandoni l’amianto e si rinnovi, secondo altri invece senza amianto la città è finita.\r\n    ");
    			span4 = element("span");
    			span4.textContent = "\"Se SAMA si ferma, la città si ferma\"";
    			t20 = text(", ha detto Joaquim de Souza, 54 anni, operaio della SAMA, che vive vicino alla massiccia\r\n    ");
    			span5 = element("span");
    			span5.textContent = "collina di detriti";
    			t22 = text("\r\n    di amianto di Minaçu.\r\n    ");
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
    			add_location(div0, file$a, 0, 0, 0);
    			attr_dev(div1, "class", "mdc-typography--headline4 uppercase");
    			add_location(div1, file$a, 3, 2, 96);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$a, 5, 70, 284);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$a, 6, 98, 473);
    			add_location(br0, file$a, 8, 4, 588);
    			add_location(br1, file$a, 8, 10, 594);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$a, 10, 79, 854);
    			add_location(br2, file$a, 11, 4, 918);
    			add_location(br3, file$a, 11, 10, 924);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$a, 12, 62, 994);
    			attr_dev(div2, "class", "mdc-typography--body1");
    			add_location(div2, file$a, 4, 2, 177);
    			attr_dev(div3, "class", "left svelte-12d5b79");
    			add_location(div3, file$a, 2, 0, 74);
    			attr_dev(div4, "class", "mdc-typography--headline4 uppercase primary");
    			add_location(div4, file$a, 19, 2, 1476);
    			attr_dev(span4, "class", "italic");
    			add_location(span4, file$a, 22, 4, 1743);
    			attr_dev(span5, "class", "highlight");
    			add_location(span5, file$a, 23, 4, 1902);
    			add_location(br4, file$a, 25, 4, 1984);
    			add_location(br5, file$a, 25, 10, 1990);
    			attr_dev(span6, "class", "highlight");
    			add_location(span6, file$a, 26, 67, 2065);
    			attr_dev(span7, "class", "italic");
    			add_location(span7, file$a, 26, 45, 2043);
    			attr_dev(span8, "class", "italic");
    			add_location(span8, file$a, 27, 44, 2204);
    			add_location(br6, file$a, 28, 4, 2309);
    			add_location(br7, file$a, 28, 10, 2315);
    			attr_dev(span9, "class", "highlight");
    			add_location(span9, file$a, 29, 45, 2368);
    			attr_dev(span10, "class", "italic");
    			add_location(span10, file$a, 30, 4, 2428);
    			attr_dev(div5, "class", "mdc-typography--body1");
    			add_location(div5, file$a, 20, 2, 1568);
    			attr_dev(div6, "class", "right svelte-12d5b79");
    			add_location(div6, file$a, 18, 0, 1453);
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
    		id: create_fragment$a.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$9($$self, $$props) {
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
    		init(this, options, instance$9, create_fragment$a, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Intro",
    			options,
    			id: create_fragment$a.name
    		});
    	}
    }

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
    function createFocusTrapInstance(surfaceEl, focusTrapFactory, initialFocusEl) {
        return focusTrapFactory(surfaceEl, { initialFocusEl: initialFocusEl });
    }
    function isScrollable(el) {
        return el ? el.scrollHeight > el.offsetHeight : false;
    }
    /**
     * For scrollable content, returns true if the content has not been scrolled
     * (that is, the scroll content is as the "top"). This is used in full-screen
     * dialogs, where the scroll divider is expected only to appear once the
     * content has been scrolled "underneath" the header bar.
     */
    function isScrollAtTop(el) {
        return el ? el.scrollTop === 0 : false;
    }
    /**
     * For scrollable content, returns true if the content has been scrolled all the
     * way to the bottom. This is used in full-screen dialogs, where the footer
     * scroll divider is expected only to appear when the content is "cut-off" by
     * the footer bar.
     */
    function isScrollAtBottom(el) {
        return el ? Math.ceil(el.scrollHeight - el.scrollTop) === el.clientHeight :
            false;
    }
    function areTopsMisaligned(els) {
        var tops = new Set();
        [].forEach.call(els, function (el) { return tops.add(el.offsetTop); });
        return tops.size > 1;
    }

    var util = /*#__PURE__*/Object.freeze({
        __proto__: null,
        createFocusTrapInstance: createFocusTrapInstance,
        isScrollable: isScrollable,
        isScrollAtTop: isScrollAtTop,
        isScrollAtBottom: isScrollAtBottom,
        areTopsMisaligned: areTopsMisaligned
    });

    /**
     * @license
     * Copyright 2020 Google Inc.
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
     * AnimationFrame provides a user-friendly abstraction around requesting
     * and canceling animation frames.
     */
    var AnimationFrame = /** @class */ (function () {
        function AnimationFrame() {
            this.rafIDs = new Map();
        }
        /**
         * Requests an animation frame. Cancels any existing frame with the same key.
         * @param {string} key The key for this callback.
         * @param {FrameRequestCallback} callback The callback to be executed.
         */
        AnimationFrame.prototype.request = function (key, callback) {
            var _this = this;
            this.cancel(key);
            var frameID = requestAnimationFrame(function (frame) {
                _this.rafIDs.delete(key);
                // Callback must come *after* the key is deleted so that nested calls to
                // request with the same key are not deleted.
                callback(frame);
            });
            this.rafIDs.set(key, frameID);
        };
        /**
         * Cancels a queued callback with the given key.
         * @param {string} key The key for this callback.
         */
        AnimationFrame.prototype.cancel = function (key) {
            var rafID = this.rafIDs.get(key);
            if (rafID) {
                cancelAnimationFrame(rafID);
                this.rafIDs.delete(key);
            }
        };
        /**
         * Cancels all queued callback.
         */
        AnimationFrame.prototype.cancelAll = function () {
            var _this = this;
            // Need to use forEach because it's the only iteration method supported
            // by IE11. Suppress the underscore because we don't need it.
            // tslint:disable-next-line:enforce-name-casing
            this.rafIDs.forEach(function (_, key) {
                _this.cancel(key);
            });
        };
        /**
         * Returns the queue of unexecuted callback keys.
         */
        AnimationFrame.prototype.getQueue = function () {
            var queue = [];
            // Need to use forEach because it's the only iteration method supported
            // by IE11. Suppress the underscore because we don't need it.
            // tslint:disable-next-line:enforce-name-casing
            this.rafIDs.forEach(function (_, key) {
                queue.push(key);
            });
            return queue;
        };
        return AnimationFrame;
    }());

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
    var cssClasses = {
        CLOSING: 'mdc-dialog--closing',
        OPEN: 'mdc-dialog--open',
        OPENING: 'mdc-dialog--opening',
        SCROLLABLE: 'mdc-dialog--scrollable',
        SCROLL_LOCK: 'mdc-dialog-scroll-lock',
        STACKED: 'mdc-dialog--stacked',
        FULLSCREEN: 'mdc-dialog--fullscreen',
        // Class for showing a scroll divider on full-screen dialog header element.
        // Should only be displayed on scrollable content, when the dialog content is
        // scrolled "underneath" the header.
        SCROLL_DIVIDER_HEADER: 'mdc-dialog-scroll-divider-header',
        // Class for showing a scroll divider on a full-screen dialog footer element.
        // Should only be displayed on scrolalble content, when the dialog content is
        // obscured "underneath" the footer.
        SCROLL_DIVIDER_FOOTER: 'mdc-dialog-scroll-divider-footer',
        // The "surface scrim" is a scrim covering only the surface of a dialog. This
        // is used in situations where a confirmation dialog is shown over an already
        // opened full-screen dialog. On larger screen-sizes, the full-screen dialog
        // is sized as a modal and so in these situations we display a "surface scrim"
        // to prevent a "double scrim" (where the scrim from the secondary
        // confirmation dialog would overlap with the scrim from the full-screen
        // dialog).
        SURFACE_SCRIM_SHOWN: 'mdc-dialog__surface-scrim--shown',
        // "Showing" animating class for the surface-scrim.
        SURFACE_SCRIM_SHOWING: 'mdc-dialog__surface-scrim--showing',
        // "Hiding" animating class for the surface-scrim.
        SURFACE_SCRIM_HIDING: 'mdc-dialog__surface-scrim--hiding',
        // Class to hide a dialog's scrim (used in conjunction with a surface-scrim).
        // Note that we only hide the original scrim rather than removing it entirely
        // to prevent interactions with the content behind this scrim, and to capture
        // scrim clicks.
        SCRIM_HIDDEN: 'mdc-dialog__scrim--hidden',
    };
    var strings = {
        ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
        BUTTON_DEFAULT_ATTRIBUTE: 'data-mdc-dialog-button-default',
        BUTTON_SELECTOR: '.mdc-dialog__button',
        CLOSED_EVENT: 'MDCDialog:closed',
        CLOSE_ACTION: 'close',
        CLOSING_EVENT: 'MDCDialog:closing',
        CONTAINER_SELECTOR: '.mdc-dialog__container',
        CONTENT_SELECTOR: '.mdc-dialog__content',
        DESTROY_ACTION: 'destroy',
        INITIAL_FOCUS_ATTRIBUTE: 'data-mdc-dialog-initial-focus',
        OPENED_EVENT: 'MDCDialog:opened',
        OPENING_EVENT: 'MDCDialog:opening',
        SCRIM_SELECTOR: '.mdc-dialog__scrim',
        SUPPRESS_DEFAULT_PRESS_SELECTOR: [
            'textarea',
            '.mdc-menu .mdc-list-item',
            '.mdc-menu .mdc-deprecated-list-item',
        ].join(', '),
        SURFACE_SELECTOR: '.mdc-dialog__surface',
    };
    var numbers = {
        DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
        DIALOG_ANIMATION_OPEN_TIME_MS: 150,
    };

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
     */
    var AnimationKeys;
    (function (AnimationKeys) {
        AnimationKeys["POLL_SCROLL_POS"] = "poll_scroll_position";
        AnimationKeys["POLL_LAYOUT_CHANGE"] = "poll_layout_change";
    })(AnimationKeys || (AnimationKeys = {}));
    var MDCDialogFoundation = /** @class */ (function (_super) {
        __extends(MDCDialogFoundation, _super);
        function MDCDialogFoundation(adapter) {
            var _this = _super.call(this, __assign(__assign({}, MDCDialogFoundation.defaultAdapter), adapter)) || this;
            _this.dialogOpen = false;
            _this.isFullscreen = false;
            _this.animationFrame = 0;
            _this.animationTimer = 0;
            _this.escapeKeyAction = strings.CLOSE_ACTION;
            _this.scrimClickAction = strings.CLOSE_ACTION;
            _this.autoStackButtons = true;
            _this.areButtonsStacked = false;
            _this.suppressDefaultPressSelector = strings.SUPPRESS_DEFAULT_PRESS_SELECTOR;
            _this.animFrame = new AnimationFrame();
            _this.contentScrollHandler = function () {
                _this.handleScrollEvent();
            };
            _this.windowResizeHandler = function () {
                _this.layout();
            };
            _this.windowOrientationChangeHandler = function () {
                _this.layout();
            };
            return _this;
        }
        Object.defineProperty(MDCDialogFoundation, "cssClasses", {
            get: function () {
                return cssClasses;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCDialogFoundation, "strings", {
            get: function () {
                return strings;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCDialogFoundation, "numbers", {
            get: function () {
                return numbers;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MDCDialogFoundation, "defaultAdapter", {
            get: function () {
                return {
                    addBodyClass: function () { return undefined; },
                    addClass: function () { return undefined; },
                    areButtonsStacked: function () { return false; },
                    clickDefaultButton: function () { return undefined; },
                    eventTargetMatches: function () { return false; },
                    getActionFromEvent: function () { return ''; },
                    getInitialFocusEl: function () { return null; },
                    hasClass: function () { return false; },
                    isContentScrollable: function () { return false; },
                    notifyClosed: function () { return undefined; },
                    notifyClosing: function () { return undefined; },
                    notifyOpened: function () { return undefined; },
                    notifyOpening: function () { return undefined; },
                    releaseFocus: function () { return undefined; },
                    removeBodyClass: function () { return undefined; },
                    removeClass: function () { return undefined; },
                    reverseButtons: function () { return undefined; },
                    trapFocus: function () { return undefined; },
                    registerContentEventHandler: function () { return undefined; },
                    deregisterContentEventHandler: function () { return undefined; },
                    isScrollableContentAtTop: function () { return false; },
                    isScrollableContentAtBottom: function () { return false; },
                    registerWindowEventHandler: function () { return undefined; },
                    deregisterWindowEventHandler: function () { return undefined; },
                };
            },
            enumerable: false,
            configurable: true
        });
        MDCDialogFoundation.prototype.init = function () {
            if (this.adapter.hasClass(cssClasses.STACKED)) {
                this.setAutoStackButtons(false);
            }
            this.isFullscreen = this.adapter.hasClass(cssClasses.FULLSCREEN);
        };
        MDCDialogFoundation.prototype.destroy = function () {
            if (this.animationTimer) {
                clearTimeout(this.animationTimer);
                this.handleAnimationTimerEnd();
            }
            if (this.isFullscreen) {
                this.adapter.deregisterContentEventHandler('scroll', this.contentScrollHandler);
            }
            this.animFrame.cancelAll();
            this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
            this.adapter.deregisterWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
        };
        MDCDialogFoundation.prototype.open = function (dialogOptions) {
            var _this = this;
            this.dialogOpen = true;
            this.adapter.notifyOpening();
            this.adapter.addClass(cssClasses.OPENING);
            if (this.isFullscreen) {
                // A scroll event listener is registered even if the dialog is not
                // scrollable on open, since the window resize event, or orientation
                // change may make the dialog scrollable after it is opened.
                this.adapter.registerContentEventHandler('scroll', this.contentScrollHandler);
            }
            if (dialogOptions && dialogOptions.isAboveFullscreenDialog) {
                this.adapter.addClass(cssClasses.SCRIM_HIDDEN);
            }
            this.adapter.registerWindowEventHandler('resize', this.windowResizeHandler);
            this.adapter.registerWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
            // Wait a frame once display is no longer "none", to establish basis for
            // animation
            this.runNextAnimationFrame(function () {
                _this.adapter.addClass(cssClasses.OPEN);
                _this.adapter.addBodyClass(cssClasses.SCROLL_LOCK);
                _this.layout();
                _this.animationTimer = setTimeout(function () {
                    _this.handleAnimationTimerEnd();
                    _this.adapter.trapFocus(_this.adapter.getInitialFocusEl());
                    _this.adapter.notifyOpened();
                }, numbers.DIALOG_ANIMATION_OPEN_TIME_MS);
            });
        };
        MDCDialogFoundation.prototype.close = function (action) {
            var _this = this;
            if (action === void 0) { action = ''; }
            if (!this.dialogOpen) {
                // Avoid redundant close calls (and events), e.g. from keydown on elements
                // that inherently emit click
                return;
            }
            this.dialogOpen = false;
            this.adapter.notifyClosing(action);
            this.adapter.addClass(cssClasses.CLOSING);
            this.adapter.removeClass(cssClasses.OPEN);
            this.adapter.removeBodyClass(cssClasses.SCROLL_LOCK);
            if (this.isFullscreen) {
                this.adapter.deregisterContentEventHandler('scroll', this.contentScrollHandler);
            }
            this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
            this.adapter.deregisterWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = 0;
            clearTimeout(this.animationTimer);
            this.animationTimer = setTimeout(function () {
                _this.adapter.releaseFocus();
                _this.handleAnimationTimerEnd();
                _this.adapter.notifyClosed(action);
            }, numbers.DIALOG_ANIMATION_CLOSE_TIME_MS);
        };
        /**
         * Used only in instances of showing a secondary dialog over a full-screen
         * dialog. Shows the "surface scrim" displayed over the full-screen dialog.
         */
        MDCDialogFoundation.prototype.showSurfaceScrim = function () {
            var _this = this;
            this.adapter.addClass(cssClasses.SURFACE_SCRIM_SHOWING);
            this.runNextAnimationFrame(function () {
                _this.adapter.addClass(cssClasses.SURFACE_SCRIM_SHOWN);
            });
        };
        /**
         * Used only in instances of showing a secondary dialog over a full-screen
         * dialog. Hides the "surface scrim" displayed over the full-screen dialog.
         */
        MDCDialogFoundation.prototype.hideSurfaceScrim = function () {
            this.adapter.removeClass(cssClasses.SURFACE_SCRIM_SHOWN);
            this.adapter.addClass(cssClasses.SURFACE_SCRIM_HIDING);
        };
        /**
         * Handles `transitionend` event triggered when surface scrim animation is
         * finished.
         */
        MDCDialogFoundation.prototype.handleSurfaceScrimTransitionEnd = function () {
            this.adapter.removeClass(cssClasses.SURFACE_SCRIM_HIDING);
            this.adapter.removeClass(cssClasses.SURFACE_SCRIM_SHOWING);
        };
        MDCDialogFoundation.prototype.isOpen = function () {
            return this.dialogOpen;
        };
        MDCDialogFoundation.prototype.getEscapeKeyAction = function () {
            return this.escapeKeyAction;
        };
        MDCDialogFoundation.prototype.setEscapeKeyAction = function (action) {
            this.escapeKeyAction = action;
        };
        MDCDialogFoundation.prototype.getScrimClickAction = function () {
            return this.scrimClickAction;
        };
        MDCDialogFoundation.prototype.setScrimClickAction = function (action) {
            this.scrimClickAction = action;
        };
        MDCDialogFoundation.prototype.getAutoStackButtons = function () {
            return this.autoStackButtons;
        };
        MDCDialogFoundation.prototype.setAutoStackButtons = function (autoStack) {
            this.autoStackButtons = autoStack;
        };
        MDCDialogFoundation.prototype.getSuppressDefaultPressSelector = function () {
            return this.suppressDefaultPressSelector;
        };
        MDCDialogFoundation.prototype.setSuppressDefaultPressSelector = function (selector) {
            this.suppressDefaultPressSelector = selector;
        };
        MDCDialogFoundation.prototype.layout = function () {
            var _this = this;
            this.animFrame.request(AnimationKeys.POLL_LAYOUT_CHANGE, function () {
                _this.layoutInternal();
            });
        };
        /** Handles click on the dialog root element. */
        MDCDialogFoundation.prototype.handleClick = function (evt) {
            var isScrim = this.adapter.eventTargetMatches(evt.target, strings.SCRIM_SELECTOR);
            // Check for scrim click first since it doesn't require querying ancestors.
            if (isScrim && this.scrimClickAction !== '') {
                this.close(this.scrimClickAction);
            }
            else {
                var action = this.adapter.getActionFromEvent(evt);
                if (action) {
                    this.close(action);
                }
            }
        };
        /** Handles keydown on the dialog root element. */
        MDCDialogFoundation.prototype.handleKeydown = function (evt) {
            var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
            if (!isEnter) {
                return;
            }
            var action = this.adapter.getActionFromEvent(evt);
            if (action) {
                // Action button callback is handled in `handleClick`,
                // since space/enter keydowns on buttons trigger click events.
                return;
            }
            // `composedPath` is used here, when available, to account for use cases
            // where a target meant to suppress the default press behaviour
            // may exist in a shadow root.
            // For example, a textarea inside a web component:
            // <mwc-dialog>
            //   <horizontal-layout>
            //     #shadow-root (open)
            //       <mwc-textarea>
            //         #shadow-root (open)
            //           <textarea></textarea>
            //       </mwc-textarea>
            //   </horizontal-layout>
            // </mwc-dialog>
            var target = evt.composedPath ? evt.composedPath()[0] : evt.target;
            var isDefault = this.suppressDefaultPressSelector ?
                !this.adapter.eventTargetMatches(target, this.suppressDefaultPressSelector) :
                true;
            if (isEnter && isDefault) {
                this.adapter.clickDefaultButton();
            }
        };
        /** Handles keydown on the document. */
        MDCDialogFoundation.prototype.handleDocumentKeydown = function (evt) {
            var isEscape = evt.key === 'Escape' || evt.keyCode === 27;
            if (isEscape && this.escapeKeyAction !== '') {
                this.close(this.escapeKeyAction);
            }
        };
        /**
         * Handles scroll event on the dialog's content element -- showing a scroll
         * divider on the header or footer based on the scroll position. This handler
         * should only be registered on full-screen dialogs with scrollable content.
         */
        MDCDialogFoundation.prototype.handleScrollEvent = function () {
            var _this = this;
            // Since scroll events can fire at a high rate, we throttle these events by
            // using requestAnimationFrame.
            this.animFrame.request(AnimationKeys.POLL_SCROLL_POS, function () {
                _this.toggleScrollDividerHeader();
                _this.toggleScrollDividerFooter();
            });
        };
        MDCDialogFoundation.prototype.layoutInternal = function () {
            if (this.autoStackButtons) {
                this.detectStackedButtons();
            }
            this.toggleScrollableClasses();
        };
        MDCDialogFoundation.prototype.handleAnimationTimerEnd = function () {
            this.animationTimer = 0;
            this.adapter.removeClass(cssClasses.OPENING);
            this.adapter.removeClass(cssClasses.CLOSING);
        };
        /**
         * Runs the given logic on the next animation frame, using setTimeout to
         * factor in Firefox reflow behavior.
         */
        MDCDialogFoundation.prototype.runNextAnimationFrame = function (callback) {
            var _this = this;
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = requestAnimationFrame(function () {
                _this.animationFrame = 0;
                clearTimeout(_this.animationTimer);
                _this.animationTimer = setTimeout(callback, 0);
            });
        };
        MDCDialogFoundation.prototype.detectStackedButtons = function () {
            // Remove the class first to let us measure the buttons' natural positions.
            this.adapter.removeClass(cssClasses.STACKED);
            var areButtonsStacked = this.adapter.areButtonsStacked();
            if (areButtonsStacked) {
                this.adapter.addClass(cssClasses.STACKED);
            }
            if (areButtonsStacked !== this.areButtonsStacked) {
                this.adapter.reverseButtons();
                this.areButtonsStacked = areButtonsStacked;
            }
        };
        MDCDialogFoundation.prototype.toggleScrollableClasses = function () {
            // Remove the class first to let us measure the natural height of the
            // content.
            this.adapter.removeClass(cssClasses.SCROLLABLE);
            if (this.adapter.isContentScrollable()) {
                this.adapter.addClass(cssClasses.SCROLLABLE);
                if (this.isFullscreen) {
                    // If dialog is full-screen and scrollable, check if a scroll divider
                    // should be shown.
                    this.toggleScrollDividerHeader();
                    this.toggleScrollDividerFooter();
                }
            }
        };
        MDCDialogFoundation.prototype.toggleScrollDividerHeader = function () {
            if (!this.adapter.isScrollableContentAtTop()) {
                this.adapter.addClass(cssClasses.SCROLL_DIVIDER_HEADER);
            }
            else if (this.adapter.hasClass(cssClasses.SCROLL_DIVIDER_HEADER)) {
                this.adapter.removeClass(cssClasses.SCROLL_DIVIDER_HEADER);
            }
        };
        MDCDialogFoundation.prototype.toggleScrollDividerFooter = function () {
            if (!this.adapter.isScrollableContentAtBottom()) {
                this.adapter.addClass(cssClasses.SCROLL_DIVIDER_FOOTER);
            }
            else if (this.adapter.hasClass(cssClasses.SCROLL_DIVIDER_FOOTER)) {
                this.adapter.removeClass(cssClasses.SCROLL_DIVIDER_FOOTER);
            }
        };
        return MDCDialogFoundation;
    }(MDCFoundation));

    /* node_modules\@smui\dialog\dist\Dialog.svelte generated by Svelte v3.46.6 */

    const { document: document_1, window: window_1 } = globals;

    const file$9 = "node_modules\\@smui\\dialog\\dist\\Dialog.svelte";
    const get_over_slot_changes = dirty => ({});
    const get_over_slot_context = ctx => ({});

    // (47:6) {#if fullscreen}
    function create_if_block$1(ctx) {
    	let div;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div = element("div");
    			attr_dev(div, "class", "mdc-dialog__surface-scrim");
    			add_location(div, file$9, 47, 8, 1330);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			if (!mounted) {
    				dispose = listen_dev(div, "transitionend", /*transitionend_handler*/ ctx[31], false, false, false);
    				mounted = true;
    			}
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(47:6) {#if fullscreen}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$9(ctx) {
    	let t0;
    	let div3;
    	let div1;
    	let div0;
    	let t1;
    	let div0_class_value;
    	let div1_class_value;
    	let t2;
    	let div2;
    	let div3_class_value;
    	let useActions_action;
    	let t3;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[27].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[26], null);
    	let if_block = /*fullscreen*/ ctx[5] && create_if_block$1(ctx);

    	let div0_levels = [
    		{
    			class: div0_class_value = classMap({
    				[/*surface$class*/ ctx[7]]: true,
    				'mdc-dialog__surface': true
    			})
    		},
    		{ role: "alertdialog" },
    		{ "aria-modal": "true" },
    		prefixFilter(/*$$restProps*/ ctx[17], 'surface$')
    	];

    	let div0_data = {};

    	for (let i = 0; i < div0_levels.length; i += 1) {
    		div0_data = assign(div0_data, div0_levels[i]);
    	}

    	let div1_levels = [
    		{
    			class: div1_class_value = classMap({
    				[/*container$class*/ ctx[6]]: true,
    				'mdc-dialog__container': true
    			})
    		},
    		prefixFilter(/*$$restProps*/ ctx[17], 'container$')
    	];

    	let div1_data = {};

    	for (let i = 0; i < div1_levels.length; i += 1) {
    		div1_data = assign(div1_data, div1_levels[i]);
    	}

    	let div3_levels = [
    		{
    			class: div3_class_value = classMap({
    				[/*className*/ ctx[2]]: true,
    				'mdc-dialog': true,
    				'mdc-dialog--stacked': !/*autoStackButtons*/ ctx[4],
    				'mdc-dialog--fullscreen': /*fullscreen*/ ctx[5],
    				'smui-dialog--selection': /*selection*/ ctx[3],
    				.../*internalClasses*/ ctx[10]
    			})
    		},
    		{ role: "alertdialog" },
    		{ "aria-modal": "true" },
    		exclude(/*$$restProps*/ ctx[17], ['container$', 'surface$'])
    	];

    	let div3_data = {};

    	for (let i = 0; i < div3_levels.length; i += 1) {
    		div3_data = assign(div3_data, div3_levels[i]);
    	}

    	const over_slot_template = /*#slots*/ ctx[27].over;
    	const over_slot = create_slot(over_slot_template, ctx, /*$$scope*/ ctx[26], get_over_slot_context);

    	const block = {
    		c: function create() {
    			t0 = space();
    			div3 = element("div");
    			div1 = element("div");
    			div0 = element("div");
    			if (default_slot) default_slot.c();
    			t1 = space();
    			if (if_block) if_block.c();
    			t2 = space();
    			div2 = element("div");
    			t3 = space();
    			if (over_slot) over_slot.c();
    			set_attributes(div0, div0_data);
    			add_location(div0, file$9, 36, 4, 1073);
    			set_attributes(div1, div1_data);
    			add_location(div1, file$9, 29, 2, 913);
    			attr_dev(div2, "class", "mdc-dialog__scrim");
    			add_location(div2, file$9, 55, 2, 1526);
    			set_attributes(div3, div3_data);
    			add_location(div3, file$9, 8, 0, 250);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div1);
    			append_dev(div1, div0);

    			if (default_slot) {
    				default_slot.m(div0, null);
    			}

    			append_dev(div0, t1);
    			if (if_block) if_block.m(div0, null);
    			append_dev(div3, t2);
    			append_dev(div3, div2);
    			/*div3_binding*/ ctx[32](div3);
    			insert_dev(target, t3, anchor);

    			if (over_slot) {
    				over_slot.m(target, anchor);
    			}

    			current = true;

    			if (!mounted) {
    				dispose = [
    					listen_dev(window_1, "resize", /*resize_handler*/ ctx[28], false, false, false),
    					listen_dev(window_1, "orientationchange", /*orientationchange_handler*/ ctx[29], false, false, false),
    					listen_dev(document_1.body, "keydown", /*keydown_handler*/ ctx[30], false, false, false),
    					action_destroyer(useActions_action = useActions.call(null, div3, /*use*/ ctx[1])),
    					action_destroyer(/*forwardEvents*/ ctx[11].call(null, div3)),
    					listen_dev(div3, "SMUIDialog:opening", /*handleDialogOpening*/ ctx[14], false, false, false),
    					listen_dev(div3, "SMUIDialog:opened", /*handleDialogOpened*/ ctx[15], false, false, false),
    					listen_dev(div3, "SMUIDialog:closed", /*handleDialogClosed*/ ctx[16], false, false, false),
    					listen_dev(div3, "click", /*click_handler*/ ctx[33], false, false, false),
    					listen_dev(div3, "keydown", /*keydown_handler_1*/ ctx[34], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty[0] & /*$$scope*/ 67108864)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[26],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[26])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[26], dirty, null),
    						null
    					);
    				}
    			}

    			if (/*fullscreen*/ ctx[5]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block$1(ctx);
    					if_block.c();
    					if_block.m(div0, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			set_attributes(div0, div0_data = get_spread_update(div0_levels, [
    				(!current || dirty[0] & /*surface$class*/ 128 && div0_class_value !== (div0_class_value = classMap({
    					[/*surface$class*/ ctx[7]]: true,
    					'mdc-dialog__surface': true
    				}))) && { class: div0_class_value },
    				{ role: "alertdialog" },
    				{ "aria-modal": "true" },
    				dirty[0] & /*$$restProps*/ 131072 && prefixFilter(/*$$restProps*/ ctx[17], 'surface$')
    			]));

    			set_attributes(div1, div1_data = get_spread_update(div1_levels, [
    				(!current || dirty[0] & /*container$class*/ 64 && div1_class_value !== (div1_class_value = classMap({
    					[/*container$class*/ ctx[6]]: true,
    					'mdc-dialog__container': true
    				}))) && { class: div1_class_value },
    				dirty[0] & /*$$restProps*/ 131072 && prefixFilter(/*$$restProps*/ ctx[17], 'container$')
    			]));

    			set_attributes(div3, div3_data = get_spread_update(div3_levels, [
    				(!current || dirty[0] & /*className, autoStackButtons, fullscreen, selection, internalClasses*/ 1084 && div3_class_value !== (div3_class_value = classMap({
    					[/*className*/ ctx[2]]: true,
    					'mdc-dialog': true,
    					'mdc-dialog--stacked': !/*autoStackButtons*/ ctx[4],
    					'mdc-dialog--fullscreen': /*fullscreen*/ ctx[5],
    					'smui-dialog--selection': /*selection*/ ctx[3],
    					.../*internalClasses*/ ctx[10]
    				}))) && { class: div3_class_value },
    				{ role: "alertdialog" },
    				{ "aria-modal": "true" },
    				dirty[0] & /*$$restProps*/ 131072 && exclude(/*$$restProps*/ ctx[17], ['container$', 'surface$'])
    			]));

    			if (useActions_action && is_function(useActions_action.update) && dirty[0] & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);

    			if (over_slot) {
    				if (over_slot.p && (!current || dirty[0] & /*$$scope*/ 67108864)) {
    					update_slot_base(
    						over_slot,
    						over_slot_template,
    						ctx,
    						/*$$scope*/ ctx[26],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[26])
    						: get_slot_changes(over_slot_template, /*$$scope*/ ctx[26], dirty, get_over_slot_changes),
    						get_over_slot_context
    					);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			transition_in(over_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			transition_out(over_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(div3);
    			if (default_slot) default_slot.d(detaching);
    			if (if_block) if_block.d();
    			/*div3_binding*/ ctx[32](null);
    			if (detaching) detach_dev(t3);
    			if (over_slot) over_slot.d(detaching);
    			mounted = false;
    			run_all(dispose);
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

    function instance_1($$self, $$props, $$invalidate) {
    	const omit_props_names = [
    		"use","class","open","selection","escapeKeyAction","scrimClickAction","autoStackButtons","fullscreen","container$class","surface$class","isOpen","setOpen","layout","getElement"
    	];

    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let $aboveFullscreenShown;
    	let $actionButtonsReversed;
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Dialog', slots, ['default','over']);
    	var _a;
    	const { FocusTrap } = domFocusTrap;
    	const { closest, matches } = ponyfill;
    	const forwardEvents = forwardEventsBuilder(get_current_component());
    	let { use = [] } = $$props;
    	let { class: className = '' } = $$props;
    	let { open = false } = $$props;
    	let { selection = false } = $$props;
    	let { escapeKeyAction = 'close' } = $$props;
    	let { scrimClickAction = 'close' } = $$props;
    	let { autoStackButtons = true } = $$props;
    	let { fullscreen = false } = $$props;
    	let { container$class = '' } = $$props;
    	let { surface$class = '' } = $$props;
    	let element;
    	let instance;
    	let internalClasses = {};
    	let focusTrap;
    	let actionButtonsReversed = writable(false);
    	validate_store(actionButtonsReversed, 'actionButtonsReversed');
    	component_subscribe($$self, actionButtonsReversed, value => $$invalidate(38, $actionButtonsReversed = value));
    	let aboveFullscreen = getContext('SMUI:dialog:aboveFullscreen');

    	let aboveFullscreenShown = (_a = getContext('SMUI:dialog:aboveFullscreenShown')) !== null && _a !== void 0
    	? _a
    	: writable(false);

    	validate_store(aboveFullscreenShown, 'aboveFullscreenShown');
    	component_subscribe($$self, aboveFullscreenShown, value => $$invalidate(25, $aboveFullscreenShown = value));
    	let addLayoutListener = getContext('SMUI:addLayoutListener');
    	let removeLayoutListener;
    	let layoutListeners = [];

    	let addLayoutListenerFn = listener => {
    		layoutListeners.push(listener);

    		return () => {
    			const idx = layoutListeners.indexOf(listener);

    			if (idx >= 0) {
    				layoutListeners.splice(idx, 1);
    			}
    		};
    	};

    	setContext('SMUI:dialog:actions:reversed', actionButtonsReversed);
    	setContext('SMUI:addLayoutListener', addLayoutListenerFn);
    	setContext('SMUI:dialog:selection', selection);
    	setContext('SMUI:dialog:aboveFullscreen', aboveFullscreen || fullscreen);
    	setContext('SMUI:dialog:aboveFullscreenShown', aboveFullscreenShown);

    	if (addLayoutListener) {
    		removeLayoutListener = addLayoutListener(layout);
    	}

    	let previousAboveFullscreenShown = $aboveFullscreenShown;

    	onMount(() => {
    		var _a;

    		focusTrap = new FocusTrap(element,
    		{
    				initialFocusEl: (_a = getInitialFocusEl()) !== null && _a !== void 0
    				? _a
    				: undefined
    			});

    		$$invalidate(8, instance = new MDCDialogFoundation({
    				addBodyClass: className => document.body.classList.add(className),
    				addClass,
    				areButtonsStacked: () => areTopsMisaligned(getButtonEls()),
    				clickDefaultButton: () => {
    					const defaultButton = getDefaultButtonEl();

    					if (defaultButton) {
    						defaultButton.click();
    					}
    				},
    				eventTargetMatches: (target, selector) => target ? matches(target, selector) : false,
    				getActionFromEvent: evt => {
    					if (!evt.target) {
    						return '';
    					}

    					const element = closest(evt.target, '[data-mdc-dialog-action]');
    					return element && element.getAttribute('data-mdc-dialog-action');
    				},
    				getInitialFocusEl,
    				hasClass,
    				isContentScrollable: () => isScrollable(getContentEl()),
    				notifyClosed: action => {
    					$$invalidate(0, open = false);
    					dispatch(getElement(), 'SMUIDialog:closed', action ? { action } : {}, undefined, true);
    				},
    				notifyClosing: action => dispatch(getElement(), 'SMUIDialog:closing', action ? { action } : {}, undefined, true),
    				notifyOpened: () => dispatch(getElement(), 'SMUIDialog:opened', {}, undefined, true),
    				notifyOpening: () => dispatch(getElement(), 'SMUIDialog:opening', {}, undefined, true),
    				releaseFocus: () => focusTrap.releaseFocus(),
    				removeBodyClass: className => document.body.classList.remove(className),
    				removeClass,
    				reverseButtons: () => {
    					set_store_value(actionButtonsReversed, $actionButtonsReversed = true, $actionButtonsReversed);
    				},
    				trapFocus: () => focusTrap.trapFocus(),
    				registerContentEventHandler: (evt, handler) => {
    					const content = getContentEl();

    					if (content instanceof HTMLElement) {
    						content.addEventListener(evt, handler);
    					}
    				},
    				deregisterContentEventHandler: (evt, handler) => {
    					const content = getContentEl();

    					if (content instanceof HTMLElement) {
    						content.removeEventListener(evt, handler);
    					}
    				},
    				isScrollableContentAtTop: () => {
    					return isScrollAtTop(getContentEl());
    				},
    				isScrollableContentAtBottom: () => {
    					return isScrollAtBottom(getContentEl());
    				},
    				registerWindowEventHandler: (evt, handler) => {
    					window.addEventListener(evt, handler);
    				},
    				deregisterWindowEventHandler: (evt, handler) => {
    					window.removeEventListener(evt, handler);
    				}
    			}));

    		instance.init();

    		return () => {
    			instance.destroy();
    		};
    	});

    	onDestroy(() => {
    		if (removeLayoutListener) {
    			removeLayoutListener();
    		}
    	});

    	function hasClass(className) {
    		return className in internalClasses
    		? internalClasses[className]
    		: getElement().classList.contains(className);
    	}

    	function addClass(className) {
    		if (!internalClasses[className]) {
    			$$invalidate(10, internalClasses[className] = true, internalClasses);
    		}
    	}

    	function removeClass(className) {
    		if (!(className in internalClasses) || internalClasses[className]) {
    			$$invalidate(10, internalClasses[className] = false, internalClasses);
    		}
    	}

    	function getButtonEls() {
    		return [].slice.call(element.querySelectorAll('.mdc-dialog__button'));
    	}

    	function getDefaultButtonEl() {
    		return element.querySelector('[data-mdc-dialog-button-default');
    	}

    	function getContentEl() {
    		return element.querySelector('.mdc-dialog__content');
    	}

    	function getInitialFocusEl() {
    		return element.querySelector('[data-mdc-dialog-initial-focus]');
    	}

    	function handleDialogOpening() {
    		if (aboveFullscreen) {
    			set_store_value(aboveFullscreenShown, $aboveFullscreenShown = true, $aboveFullscreenShown);
    		}

    		requestAnimationFrame(() => {
    			layoutListeners.forEach(listener => listener());
    		});
    	}

    	function handleDialogOpened() {
    		layoutListeners.forEach(listener => listener());
    	}

    	function handleDialogClosed() {
    		if (aboveFullscreen) {
    			set_store_value(aboveFullscreenShown, $aboveFullscreenShown = false, $aboveFullscreenShown);
    		}
    	}

    	function isOpen() {
    		return open;
    	}

    	function setOpen(value) {
    		$$invalidate(0, open = value);
    	}

    	function layout() {
    		return instance.layout();
    	}

    	function getElement() {
    		return element;
    	}

    	const resize_handler = () => open && instance && instance.layout();
    	const orientationchange_handler = () => open && instance && instance.layout();
    	const keydown_handler = event => open && instance && instance.handleDocumentKeydown(event);
    	const transitionend_handler = () => instance && instance.handleSurfaceScrimTransitionEnd();

    	function div3_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			element = $$value;
    			$$invalidate(9, element);
    		});
    	}

    	const click_handler = event => instance && instance.handleClick(event);
    	const keydown_handler_1 = event => instance && instance.handleKeydown(event);

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(17, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('use' in $$new_props) $$invalidate(1, use = $$new_props.use);
    		if ('class' in $$new_props) $$invalidate(2, className = $$new_props.class);
    		if ('open' in $$new_props) $$invalidate(0, open = $$new_props.open);
    		if ('selection' in $$new_props) $$invalidate(3, selection = $$new_props.selection);
    		if ('escapeKeyAction' in $$new_props) $$invalidate(18, escapeKeyAction = $$new_props.escapeKeyAction);
    		if ('scrimClickAction' in $$new_props) $$invalidate(19, scrimClickAction = $$new_props.scrimClickAction);
    		if ('autoStackButtons' in $$new_props) $$invalidate(4, autoStackButtons = $$new_props.autoStackButtons);
    		if ('fullscreen' in $$new_props) $$invalidate(5, fullscreen = $$new_props.fullscreen);
    		if ('container$class' in $$new_props) $$invalidate(6, container$class = $$new_props.container$class);
    		if ('surface$class' in $$new_props) $$invalidate(7, surface$class = $$new_props.surface$class);
    		if ('$$scope' in $$new_props) $$invalidate(26, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		_a,
    		MDCDialogFoundation,
    		util,
    		domFocusTrap,
    		ponyfill,
    		onMount,
    		onDestroy,
    		getContext,
    		setContext,
    		writable,
    		get_current_component,
    		forwardEventsBuilder,
    		classMap,
    		exclude,
    		prefixFilter,
    		useActions,
    		dispatch,
    		FocusTrap,
    		closest,
    		matches,
    		forwardEvents,
    		use,
    		className,
    		open,
    		selection,
    		escapeKeyAction,
    		scrimClickAction,
    		autoStackButtons,
    		fullscreen,
    		container$class,
    		surface$class,
    		element,
    		instance,
    		internalClasses,
    		focusTrap,
    		actionButtonsReversed,
    		aboveFullscreen,
    		aboveFullscreenShown,
    		addLayoutListener,
    		removeLayoutListener,
    		layoutListeners,
    		addLayoutListenerFn,
    		previousAboveFullscreenShown,
    		hasClass,
    		addClass,
    		removeClass,
    		getButtonEls,
    		getDefaultButtonEl,
    		getContentEl,
    		getInitialFocusEl,
    		handleDialogOpening,
    		handleDialogOpened,
    		handleDialogClosed,
    		isOpen,
    		setOpen,
    		layout,
    		getElement,
    		$aboveFullscreenShown,
    		$actionButtonsReversed
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('_a' in $$props) _a = $$new_props._a;
    		if ('use' in $$props) $$invalidate(1, use = $$new_props.use);
    		if ('className' in $$props) $$invalidate(2, className = $$new_props.className);
    		if ('open' in $$props) $$invalidate(0, open = $$new_props.open);
    		if ('selection' in $$props) $$invalidate(3, selection = $$new_props.selection);
    		if ('escapeKeyAction' in $$props) $$invalidate(18, escapeKeyAction = $$new_props.escapeKeyAction);
    		if ('scrimClickAction' in $$props) $$invalidate(19, scrimClickAction = $$new_props.scrimClickAction);
    		if ('autoStackButtons' in $$props) $$invalidate(4, autoStackButtons = $$new_props.autoStackButtons);
    		if ('fullscreen' in $$props) $$invalidate(5, fullscreen = $$new_props.fullscreen);
    		if ('container$class' in $$props) $$invalidate(6, container$class = $$new_props.container$class);
    		if ('surface$class' in $$props) $$invalidate(7, surface$class = $$new_props.surface$class);
    		if ('element' in $$props) $$invalidate(9, element = $$new_props.element);
    		if ('instance' in $$props) $$invalidate(8, instance = $$new_props.instance);
    		if ('internalClasses' in $$props) $$invalidate(10, internalClasses = $$new_props.internalClasses);
    		if ('focusTrap' in $$props) focusTrap = $$new_props.focusTrap;
    		if ('actionButtonsReversed' in $$props) $$invalidate(12, actionButtonsReversed = $$new_props.actionButtonsReversed);
    		if ('aboveFullscreen' in $$props) $$invalidate(42, aboveFullscreen = $$new_props.aboveFullscreen);
    		if ('aboveFullscreenShown' in $$props) $$invalidate(13, aboveFullscreenShown = $$new_props.aboveFullscreenShown);
    		if ('addLayoutListener' in $$props) addLayoutListener = $$new_props.addLayoutListener;
    		if ('removeLayoutListener' in $$props) removeLayoutListener = $$new_props.removeLayoutListener;
    		if ('layoutListeners' in $$props) layoutListeners = $$new_props.layoutListeners;
    		if ('addLayoutListenerFn' in $$props) addLayoutListenerFn = $$new_props.addLayoutListenerFn;
    		if ('previousAboveFullscreenShown' in $$props) $$invalidate(24, previousAboveFullscreenShown = $$new_props.previousAboveFullscreenShown);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty[0] & /*instance, escapeKeyAction*/ 262400) {
    			if (instance && instance.getEscapeKeyAction() !== escapeKeyAction) {
    				instance.setEscapeKeyAction(escapeKeyAction);
    			}
    		}

    		if ($$self.$$.dirty[0] & /*instance, scrimClickAction*/ 524544) {
    			if (instance && instance.getScrimClickAction() !== scrimClickAction) {
    				instance.setScrimClickAction(scrimClickAction);
    			}
    		}

    		if ($$self.$$.dirty[0] & /*instance, autoStackButtons*/ 272) {
    			if (instance && instance.getAutoStackButtons() !== autoStackButtons) {
    				instance.setAutoStackButtons(autoStackButtons);
    			}
    		}

    		if ($$self.$$.dirty[0] & /*autoStackButtons*/ 16) {
    			if (!autoStackButtons) {
    				set_store_value(actionButtonsReversed, $actionButtonsReversed = true, $actionButtonsReversed);
    			}
    		}

    		if ($$self.$$.dirty[0] & /*instance, open*/ 257) {
    			if (instance && instance.isOpen() !== open) {
    				if (open) {
    					instance.open({
    						isAboveFullscreenDialog: !!aboveFullscreen
    					});
    				} else {
    					instance.close();
    				}
    			}
    		}

    		if ($$self.$$.dirty[0] & /*fullscreen, instance, previousAboveFullscreenShown, $aboveFullscreenShown*/ 50331936) {
    			if (fullscreen && instance && previousAboveFullscreenShown !== $aboveFullscreenShown) {
    				$$invalidate(24, previousAboveFullscreenShown = $aboveFullscreenShown);

    				if ($aboveFullscreenShown) {
    					instance.showSurfaceScrim();
    				} else {
    					instance.hideSurfaceScrim();
    				}
    			}
    		}
    	};

    	return [
    		open,
    		use,
    		className,
    		selection,
    		autoStackButtons,
    		fullscreen,
    		container$class,
    		surface$class,
    		instance,
    		element,
    		internalClasses,
    		forwardEvents,
    		actionButtonsReversed,
    		aboveFullscreenShown,
    		handleDialogOpening,
    		handleDialogOpened,
    		handleDialogClosed,
    		$$restProps,
    		escapeKeyAction,
    		scrimClickAction,
    		isOpen,
    		setOpen,
    		layout,
    		getElement,
    		previousAboveFullscreenShown,
    		$aboveFullscreenShown,
    		$$scope,
    		slots,
    		resize_handler,
    		orientationchange_handler,
    		keydown_handler,
    		transitionend_handler,
    		div3_binding,
    		click_handler,
    		keydown_handler_1
    	];
    }

    class Dialog extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(
    			this,
    			options,
    			instance_1,
    			create_fragment$9,
    			safe_not_equal,
    			{
    				use: 1,
    				class: 2,
    				open: 0,
    				selection: 3,
    				escapeKeyAction: 18,
    				scrimClickAction: 19,
    				autoStackButtons: 4,
    				fullscreen: 5,
    				container$class: 6,
    				surface$class: 7,
    				isOpen: 20,
    				setOpen: 21,
    				layout: 22,
    				getElement: 23
    			},
    			null,
    			[-1, -1]
    		);

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Dialog",
    			options,
    			id: create_fragment$9.name
    		});
    	}

    	get use() {
    		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set use(value) {
    		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get class() {
    		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set class(value) {
    		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get open() {
    		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set open(value) {
    		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get selection() {
    		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set selection(value) {
    		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get escapeKeyAction() {
    		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set escapeKeyAction(value) {
    		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get scrimClickAction() {
    		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set scrimClickAction(value) {
    		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get autoStackButtons() {
    		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set autoStackButtons(value) {
    		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get fullscreen() {
    		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set fullscreen(value) {
    		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get container$class() {
    		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set container$class(value) {
    		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get surface$class() {
    		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set surface$class(value) {
    		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isOpen() {
    		return this.$$.ctx[20];
    	}

    	set isOpen(value) {
    		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get setOpen() {
    		return this.$$.ctx[21];
    	}

    	set setOpen(value) {
    		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get layout() {
    		return this.$$.ctx[22];
    	}

    	set layout(value) {
    		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get getElement() {
    		return this.$$.ctx[23];
    	}

    	set getElement(value) {
    		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    classAdderBuilder({
        class: 'mdc-dialog__header',
        component: Div,
        contexts: {
            'SMUI:icon-button:context': 'dialog:header',
        },
    });

    var Title = classAdderBuilder({
        class: 'mdc-dialog__title',
        component: H2,
    });

    var Content = classAdderBuilder({
        class: 'mdc-dialog__content',
        component: Div,
    });

    var Actions = classAdderBuilder({
        class: 'mdc-dialog__actions',
        component: Div,
        classMap: {
            'smui-dialog__actions--reversed': 'SMUI:dialog:actions:reversed',
        },
        contexts: {
            'SMUI:button:context': 'dialog:action',
        },
    });

    /* src\Components\DialogCard.svelte generated by Svelte v3.46.6 */
    const file$8 = "src\\Components\\DialogCard.svelte";

    // (18:4) <Content style="padding: 1vw;">
    function create_default_slot_10(ctx) {
    	let div0;
    	let t0;
    	let t1;
    	let div1;
    	let t2;

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			t0 = text(/*title*/ ctx[1]);
    			t1 = space();
    			div1 = element("div");
    			t2 = text(/*subtitle*/ ctx[2]);
    			attr_dev(div0, "class", "mdc-typography--body2 highlight");
    			add_location(div0, file$8, 18, 6, 539);
    			attr_dev(div1, "class", "mdc-typography--body2");
    			add_location(div1, file$8, 19, 6, 605);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			append_dev(div0, t0);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, t2);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*title*/ 2) set_data_dev(t0, /*title*/ ctx[1]);
    			if (dirty & /*subtitle*/ 4) set_data_dev(t2, /*subtitle*/ ctx[2]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_10.name,
    		type: "slot",
    		source: "(18:4) <Content style=\\\"padding: 1vw;\\\">",
    		ctx
    	});

    	return block;
    }

    // (28:45) 
    function create_if_block_1(ctx) {
    	let i;
    	let t1;
    	let label;
    	let current;

    	label = new Label({
    			props: {
    				class: "mdc-typography--body2 bold",
    				$$slots: { default: [create_default_slot_9] },
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
    			attr_dev(i, "class", "material-icons svelte-pky5a5");
    			attr_dev(i, "aria-hidden", "true");
    			add_location(i, file$8, 28, 10, 1095);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(label, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const label_changes = {};

    			if (dirty & /*$$scope, buttonLabel*/ 264) {
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
    		source: "(28:45) ",
    		ctx
    	});

    	return block;
    }

    // (25:8) {#if direction === "left-card"}
    function create_if_block(ctx) {
    	let label;
    	let t0;
    	let i;
    	let current;

    	label = new Label({
    			props: {
    				class: "mdc-typography--body2 bold",
    				$$slots: { default: [create_default_slot_8] },
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
    			attr_dev(i, "class", "material-icons svelte-pky5a5");
    			attr_dev(i, "aria-hidden", "true");
    			add_location(i, file$8, 26, 10, 974);
    		},
    		m: function mount(target, anchor) {
    			mount_component(label, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, i, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const label_changes = {};

    			if (dirty & /*$$scope, buttonLabel*/ 264) {
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
    		source: "(25:8) {#if direction === \\\"left-card\\\"}",
    		ctx
    	});

    	return block;
    }

    // (30:10) <Label class="mdc-typography--body2 bold">
    function create_default_slot_9(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text(/*buttonLabel*/ ctx[3]);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*buttonLabel*/ 8) set_data_dev(t, /*buttonLabel*/ ctx[3]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_9.name,
    		type: "slot",
    		source: "(30:10) <Label class=\\\"mdc-typography--body2 bold\\\">",
    		ctx
    	});

    	return block;
    }

    // (26:10) <Label class="mdc-typography--body2 bold">
    function create_default_slot_8(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text(/*buttonLabel*/ ctx[3]);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*buttonLabel*/ 8) set_data_dev(t, /*buttonLabel*/ ctx[3]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8.name,
    		type: "slot",
    		source: "(26:10) <Label class=\\\"mdc-typography--body2 bold\\\">",
    		ctx
    	});

    	return block;
    }

    // (23:6) <Button class="dialog-card-button">
    function create_default_slot_7(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block, create_if_block_1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*direction*/ ctx[4] === "left-card") return 0;
    		if (/*direction*/ ctx[4] === "right-card") return 1;
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
    		id: create_default_slot_7.name,
    		type: "slot",
    		source: "(23:6) <Button class=\\\"dialog-card-button\\\">",
    		ctx
    	});

    	return block;
    }

    // (22:4) <Actions fullBleed style="min-height: 0;">
    function create_default_slot_6(ctx) {
    	let button;
    	let current;

    	button = new Button_1({
    			props: {
    				class: "dialog-card-button",
    				$$slots: { default: [create_default_slot_7] },
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

    			if (dirty & /*$$scope, buttonLabel, direction*/ 280) {
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
    		id: create_default_slot_6.name,
    		type: "slot",
    		source: "(22:4) <Actions fullBleed style=\\\"min-height: 0;\\\">",
    		ctx
    	});

    	return block;
    }

    // (16:2) <PrimaryAction on:click={() => (open = true)}>
    function create_default_slot_5(ctx) {
    	let img;
    	let img_src_value;
    	let t0;
    	let content;
    	let t1;
    	let actions;
    	let current;

    	content = new Content$1({
    			props: {
    				style: "padding: 1vw;",
    				$$slots: { default: [create_default_slot_10] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	actions = new Actions({
    			props: {
    				fullBleed: true,
    				style: "min-height: 0;",
    				$$slots: { default: [create_default_slot_6] },
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
    			if (!src_url_equal(img.src, img_src_value = /*src*/ ctx[0])) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", /*title*/ ctx[1]);
    			attr_dev(img, "class", "svelte-pky5a5");
    			add_location(img, file$8, 16, 4, 469);
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
    			if (!current || dirty & /*src*/ 1 && !src_url_equal(img.src, img_src_value = /*src*/ ctx[0])) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (!current || dirty & /*title*/ 2) {
    				attr_dev(img, "alt", /*title*/ ctx[1]);
    			}

    			const content_changes = {};

    			if (dirty & /*$$scope, subtitle, title*/ 262) {
    				content_changes.$$scope = { dirty, ctx };
    			}

    			content.$set(content_changes);
    			const actions_changes = {};

    			if (dirty & /*$$scope, buttonLabel, direction*/ 280) {
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
    		id: create_default_slot_5.name,
    		type: "slot",
    		source: "(16:2) <PrimaryAction on:click={() => (open = true)}>",
    		ctx
    	});

    	return block;
    }

    // (15:0) <Card class="dialog-card {direction}">
    function create_default_slot_4(ctx) {
    	let primaryaction;
    	let current;

    	primaryaction = new PrimaryAction({
    			props: {
    				$$slots: { default: [create_default_slot_5] },
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

    			if (dirty & /*$$scope, buttonLabel, direction, subtitle, title, src*/ 287) {
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
    		id: create_default_slot_4.name,
    		type: "slot",
    		source: "(15:0) <Card class=\\\"dialog-card {direction}\\\">",
    		ctx
    	});

    	return block;
    }

    // (38:2) <Title class="mdc-typography--headline3">
    function create_default_slot_3(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text(/*title*/ ctx[1]);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*title*/ 2) set_data_dev(t, /*title*/ ctx[1]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3.name,
    		type: "slot",
    		source: "(38:2) <Title class=\\\"mdc-typography--headline3\\\">",
    		ctx
    	});

    	return block;
    }

    // (51:4) <Actions class="flex-row-2">
    function create_default_slot_2(ctx) {
    	let custombutton0;
    	let t;
    	let custombutton1;
    	let current;

    	custombutton0 = new CustomButton({
    			props: {
    				direction: "right-button",
    				label: "Chiudi"
    			},
    			$$inline: true
    		});

    	custombutton1 = new CustomButton({
    			props: {
    				direction: "right-button",
    				label: "Approfondisci l'inchiesta",
    				href: "https://www.reuters.com/article/brazil-mining-environment-asbestos-idINL8N2T241L"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(custombutton0.$$.fragment);
    			t = space();
    			create_component(custombutton1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(custombutton0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(custombutton1, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(custombutton0.$$.fragment, local);
    			transition_in(custombutton1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(custombutton0.$$.fragment, local);
    			transition_out(custombutton1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(custombutton0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(custombutton1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2.name,
    		type: "slot",
    		source: "(51:4) <Actions class=\\\"flex-row-2\\\">",
    		ctx
    	});

    	return block;
    }

    // (39:2) <Content class="mdc-typography--body1 flex-column-2">
    function create_default_slot_1$1(ctx) {
    	let div;
    	let t0;
    	let span0;
    	let t2;
    	let span1;
    	let t4;
    	let br0;
    	let br1;
    	let t5;
    	let span2;
    	let t7;
    	let span3;
    	let t9;
    	let t10;
    	let actions;
    	let current;

    	actions = new Actions({
    			props: {
    				class: "flex-row-2",
    				$$slots: { default: [create_default_slot_2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			t0 = text("Quando l'industria dell'amianto era forte a Minaçu, SAMA ha finanziato eventi culturali, religiosi e sportivi, ed è stato un importante donatore politico,\r\n      scegliendo sindaci, consiglieri e sacerdoti schierati a ");
    			span0 = element("span");
    			span0.textContent = "difesa dell'amianto";
    			t2 = text(". Denigrare pubblicamente SAMA può essere\r\n      considerato tabù da alcuni residenti, infatti, in migliaia hanno tranquillamente firmato\r\n      ");
    			span1 = element("span");
    			span1.textContent = "accordi";
    			t4 = text("\r\n      con la compagnia per ottenere un risarcimento sui danni sanitari.\r\n      ");
    			br0 = element("br");
    			br1 = element("br");
    			t5 = text("\r\n      La causa in corso è portata avanti dalla ");
    			span2 = element("span");
    			span2.textContent = "ABREA";
    			t7 = text(", associazione brasiliana a difesa delle vittime di amianto, fondata da\r\n      Fernanda Giannasi nel 1995. L'ultima sentenza del tribunale, nel Novembre del 2021, ha ordinato alla compagnia di pagare le\r\n      ");
    			span3 = element("span");
    			span3.textContent = "spese mediche";
    			t9 = text(" per i prossimi 30 anni a tutti i lavoratori che abbiano manifestato problemi di salute \"associabili all'amianto\".");
    			t10 = space();
    			create_component(actions.$$.fragment);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$8, 41, 62, 1817);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$8, 43, 6, 2012);
    			add_location(br0, file$8, 45, 6, 2131);
    			add_location(br1, file$8, 45, 12, 2137);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$8, 46, 47, 2192);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$8, 48, 6, 2438);
    			add_location(div, file$8, 39, 4, 1586);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, t0);
    			append_dev(div, span0);
    			append_dev(div, t2);
    			append_dev(div, span1);
    			append_dev(div, t4);
    			append_dev(div, br0);
    			append_dev(div, br1);
    			append_dev(div, t5);
    			append_dev(div, span2);
    			append_dev(div, t7);
    			append_dev(div, span3);
    			append_dev(div, t9);
    			insert_dev(target, t10, anchor);
    			mount_component(actions, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const actions_changes = {};

    			if (dirty & /*$$scope*/ 256) {
    				actions_changes.$$scope = { dirty, ctx };
    			}

    			actions.$set(actions_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(actions.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(actions.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (detaching) detach_dev(t10);
    			destroy_component(actions, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$1.name,
    		type: "slot",
    		source: "(39:2) <Content class=\\\"mdc-typography--body1 flex-column-2\\\">",
    		ctx
    	});

    	return block;
    }

    // (37:0) <Dialog bind:open aria-labelledby="large-scroll-title" aria-describedby="large-scroll-content" class="dialog" surface$style="width: 85vw; height: 180vw">
    function create_default_slot$1(ctx) {
    	let title_1;
    	let t;
    	let content;
    	let current;

    	title_1 = new Title({
    			props: {
    				class: "mdc-typography--headline3",
    				$$slots: { default: [create_default_slot_3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	content = new Content$1({
    			props: {
    				class: "mdc-typography--body1 flex-column-2",
    				$$slots: { default: [create_default_slot_1$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(title_1.$$.fragment);
    			t = space();
    			create_component(content.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(title_1, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(content, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const title_1_changes = {};

    			if (dirty & /*$$scope, title*/ 258) {
    				title_1_changes.$$scope = { dirty, ctx };
    			}

    			title_1.$set(title_1_changes);
    			const content_changes = {};

    			if (dirty & /*$$scope*/ 256) {
    				content_changes.$$scope = { dirty, ctx };
    			}

    			content.$set(content_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(title_1.$$.fragment, local);
    			transition_in(content.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(title_1.$$.fragment, local);
    			transition_out(content.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(title_1, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(content, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$1.name,
    		type: "slot",
    		source: "(37:0) <Dialog bind:open aria-labelledby=\\\"large-scroll-title\\\" aria-describedby=\\\"large-scroll-content\\\" class=\\\"dialog\\\" surface$style=\\\"width: 85vw; height: 180vw\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$8(ctx) {
    	let card;
    	let t;
    	let dialog;
    	let updating_open;
    	let current;

    	card = new Card({
    			props: {
    				class: "dialog-card " + /*direction*/ ctx[4],
    				$$slots: { default: [create_default_slot_4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	function dialog_open_binding(value) {
    		/*dialog_open_binding*/ ctx[7](value);
    	}

    	let dialog_props = {
    		"aria-labelledby": "large-scroll-title",
    		"aria-describedby": "large-scroll-content",
    		class: "dialog",
    		surface$style: "width: 85vw; height: 180vw",
    		$$slots: { default: [create_default_slot$1] },
    		$$scope: { ctx }
    	};

    	if (/*open*/ ctx[5] !== void 0) {
    		dialog_props.open = /*open*/ ctx[5];
    	}

    	dialog = new Dialog({ props: dialog_props, $$inline: true });
    	binding_callbacks.push(() => bind(dialog, 'open', dialog_open_binding));

    	const block = {
    		c: function create() {
    			create_component(card.$$.fragment);
    			t = space();
    			create_component(dialog.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(card, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(dialog, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const card_changes = {};
    			if (dirty & /*direction*/ 16) card_changes.class = "dialog-card " + /*direction*/ ctx[4];

    			if (dirty & /*$$scope, open, buttonLabel, direction, subtitle, title, src*/ 319) {
    				card_changes.$$scope = { dirty, ctx };
    			}

    			card.$set(card_changes);
    			const dialog_changes = {};

    			if (dirty & /*$$scope, title*/ 258) {
    				dialog_changes.$$scope = { dirty, ctx };
    			}

    			if (!updating_open && dirty & /*open*/ 32) {
    				updating_open = true;
    				dialog_changes.open = /*open*/ ctx[5];
    				add_flush_callback(() => updating_open = false);
    			}

    			dialog.$set(dialog_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card.$$.fragment, local);
    			transition_in(dialog.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card.$$.fragment, local);
    			transition_out(dialog.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(card, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(dialog, detaching);
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

    function instance$8($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('DialogCard', slots, []);
    	let { src, title, subtitle, buttonLabel, direction = "" } = $$props;
    	var open = false;
    	const writable_props = ['src', 'title', 'subtitle', 'buttonLabel', 'direction'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<DialogCard> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => $$invalidate(5, open = true);

    	function dialog_open_binding(value) {
    		open = value;
    		$$invalidate(5, open);
    	}

    	$$self.$$set = $$props => {
    		if ('src' in $$props) $$invalidate(0, src = $$props.src);
    		if ('title' in $$props) $$invalidate(1, title = $$props.title);
    		if ('subtitle' in $$props) $$invalidate(2, subtitle = $$props.subtitle);
    		if ('buttonLabel' in $$props) $$invalidate(3, buttonLabel = $$props.buttonLabel);
    		if ('direction' in $$props) $$invalidate(4, direction = $$props.direction);
    	};

    	$$self.$capture_state = () => ({
    		Card,
    		Content: Content$1,
    		PrimaryAction,
    		Button: Button_1,
    		Label,
    		Dialog,
    		Title,
    		Actions,
    		CustomButton,
    		src,
    		title,
    		subtitle,
    		buttonLabel,
    		direction,
    		open
    	});

    	$$self.$inject_state = $$props => {
    		if ('src' in $$props) $$invalidate(0, src = $$props.src);
    		if ('title' in $$props) $$invalidate(1, title = $$props.title);
    		if ('subtitle' in $$props) $$invalidate(2, subtitle = $$props.subtitle);
    		if ('buttonLabel' in $$props) $$invalidate(3, buttonLabel = $$props.buttonLabel);
    		if ('direction' in $$props) $$invalidate(4, direction = $$props.direction);
    		if ('open' in $$props) $$invalidate(5, open = $$props.open);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		src,
    		title,
    		subtitle,
    		buttonLabel,
    		direction,
    		open,
    		click_handler,
    		dialog_open_binding
    	];
    }

    class DialogCard extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$8, create_fragment$8, safe_not_equal, {
    			src: 0,
    			title: 1,
    			subtitle: 2,
    			buttonLabel: 3,
    			direction: 4
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "DialogCard",
    			options,
    			id: create_fragment$8.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*src*/ ctx[0] === undefined && !('src' in props)) {
    			console.warn("<DialogCard> was created without expected prop 'src'");
    		}

    		if (/*title*/ ctx[1] === undefined && !('title' in props)) {
    			console.warn("<DialogCard> was created without expected prop 'title'");
    		}

    		if (/*subtitle*/ ctx[2] === undefined && !('subtitle' in props)) {
    			console.warn("<DialogCard> was created without expected prop 'subtitle'");
    		}

    		if (/*buttonLabel*/ ctx[3] === undefined && !('buttonLabel' in props)) {
    			console.warn("<DialogCard> was created without expected prop 'buttonLabel'");
    		}
    	}

    	get src() {
    		throw new Error("<DialogCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set src(value) {
    		throw new Error("<DialogCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get title() {
    		throw new Error("<DialogCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<DialogCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get subtitle() {
    		throw new Error("<DialogCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set subtitle(value) {
    		throw new Error("<DialogCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get buttonLabel() {
    		throw new Error("<DialogCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set buttonLabel(value) {
    		throw new Error("<DialogCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get direction() {
    		throw new Error("<DialogCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set direction(value) {
    		throw new Error("<DialogCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Minacu\Cards.svelte generated by Svelte v3.46.6 */
    const file$7 = "src\\Minacu\\Cards.svelte";

    // (92:6) <Actions>
    function create_default_slot_1(ctx) {
    	let custombutton;
    	let current;

    	custombutton = new CustomButton({
    			props: {
    				direction: "right-button",
    				label: "Approfondisci l'inchiesta",
    				href: "https://www.reuters.com/article/brazil-mining-environment-asbestos-idINL8N2T241L"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(custombutton.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(custombutton, target, anchor);
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
    			destroy_component(custombutton, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1.name,
    		type: "slot",
    		source: "(92:6) <Actions>",
    		ctx
    	});

    	return block;
    }

    // (78:2) <Dialog>
    function create_default_slot(ctx) {
    	let content;
    	let t0;
    	let div1;
    	let div0;
    	let t1;
    	let span0;
    	let t3;
    	let span1;
    	let t5;
    	let br0;
    	let br1;
    	let t6;
    	let span2;
    	let t8;
    	let span3;
    	let t10;
    	let t11;
    	let actions;
    	let current;

    	content = new Content({
    			props: { id: "large-scroll-content" },
    			$$inline: true
    		});

    	actions = new Actions({
    			props: {
    				$$slots: { default: [create_default_slot_1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(content.$$.fragment);
    			t0 = space();
    			div1 = element("div");
    			div0 = element("div");
    			t1 = text("Quando l'industria dell'amianto era forte a Minaçu, SAMA ha finanziato eventi culturali, religiosi e sportivi, ed è stato un importante donatore\r\n        politico, scegliendo sindaci, consiglieri e sacerdoti schierati a ");
    			span0 = element("span");
    			span0.textContent = "difesa dell'amianto";
    			t3 = text(". Denigrare pubblicamente SAMA può\r\n        essere considerato tabù da alcuni residenti, infatti, in migliaia hanno tranquillamente firmato\r\n        ");
    			span1 = element("span");
    			span1.textContent = "accordi";
    			t5 = text("\r\n        con la compagnia per ottenere un risarcimento sui danni sanitari.\r\n        ");
    			br0 = element("br");
    			br1 = element("br");
    			t6 = text("\r\n        La causa in corso è portata avanti dalla ");
    			span2 = element("span");
    			span2.textContent = "ABREA";
    			t8 = text(", associazione brasiliana a difesa delle vittime di amianto, fondata da\r\n        Fernanda Giannasi nel 1995. L'ultima sentenza del tribunale, nel Novembre del 2021, ha ordinato alla compagnia di pagare le\r\n        ");
    			span3 = element("span");
    			span3.textContent = "spese mediche";
    			t10 = text(" per i prossimi 30 anni a tutti i lavoratori che abbiano manifestato problemi di salute \"associabili all'amianto\".");
    			t11 = space();
    			create_component(actions.$$.fragment);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$7, 82, 74, 4565);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$7, 84, 8, 4764);
    			add_location(br0, file$7, 86, 8, 4887);
    			add_location(br1, file$7, 86, 14, 4893);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$7, 87, 49, 4950);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$7, 89, 8, 5200);
    			add_location(div0, file$7, 80, 6, 4330);
    			attr_dev(div1, "class", "mdc-typography--body1 hidden right-align flex-column-2");
    			add_location(div1, file$7, 79, 4, 4254);
    		},
    		m: function mount(target, anchor) {
    			mount_component(content, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			append_dev(div0, t1);
    			append_dev(div0, span0);
    			append_dev(div0, t3);
    			append_dev(div0, span1);
    			append_dev(div0, t5);
    			append_dev(div0, br0);
    			append_dev(div0, br1);
    			append_dev(div0, t6);
    			append_dev(div0, span2);
    			append_dev(div0, t8);
    			append_dev(div0, span3);
    			append_dev(div0, t10);
    			append_dev(div1, t11);
    			mount_component(actions, div1, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const actions_changes = {};

    			if (dirty & /*$$scope*/ 4) {
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
    			destroy_component(content, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(div1);
    			destroy_component(actions);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot.name,
    		type: "slot",
    		source: "(78:2) <Dialog>",
    		ctx
    	});

    	return block;
    }

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
    	let t32;
    	let div7;
    	let dialogcard;
    	let t33;
    	let dialog;
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

    	dialogcard = new DialogCard({
    			props: {
    				src: "img/minacu-court.png",
    				title: "Le infinite battaglie legali",
    				subtitle: "Come le vittime hanno cercato giustizia contro i danni della miniera",
    				buttonLabel: "Scopri di più",
    				direction: "left-card"
    			},
    			$$inline: true
    		});

    	dialog = new Dialog({
    			props: {
    				$$slots: { default: [create_default_slot] },
    				$$scope: { ctx }
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
    			t5 = text(". Denigrare pubblicamente SAMA può essere\r\n      considerato tabù da alcuni residenti, infatti, in migliaia hanno tranquillamente firmato\r\n      ");
    			span1 = element("span");
    			span1.textContent = "accordi";
    			t7 = text("\r\n      con la compagnia per ottenere un risarcimento sui danni sanitari.\r\n      ");
    			br0 = element("br");
    			br1 = element("br");
    			t8 = text("\r\n      La causa in corso è portata avanti dalla ");
    			span2 = element("span");
    			span2.textContent = "ABREA";
    			t10 = text(", associazione brasiliana a difesa delle vittime di amianto, fondata da\r\n      Fernanda Giannasi nel 1995. L'ultima sentenza del tribunale, nel Novembre del 2021, ha ordinato alla compagnia di pagare le\r\n      ");
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
    			t16 = text("\r\n      Ce ne dà una testimonianza chiara ");
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
    			t29 = text(". Affermano inoltre che le\r\n      persone che si ammalano in miniera in questo momento è perché si sono ammalate a causa del lavoro svolto precedentemente presso un'altra miniera e sono\r\n      successivamente emigrate per lavoro a Cana Brava.");
    			t30 = space();
    			create_component(custombutton1.$$.fragment);
    			t31 = space();
    			create_component(contentcard1.$$.fragment);
    			t32 = space();
    			div7 = element("div");
    			create_component(dialogcard.$$.fragment);
    			t33 = space();
    			create_component(dialog.$$.fragment);
    			attr_dev(div0, "class", "mdc-typography--headline3 uppercase");
    			set_style(div0, "margin-top", "12vw");
    			add_location(div0, file$7, 11, 0, 386);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$7, 24, 62, 1166);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$7, 26, 6, 1361);
    			add_location(br0, file$7, 28, 6, 1480);
    			add_location(br1, file$7, 28, 12, 1486);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$7, 29, 47, 1541);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$7, 31, 6, 1787);
    			add_location(div1, file$7, 22, 4, 935);
    			attr_dev(div2, "class", "mdc-typography--body1 hidden right-align flex-column-2 svelte-lrh810");
    			attr_dev(div2, "id", "content-minacu1");
    			add_location(div2, file$7, 21, 2, 840);
    			attr_dev(div3, "class", "content svelte-lrh810");
    			add_location(div3, file$7, 12, 0, 529);
    			add_location(br2, file$7, 44, 145, 2451);
    			attr_dev(span4, "class", "highlight");
    			add_location(span4, file$7, 45, 40, 2499);
    			attr_dev(span5, "class", "highlight");
    			add_location(span5, file$7, 47, 81, 2734);
    			attr_dev(span6, "class", "italic");
    			add_location(span6, file$7, 47, 6, 2659);
    			add_location(br3, file$7, 48, 6, 2819);
    			add_location(br4, file$7, 48, 12, 2825);
    			attr_dev(span7, "class", "italic");
    			add_location(span7, file$7, 50, 6, 2939);
    			attr_dev(span8, "class", "highlight");
    			add_location(span8, file$7, 51, 76, 3129);
    			attr_dev(span9, "class", "italic");
    			add_location(span9, file$7, 51, 6, 3059);
    			add_location(div4, file$7, 43, 4, 2299);
    			attr_dev(div5, "class", "mdc-typography--body1 hidden left-align flex-column-2 svelte-lrh810");
    			attr_dev(div5, "id", "content-minacu2");
    			add_location(div5, file$7, 42, 2, 2205);
    			attr_dev(div6, "class", "content svelte-lrh810");
    			add_location(div6, file$7, 41, 0, 2180);
    			attr_dev(div7, "class", "flex-row-4");
    			set_style(div7, "margin-top", "4vw");
    			add_location(div7, file$7, 68, 0, 3892);
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
    			insert_dev(target, t32, anchor);
    			insert_dev(target, div7, anchor);
    			mount_component(dialogcard, div7, null);
    			append_dev(div7, t33);
    			mount_component(dialog, div7, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const dialog_changes = {};

    			if (dirty & /*$$scope*/ 4) {
    				dialog_changes.$$scope = { dirty, ctx };
    			}

    			dialog.$set(dialog_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(contentcard0.$$.fragment, local);
    			transition_in(custombutton0.$$.fragment, local);
    			transition_in(custombutton1.$$.fragment, local);
    			transition_in(contentcard1.$$.fragment, local);
    			transition_in(dialogcard.$$.fragment, local);
    			transition_in(dialog.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(contentcard0.$$.fragment, local);
    			transition_out(custombutton0.$$.fragment, local);
    			transition_out(custombutton1.$$.fragment, local);
    			transition_out(contentcard1.$$.fragment, local);
    			transition_out(dialogcard.$$.fragment, local);
    			transition_out(dialog.$$.fragment, local);
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
    			if (detaching) detach_dev(t32);
    			if (detaching) detach_dev(div7);
    			destroy_component(dialogcard);
    			destroy_component(dialog);
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
    	var dialog1 = false, dialog2 = false;
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Cards> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		CustomButton,
    		ContentCard,
    		DialogCard,
    		Dialog,
    		Title,
    		Content,
    		Actions,
    		Button: Button_1,
    		Label,
    		dialog1,
    		dialog2
    	});

    	$$self.$inject_state = $$props => {
    		if ('dialog1' in $$props) dialog1 = $$props.dialog1;
    		if ('dialog2' in $$props) dialog2 = $$props.dialog2;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

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
    	let span5;
    	let t18;
    	let br2;
    	let br3;
    	let t19;
    	let span6;
    	let t21;
    	let span7;
    	let t23;
    	let br4;
    	let br5;
    	let t24;
    	let span8;
    	let t26;
    	let span9;
    	let t28;
    	let t29;
    	let contentcard1;
    	let t30;
    	let div9;
    	let contentcard2;
    	let t31;
    	let div8;
    	let div7;
    	let t32;
    	let span10;
    	let t34;
    	let br6;
    	let br7;
    	let t35;
    	let span11;
    	let t37;
    	let t38;
    	let custombutton1;
    	let t39;
    	let div12;
    	let div11;
    	let div10;
    	let span12;
    	let t41;
    	let br8;
    	let br9;
    	let t42;
    	let span13;
    	let t44;
    	let br10;
    	let t45;
    	let span14;
    	let t47;
    	let br11;
    	let br12;
    	let t48;
    	let span17;
    	let t49;
    	let span15;
    	let t51;
    	let span16;
    	let t53;
    	let t54;
    	let t55;
    	let custombutton2;
    	let t56;
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
    			t3 = text("Attaccato per decenni dai difensori della salute, l'ostinatamente\r\n      ");
    			span0 = element("span");
    			span0.textContent = "provocatoria";
    			t5 = text(" azienda russa produttrice di amianto, trova \r\n      nell'ex presidente statunitense Donald Trump, la figura perfetta per una campagna volta a\r\n      ");
    			span1 = element("span");
    			span1.textContent = "riabilitare";
    			t7 = text(" l'immagine profondamente macchiata del proprio prodotto.\r\n      ");
    			br0 = element("br");
    			br1 = element("br");
    			t8 = text("\r\n      Nel 2018 la società Russa ha messo in circolazione pallet adornati con un sigillo raffigurante la faccia di Trump e recitante la seguente\r\n      frase ");
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
    			t16 = text(" ha liquidato come ");
    			span5 = element("span");
    			span5.textContent = "\"non corrispondente alla realtà\"";
    			t18 = text(" uno studio scientifico del 2016 che mostrava tassi\r\n      elevati di cancro ai polmoni nei pressi della miniera.\r\n      ");
    			br2 = element("br");
    			br3 = element("br");
    			t19 = text("\r\n      Lo studio, una revisione comparativa dei ");
    			span6 = element("span");
    			span6.textContent = "tassi di mortalità";
    			t21 = text(" ad Asbest e nella regione circostante di Sverdlovsk, ha\r\n      rilevato che \"i tassi di mortalità per tumori del polmone, dello stomaco e del colon erano statisticamente e significativamente\r\n      ");
    			span7 = element("span");
    			span7.textContent = "più alti";
    			t23 = text("\r\n      nella città di Asbest\".\r\n      ");
    			br4 = element("br");
    			br5 = element("br");
    			t24 = text("\r\n      L'incidenza del ");
    			span8 = element("span");
    			span8.textContent = "mesotelioma";
    			t26 = text(", una malattia polmonare ampiamente attribuita all'amianto in Occidente,\r\n      ");
    			span9 = element("span");
    			span9.textContent = "non è stata studiata";
    			t28 = text(" a sufficienza dalla Russia impedendone il corretto monitoraggio sanitario.");
    			t29 = space();
    			create_component(contentcard1.$$.fragment);
    			t30 = space();
    			div9 = element("div");
    			create_component(contentcard2.$$.fragment);
    			t31 = space();
    			div8 = element("div");
    			div7 = element("div");
    			t32 = text("\"Sono un pensionato di 88 anni che ha trascorso decenni a lavorare nella fabbrica di amianto. La mia stessa età avanzata e il mantenimento di una buona\r\n      salute sono la prova che tutta l'");
    			span10 = element("span");
    			span10.textContent = "isteria sull'amianto";
    			t34 = text(" non poteva essere vera.\r\n      ");
    			br6 = element("br");
    			br7 = element("br");
    			t35 = text("\r\n      Mentre lavoravo bevevo una ");
    			span11 = element("span");
    			span11.textContent = "bottiglia di latte";
    			t37 = text(" al giorno, l'azienda le forniva gratuitamente per aiutare i lavoratori a difendersi\r\n      dalle malattie. Tutto è pericoloso in una certa misura. Il cento per cento di certezza che qualcosa non sia dannoso non puó esistere\".");
    			t38 = space();
    			create_component(custombutton1.$$.fragment);
    			t39 = space();
    			div12 = element("div");
    			div11 = element("div");
    			div10 = element("div");
    			span12 = element("span");
    			span12.textContent = "Valentin K. Zemskov";
    			t41 = text(", 82 anni, ha lavorato nella miniera per 40 anni e ha sviluppato l'asbestosi, causata dall’inalazione\r\n      delle fibre di amianto.\r\n      ");
    			br8 = element("br");
    			br9 = element("br");
    			t42 = space();
    			span13 = element("span");
    			span13.textContent = "\"C'era così tanta polvere che non potevi vedere un uomo in piedi accanto a te\"";
    			t44 = text(", dice ricordando gli anni di lavoro.");
    			br10 = element("br");
    			t45 = text("\r\n      Per la disabilità, la fabbrica aggiunge ");
    			span14 = element("span");
    			span14.textContent = "4.500 rubli";
    			t47 = text(" al suo assegno mensile per la pensione, una cifra ridicola sufficiente\r\n      a coprire solo pochi pasti.\r\n      ");
    			br11 = element("br");
    			br12 = element("br");
    			t48 = text("\r\n      Tuttavia, è convinto che la città non abbia altra scelta.\r\n      ");
    			span17 = element("span");
    			t49 = text("\"Se non avessimo la fabbrica, ");
    			span15 = element("span");
    			span15.textContent = "come vivremmo?";
    			t51 = text("\r\n        Dobbiamo continuare a tenerla aperta in modo da avere ");
    			span16 = element("span");
    			span16.textContent = "posti di lavoro";
    			t53 = text(" per tutti\"");
    			t54 = text(", afferma senza fiato mentre parla nel cortile di una casa di riposo.");
    			t55 = space();
    			create_component(custombutton2.$$.fragment);
    			t56 = space();
    			create_component(contentcard3.$$.fragment);
    			attr_dev(div0, "class", "mdc-typography--headline3 uppercase");
    			set_style(div0, "margin-top", "14vw");
    			add_location(div0, file$4, 5, 0, 161);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$4, 18, 6, 826);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$4, 20, 6, 1019);
    			add_location(br0, file$4, 21, 6, 1126);
    			add_location(br1, file$4, 21, 12, 1132);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$4, 23, 47, 1332);
    			attr_dev(span3, "class", "italic");
    			add_location(span3, file$4, 23, 12, 1297);
    			add_location(div1, file$4, 16, 4, 740);
    			attr_dev(div2, "class", "mdc-typography--body1 hidden right-align flex-column-2");
    			attr_dev(div2, "id", "content-asbest1");
    			add_location(div2, file$4, 15, 2, 645);
    			attr_dev(div3, "class", "flex-row-4");
    			set_style(div3, "margin-top", "3vw");
    			add_location(div3, file$4, 6, 0, 288);
    			attr_dev(span4, "class", "highlight");
    			add_location(span4, file$4, 36, 16, 1886);
    			attr_dev(span5, "class", "italic");
    			add_location(span5, file$4, 36, 77, 1947);
    			add_location(br2, file$4, 38, 6, 2128);
    			add_location(br3, file$4, 38, 12, 2134);
    			attr_dev(span6, "class", "highlight");
    			add_location(span6, file$4, 39, 47, 2189);
    			attr_dev(span7, "class", "highlight");
    			add_location(span7, file$4, 41, 6, 2437);
    			add_location(br4, file$4, 43, 6, 2515);
    			add_location(br5, file$4, 43, 12, 2521);
    			attr_dev(span8, "class", "highlight");
    			add_location(span8, file$4, 44, 22, 2551);
    			attr_dev(span9, "class", "highlight");
    			add_location(span9, file$4, 45, 6, 2673);
    			add_location(div4, file$4, 35, 4, 1863);
    			attr_dev(div5, "class", "mdc-typography--body1 hidden left-align flex-column-2");
    			attr_dev(div5, "id", "content-asbest2");
    			add_location(div5, file$4, 34, 2, 1769);
    			attr_dev(div6, "class", "flex-row-4");
    			set_style(div6, "margin-top", "3vw");
    			add_location(div6, file$4, 33, 0, 1716);
    			attr_dev(span10, "class", "highlight");
    			add_location(span10, file$4, 70, 39, 3717);
    			add_location(br6, file$4, 71, 6, 3800);
    			add_location(br7, file$4, 71, 12, 3806);
    			attr_dev(span11, "class", "highlight");
    			add_location(span11, file$4, 72, 33, 3847);
    			add_location(div7, file$4, 68, 4, 3512);
    			attr_dev(div8, "class", "mdc-typography--body1 hidden right-align flex-column-2 italic");
    			attr_dev(div8, "id", "content-asbest3");
    			add_location(div8, file$4, 67, 2, 3410);
    			attr_dev(div9, "class", "flex-row-4");
    			set_style(div9, "margin-top", "3vw");
    			add_location(div9, file$4, 58, 0, 3101);
    			attr_dev(span12, "class", "highlight");
    			add_location(span12, file$4, 82, 6, 4475);
    			add_location(br8, file$4, 84, 6, 4665);
    			add_location(br9, file$4, 84, 12, 4671);
    			attr_dev(span13, "class", "italic");
    			add_location(span13, file$4, 85, 6, 4685);
    			add_location(br10, file$4, 85, 149, 4828);
    			attr_dev(span14, "class", "highlight");
    			add_location(span14, file$4, 86, 46, 4882);
    			add_location(br11, file$4, 88, 6, 5038);
    			add_location(br12, file$4, 88, 12, 5044);
    			attr_dev(span15, "class", "highlight");
    			add_location(span15, file$4, 91, 39, 5184);
    			attr_dev(span16, "class", "highlight");
    			add_location(span16, file$4, 92, 62, 5293);
    			attr_dev(span17, "class", "italic");
    			add_location(span17, file$4, 90, 6, 5123);
    			add_location(div10, file$4, 81, 4, 4462);
    			attr_dev(div11, "class", "mdc-typography--body1 hidden left-align flex-column-2");
    			attr_dev(div11, "id", "content-asbest4");
    			add_location(div11, file$4, 80, 2, 4368);
    			attr_dev(div12, "class", "flex-row-4");
    			set_style(div12, "margin-top", "3vw");
    			add_location(div12, file$4, 79, 0, 4315);
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
    			append_dev(div4, span5);
    			append_dev(div4, t18);
    			append_dev(div4, br2);
    			append_dev(div4, br3);
    			append_dev(div4, t19);
    			append_dev(div4, span6);
    			append_dev(div4, t21);
    			append_dev(div4, span7);
    			append_dev(div4, t23);
    			append_dev(div4, br4);
    			append_dev(div4, br5);
    			append_dev(div4, t24);
    			append_dev(div4, span8);
    			append_dev(div4, t26);
    			append_dev(div4, span9);
    			append_dev(div4, t28);
    			append_dev(div6, t29);
    			mount_component(contentcard1, div6, null);
    			insert_dev(target, t30, anchor);
    			insert_dev(target, div9, anchor);
    			mount_component(contentcard2, div9, null);
    			append_dev(div9, t31);
    			append_dev(div9, div8);
    			append_dev(div8, div7);
    			append_dev(div7, t32);
    			append_dev(div7, span10);
    			append_dev(div7, t34);
    			append_dev(div7, br6);
    			append_dev(div7, br7);
    			append_dev(div7, t35);
    			append_dev(div7, span11);
    			append_dev(div7, t37);
    			append_dev(div8, t38);
    			mount_component(custombutton1, div8, null);
    			insert_dev(target, t39, anchor);
    			insert_dev(target, div12, anchor);
    			append_dev(div12, div11);
    			append_dev(div11, div10);
    			append_dev(div10, span12);
    			append_dev(div10, t41);
    			append_dev(div10, br8);
    			append_dev(div10, br9);
    			append_dev(div10, t42);
    			append_dev(div10, span13);
    			append_dev(div10, t44);
    			append_dev(div10, br10);
    			append_dev(div10, t45);
    			append_dev(div10, span14);
    			append_dev(div10, t47);
    			append_dev(div10, br11);
    			append_dev(div10, br12);
    			append_dev(div10, t48);
    			append_dev(div10, span17);
    			append_dev(span17, t49);
    			append_dev(span17, span15);
    			append_dev(span17, t51);
    			append_dev(span17, span16);
    			append_dev(span17, t53);
    			append_dev(div10, t54);
    			append_dev(div11, t55);
    			mount_component(custombutton2, div11, null);
    			append_dev(div12, t56);
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
    			if (detaching) detach_dev(t30);
    			if (detaching) detach_dev(div9);
    			destroy_component(contentcard2);
    			destroy_component(custombutton1);
    			if (detaching) detach_dev(t39);
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
    			t29 = text(" e, pertanto, è\r\n    importante conoscere dove possono essere trovate, soprattutto in tema di gestione ed utilizzo delle terre e rocce da scavo.\r\n    ");
    			br6 = element("br");
    			br7 = element("br");
    			t30 = text("\r\n    La ");
    			span9 = element("span");
    			span9.textContent = "cartografia";
    			t32 = text(" sotto riportata raffigura i territori in cui, in relazione alle rocce riconosciute in affioramento o\r\n    subaffioramento, potrebbero rinvenirsi concentrazioni di ");
    			span10 = element("span");
    			span10.textContent = "minerali asbestiformi";
    			t34 = text(" con alte probabilità.\r\n    ");
    			br8 = element("br");
    			br9 = element("br");
    			t35 = space();
    			create_component(custombutton1.$$.fragment);
    			t36 = space();
    			div8 = element("div");
    			img = element("img");
    			t37 = space();
    			div7 = element("div");
    			div7.textContent = "Mappa della presenza di Pietre Verdi in Liguria, con evidenza sul territorio protetto del Parco del Beigua";
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
    			add_location(br6, file$2, 30, 4, 2170);
    			add_location(br7, file$2, 30, 10, 2176);
    			attr_dev(span9, "class", "highlight");
    			add_location(span9, file$2, 31, 7, 2191);
    			attr_dev(span10, "class", "highlight");
    			add_location(span10, file$2, 32, 61, 2397);
    			add_location(br8, file$2, 33, 4, 2477);
    			add_location(br9, file$2, 33, 10, 2483);
    			attr_dev(div5, "class", "mdc-typography--body1");
    			add_location(div5, file$2, 26, 2, 1703);
    			attr_dev(div6, "class", "right svelte-asx7jm");
    			add_location(div6, file$2, 24, 0, 1587);
    			if (!src_url_equal(img.src, img_src_value = "img/beigua-mappa.png")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Mappa della presenza di Pietre Verdi in Liguria, con evidenza sul territorio protetto del parco del Beigua");
    			attr_dev(img, "class", "svelte-asx7jm");
    			add_location(img, file$2, 43, 2, 2769);
    			attr_dev(div7, "class", "mdc-typography--body1");
    			set_style(div7, "margin-block", "1vw");
    			add_location(div7, file$2, 44, 2, 2920);
    			attr_dev(div8, "class", "center svelte-asx7jm");
    			add_location(div8, file$2, 42, 0, 2745);
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
    	let span5;
    	let t19;
    	let br2;
    	let br3;
    	let t20;
    	let span6;
    	let t22;
    	let span7;
    	let t24;
    	let br4;
    	let br5;
    	let t25;
    	let span8;
    	let t27;
    	let span10;
    	let t28;
    	let span9;
    	let t30;
    	let t31;
    	let t32;
    	let custombutton1;
    	let t33;
    	let contentcard1;
    	let t34;
    	let div8;
    	let div7;
    	let t36;
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
    			t5 = text(", sepolto in corrispondenza\r\n      dei Monti Antenna e Tariné. Sono stimate circa 9 milioni di tonnellate di biossido di Titanio, sottoforma di rutilo. Nel 1976 il ministero dell’Industria ha rilasciato alla\r\n      Mineraria Italiana Srl una concessione ventennale sul territorio, ceduta poi alla Compagnia Europea per il Titanio.\r\n      ");
    			br0 = element("br");
    			br1 = element("br");
    			t6 = text("\r\n      Secondo uno studio dell’Università di Genova degli anni '90, per sfruttare questo giacimento e ricavare solo il 6% di rutilo, si potrebbe arrivare a smuovere\r\n      circa\r\n      ");
    			span1 = element("span");
    			span1.textContent = "200 milioni";
    			t8 = text(" di metri cubi di terra, di cui le rocce amiantifere compongono tra il ");
    			span2 = element("span");
    			span2.textContent = "10%";
    			t10 = text(" e il\r\n      ");
    			span3 = element("span");
    			span3.textContent = "15%";
    			t12 = text(": una tale quantità equivale a una movimentazione pari a 30 aeroporti di Genova.");
    			t13 = space();
    			create_component(custombutton0.$$.fragment);
    			t14 = space();
    			div6 = element("div");
    			div5 = element("div");
    			div4 = element("div");
    			t15 = text("È stata depositata il ");
    			span4 = element("span");
    			span4.textContent = "21 maggio 2022";
    			t17 = text(" la\r\n      \"sentenza del Tribunale Amministrativo Regionale della Liguria che di fatto conferma il ");
    			span5 = element("span");
    			span5.textContent = "divieto";
    			t19 = text(" di effettuare ricerche\r\n      minerarie nell'area del Monte Tariné\".\r\n      ");
    			br2 = element("br");
    			br3 = element("br");
    			t20 = text("\r\n      L'associazione di ");
    			span6 = element("span");
    			span6.textContent = "Legambiente Liguria";
    			t22 = text(" esprime\r\n      ");
    			span7 = element("span");
    			span7.textContent = "\"soddisfazione in merito alla sentenza del TAR che rappresenta la pietra tombale su qualsiasi ipotesi di sfruttamento minerario del comprensorio del\r\n        Beigua\"";
    			t24 = text(".\r\n      ");
    			br4 = element("br");
    			br5 = element("br");
    			t25 = text("\r\n      L'assessore regionale all'Urbanistica e alle attività estrattive ");
    			span8 = element("span");
    			span8.textContent = "Marco Scajola";
    			t27 = text(" afferma che\r\n      ");
    			span10 = element("span");
    			t28 = text("\"La sentenza del Tar va nella direzione della ");
    			span9 = element("span");
    			span9.textContent = "tutela";
    			t30 = text(" del territorio voluta dalla Giunta regionale, da sempre contraria a\r\n        qualsiasi attività estrattiva all'interno dell'area del Parco\"");
    			t31 = text(".");
    			t32 = space();
    			create_component(custombutton1.$$.fragment);
    			t33 = space();
    			create_component(contentcard1.$$.fragment);
    			t34 = space();
    			div8 = element("div");
    			div7 = element("div");
    			div7.textContent = "E noi, vogliamo dare vita a questo inferno?";
    			t36 = space();
    			img = element("img");
    			attr_dev(div0, "class", "mdc-typography--headline3 uppercase");
    			set_style(div0, "margin-top", "15vw");
    			add_location(div0, file$1, 5, 0, 161);
    			attr_dev(span0, "class", "highlight");
    			add_location(span0, file$1, 18, 93, 815);
    			add_location(br0, file$1, 21, 6, 1191);
    			add_location(br1, file$1, 21, 12, 1197);
    			attr_dev(span1, "class", "highlight");
    			add_location(span1, file$1, 24, 6, 1389);
    			attr_dev(span2, "class", "highlight");
    			add_location(span2, file$1, 24, 119, 1502);
    			attr_dev(span3, "class", "highlight");
    			add_location(span3, file$1, 25, 6, 1549);
    			add_location(div1, file$1, 17, 4, 715);
    			attr_dev(div2, "class", "mdc-typography--body1 hidden right-align flex-column-2");
    			attr_dev(div2, "id", "content-beigua1");
    			add_location(div2, file$1, 16, 2, 620);
    			attr_dev(div3, "class", "flex-row-4");
    			set_style(div3, "margin-top", "4vw");
    			add_location(div3, file$1, 6, 0, 280);
    			attr_dev(span4, "class", "highlight");
    			add_location(span4, file$1, 38, 28, 2094);
    			attr_dev(span5, "class", "highlight");
    			add_location(span5, file$1, 39, 94, 2238);
    			add_location(br2, file$1, 41, 6, 2353);
    			add_location(br3, file$1, 41, 12, 2359);
    			attr_dev(span6, "class", "highlight");
    			add_location(span6, file$1, 42, 24, 2391);
    			attr_dev(span7, "class", "italic");
    			add_location(span7, file$1, 43, 6, 2457);
    			add_location(br4, file$1, 47, 6, 2677);
    			add_location(br5, file$1, 47, 12, 2683);
    			attr_dev(span8, "class", "highlight");
    			add_location(span8, file$1, 48, 71, 2762);
    			attr_dev(span9, "class", "highlight");
    			add_location(span9, file$1, 50, 55, 2903);
    			attr_dev(span10, "class", "italic");
    			add_location(span10, file$1, 49, 6, 2826);
    			add_location(div4, file$1, 37, 4, 2059);
    			attr_dev(div5, "class", "mdc-typography--body1 hidden left-align flex-column-2");
    			attr_dev(div5, "id", "content-beigua2");
    			add_location(div5, file$1, 36, 2, 1965);
    			attr_dev(div6, "class", "flex-row-4");
    			set_style(div6, "margin-top", "10vw");
    			add_location(div6, file$1, 35, 0, 1911);
    			attr_dev(div7, "class", "mdc-typography--headline3 uppercase");
    			set_style(div7, "margin-top", "10vw");
    			add_location(div7, file$1, 71, 2, 3665);
    			if (!src_url_equal(img.src, img_src_value = "img/logo.png")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Logo");
    			attr_dev(img, "class", "svelte-1dbqn48");
    			add_location(img, file$1, 72, 2, 3793);
    			add_location(div8, file$1, 70, 0, 3656);
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
    			append_dev(div4, span5);
    			append_dev(div4, t19);
    			append_dev(div4, br2);
    			append_dev(div4, br3);
    			append_dev(div4, t20);
    			append_dev(div4, span6);
    			append_dev(div4, t22);
    			append_dev(div4, span7);
    			append_dev(div4, t24);
    			append_dev(div4, br4);
    			append_dev(div4, br5);
    			append_dev(div4, t25);
    			append_dev(div4, span8);
    			append_dev(div4, t27);
    			append_dev(div4, span10);
    			append_dev(span10, t28);
    			append_dev(span10, span9);
    			append_dev(span10, t30);
    			append_dev(div4, t31);
    			append_dev(div5, t32);
    			mount_component(custombutton1, div5, null);
    			append_dev(div6, t33);
    			mount_component(contentcard1, div6, null);
    			insert_dev(target, t34, anchor);
    			insert_dev(target, div8, anchor);
    			append_dev(div8, div7);
    			append_dev(div8, t36);
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
    			if (detaching) detach_dev(t34);
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
    	let t11;
    	let div8;
    	let img6;
    	let img6_src_value;
    	let t12;
    	let img7;
    	let img7_src_value;
    	let t13;
    	let div7;
    	let minacuintro;
    	let t14;
    	let div10;
    	let img8;
    	let img8_src_value;
    	let t15;
    	let img9;
    	let img9_src_value;
    	let t16;
    	let div9;
    	let minacucards;
    	let current;
    	topappbar = new TopAppBar_1({ $$inline: true });
    	introtitle = new Title$1({ $$inline: true });

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

    	minacuintro = new Intro$2({ $$inline: true });
    	minacucards = new Cards$2({ $$inline: true });

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
    			t11 = space();
    			div8 = element("div");
    			img6 = element("img");
    			t12 = space();
    			img7 = element("img");
    			t13 = space();
    			div7 = element("div");
    			create_component(minacuintro.$$.fragment);
    			t14 = space();
    			div10 = element("div");
    			img8 = element("img");
    			t15 = space();
    			img9 = element("img");
    			t16 = space();
    			div9 = element("div");
    			create_component(minacucards.$$.fragment);
    			attr_dev(img0, "class", "background-lg svelte-1b6k33h");
    			if (!src_url_equal(img0.src, img0_src_value = "img/background-1-1.png")) attr_dev(img0, "src", img0_src_value);
    			attr_dev(img0, "alt", "");
    			add_location(img0, file, 27, 4, 1195);
    			attr_dev(img1, "class", "background-sm svelte-1b6k33h");
    			if (!src_url_equal(img1.src, img1_src_value = "img/background-1-1-sm.png")) attr_dev(img1, "src", img1_src_value);
    			attr_dev(img1, "alt", "");
    			add_location(img1, file, 28, 4, 1266);
    			attr_dev(div0, "id", "content1-1");
    			attr_dev(div0, "class", "svelte-1b6k33h");
    			add_location(div0, file, 29, 4, 1340);
    			attr_dev(div1, "id", "section1-1");
    			attr_dev(div1, "class", "svelte-1b6k33h");
    			add_location(div1, file, 26, 2, 1168);
    			attr_dev(img2, "class", "background-lg svelte-1b6k33h");
    			if (!src_url_equal(img2.src, img2_src_value = "img/background-1-2.png")) attr_dev(img2, "src", img2_src_value);
    			attr_dev(img2, "alt", "");
    			add_location(img2, file, 36, 4, 1505);
    			attr_dev(img3, "class", "background-sm svelte-1b6k33h");
    			if (!src_url_equal(img3.src, img3_src_value = "img/background-1-1-sm.png")) attr_dev(img3, "src", img3_src_value);
    			attr_dev(img3, "alt", "");
    			add_location(img3, file, 37, 4, 1576);
    			attr_dev(div2, "id", "content1-2");
    			attr_dev(div2, "class", "svelte-1b6k33h");
    			add_location(div2, file, 38, 4, 1650);
    			attr_dev(div3, "id", "section1-2");
    			attr_dev(div3, "class", "svelte-1b6k33h");
    			add_location(div3, file, 35, 2, 1478);
    			attr_dev(img4, "class", "background-lg svelte-1b6k33h");
    			if (!src_url_equal(img4.src, img4_src_value = "img/background-1-3.png")) attr_dev(img4, "src", img4_src_value);
    			attr_dev(img4, "alt", "");
    			add_location(img4, file, 44, 4, 1748);
    			attr_dev(img5, "class", "background-sm svelte-1b6k33h");
    			if (!src_url_equal(img5.src, img5_src_value = "img/background-1-1-sm.png")) attr_dev(img5, "src", img5_src_value);
    			attr_dev(img5, "alt", "");
    			add_location(img5, file, 45, 4, 1819);
    			set_style(div4, "margin-top", "2vw");
    			add_location(div4, file, 48, 6, 1944);
    			attr_dev(div5, "id", "content1-3");
    			attr_dev(div5, "class", "svelte-1b6k33h");
    			add_location(div5, file, 46, 4, 1893);
    			attr_dev(div6, "id", "section1-3");
    			attr_dev(div6, "class", "svelte-1b6k33h");
    			add_location(div6, file, 43, 2, 1721);
    			attr_dev(img6, "class", "background-lg svelte-1b6k33h");
    			if (!src_url_equal(img6.src, img6_src_value = "img/background-2-1.png")) attr_dev(img6, "src", img6_src_value);
    			attr_dev(img6, "alt", "");
    			add_location(img6, file, 55, 4, 2112);
    			attr_dev(img7, "class", "background-sm svelte-1b6k33h");
    			if (!src_url_equal(img7.src, img7_src_value = "img/background-1-1-sm.png")) attr_dev(img7, "src", img7_src_value);
    			attr_dev(img7, "alt", "");
    			add_location(img7, file, 56, 4, 2183);
    			attr_dev(div7, "id", "content2-1");
    			attr_dev(div7, "class", "svelte-1b6k33h");
    			add_location(div7, file, 57, 4, 2257);
    			attr_dev(div8, "id", "section2-1");
    			attr_dev(div8, "class", "svelte-1b6k33h");
    			add_location(div8, file, 54, 2, 2085);
    			attr_dev(img8, "class", "background-lg svelte-1b6k33h");
    			if (!src_url_equal(img8.src, img8_src_value = "img/background-2-2.png")) attr_dev(img8, "src", img8_src_value);
    			attr_dev(img8, "alt", "");
    			add_location(img8, file, 63, 4, 2356);
    			attr_dev(img9, "class", "background-sm svelte-1b6k33h");
    			if (!src_url_equal(img9.src, img9_src_value = "img/background-1-1-sm.png")) attr_dev(img9, "src", img9_src_value);
    			attr_dev(img9, "alt", "");
    			add_location(img9, file, 64, 4, 2427);
    			attr_dev(div9, "id", "content2-2");
    			attr_dev(div9, "class", "svelte-1b6k33h");
    			add_location(div9, file, 65, 4, 2501);
    			attr_dev(div10, "id", "section2-2");
    			attr_dev(div10, "class", "svelte-1b6k33h");
    			add_location(div10, file, 62, 2, 2329);
    			attr_dev(main, "class", "svelte-1b6k33h");
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
    			append_dev(main, t11);
    			append_dev(main, div8);
    			append_dev(div8, img6);
    			append_dev(div8, t12);
    			append_dev(div8, img7);
    			append_dev(div8, t13);
    			append_dev(div8, div7);
    			mount_component(minacuintro, div7, null);
    			append_dev(main, t14);
    			append_dev(main, div10);
    			append_dev(div10, img8);
    			append_dev(div10, t15);
    			append_dev(div10, img9);
    			append_dev(div10, t16);
    			append_dev(div10, div9);
    			mount_component(minacucards, div9, null);
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
    			transition_in(minacuintro.$$.fragment, local);
    			transition_in(minacucards.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(topappbar.$$.fragment, local);
    			transition_out(introtitle.$$.fragment, local);
    			transition_out(fab0.$$.fragment, local);
    			transition_out(introintro.$$.fragment, local);
    			transition_out(introcards.$$.fragment, local);
    			transition_out(fab1.$$.fragment, local);
    			transition_out(minacuintro.$$.fragment, local);
    			transition_out(minacucards.$$.fragment, local);
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
    			destroy_component(minacuintro);
    			destroy_component(minacucards);
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
    		IntroTitle: Title$1,
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
//# sourceMappingURL=bundle.js.map
