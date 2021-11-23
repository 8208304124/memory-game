let array=[1,2,3,1,2,3];
let cnt=0;
let s=0,f=0;
let score=document.getElementById("score");
let flip1=document.getElementById("hidden");
function shuffle(array)
{
   let len=array.length;
   let index;
   while(len!=0)
   {
     index=Math.floor(Math.random() * len);
    len--;
      [array[len],array[index]]=[array[index],array[len]];
      
   }
  
   return array;
}


function startl()
{
    let list="";
     s=0,f=0;
    shuffle(array);
    for(let i=0;i<6;i++)
    { 
       list +=` 
     <div class="container" onclick="checks()">
      <div class="card" onclick="flip(event,${i})">
        <div class="front">
         <img src="cover.jpg" class="card-cover">
         </div>
        <div class="back">
            <img src="${array[i]}.png" class="hiddens">
         </div>
       </div>
     </div>`;
    }
flip1.innerHTML=list;
}


function flip(event,i){
	var element = event.currentTarget;
	if (element.className === "card") {
      element.style.transform = "rotateY(180deg)";  
      element.classList.add("open");
  }
};
function flipback(){
	  
      let image=document.querySelectorAll(".open");
      for(let i=0;i<image.length;i++)
      {
       image[i].style.transform = "rotateY(0deg)";
       image[i].classList.remove("open");
       
      }
      f++;
      score.innerHTML=score.innerHTML+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspFailure :: "+f;
     
};
function checks()
{
  let image=document.querySelectorAll(".open");
  if(image.length===2){ 
  let c1=image[0],c2=image[1];
   
  if(c1.innerHTML===c2.innerHTML)
  {
    c1.classList.remove("open");
    c1.classList.add("valid");
    c2.classList.remove("open");
    c2.classList.add("valid");
   s++;
  }
  else{
    setTimeout(flipback,600);
     }
   score.innerHTML="Score :: "+s;  
}
  console.log(image);
}
         
