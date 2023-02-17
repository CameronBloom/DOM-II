import './less/index.less'

// Your code goes here!
let konamiCode = [];

const nodeNavLinks = document.querySelectorAll(".nav-link");
const arrNavLinks = Array.from(nodeNavLinks);

arrNavLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "lightblue";
    event.target.style.padding = "4px";
    event.target.style.border = "solid";
    event.target.style.borderWidth = "1px";
    event.target.style.borderColor = "pink";
    event.preventDefault();
  }) 
})

const nodeImages = document.querySelectorAll("img");
const arrImages = Array.from(nodeImages);

arrImages.forEach(image => {
  image.addEventListener("dblclick", (event) => {
    if (event.target.style.borderStyle === "solid") {
      event.target.style = "";
    } else {
      event.target.style.border = "solid";
      event.target.style.borderWidth = "1px";
      event.target.style.borderColor = "pink";
    }
  }) 
})

const docTitle = document.querySelector("h1");
const docBody = document.querySelector("body");
docBody.addEventListener("keydown", (event) => {
  // up up down down left right left right b a enter
  if (konamiCode.join('') === "uuddlrlrba" && event.key === "Enter" ||
  konamiCode.join('') !== "uuddlrlrba") {

    if (event.key === "ArrowUp") {

      if (konamiCode.join('') === "" || konamiCode.join('') === "u") {
        konamiCode.push("u"); 
      } else {
        konamiCode = [];
      }

    } else if (event.key === "ArrowDown") {
      
      if (konamiCode.join('') === "uu" || konamiCode.join('') === "uud") {
        konamiCode.push("d"); 
      } else {
        konamiCode = [];
      }
      
    } else if (event.key === "ArrowLeft") {
      if (konamiCode.join('') === "uudd" || konamiCode.join('') === "uuddlr") {
        konamiCode.push("l"); 
      } else {
        konamiCode = [];
      }
    } else if (event.key === "ArrowRight") {
      if (konamiCode.join('') === "uuddl" || konamiCode.join('') === "uuddlrl") {
        konamiCode.push("r"); 
      } else {
        konamiCode = [];
      }
    } else if (event.key === "b" || event.key === "B") {
      if (konamiCode.join('') === "uuddlrlr") {
        konamiCode.push("b"); 
      } else {
        konamiCode = [];
      }
    } else if (event.key === "a" || event.key === "A") {
      if (konamiCode.join('') === "uuddlrlrb") {
        konamiCode.push("a"); 
      } else {
        konamiCode = [];
      }
    } else if (event.key === "Enter") {
      if (konamiCode.join('') === "uuddlrlrba") {
        console.log(`KONAMI CODE ACTIVATED`); 
        
        docTitle.textContent = "- Konami Code Activated -" 
        docTitle.style.color = "pink"
      } else {
        konamiCode = [];
      }
    }
  }
}); 

window.addEventListener("load", () => {
  console.log("The page has loaded...");
}, false);

window.addEventListener("resize", () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let opa = Math.floor(Math.random() * 50) / 100;
  let bgColor = "rgb(" + x + "," + y + "," + z + ", "+ opa + ")";
  docBody.style.backgroundColor = bgColor;
}, false);

const docHeaderImage = document.querySelector("header img");
window.addEventListener("wheel", () => {
  docHeaderImage.style.width = "80%";
}, false);

arrImages.forEach(image => {
  image.addEventListener("mouseover", () => {
    console.log(image.alt);
  }) 
})