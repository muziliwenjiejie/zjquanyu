function time(){
    // 制作闹钟
    let data = new Date()
    let Y = data.getFullYear()
    let M = data.getMonth()+1
    let D = data.getDate()
// 获得星期
    let index = data.getDay()
    let week = ''
    if (index === 1) {
        week = '星期一'
    } else if (index === 2){
        week = '星期二'
    } else if (index === 3){
        week = '星期三'
    } else if (index === 4){
        week = '星期四'
    } else if (index === 5){
        week = '星期五'
    } else if (index === 6){
        week = '星期六'
    } else if (index === 7){
        week = '星期日'
    }
// 获得时间
    let h = data.getHours()
    let m = data.getMinutes()
    let s = data.getSeconds()
    if (s < 9) {
        s = '0'+s
    }
    let time = Y+'-'+M+'-'+D+' '+week+' '+h+':'+m+':'+s
// 写入页面
    $('.time').text(time)
}

