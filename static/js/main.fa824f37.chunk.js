(this["webpackJsonphooks-library"]=this["webpackJsonphooks-library"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(3),o=n.n(r),c=n(4),u=n(1),i=function(){var e=Object(l.useState)({alpha:0,beta:0,gamma:0}),t=Object(u.a)(e,2),n=t[0],a=t[1],r=function(e){a(Object(c.a)({},n,{alpha:e.alpha?e.alpha:0,beta:e.beta?e.beta:0,gamma:e.gamma?e.gamma:0}))};return Object(l.useEffect)((function(){return window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",r,!0),function(){window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",r)}}),[]),n},m=function(){var e=i(),t=e.alpha,n=e.beta,l=e.gamma;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"useDeviceOrientation"),a.a.createElement("ul",null,a.a.createElement("li",null,"Alpha: ",t),a.a.createElement("li",null,"Beta: ",n),a.a.createElement("li",null,"Gamma: ",l)))},s=function(e){Object(l.useEffect)((function(){document.querySelector("link[rel='icon']").href=e}),[e]);return function(e){document.querySelector("link[rel='icon']").href=e}},E=function(){var e=s("https://www.webopixel.net/blog/wp-content/uploads/2018/08/react-icon.png");return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"useFavicon"),a.a.createElement("button",{onClick:function(){return e("https://avatars0.githubusercontent.com/u/29245056?s=200&v=4")}},"Change Favicon"))},f=function(){var e=Object(l.useState)({lat:0,long:0}),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(l.useState)(null),o=Object(u.a)(r,2),c=o[0],i=o[1],m=function(e){a({lat:e.coords.latitude,long:e.coords.longitude})},s=function(){i("Geolocation doesn't work...")};return Object(l.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(m,s):i("Geolocation doesn't work...")}),[]),{coords:n,error:c}},d=function(){var e=f(),t=e.coords,n=t.lat,l=t.long,r=e.error;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"useGeolocation"),a.a.createElement("ul",null,a.a.createElement("li",null,"Latitude: ",n),a.a.createElement("li",null,"Longitude: ",l),a.a.createElement("li",null,"Geolocation Error: ",r||"null")))},v=function(e){var t=Object(l.useState)(!1),n=Object(u.a)(t,2),a=n[0],r=n[1],o=function(t){t.key===e&&r(!0)},c=function(t){t.key===e&&r(!1)};return Object(l.useEffect)((function(){return window.addEventListener("keydown",o),window.addEventListener("keyup",c),function(){window.removeEventListener("keydown",o),window.removeEventListener("keyup",c)}}),[]),a},b=function(){var e=v("k"),t=v("i"),n=v("m"),l=v("c"),r=v("h");return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"useKeyPress"),a.a.createElement("ul",null,a.a.createElement("li",null,"Pressed 'k': ",e&&"K"),a.a.createElement("li",null,"Pressed 'i': ",t&&"I"),a.a.createElement("li",null,"Pressed 'm': ",n&&"M"),a.a.createElement("li",null,"Pressed 'c': ",l&&"C"),a.a.createElement("li",null,"Pressed 'h': ",r&&"H"),a.a.createElement("li",null,"Pressed 'i': ",t&&"I")))},w=function(e,t){var n=Object(l.useState)(null),a=Object(u.a)(n,2),r=a[0],o=a[1],c=function(t){localStorage.setItem(e,t),o("null"!==localStorage.getItem(e)?localStorage.getItem(e):null)};return Object(l.useEffect)((function(){c(t)}),[]),[r,c]},g=function(){var e=w("hook","12345"),t=Object(u.a)(e,2),n=t[0],l=t[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"useLocalStorage"),a.a.createElement("ul",null,a.a.createElement("li",null,"Current Value: ",n),a.a.createElement("button",{onClick:function(){return l("12345")}},"Set value: 12345"),a.a.createElement("button",{onClick:function(){return l(null)}},"Clear LS")))},h=function(){var e=Object(l.useState)(0),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(l.useState)(0),o=Object(u.a)(r,2),c=o[0],i=o[1],m=function(e){a(e.x),i(e.y)};return Object(l.useEffect)((function(){return window.addEventListener("mousemove",m),function(){window.removeEventListener("mousemove",m)}}),[]),{x:n,y:c}},O=function(){var e=h(),t=e.x,n=e.y;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"useMousePosition"),a.a.createElement("ul",null,a.a.createElement("li",null,"Mouse X: ",t),a.a.createElement("li",null,"Mouse Y: ",n)))},k=function(){var e=Object(l.useState)(navigator.onLine),t=Object(u.a)(e,2),n=t[0],a=t[1],r=function(){navigator.onLine?a(!0):a(!1)};return Object(l.useEffect)((function(){return window.addEventListener("online",r),window.addEventListener("offline",r),function(){window.removeEventListener("online",r),window.removeEventListener("offline",r)}}),[]),n},j=function(){var e=k();return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"useOnline"),a.a.createElement("div",null,"Are we online? ",e?"Yes":"No"))},S=function(){var e=Object(l.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return[n,{lockScroll:function(){a(!0),document.querySelector("body").style.overflow="hidden"},unlockScroll:function(){a(!1),document.querySelector("body").style.overflow=""}}]},p=function(){var e=S(),t=Object(u.a)(e,2),n=t[0],l=t[1],r=l.lockScroll,o=l.unlockScroll;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"useLockScroll"),a.a.createElement("h3",null,"Is locked? ",n?"Yes":"No"),a.a.createElement("button",{onClick:r},"Lock scroll"),a.a.createElement("button",{onClick:o},"Unlock scroll"))},y=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Superhooks!"),a.a.createElement(m,null),a.a.createElement(E,null),a.a.createElement(d,null),a.a.createElement(b,null),a.a.createElement(g,null),a.a.createElement(O,null),a.a.createElement(j,null),a.a.createElement(p,null))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y,null)),document.getElementById("root"))},5:function(e,t,n){e.exports=n(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.fa824f37.chunk.js.map