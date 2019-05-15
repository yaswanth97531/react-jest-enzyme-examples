import React from 'react';

const renderEmptyState = cols => (
  <tr>
    <td colSpan={cols.length}>There is no data in this table</td>
  </tr>
);

const renderData = (data, cols) =>
  data.map((data, index) => (
    <tr key={index}>
      <td key={data.id}>{data.id}</td>
      <td key={data.name}>{data.name}</td>
      <td key={data.email}>{data.email}</td>
    </tr>
  ));

const DataTable = props => {
  return (
    <table>
      <thead>
        <tr>
          {props.cols.map(col => (
            <th key={col.name}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.length > 0
          ? renderData(props.data, props.cols)
          : renderEmptyState(props.cols)}
      </tbody>
    </table>
  );
};
export default DataTable;
