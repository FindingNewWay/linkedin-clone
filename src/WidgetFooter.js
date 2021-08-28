import React from "react";
import "./WidgetFooter.css";
function WidgetFooter({ title, Icon }) {
  console.log(Icon);
  return (
    <div className="WidgetFooter">
      <a href="#">{title}</a>
      {Icon && <Icon className="icon" />}
    </div>
  );
}

export default WidgetFooter;
