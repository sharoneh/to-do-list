import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Table from './Table';
import TaskInput from './TaskInput';
import { connect } from 'react-redux';
import { APP_MOUNT } from '../redux/AppReducer';
import '../styles/App.scss';
class App extends Component {
  componentDidMount() {
    this.props.appMount()
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Paper className="paper">
            <Typography
              variant="h5"
              component="h1"
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

const mapDispatchToProps = dispatch => {
  return {
    appMount: () => dispatch({ type: APP_MOUNT })
  }
}

export default connect(null, mapDispatchToProps)(App);
