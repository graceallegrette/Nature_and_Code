/* Name:        Grace Allegrette
   Description: Verlet Nodes connect to create a square that drops from the top
                of the screen. Lines show following the boxes path.
   Credit:      Parts of this code are inspired by:
                https://github.com/bit101/codingmath*/

window.onload = function() {
	var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;


	var dots = [];
  var sticks = [];
  var gravity = 0.7;
  var friction = 0.999;
  var color;

//boxOne
  dots.push({
		beginx: 100,
		beginy: 100,
		oldx: 100 + Math.random() * 30 - 15,
		oldy: 100 + Math.random() * 30 - 15
	});
	dots.push({
		beginx: 200,
		beginy: 100,
		oldx: 200,
		oldy: 100
	});
	dots.push({
		beginx: 200,
		beginy: 200,
		oldx: 200,
		oldy: 200
	});
	dots.push({
		beginx: 100,
		beginy: 200,
		oldx: 100,
		oldy: 200
	});


	sticks.push({
		position0: dots[0],
		position1: dots[1],
		length: movement(dots[0], dots[1])
	});
	sticks.push({
		position0: dots[1],
		position1: dots[2],
		length: movement(dots[1], dots[2])
	});
	sticks.push({
		position0: dots[2],
		position1: dots[3],
		length: movement(dots[2], dots[3])
	});
	sticks.push({
		position0: dots[3],
		position1: dots[0],
		length: movement(dots[3], dots[0])
	});


	update();

	function movement(position0, position1) {
    var distancex = position0.beginx - position1.beginx;
    distancex *= distancex;
    var distancey = position0.beginy - position1.beginy;
    distancey *= distancey;
    return Math.sqrt(distancex + distancey);
	}

	function update() {
		MoveDots();
		constraints();
		updateSticks();
		UpdateDots();
		UpdateSticks();
		requestAnimationFrame(update);
	}

	function MoveDots() {
		for(var i = 0; i < dots.length; i++) {
			var position = dots[i];

			var updatex = position.beginx - position.oldx;
      updatex = updatex * friction;

			var updatey = position.beginy - position.oldy
      updatey = updatey * friction;

			position.oldx = position.beginx;
			position.oldy = position.beginy;

			position.beginx = position.beginx + updatex;
			position.beginy = position.beginy + updatey + gravity;
		}
	}


	function constraints() {
		for(var i = 0; i < dots.length; i++) {
			var position = dots[i];

			var updatex = position.beginx - position.oldx;
      updatex = updatex * friction;

			var updatey = position.beginy - position.oldy;
      updatey = updatey * friction;

			if(position.beginx > width) {
				position.beginx = width;
			}
			else if(position.beginx < 0) {
				position.beginx = 0;
				position.oldx = position.beginx + updatex;
			}
			if(position.beginy > height) {
				position.beginy = height;
				position.oldy = position.beginy + updatey;
			}
			else if(position.beginy < 0) {
				position.beginy = 0;
			}
		}
	}

	function updateSticks() {
		for(var i = 0; i < sticks.length; i++) {

    	var placeHolder = sticks[i];
			var distancex = placeHolder.position1.beginx - placeHolder.position0.beginx;
			var distancey = placeHolder.position1.beginy - placeHolder.position0.beginy;
			var movement = Math.sqrt(distancex * distancex + distancey * distancey);
			var difference = placeHolder.length - movement;
			var percent = difference / movement / 3;
			var offsetX = distancex * percent * 0.88;
			var offsetY = distancey * percent * 0.88;

			placeHolder.position0.beginx =placeHolder.position0.beginx - offsetX;
      placeHolder.position1.beginx =placeHolder.position1.beginx + offsetX;
			placeHolder.position0.beginy =placeHolder.position0.beginy - offsetY;
			placeHolder.position1.beginy =placeHolder.position1.beginy + offsetY;
		}
	}

	function UpdateDots() {
		context.rect(2, 2, width, height);
		for(var i = 0; i < dots.length; i++) {
			context.beginPath();
		}
	}

	function UpdateSticks() {
		context.beginPath();
		for(var i = 0; i < sticks.length; i++) {
			var placeHolder = sticks[i];
			context.moveTo(placeHolder.position0.beginx, placeHolder.position0.beginy);
			context.lineTo(placeHolder.position1.beginx, placeHolder.position1.beginy);
		}
		context.stroke();
	}
};
