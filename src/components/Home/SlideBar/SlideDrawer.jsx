import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import DomainIcon from '@mui/icons-material/Domain'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import { Link as RouterLink } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip'

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

export default function SlideDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx= {{ width: '250px' }}
      role = "presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { key: 'Home', icon: <HomeIcon/> },
          { key: 'About', icon: <InfoIcon/> },
          { key: 'Departments', icon: <DomainIcon/> },
          { key: 'FAQ', icon: <ManageSearchIcon/> },
          { key: 'Contacts', icon: <ContactPhoneIcon/> }].map((text) => (
          <ListItem key={text.key} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                { text.icon }
              </ListItemIcon>
              <ListItemText primary={text.key} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx = {{ display: {
      xs: 'flex',
      md: 'none'
    } }}>
      {
        <Box key={'right'}>
          <Button onClick={toggleDrawer('right', true)}>
            <MenuIcon sx = {{
              fontSize: '2.5rem',
              color:'#718b83'
            }}/></Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            <Box sx = {{
              padding: '30px 15px',
              width: '100%',
              display: 'flex',
              flexDirection:'column',
              alignItems:'center',
              gap: 1
            }}>
              {list('right')}

              <Button
                component={RouterLink}
                to="/LogIn"
                sx = {{
                  textTransform: 'capitalize',
                  minWidth: '90px',
                  '&.MuiButtonBase-root':{
                    color: '#000',
                    border: '1px solid #000'
                  },
                  width: '100%'
                }} variant="outlined"
              >
Sign In
              </Button>


              <Tooltip title = "Facebook">
                <FacebookOutlinedIcon fontSize="medium" sx = {STYLE_ICON}></FacebookOutlinedIcon>
              </Tooltip>
            </Box>
          </Drawer>
        </Box>
      }
    </Box>
  )
}