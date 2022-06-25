import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AddItemSpeedDial } from '/src/components';

export default {
  title: 'Components/AddItemSpeedDial',
  component: AddItemSpeedDial,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AddItemSpeedDial>;

const Template: ComponentStory<typeof AddItemSpeedDial> = args => (
  <AddItemSpeedDial {...args} />
);

//export const Basic = Template.bind({});
//Basic.args = { label: 'Start' };
export const Basic = () => <AddItemSpeedDial />;
