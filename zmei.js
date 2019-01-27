$(document).ready(function(){

$('.main').css({'position':'absolute',

    'top': $(window).height() / 2 - 280,

    'left': $(window).width() / 2 - 280

});

//Вводим переменные
//*****************

var x = 0;

var y = 0;

var dx = 1;

var dy = 0;

var h = 3;

var s = 0;

var food = 1;

addFood();



//Опрос клавиатуры
//****************

$('body').keydown(function (e) {

    e = e || event;

     if (e.keyCode == 65) {

        s = 1;

    };

    if (e.keyCode == 37) {

        dy = -1, dx = 0;

    };

    if (e.keyCode == 38) {

        dx = -1, dy = 0;

    };

    if (e.keyCode == 39) {

        dy = 1, dx = 0;

    };

    if (e.keyCode == 40) {

        dx = 1, dy = 0;

    };

 });

var timer = setInterval(fun, 500);

function fun() { // Функция fun

//Центруем поле
//*************

$('.main').css({'position':'absolute',

    'top': $(window).height() / 2 - 280,

    'left': $(window).width() / 2 - 280

});


//Определяем координаты
//*********************

    x = (x + dx);

    if (x > 9) {

        x = 0;

    };

    if (x < 0) {

        x = 9;

    };

    y = (y + dy);

    if (y > 9) {

        y = 0;

    };

    if (y < 0) {

        y = 9;

    };

    //Проверяем пространство на классы
    //*******************************

    var newEl = $('.' + x + '_' + y);

    if(newEl.hasClass('s')) {

        clearInterval(timer), //alert('Game Over! Score: ' + food);

        $('.ma div').fadeOut("slow")
        $('.ma h1').html('Game Over! Score: ' + food + '<br> <a href="http://site220.16mb.com/zmei%20pro/zmei.html">Play again</a>');
        $('.ma h1').fadeIn("slow")
        $('.ma').css({'width':'550px'});
 
        return false

    }
    if (newEl.hasClass('d')) {

        clearInterval(timer), //alert('Вы укусили какашку! Score: ' + food);

        
        $('.ma div').fadeOut("slow")
        $('.ma h1').html('Game Over! Score: ' + food + '<br> <a href="http://site220.16mb.com/zmei%20pro/zmei.html">Play again</a>');
        $('.ma h1').fadeIn("slow")
        $('.ma').css({'width':'550px'});

        return false

    }

    if (newEl.hasClass('f')) {

        newEl.removeClass('f');

        //h = 1;

        food += 1

        newEl.addClass('s');

        newEl.attr('data-n', food);

        addFood();

        addLife();

    }

    if(s == 1 && h >= 1){

        s--;

        $('.index div').first().remove()

       bonus();

    }

    s = 0;

    newEl.attr('data-n', food);

    newEl.addClass('s');

    bodyRun();

}; // Функция fun

//Монтаж тела и атрибутов
//***********************

function bodyRun() {

        for (var x = 0; x <= 9; x++) {

            for (var y = 0; y <= 9; y++) {

                var newEl = $('.' + x + '_' + y);

                if (newEl.hasClass('s')) {

                    newEl.css('background', 'url(divr.png)');

                    newEl.html('<p>' + newEl.attr('data-n') + '</p>')

                    newEl.attr('data-n', +(newEl.attr('data-n')) - 1);

                    if (newEl.attr('data-n') <= -1) {

                        newEl.removeClass('s');

                        $(newEl).find('p').remove()
                        
                        newEl.css('background', 'url(div.png)');
                     
                     }

                }

            }

        }

    }

//Монтаж еды
//**********

function addFood() {

    a = (Math.round(Math.random() * 9));

    b = (Math.round(Math.random() * 9));

    var newEl = $('.' + a + '_' + b);

    if (newEl.hasClass('s')) {

        addFood();

        return false;

    }

    else if (newEl.hasClass('d')) {

        addFood();

        return false;

    }

    newEl.html('<p>Еда</p>');

    newEl.css('background', 'url(divg.png)');

    newEl.addClass('f');

};

//+1 к каждому кубику тела после Food
//***********************************

function addLife() {

    shit()

    for (var x = 0; x <= 9; x++) {

        for (var y = 0; y <= 9; y++) {

            var newEl = $('.'+x+'_'+y);

            if (newEl.hasClass('s')) {

                var z = newEl.attr('data-n')

                newEl.attr('data-n', +z + 1);


            };

        };

    };

};

//Бонус
//*****
function bonus(){

    s = 0;

    //if ( h == 1 ){

        h--;

        for (var x = 0; x <= 9; x++) {

            for (var y = 0; y <= 9; y++) {

                var newEl = $('.'+x+'_'+y);

                if (newEl.hasClass('s')) {

                    newEl.attr('data-n', '0')
                    

                };

            };

        };

    //};

};

//Монтаж дерьма
//*************

function shit(){

    for (var x = 0; x <= 9; x++) {

        for (var y = 0; y <= 9; y++) {

            var newEl = $('.'+x+'_'+y);

             if (newEl.hasClass('s')) {

                if(newEl.attr('data-n') == 0){

                    newEl.removeClass('s');

                    newEl.addClass('d');

                    newEl.html('<p>Кака</p>')

                    newEl.css({

                        'background':'url(divs.png)',

                        'color':'white'
                        });

                    };

                };

            };

        };

    };
});

    
   

