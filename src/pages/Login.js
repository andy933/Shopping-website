import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import loginIcons from '../assest/login.gif'
import { ImEye } from 'react-icons/im'
import { ImEyeBlocked } from "react-icons/im"

const Login = () => {
    const [displayPw, setDisplayPw] = useState(false)
    const [account, setAccount] = useState({
        email: '',
        password: ''
    })

    const handleEmailChange = (event) => {
        setAccount(before => {
            return {
                email: event.target.value,
                password: before.password
            }
        })
    }

    const handlePasswordChange = (event) => {
        setAccount(before => {
            return {
                email:  before.email,
                password: event.target.value
            }
        })
    }

    const handleLogin = (event) => {
        event.preventDefault()
    }

    console.log('User login details', account)

  return (
    <section id='login'>
        <div className='mx-auto container p-4'>
            
            <div className='bg-white p-3 w-full max-w-sm mx-auto'>
                <div className='w-2/5 h-15 mx-auto'>
                    <img src={loginIcons} alt='login icons'/>
                </div>
                <form className='pt-8 flex flex-col gap-5' onSubmit={handleLogin}>
                    <div className='grid'>
                        <label>Email: </label>
                        <div className='bg-slate-100 p-2'>
                            <input type='email' 
                            name='email'
                            value={account.email}
                            placeholder='enter your email' 
                            className='w-full h-full outline-none bg-transparent'
                            onChange={handleEmailChange}/>
                        </div>
                    </div>
                    <div>
                        <label>Password: </label>
                        <div className='bg-slate-100 p-2 flex'>
                            <input type={displayPw ? 'text' : 'password'} 
                            name='password'
                            value={account.password}
                            placeholder='enter your password' 
                            className='w-full h-full outline-none bg-transparent'
                            onChange={handlePasswordChange}/>
                            <div className='cursor-pointer text-xl' onClick={() => setDisplayPw( pw => !pw )}>
                                <span>
                                    {
                                        displayPw ? (<ImEyeBlocked/>) : (<ImEye/>)
                                    }               
                                </span>
                            </div>
                        </div>
                        <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-green-500'>
                            Forget password?
                        </Link>
                    </div>
                    <button className='bg-green-500 hover:bg-green-600 text-white px-6 py-2 w-full max-w-[150px] rounded-md hover:scale-110 transition-all mx-auto block mt-8'>Login</button>
                </form>

                <p className='my-4'>Don't have an account? <Link to={'/sign-up'} className='text-green-500 hover:underline hover:text-green-600'>Sign up for free</Link></p>
            </div>
        </div>
    </section>
  )
}

export default Login