import { useState } from "react"
import { Link } from "react-router-dom"
import { BiMenu, BiX } from 'react-icons/bi';

function Navbar() {
  const [isNavMenuMobileOpen, setIsNavMenuMobileOpen]= useState(false)
  const toggleNavMenuMobile = ()=> {setIsNavMenuMobileOpen(!isNavMenuMobileOpen)};
  const closeNavMenuMobile = () => {setIsNavMenuMobileOpen(!isNavMenuMobileOpen)};

  return (
    <div >
      <div className="bg-blue-950 p-4 md:px-4  w-full ">
          <div className="flex md:flex md:justify-between items-center md:mx-10 md:mr-28">
              <div className='flex-shrink-0 flex-initial w-80'>
                  <a href='#'>
                      <img className="mx-auto" src="/src/assets/logo.png" alt="" />
                  </a>
              </div>
              <div>
                  <BiMenu className="text-white cursor-pointer md:hidden flex-none w-9 h-9 " onClick={toggleNavMenuMobile}></BiMenu>

              </div>
              <div className={`text-white flex items-center space-x-4 hidden md:block`}>
                      <Link to='/Contact' className='font-bold'>Customer Support</Link>
                      <button className='font-bold'>My booking</button>
                      <button className='font-bold'>Sign in</button>
              </div>  
          </div>   

          
      </div>

      <div className={`opacity-90 text-bold shadow-lg bg-slate-50 md:hidden fixed inset-y-0 right-0 z-50 w-1/2 ${isNavMenuMobileOpen ? 'flex' : 'hidden'}`}>
        {/* thêm lớp flex-col items-center justify-center h-full */}
        
            <div className="flex flex-col items-start justify-start h-full mt-5 ml-2" >
              <Link to='/' className='font-medium py-2'>Customer Support</Link>
              <Link to='/' className='font-medium py-2'>My booking</Link>
              <Link to='/' className='font-medium py-2'>Sign in</Link>
              <Link to='/' className='font-medium py-2'>Flight</Link>
            </div>
          
            <div className="absolute top-4 right-4 cursor-pointer bg-blue-950 rounded-md" onClick={closeNavMenuMobile}>
              <BiX className="text-white w-6 h-6" />
            </div>
      </div>

      <div className="bg-slate-50 flex justify-between items-center mx-28 px-4 py-1 font-medium hidden md:block">
          <div className="flex items-center space-x-4"><Link to='/' className="font-bold">Flight</Link></div>
      </div>
      

      


    </div>
  )
}

export default Navbar