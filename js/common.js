$(document).ready(function(){
  $('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  });
});
$(document).ready(function(){

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
});

jQuery(function($){
    $("#date").mask("99/99/9999");
    $("#phone").mask("(999) 999-9999");
    $("#tin").mask("99-9999999");
    $("#ssn").mask("999-99-9999");
 });

var Form = document.querySelector('#form')
Form.addEventListener('submit', handleSubmit)


function handleSubmit(event){
  event.preventDefault()
  
  var phone = document.querySelector('#form > input:nth-child(1)').value
  var message = document.querySelector('#form > input:nth-child(2)').value
  var link = 'https://sms.ru/sms/send?api_id=B24D65B18-B032-B62D-594E-1F7BBC7FF7D7&to=79788188913&msg=' + phone + message + '&json=1'
  // 1. Создаём новый объект XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
  xhr.open('GET', link);

  // 3. Отсылаем запрос
  xhr.send();

  xhr.onreadystatechange = function(){
    if (xhr.readyState !== 4) return

    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status == 200) {
      // обработать ошибку
      alert( "Что-то пошло не так. Попробуйте позже." ); // пример вывода: 404: Not Found
    } else {
      // вывести результат
      alert( "Спасибо ,что обратились ко мне. В ближайшее время Я Вам перезвоню." ); // responseText -- текст ответа.
    }
  }
}
