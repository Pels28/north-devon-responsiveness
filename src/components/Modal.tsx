import { ReactElement, ReactNode } from "react";
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Modal as NextModal
} from "@nextui-org/react";
import clsx from "clsx";
import { Poppins } from "@/resources/fonts";



export interface IModalProps {
  sticky?: boolean;
  show: boolean;
  showCloseButton?: boolean;
  onShow?: (isShown: boolean) => void;
  title?: string | ReactNode;
  titleClassName?: string;
  bodyContent?: string | ReactNode | ReactElement | JSX.Element | null;
  bodyClassName?: string;
  footerContent?: string | ReactNode | ReactElement | JSX.Element | null;
  footerClassName?: string;
  children?: ReactNode | ReactElement | JSX.Element;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
  position?: "center" | "auto" | "top" | "top-center" | "bottom" | "bottom-center";
  scrollable?: boolean;
  backdrop?: boolean;
  backdropStyle?: "opaque" | "blur";
  backdropClassName?: string;
  baseClassName?: string;
  onClose?: () => void;
}

function Modal({
  sticky,
  show,
  onShow,
  title,
  titleClassName,
  bodyContent,
  bodyClassName,
  footerContent,
  footerClassName,
  size = "md",
  children,
  position,
  scrollable,
  backdrop,
  backdropStyle = "blur",
  backdropClassName,
  showCloseButton = true,
  baseClassName,
  onClose
}: IModalProps) {


  return (
    <NextModal
      isOpen={show}
      size={size}
      isDismissable={!sticky}
      onOpenChange={onShow}
      placement={position}
      scrollBehavior={scrollable? "outside" : "normal"}
      backdrop={backdrop? backdropStyle : "transparent"}
      classNames={{
        backdrop: clsx("bg-primary-blur blur-[10px]", backdropClassName),
        footer: footerClassName,
        header: clsx("text-2xl", Poppins.className, titleClassName),
        body: bodyClassName,
        base: clsx("py-2", baseClassName),
      }}
      hideCloseButton={!showCloseButton}
      onClose={onClose}
    >
      <ModalContent>
        {() =>(
          <>
            {title && (
              <ModalHeader>{title}</ModalHeader>
            )}

            {bodyContent && (
              <ModalBody>{bodyContent}</ModalBody>
            )}

            {children}

            {footerContent && (
              <ModalFooter>{footerContent}</ModalFooter>
            )}
          </>
        )}
      </ModalContent>
    </NextModal>
  )
}

export default Modal;