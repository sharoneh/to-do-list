import React from 'react';
import Input from '@material-ui/core/Input';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { ADD_TASK, INPUT_CHANGE } from '../redux/AppReducer';
import { connect } from 'react-redux';

const TaskInput = ({ addTask, inputValue, onInputChange }) => {
  return (
    <div style={styles.container} className="task-input">
      <Input
        style={styles.textInput}
        value={inputValue}
        onChange={onInputChange}
        onKeyUp={e => {
          if (e.keyCode === 13) addTask()
        }}
      />

      <Fab
        color="primary"
        aria-label="Add"
        size="small"
        style={styles.button}
        onClick={() => addTask()}
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

const mapDispatchToProps = dispatch => {
  return {
    addTask: () => dispatch({ type: ADD_TASK }),
    onInputChange: e => dispatch({ type: INPUT_CHANGE, payload: e.target.value })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskInput)