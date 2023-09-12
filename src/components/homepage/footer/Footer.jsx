import './footer.css'
import heartIcon from '../../../assets/images/heart.png'

function Footer() {
  return (
    <div className='mainContainerFooter'>
      <h5 className='titleFooter'>Hecho con</h5>
      <img src={heartIcon} alt="hearticon" className='heartIcon'/>
      <h5 className='titleFooter'>por <a href='https://github.com/franad23' target='_blank' rel='noreferrer'>franad23</a></h5>
    </div>
  )
}

export default Footer