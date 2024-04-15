import React from 'react'
import { Alert, AlertTitle, Button, Box, IconButton, AlertProps } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Typography } from '@atoms/typography/typography'

interface CustomAlertProps extends AlertProps {
  title: string
  message: string
  icon: React.ReactNode
  buttons: { id: string; label: string; onClick: () => void }[]
  onClose: () => void
  severity?: 'error' | 'warning' | 'success' | 'info'
}

const buttonStyles = (theme, index) => ({
  width: '104px',
  marginRight: index === 0 ? 3 : 0,
  itemSpacing: 'at_spacing_6',
  borderRadius: 'at_border_radius_8',
  fontSize: '14px',
  lineHeight: '24px',
  border: `1px solid ${theme.palette.grey[900]}`,
  fontWeight: 700,
})

const CustomAlert: React.FC<CustomAlertProps> = ({
  title,
  message,
  icon,
  buttons,
  onClose,
  severity,
  ...props
}) => {
  const renderButtons = () => {
    return buttons.map((button, index) => (
      <Button
        key={index}
        variant={index === 0 ? 'contained' : 'outlined'}
        color={index === 0 ? 'black' : 'secondary'}
        onClick={button.onClick}
        size="small"
        sx={(theme) => buttonStyles(theme, index)}
      >
        {button.label}
      </Button>
    ))
  }
  const CustomAction = () => (
    <IconButton aria-label="close" color="inherit" size="small" onClick={onClose}>
      <CloseIcon fontSize="inherit" />
    </IconButton>
  )

  return (
    <Alert
      variant="outlined"
      severity={severity}
      icon={icon}
      sx={(theme) => ({
        width: '360px',
        border:
          severity === 'info'
            ? '1px solid rgb(3, 169, 244)'
            : !severity && `2px solid ${theme.palette.grey[200]}`,
        padding: '24px 24px 28px 24px',
        '& .MuiAlert-icon': {
          color: !severity && theme.palette.grey[500],
        },
        borderRadius: '20px',
        boxShadow: '0px 18px 20px -8px #110C2214', // Add the box-shadow
      })}
      action={<CustomAction />}
      {...props}
    >
      <AlertTitle
        sx={(theme) => ({
          fontSize: '16px',
          fontWeight: 700,
          lineHeight: '24px',
          color: theme.palette.grey[900],
        })}
      >
        {title}
      </AlertTitle>
      <Typography
        variant="body1"
        sx={(theme) => ({
          color: theme.palette.grey[700],
        })}
      >
        {message}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 2 }}>{renderButtons()}</Box>
    </Alert>
  )
}

export default CustomAlert
