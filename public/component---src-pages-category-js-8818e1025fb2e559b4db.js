(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6xyR":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),c=a.n(o),i=a("q1tI"),l=a.n(i),s=a("vUet"),u=a("YdCC"),d=function(e){return l.a.forwardRef((function(t,a){return l.a.createElement("div",Object(n.a)({},t,{ref:a,className:c()(t.className,e)}))}))},f=a("Wzyw"),m=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.variant,u=e.as,d=void 0===u?"img":u,f=Object(r.a)(e,["bsPrefix","className","variant","as"]),m=Object(s.a)(a,"card-img");return l.a.createElement(d,Object(n.a)({ref:t,className:c()(i?m+"-"+i:m,o)},f))}));m.displayName="CardImg",m.defaultProps={variant:null};var v=m,b=d("h5"),E=d("h6"),y=Object(u.a)("card-body"),O=Object(u.a)("card-title",{Component:b}),j=Object(u.a)("card-subtitle",{Component:E}),g=Object(u.a)("card-link",{Component:"a"}),p=Object(u.a)("card-text",{Component:"p"}),N=Object(u.a)("card-header"),x=Object(u.a)("card-footer"),C=Object(u.a)("card-img-overlay"),h=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,u=e.bg,d=e.text,m=e.border,v=e.body,b=e.children,E=e.as,O=void 0===E?"div":E,j=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(s.a)(a,"card"),p=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return l.a.createElement(f.a.Provider,{value:p},l.a.createElement(O,Object(n.a)({ref:t},j,{className:c()(o,g,u&&"bg-"+u,d&&"text-"+d,m&&"border-"+m)}),v?l.a.createElement(y,null,b):b))}));h.displayName="Card",h.defaultProps={body:!1},h.Img=v,h.Title=O,h.Subtitle=j,h.Body=y,h.Link=g,h.Text=p,h.Header=N,h.Footer=x,h.ImgOverlay=C;t.a=h},"7O3G":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("QojX"),c=a("ma3e");t.a=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1],i=Object(n.useState)([]),l=(i[0],i[1],Object(n.useState)("")),s=l[0],u=l[1];return r.a.createElement(o.a.Group,{controlId:"search"},r.a.createElement(o.a.Control,{onChange:function(e){u(e.target.value),""!==e.target.value?a(!0):a(!1)},value:s,type:"text",placeholder:"Search"}),r.a.createElement(c.c,null),t&&r.a.createElement("div",{className:"autoContainer"},[{name:"zeeshan"},{name:"sobia"},{name:"gurya"},{name:"kiran"},{name:"razo"}].map((function(e,t){return r.a.createElement("a",{key:t,href:"#"},e.name)}))))}},DZHF:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),c=a.n(o),i=a("q1tI"),l=a.n(i),s=a("JCAc"),u=a("vUet"),d=a("ILyh"),f=l.a.createContext(null);f.displayName="AccordionContext";var m=f;var v,b=l.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"button":a,c=e.children,s=e.eventKey,u=e.onClick,f=Object(r.a)(e,["as","children","eventKey","onClick"]),v=function(e,t){var a=Object(i.useContext)(m),n=Object(i.useContext)(d.a);return function(r){n&&n(e===a?null:e,r),t&&t(r)}}(s,u);return"button"===o&&(f.type="button"),l.a.createElement(o,Object(n.a)({ref:t,onClick:v},f),c)})),E=a("7j6X"),y=a("YECM"),O=a("dRu9"),j=a("Qg85"),g=a("z+q/"),p={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function N(e,t){var a=t["offset"+e[0].toUpperCase()+e.slice(1)],n=p[e];return a+parseInt(Object(E.a)(t,n[0]),10)+parseInt(Object(E.a)(t,n[1]),10)}var x=((v={})[O.c]="collapse",v[O.d]="collapsing",v[O.b]="collapsing",v[O.a]="collapse show",v),C={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:N},h=l.a.forwardRef((function(e,t){var a=e.onEnter,o=e.onEntering,s=e.onEntered,u=e.onExit,d=e.onExiting,f=e.className,m=e.children,v=e.dimension,b=void 0===v?"height":v,E=e.getDimensionValue,p=void 0===E?N:E,C=Object(r.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),h="function"==typeof b?b():b,w=Object(i.useMemo)((function(){return Object(j.a)((function(e){e.style[h]="0"}),a)}),[h,a]),q=Object(i.useMemo)((function(){return Object(j.a)((function(e){var t="scroll"+h[0].toUpperCase()+h.slice(1);e.style[h]=e[t]+"px"}),o)}),[h,o]),P=Object(i.useMemo)((function(){return Object(j.a)((function(e){e.style[h]=null}),s)}),[h,s]),K=Object(i.useMemo)((function(){return Object(j.a)((function(e){e.style[h]=p(h,e)+"px",Object(g.a)(e)}),u)}),[u,p,h]),I=Object(i.useMemo)((function(){return Object(j.a)((function(e){e.style[h]=null}),d)}),[h,d]);return l.a.createElement(O.e,Object(n.a)({ref:t,addEndListener:y.a},C,{"aria-expanded":C.role?C.in:null,onEnter:w,onEntering:q,onEntered:P,onExit:K,onExiting:I}),(function(e,t){return l.a.cloneElement(m,Object(n.a)({},t,{className:c()(f,m.props.className,x[e],"width"===h&&"width")}))}))}));h.defaultProps=C;var w=h,q=l.a.forwardRef((function(e,t){var a=e.children,o=e.eventKey,c=Object(r.a)(e,["children","eventKey"]),s=Object(i.useContext)(m);return l.a.createElement(w,Object(n.a)({ref:t,in:s===o},c),l.a.createElement("div",null,l.a.Children.only(a)))}));q.displayName="AccordionCollapse";var P=q,K=l.a.forwardRef((function(e,t){var a=Object(s.a)(e,{activeKey:"onSelect"}),o=a.as,i=void 0===o?"div":o,f=a.activeKey,v=a.bsPrefix,b=a.children,E=a.className,y=a.onSelect,O=Object(r.a)(a,["as","activeKey","bsPrefix","children","className","onSelect"]),j=c()(E,Object(u.a)(v,"accordion"));return l.a.createElement(m.Provider,{value:f||null},l.a.createElement(d.a.Provider,{value:y||null},l.a.createElement(i,Object(n.a)({ref:t},O,{className:j}),b)))}));K.displayName="Accordion",K.Toggle=b,K.Collapse=P;t.a=K},ILyh:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a("q1tI"),r=a.n(n).a.createContext(null),o=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.a=r},PbE3:function(e,t,a){"use strict";a.r(t);var n,r=a("q1tI"),o=a.n(r),c=a("7vrA"),i=a("dI71"),l=a("JCAc"),s=o.a.createContext(null),u=a("ILyh"),d=function(e){var t=Object(l.a)(e,{activeKey:"onSelect"}),a=t.id,n=t.generateChildId,c=t.onSelect,i=t.activeKey,d=t.transition,f=t.mountOnEnter,m=t.unmountOnExit,v=t.children,b=Object(r.useMemo)((function(){return n||function(e,t){return a?a+"-"+t+"-"+e:null}}),[a,n]),E=Object(r.useMemo)((function(){return{onSelect:c,activeKey:i,transition:d,mountOnEnter:f||!1,unmountOnExit:m||!1,getControlledId:function(e){return b(e,"tabpane")},getControllerId:function(e){return b(e,"tab")}}}),[c,i,d,f,m,b]);return o.a.createElement(s.Provider,{value:E},o.a.createElement(u.a.Provider,{value:c||null},v))},f=a("wx14"),m=a("zLVn"),v=a("TSYQ"),b=a.n(v),E=a("vUet"),y=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.as,r=void 0===n?"div":n,c=e.className,i=Object(m.a)(e,["bsPrefix","as","className"]),l=Object(E.a)(a,"tab-content");return o.a.createElement(r,Object(f.a)({ref:t},i,{className:b()(c,l)}))})),O=a("YECM"),j=a("dRu9"),g=a("z+q/"),p=((n={})[j.b]="show",n[j.a]="show",n),N=o.a.forwardRef((function(e,t){var a=e.className,n=e.children,c=Object(m.a)(e,["className","children"]),i=Object(r.useCallback)((function(e){Object(g.a)(e),c.onEnter&&c.onEnter(e)}),[c]);return o.a.createElement(j.e,Object(f.a)({ref:t,addEndListener:O.a},c,{onEnter:i}),(function(e,t){return o.a.cloneElement(n,Object(f.a)({},t,{className:b()("fade",a,n.props.className,p[e])}))}))}));N.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},N.displayName="Fade";var x=N;var C=o.a.forwardRef((function(e,t){var a=function(e){var t=Object(r.useContext)(s);if(!t)return e;var a=t.activeKey,n=t.getControlledId,o=t.getControllerId,c=Object(m.a)(t,["activeKey","getControlledId","getControllerId"]),i=!1!==e.transition&&!1!==c.transition,l=Object(u.b)(e.eventKey);return Object(f.a)({},e,{active:null==e.active&&null!=l?Object(u.b)(a)===l:e.active,id:n(e.eventKey),"aria-labelledby":o(e.eventKey),transition:i&&(e.transition||c.transition||x),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:c.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:c.unmountOnExit})}(e),n=a.bsPrefix,c=a.className,i=a.active,l=a.onEnter,d=a.onEntering,v=a.onEntered,y=a.onExit,O=a.onExiting,j=a.onExited,g=a.mountOnEnter,p=a.unmountOnExit,N=a.transition,C=a.as,h=void 0===C?"div":C,w=(a.eventKey,Object(m.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),q=Object(E.a)(n,"tab-pane");if(!i&&!N&&p)return null;var P=o.a.createElement(h,Object(f.a)({},w,{ref:t,role:"tabpanel","aria-hidden":!i,className:b()(c,q,{active:i})}));return N&&(P=o.a.createElement(N,{in:i,onEnter:l,onEntering:d,onEntered:v,onExit:y,onExiting:O,onExited:j,mountOnEnter:g,unmountOnExit:p},P)),o.a.createElement(s.Provider,{value:null},o.a.createElement(u.a.Provider,{value:null},P))}));C.displayName="TabPane";var h=C,w=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.a.Component);w.Container=d,w.Content=y,w.Pane=h;var q=w,P=a("3Z9Z"),K=a("JI6e"),I=(a("K9S6"),o.a.createContext(null));I.displayName="NavbarContext";var A=I,k=a("Wzyw"),S=a("Zeqi"),R=a("YGJp"),Q=a("lcWJ"),T=o.a.createContext(null);T.displayName="NavContext";var L=T,W=function(){},z=o.a.forwardRef((function(e,t){var a,n,c=e.as,i=void 0===c?"ul":c,l=e.onSelect,d=e.activeKey,v=e.role,b=e.onKeyDown,E=Object(m.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),y=Object(R.a)(),O=Object(r.useRef)(!1),j=Object(r.useContext)(u.a),g=Object(r.useContext)(s);g&&(v=v||"tablist",d=g.activeKey,a=g.getControlledId,n=g.getControllerId);var p=Object(r.useRef)(null),N=function(e){var t=p.current;if(!t)return null;var a=Object(S.a)(t,"[data-rb-event-key]:not(.disabled)"),n=t.querySelector(".active");if(!n)return null;var r=a.indexOf(n);if(-1===r)return null;var o=r+e;return o>=a.length&&(o=0),o<0&&(o=a.length-1),a[o]},x=function(e,t){null!=e&&(l&&l(e,t),j&&j(e,t))};Object(r.useEffect)((function(){if(p.current&&O.current){var e=p.current.querySelector("[data-rb-event-key].active");e&&e.focus()}O.current=!1}));var C=Object(Q.a)(t,p);return o.a.createElement(u.a.Provider,{value:x},o.a.createElement(L.Provider,{value:{role:v,activeKey:Object(u.b)(d),getControlledId:a||W,getControllerId:n||W}},o.a.createElement(i,Object(f.a)({},E,{onKeyDown:function(e){var t;switch(b&&b(e),e.key){case"ArrowLeft":case"ArrowUp":t=N(-1);break;case"ArrowRight":case"ArrowDown":t=N(1);break;default:return}t&&(e.preventDefault(),x(t.dataset.rbEventKey,e),O.current=!0,y())},ref:C,role:v}))))})),B=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.children,c=e.as,i=void 0===c?"div":c,l=Object(m.a)(e,["bsPrefix","className","children","as"]);return a=Object(E.a)(a,"nav-item"),o.a.createElement(i,Object(f.a)({},l,{ref:t,className:b()(n,a)}),r)}));B.displayName="NavItem";var M=B,D=a("dbZe"),J=a("ZCiN"),_=(a("2W6z"),o.a.forwardRef((function(e,t){var a=e.active,n=e.className,c=e.eventKey,i=e.onSelect,l=e.onClick,s=e.as,d=Object(m.a)(e,["active","className","eventKey","onSelect","onClick","as"]),v=Object(u.b)(c,d.href),E=Object(r.useContext)(u.a),y=Object(r.useContext)(L),O=a;if(y){d.role||"tablist"!==y.role||(d.role="tab");var j=y.getControllerId(v),g=y.getControlledId(v);d["data-rb-event-key"]=v,d.id=j||d.id,d["aria-controls"]=g||d["aria-controls"],O=null==a&&null!=v?y.activeKey===v:a}"tab"===d.role&&(d.tabIndex=O?d.tabIndex:-1,d["aria-selected"]=O);var p=Object(J.a)((function(e){l&&l(e),null!=v&&(i&&i(v,e),E&&E(v,e))}));return o.a.createElement(s,Object(f.a)({},d,{ref:t,onClick:p,className:b()(n,O&&"active")}))})));_.defaultProps={disabled:!1};var F=_,Z={disabled:!1,as:D.a},Y=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.disabled,r=e.className,c=e.href,i=e.eventKey,l=e.onSelect,s=e.as,u=Object(m.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=Object(E.a)(a,"nav-link"),o.a.createElement(F,Object(f.a)({},u,{href:c,ref:t,eventKey:i,as:s,disabled:n,onSelect:l,className:b()(r,a,n&&"disabled")}))}));Y.displayName="NavLink",Y.defaultProps=Z;var G=Y,U=o.a.forwardRef((function(e,t){var a,n,c,i=Object(l.a)(e,{activeKey:"onSelect"}),s=i.as,u=void 0===s?"div":s,d=i.bsPrefix,v=i.variant,y=i.fill,O=i.justify,j=i.navbar,g=i.className,p=i.children,N=i.activeKey,x=Object(m.a)(i,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),C=Object(E.a)(d,"nav"),h=!1,w=Object(r.useContext)(A),q=Object(r.useContext)(k.a);return w?(n=w.bsPrefix,h=null==j||j):q&&(c=q.cardHeaderBsPrefix),o.a.createElement(z,Object(f.a)({as:u,ref:t,activeKey:N,className:b()(g,(a={},a[C]=!h,a[n+"-nav"]=h,a[c+"-"+v]=!!c,a[C+"-"+v]=!!v,a[C+"-fill"]=y,a[C+"-justified"]=O,a))},x),p)}));U.displayName="Nav",U.defaultProps={justify:!1,fill:!1},U.Item=M,U.Link=G;var V=U,H=a("DZHF"),X=a("cWnB"),$=a("6xyR"),ee=a("7O3G"),te=a("ma3e"),ae=[{id:1,category:"Getting Started",content:[{id:1,question:"Question 1 for getting started",answer:"Answer to question 1 for getting started"},{id:2,question:"Question 2 for getting started",answer:"Answer to question 2 for getting started"}]},{id:2,category:"Account Question",content:[{id:1,question:"Question 1 for Account Question",answer:"Answer to question 1 for Account Question"}]},{id:3,category:"Why Carbon Offsets",content:[{id:1,question:"Question 1 for Why Carbon Offset",answer:"Answer to question 1 for Why Carbon Offset"},{id:2,question:"Question 2 for Why Carbon Offset",answer:"Answer to question 2 for Why Carbon Offset"}]},{id:4,category:"EcoPoints",content:[{id:1,question:"Question 1 for Eco Points",answer:"Answer to question 1 for Eco Points"}]},{id:5,category:"About EcoCart",content:[{id:1,question:"Question 1 for About Ecocart",answer:"Answer to question 1 for About Ecocart"},{id:2,question:"Question 2 for getting started",answer:"Answer to question 2 for About Ecocart"}]},{id:6,category:"Privacy",content:[{id:1,question:"Question 1 for Privacy",answer:"Answer to question 1 for Privacy"},{id:2,question:"Question 2 for Privacy",answer:"Answer to question 2 for Privacy"}]}],ne=a("vrFN"),re=a("Bl7J");t.default=function(){return o.a.createElement(re.a,null,o.a.createElement(ne.a,{title:"FAQs"}),o.a.createElement("div",{className:"category_page"},o.a.createElement(c.a,null,o.a.createElement(q.Container,{defaultActiveKey:"1"},o.a.createElement(P.a,null,o.a.createElement(K.a,{sm:12,md:3},o.a.createElement(ee.a,null),o.a.createElement(V,{variant:"link",className:"flex-column"},ae.map((function(e){return o.a.createElement(V.Item,{key:e.id},o.a.createElement(V.Link,{eventKey:e.id},e.category))})))),o.a.createElement(K.a,{sm:12,md:9},o.a.createElement(q.Content,{className:"tab_container"},o.a.createElement(q.Pane,{eventKey:"1",className:"faqs"},o.a.createElement("h2",{className:"title"},"Getting Started"),o.a.createElement(H.a,{className:"faq"},o.a.createElement(H.a.Toggle,{className:"faq_title",as:X.a,variant:"link",eventKey:"1"},"question 1 getting started",o.a.createElement(te.a,null)),o.a.createElement(H.a.Collapse,{eventKey:"1"},o.a.createElement($.a.Body,{className:"faq_body"},"answer 1 getting started"))),o.a.createElement(H.a,{className:"faq"},o.a.createElement(H.a.Toggle,{className:"faq_title",as:X.a,variant:"link",eventKey:"1"},"question 1 getting started",o.a.createElement(te.a,null)),o.a.createElement(H.a.Collapse,{eventKey:"1"},o.a.createElement($.a.Body,{className:"faq_body"},"answer 1 getting started"))),o.a.createElement(H.a,{className:"faq"},o.a.createElement(H.a.Toggle,{className:"faq_title",as:X.a,variant:"link",eventKey:"1"},"question 1 getting started",o.a.createElement(te.a,null)),o.a.createElement(H.a.Collapse,{eventKey:"1"},o.a.createElement($.a.Body,{className:"faq_body"},"answer 1 getting started")))),o.a.createElement(q.Pane,{eventKey:"2",className:"faqs"},o.a.createElement("h2",{className:"title"},"Account Questions"),o.a.createElement(H.a,{className:"faq"},o.a.createElement(H.a.Toggle,{className:"faq_title",as:X.a,variant:"link",eventKey:"1"},"question 1 account question",o.a.createElement(te.a,null)),o.a.createElement(H.a.Collapse,{eventKey:"1"},o.a.createElement($.a.Body,{className:"faq_body"},"answer 1 account question")))),o.a.createElement(q.Pane,{eventKey:"3",className:"faqs"},o.a.createElement("h2",{className:"title"},"Why Carbon Offset")),o.a.createElement(q.Pane,{eventKey:"4",className:"faqs"},o.a.createElement("h2",{className:"title"},"Eco Points")),o.a.createElement(q.Pane,{eventKey:"5",className:"faqs"},o.a.createElement("h2",{className:"title"},"About Ecocart")),o.a.createElement(q.Pane,{eventKey:"6",className:"faqs"},o.a.createElement("h2",{className:"title"},"Privacy")))))))))}},Wzyw:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n).a.createContext(null);r.displayName="CardContext",t.a=r},YGJp:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI");function r(){return Object(n.useReducer)((function(e){return!e}),!1)[1]}},ZCiN:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI");var r=function(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=r(e);return Object(n.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},Zeqi:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return n(e.querySelectorAll(t))}},lcWJ:function(e,t,a){"use strict";var n=a("q1tI"),r=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(n.useMemo)((function(){return function(e,t){var a=r(e),n=r(t);return function(e){a&&a(e),n&&n(e)}}(e,t)}),[e,t])}}}]);
//# sourceMappingURL=component---src-pages-category-js-8818e1025fb2e559b4db.js.map