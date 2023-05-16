import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }): JSX.Element => {
  return <div className="">{children}</div>;
};

export default Container;
