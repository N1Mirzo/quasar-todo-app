(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d209b1e"],{a9c3:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh lpR fFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{staticClass:"q-mr-lg",attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[t._v("\n        Quasar Todo App\n      ")]),a("div",{staticClass:"q-pa-md"},[t.loggedIn?a("q-btn",{staticClass:"absolute-right",attrs:{flat:"",label:t.getUserDetails.email}},[a("q-avatar",{staticClass:"q-ml-sm"},[a("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),a("q-menu",{attrs:{fit:"","transition-show":"flip-right","transition-hide":"flip-left"}},[a("q-list",{staticStyle:{"min-width":"100px"}},[a("q-item",{attrs:{clickable:""}},[a("q-item-section",{on:{click:t.logoutUser}},[t._v("Logout")])],1)],1)],1)],1):a("q-btn",{staticClass:"absolute-right",attrs:{to:"/auth",flat:"","icon-right":"account_circle",label:"Login"}})],1)],1)],1),a("q-footer",{staticClass:"bg-primary text-white"},[a("q-tabs",t._l(t.navs,(function(t){return a("q-route-tab",{key:t.label,attrs:{to:t.to,icon:t.icon,label:t.label}})})),1)],1),a("q-drawer",{attrs:{breakpoint:767,width:250,bordered:"","show-if-above":"","content-class":"bg-primary"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",{attrs:{dark:""}},[a("q-item-label",{attrs:{header:""}},[t._v("Navigation")]),t._l(t.navs,(function(e){return a("q-item",{key:e.label,staticClass:"text-grey-2",attrs:{to:e.to,exact:"",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.label))])],1)],1)}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},n=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),o=a.n(i),l=a("2f62");function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(a,!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var b={name:"Layout",data:function(){return{leftDrawerOpen:!1,navs:[{icon:"list",label:"Todo",to:"/"},{icon:"settings",label:"Settings",to:"/settings"}]}},computed:c({},Object(l["d"])("auth",["loggedIn"]),{},Object(l["c"])("auth",["getUserDetails"])),methods:c({},Object(l["b"])("auth",["logoutUser"]))},u=b,p=a("2877"),f=Object(p["a"])(u,r,n,!1,null,null,null);e["default"]=f.exports}}]);