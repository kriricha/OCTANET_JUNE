const inputBox=document.getElementById("myinput");
const listcontainer=document.getElementById("list-container");
function addtask(){
    if(inputBox.value==""){
      alert("you must write something");
    }
    else{
      let li=document.createElement("li");
      li.innerHTML=inputBox.value;
      listcontainer.appendChild(li);
      let span=document.createElement("span");
      span.innerHTML="\u00d7";
      li.appendChild(span);
    }
    inputBox.value="";
    listcontainer.addEventListener("click",function(e){
      if(e.target.tagname=="li"){
        e.target.classList.toggle("checked");
      }
      else if(e.target.tagname=="span"){
        e.target.parentElement.remove();
      }

    },false);
}
