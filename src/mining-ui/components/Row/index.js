import React, { useRef } from "react";
// import { useMediaQuery } from "react-responsive";

import { MINING_PREFIX } from "../../utils/constant";

import RowContext from "./RowContext";
import "./style.scss";
const Row = ({ children, justify, align, gutter, className, style }) => {
  //   const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  gutter = Array.isArray(gutter) ? gutter : [gutter, 0];
  gutter = !!gutter[0] === false ? [0, gutter[1]] : [gutter[0], gutter[1]];
  const gutterRef = useRef();
  gutterRef.current = gutter;
  return (
    <RowContext.Provider value={{ gutter }}>
      <div
        style={{
          paddingLeft: `${gutter[0] / 2}px`,
          paddingRight: `${gutter[0] / 2}px`,
          paddingTop: `${gutter[1] / 2}px`,
          paddingBottom: `${gutter[1] / 2}px`,
        }}
      >
        <div
          className={`${MINING_PREFIX}-flex${
            !!justify ? ` ${MINING_PREFIX}-justify-${justify}` : ""
          }${!!align ? ` ${MINING_PREFIX}-align-${align}` : ""}${
            !!className ? ` ${className}` : ""
          }`}
          style={{
            ...style,
            marginLeft: `${gutter[0] / -2}px`,
            marginRight: `${gutter[0] / -2}px`,
            marginTop: `${gutter[1] / -2}px`,
            marginBottom: `${gutter[1] / -2}px`,
          }}
          ref={gutterRef}
        >
          {children}
        </div>
      </div>
    </RowContext.Provider>
  );
};

export default Row;
