import React from "react";
import "./WidgetMiddleOption.css";
import WidgetOption from "./WidgetOption";

function WidgetMiddleOption({ title, description, Icon }) {
  return (
    <div className="WidgetMiddleOption">
      <WidgetOption name={title} description={description} />
      {Icon && <Icon className="Icon" />}
    </div>
  );
}

export default WidgetMiddleOption;
