import React from 'react'
import progress from "../assets/images/progress2.png"
import { Link } from 'react-router-dom'

export const checkout_shipping = () => {
  return (
    <div>
      <div className='flex flex-col' >
      <Link to="/checkout_summary"><p className='mt-10 lg:opacity-0 md:opacity-0 opacity-100'>←  Back</p></Link>
      <p className='text-center font-bold text-xl text-[#2C3E50]' >Checkout</p>
      <img src={progress} className='self-center m-10' style={{width:"min-content"}}/>
      <h1 className='text-center text-lg text-[#2C3E50] font-semibold'>Shipping Details</h1>
      </div>


    <div className="w-full max-w-4xl mx-auto p-8">
        <div className=" p-8 rounded-lg ">

            <div className="mb-6">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div>
                        <label for="first_name" className="block text-gray-700  mb-1">Full Name</label>
                        <input type="text" id="first_name" placeholder="Enter name " className="w-full rounded-lg border py-2 px-3 "/>
                    </div>
                    <div>
                        <label for="last_name" className="block text-gray-700 mb-1">Email</label>
                        <input type="text" id="last_name" placeholder="eg Johndeo@gmail.com" className="w-full rounded-lg border py-2 px-3 "/>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">

                    <div>
                        <label for="phone" className="block text-gray-700 mb-1">Phone Number</label>
                        <input type="text" id="phone" placeholder="eg +234" className="w-full rounded-lg border py-2 px-3"/>
                    </div>
                    <div>
                        <label for="address" className="block text-gray-700  mb-1">Address</label>
                        <input type="text" id="address" placeholder="" className="w-full rounded-lg border py-2 px-3 "/>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">
                    <div>
                        <label for="city" className="block text-gray-700 mb-1">City</label>
                        <input type="text" id="city" className="w-full rounded-lg border py-2 px-3"/>
                    </div>
                    <div>
                        <label for="state" className="block text-gray-700  mb-1">State</label>
                        <input type="text" id="state" className="w-full rounded-lg border py-2 px-3 "/>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">
                    <div>
                        <label for="postal" className="block text-gray-700 mb-1">Postal Code</label>
                        <input type="text" id="postal" className="w-full rounded-lg border py-2 px-3"/>
                    </div>
                    <div>
                        <label for="country" className="block text-gray-700  mb-1">Country</label>
                        <input type="text" id="country" className="w-full rounded-lg border py-2 px-3 "/>
                    </div>
                </div>
            </div>

            <div className="mt-8 items-end float-left">
          <Link to="/checkout"><button className="text-[#2C3E50] border border-[#2C3E50] hidden sm:block px-auto py-auto rounded-lg  w-40 h-10">← Back</button></Link>
        </div>
        <div className="mt-8 items-end float-right w-full lg:w-40 md:w-40">
          <Link to="/checkout"><button className="bg-[#2C3E50] text-white px-auto py-auto rounded-lg w-full lg:w-40 md:w-40  h-10 ">Next</button></Link>
        </div>





        </div>
    </div>

     <br/><br/><br/>


    </div>
  )
}

export default checkout_shipping
