/**
 * Generate an array that keeps information about leach letter in the word.
 *
 * @param {string} currentWord The provided word from the user
 * @param {string} correctAnswer The correct word the user tries to guess.
 * @returns {array} Objects for each letter in the current word.
 */
function generateWordObject(currentWord, correctAnswer) {
  const lettersMap = []; // How many of each letter have been found

  // Generate the first map of letters:
  correctAnswer.split("").forEach((letter) => {
    lettersMap[letter] = (lettersMap[letter] || 0) + 1;
  });

  // Find out all letters that are a perfect match first:
  currentWord.forEach((letter, index) => {
    const wordCharIndex = correctAnswer.indexOf(letter);
    const charPosMatches = index === wordCharIndex;

    // Remove the letters that match from the map, so we know they are with
    // priority over the ones that just exist.
    if (charPosMatches) {
      lettersMap[letter] -= 1;
    }
  });

  return currentWord.map((letter, currWordCharIndex) => {
    let status = "notFound";
    const charPosMatches =
      correctAnswer[currWordCharIndex] === letter.character;
    const hasLetter = lettersMap[letter.character] > 0;

    // Meaning that the guess character matches the position of the correct word
    if (charPosMatches && hasLetter) {
      lettersMap[letter.character] -= 1;
      status = "matches";
    }

    // Best case scenario fails, so we check if the letter exists in the word:
    if (!charPosMatches && hasLetter) {
      lettersMap[letter.character] -= 1;
      status = "exists";
    }

    return {
      character: letter.character,
      status: status,
    };
  });
}

export default generateWordObject;
