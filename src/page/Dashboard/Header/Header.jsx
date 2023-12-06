import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import HelpIcon from '@mui/icons-material/Help'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

import { accountControl } from '~/apis/User/Account'

const lightColor = 'rgba(255, 255, 255, 0.7)'

function Header(props) {
  const { onDrawerToggle } = props

  const navigate = useNavigate()
  const handleSingOutButton = () => {
    props.control.logout()
    navigate('/your-teeth/')
  }

  const [nameAccount, setNameAccount] = React.useState('')
  const [role, setRole] = React.useState('')


  React.useEffect(() => {
    const userInf = localStorage.getItem('accessToken') ? accountControl.getAccount(localStorage.getItem('accessToken')).data : undefined

    userInf && userInf.nameAccount && setNameAccount(userInf.nameAccount)
    userInf && userInf.role && setRole(userInf.role)
  }, [])


  return (
    <React.Fragment>
      <AppBar color='primary' position='sticky' elevation={0} sx={{ p: 1.5 }}>
        <Toolbar>
          <Grid container spacing={1} alignItems='center'>
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={onDrawerToggle}
                edge='start'
              >
                <MenuIcon />
              </IconButton>
            </Grid>

            {/* Sign out button */}
            <Grid item xs>
              <Button
                sx={{ borderColor: lightColor }}
                variant='outlined'
                color='inherit'
                size='medium'
                onClick={handleSingOutButton}
              >
                Sign out
              </Button>
            </Grid>

            <Grid item>
              <IconButton color='inherit' sx={{ p: 0.5, gap: 1.5 }}>
                <Box sx = {{ textAlign: 'right' }}>
                  <Typography sx = {{ display: {
                    xs: 'none',
                    sm: 'block'
                  },
                  textTransform: 'uppercase',
                  fontWeight: '500'
                  }} variant='body2'>
                    { nameAccount }
                  </Typography>
                  <Typography sx = {{ display: {
                    xs: 'none',
                    sm: 'block'
                  },
                  color: '#57ff43',
                  textTransform: 'capitalize',
                  fontWeight: '600'
                  }} variant='body2'>
                    { role == 'staff'? 'Nhân viên' :
                      ( role == 'dentist'? 'Nha sĩ' : (
                        role == 'admin'? 'Quản trị viên' : ''
                      ))}
                  </Typography>
                </Box>
                <Avatar
                  src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
                  alt= { nameAccount }
                  sx = {{
                    width: '40px',
                    height: '40px'
                  }}
                />
              </IconButton>
            </Grid>

            <Grid item>
              <Tooltip title='Alerts • No alerts'>
                <IconButton color='inherit'>
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>

            <Grid item>
              <Tooltip title='Help'>
                <IconButton color='inherit'>
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <AppBar
        component='div'
        color='primary'
        position='static'
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        {/* <Toolbar>
          <Grid container alignItems='center' spacing={1}>

            <Grid item xs>
              <Typography color='inherit' variant='h5' component='h1'>
                Authentication
              </Typography>
            </Grid>

            <Grid item>
              <Button
                sx={{ borderColor: lightColor }}
                variant='outlined'
                color='inherit'
                size='medium'
                onClick={handleSingOutButton}
              >
                Sign out
              </Button>
            </Grid>

          </Grid>
        </Toolbar> */}
      </AppBar>

    </React.Fragment>
  )
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired
}

export default Header
