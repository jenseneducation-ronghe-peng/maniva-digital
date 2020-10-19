import React, { Component } from "react";
import {
  fetchService,
  fetchQuiz,
  fetchClientName,
  fetchClientEmail,
} from "./data/fetchService";
import QuizDiv from "./components/QuizDiv";
import "./css/Quiz.css";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: [],
      services: [],
      filteredService: [],
      quizNr: 0,
    };
    this.filterService = this.filterService.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }
  async getService() {
    const data = await fetchService();
    this.setState({
      services: data,
    });
  }
  async getQuiz() {
    const data = await fetchQuiz();
    this.setState({
      quiz: data,
    });
  }
  async getName() {
    const data = await fetchClientName();
    if (data) {
      this.setState({
        name: data,
      });
    }
  }
  async getEmail() {
    const data = await fetchClientEmail();
    if (data) {
      this.setState({
        email: data,
      });
    }
  }

  filterService(keyword) {
    let services = this.state.services;
    let filteredService = this.state.filteredService;
    let filteredArray;
    if (filteredService.length === 0) {
      filteredArray = services.filter((item) => item.keyword.includes(keyword));
    } else {
      filteredArray = filteredService.filter((item) =>
        item.keyword.includes(keyword)
      );
    }
    this.setState({
      filteredService: filteredArray,
    });
    let quizLength = this.state.quiz.length;
    let quizNr = this.state.quizNr;
    if (quizNr < quizLength - 1) {
      quizNr++;
      this.setState({ quizNr: quizNr });
    } else {
      const LS_KEY = "service_result";
      localStorage.setItem(LS_KEY, JSON.stringify(filteredArray));
      
      window.location.replace("/service");
    }
  }
  inputHandler(stateName, input) {
    let LS_KEY;
    switch (stateName) {
      case "name":
        this.setState({
          name: input,
        });
        LS_KEY = "name";
        localStorage.setItem(LS_KEY, JSON.stringify(input));
        break;
      case "email":
        this.setState({
          email: input,
        });
        LS_KEY = "email";
        localStorage.setItem(LS_KEY, JSON.stringify(input));
        break;
      default:
        return;
    }
    let quizLength = this.state.quiz.length;
    let quizNr = this.state.quizNr;
    if (quizNr < quizLength - 1) {
      quizNr++;
      this.setState({ quizNr: quizNr });
    }
  }
  async showRightQuiz() {
    const name = await fetchClientName();
    this.setState({
      name: name,
    });
    const email = await fetchClientEmail();
    this.setState({
      email: email,
    });
    if (name && email) {
      this.setState({
        quizNr: 2,
      });
    } else {
      this.setState({
        quizNr: 0,
      });
    }
  }
  componentDidMount() {
    this.getService();
    this.getQuiz();
    this.showRightQuiz();
  }
  componentWillUnmount() {
    this.showRightQuiz();
  }
  render() {
    const renderService = this.state.quiz[this.state.quizNr];
    return (
      <div className="Quiz">
        <h1 className="quiz-header">Take a Quiz</h1>
        {this.state.quiz.length !== 0 ? (
          <div className="mapQuiz">
            <QuizDiv
              key={renderService.id}
              id={renderService.id}
              question={renderService.question}
              answers={renderService.answers}
              stateName={renderService.stateName}
              callbackFunction={this.filterService}
              getInput={this.inputHandler}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
