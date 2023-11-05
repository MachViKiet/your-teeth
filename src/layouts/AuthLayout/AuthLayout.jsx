import { Box } from '@mui/material'
import { Cover } from '~/page/Auth/Cover'

function AuthLayout(progs) {
  return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <Box
        sx={{
          ...Cover.Cover_Style,
          ...{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }}
      >
        {progs.children}
      </Box>
    </Box>
  )
}

export default AuthLayout
