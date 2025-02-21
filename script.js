//script.js
// Animation sequence for the loading screen
function startLoader() {
    const mainTl = gsap.timeline();

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
    .to('.bowery-text span', {
        opacity: 1,
        x: 0,
        rotate: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out"
    })

    // Final wipe with bars
    .to('.bar1, .bar2', {
        height: "100vh",
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2
    }, "+=1")
    .to(['#stage3-impact', '#stage3-flavors', '#stage3-eatup'], {
        opacity: 0,
        duration: 0.5
    }, "-=1")
    .to('.bar1, .bar2', {
        y: "100%",
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2
    });
}

// Start the animation when the page loads
window.addEventListener('load', startLoader);