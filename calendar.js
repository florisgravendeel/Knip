//toggleDisplay();

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
var dates = ["1 November", "1 Januari", "1 Februari", "1 November", "1 Maart",
             "2 November", "2 Januari", "2 Februari", "2 November", "2 Maart"];

const days = ["Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];

selectWeek("Vorige week");

function selectWeek(week){
    var x = 5;
    switch (week) {
        case "Vorige week":
            enableButton(1, false);
            enableButton(2, true);
            x = 0;
            break;
        case "Volgende week":
            enableButton(1, true);
            enableButton(2, false);
            x = 5;
            break;
        default:
            break;
    }
    // Agenda-header inladen:
    list = document.getElementsByClassName("headerrow");
    for (var i = 0; i < list.length; i++){
        list.item(i).innerHTML = dates[i+x] + "<div class=\"days\">" + days[i] +"</div>";
    }
}

function enableButton(i, status){
    document.getElementById("button" + i).disabled = !status;
}

function toggleDisplay() {
    var x = document.getElementById("reserveringsdiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// One line function: voegt css toe!
const addCSS = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);


for (i = 0; i < 80; i++){
    document.getElementById("cell" + i).style.color = "white";
    var css = "#cell" + i + ":hover { color: black !important; }";
    addCSS(css);
}

var table = document.getElementById("agenda");
if (table != null) {
    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++)
            table.rows[i].cells[j].onclick = function () {
                selectCell(this);
            };
    }
}
/*
Er mogen max. 2 cellen geselecteerd zijn. Reserveren kan met 1 tijdhok, maar ook met 2 tijdhokken.

 */
function selectCell(tableCell) {
    bool = tableCell.id.includes("cell");
    if (bool) {
        if (!tableCell.classList.contains("selected") && !tableCell.classList.contains("busy")){
            tableCell.classList.add("selected");
        } else {
            tableCell.classList.remove("selected");
        }

        //alert(tableCell.innerHTML + " " + bool);
    }
}

function getSelectedCells(){
    var table = document.getElementById("agenda");
    if (table != null) {

    }
}

function makeAppointment(i){
    // 2007-05-08 12:35:29 florisgra@gmail.com

    console.log("number: " + i);
}