_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"/MTk":function(e,t,r){"use strict";r.d(t,"b",(function(){return p}));var a=r("KQm4"),n=r("rePB"),o=r("ODXe"),i=r("q1tI"),c=r.n(i),l=r("7Cbv"),s=c.a.createElement;function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=c.a.createContext(),p=function(){return c.a.useContext(f)};t.a=function(e){var t=e.children,r=c.a.useState(m),n=Object(o.a)(r,2),i=n[0],u=n[1];return s(f.Provider,{value:{colors:i,remove:function(e){return u(i.filter((function(t){return t.id!==e})))},rateColor:function(e,t){u(i.map((function(r){return r.id===e?d(d({},r),{},{rating:t}):r})))},addColors:function(e){u([].concat(Object(a.a)(i),[d(d({},e),{},{rating:0,id:Object(l.a)()})]))}}},t)};var m=[{id:"0175d1f0-a8c6-41bf-8d02-df5734d829a4",title:"ocean at dusk",color:"#00c4e2",rating:5},{id:"83c7ba2f-7392-4d7d-9e23-35adbe186046",title:"lawn",color:"#26ac56",rating:3},{id:"a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",title:"bright red",color:"#ff0000",rating:0}]},"7Cbv":function(e,t,r){"use strict";var a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),n=new Uint8Array(16);function o(){if(!a)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(n)}for(var i=[],c=0;c<256;++c)i.push((c+256).toString(16).substr(1));var l=function(e,t){var r=t||0,a=i;return(a[e[r+0]]+a[e[r+1]]+a[e[r+2]]+a[e[r+3]]+"-"+a[e[r+4]]+a[e[r+5]]+"-"+a[e[r+6]]+a[e[r+7]]+"-"+a[e[r+8]]+a[e[r+9]]+"-"+a[e[r+10]]+a[e[r+11]]+a[e[r+12]]+a[e[r+13]]+a[e[r+14]]+a[e[r+15]]).toLowerCase()};t.a=function(e,t,r){"string"===typeof e&&(t="binary"===e?new Uint8Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){for(var n=r||0,i=0;i<16;++i)t[n+i]=a[i];return t}return l(a)}},LYUY:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r("wx14"),n=r("q1tI"),o=r.n(n),i=r("HR5l");function c(e,t){var r=o.a.memo(o.a.forwardRef((function(t,r){return o.a.createElement(i.a,Object(a.a)({ref:r},t),e)})));return r.muiName=i.a.muiName,r}},PsDL:function(e,t,r){"use strict";var a=r("wx14"),n=r("Ff2n"),o=r("q1tI"),i=(r("17x9"),r("iuhU")),c=r("H2TA"),l=r("ye/S"),s=r("VD++"),u=r("NqtD"),d=o.forwardRef((function(e,t){var r=e.edge,c=void 0!==r&&r,l=e.children,d=e.classes,f=e.className,p=e.color,m=void 0===p?"default":p,b=e.disabled,v=void 0!==b&&b,h=e.disableFocusRipple,g=void 0!==h&&h,y=e.size,O=void 0===y?"medium":y,j=Object(n.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return o.createElement(s.a,Object(a.a)({className:Object(i.a)(d.root,f,"default"!==m&&d["color".concat(Object(u.a)(m))],v&&d.disabled,"small"===O&&d["size".concat(Object(u.a)(O))],{start:d.edgeStart,end:d.edgeEnd}[c]),centerRipple:!0,focusRipple:!g,disabled:v,ref:t},j),o.createElement("span",{className:d.label},l))}));t.a=Object(c.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(l.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(d)},eNBn:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn",function(){return r("ezzS")}])},erV9:function(e){e.exports=JSON.parse("{}")},ezzS:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return x}));var a=r("ODXe"),n=r("wx14"),o=r("KQm4"),i=r("rePB"),c=r("Ff2n"),l=r("q1tI"),s=r.n(l),u=r("kKAo"),d=r("wb2y"),f=r("iae6"),p=r("PsDL"),m=r("LYUY"),b=Object(m.a)(s.a.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),v=Object(m.a)(s.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),h=r("/MTk"),g=(r("erV9"),s.a.createElement);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=function(e){var t=e.selected,r=void 0!==t&&t,a=e.handleclick;return g(b,{htmlColor:r?"red":"gray",onClick:void 0===a?function(e){return e}:a})},k=function(e){var t=e.stars,r=void 0===t?5:t,a=e.sendClicked,i=void 0===a?function(e){return e}:a,l=e.rate,s=void 0===l?3:l,u=e.style,d=void 0===u?{}:u,f=Object(c.a)(e,["stars","sendClicked","rate","style"]);return g("div",Object(n.a)({style:O({padding:8,border:"1px "},d)},f),Object(o.a)(Array(r)).map((function(e,t){return g(j,{key:t,selected:s>t,handleclick:function(){return i(t+1)}})})))};function x(){return g(s.a.Fragment,null,g(u.a,{className:"w-5/6 mx-auto my-10 p-6"},g(w,null)),g(d.a,null),g(u.a,{className:"mx-auto w-64 p-2"},g(D,null)))}var w=function(){var e=Object(h.b)().colors;return e.length?g("div",{className:"flex flex-row justify-center  "},e.map((function(e){return g(S,Object(n.a)({key:e.id},e))}))):g("div",{className:"text-center"}," ",g(f.a,{fontSize:"2rem"})," ")},C=function(e){var t=e.title,r=e.color,a=e.rating,n=e.id,o=Object(h.b)(),i=o.remove,c=o.rateColor;return console.log("rendering color",n),g("section",{className:"w-50 mx-2 p-3"},g("h1",null,t),g(p.a,{onClick:function(){return i(n)}},g(v,{color:"secondary",size:"small"})),g("div",{style:{height:50,backgroundColor:r}}),g(k,{rate:a,sendClicked:function(e){return c(n,e)}}))},S=s.a.memo(C,(function(e,t){return console.log(e.id===t.id)}));function D(){var e=s.a.useState(""),t=Object(a.a)(e,2),r=t[0],n=t[1],o=s.a.useState("#000000"),i=Object(a.a)(o,2),c=i[0],l=i[1],u=Object(h.b)().addColors;return g("form",{onSubmit:function(e){e.preventDefault(),u({title:r,color:c}),n(""),l("#000")}},g("input",{value:r,onChange:function(e){return n(e.target.value)},type:"text",placeholder:"color title...",required:!0}),g("input",{value:c,onChange:function(e){return l(e.target.value)},type:"color",required:!0}),g("button",null,"ADD"))}function N(){var e="0123456789abcdefghijklmnopqrstuvwxyz";return function(){for(var t=e.split(""),r="",a=0;a<4;a++)r+=t[Math.floor(Math.random()*e.length)];return r}}var P=N(),E=N(),R=N(),z=N(),I="".concat(P(),"-").concat(E(),"-").concat(R(),"-").concat(z());console.log(I)},iae6:function(e,t,r){"use strict";var a=r("wx14"),n=r("Ff2n"),o=r("q1tI"),i=(r("17x9"),r("iuhU")),c=r("H2TA"),l=r("NqtD");function s(e){var t,r,a;return t=e,r=0,a=1,e=(Math.min(Math.max(r,t),a)-r)/(a-r),e=(e-=1)*e*e+1}var u=o.forwardRef((function(e,t){var r,c=e.classes,u=e.className,d=e.color,f=void 0===d?"primary":d,p=e.disableShrink,m=void 0!==p&&p,b=e.size,v=void 0===b?40:b,h=e.style,g=e.thickness,y=void 0===g?3.6:g,O=e.value,j=void 0===O?0:O,k=e.variant,x=void 0===k?"indeterminate":k,w=Object(n.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),C={},S={},D={};if("determinate"===x||"static"===x){var N=2*Math.PI*((44-y)/2);C.strokeDasharray=N.toFixed(3),D["aria-valuenow"]=Math.round(j),"static"===x?(C.strokeDashoffset="".concat(((100-j)/100*N).toFixed(3),"px"),S.transform="rotate(-90deg)"):(C.strokeDashoffset="".concat((r=(100-j)/100,r*r*N).toFixed(3),"px"),S.transform="rotate(".concat((270*s(j/70)).toFixed(3),"deg)"))}return o.createElement("div",Object(a.a)({className:Object(i.a)(c.root,u,"inherit"!==f&&c["color".concat(Object(l.a)(f))],{indeterminate:c.indeterminate,static:c.static}[x]),style:Object(a.a)(Object(a.a)({width:v,height:v},S),h),ref:t,role:"progressbar"},D,w),o.createElement("svg",{className:c.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},o.createElement("circle",{className:Object(i.a)(c.circle,m&&c.circleDisableShrink,{indeterminate:c.circleIndeterminate,static:c.circleStatic}[x]),style:C,cx:44,cy:44,r:(44-y)/2,fill:"none",strokeWidth:y})))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(u)},kKAo:function(e,t,r){"use strict";var a=r("Ff2n"),n=r("wx14"),o=r("q1tI"),i=(r("17x9"),r("iuhU")),c=r("H2TA"),l=o.forwardRef((function(e,t){var r=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,u=e.square,d=void 0!==u&&u,f=e.elevation,p=void 0===f?1:f,m=e.variant,b=void 0===m?"elevation":m,v=Object(a.a)(e,["classes","className","component","square","elevation","variant"]);return o.createElement(s,Object(n.a)({className:Object(i.a)(r.root,c,"outlined"===b?r.outlined:r["elevation".concat(p)],!d&&r.rounded),ref:t},v))}));t.a=Object(c.a)((function(e){var t={};return e.shadows.forEach((function(e,r){t["elevation".concat(r)]={boxShadow:e}})),Object(n.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(l)},wb2y:function(e,t,r){"use strict";var a=r("wx14"),n=r("Ff2n"),o=r("q1tI"),i=(r("17x9"),r("iuhU")),c=r("H2TA"),l=r("ye/S"),s=o.forwardRef((function(e,t){var r=e.absolute,c=void 0!==r&&r,l=e.classes,s=e.className,u=e.component,d=void 0===u?"hr":u,f=e.flexItem,p=void 0!==f&&f,m=e.light,b=void 0!==m&&m,v=e.orientation,h=void 0===v?"horizontal":v,g=e.role,y=void 0===g?"hr"!==d?"separator":void 0:g,O=e.variant,j=void 0===O?"fullWidth":O,k=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(d,Object(a.a)({className:Object(i.a)(l.root,s,"fullWidth"!==j&&l[j],c&&l.absolute,p&&l.flexItem,b&&l.light,"vertical"===h&&l.vertical),role:y,ref:t},k))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)}},[["eNBn",0,1,2]]]);