const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/pages/404.js"))),
  "component---src-pages-category-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/pages/category.js"))),
  "component---src-pages-help-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/pages/help.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/apple/Desktop/playground/ecocart/src/pages/index.js")))
}

