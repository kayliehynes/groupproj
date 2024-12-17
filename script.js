let whoImg = document.getElementById("whoImg");
let whatImg = document.getElementById("whatImg");
let helpImg = document.getElementById("helpImg");

let images3A = ["a1.jpg", "a2.jpg", "a3.jpg"];
let images3B = ["b1.jpg", "b2.jpg", "b3.jpg"];
let images3C = ["c1.jpg", "c2.jpg", "c3.jpg"];

function loopList(imageElement, list) {
  let index = 0;

  setInterval(() => {
    imageElement.src = list[index];
    index = (index + 1) % list.length;
  }, 3000);
}

loopList(whoImg, images3A);
loopList(whatImg, images3B);
loopList(helpImg, images3C);
