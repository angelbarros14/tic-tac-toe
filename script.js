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


                console.log(event.target.id)
                console.log(gameboard)


            // check if all the cell is clicked
            // 
            })
        })
    }

    initialize();
    reset();
    return {
        
    };

})();



// const cell = document.querySelectorAll(".cell")
// cell.forEach(cell => {
//     cell.addEventListener("click", () => {
//         cell.textContent = cell.id;
//     })
// })