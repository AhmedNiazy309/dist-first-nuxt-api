(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{266:function(t,e,o){},288:function(t,e,o){"use strict";var n=o(266);o.n(n).a},300:function(t,e,o){"use strict";o.r(e);var n={head:function(){return{title:this.$store.state.selectedPost.title,meta:[{hid:"description",name:"description",content:this.$store.state.selectedPost.body}]}},validate:function(t){var e=t.params;return!isNaN(e.id)},fetch:function(t){var e=t.$axios,o=t.store,n=t.params;return!(!o.state.selectedPost||o.state.selectedPost.id!=n.id)||e.$get("/posts/".concat(n.id)).then((function(t){o.commit("updateSelectedPost",t)}))}},c=(o(288),o(37)),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"post-container"},[e("h1",{staticClass:"title"},[this._v(this._s(this.$store.state.selectedPost.title))]),this._v(" "),e("p",{staticClass:"post-body"},[this._v(this._s(this.$store.state.selectedPost.body))])])}),[],!1,null,"bd0368ce",null);e.default=component.exports}}]);