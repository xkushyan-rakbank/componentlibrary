import { Meta, Story } from '@storybook/react';

import ThemeProvider from '@theme/theme';
import { TextAreaField } from './textAreaField';

export default {
    title: 'Molecules/TextAreaFields',
    component: TextAreaField,
    argTypes: {
        size: {
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
<TextAreaField size='medium' {...args}/>
</ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
    placeholder : 'Enter your text here',
};
