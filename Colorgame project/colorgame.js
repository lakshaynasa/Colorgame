var numberofsquares = 6;
var colors = [];
var pickedcolor;

var squares=document.querySelectorAll(".square");
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbtn=document.querySelector("#reset");
var modebtn=document.querySelectorAll(".mode");

init();

function init(){
	
	setupModeButtons();
	setupSquares();
	reset();

}

function setupModeButtons(){
	//mode buttons event listeners
	for(var i=0;i<modebtn.length;++i){
		modebtn[i].addEventListener("click", function(){
			this.classList.add("selected");
			modebtn[0].classList.remove("selected");
			modebtn[1].classList.remove("selected");

			this.textContent === "Easy" ? numberofsquares=3 : numberofsquares=6;
			reset();

		})
	}
}

function setupSquares(){
	//squares listeners
	for(var i=0;i<squares.length;++i){
		squares[i].addEventListener("click", function(){
			var clickedcolor=this.style.backgroundColor;
			if(clickedcolor==pickedcolor){
				messagedisplay.textContent="Correct !";
				resetbtn.textContent="Play Again ?";
				changecolors(pickedcolor);
				h1.style.background=pickedcolor;
			}
			else{
				this.style.backgroundColor="#232323";
				messagedisplay.textContent="Try Again !";
			}
		})
	}
}


function reset(){
	colors=generaterandomcolors(numberofsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;

	resetbtn.textContent="New Colors";
	messagedisplay.textContent="";

	for(var i=0;i<squares.length;++i){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";
}

resetbtn.addEventListener("click", function(){
	reset();
});

function changecolors(color){
	for(var i=0;i<squares.length;++i){
		squares[i].style.backgroundColor=color;
	}
}

function pickcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generaterandomcolors(num){
	var arr=[];

	for(var i=0;i<num;++i){
		arr.push(randomcolor());
	}

	return arr;
}

function randomcolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";

}