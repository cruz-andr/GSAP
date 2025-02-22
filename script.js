//script.js
// Animation sequence for the loading screen
function startLoader() {
    const mainTl = gsap.timeline();

    // Initial page fade in
    mainTl.fromTo('body', 
        {
            opacity: 0
        },
        {
            opacity: 1,
            duration: 1,
            ease: "power2.inOut"
        }
    )

    // Stage 1: BIG IMPACT slam in
    mainTl.fromTo('#stage1', 
        {
            opacity: 0,
            y: -50,
            scale: 1.5
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "bounce.out"
        }
    )
    .to('#stage1', {
        opacity: 0,
        duration: 0,
        delay: .3
    })

    // Stage 2: Smaller BIG IMPACT + BIIIIG FLAVORS
    .to('#stage2-impact', {
        opacity: 1,
        y: '-100px',
        duration: 0,
    })
    .fromTo('#stage2-flavors',
        {
            opacity: 0,
            y: -50,
            scale: 1.5
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "bounce.out"
        }
    )
    .to(['#stage2-impact', '#stage2-flavors'], {
        opacity: 0,
        duration: 0,
        delay: .3
    })

    // Stage 3: Smallest BIG IMPACT + Small BIG FLAVORS + EAT UP
    .to(['#stage3-impact'], {
        opacity: 1,
        y: '-100px',
        duration: 0
    })
    .to('#stage3-flavors', {
        opacity: 1,
        y: '-100px',
        duration: 0
    })
    .fromTo('#stage3-eatup',
        {
            opacity: 0,
            y: -100,
            scale: 2
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "bounce.out"
        }
    )
    
    // BOWERY text animation
    .to('.bowery-container', {
        opacity: 1,
        duration: 0.1
    })
    .fromTo('.bowery-text span', {
        opacity: 0,
        x: 98,
        y: 34,
        rotation: 28,
    }, {
        opacity: 1,
        x: (i) => [-97/2, -63/2, -15/2, 30/2, 65/2, 98/2][i],
        y: (i) => [35/2, 15/2, 5/2, 5/2, 15/2, 34/2][i],
        rotation: (i) => [-26, -18, -6, 8, 20, 28][i],
        duration: .8,
        stagger: 0.13,
        ease: "none.out",
        delay: .5
    })

    // Final wipe with bars
    .to('.bar1', {
        height: "0",
        duration: 0.5,
        ease: "power2.inOut"
    }, "bars")
    .to('.bar2', {
        height: "100vh",
        y: "100%",
        duration: .5,
        ease: "power2.inOut"
    }, "bars")
    .to(['#stage3-impact', '#stage3-flavors', '#stage3-eatup'], {
        opacity: 0,
        duration: 0
    }, "-=0.4")
    .to('.bowery-text span', {
        color: "#ffffff"
    }, "-=.3")
    .fromTo('.leaf-container', {
        opacity: 0,
        y: -100
    }, {
        opacity: 1,
        y: 0,
        duration: .3,
        ease: "power2.out"
    }, "-=.8")
    .fromTo('.header', {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        duration: .3,
        ease: "power2.out"
    }, "-=1.3")
    .to(".overlay", 1.5, {
        opacity: 0,
        ease: "power4.inOut",
        zIndex: -1,
    });
}

// Start the animation when the page loads
window.addEventListener('load', startLoader);