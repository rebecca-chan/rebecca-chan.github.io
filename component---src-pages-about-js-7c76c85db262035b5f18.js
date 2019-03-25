(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(148),s=a(206),o=a(174),l=a.n(o),d=function(){return r.a.createElement(n.b,{query:"627785576",render:function(e){return r.a.createElement(l.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:s})},c=a(157),A=a(158);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(A.a,{title:"Rebecca Chan - About"}),r.a.createElement("div",{id:"about"},r.a.createElement("div",{className:"left"},r.a.createElement(d,null)),r.a.createElement("div",{className:"right"},r.a.createElement("h1",null,"About Me"),r.a.createElement("p",null,"Hi! I'm Rebecca. I'm a software engineer && digital marketer living in NYC."),r.a.createElement("p",null,"For the last 6 years, I advertised for brands within Microsoft, L'Oreal and LVMH. If you've ever seen ads from them online, I probably put it there. I may have even written them."),r.a.createElement("p",null,"Recently, I graduated from Grace Hopper Academy, a 17-week immersive Javascript bootcamp for women. I loved every minute of it, and made new life-long friends. Not only that, but now I can build full stack web applications! That's pretty neat."),r.a.createElement("p",null,"Growing up in the 90s, my first experience in code was making a really cheesey Geocities site about my favorite Final Fantasy characters. Later, I used Stata when I did undergraduate research for the brilliant Kenneth Chay at Brown University. I eventually found myself working in advertising analytics. Advertising has some really cool data, and I often wished that I could show it to our clients in a way that was digestible and easy to interact with. That's why I decided I wanted to learn to code."),r.a.createElement(n.a,{to:"/"},"<-Back"))))}},148:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(32),l=a.n(o);a.d(t,"a",function(){return l.a});a(150);var d=r.a.createContext({}),c=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},150:function(e,t,a){var i;e.exports=(i=a(155))&&i.default||i},154:function(e){e.exports={data:{site:{siteMetadata:{title:"REBECCA CHAN"}}}}},155:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},157:function(e,t,a){"use strict";var i=a(154),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(148),d=function(e){var t=e.siteTitle;return n.a.createElement("header",{style:{marginTop:"2rem",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h2",{style:{margin:0}},n.a.createElement(l.a,{to:"/"},t))))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var c=d,A=(a(161),function(e){var t=e.children;return n.a.createElement(l.b,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.a.createElement("main",null,t),n.a.createElement("footer",null)))},data:i})});A.propTypes={children:o.a.node.isRequired};t.a=A},158:function(e,t,a){"use strict";var i=a(159),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(168),d=a.n(l);function c(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,l=i.data.site,c=t||l.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=c},159:function(e){e.exports={data:{site:{siteMetadata:{title:"REBECCA CHAN",description:"This is my personal page.",author:"@biqichan"}}}}},174:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(35)),o=i(a(75)),l=i(a(73)),d=i(a(0)),c=i(a(4)),A=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},f=function(e){var t=A(e),a=t.fluid?t.fluid.src:t.fixed.src;return u[a]||!1},p=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),p.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+"<img "+o+l+a+r+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,A=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},A,{onLoad:s,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});g.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=A(e),a=t.fluid?t.fluid.src:t.fixed.src,u[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=A(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.Tag,E=e.itemProp,w="boolean"==typeof y?"lightgray":y,v=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,u),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),I={title:t,alt:this.state.isVisible?"":a,style:v,className:f};if(p){var R=p;return d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),R.base64&&d.default.createElement(g,(0,l.default)({src:R.base64},I)),R.tracedSVG&&d.default.createElement(g,(0,l.default)({src:R.tracedSVG},I)),w&&d.default.createElement(b,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement(g,{alt:a,title:t,sizes:R.sizes,src:R.src,srcSet:R.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},R))}}))}if(h){var B=h,j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},n);return"inherit"===n.display&&delete j.display,d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},B.base64&&d.default.createElement(g,(0,l.default)({src:B.base64},I)),B.tracedSVG&&d.default.createElement(g,(0,l.default)({src:B.tracedSVG},I)),w&&d.default.createElement(b,{title:t,style:{backgroundColor:w,width:B.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:B.height}}),this.state.isVisible&&d.default.createElement("picture",null,B.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:B.srcSetWebp,sizes:B.sizes}),d.default.createElement(g,{alt:a,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,srcSet:B.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:B.width,height:B.height},B))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var w=y;t.default=w},206:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBP/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABRjdlIkM//8QAGRABAQEAAwAAAAAAAAAAAAAAAgEAAxAS/9oACAEBAAEFAk7IL0DHpwj1v//EABYRAAMAAAAAAAAAAAAAAAAAAAEQMf/aAAgBAwEBPwERf//EABYRAQEBAAAAAAAAAAAAAAAAAAEQIf/aAAgBAgEBPwFdn//EABoQAAEFAQAAAAAAAAAAAAAAAAEAAhARITH/2gAIAQEABj8CTdu4IKBrmR//xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhQVH/2gAIAQEAAT8hZJwlZui3suezchuJoRdn/9oADAMBAAIAAwAAABCL3//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPxBVRT//xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQIBAT8QnhH/xAAbEAEAAwEAAwAAAAAAAAAAAAABABEhUUGBkf/aAAgBAQABPxB/KsSBebiU2m2cgZq6iXHS+fIb/RW+YgjjU//Z",aspectRatio:1,src:"/static/a889415538a5ea8740b912b2fa74e8bd/5b4be/head.jpg",srcSet:"/static/a889415538a5ea8740b912b2fa74e8bd/633f1/head.jpg 1250w,\n/static/a889415538a5ea8740b912b2fa74e8bd/9f0ff/head.jpg 2500w,\n/static/a889415538a5ea8740b912b2fa74e8bd/5b4be/head.jpg 5000w,\n/static/a889415538a5ea8740b912b2fa74e8bd/bd50c/head.jpg 5184w",sizes:"(max-width: 5000px) 100vw, 5000px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-7c76c85db262035b5f18.js.map