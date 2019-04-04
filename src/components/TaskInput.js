import React from 'react';
import Input from '@material-ui/core/Input';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const TaskInput = () => {
  return (
    <div style={styles.container}>
      <Input style={styles.textInput}/>

      <Fab
        color="primary"
        aria-label="Add"
        size="small"
        style={styles.button}
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

export default TaskInput