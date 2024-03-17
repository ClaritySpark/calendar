import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export const Button = ({ children, ...rest }: Props): JSX.Element => {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
};
