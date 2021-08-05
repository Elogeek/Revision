
let element = document.getElementById("test");
element.style.color = "white";

/* Modify the colors, and the widths of the p */
let element1 = document.getElementById("test");
element1.style.backgroundColor = "darkorange";
element1.style.width = "55rem";
element1.style.animation = "20s";

let element2 = document.getElementById("test2");
element2.style.backgroundColor = "yellowgreen";
element2.style.width = "550px";
element2.style.animation = "13s";

let element3 = document.getElementById("test3");
element3.style.backgroundColor = "paleturquoise";
element3.style.width = "25rem";

let element4 = document.getElementById("test4");
element4.style.backgroundColor = "paleturquoise";
element4.style.width = "25rem";

let element5 = document.getElementById("test5");
element5.style.backgroundColor = "paleturquoise";
element5.style.width = "35rem";
element5.style.fontWeight = "bold";

/* Change direction the spans */
let element6 = document.getElementById("spanTest");
element6.style.direction = "right";

/* Add text in the links */
let element7 = document.getElementById("lien1"); {
    console.log("a href = #");
}

element7.innerText = "ICI!";
element7.style.cssText = `
    color:white;
    font-size:xxx-large;
`;

let element8 = document.getElementById("lien2"); {
    console.log("a href = #");
}

element8.innerText = "COUCOU!";

let element9 = document.getElementById("lien3"); {
    console.log("a href = #");
}

element9.innerText = "GO!";

let element10 = document.getElementById("lien4"); {
    console.log("a hre = #");
}

element10.innerText = "AH!";

let element11 = document.getElementById("lien5"); {
    console.log("a href = #");
}

element11.innerText = "ICI!";

/* Delete span */
let span = document.getElementById("delete");
span.remove();

/* Add message delete an message */
let span2 = document.createElement("span");
span2.id = "span2";
span2.innerHTML = "Le premier span est supprimé, moi je viens d'être créer en JS!";
span2.style.cssText = `
    color: white;
    font-size: 10rem;
`;
document.body.appendChild(span2);