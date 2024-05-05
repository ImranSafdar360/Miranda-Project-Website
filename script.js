const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline();

tl.to("#page1",{
    y:"100%",
    scale:0.5,
    delay:-5,
    duration:1
})
tl.to("#page1",{
    y:"10%",
    duration:1,
    delay:1
})
tl.to("#page1",{
    y:"0%",
    rotate:360,
    scale:1,
    duration:1
})
