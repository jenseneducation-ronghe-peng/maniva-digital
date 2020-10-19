import React, { Component } from "react";
import ServiceItem from "./ServiceItem";
import ServiceTitle from "./ServiceTitle";
import { useHistory } from "react-router-dom";

function Btn() {
  let history = useHistory();
  const redirect = () => {
    history.push("/quiz");
  };
  return (
    <button onClick={redirect} className="button-reverse">
      Get Start
    </button>
  );
}

export default class OurServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      showService: [
        {
          id: 1,
          title: "APP & WEB DEVELOPMENT",
          subTitle: "Your Digital Transformation",
          text:
            "Our team specializes in Mobile & Web design and development. We can develop for iOS/Android with a full adaptation of graphics, text & pictures.",
          img: "design",
        },
      ],
      serviceList: [
        {
          id: 1,
          title: "APP & WEB DEVELOPMENT",
          subTitle: "Your Digital Transformation",
          text:
            "Our team specializes in Mobile & Web design and development. We can develop for iOS/Android with a full adaptation of graphics, text & pictures.",
          img: "design",
        },
        {
          id: 2,
          title: "DIGITAL STRATEGY CONSULTATION",
          subTitle: "One size does certainly not fit all",
          text:
            "We examine what your organization is doing to stay relevant and competitive in this fast-paced digital world. We then strategize using smart digital tools and global resources in order to provide you with a dynamic implementation plan.",
          img: "consulting",
        },
        {
          id: 3,
          title: "PERFORMANCE & DATA ANALYSIS",
          subTitle: "Act On What You Actually Know!",
          text:
            "In collaboration with our global partners, we implement analytic tools into your App/Web to continuously measure key parameters of your business performance.",
          img: "analysis",
        },
        {
          id: 4,
          title: "SUPPORT & MAINTENANCE",
          subTitle: "Let Us Maintain Your Digital Platform",
          text:
            "Our skilled staff can take care of your web/app, providing their expertise 24/7. We make sure your platform is up to date with the latest upgrades for optimal performance over time.",
          img: "support",
        },
      ],
    };
    this.sendId = this.sendId.bind(this);
  }
  sendId(id) {
    if (id) {
      let serviceList = this.state.serviceList;
      let service = serviceList.filter((item) => item.id === id);
      this.setState({
        id: id,
        showService: service,
      });
      console.log(service);
    }
  }

  render() {
    return (
      <section className="OurServices" id="OurServices">
        <h1 className="services-title"> WHAT WE DO</h1>
        <div className="row all-service">
          <div className="row-item col-12 col-md-5 col-lg-5 col-xl-4">
            <div className="row div-border">
              {this.state.serviceList
                ? this.state.serviceList.map((item) => (
                    <div
                      className="service-list-item row-item col-10 col-md-10 col-lg-10 col-xl-10"
                      key={item.id}
                    >
                      {this.state.id === item.id ? (
                        <div className="red-div">
                          <ServiceTitle
                            title={item.title}
                            id={item.id}
                            callback={this.sendId}
                          />
                        </div>
                      ) : (
                        <div className="orange-div">
                          <ServiceTitle
                            title={item.title}
                            id={item.id}
                            callback={this.sendId}
                          />
                        </div>
                      )}
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="row-item col-10 col-md-5 col-lg-5 col-xl-4">
            <ServiceItem
              title={this.state.showService[0].title}
              subTitle={this.state.showService[0].subTitle}
              text={this.state.showService[0].text}
              img={this.state.showService[0].img}
            />
          </div>
        </div>
        <Btn className="button-reverse" />
      </section>
    );
  }
}
