import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";


import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import Books from "./Books";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          {/*<header className="App-header">*/}
          {/*  <img src={logo} className="App-logo" alt="logo" />*/}
          {/*  <p>*/}
          {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
          {/*  </p>*/}
          {/*  <a*/}
          {/*    className="App-link"*/}
          {/*    href="https://reactjs.org"*/}
          {/*    target="_blank"*/}
          {/*    rel="noopener noreferrer"*/}
          {/*  >*/}
          {/*    Learn React*/}
          {/*  </a>*/}
          {/*</header>*/}
          <Books />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
