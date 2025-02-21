function startLoader() {
  let countElement = document.querySelector(".counter");
  let currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if(currentValue > 100) {
      currentValue = 100;
    }

    countElement.textContent = currentValue;

    let delay = Math.floor(Math.random() * 200) + 50;

    setTimeout(updateCounter, delay);
  }

  updateCounter();
}

startLoader();

gsap.to(".counter", 1.5, {
  delay: 3.5,
  opacity: 0,
  zIndex: -1,
});

gsap.to(".bar1", 1.5, {
  delay: 3.5,
  height: 0,
//   stagger: {
//     amount: 0.5,
//   },
  ease: "power4.inOut",
  zIndex: -1,
});
gsap.to(".bar2", 1.5, {
    delay: 3.8,
    y: "100vh", // Moves the element down by the viewport height
    ease: "power4.inOut",
    zIndex: -1
  });

gsap.to(".overlay", 1.5, {
  delay: 4.3,
  opacity: 0,
  ease: "power4.inOut",
  zIndex: -1,
});

gsap.from(".h1", 1.5,{
delay: 4,
y: 700,
stagger: {
  amount: 0.5,
},
ease: "power4.inOut",
});

gsap.from(".hero", 1.5,{
delay: 4.5,
y: 400,
stagger: {
  amount: 0.5,
},
ease: "power4.inOut",
});
