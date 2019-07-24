import React from 'react';

class ComponentToPrint extends React.Component {
  render() {
    const { x, y, z } = this.props;

    return (
      <table>
        <thead>
          <th>x</th>
          <th>y</th>
          <th>z</th>
        </thead>
        <tbody>
          <tr>
            <td>{x}</td>
            <td>{y}</td>
            <td>{z}</td>
          </tr>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 3</td>
          </tr>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 3</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ComponentToPrint;
