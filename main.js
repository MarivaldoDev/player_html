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

var reprodutor = document.getElementById('musica');
var listaDeMusicas = [
    'msc/aquelas-coisas.mp3',
    'msc/meu-sonho.mp3',
];
var indiceAtual = 0;

function passarProximaMusica() {
    // Incrementa o índice atual para passar para a próxima música
    indiceAtual++;
    
    // Verifica se atingimos o final da lista de reprodução
    if (indiceAtual >= listaDeMusicas.length) {
        // Se sim, volta para a primeira música
        indiceAtual = 0;
    }
    
    // Define a origem do arquivo de áudio como a próxima música na lista
    reprodutor.src = listaDeMusicas[indiceAtual];
    
    // Inicia a reprodução da nova música
    reprodutor.play();
}

function voltaraMusica() {
    // Incrementa o índice atual para passar para a próxima música
    indiceAtual--;
    
    // Verifica se atingimos o final da lista de reprodução
    if (indiceAtual >= listaDeMusicas.length) {
        // Se sim, volta para a primeira música
        indiceAtual = 0;
    }
    
    // Define a origem do arquivo de áudio como a próxima música na lista
    reprodutor.src = listaDeMusicas[indiceAtual];
    
    // Inicia a reprodução da nova música
    reprodutor.play();
}