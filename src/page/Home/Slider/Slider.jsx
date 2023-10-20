import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SpaIcon from '@mui/icons-material/Spa'
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import { Box } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import React from 'react'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import BookingForm from './BookingForm/BookingForm'

const STYLE_TITLE = {
  color: '#000',
  fontWeight: '700',
  fontSize: { xs: '2rem', sm : '3rem', xl: '3.5rem' }
}

const STYLE_ICON = {
  fontSize: { xs: '3rem', md : '3rem', xl: '4rem' },
  color: '#3ce2ad'
}

const STYLE_BUTTON = {
  '&.MuiButtonBase-root':{
    color: '#4e8876',
    border: '1px solid #4e8876',
    fontWeight: '550',
    padding: '10px 20px'
  }
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))

function Slider() {

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box sx = {{
      paddingTop: '50%',
      minHeight:'80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'url(https://jevelin.shufflehound.com/medical/wp-content/uploads/sites/23/2018/09/lady.jpg?id=17)',
      backgroundSize:'cover',
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
      width: '100%'
    }}>

      <Box sx = {{
        position: 'absolute',
        top: '0', width: '100%',
        height: 'calc(100%)',
        display:'flex',
        alignItems:'center'
      }}>
        <Container fixed
          sx = {{

          }}>

          <Box>

            {/* TITLE */}
            <Typography sx = {STYLE_TITLE} variant="h3" component="h2">
                  Professional <br/> Family Health Care
            </Typography>
            {/* ICON */}
            <Box sx = {{
              width: '100%',
              display:'flex',
              pt: '20px',
              pb: '20px'
            }} gap={4}>
              <Tooltip title="Care your Health">
                <HealthAndSafetyIcon sx = {STYLE_ICON} fontSize="large"/>
              </Tooltip>

              <Tooltip title="Improve your teeth">
                <SpaIcon sx = {STYLE_ICON} fontSize="large"/>
              </Tooltip>

              <Tooltip title="Beutiful">
                <MedicalInformationIcon sx = {STYLE_ICON} fontSize="large"/>
              </Tooltip>
            </Box>

            <Button onClick={handleClickOpen} sx = {STYLE_BUTTON} variant="outlined">
              Book Now
            </Button>

            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >

              <BookingForm func = { { handleClose : handleClose } } />

            </BootstrapDialog>

          </Box>

        </Container>
      </Box>

    </Box>
  )
}

export default Slider