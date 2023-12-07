import { useState } from 'react'
import {
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  MenuItem,
  Select,
  TextField
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import Autocomplete from '@mui/material/Autocomplete'

const DoctorSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [appointments, setAppointments] = useState([])
  const [newAppointment, setNewAppointment] = useState('')
  const [selectedShift, setSelectedShift] = useState('Ca 1')
  const [selectedDoctor, setSelectedDoctor] = useState('')
  const [selectedAppointment, setSelectedAppointment] = useState(null)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  const doctors = ['Bác sĩ A', 'Bác sĩ B', 'Bác sĩ C'] // Thay đổi danh sách nha sĩ theo nhu cầu thực tế của bạn

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const handleShiftChange = (event) => {
    setSelectedShift(event.target.value)
  }

  const handleDoctorChange = (event, value) => {
    setSelectedDoctor(value)
  }

  const handleAddAppointment = () => {
    if (selectedDate !== null && newAppointment.trim() !== '' && selectedDoctor.trim() !== '') {
      setAppointments([
        ...appointments,
        { date: selectedDate.toISOString().split('T')[0], appointment: newAppointment, shift: selectedShift, doctor: selectedDoctor }
      ])
      setSelectedDate(null)
      setNewAppointment('')
      setSelectedDoctor('')
    }
  }

  const handleEditAppointment = (apt) => {
    setSelectedAppointment(apt)
    setEditDialogOpen(true)
  }

  const handleSaveEditedAppointment = () => {
    const updatedAppointments = appointments.map((apt) =>
      apt === selectedAppointment ? { ...apt, appointment: newAppointment } : apt
    )
    setAppointments(updatedAppointments)
    setEditDialogOpen(false)
  }

  const handleDeleteAppointment = () => {
    const updatedAppointments = appointments.filter(
      (apt) => apt !== selectedAppointment
    )
    setAppointments(updatedAppointments)
    setDeleteDialogOpen(false)
  }

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Lịch làm việc của bác sĩ
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Ngày"
          value={selectedDate}
          onChange={(newValue) => handleDateChange(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth />}
          fullWidth
          sx={{ mb: 2 }}
        />
      </LocalizationProvider>
      <Select
        label="Ca trực"
        value={selectedShift}
        onChange={handleShiftChange}
        fullWidth
        sx={{ mb: 2 }}
      >
        <MenuItem value="Ca 1">Ca 1</MenuItem>
        <MenuItem value="Ca 2">Ca 2</MenuItem>
        <MenuItem value="Ca 3">Ca 3</MenuItem>
      </Select>
      <Autocomplete
        value={selectedDoctor}
        onChange={handleDoctorChange}
        options={doctors}
        renderInput={(params) => <TextField {...params} label="Chọn tên bác sĩ" fullWidth />}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Thêm cuộc hẹn"
        value={newAppointment}
        onChange={(e) => setNewAppointment(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddAppointment}
        fullWidth
        sx={{ mb: 2 }}
      >
        Thêm
      </Button>
      <Typography variant="h5" gutterBottom>
        Cuộc hẹn:
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ngày</TableCell>
              <TableCell>Ca trực</TableCell>
              <TableCell>Tên nha sĩ</TableCell>
              <TableCell>Cuộc hẹn</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((apt, index) => (
              <TableRow key={index}>
                <TableCell>{apt.date}</TableCell>
                <TableCell>{apt.shift}</TableCell>
                <TableCell>{apt.doctor}</TableCell>
                <TableCell>{apt.appointment}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditAppointment(apt)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => {
                    setSelectedAppointment(apt)
                    setDeleteDialogOpen(true)
                  }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Sửa đổi cuộc hẹn</DialogTitle>
        <DialogContent>
          <TextField
            label="Cuộc hẹn"
            value={newAppointment}
            onChange={(e) => setNewAppointment(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Hủy</Button>
          <Button onClick={handleSaveEditedAppointment} variant="contained" color="primary">
            Lưu
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Xóa cuộc hẹn</DialogTitle>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Hủy</Button>
          <Button onClick={handleDeleteAppointment} variant="contained" color="secondary">
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default DoctorSchedule
