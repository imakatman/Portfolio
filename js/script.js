$(function () {

    var controller = new ScrollMagic.Controller();


    // ** landing_1 tween
    var landing_1 =  TweenMax.staggerFrom(
        "#h1 span", .6, {
            y: "-2%",
            ease: Linear.ease
        }, 0.3)

    // ** landing_1 scene
    var landing_1_scene = new ScrollMagic.Scene({
        triggerElement: "#about"
        , triggerHook: "onCenter"
        , // duration: "130%" // Only add duration parameter if you want the content to scroll in as the person scrolls through the page
    }).setPin("#about").setTween(landing_1).addTo(controller);

});
