import React from 'react';
import Table from '@material-ui/core/Table';
import Head from '@material-ui/core/TableHead';
import Body from '@material-ui/core/TableBody';
import Cell from '@material-ui/core/TableCell';
import Row from '@material-ui/core/TableRow';
import Task from './Task';
import { connect } from 'react-redux';

const TableComponent = ({ tasks }) => {
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
        {tasks.map((task, index) => (
          <Task
            { ...task }
            key={`task#${index}`}
            index={index}
          />
        ))}
      </Body>
    </Table>
  )
}

const styles = {
  firstHeadCell: { padding: 0 }
}

const mapStateToProps = state => {
  const { tasks } = state
  return { tasks }
}

export default connect(mapStateToProps, {})(TableComponent)