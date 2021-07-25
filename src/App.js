import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let score = {
    player_1: 0,
    player_2: 0
  }

  let [currentScore, setCurrentScore] = useState(0);
  let [currentPlayer, setCurrentPlayer] = useState(1);
  let [firstPlayerScore, setFirstPlayerScore] = useState(0);
  let [secondPlayerScore, setSecondPlayerScore] = useState(0);
  let dice;


    const btnRoll = () => {
        dice = Math.floor(Math.random() * 6) + 1;
      
      if(dice != 2) {
       setCurrentScore(currentScore += dice);
       
      } else {
        if(currentPlayer === 1) {
          setCurrentPlayer(2);
        } else {
          setCurrentPlayer(1);
        }
          setCurrentScore(0);
      }
    };

    const btnHold = () => {
      if(currentPlayer === 1) {
        setFirstPlayerScore(currentScore);
        setCurrentScore(0);
        setCurrentPlayer(2);
      } else {
        setSecondPlayerScore(currentScore);
        setCurrentScore(0);
        setCurrentPlayer(1);
      }
    };



    console.log("Score is " + currentScore);
    console.log("Current Player is  " + currentPlayer);
    console.log(firstPlayerScore);
    console.log(secondPlayerScore);
  
    
    


  return (
    <div className="App">
      
      <div id="logo">
      <img
        src="/img/logoDice.svg"
        alt="Pigy"
      />
      <h1>Rolling Dice</h1>
    </div>
    <div id="content-wrapper">
      <div id="left_side">
        <h1>Player 1</h1>
        <div class="current_score current_score_0">55</div>
        <button class="btn btn_roll_0" onClick={btnRoll}>Button Roll</button>
        <button class="btn btn_hold"onClick={btnHold}>Button Hold</button>
      </div>
      <div id="mid_content">
        <button class="btn btn_newgame">New Game</button>
        <img src='img/dice-4.png' alt="Dice" class="dice_img" />
        <p>All Rights Reserved &copy;</p>
      </div>

      <div id="right_side">
        <h1>Player 2</h1>
        <div class="current_score current_score_1">0</div>
        <button class="btn btn_roll_1">Button Roll</button>
        <button class="btn btn_hold">Button Hold</button>
      </div>
    </div>

    <footer>
      <div class="footer">
        <p>
          Player Rolls the Dice, if it's not 2, the game continuous and the
          Player can Hold the Score untill he gets 101. If Dice is 1 then Player
          loses his progress and turn is passed to the other Player.
        </p>
      </div>
    </footer>

    </div>
  );
}

export default App;
