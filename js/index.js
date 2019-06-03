window.onload =function () {
    let home = document.getElementById('home');
    let btnlist = document.getElementsByClassName('btnlist')
    let ban = btnlist[0].getElementsByTagName('li')
    let activeColor = '#046b80', disactiveColor = '#ffffff'
    home.onmouseenter = function () {
        home.style.color = 'red'
    }
    home.onmouseleave = function () {
        home.style.color = '#ffffff'
    }

    for (var i = 0; i < ban.length; i++) {
        ban[i].onmouseenter = function () {
            this.style.backgroundColor = activeColor
        }
        ban[i].onmouseleave = function () {
            this.style.backgroundColor = disactiveColor
        }
    }

// window.onload = function () {
// }
    let tablist = document.querySelectorAll('.tablist > li ')
    console.log(tablist);
    tablist.forEach(function (elem, index) {
        elem.onmouseenter = function () {
            for (let i = 0; i < tablist.length; i++) {
                tablist[i].onmouseenter = function () {
                    for (let j = 0; j < tablist.length; j++) {
                        tablist[j].classList.remove('hot')
                    }
                    this.classList.add('hot')
                }
            }
        }
    })
    // for (var i =0;i<tablist.length;i++){
    //     tablist[i].onmouseenter =function () {
    //
    //     }
    // }
    /*
 * 轮播图
 * index 保存窗口中显示图片下标
 * */

    // console.log(bannerImg.length);
    // rightbtn.onclick=function () {
    //     index++;
    //     console.log(index);
    //     if (index==bannerImg.length){
    //         console.log(index);
    //         index=0;
    //     }
    //     bannerImg.forEach(function (ele){
    //         ele.style.zIndex=1;
    //     });
    //     bannerImg[index].style.zIndex=999;
    // }
    // leftbtn.onclick=function () {
    //     if (index==0){
    //         index=bannerImg.length;
    //     }
    //     index--;
    //     bannerImg.forEach(function (ele){
    //         ele.style.zIndex=1;
    //     });
    //     bannerImg[index].style.zIndex=999;
    // }
    let index = 0;
    let current = 0, next = 0
    let rightbtn = document.querySelector('.rightbtn');
    let leftbtn = document.querySelector('.leftbtn');
    let bannerImg = document.querySelectorAll('.bannerImg li');
    let w = bannerImg[0].offsetWidth;
    let flag = true;

    rightbtn.onclick = function () {
        if (!flag) {
            return
        }
        flag = false
        next++;
        if (next == bannerImg.length) {
            next = 0;
        }
        bannerImg[next].style.left = w + 'px';
        animate(bannerImg[current], {left: -w})
        animate(bannerImg[next], {left: 0})
        flag = true
        current = next
    }
    leftbtn.onclick = function () {
        next--;
        if (next < 0) {
            next = bannerImg.length - 1;
        }
        bannerImg[next].style.left = -w + 'px';
        animate(bannerImg[current], {left: w})
        animate(bannerImg[next], {left: 0})
        current = next
    }

    let bannerleft = document.querySelector('.bannerleft')
    let t = setInterval(rightbtn.onclick, 3000);
    bannerleft.onmouseenter = function () {
        clearInterval(t)
    }
    bannerleft.onmouseleave = function () {
        t = setInterval(rightbtn.onclick, 3000);
    }
    for (var i = 0; i < ban.length; i++) {
        ban[i].onclick = function () {
            Array.prototype.forEach.call(ban, function (elem) {
                elem.classList.remove('hot')
            })
            bannerImg.forEach(function (ele) {
                ele.style.zIndex = 1
            });
            this.classList.add('hot');
            bannerImg[index].style.zIndex = 999;

        }
    }

    for(let i=0;i<ban.length;i++){
        ban[i].onclick=function () {
            next=i;
            if(i>current){
                //左移
                bannerImg[next].style.left= w +'px';
                animate(bannerImg[current],{left:-w});
                animate(bannerImg[next],{left:0});
            }else if(i<current){
                //右
                bannerImg[next].style.left= -w +'px';
                animate(bannerImg[current],{left:w});
                animate(bannerImg[next],{left:0});
            }else{
                return;
            }
            Array.prototype.forEach.call(ban,function (elem){
                elem.style.background='none';
            });
            ban[i].style.background='#000';
            current=next;
        }
    }


    // 懒加载
    let viewH = window.innerHeight;
    let imgs = document.querySelectorAll('.lazy')
    let positionArr = [];
    imgs.forEach(function (ele) {
        let parent = ele.offsetParent;
        positionArr.push(parent.offsetTop + ele.offsetTop)
        console.log(parent.offsetTop + ele.offsetTop);
    });
    window.onscroll = function () {
        // console.log(1);
        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop
        for (let i = 0; i < positionArr.length; i++) {
            if (scrolltop + viewH >= positionArr[i] + 50) {
                // console.log(scrolltop + viewH >= positionArr[i] + 50);
                if (!imgs[i.src]) {
                    imgs[i].src = imgs[i].getAttribute('aa')
                }
            }
        }
    }
}

    // let index = 0;
    // let rightbtn = document.querySelector('.rightbtn');
    // let leftbtn = document.querySelector('.leftbtn');
    // let bannerImg = document.querySelectorAll('.moddleimg li');
    // let w=bannerImg[0].offsetWidth
    // let flag=true
    // let current=0,next=0
    // rightbtn.onclick = function () {
    //     if (!flag){
    //         return
    //     }
    //     flag=false
    //     next++;
    //     if (next == bannerImg.length) {
    //         next = 0;
    //     }
    //     bannerImg[next].style.left=w+'px'
    //     animate(bannerImg[current],{left:-w})
    //     animate(bannerImg[next],{left:0},function () {
    //         flag=true
    //     })
    //     ban[current].classList.remove('hot')
    //     ban[next].classList.add('hot')
    //     current=next
    // }
    // leftbtn.onclick = function () {
    //     if (!flag){
    //         return
    //     }
    //     flag=false
    //     next--
    //     if (next < 0) {
    //         next = bannerImg.length-1;
    //     }
    //     bannerImg[next].style.left=-w+'px'
    //     animate(bannerImg[current],{left:w})
    //     animate(bannerImg[next],{left:0},function () {
    //         flag=true
    //     })
    //     btnlist[current].classList.remove('hot')
    //     btnlist[next].classList.add('hot')
    //     current=next
    // }


