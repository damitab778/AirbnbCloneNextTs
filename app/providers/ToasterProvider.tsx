"use client";

import { FC } from "react";
import { Toaster } from "react-hot-toast";

interface Props {}

const ToasterProvider: FC<Props> = (props): JSX.Element => {
  return <Toaster />;
};

export default ToasterProvider;
