import { createPortal } from "react-dom";
import { type ReactNode } from "react";
import classNames from "classnames";
import { ModalCloseButton } from "./ModalCloseButton";
import { ModalHeader } from "./ModalHeader";
import { ModalFooter } from "./ModalFooter";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

type Props = {
  isOpen: boolean;
  onClose?: () => void;
  headerComponent?: ReactNode;
  children?: ReactNode;
  footerComponent?: ReactNode;
  bodyClassName?: string;
  className?: string;
};

export const BaseModal = ({
  isOpen,
  onClose,
  headerComponent,
  children,
  footerComponent,
  bodyClassName,
  className = "max-w-lg",
}: Props) => {
  useLockBodyScroll(isOpen);

  return (
    <>
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/40 backdrop-blur-xs transition-opacity"
            onClick={(e) => e.target === e.currentTarget && onClose?.()}
          >
            <div
              className={classNames(
                "relative flex w-full max-h-[90vh] flex-col gap-6 rounded-lg border border-neutral-100 bg-white p-6 sm:p-8 shadow-xl",
                className,
              )}
            >
              <ModalCloseButton onClose={onClose} />
              {headerComponent && <ModalHeader>{headerComponent}</ModalHeader>}
              <div
                className={classNames(
                  "min-h-0 flex-1 overflow-y-auto",
                  bodyClassName,
                )}
              >
                {children}
              </div>
              {footerComponent && <ModalFooter>{footerComponent}</ModalFooter>}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default BaseModal;
