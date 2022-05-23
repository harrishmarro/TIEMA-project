import React, { useRef ,useState } from 'react'
import {Alert} from 'react-bootstrap'
import {useAuth} from '../context/AuthContext'
import { Link ,useNavigate } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef()
  const { resetPassword} = useAuth()
  const [error,setError] = useState('')
  const [loading, setLoading] =useState(false)
  const [message,setMessage] = useState('')
  async function handleSubmit(e){
      e.preventDefault()
      

      try{
        setMessage('')
          setError('')
          setLoading(true)
          await resetPassword(emailRef.current.value)
          setMessage('Check your mail for futher instructions')

      }catch{
          setError('Failed to Reset Password')
      }
      setLoading(false)
      
  }

  return (
    <div className="h-screen bg-center bg-no-repeat bg-cover flex bg-[url('https://cdn.discordapp.com/attachments/845617551412297748/975016608328212490/bg.png')] w-screen h-screen">
    <div className='w-full bg-cover bg-center flex-center flex-row bg-transparent max-w-md m-auto backdrop-blur-md bg-white/20 rounded-lg drop-shadow-2xl py-20 px-16'>
    <div className="flex flex-wrap justify-center">
        <div className="w-44  px-1">
            <img src="https://cdn.discordapp.com/attachments/845617551412297748/975003921556852746/GROUP_LOGO_6.png" alt="LOGO"/>
        </div>
    </div>
    <h1 className='text-2xl text-white font-serif font-medium mt-10 mb-12 text-center'>
           Forgot Password
    </h1>
    {error && 'hai'}
    {message && <Alert variant="success">{message}</Alert>}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email' className='text-primary'>Email</label>
                <input
                    type='email'
                    className={'w-full p-2 text-primary rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'}
                    id='email'
                    placeholder='example@sairamtap.edu.in' ref={emailRef} required
                />
            </div>
            <div className='flex justify-center items-center mt-6'>
                <button disabled={loading}
                    className={`bg-blue cursor-pointer py-2 px-4 text-sm text-white rounded border border-blue focus:outline-none focus:border-green-dark`}
                >
                    Reset Password
                </button>
            </div>
            <div className="w-100 text-center mt-3">
                <Link to="/login">cancel</Link>
            </div>
        </form>
    </div>
</div>
    
  )
}