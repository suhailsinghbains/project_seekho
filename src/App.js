import React, { Component } from 'react';
import Workspace from './Workspace';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.changeState = this.changeState.bind(this);
    this.state = {
      language: 0
    }
  }
  Languages = ["English", "French"];
  changeState(i) {
    this.setState({ ...this.state, language: i })
  }
  Select(array) {
    let props = array.props[0]
    let self = array.props[1]
    let x = [];
    for (let i = 0; i < props.length; i++) {
      x[i] = <option key={"Option" + i} onClick={() => self.changeState(i)}>{props[i]}</option>
    }
    return (
      React.createElement("select", null, x)
    )
  }
  render() {
    return (
      <div className="App">
        <Workspace language={this.state.language} />
        <this.Select props={[this.Languages, this]} />
        {/* <Select props={this.Languages} /> */}
      </div>
    );
  }
}

export default App;
