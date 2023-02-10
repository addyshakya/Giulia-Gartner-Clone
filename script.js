gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// --- RED PANEL ---
gsap.from(".line-1", {
  scrollTrigger: {
    trigger: ".line-1",
    scroller: "#main",
    scrub: true,
    start: "top bottom",
    end: "top top",
    onUpdate: self => console.log(self.direction)
  },
  scaleX: 0,
  transformOrigin: "left center", 
  ease: "none"
});


// --- ORANGE PANEL ---
gsap.from(".line-2", {
  scrollTrigger: {
    trigger: ".orange",
    scroller: "#main",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleX: 0, 
  transformOrigin: "left center", 
  ease: "none"
});


// --- PURPLE/GREEN PANEL ---
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".purple",
      scroller: "#main",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    }
  });

tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
  .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
  .to(".purple", {backgroundColor: "#28a92b"}, 0);



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


document.querySelector("#imgg").addEventListener("mouseenter", function(){
    document.querySelector("#imgg").style.scale = 1.7
    document.querySelector("#imgg").style.rotate = "-10deg"
})

document.querySelector("#imgg").addEventListener("mouseleave", function(){
    document.querySelector("#imgg").style.scale = 1
    document.querySelector("#imgg").style.rotate = "0deg"
})

document.querySelector("#imgg2").addEventListener("mouseenter", function(){
    document.querySelector("#imgg2").style.scale = 1.7
    document.querySelector("#imgg2").style.rotate = "10deg"
})

document.querySelector("#imgg2").addEventListener("mouseleave", function(){
    document.querySelector("#imgg2").style.scale = 1
    document.querySelector("#imgg2").style.rotate = "0deg"
})

document.querySelector("#imgg3").addEventListener("mouseenter", function(){
    document.querySelector("#imgg3").style.scale = 1.7
    document.querySelector("#imgg3").style.rotate = "-10deg"
})

document.querySelector("#imgg3").addEventListener("mouseleave", function(){
    document.querySelector("#imgg3").style.scale = 1
    document.querySelector("#imgg3").style.rotate = "0deg"
})


gsap.to("#b1",{
  left:"-65vw",
  rotate:"-1deg",
  scrollTrigger:{
    trigger:"#b1",
    scroller:"#main",
    start:"top 90%",
    scrub:0.1
  }
})

gsap.to("#b2",{
  right:"-65vw",
  rotate:"1deg",
  scrollTrigger:{
    trigger:"#b2",
    scroller:"#main",
    start:"top 90%",
    scrub:0.1
  }
})

gsap.to("#b3",{
  left:"-65vw",
  rotate:"-1deg",
  scrollTrigger:{
    trigger:"#b3",
    scroller:"#main",
    start:"top 90%",
    scrub:0.1
  }
})

gsap.to("#b4",{
  right:"-65vw",
  rotate:"1deg",
  scrollTrigger:{
    trigger:"#b4",
    scroller:"#main",
    start:"top 90%",
    scrub:0.1
  }
})

document.querySelector("#photo").addEventListener("mouseenter", function(){
  document.querySelector("#getin").style.top = "-100%"
  document.querySelector("#clickcopy").style.top = "0%"
  document.querySelector("#copied").style.top = "100%"
 })

document.querySelector("#photo").addEventListener("mouseleave", function(){
  document.querySelector("#getin").style.top = "0%"
  document.querySelector("#clickcopy").style.top = "100%"
  document.querySelector("#copied").style.top = "200%"
})

document.querySelector("#photo").addEventListener("click", function(){
  document.querySelector("#getin").style.top = "-200%"
  document.querySelector("#clickcopy").style.top = "-100%"
  document.querySelector("#copied").style.top = "0%"
})

function abcd(){
  document.querySelector("#camera").addEventListener("click",function(){
  document.querySelector("#main").style.backgroundColor = "#E5E2ED"
  document.querySelector("#n3 #camera").style.color = "#1D4672"
  document.querySelector("#n2>h1").style.color = "#1D4672"
  document.querySelector("#n3 #in").style.color = "#1D4672"
  document.querySelector("#n3 #e").style.color = "#1D4672"
  document.querySelector("#n3 #camera").style.borderColor = "#1D4672"
  document.querySelector("#n3 #in").style.borderColor = "#1D4672"
  document.querySelector("#n3 #e").style.borderColor = "#1D4672"
  document.querySelector("#n1 #s").style.color = "#1D4672"
  document.querySelector("#n1 #m").style.color = "#1D4672"
  document.querySelector("#n1 #a").style.color = "#1D4672"
  document.querySelector("#n1 #s").style.borderColor = "#1D4672"
  document.querySelector("#n1 #m").style.borderColor = "#1D4672"
  document.querySelector("#n1 #a").style.borderColor = "#1D4672"
  document.querySelector("#first").style.color = "#1D4672"
  document.querySelector("#second").style.color = "#1D4672"
  document.querySelector("#one").style.color = "#1D4672"
  document.querySelector("#two").style.color = "#1D4672"
  document.querySelector("#tiny3>h1").style.color = "#1D4672"
  document.querySelector("#story>h1").style.color = "#1D4672"
  document.querySelector("#story>button").style.color = "#1D4672"
  document.querySelector("#story>button").style.borderColor = "#1D4672"
  document.querySelector("#move>h2").style.color = "#1D4672"
  document.querySelector("#move>h1").style.color = "#1D4672"
  document.querySelector("#move>button").style.color = "#1D4672"
  document.querySelector("#move>button").style.borderColor = "#1D4672"
  document.querySelector("#move2>h2").style.color = "#1D4672"
  document.querySelector("#move2>h1").style.color = "#1D4672"
  document.querySelector("#move2>button").style.color = "#1D4672"
  document.querySelector("#move2>button").style.borderColor = "#1D4672"
  document.querySelector("#scotland>h2").style.color = "#1D4672"
  document.querySelector("#scotland>h1").style.color = "#1D4672"
  document.querySelector("#getin>h1").style.color = "#1D4672"
  document.querySelector("#clickcopy>h1").style.color = "#1D4672"
  document.querySelector("#copied>h1").style.color = "#1D4672"
  document.querySelector("#photo>h1").style.color = "#1D4672"
  document.querySelector("#photo>h1").style.color = "#1D4672"
  document.querySelector("#photo").style.borderColor = "#1D4672"
  document.querySelector("#btm1>h1").style.color = "#1D4672"
  document.querySelector("#btm3>h1").style.color = "#1D4672"
  document.querySelector("#btm2 #k").style.color = "#1D4672"
  document.querySelector("#btm2 #j").style.color = "#1D4672"
  document.querySelector("#btm2 #l").style.color = "#1D4672"
  document.querySelector("#btm2 #k").style.borderColor = "#1D4672"
  document.querySelector("#btm2 #j").style.borderColor = "#1D4672"
  document.querySelector("#btm2 #l").style.borderColor = "#1D4672"
})
}

abcd()

function dark(){
  document.querySelector("#n2>h1").addEventListener("click",function(){
    document.querySelector("#main").style.backgroundColor = "#141618"
    document.querySelector("#n3 #camera").style.color = "#fff"
    document.querySelector("#n2>h1").style.color = "#fff"
    document.querySelector("#n3 #in").style.color = "#fff"
    document.querySelector("#n3 #e").style.color = "#fff"
    document.querySelector("#n3 #camera").style.borderColor = "#fff"
    document.querySelector("#n3 #in").style.borderColor = "#fff"
    document.querySelector("#n3 #e").style.borderColor = "#fff"
    document.querySelector("#n1 #s").style.color = "#fff"
    document.querySelector("#n1 #m").style.color = "#fff"
    document.querySelector("#n1 #a").style.color = "#fff"
    document.querySelector("#n1 #s").style.borderColor = "#fff"
    document.querySelector("#n1 #m").style.borderColor = "#fff"
    document.querySelector("#n1 #a").style.borderColor = "#fff"
    document.querySelector("#first").style.color = "#fff"
    document.querySelector("#second").style.color = "#fff"
    document.querySelector("#one").style.color = "#fff"
    document.querySelector("#two").style.color = "#fff"
    document.querySelector("#tiny3>h1").style.color = "#fff"
    document.querySelector("#story>h1").style.color = "#fff"
    document.querySelector("#story>button").style.color = "#fff"
    document.querySelector("#story>button").style.borderColor = "#fff"
    document.querySelector("#move>h2").style.color = "#fff"
    document.querySelector("#move>h1").style.color = "#fff"
    document.querySelector("#move>button").style.color = "#fff"
    document.querySelector("#move>button").style.borderColor = "#fff"
    document.querySelector("#move2>h2").style.color = "#fff"
    document.querySelector("#move2>h1").style.color = "#fff"
    document.querySelector("#move2>button").style.color = "#fff"
    document.querySelector("#move2>button").style.borderColor = "#fff"
    document.querySelector("#scotland>h2").style.color = "#fff"
    document.querySelector("#scotland>h1").style.color = "#fff"
    document.querySelector("#getin>h1").style.color = "#fff"
    document.querySelector("#clickcopy>h1").style.color = "#fff"
    document.querySelector("#copied>h1").style.color = "#fff"
    document.querySelector("#photo>h1").style.color = "#fff"
    document.querySelector("#photo>h1").style.color = "#fff"
    document.querySelector("#photo").style.borderColor = "#fff"
    document.querySelector("#btm1>h1").style.color = "#fff"
    document.querySelector("#btm3>h1").style.color = "#fff"
    document.querySelector("#btm2 #k").style.color = "#fff"
    document.querySelector("#btm2 #j").style.color = "#fff"
    document.querySelector("#btm2 #l").style.color = "#fff"
    document.querySelector("#btm2 #k").style.borderColor = "#fff"
    document.querySelector("#btm2 #j").style.borderColor = "#fff"
    document.querySelector("#btm2 #l").style.borderColor = "#fff"
})
}

dark()