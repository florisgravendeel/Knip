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
    var cell = document.getElementById("cell" + i);
    cell.style.color = "white";
    cell.onclick = function () {
        selectCell(this);
    }
    var css = "#cell" + i + ":hover { color: black !important; }";
    addCSS(css);
}

/* Er mogen max. 2 cellen geselecteerd zijn. Reserveren kan met 1 tijdhok, maar ook met 2 tijdhokken. */
function selectCell(tableCell) {
    bool = tableCell.id.includes("cell");
    if (bool) {
        if (!tableCell.classList.contains("selected") && !tableCell.classList.contains("busy")){
            if (countSelectedCells() >= 2){
                alert("Je kan maximaal 2 tijdvakken selecteren.");
                return;
            }
            tableCell.classList.add("selected");
        } else {
            tableCell.classList.remove("selected");
        }
        enableButton(3, isReservationValid());
    }
    if (countSelectedCells() === 0){
        enableButton(3, false);
    }
}

function countSelectedCells() {
    var count = 0;
    for (i = 0; i < 80; i++) {
        if (document.getElementById("cell" + i).classList.contains("selected")) {
            count++;
        }
    }
    return count;
}
function getSelectionCells(){
    var list = [];
    for (i = 0; i < 80; i++) {
        if (document.getElementById("cell" + i).classList.contains("selected")) {
            list.push(i);
        }
    }
    return list;
}
function isReservationValid(){
    var cells = getSelectionCells();
    if (cells.length === 1){
        return true;
    } else if (cells.length === 2){

        let cell1 = document.getElementById("cell" + cells[0]);
        var x = cell1.innerText;
        x = x.replaceAll(" ", "");
        let list1 = x.split("-");

        let cell2 = document.getElementById("cell" + cells[1]);
        var y = cell2.innerText;
        y = y.replaceAll(" ", "");
        let list2 = y.split("-");

        A = hourToMinutes(list1[0]);
        B = hourToMinutes(list1[1]);
        C = hourToMinutes(list2[0]);
        D = hourToMinutes(list2[1]);

        let y_axis = C - A === 30 && D - B === 30;
        let x_axis = cells[1] - cells[0] === 5;
        return x_axis && y_axis;
    }
    // Check with Http request whether there already is such a appointment
    return false;
}
function hourToMinutes(string){
    split = string.split(':');
    if (split.length === 2){
        return (parseInt(split[0]*60) + parseInt(split[1]));
    }
}

function makeAppointment(){
    //getSelectionCells(); // A & B
    console.log("Valid Reservation: " + isReservationValid());

    // Is de tijd goed geselecteerd?

    // 2007-05-08 12:35:29 florisgra@gmail.com
}