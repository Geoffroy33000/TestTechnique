import React, { ReactNode } from "react";
import classNames from "classnames";

import "./Button.scss";

interface Props {
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
  children?: ReactNode;
}

const Button = React.forwardRef((props: Props) => {
  function handleClick() {
    if (props.onClick) {
      props.onClick();
    }
  }

  const classes = classNames("Button", [props.className], {
    "Button--icon-only": props.children === undefined,
    "Button--has-icon": props.icon !== undefined,
  });

  return (
    <button className={classes} onClick={handleClick}>
      <div className="Button__icon">{props.icon}</div>
      <span className="Button__label">{props.children}</span>
    </button>
  );
});

export default Button;
