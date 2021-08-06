let elements = document.getElementsByTagName('h1');
console.log("je suis :" + elements.length); //ok

let i = 0;
while(i < elements.length) {
    let test = elements.item(i);
    test.innerHTML = "Hi my name is ";
    i++;
}

let Elements = document.getElementsByTagName("p");
console.log("" + Elements.length); //ok

let secondI = 0;
while(secondI < Elements.length) {
    let secondP = Elements.item(secondI);
    secondP.innerHTML = "Hamabe Minami";
    secondI++;
}

