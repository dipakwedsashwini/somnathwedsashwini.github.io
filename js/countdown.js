function fixIntegers(e) {
    return 0 > e && (e = 0), 10 > e ? "0" + e : "" + e
}
setInterval(function () {
    var e = new Date("December 20 2015 11:56:00 GMT+0530"), t = new Date, r = Math.floor((e.getTime() - t.getTime()) / 1e3), n = fixIntegers(r % 60);
    r = Math.floor(r / 60);
    var a = fixIntegers(r % 60);
    r = Math.floor(r / 60);
    var o = fixIntegers(r % 24);
    r = Math.floor(r / 24);
    var f = r;
    $("#seconds").text(n), $("#minutes").text(a), $("#hours").text(o), $("#days").text(f)
}, 1e3);