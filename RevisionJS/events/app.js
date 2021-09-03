let btnOpen = document.getElementById('open');
let btnClose = document.getElementById('close');
let newWindow = '';

btnOpen.addEventListener('click',wOpen);
btnClose.addEventListener('click', wClose);

/* Open the window this click */
function wOpen() {
    newWindow = window.open('https://youtube.com', '_blank', 'width = 600');
}

/* Close window */
function wClose() {
    newWindow.close();
}