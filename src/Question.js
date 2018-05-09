import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Save from '@material-ui/icons/Save';
import {CircularProgress} from 'material-ui/Progress';
import Divider from 'material-ui/Divider';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import toastr from 'toastr';

toastr.options.timeOut = 500;
toastr.options.positionClass = 'toast-top-center';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: 300,
  }),
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
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
    paddingTop: 15,
  },
  buttonRoot: {
    display: 'flex',
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  greenIcon: {
    color: green[500],
  },
  redIcon: {
    color: red[500],
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -10,
  },
});

const answerFieldProps = {
  autoFocus: true,
};

class Question extends Component {
  state = {
    guess: null,
    loading: false,
    guessCount: 0,
    answerAchieved: false,
  };

  handleOnChange = (e, test) => {
    let guess = e.target.value ? e.target.value.toLowerCase() : '';

    if (this.props.adjustment) {
      guess = this.props.adjustment(guess);
    }

    this.setState({guess});
  };

  handleSubmit = async () => {
    this.setState({loading: true}, () => {
      setTimeout(() => {
        this.setState(
          {
            loading: false,
            answerAchieved: this.state.guess === this.props.answer,
            guessCount: this.state.guess === this.props.answer ? 0 : ++this.state.guessCount,
          },
          () => {
            if (this.state.answerAchieved) {
              setTimeout(() => {
                this.props.moveNext();
              }, 600);
            } else {
              toastr.error('Incorrect!');
            }
          }
        );
      }, 500);
    });
  };

  render() {
    const {classes, question = 'none provided', hint = '', hintThreshold = Infinity, directions = null} = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          {directions && (
            <Fragment>
              <Typography variant="display1" gutterBottom>
                {directions}
              </Typography>
              <Divider />
              <br />
            </Fragment>
          )}

          <Typography variant="headline" component="h3">
            {question}
          </Typography>
          <div className={classes.answerRoot}>
            <TextField
              label="Enter your answer..."
              id="margin-none"
              className={classes.textField}
              helperText={this.state.guessCount >= hintThreshold ? `Hint: ${hint}` : ''}
              onChange={(e, test) => this.handleOnChange(e, test)}
              inputProps={answerFieldProps}
            />
            <div className={classes.buttonRoot}>
              <div className={classes.wrapper}>
                <Button onClick={() => this.handleSubmit()} className={classes.button} variant="raised" color="primary">
                  Submit
                  {this.state.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                  {this.state.answerAchieved && (
                    <Icon className={classNames(classes.rightIcon, classes.greenIcon)}>checkmark</Icon>
                  )}
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
