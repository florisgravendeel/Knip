
toggleDisplay();
const timetable = ["9:00  -  9:30",  "9:30 - 10:00",
    "10:00 - 10:30", "10:30 - 11:00",
    "11:00 - 11:30", "11:30 - 12:00",
    "12:00 - 12:30", "12:30 - 13:00",
    "13:00 - 13:30", "13:30 - 14:00",
    "14:00 - 14:30", "14:30 - 15:00",
    "15:00 - 15:30", "15:30 - 16:00",
    "16:00 - 16:30", "16:30 - 17:00"];
var index = -1;
for (var i = 0; i < 80; i++){
    if (i % 5 === 0){
        index += 1;
    }
    // Alle tijden worden in de tabel gezet ->
    document.getElementById("cell" + i).innerText = timetable[index];
}
//TODO: dit laden vanuit een server
var dates = ["1 November", "1 Januari", "1 Februari", "1 November", "0 Maart",
             "2 November", "2 Januari", "2 Februari", "2 November", "2 Maart",
             "3 November", "3 Januari", "3 Februari", "3 November", "3 Maart"];

const days = ["Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];

updateDates(0);
function updateDates(x){
    switch (x){
        case -1:
            break;
        case 0:
            break;
        case 1:
            break;
        default:
            break;
    }
    list = document.getElementsByClassName("headerrow");
    for (var i = 0; i < list.length; i++){
        list.item(i).innerHTML = dates[i] + "<div class=\"days\">" + days[i] +"</div>";
    }
}

function toggleDisplay() {
    var x = document.getElementById("reserveringsdiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function loadAppointments(){

}

function makeAppointment(i){
    // 2007-05-08 12:35:29 florisgra@gmail.com

    console.log("number: " + i);
}