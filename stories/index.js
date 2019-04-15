import React from "react";
import { storiesOf } from "@storybook/react";

import Loading from "../src/components/Loading";
import Button from "../src/components/Button";

storiesOf("Loading", module).add("default", () => <Loading />);
storiesOf("Button", module)
  .add("default", () => <Button>Default</Button>)
  .add("primary", () => <Button type="primary">Primary</Button>);
