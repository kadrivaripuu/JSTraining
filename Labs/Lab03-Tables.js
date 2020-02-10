// alert ("Implement solution in Lab03-Tables.js file ");
// alert ("Test data connected: OrderNo: "+shipments[0].orderNo);

window.onload = function() {
    var count = 0;
    generateShipmentRowsFirst();
};

function generateShipmentRowsFirst() {
    count = 0;
    generateShipmentRowElement(count);
}

function generateShipmentRowsPrevious() {
    count = count - 10;
    if (count < 0) {
        generateShipmentRowsFirst(0);
    } else {
        generateShipmentRowElement(count);
    }
}

function generateShipmentRowsNext() {
    count = count + 10;
    if (count > shipments.length-10) {
        generateShipmentRowsLast(count);
    } else {
        count = 0 + count;
        generateShipmentRowElement(count);
    }
}

function generateShipmentRowsLast() {
    var over = shipments.length % 10;
    if (over == 0) {
        count = shipments.length - 10;
    } else {
        count = shipments.length - over;
    }
    generateShipmentRowElement(count);
}

function generateShipmentRowElement(count) {    
    var filledCells = document.getElementsByClassName("selectable");
    while (filledCells.length > 0) {
        document.getElementsByClassName("selectable")[0].remove();
    }
    if (count > shipments.length - 10) {
        rows = shipments.length % 10;
    } else {
        rows = 10;
    }
    for (var i = count; i < (count + rows); i++) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        tr.setAttribute("class", "selectable");
        
        for (var colName in shipments[i]) {
            td = tr.insertCell(tr.cells.length);
            td.textContent = shipments[i][colName];
            td.setAttribute("class", "center");
        }

        td = tr.insertCell(-1);
        td.innerHTML = `<a href="#" class="btn-action glyphicons eye_open btn-info"><i></i></a>
        <a href="#" class="btn-action glyphicons pencil btn-success"><i></i></a>
        <a href="#" class="btn-action glyphicons remove_2 btn-danger"><i></i></a>`
            
        document.getElementById("sisu").appendChild(tr);
        
    }   

}
