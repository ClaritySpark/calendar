import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function Button({ children, ...rest }: Props) {
  const b: any = 10;
  return <button {...rest}>{children}</button>;
}
