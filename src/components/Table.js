import React from 'react';
import Table from '@material-ui/core/Table';
import Head from '@material-ui/core/TableHead';
import Body from '@material-ui/core/TableBody';
import Cell from '@material-ui/core/TableCell';
import Row from '@material-ui/core/TableRow';
import ClearIcon from '@material-ui/icons/Clear';
import Fab from '@material-ui/core/Fab';

const TableComponent = () => {
  return (
    <Table>
      <Head>
        <Row>
          <Cell style={styles.firstHeadCell}></Cell>
          <Cell>Task</Cell>
          <Cell>Date/Time</Cell>
          <Cell>Location</Cell>
        </Row>
      </Head>

      <Body>
        <Row>
          <Cell style={styles.firstBodyCell}>
            <Fab
              size="small"
              style={styles.closeBtn}
            >
              <ClearIcon />
            </Fab>
          </Cell>
          <Cell>fazer portfolio</Cell>
          <Cell>{new Date().toLocaleDateString('pt-BR')} - {new Date().toLocaleTimeString('pt-BR')}</Cell>
          <Cell>São Paulo</Cell>
        </Row>
      </Body>
    </Table>
  )
}

const styles = {
  firstHeadCell: { padding: 0 },
  firstBodyCell: { padding: 4 },
  closeBtn: { transform: 'scale(.5)' }
}

export default TableComponent