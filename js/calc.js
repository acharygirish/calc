var inputBox = document.querySelector('.value');
var inputEq = document.querySelector('.equat');
var historyDiv = document.querySelector('.history-div');
let history = document.querySelector('.history');
var answers = [];
var equations = [];
function selectValue(num)
{
    if(inputBox.value==0)
        inputBox.value=num;
    else
        inputBox.value+=num;
}
function clearInput()
{
    inputEq.value = '';
    inputBox.value=0;
}
function getAns()
{
    equation = inputBox.value + "=";
    equations.push(equation);
    answers.push(eval(inputBox.value));
    inputEq.value = equation;
    inputBox.value = eval(inputBox.value);
}

function showHistory()
{
    history.classList.toggle('open');
    historyDiv.innerHTML = '';
    for(let i=0;i<answers.length;i++)
    {
        historyDiv.innerHTML += '<div class="section"><h4>'+equations[i]+'</h4><h2>'+answers[i]+'</h2></div>';
    }
}
function removeHistory()
{
    var status = confirm('Are You sure want to delete history?');
    if(status)
    {
        historyDiv.innerHTML = "";
        answers = [];
        equations = [];
    }
}
