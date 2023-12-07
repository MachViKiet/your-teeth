import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  Paper,
  Box
} from '@mui/material'
import { Add as AddIcon, Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'
import SearchField from '~/components/Dashboard/SearchField/SearchField'
import { Divider } from '@mui/material'
import { useState } from 'react'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))


const BookingList = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: 'Nguyễn Duy Đăng Khoa', dentist: 'Dr. DFD', assistant: 'CRM', room: 'Phòng 1', date: '2023-11-15', time: '10:00 AM', status: 'Bệnh nhân mới' },
    { id: 2, patientName: 'Huỳnh Cao Minh', dentist: 'Dr. CJM', assistant: 'ABC', room: 'Phòng 2', date: '2023-11-16', time: '02:30 PM', status: 'Bệnh nhân cũ' }
    // ... other appointments
  ])

  const [openDialog, setOpenDialog] = useState(false)
  const [editingAppointment, setEditingAppointment] = useState(null)
  const [newAppointment, setNewAppointment] = useState({
    id: Date.now(),
    patientName: '',
    dentist: '',
    assistant: '',
    room: '',
    date: '',
    time: '',
    status: true
  })

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setEditingAppointment(null)
    setNewAppointment({
      id: Date.now(),
      patientName: '',
      dentist: '',
      assistant: '',
      room: '',
      date: '',
      time: '',
      status: ''
    })
  }

  const handleAddAppointment = () => {
    if (editingAppointment) {
      // Edit existing appointment
      const updatedAppointments = appointments.map((appointment) =>
        appointment.id === editingAppointment.id ? newAppointment : appointment
      )
      setAppointments(updatedAppointments)
    } else {
      // Add new appointment
      setAppointments([...appointments, newAppointment])
    }

    handleCloseDialog()
  }

  const handleEditAppointment = (appointment) => {
    setEditingAppointment(appointment)
    setNewAppointment(appointment)
    handleOpenDialog()
  }

  const handleDeleteAppointment = (id) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== id)
    setAppointments(updatedAppointments)
  }

  // Thêm state cho bộ lọc
  const [filter] = useState({
    patient: '',
    room: '',
    dentist: ''
  })

  // Hàm lọc danh sách cuộc hẹn
  const filteredAppointments = appointments.filter((appointment) => {
    const patientMatch = appointment.patientName.toLowerCase().includes(filter.patient.toLowerCase())
    const roomMatch = filter.room === '' || appointment.room.toLowerCase() === filter.room.toLowerCase()
    const dentistMatch = filter.dentist === '' || appointment.dentist.toLowerCase() === filter.dentist.toLowerCase()

    return patientMatch && roomMatch && dentistMatch
  })

  // // Hàm xử lý thay đổi bộ lọc
  // const handleFilterChange = (field, value) => {
  //   setFilter({ ...filter, [field]: value })
  // }

  return (
    <div>
      <Button sx={{ mb: 2 }} variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleOpenDialog}>
        Add Appointment
      </Button>

      {/* <TextField
        label="Filter by Patient"
        value={filter.patient}
        onChange={(e) => handleFilterChange('patient', e.target.value)}
      />
      <TextField
        label="Filter by Room"
        value={filter.room}
        onChange={(e) => handleFilterChange('room', e.target.value)}
      />
      <TextField
        label="Filter by Dentist"
        value={filter.dentist}
        onChange={(e) => handleFilterChange('dentist', e.target.value)}
      /> */}

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{editingAppointment ? 'Chỉnh sửa lịch hẹn' : 'Thêm lịch hẹn mới'}</DialogTitle>
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
            label="Patient Name"
            value={newAppointment.patientName}
            onChange={(e) => setNewAppointment({ ...newAppointment, patientName: e.target.value })}
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
            label="Dentist"
            value={newAppointment.dentist}
            onChange={(e) => setNewAppointment({ ...newAppointment, dentist: e.target.value })}
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
            label="Assistant"
            value={newAppointment.assistant}
            onChange={(e) => setNewAppointment({ ...newAppointment, assistant: e.target.value })}
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
            label="Room"
            value={newAppointment.room}
            onChange={(e) => setNewAppointment({ ...newAppointment, room: e.target.value })}
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
            type="date"
            value={newAppointment.date}
            onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
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
            type="time"
            value={newAppointment.time}
            onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
          />

          <FormControl sx = {{ display: 'flex', my: 1 }}>
            {/* <InputLabel>Status</InputLabel> */}
            <Select
              value={newAppointment.status}
              onChange={(e) => setNewAppointment({ ...newAppointment, status: e.target.value })}
            >
              <MenuItem value="Bệnh nhân mới">Bệnh nhân mới</MenuItem>
              <MenuItem value="Bệnh nhân cũ">Đã thăm khám trước đó</MenuItem>
              {/* Add more status options as needed */}
            </Select>
          </FormControl>

          <Box sx = {{
            display: 'flex',
            justifyContent: 'end'
          }}>
            <Button sx = {{ minWidth: '90px', py: 1, mt: 1 }} variant="contained" color="primary" onClick={handleAddAppointment}>
              {editingAppointment ? 'Chỉnh sửa' : 'Thêm'}
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
                    <TableCell sx = {{ fontWeight: '600' }}>Tên bệnh nhân</TableCell>
                    <TableCell sx = {{ fontWeight: '600' }}>Nha sĩ phụ trách</TableCell>
                    <TableCell sx = {{ fontWeight: '600' }}>Trợ khám</TableCell>
                    <TableCell sx = {{ fontWeight: '600' }}>Phòng</TableCell>
                    <TableCell sx = {{ fontWeight: '600' }}>Ngày khám</TableCell>
                    <TableCell sx = {{ fontWeight: '600' }}>Thời gian</TableCell>
                    <TableCell sx = {{ fontWeight: '600' }}>Trạng thái</TableCell>
                    <TableCell sx = {{ fontWeight: '600' }}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredAppointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>{appointment.patientName}</TableCell>
                      <TableCell>{appointment.dentist}</TableCell>
                      <TableCell>{appointment.assistant}</TableCell>
                      <TableCell>{appointment.room}</TableCell>
                      <TableCell>{appointment.date}</TableCell>
                      <TableCell>{appointment.time}</TableCell>
                      <TableCell>{appointment.status}</TableCell>
                      <TableCell>
                        <IconButton color="primary" onClick={() => handleEditAppointment(appointment)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton color="secondary" onClick={() => handleDeleteAppointment(appointment.id)}>
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

export default BookingList
