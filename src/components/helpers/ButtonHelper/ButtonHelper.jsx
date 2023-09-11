import './buttonhelper.css'

function ButtonHelper(props) {
  return (
    <button className='mainButtonHelper' onClick={props.toHandleOnClickBtnHelper}>
      {props.btnName}
    </button>
  )
}

export default ButtonHelper