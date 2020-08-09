import React from "react";
import logo from "./logo.svg";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
function App() {
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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className="m-5">
        <Paper
          className="flex items-center justify-center w-40 h-20"
          elevation={2}
        >
          <div className="font-bold">Hello</div>
        </Paper>
      </div>
    </React.Fragment>
  );
}

export default App;
