import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Question from './Question';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
let starterQuestions = [
  {
    question: 'What animal has three eyelids?',
    hint: "It's the ship of the desert",
    hintThreshold: 2,
    answer: 'camel',
  },
];
class Game extends Component {
  state = {
    finished: false,
    currentQuestion: starterQuestions[0],
    questions: starterQuestions,
  };
  handleMoveNext = () => {
    console.log('handleMoveNext');
    let updatedQuestions = this.state.questions;
    updatedQuestions.shift();
    this.setState({questions: updatedQuestions});
  };
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        {this.state.questions.length > 0 && (
          <Question moveNext={() => this.handleMoveNext()} {...this.state.currentQuestion} />
        )}
      </div>
    );
  }
}

Game.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Game);
