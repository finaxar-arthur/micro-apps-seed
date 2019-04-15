import { configure, addParameters } from '@storybook/react';
import '../src/App.css';

addParameters({
  options: {
    brandTitle: 'Micro Apps Seed'
  },
});

function loadStories() {
  require('../stories/index.js');

  // automatically import all story js files that end with *.stories.tsx
  // const req = require.context('../stories', true, /\.stories\.tsx$/);
  // req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);