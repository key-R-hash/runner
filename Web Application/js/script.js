function start(){
	setTimeout(function(){
		$("#pyre_fire").removeClass("hide")
		$("#pyre_").addClass("hide");
	},1000)	
	setTimeout(function(){
		line = true;
	},4000)
	$('#start').hide()
	var run_one;
	var run_two;
	var one;
	var two;
	var n = 1
	var oldBottom = '50px';
	var a;
	var background;
	var code;
	var line = false;
		var right = 250;
		var space = 0;
		var walksound = setInterval(function(){
			if(code != 32){
				document.getElementById("walkvoice").play();
			}
		},0)
		setTimeout(function(){
			var left = -3400;
			var bottom = 200;
			var intervalbotton = setInterval(function(){
				bottom -= 15; 
				$("#runner").css({
					"bottom" : bottom
				})
				if(bottom == 50){
					clearTimeout(intervalbotton);
				}
			},250)
			background = setInterval(function(){
				left += 4;
					console.log(left == -1000);
				if(left == -300){
					$('#amazon').removeClass('visib')
					$('#amazon').css({
						'animation' : "shake 0.5s"
					})
				}
				if(left == -1100){
					$('#bahia').removeClass('visib')
					$('#bahia').css({
						'animation' : "shake 0.5s"
					})
				}
				if(left == -1800){
					$('#parana').removeClass('visib')
					$('#parana').css({
						'animation' : "shake 0.5s"
					})
				}
				if(left == -2500){
					$('#saopaulo').removeClass('visib')
					$('#saopaulo').css({
						'animation' : "shake 0.5s"
					})
				}
				if(left == -3000){
					$('#rio').removeClass('visib')
					$('#rio').css({
						'animation' : "shake 0.5s"
					})
				}
				$("#game").css({
					"left" : left
				})
				if(left == 0){
					clearTimeout(background);
				}
			},50)
			setInterval(function(){

				var rightposition1 = $('#runway1 .obstacle').css('right');
				var rightposition2 = $('#runway4 .obstacle').css('right');

				var bottomposition = $('#runner').css('bottom');

				// console.log(Number(rightposition.replace("px", "")) + 100)
				// console.log(right)
				// console.log(bottomposition)
				if(Number(rightposition1.replace("px", "")) + 100  > right - 4 && Number(rightposition1.replace("px", "")) + 100  < right + 4 && Number(bottomposition.replace("px", "")) == 50){
					console.log(1)
					clearTimeout(run_one);	
					clearTimeout(run_two);	
					clearTimeout(background);
					document.getElementById("walkvoice").pause();
					clearTimeout(walksound)
					stop();
				}
				if(Number(rightposition1.replace("px", "")) - 50 > right - 4 && Number(rightposition1.replace("px", "")) - 50 < right + 4 && Number(bottomposition.replace("px", "")) == 99){
					console.log(2)
					clearTimeout(run_one);	
					clearTimeout(run_two);	
					clearTimeout(background);
					clearTimeout(walksound)

					document.getElementById("walkvoice").pause();

					stop();

				}
				if(Number(rightposition1.replace("px", "")) + 50  > right - 4 && Number(rightposition1.replace("px", "")) + 50  < right + 4 && Number(bottomposition.replace("px", "")) == 84){
					console.log(3)
					clearTimeout(run_one);	
					clearTimeout(run_two);	
					clearTimeout(background);
					clearTimeout(walksound)

					document.getElementById("walkvoice").pause();

					stop();

				}
				if(Number(rightposition2.replace("px", "")) + 100  > right - 4 && Number(rightposition2.replace("px", "")) + 100  < right + 4 && Number(bottomposition.replace("px", "")) == 50){
					clearTimeout(run_one);	
					clearTimeout(run_two);	
					clearTimeout(background);
					clearTimeout(walksound)

					document.getElementById("walkvoice").pause();

					stop();

				}
				if(Number(rightposition2.replace("px", "")) - 50 > right - 4 && Number(rightposition2.replace("px", "")) - 50 < right + 4 && Number(bottomposition.replace("px", "")) == 99){
					console.log(5)
					clearTimeout(run_one);	
					clearTimeout(run_two);	
					clearTimeout(background);
					clearTimeout(walksound)

					document.getElementById("walkvoice").pause();

					stop();

				}
				if(Number(rightposition2.replace("px", "")) + 50  > right - 4 && Number(rightposition2.replace("px", "")) + 50  < right + 4 && Number(bottomposition.replace("px", "")) == 84){
					console.log(6)
					clearTimeout(run_one);	
					clearTimeout(run_two);	
					clearTimeout(background);
					clearTimeout(walksound)

					document.getElementById("walkvoice").pause();

					stop();

				}

			},50)
		},1800)


		function run(){	
			var a = 1;
			run_one = setInterval(function(){
				$('#runner img').attr('src',"../Runner/runner_" + a + "_.png");

				a++;
				if(a == 4){
					a = 1;
				}
				
			},150)
			run_two = setInterval(function(){
				right += 1;
				$('#runner').css({
					"right" : right + "px"
				})
				console.log(right)
				if(right == 5000){
					var ribbon = "<img id='rib1' src='../Runner/ribbon1.png' > <img id='rib2' src='../Runner/ribbon2.png' > <img id='rib3' src='../Runner/ribbon1.png' > <img id='rib4' src='../Runner/ribbon2.png' > <img id='rib5' src='../Runner/ribbon1.png' > <img id='rib6' src='../Runner/ribbon1.png' > <img id='rib7' src='../Runner/ribbon2.png' > <img id='rib8' src='../Runner/ribbon2.png' > <img id='rib9' src='../Runner/ribbon1.png' ><img id='rib10' src='../Runner/ribbon2.png' ><img id='rib11' src='../Runner/ribbon1.png' ><img id='rib12' src='../Runner/ribbon2.png' ><img id='rib13' src='../Runner/ribbon1.png' ><img id='rib14' src='../Runner/ribbon2.png' ><img id='rib15' src='../Runner/ribbon1.png' >"
					$('#riboo').append(ribbon);
					$('#rib1').css({
						'width' : '25px',
						'position' : 'absolute',
						'animation' : 'ribbon 3s'

					})
					$('#rib2').css({
						'width' : '25px',
						'position' : 'absolute',
						'animation' : 'ribbon 3.2s'

					})
					$('#rib3').css({
						'width' : '25px',
						'position' : 'absolute',
						'animation' : 'ribbon 3.4s'

					})
					$('#rib4').css({
						'width' : '25px',
						'position' : 'absolute',
						'animation' : 'ribbon 3.6s'
					})
					$('#rib5').css({
						'width' : '25px',
						'position' : 'absolute',
						'animation' : 'ribbon 3.8s'

					})
					$('#rib6').css({
						'width' : '25px',
						'position' : 'absolute',
						'animation' : 'ribbon 4s'
						

					})
					$('#rib7').css({
						'width' : '25px',
						'position' : 'absolute',
						'animation' : 'ribbon 4.2s'

					})
					$('#rib8').css({
						'width' : '25px',
						'position' : 'absolute',
						'animation' : 'ribbon 4.4s'
					})
					$('#rib9').css({
						'width' : '25px',
						'position' : 'absolute',
						'animation' : 'ribbon 2.8s'
					})		
					$('#rib10').css({
						'width' : '25px',
						'position' : 'absolute',
						'animation' : 'ribbon 4.6s'
					})		
					$('#rib11').css({
						'width' : '25px',
						'position' : 'absolute',
						'animation' : 'ribbon 2.6s'
					})		
					$('#rib12').css({
						'width' : '25px',
						'position' : 'absolute',
						'animation' : 'ribbon 2.4s'
					})		
					$('#rib13').css({
						'width' : '25px',
						'position' : 'absolute',
						'animation' : 'ribbon 2.2s'
					})		
					$('#rib14').css({
						'width' : '25px',
						'position' : 'absolute',
						'animation' : 'ribbon 5s'
					})		
					$('#rib15').css({
						'width' : '25px',
						'position' : 'absolute',
						'animation' : 'ribbon 5.2s'
					})
					setTimeout(function(){
						$('#riboo').hide();
					},5300)
				}

				if(right == 5300){
					clearTimeout(run_one);	
					clearTimeout(run_two);	
					clearTimeout(background);
					clearTimeout(walksound)

					document.getElementById("walkvoice").pause();

					$('#win').show();				
				}
			},7)

		}	
		run();

		function randomRunWay(){
			function one(){

				var rand = Math.random();
				var ary = ["3500","4000","4500"];
				var leg = Math.floor(ary.length * rand);
				$html = "<div id='runway1' class='runway'><span class='obstacle' style='bottom:100px;'></span></div>"
				$('.runways').append($html)
				$('#runway1 .obstacle').css({
					'width' : '16px',
					'height' : '62px',
					"margin-bottom" : '-50px',
					"margin-left" : ary[leg] + 'px'
				})
				$html = "<div id='runway2' class='runway'><span class='obstacle' style='bottom:25px;'></span></div>"
				$('.runways').append($html)
				$('#runway2 .obstacle').css({
					'width' : '22px',
					'height' : '68px',
					"margin-bottom" : '-45x',
					"margin-left" : ary[leg] - 100 + 'px'
				})
				$html = "<div id='runway3' class='runway'><span class='obstacle' style='bottom:0px;'></span></div>"
				$('.runways').append($html)
				$('#runway3 .obstacle').css({
					'width' : '28px',
					'height' : '74px',
					"margin-left" : ary[leg] - 200 + 'px'
				})
			}
			function two(){
				var rand = Math.random();
				var ary = ["500","1000","1500","2000"];
				var leg = Math.floor(ary.length * rand);
				$html = "<div id='runway4' class='runway'><span class='obstacle' style='bottom:100px;'></span></div>"
				$('.runways').append($html)
				$('#runway4 .obstacle').css({
					'width' : '16px',
					'height' : '62px',
					"margin-bottom" : '-50px',
					"margin-left" : ary[leg] + 'px'
				})
				$html = "<div id='runway5' class='runway'><span class='obstacle' style='bottom:25px;'></span></div>"
				$('.runways').append($html)
				$('#runway5 .obstacle').css({
					'width' : '22px',
					'height' : '68px',
					"margin-bottom" : '-45x',
					"margin-left" : ary[leg] - 100 + 'px'
				})
				$html = "<div id='runway6' class='runway'><span class='obstacle' style='bottom:0px;'></span></div>"
				$('.runways').append($html)
				$('#runway6 .obstacle').css({
					'width' : '28px',
					'height' : '74px',
					"margin-left" : ary[leg] - 200 + 'px'
				})
			}
			one();
			two();
			
		}
		randomRunWay();
		
	$(document).keydown(function(e){
		console.log(n);
		code = e.keyCode;
		// up
		if(code == 38 && line == true){
			if(n == 1){
				oldBottom = '84px'
				$("#runner").css({
					'transform' : 'scale(0.8)',
					'bottom' : '84px'
				})
			}
			if(n == 2){
				oldBottom = '99px'

				$("#runner").css({
					'transform' : 'scale(0.7)',
					'bottom' : '99px'
				})
			}
			n++
			if(n > 2){
				n--

			}
		}
		//down
		if(code == 40 && line == true){
			
			if(n == 1){
				oldBottom = '50px'

				$("#runner").css({
					'transform' : 'scale(1)',
					'bottom' : '50px'
				})

			}
			if(n == 2){
				oldBottom = '84px'

				$("#runner").css({
					'transform' : 'scale(0.8)',
					'bottom' : '84px'
				})
			}
			n--

			if(n == 0){

				n++

			}
		}
		// space
		if(code == 32 && line == true){
			if(space == 0){
				space = 1;	
				document.getElementById("jumpvoice").play();

				clearTimeout(run_one);
				clearTimeout(run_two);
				if(oldBottom == "84px"){
					$('#runner').css({
						"bottom" : "110px"
			
					})
				}
				if(oldBottom == "50px"){
					$('#runner').css({
						"bottom" : "100px"
			
					})
				}
				if(oldBottom == "99px"){
					$('#runner').css({
						"bottom" : "130px"
			
					})
				}
				var rightTop = setInterval(function(){
					right += 1;
					$('#runner').css({
						"right" : right + "px"
			
					})
				},10)
				$('#runner img').attr('src',"../Runner/runner_up_.png");

				setTimeout(function(){
					$('#runner').css({
						"bottom" : oldBottom
					})		
					space = 0;
					code = 1;
					clearTimeout(rightTop);
					run()
				},1500)
			}

		}

	})
}
function stop(){
	$('#end').show();
}
