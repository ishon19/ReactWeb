import React from "react";
import { Alert } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import ImageCard from "./ImageCard";
import { Button } from "@material-ui/core";
import ls from "local-storage";
import Skeleton from "react-loading-skeleton";
import { SnackbarProvider, wrapComponent } from "react-snackbar-alert";

const style = makeStyles(theme => ({
  card: {
    marginTop: 40
  }
}));

const DisplayProductDetails = props => {
  //Style class
  const styleClasses = style();

  //For the alert on click of the item
  const Container = wrapComponent(function({ createSnackbar }) {
    function showSnackbar() {
      createSnackbar({
        message: "Added to the Cart!",
        dismissable: false,
        pauseOnHover: false,
        progressBar: false,
        sticky: false,
        theme: "default",
        timeout: 3000
      });
      ls.set("itemCount", ls.get("itemCount") + 1);
    }

    return (
      <Button
        variant="contained"
        color="primary"
        disabled={apiFetched ? false : true}
        className={styleClasses.card}
        onClick={showSnackbar}
      >
        Add {props.id} to Cart
      </Button>
    );
  });
  axios.get("https://obscure-garden-39706.herokuapp.com").then(response => {
    console.log("API Data: ", response.data);
    ls.set("APIData", response.data);
    setApiFetched(true);
    //setAPIData(response.data);
  });

  //const alert = useAlert();
  const [apiFetched, setApiFetched] = React.useState(false);
  console.log("Product datails of : ", props.id);
  // console.log("State variable: ", this.state.selectedProduct);
  //alert.show("Showing details of ", props.id);
  return (
    <div>
      {<ImageCard title={props.id} className={styleClasses.card} />}
      <div>
        Model:&nbsp;
        {apiFetched ? ls.get("APIData")[props.id].productModel : <Skeleton />}
        <br />
        Price:&nbsp;
        {apiFetched ? ls.get("APIData")[props.id].price : <Skeleton />}
        <br />
      </div>
      <SnackbarProvider position="bottom">
        <Container />
      </SnackbarProvider>
    </div>
  );
};

export default DisplayProductDetails;
