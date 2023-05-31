import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { action } from '@storybook/addon-actions';

import { Input } from './Input';

const MOCK_ID = 'test-input';
const MOCK_DATA = "Calico Jack";
const MOCK_ACTION = "onChange";

const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: MOCK_ID,
    placeholder: 'Test placeholder',
    label: 'Test label',
    isDisabled: false,
    onChange: () => { }
  },
};

export const DefaultWithFill: Story = {
  args: {
    id: MOCK_ID,
    placeholder: 'Test placeholder',
    label: 'Test label',
    isDisabled: false,
    onChange: action(MOCK_ACTION)
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByTestId(`${MOCK_ID}-label`);
    const input = canvas.getByTestId(`${MOCK_ID}-input`);
    expect(label).toBeTruthy();
    expect(input).toBeTruthy();

    userEvent.click(label);
    expect(document.activeElement).toEqual(input);

    userEvent.type(input, MOCK_DATA);
    expect(args.onChange).toHaveBeenCalledTimes(MOCK_DATA.length);
  }
}