import React from 'react';
import Input from '@material-ui/core/Input';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { addTask, onInputChange } from '../redux/AppReducer';
import { connect } from 'react-redux';

const TaskInput = ({ addTask, inputValue, onInputChange }) => {
  const addValidTask = () => {
    if (!inputValue) return
    addTask()
  }
  
  return (
    <div style={styles.container}>
      <Input
        style={styles.textInput}
        value={inputValue}
        onChange={onInputChange}
        onKeyUp={e => {
          if (e.keyCode === 13) addValidTask()
        }}
      />

      <Fab
        color="primary"
        aria-label="Add"
        size="small"
        style={styles.button}
        onClick={() => addValidTask()}
      >
        <AddIcon />
      </Fab>
    </div>
  )
}

const styles = {
  container: { display: 'flex' },
  textInput: {
    width: '100%',
    marginRight: 30
  },
  button: { flexShrink: 0 }
}

const mapStateToProps = state => {
  const { inputValue } = state
  return { inputValue }
}

export default connect(mapStateToProps, { addTask, onInputChange })(TaskInput)