/*
 * @Author: 徐松博
 * @Date: 2021-03-27 13:44:32
 * @LastEditTime: 2021-03-27 18:24:48
 */
{ // 申请时间剩余
    setInterval(days, 1000)

    function days() {
        let presentTime = new Date();
        let futureTense = new Date('2021-06-30');
        let seconds = (futureTense - presentTime) / 1000;
        let day = parseInt(seconds / 3600 / 24);
        let hours = parseInt(seconds / 3600 % 24);
        let minutes = parseInt(seconds / 60 % 60);
        let miao = parseInt(seconds % 60)
        let daojishi = (day + "天 " + hours + "小时 " + minutes + "分 " + miao + "秒");
        document.querySelector('#times').innerHTML = daojishi;
        // console.log(daojishi);
    }
    days();
} {
    // 收藏
    let zan = document.querySelector('.main > .index_guide > .w > .guide > ul li > .dianping > .dianzan > img ')
    let zan1 = document.querySelectorAll('.main > .index_guide > .w > .guide > ul li > .dianping > .dianzan > img ')[1]
    let span_ = document.querySelector('.main > .index_guide > .w > .guide > ul li > .dianping > .pinglun >span ');
    let num = span_.innerHTML;
    console.log(span_);
    zan.onclick = function () {
        this.style.display = 'none';
        zan1.style.display = 'block'
        span_.innerHTML =++num;
    }
    zan1.onclick = function () {
        this.style.display = 'none';
        zan.style.display = 'block'
        span_.innerHTML =--num;
    }
}