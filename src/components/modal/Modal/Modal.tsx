import cn from "classnames";
import {forwardRef, MouseEvent, ReactNode, Ref, useCallback, useEffect, useRef, useState} from "react";
import { createPortal } from "react-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import styles from "./Modal.module.css";

export interface ModalProps {
  isOpen: boolean;
  children?: ReactNode;
  className?: string;
  title?: string
  overlayClassName?: string;
  onRequestClose?: () => any;
  ref?: Ref<any>;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onRequestClose, children, className, overlayClassName }, ref) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    const onOverlayClick = useCallback(
      (event: MouseEvent<HTMLDivElement>) => {
        if (!(event.target as HTMLElement).closest(`.${styles.root}`)) {
          onRequestClose?.();
        }
      },
      [onRequestClose]
    );

    useEffect(() => {
      setMounted(true);
    }, []);

    useEffect(() => {
      if (isOpen) {
        disableBodyScroll(document.body, {reserveScrollBarGap: true});
      } else {
        enableBodyScroll(document.body);
      }
    }, [isOpen]);

    return isOpen && mounted
      ? createPortal(
        <div
          className={cn(styles.overlay, overlayClassName)}
          onClick={onOverlayClick}
          ref={overlayRef}
        >
          <div ref={ref} className={cn(styles.root, className)}>
            {children}
          </div>
        </div>,
        document.body
      )
      : null;
  }
);

export default Modal;
