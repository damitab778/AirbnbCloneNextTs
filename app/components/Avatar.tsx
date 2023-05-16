"use Client";

import { FC } from "react";
import Image from "next/image";
interface Props {}

const Avatar: FC<Props> = (props): JSX.Element => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="Avatar"
      src="/images/placeholder.jpg"
    />
  );
};

export default Avatar;
