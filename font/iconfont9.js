(function(window){var svgSprite='<svg><symbol id="icon-bookmark" viewBox="0 0 1024 1024"><path d="M811.385856 73.203712q13.142016 0 25.141248 5.142528 18.855936 7.428096 29.99808 23.427072t11.142144 35.426304l0 736.524288q0 19.427328-11.142144 35.426304t-29.99808 23.427072q-10.856448 4.571136-25.141248 4.571136-27.426816 0-47.425536-18.284544l-251.983872-242.270208-251.983872 242.270208q-20.570112 18.855936-47.425536 18.855936-13.142016 0-25.141248-5.142528-18.855936-7.428096-29.99808-23.427072t-11.142144-35.426304l0-736.524288q0-19.427328 11.142144-35.426304t29.99808-23.427072q11.999232-5.142528 25.141248-5.142528l598.818816 0z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)