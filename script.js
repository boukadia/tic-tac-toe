let container = document.querySelector(".container");
// let container1=document.querySelector(".container1");
let largeur = document.querySelector(".largeur");
let winningLength = document.querySelector(".winningLength");
let startBtn = document.getElementById("startBtn");
let counter = 0;
let resetBtn = document.getElementById("resetBtn");

function remplire(event) {
    // event.target.style.backgroundColor="red";
    // nombr=largeur.value;
    let nombr = parseInt(largeur.value);

    let c = 0;

   

    if (event.target.innerText == "") {
        if (counter % 2 == 0) {
            event.target.innerText = "O";
        } else {
            event.target.innerText = "X";
        }
        counter++;
    }
    // ==========

    let ct;
    let t=0;
    ct = 1;
    let x = 0;
    for (let i = 0; i < nombr * nombr; i+=nombr) {
        win=0
        if (i==nombr) {
r=nombr-1;
            for (let m = r+nombr-1; m < (nombr*nombr)-nombr+1; m+=nombr-1) {
                if (event.target.parentElement.children[r].innerText ==
                event.target.parentElement.children[m].innerText &&
                event.target.parentElement.children[i].innerText != "") {
                    if (ct<nombr) {
                        ct++;
                    

                }
            console.log("diago"+ct);

                if (ct==nombr) {
                    
                    t=4;
                    break
                }
            }
                
            }
            
        }


if (i==0) {
    for (let j = nombr+1; j < nombr * nombr; j+=nombr+1) {
            if (
                 ct<=nombr&&
                x + nombr + 1 < event.target.parentElement.children.length &&

                event.target.parentElement.children[i].innerText ==
                event.target.parentElement.children[j].innerText &&
                event.target.parentElement.children[i].innerText != ""
            ) {
                if (ct<nombr) {
                    
                    ct++;
                }
                if (ct==nombr) {
                     win=1;
                     break;
                }
            }
           else{
                continue;
            }
            console.log("diagonal"+ct);
            

            
            
        }
        
        
     if (win==1) {
            t=1;
            break;
        }
}
        
        

        ct=1;
        for (let k = i+1; k < i+nombr ; k++) {
            if ( ct<nombr&&
                event.target.parentElement.children[i].innerText ==
                event.target.parentElement.children[k].innerText &&
                event.target.parentElement.children[i].innerText != "" ) {
                    if (ct<nombr) {
                        
                        ct++;
                    }
                if (ct==nombr) {
        win=1;

                    
                }
               console.log("horisental "+ ct);
                
            }
            else{
                ct=1
                continue;
            }
            
            if (win==1) {
            t=2;
            break;
        }
            
        }

        
    }

    for (let i = 0; i < nombr; i++) {
    ct=1
       x=0;
    let win=0;
       for (let l = i+nombr; l < nombr*nombr; l+=nombr) {
       
        if (
                ct<nombr&&
                event.target.parentElement.children[i].innerText ==
                event.target.parentElement.children[l ].innerText &&
                event.target.parentElement.children[i].innerText != "") {
        

                ct++;
                  x = x + nombr
                if (ct==nombr) {
                    t=3;
        win=1;

                    
                }
              
                
            }
            
        
    }
        console.log(ct);

           if (win==1) {
            t=3;
            break;
        } 
        }

        console.log(ct);
        if (t==1) {
            console.log("win " +t);
            
        }
        if (t==2) {
            console.log("win" +t);
            
        }
        if (t==3) {
            console.log("win "+ t);
            
        }
        if (t==4) {
            console.log("win "+ t);
            
        }

  
}
resetBtn.onclick = function () {
    counter = 0;
    // console.log(counter);

    creationTabl();
};
function creationTabl() {
    counter = 0;
    container.innerHTML = "";
    let n1 = largeur.value;
    let winLength = winningLength.value;
    let width1 = 100 / n1;
    let height1 = 100 / n1;
    //    console.log(width1,height1);

    for (let index = 0; index < n1 * n1; index++) {
        container.innerHTML += `
   
    
    <div class="chiled" onclick="remplire(event)" style=width:${width1}%;height:${height1}% ></div>
    `;

        // for (let j = 0; j < n1-1; j++) {
        //      container.innerHTML+=`

        // <div class="chiled" onclick="remplire(event)" style=width:${width1 }%;height:${height1}%></div>

        // `;
        // }
    }
}
function testt(event) { }

// function tst(event) {
//     event.target.style.backgroundColor="red";
//     for (let index = 0; index < 3; index++) {
//         console.log(event.target.parentElement.children[index].innerText);

//     }
// }

// for (let index = 0; index < 8; index+=2) {
//     console.log(index);
    
    
// }