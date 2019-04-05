import React from 'react';
import Cell from '@material-ui/core/TableCell';
import Row from '@material-ui/core/TableRow';
import ClearIcon from '@material-ui/icons/Clear';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { deleteTask, completeTask } from '../redux/AppReducer';


const Task = ({ description, date, time, index, deleteTask, complete, completeTask }) => {
  const Text = ({ children }) => {
    return (
      <Typography
        component="p"
        style={{
          textDecoration: complete ? 'line-through' : 'none'
        }}
      >{children}</Typography>
    )
  }

  return (
    <Row>
      <Cell style={styles.lessPadding}>
        <Checkbox
          color="primary"
          style={styles.lessPadding}
          onChange={() => completeTask(index)}
          checked={complete}
        />
      </Cell>

      <Cell style={styles.description}>
        <Text>{description}</Text>
      </Cell>

      <Cell style={styles.dateTimeCell}>
        <Text>{date}</Text>
      </Cell>
   
      <Cell style={styles.dateTimeCell}>
        <Text>{time}</Text>
      </Cell>

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

export default connect(null, { deleteTask, completeTask })(Task)