(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd752b46"],{7815:function(t,a,i){"use strict";i.r(a);var c=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("loading",{attrs:{active:t.isLoading,color:"#2D7487","background-color":"#000"},on:{"update:active":function(a){t.isLoading=a}}}),i("nav",{staticClass:"backend-nav"},[i("ul",{staticClass:"d-flex"},[i("li",{staticClass:"backend-nav-item mr-1 fw-bold is-active"},[i("router-link",{staticClass:"links",attrs:{to:"/palipali/admin/products"}},[t._v("Products")])],1),i("li",{staticClass:"backend-nav-item mr-1 fw-bold"},[i("router-link",{staticClass:"links",attrs:{to:"/palipali/admin/orders"}},[t._v("Orders")])],1)])]),i("div",{staticClass:"mb-m"},[t._m(0),t._m(1),i("p",[t._v("Or click "),i("span",{staticClass:"font-primary color-primary",on:{click:t.addProduct}},[t._v("HERE")]),t._v(" to add a new product.")])]),i("div",{staticClass:"row d-flex flex-wrap-w"},t._l(t.productsData,(function(a){return i("div",{key:a.id,staticClass:"col-4 card backend-card d-flex mb-1"},[i("div",{staticClass:"card-head prod-pic"},[i("img",{attrs:{src:a.imageUrl}})]),i("div",{staticClass:"card-content"},[i("span",{staticClass:"material-icons mb-tiny fz-xs ta-right",on:{click:function(i){return t.deleteProduct(a)}}},[t._v("clear")]),i("div",{staticClass:"d-flex jc-space-between mb-tiny"},[i("div",{staticClass:"card-tit"},[t._v(t._s(a.title))])]),i("div",{staticClass:"d-flex mb-tiny"},[i("del",{staticClass:"mr-2 fz-ets color-secondary"},[t._v(t._s(t._f("thousands")(a.origin_price)))]),i("p",{staticClass:"fz-xs"},[t._v(t._s(t._f("thousands")(a.price)))])]),i("div",{staticClass:"d-flex",on:{click:function(i){return t.editProduct(a)}}},[i("span",{staticClass:"material-icons fz-xs"},[t._v("info")])])])])})),0)],1)},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("p",{staticClass:"d-flex ai-center"},[t._v("Click the"),i("span",{staticClass:"material-icons fz-xs mr-tiny ml-tiny color-primary"},[t._v("info")]),t._v("to edit.")])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("p",{staticClass:"d-flex ai-center"},[t._v("Click the"),i("span",{staticClass:"material-icons fz-xs mr-tiny ml-tiny color-primary"},[t._v("clear")]),t._v("to delete.")])}],e=(i("99af"),i("ac1f"),i("5319"),{data:function(){return{isLoading:!1,fullPage:!0,productsData:{},filteredData:{}}},methods:{getAllProducts:function(){var t=this;this.isLoading=!0,this.productsData={},this.filteredData={},this.$http.get("".concat("https://course-ec-api.hexschool.io/api","/").concat("0c404360-cb55-4d2b-8c0a-cd42d85893cb","/admin/ec/products")).then((function(a){t.productsData=a.data.data,t.isLoading=!1}))},addProduct:function(){this.$router.push("/palipali/admin/product-add")},editProduct:function(t){this.$router.push("/palipali/admin/product/".concat(t.id))},deleteProduct:function(t){var a=this;this.isLoading=!0,this.$http.delete("".concat("https://course-ec-api.hexschool.io/api","/").concat("0c404360-cb55-4d2b-8c0a-cd42d85893cb","/admin/ec/product/").concat(t.id)).then((function(){console.log("delete success"),a.getAllProducts()}))}},created:function(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.$http.defaults.headers.common.Authorization="Bearer ".concat(this.token),this.getAllProducts()}}),n=e,r=i("2877"),o=Object(r["a"])(n,c,s,!1,null,null,null);a["default"]=o.exports},8418:function(t,a,i){"use strict";var c=i("c04e"),s=i("9bf2"),e=i("5c6c");t.exports=function(t,a,i){var n=c(a);n in t?s.f(t,n,e(0,i)):t[n]=i}},"99af":function(t,a,i){"use strict";var c=i("23e7"),s=i("d039"),e=i("e8b5"),n=i("861d"),r=i("7b0b"),o=i("50c4"),d=i("8418"),l=i("65f0"),u=i("1dde"),f=i("b622"),p=i("2d00"),h=f("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",_=p>=51||!s((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),b=u("concat"),C=function(t){if(!n(t))return!1;var a=t[h];return void 0!==a?!!a:e(t)},k=!_||!b;c({target:"Array",proto:!0,forced:k},{concat:function(t){var a,i,c,s,e,n=r(this),u=l(n,0),f=0;for(a=-1,c=arguments.length;a<c;a++)if(e=-1===a?n:arguments[a],C(e)){if(s=o(e.length),f+s>v)throw TypeError(m);for(i=0;i<s;i++,f++)i in e&&d(u,f,e[i])}else{if(f>=v)throw TypeError(m);d(u,f++,e)}return u.length=f,u}})}}]);
//# sourceMappingURL=chunk-dd752b46.f9e3460a.js.map