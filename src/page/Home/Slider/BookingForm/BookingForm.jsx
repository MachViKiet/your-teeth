import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Logo from '~/components/Logo'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

function BookingForm(progs) {
  return (
    <Box sx = {{ minWidth: '600px', maxWidth: '600px', overflow: 'auto' }}>
      <DialogTitle sx={{ m: 0, p: 2, width: '100%' }} id="customized-dialog-title">
        <Box sx = {{ display: 'flex', alignItems: 'center' }} gap = {2}>
          <Logo/>
          <Box sx = {{ width: '100%' }}>
            <Typography align = 'center' variant="h6" component="h2">
          Dentist Appointment Form
            </Typography>
            <Typography align = 'center' variant="body2" component="h2">
          Please fill out this form to make an appointment
            </Typography>
          </Box>
        </Box>
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={progs.func.handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
          display: { xs: 'none' }
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent dividers sx = {{ width: '100%' }}>

        <Box sx = {{ mb: 2, width: '100%', gap : 2, display: 'flex', justifyContent: 'space-evenly' }}>
          <TextField
            id="FirstName-input"
            label="FirstName"
            type="text"
            sx = {{
              width: '50%'
            }}
          />
          <TextField
            id="LastName-input"
            label="LastName"
            type="LastName"
            sx = {{
              width: '50%'
            }}
          />
        </Box>

        <Box sx = {{ mb: 2, width: '100%', gap : 2 }}>
          <TextField
            id="Phone-input"
            label="Phone"
            type="Phone"
            sx = {{
              width: '100%'
            }}
          />
        </Box>

        <Box sx = {{ mb: 2, width: '100%', gap : 2 }}>
          <TextField
            id="Email-input"
            label="Email"
            type="email"
            sx = {{
              width: '100%'
            }}
          />
        </Box>

        <Box sx = {{ mb: 2, width: '100%', gap : 2 }}>
          Date of Birth
          <TextField
            id="date-input"
            type="date"
            sx = {{
              width: '100%'
            }}
          />
        </Box>

        <Box sx = {{ mb: 2, width: '100%', gap : 2 }}>
          Date of Appointment
          <TextField
            id="date-input"
            type="date"
            sx = {{
              width: '100%'
            }}
          />
        </Box>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Have You Visited Our Dental Clinic Before ?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>

      </DialogContent>

      <DialogActions>
        <Button autoFocus onClick={progs.func.handleClose}>
            Booking
        </Button>
      </DialogActions>
    </Box>
  )
}

export default BookingForm