import React, { Component } from "react";
import Welcome from "./components/Welcome";
import OurServices from "./components/OurServices";
import Workflow from "./components/Workflow";
import OurTeam from "./components/OurTeam";
import SuccessCases from "./components/SuccessCases";
import "./css/Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Home">
        <Welcome />
        <OurServices />
        <Workflow />
        <SuccessCases />
        <OurTeam />
      </div>
    );
  }
}
