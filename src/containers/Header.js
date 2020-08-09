import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className="mr-2"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="flex-grow p-3">
              News
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                this.props.history.push("/login");
              }}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default Header;
