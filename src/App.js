import React from 'react';
import './App.css';
import TwitterLogin from "react-twitter-login";

import axios from 'axios';
import qs from 'qs';

class App extends React.Component {
  componentDidMount() {
    console.log("i am mounted...");
  }

  render() {
    return (
      <div>
        <div className="jumbotron text-center bg-info text-white">
          <h1>Coronavirus disease (COVID-19) pandemic in Pune</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body text-center">
                  <h3 className="text-muted">Today's Case Count</h3>
                  <h1>98</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body text-center">
                  <h3 className="text-success">Recovered Cases</h3>
                  <h1>70</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body text-center">
                  <h3 className="text-danger">Today's Deaths</h3>
                  <h1>5</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
