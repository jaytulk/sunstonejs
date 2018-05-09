import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    margin: 20,
  },
});

class Home extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="headline">
          <p>I have been hard at work making the most of the extra time that I have now that side work is done.</p>
          <p>
            I have accounted for what I can, and hopefully everything will work correctly. If you do not know an answer,
            feel free to guess a few times or use Google(there will be hints).
          </p>
          <p>
            The important thing is that you hold off calling me, so that you can get the full experience. If it is still
            not working, then you can give me a call.
          </p>
          <p>Mother's Day is all about celebrating your Mamahood, but instead you have to work a little for it! 😜</p>
          <p>
            I love you 😘 and the kids <span style={{textDecoration: 'line-through'}}>probably</span> love you too(just
            kidding about the probably, they do love you, those little stinkers).
          </p>
          <p>
            To the best mom/wife a kid/husband could have,<br />
            Happy Mother's Day!!!😍
          </p>
          <p>
            Love,<br />
            Jay👴, Andrew🧑, and Amelia👶
          </p>
          <p>
            Your challenge awaits!<br />
            Please open the challenge page to begin!
          </p>
        </Typography>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
