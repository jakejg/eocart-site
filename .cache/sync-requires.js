const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/pages/404.js"))),
  "component---src-pages-help-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/pages/help.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/pages/index.js"))),
  "component---src-templates-category-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/templates/category.js")))
}

