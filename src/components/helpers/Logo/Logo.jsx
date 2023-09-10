import './logo.css'
import logo from '../../../assets/images/logo.png'

function Logo() {
  return (
    <div className='mainContainerLogo'>
      <img src={logo} alt="logoargentapi" className='logoArgentapi'/>
      <h1 className='titleLogo'>ArgentAPI</h1>
    </div>
  )
}

export default Logo