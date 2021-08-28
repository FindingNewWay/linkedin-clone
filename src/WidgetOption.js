import React from "react";
import "./WidgetOption.css";
function WidgetOption({ name, description }) {
  return (
    <div className="widget-option">
      <span>{name}</span>
      <p>{description}</p>
    </div>
  );
}

export default WidgetOption;
