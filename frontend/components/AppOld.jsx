
var React = require('react');
var ReactDOM = require('react-dom');

var Modal = require("react-modal");
document.addEventListener("DOMContentLoaded", function(){
  var container = document.getElementById("content");
  Modal.setAppElement(document.body); // Add this line
});

var App = React.createClass({

  render: function() {
    return (

      <div id="main_page">
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
