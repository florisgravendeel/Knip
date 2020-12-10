/**
 * Selecteer welke week zichtbaar moet worden in de agenda.
 * @param week
 */
function selectWeek(week){
    var x = 5;
    switch (week) {
        case "Vorige week":
            enableButton(1, false);
            enableButton(2, true);
            deselectCells();
            loadAppointments("week1");
            x = 0;
            break;
        case "Volgende week":
            enableButton(1, true);
            enableButton(2, false);
            deselectCells();
            loadAppointments("week2");
            x = 5;
            break;
        default:
            break;
    }
    const days = ["Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
    // Agenda-header inladen:
    list = document.getElementsByClassName("headerrow");
    for (var i = 0; i < list.length; i++){
        list.item(i).innerHTML = dates[i+x] + "<div class=\"days\">" + days[i] +"</div>";
    }
}

/**
 * Disable een van de 3 knoppen van de agenda.
 * @param i Knop 1 t/m 3
 * @param status Knop is enabled of gedisabled.
 */
function enableButton(i, status){
    document.getElementById("button" + i).disabled = !status;
}

/**
 * Maak de agenda zichtbaar of onzichtbaar.
 */
function toggleDisplay() {
    var x = document.getElementById("reserveringsdiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/**
 * Voeg CSS toe via deze functie.
 * @param s Een string CSS
 */
const addCSS = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);

/**
 * Deze functie wordt omgeroepen wanneer iemand op een cell in de tabel klikt.
 * @param tableCell De cell waarop geklikt wordt.
 */
function selectCell(tableCell) {
    bool = tableCell.id.includes("cell");
    if (bool) {
        if (!tableCell.classList.contains("selected") && !tableCell.classList.contains("unavailable")){
            if (countSelectedCells() >= 2){ // Er mogen max. 2 cellen geselecteerd zijn. Reserveren kan met 1 tijdhok, maar ook met 2 tijdhokken.
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

/**
 * Deze functie geeft de hoeveelheid geselecteerde cellen aan.
 * @returns {number} het aantal cellen.
 */
function countSelectedCells() {
    var count = 0;
    for (i = 0; i < 80; i++) {
        if (document.getElementById("cell" + i).classList.contains("selected")) {
            count++;
        }
    }
    return count;
}

/**
 * Deze functie geeft de ID's van alle geselecteerde cellen.
 * @returns {[]} een array van de ID's
 */
function getSelectionCells(){
    var list = [];
    for (i = 0; i < 80; i++) {
        if (document.getElementById("cell" + i).classList.contains("selected")) {
            list.push(i);
        }
    }
    return list;
}

/**
 * Deze functie maakt de selectie cellen ongedaan.
 */
function deselectCells(){
    let cells = getSelectionCells();
    for (i = 0; i < cells.length; i++){
        document.getElementById("cell" + cells[i]).classList.remove("selected");
    }
}

/**
 * Deze functie geeft weer of de 2 tijdvakken juist of onjuist onder elkaar staan.
 * @returns {boolean|boolean} True bij een valide reservering.
 */
function isReservationValid(){
    var cells = getSelectionCells();
    if (cells.length === 1){
        return true;
    } else if (cells.length === 2){

        let cell1 = document.getElementById("cell" + cells[0]);
        let x = cell1.innerText;
        x = x.replaceAll(" ", "");
        let list1 = x.split("-");

        let cell2 = document.getElementById("cell" + cells[1]);
        let y = cell2.innerText;
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

/**
 * Rekent de uren om naar minuten.
 * @param string Voorbeeld: 10:30
 * @returns {number} Voorbeeld: 10:30 -> 630 minuten.
 */
function hourToMinutes(string){
    split = string.split(':');
    if (split.length === 2){
        return (parseInt(split[0]*60) + parseInt(split[1]));
    }
}

/**
 * Deze functie geeft weer welke dag van de week de reservering is gemaakt.
 * @returns {string} Voorbeeld: Dinsdag
 */
function getRelativeDay() {
    let cells = getSelectionCells();
    const tuesday = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75];
    const wednesday = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56, 61, 66, 71, 76];
    const thursday = [2, 7, 12, 17, 22, 27, 32, 37, 42, 47, 52, 57, 62, 67, 72, 77];
    const friday = [3, 8, 13, 18, 23, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73, 78];
    const saturday = [4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59, 64, 69, 74, 79];

    if (cells.length >= 1) {
        if (tuesday.includes(cells[0])) {
            return "Dinsdag";
        } else if (wednesday.includes(cells[0])) {
            return "Woensdag";
        } else if (thursday.includes(cells[0])) {
            return "Donderdag";
        } else if (friday.includes(cells[0])) {
            return "Vrijdag";
        } else if (saturday.includes(cells[0])) {
            return "Zaterdag";
        }
    }
}

/**
 * Deze functie geeft weer in welke van de 2 weken de reservering is gemaakt.
 * @returns {string} Week 1 of Week 2.
 */
function getRelativeWeek(){
    bool = document.getElementById("button1").disabled;
    if (bool){
        return "Week 1";
    } else {
        return "Week 2";
    }
}

/**
 * Deze functie zet de namen van de maanden om naar getallen.
 * @param month Voorbeeld: November
 * @returns {number} -> 11
 */
function getMonth(month){
    switch (month){
        case "januari":
            return 1;
        case "februari":
            return 2;
        case "maart":
            return 3;
        case "april":
            return 4;
        case "mei":
            return 5;
        case "juni":
            return 6;
        case "juli":
            return 7;
        case "augustus":
            return 8;
        case "september":
            return 9;
        case "oktober":
            return 10;
        case "november":
            return 11;
        case "december":
            return 12;

    }
}

/**
 * Deze functie maakt en geeft een Timestamp van de reservering.
 * @param str 'start' voor de begin van de Timestamp en 'end' voor het einde van de Timestamp.
 * @returns {string} Voorbeeld: 11:00:00
 */
function getTime(str){
    let cells = getSelectionCells();
    var time = "";
    switch (str){
        case "start":
            time = document.getElementById("cell" + cells[0]).innerText.split(" - ")[0];
            break;
        case "end":
            if (cells.length === 2){
                time = document.getElementById("cell" + cells[1]).innerText.split(" - ")[1];
            } else {
                time = document.getElementById("cell" + cells[0]).innerText.split(" - ")[1];
            }
            break;
    }
    return time + ":00";
}

/**
 * Deze functie geeft twee DateTime's weer. Het begin en het einde.
 * Dit wordt gebruikt voor communicatie tussen client en server.
 */
function getDate(){
    var index = 0;
    switch (getRelativeWeek()){
        case "Week 1":
            index = 0;
            break;
        case "Week 2":
            index = 5;
            break;
        default:
            break;
    }
    switch (getRelativeDay()){
        case "Dinsdag":
            index += 0;
            break;
        case "Woensdag":
            index += 1;
            break;
        case "Donderdag":
            index += 2;
            break;
        case "Vrijdag":
            index += 3;
            break;
        case "Zaterdag":
            index += 4;
            break;
        default:
            break;
    }
    let dateArray = dates[index].split(" ");
    let day = dateArray[0];
    let month = getMonth(dateArray[1]);
    let year = new Date().getFullYear();
    let date = day + "/" + month + "/" + year;
    let start_date = date + " " + getTime("start");
    let end_date   = date + " " + getTime("end");
    console.log(getBarber() + " - Start: " + start_date + " Einde: " + end_date);
}

/**
 * Geeft weer welke kapper is geselecteerd.
 * @returns {*}
 */
function getBarber(){
    //barber = document.getElementById("kappers").value;
    return "barber";
}

/**
 * Verwijderd alle afspraken van de agenda, waardoor je start met een blanco agenda.
 */
function removeAllUnavailableHours() {
    for (i=0; i < 80; i++){
        setCelltoUnavailable([i], false);
    }
}
/**
 * Deze functie zet een bepaald tijdvak (cell) op 'unavailable', waardoor je niet meer kan reserveren op het gegeven tijdvak.
 * @param number cell 0-79
 * @param bool true = 'unavailable' false = 'available'
 */
function setCelltoUnavailable(number, bool) {
    let className = "unavailable";
    let cell = document.getElementById("cell" + number);
    if (bool) {
        if (!cell.classList.contains(className)) {
            cell.classList.add(className);
        }
    } else {
        if (cell.classList.contains(className)) {
            cell.classList.remove(className);
        }
    }
}
/**
 * Deze functie zet bepaalde tijdvakken op 'bezig' op basis van een lijst cellnummers.
 * @param cells 0-79 (array)
 */
function setCellsToUnavailable(cells){
    for (i = 0; i < cells.length; i++){
        setCelltoUnavailable(cells[i], true);
    }
}
/**
 * Deze functie maakt verbinding met de server, om vervolgens een afspraak in de database te zetten.
 * @returns {Promise<void>}
 */
async function makeAppointment(){
    getDate();
    return;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://127.0.0.1:5000/test123', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
        }
    }
    const params = {
        naam: "Gert",
        email: "karelmail@nede.be",
        telefoon: "0688992244",
        begin_datum: "2020-12-04 10:30:00",
        eind_datum: "2020-12-04 11:00:00",
        kapper_id: "4",
        behandelings_id: "3",
        opmerking: "Hoi"
    }
    xhr.send(JSON.stringify(params))
}
// Deze functie werkt niet als er een cell is hoger dan 79 of lager dan 0.
function loadAppointments(week){
    removeAllUnavailableHours();
        switch (week){
            case "week1":
                setCellsToUnavailable(busyHours[0]);
                break;
            case "week2":
                setCellsToUnavailable(busyHours[1]);
                break;
            default:
                selectWeek("Vorige week");
                break;
        }
}

/**
 * Deze functie download de afspraken, openingstijden, en de behandelingen van de server en laad ze vervolgens zien.
 * @returns {Promise<void>}
 */
async function getDatafromServer() {
    try {
        const response = await fetch("http://127.0.0.1:5000/openingstijden");
        const data = await response.json();
        dates = data.opening_hours_dm;

        const response2 = await fetch("http://127.0.0.1:5000/reserveringen");
        const data2 = await response2.json();
        busyHours[0] = data2.reserveringen[0];
        busyHours[1] = data2.reserveringen[1];

        const response3 = await fetch("http://127.0.0.1:5000/behandelingen");
        const data3 = await response3.json();
        const treatmentsarray = data3.behandelingen;
        for (i=0; i < treatmentsarray.length; i++){
            treatments.push(new Treatment(treatmentsarray[i].id, treatmentsarray[i].naam, treatmentsarray[i].prijs, treatmentsarray[i].tijdsduur));
        }
        console.log(Treatment.getTreatmentsNameList());
        // Schrijf hier je verder:
        loadAppointments()
    } catch (err) {
        console.log(err)
    }
}
/*
                                             ,-.
                                          _.|  '
                                        .'  | /
                                      ,'    |'
                                     /      /
                       _..----""---.'      /
 _.....---------...,-""                  ,'
 `-._  \                                /
     `-.+_            __           ,--. .
          `-.._     .:  ).        (`--"| \
               7    | `" |         `...'  \
               |     `--'     '+"        ,". ,""-
               |   _...        .____     | |/    '
          _.   |  .    `.  '--"   /      `./     j
         \' `-.|  '     |   `.   /        /     /
         '     `-. `---"      `-"        /     /
          \       `.                  _,'     /
           \        `                        .
            \                                j
             \                              /
              `.                           .
                +                          \
                |                           L
                |                           |
                |  _ /,                     |
                | | L)'..                   |
                | .    | `                  |
                '  \'   L                   '
                 \  \   |                  j
                  `. `__'                 /
                _,.--.---........__      /
               ---.,'---`         |   -j"
                .-'  '....__      L    |
              ""--..    _,-'       \ l||
                  ,-'  .....------. `||'
               _,'                /
             ,'                  /
            '---------+-        /
                     /         /
                   .'         /
                 .'          /
               ,'           /
             _'....----""""" mh

Code initialiseren:
toggleDisplay();
 */
const timetable =
         ["9:00 -  9:30",  "9:30 - 10:00",
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
    // Allen tijden worden in de tabel gezet ->
    document.getElementById("cell" + i).innerText = timetable[index];

}
let dates; //= ['1 december', '2 december', '3 december', '4 december', '5 december', '8 december', '9 december', '10 december', '11 december', '12 december']
let busyHours = [[]]// = [[1,2,6,4,13,23,34,43,45,46,53,54,61,67,79,80],[0,1,5,3,12,22,33,42,44,45,52,53,60,66,78,79]];
getDatafromServer();





removeAllUnavailableHours();
//sendDataToServer();

// Voeg CSS/JS toe aan de tijdvakken (HTML: cell0 - cell79)
for (i = 0; i < 80; i++){
    var cell = document.getElementById("cell" + i);
    cell.style.color = "white";
    cell.onclick = function () {
        selectCell(this);
    }
    var css = "#cell" + i + ":hover { " +
        "color: black; " +
        "}" +
        "#cell" + i + "{ " +
        "font-size: 15.35px;" +
        "}";
    addCSS(css);
}
