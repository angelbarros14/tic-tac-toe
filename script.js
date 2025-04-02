const game = (function () {
    let gameboard = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = "X";
    let gameStatus = true;

    function initialize() {
        const cell = document.querySelectorAll(".cell") 
        cell.forEach(cell => {
            cell.addEventListener("click", (event) => {
                const index = parseInt(event.target.id);
                cell.textContent = currentPlayer;
                console.log(event.target.id)
                gameboard[index] = currentPlayer;
                console.log(gameboard)

            currentPlayer = currentPlayer == "X" ? "O" : "X"

            // check if the cell is already clicked
            // check if all the cell is clicked
            // 
            })
        })
    }

    initialize();
    return {
        
    };

})();



// const cell = document.querySelectorAll(".cell")
// cell.forEach(cell => {
//     cell.addEventListener("click", () => {
//         cell.textContent = cell.id;
//     })
// })