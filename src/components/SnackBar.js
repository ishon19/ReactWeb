import React from "react";
import { SnackbarProvider, wrapComponent } from "react-snackbar-alert";
import { Button } from "reactstrap";

export default function SnackBar() {
  return (
    <SnackbarProvider position="bottom">
      <Container />
    </SnackbarProvider>
  );
}

const Container = wrapComponent(function({ createSnackbar }) {
  function showSnackbar() {
    createSnackbar({
      message: "Added to the Cart!",
      dismissable: false,
      pauseOnHover: false,
      progressBar: true,
      sticky: false,
      theme: "default",
      timeout: 3000
    });
  }

  return (
    <div>
      <Button onClick={showSnackbar}>Add to Cart</Button>
    </div>
  );
});
