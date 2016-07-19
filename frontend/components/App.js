import React from 'react';
import Chat from './Chat';

class App extends React.Component {

  render() {
    return (
      <div id="main_page">
        <h1>VelvetRoom</h1>
        {this.props.children}
        <Chat/>
      </div>
    );
  }
}

export default App;
