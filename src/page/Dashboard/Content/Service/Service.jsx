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
import { ServiceControl } from '~/apis/Service/Service'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const Service = () => {
  const [service, setService] = useState([])
  const [openDialog, setOpenDialog] = useState(false)
  const [editService, setEditService] = useState(null)
  const [newService, setNewService] = useState({
    id: Date.now(),
    serviceName: '',
    description: '',
    status: true,
    unitPrice: ''
  })

  useEffect(() => {
    const services = ServiceControl.getAllService().data
    services && setService(services)
  }, [])

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setEditService(null)
    setNewService({
      id: Date.now(),
      serviceName: '',
      description: '',
      status: true,
      unitPrice : ''
    })
  }

  const handleAddAppointment = () => {
    if (editService) {
      // Edit existing service
      const updatedService = service.map((service) =>
        service.id === editService.id ? newService : service
      )
      setService(updatedService)
    } else {
      // Add new service
      setService([...service, newService])
    }

    handleCloseDialog()
  }

  const handleEditAppointment = (service) => {
    setEditService(service)
    setNewService(service)
    handleOpenDialog()
  }

  const handleDeleteAppointment = (id) => {
    const updatedService = service.filter((service) => service.id !== id)
    setService(updatedService)
  }

  // Thêm state cho bộ lọc
  const [filter] = useState({
    patient: '',
    room: '',
    description: ''
  })

  // Hàm lọc danh sách cuộc hẹn
  const filteredAppointments = service.filter((service) => {
    const patientMatch = service.serviceName.toLowerCase().includes(filter.patient.toLowerCase())
    const roomMatch = filter.room === '' || service.room.toLowerCase() === filter.room.toLowerCase()
    const dentistMatch = filter.description === '' || service.description.toLowerCase() === filter.description.toLowerCase()

    return patientMatch && roomMatch && dentistMatch
  })

  // // Hàm xử lý thay đổi bộ lọc
  // const handleFilterChange = (field, value) => {
  //   setFilter({ ...filter, [field]: value })
  // }

  return (
    <div>
      <Button sx={{ mb: 2 }} variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleOpenDialog}>
        Add New Service
      </Button>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{editService ? 'Chỉnh sửa lịch hẹn' : 'Thêm lịch hẹn mới'}</DialogTitle>
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
            label="Tên dịch vụ"
            value={newService.serviceName}
            onChange={(e) => setNewService({ ...newService, serviceName: e.target.value })}
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
            label="Mô tả dịch vụ"
            value={newService.description}
            onChange={(e) => setNewService({ ...newService, description: e.target.value })}
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
            label="Đơn giá"
            value={newService.unitPrice}
            onChange={(e) => setNewService({ ...newService, unitPrice: e.target.value })}
          />

          <FormControl sx = {{ display: 'flex', my: 1 }}>
            {/* <InputLabel>Status</InputLabel> */}
            <Select
              value={newService.status}
              onChange={(e) => setNewService({ ...newService, status: e.target.value })}
            >
              <MenuItem value="Đang hoạt đông">Mở</MenuItem>
              <MenuItem value="Tạm ngưng"> Đóng</MenuItem>
              {/* Add more status options as needed */}
            </Select>
          </FormControl>

          <Box sx = {{
            display: 'flex',
            justifyContent: 'end'
          }}>
            <Button sx = {{ minWidth: '90px', py: 1, mt: 1 }} variant="contained" color="primary" onClick={handleAddAppointment}>
              {editService ? 'Chỉnh sửa' : 'Thêm'}
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
                    <TableCell sx = {{ fontWeight: '600' }}>Tên dịch vụ</TableCell>
                    <TableCell sx = {{ fontWeight: '600', maxWidth: '500px' }}>Mô tả</TableCell>
                    <TableCell sx = {{ fontWeight: '600' }}>Trạng thái</TableCell>
                    <TableCell sx = {{ fontWeight: '600' }}>Đơn giá</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredAppointments.map((service) => (
                    <TableRow key={service.id}>
                      <TableCell>{service.serviceName}</TableCell>
                      <TableCell sx = {{ maxWidth: '500px' }}>{service.description}</TableCell>
                      <TableCell sx = {{ color: service.status ? 'green' : 'red' }}>{ service.status ? 'Đang hoạt đông' : 'Tạm khóa' }</TableCell>
                      <TableCell>{service.unitPrice}</TableCell>
                      <TableCell>
                        <IconButton color="primary" onClick={() => handleEditAppointment(service)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton color="secondary" onClick={() => handleDeleteAppointment(service.id)}>
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

export default Service
