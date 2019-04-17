import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import { addLocaleData, IntlProvider } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import zhLocaleData from "react-intl/locale-data/zh";
import translations from './i18n/locales';

import { ApolloProvider } from "react-apollo";
import client from "./apollo";
import Books from "./Books";

addLocaleData(enLocaleData);
addLocaleData(zhLocaleData);

//In future this would be set by a control on the page
//   if you want to test other languages, just change this value
const localeProp = "en";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <IntlProvider
          locale={localeProp}
          defaultLocale="en"
          key={localeProp}
          messages={translations[localeProp]}
        >
          <div className="App">
            <Books />
          </div>
        </IntlProvider>
      </ApolloProvider>
    );
  }
}

export default App;
