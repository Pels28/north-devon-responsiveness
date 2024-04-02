import { ReactElement, ReactNode } from "react";
import clsx from "clsx";



interface IHeadingProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  className?: string;
  children?: ReactNode | ReactElement | JSX.Element;
  color?: "primary" | "secondary";
}

function Heading({
  variant = "h3",
  className,
  children,
  color
}: IHeadingProps) {

  switch (variant) {
    case "h2":
      return (
        <h2 
          className={clsx(
            "font-bold text-3xl",
            {"text-primary": color == "primary"},
            {"text-secondary": color == "secondary"},
            className
          )}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 
          className={clsx(
            "font-semibold text-2xl",
            {"text-primary": color == "primary"},
            {"text-secondary": color == "secondary"},
            className
          )}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 
          className={clsx(
            "font-semibold text-xl",
            {"text-primary": color == "primary"},
            {"text-secondary": color == "secondary"},
            className
          )}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 
          className={clsx(
            "font-semibold text-lg",
            {"text-primary": color == "primary"},
            {"text-secondary": color == "secondary"},
            className
          )}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 
          className={clsx(
            "font-semibold text-base",
            {"text-primary": color == "primary"},
            {"text-secondary": color == "secondary"},
            className
          )}
        >
          {children}
        </h6>
      );
    case "h1":
    default:
      return (
        <h1 
          className={clsx(
            "font-bold text-5xl",
            {"text-primary": color == "primary"},
            {"text-secondary": color == "secondary"},
            className
          )}
        >
          {children}
        </h1>
      );
  }

}

export default Heading;