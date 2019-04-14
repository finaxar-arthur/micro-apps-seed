import { configure, addParameters } from '@storybook/react';

addParameters({
  options: {
    brandTitle: 'Micro Apps Seed'
  },
});

function loadStories() {
  // automatically import all story js files that end with *.stories.tsx
  const req = require.context('../src', true, /\.stories\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);