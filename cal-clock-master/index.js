const hours =document.getElementById("hr");
const minutes =document.getElementById("min");
const second =document.getElementById("ss");
setInterval(()=>{
const d =new Date();
var hr=d.getHours()*30;
var min=d.getMinutes()*6;
var sec=d.getSeconds()*6;
hours.style.transform=`rotate(${hr+(min/12)}deg)`;
minutes.style.transform=`rotate(${min+(sec/60)}deg)`;
second.style.transform=`rotate(${sec}deg)`;
document.getElementById("day").innerHTML=day_name[d.getDay()];
document.getElementById("date").innerHTML=d.getDate();
document.getElementById("Month").innerHTML=monthNames[d.getMonth()];
})


