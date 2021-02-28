import React, { useEffect, useState } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as categorie from "../services/categories";
import { NavLink, Link } from "react-router-dom";
import * as bs from "../services/buyersSellers";
import Container from "@material-ui/core/Container";
import CurSepper from "./common/Stepper";
import SimpleCard from "./common/Cards";
import Grid from "@material-ui/core/Grid";
import CustomDialog from "./common/Dialog";
import { ButtonBase, Paper } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ImageButton from "./common/ImageButton";
import TextField from "@material-ui/core/TextField";
import PostAdForm from "./PostAdForm";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180
  },
  wrapper: {
    width: 100 + theme.spacing(2)
  },
  paper: {
    zIndex: 1,
    position: "relative",
    margin: theme.spacing(1),
    height: "200px"
  }
}));

function getSteps() {
  return [
    "Select Ad Type",
    "Select Buyer/Seller",
    "Select sub Category",
    "Create Ad"
  ];
}

const AddPost = () => {
  const classes = useStyles();
  const [adType, setAdType] = useState();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
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
      level: ""
    },
    categories: [],
    sub_categories: [],
    supply_type: [
      { name: "buy" },
      { name: "rent" },
      { name: "lease" },
      { name: "invest" }
    ],
    errors: {},
    buyerSeller: "buyer"
  });

  const updateData = (event) => {
    console.log("event ==>", event);
    const data = { ...formData.data };
    data[event.target.name] = event.target.value;
    setFormData({ ...formData, data });
  };

  const checkIsJobDetailsNeeded = () => {
    if (
      formData.data.category_id &&
      formData.categories &&
      formData.data.category_id === 3
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleCategory = (curAdType) => {
    setFormData({
      ...formData,
      data: { ...formData.data, category_id: curAdType }
    });
    setActiveStep(1);
  };
  const handleSubCategory = (sub_category_id) => {
    setFormData({ ...formData, data: { ...formData.data, sub_category_id } });
    setActiveStep(3);
  };
  useEffect(() => {
    const fetchCategories = async () => {
      const { data: categories } = await categorie.getcategories();
      const { data: sub_categories } = await categorie.getsubcategories();
      console.log("categorie", categories);
      const temp_formData = formData;
      temp_formData.categories = categories;
      temp_formData.sub_categories = sub_categories;
      console.log("categorie 11", temp_formData);
      setFormData({ ...formData, categories, sub_categories });
    };
    fetchCategories();
  }, []);

  const images = [
    {
      url:
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/buyer-12-180587.png",
      title: "BUYER",
      width: "50%",
      height: "100%",
      onClick: () => {
        handleBuyerSeller("buy", "buyer");
      }
    },
    {
      url: "https://static.thenounproject.com/png/2435334-200.png",
      title: "SELLER",
      width: "50%",
      height: "100%",
      onClick: () => {
        handleBuyerSeller("sell", "seller");
      }
    }
  ];

  const doSubmit = async () => {
    const { data } = formData;
    console.log("data pot ", data);
    if (formData.buyerSeller === "seller") {
      const success = await bs.postSellers(data);
      if (success) {
        // window.location = "/post";
      }
    } else {
      const success = await bs.postbuyers(data);
      if (success) {
        //  window.location = "/post";
      }
    }
  };

  const handleBuyerSeller = (supply_type, user_type) => {
    setFormData({
      ...formData,
      buyerSeller: user_type,
      data: { ...formData.data, supply_type: supply_type }
    });
    setActiveStep(2);
  };

  return (
    <Container>
      <CurSepper steps={getSteps()} curStep={activeStep} />

      {adType && <CustomDialog open={true} />}
      {console.log("from return formData", formData)}

      {/* to show loading page since the inital data are not yet loaded */}
      {activeStep === 0 && formData.categories === [] && (
        <Typography> Loading..</Typography>
      )}
      {/* first step select ad type */}
      {activeStep === 0 && formData.categories != null && (
        <Grid container spacing={2} justify="center">
          {formData.categories.map((category) => (
            <Grid item xs={6}>
              {" "}
              <Paper elevation={4} className={classes.paper}>
                <ImageButton
                  image={{
                    title: category.name,
                    width: "100%",
                    onClick: () => {
                      handleCategory(category.id);
                    },
                    url: category.file_path
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}

      {/*second step - buyer seller selecting step */}
      {activeStep === 1 && (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <Paper elevation={4} className={classes.paper}>
            {images.map((image) => (
              <ImageButton image={image} />
            ))}
          </Paper>
        </Slide>
      )}
      {/* third step select ad sub type */}
      {activeStep === 2 && (
        <Grid container spacing={2} justify="center">
          {console.log("sub category", formData.sub_categories)}
          {formData.sub_categories.map(
            (sub_category) =>
              sub_category.category_id === formData.data.category_id && (
                <Grid item xs={6}>
                  {" "}
                  <Paper elevation={4} className={classes.paper}>
                    <ImageButton
                      image={{
                        title: sub_category.name,
                        width: "100%",
                        onClick: () => {
                          handleSubCategory(sub_category.id);
                        },
                        url: sub_category.file_path
                      }}
                    />
                  </Paper>
                </Grid>
              )
          )}
        </Grid>
      )}

      {/* fourth type select contact details */}
      {activeStep === 3 && (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <div>
            <PostAdForm
              isJobDetailsNeeded={checkIsJobDetailsNeeded()}
              updateData={updateData}
              handleSumbit={doSubmit}
            />
          </div>
        </Slide>
      )}
    </Container>
  );
};

export default AddPost;
