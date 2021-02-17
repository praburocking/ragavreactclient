import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {updateField} from '../../redux/update/updateAction'
import cafe from "../../images/cafe.jpg";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const ListingSupplyCard = ({updateField}) => {
  const [lists, setLists] = useState([]);
  let match = useRouteMatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(
        `https://ohtelrest.hermitz.com/public/api/sellers/${match.params.ID}/supplies`
      )
      .then((res) => {
        const data = res.data;
        setLists(data);
      });
  }, []);

  useEffect(() => {
    updateField("supplyList",lists)
  }, [lists,updateField])

  

  return (
    <div className="lisitng-card-main">
      <div className="row">
        {lists && lists.length >= 1 ? (
          <>
            {lists.map((list, index) => {
              return (
                <div className="col-md-6" key={index}>
                  <Link to={`/details/${list.id}`}>
                  <div className="listing-card-inner">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="listing-card-img">
                          <img src={cafe} alt="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="listing-card-content">
                          <h6>{list.title}</h6>
                          <p>{list.description}</p>
                          <small>Posted 2 Days ago</small>
                        </div>
                      </div>
                    </div>
                  </div></Link>
                </div>
              );
            })}
          </>
        ) : (
          <div
            style={{ height: "300px" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps =(state) => {
  return{
    supplyList:state.update
  }
}

const mapDispatchToProps = {
  updateField
}


export default connect(mapStateToProps,mapDispatchToProps)(ListingSupplyCard);
