function setSlider(dom, timerintervl) {

    //编写一个可以让图片自动循环滚动的函数(弄一个定时器，回调函数里设置它的marginLeft)
    let timer = null;
    let offset = 0 //待会用这个变量设置它的marginLeft (js代码可以不写分号的，我是懒得写了)
    function autoRun() {
        timer = setInterval(function () {
            offset += -10 //这是marginLeft
            if (offset <= -1066) {
                //滚动了四张图片 接着滚动
                offset = 0
            }
            $(dom).find("ul").css({
                marginLeft: offset
            })
        }, 131.4)
    }

    autoRun()//滚动起来
    // //监听li的移入 移出事件
    // $("li").hover(function () {
    //     //鼠标指针放上面 不让ta滚动(停掉这个定时器)
    //     clearInterval(timer)
    //     //鼠标指针没有放上面的图片 给他们一个黑色的背景 这样显得选中的这个亮
    //     $(this).siblings().fadeTo(120, 0.33)
    //     //当前的这个图片亮
    //     $(this).fadeTo(120, 1)
    // }, function () {
    //     autoRun() //滚动
    //     $("li").fadeTo(120, 1) //1-->全亮
    // })


}




// $(function () {
//     let oUl = $(".ul_list");
//     let oLeft = $(".left");
//     let oRight = $(".right");
//     let left = 0;
//     let delay = 2;
//     oUl.html(oUl.html() + oUl.html());
//     function move() {
//         left -= delay;
//         if (left < -667) {
//             left = 0;
//         }
//         if (left > 0) {
//             left = -667;
//         }
//         oUl.css({ left: left });
//     }
//     let timer = setInterval(move, 30);
//     oLeft.click(function () {
//         delay = 2;
//     });
//     oRight.click(function () {
//         delay = -2;
//     });
//     oUl.children().each(function () {
//         oUl.eq($(this).index()).mouseover(function () {
//             clearInterval(timer);
//         });
//         oUl.eq($(this).index()).mouseout(function () {
//             timer = setInterval(function () {
//                 left -= delay;
//                 if (left < -667) {
//                     left = 0;
//                 }
//                 if (left > 0) {
//                     left = -667;
//                 }
//                 oUl.css({ left: left });
//             }, 30);
//         })
//     })
// })