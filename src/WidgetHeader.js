import React from "react";
import "./WidgetHeader.css";
import IconButton from "@material-ui/core/IconButton";
function WidgetHeader({ title, Icon }) {
  return (
    <div className="WidgetHeader">
      <h2>{title}</h2>
      {Icon && (
        <IconButton className="IconButton" aria-label="infor">
          <Icon className="icon" />
        </IconButton>
      )}
    </div>
  );
}

export default WidgetHeader;
