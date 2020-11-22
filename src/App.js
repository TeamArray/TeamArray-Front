import ReactFullpage from '@fullpage/react-fullpage';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <ReactFullpage 
          licenseKey={''}
          scrollingSpeed={500}
          render={() => (
            <ReactFullpage.Wrapper>
              <div className="section">
                <h1>Array</h1>
              </div>
              <div className="section">
                <p>Section 1</p>
              </div>
              <div className="section">
                <p>Section 2</p>
              </div>
              <div className="section">
                <p>Section 3</p>
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

export default App;
