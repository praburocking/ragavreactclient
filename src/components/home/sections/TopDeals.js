import React from "react";
import mask1 from "../../../images/Mask1.png";
import mask2 from "../../../images/Mask2.png";
const TopDeals = () => {
  return (
    <div className="top-deals-section">
      <h2 className="title">Top Deals For You</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="deals-card">
            <img src={mask1} alt="" />
            <div className="deals-content">
              <h5 className="deals-first-title">
                Check Top Deals in your City
              </h5>
              <div className="listing-link">Explore More</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="deals-card bg-change">
            <img src={mask2} alt="" />
            <div className="deals-content">
              <h5 className="deals-second-title">
                Upto 50% Off on Hotel Spaces
              </h5>
              <div className="listing-link">Explore More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDeals;
