import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Quiz from "./Quiz";
import Home from "./Home";
import Service from "./Service";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { fetchServiceResult } from "./data/fetchService";

function App() {
  const link = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "TAKE A QUIZ", link: "/quiz" },
    { id: 3, name: "SERVICE", link: "/service" },
  ];
  return (
    <div className="App">
      <Router>
        <div>
          <div className="header">
            <div className="logo-div">
              <Link to="/">
                <div className="logo"></div>
              </Link>
              <h5 className="logo-text">MANIVA DIGITAL</h5>
            </div>
            <div className="nav">
              {link.map((item) => (
                <div className="link" key={item.id}>
                  <Link to={item.link} style={{ textDecoration: "none" }}>
                    <h5 className="link-text">{item.name}</h5>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/quiz" component={Quiz}></Route>
            <Route exact path="/service" component={Service}></Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
