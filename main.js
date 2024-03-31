let progresso = document.getElementById('progresso');
let musica = document.getElementById('musica');
let icone = document.getElementById('icone');

musica.onloadeddata = function(){
    progresso.max = musica.duration;
    progresso.value = musica.currentTime;
}

function playPause(){
    if(icone.classList.contains('fa-pause')){
        musica.pause();
        icone.classList.remove('fa-pause')
        icone.classList.add('fa-play')
    }
    else{
        musica.play();
        icone.classList.add('fa-pause')
        icone.classList.remove('fa-play')
    }
}

if (musica.play()){
    setInterval(()=>{
        progresso.value = musica.currentTime;
    },250);      
}

progresso.onchange = function(){
    musica.play();
    musica.currentTime = progresso.value;
    icone.classList.add('fa-pause')
    icone.classList.remove('fa-play')
}