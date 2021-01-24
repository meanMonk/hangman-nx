import React from 'react';
import { checkResult } from '../gameboard.util';

export const UserInput = ({ answer, correctWord }) => {
  return (
    <div className="visual-inputs">
      {answer.split('').map((letter, index) => {
        if (correctWord.indexOf(letter) >= 0) {
          return (
            <span key={index} className="input-item">
              {letter}
            </span>
          );
        } else {
          return (
            <span key={index} className="input-item">
              _
            </span>
          );
        }
      })}
    </div>
  );
};

export const Result = ({
  answer,
  correctWord,
  wrongWord,
  isTimeLoose,
  intervalId,
}) => {
  let res = checkResult(correctWord, wrongWord, answer);
  if (res === 'winner') {
    clearTimeout(intervalId);
    return (
      <div className="visual-response">
        <p className="success">!!You Won The Game!!!</p>
      </div>
    );
  } else if (res === 'loose' || !!isTimeLoose) {
    clearTimeout(intervalId);
    return (
      <div className="visual-response">
        <p className="failed">Opps...! You loose the game.</p>
      </div>
    );
  }
  return null;
};

export const ResultBoard = ({
  answer,
  correctWord,
  wrongWord,
  isTimeLoose,
  intervalId,
}) => {
  return (
    <>
      <Result
        intervalId={intervalId}
        answer={answer}
        correctWord={correctWord}
        wrongWord={wrongWord}
        isTimeLoose={isTimeLoose}
      />
      <UserInput answer={answer} correctWord={correctWord} />
    </>
  );
};
