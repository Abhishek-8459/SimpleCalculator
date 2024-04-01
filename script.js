function generateTable() {
    var number = document.getElementById("numberInput").value;
    var table = "<h2>Multiplication Table for " + number + "</h2><table>";
    for (var i = 1; i <= 10; i++) {
        table += "<tr><td>" + number + " x " + i + "</td><td>=</td><td>" + (number * i) + "</td></tr>";
    }
    table += "</table>";
    document.getElementById("tableContainer").innerHTML = table;
}
