import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Layout } from '/src/components';

export default {
  title: 'Layout/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div style={{ border: '1px solid rgb(222, 222, 222)' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Layout>;

//const Template: ComponentStory<typeof Layout> = args => <Layout {...args} />;

export const Basic = () => <Layout />;
