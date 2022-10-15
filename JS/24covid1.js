function zeroFill(i){
    if (i >= 0 && i <= 9) {
        return "0" + i;
    } else {
        return i;
    }
}

let date = new Date(new Date().getTime() - 12 * 60 * 60 * 1000);
let month = zeroFill(date.getMonth() + 1);//月
let day = zeroFill(date.getDate());//日
let hour = zeroFill(date.getHours());//时
let minute = zeroFill(date.getMinutes());//分
let second = "00";
/*let second = zeroFill(date.getSeconds());//秒*/
let curTime = date.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;

let body = JSON.parse($response.body); 
/*let timenow = body.data.currentTime;
body.data.testCompleteTime = timenow;*/
let body.data.testCompleteTime = curTime;
body = JSON.stringify(body);
$done({body});
