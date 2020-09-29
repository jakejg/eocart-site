const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/pages/blog.js"))),
  "component---src-pages-help-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/pages/help.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/pages/index.js"))),
  "component---src-pages-privacy-policy-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/pages/privacy-policy.js"))),
  "component---src-pages-terms-of-services-eu-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/pages/terms-of-services-eu.js"))),
  "component---src-pages-terms-of-services-us-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/pages/terms-of-services-us.js"))),
  "component---src-templates-category-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/templates/category.js"))),
  "component---src-templates-faq-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/templates/faq.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/templates/post.js")))
}

