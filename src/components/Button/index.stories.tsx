import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";
import { options } from "./buttonStoryOptions";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered"
	},
	argTypes: {
		size: {
			options: options.size,
			control: { type: "radio" }
		}
	},
	tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
	args: {
		children: "Click me",
		variant: "solid"
	}
};

export const Outline: Story = {
	args: {
		children: "Click me",
		variant: "outline"
	}
};

export const Ghost: Story = {
	args: {
		children: "Click me",
		variant: "ghost"
	}
};
