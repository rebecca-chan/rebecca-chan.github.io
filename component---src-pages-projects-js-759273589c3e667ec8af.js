(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(147),i=a(156),l=a(157),s=(a(287),a(7)),c=a.n(s),u=a(181),d=a.n(u),p=a(178),h=a(288),m=a.n(h),f=a(292),g=a.n(f),y=a(296),b=a.n(y),v=a(294),w=a.n(v),E=a(298),P=a.n(E),R=a(179),k=a(180),N=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleHover=function(){a.setState(function(e){return{hovered:!0}})},a.leaveHover=function(){a.setState(function(e){return{hovered:!1}})},a.state={hovered:!1},a}return c()(t,e),t.prototype.render=function(){var e=this.props.project;return void 0===e?null:o.a.createElement(m.a,{className:"card",key:e.id,onMouseOver:this.handleHover,onMouseLeave:this.leaveHover,style:{maxWidth:400}},o.a.createElement(g.a,null,o.a.createElement(w.a,{className:"cardMedia",style:{height:160,paddingTop:"56.25%"},alt:e.name,image:e.image,p:"2",title:e.name}),o.a.createElement(b.a,{className:"cardContent",style:{height:200}},this.state.hovered?o.a.createElement(P.a,{style:{fontSize:".8em"}},e.longDesc):o.a.createElement("div",null,o.a.createElement(P.a,{gutterBottom:!0,component:"h2",style:{paddingTop:"1em"}},e.title),o.a.createElement(P.a,{component:"p"},e.shortDesc))),e.webURL&&o.a.createElement("a",{href:e.webURL},o.a.createElement(d.a,{"aria-label":"website"},o.a.createElement(p.a,{icon:k.b,style:{color:"#ffb6c1"}}))),e.gitURL&&o.a.createElement("a",{href:e.gitURL},o.a.createElement(d.a,{"aria-label":"git-repo"},o.a.createElement(p.a,{icon:R.a,style:{color:"#ffb6c1"}}))),e.youtubeURL&&o.a.createElement("a",{href:e.youtubeURL},o.a.createElement(d.a,{"aria-label":"youtube"},o.a.createElement(p.a,{icon:R.e,style:{color:"#ffb6c1"}})))))},t}(o.a.Component),j=[{name:"Piggybank",image:"https://s3.amazonaws.com/poly-screenshots.angel.co/Project/25/921973/8463e2b17ba8c9ff862f38986a1eaef5-original.png",id:"1",shortDesc:"Personal finance with a friend",longDesc:"Piggybank is a personal finance app that pulls bank transactions through Plaid visualizes transactions and trends with Recharts. It also comes with a chatbot powered by DialogFlow to provide budget recommendations.",title:"Piggybank",webURL:"https://piggy-bank-app.herokuapp.com",youtubeURL:"https://www.youtube.com/watch?v=qCMmXo0vltQ",gitURL:"https://github.com/piggybank-capstone/piggybank"},{name:"talkwords",image:"https://s3.amazonaws.com/poly-screenshots.angel.co/Project/d9/921966/70a22c6183dd0baa4dd8c346fa53a076-original.png",id:"2",shortDesc:"a translation app",longDesc:"talkwords uses Chrome's Speech Recognition tool WebSpeech to record speech in virtually any language. It then translates it with Google Translate API. Using the Speech Synthesis, you can play the translated recording with native pronunciation",title:"talkwords",webURL:"",youtubeURL:"https://www.fullstackacademy.com/hackathon-presentations/talkwords",gitURL:"https://github.com/rebecca-chan/live-translator"},{name:"plutogames",image:"https://s3.amazonaws.com/poly-screenshots.angel.co/Project/e7/921971/b3d95eb7b659f9c7a1d482c59c164fb4-original.png",id:"3",shortDesc:"E-commerce platform for board and card games",longDesc:"Pluto Games is an e-commerce platform for games. Shoppers can filter games by type, age range, and select categories. Pluto Games uses Stripe for checkout and local storage to store items added to the cart",title:"Pluto Games",webURL:"https://pluto-games.herokuapp.com/",youtubeURL:"",gitURL:"https://github.com/Goat-Pluto-Shopper/pluto-games"},{name:"Visit LIC",image:"https://s3.amazonaws.com/poly-screenshots.angel.co/enhanced_screenshots/1783871-original.",id:"4",shortDesc:"Native Android Tour Guide App of LIC, NY",longDesc:"Visit LIC is a native Android App displaying various activities and highlights of LIC, NY. Coded in Java in Android Studio.",title:"Visit LIC",webURL:"",youtubeURL:"https://www.youtube.com/watch?v=NFsvb4ta0Rs",gitURL:"https://github.com/rebecca-chan/Visit-LIC"},{name:"Vimeo Cue Editor",image:"https://s3.amazonaws.com/poly-screenshots.angel.co/Project/8d/931656/345daf86fcf1f5f3cb36700862d4d179-original.png",id:"5",shortDesc:"Video editor to add educational cues to video",longDesc:"Video cue editor that allows you to add cues to video player.",title:"Vimeo Cue Editor",webURL:"https://rebecca-chan.github.io/video-cue-editor/",youtubeURL:"",gitURL:"https://github.com/rebecca-chan/video-cue-editor"},{label:"WWII Quiz App",image:"https://cdn4.iconfinder.com/data/icons/jetflat-2-multimedia-vol-2/60/004_100_code_tag_brackets_coding_html_development-512.png",id:"6",shortDesc:"WWII. Quiz app in Android",longDesc:"Quiz app on your WWII knowledge. Displays toast at the end with your results",title:"WWII Quiz App",webURL:"https://rebecca-chan.github.io/video-cue-editor/",youtubeURL:"",gitURL:"https://github.com/rebecca-chan/video-cue-editor"}];t.default=function(){return o.a.createElement(i.a,null,o.a.createElement(l.a,{title:"Projects"}),o.a.createElement("h1",null,"Projects"),o.a.createElement("div",{className:"projectgrid"},j.map(function(e){return o.a.createElement(N,{project:e,key:e.id})})),o.a.createElement(r.a,{to:"/"},"<-Back"))}},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),o=a.n(n),r=a(4),i=a.n(r),l=a(32),s=a.n(l);a.d(t,"a",function(){return s.a});a(149);var c=o.a.createContext({}),u=function(e){return o.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},153:function(e){e.exports={data:{site:{siteMetadata:{title:"REBECCA CHAN"}}}}},154:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),l=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,a){"use strict";var n=a(153),o=a(0),r=a.n(o),i=a(4),l=a.n(i),s=a(147),c=function(e){var t=e.siteTitle;return r.a.createElement("header",{style:{marginTop:"2rem",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h2",{style:{margin:0}},r.a.createElement(s.a,{to:"/"},t))))};c.propTypes={siteTitle:l.a.string},c.defaultProps={siteTitle:""};var u=c,d=(a(160),function(e){var t=e.children;return r.a.createElement(s.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement("footer",null)))},data:n})});d.propTypes={children:l.a.node.isRequired};t.a=d},157:function(e,t,a){"use strict";var n=a(158),o=a(0),r=a.n(o),i=a(4),l=a.n(i),s=a(167),c=a.n(s);function u(e){var t=e.description,a=e.lang,o=e.meta,i=e.keywords,l=e.title,s=n.data.site,u=t||s.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(o)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},158:function(e){e.exports={data:{site:{siteMetadata:{title:"REBECCA CHAN",description:"This is my personal page.",author:"@biqichan"}}}}},287:function(e,t,a){var n=a(25).f,o=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in o||a(17)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},288:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a(289))},289:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(73)),r=n(a(148)),i=n(a(0)),l=(n(a(4)),n(a(151))),s=n(a(290)),c=n(a(155)),u={root:{overflow:"hidden"}};function d(e){var t=e.classes,a=e.className,n=e.raised,c=(0,r.default)(e,["classes","className","raised"]);return i.default.createElement(s.default,(0,o.default)({className:(0,l.default)(t.root,a),elevation:n?8:1},c))}t.styles=u,d.defaultProps={raised:!1};var p=(0,c.default)(u,{name:"MuiCard"})(d);t.default=p},290:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a(291))},291:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(33)),r=n(a(148)),i=n(a(73)),l=n(a(0)),s=(n(a(4)),n(a(151))),c=(n(a(150)),a(152),n(a(155))),u=function(e){var t={};return e.shadows.forEach(function(e,a){t["elevation".concat(a)]={boxShadow:e}}),(0,i.default)({root:{backgroundColor:e.palette.background.paper},rounded:{borderRadius:e.shape.borderRadius}},t)};function d(e){var t=e.classes,a=e.className,n=e.component,c=e.square,u=e.elevation,d=(0,r.default)(e,["classes","className","component","square","elevation"]),p=(0,s.default)(t.root,t["elevation".concat(u)],(0,o.default)({},t.rounded,!c),a);return l.default.createElement(n,(0,i.default)({className:p},d))}t.styles=u,d.defaultProps={component:"div",elevation:2,square:!1};var p=(0,c.default)(u,{name:"MuiPaper"})(d);t.default=p},292:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a(293))},293:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(73)),r=n(a(148)),i=n(a(0)),l=(n(a(4)),n(a(151))),s=n(a(155)),c=n(a(195)),u=function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{pointerEvents:"none",position:"absolute",backgroundColor:"currentcolor",top:0,right:0,bottom:0,left:0,opacity:0,transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}};t.styles=u;var d=(0,s.default)(u,{name:"MuiCardActionArea"})(function(e){var t=e.children,a=e.classes,n=e.className,s=e.focusVisibleClassName,u=(0,r.default)(e,["children","classes","className","focusVisibleClassName"]);return i.default.createElement(c.default,(0,o.default)({className:(0,l.default)(a.root,n),focusVisibleClassName:(0,l.default)(s,a.focusVisible)},u),t,i.default.createElement("span",{className:a.focusHighlight}))});t.default=d},294:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a(295))},295:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(33)),r=n(a(73)),i=n(a(148)),l=n(a(0)),s=(n(a(4)),n(a(151))),c=(n(a(150)),a(152),n(a(155))),u={root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"}};t.styles=u;var d=["video","audio","picture","iframe","img"];function p(e){var t=e.classes,a=e.className,n=e.component,c=e.image,u=e.src,p=e.style,h=(0,i.default)(e,["classes","className","component","image","src","style"]),m=-1!==d.indexOf(n),f=!m&&c?(0,r.default)({backgroundImage:'url("'.concat(c,'")')},p):p;return l.default.createElement(n,(0,r.default)({className:(0,s.default)(t.root,(0,o.default)({},t.media,m),a),style:f,src:m?c||u:void 0},h))}p.defaultProps={component:"div"};var h=(0,c.default)(u,{name:"MuiCardMedia"})(p);t.default=h},296:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a(297))},297:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(73)),r=n(a(148)),i=n(a(0)),l=(n(a(4)),n(a(151))),s=(a(152),n(a(155))),c={root:{padding:16,"&:last-child":{paddingBottom:24}}};function u(e){var t=e.classes,a=e.className,n=e.component,s=(0,r.default)(e,["classes","className","component"]);return i.default.createElement(n,(0,o.default)({className:(0,l.default)(t.root,a)},s))}t.styles=c,u.defaultProps={component:"div"};var d=(0,s.default)(c,{name:"MuiCardContent"})(u);t.default=d},298:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a(299))},299:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(73)),r=n(a(33)),i=n(a(148)),l=n(a(0)),s=(n(a(4)),n(a(151))),c=(a(152),n(a(155))),u=a(197),d=function(e){return{root:{display:"block",margin:0},display4:e.typography.display4,display3:e.typography.display3,display2:e.typography.display2,display1:e.typography.display1,headline:e.typography.headline,title:e.typography.title,subheading:e.typography.subheading,body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},inline:{display:"inline"}}};t.styles=d;var p={display4:"h1",display3:"h2",display2:"h3",display1:"h4",headline:"h5",title:"h6",subheading:"subtitle1"};var h={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",display4:"h1",display3:"h1",display2:"h1",display1:"h1",headline:"h1",title:"h2",subheading:"h3"};function m(e){var t,a=e.align,n=e.classes,c=e.className,d=e.color,m=e.component,f=e.gutterBottom,g=e.headlineMapping,y=e.inline,b=(e.internalDeprecatedVariant,e.noWrap),v=e.paragraph,w=e.theme,E=e.variant,P=(0,i.default)(e,["align","classes","className","color","component","gutterBottom","headlineMapping","inline","internalDeprecatedVariant","noWrap","paragraph","theme","variant"]),R=function(e,t){var a=e.typography,n=t;return n||(n=a.useNextVariants?"body2":"body1"),a.useNextVariants&&(n=p[n]||n),n}(w,E),k=(0,s.default)(n.root,(t={},(0,r.default)(t,n[R],"inherit"!==R),(0,r.default)(t,n["color".concat((0,u.capitalize)(d))],"default"!==d),(0,r.default)(t,n.noWrap,b),(0,r.default)(t,n.gutterBottom,f),(0,r.default)(t,n.paragraph,v),(0,r.default)(t,n["align".concat((0,u.capitalize)(a))],"inherit"!==a),(0,r.default)(t,n.inline,y),t),c),N=m||(v?"p":g[R]||h[R])||"span";return l.default.createElement(N,(0,o.default)({className:k},P))}m.defaultProps={align:"inherit",color:"default",gutterBottom:!1,headlineMapping:h,inline:!1,noWrap:!1,paragraph:!1};var f=(0,c.default)(d,{name:"MuiTypography",withTheme:!0})(m);t.default=f}}]);
//# sourceMappingURL=component---src-pages-projects-js-759273589c3e667ec8af.js.map