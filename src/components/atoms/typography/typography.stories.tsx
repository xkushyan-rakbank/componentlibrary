import { Meta, StoryFn } from '@storybook/react';
import { ITypography, Typography } from './typography';

import ThemeProvider from '@theme/theme';

export default {
    title: 'UI/Typography',
    component: Typography,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline'],
        },
        gutterBottom: {
            control: {
                type: 'boolean',
            },
            defaultValue: false,
        }
    },
} as Meta;

const Template: StoryFn<ITypography> = (args) => (
  <ThemeProvider mode={'light'}>
    <Typography {...args}>Hello World</Typography>
  </ThemeProvider>);

export const Default = Template.bind({});
Default.args = {
  variant: 'body1',
};