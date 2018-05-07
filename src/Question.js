import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Save from '@material-ui/icons/Save';
import {CircularProgress} from 'material-ui/Progress';
import green from 'material-ui/colors/green';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: 400,
  }),
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  answerRoot: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
  },
  buttonRoot: {
    display: 'flex',
    // alignSelf: 'center',
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: theme.spacing.unit,
  },
});

class Question extends Component {
  state = {
    guess: null,
    loading: false,
    guessCount: 0,
    answerAchieved: false,
  };

  handleOnChange = (e, test) => {
    this.setState({guess: e.target.value || ''});
  };

  handleSubmit = async () => {
    console.log('handling test', this.state.guess);
    this.setState({loading: true}, () => {
      setTimeout(() => {
        console.log('testing', this.state.guess, this.props, this.state.guessCount);
        this.setState(
          {
            loading: false,
            answerAchieved: this.state.guess === this.props.answer,
            guessCount: ++this.state.guessCount,
          },
          () => {
            console.log('answer achieved: ', this.state.answerAchieved, this.state);
            if (this.state.answerAchieved) {
              this.props.moveNext();
            }
          }
        );
      }, 500);
    });
  };

  render() {
    const {classes, question = 'none provided', hint = '', hintThreshold = Infinity} = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            {question}
          </Typography>
          <div className={classes.answerRoot}>
            <TextField
              label="Enter your answer..."
              id="margin-none"
              className={classes.textField}
              helperText={this.state.guessCount > hintThreshold ? hint : ''}
              onChange={(e, test) => this.handleOnChange(e, test)}
            />
            <div className={classes.buttonRoot}>
              <div className={classes.wrapper}>
                <Button onClick={() => this.handleSubmit()} className={classes.button} variant="raised" color="primary">
                  Submit
                  {this.state.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                  {this.state.answerAchieved && <Icon className={classes.rightIcon}>checkmark</Icon>}
                  {this.state.guessCount > 0 &&
                    !this.state.answerAchieved && <Icon className={classes.rightIcon}>clear</Icon>}
                </Button>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

Question.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question);
