import Key from "./Key";
import styled from "styled-components";

import generateWordObject from "../utils/generateWordObject";

// Styled components:
const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  margin-left: ${({ push = 0 }) => {
    return push + "rem";
  }};
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

// Just the keys from the keyboard:
const lettersRow1 = "qwertyuiop".split("");
const lettersRow2 = "asdfghjkl".split("");
const lettersRow3 = "zxcvbnm".split("");

function Keyboard({ wordsHistory, correctAnswer }) {
  const letters = [];

  wordsHistory.forEach((word) => {
    const wordObj = generateWordObject(word, correctAnswer);
    wordObj.forEach((letter) => {
      letters[letter.character] = letter.status;
    });
  });

  return (
    <Layout>
      <Row>
        {lettersRow1.map((character) => (
          <Key status={letters[character]} key={character}>
            {character}
          </Key>
        ))}
      </Row>
      <Row push={1.5}>
        {lettersRow2.map((character) => (
          <Key status={letters[character]} key={character}>
            {character}
          </Key>
        ))}
      </Row>
      <Row push={2.5}>
        {lettersRow3.map((character) => (
          <Key status={letters[character]} key={character}>
            {character}
          </Key>
        ))}
      </Row>
    </Layout>
  );
}

export default Keyboard;
