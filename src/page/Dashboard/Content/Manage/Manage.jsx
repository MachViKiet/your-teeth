import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import SearchField from '~/components/Dashboard/SearchField/SearchField'

import List from '@mui/material/List'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import { Divider } from '@mui/material'

import CreateIcon from '@mui/icons-material/Create'
import DeleteIcon from '@mui/icons-material/Delete'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.2),
  alignItems: 'center',
  justifyContent: 'space-between',
  color: theme.palette.text.secondary
}))

const style = {
  width: '100%',
  bgcolor: 'background.paper'
}


function Manage() {
  return (
    <>
      {/* Title */}
      <Box>
        <Typography variant='h5' sx = {{
          color: '#000',
          px: 2,
          pb: 2
        }}> Hồ sơ bệnh nhân</Typography>
      </Box>

      {/* Content */}
      <Item>
        <Grid container spacing={2}>

          {/* Search field */}
          <Grid item xs={12} md={6} sx = {{ pb: 0 }}>
            <Box sx = {{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <SearchField/>
            </Box>
          </Grid>

          {/* Divide */}
          <Grid xs = {12} sx = {{ p: 0 }}>
            <Divider sx = {{ p: 0 }} />
          </Grid>

          {/* Bảng thông tin */}
          <Grid item xs={12}>
            <Box sx = {{
              width: '100%',
              height: '100%',
              p: 0
            }}>

              {/* Thông tin tiêu đề */}
              <Box sx = {{
                display: 'flex',
                width: 'fit-content',
                px: 2
              }}>
                <Typography variant='body2' sx = {{ minWidth: '30px' }}>STT</Typography>
                <Divider sx={{ height: 28, m: 0.5, mx: 2 }} orientation="vertical" />
                <Typography sx = {{ minWidth: '280px' }}>Họ và Tên</Typography>
                <Divider sx={{ height: 28, m: 0.5, mx: 2 }} orientation="vertical" />
                <Typography sx = {{ minWidth: '200px' }} >Ngày Sinh</Typography>
                <Divider sx={{ height: 28, m: 0.5, mx: 2 }} orientation="vertical" />
                <Typography sx = {{ minWidth: '250px' }} >Quê quán</Typography>
              </Box>

              {/* Hồ sơ bệnh nhân */}
              <List sx={style} component="nav" aria-label="pantitent-folders">
                {INFORMATION.map((inf, index) => {
                  return (
                    <>
                      <Box sx = {{
                        display: 'flex',
                        justifyContent: 'space-between',
                        px: 2
                      }}>
                        <Box sx = {{
                          display: 'flex',
                          width: 'fit-content'
                        }}>
                          <Typography variant='body2' sx = {{ minWidth: '30px' }}>{index}</Typography>
                          <Divider sx={{ height: 28, m: 0.5, mx: 2 }} orientation="vertical" />
                          <Typography sx = {{ minWidth: '280px' }}>{inf.name}</Typography>
                          <Divider sx={{ height: 28, m: 0.5, mx: 2 }} orientation="vertical" />
                          <Typography sx = {{ minWidth: '200px' }} >{inf.birth}</Typography>
                          <Divider sx={{ height: 28, m: 0.5, mx: 2 }} orientation="vertical" />
                          <Typography sx = {{ minWidth: '250px' }} >{inf.country}</Typography>
                        </Box>
                        <Box sx = {{
                          display: 'flex',
                          gap: 2,
                          pr: 2
                        }}>
                          <Tooltip title="Chỉnh sửa">
                            <IconButton edge="end" aria-label="comments">
                              <CreateIcon/>
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Xóa bệnh nhân">
                            <IconButton edge="end" aria-label="comments">
                              <DeleteIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </Box>
                    </>
                  )
                })}
              </List>

            </Box>
          </Grid>
        </Grid>
      </Item>
    </>
  )
}

export default Manage

const INFORMATION = [
  {
    name: 'Mạch Vĩ Kiệt',
    birth: '25/07/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Xuân Lộc',
    birth: '00/00/2003',
    country: 'Bình Định'
  },
  {
    name: 'Quí Hòa',
    birth: '00/00/2003',
    country: 'Đồng Nai'
  },
  {
    name: 'Minh Quang',
    birth: '00/00/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Mạch Vĩ Kiệt',
    birth: '25/07/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Xuân Lộc',
    birth: '00/00/2003',
    country: 'Bình Định'
  },
  {
    name: 'Quí Hòa',
    birth: '00/00/2003',
    country: 'Đồng Nai'
  },
  {
    name: 'Minh Quang',
    birth: '00/00/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Mạch Vĩ Kiệt',
    birth: '25/07/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Xuân Lộc',
    birth: '00/00/2003',
    country: 'Bình Định'
  },
  {
    name: 'Quí Hòa',
    birth: '00/00/2003',
    country: 'Đồng Nai'
  },
  {
    name: 'Minh Quang',
    birth: '00/00/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Mạch Vĩ Kiệt',
    birth: '25/07/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Xuân Lộc',
    birth: '00/00/2003',
    country: 'Bình Định'
  },
  {
    name: 'Quí Hòa',
    birth: '00/00/2003',
    country: 'Đồng Nai'
  },
  {
    name: 'Minh Quang',
    birth: '00/00/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Mạch Vĩ Kiệt',
    birth: '25/07/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Xuân Lộc',
    birth: '00/00/2003',
    country: 'Bình Định'
  },
  {
    name: 'Quí Hòa',
    birth: '00/00/2003',
    country: 'Đồng Nai'
  },
  {
    name: 'Minh Quang',
    birth: '00/00/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Mạch Vĩ Kiệt',
    birth: '25/07/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Xuân Lộc',
    birth: '00/00/2003',
    country: 'Bình Định'
  },
  {
    name: 'Quí Hòa',
    birth: '00/00/2003',
    country: 'Đồng Nai'
  },
  {
    name: 'Minh Quang',
    birth: '00/00/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Mạch Vĩ Kiệt',
    birth: '25/07/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Xuân Lộc',
    birth: '00/00/2003',
    country: 'Bình Định'
  },
  {
    name: 'Quí Hòa',
    birth: '00/00/2003',
    country: 'Đồng Nai'
  },
  {
    name: 'Minh Quang',
    birth: '00/00/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Mạch Vĩ Kiệt',
    birth: '25/07/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Xuân Lộc',
    birth: '00/00/2003',
    country: 'Bình Định'
  },
  {
    name: 'Quí Hòa',
    birth: '00/00/2003',
    country: 'Đồng Nai'
  },
  {
    name: 'Minh Quang',
    birth: '00/00/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Mạch Vĩ Kiệt',
    birth: '25/07/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Xuân Lộc',
    birth: '00/00/2003',
    country: 'Bình Định'
  },
  {
    name: 'Quí Hòa',
    birth: '00/00/2003',
    country: 'Đồng Nai'
  },
  {
    name: 'Minh Quang',
    birth: '00/00/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Mạch Vĩ Kiệt',
    birth: '25/07/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Xuân Lộc',
    birth: '00/00/2003',
    country: 'Bình Định'
  },
  {
    name: 'Quí Hòa',
    birth: '00/00/2003',
    country: 'Đồng Nai'
  },
  {
    name: 'Minh Quang',
    birth: '00/00/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Mạch Vĩ Kiệt',
    birth: '25/07/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Xuân Lộc',
    birth: '00/00/2003',
    country: 'Bình Định'
  },
  {
    name: 'Quí Hòa',
    birth: '00/00/2003',
    country: 'Đồng Nai'
  },
  {
    name: 'Minh Quang',
    birth: '00/00/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Mạch Vĩ Kiệt',
    birth: '25/07/2003',
    country: 'Thành Phố Hồ Chí Minh'
  },
  {
    name: 'Xuân Lộc',
    birth: '00/00/2003',
    country: 'Bình Định'
  },
  {
    name: 'Quí Hòa',
    birth: '00/00/2003',
    country: 'Đồng Nai'
  },
  {
    name: 'Minh Quang',
    birth: '00/00/2003',
    country: 'Thành Phố Hồ Chí Minh'
  }
]
