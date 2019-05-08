$(function () {
       //0.8 为添加动画元素的顶部距离屏幕顶部的距离 单位%  即动画何时触发
       var perc = 0.8;

       var flipAnimateList = $("[myFlip='flip']")
       var l2rAnimateList = $("[myFlip='l2r']")
       var r2lAnimateList = $("[myFlip='r2l']")
       var zoomInAnimateList = $("[myFlip='zoomIn']")
       var fadeAnimateList = $("[myFlip='fade']")

       if (flipAnimateList.length > 0) {
           window.addEventListener('scroll', function () {
               Array.prototype.forEach.call(flipAnimateList, function (ele) {
                   var duration = ele.getAttribute("myFlipTime") || "1000ms";
                   var delay = ele.getAttribute("myFlipDelay") || "0ms";
                   ele.style.transition = "all 0"
                   ele.style.transform = "rotateY(180deg)";
                   ele.style.opacity = 0;
                   if (isInscreen(ele, perc)) {
                       ele.style.transitionDuration = duration;
                       ele.style.transitionDelay = delay;
                       ele.style.transitionProperty = "all"
                       ele.style.opacity = 1;
                       ele.style.transform = "rotateY(360deg)"
                   }
               })
           })
       }
       if (l2rAnimateList.length > 0) {
           window.addEventListener('scroll', function () {
               Array.prototype.forEach.call(l2rAnimateList, function (ele) {
               	var duration = ele.getAttribute("myFlipTime") || "1000ms";
                   var delay = ele.getAttribute("myFlipDelay") || "0ms";
                   ele.style.transition = "all 0"
                   ele.style.transform = "translateX(-300px)";
                   ele.style.opacity = 0;
                   if (isInscreen(ele, perc)) {
                       ele.style.transitionDuration = duration;
                       ele.style.transitionDelay = delay;
                       ele.style.transitionProperty = "all"
                       ele.style.opacity = 1;
                       ele.style.transform = "translateX(0px)"
                   }

               })
           })
       }
       if (r2lAnimateList.length > 0) {
           window.addEventListener('scroll', function () {
               Array.prototype.forEach.call(r2lAnimateList, function (ele) {
               	var duration = ele.getAttribute("myFlipTime") || "1000ms";
                   var delay = ele.getAttribute("myFlipDelay") || "0ms";
                   ele.style.transition = "all 0"
                   ele.style.transform = "translateX(300px)";
                   ele.style.opacity = 0;
                   if (isInscreen(ele, perc)) {
                       ele.style.transitionDuration = duration;
                       ele.style.transitionDelay = delay;
                       ele.style.transitionProperty = "all"
                       ele.style.opacity = 1;
                       ele.style.transform = "translateX(0px)"
                   }

               })
           })
       }
       if (zoomInAnimateList.length > 0) {
           window.addEventListener('scroll', function () {
               Array.prototype.forEach.call(zoomInAnimateList, function (ele) {
               	var duration = ele.getAttribute("myFlipTime") || "1000ms";
                   var delay = ele.getAttribute("myFlipDelay") || "0ms";
                   ele.style.transition = "all 0"
                   ele.style.transform = "scale(0)";
                   ele.style.opacity = 0;
                   if (isInscreen(ele, perc)) {
                       ele.style.transitionDuration = duration;
                       ele.style.transitionDelay = delay;
                       ele.style.transitionProperty = "all"
                       ele.style.opacity = 1;
                       ele.style.transform = "scale(1)"
                   }

               })
           })
       }
       if (fadeAnimateList.length > 0) {
           window.addEventListener('scroll', function () {
               Array.prototype.forEach.call(fadeAnimateList, function (ele) {
               	var duration = ele.getAttribute("myFlipTime") || "1000ms";
                   var delay = ele.getAttribute("myFlipDelay") || "0ms";
                   ele.style.transition = "all 0"
                   ele.style.opacity = 0;
                   if (isInscreen(ele, perc)) {
                       ele.style.transitionDuration = duration;
                       ele.style.transitionDelay = delay;
                       ele.style.transitionProperty = "all"
                       ele.style.opacity = 1;
                   }

               })
           })
       }
       function isInscreen(ele, perc) {
           // 元素距离可视窗口的顶部的距离
           var boxTop = ele.getBoundingClientRect().top;
           // 窗口的总高度
           var screenHeight = window.screen.availHeight;
           var realPenc = boxTop / screenHeight
           if (realPenc < perc) {
               return true
           }
           return false
       }
   })
