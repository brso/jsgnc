let fullName = prompt("Lutfen Adinizi Giriniz: ")
let greeting = document.querySelector("#myName")
greeting.innerHTML = `${greeting.innerHTML} ${fullName}`

let time = new Date()
let h = time.getHours()
let m = time.getMinutes()
let s = time.getSeconds()
let day = ""
switch (time.getDay()) {
    case 0: day = "Pazar"; break;
    case 1: day = "Pazartesi"; break;
    case 2: day = "Salı"; break;
    case 3: day = "Çarşamba"; break;
    case 4: day = "Perşembe"; break;
    case 5: day = "Cuma"; break;
    case 6: day = "Cumartesi"; }
wtime = document.querySelector("#myClock")
wtime.innerHTML=`${wtime.innerHTML} ${h}:${m}:${s}:${day}`