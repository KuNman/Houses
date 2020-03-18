import React, {Component, Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import {OpenRoutes} from '../routes/open';
import {compose} from 'redux';
import {withRouter} from 'react-router';

export const App = () => {
  return (
    <Router>
      <Routes/>
    </Router>
  );
};

export default App;

class ConnectedRoutes extends Component {
  render() {
    return <Suspense fallback={<div>Loading...</div>}>
      {<OpenRoutes/>}
    </Suspense>;
  }
}

const Routes = compose(
  withRouter,
)(ConnectedRoutes);
