//Adds event listeners to the circles

let teamSelector = document.getElementsByClassName('team-wrapper')
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