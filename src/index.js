// JS - 
// import './js/';
//import './pages/page.js';
import './pages/UlKit/form-elements/form-elements.js';


import $ from 'jquery';
global.jQuery = $;
global.$ = $;
global.jQuery = global.$ = $;
window.$ = window.jQuery = $;
import 'jquery/dist/jquery.min.js'

// SCSS
import './index.scss';
// PUG 
//import './index.pug';

//require('jquery-ui/ui/widgets/slider');
//$('#id').slider();

// Выпадающее меню со счетчиком 
import './lib/item-quantity-dropdownRoom/item-quantity-dropdownRoom.js';
import './lib/item-quantity-dropdownGuest/item-quantity-dropdownGuest.js';


;
// Узнаем размер шрифта браузера
/* Для свойств, названия которых состоят из нескольких слов, используется вотТакаяЗапись:
- background-color => backgroundColor
- z-index => zIndex
- border-left-width => borderLeftWidth

Например:
- element.zIndex = 10000; 
Изменить размер
el.style.fontSize = (fontSize + 1) + 'px';*/
onload = function testFontSize ()
{

console.log (getComputedStyle(document.body, '').fontSize);
}
