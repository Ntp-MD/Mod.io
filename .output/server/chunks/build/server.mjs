import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { hasInjectionContext, getCurrentInstance, createApp, provide, onErrorCaptured, onServerPrefetch, unref, createVNode, resolveDynamicComponent, shallowReactive, reactive, effectScope, inject, defineAsyncComponent, mergeProps, getCurrentScope, toRef, ref, computed, defineComponent, h, isReadonly, useSSRContext, isRef, isShallow, isReactive, toRaw } from 'vue';
import { p as parseURL, l as encodePath, m as decodePath, n as hasProtocol, o as isScriptProtocol, k as joinURL, w as withQuery, q as sanitizeStatusCode, r as getContext, $ as $fetch, v as createHooks, h as createError$1, x as isEqual, y as stringifyParsedURL, z as stringifyQuery, A as parseQuery, B as defu } from '../_/nitro.mjs';
import { b as baseURL } from '../routes/renderer.mjs';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode, ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.21.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin) {
    const unresolvedPluginsForThisPlugin = plugin.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin).then(async () => {
        if (plugin._name) {
          resolvedPlugins.add(plugin._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin._name)) {
              dependsOn.delete(plugin._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin);
  }
  for (const plugin of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  const _name = plugin._name || plugin.name;
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const PageRouteSymbol = /* @__PURE__ */ Symbol("route");
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext["~renderResponse"] = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  const encodedTo = typeof to === "string" ? encodeRoutePath(to) : to;
  return options?.replace ? router.replace(encodedTo) : router.push(encodedTo);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
function encodeRoutePath(url) {
  const parsed = parseURL(url);
  return encodePath(decodePath(parsed.pathname)) + parsed.search + parsed.hash;
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const error2 = /* @__PURE__ */ useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  if (typeof error !== "string" && error.statusText) {
    error.message ??= error.statusText;
  }
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  Object.defineProperty(nuxtError, "status", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusCode,
    configurable: true
  });
  Object.defineProperty(nuxtError, "statusText", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusMessage,
    configurable: true
  });
  return nuxtError;
};
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
const matcher = (m, p) => {
  return [];
};
const _routeRulesMatcher = (path) => defu({}, ...matcher().map((r) => r.data).reverse());
const routeRulesMatcher = _routeRulesMatcher;
function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  try {
    return routeRulesMatcher(path);
  } catch (e) {
    console.error("[nuxt] Error matching route rules.", e);
    return {};
  }
}
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {
  {
    return;
  }
});
const globalMiddleware = [
  manifest_45route_45rule
];
function getRouteFromPath(fullPath) {
  const route = fullPath && typeof fullPath === "object" ? fullPath : {};
  if (typeof fullPath === "object") {
    fullPath = stringifyParsedURL({
      pathname: fullPath.path || "",
      search: stringifyQuery(fullPath.query || {}),
      hash: fullPath.hash || ""
    });
  }
  const url = new URL(fullPath.toString(), "http://localhost");
  return {
    path: url.pathname,
    fullPath,
    query: parseQuery(url.search),
    hash: url.hash,
    // stub properties for compat with vue-router
    params: route.params || {},
    name: void 0,
    matched: route.matched || [],
    redirectedFrom: void 0,
    meta: route.meta || {},
    href: fullPath
  };
}
const router_DclsWNDeVV7SyG4lslgLnjbQUK1ws8wgf2FHaAbo7Cw = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  setup(nuxtApp) {
    const initialURL = nuxtApp.ssrContext.url;
    const routes = [];
    const hooks = {
      "navigate:before": [],
      "resolve:before": [],
      "navigate:after": [],
      "error": []
    };
    const registerHook = (hook, guard) => {
      hooks[hook].push(guard);
      return () => hooks[hook].splice(hooks[hook].indexOf(guard), 1);
    };
    (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const route = reactive(getRouteFromPath(initialURL));
    async function handleNavigation(url, replace) {
      try {
        const to = getRouteFromPath(url);
        for (const middleware of hooks["navigate:before"]) {
          const result = await middleware(to, route);
          if (result === false || result instanceof Error) {
            return;
          }
          if (typeof result === "string" && result.length) {
            return await handleNavigation(result, true);
          }
        }
        for (const handler of hooks["resolve:before"]) {
          await handler(to, route);
        }
        Object.assign(route, to);
        if (false) ;
        for (const middleware of hooks["navigate:after"]) {
          await middleware(to, route);
        }
      } catch (err) {
        for (const handler of hooks.error) {
          await handler(err);
        }
      }
    }
    const currentRoute = computed(() => route);
    const router = {
      currentRoute,
      isReady: () => Promise.resolve(),
      // These options provide a similar API to vue-router but have no effect
      options: {},
      install: () => Promise.resolve(),
      // Navigation
      push: (url) => handleNavigation(url),
      replace: (url) => handleNavigation(url),
      back: () => (void 0).history.go(-1),
      go: (delta) => (void 0).history.go(delta),
      forward: () => (void 0).history.go(1),
      // Guards
      beforeResolve: (guard) => registerHook("resolve:before", guard),
      beforeEach: (guard) => registerHook("navigate:before", guard),
      afterEach: (guard) => registerHook("navigate:after", guard),
      onError: (handler) => registerHook("error", handler),
      // Routes
      resolve: getRouteFromPath,
      addRoute: (parentName, route2) => {
        routes.push(route2);
      },
      getRoutes: () => routes,
      hasRoute: (name) => routes.some((route2) => route2.name === name),
      removeRoute: (name) => {
        const index = routes.findIndex((route2) => route2.name === name);
        if (index !== -1) {
          routes.splice(index, 1);
        }
      }
    };
    nuxtApp.vueApp.component("RouterLink", defineComponent({
      functional: true,
      props: {
        to: {
          type: String,
          required: true
        },
        custom: Boolean,
        replace: Boolean,
        // Not implemented
        activeClass: String,
        exactActiveClass: String,
        ariaCurrentValue: String
      },
      setup: (props, { slots }) => {
        const navigate = () => handleNavigation(props.to, props.replace);
        return () => {
          const route2 = router.resolve(props.to);
          return props.custom ? slots.default?.({ href: props.to, navigate, route: route2 }) : h("a", { href: props.to, onClick: (e) => {
            e.preventDefault();
            return navigate();
          } }, slots);
        };
      }
    }));
    nuxtApp._route = route;
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    const initialLayout = nuxtApp.payload.state._layout;
    const initialLayoutProps = nuxtApp.payload.state._layoutProps;
    nuxtApp.hooks.hookOnce("app:created", async () => {
      router.beforeEach(async (to, from) => {
        to.meta = reactive(to.meta || {});
        if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
          to.meta.layout = initialLayout;
          to.meta.layoutProps = initialLayoutProps;
        }
        nuxtApp._processingMiddleware = true;
        if (!nuxtApp.ssrContext?.islandContext) {
          const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
          const routeRules = getRouteRules({ path: to.path });
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              const guard = nuxtApp._middleware.named[key];
              if (!guard) {
                continue;
              }
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(guard);
              } else {
                middlewareEntries.delete(guard);
              }
            }
          }
          for (const middleware of middlewareEntries) {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            {
              if (result === false || result instanceof Error) {
                const error = result || createError$1({
                  status: 404,
                  statusText: `Page Not Found: ${initialURL}`,
                  data: {
                    path: initialURL
                  }
                });
                delete nuxtApp._processingMiddleware;
                return nuxtApp.runWithContext(() => showError(error));
              }
            }
            if (result === true) {
              continue;
            }
            if (result || result === false) {
              return result;
            }
          }
        }
      });
      router.afterEach(() => {
        delete nuxtApp._processingMiddleware;
      });
      await router.replace(initialURL);
      if (!isEqual(route.fullPath, initialURL)) {
        await nuxtApp.runWithContext(() => navigateTo(route.fullPath));
      }
    });
    return {
      provide: {
        route,
        router
      }
    };
  }
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext["~payloadReducers"][name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  router_DclsWNDeVV7SyG4lslgLnjbQUK1ws8wgf2FHaAbo7Cw,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4
];
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$a = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    const navLinks = [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Documentation", href: "#docs" },
      { label: "GitHub", href: "#github" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header-container",
        role: "banner"
      }, _attrs))} data-v-7842d158><a href="/" class="nav-logo" aria-label="MOD.io - Home" data-v-7842d158><span class="logo-mark hover-rotate" aria-hidden="true" data-v-7842d158>M</span><span class="logo-name" data-v-7842d158>MOD<span class="logo-dot" data-v-7842d158>.io</span></span></a><nav class="${ssrRenderClass([{ "nav-open": isMenuOpen.value }, "nav"])}" aria-label="Main navigation"${ssrRenderAttr("aria-hidden", !isMenuOpen.value ? "true" : "false")} data-v-7842d158><div class="nav-overlay" aria-hidden="true" data-v-7842d158></div><div class="nav-drawer" data-v-7842d158><div class="nav-drawer-header" data-v-7842d158><span class="nav-drawer-logo" data-v-7842d158>MOD.io</span><button class="nav-close hover-scale" aria-label="Close navigation" data-v-7842d158>✕</button></div><div class="nav-menu" role="list" data-v-7842d158><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(`<div class="nav-item" data-v-7842d158><a${ssrRenderAttr("href", link.href)} class="nav-link" data-v-7842d158>${ssrInterpolate(link.label)}</a></div>`);
      });
      _push(`<!--]--></div><a href="#get-started" class="btn btn-accent btn-primary nav-cta" data-hover="bounce" data-v-7842d158>🚀 Deploy Free</a></div></nav><div class="header-actions" data-v-7842d158><a href="#get-started" class="btn btn-accent btn-primary header-cta" data-hover="bounce" aria-label="Deploy Now - Get started with MOD.io" data-v-7842d158>🚀 Deploy Now</a><button class="menu-toggle hover-scale"${ssrRenderAttr("aria-expanded", isMenuOpen.value.toString())} aria-label="Toggle navigation menu" aria-controls="main-nav" data-v-7842d158><span class="${ssrRenderClass([{ "menu-icon-open": isMenuOpen.value }, "menu-icon"])}" aria-hidden="true" data-v-7842d158><span class="menu-line" data-v-7842d158></span><span class="menu-line" data-v-7842d158></span><span class="menu-line" data-v-7842d158></span></span></button></div></header>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-7842d158"]]);
const codeExample = `<script src="https://cdn.mod.io/v2/latest.min.js"><\/script>

MOD.init({
  project: 'your-project-id',
  version: '2.0.0',
  edge: 'auto'
});

// Verify delivery
MOD.on('ready', ({ latency, node }) => {
  console.log(\`⚡ \${latency}ms · \${node}\`);
});`;
const _sfc_main$9 = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { number: "100M+", label: "Requests / day" },
      { number: "99.99%", label: "Uptime SLA" },
      { number: "150+", label: "Edge nodes" }
    ];
    const partners = ["Google", "Microsoft", "Amazon", "Meta", "Netflix"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "hero-modern",
        "aria-labelledby": "hero-title"
      }, _attrs))} data-v-f866d9b8><div class="hero-bg" aria-hidden="true" data-v-f866d9b8><div class="gradient-orb orb-1" data-v-f866d9b8></div><div class="gradient-orb orb-2" data-v-f866d9b8></div><div class="gradient-orb orb-3" data-v-f866d9b8></div><div class="grid-pattern" data-v-f866d9b8></div></div><div class="container" data-v-f866d9b8><div class="hero-layout" data-v-f866d9b8><div class="hero-content" data-v-f866d9b8><div class="trust-badge" data-v-f866d9b8><span class="badge-glow" data-v-f866d9b8>⚡ Trusted by developers worldwide</span></div><h1 class="hero-title" id="hero-title" data-v-f866d9b8><span class="title-line" data-v-f866d9b8>Global CDN</span><span class="title-line gradient-text" data-v-f866d9b8>for Modern Apps</span></h1><p class="hero-description" data-v-f866d9b8> Deploy your libraries and assets to 150+ edge locations worldwide. Sub-20ms latency, intelligent caching, and real-time analytics built for scale. </p><div class="cta-group" data-v-f866d9b8><a href="#get-started" class="btn btn-primary hero-btn" data-hover="bounce" data-v-f866d9b8><span class="btn-icon" data-v-f866d9b8>🚀</span><span data-v-f866d9b8>Start Free</span></a><a href="#docs" class="btn btn-secondary hero-btn" data-hover="lift" data-v-f866d9b8><span data-v-f866d9b8>View Documentation</span><span class="btn-arrow" data-v-f866d9b8>→</span></a></div><div class="stats-bar" data-v-f866d9b8><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="stat-item" data-hover="scale" data-v-f866d9b8><span class="stat-number" data-v-f866d9b8>${ssrInterpolate(stat.number)}</span><span class="stat-label" data-v-f866d9b8>${ssrInterpolate(stat.label)}</span></div>`);
      });
      _push(`<!--]--></div><div class="partners" data-v-f866d9b8><span class="partners-label" data-v-f866d9b8>Used by teams at</span><div class="partners-logos" data-v-f866d9b8><!--[-->`);
      ssrRenderList(partners, (partner) => {
        _push(`<span class="partner-logo" data-v-f866d9b8>${ssrInterpolate(partner)}</span>`);
      });
      _push(`<!--]--></div></div></div><div class="hero-visual" data-v-f866d9b8><div class="code-card" data-hover="perspective" data-v-f866d9b8><div class="code-header" data-v-f866d9b8><div class="window-controls" data-v-f866d9b8><span class="control close" data-v-f866d9b8></span><span class="control minimize" data-v-f866d9b8></span><span class="control maximize" data-v-f866d9b8></span></div><span class="window-title" data-v-f866d9b8>mod-setup.js</span><span class="window-status" data-v-f866d9b8><span class="status-indicator" data-v-f866d9b8></span> Live </span></div><div class="code-content" data-v-f866d9b8><pre class="code-block" data-v-f866d9b8><code data-v-f866d9b8>${ssrInterpolate(codeExample)}</code></pre></div><div class="code-footer" data-v-f866d9b8><div class="terminal-line" data-v-f866d9b8><span class="prompt" data-v-f866d9b8>$</span><span class="command" data-v-f866d9b8>mod deploy --production</span></div><div class="terminal-output" data-v-f866d9b8><span class="success-check" data-v-f866d9b8>✓</span><span data-v-f866d9b8>Deployed to 150 edge nodes in 2.3s</span></div></div></div><div class="floating-metrics" data-v-f866d9b8><div class="metric-pill" data-hover="scale" data-v-f866d9b8><span class="metric-icon" data-v-f866d9b8>⚡</span><span class="metric-value" data-v-f866d9b8>12ms</span><span class="metric-label" data-v-f866d9b8>Latency</span></div><div class="metric-pill highlight" data-hover="scale" data-v-f866d9b8><span class="metric-icon" data-v-f866d9b8>🌐</span><span class="metric-value" data-v-f866d9b8>SG-EDGE</span><span class="metric-label" data-v-f866d9b8>Nearest Node</span></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-f866d9b8"]]);
const _sfc_main$8 = {
  __name: "Features",
  __ssrInlineRender: true,
  setup(__props) {
    const mediumFeatures = [
      {
        icon: "🧠",
        title: "Smart Versioning",
        description: "Semantic version management with automatic dependency resolution and safe rollbacks.",
        gradient: "linear-gradient(135deg, #7f2c86 0%, #4a1c4e 100%)"
      },
      {
        icon: "📊",
        title: "Live Analytics",
        description: "Real-time dashboards with usage patterns, geographic distribution, and performance forecasting.",
        gradient: "linear-gradient(135deg, #00d64f 0%, #009e3a 100%)"
      },
      {
        icon: "🔒",
        title: "Zero-Trust Security",
        description: "TLS 1.3, automated threat detection, and integrity verification for every delivery event.",
        gradient: "linear-gradient(135deg, #ea580c 0%, #b34509 100%)"
      },
      {
        icon: "🚀",
        title: "Any Framework",
        description: "Works with Vue, React, Angular, Svelte. Zero-config detection and auto-optimized bundles.",
        gradient: "linear-gradient(135deg, #7f2c86 0%, #ea580c 100%)"
      },
      {
        icon: "🌐",
        title: "Self-Healing Infra",
        description: "AI-driven failover across 150+ edge locations. Predictive scaling ensures zero-downtime.",
        gradient: "linear-gradient(135deg, #00d64f 0%, #7f2c86 100%)"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "features",
        class: "features-modern",
        "aria-labelledby": "features-title"
      }, _attrs))} data-v-21cb8054><div class="container" data-v-21cb8054><header class="section-header" data-v-21cb8054><span class="badge badge-primary" data-v-21cb8054>🚀 Features</span><h2 class="section-title" id="features-title" data-v-21cb8054>Everything you need to scale</h2><p class="section-description" data-v-21cb8054>Built for modern development workflows with zero configuration</p></header><div class="features-bento" role="list" data-v-21cb8054><article class="feature-card feature-large" role="listitem" data-hover="lift" data-v-21cb8054><div class="feature-glow" data-v-21cb8054></div><div class="feature-content" data-v-21cb8054><div class="feature-header" data-v-21cb8054><span class="feature-icon-large" data-v-21cb8054>⚡</span><span class="feature-badge" data-v-21cb8054>Performance</span></div><h3 class="feature-title" data-v-21cb8054>Lightning Fast Delivery</h3><p class="feature-description" data-v-21cb8054> Sub-20ms latency with intelligent edge routing. Your content is served from the nearest of 150+ global nodes, optimized in real-time for maximum speed. </p><div class="feature-metrics" data-v-21cb8054><div class="metric" data-v-21cb8054><span class="metric-value" data-v-21cb8054>20ms</span><span class="metric-desc" data-v-21cb8054>Average latency</span></div><div class="metric" data-v-21cb8054><span class="metric-value" data-v-21cb8054>150+</span><span class="metric-desc" data-v-21cb8054>Edge nodes</span></div></div></div></article><!--[-->`);
      ssrRenderList(mediumFeatures, (feature, index) => {
        _push(`<article class="feature-card feature-medium" role="listitem" data-hover="lift" data-v-21cb8054><div class="feature-icon-wrap" style="${ssrRenderStyle({ background: feature.gradient })}" data-v-21cb8054><span class="feature-icon" data-v-21cb8054>${ssrInterpolate(feature.icon)}</span></div><div class="feature-content" data-v-21cb8054><h3 class="feature-title" data-v-21cb8054>${ssrInterpolate(feature.title)}</h3><p class="feature-description" data-v-21cb8054>${ssrInterpolate(feature.description)}</p></div><div class="feature-arrow" data-v-21cb8054><span data-v-21cb8054>→</span></div></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Features.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-21cb8054"]]);
const _sfc_main$7 = {
  __name: "HowItWorks",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      {
        number: "01",
        icon: "📦",
        title: "Upload & Optimize",
        description: "Drop your library files. MOD.io auto-detects formats, compresses assets, and generates optimized bundles in seconds.",
        detail: ".js · .css · .wasm · .json · images"
      },
      {
        number: "02",
        icon: "🧠",
        title: "Version & Configure",
        description: "Semantic versioning kicks in automatically. Generate CDN embed codes, npm packages, and ES module URLs instantly.",
        detail: "Zero-config · canary · rollback"
      },
      {
        number: "03",
        icon: "🌐",
        title: "Distribute Globally",
        description: "Your files propagate to 150+ edge nodes within seconds. Any framework, any runtime — npm, CDN, or ES modules.",
        detail: "npm · yarn · pnpm · CDN · ESM · UMD"
      },
      {
        number: "04",
        icon: "📊",
        title: "Monitor & Scale",
        description: "Real-time analytics surface usage patterns, latency by region, and anomalies. Auto-scaling handles any traffic spike.",
        detail: "Live dashboard · alerts · auto-scale"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "how-it-works",
        class: "section section-dark",
        "aria-labelledby": "hiw-title"
      }, _attrs))} data-v-70ab2fee><div class="container" data-v-70ab2fee><header class="section-header" data-v-70ab2fee><span class="badge badge-primary" aria-label="Section category" data-v-70ab2fee>🔬 How It Works</span><h2 class="section-title" id="hiw-title" data-v-70ab2fee>Deploy in four steps</h2><p class="section-description" data-v-70ab2fee>From upload to global distribution in under 60 seconds</p></header><div class="steps-list" aria-label="Deployment steps" data-v-70ab2fee><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div class="step-item" data-v-70ab2fee>`);
        if (index < steps.length - 1) {
          _push(`<div class="step-connector" aria-hidden="true" data-v-70ab2fee></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="step-inner" data-v-70ab2fee><div class="step-left" data-v-70ab2fee><div class="step-num-wrap" aria-hidden="true" data-v-70ab2fee><span class="step-num" data-v-70ab2fee>${ssrInterpolate(step.number)}</span></div></div><article class="step-card card" data-v-70ab2fee><div class="step-icon-row" data-v-70ab2fee><span class="step-icon" aria-hidden="true" data-v-70ab2fee>${ssrInterpolate(step.icon)}</span><h3 class="step-title" data-v-70ab2fee>${ssrInterpolate(step.title)}</h3></div><p class="step-description" data-v-70ab2fee>${ssrInterpolate(step.description)}</p><div class="step-tags" aria-label="Supported formats" data-v-70ab2fee><span class="step-tag" data-v-70ab2fee>⚡ ${ssrInterpolate(step.detail)}</span></div></article></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HowItWorks.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-70ab2fee"]]);
const _sfc_main$6 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const testimonials = [
      {
        name: "Sarah Chen",
        role: "Lead Engineer",
        company: "TechCorp Global",
        content: "MOD.io transformed our library distribution. Sub-20ms latency globally and analytics that actually surface actionable data. Night and day vs. our old CDN.",
        avatar: "SC",
        accentClass: "accent-secondary"
      },
      {
        name: "Marcus Johnson",
        role: "Principal Architect",
        company: "StartupHub",
        content: "Version management just works. Smart rollbacks, canary deployments — everything we used to script manually is now handled automatically.",
        avatar: "MJ",
        accentClass: "accent-success"
      },
      {
        name: "Emily Rodriguez",
        role: "VP Engineering",
        company: "CloudScale",
        content: "Self-healing infra means our on-call rotation is quieter. Our users in APAC, EU, and US all report identical performance. Reliability is genuinely unmatched.",
        avatar: "ER",
        accentClass: "accent-warning"
      },
      {
        name: "David Kim",
        role: "CTO",
        company: "InnovateLabs AI",
        content: "The live analytics dashboard gave us visibility we never had. We identified a latency regression in a library update before users even noticed it.",
        avatar: "DK",
        accentClass: "accent-secondary"
      },
      {
        name: "Lisa Thompson",
        role: "Director of Product",
        company: "DevTools Co.",
        content: "Production deployment in under 3 minutes. The DX is phenomenal — zero config, intuitive dashboard, and docs that developers actually enjoy reading.",
        avatar: "LT",
        accentClass: "accent-success"
      },
      {
        name: "James Wilson",
        role: "Enterprise Architect",
        company: "Fortune 500 Inc.",
        content: "Zero-trust security and TLS 1.3 out of the box satisfied our compliance team in one meeting. The audit logs are thorough and export cleanly to our SIEM.",
        avatar: "JW",
        accentClass: "accent-warning"
      }
    ];
    const stats = [
      { number: "50M+", label: "Developers", icon: "👥" },
      { number: "99.99%", label: "Satisfaction", icon: "⭐" },
      { number: "180+", label: "Countries", icon: "🌍" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "testimonials",
        class: "testimonials-modern",
        "aria-labelledby": "testimonials-title"
      }, _attrs))} data-v-8999b9b8><div class="container" data-v-8999b9b8><header class="section-header" data-v-8999b9b8><span class="badge badge-primary" data-v-8999b9b8>💬 Testimonials</span><h2 class="section-title" id="testimonials-title" data-v-8999b9b8>Loved by developers</h2><p class="section-description" data-v-8999b9b8>See what teams are saying about MOD.io</p></header><div class="stats-row" data-v-8999b9b8><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="stat-pill" data-hover="scale" data-v-8999b9b8><span class="stat-icon" data-v-8999b9b8>${ssrInterpolate(stat.icon)}</span><div class="stat-info" data-v-8999b9b8><span class="stat-number" data-v-8999b9b8>${ssrInterpolate(stat.number)}</span><span class="stat-label" data-v-8999b9b8>${ssrInterpolate(stat.label)}</span></div></div>`);
      });
      _push(`<!--]--></div><div class="testimonials-masonry" data-v-8999b9b8><!--[-->`);
      ssrRenderList(testimonials, (testimonial, index) => {
        _push(`<article class="${ssrRenderClass([[testimonial.accentClass, { "card-large": index === 0 || index === 3 }], "testimonial-card-modern"])}" data-hover="lift" data-v-8999b9b8><div class="card-glow" data-v-8999b9b8></div><div class="testimonial-header" data-v-8999b9b8><div class="author-row" data-v-8999b9b8><div class="author-avatar-modern" data-v-8999b9b8>${ssrInterpolate(testimonial.avatar)}</div><div class="author-details" data-v-8999b9b8><span class="author-name" data-v-8999b9b8>${ssrInterpolate(testimonial.name)}</span><span class="author-role" data-v-8999b9b8>${ssrInterpolate(testimonial.role)}</span></div></div><div class="company-badge" data-v-8999b9b8>${ssrInterpolate(testimonial.company)}</div></div><div class="testimonial-rating-modern" data-v-8999b9b8><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(`<span class="star" data-v-8999b9b8>★</span>`);
        });
        _push(`<!--]--></div><blockquote class="testimonial-quote-modern" data-v-8999b9b8><p data-v-8999b9b8>&quot;${ssrInterpolate(testimonial.content)}&quot;</p></blockquote></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonials.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-8999b9b8"]]);
const _sfc_main$5 = {
  __name: "Pricing",
  __ssrInlineRender: true,
  setup(__props) {
    const plans = [
      {
        name: "Starter",
        price: "Free",
        description: "Perfect for side projects and open-source libraries",
        features: ["50 GB bandwidth / month", "Up to 10 libraries", "Global CDN delivery", "Basic analytics", "HTTPS included"],
        highlighted: false,
        cta: "🚀 Deploy Free",
        ctaVariant: "btn-outline"
      },
      {
        name: "Pro",
        price: "$49",
        period: "/mo",
        description: "For professional developers and growing teams",
        features: [
          "500 GB bandwidth / month",
          "Unlimited libraries",
          "Advanced analytics + alerts",
          "Priority support",
          "Custom domains + SSL",
          "API access",
          "Smart version control",
          "Real-time monitoring",
          "Auto-optimization"
        ],
        highlighted: true,
        cta: "⚡ Start Pro",
        ctaVariant: "btn-white"
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "Private edge network and dedicated support for large teams",
        features: [
          "Unlimited bandwidth",
          "Unlimited libraries",
          "Custom analytics SLA",
          "Dedicated support team",
          "Private edge network",
          "Enterprise API suite",
          "SSO + zero-trust",
          "99.99% uptime SLA",
          "Custom contracts"
        ],
        highlighted: false,
        cta: "🎯 Contact Sales",
        ctaVariant: "btn-outline"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "pricing",
        class: "section section-dark pricing-section",
        "aria-labelledby": "pricing-title"
      }, _attrs))} data-v-e3557b8e><div class="container" data-v-e3557b8e><header class="section-header" data-v-e3557b8e><span class="badge badge-primary" aria-label="Section category" data-v-e3557b8e>💎 Pricing</span><h2 class="section-title" id="pricing-title" data-v-e3557b8e>Simple, transparent pricing</h2><p class="section-description" data-v-e3557b8e>Start free. Scale when you need to. No surprises.</p></header><div class="pricing-grid" grid="3,2,2,1,var(--gap-md)" data-v-e3557b8e><!--[-->`);
      ssrRenderList(plans, (plan) => {
        _push(`<article class="${ssrRenderClass([{ "pricing-card--highlighted": plan.highlighted }, "pricing-card card"])}"${ssrRenderAttr("aria-label", `${plan.name} plan`)} data-v-e3557b8e>`);
        if (plan.highlighted) {
          _push(`<div class="pricing-popular" aria-label="Most popular plan" data-v-e3557b8e><span data-v-e3557b8e>Most Popular</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="pricing-header" data-v-e3557b8e><h3 class="pricing-name" data-v-e3557b8e>${ssrInterpolate(plan.name)}</h3><div class="pricing-price" data-v-e3557b8e><span class="price-amount" data-v-e3557b8e>${ssrInterpolate(plan.price)}</span>`);
        if (plan.period) {
          _push(`<span class="price-period" data-v-e3557b8e>${ssrInterpolate(plan.period)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="pricing-desc" data-v-e3557b8e>${ssrInterpolate(plan.description)}</p></div><div class="pricing-features" aria-label="Plan features" data-v-e3557b8e><!--[-->`);
        ssrRenderList(plan.features, (feature) => {
          _push(`<div class="feature-row" data-v-e3557b8e><span class="feature-check" aria-hidden="true" data-v-e3557b8e>✓</span><span class="feature-text" data-v-e3557b8e>${ssrInterpolate(feature)}</span></div>`);
        });
        _push(`<!--]--></div><div class="pricing-action" data-v-e3557b8e><a href="#get-started" class="${ssrRenderClass([plan.ctaVariant, "btn pricing-btn"])}"${ssrRenderAttr("aria-label", `${plan.cta} - ${plan.name} plan`)} data-v-e3557b8e>${ssrInterpolate(plan.cta)}</a></div></article>`);
      });
      _push(`<!--]--></div><footer class="pricing-footer" data-v-e3557b8e><p class="pricing-note" data-v-e3557b8e>All plans include global CDN, SSL, and 99.99% uptime SLA. Zero hidden fees. Cancel anytime.</p><p class="pricing-note" data-v-e3557b8e>Questions? <a href="#contact" class="pricing-link" data-v-e3557b8e>Talk to our team →</a></p></footer></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pricing.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e3557b8e"]]);
const _sfc_main$4 = {
  __name: "CTA",
  __ssrInlineRender: true,
  setup(__props) {
    const benefits = ["50 GB bandwidth — no credit card needed", "Deploy globally in under 60 seconds", "Cancel or upgrade anytime"];
    const stats = [
      { number: "50M+", label: "Developers" },
      { number: "99.99%", label: "Uptime" },
      { number: "150+", label: "Countries" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "get-started",
        class: "cta-modern",
        "aria-labelledby": "cta-title"
      }, _attrs))} data-v-531cca23><div class="cta-bg" aria-hidden="true" data-v-531cca23><div class="gradient-orb orb-1" data-v-531cca23></div><div class="gradient-orb orb-2" data-v-531cca23></div><div class="grid-overlay" data-v-531cca23></div></div><div class="container" data-v-531cca23><div class="cta-content-modern" data-v-531cca23><div class="cta-main" data-v-531cca23><span class="cta-tag" data-v-531cca23>🚀 Get Started</span><h2 class="cta-title-modern" id="cta-title" data-v-531cca23>Ready to deploy at scale?</h2><p class="cta-description-modern" data-v-531cca23> Join millions of developers shipping faster with MOD.io&#39;s intelligent global CDN. Free forever, no credit card required. </p><div class="cta-buttons" data-v-531cca23><a href="#signup" class="btn btn-primary-modern" data-hover="bounce" data-v-531cca23><span data-v-531cca23>Deploy Free Now</span><span class="btn-arrow" data-v-531cca23>→</span></a><a href="#demo" class="btn btn-secondary-modern" data-hover="lift" data-v-531cca23><span data-v-531cca23>Watch Demo</span></a></div><p class="cta-note" data-v-531cca23>Already have an account? <a href="#login" class="login-link" data-v-531cca23>Sign in →</a></p></div><div class="cta-side" data-v-531cca23><div class="stats-card" data-hover="lift" data-v-531cca23><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="stat-block" data-v-531cca23><span class="stat-value" data-v-531cca23>${ssrInterpolate(stat.number)}</span><span class="stat-name" data-v-531cca23>${ssrInterpolate(stat.label)}</span></div>`);
      });
      _push(`<!--]--></div><div class="benefits-card-modern" data-hover="lift" data-v-531cca23><h3 class="benefits-title" data-v-531cca23>Why developers love us</h3><div class="benefits-list" data-v-531cca23><!--[-->`);
      ssrRenderList(benefits, (benefit) => {
        _push(`<div class="benefit-item-modern" data-v-531cca23><span class="benefit-check" data-v-531cca23>✓</span><span class="benefit-text" data-v-531cca23>${ssrInterpolate(benefit)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="trust-section" data-v-531cca23><p class="trust-text" data-v-531cca23>Trusted by engineering teams at</p><div class="trust-logos" data-v-531cca23><span class="trust-logo" data-v-531cca23>Vercel</span><span class="trust-logo" data-v-531cca23>Stripe</span><span class="trust-logo" data-v-531cca23>Linear</span><span class="trust-logo" data-v-531cca23>Notion</span><span class="trust-logo" data-v-531cca23>Figma</span></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CTA.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-531cca23"]]);
const _sfc_main$3 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const navGroups = [
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Documentation", href: "#docs" },
          { label: "API Reference", href: "#api" }
        ]
      },
      {
        heading: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "Blog", href: "#blog" },
          { label: "Careers", href: "#careers" },
          { label: "Contact", href: "#contact" }
        ]
      },
      {
        heading: "Legal",
        links: [
          { label: "Privacy Policy", href: "#privacy" },
          { label: "Terms of Service", href: "#terms" },
          { label: "Cookie Policy", href: "#cookies" }
        ]
      }
    ];
    const socialLinks = [
      { label: "GitHub", href: "#github", icon: "🐙" },
      { label: "Twitter / X", href: "#twitter", icon: "🐦" },
      { label: "Discord", href: "#discord", icon: "🎯" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "section footer",
        role: "contentinfo"
      }, _attrs))} data-v-e1377178><div class="container" data-v-e1377178><div class="footer-main" data-v-e1377178><div class="footer-brand" data-v-e1377178><a href="/" class="brand-logo flex-row-center gap-xs link-reset" aria-label="MOD.io home" data-v-e1377178><span class="brand-mark flex-center" aria-hidden="true" data-v-e1377178>M</span><span class="brand-name" data-v-e1377178>MOD<span class="brand-dot" data-v-e1377178>.io</span></span></a><p class="brand-tagline" data-v-e1377178>Intelligent CDN for developers. Fast, reliable library delivery at global scale.</p><div class="social-row flex-row-center gap-xs" aria-label="Social media links" data-v-e1377178><!--[-->`);
      ssrRenderList(socialLinks, (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} class="social-btn flex-center"${ssrRenderAttr("aria-label", link.label)} data-v-e1377178>${ssrInterpolate(link.icon)}</a>`);
      });
      _push(`<!--]--></div></div><nav class="footer-nav" aria-label="Footer navigation" data-v-e1377178><div class="footer-nav-grid" data-v-e1377178><!--[-->`);
      ssrRenderList(navGroups, (group) => {
        _push(`<div class="footer-col" data-v-e1377178><h3 class="footer-col-heading" data-v-e1377178>${ssrInterpolate(group.heading)}</h3><div class="footer-col-links" role="list" data-v-e1377178><!--[-->`);
        ssrRenderList(group.links, (link) => {
          _push(`<div data-v-e1377178><a${ssrRenderAttr("href", link.href)} class="footer-link link-reset" data-v-e1377178>${ssrInterpolate(link.label)}</a></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></nav></div><div class="footer-bottom" data-v-e1377178><p class="footer-copy" data-v-e1377178>© ${ssrInterpolate(unref(currentYear))} MOD.io. All rights reserved.</p><div class="footer-bottom-links flex-row-center gap-md" data-v-e1377178><a href="#privacy" class="footer-small-link link-reset" data-v-e1377178>Privacy</a><a href="#terms" class="footer-small-link link-reset" data-v-e1377178>Terms</a><a href="#cookies" class="footer-small-link" data-v-e1377178>Cookies</a></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e1377178"]]);
const _sfc_main$2 = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_Hero = __nuxt_component_1;
      const _component_Features = __nuxt_component_2;
      const _component_HowItWorks = __nuxt_component_3;
      const _component_Testimonials = __nuxt_component_4;
      const _component_Pricing = __nuxt_component_5;
      const _component_CTA = __nuxt_component_6;
      const _component_Footer = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_Hero, null, null, _parent));
      _push(ssrRenderComponent(_component_Features, null, null, _parent));
      _push(ssrRenderComponent(_component_HowItWorks, null, null, _parent));
      _push(ssrRenderComponent(_component_Testimonials, null, null, _parent));
      _push(ssrRenderComponent(_component_Pricing, null, null, _parent));
      _push(ssrRenderComponent(_component_CTA, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    const status = Number(_error.statusCode || 500);
    const is404 = status === 404;
    const statusText = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-PKb4gU8-.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-DQxKvLC4.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ status: unref(status), statusText: unref(statusText), statusCode: unref(status), statusMessage: unref(statusText), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = /* @__PURE__ */ useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext && (ssrContext["~renderResponse"] || ssrContext._renderResponse)) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry_default = ((ssrContext) => entry(ssrContext));

export { _export_sfc as _, useNuxtApp as a, useRuntimeConfig as b, nuxtLinkDefaults as c, entry_default as default, encodeRoutePath as e, navigateTo as n, resolveRouteObject as r, tryUseNuxtApp as t, useRouter as u };
//# sourceMappingURL=server.mjs.map
