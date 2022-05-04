import React from "react";
export interface Props {
  title: number;
  color: string;
  size: string;
  margin: string;
}
const Header = ({ title, color, size, margin }: Props) => {
  const headerClass = `${color} ${size} ${margin}`;
  return (
    <div>
      <h1 className={headerClass}>{title}</h1>
    </div>
  );
};

export default Header;
