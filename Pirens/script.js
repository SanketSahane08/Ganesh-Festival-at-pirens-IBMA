
let flag=0;

function controller(x)
{
   flag=flag+x;  
   slideshow(flag);
   console.log(x);
}
slideshow(flag);

function slideshow(num){
  let slides =document.getElementsByClassName('slide');
  for(let y of slides)
  {
    y.style.display="none";
  }
  if(num==-1)
  {
   num=(slides.length-1);
   flag=(slides.length-1)
  } 
  if(num==slides.length)
  {
    num=0;
    flag=0;
  }
  slides[num].style.display="block";
}
setInterval(controller,2000,1);