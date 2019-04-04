import React from 'react';
import Cell from '@material-ui/core/TableCell';
import Row from '@material-ui/core/TableRow';
import ClearIcon from '@material-ui/icons/Clear';
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux';
import { deleteTask } from '../redux/AppReducer';

const Task = ({ description, date, time, location, index, deleteTask }) => {
  return (
    <Row>
      <Cell style={styles.firstRowCell}>
        <Fab
          size="small"
          style={styles.closeBtn}
          onClick={() => deleteTask(index)}
        >
          <ClearIcon />
        </Fab>
      </Cell>

      <Cell>{description}</Cell>

      <Cell>{date} - {time}</Cell>
      
      <Cell>{location}</Cell>
    </Row>
  )
}

const styles = {
  firstRowCell: { padding: 4 },
  closeBtn: { transform: 'scale(.5)' }
}

export default connect(null, { deleteTask })(Task)