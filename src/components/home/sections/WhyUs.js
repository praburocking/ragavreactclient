import React from "react";
import verified from "../../../images/icons/verified.png";

const WhyUs = () => {
  const whyusContent = [
    {
      title: "Heading One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi  ut perferendis, blanditiis sapiente porro est corporis. Illum dolorum aperiam architecto facere obcaecati enim molestias     necessitatibus voluptatem illo. Non, recusandae harum?",
    },
    {
      title: "Heading Two",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi  ut perferendis, blanditiis sapiente porro est corporis. Illum dolorum aperiam architecto facere obcaecati enim molestias     necessitatibus voluptatem illo. Non, recusandae harum?",
    },
    {
      title: "Heading Three",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi  ut perferendis, blanditiis sapiente porro est corporis. Illum dolorum aperiam architecto facere obcaecati enim molestias     necessitatibus voluptatem illo. Non, recusandae harum?",
    },
    {
      title: "Heading Four",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi  ut perferendis, blanditiis sapiente porro est corporis. Illum dolorum aperiam architecto facere obcaecati enim molestias     necessitatibus voluptatem illo. Non, recusandae harum?",
    },
  ];
  return (
    <div className="why-us-section">
      <div className="why-us-inner">
        <h2 className="title">Why Us ?</h2>
        <div className="row align-items-center ">
          {whyusContent.map((contents, index) => {
            return (
              <div className="col-md-3" key={index}>
                <div className="small-cards">
                  <img src={verified} alt="" />
                  <h5>{contents.title}</h5>
                  <p>{contents.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
