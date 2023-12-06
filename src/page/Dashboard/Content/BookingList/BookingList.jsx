import { useState } from 'react'
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
  InputLabel,
  Paper
} from '@mui/material'
import { Add as AddIcon, Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))


const BookingList = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: 'John Doe', dentist: 'Dr. Smith', assistant: 'Kate', room: 'Room 1', date: '2023-11-15', time: '10:00 AM', status: 'New' },
    { id: 2, patientName: 'Jane Smith', dentist: 'Dr. Johnson', assistant: 'Mike', room: 'Room 2', date: '2023-11-16', time: '02:30 PM', status: 'Follow-up' }
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
    status: 'New'
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
      status: 'New'
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
  const [filter, setFilter] = useState({
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

  // Hàm xử lý thay đổi bộ lọc
  const handleFilterChange = (field, value) => {
    setFilter({ ...filter, [field]: value })
  }

  return (
    <div>
      <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleOpenDialog}>
        Add Appointment
      </Button>

      <TextField
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
      />

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{editingAppointment ? 'Edit Appointment' : 'Add New Appointment'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Patient Name"
            value={newAppointment.patientName}
            onChange={(e) => setNewAppointment({ ...newAppointment, patientName: e.target.value })}
          />
          <TextField
            label="Dentist"
            value={newAppointment.dentist}
            onChange={(e) => setNewAppointment({ ...newAppointment, dentist: e.target.value })}
          />
          <TextField
            label="Assistant"
            value={newAppointment.assistant}
            onChange={(e) => setNewAppointment({ ...newAppointment, assistant: e.target.value })}
          />
          <TextField
            label="Room"
            value={newAppointment.room}
            onChange={(e) => setNewAppointment({ ...newAppointment, room: e.target.value })}
          />
          <TextField
            label="Date"
            type="date"
            value={newAppointment.date}
            onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
          />
          <TextField
            label="Time"
            type="time"
            value={newAppointment.time}
            onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
          />
          <FormControl>
            <InputLabel>Status</InputLabel>
            <Select
              value={newAppointment.status}
              onChange={(e) => setNewAppointment({ ...newAppointment, status: e.target.value })}
            >
              <MenuItem value="New">New</MenuItem>
              <MenuItem value="Follow-up">Follow-up</MenuItem>
              {/* Add more status options as needed */}
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleAddAppointment}>
            {editingAppointment ? 'Edit' : 'Add'}
          </Button>
        </DialogContent>
      </Dialog>


      {/* {filteredAppointments.map((appointment) => { */}
      <Item>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell>Dentist</TableCell>
              <TableCell>Assistant</TableCell>
              <TableCell>Room</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
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
      </Item>
      {/* })} */}
    </div>
  )
}

export default BookingList
