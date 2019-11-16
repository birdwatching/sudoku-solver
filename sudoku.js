/*
//global variable
//accesible to all functions

/*
for each grid cell
    if grid cell is empty
        // we try possible numbers
        for numbers 1 - 9
            if number satisfies Sudoku requirements
                set grid cell to number
                if(recursive call returns true)
                    return true; //we continue
                else
                    set grid cell back to 0 //try next number
            return false; //this is returned if no number works so we backtrack
printBoard();

*/

var sol = [[0, 7, 0, 2, 3, 8, 0, 0, 0],
    [0, 0, 0, 7, 4, 0, 8, 0, 9],
    [0, 6, 8, 1, 0, 9, 0, 0, 2],
    [0, 3, 5, 4, 0, 0, 0, 0, 8],
    [6, 0, 7, 8, 0, 2, 5, 0, 1],
    [8, 0, 0, 0, 0, 5, 7, 6, 0],
    [2, 0, 0, 6, 0, 3, 1, 9, 0],
    [7, 0, 9, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 9, 7, 4, 0, 8, 0]];

//prints board
var printBoard = function () 
{
    var table = document.getElementById("table");
    
    for (var x = 0; x < 9; x++) 
    {
        for (var y = 0; y < table.rows[x].cells.length; y++) 
        {
            if (sol[x][y] != 0) 
            {
                table.rows[x].cells[y].innerHTML = sol[x][y];
            }
        }
    }
};


function numbercheck(board, row, col, k) 
{
    for (let i = 0; i < 9; i++) {
        
        //check if valid
        var g = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        var h = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[g][h] == k) {
            return false;
        }
    }
    return true;
}

printBoard();

var solve = function () 
{
    for (let i = 0; i < 9; i++) 
    {
        for (let j = 0; j < 9; j++) 
        {
            //for each, check if 0
            if (sol[i][j] == 0) 
            {
                //check 1-9
                for (let k = 1; k <= 9; k++) 
                {
                    if (numbercheck(sol, i, j, k)) 
                    {
                        //set
                        sol[i][j] = `${k}`;
                        table.rows[i].cells[j].innerHTML = sol[i][j];
                        if (solve()) 
                        {
                            return true;
                        } else 
                        {
                            sol[i][j] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
};

