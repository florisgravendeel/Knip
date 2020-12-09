//Adds event listeners to the circles

let teamSelector = document.getElementsByClassName('team')
for (let i = 0; teamSelector.length > i; i++) {
    teamSelector[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        setTeam(mode)
    })
}

function setTeam(mode){

    if (mode === 'team1') {
        console.log('Geen voorkeur');
    }

    if (mode === 'team2') {
        console.log('Alexander');
    }

    if (mode === 'team3') {
        console.log('Selena');
    }

    if (mode === 'team4') {
        console.log('Oceanos');
    }

    localStorage.setItem('theme', mode)

}

// ============ Finn de Jong ============ //
// Button Functionality voor geslacht/kind 
function HidingTest(){
    var TreatmentContainer = document.getElementById("id-treatment-container");
    if(TreatmentContainer.style.display === "none"){
        TreatmentContainer.style.display = "block";
        console.log("Display is nu BLOCK")
    }
    else{
        TreatmentContainer.style.display = "none";
        console.log("Display is nu NONE")
    }
}

function TreatmentMale(){
    var TM = document.getElementById("");
}

function TreatmentFemale(){
    
}

function TreatmentKids(){

}

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