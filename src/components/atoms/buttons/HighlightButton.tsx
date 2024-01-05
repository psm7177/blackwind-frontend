'use client';
import classNames from "classnames";
import { FC } from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const HighlightButton: FC<ButtonProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <button
      {...rest}
      className={classNames(
        "mt-4 transition ease-in-out delay-100 rounded-md hover:bg-rose-500 bg-rose-600 text-white text-center py-1 select-none font-semibold cursor-pointer", className
      )}
    >
      {children}
    </button>
  );
};

export default HighlightButton;
