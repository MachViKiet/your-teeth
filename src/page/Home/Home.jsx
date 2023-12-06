import { Box } from '@mui/material'

import Header from '~/components/Home/Header/Header'
import Slider from './Slider/Slider'
// import Dentists from './Dentists/Dentists'

function Home() {
  return (
    <Box sx = {{ bgcolor: '#fff', minHeight: '100vh' }}>
      <Header/>
      <Slider/>
    </Box>
  )
}

export default Home