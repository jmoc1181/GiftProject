// var menu = document.querySelector('#navbar-main')
// var menuPosition = menu.getBoundingClientRect().top;
// window.addEventListener('scroll', function() {
//     if (window.pageYOffset >= menuPosition) {
//         menu.style.position = 'fixed';
//         menu.style.top = '0px';
//     } else {
//         menu.style.position = 'static';
//         menu.style.top = '';
//     }
// });

var menu = document.querySelector('#js-navbar-main');
var menuPosition = menu.getBoundingClientRect();
var placeholder = document.createElement('div');
placeholder.style.width = menuPosition.width + 'px';
placeholder.style.height = menuPosition.height + 'px';
var isAdded = false;

window.addEventListener('scroll', function() {
    if (window.pageYOffset >= menuPosition.top && !isAdded) {
        menu.classList.add('sticky');
        menu.parentNode.insertBefore(placeholder, menu);
        isAdded = true;
    } else if (window.pageYOffset < menuPosition.top && isAdded) {
        menu.classList.remove('sticky');
        menu.parentNode.removeChild(placeholder);
        isAdded = false;
    }
});