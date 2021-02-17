import React from "react";
import { connect } from "react-redux";
import { updateField } from "../../redux/update/updateAction";
import { Tabs, Tab } from "react-bootstrap";
import ListingDemandCard from "./ListingDemandCard";
import ListingSupplyCard from "./ListingSupplyCard";

const Lisiting = ({ updateField }) => {
  return (
    <div className="listing-page">
      <Tabs
        defaultActiveKey="supply"
        className="supply-demand-tabs"
        onSelect={(crnt) => updateField("listingActiveTab", crnt)}
      >
        <Tab eventKey="supply" title="Supply">
          <ListingSupplyCard />
        </Tab>
        <Tab eventKey="demand" title="Demand">
          <ListingDemandCard />
        </Tab>
      </Tabs>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    supplyList: state.update,
  };
};

const mapDispatchToProps = {
  updateField,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lisiting);
