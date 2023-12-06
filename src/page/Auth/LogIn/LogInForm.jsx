/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'

import { auth as api } from '~/apis/Auth/Auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LogInForm(progs) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    const res = api.login(username, password)

    console.log(res)

    if ( res.status == 'OK') {
      progs.control.login(res.data)
      navigate(`/your-teeth/${res.data.role}/${res.data.id}/dashboard`)
    }
    else {
      alert('Tên đăng nhập hoặc mật khẩu không đúng')
    }
  }

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '500px',
        bgcolor: 'rgba(255,255,255,0.9)',
        pt: 6,
        pb: 6,
        pl: 4,
        pr: 4,
        borderRadius: '10px'
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
              Sign in
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={username}
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          component={RouterLink}
          onClick={handleSubmit}
        >
                Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link component={RouterLink} to="/your-teeth/">
                    Back
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to="/your-teeth/register/">
            Don't have an account ?
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default LogInForm