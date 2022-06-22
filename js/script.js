const emisoras = [
{
id: 0,
nombre:'selecciona emisora',
url:'',
param:'selected'
},

{
    id: 1,
    nombre:'Olimpica',
    url:'https://i70.letio.com/9122.aac',
    param:''
 },
{
    id: 2,
    nombre:'Radio Tiempo',
    url:'https://i70.letio.com/9144.aac',
    param:''
 },
 {
    id: 3,
    nombre:'la X',
    url:'http://stream.eleden.com:8230/lax.aac',
    param:''
},
];
const reproducir = document.getElementById('reproductor');
const signalicono = document.getElementById('signal');
const selectemisora = document.getElementById('selectemisora');
const botonplay = document.getElementById('play');
const botonpause = document.getElementById('pause');
const volumen = document.getElementById('volumen');

let playing;
let currentVolume;

function init(){
    currentVolume = 20;
    botonplay.disabled = true;
    botonpause.disabled = true;
    volumen.disabled = true;
    playing = false;
    volumen.value =currentVolume;
    reproducir.volume = currentVolume/100;
    llenarSelectEmisoras ();
    changesignal();    
}

function llenarSelectEmisoras(){
    let info = '';
    for(const element of emisoras){
        info += `<option ${element.param} value="${element.id}">${element.nombre}</option>`;
    }
    selectemisora.innerHTML = info;
}
function changeSelectEmisoras(evt){
    if(evt.value == 0){
        botonplay.disabled = true;
        botonpause.disabled = true;
        volumen.disabled = true;
        playing = false;
    } else {
        botonplay.disabled = false;
        botonpause.disabled = false;
        volumen.disabled = false;
        playing = true;
    }
    reproducir.src = emisoras[evt.value].url;
    changesignal();
    reproducir.volume =currentVolume/100;

}

function play (){
    playing = true;
    reproducir.play();
    reproducir.volume = currentVolume/100;
    changesignal();

}

function pause(){
    playing = false;
    reproducir.pause();
    changesignal();
}

function changeVolume(evt){
    currentVolume =evt.value;
    reproducir.volume = currentVolume/100;
    changesignal();

}
function changesignal(){
    const color = playing ? 'green': 'red';
    signalicono.style.color = color; 

}

(function (){
    init();
})();