import React, {Component, Fragment} from 'react';
import Question from './Question';

const questions = [
  {question: 'What animal has three eyelids?', hint: "It's the ship of the desert", hintThreshold: 2, answer: 'camel'},
];

class Game extends Component {
  state = {
    finished: false,
    currentQuestion: 0,
  };
  render() {
    return <Fragment>{questions.map((x, i) => <Question key={i} {...x} />)}</Fragment>;
  }
}

export default Game;
