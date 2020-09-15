module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-smoothscroll/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"ecocart-app","short_name":"ecoCart","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/plane.svg","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"2585b2a66d2a44f9bc5fa04cee83864c"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
