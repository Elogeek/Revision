let avatarEls = document.getElementsByTagName("img");
console.log(avatarEls);

for(let i = 0; i < avatarEls.length; i++) {
    let element = avatarEls.item(i);
    console.log(element);
    element.style.height = 20 + "rem";
}


