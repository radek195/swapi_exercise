import React from "react";
import { Table } from "react-bootstrap";

const List = ({ items }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>name</th>
          <th>rotation</th>
          <th>climate</th>
          <th>gravity</th>
          <th>created</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>{items}</tbody>
    </Table>
  );
};

export default List;
