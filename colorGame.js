numOfSquares = 6;

var colors= randomColorGenerator(numOfSquares);

var pickedColor= pickColor();

var squares = document.querySelectorAll(".square");

var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Display= document.querySelector("h1");

var easyBtn= document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");


var resetButton = document.querySelector("#reset");

colorDisplay.textContent=pickedColor;

for( var i=0; i< squares.length; i++)
{
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function()
	{

		var clickedColor = this.style.background;
		if(clickedColor === pickedColor)
		{
			//alert("Correct");
			messageDisplay.textContent="Correct!";
			colorChange(pickedColor);
			resetButton.textContent = "Play Again?";

		}
		else{
			this.style.background="#232323";
			messageDisplay.textContent="Try Again!!";
			// alert("Wrong!!!");
		}
	});
}


function colorChange(color)
{	var lastSquare = numOfSquares;

	for(var i=0;i< lastSquare;i++)
	{
		squares[i].style.background=color;
		h1Display.style.background=color;
		// messageDisplay.style.background=color;
	}
}


function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]; 
}

function randomColorGenerator(num)
{
	var arr =[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	} 
	return arr;
};

function randomColor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}

resetButton.addEventListener("click",function()
	{
		resetGame(numOfSquares);
	});

function resetGame( numOfSquares)
{
	colors= randomColorGenerator(numOfSquares);
	pickedColor= pickColor();
	colorDisplay.textContent=pickedColor;
	
	h1Display.style.background = "steelblue";
	resetButton.textContent="New Colors";
	messageDisplay.textContent=" ";

	for( var i=0; i< squares.length; i++)
	{
		squares[i].style.background = colors[i];
	}

}

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numOfSquares=3;
	for( var i=numOfSquares; i< squares.length; i++)
	{
		squares[i].style.display = "none";
	}
	resetGame(numOfSquares);
});


hardBtn.addEventListener("click", function(){

	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");	
	numOfSquares=6;
	for( var i=0; i< squares.length; i++)
	{
		squares[i].style.display = "block";
	}
	resetGame(numOfSquares);

});