import React, { Component } from "react";
import WorkflowItem from "./WorkflowItem";

export default class OurTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamList: [
        {
          id: 1,
          title: "John Doe",
          text: "UX/UI Lead.",
          img: "developer",
        },
        {
          id: 2,
          title: "Jean Doe",
          text: "Frontend Lead",
          img: "developer",
        },
        {
          id: 3,
          title: "Erik Eriksson",
          text: "Backend Lead",
          img: "developer",
        },
      ],
    };
  }
  render() {
    return (
      <section className="OurTeam">
        <h1 className="team-title">Meet Our Team</h1>
        <div className="row">
          {this.state.teamList
            ? this.state.teamList.map((item) => (
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
      </section>
    );
  }
}
