(function(){var e,t,n,o,r,d,a,c,s,u,i,l;for(n={y:0,touchStart:{},touchEnd:{},wheel:0,arrow:document.getElementsByClassName("arrow"),screen:[{id:"main",x:0,y:0},{id:"about",x:0,y:1},{id:"skill",x:0,y:2},{id:"works",x:0,y:3},{id:"contact",x:0,y:4}]},s=n.screen,o=0,r=s.length;r>o;o++)l=s[o],n.screen[l.y].box=document.getElementById(l.id);u=function(e){var t,o,r;if(n.y+e>=0&&n.y+e<=4){for(n.y+=e,t=0,r=[];t<n.screen.length;)o=100*(n.screen[t].y-n.y)+"%",n.screen[t].box.style.transform="translate3d(0,"+o+",0)",r.push(t++);return r}},t=function(e){return{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}},a=function(e,t){var n;l=t.x-e.x,n=t.y-e.y,l>50&&l>n&&l>-n&&u(-1),n>50&&n>l&&n>-l&&u(-1),-50>l&&-l>n&&-l>-n&&u(1),-50>n&&-n>l&&-n>-l&&u(1)},window.document.addEventListener("keyup",function(e){(37===e.keyCode||38===e.keyCode)&&u(-1),(39===e.keyCode||40===e.keyCode)&&u(1)}),window.document.addEventListener("touchstart",function(e){n.touchStart=t(e)},!1),window.document.addEventListener("touchend",function(e){n.touchEnd=t(e),a(n.touchStart,n.touchEnd)},!1),d=/Firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel",document.attachEvent?document.attachEvent("on"+d,function(e){n.wheel=e.detail?-120*e.detail:e.wheelDelta,e.preventDefault(),u(n.wheel>0?-1:1)}):document.addEventListener&&document.addEventListener(d,function(e){n.wheel=e.detail?-120*e.detail:e.wheelDelta,e.preventDefault(),u(n.wheel>0?-1:1)},!1),document.querySelector("span[move='about']").addEventListener("click",function(){return u(1)}),document.querySelector("span[move='skill']").addEventListener("click",function(){return u(2)}),document.querySelector("span[move='works']").addEventListener("click",function(){return u(3)}),document.querySelector("span[move='contact']").addEventListener("click",function(){return u(4)}),i=document.getElementsByClassName("test"),e=document.getElementById("authorphoto"),window.addEventListener("resize",function(){return c()}),(c=function(){var t,n,o;return window.screen.width>768?(n=e.offsetHeight/2,o=-n,t="transform: rotate3d(0, 1, 0, 240deg) scale3d(0.8, 0.8, 1) rotateX(90deg) scaleY(2) translate3d(0,"+n+"px, "+o+"px);-ms-transform: rotate3d(0, 1, 0, 240deg) scale3d(0.8, 0.8, 1) rotateX(90deg) scaleY(2) translate3d(0,"+n+"px, "+o+"px);-webkit-transform: rotate3d(0, 1, 0, 240deg) scale3d(0.8, 0.8, 1) rotateX(90deg) scaleY(2) translate3d(0,"+n+"px, "+o+"px);-moz-transform: rotate3d(0, 1, 0, 240deg) scale3d(0.8, 0.8, 1) rotateX(90deg) scaleY(2) translate3d(0,"+n+"px, "+o+"px);",i[0].setAttribute("style",t)):void 0})()}).call(this);