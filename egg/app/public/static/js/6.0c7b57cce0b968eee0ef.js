webpackJsonp([6],{"1muJ":function(t,s,e){t.exports=e.p+"static/img/caitiao.3329a51.jpg"},"OBs+":function(t,s){},wfDR:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=e("Xxa5"),a=e.n(r),d=e("exGp"),i=e.n(d),o=e("Dd8w"),n=e.n(o),c=e("AYGF"),u=e("NYxO"),l=e("6mRb"),p={components:{GoodsList:c.a,Scroll:l.a},beforeRouteEnter:function(t,s,e){e(function(t){t.getDefaultAddress()})},computed:n()({},Object(u.c)(["shopOrderList","temporaryAddress"]),{price:function(){var t=0;if(this.shopOrderList.length)return this.shopOrderList.forEach(function(s){t+=s.present_price*s.count}),Number(100*t.toFixed(2))}}),data:function(){return{caitiao:e("1muJ"),isOrder:!0,isLoading:!1,list:[],defaultAdd:""}},methods:n()({getDefaultAddress:function(){var t=this;return i()(a.a.mark(function s(){var e,r;return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,t.Api.getDefaultAddress();case 3:e=s.sent,200==(r=e.data).code&&(t.defaultAdd=r.defaultAdd),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(0),t.$toast("网络错误");case 11:case"end":return s.stop()}},s,t,[[0,8]])}))()},goBack:function(){var t=this;this.$router.go(-1),setTimeout(function(){t.setShopList([]),t.setVuexAddress("")},300)},onSubmit:function(){var t=this;return i()(a.a.mark(function s(){var e,r,d;return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(t.defaultAdd&&(t.defaultAdd._id||t.temporaryAddress&&t.temporaryAddress._id)){s.next=3;break}return t.$toast("请添加收获地址"),s.abrupt("return");case 3:return t.isLoading=!0,123456745,e=[],console.log(t.shopOrderList),t.shopOrderList.forEach(function(t){e.push(t.cid)}),s.prev=8,s.next=11,t.Api.placeOrder({address:t.temporaryAddress.address||t.defaultAdd.address,tel:t.temporaryAddress.tel||t.defaultAdd.tel,orderId:e,totalPrice:(t.price/100).toFixed(2),idDirect:t.shopOrderList[0].idDirect,count:t.shopOrderList[0].count});case 11:r=s.sent,200==(d=r.data).code&&(t.isLoading=!1,t.$toast(d.msg),setTimeout(function(){t.setShopList([]),t.$router.push({path:"/"})},2e3)),s.next=20;break;case 16:s.prev=16,s.t0=s.catch(8),t.isLoading=!1,t.$toast("网络错误");case 20:case"end":return s.stop()}},s,t,[[8,16]])}))()}},Object(u.d)({setShopList:"SHOPORDERLIST",setVuexAddress:"TEMPORARYADDRESS"}),{goAddress:function(){this.$router.push({path:"/address"})},editAddress:function(){this.$router.push({path:"/address"})}})},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"order"},[e("van-nav-bar",{attrs:{title:"订单结算","left-arrow":""},on:{"click-left":t.goBack}}),t._v(" "),e("div",{staticClass:"address-warp"},[t.defaultAdd&&(t.defaultAdd._id||t.temporaryAddress&&t.temporaryAddress._id)?e("div",{staticClass:"address",on:{click:t.editAddress}},[e("div",{staticClass:"icon"},[e("van-icon",{staticClass:"location",attrs:{name:"location"}})],1),t._v(" "),e("div",{staticClass:"address-cont"},[e("p",{staticClass:"name"},[t._v("收货人: "+t._s(t.temporaryAddress.name||t.defaultAdd.name)+" "),e("span",[t._v(t._s(t.temporaryAddress.tel||t.defaultAdd.tel))])]),t._v(" "),e("p",{staticClass:"address-e"},[t._v("收货地址: "+t._s(t.temporaryAddress.address||t.defaultAdd.address))]),t._v(" "),e("p",{staticClass:"no"},[t._v("(收货不便时,可选择免费待收货服务)")])]),t._v(" "),e("div",{staticClass:"icon2"},[e("van-icon",{staticClass:"location",attrs:{name:"arrow"}})],1)]):e("div",{staticClass:"address addnull",on:{click:t.goAddress}},[t._v("\n                    点击添加收获地址\n                ")]),t._v(" "),e("img",{staticClass:"caitiao",attrs:{src:t.caitiao,width:"100%",height:"3px",alt:""}}),t._v(" "),e("Scroll",{ref:"scroll",staticClass:"scroll",attrs:{data:t.shopOrderList}},[e("div",{staticClass:"goods-list"},[e("GoodsList",{attrs:{list:t.shopOrderList,isOrder:t.isOrder}})],1)])],1),t._v(" "),t.shopOrderList&&t.shopOrderList.length?e("div",[e("van-submit-bar",{attrs:{loading:t.isLoading,price:t.price,"button-text":"提交订单"},on:{submit:t.onSubmit}})],1):t._e()],1)},staticRenderFns:[]};var v=e("VU/8")(p,f,!1,function(t){e("OBs+")},"data-v-7ac38e44",null);s.default=v.exports}});
//# sourceMappingURL=6.0c7b57cce0b968eee0ef.js.map