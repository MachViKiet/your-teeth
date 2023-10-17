/* eslint-disable no-console */
import { Box } from '@mui/material'
import { Cover } from './Cover'
import LogInForm from './LogIn/LogInForm'
export default function LogIn() {

  return (
    <Box sx = {{ width: '100vw', height: '100vh' }}>
      <Box sx = {{
        ...Cover.Cover_Style,
        ...{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center' }
      }} >
        <LogInForm />
      </Box>
    </Box>
  )
}