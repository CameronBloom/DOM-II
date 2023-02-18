import './less/index.less'

// Your code goes here!
// declarations
let konamiCode = [];
const docTitle = document.querySelector("h1");


// 1. "load" event
window.addEventListener("load", (event) => {
  console.log(`event type: ${event.type}`);
}, false);

// 2. "copy" event
window.addEventListener("copy", (event) => {
  console.log(`event type: ${event.type}`);
  // readText() returns a promise
  navigator.clipboard.readText()
    .then(text => {
      console.log(text);
    })
});

// 3. "click" event
document.body.addEventListener("click", (event) => {
  console.log(`event type: ${event.type}`);
  if (event.target.classList.contains("mirror")) {
    event.target.classList.toggle("mirror")
    event.target.style.transform = "rotateY(0deg)";
    event.target.style.transition = "transform";
    event.target.style.transitionDuration = "0.5s";
    event.target.style.transitionTimingFunction = "ease";
  } else {
    event.target.classList.toggle("mirror")
    event.target.style.transform = "rotateY(180deg)";
    event.target.style.transition = "transform";
    event.target.style.transitionDuration = "0.5s";
    event.target.style.transitionTimingFunction = "ease";
  }
});

// 4. "dblclick" event
document.body.addEventListener("dblclick", (event) => {
  console.log(`event type: ${event.type}`);
  event.target.innerHTML = ""
})

// 5. "keydown" event
window.addEventListener("keydown", (event) => {
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
        console.log(`event type: ${event.type}`);
        docTitle.textContent = "- Konami Code Activated -" 
        docTitle.style.color = "pink"

      } else {
        konamiCode = [];
      }
    }
  }
}); 

// 6. "mousemove" event
let enableMouseMoveCall = true;
document.body.addEventListener("mousemove", (event) => {
  if (!enableMouseMoveCall) return;
  enableMouseMoveCall = false;
  console.log(`event type: ${event.type} (throttling for 30 seconds)`);
  const { clientX, clientY } = event
  console.log(`mouse is at ${clientX}, ${clientY}`);
  setTimeout(() => enableMouseMoveCall = true, 30000)
});

// 7. "mouseenter" event
// 8. "mouseleave" event
const docDestinations = document.querySelectorAll(".destination");
// const arrDestinations = Array.from(docDestinations);
for (let destination of docDestinations) {
  console.log(destination);
  destination.addEventListener("mouseenter", () => { 
    destination.style.color = "pink";
    destination.style.backgroundColor = "black";
    destination.style.fontWeight = "bold";
    destination.style.textAlign = "center";
    destination.style.border = "solid 1px black";
    destination.style.padding = "4px";
  });
  destination.addEventListener("mouseleave", () => {
    setTimeout(() => {
      destination.style.color = "black";
      destination.style.backgroundColor = "white";
      destination.style.fontWeight = "initial";
    }, 100);
  })
}

// additional events
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

const docBody = document.querySelector("body");

docBody.addEventListener("keyup", () => {
  console.log(`You just released a key into the wild...`);
});

docBody.addEventListener("cut", () => {
  console.log(`You just tried to cut some text...`);
});

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