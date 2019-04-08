import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Table from './Table';
import TaskInput from './TaskInput';
import { connect } from 'react-redux';
import { APP_MOUNT } from '../redux/AppReducer';

class App extends Component {
  componentDidMount() {
    this.props.appMount()
  }

  render() {
    return (
      <div
        className="App"
        style={styles.container}
      >
        <MuiThemeProvider theme={theme}>
          <Paper style={styles.paper}>
            <Typography
              variant="h5"
              component="h1"
              style={styles.h1}
            >to do list</Typography>
  
            <TaskInput />

            <Table />
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    useNextVariants: true
  }
})

const styles = {
  container: {
    backgroundColor: '#ececec',
    padding: '5rem',
    height: '100vh',
    maxWidth: '100vw',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  paper: {
    padding: 15,
    minWidth: 500,
    maxWidth: '100%'
  },
  h1: {
    fontSize: 40,
    fontWeight: 200,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    appMount: () => dispatch({ type: APP_MOUNT })
  }
}

export default connect(null, mapDispatchToProps)(App);
