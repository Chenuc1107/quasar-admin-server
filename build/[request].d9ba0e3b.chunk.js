(self["webpackChunkquasar_admin_server"] = self["webpackChunkquasar_admin_server"] || []).push([[6750],{

/***/ 85104:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(74879);
  } else {}
  

/***/ }),

/***/ 74879:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(__webpack_require__(67294),__webpack_require__(16384),__webpack_require__(39711),__webpack_require__(43257)):0}(this,(function(n,e,t,r){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=119)}({0:function(n,e,t){n.exports=t(22)()},1:function(e,t){e.exports=n},11:function(n,e,t){var r=t(27),o=t(28),i=t(25),a=t(29);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},119:function(n,e,t){"use strict";t.r(e),t.d(e,"Link",(function(){return j}));var r,o,i=t(6),a=t.n(i),s=t(5),u=t.n(s),c=t(3),f=t.n(c),d=t(1),l=t.n(d),p=t(0),h=t.n(p),m=t(2),g=t.n(m),b=t(87),v=t.n(b),x=t(40),y=t(9),O=t(4),w=t(20),S=["href","to","children","disabled","startIcon","endIcon"],_=g.a.a(r||(r=f()(["\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  pointer-events: ",";\n  color: ",";\n\n  svg path {\n    transition: fill 150ms ease-out;\n    fill: currentColor;\n  }\n\n  svg {\n    font-size: ","rem;\n  }\n\n  "," {\n    transition: color 150ms ease-out;\n    color: currentColor;\n  }\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n\n  ",";\n"])),(function(n){return n.disabled?"none":void 0}),(function(n){var e=n.disabled,t=n.theme;return e?t.colors.neutral600:t.colors.primary600}),.625,y.Typography,(function(n){return n.theme.colors.primary500}),(function(n){return n.theme.colors.primary700}),w.a),T=g()(O.Box)(o||(o=f()(["\n  display: flex;\n"]))),j=function(n){var e=n.href,t=n.to,r=n.children,o=n.disabled,i=n.startIcon,s=n.endIcon,c=u()(n,S),f=e?"_blank":void 0,d=e?"noreferrer noopener":void 0;return l.a.createElement(_,a()({as:t&&!o?x.NavLink:"a",target:f,rel:d,to:o?void 0:t,href:o?"#":e,disabled:o},c),i&&l.a.createElement(T,{as:"span","aria-hidden":!0,paddingRight:2},i),l.a.createElement(y.Typography,null,r),s&&!e&&l.a.createElement(T,{as:"span","aria-hidden":!0,paddingLeft:2},s),e&&l.a.createElement(T,{as:"span","aria-hidden":!0,paddingLeft:2},l.a.createElement(v.a,null)))};j.displayName="Link",j.defaultProps={href:void 0,to:void 0,disabled:!1},j.propTypes={children:h.a.node.isRequired,disabled:h.a.bool,endIcon:h.a.element,href:function(n){if(!n.disabled&&!n.to&&!n.href)return new Error("href must be defined")},startIcon:h.a.element,to:function(n){if(!n.disabled&&!n.href&&!n.to)return new Error("to must be defined")}}},13:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"b",(function(){return a}));var r=t(8),o=function(n){return n.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "},i=function(n){var e=n.variant,t=n.theme;switch(e){case r.a:return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[5],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case r.b:return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[4],";\n        line-height: ").concat(t.lineHeights[1],";\n      ");case r.c:return"\n        font-weight: ".concat(t.fontWeights.semiBold,";\n        font-size: ").concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case r.d:return"\n        font-size: ".concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[6],";\n      ");case r.e:return"\n        font-size: ".concat(t.fontSizes[2],";\n        line-height: ").concat(t.lineHeights[4],";\n      ");case r.f:return"\n        font-size: ".concat(t.fontSizes[1],";\n        line-height: ").concat(t.lineHeights[3],";\n      ");case r.g:return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[0],";\n        line-height: ").concat(t.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(t.fontSizes[2],";\n      ")}},a=function(n){var e=n.theme,t=n.textColor;return e.colors[t||"neutral800"]}},15:function(n,e){function t(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=t=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),t(e)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},2:function(n,t){n.exports=e},20:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i}));var r=function(n){return function(e){var t=e.theme,r=e.size;return t.sizes[n][r]}},o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"&";return function(e){var t=e.theme,r=e.hasError;return"\n      outline: none;\n      box-shadow: 0;\n      transition-property: border-color, box-shadow, fill;\n      transition-duration: 0.2s;\n\n      ".concat(n,":focus-within {\n        border: 1px solid ").concat(r?t.colors.danger600:t.colors.primary600,";\n        box-shadow: ").concat(r?t.colors.danger600:t.colors.primary600," 0px 0px 0px 2px;\n      }\n    ")}},i=function(n){var e=n.theme;return"\n  position: relative;\n  outline: none;\n  \n  &:after {\n    transition-property: all;\n    transition-duration: 0.2s;\n    border-radius: 8px;\n    content: '';\n    position: absolute;\n    top: -4px;\n    bottom: -4px;\n    left: -4px;\n    right: -4px;\n    border: 2px solid transparent;\n  }\n\n  &:focus-visible {\n    outline: none;\n    &:after {\n      border-radius: 8px;\n      content: '';\n      position: absolute;\n      top: -5px;\n      bottom: -5px;\n      left: -5px;\n      right: -5px;\n      border: 2px solid ".concat(e.colors.primary600,";\n    }\n  }\n")}},22:function(n,e,t){"use strict";var r=t(23);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},23:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},24:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,e,t){var r=t(24);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},28:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,s=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){s=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},29:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},30:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return b}));var r,o=t(3),i=t.n(o),a=t(2),s=t.n(a),u=t(7),c=t(1),f=t.n(c),d=t(0),l=t.n(d),p=function(n){return f.a.createElement("div",n)},h={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},m={_hover:l.a.func,background:l.a.string,basis:l.a.oneOfType([l.a.string,l.a.string]),borderColor:l.a.string,children:l.a.oneOfType([l.a.node,l.a.string]),color:l.a.string,flex:l.a.oneOfType([l.a.string,l.a.string]),grow:l.a.oneOfType([l.a.string,l.a.string]),hasRadius:l.a.bool,hiddenS:l.a.bool,hiddenXS:l.a.bool,padding:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingBottom:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingLeft:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingRight:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingTop:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),shadow:l.a.string,shrink:l.a.oneOfType([l.a.string,l.a.string])};p.defaultProps=h,p.propTypes=m;var g={color:!0},b=s.a.div.withConfig({shouldForwardProp:function(n,e){return!g[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(u.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(u.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(u.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(u.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(u.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(u.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(u.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(u.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(u.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.spaces[e]||e}),(function(n){var e=n.maxWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.minWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.height;return n.theme.spaces[e]||e}),(function(n){var e=n.maxHeight;return n.theme.spaces[e]||e}),(function(n){var e=n.minHeight;return n.theme.spaces[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));b.defaultProps=h,b.propTypes=m},40:function(n,e){n.exports=t},5:function(n,e,t){var r=t(30);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},7:function(n,e,t){"use strict";var r=t(11),o=t.n(r),i=t(15),a=t.n(i);e.a=function(n,e,t){var r=e;if(Array.isArray(e)||"object"!==a()(e)||(r=[null==e?void 0:e.desktop,null==e?void 0:e.tablet,null==e?void 0:e.mobile]),void 0!==r){if(Array.isArray(r)){var i=r,s=o()(i,3),u=s[0],c=s[1],f=s[2],d="".concat(n,": ").concat(t.spaces[u],";");return void 0!==c&&(d+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[c],";\n        }")),void 0!==f&&(d+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[f],";\n        }")),d}var l=t.spaces[r]||r;return"".concat(n,": ").concat(l,";")}}},8:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"d",(function(){return a})),t.d(e,"e",(function(){return s})),t.d(e,"f",(function(){return u})),t.d(e,"g",(function(){return c})),t.d(e,"h",(function(){return f}));var r="alpha",o="beta",i="delta",a="epsilon",s="omega",u="pi",c="sigma",f=[r,o,i,a,s,u,c]},87:function(n,e){n.exports=r},9:function(n,e,t){"use strict";t.r(e),t.d(e,"Typography",(function(){return v}));var r,o=t(3),i=t.n(o),a=t(2),s=t.n(a),u=t(13),c=t(1),f=t.n(c),d=t(0),l=t.n(d),p=t(8),h=function(n){return f.a.createElement("div",n)},m={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textAlign:void 0,textTransform:void 0,variant:p.e},g={ellipsis:l.a.bool,fontSize:l.a.oneOfType([l.a.number,l.a.string]),fontWeight:l.a.string,lineHeight:l.a.oneOfType([l.a.number,l.a.string]),textAlign:l.a.string,textColor:l.a.string,textTransform:l.a.string,variant:l.a.oneOf(p.h)};h.defaultProps=m,h.propTypes=g;var b={fontSize:!0,fontWeight:!0},v=s.a.span.withConfig({shouldForwardProp:function(n,e){return!b[n]&&e(n)}})(r||(r=i()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-align: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(n){var e=n.theme,t=n.fontWeight;return e.fontWeights[t]}),(function(n){var e=n.theme,t=n.fontSize;return e.fontSizes[t]}),(function(n){var e=n.theme,t=n.lineHeight;return e.lineHeights[t]}),u.b,(function(n){return n.textAlign}),(function(n){return n.textTransform}),u.a,u.c);v.defaultProps=m,v.propTypes=g}})}));

/***/ }),

/***/ 77602:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}({0:function(t,r){t.exports=e},6:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L23.86 11.86a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L10.02 22.02a.2.2 0 010-.282L18.26 13.5H.2a.2.2 0 01-.2-.2v-2.6z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 22057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/strapi-google-translator/admin/src/pluginId.js
var pluginId = __webpack_require__(92286);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(5493);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(49425);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Divider.js
var Divider = __webpack_require__(14276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(34626);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Link.js
var Link = __webpack_require__(85104);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/ArrowRight.js
var ArrowRight = __webpack_require__(77602);
var ArrowRight_default = /*#__PURE__*/__webpack_require__.n(ArrowRight);
// EXTERNAL MODULE: ./node_modules/strapi-google-translator/package.json
var strapi_google_translator_package = __webpack_require__(8751);
;// CONCATENATED MODULE: ./node_modules/strapi-google-translator/admin/src/components/Home/index.js









const Home = () => {
  return /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 6,
    paddingLeft: 7
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "alpha"
  }, "Translator"), /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "omega"
  }, "Use Translator plugin to easily translate your Strapi content into multiple languages."))), /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 3
  }, /* @__PURE__ */ react.createElement(Divider.Divider, null)), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 7,
    paddingRight: 7
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    shadow: "tableShadow",
    background: "neutral0",
    paddingTop: 6,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 6,
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 4
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(Link.Link, {
    to: "/settings/strapi-google-translator",
    endIcon: /* @__PURE__ */ react.createElement((ArrowRight_default()), null)
  }, "Manage Your Translator Configuration")), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(Typography.Typography, null, "Plugin version:\xA0", strapi_google_translator_package/* version */.i8)))))), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 7,
    paddingRight: 7
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    shadow: "tableShadow",
    background: "neutral0",
    paddingTop: 6,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 6,
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingBottom: 6
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "beta"
  }, "How to use")), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingBottom: 2
  }, /* @__PURE__ */ react.createElement(Typography.Typography, null, "To initiate Translation for a content, you need to do following steps:")), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingLeft: 2
  }, /* @__PURE__ */ react.createElement(Typography.Typography, null, "1. Go to Settings > Internationalization > Add a new locale > select the locales you want.")), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 1,
    paddingLeft: 2
  }, /* @__PURE__ */ react.createElement(Typography.Typography, null, "2. Enable localization for the content type you want to translate.", " ", "Go to Content Type Builder > select the content you want > click on Edit > click on Advanced Settings > Check Enable localization for this Content-Type.")))), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 7,
    paddingRight: 7
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    shadow: "tableShadow",
    background: "neutral0",
    paddingTop: 6,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 6,
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 4
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 4,
    s: 12
  }, /* @__PURE__ */ react.createElement(Typography.Typography, null, "Have questions? Contact us at : support@asyncweb.io")))))));
};
/* harmony default export */ const components_Home = (Home);

;// CONCATENATED MODULE: ./node_modules/strapi-google-translator/admin/src/pages/HomePage/index.js



const HomePage = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(components_Home, null));
};
/* harmony default export */ const pages_HomePage = (HomePage);

;// CONCATENATED MODULE: ./node_modules/strapi-google-translator/admin/src/pages/App/index.js





const App = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: `/plugins/${pluginId/* default */.Z}`,
    component: pages_HomePage,
    exact: true
  }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    component: build.NotFound
  })));
};
/* harmony default export */ const pages_App = (App);


/***/ })

}]);