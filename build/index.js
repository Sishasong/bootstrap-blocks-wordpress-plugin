!function(t){var e={};function o(n){if(e[n])return e[n].exports;var l=e[n]={i:n,l:!1,exports:{}};return t[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)o.d(n,l,function(e){return t[e]}.bind(null,l));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=19)}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function o(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},function(t,e,o){var n=o(13),l=o(14);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?l(t):e}},function(t,e){function o(e){return t.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(e)}t.exports=o},function(t,e,o){var n=o(15);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(t,e){t.exports=function(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}},function(t,e,o){var n=o(16);t.exports=function(t,e){if(null==t)return{};var o,l,r=n(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(l=0;l<c.length;l++)o=c[l],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}},function(t,e,o){var n=o(10),l=o(11),r=o(12);t.exports=function(t){return n(t)||l(t)||r()}},function(t,e){function o(){return t.exports=o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},o.apply(this,arguments)}t.exports=o},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(e){return"function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?t.exports=n=function(t){return o(t)}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)},n(e)}t.exports=n},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function o(e,n){return t.exports=o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(e,n)}t.exports=o},function(t,e){t.exports=function(t,e){if(null==t)return{};var o,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(l[o]=t[o]);return l}},,,function(t,e,o){"use strict";o.r(e);var n=o(0),l=wp.blocks.updateCategory,r=wp.components,c=r.Path,a=r.Rect,s=r.SVG;l("wp-bootstrap-blocks",{icon:Object(n.createElement)(s,{viewBox:"0 0 120 120",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(a,{stroke:"#979797",fill:"#6EA644",x:"-110.5",y:"-123.5",width:"340",height:"367"}),Object(n.createElement)(c,{d:"M105.362393,45.9570783 C103.695123,44.8177711 101.427637,45.2868976 100.293893,46.9623494 C93.6915059,56.9480422 79.6864416,57.4841867 78.952843,57.4841867 C78.8194614,57.4841867 78.7527707,57.4841867 78.6193891,57.4841867 C61.3464764,57.4841867 54.744089,72.2951807 54.4773258,72.8983434 C53.6770365,74.7748494 54.5440166,76.9194277 56.3446678,77.7236446 C56.8115032,77.9246988 57.3450295,78.0587349 57.811865,78.0587349 C59.2123714,78.0587349 60.5461871,77.2545181 61.1464041,75.8471386 C61.2130949,75.7131024 65.7480681,65.5263554 77.418955,64.8561747 L77.418955,83.8222892 C76.9521195,87.9103916 75.0180868,91.127259 71.6168569,93.5399096 C68.0822455,96.0195783 63.3471999,97.2929217 57.5451018,97.2929217 C50.6092605,97.2929217 44.940544,94.8802711 40.7390247,90.121988 C36.4708146,85.3637048 34.3367095,78.5948795 34.3367095,69.8825301 L34.4034003,48.9728916 C34.7368542,41.2658133 36.8042685,35.1671687 40.7390247,30.810994 C45.0072347,26.0527108 50.6092605,23.6400602 57.5451018,23.6400602 C63.3471999,23.6400602 68.0822455,24.9134036 71.6168569,27.3930723 C75.1514684,29.872741 77.1521919,33.2906627 77.4856458,37.7138554 C77.4856458,37.8478916 77.4856458,38.0489458 77.4856458,38.1829819 C77.4856458,40.7296687 79.5530601,42.8072289 82.0873098,42.8072289 C84.6215595,42.8072289 86.6889738,40.7296687 86.6889738,38.1829819 C86.6889738,38.0489458 86.6889738,37.8478916 86.6889738,37.7138554 C86.022066,31.0790663 83.0209807,25.8516566 77.6190274,21.8975904 C72.217074,17.9435241 65.481305,16 57.3450295,16 C47.674866,16 39.8720445,19.2168675 33.9365648,25.5835843 C28.3345391,31.5481928 25.4001447,39.3893072 25.0666908,49.0399096 C25.0666908,49.7100904 25,50.3802711 25,51.0504518 L25.0666908,69.8825301 L25,69.8825301 C25,80.5384036 28.0010852,89.0496988 33.9365648,95.4164157 C39.8720445,101.783133 47.674866,105 57.3450295,105 C65.481305,105 72.217074,103.056476 77.6190274,99.1024096 C82.5541453,95.4834337 85.4885397,90.7251506 86.4889014,84.8275602 L86.6889738,63.7838855 C92.757835,62.309488 101.027492,58.9585843 106.229373,51.0504518 C107.563189,49.375 107.096353,47.0963855 105.362393,45.9570783 Z",stroke:"#FFFFFF",fill:"#FFFFFF"}))});var i=o(8),p=o.n(i),u=wp.i18n.__,b=wp.blocks.registerBlockType,m=wp.editor,w=m.InnerBlocks,d=m.InspectorControls,f=wp.components,h=f.SelectControl,k=f.CheckboxControl,g=f.PanelBody,v=wp.element.Fragment,O=wp.hooks.applyFilters,y=O("wpBootstrapBlocks.container.useFluidContainerPerDefault",!0),j=[{label:u("Small","wp-bootstrap-blocks"),value:"mb-2"},{label:u("Medium","wp-bootstrap-blocks"),value:"mb-3"},{label:u("Large","wp-bootstrap-blocks"),value:"mb-5"}];j=O("wpBootstrapBlocks.container.customMarginOptions",j);var C=[{label:u("None","wp-bootstrap-blocks"),value:"mb-0"}].concat(p()(j));b("wp-bootstrap-blocks/container",{title:u("Container","wp-bootstrap-blocks"),icon:"feedback",category:"wp-bootstrap-blocks",keywords:[u("Bootstrap Blocks","wp-bootstrap-blocks"),u("Bootstrap","wp-bootstrap-blocks"),u("Container","wp-bootstrap-blocks")],supports:{align:!1},edit:function(t){var e=t.className,o=t.attributes,l=t.setAttributes,r=o.isFluid,c=o.marginAfter;return void 0===r&&l({isFluid:y}),Object(n.createElement)(v,null,Object(n.createElement)(d,null,Object(n.createElement)(g,null,Object(n.createElement)(k,{label:u("Fluid","wp-bootstrap-blocks"),checked:r,onChange:function(t){l({isFluid:t})}}),Object(n.createElement)(h,{label:u("Margin After","wp-bootstrap-blocks"),value:c,options:C,onChange:function(t){l({marginAfter:t})}}))),Object(n.createElement)("div",{className:e},Object(n.createElement)(w,null)))},save:function(){return Object(n.createElement)(w.Content,null)}});var E=o(1),B=o.n(E),x=o(2),z=o.n(x),M=o(3),S=o.n(M),A=o(4),V=o.n(A),P=o(5),H=o.n(P),_=o(9),F=o.n(_),L=o(6),N=o.n(L),R=o(7),I=o.n(R),T=wp.i18n.__,q=wp.editor,X=q.InnerBlocks,W=q.InspectorControls,Z=wp.components,D=Z.CheckboxControl,G=Z.ColorPalette,U=Z.PanelBody,J=Z.HorizontalRule,K=Z.RangeControl,Q=Z.SelectControl,Y=wp.element,$=Y.Component,tt=Y.Fragment,et=wp.hooks.applyFilters,ot=function(t){var e=t.label,o=t.attributeName,l=t.value,r=t.setAttributes,c=I()(t,["label","attributeName","value","setAttributes"]);return Object(n.createElement)(K,F()({label:e,value:l,onChange:function(t){r(N()({},o,t))},min:0,max:12},c))},nt=[{name:"primary",color:"#007bff"},{name:"secondary",color:"#6c757d"}];nt=et("wpBootstrapBlocks.column.bgColorOptions",nt);var lt=[{label:T("None","wp-bootstrap-blocks"),value:""},{label:T("Small","wp-bootstrap-blocks"),value:"p-2"},{label:T("Medium","wp-bootstrap-blocks"),value:"p-3"},{label:T("Large","wp-bootstrap-blocks"),value:"p-5"}];lt=et("wpBootstrapBlocks.column.paddingOptions",lt);var rt=function(t){function e(){return B()(this,e),S()(this,V()(e).apply(this,arguments))}return H()(e,t),z()(e,[{key:"render",value:function(){var t=this.props,e=t.attributes,o=t.className,l=t.setAttributes,r=e.sizeXl,c=e.sizeLg,a=e.sizeMd,s=e.sizeSm,i=e.sizeXs,p=e.equalWidthXl,u=e.equalWidthLg,b=e.equalWidthMd,m=e.equalWidthSm,w=e.equalWidthXs,d=e.bgColor,f=e.padding,h=e.centerContent;return Object(n.createElement)(tt,null,Object(n.createElement)(W,null,Object(n.createElement)(U,{title:T("Column size","wp-bootstrap-blocks"),initialOpen:!1},Object(n.createElement)(ot,{label:T("Xl Column count","wp-bootstrap-blocks"),attributeName:"sizeXl",value:r,disabled:p,setAttributes:l}),Object(n.createElement)(D,{label:T("Xl equal-width","wp-bootstrap-blocks"),checked:p,onChange:function(t){return l({equalWidthXl:t})}}),Object(n.createElement)(J,null),Object(n.createElement)(ot,{label:T("Lg Column count","wp-bootstrap-blocks"),attributeName:"sizeLg",value:c,disabled:u,setAttributes:l}),Object(n.createElement)(D,{label:T("Lg equal-width","wp-bootstrap-blocks"),checked:u,onChange:function(t){return l({equalWidthLg:t})}}),Object(n.createElement)(J,null),Object(n.createElement)(ot,{label:T("Md Column count","wp-bootstrap-blocks"),attributeName:"sizeMd",value:a,disabled:b,setAttributes:l}),Object(n.createElement)(D,{label:T("Md equal-width","wp-bootstrap-blocks"),checked:b,onChange:function(t){return l({equalWidthMd:t})}}),Object(n.createElement)(J,null),Object(n.createElement)(ot,{label:T("Sm Column count","wp-bootstrap-blocks"),attributeName:"sizeSm",value:s,disabled:m,setAttributes:l}),Object(n.createElement)(D,{label:T("Sm equal-width","wp-bootstrap-blocks"),checked:m,onChange:function(t){return l({equalWidthSm:t})}}),Object(n.createElement)(J,null),Object(n.createElement)(ot,{label:T("Xs Column count","wp-bootstrap-blocks"),attributeName:"sizeXs",value:i,disabled:w,setAttributes:l}),Object(n.createElement)(D,{label:T("Xs equal-width","wp-bootstrap-blocks"),checked:w,onChange:function(t){return l({equalWidthXs:t})}})),Object(n.createElement)(U,{title:T("Background color","wp-bootstrap-blocks"),initialOpen:!1},Object(n.createElement)(G,{colors:nt,value:d,onChange:function(t){if(t){var e=nt.find((function(e){return e.color===t}));e&&l({bgColor:e.name})}else l({bgColor:""})},disableCustomColors:!0}),d?Object(n.createElement)(D,{label:T("Center content vertically in row","wp-bootstrap-blocks"),checked:h,onChange:function(t){return l({centerContent:t})},help:T("This setting only applies if there is no vertical alignment set on the parent row block.","wp-bootstrap-blocks")}):null),Object(n.createElement)(U,{title:T("Padding (inside column)","wp-bootstrap-blocks"),initialOpen:!1},Object(n.createElement)(Q,{label:T("Size","wp-bootstrap-blocks"),value:f,options:lt,onChange:function(t){l({padding:t})}}))),Object(n.createElement)("div",{className:o},Object(n.createElement)(X,{templateLock:!1})))}}]),e}($),ct=wp.i18n.__,at=wp.blocks.registerBlockType,st=wp.editor.InnerBlocks;at("wp-bootstrap-blocks/column",{title:ct("Column","wp-bootstrap-blocks"),icon:"menu",category:"wp-bootstrap-blocks",keywords:[ct("Bootstrap Blocks","wp-bootstrap-blocks"),ct("Bootstrap","wp-bootstrap-blocks"),ct("Column","wp-bootstrap-blocks")],parent:["wp-bootstrap-blocks/row"],getEditWrapperProps:function(t){var e=t.sizeXl,o=t.sizeLg,n=t.sizeMd,l=t.sizeSm;return{"data-size-xs":t.sizeXs,"data-size-sm":l,"data-size-md":n,"data-size-lg":o,"data-size-xl":e,"data-bg-color":t.bgColor,"data-padding":t.padding,"data-center-content":t.centerContent}},edit:rt,save:function(){return Object(n.createElement)(st.Content,null)}});var it=wp.components,pt=it.Path,ut=it.SVG,bt=Object(n.createElement)(ut,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(n.createElement)(pt,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)(pt,{d:"M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"})),mt=Object(n.createElement)(ut,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(n.createElement)(pt,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)(pt,{d:"M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"})),wt=Object(n.createElement)(ut,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(n.createElement)(pt,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)(pt,{d:"M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"})),dt=Object(n.createElement)(ut,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(pt,{fillRule:"evenodd",clipRule:"evenodd",d:"M23.58 26.28c0-.600003.1499985-1.099998.45-1.5.3000015-.400002.7433304-.8399976 1.33-1.32.5600028-.4533356.9833319-.8699981 1.27-1.25s.43-.8433306.43-1.39c0-.5466694-.1733316-1.0566643-.52-1.53s-.986662-.71-1.92-.71c-1.1066722 0-1.8533314.2766639-2.24.83-.3866686.5533361-.58 1.1766632-.58 1.87 0 .1466674.0033333.2666662.01.36.0066667.0933338.01.1533332.01.18h-1.78c-.0133334-.0533336-.0266666-.146666-.04-.28-.0133334-.133334-.02-.2733326-.02-.42 0-.7733372.1766649-1.4666636.53-2.08.3533351-.6133364.8899964-1.0999982 1.61-1.46.7200036-.3600018 1.5999948-.54 2.64-.54 1.2133394 0 2.2033295.3233301 2.97.97s1.15 1.5099946 1.15 2.59c0 .7066702-.1033323 1.3033309-.31 1.79-.2066677.4866691-.4533319.8799985-.74 1.18-.2866681.3000015-.6566644.6233316-1.11.97-.4800024.3866686-.8333322.7166653-1.06.99-.2266678.2733347-.34.6233312-.34 1.05v.82h-1.74zm-.14 2.56h2V31h-2zM39 12c1.1046 0 2 .8954 2 2v20c0 1.1046-.8954 2-2 2H9c-1.10457 0-2-.8954-2-2V14c0-1.1046.89543-2 2-2h30zm0 22V14H9v20h30z"}));function ft(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function ht(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?ft(o,!0).forEach((function(e){N()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ft(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var kt,gt=wp.i18n.__,vt=wp.editor,Ot=vt.InnerBlocks,yt=vt.InspectorControls,jt=vt.BlockControls,Ct=vt.AlignmentToolbar,Et=wp.components,Bt=Et.IconButton,xt=Et.CheckboxControl,zt=Et.PanelBody,Mt=Et.SVG,St=Et.Path,At=wp.element,Vt=At.Component,Pt=At.Fragment,Ht=wp.data,_t=Ht.withSelect,Ft=Ht.withDispatch,Lt=wp.hooks.applyFilters,Nt=wp.compose.compose,Rt=["wp-bootstrap-blocks/column"],It=[{name:"1-1",title:gt("2 Columns (1:1)","wp-bootstrap-blocks"),icon:Object(n.createElement)(Mt,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(St,{fillRule:"evenodd",clipRule:"evenodd",d:"M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"})),templateLock:"all",template:[["wp-bootstrap-blocks/column",{sizeMd:6}],["wp-bootstrap-blocks/column",{sizeMd:6}]]},{name:"1-2",title:gt("2 Columns (1:2)","wp-bootstrap-blocks"),icon:Object(n.createElement)(Mt,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(St,{fillRule:"evenodd",clipRule:"evenodd",d:"M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z"})),templateLock:"all",template:[["wp-bootstrap-blocks/column",{sizeMd:4}],["wp-bootstrap-blocks/column",{sizeMd:8}]]},{name:"2-1",title:gt("2 Columns (2:1)","wp-bootstrap-blocks"),icon:Object(n.createElement)(Mt,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(St,{fillRule:"evenodd",clipRule:"evenodd",d:"M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z"})),templateLock:"all",template:[["wp-bootstrap-blocks/column",{sizeMd:8}],["wp-bootstrap-blocks/column",{sizeMd:4}]]},{name:"1-1-1",title:gt("3 Columns (1:1:1)","wp-bootstrap-blocks"),icon:Object(n.createElement)(Mt,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(St,{fillRule:"evenodd",d:"M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"})),templateLock:"all",template:[["wp-bootstrap-blocks/column",{sizeMd:4}],["wp-bootstrap-blocks/column",{sizeMd:4}],["wp-bootstrap-blocks/column",{sizeMd:4}]]}];Lt("wpBootstrapBlocks.row.useOldObjectTemplateStructure",!0)&&(console.warn("wp-bootstrap-blocks: The old object template structure (<= v1.2.0) of the row block is deprecated, please migrate your templates to the new array structure (v1.3.0+). As soon as you have updated your template structure you need to disable the old object template structure with the wpBootstrapBlocks.row.useOldObjectTemplateStructure filter."),kt=It,It=Array.isArray(kt)?kt.reduce((function(t,e){var o=e.name,n=e.title,l=e.template,r=I()(e,["name","title","template"]);return t[o]=ht({label:n,blocks:l},r),t}),{}):kt),It=function(t){return t.map((function(t){return ht({icon:dt},t)}))}(It=function(t){return Array.isArray(t)?t:Object.keys(t).map((function(e){return{name:e,title:t[e].title||t[e].label,icon:t[e].icon||dt,template:t[e].template||t[e].blocks,templateLock:void 0!==t[e].templateLock?t[e].templateLock:"all"}}))}(It=Lt("wpBootstrapBlocks.row.templates",It))),Lt("wpBootstrapBlocks.row.enableCustomTemplate",!0)&&It.push({name:"custom",title:gt("Custom","wp-bootstrap-blocks"),icon:dt,templateLock:!1,template:[["wp-bootstrap-blocks/column"]]});var Tt=function(t){var e=It.find((function(e){return e.name===t}));return!!e&&e.templateLock},qt=function(t){function e(){return B()(this,e),S()(this,V()(e).apply(this,arguments))}return H()(e,t),z()(e,[{key:"render",value:function(){var t,e,o=this.props,l=o.className,r=o.attributes,c=o.setAttributes,a=o.columns,s=o.updateBlockAttributes,i=r.template,p=r.noGutters,u=r.alignment,b=r.verticalAlignment,m=[{icon:"editor-alignleft",title:gt("Align columns left","wp-bootstrap-blocks"),align:"left"},{icon:"editor-aligncenter",title:gt("Align columns center","wp-bootstrap-blocks"),align:"center"},{icon:"editor-alignright",title:gt("Align columns right","wp-bootstrap-blocks"),align:"right"}],w=[{icon:wt,title:gt("Align columns top","wp-bootstrap-blocks"),align:"top"},{icon:mt,title:gt("Align columns center","wp-bootstrap-blocks"),align:"center"},{icon:bt,title:gt("Align columns bottom","wp-bootstrap-blocks"),align:"bottom"}];return Object(n.createElement)(Pt,null,Object(n.createElement)(yt,null,Object(n.createElement)(zt,{title:gt("Change layout","wp-bootstrap-blocks")},Object(n.createElement)("ul",{className:"wp-bootstrap-blocks-template-selector-list"},It.map((function(t,e){return Object(n.createElement)("li",{className:"wp-bootstrap-blocks-template-selector-button",key:e},Object(n.createElement)(Bt,{label:t.title,icon:t.icon,onClick:function(){!function(t){var e=It.find((function(e){return e.name===t}));e&&(a.forEach((function(t,o){if(e.template.length>o){var n=e.template[o][1];s(t.clientId,n)}})),c({template:t}))}(t.name)},className:i===t.name?"is-active":null},Object(n.createElement)("div",{className:"wp-bootstrap-blocks-template-selector-button-label"},t.title)))})))),Object(n.createElement)(zt,{title:gt("Row options","wp-bootstrap-blocks")},Object(n.createElement)(xt,{label:gt("No Gutters","wp-bootstrap-blocks"),checked:p,onChange:function(t){return c({noGutters:t})}}))),Object(n.createElement)(jt,null,Object(n.createElement)(Ct,{value:u,onChange:function(t){return c({alignment:t})},alignmentControls:m}),Object(n.createElement)(Ct,{value:b,onChange:function(t){return c({verticalAlignment:t})},alignmentControls:w})),Object(n.createElement)("div",{className:l},Object(n.createElement)(Ot,{allowedBlocks:Rt,template:(t=i,e=It.find((function(e){return e.name===t})),e?e.template:[]),templateLock:Tt(i)})))}}]),e}(Vt),Xt=Nt(_t((function(t,e){var o=e.clientId,n=t("core/editor").getBlocksByClientId;return{columns:n(o)[0]?n(o)[0].innerBlocks:[]}})),Ft((function(t){return{updateBlockAttributes:t("core/editor").updateBlockAttributes}})))(qt),Wt=wp.i18n.__,Zt=wp.blocks.registerBlockType,Dt=wp.editor.InnerBlocks;Zt("wp-bootstrap-blocks/row",{title:Wt("Row","wp-bootstrap-blocks"),icon:"layout",category:"wp-bootstrap-blocks",keywords:[Wt("Bootstrap Blocks","wp-bootstrap-blocks"),Wt("Bootstrap","wp-bootstrap-blocks"),Wt("Row","wp-bootstrap-blocks")],supports:{align:["full"]},getEditWrapperProps:function(t){return{"data-alignment":t.alignment,"data-vertical-alignment":t.verticalAlignment}},edit:Xt,save:function(){return Object(n.createElement)(Dt.Content,null)}});var Gt=wp.i18n.__,Ut=wp.element,Jt=Ut.Component,Kt=Ut.Fragment,Qt=wp.editor,Yt=Qt.RichText,$t=Qt.URLInput,te=Qt.InspectorControls,ee=Qt.BlockControls,oe=Qt.AlignmentToolbar,ne=wp.components,le=ne.Dashicon,re=ne.IconButton,ce=ne.SelectControl,ae=ne.PanelBody,se=wp.hooks.applyFilters,ie=function(t){function e(){return B()(this,e),S()(this,V()(e).apply(this,arguments))}return H()(e,t),z()(e,[{key:"render",value:function(){var t=this.props,e=t.attributes,o=t.className,l=t.setAttributes,r=t.isSelected,c=e.url,a=e.text,s=e.style,i=e.alignment,p=[{label:Gt("Primary","wp-bootstrap-blocks"),value:"primary"},{label:Gt("Secondary","wp-bootstrap-blocks"),value:"secondary"}];return p=se("wpBootstrapBlocks.button.styleOptions",p),Object(n.createElement)(Kt,null,Object(n.createElement)("div",{className:o,"data-alignment":i},Object(n.createElement)(Yt,{placeholder:Gt("Add text…"),value:a,onChange:function(t){return l({text:t})},formattingControls:[],keepPlaceholderOnFocus:!0}),Object(n.createElement)(te,null,Object(n.createElement)(ae,null,Object(n.createElement)(ce,{label:Gt("Style","wp-bootstrap-blocks"),value:s,options:p,onChange:function(t){l({style:t})}}))),Object(n.createElement)(ee,null,Object(n.createElement)(oe,{value:i,onChange:function(t){return l({alignment:t})}}))),r&&Object(n.createElement)("form",{className:"wp-block-wp-bootstrap-blocks-button-link",onSubmit:function(t){return t.preventDefault()}},Object(n.createElement)(le,{icon:"admin-links"}),Object(n.createElement)($t,{value:c,onChange:function(t){return l({url:t})}}),Object(n.createElement)(re,{icon:"editor-break",label:Gt("Apply"),type:"submit"})))}}]),e}(Jt),pe=wp.i18n.__,ue=wp.blocks.registerBlockType,be=wp.components,me=be.G,we=be.Path,de=be.SVG;ue("wp-bootstrap-blocks/button",{title:pe("Button","wp-bootstrap-blocks"),icon:Object(n.createElement)(de,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(we,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)(me,null,Object(n.createElement)(we,{d:"M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"}))),category:"wp-bootstrap-blocks",keywords:[pe("Bootstrap Blocks","wp-bootstrap-blocks"),pe("Bootstrap","wp-bootstrap-blocks"),pe("Button","wp-bootstrap-blocks")],example:{},getEditWrapperProps:function(t){return{"data-alignment":t.alignment}},edit:ie,save:function(){return null}})}]);