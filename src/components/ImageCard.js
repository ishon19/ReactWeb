import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";

const style = makeStyles({
  card: {
    maxWidth: 500,
    marginBottom: 20
  },
  media: {
    height: 150
  }
});

function ImageCard(props) {
  const classes = style();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          classes={classes.media}
          title="Product A"
          image={require("/src/images/sample.jpg")}
          style={{ height: 0, paddingTop: "30%" }}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.h1Text}
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            Click on the card to navigate
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          OK
        </Button>
        {/* <Button size="small" color="primary">
          Know More
        </Button> */}
      </CardActions>
    </Card>
  );
}

export default ImageCard;
