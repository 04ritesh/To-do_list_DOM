const inputbox=document.getElementById("input-box");
const lck=document.getElementById("list-container");

 function Adddetails(){
if(inputbox.value==''){
    alert("please write something");
}
else{
    let li=document.createElement("li");
    li.innerHTML=inputbox.value;
   lck.appendChild(li);
   let span=document.createElement("span");
   span.innerHTML="\u00d7";
   li.appendChild(span);
}
inputbox.value="";
}
lck.addEventListener("click",function(e){
    if(e.target.tagName==("LI")){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName="SPAN"){
  e.target.parentElement.remove();
    }
},false)