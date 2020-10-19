import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookF, faInstagram, faLinkedin);

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showError: false,
      showMsg: false,
      errorMsg: "Please enter a valid email address",
      Msg: "Thanks for substribe us",
      subscriber: "",
    };
    this.saveEmail = this.saveEmail.bind(this);
    this.submit = this.submit.bind(this);
  }
  saveEmail(email) {
    if (email) {
      this.setState({
        subscriber: email,
      });
    }
  }
  submit() {
    console.log("submit?");
    let subscriber = this.state.subscriber;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let validEmail = reg.test(subscriber);
    if (subscriber !== "" || this.state.input === null) {
      if (!validEmail) {
        console.log("step2");
        this.setState({
          showMsg: false,
          showError: true,
        });
      } else {
        this.setState({
          showMsg: true,
          showError: false,
        });
      }
    } else {
      console.log("step3");
      this.setState({
        showMsg: false,
        showError: true,
      });
    }
  }
  render() {
    return (
      <section className="Footer">
        <div className="subscribe-form">
          <h3 className="subscribe-title">Subscribe Form</h3>
          <h4 className="subscribe-input">{this.state.text}</h4>
          {this.state.showError ? (
            <div>
              <label className="subscribe-error">{this.state.errorMsg}</label>
            </div>
          ) : null}
          <input
            placeholder="Your email"
            onChange={(e) => this.saveEmail(e.target.value)}
          ></input>
          <div>
            <button className="subscribe-btn" onClick={this.submit}>
              Submit
            </button>
          </div>

          {this.state.showMsg ? (
            <p className="subscribe-thanks">{this.state.Msg}</p>
          ) : null}
        </div>
        <div className="contact-div">
          <p>info@manivadigital.com</p>
          <p>+46 812 201 999</p>
          <FontAwesomeIcon icon={faFacebookF} className="icon-box" />
          <FontAwesomeIcon icon={faInstagram} className="icon-box" />
          <FontAwesomeIcon icon={faLinkedin} className="icon-box" />
        </div>
        <div className="maniva">©2020 by Maniva Digital AB</div>
      </section>
    );
  }
}
