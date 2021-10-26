(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={control:"AddMovie_control__2ENNX"}},,,,function(e,t,n){e.exports={movie:"Movie_movie__27rBX"}},function(e,t,n){e.exports={"movies-list":"MoviesList_movies-list__lMnXQ"}},function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=(n(14),n(1)),i=n.n(o),s=n(2),u=n(4),m=n(7),p=n.n(m),f=function(e){return r.a.createElement("li",{className:p.a.movie},r.a.createElement("h2",null,e.title),r.a.createElement("h3",null,e.releaseDate),r.a.createElement("p",null,e.openingText))},v=n(8),d=n.n(v),E=function(e){return r.a.createElement("ul",{className:d.a["movies-list"]},e.movies.map((function(e){return r.a.createElement(f,{key:e.id,title:e.title,releaseDate:e.release,openingText:e.openingText})})))},h=n(3),b=n.n(h);var x=function(e){var t=Object(a.useRef)(""),n=Object(a.useRef)(""),c=Object(a.useRef)("");return r.a.createElement("form",{onSubmit:function(a){a.preventDefault();var r={title:t.current.value,openingText:n.current.value,releaseDate:c.current.value};e.onAddMovie(r)}},r.a.createElement("div",{className:b.a.control},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",ref:t})),r.a.createElement("div",{className:b.a.control},r.a.createElement("label",{htmlFor:"opening-text"},"Opening Text"),r.a.createElement("textarea",{rows:"5",id:"opening-text",ref:n})),r.a.createElement("div",{className:b.a.control},r.a.createElement("label",{htmlFor:"date"},"Release Date"),r.a.createElement("input",{type:"text",id:"date",ref:c})),r.a.createElement("button",null,"Add Movie"))};n(16);var g=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),o=Object(u.a)(l,2),m=o[0],p=o[1],f=Object(a.useState)(null),v=Object(u.a)(f,2),d=v[0],h=v[1],b=Object(a.useCallback)(Object(s.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),h(null),e.prev=2,e.next=5,fetch("https://react-http-45535-default-rtdb.firebaseio.com/movies.json");case 5:if((t=e.sent).ok){e.next=8;break}throw new Error("Something went wrong!");case 8:return e.next=10,t.json();case 10:for(r in n=e.sent,a=[],n)a.push({id:r,title:n[r].title,openingText:n[r].openingText,releaseDate:n[r].releaseDate});c(a),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),h(e.t0.message);case 19:p(!1);case 20:case"end":return e.stop()}}),e,null,[[2,16]])}))),[]);function g(){return(g=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-45535-default-rtdb.firebaseio.com/movies.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-45535-default-rtdb.firebaseio.com/movies.json",{method:"DELETE"});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){b()}),[b]);var O=r.a.createElement("p",null,"Found no movies.");return n.length>0&&(O=r.a.createElement(E,{movies:n})),d&&(O=r.a.createElement("p",null,d)),m&&(O=r.a.createElement("p",null,"Loading...")),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement(x,{onAddMovie:function(e){return g.apply(this,arguments)}})),r.a.createElement("section",null,r.a.createElement("button",{onClick:function(e){return j.apply(this,arguments)}},"Delete Database")),r.a.createElement("section",null,r.a.createElement("button",{onClick:b},"Fetch Movies")),r.a.createElement("section",null,O))};l.a.render(r.a.createElement(g,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.dafe8dbb.chunk.js.map