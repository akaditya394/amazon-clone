import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className={props.className} type="button">
        {props.children}
      </button>
    </div>
  );
};

export default Button;
