var a = document.getElementById("sec")
var b = document.getElementById("min")
var c = document.getElementById("hour")

function timer() {
    a.value--
    if (a.value == -1 ) {
        b.value--
        a.value = 59
    } else if (b.value == -1){
        c.value--
        b.value = 59
    }
}

function start() {
    paus = setInterval(timer, 1000)
    document.getElementById("start").style.display = "none"
    document.getElementById("pause").style.display = "inline-block"
    document.getElementById("reset").style.display = "none"
}

function pause() {
    clearInterval(paus)
    document.getElementById("resume").style.display = "inline-block"
    document.getElementById("pause").style.display = "none"
    document.getElementById("reset").style.display = "inline-block"
}

function resume() {
    paus = setInterval(timer, 1000)
    document.getElementById("pause").style.display = "inline-block"
    document.getElementById("resume").style.display = "none"
    document.getElementById("reset").style.display = "none"
}

function reset(){
    document.getElementById("start").style.display = "inline-block"
    document.getElementById("pause").style.display = "none"
    document.getElementById("reset").style.display = "none"
    document.getElementById("resume").style.display = "none"
    a.value = 00
    b.value = 00
    c.value = "00"
}