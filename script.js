let containerr=document.querySelector(".container");
let containerr1=document.querySelector(".container1");
let player1=document.querySelector(".player1");
let player2=document.querySelector(".player2");
let startBtn=document.getElementById("startBtn");
function test() {
    containerr.style.backgroundColor="red";
    
}
startBtn.onclick=function name(params) {
    containerr.innerHTML="";
   let n1=player1.value;
   let n2=player2.value;
   let width1=100/n1-0.2;
   let height1=100/n1-0.2;
   console.log(width1,height1);
   
   for (let index = 0; index < n1; index++) {
     containerr.innerHTML+=`
   
    
    <div class="chiled" style=width:${width1}%;height:${height1}% >o</div>
    `;

    for (let j = 0; j < n1-1; j++) {
         containerr.innerHTML+=`
   
    
    <div class="chiled" style=width:${width1 }%;height:${height1}%>x</div>
    
    `;
    }
    
   }
   
};


