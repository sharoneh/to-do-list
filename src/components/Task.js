import React from 'react';
import Cell from '@material-ui/core/TableCell';
import Row from '@material-ui/core/TableRow';
import ClearIcon from '@material-ui/icons/Clear';
import Fab from '@material-ui/core/Fab';

const Task = ({ children }) => {
  return (
    <Row>
      <Cell style={styles.firstRowCell}>
        <Fab
          size="small"
          style={styles.closeBtn}
        >
          <ClearIcon />
        </Fab>
      </Cell>

      <Cell>{children}</Cell>

      <Cell>{new Date().toLocaleDateString('pt-BR')} - {new Date().toLocaleTimeString('pt-BR')}</Cell>
      
      <Cell>São Paulo</Cell>
    </Row>
  )
}

const styles = {
  firstRowCell: { padding: 4 },
  closeBtn: { transform: 'scale(.5)' }
}

export default Task