
var dt, hh, mm, ss;

function clocky(){
dt = new Date();
hh = dt.getHours();
mm = dt.getMinutes();
ss = dt.getSeconds();

if (hh <=9){
    hh = '0' + hh;
}
if (mm <=9){
    mm = '0' + mm;
}
if (ss <=9){
    ss = '0' + ss;
}

document.getElementById("clock").innerHTML = hh + ":" + mm + ":" + ss;

document.body.style.backgroundColor = "#" + hh + mm + ss;

setTimeout(clocky, 1000);
}

clocky();