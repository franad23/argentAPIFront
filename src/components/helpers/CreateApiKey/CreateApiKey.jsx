import './createapikey.css'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

//API
import { createApiKey } from '../../../api/createApiKey'


function CreateApiKey() {
  const [emailUser, setEmailUser] = useState(null);
  const handleCreateApiKey = async (e) => {
    e.preventDefault()
    try {
      const res = await createApiKey(emailUser)
      toast.success('Verifica tu correo para obtener tu ApiKey')
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
  console.log(emailUser);
  return (
    <form className='mainContainerCreateApiKey' onSubmit={handleCreateApiKey}>
      <div><Toaster/></div>
      <input type="email" placeholder="argentapi@argentapi.com" className='inputCreateApiKey' onChange={(e) => setEmailUser(e.target.value)}/>
      <button type='submit' className='btnCreateApiKey'>Crear ApiKey</button>
    </form>
  )
}

export default CreateApiKey