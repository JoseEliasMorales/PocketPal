import '../styles/sidebar.css'
import { Button, Divider, Typography } from '@mui/material'
import panel from '../assets/fi-sr-apps.png'
// import cards from '../assets/fi-sr-credit-card (1).png'
// import manos from '../assets/fa-solid_hands-helping.png'
import moves from '../assets/fi-sr-navigation.png'
import SidebarComponent from './SidebarComponent'
import help from '../assets/fi-sr-comments.png'
import settings from '../assets/fi-sr-settings.png'
import terms from '../assets/fi-sr-document.png'
import tarjeta from '../assets/fi-sr-credit-card.png'
import portrait from '../assets/fi-sr-portrait.png'
import close from '../assets/close.png'
import { useLogout } from '../hooks/useLogout'

const sidebarUp = [{ name: 'Mi panel', img: panel, path: '/home/dashboard', focus: true }, { name: 'Transacciones', img: tarjeta, path: '/home/transfers' }, { name: 'Movimientos', img: moves, path: ''}, { name: 'Mis datos', img: portrait, path: '/home/profile' }]
// { name: 'Mis tarjetas', img: cards }, { name: 'Servicios', img: manos },
const sidebarDown = [{ name: 'Terminos de uso', img: terms, path: '/terms-conditions' }, { name: 'Ayuda y soporte', img: help, path: '/page-not-found' }, { name: 'Configuraciones', img: settings, path: '/home/settings/edit_profile' }]

const Sidebar = () => {
  const { logout } = useLogout()

  return (
    <section className='sidebar'>
      <div className='focus'>
        <SidebarComponent sidebar={sidebarUp} />
        <SidebarComponent sidebar={sidebarDown} />
      </div>
      <Divider className='divider' />
      <Button className='logout_button' onClick={logout}><img src={close} className='iconSidebar' />Cerrar sesión</Button>
    </section>
  )
}

export default Sidebar
