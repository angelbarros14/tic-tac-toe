const game = (function () {
    let gameboard = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let gameStatus = true;
    let status;
    let cells;

    function reset() {
        const resetButton = document.getElementById("reset");
        resetButton.addEventListener("click", () => {
            gameboard= ["", "", "", "", "", "", "", "", ""];
            currentPlayer = "X";
            gameStatus = true;
            display(`Player ${currentPlayer}'s turn`);

            cells.forEach(cell => {
                cell.textContent="";
                cell.style.backgroundColor = "white";
            })
        })   
    }

    function initialize() {
        status = document.querySelector("p");
        cells = document.querySelectorAll(".cell");

        cells.forEach(cell => {
            // if cell is clicked
            cell.addEventListener("click", (event) => {
                // find the index of the clicked cell
                const index = parseInt(event.target.id);
                // if the cell that's clicked is not an empty cell or if the game is over, ignore the click
                if (gameboard[index] !== "" || !gameStatus  
                ) {
                    return;
                }
                
        
                // initial is X
                cell.textContent = currentPlayer;
                // if cell is clicked, switch player
                toggle();
                // add to gameboard array the current player
                gameboard[index] = currentPlayer;
                
                draw();
                win();  
                reset();
            })
        })
    }
    
    function toggle() {
        currentPlayer = currentPlayer == "X" ? "O" : "X"
        display(`Player ${currentPlayer}'s turn`);
    }

    function display(message) {
        status.textContent = message;
    }

    function draw() {
        if (!gameboard.includes("")) {
            display("It's a tie")
            gameStatus = false;
        }
    }

    function win() {
        const winningPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let pattern of winningPatterns) {
            const [a, b, c] = pattern;
            // if pattern a is same as b and c AND if pattern in any is not ""
            if (gameboard[a] == gameboard[b] && gameboard[a] == gameboard[c] && gameboard[a] != "") {
                pattern.forEach(cell => {
                    cells[cell].style.backgroundColor = "#E6FFE6";
                })
                display(`Player ${currentPlayer} wins`);
                gameStatus = false;
                return true;
            }
        }
    }

    return {
        initialize
    };

})();

game.initialize();

/*
refactor:
function for checking winner
function for checking draw
function for switching player
function for updating player status
function for highlighting winning cells
function for reset game
function for handling cell clicks
    if cell is filled
    if game has winner
    if game is draw
    updating cell content
    updating switching player
function for initializing game
*/

/*
when does display change?
when a player switches or when cell is clicked
when a player wins
when game is draw
when game is reset
*/

/*
move dom references that will be populated
*/