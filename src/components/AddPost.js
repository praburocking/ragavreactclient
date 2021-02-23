import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as categorie from "../services/categories";
import { NavLink, Link } from "react-router-dom";
import * as bs from "../services/buyersSellers";

class AddPost extends Form {
  state = {
    data: {
      category_id: "",
      sub_category_id: "",
      title: "",
      description: "",
      supply_type: "",
      area: "",
      price: "",
      org_name: "",
      incharge: "",
      phone: "",
      alt_phone: "",
      contact_mode: "",
      email: "",
      city: "",
      state: "",
      address: "",
      zip_code: "",
      interview_date: "",
      interview_time: "",
      interview_location: "",
      job_location: "",
      position: "",
      education: "",
      experience: "",
      level: "",
    },
    categories: [],
    sub_categories: [],
    supply_type: [
      { name: "buy" },
      { name: "rent" },
      { name: "lease" },
      { name: "invest" },
    ],
    errors: {},
    buyerSeller: "buyer",
  };
  schema = {
    category_id: Joi,
    sub_category_id: Joi,
    title: Joi,
    description: Joi,
    supply_type: Joi,
    area: Joi,
    price: Joi,
    org_name: Joi,
    incharge: Joi,
    phone: Joi,
    alt_phone: Joi,
    contact_mode: Joi,
    email: Joi,
    city: Joi,
    state: Joi,
    address: Joi,
    zip_code: Joi,

    interview_date: Joi,
    interview_time: Joi,
    interview_location: Joi,
    job_location: Joi,
    position: Joi,
    education: Joi,
    experience: Joi,
    level: Joi,
  };

  async componentDidMount() {
    const { data: categories } = await categorie.getcategories();
    const { data: sub_categories } = await categorie.getsubcategories();
    this.setState({ categories, sub_categories });
  }

  buyerSeller = (b) => {
    this.setState({ buyerSeller: b });
  };

  doSubmit = async () => {
    console.log(this.state.data);
    const { data } = this.state;
    if (this.state.buyerSeller === "seller") {
      const success = await bs.postSellers(data);
      if (success) {
        window.location = "/post";
      }
    } else {
      const success = await bs.postbuyers(data);
      if (success) {
        window.location = "/post";
      }
    }
    // const success = await auth.login(data);
    // console.log("data", success);
    // if (success) {
    //   window.location = "/home";
    // }
  };

  render() {
    let sub_cat = this.state.sub_categories.filter(
      (t) => t.category_id * 1 === this.state.data.category_id * 1
    );

    console.log(this.state.buyerSeller);

    return (
      <div
        id='addpostcontainer'
        className='d-flex justify-content-center'
        style={
          {
            /* marginTop: "60px" */
          }
        }
      >
        <form
          onSubmit={this.handleSubmit}
          className='col-md-6'
          style={{
            width: "420px",
            backgroundColor: "#f2f2f2",
            color: "black",
            padding: "2rem",
            boxSizing: "border-box",
            margin: "20px auto",
            boxShadow: "2px 2px 10px black",
            borderRadius: "2%",
          }}
        >
          <h3 className='text-center'> Add Post</h3>
          <div class='d-flex bd-highlight text-center '>
            <div
              className='p-2 m-3 flex-fill bd-highlight btn btn-outline-info'
              onClick={() => this.buyerSeller("buyer")}
            >
              Buyers
            </div>
            <div
              className='p-2  m-3 flex-fill bd-highlight btn btn-outline-info'
              onClick={() => this.buyerSeller("seller")}
            >
              Sellers
            </div>
          </div>
          {this.renderInput("title", "Title", "form-control", true)}
          <div className=' d-flex bd-highlight  m-3'>
            <div class='p-2 flex-fill bd-highlight'>
              {this.renderSelect(
                "category_id",
                "Category",
                this.state.categories
              )}
            </div>
            <div class='p-2 flex-fill bd-highlight'>
              {" "}
              {this.renderSelect("sub_category_id", "Sub Category", sub_cat)}
            </div>
          </div>
          {this.renderTextArea("description", "Post Details", "form-control")}
          <div className='d-flex bd-highlight'>
            <div class='p-2 flex-fill bd-highlight'>
              {this.renderSelect(
                "supply_type",
                "Supply Type",
                this.state.supply_type
              )}
            </div>
            <div class='p-2 flex-fill bd-highlight'>
              {this.renderInput("area", "Area In Square ft(only numbers*)", "form-control ")}
            </div>
            <div class='p-2 flex-fill bd-highlight'>
              {this.renderInput("price", "Price In INR(only numbers*)", "form-control ")}
            </div>
          </div>
          <div className=' d-flex justify-content-around '>
            {this.renderInput("org_name", "Organization Name", "form-control")}

            {this.renderInput("incharge", "Incharge", "form-control")}
          </div>
          <div className=' d-flex justify-content-around '>
            {this.renderInput("phone", "Phone(only numbers*)", "form-control", false)}
            {this.renderInput("alt_phone", "Alt Phone(only numbers*)", "form-control", false, "tel")}
          </div>
          <div className='form-group '>
            <label htmlFor='contact_mode'>Mode of Contact</label>
            <div className='d-flex justify-content-start'>
              {this.renderRadio("contact_mode", "Mobile", "m-2")}
              {this.renderRadio("contact_mode", "Email", "m-2")}
            </div>
          </div>
          {/* {this.renderInput("contact_mode", "Contact Mode", "form-control")} */}
          {this.renderInput("email", "Email", "form-control")}
          {this.renderInput("city", "City", "form-control")}
          {this.renderInput("state", "State", "form-control")}
          {this.renderInput("address", "Address", "form-control")}
          {this.renderInput("zip_code", "Zip Code", "form-control")}
          {this.state.buyerSeller === "buyer"
            ? this.state.data.category_id * 1 === 3 && (
                <>
                  {this.renderInput(
                    "interview_date",
                    "InterView Date in DD/MM/YY",
                    "form-control"
                  )}
                  {this.renderInput(
                    "interview_time",
                    "InterView Time in HH:MM",
                    "form-control"
                  )}
                  {this.renderInput(
                    "interview_location",
                    "InterView Location",
                    "form-control"
                  )}
                  {this.renderInput("position", "Position", "form-control")}
                  {this.renderInput("level", "Level", "form-control")}
                </>
              )
            : this.state.data.category_id * 1 === 3 && (
                <>
                  {this.renderInput(
                    "job_location",
                    "Job Location",
                    "form-control"
                  )}
                  {this.renderInput("position", "Position", "form-control")}
                  {this.renderInput("education", "Education", "form-control")}
                  {this.renderInput("experience", "Experience", "form-control")}
                </>
              )}
          <span style={{ marginRight: "1rem" }}>
            {this.renderButton("Submit")}
          </span>
          {this.renderButton("Back")}
        </form>
      </div>
    );
  }
}

export default AddPost;
