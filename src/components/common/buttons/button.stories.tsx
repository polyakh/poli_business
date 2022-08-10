import { ComponentMeta, ComponentStory } from '@storybook/react';

import { componentsName } from "~config"

import { Button, COMPONENT_KEY_BUTTON, ButtonOwnProps, mockButtonProps } from '~components/common/buttons'

export default {
    title: `${COMPONENT_KEY_BUTTON}s`,
    component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonOwnProps) => (
    <Button {...args} />
);
export const Base = Template.bind({});

Base.args = {
    ...mockButtonProps,
    ...componentsName
} as ButtonOwnProps;

