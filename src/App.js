import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let [currentScore, setCurrentScore] = useState(0);
  let [currentPlayer, setCurrentPlayer] = useState(0);
  let [firstPlayerScore, setFirstPlayerScore] = useState(0);
  let [secondPlayerScore, setSecondPlayerScore] = useState(0);
  const [disable, setDisable] = useState(false);
  // const playerOneBtn = useRef(true);
  // const playerSecondBtn = useRef(false);
  let dice;

  const btnRoll = () => {
    dice = Math.floor(Math.random() * 6) + 1;

    if (dice !== 2) {
      setCurrentScore((currentScore += dice));
    } else {
      if (currentPlayer === 0) {
        setCurrentPlayer(1);
      } else if (currentPlayer === 1) {
        setCurrentPlayer(0);
      }
      setCurrentScore(0);
      setDisable(!disable);
    }
  };

  const btnHold = () => {
    if (currentPlayer === 0) {
      setCurrentScore(0);
      setFirstPlayerScore((firstPlayerScore += currentScore));
      setCurrentPlayer(1);
      setDisable(!disable);
    } else {
      setSecondPlayerScore((secondPlayerScore += currentScore));
      setCurrentScore(0);
      setCurrentPlayer(0);
      setDisable(!disable);
    }
  };

  useEffect(() => {
    
    
  },firstPlayerScore, secondPlayerScore)

  // console.log("Current Score is " + currentScore);
  // console.log("Current Player is  " + currentPlayer);
  // console.log("First Player is " + firstPlayerScore);
  // console.log("Second Player is " + secondPlayerScore);

  return (
    <div className="App">
      <div id="logo">
        <img src="/img/logoDice.svg" alt="Pigy" />
        <h1>Rolling Dice</h1>
      </div>
      <div id="content-wrapper">
        <div id="left_side">
          <h1>Player 1</h1>
          <div className="current_score current_score_0">{firstPlayerScore}</div>
          <button
            className="btn btn_roll_0"
            onClick={btnRoll}
            disabled={disable}
          >
            Button Roll
          </button>
          <button className="btn btn_hold" onClick={btnHold} disabled={disable}>
            Button Hold
          </button>
        </div>
        <div id="mid_content">
          <button className="btn btn_newgame">New Game</button>
          <img src="img/dice-4.png" alt="Dice" className="dice_img" />
          <p>All Rights Reserved &copy;</p>
        </div>

        <div id="right_side">
          <h1>Player 2</h1>
          <div className="current_score current_score_1">{secondPlayerScore}</div>
          <button
            className="btn btn_roll_1"
            onClick={btnRoll}
            disabled={!disable}
          >
            Button Roll
          </button>
          <button className="btn btn_hold" onClick={btnHold} disabled={!disable}>
            Button Hold
          </button>
        </div>
      </div>

      <footer>
        <div className="footer">
          <p>
            Player Rolls the Dice, if it's not 2, the game continuous and the
            Player can Hold the Score untill he gets 101. If Dice is 1 then
            Player loses his progress and turn is passed to the other Player.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
