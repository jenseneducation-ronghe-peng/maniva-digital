import React, { Component } from "react";
import WorkflowItem from "./WorkflowItem";
import { useHistory } from "react-router-dom";

function Btn() {
  let history = useHistory();
  const redirect = () => {
    history.push("/quiz");
  };
  return (
    <button onClick={redirect} className="button">
      Start My Journey
    </button>
  );
}

export default class Workflow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workflowList: [
        {
          id: 1,
          title: "TAKE A QUIZ",
          text: "Take a quiz and get the service pakage fits you the best.",
          img: "quiz",
        },
        {
          id: 2,
          title: "BOOK A TIME",
          text:
            "Choose one of the pakage and book a time for meeting. Let us know all your needs.",
          img: "book",
        },
        {
          id: 3,
          title: "BUILD YOUR WORK",
          text:
            "Our team will get start to work on your project after the team. We will deliver you the best project in the shortest time.",
          img: "code",
        },
      ],
    };
  }
  render() {
    return (
      <section className="Workflow" style={{ background: "#ffffff" }}>
        <h1 className="workflow-title">HOW MANIVA WORK</h1>
        <div className="row" style={{ marginBottom: "2rem" }}>
          {this.state.workflowList
            ? this.state.workflowList.map((item) => (
                <div
                  className="row-item col-12 col-md-6 col-lg-4 col-xl-4"
                  key={item.id}
                >
                  <WorkflowItem
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
