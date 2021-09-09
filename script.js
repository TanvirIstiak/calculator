 let buttons=document.querySelectorAll("button")
 let result=document.getElementById("show-result")
 

 for(let text of buttons){
     text.addEventListener("click",function (x) {
         let resultText= x.target.innerHTML
         if(resultText=="C"){
             return   result.innerHTML="";
            } else if(resultText=="="){
                return   result.innerHTML=eval(result.innerHTML) 
            } else if(resultText=="DEL"){
              return  result.innerHTML=result.innerHTML.substr(0,result.innerHTML.length-1)
            }
            result.innerHTML +=resultText;
            console.log(resultText);
        })
 }   







