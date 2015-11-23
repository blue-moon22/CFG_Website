// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form1').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc1').style.display = "block";
}
function div_show() {
document.getElementById('abc2').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc1').style.display = "none";
}
function div_hide(){
document.getElementById('abc2').style.display = "none";
}