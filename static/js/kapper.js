class Team {

    constructor(team, colour, name, id) {
        this.team = team;
        this.colour = colour;
        this.name = name;
        this.id = id;
        this.selected = false;
    }

    getElement(){
        return document.getElementById(this.team);
    }
    select(){
        this.getElement().style.backgroundColor = this.colour;
        this.getElement().style.border = ("2px solid #000000");
        this.selected = true;
    }
    deselect(){
        this.getElement().style.backgroundColor = "#203647";
        this.getElement().style.border = "white";
        this.selected = false;
    }
    isSelected(){
        return this.selected;
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
let teams = [new Team("team1","#007CC7", "Wesley",3),
             new Team("team2","#007CC7", "Max", 4),
             new Team("team3","#007CC7", "Floris", 5),
             new Team("team4","#007CC7", "Lieke", 6)];

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
            console.log("1");
            teams[0].select();
            break;
        case "team2":
            teams[1].select();
            console.log("2");
            break;
        case "team3":
            teams[2].select();
            console.log("3");
            break;
        case "team4":
            teams[3].select();
            console.log("4");
            break;
    }
}