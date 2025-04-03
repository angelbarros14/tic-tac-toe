const game = (function () {
    let gameboard = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let gameStatus = true;

    function reset() {
        const cell = document.querySelectorAll(".cell") 
        const resetButton = document.getElementById("reset")
        resetButton.addEventListener("click", () => {
            gameboard= ["", "", "", "", "", "", "", "", ""];
            currentPlayer = "X";
            gameStatus = true;
            display();
            cell.forEach(cell => {
                cell.textContent="";
                cell.style.backgroundColor = "white";
            })
        })
        
    }

    reset();

    function initialize() {
        const cell = document.querySelectorAll(".cell") 
        cell.forEach(cell => {
            cell.addEventListener("click", (event) => {
                const index = parseInt(event.target.id);
                // check if the cell is already clicked
                if (gameboard[index] !== "") {
                    return;
                }

                if (!gameStatus) {
                    return;
                }
                
                cell.textContent = currentPlayer;
                gameboard[index] = currentPlayer;
                if (win()) {
                    gameStatus = false;
                    return;
                }

                currentPlayer = currentPlayer == "X" ? "O" : "X"
                display();
   
                console.log(event.target.id)
                console.log(gameboard)


            })
        })
    }

    function display() {
        const status = document.querySelector("p")
        status.textContent = `Player ${currentPlayer}'s turn`;

        if (reset()) {
            status.textContent = `Player ${currentPlayer}'s turn`;
        }

        if (!gameboard.includes("")) {
            status.textContent = "It's a tie";
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
                const status = document.querySelector("p")
                const cells = document.querySelectorAll(".cell");
                pattern.forEach(cell => {
                    cells[cell].style.backgroundColor = "#E6FFE6";
                })
                status.textContent =  `Player ${currentPlayer} wins`
                console.log("this is a win");
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