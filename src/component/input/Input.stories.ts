import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: 'test-input',
    placeholder: 'Test placeholder',
    label: 'Test label',
    isDisabled: false,
    onChange: () => { }
  },
};
