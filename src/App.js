import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "thiago" };
  }
  render() {
    const { name } = this.state;
    return (
      <>
        <p onClick={() => { this.setState({ name: "Legal" }) }}>
          Oieee {name} 
        </p>

      </>
    );
  }
}

export default App
