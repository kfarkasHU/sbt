import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { action } from '@storybook/addon-actions';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const MOCK_ID = "button";
const MOCK_CLICK = "onClick";

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    id: MOCK_ID,
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    id: MOCK_ID,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    id: MOCK_ID,
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    id: MOCK_ID,
    size: 'small',
    label: 'Button',
  },
};

export const PrimaryWithClick: Story = {
  args: {
    id: MOCK_ID,
    size: 'medium',
    primary: true,
    label: 'Primary Button',
    onClick: action(MOCK_CLICK)
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = (await canvas.findByTestId(MOCK_ID)) as HTMLButtonElement;
    await expect(button).toBeTruthy();

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}