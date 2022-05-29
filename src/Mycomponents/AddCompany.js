import React from 'react'

export default function AddCompany() {
  return (
    <div >
        <div className='pl-80 py-20'>
        <div><h1 className='text-4xl text-white bold pb-6'>Add Company Details</h1></div>
        <div className='bg-white backdrop-filter backdrop-blur-xl bg-opacity-10 rounded-lg mr-40'>
          <form>
            <input type="text" className='bg-transparent border-b-2 w-11/12 ml-10 mt-10 text-white text-lg' placeholder='Company Name*'></input>
            <input type="text" className='bg-transparent border-b-2 w-11/12 ml-10 mt-10 text-white text-lg' placeholder='CIN/TIN Number*'></input>
            <input type="text" className='bg-transparent border-b-2 w-11/12 ml-10 mt-10 text-white text-lg' placeholder='Udyog Aadhar'></input>
            <input type="text" className='bg-transparent border-b-2 w-11/12 ml-10 mt-10 text-white text-lg' placeholder='GST*'></input>
            <input type="text" className='bg-transparent border-b-2 w-11/12 ml-10 mt-10 text-white text-lg' placeholder='Company SPOC 1 Name*'></input>
            <input type="text" className='bg-transparent border-b-2 w-11/12 ml-10 mt-10 text-white text-lg' placeholder='Company SPOC 1 Email ID*'></input>
            <input type="text" className='bg-transparent border-b-2 w-11/12 ml-10 mt-10 text-white text-lg' placeholder='Company SPOC 1 Mobile No.*'></input>
            <input type="text" className='bg-transparent border-b-2 w-11/12 ml-10 mt-10 text-white text-lg' placeholder='Company SPOC 2 Name'></input>
            <input type="text" className='bg-transparent border-b-2 w-11/12 ml-10 mt-10 text-white text-lg' placeholder='Company SPOC 2 Email ID'></input>
            <input type="text" className='bg-transparent border-b-2 w-11/12 ml-10 mt-10 text-white text-lg' placeholder='Company SPOC 2 Mobile No.'></input>
            <input type="text" className='bg-transparent border-b-2 w-11/12 ml-10 mt-10 text-white text-lg' placeholder='Company SPOC 3 Name'></input>
            <input type="text" className='bg-transparent border-b-2 w-11/12 ml-10 mt-10 text-white text-lg' placeholder='Company SPOC 3 Email ID'></input>
            <input type="text" className='bg-transparent border-b-2 w-11/12 ml-10 mt-10 mb-14 text-white text-lg' placeholder='Company SPOC 3 Mobile No.'></input>

          </form>
        </div>
        </div>
    </div>
  )
}