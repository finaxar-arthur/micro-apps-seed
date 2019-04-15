import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button", module)
  .add("default", () => <Button>Default</Button>)
  .add("primary", () => <Button type="primary">Primary</Button>);
