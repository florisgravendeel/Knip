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
let teams = [new Team("team1","forestgreen"),new Team("team2","blueviolet"),new Team("team3","aqua"),new Team("team4","#00ff00")];

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


//kleuren om uit te kiezen

function colourNameToHex(colour)
{
    var colours = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
    "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
    "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
    "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
    "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
    "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
    "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
    "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
    "honeydew":"#f0fff0","hotpink":"#ff69b4",
    "indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
    "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
    "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
    "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
    "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
    "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
    "navajowhite":"#ffdead","navy":"#000080",
    "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
    "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
    "rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
    "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
    "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
    "violet":"#ee82ee",
    "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
    "yellow":"#ffff00","yellowgreen":"#9acd32"};

    if (typeof colours[colour.toLowerCase()] != 'undefined')
        return colours[colour.toLowerCase()];

    return false;
}

//Current voor kappers keuze aan te geven.

//window.onclick = currentKapper;

//function currentKapper() {

	//document.getElementById("team1").style.backgroundColor = "forestgreen";

  //document.getElementById("team2").style.backgroundColor = "forestgreen";
  //document.getElementById("team3").style.backgroundColor = "forestgreen";
  //document.getElementById("team4").style.backgroundColor = "forestgreen";
//}

//window.onclick = currentKapper;

/* vraagstuk nu is dat de functie niet bijhoudt welke is geselecteerd én dat één van de vier maar mag worden geselecteerd als voorkeur
   deze voorkeur moet dan ook weer worden kunnen gedeselecteerd*/

   /* Functie nodig die bijhoudt of er iets is geselecteerd op het moment én die een keuze toestaat die ook gedeselecteerd kan worden.*/

/**
function start_team1() {
  var submit = document.getElementById("team1");
  submit.addEventListener("click", toggle1);
};

function toggle1() {
  var color = document.getElementById("team1");
  var backColor = color.style.backgroundColor;
  color.style.backgroundColor = backColor === "forestgreen" ? "white" : "forestgreen";
};

start_team1();*/




/*
function start_team2() {
  var submit = document.getElementById("team2");
  submit.addEventListener("click", toggle2);
};

function toggle2() {
  var color = document.getElementById("team2");
  var backColor = color.style.backgroundColor;
  color.style.backgroundColor = backColor === "forestgreen" ? "white" : "forestgreen";
};

start_team2();

function start_team3() {
  var submit = document.getElementById("team3");
  submit.addEventListener("click", toggle3);
};

function toggle3() {
  var color = document.getElementById("team3");
  var backColor = color.style.backgroundColor;
  color.style.backgroundColor = backColor === "forestgreen" ? "white" : "forestgreen";
};

start_team3();

function start_team4() {
  var submit = document.getElementById("team4");
  submit.addEventListener("click", toggle4);
};

function toggle4() {
  var color = document.getElementById("team4");
  var backColor = color.style.backgroundColor;
  color.style.backgroundColor = backColor === "forestgreen" ? "white" : "forestgreen";
};

start_team4();






function currentKapper() {

  var submit = document.getElementById("team1");
  submit.addEventListener("click", toggle);
  var submit = document.getElementById("team2");
  submit.addEventListener("click", toggle);
  var submit = document.getElementById("team3");
  submit.addEventListener("click", toggle);
  var submit = document.getElementById("team4");
  submit.addEventListener("click", toggle);

}

function toggle() {
  var color = document.getElementById("team1");
  var backColor = color.style.backgroundColor;
  var color = document.getElementById("team2");
  var backColor = color.style.backgroundColor;
  var color = document.getElementById("team3");
  var backColor = color.style.backgroundColor;
  var color = document.getElementById("team4");
  var backColor = color.style.backgroundColor;
  color.style.backgroundColor = backColor === "forestgreen" ? "white" : "forestgreen";
}

currentKapper();

*/