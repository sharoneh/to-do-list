import React from 'react';
import Table from '@material-ui/core/Table';
import Head from '@material-ui/core/TableHead';
import Body from '@material-ui/core/TableBody';
import Cell from '@material-ui/core/TableCell';
import Row from '@material-ui/core/TableRow';
import Task from './Task';

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
        <Task>fazer portfolio</Task>
      </Body>
    </Table>
  )
}

const styles = {
  firstHeadCell: { padding: 0 }
}

export default TableComponent