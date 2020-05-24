import 'air-datepicker/dist/js/datepicker.min.js';
import 'air-datepicker/dist/css/datepicker.min.css';

$('#minMaxExample').datepicker({
    // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date()
})