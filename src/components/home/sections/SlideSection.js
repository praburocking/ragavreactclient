import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const SlideSection = () => {
  const slides = [
    {
      title: "Spaces",
      description:
        "Sell / Buy / Rent / Lease / Partner / Invest... In the Used Equipments in RestaurantsHotels, Cruise Ships etc.. ",
    },
    {
      title: "Deals",
      description:
        "Supermarkets, Megamarts, Vegetables/Fruits/ Grocery/Meat - Traders/ Traders with perishable as well as non-perishable goods can advertise their products for 3 days, 7 days for consumers in Hospitality sector in a particular city",
    },
    {
      title: "Used Equipments",
      description:
        "Sell / Buy / Rent / Lease / Partner / Invest... In the Used Equipments in RestaurantsHotels, Cruise Ships etc.. ",
    },
    {
      title: "Jobs",
      description:
        "Recruiting Organisation can advertise their Staff requirements and Individual Applicants can post their Resume in the Jobs classified category. ",
    },
  ];
  return (
    <div className="home-slide-main">
      <div className="slide-parent-div">
        <Slider className="slider" autoplay={3000}>
          {slides.map((slide, index) => (
            <div key={index}>
              <h2>{slide.title}</h2>
              <h6>{slide.description}</h6>
              <div className="listing-link">Explore More</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlideSection;
