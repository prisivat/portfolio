import React, { useState, useEffect } from "react";
import { Button, Grid, Typography } from "@mui/material";
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
      setTimeout(() => setShowConfetti(false), 10000);
    }
  }, [board]);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
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
    for (let [a, b, c] of winningCombinations) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setShowConfetti(false);
  };

  const status = winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? "X" : "O"}`;

  return (
    <>
    {/* Confetti only when there is a winner */}
      {showConfetti && (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <Confetti drawShape={ctx => {
    ctx.beginPath()
    for(let i = 0; i < 22; i++) {
      const angle = 0.35 * i
      const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
      const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
      ctx.lineTo(x, y)
    }
    ctx.stroke()
    ctx.closePath()
  }}/>
        </div>
      )}

      <Typography variant="h4" gutterBottom sx={{ fontFamily: "cursive" }}>Tic-Tac-Toe</Typography>
      <Typography variant="h6" sx={{ fontFamily: "cursive" }} gutterBottom>
        {status}
      </Typography>

      {/* Grid Layout */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "5px", marginTop: "10px" }}>
        {board.map((value, index) => (
          <Button
            key={index}
            style={{
              width: "80px",
              height: "80px",
              fontSize: "24px",
              background: value === "X" ? "#5a1b1b" : value === "O" ? "#ffe0dc" : "white",
              color: value === "X" ? "#ffe0dc" : "#5a1b1b",
              border: "2px solid black"
            }}
            onClick={() => handleClick(index)}
          >
            {value}
          </Button>
        ))}
      </div>

      {/* Reset Button */}
      <Button
  variant="contained"
  sx={{
    marginTop: "20px",
    color: "black",
    background: "#61DAFB",
    "&:hover": {
      color: "#61DAFB",
      background: "black",
    },
  }}
  onClick={resetGame}
>
  Reset Game
</Button>

    </>
  );
};

export default TicTacToe;
