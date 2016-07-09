var React = require('react');
var ReactDOM = require('react-dom');

//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;


//Components
var App = require('./components/App');

var Router = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
    <IndexRoute component={ FrontPage } />
    </Route>
  </Router>
);

var MyComponent = React.createClass({
  render() {
    return(
      <div>Hello World</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  var root = document.getElementById('content');
ReactDOM.render(Router, root);
});
