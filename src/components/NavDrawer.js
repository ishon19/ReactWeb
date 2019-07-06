import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { lightBlue } from "@material-ui/core/colors";
import ImageCard from "./ImageCard";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import GridCard from "./GridCard";
import { BrowserRouter as Router, Link } from "react-router-dom";

const drawerWidth = 250;

var productNames = [
  "Product A",
  "Product B",
  "Product C",
  "Product D",
  "Product E"
];

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    background: "linear-gradient(to right, #191919 60% , gray)"
  },
  appBarShift: {
    width: `calc(100%-${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    flexShrink: 0,
    background: "linear-gradient(to bottom, white 80%, gray)"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8 px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  headerText: {
    alignContent: "center",
    background: lightBlue
  },
  cardContainer: {
    // To add the styling here
    overflow: "scroll",
    width: "100%",
    height: "30%"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(1),
    marginLeft: 50,
    width: "50%"
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%"
  }
}));

function PersistentDrawerLeft() {
  const classes = useStyle();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function routeToPage() {
    console.log("item clicked!");
    //var itemName = event.target.attributes.getNamedItem("prodName").value;
    //console.log(this.props.prodName);
    //  withRouter(({history}) => (
    //    history.push('/ProductDetail')
    //   ))
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, { [classes.appBarShift]: open })}
      >
        <ToolBar>
          <IconButton
            color="inherit"
            aria-label="Open Menu"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Shopify
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search.."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
        </ToolBar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Electronics", "Games", "Music", "Headphones"].map(
            (item, index) => (
              <ListItem button key={item}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {["Account", "My Orders", "Track Orders"].map((item, index) => (
            <ListItem button key={item}>
              <ListItemIcon>
                {index % 2 === 0 ? <AccountBoxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {/* <Typography paragraph onClick={hideSideBar}>
          Welcome to the site
        </Typography> */}
        <div>
          {productNames.map((item, index) => (
            <div onClick={routeToPage} prodName={item}>
              <ImageCard title={item} h1Text={item} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default PersistentDrawerLeft;
