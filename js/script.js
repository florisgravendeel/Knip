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
        document.getElementById('theme-style').href = 'css/default.css'
    }

    if (mode === 'team2') {
        document.getElementById('theme-style').href = 'css/blue.css'
    }

    if (mode === 'team3') {
        document.getElementById('theme-style').href = 'css/green.css'
    }

    if (mode === 'team4') {
        document.getElementById('theme-style').href = 'css/purple.css'
    }

    localStorage.setItem('theme', mode)

}