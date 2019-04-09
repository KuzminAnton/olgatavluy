jQuery(function($){
    $("#date").mask("99/99/9999");
    $("#phone").mask("7(999) 999-9999");
    $("#tin").mask("99-9999999");
    $("#ssn").mask("999-99-9999");
 });

var Form = document.querySelector('#form')

function handleSubmit(event){
    event.preventDefault
    
    var phone = document.querySelector('#form > input:nth-child(1)').value
    var message = document.querySelector('#form > input:nth-child(2)').value
    
    var link = 'https://sms.ru/sms/send?api_id=F3020000-849F-0968-4E1D-E08B296F0114&to=79781302164&msg=' + phone + message + '&json=1'

}

Form.addEventListener('submit', handleSubmit)
    
