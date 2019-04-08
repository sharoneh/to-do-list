import React from 'react';
import Table from '@material-ui/core/Table';
import Head from '@material-ui/core/TableHead';
import Body from '@material-ui/core/TableBody';
import Cell from '@material-ui/core/TableCell';
import Row from '@material-ui/core/TableRow';
import Task from './Task';
import { connect } from 'react-redux';
import '../styles/table.scss';

const TableComponent = ({ tasks }) => {
  return (
    <Table>
      {(tasks && tasks.length) ? (
        <Head>
          <Row>
            <Cell className="empty"></Cell>
            <Cell className="task">Task</Cell>
            <Cell className="date-time">Date</Cell>
            <Cell className="date-time">Time</Cell>
            <Cell className="empty"></Cell>
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

const mapStateToProps = state => {
  const { tasks } = state
  return { tasks }
}

export default connect(mapStateToProps, {})(TableComponent)