import React from "react";
import { GUESSES } from "../consts/gameConsts";

const messageWon = "You have won! 🎉";
const messageLost = `You didn't make it in ${GUESSES} tries 😭`;

function Result({ correctAnswerFound, tries }) {
  const [startTime, setStartTime] = React.useState(0);
  const showResult = correctAnswerFound || tries === GUESSES;

  // Start the timer:
  React.useEffect(() => {
    setStartTime(Date.now());
  }, []);

  console.log(startTime);

  return (
    showResult && (
      <div>
        <h2>{correctAnswerFound ? messageWon : messageLost}</h2>
        <p>It took you {tries} tries </p>
      </div>
    )
  );
}

export default Result;
