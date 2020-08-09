import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import Avatar from "@material-ui/core/Avatar";
import { Input } from "@material-ui/core";
export default class PageProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarUrl: null,
    };
  }
  render() {
    return (
      <div className="">
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        <Paper className="p-4">
          <div className="w-full">
            <div className="pb-2">Profile Information</div>
            <div className="w-full">
              <form noValidate autoComplete="off">
                <div className="py-2 relative">
                  <TextField
                    fullWidth={true}
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    onChange={(e) =>
                      this.setState({
                        avatarUrl: URL.createObjectURL(e.target.files[0]),
                      })
                    }
                    type="file"
                  />
                  <div className="absolute right-0 bottom-0 top-0 mt-4 mr-2">
                    <Avatar alt="Remy Sharp" src={this.state.avatarUrl} />
                  </div>
                </div>
                <div className="py-2">
                  <TextField
                    fullWidth={true}
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    type="text"
                  />
                </div>
              </form>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}
