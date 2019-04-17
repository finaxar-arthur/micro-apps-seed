import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import { ApolloProvider } from "react-apollo";
import client from './apollo'
import Books from "./Books";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Books />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
