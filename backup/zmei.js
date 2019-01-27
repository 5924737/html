		/*for (var i=0; i=20; i++){
/*setTimeout(function(){*/
	 /*alert("Привет")/*},20);*/
	/*};*/

	 /*setInterval(m,1000);// Повторять с интервалом
	 function m(){
	 for (var i=0; i<=20; i++ ){
	 document.write(i);
	  };
	};*/
	
   	/* var t = 0;
	 var e = setInterval(m,1000);// Повторять с интервалом
	 function m(){
	 t++
	 document.write(t,"[");
	 if (t == 500){clearInterval(e)};
	};*/
	


	
	// $('body').keydown(function(e) {
	// dx = (e.keyCode - 38) % 2, dy = (e.keyCode - 39) % 2;
// }
		var q=0;//пакман
		var x=0;
		var y=0;
		var dx=1;
		var dy=0;
		var w=0;
		var h=0;
		var s=0;
		var d=0;
		var a=0;
		var b=0;
		var f=3;
		

		vis = $('.pac');
		$('body').keydown(function(e) {
		e = e || event;
		// var dx=(e.keyCode == 37)% 2
		// alert(dx)
		if(e.keyCode == 37){
			dy=-1, dx=0;
			
		}
		if(e.keyCode == 38){
			++q
			dx=-1, dy=0;
					
		}
		if(e.keyCode == 39){
			++q
			dy=1, dx=0;
			
		}
		if(e.keyCode == 40){
			++q
			dx=1, dy=0;
			
		}
		// alert(dx+''+ dy);
	});

		var timer = setInterval(fun,1000);
		function fun(){
			x = (x + dx);
			if(x > 9){
				x = 0;
			};
			if(x < 0){
				x = 9;
			};
			y = (y + dy);
			if(y > 9){
				y = 0;
			};
			if(y < 0){
				y = 9;
			};
			var newEl = $('.' + x + '_' + y);
			if(newEl.hasClass('s')) {
     			clearInterval(timer), alert('Game Over! Score: ' + length);
    		}
    		newEl.css('background','red');
    		newEl.attr('data-n',8);
    		var b=function(){
    			for(var x = 0; x <= 9; x++){
    				for(var y = 0; y <= 9; y++){
    					var newEl = $('.'+x+'_'+y);
    					if(newEl.hasClass('s')){
    						newEl.attr('data-n',newEl.attr('data-n')-1);
    						if(newEl.attr('data-n')<=0){
    							newEl.removeClass('s');
    							newEl.css('background','white');
    						}
    					}
    				}
    			}
    		}
    	b();
		newEl.addClass('s');
    	};
		
		/*раще зберігати в атрибуті data
		типу в тебе елмент <div data-num="12"></div>
		після - можна писати будь що
		наприклад data-id="1"
		data-ololo="la-la"
		а отримувати з нього дані .attr('data-ololo');
		або ж простіше .data('ololo');*/
		// var r=Math.round(Math.random()*10);
		// 	var arc=[];
		// 		for(var i=0; i<5; i++){
		// 			arc[i]=[];
		// 			for(var j=0; j<5; j++){
		// 			   r = Math.round(Math.random()*10);
		// 			arc[i][j]=r;
					
		// 	}
		// 	document.write (arc[i] + "<br>");
		// 	}
		
		
		/*//Проверк координат
		var f=setInterval(fun,500 );
		function fun(){	
		arc_x.unshift(xx)
		arc_y.unshift(yy)
		arc_x.pop()
		arc_y.pop()
		for(var i=0 i<=длина массива i++);
		$('div').remove(i)	
		$('.redd').append('<div class="pac1">')
		$('.pac1').css({'margin-top':xx+'px','margin-left':yy+'px'});
		yy+=y;
		xx+=x;
			if(yy <= -1){
				yy=500
			}
			if(xx <= -1){
				xx=500
			}
			if(yy >= 501){
				yy=0
			}
			if(xx >= 501){
				xx=0
			}
		vis.animate({'margin-left':yy+"px",'margin-top': xx+"px"},10);
		vis.toggleClass("red pac");
	
	if(a == x && y == b){
			d++
			$('html').toggleClass("redd1 white");
			setTimeout(m,10);
			function m(){
			
			
			$('html').toggleClass("white redd1");
			};
			func()
			
		}
		$('.pa').html("Pacman : x-"+x+"px"+"<br>"+"Pacman : y-"+(y)+"px"+"<br>"+"Burgerr : x-"+a+"px"+"<br>"+"Burgerr : y-"+b+"px"+"<br>"+"Hits:"+d).css('margin',50);
		if( d==5 ){ 
			alert('You win!!!')
		d=0;
		};
	}
	//таймер
		var f=setInterval(func,2000 );
		
		function func(){
		a = (Math.round(Math.random()*10)*50);
        b = (Math.round(Math.random()*10)*50);
		//$('.pa').html(d+'!!! '+a+'!!! '+b);
		
		
		$('.paa').animate({
			'margin-top' : a+'px',
			'margin-left' : b+'px'	
		});
		clearInterval(f);
		f=setInterval(func,2000 );
		}*/
	
	
	/*document.onkeydown= function(e){ //Проверка клавиш
		var e=e || event ;
		alert(e.keyCode)
		if(e.keyCode == 37){
		clearInterval(b);
		}
		}*/
		/*var q=0;
		var x=0;
		var y=0;
		var vis = document.querySelector("#pac");
		/*vis = $('#pac');*/
		
		/*var b= setInterval(func,100 );
		function func(){
		document.onkeydown= function(e){ //Проверка клавиш
		var e=e || event ;
		
		if(e.keyCode == 37){
			q++
			y-=20;
			vis.style.marginLeft = y+"px";
		}
		if(e.keyCode == 38){
			q++
			x-=20;
			vis.style.marginTop = x+"px";
		}
		if(e.keyCode == 39){
			q++
			y+=20;
			vis.style.marginLeft = y+"px";
		}
		if(e.keyCode == 40){
			q++
			x+=20;
			vis.style.marginTop = x+"px";
		}
		if(q == 3){
		q=1;
		}
		if (q==1){
		vis.style.background = "url(15.jpg)";
		/*vis.addClass('red');*/
		/*}
		if (q==2){
		vis.style.background = "url(16.jpg)";
		}
		}
		}*/
		


		/*var a=0;
		var b= setInterval(func,10 );
		function func(){
		document.write(a+++"br")
		if(a/i ==1){document.write('<br>'); 
		i+=30
		}
		document.onkeydown= function(e){
		var e=e || event ;
		if(e.keyCode == 37){
		clearInterval(b);
		};
		}
		}*/





/*function load(){
var vis = document.querySelector(".js-vis");
var colorbg = document.querySelector(".js-colorbg");
var bcolor = document.querySelector(".js-bcolor");
var widthb = document.querySelector(".js-widthb");
var width = document.querySelector(".js-width");
var height = document.querySelector(".js-height");
var x = document.querySelector(".js-x");
var y = document.querySelector(".js-y");
var fs = document.querySelector(".js-fs");
var sq = document.querySelector("#skd");
alert(sq);
var w=0;
var d=0;
var d1=0;
var d2=0;
var d3=0;
var d4=0;
var d5=0;
var d6=0;
var d7=0;
var d8=0;
var e=5;
var w="green";
var c="black"

vis.onclick = function(){//Видимость
d++
if (d == 2){
d = 0
}
if (d == 1){
sq.style.display = "none";
}
if (d == 0){
sq.style.display = "block";
}
}
colorbg.onclick = function(){//Цвет фона
d1++
if (d1 == 2){
d1 = 0
}
if (d1 == 1){
sq.style.background = "blue";
}
if (d1 == 0){
sq.style.background = "red";
}
}
bcolor.onclick = function(){//Цвет границы
d2++
if (d2 == 2){
d2 = 0
}
if (d2 == 1){
w="black";
sq.style.outline = e +"px"+' ' +"solid"+' ' + w;
}
if (d2 == 0){
w="green";
sq.style.outline = e +"px"+' ' +"solid"+' ' + w;
}
}
widthb.onclick = function(){//Толщина бордюра
d3++
if (d3 == 2){
d3 = 0
}
if (d3 == 1){
e=3;
sq.style.outline = e +"px"+' ' + "solid"+' ' + w;
}
if (d3 == 0){
e=5;
sq.style.outline = e +"px"+' ' + "solid"+' ' + w;
}
}
width.onclick = function(){//Ширина блока
d4++
if (d4 == 2){
d4 = 0
}
if (d4 == 1){
sq.style.width = 200+"px";
}
if (d4 == 0){
sq.style.width = 150+"px";
}
}
height.onclick = function(){//Высота блока
d5++
if (d5 == 2){
d5 = 0
}
if (d5 == 1){
sq.style.height = 200+"px";
}
if (d5 == 0){
sq.style.height = 150+"px";
}
}
x.onclick = function(){//x
d6+=20;
if (d6 == 300){
d6 = 0
}

sq.style.marginLeft = d6+"px";

}
y.onclick = function(){//y
d7+=20;
if (d7 == 300){
d7 = 0
}

sq.style.marginTop = d7+"px";
}
fs.onclick = function(){//Font
d8++
if (d8 == 2){
d8 = 0
}
if (d8 == 1){
c="orange"
sq.style.color = c;
sq.style.fontSize = 20+"px";

}
if (d8 == 0){
c="black"
sq.style.color = c;
sq.style.fontSize = 10+"px";
}
}
}*/
 /*setTimeout(function(){
	 alert("Привет")},2000);
	 
	 setTimeout(m,1000);
	 function m(){
	 alert("Привет")
	 };*/
	/* var i=30;
	 var a=0;
	 var b= setInterval(func,10 );
		function func(){
		document.write(a+++"br")
		if(a/i ==1){document.write('<br>'); 
		i+=30
		}
		document.onkeydown= function(e){
		var e=e || event ;
		if(e.keyCode == 37){
		clearInterval(b);
		};
		}
		}*/
	 
/*$(document).ready(function(){
	$("button").css("margin-top",100+"px")
	var w = $(".js-colorbg")
	 var b = w.find(.Slider > li).css("width")
	 b().css()width
	 $(.slider>li).text("dhdfb")//достанет вторую li$(.slider>li).eq(1)
});	 $(.slider>li).html("<"br">")
	 $(.slider>li).eq(1) достанет второй эл
	$(.slider>li).lenght();
	$(.slider>li).index();
	
	var d=$(".stages_item").first().find("p").text();
	
	
	var d=$(".stages_item").first().text();
	$(".amb_text").text(d);
	d;
	
	
	
	$(".company_item").eq(5).animate({'top' : -500},500 )*/

