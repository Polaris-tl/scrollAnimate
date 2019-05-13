//说明：
    //使用：在需要添加动画的元素上添加 myAnim='xxx'属性 
    //其他属性    myTime：动画时间  myDelay：动画延迟 myTarget:由父元素触发动画（id选择器）
    //动画选项 :flip l2r r2l zoomIn fade spinIn
    $(function () {
        //0.8 为添加动画元素的顶部距离屏幕顶部的距离 单位%  即动画何时触发
        var perc = 0.8;

        var flipList = $("[myAnim='flip']") 
        var l2rList = $("[myAnim='l2r']") 
        var r2lList = $("[myAnim='r2l']") 
        var zoomInList = $("[myAnim='zoomIn']") 
        var fadeList = $("[myAnim='fade']") 
        var spinInList = $("[myAnim='spinIn']")

        //防止在浏览到页面中部点击刷新网页时，如果不滚动页面会出现空白内容
        $(document).ready(function(){
            var scrollEvent = new Event('scroll');
            window.dispatchEvent(scrollEvent);
        });
          
        // 初始化添加了自定义动画的css
        (function(){
            if (flipList.length > 0) {
                Array.prototype.forEach.call(flipList, function (ele) {
                    ele.style.transition = "all 0"
                    ele.style.transform = "rotateY(180deg)";
                    ele.style.opacity = 0;
                })
            }
            if (l2rList.length > 0) {
                Array.prototype.forEach.call(l2rList, function (ele) {
                    ele.style.transition = "all 0"
                    ele.style.transform = "translateX(-300px)";
                    ele.style.opacity = 0;
                })
            }
            if (r2lList.length > 0) {
                Array.prototype.forEach.call(r2lList, function (ele) {
                    ele.style.transition = "all 0"
                    ele.style.transform = "translateX(300px)";
                    ele.style.opacity = 0;
                })
            }
            if (zoomInList.length > 0) {
                Array.prototype.forEach.call(zoomInList, function (ele) {
                    ele.style.transition = "all 0"
                    ele.style.transform = "scale(0)";
                    ele.style.opacity = 0;
                })
            }
            if (fadeList.length > 0) {
                Array.prototype.forEach.call(fadeList, function (ele) {
                    ele.style.transition = "all 0"
                    ele.style.opacity = 0;
                })
            }
            if (spinInList.length > 0) {
                Array.prototype.forEach.call(spinInList, function (ele) {
                    ele.style.transition = "all 0"
                    ele.style.transform = "rotate(-180deg) scale(0.4)";
                    ele.style.opacity = 0;
                })
            }
        })()
        window.addEventListener('scroll', function () {
            if (flipList.length > 0) {
                Array.prototype.forEach.call(flipList, function (ele) {
                    var duration = ele.getAttribute("myTime") || "1000ms";
                    var delay = ele.getAttribute("myDelay") || "0ms";
                    var target_id = ele.getAttribute("myTarget") || undefined;
                    var target = document.getElementById(target_id);
                    if (isInscreen(target, perc) || isInscreen(ele, perc)) {
                        ele.style.transitionDuration = duration;
                        ele.style.transitionDelay = delay;
                        ele.style.transitionProperty = "all"
                        ele.style.opacity = 1;
                        ele.style.transform = "rotateY(360deg)"
                    }
                })
            }
            if (l2rList.length > 0) {
                Array.prototype.forEach.call(l2rList, function (ele) {
                    var duration = ele.getAttribute("myTime") || "1000ms";
                    var delay = ele.getAttribute("myDelay") || "0ms";
                    var target_id = ele.getAttribute("myTarget") || undefined;
                    var target = document.getElementById(target_id);
                    if (isInscreen(target, perc) || isInscreen(ele, perc)) {
                        ele.style.transitionDuration = duration;
                        ele.style.transitionDelay = delay;
                        ele.style.transitionProperty = "all"
                        ele.style.opacity = 1;
                        ele.style.transform = "translateX(0px)"
                    }
                })
            }
            if (r2lList.length > 0) {
                Array.prototype.forEach.call(r2lList, function (ele) {
                    var duration = ele.getAttribute("myTime") || "1000ms";
                    var delay = ele.getAttribute("myDelay") || "0ms";
                    var target_id = ele.getAttribute("myTarget") || undefined;
                    var target = document.getElementById(target_id);
                    if (isInscreen(target, perc) || isInscreen(ele, perc)) {
                        ele.style.transitionDuration = duration;
                        ele.style.transitionDelay = delay;
                        ele.style.transitionProperty = "all"
                        ele.style.opacity = 1;
                        ele.style.transform = "translateX(0px)"
                    }
                })
            }
            if (zoomInList.length > 0) {
                Array.prototype.forEach.call(zoomInList, function (ele) {
                    var duration = ele.getAttribute("myTime") || "1000ms";
                    var delay = ele.getAttribute("myDelay") || "0ms";
                    var target_id = ele.getAttribute("myTarget") || undefined;
                    var target = document.getElementById(target_id);
                    if (isInscreen(target, perc) || isInscreen(ele, perc)) {
                        ele.style.transitionDuration = duration;
                        ele.style.transitionDelay = delay;
                        ele.style.transitionProperty = "all"
                        ele.style.opacity = 1;
                        ele.style.transform = "scale(1)"
                    }
                })
            }
            if (fadeList.length > 0) {
                Array.prototype.forEach.call(fadeList, function (ele) {
                    var duration = ele.getAttribute("myTime") || "1000ms";
                    var delay = ele.getAttribute("myDelay") || "0ms";
                    var target_id = ele.getAttribute("myTarget") || undefined;
                    var target = document.getElementById(target_id);
                    if (isInscreen(target, perc) || isInscreen(ele, perc)) {
                        ele.style.transitionDuration = duration;
                        ele.style.transitionDelay = delay;
                        ele.style.transitionProperty = "all"
                        ele.style.opacity = 1;
                    }
                })
            }
            if (spinInList.length > 0) {
                Array.prototype.forEach.call(spinInList, function (ele) {
                    var duration = ele.getAttribute("myTime") || "1000ms";
                    var delay = ele.getAttribute("myDelay") || "0ms";
                    var target_id = ele.getAttribute("myTarget") || undefined;
                    var target = document.getElementById(target_id);
                    if (isInscreen(target, perc) || isInscreen(ele, perc)) {
                        ele.style.transitionDuration = duration;
                        ele.style.transitionDelay = delay;
                        ele.style.transitionProperty = "all"
                        ele.style.transform = "rotate(-360deg) scale(1)"
                        ele.style.opacity = 1
                    }
                })
            }
        })

        function isInscreen(ele, perc) {
            if(ele == undefined) return false
            // 元素距离可视窗口的顶部的距离
            var boxTop
            boxTop = ele.getBoundingClientRect().top;
            // 窗口的总高度
            var screenHeight = window.screen.availHeight;
            var realPenc = boxTop / screenHeight
            if (realPenc < perc) {
                return true
            }
            return false
        }
    })
