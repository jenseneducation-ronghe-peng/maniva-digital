import React, { Component } from "react";
import { fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  fadeInUp: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp"),
  },
};
/* */
export default class ServiceItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, subTitle, text, img } = this.props;
    const source = (src) => {
      return require(`../img/${src}.jpg`);
    };
    return (
      <StyleRoot>
        <div className="ServiceItem" style={styles.fadeInUp}>
          <div
            className="service-item-div"
            style={{ backgroundImage: `url(${source(img)})` }}
          >
            <div className="filter">
              <div className="service-titile-box">
                {subTitle ? <h4>{subTitle}</h4> : <h4>{title}</h4>}
              </div>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </StyleRoot>
    );
  }
}
