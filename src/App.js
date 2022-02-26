import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Layout from "antd/lib/layout/layout";

import Home from "./routes/Home";
import ServiceBoard from "./routes/ServiceBoard";

import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import DiscussionBoard from "./components/DiscussBoard/DiscussionBoard";
import Payment from "./components/PaymentBoard/Payment";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import NotFound from "./components/NotFoundPage/NotFound";


class App extends React.Component {
  state = {
    authed: false,
  };

  render() {
    return (
      <Layout
        style={{ height: "auto", fontFamily: 'IBM Plex Mono' }}
      >
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/discussion">
              <DiscussionBoard />
            </Route>
            <Route path="/service">
              <ServiceBoard />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Layout>
    );
  }
}

export default App;
