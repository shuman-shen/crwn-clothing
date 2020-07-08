import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogle, ...rest }) => {
  return (
    <button
      className={`${isGoogle ? "google-sign-in" : ""} custom-button`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomButton;
