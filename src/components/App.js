import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Table from './Table';

class App extends Component {
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
  
            <div style={styles.input}>
              <Input style={styles.textInput}/>
    
              <Fab
                color="primary"
                aria-label="Add"
                size="small"
                style={styles.fab}
              >
                <AddIcon />
              </Fab>
            </div>

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
  },
  input: { display: 'flex' },
  textInput: {
    width: '100%',
    marginRight: 30
  },
  fab: { flexShrink: 0 }
}

export default App;
