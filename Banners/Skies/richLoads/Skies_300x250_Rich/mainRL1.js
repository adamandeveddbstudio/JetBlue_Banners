var tl;
var tl2;
var container = myFT.$("#main_container");
var default_exit = myFT.$("#default_exit");

// var myVid=myFT.$("#video1");
var clickTag1_url = "";
// var vid_time_triggered=false;

//
default_exit.on('click', function () {
  myFT.clickTag(1, clickTag1_url)
})
// wait for instantads to load before initializing creative animation
myFT.on('instantads', function () {

  clickTag1_url = myFT.instantAds.clickTag1_url;

})

init()
function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });
  tl.set(["#bgImg"], { rotation: 0.1, });

  tl.addLabel('frame1', 0)
    .to('#copyFrame1', 1, { autoAlpha: 1,y:-48, ease: Power1.easeInOut }, 'frame1')
    // .to('#h1', 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, 'frame1+=2')

  tl.addLabel('frame2', 0.5)
    .to('#copy2', 0.5, { autoAlpha: 1,y:65, ease: Power1.easeOutIn }, 'frame2+=0.5')
    .to('#copy3', 0.5, { autoAlpha: 1,y:-31, ease: Power1.easeInOut }, 'frame2+=1')

  tl.addLabel('frame3', 4)
    .to('#Aqcc', 1, { autoAlpha: 0,ease: Power1.easeInOut }, 'frame3+=0.5')
    .to('#copy1,#copy2,#copy3', 1, { autoAlpha: 0, ease: Power1.easeInOut }, 'frame3+=0.5')
    .to('#copyFrame2', 0.5, { autoAlpha: 1,y:-20, ease: Power1.easeInOut }, 'frame3+=1.5')
  tl.addLabel('frame4', 7)
    .to('#frame4', 1, { y:-240, ease: Power1.easeInOut }, 'frame4+=0.5')
    .to('#shine1', 1, { autoAlpha: 1, x:200,y:-89 }, 'frame4+=1.5');
  // tl.addLabel('frame3', 4)
  //   .to('#frame3', 1, { y:-240, ease: Power1.easeInOut }, 'frame3+=0.5')
  //   .to('#shine1', 1, { autoAlpha: 1, x:200,y:-89 }, 'frame3+=1.5');
  // tl.addLabel('frame4', 12)
  //   .to(["#h3, #bgImg, #card, #term, #logo"], 0.5, { autoAlpha: 0, ease: Power1.easeInOut }, "frame4")
  //   .to('#h4', 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame4+=0.5")
    // .to('#logo', 0, { x: -198, y: -2, ease: Power1.easeInOut }, "<")
    // .to('#card1,#cta,#logo', 0.5, { autoAlpha: 1, ease: Power1.easeInOut }, "frame4+=1")
    // .to('#shine1', 1, { autoAlpha: 1, backgroundPosition: '230px 50px' });

}

function setRollover() {
  document.getElementById('default_exit').addEventListener('mouseover', defaultOver, false);
  document.getElementById('default_exit').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
  TweenMax.to('#cta', 0.15, { scale: 1.1, ease: Power1.easeInOut })
}

function defaultOut() {
  TweenMax.to('#cta', 0.15, { scale: 1, ease: Power1.easeInOut })
}

function init() {

  tl = new TimelineMax();

  animate();
  setRollover();

}
