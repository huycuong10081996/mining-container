import React, { useRef } from "react";

import { MINING_PREFIX } from "../../utils/constant";
import RowContext from "../Row/RowContext";
import "./style.scss";
const Col = ({ span, children, className, style }) => {
  const spanRef = useRef();
  spanRef.current = span;
  return (
    <RowContext.Consumer>
      {({ gutter }) => (
        <div
          className={`${MINING_PREFIX}-col${
            span !== undefined ? ` ${MINING_PREFIX}-col-${span}` : ""
          }${!!className ? className : ""}`}
          style={{
            ...style,
            paddingLeft: `${gutter[0] / 2}px`,
            paddingRight: `${gutter[0] / 2}px`,
            paddingTop: `${gutter[1] / 2}px`,
            paddingBottom: `${gutter[1] / 2}px`,
          }}
          ref={spanRef}
        >
          {children}
        </div>
      )}
    </RowContext.Consumer>
  );
};

export default Col;
