"use strict"

const button = document.getElementById('start');
const table_body = document.getElementById('table-body');

async function quiz() {
    const url = 'https://djangoapii.herokuapp.com/quiz/';
    const response = await fetch(url);
    var data = await response.json();
    var quiz_data = '';
    for (let i of data) {
        quiz_data += `
                <td class="question">Q. ${i.question}</td>
                <tr>
                    <td class="option">A. ${i.option_1}</td>
                    <td class="option">B. ${i.option_2}</td>
                </tr>
                <tr>
                    <td class="option">C. ${i.option_3}</td>
                    <td class="option">D. ${i.option_4}</td>
                </tr>
                <tr class="answer">Answer. 'will be here'</tr>
                <br/><br/>`;
    }
    table_body.innerHTML = quiz_data;
}

button.addEventListener("click", quiz);

