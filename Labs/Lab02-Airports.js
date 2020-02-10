// alert ("Implement solution in Airports.js script");

function getDepartures() {  
    var departureDropdown = document.getElementById("slcDepartures"); 
    var destinationDropdown = document.getElementById("slcDestinations");
    if (departureDropdown.options.length == 0) {
        loadDepartures(departureDropdown);
    } else {
        loadDestinations(destinationDropdown);
    } 
}


function loadDepartures(departureDropdown){
    for (i = 0; i < airports.length; i++) {
        var departures = airports[i].departure;
        var option = document.createElement("option");
        option.textContent = departures;
        option.value =  departures;
        departureDropdown.appendChild(option);    
    } 
}



function loadDestinations(destinationDropdown){
    //ˇclear destinationDropdown!
    document.getElementById("slcDestinations").options.length = 0;
    var x = document.getElementById("slcDepartures").options.selectedIndex;
    for (j = 0; j < airports[x].destinations.length; j++) {
        var destination = airports[x].destinations[j];
        var option = document.createElement("option");
        option.textContent = destination;
        option.value = destination;
        destinationDropdown.appendChild(option);    
    }
}