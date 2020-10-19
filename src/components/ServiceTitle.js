import React, { Component } from "react";

export default class ServiceTitle extends Component {
  constructor(props) {
    super(props);
    this.idCallback = this.idCallback.bind(this);
  }
  idCallback(id) {
    this.props.callback(id);
  }
  render() {
    const { title, id } = this.props;
    return (
      <div className="service-title" onClick={() => this.idCallback(id)}>
        <h6 className="service-title-text">{title}</h6>
      </div>
    );
  }
}
