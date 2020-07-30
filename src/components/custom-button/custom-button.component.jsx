import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogle, inverted, ...rest }) => {
  return (
    <button
      className={`${isGoogle ? "google-sign-in" : ""}  ${
        inverted ? "interted" : ""
      } custom-button`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomButton;
