const removeCommas = guess => guess.replace(/,/i, '');
const trimAndRemoveFeet = (guess = '') => guess.trim().replace(/ feet/i, '');
const removeLee = guess => guess.replace(/ lee /i, ' ');

const questions = [
  {
    question: 'What is the code to begin the trivia challenge(just guess)?',
    hint: 'Check Hangouts',
    hintThreshold: 1,
    answer: 'i love my stinky husband',
  },
  {
    question: 'What animal has three eyelids?',
    answer: 'camel',
    hint: "It's the ship of the desert",
    hintThreshold: 1,
  },
  {
    question: 'How many miles away is the moon from the Earth?',
    answer: '238900',
    hint: 'You can always google it',
    hintThreshold: 1,
    adjustment: removeCommas,
  },
  {
    question: 'How tall is a baby giraffe when it is born?',
    answer: '6',
    hint: 'You can always google it',
    hintThreshold: 1,
    adjustment: trimAndRemoveFeet,
  },
  {
    question: 'Who was the first mother in space?',
    answer: 'anna fisher',
    hint: 'You can always google it',
    hintThreshold: 1,
    adjustment: removeLee,
  },
  {
    question: 'What is 4 * 106917 * 12 + 2?',
    answer: '5132018',
    hint: 'Use a calculator',
    hintThreshold: 0,
    adjustment: removeCommas,
  },
  {
    question: 'What is the secret code to begin the ultra intense challenge(just guess)?',
    answer: 'best hubby evar',
    hint: "It's on the coffee pot",
    hintThreshold: 2,
  },
  {
    directions: 'The next code is on something currently close to where you dream...',
    question: 'What is the secret code?',
    answer: 'game on',
    hint: `The answer sticks on the underside of that something`,
    hintThreshold: 2,
  },
  {
    directions:
      'Start Minecraft. Find your world (you will know which one is yours). Open the game in Survival mode, with the Peaceful difficulty. Find the first code and return with your revelation...',
    question: 'What is the secret code?',
    answer: 'love',
    hint: 'You need to beat the maze',
    hintThreshold: 1,
  },
  {
    directions: 'Continue on! Return with the code from the sky(you might have to explore)...',
    question: 'What is the secret code?',
    answer: '1281',
    hint: 'Follow the stairs down by where you respawned',
    hintThreshold: 1,
  },
  {
    directions: 'Continue on! Return with your revelation...',
    question: 'What is the secret code?',
    answer: 'relaxation',
  },
  {
    directions: 'Escape the room! Return with your last code...',
    question: 'What is the final code?',
    answer: `kathryn's mothers day`,
  },
  {
    question: 'What that fern? (you can say no)',
    answer: 'yes',
    hint: `OMG, that's mean! 😭`,
    hintThreshold: 1,
  },
];

export default questions.map((x, i) => ({...x, id: i + 1}));
