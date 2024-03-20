import MUITypography, { TypographyProps as MUITypographyProps } from '@mui/material/Typography';

import { ReactNode } from 'react';

export interface ITypography extends Omit<MUITypographyProps, 'children'> {
  children: ReactNode;
}

export const Typography = ({ children, ...props }: ITypography) => {
  return <MUITypography {...props}>{children}</MUITypography>;
};