import { GUESSES, WORD_LENGTH } from "../consts/gameConsts";
import count from "./count";

const initialGridState = [];

count(0, GUESSES - 1).forEach(() => {
  initialGridState.push(
    Array(WORD_LENGTH).fill({ character: "", status: "notFound" })
  );
});

export default initialGridState;
