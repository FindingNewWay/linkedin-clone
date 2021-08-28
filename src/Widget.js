import React from "react";
import "./Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import WidgetHeader from "./WidgetHeader";
import WidgetTopOption from "./WidgetTopOption";
import WidgetFooter from "./WidgetFooter";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import WidgetMiddleOption from "./WidgetMiddleOption";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
function Widget() {
  return (
    <div className="widget">
      <div className="widget__top">
        <WidgetHeader title="Add to your feed" Icon={InfoIcon} />
        <WidgetTopOption
          photoUrl=""
          name="CareerBuilder Vietnam"
          description="Company . Human Resouces"
        />
        <WidgetTopOption
          photoUrl=""
          name="Bill Gates"
          description="Co-chair, Bill & Melinda Gates Foundation"
        />
        <WidgetTopOption
          photoUrl=""
          name="Andrew Ng"
          description="Founder and CEO of Landing AI"
        />
        <WidgetFooter
          title="View all recommendations"
          Icon={ArrowForwardIcon}
        />
      </div>
      <div className="widget__middle">
        <WidgetHeader title="Today's top course" Icon={InfoIcon} />
        <WidgetMiddleOption
          title="Backgrounder: Leadership Conversation"
          description="American Negotiation"
          Icon={OpenInNewIcon}
        />
        <WidgetMiddleOption
          title="Well-Being in the Workplace"
          description="Careercake"
          Icon={OpenInNewIcon}
        />
        <WidgetMiddleOption
          title="Articulating Your Value"
          description="Madecraft and Alessandra Wall"
          Icon={OpenInNewIcon}
        />
        <WidgetFooter
          title="Show more on Linkedin Learning"
          Icon={ArrowForwardIcon}
        />
      </div>
      <div className="widget__bottom"></div>
    </div>
  );
}

export default Widget;
