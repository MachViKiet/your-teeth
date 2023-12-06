
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
    cursor: 'pointer'
  }
}

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 2.5,
  px: 3
}

export default function Navigator(props) {
  const { ...other } = props

  const categories = props.categories

  const [isActive, SetIsActive] = useState([0, 0])

  const navigate = useNavigate()


  const ClickHandle = (C_index, P_index) => {
    SetIsActive([C_index, P_index])
    navigate(`/your-teeth/${props.userInf.role}/${props.userInf.id}` + categories[C_index].children[P_index].link)
  }

  return (


    <Drawer variant="permanent" {...other}>
      <List disablePadding>

        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          Dashboard
        </ListItem>

        {categories.map(({ id, children }, Pindex) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }, Cindex) => (
              <ListItem disablePadding key={Cindex}>
                {Pindex == isActive[0] && Cindex == isActive[1] ? active = true : active = false }
                <ListItemButton selected={active} sx={item} onClick={() => ClickHandle(Pindex, Cindex)}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  )
}