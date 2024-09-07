import React from "react";
import { IconContext } from "react-icons";
import * as LuIcons from "react-icons/lu";
import * as Fa6Icons from "react-icons/fa6";

export type IconProps = {
  name: keyof typeof LuIcons | keyof typeof Fa6Icons;
  className?: string;
  iconSize?: string;
};

export const Icon = ({ name, className, iconSize }: IconProps) => {
  const icons = { ...LuIcons, ...Fa6Icons };
  const IconComponent = icons[name];
  return (
    <IconContext.Provider
      value={{
        className: className,
        size: iconSize,
      }}
    >
      <IconComponent />
    </IconContext.Provider>
  );
};
