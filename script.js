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
            cell.forEach(cell => {
                cell.textContent="";
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

                cell.textContent = currentPlayer;
                gameboard[index] = currentPlayer;
                currentPlayer = currentPlayer == "X" ? "O" : "X"
                display();

                if (win()) {
                    const status = document.querySelector("p")
                    status.textContent =  `Player ${currentPlayer} wins`
                }

                console.log(event.target.id)
                console.log(gameboard)

            })
        })
    }

    function display() {
        const status = document.querySelector("p")
        status.textContent = `Player ${currentPlayer}'s turn`;
  
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
                console.log("this is a win");
                gameStatus = false;
            }
        }
       return false;
    }


    return {
        initialize,
        reset,
        win
    };

})();

game.initialize();