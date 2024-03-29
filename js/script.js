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
// costruisco i quadrati
function createSquares(content, numberinRow){
    const square = document.createElement('div');
        square.classList.add('square');
        square.style.width=`calc(100% / ${numberinRow})`;
        square.style.height=square.style.width;
        square.innerHTML= content;
    return square;
}
//Scrivo la funzione per generare bombe casuali
function rndBombs(rndLength, choiceRange){
  const bombs = [];
    while (bombs.length < rndLength){
        const bomb = getRndNumIncl(1, choiceRange);
        if (!bombs.includes(bomb)){
            bombs.push(bomb);
        }
    } 
    return bombs;
}
//Scrivo la funzione per creare tutto il playground
function createGrid(){
    //Accerto il livello e lo collego al numero di quadrati
    let numSquares;
    const NUM_BOMBS = 16;
    const level = document.getElementById('level').value;
    switch (level){
        case 'easy': 
            numSquares = 100;
            break;
        case 'medium':
            numSquares = 81;
            break;
        case 'hard':
            numSquares = 49;
            break;
    }
    //Genero le bombe
    const bombs = rndBombs(NUM_BOMBS, numSquares);
    //Calcolo il numero di quadrati per riga -->fondamentale per stabilire la grandezza dei quadratini
    let numSquareInRow = Math.sqrt(numSquares);
    for (i = 1; i <= numSquares; i++){
        //riprendo il quadratino creato e 'ritornato' dalla funzione e lo inserisco nel playground
        const square = createSquares(i, numSquareInRow);
        playground.appendChild(square);
        square.addEventListener('click', function(){
        const x = parseInt(square.innerHTML);
        if (bombs.includes(x)){
            square.classList.add('unsafe');
             } else 
             {square.classList.add('safe');
            }
        }
    );}
}
//Scrivo la funzione per contare i punti
function counter(){
    let pointsMsg = document.querySelector('h4');
    let points = document.getElementById('points').innerText;
    pointsMsg.innerHTML = `Il tuo punteggio è ${points}`;
    console.log(points);
    increment = ++points;
    pointsMsg.innerHTML = `Il tuo punteggio è <span id="points">${increment}</span>`;
    console.log(increment);
    return increment
}   
//Scrivo la funzione Play - legata al submit
function play(e){
    e.preventDefault();
    //prendo e cancello il playground prima del nuovo gioco
    let playground = document.getElementById('playground');
    playground.innerHTML = "";
    //prendo e azzero h4 del punteggio e punteggio
    let points = document.getElementById('points').innerText;
    let pointsMsg = document.querySelector('h4');
    pointsMsg.innerHTML = `Seleziona il livello e inizia a giocare!  <span id="points"></span>`;
    points = "";
    //creo griglia con quadratini
    createGrid();
    const squares = document.querySelectorAll('.square');
    //inserisco il contatore
    for (let p = 0; p < squares.length; p++){
        squares[p].addEventListener('click',counter);
    }
}

//Aggiungo la funzione al submit
btn.addEventListener('submit', play);