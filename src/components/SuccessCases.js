import React, { Component } from "react";
import ServiceItem from "./ServiceItem";
import { useHistory } from "react-router-dom";

function Btn() {
  let history = useHistory();
  const redirect = () => {
    history.push("/quiz");
  };
  return (
    <button onClick={redirect} className="button-reverse">
      Start My Journey
    </button>
  );
}

export default class OurServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceList: [
        {
          id: 1,
          title: "Frontend Case",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          img: "design",
        },
        {
          id: 2,
          title: "Backend Case",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          img: "consulting",
        },
        {
          id: 3,
          title: "Fullstack Case",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          img: "analysis",
        },
        {
          id: 4,
          title: "Full package Case",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          img: "support",
        },
      ],
    };
  }
  render() {
    return (
      <section className="SucessCase" id="SucessCase">
        <h1 className="case-title">SUCCESS CASES</h1>
        <div className="case-list">
          {this.state.serviceList
            ? this.state.serviceList.map((item) => (
                <div className="case-list-item" key={item.id}>
                  <ServiceItem
                    title={item.title}
                    text={item.text}
                    img={item.img}
                  />
                </div>
              ))
            : null}
        </div>
        <Btn />
      </section>
    );
  }
}
