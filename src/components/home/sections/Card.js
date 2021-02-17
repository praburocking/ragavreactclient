import React from "react";
import cafe from "../../../images/cafe.jpg";
import { Link } from "react-router-dom";

const Card = ({ lists }) => {
  return (
    <div className="category-card-main">
      <div className="row">
        {lists.map((list, index) => {
          return (
            <div className="col-md-4" key={index}>
              <Link to={`/listing/${list.id}`}>
                <div className="category-card">
                  <img src={`https://ohtelrest.hermitz.com/storage/app/public/${list.file_path}`} width="100%" alt="" />
                  <div className="category-content">
                    <h6>{list.name}</h6>
                    <p>4 Locations</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
