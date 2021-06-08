var countDownDate = new Date("Feb 6, 2021 12:00:00").getTime();
var countdownfunction = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);


document.getElementById("disc-time").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";

if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("disc-time").innerHTML = "EXPIRED";
}
}, 1000);