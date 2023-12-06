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


function Medicine() {

  return (
    <>
      <Box>
        <Typography variant='h5' sx = {{
          color: '#000',
          px: 2,
          py: 1
        }}> Quản lý danh sách - Thuốc</Typography>
      </Box>
      <Item>
        <Grid container spacing={2}>
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
          <Grid xs = {12} sx = {{ p: 0 }}>
            <Divider sx = {{ p: 0 }} />
          </Grid>
          <Grid item xs={12}>
            <Box sx = {{
              width: '100%',
              height: '100%',
              p: 0
            }}>
              <Box sx = {{
                display: 'flex',
                width: 'fit-content',
                px: 2
              }}>
                <Typography variant='body2' sx = {{ minWidth: '30px' }}>STT</Typography>
                <Divider sx={{ height: 28, m: 0.5, mx: 2 }} orientation="vertical" />
                <Typography sx = {{ minWidth: '200px' }}>Tên thuốc</Typography>
                <Divider sx={{ height: 28, m: 0.5, mx: 2 }} orientation="vertical" />
                <Typography sx = {{ minWidth: '100px' }} >Số lượng</Typography>
                <Divider sx={{ height: 28, m: 0.5, mx: 2 }} orientation="vertical" />
                <Typography sx = {{ minWidth: '300px' }} >Đặc tả</Typography>
                <Divider sx={{ height: 28, m: 0.5, mx: 2 }} orientation="vertical" />
                <Typography sx = {{ minWidth: '150px' }} >Ngày nhập</Typography>
                <Typography sx = {{ minWidth: '150px' }} >Ngày hết hạn</Typography>
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
                          <Typography sx = {{ minWidth: '200px' }}>{inf.Name}</Typography>
                          <Divider sx={{ height: 28, m: 0.5, mx: 2 }} orientation="vertical" />
                          <Typography sx = {{ minWidth: '100px' }} >{inf.AmountOf}</Typography>
                          <Divider sx={{ height: 28, m: 0.5, mx: 2 }} orientation="vertical" />
                          <Typography sx = {{ minWidth: '300px' }} >{inf.Desc}</Typography>
                          <Divider sx={{ height: 28, m: 0.5, mx: 2 }} orientation="vertical" />
                          <Typography sx = {{ minWidth: '150px' }} >{inf.Date}</Typography>
                          <Typography sx = {{ minWidth: '150px' }} >{inf.OutOfDate}</Typography>
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

export default Medicine

const INFORMATION = [
  {
    Name: 'novocain',
    AmountOf: '100',
    Desc: 'Thuốc gây tê tại chỗ',
    Date: '20/10/2023',
    OutOfDate: '20/10/2027'
  },
  {
    Name: 'pilocarpin',
    AmountOf: '100',
    Desc: 'Thuốc chống khô miệng',
    Date: '20/10/2023',
    OutOfDate: '20/10/2027'
  },
  {
    Name: 'xylocain',
    AmountOf: '100',
    Desc: 'Thuốc gây tê tại chỗ',
    Date: '20/10/2023',
    OutOfDate: '20/10/2027'
  },
  {
    Name: 'corticoid',
    AmountOf: '100',
    Desc: 'Thuốc giảm đau, chống viêm',
    Date: '20/10/2023',
    OutOfDate: '20/10/2027'
  },
  {
    Name: 'phenoxymethylpenicillin',
    AmountOf: '100',
    Desc: 'Thuốc diệt khuẩn',
    Date: '20/10/2023',
    OutOfDate: '20/10/2027'
  }
]
