_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{GOMq:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return a("PJ8K")}])},IsqK:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),o=a("q1tI"),l=(a("17x9"),a("iuhU")),c=a("H2TA"),i=a("ofer"),s=a("MquD"),u=o.forwardRef((function(e,t){var a=e.children,c=e.classes,u=e.className,d=e.disableTypography,p=void 0!==d&&d,m=e.inset,f=void 0!==m&&m,g=e.primary,y=e.primaryTypographyProps,b=e.secondary,h=e.secondaryTypographyProps,E=Object(r.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),v=o.useContext(s.a).dense,S=null!=g?g:a;null==S||S.type===i.a||p||(S=o.createElement(i.a,Object(n.a)({variant:v?"body2":"body1",className:c.primary,component:"span",display:"block"},y),S));var C=b;return null==C||C.type===i.a||p||(C=o.createElement(i.a,Object(n.a)({variant:"body2",className:c.secondary,color:"textSecondary",display:"block"},h),C)),o.createElement("div",Object(n.a)({className:Object(l.a)(c.root,u,v&&c.dense,f&&c.inset,S&&C&&c.multiline),ref:t},E),S,C)}));t.a=Object(c.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(u)},NyZT:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={ADD_ISSUES:"ADD_ISSUES",DELETE_ISSUES:"DELETE_ISSUES",ADD_ISSUE:"ADD_ISSUE",ADD_SELECTED:"ADD_SELECTED",REMOVE_SELECTED:"REMOVE_SELECTED",ADD_FETCHED:"ADD_FETCHED",REMOVE_FETCHED:"REMOVE_FETCHED",DEPT_ISSUES:"DEPT_ISSUES",RESET_ISSUES:"RESET_ISSUES",ISSUE_DEPT:"ISSUE_DEPT",FETCH_ALL:"FETCH_ALL"}},OXHv:function(e,t,a){"use strict";a.d(t,"e",(function(){return r})),a.d(t,"d",(function(){return o})),a.d(t,"k",(function(){return l})),a.d(t,"j",(function(){return c})),a.d(t,"h",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return u})),a.d(t,"g",(function(){return d})),a.d(t,"b",(function(){return p})),a.d(t,"f",(function(){return m})),a.d(t,"i",(function(){return f}));var n=a("aJdC"),r=function(e){return{type:n.a.ADD_POSTS,payload:e}},o=function(e){return{type:n.a.ADD_POST,payload:e}},l=function(e){return{type:n.a.SET_TICKS,payload:e}},c=function(e){return{type:n.a.RESOLVE_ISSUE,payload:e}},i=function(e){return{type:n.a.GET_POST,payload:e}},s=function(e){return{type:n.a.ADD_COMMENT,payload:e}},u=function(e){return{type:n.a.EDITED_COMMENT,payload:e}},d=function(e){return{type:n.a.DELETE_COMMENT,payload:e}},p=function(e){return{type:n.a.ADD_COMMENTS,payload:e}},m=function(e){return{type:n.a.ADD_RECENT_POSTS,payload:e}},f=function(e){return{type:n.a.RECENT_CLICKED,payload:e}}},PJ8K:function(e,t,a){"use strict";a.r(t);var n=a("ODXe"),r=a("q1tI"),o=a.n(r),l=a("nOHt"),c=a.n(l),i=a("ZiQX"),s=a("/MKj"),u=a("vDqi"),d=a.n(u),p=a("tRbT"),m=a("wb2y"),f=a("iae6"),g=a("OXHv"),y=a("5jqn"),b=a("lMTm"),h=a("L6Je"),E=a("wx14"),v=a("MX0m"),S=a.n(v),C=(a("YFqc"),a("bSwy")),T=a.n(C),D=a("f+F2"),O=a.n(D),_=a("nCZa"),N=a("/EAt"),I=a("Imu7"),w=a("sRsu"),j=a("3PeG"),k=a("Uf6+"),x=a("Z3vd"),A=a("30+C"),P=a("o4QW"),R=a("NrVZ"),L=a("Ff2n"),M=(a("17x9"),a("iuhU")),U=a("5AJ6"),z=Object(U.a)(r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),F=a("H2TA"),V=a("ye/S"),H=a("bfFb"),$=a("NqtD"),K=a("VD++");function q(e){return"Backspace"===e.key||"Delete"===e.key}var X=r.forwardRef((function(e,t){var a=e.avatar,n=e.classes,o=e.className,l=e.clickable,c=e.color,i=void 0===c?"default":c,s=e.component,u=e.deleteIcon,d=e.disabled,p=void 0!==d&&d,m=e.icon,f=e.label,g=e.onClick,y=e.onDelete,b=e.onKeyDown,h=e.onKeyUp,v=e.size,S=void 0===v?"medium":v,C=e.variant,T=void 0===C?"default":C,D=Object(L.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),O=r.useRef(null),_=Object(H.a)(O,t),N=function(e){e.stopPropagation(),y&&y(e)},I=!(!1===l||!g)||l,w="small"===S,j=s||(I?K.a:"div"),k=j===K.a?{component:"div"}:{},x=null;if(y){var A=Object(M.a)("default"!==i&&("default"===T?n["deleteIconColor".concat(Object($.a)(i))]:n["deleteIconOutlinedColor".concat(Object($.a)(i))]),w&&n.deleteIconSmall);x=u&&r.isValidElement(u)?r.cloneElement(u,{className:Object(M.a)(u.props.className,n.deleteIcon,A),onClick:N}):r.createElement(z,{className:Object(M.a)(n.deleteIcon,A),onClick:N})}var P=null;a&&r.isValidElement(a)&&(P=r.cloneElement(a,{className:Object(M.a)(n.avatar,a.props.className,w&&n.avatarSmall,"default"!==i&&n["avatarColor".concat(Object($.a)(i))])}));var R=null;return m&&r.isValidElement(m)&&(R=r.cloneElement(m,{className:Object(M.a)(n.icon,m.props.className,w&&n.iconSmall,"default"!==i&&n["iconColor".concat(Object($.a)(i))])})),r.createElement(j,Object(E.a)({role:I||y?"button":void 0,className:Object(M.a)(n.root,o,"default"!==i&&[n["color".concat(Object($.a)(i))],I&&n["clickableColor".concat(Object($.a)(i))],y&&n["deletableColor".concat(Object($.a)(i))]],"default"!==T&&[n.outlined,{primary:n.outlinedPrimary,secondary:n.outlinedSecondary}[i]],p&&n.disabled,w&&n.sizeSmall,I&&n.clickable,y&&n.deletable),"aria-disabled":!!p||void 0,tabIndex:I||y?0:void 0,onClick:g,onKeyDown:function(e){e.currentTarget===e.target&&q(e)&&e.preventDefault(),b&&b(e)},onKeyUp:function(e){e.currentTarget===e.target&&(y&&q(e)?y(e):"Escape"===e.key&&O.current&&O.current.blur()),h&&h(e)},ref:_},k,D),P||R,r.createElement("span",{className:Object(M.a)(n.label,w&&n.labelSmall)},f),x)})),B=Object(F.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(V.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(V.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(V.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(V.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(V.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(V.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(V.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(V.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(V.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(V.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(V.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(V.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(V.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(V.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(V.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(X),G=Object(U.a)(r.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var J=r.forwardRef((function(e,t){var a=e.alt,n=e.children,o=e.classes,l=e.className,c=e.component,i=void 0===c?"div":c,s=e.imgProps,u=e.sizes,d=e.src,p=e.srcSet,m=e.variant,f=void 0===m?"circle":m,g=Object(L.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),y=null,b=function(e){var t=e.src,a=e.srcSet,n=r.useState(!1),o=n[0],l=n[1];return r.useEffect((function(){if(t||a){l(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=a,n.onload=function(){e&&l("loaded")},n.onerror=function(){e&&l("error")},function(){e=!1}}}),[t,a]),o}({src:d,srcSet:p}),h=d||p,v=h&&"error"!==b;return y=v?r.createElement("img",Object(E.a)({alt:a,src:d,srcSet:p,sizes:u,className:o.img},s)):null!=n?n:h&&a?a[0]:r.createElement(G,{className:o.fallback}),r.createElement(i,Object(E.a)({className:Object(M.a)(o.root,o.system,o[f],l,!v&&o.colorDefault),ref:t},g),y)})),Z=Object(F.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(J),W=a("ADg1"),Y=a("1AYd"),Q=a("pdwK"),ee=a("Spdj"),te=a("ofer"),ae=a("7SZd"),ne=a("l1im"),re=a("t6oH"),oe=o.a.createElement,le=20;var ce=function(e){var t=e.id,a=e.index,n=void 0===a?"":a,r=e.clientName,o=void 0===r?"":r,l=e.clientPhone,i=void 0===l?"":l,s=e.clientEmail,u=void 0===s?"":s,d=e.clientOrg,p=void 0===d?"":d,m=(e.message,e.handler),f=void 0===m?"":m,g=e.issue,y=void 0===g?"":g,b=e.handler_id,h=void 0===b?0:b,E=e.subject,v=void 0===E?"":E,S=(e.clientDept,e.addedBy),C=void 0===S?"":S,T=e.status,D=void 0===T?"":T,_=e.adder,N=void 0===_?"":_,I=e.altId,k=void 0===I?"":I,A=e.addedon,P=void 0===A?"":A,R=e.seen,L=void 0===R?"0":R,M=e.setTicks,U=void 0===M?function(e){return e}:M,z=function(e){return Boolean(Number(e))?Number(e)>1?["bg-success","Resolved"]:["bg-info","In-progress"]:["bg-warning","Pending"]};return oe(w.a,null,oe(j.a,null,n+1,oe(O.a,{color:Boolean(Number(L))?"secondary":"inherit"})," "),oe(j.a,null,o),oe(j.a,null,i," ",oe("br",null),oe("small",null,u)),oe(j.a,null,p),oe(j.a,null,y),oe(j.a,null,v),oe(j.a,null,oe("b",null,+h===le?"You":f," ")),oe(j.a,null,oe(x.a,{className:"".concat(z(D)[0]," text-white"),size:"small"},z(D)[1])),oe(j.a,null,P),oe(j.a,null,oe("b",null,+h===le||N===le?"You":C," ")),oe(j.a,null,oe(x.a,{variant:"contained",color:"secondary",target:"_blank",onClick:function(){return function(e,t,a,n){le===+h&&"0"===L&&U(e),a.split(" ").join("-"),c.a.push("/post?issue=".concat(t),void 0,{shallow:!1})}(t,k,v)}},"Details")))},ie=function(e){var t=e.posts,a=void 0===t?[]:t,r=e.setTicks,l=void 0===r?function(e){return e}:r,c=a.length>=10?10:a.length,i=Math.ceil(a.length/c),s=o.a.useState(0),u=Object(n.a)(s,2),d=u[0],p=u[1],m=d*c,f=d*c+c;return console.log("posts",a),oe(o.a.Fragment,null,oe(de,{posts:a.length}),oe(_.a,{className:"table-responsive"},oe(N.a,{className:"table"},oe(I.a,null,oe(w.a,null,oe(j.a,{component:"th",scope:"row",className:"thead"},"#"),oe(j.a,{scope:"row",className:"thead bg-light"},"Name"),oe(j.a,{scope:"row",className:"thead bg-light"},"Contacts"),oe(j.a,{scope:"row",className:"thead bg-light"},"Organisation"),oe(j.a,{scope:"row",className:"thead bg-light"},"Issue"),oe(j.a,{scope:"row",className:"thead bg-light"},"Subject"),oe(j.a,{scope:"row",className:"thead bg-light"},"Handler"),oe(j.a,{scope:"row",className:"thead bg-light"},"Status"),oe(j.a,{scope:"row",className:"thead bg-light"},"Added on"),oe(j.a,{scope:"row",className:"thead bg-light"},"Added By"),oe(j.a,{scope:"row",className:"thead bg-light"},"Details"))),oe(k.a,null,a.slice(m,f).map((function(e,t){return oe(ce,Object(E.a)({key:e.id},e,{setTicks:l,index:t}))})))),oe(S.a,{id:"4047313646"},[".thead.jsx-4047313646{font-weight:bold;color:red;}"])),oe(ne.a,{color:"primary",count:i,defaultPage:d+1,size:"large",onChange:function(e,t){p(t-1)}}))},se=function(e){var t=e.sendGroup,a=e.issues,n=e.setIssue,r=e.issue,o=e.users,l=e.user,c=e.getUser,i=e.handleSearch;return oe(p.a,{container:!0,justify:"space-evenly",alignItems:"center",wrap:"wrap",className:"my-2 p-2"},oe(p.a,{item:!0,grow:3},oe(A.a,null,"Search",oe(ue,{sendValue:i}))),oe(p.a,{item:!0},oe(A.a,null,oe("p",null,"View by resolution stages"),oe(P.a,null,oe(R.a,{variant:"contained",color:"primary","aria-label":"contained primary button group"},oe(x.a,{onClick:function(){return t(0)},className:"bg-warning"},"Pending"),oe(x.a,{className:"bg-info mx-2",onClick:function(){return t(1)}},"In-progress"," "),oe(x.a,{className:"bg-success",onClick:function(){return t(2)}},"Resolved"))))),oe(p.a,{item:!0},oe("p",null,"View by nature of issues"),oe(re.d,{issues:a,getIssue:n,issue:r})),oe(p.a,{item:!0},oe("p",null," View By days"),oe(B,{avatar:oe(Z,null,"10"),color:"primary",size:"medium",label:"pending"})),oe(p.a,{item:!0},oe("p",null," view by Colleagues "),oe(re.a,{users:o,getUser:c,user:l})))},ue=function(e){var t=e.sendValue,a=void 0===t?function(e){return e}:t,r=o.a.useState(""),l=Object(n.a)(r,2),c=l[0],i=l[1],s=function(e){e.preventDefault(),c.trim().length>0&&a(c)};return oe("form",{className:"form w-100",noValidate:!0,autoComplete:"off",onSubmit:s},oe(W.a,null,oe(Y.a,{htmlFor:"search-post"},"Search name,email,phone"),oe(Q.a,{error:!0,type:"search",id:"search-post",label:"Outlined",variant:"outlined",autoFocus:!0,onChange:function(e){return i(e.target.value)},endAdornment:oe(ae.a,{position:"end"},oe(T.a,{size:"large",style:{cursor:"pointer"},onClick:s})),"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"search"}}),oe(ee.a,null,"Search anything")))},de=function(e){var t=e.posts;return oe(te.a,null,t," ",t>1?"issues":"issue")},pe=o.a.createElement;t.default=function(){var e=o.a.useState(""),t=Object(n.a)(e,2),a=t[0],r=t[1],l=o.a.useState(!1),u=Object(n.a)(l,2),E=u[0],v=u[1],S=o.a.useState(""),C=Object(n.a)(S,2),T=C[0],D=C[1],O=o.a.useState(""),_=Object(n.a)(O,2),N=_[0],I=_[1],w=Object(s.b)(),j=20,k=5,x=Object(s.c)((function(e){return{posts:e.posts.posts,issues:e.issues.deptIssues,users:e.users.userdepts}})),A=x.posts,P=x.issues,R=x.users,L=function(e,t){d.a.get(e).then((function(e){if(!Array.isArray(e.data))throw new Error("No data found");var a=e.data;w(t(a))})).catch((function(e){return r("Error: "+e.message)})).finally((function(){return setTimeout((function(){return r("")}),3e3)}))},M=function(e){d.a.get("./server/issues/issues.php?fetchSelectedIssue=true&id=".concat(e,"&uuid=").concat(j)).then((function(e){if(!Array.isArray(e.data))throw new Error("No data found");w(b.a(e.data))})).catch((function(e){return console.error("fetch posts:",e)}))};return o.a.useEffect((function(){var e,t;console.log(c.a),!j&&(A.length||P.length||R.length)&&c.a.push("/login"),Promise.all([(t=j,v(!0),void d.a.get("/posts/".concat(t)).then((function(e){w(g.e(e.data))})).catch((function(e){r("Something went wrong...".concat(e.message))})).finally((function(){return v(!1)}))),(e=k,void d.a.get("./server/users/users.php?getdeptusers=true&deptId=".concat(e)).then((function(e){if(!Array.isArray(e.data))throw new Error("No data found");var t=e.data;w(y.b(t))})).catch((function(e){return console.error("fetch posts:",e)})).finally((function(){return console.log("finally")}))),M(k)])}),[]),pe(h.a,null,pe(p.a,{container:!0},pe(se,{sendGroup:function(e){var t="/posts/btngroup/".concat(e,"/").concat(j);L(t,g.e)},issues:P,issue:T,setIssue:function(e){D(e);var t="/posts/fetchIssues/".concat(e,"/").concat(j);L(t,g.e)},users:R,user:N,getUser:function(e){I(e);var t="/posts/fetchbyusers/".concat(e,"/").concat(j);L(t,g.e)},handleSearch:function(e){var t="/posts/search/".concat(e,"/").concat(j);L(t,g.e)}}),pe(m.a,null),A.length?pe(ie,{posts:A,setTicks:function(e){w(g.k(e)),d.a.get("/posts/setticks/".concat(e,"/").concat(j)).then((function(e){return console.log(e.data)})).catch((function(e){return console.log("ticks",e)}))}}):E&&!a?pe("div",{className:"text-center m-4 p-4"},pe(f.a,{size:"3rem"})):pe(i.a,{severity:"error",className:"text-center my-1 mx-auto w-50 p-1"}," ",a)))}},aJdC:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={ADD_POSTS:"ADD_POSTS",ADD_POST:"ADD_POST",SELECTED_USER:"SELECTED_USER",SET_TICKS:"SET_TICKS",GET_POST:"GET_POST",ADD_COMMENT:"ADD_COMMENT",DELETE_COMMENT:"DELETE_COMMENT",ADD_COMMENTS:"ADD_COMMENTS",ADD_RECENT_POSTS:"ADD_RECENT_POSTS",EDITED_COMMENT:"EDITED_COMMENT",RESOLVE_ISSUE:"RESOLVE_ISSUE",RECENT_CLICKED:"RECENT_CLICKED"}},"f+F2":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),o=(0,n(a("8/g6")).default)(r.default.createElement("path",{d:"M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"}),"DoneAll");t.default=o},lMTm:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"f",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return c})),a.d(t,"k",(function(){return i})),a.d(t,"j",(function(){return s})),a.d(t,"c",(function(){return u})),a.d(t,"i",(function(){return d})),a.d(t,"a",(function(){return p})),a.d(t,"h",(function(){return m})),a.d(t,"g",(function(){return f}));var n=a("NyZT"),r=function(e){return{type:n.a.ADD_ISSUES,payload:e}},o=function(e){return{type:n.a.DELETE_ISSUES,payload:e}},l=function(e){return{type:n.a.ADD_ISSUE,payload:e}},c=function(e){return{type:n.a.ADD_SELECTED,payload:e}},i=function(e){return{type:n.a.RESET_ISSUES,payload:e}},s=function(e){return{type:n.a.REMOVE_SELECTED,payload:e}},u=function(e){return{type:n.a.ADD_FETCHED,payload:e}},d=function(e){return{type:n.a.REMOVE_FETCHED,payload:e}},p=function(e){return{type:n.a.DEPT_ISSUES,payload:e}},m=function(e){return{type:n.a.ISSUE_DEPT,payload:e}},f=function(){return{type:n.a.FETCH_ALL}}},t6oH:function(e,t,a){"use strict";a.d(t,"b",(function(){return E})),a.d(t,"c",(function(){return v})),a.d(t,"a",(function(){return S}));var n=a("ODXe"),r=a("q1tI"),o=a.n(r),l=a("ADg1"),c=a("1AYd"),i=a("cVXz"),s=a("jjAL"),u=a("ofer"),d=a("eD//"),p=a("tVbE"),m=a("IsqK"),f=(a("pdwK"),a("R/WZ")),g=a("l1im"),y=o.a.createElement,b=Object(f.a)({formControl:{width:"80%",margin:".5rem auto"}}),h=20;t.d=function(e){var t=e.issues,a=void 0===t?[]:t,r=e.getIssue,u=void 0===r?function(e){return e}:r,d=e.issue,p=void 0===d?"":d,m=e.multiple,f=void 0!==m&&m,g=o.a.useState(!0),h=Object(n.a)(g,2),E=h[0],v=h[1],S=b();return y(l.a,{className:S.formControl},y(c.a,{id:"issues-at-hand"},"Select Issue"),y(i.a,{labelId:"issues-at-hand",id:"issues-at-hand",value:p,variant:"filled",error:E,multiple:f,onChange:function(e){f?e.target.value.includes("")||(u(e.target.value),v(!1)):e.target.value.length>0&&(u(e.target.value),v(!1))}},y(s.a,{value:""},y("em",null,"Select Issue")),a.map((function(e){return y(s.a,{key:e.altId,value:e.id}," ",e.issue)}))))};var E=function(e){var t=e.depts,a=void 0===t?[]:t,r=e.getDept,l=void 0===r?function(e){return e}:r,c=o.a.useState(0),i=Object(n.a)(c,2),s=i[0],f=i[1],b=Math.ceil(a.length/10),h=10*s,E=10*s+10;return y(o.a.Fragment,null,y(u.a,{className:"mx-auto text-center alert alert-info my-2"},a.length," departments"),y(d.a,null,a.slice(h,E).map((function(e,t){return y(p.a,{key:e.id,dense:!0,alignItems:"center",selected:!0,className:e.selected?"bg-danger text-white":"bg-light",divider:!0,button:!0,onClick:function(){return l(e)}},y("small",{className:"mr-2"},h+t+1,". ")," ",y(m.a,{primary:e.department}))}))),a.length>10?y(g.a,{count:b,defaultValue:s+1,color:"primary",onChange:function(e,t){return f(t-1)},className:"my-2"}):null)},v=function(e){var t=e.users,a=void 0===t?[]:t,n=e.getUser,r=void 0===n?function(e){return e}:n;return y(d.a,{dense:!0},a.map((function(e,t){return y(p.a,{key:e.id,alignItems:"center",divider:!0,button:!0,onClick:function(){return r(e)},className:e.selected?"bg-info text-white":"bg-light",variant:"contained",color:"secondary"},y("small",{className:"mr-2"},t+1,". ")," ",y(m.a,{primary:e.username,secondary:e.usertitle+" - "+e.userphone}))})))};function S(e){var t=e.users,a=void 0===t?[]:t,r=e.getUser,u=void 0===r?function(e){return e}:r,d=e.user,p=void 0===d?"":d,m=e.multiple,f=void 0!==m&&m,g=o.a.useState(!0),E=Object(n.a)(g,2),v=E[0],S=E[1],C=b();return y(l.a,{className:C.formControl},y(c.a,{id:"user-at-hand"},"Select Colleauge"),y(i.a,{labelId:"user-at-hand",id:"issues-at-hand",value:p,variant:"filled",error:v,multiple:f,onChange:function(e){e.target.value.length>0&&(u(e.target.value),S(!1))}},y(s.a,{value:""},y("em",null,"Select Colleauge")),a.filter((function(e){return+e.id!==h})).map((function(e){return y(s.a,{key:e.altId,value:e.id},e.username)}))))}}},[["GOMq",0,1,2,3,4,5,6,7,8,10,13]]]);