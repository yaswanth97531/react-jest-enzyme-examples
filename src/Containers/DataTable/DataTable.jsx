import React from 'react';
const renderEmptyState = cols =>
   <td colSpan={cols.length}>There is no data in this table</td>
;
const DataTable = props => {
   return (
      <table>
         <thead>
            <tr>
               {props.cols.map(col =>
                  <th key={col.name}>{col.header}</th>
               )}
            </tr>
         </thead>
         <tbody>
            {props.data.length > 0 ? renderData(props.data, props.cols) : renderEmptyState(props.cols)}
         </tbody>
      </table>
  );
}
export default DataTable;
