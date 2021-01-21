/*var treatments = [];
class Treatment {

    constructor(id, name, price, duration) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.duration = duration
    }
    static getTreatmentsNameList(){
        let list = []
        for (i=0; i < treatments.length; i++){
            list.push(treatments[i].name)
        }
        return list
    }
}*/
/**
 * Deze functie maakt verbinding met de server, om vervolgens een afspraak in de database te zetten.
 * @returns {Promise<void>}
 */
async function makeAppointment(){
    var behandelings_id = "3";
    let id = Team.getBarberID();
    if (id === ""){
        alert("Selecteer een kapper!");
        return;
    }

    let dates = getDate();
    if (dates === undefined){
        alert("Selecteer een datum!");
        return;
    }
    let start_date = dates[0];
    let end_date = dates[1];

    let name = document.getElementById("name").value;
    if (name.trim() === ""){
        alert("Voer een naam in!");
        return;
    }

    let email = document.getElementById("email").value;
    var re_valid_email = /\S+@\S+\.\S+/;
    if (!re_valid_email.test(email)){
        alert("Voer een geldig email adres in!");
        return;
    }

    let phonenumber = document.getElementById("telefoonnummer").value;
    var re_valid_pnumber = /^((\+31)|(0031)|0)(\(0\)|)(\d{1,3})(\s|\-|)(\d{8}|\d{4}\s\d{4}|\d{2}\s\d{2}\s\d{2}\s\d{2})$/gm;
    if (!re_valid_pnumber.test(phonenumber)){
        alert("Voer een geldig telefoonnummer in!");
        return;
    }

    let comment = document.getElementById("opmerking").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://127.0.0.1:5000/nieuweafspraak', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
            alert("Afspraak verstuurd!");
            location.reload();
        }
    }
    const params = {
        naam: name,
        email: email,
        telefoon: phonenumber,
        begin_datum: start_date,
        eind_datum: end_date,
        kapper_id: id,
        behandelings_id: behandelings_id,
        opmerking: comment
    }
    xhr.send(JSON.stringify(params))
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

        /*const response3 = await fetch("http://127.0.0.1:5000/behandelingen");
        const data3 = await response3.json();
        const treatmentsarray = data3.behandelingen;
        for (i=0; i < treatmentsarray.length; i++){
            treatments.push(new Treatment(treatmentsarray[i].id, treatmentsarray[i].naam, treatmentsarray[i].prijs, treatmentsarray[i].tijdsduur));
        }*/
        loadAppointments();
    } catch (err) {
        console.log(err)
    }
}