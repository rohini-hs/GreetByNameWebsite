//letting window know there is a init function
"use strict";

window.onload = init;

//call init function
function init()
{
    let objgreetbtn = document.getElementById("greetUserBtn");

    //let botton know there is a event function later
    objgreetbtn.onclick = onGreetUserBtnClicked;

}

//define onGreetUserBtnClicked function.
function onGreetUserBtnClicked(){
    let objNameID = document.getElementById("nameField"); 

    //read the name
    let newname = objNameID.value;

    //add to a string
    let stringmsg = "Hello and Welcome :" + newname;

    //find the message Tag
    let messageDev = document.getElementById("messageDiv");
    messageDev.innerHTML = stringmsg;
    
}

