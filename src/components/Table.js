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
      {(tasks && tasks.length) ? (
        <Head>
          <Row>
            <Cell style={styles.firstHeadCell}></Cell>
            <Cell style={styles.taskCell}>Task</Cell>
            <Cell style={styles.dateTimeCell}>Date</Cell>
            <Cell style={styles.dateTimeCell}>Time</Cell>
            <Cell style={styles.firstHeadCell}></Cell>
          </Row>
        </Head>
      ) : null}

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
  firstHeadCell: { padding: 0 },
  taskCell: { paddingLeft: 4 },
  dateTimeCell: {
    paddingRight: 10,
    width: 50
  }
}

const mapStateToProps = state => {
  const { tasks } = state
  return { tasks }
}

export default connect(mapStateToProps, {})(TableComponent)