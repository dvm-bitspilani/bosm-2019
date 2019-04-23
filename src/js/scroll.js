var wraper = document.getElementsByClassName('wrapper')[0];
var minDistance = 0;

var current_page = 1;
var step = 0, x = 0;
var last_page = 4;
var play = false;
var sY, dY;

wraper.addEventListener('wheel', scrollY);

function scrollY(e){
    e.preventDefault();
    console.log(e.deltaY);
    if(e.deltaY < -minDistance && current_page > 1&& !play){
        console.log(play);
        play = true;
        console.log('down');
        step += 100;
        current_page--;
        wraper.style.transform = `translateY(${step}vh)`;
        setTimeout(() => {
            play = false;
        }, 1000);
    }
    else if(e.deltaY > minDistance && current_page < last_page && !play){
        console.log(play);
        console.log('up');
        play = true;
        step -= 100;
        current_page++;
        wraper.style.transform = `translateY(${step}vh)`;
        setTimeout(() => {
            play = false;
        }, 1000);
    }
}

function navigate(x){
    if(!play){
        var i = 0;
        play = true;
        step += (current_page - x) * 100;
        console.log(step);
        current_page = x;
        wraper.style.transform = `translateY(${step}vh)`;
        setTimeout(() => {
            play = false;
        }, 1000);
    }
}

wraper.addEventListener('touchstart', start);
wraper.addEventListener('touchmove', move);
wraper.addEventListener('touchend', end);

function start(e){
    var tchs = e.changedTouches[0];
    sY = tchs.pageY;
}

function move(e){
    e.preventDefault();
}

function end(e){
    var tchs = e.changedTouches[0];
    dY = tchs.pageY - sY;
    if(dY > minDistance && current_page > 1 && !play){
        console.log(play);
        console.log('up');
        play = true;
        step += 100;
        current_page--;
        wraper.style.transform = `translateY(${step}vh)`;
        setTimeout(() => {
            play = false;
        }, 1000);
    }
    else if(dY < -minDistance && current_page < last_page && !play){
        console.log(play);
        console.log('down');
        play = true;
        step -= 100;
        current_page++;
        wraper.style.transform = `translateY(${step}vh)`;
        setTimeout(() => {
            play = false;
        }, 1000);
    }
}