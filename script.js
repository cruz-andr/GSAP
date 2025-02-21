//script.js
// Animation sequence for the loading screen
function startLoader() {
    const mainTl = gsap.timeline();

    // Stage 1: BIG IMPACT slam in
    mainTl.to('#stage1', {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.in"
    })
    .to('#stage1', {
        opacity: 0,
        duration: 0,
        delay: 1 // Let it sit for 1 seconds
    })

    // Stage 2: Smaller BIG IMPACT + BIIIIG FLAVORS
    .to('#stage2-impact', {
        opacity: 1,
        y: '-150px',
        duration: 0,
    })
    .to('#stage2-flavors', {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.in"
    })
    .to(['#stage2-impact', '#stage2-flavors'], {
        opacity: 0,
        duration: 0,
        delay: 1 // Let it sit for 1 seconds
    })

    // Stage 3: Smallest BIG IMPACT + Small BIIIIG FLAVORS + EAT UP
    .to(['#stage3-impact', '#stage3-flavors'], {
        opacity: 1,
        duration: 0
    })
    .to('#stage3-eatup', {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.in"
    })
    .to('.bowery-container', {
        opacity: 1,
        duration: 0.1
    })
    
    
    // BOWERY text animation
    .to('.bowery-text span', {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out"
    })

    // Final wipe with bars
    .to('.bar1, .bar2', {
        height: "100vh",
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2
    })
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