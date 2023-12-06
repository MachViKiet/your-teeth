import { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, TextField, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material'
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material'

const Appointment = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: 'John Doe', date: '2023-11-15', time: '10:00 AM' },
    { id: 2, patientName: 'Jane Smith', date: '2023-11-16', time: '02:30 PM' }
    // ... other appointments
  ])

  const [openDialog, setOpenDialog] = useState(false)
  const [newAppointment, setNewAppointment] = useState({
    id: Date.now(),
    patientName: '',
    date: '',
    time: ''
  })

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleAddAppointment = () => {
    setAppointments([...appointments, newAppointment])
    setNewAppointment({
      id: Date.now(),
      patientName: '',
      date: '',
      time: ''
    })
    handleCloseDialog()
  }

  const handleDeleteAppointment = (id) => {
    const updatedAppointments = appointments.filter(appointment => appointment.id !== id)
    setAppointments(updatedAppointments)
  }

  return (
    <div>
      <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleOpenDialog}>
        Add Appointment
      </Button>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add New Appointment</DialogTitle>
        <DialogContent>
          <TextField
            label="Patient Name"
            value={newAppointment.patientName}
            onChange={(e) => setNewAppointment({ ...newAppointment, patientName: e.target.value })}
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
          <Button variant="contained" color="primary" onClick={handleAddAppointment}>
            Add
          </Button>
        </DialogContent>
      </Dialog>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map(appointment => (
            <TableRow key={appointment.id}>
              <TableCell>{appointment.patientName}</TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>
                <IconButton color="secondary" onClick={() => handleDeleteAppointment(appointment.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Appointment
