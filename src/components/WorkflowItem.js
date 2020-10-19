import React, { Component } from "react";
import { fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  fadeInUp: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp"),
  },
};

export default class WorkflowItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, text, img } = this.props;
    const source = (src) => {
      return require(`../img/${src}.svg`);
    };
    return (
      <StyleRoot>
        <div className="WorkflowItem" style={styles.fadeInUp}>
          <div
            className="workflow-pic"
            style={{
              backgroundImage: `url(${source(img)})`,
            }}
          ></div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </StyleRoot>
    );
  }
}
