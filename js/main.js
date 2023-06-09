/*----- constants -----*/


/*----- state variables -----*/

// - turn: 1/-1
// - board: 2D Array
//     null -> no player
//     1/-1 -> player at that cell
// - winner
//     null -> no winner/in play
//     1/-1 -> winner
//     'T' - >tie

let board;
let turn;
let winner;


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/

init();
function init() {
    board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]
    turn = 1;
    winner = null;
render();
}
function render() {
    
}