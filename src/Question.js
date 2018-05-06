import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Save from '@material-ui/icons/Save';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: 400,
    justify: 'center',
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
});

class Question extends Component {
  state = {
    guess: '',
    loading: false,
  };

  handleOnChange = (e, test) => {
    console.log('changing', e.target.value, test);
  };

  handleSubmit = () => {
    console.log('handling test', this.state.guess);
    this.setState({loading: !this.state.loading});
  };

  render() {
    const {classes, question = 'none provided', hint = ''} = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            {question}
          </Typography>
          <TextField
            label="Enter your answer..."
            id="margin-none"
            className={classes.textField}
            helperText={hint}
            onChange={(e, test) => this.handleOnChange(e, test)}
          />
          <Button onClick={() => this.handleSubmit()} className={classes.button} variant="raised" color="primary">
            Submit
            {this.state.loading ? (
              <Icon className={classes.rightIcon}>checkmark</Icon>
            ) : (
              <Icon className={classes.rightIcon}>cancel</Icon>
            )}
          </Button>
        </Paper>
      </div>
    );
  }
}

Question.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question);
