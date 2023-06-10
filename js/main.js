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
const message = document.querySelector('h1')
const button = document.querySelector('button')
const markers = document.getElementById('markers')


/*----- event listeners -----*/
markers.addEventListener('click', function(evt){
    const index = Array.from(evt.target.parentNode.children).indexOf(evt.target)
    const col = board[index]
    for (let i = 0; i < col.length; i++) {
        if (col[i] === 0) {
            col[i] = turn;
            break;
        }
    }
    turn *= -1;
    winner = checkForWinner();
    render();
    
    
  })

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
    renderBoard();
    renderMessage();
    renderControls();
}
function renderBoard() {
    for (let colIdx = 0; colIdx < board.length; colIdx++) {
        const col = board[colIdx];

        for (let rowIdx = 0; rowIdx < col.length; rowIdx++) {
            const cellEl = `c${colIdx}r${rowIdx}`;

            let color;
            if (col[rowIdx] === 1) {
                color = 'purple';
            } else if (col[rowIdx] === -1) {
                color = 'orange'
            } else {
                color = 'white'
            }
            document.getElementById (cellEl).style.backgroundColor = color;
        }
    }
}

function renderMessage() {
    if (winner === 1 || winner === -1){
        message.innerHTML = 'Congrats!'
    } else if (turn === 1) {
        message.innerHTML = `Purple's Turn`
    } else if (turn === -1) {
        message.innerHTML = `Orange's Turn`
    }
}

function renderControls() {
    if (winner === null) {
        button.style.display='none'
    } else if (winner === 1 || winner === -1) {
        button.style.display='block'
    } else if (winner === 'T') {
        button.style.display='block'
    }
}

function checkForWinner() {
    for (let col = 0; col < board.length; col++) {
        for (let row = 0; row < board[col].length; row++) {
          const cell = board[col][row];
          if (cell !== 0 &&
              cell === board[col][row + 1] &&
              cell === board[col][row + 2] &&
              cell === board[col][row + 3]) {
            return cell
          }
        }
      }
    return null
}