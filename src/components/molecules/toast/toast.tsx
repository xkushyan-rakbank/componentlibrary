import React from 'react'
import { Snackbar, IconButton, SnackbarProps, Button, SnackbarOrigin } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Alert from '@mui/material/Alert'
import { styled } from '@mui/material/styles'
import { Typography } from '@atoms/typography/typography'

const DefaultAction = ({ onUndo, onClose }: { onUndo: () => void; onClose: () => void }) => (
  <>
    <Button size="small" onClick={onUndo}>
      <Typography
        variant="body1"
        sx={(theme) => ({
          fontSize: '16px',
          fontWeight: 700,
          color: theme.palette.grey[900],
        })}
      >
        {'Undo'}
      </Typography>
    </Button>
    <IconButton size="small" color="inherit" onClick={onClose}>
      <CloseIcon fontSize="small" />
    </IconButton>
  </>
)
interface ToastProps extends SnackbarProps {
  message: string
  severity: 'success' | 'info' | 'warning' | 'error'
  onClose: () => void
  icon?: React.ReactNode
  open: boolean
  anchorOrigin: SnackbarOrigin
  autoHideDuration: number
  onUndo?: () => void
  action?: React.ReactNode
}

const StyledAlert = styled(Alert)(({ theme, severity }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '400px',
  height: '64px',
  padding: '12px 24px 12px 24px',
  border:
    severity === 'info'
      ? '1px solid rgb(3, 169, 244)'
      : !severity && `2px solid ${theme.palette.grey[200]}`,

  borderRadius: '20px',
  boxShadow: '0px 18px 20px -8px #110C2214', // Add the box-shadow
  '& .MuiAlert-action': {
    display: 'flex',
    alignItems: 'center',
    height: '24px',
    borderLeft: `1px solid ${theme.palette.grey[200]}`,
    marginLeft: '16px',
  },
  '& .MuiAlert-icon': {
    color: !severity && theme.palette.grey[500],
  },
}))

const Toast: React.FC<ToastProps> = ({
  message,
  severity,
  onClose,
  icon,
  onUndo,
  open,
  anchorOrigin,
  autoHideDuration,
  action = <DefaultAction onUndo={onUndo} onClose={onClose} />,
  ...props
}) => {
  return (
    <Snackbar
      {...props}
      open={open}
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <StyledAlert
        onClose={onClose}
        variant="outlined"
        severity={severity}
        icon={icon}
        action={action}
      >
        <Typography
          variant="body1"
          sx={(theme) => ({
            width: '174px',
            marginRight: '16px',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '24px',
            color: theme.palette.grey[900],
          })}
        >
          {message}
        </Typography>
      </StyledAlert>
    </Snackbar>
  )
}

export default Toast
