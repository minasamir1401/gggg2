const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-D4ESD-Hi.js","assets/react-vendor-v-nJQVIE.js","assets/rolldown-runtime-y2wrX6ue.js","assets/Home-CTA5P4Cg.css","assets/Nav-C2VxcW25.js","assets/Nav-B6p1n6_F.css","assets/About-C4jUwxaX.js","assets/About-DDyAL4s3.css","assets/Skills-DuTHK7ex.js","assets/Skills-FEsgFg1N.css","assets/Services-puEkwLJm.js","assets/Services-B6V1sDru.css","assets/Projects-BJa1EXQ5.js","assets/Projects-C8INeTaP.css","assets/Context-DM7NBSb6.js","assets/Context-DZSAHNs_.css","assets/Footer-CciVtIYB.js","assets/Footer-CJkq67ah.css"])))=>i.map(i=>d[i]);
import { n as __toESM } from "./rolldown-runtime-y2wrX6ue.js";
import { _ as require_jsx_runtime, g as HelmetProvider, v as require_client, y as require_react } from "./react-vendor-v-nJQVIE.js";
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
var import_client = /* @__PURE__ */ __toESM(require_client());
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var scriptRel = "modulepreload";
var assetsURL = function(dep) {
	return "/" + dep;
};
var seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (deps && deps.length > 0) {
		const links = document.getElementsByTagName("link");
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises$2) {
			return Promise.all(promises$2.map((p) => Promise.resolve(p).then((value$1) => ({
				status: "fulfilled",
				value: value$1
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		promise = allSettled(deps.map((dep) => {
			dep = assetsURL(dep, importerUrl);
			if (dep in seen) return;
			seen[dep] = true;
			const isCss = dep.endsWith(".css");
			const cssSelector = isCss ? "[rel=\"stylesheet\"]" : "";
			if (!!importerUrl) for (let i$1 = links.length - 1; i$1 >= 0; i$1--) {
				const link$1 = links[i$1];
				if (link$1.href === dep && (!isCss || link$1.rel === "stylesheet")) return;
			}
			else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
			const link = document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err$2) {
		const e$1 = new Event("vite:preloadError", { cancelable: true });
		e$1.payload = err$2;
		window.dispatchEvent(e$1);
		if (!e$1.defaultPrevented) throw err$2;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
var Home = import_react.lazy(() => __vitePreload(() => import("./Home-D4ESD-Hi.js"), __vite__mapDeps([0,1,2,3])));
var Nav = import_react.lazy(() => __vitePreload(() => import("./Nav-C2VxcW25.js"), __vite__mapDeps([4,1,2,5])));
var About = import_react.lazy(() => __vitePreload(() => import("./About-C4jUwxaX.js"), __vite__mapDeps([6,1,2,7])));
var Skills = import_react.lazy(() => __vitePreload(() => import("./Skills-DuTHK7ex.js"), __vite__mapDeps([8,1,2,9])));
var Services = import_react.lazy(() => __vitePreload(() => import("./Services-puEkwLJm.js"), __vite__mapDeps([10,1,2,11])));
var Projects = import_react.lazy(() => __vitePreload(() => import("./Projects-BJa1EXQ5.js"), __vite__mapDeps([12,1,2,13])));
var Context = import_react.lazy(() => __vitePreload(() => import("./Context-DM7NBSb6.js"), __vite__mapDeps([14,1,2,15])));
var Footer = import_react.lazy(() => __vitePreload(() => import("./Footer-CciVtIYB.js"), __vite__mapDeps([16,1,2,17])));
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "background-animation",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-blob-1" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-blob-2" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-blob-3" })
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Suspense, {
		fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Loading..." }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Home, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	})] });
}
var App_default = App;
(0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelmetProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App_default, {}) }) }));
