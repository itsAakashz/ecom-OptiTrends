import React from 'react'
import progress from "src/assets/images/progress3.png"
import { Link } from 'react-router-dom';

export const Checkout = () => {
  return (
    <div>
    

      <div className='flex flex-col'>
      <Link to="/"><p className='ml-24 lg:opacity-0 md:opacity-0 opacity-100'>←  Back</p></Link>
      <p className='text-center font-bold text-xl text-[#2C3E50]' >Checkout</p>
      <img src={progress} className='self-center m-10' style={{width:"min-content"}}/>
      <h1 className='text-center font-semibold text-lg text-[#2C3E50]'>Payment</h1>
      </div>

      <div className="flex flex-wrap w-2/3 mx-auto mt-10 text-[#2C3E50]">
  <label className="flex items-center bg-[#F5F6F7] w-full h-32 rounded-lg pl-10 pt-1 mb-4">
    <input name="payment" defaultChecked type="radio" className="w-7 h-7 mt-1 focus:bg-[#2C3E50] mr-3"/>
    <div>
      <p className="font-semibold">Credit Card</p>
      <p className="text-sm">Pay with Visa, MasterCard, and other debit and credit cards</p>
    </div>
  </label>

  <label className="flex items-center bg-[#F5F6F7] w-full h-32 rounded-lg pl-10 pt-1">
    <input name="payment" type="radio" className="w-7 h-7 mt-1 focus:bg-[#2C3E50] mr-3"/>
    <div>
      <p className="font-semibold">Paypal</p>
      <p className="text-sm">Pay easily, fast, and securely with Paypal</p>
    </div>
  </label>
</div>

<div className='w-2/3 mx-auto '>

<div className="mt-8 items-end float-left ">
          <Link to="/shipping"><button className="text-[#2C3E50] border border-[#2C3E50] hidden sm:block px-auto py-auto rounded-lg  w-40 h-10">← Back</button></Link>
        </div>
        <div className="mt-8 items-end float-right w-full lg:w-40">
          <Link to="/"><button className="bg-[#2C3E50] text-white px-auto py-auto rounded-lg  w-full lg:w-40 md:w-40  h-10  px-1">Confirm Payment</button></Link>
        </div>
</div>

    <br/><br/><br/>

    </div>
  )
}

export default Checkout
