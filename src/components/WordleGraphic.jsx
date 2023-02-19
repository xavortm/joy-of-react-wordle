import React from "react";
import styled from "styled-components";

import { WORD_LENGTH } from "../consts/gameConsts";
import initialGridState from "../utils/grid";

const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Cell = styled.span`
  background: white;
  width: 4rem;
  height: 4rem;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: bold;

  background: ${(props) => {
    if (props.highlight === "exists") return "#f9c642";
    if (props.highlight === "matches") return "#4aa564";
    if (props.highlight === "notFound") return "#333";
    return "white";
  }};

  color: ${(props) => {
    if (props.highlight === "notFound") return "#fff";
    return "black";
  }};
`;

/**
 * Render the grid and highlight the letter.
 *
 * @param {number} props.currentWord the provided live in the input
 * @param {number} props.wordsHistory All words provided without the current
 * @returns
 */
function WordleGraphic({ currentWord, wordsHistory }) {
  const grid = initialGridState;
  grid.splice(0, wordsHistory.length, ...wordsHistory);

  // This is the current word being typed:
  if (wordsHistory.length < grid.length) {
    grid[wordsHistory.length] = currentWord.concat(
      Array(WORD_LENGTH - currentWord.length).fill({
        character: "",
        status: "notTyped",
      })
    );
  }

  return (
    <Grid>
      {grid.map((row, index) => {
        return (
          <Row key={index}>
            {row.map((cell, index) => {
              return (
                <Cell key={index} highlight={cell.status}>
                  {cell.character}
                </Cell>
              );
            })}
          </Row>
        );
      })}
    </Grid>
  );
}

export default WordleGraphic;
