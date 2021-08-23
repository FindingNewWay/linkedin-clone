import React from "react";
import "./SidebarOption.css";
import IconButton from "@material-ui/core/IconButton";
function SidebarOption({ title, Icon }) {
  return (
    <div className="SidebarOption">
      <div className="SidebarOption__title">
        <h3 className="SidebarOption__title">{title}</h3>
      </div>

      {Icon && (
        <IconButton className="IconButton" aria-label="add">
          <Icon className="SidebarOption__icon" />
        </IconButton>
      )}
    </div>
  );
}

export default SidebarOption;
