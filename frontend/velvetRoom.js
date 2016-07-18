import React from 'react';
import ReactDOM from 'react-dom';

class VelvetRoom extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts List</h1>
      </div>
    )
  }

}
document.addEventListener("DOMContentLoaded", () => {
  var root = document.getElementById('content');
ReactDOM.render(<VelvetRoom/>, root);
}); 
