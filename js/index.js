
//菜单选中
(function () {
    const menus = $("#menu li a");
    for (let i = 0; i < menus.length; i++) {
        menus[i].onclick = function () {
            for (let j = 0; j < menus.length; j++) {
                $(menus[j]).removeClass("active")
            }
            $(menus[i]).addClass("active")
        }
    }
})();
// (function () {
//     // const menus = document.querySelectorAll(".nav-item");
//     // console.log(menus)
//     //设置父对象
//     const menuParent = document.querySelector(".navbar-nav")
//     if (menuParent) {
//         menuParent.addEventListener("click", e => {
//             let { target } = e;
//             document.querySelectorAll(".nav-link.active").forEach(menu => {
//                 menu.classList.remove("active");
//             });
//             target.classList.add("active");
//             //console.log(target)
//         })
//     }
// })();


//滑动显示图片
reScrollPic("workspace", "workspace", "", "", 1160, 1, 0.01);
reScrollPic("experiment", "experiment", "", "", 1160, 1, 0.01);


//全屏显示图片
(function () {
    function hasClass(obj, cls) {
        if (obj) {
            return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        }
    }

    function addClass(obj, cls) {
        if (hasClass(obj, cls)) obj.className += " " + cls;
    }

    function removeClass(obj, cls) {
        if (hasClass(obj, cls)) {
            let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    }
    let imgAll = document.getElementsByClassName('main-area')[0];
    if (imgAll === undefined) {
        return;
    }

    let imgs = imgAll.getElementsByTagName('img')

    for (let i = 0; i < imgs.length; i++) {
        //如果设置非全屏标志则跳过
        if (hasClass(imgs[i], 'class_no_full_screen')) {
            continue;
        }

        imgs[i].setAttribute('style', "cursor: zoom-in");

        imgs[i].onclick = function () {
            let imgView = document.getElementById('imgViewDom');
            let section = document.getElementsByTagName("body")[0];

            if (!imgView) {
                imgView = document.createElement("div");
                imgView.id = "imgViewDom";

                section.appendChild(imgView)

                imgView.onclick = function () {
                    addClass(imgView, "disnone");
                    imgView.style.display = "none"
                }
            }
            imgView.innerHTML = "<img id = 'picIsOn' src=" + this.src + " style='cursor: zoom-out; max-width: 100%;'" + ">";
            removeClass(imgView, "disnone");

            let picIsOn = document.getElementById('picIsOn');
            if (picIsOn) {
                picIsOn.onclick = function () {
                    let imgView = document.getElementById('imgViewDom');
                    addClass(imgView, "disnone");
                    imgView.innerHTML = "";
                }

                if (imgView.style.display === "none") {
                    imgView.style.display = ""
                }

            }
        }
    }

})();





//模拟鼠标点击切换
(function () {
    let timeid = null;

    $("#v-pills-tab > a").hover(function () {
        timeid = setTimeout(() => {
            this.click();
            // $(this).tab('show')
        }, 50);
    }, function () {
        if (timeid) {
            clearTimeout(timeid)
        }
    })
})();
