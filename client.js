console.log('client.js loaded');
let monthlyTotal = 0;

$(document).ready(handleReady);

function handleReady () {
    console.log('document ready');
    $('#submitBtn').on('click',submitClick);
    $('#data').on('click', '#deleteBtn', deleteClick);
};

function submitClick(){
    console.log('submit');
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id= $('#idNum').val();
    let title= $('#title').val();
    let salary= Number($('#annualSalary').val());
    console.log(firstName, lastName, id, title, salary);
    $('#data').append(`
        <tr id="new">
            <td>${firstName}</td>;
            <td>${lastName}</td>;
            <td>${id}</td>;
            <td>${title}</td>;
            <td>${salary}</td>;
            <td><button id="deleteBtn">delete</button></td>;
        </tr>
        `);
        
        $('#firstName').val('');
        $('#lastName').val('');
        $('#idNum').val('');
        $('#title').val('');
        $('#annualSalary').val('');

        monthlyTotal +=  salary / 12;
        console.log(monthlyTotal);
        $('#totalMonthly').empty().append("total monthly: $ ", Math.round(monthlyTotal));


        tooMuch();
};


function deleteClick(){
    console.log('delete');
    $('#new').remove();
}


function tooMuch(){
    if (monthlyTotal > 20000){
        document.getElementById("totalMonthly").className = "tooMuch";
}};


