import React from "react";

type Props = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export const Button = ({ children, ...rest }: Props): JSX.Element => {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
};
