import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
     <>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm  '>

        <div><img src={assets.logo} className='mb-5 w-32 alt="" '/>
        <p className='w-full md:w-2/3 text-gray-700'> Lorem Ipsum is the text which signifies the text of the printing and typesetting industry. What this signifies that the text is for the world to recognise the fashion and is the icon for the industries.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>

            </ul>
        </div>

        <div>
<p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
<ul className='flex flex-col gap-1 text-gray-600'>
    <li>+977 9800000234</li>
    <li>contactme@gmail.com</li>
</ul>

        </div>

 </div>

 <div>
    <hr />
    <p className='py-5 text-sm text-center'>Copyright right reserved.</p>
 </div>
   
   </>
  )
}

export default Footer