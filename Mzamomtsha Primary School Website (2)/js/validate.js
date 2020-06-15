var name=document.getElementById("fname")
var surname=document.getElementById("sname")
var contact=document.getElementById("cnumber")
var mail=document.getElementById("email")
const form=document.getElementById("form")
const error=document.getElementById("error")

form.addEventListener('submit',(e)=>){
let message=[]
if(name.value===""){
  message.push("Please ensure all fields are filled in");
}
if(contact.length<10){
message.push("Please ensure your cellphone number is 10 digits long");

}

if(surname.value===""){
message.push("Please ensure your cellphone number is 10 digits long");

}
if(mail.value.indexOf("@")>-1){
  alert("Application received");
else{
  message.push("Please enter a correct email address");
}
}
if (message.length>0){
  e.preventDefault()
  errorElement.innerText=message.join(",")
}


function changeColor(newColor){
  var elem=document.getElementById('navbar');
  elem.style.changeColor=newColor;
}
