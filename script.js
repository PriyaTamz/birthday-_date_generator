
var div = document.createElement("div");
div.className = "main";

var input = document.createElement("input");
input.setAttribute("type", "date");
input.id = "dob";

var button = document.createElement("button");
button.setAttribute("type", "button");
button.className = "btn btn-primary";
button.innerHTML = "Display Data";
button.addEventListener("click", date_generator);
div.append(input, button);
document.body.append(div);

function date_generator() {
    var res = document.getElementById("dob").value;
    var inputdate = new Date(res);
    var currendate = new Date();
    console.log(inputdate, currendate);

    var millsecdiff = parseInt(currendate.getTime() - inputdate.getTime());
    console.log(millsecdiff);

    var secdiff = Math.floor(millsecdiff / 1000);
    console.log(secdiff);

    var mindiff = Math.floor(secdiff / 60);
    console.log(mindiff);

    var hourdiff = Math.floor(mindiff / 60);
    console.log(hourdiff);

    var daydiff = Math.floor(hourdiff / 24);
    console.log(daydiff);

    var yeardiff = currendate.getFullYear() - inputdate.getFullYear();
    console.log(yeardiff);

    var monthdiff = (yeardiff * 12) + (currendate.getMonth() - inputdate.getMonth());
    console.log(monthdiff);

    displayResults(inputdate, millsecdiff, secdiff, mindiff, hourdiff, daydiff, yeardiff, monthdiff);
}

function displayResults(inputdate, millsecdiff, secdiff, mindiff, hourdiff, daydiff, yeardiff, monthdiff) {
    var resultDiv = document.createElement("div");
    resultDiv.className = "result";

    resultDiv.innerHTML = `
        <p>Given input date is ${inputdate}</p>
        <p>Years ${yeardiff}</p>
        <p>Months ${monthdiff}</p>
        <p>Days ${daydiff}</p>
        <p>Hours ${hourdiff}</p>
        <p>Minutes ${mindiff}</p>
        <p>Seconds ${secdiff}</p>
        <p>Milliseconds ${millsecdiff}</p> 
    `;

    document.body.append(resultDiv);
}
