
// let a=["basu" ,"sagar","sawan","sakshi"]; 

// // let c=document.getElementById("boss"); 
// // c.onclick=tellname();
// function tellname( )
// {let n= Math.random()*4;  
// n=Number.parseInt(n);
//   let c=document.getElementById("demo")
//    c.innerHTML=a[n];
// }  




// var img = document.createElement("img");

// img.src ="https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png";

// var src = document.getElementById("coin");

// src.appendChild(img);

//  

// button1.addEventListener("click" , function(e) {
// alert("button1 clicked"); 


// })
// button2.addEventListener("click" , function(e) {
//     alert("button2 clicked"); 
    
    
//     }) 

//     button3.addEventListener("click" , function(e) {
    
//     window .location="https://www.google.co.in/webhp";


//     })
//     button4.addEventListener("click" , function(e) {
    
//         window .location="https://facebook.com/webhp";
    
    
//         })
//         button5.addEventListener("click" , function(e) {
    
//             window .location="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den";
        
        
//             })

let k; 

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


let t=0;


function myfunction2(){
    t++;

    if(t==1) 
    {let m=getRandomArbitrary(30,50); 
    m=Number.parseInt(m);
     let i=0;
     i=Number.parseInt(i);
    
     k=setInterval(async function(){
         win.innerHTML="FLIPPING ";
         toss.innerHTML="" ;
         console.log("")
        ++i;
        if(i===m)
        {
        
             myfunction()
        }
        
        document.querySelector("#krishna").classList.toggle("tail");

},301)  } 

if(t>1)
{   
    myfunction();
   
}

}






function myfunction() {
    t=0;
     clearInterval(k);
 if(krishna.classList.contains("tail"))
 {
    win.innerHTML="Head";
 }
 else
 {
    win.innerHTML="Tail";

 }
     
  }



  


