let btnOpen = document.getElementById('open');
let btnClose = document.getElementById('close');
let btnChangeSizeW = document.getElementById('changeSizeW');
let newWindow = '';

btnOpen.addEventListener('click',wOpen);
btnClose.addEventListener('click', wClose);
btnChangeSizeW.addEventListener('click', changeW);

/* Open the window this click */
function wOpen() {
    newWindow = window.open('https://youtube.com', '_blank', 'width = 600');
}

/* Close window */
function wClose() {
    newWindow.close();
}

/* Modify size window */
function changeW() {
    newWindow.resizeTo(250, 250);

}