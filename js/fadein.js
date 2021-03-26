

const animatedTags = document.querySelectorAll("nav a, div img, h1, h2, p, .button");

animatedTags.forEach(tag =>{
  tag.style.opacity = 0;
})

const fadeIn = function(){


  let delay = 0.1;

  //check all tags and see if they are on window
animatedTags.forEach( tag => {
    const tagTop = tag.getBoundingClientRect().top;
    const tagBottom = tag.getBoundingClientRect().bottom;
    
    if(tagTop < window.innerHeight && tagBottom > 0){
      tag.style.animation = `fadein 1s ${delay}s both`;
      delay = delay + 0.05
    }else{
      tag.style.opacity = 0;
      tag.style.animation = "";
    }
  })
}





//run on load

fadeIn();

//run when scrolling
document.addEventListener("scroll", function(){
  fadeIn();
})

//run when resizing
window.addEventListener("resize", function(){
  fadeIn();
})