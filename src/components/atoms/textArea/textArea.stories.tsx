import { Meta, Story } from '@storybook/react';

import ThemeProvider from 'src/theme/theme';
import { TextArea } from './textArea';

export default {
    title: 'UI/TextArea',
    component: TextArea,
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
<TextArea size='medium' {...args}/>
</ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
    placeholder : 'Enter your text here',
};
