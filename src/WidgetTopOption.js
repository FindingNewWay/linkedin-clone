import React from "react";
import "./WidgetTopOption.css";
import { Avatar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import WidgetOption from "./WidgetOption";
import grey from "@material-ui/core/colors/grey";
function WidgetTopOption({ photoUrl, name, description }) {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  return (
    <div className="WidgetTopOption">
      <Avatar className="avatar" src={photoUrl} />
      <div className="information">
        <WidgetOption name={name} description={description} />
        <Button
          variant="contained"
          color={grey[700]}
          className={classes.button}
          startIcon={<AddIcon />}
        >
          Follow
        </Button>
      </div>
    </div>
  );
}

export default WidgetTopOption;
