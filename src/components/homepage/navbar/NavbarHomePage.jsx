import './navbarhomepage.css'
import { Link } from 'react-router-dom'

//Components
import Logo from '../../helpers/Logo/Logo'


function NavbarHomePage() {

  return (
    <div className='mainContainerNavbarHomePage'>
      <Logo/>
      <div className='btnsMainContaineNavbar'>
        <Link className='linksnavbar'>Inicio</Link>
        <Link className='linksnavbar'>Docs</Link>
        <Link className='linksnavbar'>Contacto</Link>
      </div>
    </div>
  )
}

export default NavbarHomePage