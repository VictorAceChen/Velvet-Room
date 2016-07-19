import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div id="main_page">
        <h1>VelvetRoom</h1>
          {this.props.children}
      </div>
    );
  }
}

export default App;
