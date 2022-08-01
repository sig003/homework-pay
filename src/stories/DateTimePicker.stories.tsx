import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DateTimePicker } from 'components';

export default {
  title: 'Components/DateTimePicker',
  component: DateTimePicker,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof DateTimePicker>;

const Template: ComponentStory<typeof DateTimePicker> = args => (
  <DateTimePicker {...args} />
);

export const Basic = Template.bind({});
Basic.args = { label: 'Start' };
//export const Basic = () => <DateTimePicker />;
