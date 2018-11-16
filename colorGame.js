var info = document.querySelector("#inf");
var boxicArr = document.querySelectorAll(".boxic");
var message = document.querySelector("#msg");
var head = document.querySelector(".head");
var newClr = document.querySelector("#newColor");
var colors = clrs(6);
var pickedClr = pckdClr(colors);

info.textContent = pickedClr;

{
for(var i = 0; i < colors.length; i++){
	boxicArr[i].style.backgroundColor = colors[i];}

for(var i = 0; i < boxicArr.length; i++){
	boxicArr[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor !== pickedClr){
			this.style.backgroundColor = "rgb(49, 58, 71)";
			message.textContent = "Try Again!"
		}
		else{
			message.textContent = "Correct!"
			head.style.backgroundColor = clickedColor;
			changeColors(clickedColor);
		}
	});
}
}

function randomClr(){
	var rc = Math.floor(Math.random()*256);
	var gc = Math.floor(Math.random()*256);
	var bc = Math.floor(Math.random()*256);
	 return "rgb(" + rc + ", " + gc + ", " + bc + ")";
}

function clrs(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomClr());
	}
	return arr;
}
function pckdClr(colors){
	return colors[Math.floor(Math.random()*colors.length)];
}
function changeColors(color){
	for(var i = 0; i < boxicArr.length; i++){
		boxicArr[i].style.backgroundColor = color;
	}
}
