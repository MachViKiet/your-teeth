import { Button, Dialog, DialogTitle, DialogContent, TextField, IconButton } from '@mui/material'
import { Select, MenuItem, FormControl, Paper, Box } from '@mui/material'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { Add as AddIcon, Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'
import SearchField from '~/components/Dashboard/SearchField/SearchField'
import { Divider } from '@mui/material'
import { useEffect, useState } from 'react'

// API
import { RoomControl } from '~/apis/Room/Room'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const Room = () => {
  const [room, setRoom] = useState([])
  const [openDialog, setOpenDialog] = useState(false)
  const [editRoom, setEditRoom] = useState(null)
  const [newRoom, setNewRoom] = useState({
    id: Date.now(),
    name: '',
    dentist : '',
    assistance: '',
    status : true,
    count: 0
  })

  useEffect(() => {
    const room = RoomControl.getAllRoom().data
    room && setRoom(room)
  }, [])

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setEditRoom(null)
    setNewRoom({
      id: Date.now(),
      name: '',
      dentist : '',
      assistance: '',
      status : true,
      count: 0
    })
  }

  const handleAddAppointment = () => {
    if (editRoom) {
      // Edit existing room
      const updatedRoom = room.map((room) =>
        room.id === editRoom.id ? newRoom : room
      )
      setRoom(updatedRoom)
    } else {
      // Add new room
      setRoom([...room, newRoom])
    }

    handleCloseDialog()
  }

  const handleEditRoom = (room) => {
    setEditRoom(room)
    setNewRoom(room)
    handleOpenDialog()
  }

  const handleDeleteRoom = (id) => {
    const updatedRoom = room.filter((room) => room.id !== id)
    setRoom(updatedRoom)
  }

  return (
    <div>
      <Button sx={{ mb: 2 }} variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleOpenDialog}>
        Add New Room
      </Button>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{editRoom ? 'Chỉnh sửa lịch hẹn' : 'Thêm lịch hẹn mới'}</DialogTitle>
        <DialogContent sx = {{
          width: '95vw',
          maxWidth: '500px'
        }}>
          <TextField
            sx = {{
              my: 1,
              display: 'block',
              width: '100%',
              '& .MuiInputBase-root':{
                width: '100%'
              }
            }}
            label="Tên phòng"
            value={newRoom.name}
            onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
          />
          <TextField
            sx = {{
              my: 1,
              display: 'block',
              width: '100%',
              '& .MuiInputBase-root':{
                width: '100%'
              }
            }}
            label="Bác sĩ phụ trách"
            value={newRoom.dentist}
            onChange={(e) => setNewRoom({ ...newRoom, dentist: e.target.value })}
          />
          <TextField
            sx = {{
              my: 1,
              display: 'block',
              width: '100%',
              '& .MuiInputBase-root':{
                width: '100%'
              }
            }}
            label="Phụ khám"
            value={newRoom.assistance}
            onChange={(e) => setNewRoom({ ...newRoom, status: e.target.value })}
          />
          <TextField
            sx = {{
              my: 1,
              display: 'block',
              width: '100%',
              '& .MuiInputBase-root':{
                width: '100%'
              }
            }}
            label="Số thứ tự"
            value={newRoom.count}
            onChange={(e) => setNewRoom({ ...newRoom, count: e.target.value })}
          />

          <FormControl sx = {{ display: 'flex', my: 1 }}>
            {/* <InputLabel>Status</InputLabel> */}
            <Select
              value={newRoom.status}
              onChange={(e) => setNewRoom({ ...newRoom, status: e.target.value })}
            >
              <MenuItem value="Tạm đóng">Đóng phòng</MenuItem>
              <MenuItem value="Đang hoạt động">Mở phòng</MenuItem>
              {/* Add more status options as needed */}
            </Select>
          </FormControl>

          <Box sx = {{
            display: 'flex',
            justifyContent: 'end'
          }}>
            <Button sx = {{ minWidth: '90px', py: 1, mt: 1 }} variant="contained" color="primary" onClick={handleAddAppointment}>
              {editRoom ? 'Chỉnh sửa' : 'Thêm'}
            </Button>
          </Box>

        </DialogContent>

      </Dialog>

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

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx = {{ fontWeight: '600' }}>Tên</TableCell>
                    <TableCell sx = {{ fontWeight: '600', maxWidth: '500px' }}>Bác sĩ phụ trách</TableCell>
                    <TableCell sx = {{ fontWeight: '600' }}>Trợ khám</TableCell>
                    <TableCell sx = {{ fontWeight: '600' }}>Trạng thái</TableCell>
                    <TableCell sx = {{ fontWeight: '600' }}>Số thứ tự</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {room.map((room) => (
                    <TableRow key={room.id}>
                      <TableCell>{room.name}</TableCell>
                      <TableCell>{room.dentist}</TableCell>
                      <TableCell>{room.assistance}</TableCell>
                      <TableCell sx = {{ color: room.status ? 'green' : 'red' }}>{ room.status ? 'Đang hoạt đông' : 'Tạm đóng' }</TableCell>
                      <TableCell>{room.count}</TableCell>
                      <TableCell>
                        <IconButton color="primary" onClick={() => handleEditRoom(room)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton color="secondary" onClick={() => handleDeleteRoom(room.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

            </Box>
          </Grid>

        </Grid>
      </Item>
      {/* })} */}
    </div>
  )
}

export default Room
