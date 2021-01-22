// ============ Finn de Jong ============ //
// Button functie om bepaalde behandelingen te verstoppen //
document.getElementById("treatment-titles")
function HidingKnippen(){
    var treatmentknippenlist = document.getElementById("cutting-treatments");
    if(treatmentknippenlist.style.display === "block"){
        treatmentknippenlist.style.display = "none";
        document.getElementById("dropdownarrow-knippen").style.transform = "rotate(-45deg)";
        document.getElementById("dropdownarrow-knippen").style.webkitTransform = "rotate(-45deg)";
        //console.log("Hij is er!")
    }
    else{
        treatmentknippenlist.style.display = "block";
        document.getElementById("dropdownarrow-knippen").style.transform = "rotate(45deg)";
        document.getElementById("dropdownarrow-knippen").style.webkitTransform = "rotate(45deg)";
        //console.log("En hij is weg!")
    }
}

function HidingVerfen(){
    var treatmentknippenlist = document.getElementById("painting-treatments");
    if(treatmentknippenlist.style.display === "block"){
        treatmentknippenlist.style.display = "none";
        document.getElementById("dropdownarrow-verfen").style.transform = "rotate(-45deg)";
        document.getElementById("dropdownarrow-verfen").style.webkitTransform = "rotate(-45deg)";
        //console.log("Hij is er!")
    }
    else{
        treatmentknippenlist.style.display = "block";
        document.getElementById("dropdownarrow-verfen").style.transform = "rotate(45deg)";
        document.getElementById("dropdownarrow-verfen").style.webkitTransform = "rotate(45deg)";
        //console.log("En hij is weg!")
    }
}

function HidingVerzorgen(){
    var treatmentknippenlist = document.getElementById("verzorgen-treatments");
    if(treatmentknippenlist.style.display === "block"){
        treatmentknippenlist.style.display = "none";
        document.getElementById("dropdownarrow-verzorgen").style.transform = "rotate(-45deg)";
        document.getElementById("dropdownarrow-verzorgen").style.webkitTransform = "rotate(-45deg)";
        //console.log("Hij is er!")
    }
    else{
        treatmentknippenlist.style.display = "block";
        document.getElementById("dropdownarrow-verzorgen").style.transform = "rotate(45deg)";
        document.getElementById("dropdownarrow-verzorgen").style.webkitTransform = "rotate(45deg)";
        //console.log("En hij is weg!")
    }
}

//      Eerste Poging

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
var gekozen_behandeling = [];

//behandelingen displayen
function displayTreatment() {
    if(gekozen_behandeling.length == 0) {
        document.getElementById("selected-treatment-display").innerHTML = "Geen";
    }
    else if(gekozen_behandeling.length == 1) {
        document.getElementById("selected-treatment-display").innerHTML = gekozen_behandeling[0];
    }
    else if(gekozen_behandeling.length == 2) {
        document.getElementById("selected-treatment-display").innerHTML = gekozen_behandeling[0] + " + " + gekozen_behandeling[1];
    }   
} 

//reset de gekozen behandelingen
var reset_button = document.getElementById("selected-treatment-reset");
reset_button.addEventListener("click", function(){
    gekozen_behandeling.length = 0;
    displayTreatment();
    console.log("reset")
});


//check if button is clicked
button_id_1.addEventListener("click", function(){
    var localbutton = btn_behandeling_object.btn_1
    console.log(localbutton);
    //behandeling returnen
    if(gekozen_behandeling.length <= 2 && gekozen_behandeling.length >= 0) {
        console.log(gekozen_behandeling.length)
        if(gekozen_behandeling.length != 0) {
            for(i = 0; i < gekozen_behandeling.length; i++) {
                if (gekozen_behandeling[i] !== localbutton) {
                    gekozen_behandeling.push(localbutton);
                };
            };
        }
        else {
            gekozen_behandeling.push(localbutton);
        };
        displayTreatment();
    };
    console.log(gekozen_behandeling);
});

button_id_2.addEventListener("click", function(){
    var localbutton = btn_behandeling_object.btn_2
    console.log(localbutton);
    //behandeling returnen
    if(gekozen_behandeling.length <= 2 && gekozen_behandeling.length >= 0) {
        console.log(gekozen_behandeling.length)
        if(gekozen_behandeling.length != 0) {
            for(i = 0; i < gekozen_behandeling.length; i++) {
                if (gekozen_behandeling[i] !== localbutton) {
                    gekozen_behandeling.push(localbutton);
                };
            };
        }
        else {
            gekozen_behandeling.push(localbutton);
        };
        displayTreatment();
    };
    console.log(gekozen_behandeling);
});

button_id_3.addEventListener("click", function(){
    var localbutton = btn_behandeling_object.btn_3
    console.log(localbutton);
    //behandeling returnen
    if(gekozen_behandeling.length <= 2 && gekozen_behandeling.length >= 0) {
        console.log(gekozen_behandeling.length)
        if(gekozen_behandeling.length != 0) {
            for(i = 0; i < gekozen_behandeling.length; i++) {
                if (gekozen_behandeling[i] !== localbutton) {
                    gekozen_behandeling.push(localbutton);
                };
            };
        }
        else {
            gekozen_behandeling.push(localbutton);
        };
        displayTreatment();
    };
    console.log(gekozen_behandeling);
});

button_id_4.addEventListener("click", function(){
    var localbutton = btn_behandeling_object.btn_4
    console.log(localbutton);
    //behandeling returnen
    if(gekozen_behandeling.length <= 2 && gekozen_behandeling.length >= 0) {
        console.log(gekozen_behandeling.length)
        if(gekozen_behandeling.length != 0) {
            for(i = 0; i < gekozen_behandeling.length; i++) {
                if (gekozen_behandeling[i] !== localbutton) {
                    gekozen_behandeling.push(localbutton);
                };
            };
        }
        else {
            gekozen_behandeling.push(localbutton);
        };
        displayTreatment();
    };
    console.log(gekozen_behandeling);
});

button_id_5.addEventListener("click", function(){
    var localbutton = btn_behandeling_object.btn_5
    console.log(localbutton);
    //behandeling returnen
    if(gekozen_behandeling.length <= 2 && gekozen_behandeling.length >= 0) {
        console.log(gekozen_behandeling.length)
        if(gekozen_behandeling.length != 0) {
            for(i = 0; i < gekozen_behandeling.length; i++) {
                if (gekozen_behandeling[i] !== localbutton) {
                    gekozen_behandeling.push(localbutton);
                };
            };
        }
        else {
            gekozen_behandeling.push(localbutton);
        };
        displayTreatment();
    };
    console.log(gekozen_behandeling);
});

button_id_6.addEventListener("click", function(){
    var localbutton = btn_behandeling_object.btn_6
    console.log(localbutton);
    //behandeling returnen
    if(gekozen_behandeling.length <= 2 && gekozen_behandeling.length >= 0) {
        console.log(gekozen_behandeling.length)
        if(gekozen_behandeling.length != 0) {
            for(i = 0; i < gekozen_behandeling.length; i++) {
                if (gekozen_behandeling[i] !== localbutton) {
                    gekozen_behandeling.push(localbutton);
                };
            };
        }
        else {
            gekozen_behandeling.push(localbutton);
        };
        displayTreatment();
    };
    console.log(gekozen_behandeling);
});

button_id_7.addEventListener("click", function(){
    var localbutton = btn_behandeling_object.btn_7
    console.log(localbutton);
    //behandeling returnen
    if(gekozen_behandeling.length <= 2 && gekozen_behandeling.length >= 0) {
        console.log(gekozen_behandeling.length)
        if(gekozen_behandeling.length != 0) {
            for(i = 0; i < gekozen_behandeling.length; i++) {
                if (gekozen_behandeling[i] !== localbutton) {
                    gekozen_behandeling.push(localbutton);
                };
            };
        }
        else {
            gekozen_behandeling.push(localbutton);
        };
        displayTreatment();
    };
    console.log(gekozen_behandeling);
});

button_id_8.addEventListener("click", function(){
    var localbutton = btn_behandeling_object.btn_8
    console.log(localbutton);
    //behandeling returnen
    if(gekozen_behandeling.length <= 2 && gekozen_behandeling.length >= 0) {
        console.log(gekozen_behandeling.length)
        if(gekozen_behandeling.length != 0) {
            for(i = 0; i < gekozen_behandeling.length; i++) {
                if (gekozen_behandeling[i] !== localbutton) {
                    gekozen_behandeling.push(localbutton);
                };
            };
        }
        else {
            gekozen_behandeling.push(localbutton);
        };
        displayTreatment();
    };
    console.log(gekozen_behandeling);
});

button_id_9.addEventListener("click", function(){
    var localbutton = btn_behandeling_object.btn_9
    console.log(localbutton);
    //behandeling returnen
    if(gekozen_behandeling.length <= 2 && gekozen_behandeling.length >= 0) {
        console.log(gekozen_behandeling.length)
        if(gekozen_behandeling.length != 0) {
            for(i = 0; i < gekozen_behandeling.length; i++) {
                if (gekozen_behandeling[i] !== localbutton) {
                    gekozen_behandeling.push(localbutton);
                };
            };
        }
        else {
            gekozen_behandeling.push(localbutton);
        };
        displayTreatment();
    };
    console.log(gekozen_behandeling);
});

button_id_10.addEventListener("click", function(){
    var localbutton = btn_behandeling_object.btn_10
    console.log(localbutton);
    //behandeling returnen
    if(gekozen_behandeling.length <= 2 && gekozen_behandeling.length >= 0) {
        console.log(gekozen_behandeling.length)
        if(gekozen_behandeling.length != 0) {
            for(i = 0; i < gekozen_behandeling.length; i++) {
                if (gekozen_behandeling[i] !== localbutton) {
                    gekozen_behandeling.push(localbutton);
                };
            };
        }
        else {
            gekozen_behandeling.push(localbutton);
        };
        displayTreatment();
    };
    console.log(gekozen_behandeling);
});

button_id_11.addEventListener("click", function(){
    var localbutton = btn_behandeling_object.btn_11
    console.log(localbutton);
    //behandeling returnen
    if(gekozen_behandeling.length <= 2 && gekozen_behandeling.length >= 0) {
        console.log(gekozen_behandeling.length)
        if(gekozen_behandeling.length != 0) {
            for(i = 0; i < gekozen_behandeling.length; i++) {
                if (gekozen_behandeling[i] !== localbutton) {
                    gekozen_behandeling.push(localbutton);
                };
            };
        }
        else {
            gekozen_behandeling.push(localbutton);
        };
        displayTreatment();
    };
    console.log(gekozen_behandeling);
});

button_id_12.addEventListener("click", function(){
    var localbutton = btn_behandeling_object.btn_12
    console.log(localbutton);
    //behandeling returnen
    if(gekozen_behandeling.length <= 2 && gekozen_behandeling.length >= 0) {
        console.log(gekozen_behandeling.length)
        if(gekozen_behandeling.length != 0) {
            for(i = 0; i < gekozen_behandeling.length; i++) {
                if (gekozen_behandeling[i] !== localbutton) {
                    gekozen_behandeling.push(localbutton);
                };
            };
        }
        else {
            gekozen_behandeling.push(localbutton);
        };
        displayTreatment();
    };
    console.log(gekozen_behandeling);
});

button_id_13.addEventListener("click", function(){
    var localbutton = btn_behandeling_object.btn_13
    console.log(localbutton);
    //behandeling returnen
    if(gekozen_behandeling.length <= 2 && gekozen_behandeling.length >= 0) {
        console.log(gekozen_behandeling.length)
        if(gekozen_behandeling.length != 0) {
            for(i = 0; i < gekozen_behandeling.length; i++) {
                if (gekozen_behandeling[i] !== localbutton) {
                    gekozen_behandeling.push(localbutton);
                };
            };
        }
        else {
            gekozen_behandeling.push(localbutton);
        };
        displayTreatment();
    };
    console.log(gekozen_behandeling);
});

button_id_14.addEventListener("click", function(){
    var localbutton = btn_behandeling_object.btn_14
    console.log(localbutton);
    //behandeling returnen
    if(gekozen_behandeling.length <= 2 && gekozen_behandeling.length >= 0) {
        console.log(gekozen_behandeling.length)
        if(gekozen_behandeling.length != 0) {
            for(i = 0; i < gekozen_behandeling.length; i++) {
                if (gekozen_behandeling[i] !== localbutton) {
                    gekozen_behandeling.push(localbutton);
                };
            };
        }
        else {
            gekozen_behandeling.push(localbutton);
        };
        displayTreatment();
    };
    console.log(gekozen_behandeling);
});


// Ik heb hier allemaal aparte id's voor elke button



//      2de Poging

//  Deze poging ga ik een array makken met alle behandelingen

/*
    Wat ga ik maken?

Een array met behandelingen + buttons
For loop die behandelingen in een eventlistener zet


*/
/*
var gekozen_behandeling = ""

class TreatmentObject {
    button_id;
    treatment;

    constructor(button_id, treatment) {
        this.button_id = button_id;
        this.treatment = treatment;
    }
    
    getButtonElement(){
        return document.getElementById(this.button_id);
    }

}
var button_id_1 = document.getElementById("treatment-choosen-btn-1");
var button_id_2 = document.getElementById("treatment-choosen-btn-2");
var button_id_3 = document.getElementById("treatment-choosen-btn-3");

var buttons = [new TreatmentObject("treatment-choosen-btn-1", "Knippen"), 
               new TreatmentObject("treatment-choosen-btn-2", "Wassen, knippen en föhnen"),
               new TreatmentObject("treatment-choosen-btn-3", "Wassen, knippen en tangen")]


for (i=0; i < buttons.length; i++){
    buttons[i].getButtonElement().addEventListener("click", function () {
        console.log(buttons[i].treatment);
        gekozen_behandeling = buttons[i].treatment;

        document.getElementById("selected-treatment-display").innerHTML = gekozen_behandeling;
    });
    
}
*/