/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */

import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material'
import { Cover } from './Cover'
import RegisterForm from './RegisterForm/RegisterForm'

export default function Register() {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>

      <Grid item xs={false} sm={4} md={7} >
        <Box sx = {Cover.Cover_Style}/>
      </Grid>

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <RegisterForm />
      </Grid>

    </Grid>
  )
}