// get_questions_answer.js
// to get all the questions and answers selected by a student in UGC NET exam 2021
var table_data = document.getElementsByTagName('td')
var questions_array = Array();
var answers_array = Array()

for (let i = 0; i < table_data.length; i++) {
    if (table_data[i].innerText.includes('Question ID:-')) {
        console.log(table_data[i].innerText.split("-")[1])
        questions_array.push(table_data[i].innerText.split("-")[1])
    }
    if (table_data[i].innerText.includes('Answer Given:-')) {
        var answers = (table_data[i].innerText.split("-")).length
        console.log(table_data[i].innerText.split("-")[answers - 1])
        answers_array.push(table_data[i].innerText.split("-")[answers - 1])
    }
}

var mynode = document.getElementsByTagName("body")[0];
var fc = mynode.firstChild
while (fc) {
    mynode.removeChild(fc)
    fc = mynode.firstChild
}

var mytable = document.createElement('table')
var tr = document.createElement("tr")
tr.appendChild(document.createElement("td"))
tr.appendChild(document.createElement("td"))

tr.cells[0].appendChild(document.createTextNode("Questions"))
tr.cells[1].appendChild(document.createTextNode("Answers Selected By You"))
mytable.appendChild(tr)
for (let i = 0; i < questions_array.length; i++) {
    var tr = document.createElement("tr")
    tr.appendChild(document.createElement("td"))
    tr.appendChild(document.createElement("td"))

    tr.cells[0].appendChild(document.createTextNode(questions_array[i]))
    tr.cells[1].appendChild(document.createTextNode(answers_array[i]))
    mytable.appendChild(tr)
}
document.body.appendChild(mytable)