(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{32:function(e,t,n){e.exports={comments:"Comments_comments__iZX-v"}},33:function(e,t,n){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},34:function(e,t,n){e.exports={item:"CommentItem_item__24mbD"}},35:function(e,t,n){e.exports={comments:"CommentsList_comments__valp0"}},38:function(e,t,n){"use strict";n.r(t);var c=n(4),s=n(0),o=n(32),m=n.n(o),r=n(22),a=n(23),i=n.n(a),u=n(20),l=n(21),j=n(33),d=n.n(j),b=n(9),f=n(1),x=function(e){var t=e.onFetchAllComments,n=e.quoteId,c=Object(s.useRef)(),o=Object(l.a)(u.a),m=o.sendRequest,a=o.status,j=o.error,x=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m({commentData:{text:c.current.value},quoteId:n});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){"completed"!==a||j||(t(n),c.current.value="")}),[a,j,n,t]),Object(f.jsxs)("form",{className:d.a.form,onSubmit:x,children:["pending"===a&&Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(b.a,{})}),Object(f.jsxs)("div",{className:d.a.control,onSubmit:x,children:[Object(f.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(f.jsx)("textarea",{id:"comment",rows:"5",ref:c})]}),Object(f.jsx)("div",{className:d.a.actions,children:Object(f.jsx)("button",{className:"btn",disabled:"pending"===a,children:"Add Comment"})})]})},O=n(34),p=n.n(O),h=function(e){return Object(f.jsx)("li",{className:p.a.item,children:Object(f.jsx)("p",{children:e.text})})},_=n(35),v=n.n(_),C=function(e){return Object(f.jsx)("ul",{className:v.a.comments,children:e.comments.map((function(e){return Object(f.jsx)(h,{text:e.text},e.id)}))})},N=n(2);t.default=function(){var e,t=Object(s.useState)(!1),n=Object(c.a)(t,2),o=n[0],r=n[1],a=Object(l.a)(u.c,!0),i=a.sendRequest,j=a.data,d=a.status,O=Object(N.i)().quoteId;"pending"===d&&(e=Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(b.a,{})})),"completed"===d&&j&&j.length>0&&(e=Object(f.jsx)(C,{comments:j})),"completed"!==d||j&&0!==j.length||(e=Object(f.jsx)("div",{className:"centered",children:"Mo comment yet."}));var p=Object(s.useCallback)((function(){i(O)}),[i,O]);return Object(s.useEffect)((function(){p()}),[p]),Object(f.jsxs)("section",{className:m.a.comments,children:[Object(f.jsx)("h2",{children:"User Comments"}),!o&&Object(f.jsx)("button",{className:"btn",onClick:function(){r(!0)},children:"Add a Comment"}),o&&Object(f.jsx)(x,{quoteId:O,onFetchAllComments:p}),e]})}}}]);
//# sourceMappingURL=4.ff392a9c.chunk.js.map