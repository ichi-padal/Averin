(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-703fb421"],{"0b6c":function(e,t,n){"use strict";var i=n("b604"),a=n.n(i);a.a},"0d19":function(e,t,n){"use strict";var i=n("5200"),a=n.n(i);a.a},"0f45":function(e,t,n){"use strict";var i=n("621c"),a=n.n(i);a.a},"2b31":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home-page__container"},[i("swiper",{ref:"swiperBg",staticClass:"swiper swiper-bg",attrs:{options:e.swiperOptionBg}},[e._l(e.sliders.slidersbg,(function(e){return i("swiper-slide",{key:e.backgroundPhoto,style:{backgroundImage:"url("+n("f291")("./"+e.backgroundPhoto)+")"}},[i("div",{staticClass:"swiper-bg__opacity"})])})),i("div",{staticClass:"swiper-pagination swiper-bg__pagination swiper-pagination-white",attrs:{slot:"pagination"},slot:"pagination"})],2),i("swiper",{ref:"swiperNav",staticClass:"swiper swiper-nav",attrs:{options:e.swiperOptionNav}},[e._l(e.sliders.slidersnav,(function(t,n){return i("swiper-slide",{key:t.url,staticClass:"swiper-nav__slide"},[i("MainNavItem",{attrs:{navitem:t}},[i("span",{staticClass:"nav_main__item__number"},[e._v("0"+e._s(n+1))])]),i("Separator",{staticClass:"mobile-none"})],1)})),i("div",{staticClass:"swiper-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),i("div",{staticClass:"swiper-next ",attrs:{slot:"button-next"},slot:"button-next"})],2),i("DownPicture",{staticClass:"mobile-only"}),i("router-link",{staticClass:"back-to",attrs:{to:"/"}},[e._v("back to main section")])],1)},a=[],s=n("7212"),r=(n("a7a3"),n("af02")),o=n("4f66"),l=n("c6c3"),c={name:"MainNav",components:{DownPicture:l["a"],MainNavItem:o["a"],Separator:r["a"],Swiper:s["Swiper"],SwiperSlide:s["SwiperSlide"]},props:{sliders:{slidersbg:{backgroundPhoto:{}},slidersnav:{title:{},url:{},index:{}}}},data:function(){return{swiperOptionBg:{spaceBetween:10,effect:"fade",loop:!0,loopedSlides:4,speed:1e3,pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-next ",prevEl:".swiper-prev"}},swiperOptionNav:{loop:!0,loopedSlides:4,spaceBetween:10,centeredSlides:!0,slidesPerView:u("slidesPerView"),speed:900,touchRatio:.2,mousewheel:!0,slideToClickedSlide:!0,slidesPerColumn:1,slidesPerColumnFill:"row",direction:u("direction")}}},mounted:function(){var e=this;this.$nextTick((function(){var t=e.$refs.swiperBg.$swiper,n=e.$refs.swiperNav.$swiper;t.controller.control=n,n.controller.control=t}))}};function u(e){var t=screen.width;switch(e){case"direction":return t>=576?"horizontal":"vertical";case"slidesPerView":return t>=576?2:1}}var p=c,d=(n("0f45"),n("2877")),f=Object(d["a"])(p,i,a,!1,null,null,null);t["a"]=f.exports},"4f66":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"nav_main__item",attrs:{to:e.navitem.url}},[e.navitem.index?n("h2",{staticClass:"nav_main__item__h2"},[e._t("default"),n("span",{domProps:{innerHTML:e._s(e.navitem.title)}})],2):n("h2",{staticClass:"nav_main__item__h2",domProps:{innerHTML:e._s(e.navitem.title)}})])},a=[],s={name:"MainNavItem",props:{navitem:{title:{default:"Title undefined"},url:{default:"/"},index:!1}}},r=s,o=(n("0d19"),n("2877")),l=Object(o["a"])(r,i,a,!1,null,null,null);t["a"]=l.exports},5200:function(e,t,n){},"621c":function(e,t,n){},af02:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"separator"},[n("div",{staticClass:"separator__cross"})])}],s={name:"Separator"},r=s,o=(n("f043"),n("2877")),l=Object(o["a"])(r,i,a,!1,null,"4fd0be53",null);t["a"]=l.exports},b604:function(e,t,n){},b7ca:function(e,t,n){},c6c3:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"down-picture__wrap"},[n("svg",{attrs:{viewBox:"0 0 14 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.725 1.19424L7.87699 5.2934C7.51813 5.54495 6.93894 5.54124 6.58333 5.28511L0.788409 1.11129C0.432803 0.855165 0.435442 0.443616 0.794303 0.192071C1.15316 -0.0594734 1.73235 -0.0557595 2.08796 0.200367L7.239 3.91043L12.4372 0.266728C12.7961 0.0151833 13.3752 0.0188972 13.7309 0.275023C14.0865 0.53115 14.0838 0.942698 13.725 1.19424Z"}})]),n("svg",{attrs:{width:"14",height:"6",viewBox:"0 0 14 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.725 1.19424L7.87699 5.2934C7.51813 5.54495 6.93894 5.54124 6.58333 5.28511L0.788409 1.11129C0.432803 0.855165 0.435442 0.443616 0.794303 0.192071C1.15316 -0.0594734 1.73235 -0.0557595 2.08796 0.200367L7.239 3.91043L12.4372 0.266728C12.7961 0.0151833 13.3752 0.0188972 13.7309 0.275023C14.0865 0.53115 14.0838 0.942698 13.725 1.19424Z"}})])])},a=[],s={name:"DownPicture"},r=s,o=(n("0b6c"),n("2877")),l=Object(o["a"])(r,i,a,!1,null,"0289ad86",null);t["a"]=l.exports},f043:function(e,t,n){"use strict";var i=n("b7ca"),a=n.n(i);a.a},f11a:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("MainNav",{attrs:{sliders:e.sliders}})},a=[],s=n("2b31"),r={name:"Aesthetic",components:{MainNav:s["a"]},data:function(){return{sliders:{slidersbg:[{backgroundPhoto:"woman_4.jpg"},{backgroundPhoto:"woman_2.jpg"},{backgroundPhoto:"woman_1.jpg"},{backgroundPhoto:"woman_3.jpg"}],slidersnav:[{title:"Balancing face and smile silhouette",url:"/balancingface",index:!0},{title:"100 hours of silence and hand-crafting",url:"/handcrafting",index:!0},{title:"Perfection of the porcelain fit",url:"/perfection",index:!0},{title:"Before/after",url:"/before",index:!0}]}}}},o=r,l=n("2877"),c=Object(l["a"])(o,i,a,!1,null,null,null);t["default"]=c.exports},f291:function(e,t,n){var i={"./woman_1.jpg":"e172","./woman_2.jpg":"a60d","./woman_2@2.jpg":"6a5d","./woman_3.jpg":"4481","./woman_3@2.jpg":"d685","./woman_4.jpg":"a33d","./woman_4@2.jpg":"3a24","./woman_5.jpg":"9039","./woman_6.jpg":"ec7a"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=s,e.exports=a,a.id="f291"}}]);
//# sourceMappingURL=chunk-703fb421.7eae90cf.js.map