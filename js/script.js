//update script.js
//Verder gebouwd op Wesley zijn stukje

class Team {

    constructor(team, colour) {
        this.team = team;
        this.colour = colour;
    }

    getElement(){
        return document.getElementById(this.team);
    }
    select(){
        this.getElement().style.backgroundColor = this.colour;
    }
    deselect(){
        this.getElement().style.backgroundColor = "white";
    }
    static clearSelection(){
        for(i=0; i < teams.length; i++){
            teams[i].deselect();
        }
    }
}
//Adds event listeners to the circles
let teams = [new Team("team1","#03AC13"),new Team("team2","#03AC13"),new Team("team3","#03AC13"),new Team("team4","#03AC13")];

let teamSelector = document.getElementsByClassName('team')
for (let i = 0; teamSelector.length > i; i++) {
    teamSelector[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        setTeam(mode)
    })
} 


function setTeam(mode){
    Team.clearSelection();
    switch (mode)   {
        case "team1":
            teams[0].select();
            console.log('Geen voorkeur');
            break;
        case "team2":
            teams[1].select();
            console.log('Alexander');
            break;
        case "team3":
            teams[2].select();
            console.log('Selena');
            break;
        case "team4":
            teams[3].select();
            console.log('Oceanos');
            break;
    }
}


// ============ Finn de Jong ============ //
// Button functie om bepaalde behandelingen te verstoppen //

function HidingKnippen(){
    var treatmentknippenlist = document.getElementById("cutting-treatments");
    if(treatmentknippenlist.style.display === "none"){
        treatmentknippenlist.style.display = "block"
        console.log("Hij is er!")
    }
    else{
        treatmentknippenlist.style.display = "none"
        console.log("En hij is weg!")
    }
}

function HidingVerfen(){
    var treatmentknippenlist = document.getElementById("painting-treatments");
    if(treatmentknippenlist.style.display === "none"){
        treatmentknippenlist.style.display = "block"
        console.log("Hij is er!")
    }
    else{
        treatmentknippenlist.style.display = "none"
        console.log("En hij is weg!")
    }
}

function HidingVerzorgen(){
    var treatmentknippenlist = document.getElementById("verzorgen-treatments");
    if(treatmentknippenlist.style.display === "none"){
        treatmentknippenlist.style.display = "block"
        console.log("Hij is er!")
    }
    else{
        treatmentknippenlist.style.display = "none"
        console.log("En hij is weg!")
    }
}

// Gekozen behandeling laten zien.

var alle_behandelingen = ["Knippen -t/m 10 jaar", "Knippen volwassene", "Wassen, knippen", "Wassen, knippen, föhnen", "Wassen, knippen, tangen", "Pony knippen", "Spoeling", "Uitgroei", "Permanente kleuring", "Exclusieve kleuring", "Vlechten", "Opsteken", "Watergolven", "Permanente styling"];

//buttons krijgen
var button_id_1 = document.getElementById("treatment-choosen-btn-1");
var button_id_2 = document.getElementById("treatment-choosen-btn-2");
var button_id_3 = document.getElementById("treatment-choosen-btn-3");
var button_id_4 = document.getElementById("treatment-choosen-btn-4");
var button_id_5 = document.getElementById("treatment-choosen-btn-5");
var button_id_6 = document.getElementById("treatment-choosen-btn-6");
var button_id_7 = document.getElementById("treatment-choosen-btn-7");
var button_id_8 = document.getElementById("treatment-choosen-btn-8");
var button_id_9 = document.getElementById("treatment-choosen-btn-9");
var button_id_10 = document.getElementById("treatment-choosen-btn-10");
var button_id_11 = document.getElementById("treatment-choosen-btn-11");
var button_id_12= document.getElementById("treatment-choosen-btn-12");
var button_id_13 = document.getElementById("treatment-choosen-btn-13");
var button_id_14 = document.getElementById("treatment-choosen-btn-14");

//Object with treatments
//btn en behandeling object
var btn_behandeling_object = {
    btn_1 : "Knippen",
    btn_2 : "Wassen, knippen en föhnen",
    btn_3 : "Wassen, knippen en tangen",
    btn_4 : "Pony knippen",

    btn_5 : "Verven",
    btn_6 : "Kleuren",

    btn_14 : "Epileren",
    btn_13 : "Ontharen",
    btn_11 : "Baard scheren",
    btn_12 : "Baard trimmen",
    btn_10 : "Tangen",
    btn_7 : "Vlechten",
    btn_8 : "Opsteken",
    btn_9 : "Watergolven"
};

//variable
var gekozen_behandeling = "";

//check if button is clicked
button_id_1.addEventListener("click", function(){
    console.log(btn_behandeling_object.btn_1);
    gekozen_behandeling = btn_behandeling_object.btn_1;
    //behandeling returnen
    document.getElementById("selected-treatment-display").innerHTML = gekozen_behandeling;
});

button_id_2.addEventListener("click", function(){
    console.log(btn_behandeling_object.btn_2);
    gekozen_behandeling = btn_behandeling_object.btn_2;
    //behandeling returnen
    document.getElementById("selected-treatment-display").innerHTML = gekozen_behandeling;
});

button_id_3.addEventListener("click", function(){
    console.log(btn_behandeling_object.btn_3);
    gekozen_behandeling = btn_behandeling_object.btn_3;
    //behandeling returnen
    document.getElementById("selected-treatment-display").innerHTML = gekozen_behandeling;
});

button_id_4.addEventListener("click", function(){
    console.log(btn_behandeling_object.btn_4);
    gekozen_behandeling = btn_behandeling_object.btn_4;
    //behandeling returnen
    document.getElementById("selected-treatment-display").innerHTML = gekozen_behandeling;
});

button_id_5.addEventListener("click", function(){
    console.log(btn_behandeling_object.btn_5);
    gekozen_behandeling = btn_behandeling_object.btn_5;
    //behandeling returnen
    document.getElementById("selected-treatment-display").innerHTML = gekozen_behandeling;
});

button_id_6.addEventListener("click", function(){
    console.log(btn_behandeling_object.btn_6);
    gekozen_behandeling = btn_behandeling_object.btn_6;
    //behandeling returnen
    document.getElementById("selected-treatment-display").innerHTML = gekozen_behandeling;
});

button_id_7.addEventListener("click", function(){
    console.log(btn_behandeling_object.btn_7);
    gekozen_behandeling = btn_behandeling_object.btn_7;
    //behandeling returnen
    document.getElementById("selected-treatment-display").innerHTML = gekozen_behandeling;
});

button_id_8.addEventListener("click", function(){
    console.log(btn_behandeling_object.btn_8);
    gekozen_behandeling = btn_behandeling_object.btn_8;
    //behandeling returnen
    document.getElementById("selected-treatment-display").innerHTML = gekozen_behandeling;
});

button_id_9.addEventListener("click", function(){
    console.log(btn_behandeling_object.btn_9);
    gekozen_behandeling = btn_behandeling_object.btn_9;
    //behandeling returnen
    document.getElementById("selected-treatment-display").innerHTML = gekozen_behandeling;
});

button_id_10.addEventListener("click", function(){
    console.log(btn_behandeling_object.btn_10);
    gekozen_behandeling = btn_behandeling_object.btn_10;
    //behandeling returnen
    document.getElementById("selected-treatment-display").innerHTML = gekozen_behandeling;
});

button_id_11.addEventListener("click", function(){
    console.log(btn_behandeling_object.btn_11);
    gekozen_behandeling = btn_behandeling_object.btn_11;
    //behandeling returnen
    document.getElementById("selected-treatment-display").innerHTML = gekozen_behandeling;
});

button_id_12.addEventListener("click", function(){
    console.log(btn_behandeling_object.btn_12);
    gekozen_behandeling = btn_behandeling_object.btn_12;
    //behandeling returnen
    document.getElementById("selected-treatment-display").innerHTML = gekozen_behandeling;
});

button_id_13.addEventListener("click", function(){
    console.log(btn_behandeling_object.btn_13);
    gekozen_behandeling = btn_behandeling_object.btn_13;
    //behandeling returnen
    document.getElementById("selected-treatment-display").innerHTML = gekozen_behandeling;
});

button_id_14.addEventListener("click", function(){
    console.log(btn_behandeling_object.btn_14);
    gekozen_behandeling = btn_behandeling_object.btn_14;
    //behandeling returnen
    document.getElementById("selected-treatment-display").innerHTML = gekozen_behandeling;
});