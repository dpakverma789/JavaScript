let clock_element = document.getElementById('clock');
let date_element = document.getElementById('date');
const week_days = ['Sun','Mon','Tue','Wed','Thr','Fri','Sat'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
var date;

function clock(){
    const datetime = new Date();

    // Time 
    let hours = datetime.getHours();
    let hrs = (hours > 12)?hours-12:hours;
    let minutes = datetime.getMinutes();
    let seconds = datetime.getSeconds();
    let day = datetime.getDay();


    hrs = (hrs < 10)? "0"+hrs:hrs;
    minutes = (minutes < 10)? "0"+minutes:minutes;
    seconds = (seconds < 10)? "0"+seconds:seconds;
    shift = (hours < 12)? 'AM':'PM';

    // Date
    let updated_date = datetime.getDate();
    if (updated_date != date){
        date = updated_date;
        let month = datetime.getMonth();
        let year = datetime.getFullYear();
        date = (date < 10)? "0"+date:date;
        let current_date = date+" "+ months[month] +" "+year;
        date_element.innerHTML = current_date;
    }

    clock_element.innerHTML = week_days[day]+" "+hrs+":"+minutes+":"+seconds+" "+shift;;
    
}

setInterval(clock,1000);