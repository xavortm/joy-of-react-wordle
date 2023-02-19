import { WORD_LENGTH } from "../consts/gameConsts";
import styled from "styled-components";

const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  gap: 0.5em;
  flex-direction: column;

  &[disabled] {
    opacity: 0.2;
  }

  & label {
    font-weight: 600;
  }

  & input {
    padding: 1em;
    border: 2px solid #ddd;
  }
`;

function WordleInput({ currentWord, onSubmit, onWordChange, disabled }) {
  const wordArr = currentWord.map((letter) => letter.character);

  return (
    <Form disabled={disabled} onSubmit={onSubmit}>
      <label htmlFor="word-input">Guess the word:</label>
      <input
        id="word-input"
        name="word-input"
        maxLength={WORD_LENGTH + 1}
        pattern={`[A-Za-z]{${WORD_LENGTH}}`}
        onChange={onWordChange}
        value={wordArr.join("")}
        disabled={disabled}
      />
    </Form>
  );
}

export default WordleInput;
