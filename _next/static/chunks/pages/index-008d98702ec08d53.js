(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9166:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return _},default:function(){return j}});var i=e(7294),o=e(7379),r=e(7595),a=e(7218),s=e(4942);function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function d(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"===typeof n)return c(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(n,t){return t-=1,Math.floor(Math.random()*(t-n+1)+n)+1}function f(){for(var n=l(1,6),t=[],e=0;e<n;e++){var i="".concat((new Date).getTime()+Math.random()).concat(e),o=l(0,7),r="".concat(o,"s"),a=l(0,50),s=l(0,50),c=l(5,50),d=l(1,359),f=l(1,3e3);t.push({uid:i,index:e,numberOfStars:n,startTop:a,startLeft:s,shootingTime:o,shotLength:c,rotateDeg:d,duration:r,delay:f})}return t}var g=e(5893);function m(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function h(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?m(Object(e),!0).forEach((function(t){(0,s.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var u=f(),p=u.map((function(){return!1})),C=(0,i.memo)((function(){var n=(0,i.useState)(u),t=n[0],e=n[1],o=(0,i.useState)(p),r=o[0],a=o[1];if(r.every((function(n){return!0===n}))){var s=f(),c=s.map((function(){return!1}));e(s),a(c)}return(0,i.useMemo)((function(){return t.map((function(n){return(0,g.jsx)(w,{rotateDeg:n.rotateDeg,children:(0,g.jsx)(y,h(h({},n),{},{onAnimationEnd:function(t){"shooting"===t.animationName&&a((function(t){var e=d(t);return e[n.index]=!0,e}))}}))},n.uid)}))}),[t])})),w=o.ZP.div.withConfig({displayName:"shooting-stars__StarWrapper",componentId:"sc-p52w46-0"})(["position:absolute;width:100vw;height:100vh;top:0;left:0;transform:rotateZ(","deg);z-index:0;"],(function(n){return n.rotateDeg})),y=o.ZP.div.withConfig({displayName:"shooting-stars__StyledShootingStar",componentId:"sc-p52w46-1"})(["position:absolute;left:","%;top:","%;height:2px;background:linear-gradient( -45deg,rgba(95,145,255,1),rgba(0,0,255,0) );border-radius:999px;filter:drop-shadow(0 0 6px rgba(105,155,255,1));animation:tail "," ease-in-out 1,shooting "," ease-in-out 1;animation-delay:",'ms;:before{content:"";position:absolute;top:calc(50% - 1px);right:0;height:2px;background:linear-gradient( -45deg,rgba(0,0,255,0),rgba(95,145,255,1),rgba(0,0,255,0) );transform:translateX(50%) rotateZ(45deg);border-radius:100%;animation:shining '," ease-in-out 1;animation-delay:",'ms;}:after{content:"";position:absolute;top:calc(50% - 1px);right:0;height:2px;background:linear-gradient( -45deg,rgba(0,0,255,0),rgba(95,145,255,1),rgba(0,0,255,0) );transform:translateX(50%) rotateZ(45deg);border-radius:100%;animation:shining '," ease-in-out 1;animation-delay:","ms;transform:translateX(50%) rotateZ(-45deg);}@keyframes tail{0%{width:0;}30%{width:","vw;}100%{width:0;}}@keyframes shining{0%{width:0;}50%{width:30px;}100%{width:0;}}@keyframes shooting{0%{transform:translateX(0);}100%{transform:translateX(","vw);}}@keyframes sky{0%{transform:rotate(45deg);}100%{transform:rotate(45 + 360deg);}}"],(function(n){return n.startLeft}),(function(n){return n.startTop}),(function(n){return n.duration}),(function(n){return n.duration}),(function(n){return n.delay}),(function(n){return n.duration}),(function(n){return n.delay}),(function(n){return n.duration}),(function(n){return n.delay}),(function(n){return n.shotLength}),(function(n){return 3*n.shotLength}));var v=o.ZP.svg.withConfig({displayName:"wave__StyledSVG",componentId:"sc-ucdf64-0"})(["height:auto;width:1em;"]);function x(n){var t=n.introLoadFinished;return(0,g.jsx)(b,{wave:!t})}var b=(0,o.ZP)((function(n){var t=n.className;return(0,g.jsx)(v,{className:t,id:"svg",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0, 0, 400,400",children:(0,g.jsx)("g",{id:"svgg",children:(0,g.jsx)("path",{id:"path0",d:"M261.855 1.808 C 258.485 5.396,259.395 7.537,268.074 16.437 C 281.678 30.388,289.680 41.162,299.383 58.594 C 305.656 69.864,310.769 72.560,314.092 66.350 C 317.655 59.694,298.082 28.526,277.211 7.617 C 268.657 -0.952,265.551 -2.127,261.855 1.808 M180.152 14.963 C 171.202 16.288,161.938 23.220,158.384 31.250 C 157.529 33.184,156.733 34.878,156.616 35.014 C 156.499 35.151,154.799 34.038,152.838 32.541 C 141.055 23.547,123.425 24.584,112.976 34.886 C 103.621 44.108,101.599 56.908,107.363 70.412 C 107.813 71.465,107.186 71.773,103.714 72.207 C 78.707 75.331,70.513 102.884,87.797 125.723 C 93.148 132.793,93.143 132.495,87.915 133.035 C 69.313 134.955,57.463 158.288,66.200 175.793 C 68.339 180.078,154.499 297.005,158.430 300.958 C 162.376 304.925,168.750 302.432,168.750 296.922 C 168.750 294.225,164.722 288.546,124.048 233.893 C 99.461 200.857,78.543 172.274,77.563 170.375 C 71.165 157.979,82.904 142.269,96.320 145.276 C 103.537 146.893,104.106 147.533,133.229 186.720 C 148.491 207.258,161.487 224.483,162.107 224.998 C 164.147 226.691,168.788 226.295,170.412 224.290 C 173.918 219.960,174.704 221.201,132.732 164.753 C 111.204 135.799,93.093 111.149,92.485 109.974 C 85.547 96.568,98.739 81.105,113.596 85.230 C 118.650 86.633,121.939 90.644,159.327 140.979 C 179.100 167.599,196.076 189.823,197.053 190.365 C 201.042 192.580,205.086 190.726,205.916 186.302 C 206.558 182.877,211.102 189.392,161.986 123.315 C 113.680 58.328,116.788 62.944,116.823 56.250 C 116.907 40.146,136.250 32.845,147.377 44.718 C 148.690 46.119,169.540 73.898,193.710 106.450 C 243.791 173.897,241.649 171.466,247.160 167.131 C 252.020 163.308,253.021 164.921,209.461 106.377 C 185.136 73.683,169.395 51.844,168.853 50.036 C 164.995 37.160,176.149 24.647,189.024 27.408 C 194.443 28.571,197.261 30.869,203.878 39.524 C 210.521 48.214,214.143 49.919,217.926 46.137 C 221.057 43.006,220.150 39.940,213.477 31.103 C 203.089 17.347,193.948 12.920,180.152 14.963 M243.886 30.714 C 240.747 34.056,241.551 36.829,247.532 43.279 C 254.603 50.905,261.425 60.037,266.880 69.178 C 272.580 78.731,275.852 80.469,280.114 76.207 C 283.815 72.506,280.420 64.660,267.836 47.831 C 255.020 30.692,248.371 25.940,243.886 30.714 M226.044 58.966 C 224.015 60.388,223.200 63.337,224.148 65.831 C 225.042 68.181,304.123 174.750,306.753 177.148 C 312.481 182.372,316.103 178.809,318.057 166.026 C 326.883 108.312,348.304 75.620,369.922 86.874 C 378.829 91.511,379.077 93.608,373.004 112.891 C 362.054 147.656,358.724 166.576,359.605 189.008 C 360.104 201.701,361.098 206.050,366.225 217.969 C 375.616 239.804,374.370 262.407,362.846 279.237 C 355.622 289.786,363.585 299.177,371.366 289.284 L 372.840 287.411 377.755 294.079 C 386.796 306.347,385.631 311.542,371.484 322.038 C 363.998 327.593,363.281 328.445,363.281 331.790 C 363.281 335.878,366.028 337.999,370.703 337.520 C 374.316 337.150,389.556 324.410,392.459 319.334 C 398.747 308.337,396.904 298.236,385.936 283.592 C 382.906 279.546,380.610 275.758,380.835 275.173 C 387.119 258.798,385.683 231.481,377.517 212.043 C 368.087 189.597,370.252 162.709,385.249 116.016 C 392.597 93.137,390.761 83.533,377.734 76.703 C 345.932 60.031,321.628 86.474,307.278 153.361 L 306.641 156.332 271.953 109.611 C 229.723 52.732,231.751 54.969,226.044 58.966 M39.751 182.036 C 35.140 184.731,36.435 189.541,45.478 203.313 C 61.145 227.173,73.105 236.145,76.450 226.550 C 77.617 223.202,76.821 221.680,69.939 214.103 C 63.114 206.588,56.418 197.495,51.678 189.309 C 46.987 181.207,44.141 179.471,39.751 182.036 M7.282 190.772 C 4.729 192.007,3.566 195.429,4.617 198.614 C 10.462 216.324,44.487 259.375,52.639 259.375 C 61.786 259.375,60.864 252.855,50.163 241.863 C 36.800 228.137,27.571 215.555,18.829 199.147 C 14.120 190.308,11.769 188.603,7.282 190.772 M175.030 314.210 C 171.750 317.731,172.721 320.621,180.768 331.293 C 195.873 351.326,210.198 362.279,230.652 369.435 C 242.938 373.734,246.074 375.974,254.348 386.367 C 264.819 399.520,278.012 403.761,289.844 397.777 C 293.795 395.779,350.629 353.833,352.148 351.793 C 355.002 347.963,352.330 342.188,347.704 342.188 C 344.328 342.188,344.657 341.963,308.447 368.946 C 284.018 387.151,283.455 387.500,278.523 387.500 C 273.393 387.500,269.356 385.136,265.509 379.878 C 257.214 368.541,249.074 362.541,235.484 357.748 C 216.786 351.153,204.374 341.664,190.928 323.684 C 182.214 312.031,178.900 310.056,175.030 314.210 ",stroke:"none",fillRule:"evenodd"})})})})).withConfig({displayName:"wave-hand__StyledWaveIcon",componentId:"sc-1ykhk94-0"})(["min-width:1em;visibility:visible;path{transition:fill 1s ease;fill:white;}",":hover{animation-name:wave-animation;}animation-duration:2s;animation-iteration-count:1;transform-origin:90% 90%;@keyframes wave-animation{0%{transform:rotate(0deg);}10%{transform:rotate(14deg);}20%{transform:rotate(-8deg);}30%{transform:rotate(14deg);}40%{transform:rotate(-4deg);}50%{transform:rotate(12deg);}60%{transform:rotate(-2deg);}80%{transform:rotate(10deg);}100%{transform:rotate(0deg);}}"],(function(n){return n.wave&&"\n    path {\n      fill: black;\n    }\n    animation-name: wave-animation; \n  "})),_=!0;function j(n){var t=n.content,e=(0,i.useState)(!1),o=e[0],r=e[1],s=(0,i.useState)(!1),c=s[0],d=s[1];return(0,i.useEffect)((function(){setTimeout((function(){r(!0),setTimeout((function(){return d(!0)}),1)}),2200)}),[]),(0,g.jsxs)(k,{doneLoading:o,postLoading:c,children:[(0,g.jsx)(C,{}),(0,g.jsxs)(P,{children:[(0,g.jsxs)(I,{children:[(0,g.jsx)(x,{introLoadFinished:o}),(0,g.jsxs)(z,{doneLoading:o,children:[(0,g.jsx)(N,{children:"H"}),(0,g.jsx)(S,{children:"i"}),(0,g.jsx)(O,{postLoading:c,children:","})]})]}),(0,g.jsx)(L,{children:(0,g.jsx)(Z,{srcSet:(0,a.pI)("evan-2021-profile-picture",!0),alt:"Evan Bonsignori's profile"})}),(0,g.jsxs)(T,{children:["I'm ",(0,g.jsx)("strong",{children:"Evan Bonsignori"}),", a digital nomad travelling the west. When I'm not writing code for ",t.currentCompany," or practicing mindfulness, I'm enjoying one of my hobbies,"]}),(0,g.jsxs)(M,{children:[(0,g.jsx)(E,{href:"https://writing.evan.bio",children:"Writing"}),(0,g.jsx)(E,{href:"https://photos.evan.bio",children:"Photography"}),(0,g.jsx)(E,{href:"https://music.evan.bio",children:"Music"})]})]})]})}var k=o.ZP.div.withConfig({displayName:"pages__PageWrapper",componentId:"sc-tne0hc-0"})(["position:relative;overflow:hidden;"," ",""],(function(n){return n.doneLoading?"\n    visibility: visible;\n    opacity: 0;\n  ":"\n    visibility: hidden;\n  "}),(function(n){return n.postLoading&&"\n    transition: opacity 1s ease-in;\n    opacity: 1 !important;\n  "})),P=o.ZP.header.withConfig({displayName:"pages__PageHeader",componentId:"sc-tne0hc-1"})(["display:grid;grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(5,fr);width:100vw;height:100vh;background-size:cover;background-position:center center;background-repeat:no-repeat;background-color:black;color:white;z-index:-1;"," ",""],(0,a.Pf)("stary-night-prineville-sky",!0),(0,r.CH)({xs:"\n      min-height: 100vh;\n      height: auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-evenly;\n      align-items: center;\n     ",sm:"\n      min-height: 100vh;\n      height: auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-evenly;\n      align-items: center;\n     "})),I=o.ZP.div.withConfig({displayName:"pages__GreetingTitleSection",componentId:"sc-tne0hc-2"})(["display:flex;flex-direction:row;color:black;transition:color 1s ease;visibility:visible;grid-row:2 / 3;grid-column:2 / 4;align-items:flex-end;z-index:1;font-size:8em;",""],(0,r.CH)({xs:"\n      margin-top: 5%;\n      font-size: 4em;\n      justify-content: center;\n     ",sm:"\n      margin-top: 5%;\n      font-size: 6em;\n      justify-content: center;\n     ",md:"\n      font-size: 6em;\n      ",lg:"\n      font-size: 8em;\n      ",xl:"\n      font-size: 9em;\n      ",xxl:"\n      font-size: 10em;\n      "})),z=o.ZP.h1.withConfig({displayName:"pages__GreetingTitle",componentId:"sc-tne0hc-3"})(["margin:0;margin-left:0.5em;font-size:inherit;font-weight:700;color:black;"," @keyframes fadeIn{0%{opacity:0;}100%{opacity:1;}}"],(function(n){return n.doneLoading&&"\n    color: white;\n  "})),N=o.ZP.span.withConfig({displayName:"pages__LetterOne",componentId:"sc-tne0hc-4"})(["opacity:0;animation-duration:1s;animation-name:fadeIn;animation-fill-mode:forwards;"]),S=o.ZP.span.withConfig({displayName:"pages__LetterTwo",componentId:"sc-tne0hc-5"})(["opacity:0;animation-delay:0.3s;animation-duration:1s;animation-name:fadeIn;animation-fill-mode:forwards;"]),O=o.ZP.span.withConfig({displayName:"pages__LetterThree",componentId:"sc-tne0hc-6"})(["",""],(function(n){return n.postLoading?"\n      visibility: visible;\n\n  ":"visibility: hidden;"})),L=o.ZP.div.withConfig({displayName:"pages__ProfileImageWrapper",componentId:"sc-tne0hc-7"})(["display:flex;flex-direction:column;grid-row:2 / 4;grid-column:5 / 7;justify-content:center;z-index:1;"]),Z=o.ZP.img.withConfig({displayName:"pages__StyledProfileImg",componentId:"sc-tne0hc-8"})(["border:3px solid white;border-radius:100%;width:25vw;",""],(0,r.CH)({xs:"\n      width: 40vw;\n     ",sm:"\n      width: 35vw;\n     ",md:"\n      width: 32vw;\n      ",lg:"\n      width: 28vw;\n    ",xl:"\n      width: 25vw;\n    ",xxl:"\n      width: 22vw;\n    "})),T=o.ZP.p.withConfig({displayName:"pages__GreetingText",componentId:"sc-tne0hc-9"})(["grid-row:3 / 4;grid-column:2 / 5;font-size:2em;line-height:1.5em;color:white;padding-left:5%;padding-right:5%;strong{font-family:cursive;font-weight:900;}",""],(0,r.CH)({xs:"\n      padding-left: 10%;\n      padding-right: 10%;\n      justify-content: center;\n      text-align: center;\n      font-size: 2.7vh;\n      line-height: 4vh;\n     ",sm:"\n      padding-left: 10%;\n      padding-right: 10%;\n      justify-content: center;\n      text-align: center;\n      font-size: 2.8vh;\n      line-height: 4.5vh;\n     ",md:"\n      font-size: 1.5em;\n      ",lg:"\n      font-size: 1.5em;\n      ",xl:"\n      font-size: 2em;\n      line-height: 1.5em;\n      ",xxl:""})),M=o.ZP.div.withConfig({displayName:"pages__PageLinks",componentId:"sc-tne0hc-10"})(["display:flex;flex-direction:row;justify-content:space-evenly;grid-row:4 / 5;grid-column:2 / 7;",""],(0,r.CH)({xs:"\n      flex-direction: column;\n      align-content: center;\n     ",sm:"\n      flex-direction: column;\n      align-content: center;\n     ",md:"",lg:"",xl:"",xxl:""})),E=o.ZP.a.withConfig({displayName:"pages__PageLink",componentId:"sc-tne0hc-11"})(["color:white;text-decoration:none;z-index:2;height:fit-content;font-size:3em;font-weight:900;box-shadow:inset 0 0px 0 white,inset 0 -2px 0 white;",":hover{cursor:pointer;background:linear-gradient( to left,#fff 20%,rgba(0,0,225,0.2) 40%,rgba(95,145,225,1) 60%,#fff 80% );background-size:200% auto;background-clip:text;text-fill-color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:shine 3s linear infinite;box-shadow:inset 0 0px 0 white,inset 0 -3px 0 rgba(95,145,225,0.5) !important;}@keyframes shine{to{background-position:200% center;}}"],(0,r.CH)({xs:"\n      font-size: 2em;\n      margin-bottom: 4vh;\n      box-shadow: inset 0 0px 0 white, inset 0 -1px 0 white;\n     ",sm:"\n      font-size: 2.8em;\n      margin-bottom: 3vh;\n     ",md:"\n      font-size: 3em;\n      margin-bottom: 5vh;\n    ",lg:"",xl:"",xxl:""}))},8581:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(9166)}])}},function(n){n.O(0,[774,888,179],(function(){return t=8581,n(n.s=t);var t}));var t=n.O();_N_E=t}]);