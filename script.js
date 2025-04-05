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
            cell.addEventListener("click", (event) => {
                const index = parseInt(event.target.id);
                if (gameboard[index] !== "" || !gameStatus) {return;}
                
                cell.textContent = currentPlayer;
                toggle();
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
            if (gameboard[a] == gameboard[b] && gameboard[a] == gameboard[c] && gameboard[a] != "") {
                pattern.forEach(cell => {
                    cells[cell].style.backgroundColor = "#E6FFE6";
                })

                display(`Player ${currentPlayer} wins`);
                gameStatus = false;
            }
        }
    }

    return {
        initialize
    };

})();

game.initialize();