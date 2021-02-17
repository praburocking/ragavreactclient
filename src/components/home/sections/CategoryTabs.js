import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fecthCategroy,
  fecthEquipments,
  fecthJob,
  fecthdeals,
} from "../../../redux";
import { Tabs, Tab, Spinner } from "react-bootstrap";
import Card from "./Card";

const CategoryTabs = ({
  fecthCategroy,
  spaces,
  fecthEquipments,
  equipments,
  fecthJob,
  job,
  fecthdeals,
  deals,
}) => {
  useEffect(() => {
    fecthCategroy();
    fecthEquipments();
    fecthJob();
    fecthdeals();
  }, []);
  return (
    <div className="category-section">
      <h2 className="title">Our Categories</h2>
      <Tabs defaultActiveKey="Spaces" className="my-tabs">
        <Tab eventKey="Spaces" title="Spaces">
          <>
            {spaces &&
            spaces.categoryList &&
            spaces.categoryList.length >= 1 ? (
              <div>
                <Card lists={spaces.categoryList} />
              </div>
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
          </>
        </Tab>
        <Tab eventKey="UsedEquipments" title="Used Equipments">
          <>
            {equipments &&
            equipments.equipmentList &&
            equipments.equipmentList.length >= 1 ? (
              <div>
                <Card lists={equipments.equipmentList} />
              </div>
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
          </>
        </Tab>
        <Tab eventKey="Jobs" title="Jobs">
          <>
            {job && job.jobList && job.jobList.length >= 1 ? (
              <div>
                <Card lists={job.jobList} />
              </div>
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
          </>
        </Tab>
        <Tab eventKey="Deals" title="Deals">
          <>
            {deals && deals.dealsList && deals.dealsList.length >= 1 ? (
              <div>
                <Card lists={deals.dealsList} />
              </div>
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
          </>
        </Tab>
      </Tabs>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    spaces: state.categoryList,
    equipments: state.equipmentsList,
    job: state.jobList,
    deals: state.dealsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fecthCategroy: () => dispatch(fecthCategroy()),
    fecthEquipments: () => dispatch(fecthEquipments()),
    fecthJob: () => dispatch(fecthJob()),
    fecthdeals: () => dispatch(fecthdeals()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTabs);
