import React from "react";
import styled from "styled-components";

import { WORD_LENGTH, GUESSES, WORDS } from "./consts/gameConsts";
import generateWordObject from "./utils/generateWordObject.js";

import WordleGraphic from "./components/WordleGraphic";
import WordleInput from "./components/WordleInput";
import Keyboard from "./components/Keyboard";
import Result from "./components/Result";

const Window = styled.div`
  max-width: 30rem;
  padding: 4rem;
  background: white;
  border-radius: 0.5rem;
  text-align: center;

  & h1 {
    margin-top: 0;
  }
`;

// To be replaced with an API call ...
const correctAnswer = WORDS[0];

function App() {
  const [currentWord, setCurrentWord] = React.useState([]);
  const [wordsHistory, setWordsHistory] = React.useState([]);
  const [correctAnswerFound, setCorrectAnswerFound] = React.useState(false);

  /**
   * The form submit - when a word is submitted.
   *
   * @param {Object} event The form submit event
   * @returns {null} Nothing returned.
   */
  function onSubmit(event) {
    event.preventDefault();

    // Submitting is not allowed when there is not enough letters provided.
    // todo - shake the input field.
    if (currentWord.length < WORD_LENGTH) {
      return;
    }

    // Reached the end of the game, if the word is incorrect, mark as lost.
    if (wordsHistory.length >= GUESSES) {
      return;
    }

    setWordsHistory([
      ...wordsHistory,
      generateWordObject(currentWord, correctAnswer),
    ]);
    setCurrentWord([]);

    setCorrectAnswerFound(
      correctAnswer === currentWord.map((letter) => letter.character).join("")
    );
  }

  /**
   * Each key stroke entered in the input field.
   *
   * @param {Object} event Each input event
   * @returns {null} Nothing in particular :)
   */
  function onWordChange(event) {
    const word = event.target.value.toLowerCase();
    if (word.length > WORD_LENGTH) {
      return;
    }

    const formattedWord = [...word].map((letter) => {
      return { character: letter, status: "notTyped" };
    });

    setCurrentWord(formattedWord);
  }

  return (
    <Window>
      <h1>Welcome to Wordle!</h1>

      <WordleGraphic currentWord={currentWord} wordsHistory={wordsHistory} />
      <WordleInput
        disabled={wordsHistory.length >= GUESSES || correctAnswerFound}
        onSubmit={onSubmit}
        currentWord={currentWord}
        onWordChange={onWordChange}
      />
      <Keyboard correctAnswer={correctAnswer} wordsHistory={wordsHistory} />

      <Result
        tries={wordsHistory.length}
        correctAnswerFound={correctAnswerFound}
      />
    </Window>
  );
}

export default App;
