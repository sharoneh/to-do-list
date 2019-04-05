import React from 'react';
import Cell from '@material-ui/core/TableCell';
import Row from '@material-ui/core/TableRow';
import ClearIcon from '@material-ui/icons/Clear';
import Fab from '@material-ui/core/Fab';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { deleteTask } from '../redux/AppReducer';

const Task = ({ description, date, time, index, deleteTask }) => {
  return (
    <Row>
      <Cell style={styles.lessPadding}>
        <Checkbox color="primary" style={styles.lessPadding} />
      </Cell>

      <Cell style={styles.description}>{description}</Cell>

      <Cell style={styles.dateTimeCell}>{date}</Cell>
   
      <Cell style={styles.dateTimeCell}>{time}</Cell>

      <Cell style={styles.lessPadding}>
        <Fab
          size="small"
          style={styles.closeBtn}
          onClick={() => deleteTask(index)}
        >
          <ClearIcon />
        </Fab>
      </Cell>
    </Row>
  )
}

const styles = {
  lessPadding: { padding: 4 },
  closeBtn: { transform: 'scale(.5)' },
  dateTimeCell: {
    paddingRight: 10,
    width: 50
  },
  description: { paddingLeft: 4 }
}

export default connect(null, { deleteTask })(Task)