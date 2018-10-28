<html>
	<head></head>
<body>
	<canvas id="canvas"></canvas>
	<script>
const rand = function(num) {		//random
  return Math.floor(Math.random() * num) + 1;
};
	const playerImage = new Image();
   	playerImage.src="https://www.wilko.com/assets/bWFzdGVyfHJvb3R8NTg4fGltYWdlL3BuZ3xoM2IvaDIzLzg4ODQxNjI4MjIxNzQucG5nfGRkZjYxNzNkNDMzZmEwMjY1MWY4NGYxNTQzOTYzYzQ0YzNkYjIxODE4YmNjZjk4YWIzOWNmODk0Yzk4MDQxMWE=/halloween-uvp-2.png";	
		
	const player = {
	  	x      : 400,	//our value
		y      : 300,	//our value
		width  : 20,
		height : 20,
		image  : playerImage,
		xDelta: 0,
        yDelta: 0
	  };
		
const createBoxes = function(count, canvasWidth, canvasHeight) {
	
  	const colorArray = ["red", "blue", "purple", "yellow"];
	
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;

  let arrayEmtpy = [];
  let i = 0;
	
	while(count != 0){
	
		count--;
	
		let generateRect = {
    		x: rand(canvasWidth - 30),  	//to fit
			y: rand(canvasHeight - 30),		//to fit
			width: 30,
    		height: 30,
			xDelta: 1,
			yDelta: 1,
			color: colorArray[rand(4) -1],  
			draw: function() {
						const canvas = document.getElementById("canvas");
						const context = canvas.getContext("2d");
					  	context.fillStyle = this.color;
						context.fillRect(this.x, this.y, this.width, this.height);
			},
			update: function() {
					
						this.x = this.x + this.xDelta;
        				this.y = this.y + this.yDelta;
				
						if (this.y >= canvasHeight - 30|| this.y <= 0) {
           					this.yDelta = -this.yDelta;
        				}
		
						if (this.x >= canvasWidth - 30 || this.x <= 0) {
           				this.xDelta = -this.xDelta;
        				}		
						if(this.x < player.x + player.width && this.x + this.width > player.x && this.y < player.y + player.height && player.height + 
	    				this.y > player.y) {
							alert("You lose");
        					location.reload();
		}
			}

  		};

  arrayEmtpy[count] = generateRect;		
  }
  	return arrayEmtpy;
};
		
		const runCode = createBoxes(4, 500 ,500);
		
			
			const updateData = function() {				
				
						if(player.y >= canvas.height - 20) {
        					player.y = canvas.height - 20;
						}
					
						if(player.x >= canvas.width - 20) {
        					player.x = canvas.width - 20;
						}
		
						if(player.y  <= 0) {
        					player.y = 0;
						}
		
						if(player.x  <= 0) {
        					player.x = 0;
						}
				
				for(let i = 0 ; i < runCode.length; i++){
				runCode[i].update();
			}
			};
			const drawData = function() {
				const canvas = document.getElementById("canvas");
				const context = canvas.getContext("2d");
				context.fillStyle = "black";
				context.fillRect(0,0, canvas.width, canvas.height);
				
				context.drawImage(player.image, player.x, player.y, player.width, player.height);
				
				let i = runCode.length;

				while(i != 0){
				i--;
				runCode[i].draw();		
			}
			};
		
	const loop = function(){
        drawData();
        updateData();
        requestAnimationFrame(loop);
      };
		loop();
		
 const leftKey = 37;
 const upKey = 38;
 const rightKey = 39;
 const downKey = 40;

 document.addEventListener('keydown', function(event) {
 
	if(event.keyCode === rightKey) {
        player.x = player.x + 12;
         if (player.x >= canvas.width-player.width) {
         player.x = 0;
         }
  	} else if (event.keyCode === leftKey) {
        player.x = player.x - 12;
        if (player.x <= 0) {
         player.x = canvas.width-player.width;
         }
    }
    
    else if(event.keyCode === downKey) {
        player.y = player.y + 10;
        if (player.y >= canvas.height-player.height) {
         player.y = 0;
         }
  	} else if (event.keyCode === upKey) {
        player.y = player.y - 10;
        if (player.y <= 0) {
         player.y = canvas.height-player.height;
         }
        }
    
}, false);		
	</script></body></html>