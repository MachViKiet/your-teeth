/* eslint-disable react/no-unescaped-entities */
import { Box, Tooltip, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import { Link as RouterLink } from 'react-router-dom'
import Logo from '~/components/Logo'
import SlideDrawer from '~/components/Home/SlideBar/SlideDrawer'

const STYLE_BUTTON = {
  color: '#000',
  textTransform: 'capitalize',
  '&.MuiButtonBase-root:hover':{
    color: '#1976d2'
  },
  width: '100%'
}

const STYLE_ICON = {
  color: '#1976d2',
  '&.MuiSvgIcon-root:hover':{
    cursor: 'pointer',
    color: '#1976f0'
  },
  '&.MuiSvgIcon-root:active':{
    transform: 'scale(0.9)'
  }
}

function Header() {

  return (
    <Box sx = {{
      height: '100px',
      position: 'fixed',
      width: '100%',
      maxWidth: '100vw',
      overflow:'auto',
      display:'flex',
      alignItems:'center',
      justifyContent: 'space-between',
      zIndex: '10'
    }}>
      <Container fixed
        sx = {{
          display:'flex',
          alignItems:'center',
          justifyContent: 'space-between'
        }}>

        {/* Logo */}
        <Box sx = {{
          display:'flex',
          alignItems:'center',
          justifyContent: 'space-between'
        }}>
          <Logo/>
          <Typography variant="h5" component="h3"
            sx = {{
              pl: '10px',
              fontWeight: '800',
              color: '#718b83',
              minWidth: '160px'
            }}>Your Teeth</Typography>
        </Box>

        {/* NavBar */}
        <Box sx = {{
          display: {
            xs: 'none',
            md: 'flex'
          },
          alignItems:'center',
          justifyContent: 'space-between'
        }}
        gap= {2}>

          <Button sx = { STYLE_BUTTON }>Home</Button>
          <Button sx = { STYLE_BUTTON }>About</Button>
          <Button sx = { STYLE_BUTTON }>Departments</Button>
          <Button sx = { STYLE_BUTTON }>FAQ</Button>
          <Button sx = { STYLE_BUTTON }>Contacts</Button>

          <Button
            component={RouterLink}
            to="/LogIn"
            sx = {{
              textTransform: 'capitalize',
              minWidth: '90px',
              '&.MuiButtonBase-root':{
                color: '#000',
                border: '1px solid #000'
              }
            }} variant="outlined"
          >
            Sign In
          </Button>


          <Tooltip title = "Facebook">
            <FacebookOutlinedIcon fontSize="medium" sx = {STYLE_ICON}></FacebookOutlinedIcon>
          </Tooltip>

        </Box>

        <SlideDrawer />

      </Container>

    </Box>
  )
}

export default Header