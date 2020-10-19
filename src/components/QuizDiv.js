import React, { Component } from "react";
import { fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  fadeInUp: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp"),
  },
};

export default class QuizDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateName: "",
      input: "",
      showError: false,
      errorMsg: "",
    };
    this.inputCallback = this.inputCallback.bind(this);
  }
  quizCallback(key) {
    this.props.callbackFunction(key);
  }
  changeInput(stateName, input) {
    this.setState({
      stateName: stateName,
      input: input,
    });
  }
  inputCallback() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let validEmail = reg.test(this.state.input);
    if (this.state.input === "" || this.state.input === null) {
      this.setState({
        showError: true,
        errorMsg: "Please enter your company's " + this.props.stateName,
      });
    } else {
      switch (this.props.stateName) {
        case "email":
          if (!validEmail) {
            this.setState({
              showError: true,
              errorMsg: "Please enter a valid email address",
            });
            console.log("wrong email");
          } else {
            console.log("right email");
            this.setState({
              showError: false,
            });
            this.props.getInput(this.state.stateName, this.state.input);
          }
          break;
        default:
          this.setState({
            showError: false,
          });
          this.props.getInput(this.state.stateName, this.state.input);
          break;
      }
    }
  }
  render() {
    const { id, question, answers, stateName } = this.props;
    const placeholderText = `Company's ` + stateName;
    return (
      <StyleRoot>
        <div id={id} style={styles.fadeInUp}>
          <h3 className="quiz-question">{question}</h3>
          {answers ? (
            <div className="quizAnswer">
              {answers.length !== 0
                ? answers.map((answer) => (
                    <button
                      className="button-reverse answer-btn"
                      key={answer.id}
                      onClick={() => this.quizCallback(answer.key)}
                    >
                      {answer.answer}
                    </button>
                  ))
                : null}
            </div>
          ) : (
            <div className="quizAnswer">
              <input
                placeholder={placeholderText}
                onChange={(e) => this.changeInput(stateName, e.target.value)}
              ></input>
              <div>
                <button onClick={this.inputCallback} className="button-reverse">
                  Go ahead
                </button>
              </div>
              {this.state.showError ? <p>{this.state.errorMsg}</p> : null}
            </div>
          )}
        </div>
      </StyleRoot>
    );
  }
}
