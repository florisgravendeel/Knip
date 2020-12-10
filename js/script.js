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