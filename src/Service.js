import React, { Component } from "react";
import ServiceDiv from "./components/ServiceDiv";
import { fetchServiceResult } from "./data/fetchService";
import { useHistory } from "react-router-dom";
import "./css/Service.css";

function Btn() {
  let history = useHistory();
  const redirect = () => {
    history.push("/quiz");
  };
  return (
    <button onClick={redirect} className="button-reverse">
      Take a Quiz
    </button>
  );
}

export default class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: false,
    };
  }
  async getResult() {
    const data = await fetchServiceResult();
    this.setState({
      result: data,
    });
  }
  componentDidMount() {
    this.getResult();
  }

  render() {
    //const history = useHistory();
    return (
      <div className="Service">
        <h1 className="service-header">Our Service</h1>
        {this.state.result ? (
          <div className="row service-group">
            {this.state.result !== 0
              ? this.state.result.map((item) => (
                  <div
                    className="row-item col-10 col-md-5 col-lg-5 col-xl-5"
                    key={item.id}
                    style={{margin:'0 2rem 0 2rem'}}
                  >
                    <ServiceDiv
                      title={item.title}
                      content={item.content}
                      deliverTime={item.deliverTime}
                      scale={item.scale}
                      price={item.price}
                      currency={item.currency}
                      freeRevise={item.freeRevise}
                      img={item.img}
                    />
                  </div>
                ))
              : null}
          </div>
        ) : (
          <div>
            <h1>Want know more about our Service?</h1>
            <Btn />
          </div>
        )}
      </div>
    );
  }
}
