import React from "react";
import { Button } from "antd";

const ButtonComponent: React.FC<{ props?: object }> = props => {
  return <Button {...props} />;
};

export default ButtonComponent;
