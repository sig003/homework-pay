import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AddItemSpeedDial } from 'components';

interface ActionProps {
  name: string;
  icon: React.ReactNode; //React.ComponentType<SvgIconProps>;
}

interface ActionsProps {
  actions: ActionProps[];
}

export default {
  title: 'Components/AddItemSpeedDial',
  component: AddItemSpeedDial,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof AddItemSpeedDial>;

const Template: ComponentStory<typeof AddItemSpeedDial> = args => (
  <AddItemSpeedDial {...args} />
);

export const Basic = Template.bind({});
//Basic.args = { name: 'test' };
//export const Basic = () => <AddItemSpeedDial />;
