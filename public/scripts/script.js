gsap.registerEffect({
    name: "fade",
    extendTimeline: true,
    defaults: { duration: 2 },
    effect: (targets, { duration }) => {
        return gsap.to(targets, { 
            duration, 
            opacity: 0, 
            display: 'none' 
        });
    }
});
const timeline = gsap.timeline({
    defaults: {
        duration: 2,
        ease: 'elastic.out'
    }
});

timeline.to(".box",    { rotation: 10, x: '25vw' })
    .to(".boxone", { rotation: 20, x: '50vw' }, "-=0.45")
    .to(".boxtwo", { rotation: 30, x: '75vw', ease: 'expo.out' }, "-=0.75")
    .fade(".box, .boxone, .boxtwo")
;