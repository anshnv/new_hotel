$(document).ready( function() {

/*   $('button[name="input__button"]').click(function() {
      alert('Кнопка была нажата');
      
      }); */
    /* var now = new Date();
    var today = now.getDate()  + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
    alert(today);*/
  $('#datePicker').val(today);
  document.getElementById('datePicker').valueAsDate = new Date.now();
  document.getElementById('datePicker').valueAsDate = new $.now();


});

import '../../input/input_dropdown/input_dropdown.js';
import '../../input/input_subscription/input_subscription.js';