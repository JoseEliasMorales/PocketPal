/* eslint-disable react/prop-types */
import Typography from '@mui/material/Typography'
import '../styles/sidebarComponent.css'
import { NavLink } from 'react-router-dom'

const SidebarComponent = ({ sidebar }) => {
  return (
    <div className='sidebar_component'>
      <ul>
        {
          sidebar.map((list) => (
            <li key={list.name}>
              <NavLink className='btnSidebar' to={list.path}>
                <img src={list.img} alt={list.name} className='iconSidebar' />
                <Typography variant='p' color='secondary' fontSize='1rem'>{list.name}</Typography>
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>

  )
}

export default SidebarComponent
