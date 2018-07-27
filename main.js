function loadjson(file,callback) {
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function() {
		if(xhr.readyState ===4 && xhr.status===200	) {
			callback(xhr.responseText);
		}
	}
	xhr.send();
}
loadjson("data.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	basic(data.details); 
})

var main=document.querySelector(".main");
var left=document.createElement("div");
left.classList.add("left");
main.appendChild(left);
function basic(basicdetails){
var image1=document.createElement("img");
image1.src=basicdetails.image;
left.appendChild(image1);
var name=document.createElement("h3");
name.textContent=basicdetails.name;
left.appendChild(name);
var email=document.createElement("h3");
email.textContent=basicdetails.email;
left.appendChild(email);
var phone=document.createElement("h3");
phone.textContent=basicdetails.phone;
left.appendChild(phone);
} 

var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
function edu(education){
	var un=document.createElement("un");
	right.appendChild(un);
	for (var i = 0;i<education.length;i++) {
		var 1=document.createElement("li");
		