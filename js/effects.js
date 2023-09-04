gsap.to("nav", {
    backgroundColor: "#000",
    duration:0.5,
    height: "10vh",
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

  gsap.to(".wesitename", {
    backgroundImage:"linear-gradient(to right, rgb(0, 0, 0)40% , black)",
    // backgroundColor: "#000",
    scrollTrigger: {
      trigger: ".wesitename",
      scroller: "body",
      // markers: true,
      start: "top -1%",
      end: "top -1%",
      scrub: 2,
    },
  });