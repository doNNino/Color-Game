var squares = 6;
var info = document.querySelector("#inf");
var boxicArr = document.querySelectorAll(".boxic");
var message = document.querySelector("#msg");
var head = document.querySelector(".head");
var newColor = document.querySelector("#newColor");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var colors = clrs(squares);
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

easy.addEventListener("click", function(){
	squares = 3;
	colors = clrs(squares);
	pickedClr = pckdClr(colors);
	for(var i = 0; i < colors.length; i++){
	boxicArr[i].style.backgroundColor = colors[i];
	easy.classList.add("active");
	hard.classList.remove("active");
}
	for(var i = 0; i < 3; i++){
		boxicArr[colors.length+i].style.display = "none";
	}
});

hard.addEventListener("click", function(){
 squares = 6;
 colors = clrs(squares);
	pickedClr = pckdClr(colors);
	easy.classList.remove("active");
	hard.classList.add("active");
	for(var i = 0; i < colors.length; i++){
	boxicArr[i].style.display = "initial";
	boxicArr[i].style.backgroundColor = colors[i];
}
});

newColor.addEventListener("click", function(){
	head.style.backgroundColor = "rgb(37, 77, 140)";
	colors = clrs(squares);
	pickedClr = pckdClr(colors);
	for(var i = 0; i < colors.length; i++){
	boxicArr[i].style.backgroundColor = colors[i];
}

});

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

