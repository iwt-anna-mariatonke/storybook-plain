import { createButton } from './Button';
import primary from './examples/primary.html';
import secondary from './examples/secondary.html';
import tertiary from './examples/tertiary.html';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Action/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    mode: {       
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: { type: 'select' },
      options: ['50', '100', '200'],
    },
    danger: { control: 'boolean' },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

export const Overview = Template.bind({});
Overview.args = {
  label: 'Test Button',
  mode: 'primary',
};

export const Primary = () => primary;
Primary.parameters = {
  docs: {
    source: {
      code: primary,
    },
  },
  controls: { 
    disable: true 
  } 
};

export const Secondary = () => secondary;
Secondary.parameters = {
  docs: {
    source: {
      code: secondary,
    },
  },
  controls: { 
    disable: true 
  } 
};

export const Tertiary = () => tertiary;
Tertiary.parameters = {
  docs: {
    source: {
      code: tertiary,
    },
  },
  controls: { 
    disable: true 
  } 
};


