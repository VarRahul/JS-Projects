const sudBoard = [
[0,0,0,0,0,0,0,4,0],
[0,8,5,0,4,9,0,0,0],
[9,0,0,0,3,7,5,2,8],
[0,4,0,9,5,0,0,3,6],
[0,0,0,0,0,0,0,0,0],
[6,5,0,0,8,2,0,7,0],
[8,3,7,5,1,0,0,0,2],
[0,0,0,4,2,0,8,1,0],
[0,1,0,0,0,0,0,0,0]];

  /* function range(start, end)
{
  var ans = [];
  for(let i = start; i <= end; i++)
  {
    ans.push(i);
  }
  return ans;
}
*/
function solveBoard()
{
  const find = find_empty(sudBoard);
  if(find != null)
  {
    return true;
  }
  else
  {
    row = find[0];
    column = find[1];
  }

  for(var i = 0; i < 10; i++)
  {
    if(isValid(sudBoard, i, (row, column)))
    {
      sudBoard[row][column] = i;

      if(solve(sudBoard))
      {
        return true;
      }
      sudBoard[row][column] = 0;
    }
  }
  return false;
}



function isValid(sudBoard, num, pos)
{
  for(var i; i < sudBoard[0].length; i++)
  {
    if(sudBoard[pos[0]][i] == num && pos[1] != i)
    {
      return false;
    }
  }
  for(var i; i <sudBoard.length; i++)
  {
    if(sudBoard[i][pos[1]] == num && pos[0] != i)
    {
      return false;
    }
  }

  const boxX = pos[1] / 3
  const boxY = pos[0] / 3

  for(var i; i <sudBoard[boxY * 3, boxY * 3 + 3].length; i++)
  {
    for(var j; j <sudBoard[boxY * 3, boxY * 3 + 3].length; j++)
    {
      if(sudBoard[i][j] == num && (i,j) != pos)
      {
        return false;
      }
    }
  }
  return true;
}

function printBoard(board)
{
  for(var i = 0; i < sudBoard.length; i++)
  {
    var row = "";
    if(i % 3 == 0 && i !=0)
    {
      console.log("------------------------");
    }
    for(var j = 0; j < sudBoard[0].length; j++)
    {
      if(j % 3 == 0 && j != 0)
      {
        row += " | ";
      }
      row += (sudBoard[i][j] + " ");
    }
    console.log(row);
  }
}

printBoard(sudBoard);
// console.log(sudBoard);

function find_empty(sudBoard)
{
  for(var i = 0; i < sudBoard.length; i++)
  {
    for(var j = 0; j < sudBoard[0].length; j++)
    {
      if(sudBoard[i][j] == 0)
      {
        return [i, j]; // row, column
      }
    }
  }
  return null;

}
console.log(find_empty(sudBoard));
// console.log(sudBoard);
// solveBoard(sudBoard);
// console.log(sudBoard);
