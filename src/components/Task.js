import React from 'react';
import Cell from '@material-ui/core/TableCell';
import Row from '@material-ui/core/TableRow';
import ClearIcon from '@material-ui/icons/Clear';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { DELETE_TASK, COMPLETE_TASK } from '../redux/AppReducer';

const Task = ({ description, date, time, index, deleteTask, complete, completeTask }) => {
  const Text = ({ children }) => {
    return (
      <Typography
        component="p"
        style={{
          textDecoration: complete ? 'line-through' : 'none',
          hyphens: 'auto'
        }}
      >{children}</Typography>
    )
  }

  return (
    <Row className="task">
      <Cell>
        <Checkbox
          color="primary"
          onChange={() => completeTask(index)}
          checked={complete}
        />
      </Cell>

      <Cell className="task">
        <Text>{description}</Text>
      </Cell>

      <Cell className="date-time">
        <Text>{date}</Text>
      </Cell>
   
      <Cell className="date-time">
        <Text>{time}</Text>
      </Cell>

      <Cell>
        <Fab
          size="small"
          className="close-btn"
          onClick={() => deleteTask(index)}
        >
          <ClearIcon />
        </Fab>
      </Cell>
    </Row>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: index => dispatch({ type: DELETE_TASK, payload: index }),
    completeTask: index => dispatch({ type: COMPLETE_TASK, payload: index })
  }
}

export default connect(null, mapDispatchToProps)(Task)