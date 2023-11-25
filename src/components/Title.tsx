import { ReactNode } from 'react';

type TitleProps = {
  children: ReactNode;
};

export default function Title({ children }: Readonly<TitleProps>) {
  return <h1>{children}</h1>;
}
