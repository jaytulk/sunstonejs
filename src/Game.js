import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Slide from 'material-ui/transitions/Slide';
import Typography from 'material-ui/Typography';
import Zoom from 'material-ui/transitions/Zoom';
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
    id: 1,
    question: 'What animal has three eyelids?',
    hint: "It's the ship of the desert",
    hintThreshold: 2,
    answer: 'camel',
  },
  {
    id: 2,
    question: 'What is 8 * 6?',
    answer: '42',
  },
  {
    id: 3,
    question: 'What is the secret code?',
    instructions: 'Open your world on Minecraft, Marma. Complete the tasks and return your revelations...',
    answer: 'number',
  },
];

class Game extends Component {
  state = {
    finished: false,
    currentQuestion: starterQuestions[0],
    questions: starterQuestions,
    questionSet: true,
  };

  handleMoveNext = () => {
    const nextQuestionId = this.state.currentQuestion.id + 1;
    this.setState({currentQuestion: null}, () => {
      setTimeout(() => {
        const nextQuestion = this.state.questions.find(x => x.id === nextQuestionId);
        if (nextQuestion) {
          this.setState({currentQuestion: nextQuestion});
        } else {
          this.setState({currentQuestion: null, finished: true});
        }
      }, 300);
    });
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        {!this.state.finished && (
          <Slide
            direction={!!this.state.currentQuestion ? 'left' : 'right'}
            in={!!this.state.currentQuestion}
            mountOnEnter
            unmountOnExit
          >
            <Question moveNext={() => this.handleMoveNext()} {...this.state.currentQuestion} />
          </Slide>
        )}
        {this.state.finished && (
          <Zoom in={true} timeout={1000}>
            <Typography variant="display4" gutterBottom>
              You won!!!
            </Typography>
          </Zoom>
        )}
      </div>
    );
  }
}

Game.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Game);
