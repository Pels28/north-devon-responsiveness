import { CSSProperties, MouseEvent, ReactNode } from "react";
import clsx from "clsx";



interface ICardProps {
  className?: string;
  shadow?: boolean;
  bordered?: boolean;
  padded?: boolean;
  rounded?: boolean;
  style?: CSSProperties
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  children?: ReactNode
}

function Card({
  className,
  shadow,
  padded = true,
  rounded = true,
  bordered,
  style,
  onClick,
  children
}: ICardProps) {

  return (
    <div 
      className={clsx(
        {"pt-6 px-7 pb-2": padded},
        {"border border-solid border-gray": bordered},
        {"rounded-xl": rounded},
        className
      )}
      style={{
        boxShadow: shadow? "0px 4px 20px 0px #170C260D" : undefined,
        ...style
      }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card;


