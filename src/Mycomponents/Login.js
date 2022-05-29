import React,{useState,useRef}from 'react'
import {useAuth} from '../context/AuthContext'
import { Link ,useNavigate } from 'react-router-dom'
import {Alert} from 'react-bootstrap'
import img2 from './img/bigUS12.png';


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error,setError] = useState('')
    const [loading, setLoading] =useState(false)
    const Navigate = useNavigate()
  
    async function handleSubmit(e){
        e.preventDefault()
        
  
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value,passwordRef.current.value) 
            Navigate("/")
        }catch{
            setError('Failed to Login')
        }
        setLoading(false)
        
    }
    return (
        
        <div className="h-screen bg-center bg-no-repeat bg-cover flex bg-[url('https://cdn.discordapp.com/attachments/810493382480494632/978243051573104680/Background_doodle.png')] w-screen h-screen">
            
            {/* <div className="justify-center w-full px-10">
                <img src="https://cdn.discordapp.com/attachments/845617551412297748/974999383961641000/7.jpg" alt="LOGO"></img>
            </div> */}
            <div className='w-full bg-cover bg-center flex-center flex-row bg-transparent max-w-md m-auto backdrop-blur-md bg-white/20 rounded-lg drop-shadow-2xl py-10 px-16'>
            <div className="flex flex-wrap justify-center">
                <div className="w-44  px-1">
                    <img src="https://cdn.discordapp.com/attachments/845617551412297748/975003921556852746/GROUP_LOGO_6.png" alt="LOGO"/>
                </div>
            </div>
            <h1 className='text-2xl text-white  font-medium mt-10 mb-12 text-center'>
                    STUDENT LOGIN
            </h1>
            {error && <Alert variant="danger">{error}</Alert>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email' className='text-white'>Email</label>
                        <input
                            type='email'
                            className={'w-full p-2 text-primary rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'}
                            id='email'
                            placeholder='example@sairamtap.edu.in' ref={emailRef} required
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className='text-white'>Password</label>
                        <input
                            type='password'
                            className={'w-full p-2 text-primary rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'}
                            id='password'
                            placeholder='Password' ref={passwordRef} required
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button disabled={loading}
                            className={`bg-blue cursor-pointer py-2 px-16 text-l text-white rounded focus:outline-none `}
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="w-100 text-white text-sm text-center mt-3">
                <Link to="/forgotpassword">Forgot Password?</Link>
            </div>
            <br/>
            <div className='flex flex-row justify-center'>

            <h2 className='text-white text-xs w-86 py-2'>
            
                    Powered by
            </h2>
            <div className="w-8">
            <img src={img2} alt="LOGO"/>
            </div>
            </div>
            </div>
        </div>
    );
};