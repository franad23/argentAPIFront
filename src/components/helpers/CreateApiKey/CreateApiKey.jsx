import './createapikey.css'


function CreateApiKey() {
  return (
    <form className='mainContainerCreateApiKey'>
      <input type="email" placeholder="argentapi@argentapi.com" className='inputCreateApiKey'/>
      <button type='submit' className='btnCreateApiKey'>Crear ApiKey</button>
    </form>
  )
}

export default CreateApiKey