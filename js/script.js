/**
 * Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
 */

/**
 * 1. Creo html e bottone da richiamare in js
 * 2.Aggiungo eventlistener e evento al click (o submit se utilizzo un form)
 * 3.funzione per generare la griglia (quadratini da unserire nel div dell'html) -
 *      creo div, il numero dei div è da indicare con una variabile (che per il bonus dipenderà da value di select) -
 *      aggiungo classe già pronta nel css (no bg!), ;
 * 4.aggiungo eventilistener al quadratino (al click cambio bg e console.log dell'indice del quadratino);
 */

//Richiamo gli elementi dall'html: form (il bottone submit è nel form)
const btn = document.querySelector('form');

//Scrivo la funzione per creare i quadratini
function createSquares(){
    let numSquares = 100;
    let numSquareInRow = Math.sqrt(numSquares);
    for (i = 1; i <= numSquares; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width=`calc(100% / ${numSquareInRow})`;
        square.style.height=square.style.width;
        let index = square.innerHTML= i;
        playground.appendChild(square);
        square.addEventListener('click', function(){
            square.classList.add('safe');
            console.log(index);
        });
    }
}
//Scrivo la funzione Play - legata al submit
function play(e){
    e.preventDefault();
    //let playground = '';
    let playground = document.getElementById('playground');
    console.log(playground);
    createSquares()
}
btn.addEventListener('submit', play);
