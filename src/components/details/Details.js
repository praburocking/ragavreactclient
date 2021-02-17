import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import slidebg from "../../images/slide-bg.jpg";
import slidebg2 from "../../images/slide-bg.jpg";
import slidebg3 from "../../images/slide-bg.jpg";

const Details = ({ initialState }) => {
  const [item, setItem] = useState([]);
  const images = [
    { file_path: slidebg },
    { file_path: slidebg2 },
    { file_path: slidebg3 },
  ];
  let match = useRouteMatch();
  useEffect(() => {
    const currentTab = initialState && initialState.listingActiveTab;
    const filterdItem =
      currentTab === "supply"
        ? initialState &&
          initialState.supplyList.filter((list) => list.id == match.params.ID)
        : initialState &&
          initialState.demandList.filter((list) => list.id == match.params.ID);
    setItem(filterdItem);
  }, [initialState, match.params.ID]);
  console.log(item);
  return (
    <div className="details-page-main">
      {item.map((detail, index) => {
        return (
          <div className="row justify-content-center" key={index}>
            <div className="col-md-12">
              <div className="slide-images">
                <Slider className="slider" autoplay={3000}>
                  {detail.images.map((slide, index) => (
                    <div key={index}>
                      <img
                        src={`https://ohtelrest.hermitz.com/storage/app/public/${slide.file_path}`}
                        width="100%"
                        alt=""
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="detail-title">
                    Price in INR: <span>{detail.price}</span>
                  </div>
                </div>
                <div className="col-md-4 text-md-center">
                  <div className="detail-title">
                    Contact Number: <span>{detail.mobile}</span>
                  </div>
                </div>
                <div className="col-md-4 text-md-right">
                  <div className="detail-title">
                    email: <span>{detail.email}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-10">
              <h4>{detail.title}</h4>
              <p>{detail.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    initialState: state.update,
  };
};

export default connect(mapStateToProps)(Details);
