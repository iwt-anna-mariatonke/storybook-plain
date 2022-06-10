import { createButton } from './Button';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
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

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
  mode: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  mode: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Button',
  mode: 'tertiary',
};

export const Large = Template.bind({});
Large.args = {
  size: '200',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: '50',
  label: 'Button',
};

export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Danger.args = {
  danger: true,
  label: 'Button',
};