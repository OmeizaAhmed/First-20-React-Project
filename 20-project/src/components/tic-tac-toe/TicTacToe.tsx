import { useEffect, useState } from "react";
import "./styles.css";

export default function TicTacToe() {
  const unfilledArr = Array(9).fill("");

  const [board, setBoard] = useState(unfilledArr);
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("X Turn");
  const [isOver, setIsOver] = useState(false);
  const [winPath, setWinPath] = useState<number[]>([]);

  function handleClick(boxId: number) {
    if (isOver) return;
    if (board[boxId]) return;
    const cpyBoard = [...board];
    cpyBoard[boxId] = isXTurn ? "X" : "O";
    setBoard(cpyBoard);
    setIsXTurn((prev) => !prev);
  }

  function checkGameStatus() {
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let pattern of patterns) {
      let [x, y, z] = pattern;
      x = board[x];
      y = board[y];
      z = board[z];
      if (x && x === y && y === z) {
        setWinPath(pattern);
        console.log(`${x} is the Winner`);
        return `${x} is the Winner`;
      }
    }

    if (board.every((item) => item !== "")) return "It is a Draw";
  }

  function restartGame() {
    setBoard(unfilledArr);
    setIsXTurn(true);
    setIsOver(false);
    setWinPath([])
  }

  useEffect(() => {
    const gameStatus = checkGameStatus();
    if (!gameStatus) {
      setStatus(`${isXTurn ? "X" : "O"} Turn`);
    } else {
      setStatus(gameStatus);
      setIsOver(true);
    }
  }, [board]);

  return (
    <div>
      <div className="tic-tac-toe-container">
        {board.map((square: string, index) => (
          <div key={index} className={`box ${winPath.includes(index)? "win" : ''}`} onClick={() => handleClick(index)} >
            {square}
          </div>
        ))}
      </div>
      <p className="status-bar">{status}</p>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
}
