_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"27FL":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/issues",function(){return n("dIDr")}])},dIDr:function(e,t,n){"use strict";n.r(t);var a=n("ODXe"),s=n("q1tI"),r=n.n(s),u=n("EVdn"),i=n.n(u),c=n("vDqi"),l=n.n(c),o=n("7Cbv"),d=n("/MKj"),m=n("tRbT"),f=n("R/WZ"),p=n("ofer"),g=n("hlFM"),h=n("iae6"),v=n("Z3vd"),b=n("ADg1"),y=n("Spdj"),N=n("r9w1"),j=n("eD//"),x=n("tVbE"),w=n("IsqK"),I=n("56Ss"),O=n("3Qh7"),_=n("l1im"),S=n("L6Je"),E=n("t6oH"),D=(n("7pcq"),n("lMTm")),T=n("tm1B"),k=(n("9jvC"),r.a.createElement),C=Object(f.a)({form:{padding:"1rem",margin:"1rem 0",maxWidth:500,background:"#fff"}}),R=5;var V=function(e){var t=e.sendValue,n=void 0===t?function(e){return e}:t,s=e.userdept,u=void 0===s?{}:s,c=e.sendSelected,l=void 0===c?function(e){return e}:c,d=r.a.useState(""),m=Object(a.a)(d,2),f=m[0],p=m[1],g=r.a.useState(""),h=Object(a.a)(g,2),j=h[0],x=h[1],w=r.a.useState(""),I=Object(a.a)(w,2),O=I[0],_=I[1],S=C(),E=r.a.useRef(null),D=r.a.useRef(null);return k("div",null,k("form",{className:S.form,ref:E,onSubmit:function(e){e.preventDefault(),u.id?f.trimRight().length<5?(x("Please type the issue"),setTimeout((function(){return x("")}),3e3)):f.trimRight().length>4&&u.id.length>0&&(D.current.disabled=!0,n({issue:f,altId:Object(o.a)(),userdept:u.id}),i.a.ajax({url:"/issues?add=true",data:{issue:f,altId:Object(o.a)(),userdept:u.id},type:"POST",dataType:"json"}).then((function(e){if(l(""),200!==e.status)throw new Error(e.msg);_(e.msg),p("")})).catch((function(e){x(e.message)})).finally((function(){setTimeout((function(){E.current.reset(),_(""),D.current.disabled=!1}),3e3)}))):(x("Please click on the department"),setTimeout((function(){return x("")}),3e3))}},k("p",null,"Add issues for ",u.altName||""," department"),k(b.a,null,k(y.a,{className:"text-danger my-2"},u.altName||""," "),k(N.a,{label:"Add issue(s)",autoFocus:!0,onChange:function(e){return p(e.target.value)},value:f,variant:"outlined"})),k("div",{className:"form-group"},k(y.a,{error:!0,className:"my-1"},j),k(y.a,{className:"my-1 text-success"},O)),k(v.a,{color:"secondary",type:"submit",size:"medium",variant:"contained",ref:D},"Add Issue")))},F=function(e){var t=e.issues,n=void 0===t?[]:t,s=e.deleteId,u=void 0===s?function(e){return e}:s,i=r.a.useState(0),c=Object(a.a)(i,2),l=c[0],o=c[1],d=Math.ceil(n.length/10),m=10*l,f=10*l+10;return k(r.a.Fragment,null,k(j.a,{dense:!0},n.slice(m,f).map((function(e,t){return k(x.a,{key:e.altId,divider:!0,alignItems:"flex-start"},k("small",null,m+t+1),k(w.a,{primary:e.issue,secondary:e.altId}),k(I.a,null,k(O.a,{onClick:function(){return t=e.altId,void(confirm("Delete items?")&&(u(t),fetch("/issues?delete=".concat(t)).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return e}))));var t}})))}))),k(_.a,{count:d,defaultValue:l+1,color:"primary",onChange:function(e,t){return o(t-1)},className:"my-2"}))};t.default=function(){var e=Object(d.b)(),t=(C(),r.a.useState({})),n=Object(a.a)(t,2),s=n[0],u=n[1],i=r.a.useState(!0),c=Object(a.a)(i,2),o=c[0],f=c[1],b=Object(d.c)((function(e){return{issues:e.issues.addedIssues,departments:e.departments.departments}})),y=b.issues,N=b.departments;return r.a.useEffect((function(){l.a.get("/issues/fetchall").then((function(t){e(D.b(t.data)),e(T.d(R)),e(D.h(R))})).catch((function(e){return console.log(e,"fetch error")})).finally((function(){return f(!1)}))}),[]),k(S.a,null,k(m.a,{alignItems:"flex-start",container:!0,justify:"space-evenly",spacing:4,direction:"row"},k(m.a,{cols:5,item:!0,component:"div",xs:!0},k(V,{sendValue:function(t){e(D.d(t))},userdept:s})),k(m.a,{item:!0,xs:!0},N.length?k(E.b,{depts:N,getDept:function(t){u(t),e(T.d(t.id)),e(D.h(t.id))}}):k("div",{className:"mx-auto my-4 text-center"},k(p.a,{align:"center"},"No department loaded"))),k(m.a,{item:!0,xs:!0},k(g.a,{className:"block my-2"},y.length?k("div",null,k(p.a,{variant:"body2",className:"alert alert-primary text-center p-2 my-2"},s.department||""),k(F,{issues:y,deleteId:function(t){l.a.get("/issues?delete=".concat(t)),e(D.f(t))}})):o?k("div",{className:"mx-auto my-4 text-center"},k(h.a,{size:"3rem"})):k("div",{className:"mx-auto my-4 text-center"}," ",k("p",null,"No issues found")),N.length?k(v.a,{variant:"outlined",color:"secondary",onClick:function(){return e(D.g())}},"View all issues"):null))))}}},[["27FL",0,1,9,2,3,4,5,6,7,8,10,11,15]]]);