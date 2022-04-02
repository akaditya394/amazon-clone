import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className={props.className}
        type={props.type}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
