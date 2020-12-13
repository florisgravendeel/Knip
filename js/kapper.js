class Team {

    constructor(team, colour, name, id) {
        this.team = team;
        this.colour = colour;
        this.name = name;
        this.id = id;
    }

    getElement(){
        return document.getElementById(this.team);
    }
    select(){
        this.getElement().style.backgroundColor = this.colour;
        this.getElement().style.border = ("2px solid #000000");
    }
    deselect(){
        this.getElement().style.backgroundColor = "white";
        this.getElement().style.border = "white";
    }
    isSelected(){
        return this.getElement().style.backgroundColor === this.colour;
    }

    static clearSelection(){
        for(i=0; i < teams.length; i++){
            teams[i].deselect();
        }
    }
    static getBarber(){
        for (i=0; i < teams.length; i++){
            if (teams[i].isSelected()){
                return teams[i].name;
            }
        }
        return "";
    }
    static getBarberID(){
        for (i=0; i < teams.length; i++){
            if (teams[i].isSelected()){
                return teams[i].id;
            }
        }
        return "";
    }
    static getRandomBarberID(){
        return 0;
    }
}
//Adds event listeners to the circles
let teams = [new Team("team1","forestgreen", "Wesley",3),
             new Team("team2","blueviolet", "Max", 4),
             new Team("team3","aqua", "Floris", 5),
             new Team("team4","red", "Lieke", 6)];

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
            break;
        case "team2":
            teams[1].select();
            break;
        case "team3":
            teams[2].select();
            break;
        case "team4":
            teams[3].select();
            break;
    }
}

// Functie onderdeel voor groen/rood border-color contact form
// Met css aanroepen van input:valid én input:invalid
// Doel is om de css klassen aan te roepen
// Vraag is of dat lukt met deze functies hieronder of
// het te combineren valt met wat er nu al is qua functies
// Test werkt dit?

function setErrorFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'input:valid';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'input:invalid';
}