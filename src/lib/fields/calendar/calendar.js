import 'air-datepicker/dist/js/datepicker.min.js';
import 'air-datepicker/dist/css/datepicker.min.css';

$(function(){
	var date = new Date();
	date.setDate(date.getDate());
 
	$('#my-calendar').datepicker({
		minDate: date
	}); 
});
$(function(){
 $('#my-calendar').datepicker({
    // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
     // minDate: new Date()
     // startDate: new Date()

})
})

$(function(){
 $('#my-calendar')._clearDate(this)})
 
