import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Divider } from '@mui/material'

export default function SearchField() {
  return (
    <Box
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
    >
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Box>
  )
}