_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{Dtc0:function(t,n,e){"use strict";e.r(n);var a=e("MX0m"),r=e.n(a),o=e("q1tI"),i=e.n(o),c=e("/MKj"),u=e("vDqi"),s=e.n(u),l=e("tRbT"),E=e("wb2y"),f=e("OXHv"),p=e("L6Je"),d=e("SBsC"),y=i.a.createElement;n.default=function(){var t=Object(c.b)();return i.a.useEffect((function(){var n;n=20,s.a.get("/posts/".concat(n)).then((function(n){t(f.e(n.data))})).catch((function(t){return console.error("fetch posts:",t)})),Object(d.a)("/departments/fetchdepts/true",t)}),[]),y(p.a,{title:"Home"},y(l.a,{container:!0,justify:"space-evenly",alignItems:"flex-start"},y(l.a,{item:!0},"Users"),y(E.a,{orientation:"vertical"}),y(l.a,{item:!0},"Departments"),y(E.a,{orientation:"vertical"}),y(l.a,{item:!0},"Issues")),y(r.a,{id:"2085888330"},[]))};var T=[{language:"JavaScript",libraries:["React js","jQuery","Redux","Next Js","TypeScript","D3 js","CSS in JS","Unit Testing (jest,Enzyme and Cypress)"]},{language:"Python",libraries:["Python","Pandas"]},{language:"PHP",libraries:["PHP core","MySql"]},{language:"C#",libraries:["I am currently learning C#, static and strongly typed object oriented language or call it mother of Typescript"]}];console.log("%cHello there, \n why are you here? \n Anyway, my name is Vincent Kipyegon, a front end react  web developer with over 3 years of experience. I enjoy building interfaces with javascript,backend stuff with php and Mysql and data analysis with python. \n     Get in touch %cvincekipyegon11@gmail.com","font-family:cursive;font-size:1rem;","font-weight:bold; font-family:cursive;font-size:1rem;");for(var D=0;D<T.length;D++){console.log("%c".concat(T[D].language," \n "),"font-weight:bold; font-size:1rem;border-bottom:1px solid purple; color:purple; font-family:cursive;");for(var S=T[D].libraries,_=0;_<S.length;_++)_<1&&console.log("%cLibrarie(s): ","font-style:italic; font-weight:bold; margin-left:.35rem"),console.log("%c".concat(_+1,". ").concat(S[_]),"margin-left:.5rem")}},H0SL:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("Dtc0")}])},OXHv:function(t,n,e){"use strict";e.d(n,"e",(function(){return r})),e.d(n,"d",(function(){return o})),e.d(n,"k",(function(){return i})),e.d(n,"j",(function(){return c})),e.d(n,"h",(function(){return u})),e.d(n,"a",(function(){return s})),e.d(n,"c",(function(){return l})),e.d(n,"g",(function(){return E})),e.d(n,"b",(function(){return f})),e.d(n,"f",(function(){return p})),e.d(n,"i",(function(){return d}));var a=e("aJdC"),r=function(t){return{type:a.a.ADD_POSTS,payload:t}},o=function(t){return{type:a.a.ADD_POST,payload:t}},i=function(t){return{type:a.a.SET_TICKS,payload:t}},c=function(t){return{type:a.a.RESOLVE_ISSUE,payload:t}},u=function(t){return{type:a.a.GET_POST,payload:t}},s=function(t){return{type:a.a.ADD_COMMENT,payload:t}},l=function(t){return{type:a.a.EDITED_COMMENT,payload:t}},E=function(t){return{type:a.a.DELETE_COMMENT,payload:t}},f=function(t){return{type:a.a.ADD_COMMENTS,payload:t}},p=function(t){return{type:a.a.ADD_RECENT_POSTS,payload:t}},d=function(t){return{type:a.a.RECENT_CLICKED,payload:t}}},SBsC:function(t,n,e){"use strict";var a=e("o0o1"),r=e.n(a),o=e("HaE+"),i=e("vDqi"),c=e.n(i),u=e("tm1B");function s(){return(s=Object(o.a)(r.a.mark((function t(n,e){var a,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get(n);case 3:if(!(null===(o=t.sent)||void 0===o||null===(a=o.data)||void 0===a?void 0:a.length)&&!Array.isArray(o.data)){t.next=8;break}e(u.a(o.data)),t.next=9;break;case 8:throw new Error("No data found...");case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),e(u.f(t.t0.message));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}n.a=function(t,n){return s.apply(this,arguments)}},aJdC:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var a={ADD_POSTS:"ADD_POSTS",ADD_POST:"ADD_POST",SELECTED_USER:"SELECTED_USER",SET_TICKS:"SET_TICKS",GET_POST:"GET_POST",ADD_COMMENT:"ADD_COMMENT",DELETE_COMMENT:"DELETE_COMMENT",ADD_COMMENTS:"ADD_COMMENTS",ADD_RECENT_POSTS:"ADD_RECENT_POSTS",EDITED_COMMENT:"EDITED_COMMENT",RESOLVE_ISSUE:"RESOLVE_ISSUE",RECENT_CLICKED:"RECENT_CLICKED"}}},[["H0SL",0,1,2,3,4,5,6,7]]]);