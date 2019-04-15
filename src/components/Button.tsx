import React from "react";
import { Button } from "antd";

const OurButton: React.FC<{ props?: object }> = props => {
  return <Button {...props} />;
};

export default OurButton;
