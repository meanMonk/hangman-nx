import React, { useEffect, useState } from 'react';
import './gameboard.scss';
import { MdRefresh, MdTimer } from 'react-icons/md';
import { wordList } from './gameboard.util';
import { ResultBoard, UserInput } from './userInputs/userInput';
import { ManFigure } from './manfigure/manfigure';

const KEYBOARD_KEYS = 'abcdefghijklmnopqrstuvwxyz'.split('');
const TIME_AVAILABLE = 100;

export const GameBoard = () => {
  const [answer, setAnswer] = useState('');
  const [intervalId, setIntervalId] = useState<any>();
  const [correctWord, setCorrectWord] = useState([]);
  const [wrongWord, setWrongWord] = useState([]);
  const [timeLeft, setTimeLeft] = useState(TIME_AVAILABLE);
  const [isTimeLoose, setTimeLoose] = useState(null);

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    if (!!timeLeft) {
      startTimer();
    } else {
      if (!!intervalId) clearTimeout(intervalId);
      setTimeLoose(true); // loose the game
    }
  }, [timeLeft]);

  const startTimer = () => {
    let id = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    setIntervalId(id);
  };

  const refresh = () => {
    let answer = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(answer);
    setAnswer(answer.toLowerCase());
    setCorrectWord([]);
    setWrongWord([]);
    if (!!intervalId) clearTimeout(intervalId);
    setTimeLeft(TIME_AVAILABLE);
  };

  const handleKey = (letter) => {
    setTimeLeft(TIME_AVAILABLE);
    if (answer.includes(letter)) {
      if (!correctWord.includes(letter)) {
        setCorrectWord((word) => [...word, letter]);
      }
    } else {
      if (!wrongWord.includes(letter)) {
        setWrongWord((word) => [...word, letter]);
      }
    }
  };

  return (
    <div className="gameboard-container">
      <nav className="title">
        <h1>The Hangman Game!</h1>
      </nav>
      <div className="playground">
        <div className="visual-ground">
          <div className="timer">
            <MdTimer color="#fff" size="30px" />
            <span>{timeLeft}</span>
          </div>
          <div className="hang-container">
            <ManFigure wrong={wrongWord} />
          </div>
          <button className="refresh" onClick={refresh}>
            <MdRefresh size="30px" color="#fff"></MdRefresh>
            <span>New Word</span>
          </button>
        </div>
        <div className="visual-question">
          <p>Guess the country name of 5 char long!</p>
        </div>
        <ResultBoard
          intervalId={intervalId}
          isTimeLoose={isTimeLoose}
          answer={answer}
          correctWord={correctWord}
          wrongWord={wrongWord}
        />
        <div className="visual-keyboard">
          {KEYBOARD_KEYS.map((key) => {
            return (
              <button
                className="keyboard-key"
                key={key}
                onClick={() => {
                  handleKey(key);
                }}
              >
                {key}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
