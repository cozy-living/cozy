import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import DiscussionBoard from "./pages/DiscussionBoard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFount";
import Payment from "./pages/Payment";
import ServiceBoard from "./pages/ServiceBoard";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import Layout from "antd/lib/layout/layout";

class App extends React.Component {
  state = {
    authed: false,
  };

  render() {
    return (
      <Layout
        style={{ height: "auto", fontFamily: "Times New Roman"}}
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
            <Route path="/dashboard">
              <Dashboard />
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

// function App() {
// 	return (
// 		<>

// 			<Navbar />
// 			<Switch>
// 				<Route path="/" exact>
// 					<Redirect to="/home" />
// 				</Route>
// 				<Route path="/home" exact>
// 					<Home />
// 				</Route>
// 				<Route path="/login">
// 					<Login />
// 				</Route>
// 				<Route path="/signup">
// 					<Signup />
// 				</Route>
// 				<Route path="/dashboard">
// 					<Dashboard />
// 				</Route>
// 				<Route path="/discussion">
// 					<DiscussionBoard />
// 				</Route>
// 				<Route path="/service">
// 					<ServiceBoard />
// 				</Route>
// 				<Route path="/payment">
// 					<Payment />
// 				</Route>
// 				<Route path="*">
// 					<NotFound />
// 				</Route>
// 			</Switch>
// 			<Footer />
// 		</>
// 	);
// }

export default App;
