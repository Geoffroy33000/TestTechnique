import { ReactNode, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import usePortal from "../../Hooks/usePortal";

import { Button } from "..";

import { Cross } from "../../Assets/Icons";

import "./Modal.scss";

interface Props {
  isOpen?: boolean;
  blocked?: boolean;
  title?: string | ReactNode;
  position?: "top" | "center" | "bottom";
  children: ReactNode;
  onClose?: () => void;
}

function Modal(props: Props) {
  const target = usePortal("modal-root");

  const handleClose = useCallback(() => {
    if (props.onClose && props.isOpen && !props.blocked) {
      props.onClose();
    }
  }, [props.isOpen, props.blocked]);

  const handleKeydown = useCallback(
    (event: any) => {
      if (event.keyCode === 27) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown, false);

    return () => {
      document.removeEventListener("keydown", handleKeydown, false);
    };
  }, [handleKeydown]);

  const classes = classNames("Modal", [`Modal--${props.position}`], {
    "Modal--is-open": props.isOpen,
  });

  if (target !== undefined) {
    return ReactDOM.createPortal(
      <div className={classes}>
        <span className="Modal__mask" onClick={handleClose} />
        <div className="Modal__container">
          {(props.title || !props.blocked) && (
            <div className="Modal__header">
              {props.title && <div className="Modal__title">{props.title}</div>}
              {!props.blocked && (
                <div className="Modal__close">
                  <Button icon={<Cross color="blue" />} onClick={handleClose} />
                </div>
              )}
            </div>
          )}
          {props.children}
        </div>
      </div>,
      target
    );
  }

  return null;
}

Modal.defaultProps = {
  isOpen: false,
  blocked: false,
  position: "center",
};

export default Modal;
