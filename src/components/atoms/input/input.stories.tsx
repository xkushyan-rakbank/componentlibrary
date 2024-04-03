import { Meta, Story } from '@storybook/react';

import ThemeProvider from '@theme/theme';
import { Input } from './input';

export default {
    title: 'UI/Input',
    component: Input,
    argTypes: {
        inputSize: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        error: {
            control: {
                type: 'boolean',
            },
            defaultValue: false,
        },
        disabled: {
            control: {
                type: 'boolean',
            },
            defaultValue: false,
        },
    },
} as Meta;



const Template: Story = (args) =>  <ThemeProvider mode={'light'}>
<Input inputSize='medium' {...args}/>
</ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
    placeholder : 'Enter your text here',
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
    startAdornment : '🔍',
    placeholder : 'Enter your text here',
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
    endAdornment : '🦾',
    placeholder : 'Enter your text here',
};

export const WithIcons = Template.bind({});
WithIcons.args = {
    endAdornment : '🦾',
    startAdornment : '🔍',
    placeholder : 'Enter your text here',
};