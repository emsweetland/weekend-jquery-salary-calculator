console.log('client.js loaded');

$(document).ready(handleReady);

function handleReady () {
    console.log('document ready');
    //dom is ready, we can interact with it
    //click listener go here
    $('#submitBtn').on('click',handleClick);
};

function handleClick(){
    console.log('click');
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id= $('#idNum').val();
    let title= $('#title').val();
    let salary= $('#annualSalary').val();
    console.log(firstName, lastName, id, title, salary);
    $('#data').append(`
        <td>${firstName}</td>;
    `)
};

