(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{29:function(e,t,s){e.exports={item:"QuoteItem_item__2dOvb"}},30:function(e,t,s){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},31:function(e,t,s){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},37:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(2),i=s(5),r=s(29),o=s.n(r),a=s(1),u=function(e){return Object(a.jsxs)("li",{className:o.a.item,children:[Object(a.jsxs)("figure",{children:[Object(a.jsx)("blockquote",{children:Object(a.jsx)("p",{children:e.text})}),Object(a.jsx)("figcaption",{children:e.author})]}),Object(a.jsx)(i.b,{className:"btn",to:e.id,children:"View Fullscreen"})]})},d=s(30),j=s.n(d),l=function(e){var t=Object(n.h)(),s=Object(n.g)(),i="asc"===new URLSearchParams(s.search).get("sort");return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("div",{className:j.a.sorting,children:Object(a.jsxs)("button",{onClick:function(){var c,n;t({pathname:s.pathname,search:"sort="+(i?"desc":"asc")}),c=e.quotes,n=i,c.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1}))},children:["Sort ",i?"Descending":"Ascending"]})}),Object(a.jsx)("ul",{className:j.a.list,children:e.quotes.map((function(e){return Object(a.jsx)(u,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},b=s(31),h=s.n(b),x=function(){return Object(a.jsxs)("div",{className:h.a.noquotes,children:[Object(a.jsx)("p",{children:"No quotes found!"}),Object(a.jsx)(i.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},O=s(9),m=s(21),p=s(20);t.default=function(){var e=Object(m.a)(p.d,!0),t=e.sendRequest,s=e.data,n=e.status,i=e.error;return Object(c.useEffect)((function(){t()}),[t]),"pending"===n?Object(a.jsx)("div",{className:"centered",children:Object(a.jsx)(O.a,{})}):i?Object(a.jsx)("p",{className:"centered focused",children:i}):"completed"!==n||0!==s.length&&s?Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("h1",{children:"All Quotes"}),(null===s||void 0===s?void 0:s.length)>0&&Object(a.jsx)(l,{quotes:s})]}):Object(a.jsx)(x,{})}}}]);
//# sourceMappingURL=5.6d647e77.chunk.js.map