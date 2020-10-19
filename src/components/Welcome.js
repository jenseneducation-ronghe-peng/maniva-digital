import React, { Component } from "react";
import bgVideo from "../img/bgVideo.mov";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "WELCOME TO MANIVA DIGITAL",
      text: "We take your APP / WEB to the next level.",
      content:
        "Mobile App & Website Development   |   IT-Consultation   |   Data Analysis",
    };
  }
  render() {
    return (
      <section className="Welcome">
        <video className="videoTag" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="landing">
          <h1 className="headerText">{this.state.header}</h1>
          <h4 className="sub-header">{this.state.text}</h4>
          <p className="text">{this.state.content}</p>
          <a href="./#SucessCase">
            <button className="button">CHECK SUCCESS STORIES</button>
          </a>
        </div>
      </section>
    );
  }
}
