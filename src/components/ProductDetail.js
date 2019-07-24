import React from "react";
import { useAlert } from "react-alert";
import axios from "axios";

function displayProductDetails(props) {
  //const alert = useAlert();
  axios.get("https://obscure-garden-39706.herokuapp.com").then(response => {
    console.log("API Data: ", response.data);
  });
  console.log("Product datails of : ", props.id);
  //alert.show("Showing details of ", props.id);
  return <div>Loading Details of {props.id}...</div>;
}

export default displayProductDetails;
