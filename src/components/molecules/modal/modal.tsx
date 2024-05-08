import React from 'react'
import { Modal as MuiModal, Box, IconButton } from '@mui/material'
import { Close as CloseIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material'
import { Typography } from '@atoms/typography/typography'

interface IconProps {
  handleClose: () => void
  size: 'small' | 'medium'
  icon: typeof CloseIcon | typeof ArrowBackIcon
}

export interface ModalProps {
  open: boolean
  handleClose: () => void
  title: React.ReactNode
  children: React.ReactNode
  size: 'small' | 'medium'
}

const sizeMap = {
  small: {
    width: '464px',
    titleFontSize: '16px',
    childrenFontSize: '16px',
    icon: {
      width: '32px',
      height: '32px',
      padding: '8px 0px',
      gap: '6px',
    },
  },
  medium: {
    width: '464px',
    titleFontSize: '26px',
    childrenFontSize: '26px',
    icon: {
      width: '40px',
      height: '40px',
      padding: '8px 12px',
      gap: '8px',
    },
  },
}

const ModalIcon: React.FC<IconProps> = ({ handleClose, size, icon: IconComponent }) => {
  const iconSize = sizeMap[size].icon

  return (
    <IconButton
      sx={(theme) => ({
        color: theme.palette.grey[900],
        ...iconSize,
      })}
      onClick={handleClose}
    >
      <IconComponent />
    </IconButton>
  )
}

const Modal: React.FC<ModalProps> = ({ open, handleClose, title, children, size }) => {
  const modalSize = sizeMap[size]

  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={(theme) => ({
          ...modalSize,
          width: '400px',
          padding: '2px',
          bgcolor: theme.palette.common.white,
          margin: 'auto',
          marginTop: '10%',
        })}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <ModalIcon handleClose={handleClose} size={size} icon={ArrowBackIcon} />
          <Typography
            id="modal-title"
            sx={{
              fontSize: modalSize.titleFontSize,
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>
          <ModalIcon handleClose={handleClose} size={size} icon={CloseIcon} />
        </Box>
        <Box id="modal-content" sx={{ mt: 2 }}>
          <Typography
            sx={{
              fontSize: modalSize.childrenFontSize,
              fontWeight: 500,
            }}
          >
            {children}
          </Typography>
        </Box>
      </Box>
    </MuiModal>
  )
}

export default Modal
