import React from "react";
import { useAlert } from "react-alert";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import ImageCard from "./ImageCard";
import { Button } from "@material-ui/core";

const style = makeStyles(theme => ({
  card: {
    marginTop: 40
  }
}));

function displayProductDetails(props) {
  const styleClasses = style();
  // const alert = useAlert();
  axios.get("https://obscure-garden-39706.herokuapp.com").then(response => {
    console.log("API Data: ", response.data);
  });
  console.log("Product datails of : ", props.id);
  //alert.show("Showing details of ", props.id);
  return (
    <div>
      Loading Details of {props.id}...
      <ImageCard title={props.id} className={styleClasses.card} />
      <div>
        Model: <br />
        Price: <br />
      </div>
      <Button variant="contained" color="primary" className={styleClasses.card}>
        Add {props.id} to Cart
      </Button>
    </div>
  );
}

export default displayProductDetails;
