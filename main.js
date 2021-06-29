

var buttonOpen = document.querySelector('.btn-open_js');
var buttonClose = document.querySelector('.btn-close_js');
var bg = document.querySelector('.bg_js');
var input = document.querySelector('.input_js');
var popup = document.querySelector('.popup_js');

function open () {
  popup.classList.remove('bg-wrapper_close');
  input.focus();
}

function close () {
  popup.classList.add('bg-wrapper_close');
  buttonOpen.focus();
}

buttonOpen.addEventListener('click', function() {
    popup.classList.remove('bg-wrapper_close');
    input.focus();
});

bg.addEventListener('click', function() {
  open();
});

bg.addEventListener('click', function() {
  close();
});

buttonClose.addEventListener('click', function() {
  close();
});

window.addEventListener('keydown', function(e) {
    var isOpen = !popup.classList.contains('bg-wrapper_close');
    if(e.code === 'Escape' && isOpen) {
      close();
    }
});