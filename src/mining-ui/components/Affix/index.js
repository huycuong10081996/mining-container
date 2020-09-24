import React, { useRef } from "react";

import { MINING_PREFIX } from "../../utils/constant";
import "./style.scss";
const Affix = ({
  className,
  placement,
  style,
  children,
  zIndex,
  offsetTop,
  offsetBottom,
}) => {
  return (
    <div
      className={`${!!className ? `${className} ` : ""}${MINING_PREFIX}-affix`}
      style={{
        ...style,
        zIndex: !!zIndex && typeof zIndex === "number" ? zIndex : 10,
        top:
          !offsetBottom && !!offsetTop && typeof offsetTop === "number"
            ? offsetTop
            : 0,
        bottom:
          !offsetTop && !!offsetBottom && typeof offsetBottom === "number"
            ? offsetBottom
            : "",
      }}
    >
      {children}
    </div>
  );
};

export default Affix;
