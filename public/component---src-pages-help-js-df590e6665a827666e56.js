(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2PH0":function(e,t,a){e.exports=a.p+"static/people-f980dabf555b6344b3a7354ec78aeb1c.svg"},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),o=r(a("VbXa")),l=r(a("8OQS")),s=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=h(t||a||[]);return r&&r.src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),p=function(e){var t=u(e),a=m(t);return g[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,v=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var q=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+c+o+l+a+r+t+i+n+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=c.default.createElement(L,(0,s.default)({ref:t,src:a},i,{ariaHidden:o}));return r.length>1?c.default.createElement("picture",null,n(r),l):l})),L=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,h=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},h,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));L.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=q(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,g=e.fluid,p=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,v=e.itemProp,S=e.loading,k=e.draggable,q=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,s.default)({opacity:q?1:0,transition:R?"opacity "+b+"ms":"none"},l),_="boolean"==typeof y?"lightgray":y,W={transitionDelay:b+"ms"},j=(0,s.default)({opacity:this.state.imgLoaded?0:1},R&&W,l,f),z={title:t,alt:this.state.isVisible?"":a,style:j,className:m,itemProp:v};if(g){var H=g,T=h(g);return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},c.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),_&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&W)}),T.base64&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:z,imageVariants:H,generateSources:x}),T.tracedSVG&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:z,imageVariants:H,generateSources:N}),this.state.isVisible&&c.default.createElement("picture",null,w(H),c.default.createElement(L,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,s.default)({alt:a,title:t,loading:S},T,{imageVariants:H}))}}))}if(p){var P=p,V=h(p),K=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},i);return"inherit"===i.display&&delete K.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:K,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},_&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:_,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},R&&W)}),V.base64&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:z,imageVariants:P,generateSources:x}),V.tracedSVG&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:z,imageVariants:P,generateSources:N}),this.state.isVisible&&c.default.createElement("picture",null,w(P),c.default.createElement(L,{alt:a,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,s.default)({alt:a,title:t,loading:S},V,{imageVariants:P}))}}))}return null},t}(c.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),_=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function W(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}R.propTypes={resolutions:O,sizes:_,fixed:W(d.default.oneOfType([O,d.default.arrayOf(O)])),fluid:W(d.default.oneOfType([_,d.default.arrayOf(_)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var j=R;t.default=j},"OZ/8":function(e,t,a){e.exports=a.p+"static/globe-ccb66031b3b20ebec4eae646fac2828f.svg"},XALy:function(e,t,a){e.exports=a.p+"static/privacy-bf38c000dbf547fd600803f06e09b77b.svg"},YCuv:function(e,t,a){e.exports=a.p+"static/echopoints-3854e5c9d6043a8d17f84f5f6adaed7e.svg"},kVrH:function(e,t,a){e.exports=a.p+"static/trees-cfa1bb23e1134958b6a9cf94a66ee892.svg"},xHWc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("7vrA"),o=a("3Z9Z"),l=a("JI6e"),s=a("7O3G"),c=function(){return n.a.createElement("div",{className:"hero_section"},n.a.createElement(i.a,null,n.a.createElement(o.a,{className:"align-items-center"},n.a.createElement(l.a,{lg:6,md:6,sm:8,xs:12},n.a.createElement("h2",null,"How can we help?"),n.a.createElement(s.a,null)))))},d=a("Wbzz"),u=a("OZ/8"),f=a.n(u),m=a("2PH0"),h=a.n(m),g=a("kVrH"),p=a.n(g),y=a("YCuv"),b=a.n(y),E=a("j5T1"),v=a.n(E),w=a("XALy"),S=a.n(w),N=function(){var e=Object(d.useStaticQuery)("3939912106");return n.a.createElement("div",{className:"categories_section"},n.a.createElement(i.a,null,n.a.createElement("h2",null,"Choose a category:"),n.a.createElement("div",{className:"cat_grid"},e.wordpress.ecocartFaqCategories.edges.map((function(e){return n.a.createElement(d.Link,{to:"/category/"+e.node.slug,key:e.node.id},n.a.createElement("div",{className:"category"},"getting-started"===(t=e.node.slug)?n.a.createElement("img",{className:"category_img",alt:"category logo",src:f.a}):"account-question"===t?n.a.createElement("img",{className:"category_img",alt:"category logo",src:h.a}):"why-carbon-offsets"===t?n.a.createElement("img",{className:"category_img",alt:"category logo",src:p.a}):"ecopoints"===t?n.a.createElement("img",{className:"category_img",alt:"category logo",src:b.a}):"about-ecocart"===t?n.a.createElement("img",{className:"category_img",alt:"category logo",src:v.a}):"privacy"===t?n.a.createElement("img",{className:"category_img",alt:"category logo",src:S.a}):void 0,n.a.createElement("h3",{className:"category_title"},e.node.name)));var t})))))},x=a("9eSz"),k=a.n(x),q=a("DZHF"),C=a("cWnB"),I=a("6xyR"),L=a("ma3e"),R=function(){var e=Object(d.useStaticQuery)("1107079201");return n.a.createElement("div",{className:"faqs_section"},n.a.createElement(i.a,null,n.a.createElement("h2",null,"Frequently asked:"),n.a.createElement(o.a,null,n.a.createElement(l.a,{lg:12,md:12,sm:12,className:"faqs"},n.a.createElement(q.a,{className:"faq"},n.a.createElement(q.a.Toggle,{className:"faq_title",as:C.a,variant:"link",eventKey:"1"},"How to use the EcoCart browser extension",n.a.createElement(L.b,null)),n.a.createElement(q.a.Collapse,{eventKey:"1"},n.a.createElement(I.a.Body,{className:"faq_body"},n.a.createElement("p",null,"EcoCart is a free browser extension that offsets the environmental impact of your online orders so you can shop sustainably. We partner with thousands of stores that you love to offer free carbon neutral shipping. All you have to do is download the"," ",n.a.createElement("a",{href:"https://chrome.google.com/webstore/detail/ecocart-carbon-neutral-sh/oiafedhhdhinjnianpfeaenmchnknchi",target:"_blank"},"EcoCart extension for Chrome"),", create an account, and start shopping."),n.a.createElement("p",null,"While you’re searching on Google, look for “Shop Sustainably” next to participating stores..."),n.a.createElement(k.a,{fluid:e.image1.childImageSharp.fluid}),n.a.createElement("p",null,"...or just let EcoCart notify you when a website you’re visiting supports carbon neutral shopping. Click the big green “make my order carbon neutral” button and your order will have a net-zero impact on the planet! It’s that easy."),n.a.createElement(k.a,{fluid:e.image2.childImageSharp.fluid}),n.a.createElement("p",null,"Enjoy all the stores you love, rest assured that your online orders are not leaving a carbon footprint. You’ll earn EcoPoints that can go toward eco-rewards and gift cards.")))),n.a.createElement(q.a,{className:"faq"},n.a.createElement(q.a.Toggle,{className:"faq_title",as:C.a,variant:"link",eventKey:"3"},"What on Earth is a carbon offset?",n.a.createElement(L.b,null)),n.a.createElement(q.a.Collapse,{eventKey:"3"},n.a.createElement(I.a.Body,{className:"faq_body"},n.a.createElement("p",null,"Carbon offsets are a practical and effective way to reduce the effects of climate change by funding renewable energy, forestry, or clean water projects. These projects reduce emissions of carbon dioxide or other greenhouse gases in order to compensate for emissions made elsewhere, like the emissions created from ordering something online. EcoCart calculates the emissions created from your online orders and donates the exact dollar amount required to reduce those emissions directly to these projects on your behalf.")))),n.a.createElement(q.a,{className:"faq"},n.a.createElement(q.a.Toggle,{className:"faq_title",as:C.a,variant:"link",eventKey:"4"},"What do you mean carbon neutral?",n.a.createElement(L.b,null)),n.a.createElement(q.a.Collapse,{eventKey:"4"},n.a.createElement(I.a.Body,{className:"faq_body"},n.a.createElement("p",null,"When we say orders will be “carbon neutral,” that means that we will eliminate, capture, or otherwise mitigate all of the carbon emissions created from shipping your online orders. “Net zero” is another term you might hear and it’s simply another way of describing what happens with carbon offsetting.")))),n.a.createElement(q.a,{className:"faq"},n.a.createElement(q.a.Toggle,{className:"faq_title",as:C.a,variant:"link",eventKey:"7"},"What are EcoPoints?",n.a.createElement(L.b,null)),n.a.createElement(q.a.Collapse,{eventKey:"7"},n.a.createElement(I.a.Body,{className:"faq_body"},n.a.createElement("p",null,"EcoPoints are what make up the free EcoCart rewards system. You earn EcoPoints every time you make your order carbon neutral with EcoCart that you can redeem for earth-saving rewards like planting trees or giving clean water to families. ",n.a.createElement("strong",null,"OR")," you can use your EcoPoints just like cash, and redeem them for gift cards at your favorite stores!"),n.a.createElement("p",null,"You'll often see EcoPoints multipliers next to stores that indicate you'll earn 2x or 3x the typical amount of EcoPoints when shopping at that store. Without an EcoPoints multiplier, $1 spent = 10 EcoPoints."),n.a.createElement(k.a,{fluid:e.image13.childImageSharp.fluid})))),n.a.createElement(q.a,{className:"faq"},n.a.createElement(q.a.Toggle,{className:"faq_title",as:C.a,variant:"link",eventKey:"2"},"How can I find stores to shop sustainably?",n.a.createElement(L.b,null)),n.a.createElement(q.a.Collapse,{eventKey:"2"},n.a.createElement(I.a.Body,{className:"faq_body"},n.a.createElement("h2",null,"EcoCart offers a few ways to find stores that support sustainable shopping. With the extension installed, you can:"),n.a.createElement("ol",null,n.a.createElement("li",null,"Just shop like normal and EcoCart will notify you when you’re in a store that supports carbon neutral shopping."),n.a.createElement("li",null,"When you search for stores on Google, participating stores will say “Shop Sustainably” next to the website name."),n.a.createElement(k.a,{fluid:e.image1.childImageSharp.fluid}),n.a.createElement("li",null,"Or you can browse participating stores in the extension by clicking on the EcoCart plane icon on Chrome. You’ll see stores that are offering the most EcoPoints on the home tab and stores that are trending with other EcoCart users on the search tab. Or you can search for stores by name on the search tab."),n.a.createElement(k.a,{fluid:e.image4.childImageSharp.fluid}))))),n.a.createElement(q.a,{className:"faq"},n.a.createElement(q.a.Toggle,{className:"faq_title",as:C.a,variant:"link",eventKey:"5"},"How do you determine the carbon footprint of each order?",n.a.createElement(L.b,null)),n.a.createElement(q.a.Collapse,{eventKey:"5"},n.a.createElement(I.a.Body,{className:"faq_body"},n.a.createElement("p",null,"Our algorithm uses the unique characteristics of each order, including product type, shipping distance, and item weight to estimate the shipping emissions created by that order. Since each store uses a different shipping method, we assume a standard mix of shipping transportation that includes sea, air, and truck.")))),n.a.createElement(q.a,{className:"faq"},n.a.createElement(q.a.Toggle,{className:"faq_title",as:C.a,variant:"link",eventKey:"6"},"What do you do with my data?",n.a.createElement(L.b,null)),n.a.createElement(q.a.Collapse,{eventKey:"6"},n.a.createElement(I.a.Body,{className:"faq_body"},n.a.createElement("p",null,"We will do not and will never sell your data. Unlike other online shopping browser extensions, we’re in the business of saving the planet, not violating your privacy. We promise to never give your data to third-parties. We’ll only use your data in ways you’d expect, like improving our customer experience, which we explain in our"," ",n.a.createElement(d.Link,{to:"/privacy-policy"},"privacy policy"),".")))),n.a.createElement(q.a,{className:"faq"},n.a.createElement(q.a.Toggle,{className:"faq_title",as:C.a,variant:"link",eventKey:"8"},"How do I know my donations are going to the right place?",n.a.createElement(L.b,null)),n.a.createElement(q.a.Collapse,{eventKey:"8"},n.a.createElement(I.a.Body,{className:"faq_body"},n.a.createElement("p",null,"With your help, we’re finding projects that are truly additive (meaning new), permanent, and without unintended consequences (i.e., creating more carbon elsewhere, like a game of Whack-a-Mole). All of our projects are independently certified to internationally recognized standards:"),n.a.createElement("p",null,"Every project we fund is triple-verified. Triple-verification means:"),n.a.createElement("ol",null,n.a.createElement("li",null,"The project’s financials, management team, project site, and carbon reduction method are carefully vetted."),n.a.createElement("li",null,"At least one of the world’s major carbon standards reviews the project."),n.a.createElement("li",null,"Global Offset Research verifies the project against a second list of international standards.")))))))))},O=a("vrFN"),_=a("Bl7J"),W=a("jrz3");t.default=function(){return n.a.createElement(_.a,null,n.a.createElement(O.a,{title:"Help"}),n.a.createElement("div",{className:"Help"},n.a.createElement(c,null),n.a.createElement(N,null),n.a.createElement(R,null)),n.a.createElement(W.a,null))}}}]);
//# sourceMappingURL=component---src-pages-help-js-df590e6665a827666e56.js.map