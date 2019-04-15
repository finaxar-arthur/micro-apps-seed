import { configure, addParameters } from "@storybook/react";
import "../src/App.css";

addParameters({
  options: {
    brandTitle: "Micro Apps Seed"
  }
});

function loadStories() {
  // automatically import all story js files that end with *.stories.tsx
  // const req = require.context('../stories', true, /\.stories\.tsx$/);
  const req = require.context("../src", true, /\.story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
