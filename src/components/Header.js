import React from 'react'
import Logo from './Logo'
import { FaSearchDollar } from "react-icons/fa"
import { FaCircleUser } from "react-icons/fa6"
import { RiShoppingCart2Fill } from "react-icons/ri"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white' > 

      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Link to={'/'}>
            <Logo w={90} h={50}/>
          </Link>
        </div>
          
        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2'>
          <input type='text' placeholder='search product here...' className='w-full outline-none'/>
          <div className='text-lg min-w-[50px] h-8 bg-green-500 flex items-center justify-center rounded-r-full text-white'>
            <FaSearchDollar/>
          </div>   
        </div>

        <div className='flex items-center gap-7'>
          <div className='text-3xl cursor-pointer'>
            <FaCircleUser/>
          </div>   

          <div className='text-3xl relative'>
            <span><RiShoppingCart2Fill/></span>
            <div className='bg-green-500 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-1 -right-2'>
              <p className='text-sm'>0</p>
            </div>
          </div>

          <div>
            <Link to={'login'}>
              <button className='px-3 py-1 rounded-full text-white bg-green-500 hover:bg-green-600'>Login</button>
            </Link>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header