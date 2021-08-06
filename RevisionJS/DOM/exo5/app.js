let catPic = document.getElementById("cat-pic");
let stashePic = document.getElementById("mustache-pic");
let onCatClick = document.getElementById("cat-pic");

onCatClick.addEventListener("click", function(e) {
    let x = e.clientX;
    let y = e.clientY;
    stashePic.style.left = x + "px";
    stashePic.style.top = y + "px";
});
