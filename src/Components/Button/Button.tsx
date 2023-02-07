import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import "./Button.scss";

interface Props {
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick?: () => void;
  children?: ReactNode;
  isLink?: boolean;
  location?: string;
  icon?: ReactNode;
}

function Button(props: Props) {
  const classes = classNames("Button", [props.className], {
    "Button--has-icon": props.icon !== undefined,
  });

  if (props.iconLeft && props.children) {
    return (
      <button className={classes}>
        <div className="Button__icon">{props.iconLeft}</div>
        <span className="Button__label">{props.children}</span>
      </button>
    );
  }

  if (props.icon && props.onClick) {
    return (
      <button className={classes} onClick={props.onClick}>
        <div className="Button__icon">{props.icon}</div>
      </button>
    );
  }

  if (props.children && props.onClick) {
    return (
      <button className={classes} onClick={props.onClick}>
        <span className="Button__label">{props.children}</span>
      </button>
    );
  }

  if (props.isLink && props.location && props.iconLeft) {
    return (
      <Link to={props.location}>
        <button className={classes}>
          <div className="Button__icon">{props.iconLeft}</div>
        </button>
      </Link>
    );
  }

  if (props.isLink && props.location && props.children) {
    return (
      <Link to={props.location}>
        <button className={classes}>
          <span className="Button__label">{props.children}</span>
        </button>
      </Link>
    );
  }

  if (props.iconLeft) {
    return (
      <button className={classes}>
        <div className="Button__icon">{props.iconLeft}</div>
      </button>
    );
  }

  return (
    <button className={classes}>
      <span className="Button__label">{props.children}</span>
    </button>
  );
}

export default Button;
