import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Slide from 'material-ui/transitions/Slide';
import Typography from 'material-ui/Typography';
import Zoom from 'material-ui/transitions/Zoom';
import Extra from './resources/questions';
import Question from './Question';

const styles = theme => ({
  finishWrapper: {
    padding: 10,
  },
});

class Game extends Component {
  state = {
    finished: false,
    currentQuestion: Extra[0],
    questions: Extra,
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
          this.setState({finished: true});
        }
      }, 300);
    });
  };

  render() {
    const {classes} = this.props;
    return (
      <div>
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
          <div className={classes.finishWrapper}>
            <Zoom in={true} timeout={1000}>
              <Typography variant="display4" gutterBottom align="center">
                You won!!!
              </Typography>
            </Zoom>
            <Zoom in={true} timeout={1000}>
              <Typography variant="headline">
                {`Please call (225) 454-9424 with the final secret code: Ermahgerd! That verss fern!!🤓`}
              </Typography>
            </Zoom>
          </div>
        )}
      </div>
    );
  }
}

Game.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Game);
