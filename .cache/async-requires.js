// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-help-js": () => import("./../../../src/pages/help.js" /* webpackChunkName: "component---src-pages-help-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-category-js": () => import("./../../../src/templates/category.js" /* webpackChunkName: "component---src-templates-category-js" */),
  "component---src-templates-faq-js": () => import("./../../../src/templates/faq.js" /* webpackChunkName: "component---src-templates-faq-js" */)
}

