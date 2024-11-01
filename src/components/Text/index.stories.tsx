import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";
import { options } from "./textStoryOptions";

const meta: Meta<typeof Text> = {
	title: "Components/Text",
	component: Text,
	parameters: {
		layout: "centered"
	},
	argTypes: {
		size: {
			options: options.size,
			control: { type: "radio" }
		},
		weight: {
			options: options.weight,
			control: { type: "radio" }
		},
		align: {
			options: options.align,
			control: { type: "radio" }
		},
		italic: {
			options: [false, true],
			control: { type: "boolean" }
		},
		underline: {
			options: [false, true],
			control: { type: "boolean" }
		}
	},
	tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		as: "span",
		children:
			"be parts correct potatoes sides donkey extra climate happily freedom relationship tape unit tall hung call cat window steady world front graph particular pick"
	}
};
