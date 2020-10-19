import React, { Component } from "react";

export default class ServiceDiv extends Component {
  render() {
    const {
      title,
      content,
      deliverTime,
      scale,
      price,
      currency,
      freeRevise,
      img,
    } = this.props;
    const source = (src) => {
      return require(`../img/${src}.jpg`);
    };
    return (
      <div className="service">
        {img ? (
          <div
            className="service-pic"
            style={{ backgroundImage: `url(${source(img)})` }}
          >
            <div className="filter">
              <h3 className="service-div-title">{title}</h3>
              <div className="service-text">
                <h6>{content}</h6>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3>{title}</h3>
          </div>
        )}

        <div className="info-box">
          <div className="info">
            <h6>You project scale: </h6>
            <p> {scale}</p>
          </div>
          <div className="info">
            <h6>Our deliver time: </h6>
            <p> {deliverTime}</p>
          </div>
          <div className="info">
            <h6>Free revise included: </h6>
            <p> {freeRevise}</p>
          </div>
          {price === "To be negotiated" ? (
            <div className="info">
              <h6>Total cost: </h6>
              <p> {price}</p>
            </div>
          ) : (
            <div className="info">
              <h6>Total cost: </h6>
              <p>
                {" "}
                {price} {currency}
              </p>
            </div>
          )}
        </div>
        <a href="https://www.manivadigital.com/bookings-checkout/digital-development-optimization/book">
          <button className="button-reverse">Go for it</button>
        </a>
      </div>
    );
  }
}
