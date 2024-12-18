// const elementTexts = document.getElementById("first").innerText;
//document.getElementById("first").innerText =
  "This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph. This is a new paragraph.";

const pElement = document.getElementById("first");
pElement.style.color = "red";
pElement.style.fontSize = "25px";

const element = document.getElementsByClassName("cool-class");//return object that is for html
console.log(element);

const elementsTwo = document.querySelectorAll(".cool-class")//returns array for javascript
console.log(elementsTwo);

elementsTwo.forEach((element) => {
  element.style.color = "orange"
})

const pElement2=document.querySelectorAll("p");
console.log(pElement2);


