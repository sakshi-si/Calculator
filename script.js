let display=document.getElementById("display");
let mybtn=document.querySelectorAll("button");
let currentdisplay="";

for(let item of mybtn){
    item.addEventListener("click",(e)=>{
        mybtntext=e.target.innerText;
        //console.log(mybtntext);

        if(mybtntext=="C"){
            currentdisplay="";
            display.value=currentdisplay;
        }
        else if(mybtntext=="="){
            display.value=eval(currentdisplay);
            //2+3*5/400
        }
        else{
            currentdisplay=currentdisplay+mybtntext;
            display.value=currentdisplay;
        }
    })

}