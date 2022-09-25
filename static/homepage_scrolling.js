const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");
const ani_texts = document.getElementsByClassName('animation_text');

const frameCount = 115;
const currentFrame = index => (
  `./pill/${index.toString().padStart(4, '0')}.png`
  //`https://static.igem.wiki/teams/4214/wiki/home/0000/${index.toString().padStart(4, '0')}.png`
)   

const preloadImages = () => {
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i+1);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width=1920;
canvas.height=1080;
img.onload=function(){
  context.clearRect(0,0,canvas.width,canvas.height);
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.clearRect(0,0,canvas.width,canvas.height);
  context.drawImage(img, 0, 0);
}

function showText(textid) {
  for(var i = 0; i< ani_texts.length; i++) {
    ani_texts.item(i).style.opacity = '0';
  }
  
  document.getElementById(textid).style.opacity = "1";
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  
  
  if(frameIndex > 1 &&frameIndex <= 49 ) {
    showText('ani_text1');
  }

  if(frameIndex >49) {
    showText('ani_text2');
  }

  requestAnimationFrame(() => updateImage(frameIndex + 1))

  
});

preloadImages()


