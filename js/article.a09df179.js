(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["article"],{"0a49":function(t,e,r){var n=r("9b43"),c=r("626a"),i=r("4bf8"),a=r("9def"),o=r("cd1c");t.exports=function(t,e){var r=1==t,s=2==t,u=3==t,l=4==t,f=6==t,p=5==t||f,d=e||o;return function(e,o,_){for(var v,h,b=i(e),A=c(b),N=n(o,_,3),y=a(A.length),m=0,g=r?d(e,y):s?d(e,0):void 0;y>m;m++)if((p||m in A)&&(v=A[m],h=N(v,m,b),t))if(r)g[m]=h;else if(h)switch(t){case 3:return!0;case 5:return v;case 6:return m;case 2:g.push(v)}else if(l)return!1;return f?-1:u||l?l:g}}},1169:function(t,e,r){var n=r("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"11e9":function(t,e,r){var n=r("52a7"),c=r("4630"),i=r("6821"),a=r("6a99"),o=r("69a8"),s=r("c69a"),u=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?u:function(t,e){if(t=i(t),e=a(e,!0),s)try{return u(t,e)}catch(t){}if(o(t,e))return c(!n.f.call(t,e),t[e])}},"3ad6":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ndt-article",{attrs:{"article-id":t.articleId}})},c=[],i=(r("96cf"),r("3040")),a=(r("7514"),r("c93e")),o=(r("cadf"),r("551c"),r("097d"),r("3e14")),s=r("2f62"),u={name:"Article",components:{NdtArticle:o["a"]},props:{slug:{type:String,default:null}},computed:Object(a["a"])({},Object(s["c"])({articles:"articles/articles"}),{articleId:function(){var t=this,e=this.articles.find(function(e){var r=e.slug;return r===t.slug});return e?e.id:null}}),methods:Object(a["a"])({},Object(s["b"])({setArticles:"articles/setArticles"})),mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.get("articles");case 2:e=t.sent,this.setArticles(e);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},l=u,f=r("2877"),p=Object(f["a"])(l,n,c,!1,null,null,null);p.options.__file="Article.vue";e["default"]=p.exports},"3e14":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"NDT-Article",class:{"NDT-Article--Link":t.excerpt},on:{click:t.onClick}},[r("h1",{staticClass:"NDT-Article__Header"},[t.excerpt?[r("router-link",{attrs:{to:t.articleLink}},[t._v("\n        "+t._s(t.article.name)+"\n      ")])]:[r("span",[t._v("\n        "+t._s(t.article.name)+"\n      ")])],r("section",{staticClass:"NDT-Article__Meta"},[r("div",{staticClass:"NDT-Article__Meta__Updated"},[t.article.updated===t.article.created?[t._v("\n          Publisert "),r("strong",[t._v(t._s(t.publised))])]:[t._v("\n          Sist oppdatert "),r("strong",[t._v(t._s(t.updated))])]],2)])],2),t.article.banner?[r("img",{staticClass:"NDT-Article__Banner",class:{"NDT-Article__Banner--Excerpt":t.excerpt},attrs:{src:t.banner}})]:t._e(),r("div",{staticClass:"NDT-Article__Intro",class:{"NDT-Article__Intro--Excerpt":t.excerpt},domProps:{innerHTML:t._s(t.article.intro)}}),t.excerpt?[r("router-link",{staticClass:"NDT-Article__ReadMore",attrs:{to:t.articleLink}},[t._v("\n      Les mer "),r("icon",{attrs:{icon:"arrow-right"}})],1)]:[r("div",{staticClass:"NDT-Article__Body",domProps:{innerHTML:t._s(t.article.body)}})]],2)},c=[],i=(r("7514"),r("c93e")),a=(r("c5f6"),r("c1df")),o=r.n(a),s=r("2f62"),u="https://d1i137u4q32ft6.cloudfront.net/media";function l(t,e,r,n){return n=n||r,"".concat(u,"/").concat(e,"/").concat(r,"x").concat(n,"/").concat(t)}var f=l,p={name:"NDTArticle",props:{articleId:{type:Number,required:!0},excerpt:{type:Boolean,default:!1}},computed:Object(i["a"])({},Object(s["c"])({articles:"articles/articles"}),{article:function(){var t=this;return this.articles.find(function(e){var r=e.id;return r===t.articleId})},updated:function(){return o()(this.article.updated).format("DD/MM/YYYY")},published:function(){return o()(this.article.published).format("DD/MM/YYYY")},banner:function(){if(this.article.banner){var t=this.excerpt?"rc":"l";return f(this.article.banner,t,800,400)}},articleLink:function(){return{name:"article",params:{slug:this.article.slug}}}}),methods:{onClick:function(){this.excerpt&&this.$router.push(this.articleLink)}}},d=p,_=(r("bf0f"),r("2877")),v=Object(_["a"])(d,n,c,!1,null,"9d18a148",null);v.options.__file="NdtArticle.vue";e["a"]=v.exports},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,r){var n=r("d3f4"),c=r("8b97").set;t.exports=function(t,e,r){var i,a=e.constructor;return a!==r&&"function"==typeof a&&(i=a.prototype)!==r.prototype&&n(i)&&c&&c(t,i),t}},7514:function(t,e,r){"use strict";var n=r("5ca1"),c=r("0a49")(5),i="find",a=!0;i in[]&&Array(1)[i](function(){a=!1}),n(n.P+n.F*a,"Array",{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(i)},"8b97":function(t,e,r){var n=r("d3f4"),c=r("cb7c"),i=function(t,e){if(c(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,r){return i(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:i}},9093:function(t,e,r){var n=r("ce10"),c=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,c)}},aa77:function(t,e,r){var n=r("5ca1"),c=r("be13"),i=r("79e5"),a=r("fdef"),o="["+a+"]",s="​",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),f=function(t,e,r){var c={},o=i(function(){return!!a[t]()||s[t]()!=s}),u=c[t]=o?e(p):a[t];r&&(c[r]=u),n(n.P+n.F*o,"String",c)},p=f.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},bf0f:function(t,e,r){"use strict";var n=r("e7de"),c=r.n(n);c.a},c5f6:function(t,e,r){"use strict";var n=r("7726"),c=r("69a8"),i=r("2d95"),a=r("5dbc"),o=r("6a99"),s=r("79e5"),u=r("9093").f,l=r("11e9").f,f=r("86cc").f,p=r("aa77").trim,d="Number",_=n[d],v=_,h=_.prototype,b=i(r("2aeb")(h))==d,A="trim"in String.prototype,N=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=A?e.trim():p(e,3);var r,n,c,i=e.charCodeAt(0);if(43===i||45===i){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var a,s=e.slice(2),u=0,l=s.length;u<l;u++)if(a=s.charCodeAt(u),a<48||a>c)return NaN;return parseInt(s,n)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(b?s(function(){h.valueOf.call(r)}):i(r)!=d)?a(new v(N(e)),r,_):N(e)};for(var y,m=r("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;m.length>g;g++)c(v,y=m[g])&&!c(_,y)&&f(_,y,l(v,y));_.prototype=h,h.constructor=_,r("2aba")(n,d,_)}},cd1c:function(t,e,r){var n=r("e853");t.exports=function(t,e){return new(n(t))(e)}},e7de:function(t,e,r){},e853:function(t,e,r){var n=r("d3f4"),c=r("1169"),i=r("2b4c")("species");t.exports=function(t){var e;return c(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!c(e.prototype)||(e=void 0),n(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?Array:e}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=article.a09df179.js.map