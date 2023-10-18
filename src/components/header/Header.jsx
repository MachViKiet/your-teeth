// Header for dashboard

import { Paper, Button, Box, Container, Typography, Chip } from '@mui/material'
import { styled } from '@mui/material/styles'
import Logo from '~/components/Logo'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import SchoolIcon from '@mui/icons-material/School'
import BusinessIcon from '@mui/icons-material/Business'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}))

function Header() {
  return (
    <>
      <Paper sx = {{
        height: '80px',
        width: '100%',
        maxWidth: '100vw',
        overflow:'auto',
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-between',
        zIndex: '10',
        borderBottom: '1px solid #333'
        // background: '#d7eef1'
      }}>
        <Container fixed
          sx = {{
            display:'flex',
            alignItems:'center',
            justifyContent: 'space-between'
          }}>
          <Box sx = {{
            display:'flex',
            alignItems:'center',
            justifyContent: 'space-between'
          }}>
            <Logo></Logo>
            <Typography variant="h5" component="h3"
              sx = {{
                pl: '10px',
                fontWeight: '800',
                color: '#718b83',
                minWidth: '160px'
              }}>Your Teeth</Typography>
          </Box>

          <Box sx = {{
            display:'flex',
            alignItems:'center',
            justifyContent: 'space-between',
            gap: 1
          }}>

            <Typography variant="body1" component="h5"
              sx = {{
                minWidth: 'fit-content',
                textAlign:'right'
              }}>Dr. Remy Sharp
              <Chip
                label="Dentist" variant="outlined"
                sx = {{
                  display: 'block',
                  width: 'fit-content',
                  color:'#fff',
                  height:'fit-content',
                  backgroundColor: '#225f12',
                  fontSize: '0.6125rem',
                  mr: '100%',
                  transform: 'translateX(100%)'

                }}></Chip>
            </Typography>

            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYN0EZQKMCQZhcR95Wneiboh9Mn6IX1PFOAQ&usqp=CAU" />
            </StyledBadge>

            <Button sx = {{
              ml: 1
            }} variant="outline">Sign out</Button>
          </Box>

        </Container>
      </Paper>

      <Paper sx = {{
        width: '100%',
        maxWidth: '100vw',
        height: '50px',
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-between'
      }}>
        <Container fixed
          sx = {{
            display:'flex',
            alignItems:'center',
            justifyContent: 'space-between'
          }}>
          {/* Your birth */}
          <Box sx ={{
            display:'flex',
            alignItems:'center',
            gap: 1
          }}>
            <CalendarMonthIcon />
            <Typography>  01/May/1960</Typography>
          </Box>
          {/* Mobile phone */}
          <Box sx ={{
            display:'flex',
            alignItems:'center',
            gap: 1
          }}>
            <PhoneAndroidIcon />
            <Typography>041-123-123</Typography>
          </Box>
          {/* Home phone */}
          <Box sx ={{
            display:'flex',
            alignItems:'center',
            gap: 1
          }}>
            <LocalPhoneIcon />
            <Typography> Home phone</Typography>
          </Box>
          {/* University */}
          <Box sx ={{
            display:'flex',
            alignItems:'center',
            gap: 1
          }}>
            <SchoolIcon />
            <Typography> University of Science</Typography>
          </Box>
          {/* Level */}
          <Box sx ={{
            display:'flex',
            alignItems:'center',
            gap: 1
          }}>
            <AttachMoneyIcon />
            <Typography>CP Alliance Health fee level</Typography>
          </Box>
          {/* Address */}
          <Box sx ={{
            display:'flex',
            alignItems:'center',
            gap: 1
          }}>
            <BusinessIcon />
            <Typography>35, Nguyen Van Cu</Typography>
          </Box>

        </Container>
      </Paper>
    </>
  )
}

export default Header