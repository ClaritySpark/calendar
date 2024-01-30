import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function Button({ children, ...rest }: Props) {
  return <button {...rest}>{children}</button>;
}
