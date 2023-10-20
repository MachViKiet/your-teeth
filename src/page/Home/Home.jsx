import { Box } from '@mui/material'

import Header from './Header/Header'
import Slider from './Slider/Slider'
import Dentists from './Dentists/Dentists'

function Home() {
  return (

    // <>
    //   <h1>aaaa</h1>
    // </>
    <Box sx = {{ bgcolor: '#fff', minHeight: '100vh' }}>

      <Header/>

      <Slider/>

      <Dentists/>
    </Box>
  )
}

export default Home