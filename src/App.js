import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import NewPage from "./components/New";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends Component {
  state = {
    activeTab: { id: 1, name: "New" },
  };
  render() {
    const { activeTab } = this.state;

    return (
      <>
        <div id="wrapper">
          <Header />
          <NavBar activeTab={activeTab} />

          <main className="clearfix">
            <Switch>
              <Route path="/new" component={NewPage} />
              {/* <Route path="/not-found" component={NotFound}></Route> */}
              <Redirect from="/" exact to="/new" />
              {/* <Redirect to="/not-found" /> */}
            </Switch>
          </main>

          <Footer />
        </div>
      </>
    );
  }
}

export default App;
