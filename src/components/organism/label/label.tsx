import styled from 'styled-components'

import Icon from '@assets/inputLabelIcon.svg'
import { Typography } from '@atoms/typography/typography'
import { pixleToEm } from '@theme/utils/utils'
import { TypographyProps } from '@mui/material'

const ImgSizes = {
  small: {
    width: 14,
    height: 14,
  },
  medium: {
    width: 18,
    height: 18,
  },
  large: {
    width: 18,
    height: 18,
  },
}

const variants = {
  small: 'caption',
  medium: 'body2',
  large: 'body2',
}

const lineHeightClasses = {
  small: 16,
  medium: 24,
  large: 24,
}

interface StyledTypographyProps extends TypographyProps {
  size?: 'small' | 'medium' | 'large';
}

const StyledTypography = styled(Typography)<StyledTypographyProps>`
  line-height: ${(props) => lineHeightClasses[props?.size || 'medium']}px;
  font-weight : 500
`

const Label = ({ children, className = "", defaultIcon, size, reverse = false }) => {
  return (
    <div className={`flex items-center pb-[4px] ${className}`} style={{
        direction : reverse ? 'rtl' : 'ltr'
    }}>
      {defaultIcon ? (
        <img
          style={{
            width: pixleToEm(ImgSizes[size || 'medium'].width, true),
            height: pixleToEm(ImgSizes[size || 'medium'].height, true),
          }}
          src={Icon}
          alt="icon"
        />
      ) : (
        <></>
      )}
      <div className="w-[4px]" />
      <StyledTypography variant={variants[size]} size={size}>
        {children}
      </StyledTypography>
    </div>
  )
}

export { Label }
