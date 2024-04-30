var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    // markers:true,
    // start:"30% 100%",
    start:"0% 100%",
    // 1st value is value of div, div ka 50% pe position fixed
    // 2nd value is screen value, this value will be fixed
    end:"50% 50%",
    scrub:2,
}})

tl.to("#fanta",{
    top:"120%",
    left:"0%",
},orange)

tl.to("#orange-cut",{
    top:"160%",
    left:"20%"
},orange)

tl.to("#orange",{
    top:"160%",
    right:"20%"
},orange)

tl.to("#leaf",{
    top:"110%",
    left:"80%",
    // transform:"rotateX(180deg)",
    rotateX:"200deg",
},orange)

tl.to("#leaf2",{
    top:"110%",
    left:"0%",
    rotateX:"200deg",
},orange)



// var tl2 = gsap.timeline({scrollTrigger:{
//     trigger:".three",
//     markers:true,
//     start:"20% 100%",
//     end:"70% 50%",
//     scrub:2,
// }})

// tl2.from(".lemon1",{
//     // rotate:"-90deg",
//     left:"15%",
//     // zIndex:"10"
//     // top:"10%",
// },"can")

// tl2.from(".lemon2",{
//     // rotate:"-90deg",
//     left:"15%",
//     // zIndex:"10"
//     // top:"10%",
// },"can")

// // tl2.from("#cocacola",{
// //     rotate:"-90deg",
// //     left:"130%",
// //     zIndex:"10"
// //     // top:"10%",
// // },"can")


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')

tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')

tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')

tl2.to("#fanta",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 'ca')