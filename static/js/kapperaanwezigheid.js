// Kapper list items creating

//
// Poging 1 met fetch!
//

/*
async function get_kappers() {
    let url = "http://127.0.0.1:5000/kappers";
    fetch(url, {method: "GET"})
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('error: ', error));
    

}

alert(get_kappers());
*/

//
// Poging 2 met xhr request!
//

/*
function get_kapper() {
    var req = new XMLHttpRequest();

    if (this.readyState == 4 && this.status == 200) {
        var arr = JSON.parse(this.response);
        place_kapper(arr);
    }

    req.open('GET', 'http://127.0.0.1:5000/kappers')

    req.responseType = 'json';

    req.onload = function() {
        alert(`loaded: ${req.status} ${req.response}`)
    }

    req.onerror = function() {
        alert("There has been an error")
    }

    req.send();
}

*/

//
// 3de poging weer met fetch!
//

const data1 = '';

// fetch vanuit API!
fetch('http://127.0.0.1:5000/kappers', {method: 'GET'})
    .then(response => response.json())
    .then(json => {
        console.log(json)
        // call functie zie hieronder!
        make_flexbox_item(json);
        data1 = json    
        return data1
    })
    // catching error!
    .catch(r => console.log(r));

//  Function to make the flexbox items!
function make_flexbox_item(array) {
    // array with array with checkboxen and text!
    checkboxtext = [[document.getElementById("div1")],[],[]]

    // for loop to make an item for every barber!
    for (i = 0; i < array.length; i++) {
        // get body!
        var flexdiv = document.getElementById("kapperlist-body");
        // make div for body!
        var itemdiv = document.createElement("div");
        itemdiv.setAttribute("class", ("item-style"));
        itemdiv.setAttribute("id", ("div" + (i+1)))
        // append flexdiv to itemdiv
        flexdiv.appendChild(itemdiv);

        // make div to put text in!
        var divtextelement = document.createElement("div");
        // give element name from given array!
        var divtext = document.createTextNode(array[i][0]);
        // append text to div!
        divtextelement.appendChild(divtext);
        // give general CSS class!
        divtextelement.setAttribute("class", ("generalstyling"));

        // append to div!
        itemdiv.appendChild(divtextelement);

        //
        // div for checkbox!
        //

        var sliderdiv = document.createElement("div");
        sliderdiv.setAttribute("class", ("sliderdiv"))

        itemdiv.appendChild(sliderdiv);
        // make checkbox!
        var divcheck = document.createElement("input");
        // make input into checkbox!
        divcheck.setAttribute("Type", ("checkbox"))
        // give CSS class!
        sliderdiv.classList.add("generalstyling", "setcheckbox")
        // Append to div!
        sliderdiv.appendChild(divcheck);

        // checking checkboxes if already true!
        if(array[i][1] == "1") {
            divcheck.setAttribute("checked", "");
        }

        //
        // eventlisteneres
        //

        divcheck.addEventListener('change', function() {
            if(this.checked) {
                console.log("Check: " + i);
            }
            else {
                console.log("unchecked: " + i);
            }
        });

    }

}

//
// check if checkbox gets checked
//

/*

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"naam":"Finn","aanwezigheid":"0"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://127.0.0.1:5000/kappers/aanwezig", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

*/

