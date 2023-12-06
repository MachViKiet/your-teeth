/* eslint-disable no-console */

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'
import { userControl as UserAPI } from '~/apis/User/User'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const maleAvatar = 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'
const femaleAvatar = 'https://img.freepik.com/premium-vector/avatar-female-doctor-with-black-hair-doctor-with-stethoscope-vector-illustrationxa_276184-33.jpg?w=2000'


function Home(progs) {

  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [birth, setBirth] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [banking, setBanking] = useState('')
  const [sex, setSex] = useState('')

  const [desc, setDesc] = useState('')

  const [role, setRole] = useState('')
  const [avatar, setAvatar] = useState('')


  const user = progs?.control.user ? progs.control.user : ''


  useEffect(() => {
    const res = UserAPI.getUser(user?.id)

    if (res.status == 'OK') {
      setFirstname(res.data.firstname)
      setLastname(res.data.lastname)
      setEmail(res.data.email)
      setBirth(res.data.birthday)
      setPhone(res.data.phone)
      setAddress(res.data.address)
      setBanking(res.data.IDbanking)
      setDesc(res.data.desc)
      setAvatar(res.data.avatar)
      setSex(res.data.sex)
      setRole(res.data.role == 'staff'? 'Nhân viên' :
        (res.data.role == 'dentist'? 'Nha sĩ' :
          (res.data.role == 'admin'? 'Quản trị viên' : '')
        )
      )
    }


  }, [user?.id, user?.role])

  const handleSubmit = (event) => {
    event.preventDefault()

  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <Card sx={{ maxWidth: '100%' }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='100%'
                image= {avatar == '' ? (
                  sex == 'male' ? maleAvatar : femaleAvatar
                ) : avatar}
                alt= {sex}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {firstName} {lastName}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {desc}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
              Chức vụ: {role}
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} md={8}>
          <Item>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '100%',
                pt: 6,
                pb: 6,
                pl: 4,
                pr: 4,
                borderRadius: '10px',
                bgcolor: 'rgba(255,255,255,0.9)'
              }}
            >
              <Typography component="h1" variant="h5">
          Chỉnh sửa thông tin cá nhân
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="first Name"
                      fullWidth
                      id="firstName"
                      label="Họ"
                      value={firstName}
                      autoFocus
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Tên"
                      name="lastName"
                      autoComplete="family-name"
                      onChange={(e) => setLastname(e.target.value)}
                      value={lastName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email cá nhân"
                      name="email"
                      autoComplete="email"
                      value = {email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="date-input"
                      type= "date"
                      name="date"
                      sx = {{
                        width: '100%'
                      }}
                      label = 'Ngày Sinh'
                      onChange={(e) => {
                        setBirth(e.target.value)
                        console.log(e.target.value)
                      }}
                      value = {birth}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="Phone"
                      label="Số điện thoại"
                      name="Phone"
                      autoComplete="Phone"
                      value = {phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="Address"
                      label="Địa chỉ liên lạc"
                      name="Address"
                      autoComplete="Address"
                      onChange={(e) => setAddress(e.target.value)}
                      value = {address}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="Account"
                      label="Tài khoảng ngân hàng"
                      name="Account"
                      autoComplete="Account"
                      value = {banking}
                      onChange={(e) => setBanking(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                    Cập nhật
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Typography variant='body1'>
                        Update at 20:0 23/11/2023
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home