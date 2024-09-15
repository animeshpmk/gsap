/*gsap.to("#box",{
    x:1000,
    rotate:360,
    backgroundColor:"blue",
    duration :2,
    delay:1
})*//*
gsap.from("#box",{
    x:1000,
    rotate:360,
    backgroundColor:"blue",
    duration :2,
    delay:1
})*/
//gsap timeline

/*var tl = gsap.timeline();
tl.to("#box1",{
    x:1200,
    rotate:360,
    scale:0.5,
    duration:2
})
tl.to("#box2",{          
    x:1200,
    rotate:360,
    scale:0.5,
    duration:2
})
tl.to("#box3",{
    x:1200,
    rotate:360,
    scale:0.5,
    duration:2
})*/

//gsap Project
gsap.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.8,
    duration:0.5,
    stagger:0.08
})
gsap.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4
})
gsap.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.6
})
gsap.from("#footer",{
    y:50,
    opacity:0,
    duration:0.5,
    stagger:0.5
})

