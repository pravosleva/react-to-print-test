import React from 'react';
import ReactToPrint from 'react-to-print';

import ComponentToPrint from './components/ComponentToPrint';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div>
          <ReactToPrint
            trigger={() => <a href="#">Print this out!</a>}
            content={() => this.componentRef}
          />
          <ComponentToPrint
            ref={el => (this.componentRef = el)}
            x={1}
            y={2}
            z={3}
          />
        </div>
      </div>
    );
  }
}

export default App;
