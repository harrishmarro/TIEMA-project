import React from 'react'

export default function Displaycompany() {
  return (
        <div className='pl-80 py-20'>  
        <button className="right-0 float-right mx-40 my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Edit</button> 
            <div>
                <div><h1 className='text-4xl text-white bold pb-6'>ABC COMPANY, COIMBATORE BRANCH</h1></div>
            </div>
        <div className='bg-white backdrop-filter backdrop-blur-xl bg-opacity-10 rounded-lg mr-40'>
                <div className="flex flex-row text-white text-lg px-10 pt-8">
                    <h3 className="basis-1/3">CIN/TIN Number</h3>
                    <h2 className="basis-1/3">-</h2>
                    <h3 className="basis-1/3">L21091KA2019OPC1413</h3>
                </div>
                <div className="flex flex-row text-white text-lg px-10 pt-8">
                    <h3 className="basis-1/3">Udyog Aadhar</h3>
                    <h2 className="basis-1/3">-</h2>
                    <h3 className="basis-1/3">3982420568</h3>
                </div>
                <div className="flex flex-row text-white text-lg px-10 pt-8">
                    <h3 className="basis-1/3">GST</h3>
                    <h2 className="basis-1/3">-</h2>
                    <h3 className="basis-1/3">TN2391847</h3>
                </div>
                <div className="flex flex-row text-white text-lg px-10 pt-8">
                    <h3  className="basis-1/3">Company Address</h3>
                    <h2  className="basis-1/3">-</h2>
                    <h3 className="basis-1/3">Sri Sairam Engineering College, West Tambaram, Kanchipuram - 600044</h3>
                </div>
                <div className="flex flex-row text-white text-lg px-10 pt-8">
                    <h3 className="basis-1/3">Company SPOC 1 Name </h3>
                    <h2 className="basis-1/3">-</h2>
                    <h3 className="basis-1/3">Gokul</h3>
                </div>
                <div className="flex flex-row text-white text-lg px-10 pt-8">
                    <h3 className="basis-1/3">Company SPOC 1 Email ID </h3>
                    <h2 className="basis-1/3">-</h2>
                    <h3 className="basis-1/3">gokul@gmail.com</h3>
                </div>
                <div className="flex flex-row text-white text-lg px-10 pt-8 pb-10">
                    <h3 className="basis-1/3">Company SPOC 1 Number </h3>
                    <h2 className="basis-1/3">-</h2>
                    <h3 className="basis-1/3">7358416777 </h3>
                </div>
            </div>
        </div>  
  )
}
