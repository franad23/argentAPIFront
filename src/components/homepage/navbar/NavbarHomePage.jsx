import './navbarhomepage.css'
import { Link } from 'react-router-dom'

//Components
import Logo from '../../helpers/Logo/Logo';
import DropdownMenu from '../../helpers/DropdownMenu/DropdownMenu';


function NavbarHomePage() {

  return (
    <div className='mainContainerNavbarHomePage'>
      <Logo/>
      <DropdownMenu/>
      <div className='linksMainContaineNavbar'>
        <Link to="/" className='linksnavbar'>Inicio</Link>
        <Link to="/docs" className='linksnavbar'>Docs</Link>
        <a href='https://github.com/franad23/argentAPIFront' className='linksnavbar'>Github</a>
      </div>
    </div>
  )
}

export default NavbarHomePage