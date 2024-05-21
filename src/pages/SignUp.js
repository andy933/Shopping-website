import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import loginIcons from '../assest/login.gif'
import { ImEye } from 'react-icons/im'
import { ImEyeBlocked } from "react-icons/im"
import imageTobase64 from '../helpers/imageTobase64'

const SignUp = () => {
  const [displayPw, setDisplayPw] = useState(false)
  const [displayRetypedPw, setDisplayRetypedPw] = useState(false)
  const [account, setAccount] = useState({
      name: '',
      email: '',
      password: '',
      rePassword: '',
      image: ''
  })

  const handleNameChange = (event) => {
    setAccount(before => {
        return {
            name: event.target.value,
            email: before.email,
            password: before.password,
            rePassword: before.rePassword
        }
    })
  }

  const handleEmailChange = (event) => {
      setAccount(before => {
          return {
              name: before.name,
              email: event.target.value,
              password: before.password,
              rePassword: before.rePassword
          }
      })
  }

  const handlePasswordChange = (event) => {
      setAccount(before => {
          return {
              name: before.name,
              email:  before.email,
              password: event.target.value,
              rePassword: before.rePassword
          }
      })
  }

  const handleRetypedPasswordChange = (event) => {
    setAccount(before => {
        return {
            name: before.name,
            email:  before.email,
            password: before.password,
            rePassword: event.target.value
        }
    })
  }

  const handleSignUp = (event) => {
      event.preventDefault()
  }

  const handleUploadImage = async (event) => {
    const file = event.target.files[0]

    const imageExtractor = await imageTobase64(file)
    console.log('file', imageExtractor)
    
    setAccount((before) => {
      return {
        ...before,
        image: imageExtractor
      }
    })
  }

  console.log('User signIn details', account)

  return (
    <section id='login'>
        <div className='mx-auto container p-4'>
            
            <div className='bg-white p-3 w-full max-w-sm mx-auto'>

                <div className='w-2/5 h-15 mx-auto relative overflow-hidden rounded-full'>
                    <div>
                      <img src={account.image || loginIcons} alt='login icons'/>
                    </div>
                    <form>
                      <label>
                        <div className='text-xs bg-opacity-80 cursor-pointer bg-slate-100 pb-2 pt-1 py-4 text-center absolute bottom-0 w-full'>
                          Upload image
                        </div>
                        <input type='file' className='hidden' onChange={handleUploadImage}/>
                      </label>
                    </form>
                </div>
                <form className='pt-8 flex flex-col gap-5' onSubmit={handleSignUp}>

                  <div className='grid'>
                        <label>Name: </label>
                        <div className='bg-slate-100 p-2'>
                            <input type='text' 
                            name='name'
                            value={account.name}
                            placeholder='enter your name' 
                            className='w-full h-full outline-none bg-transparent'
                            onChange={handleNameChange}
                            required/>
                        </div>
                    </div>

                    <div className='grid'>
                        <label>Email: </label>
                        <div className='bg-slate-100 p-2'>
                            <input type='email' 
                            name='email'
                            value={account.email}
                            placeholder='enter your email' 
                            className='w-full h-full outline-none bg-transparent'
                            onChange={handleEmailChange}
                            required/>
                        </div>
                    </div>

                    <div>
                        <label>New Password: </label>
                        <div className='bg-slate-100 p-2 flex'>
                            <input type={displayPw ? 'text' : 'password'} 
                            name='retypedPassword'
                            value={account.password}
                            placeholder='enter your password' 
                            className='w-full h-full outline-none bg-transparent'
                            onChange={handlePasswordChange}
                            required/>
                            <div className='cursor-pointer text-xl' onClick={() => setDisplayPw( pw => !pw )}>
                                <span>
                                    {
                                        displayPw ? (<ImEyeBlocked/>) : (<ImEye/>)
                                    }               
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label>Retype New Password: </label>
                        <div className='bg-slate-100 p-2 flex'>
                            <input type={displayRetypedPw ? 'text' : 'password'} 
                            name='password'
                            value={account.rePassword}
                            placeholder='enter your password' 
                            className='w-full h-full outline-none bg-transparent'
                            onChange={handleRetypedPasswordChange}
                            required/>
                            <div className='cursor-pointer text-xl' onClick={() => setDisplayRetypedPw( pw => !pw )}>
                                <span>
                                    {
                                        displayRetypedPw ? (<ImEyeBlocked/>) : (<ImEye/>)
                                    }               
                                </span>
                            </div>
                        </div>
                    </div>

                    <button className='bg-green-500 hover:bg-green-600 text-white px-6 py-2 w-full max-w-[150px] rounded-md hover:scale-110 transition-all mx-auto block mt-8'>Sign up</button>
                </form>

                <p className='my-4'>Already have an account? <Link to={'/login'} className='text-green-500 hover:underline hover:text-green-600'>Login</Link></p>
            </div>
        </div>
    </section>
  )
}

export default SignUp