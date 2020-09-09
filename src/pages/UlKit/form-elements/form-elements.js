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
import '../../../lib/input/input_filter-date-dropdown/input_filter-date-dropdown.js';
import '../../../lib/input/input_dropdown/input_dropdown.js';
import '../../../lib/input/input_subscription/input_subscription.js';
