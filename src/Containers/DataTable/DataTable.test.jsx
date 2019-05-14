import React from 'react';
import DataTable from './DataTable';
it('renders in table rows based on provided columns', () => {
   const cols = [
      { header: 'ID', name: 'id' },
      { header: 'Name', name: 'name' },
      { header: 'Email', name: 'email' }
   ];
   const data = [
      { id: 5, name: 'John', email: 'john@example.com' },
      { id: 6, name: 'Liam', email: 'liam@example.com' },
      { id: 7, name: 'Maya', email: 'maya@example.com', someTest: 10 },
      { id: 8, name: 'Oliver', email: 'oliver@example.com', hello: 'hello world' },
      { id: 25, name: 'Amelia', email: 'amelia@example.com' }
   ];
   // Shallow render Data Table
   const container = shallow(<DataTable data={data} cols={cols} />);
   // There should be ONLY 1 table element
   const table = container.find('table');
   expect(table).toHaveLength(1);
   // The table should have ONLY 1 thead element
   const thead = table.find('thead');
   expect(thead).toHaveLength(1);
   // The number of th tags should be equal to number of columns
   const headers = thead.find('th');
   expect(headers).toHaveLength(cols.length);
   // Each th tag text should equal to column header
   headers.forEach((th, idx) => {
      expect(th.text()).toEqual(cols[idx].header);
   });
   // The table should have ONLY 1 tbody tag
   const tbody = table.find('tbody');
   expect(tbody).toHaveLength(1);
   // tbody tag should have the same number of tr tags as data rows
   const rows = tbody.find('tr');
   expect(rows).toHaveLength(data.length);
   // The table row should have ONLY one cell
   const cell = row.find('td');
   expect(cell).toHaveLength(1);
   // The cell should have colSpan that is equal to the number of columns
   expect(cell.prop('colSpan')).toEqual(cols.length);
   // Check cell text
   expect(cell.text()).toEqual('There is no data in this table');
   // Loop through each row and check the content
   rows.forEach((tr, rowIndex) => {
      const cells = tr.find('td');
      expect(cells).toHaveLength(cols.length);
      expect(cells.at(0).text()).toEqual(data[rowIndex].id);
      expect(cells.at(1).text()).toEqual(data[rowIndex].name);
      expect(cells.at(2).text()).toEqual(data[rowIndex].email);
   });
});
