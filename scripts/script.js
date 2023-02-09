// Element

const dayEL=document.getElementById('day')
const dateEL=document.getElementById('date')
const timeEL=document.getElementById('time')
const noOfDaysEL=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
 
let date=new Date()

// date

function printDate(){
    var date=new Date();
    var day=date.getDate();
    var month=date.getMonth()+1;
    var year=date.getFullYear();
    dateEL.innerText=`${day}:${month}:${year}`
}
printDate()

// day

function printDay(){
    var date=new Date();
    var today = date.getDay();
    var day = noOfDaysEL[today];
    dayEL.innerText=day;
}
printDay()

// time

function printTime(){
    var date=new Date();
    var hour =date.getHours();
    var min =date.getMinutes();
    var sec = date.getSeconds();
    var time = hour+ ":" +min+ ":" + sec ;
    timeEL.innerText=time
    
    setTimeout(printTime,1000)
}
printTime()