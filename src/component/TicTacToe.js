import React, { useState, useEffect } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import Confetti from "react-confetti";


const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [winner, setWinner] = useState(null);
  


  useEffect(() => {
    const gameWinner = calculateWinner(board);
    if (gameWinner) {
      setWinner(gameWinner);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [board]);
  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const status = winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? "X" : "O"}`;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
         {showConfetti && <Confetti drawShape={ctx => {
    ctx.beginPath()
    for(let i = 0; i < 22; i++) {
      const angle = 0.35 * i
      const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
      const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
      ctx.lineTo(x, y)
    }
    ctx.stroke()
    ctx.closePath()
  }}/>}
      <Typography variant="h4" gutterBottom sx={{fontFamily: "cursive"}}>Tic-Tac-Toe</Typography>
      <Typography variant="h6" sx={{fontFamily: "cursive",color: isXNext? "#ef0b62" : "#1115f6"}} gutterBottom>{status}</Typography>
      <Grid container xs={2} sx={{marginLeft:"42%"}}>
        {board.map((value, index) => (
          <Grid item xs={12/3} key={index} sx={{border: "2px solid black", background: value == "X" ? "#c7f3f4" : value == "O" ? "#c7f4cf" : "white"}}>
            
               <Button
                fullWidth
                style={{fontFamily: "cursive", fontSize: "24px", margin:"1rem",height:"1rem", width:"1rem", color: value == "X" ? "#ef0b62" : "#1115f6"}}
                onClick={() => handleClick(index)}
              >
                {value}
              </Button> 
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" style={{ marginTop: "20px" }} onClick={() => {setBoard(Array(9).fill(null)); setWinner(null)}}>
        Reset Game
      </Button>
    </div>
  );
};

export default TicTacToe;