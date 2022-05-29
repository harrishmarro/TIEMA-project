import React from 'react'
import oi from './img/oi.png'
import ci from './img/ci.png'
import vr from './img/vr.png'
import uc from './img/uc.png'


export default function Cards() {
  return (
    <section className="text-gray-600 body-font">
    <div className="container pl-72 pt-44 mx-auto " bis_skin_checked="1">
      <div className="flex flex-wrap -m-4  " bis_skin_checked="1">
        <div className="p-4 lg:w-1/2 shadow-2" bis_skin_checked="1">
          <div className=" shadow-2xl bg-white/10 rounded h-full flex sm:flex-row w-3/4 flex-col items-center sm:justify-start justify-center text-center sm:text-left cursor-pointer" bis_skin_checked="1">
            <img alt="team" className="flex-shrink-0 my-5 rounded-lg w-40 h-40 object-cover object-center sm:mb-0 mb-4" src={uc}/>
            <div className="flex-grow sm:pl-8" bis_skin_checked="1">
              <h2 className="title-font font-bold text-3xl text-gray-900">Upcoming Internships</h2>
              
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/2" bis_skin_checked="1">
          <div className="shadow-2xl bg-white/10 h-full flex sm:flex-row w-3/4 flex-col items-center sm:justify-start justify-center text-center sm:text-left cursor-pointer" bis_skin_checked="1">
            <img alt="team" className="flex-shrink-0 my-5 rounded-lg w-40 h-40 object-cover object-center sm:mb-0 mb-4" src={oi}/>
            <div className="flex-grow sm:pl-8" bis_skin_checked="1">
              <h2 className="title-font font-bold text-3xl text-gray-900">Ongoing Internships</h2>
              
              
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/2" bis_skin_checked="1">
          <div className="shadow-2xl w-3/4 bg-white/10 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left cursor-pointer" bis_skin_checked="1">
            <img alt="team" className="flex-shrink-0  my-5 rounded-lg py-5 w-40 h-40 object-cover object-center sm:mb-0 mb-4" src={ci}/>
            <div className="flex-grow sm:pl-8" bis_skin_checked="1">
              <h2 className="title-font font-bold text-3xl text-gray-900">Completed Internships</h2>
              
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/2" bis_skin_checked="1">
          <div className="shadow-2xl w-3/4 bg-white/10 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left cursor-pointer" bis_skin_checked="1">
            <img alt="team" className="flex-shrink-0  mx-1 my-1 rounded-lg w-40 h-40 object-cover object-center sm:mb-0 mb-4" src={vr}/>
            <div className="flex-grow sm:pl-10" bis_skin_checked="1">
              <h2 className="title-font font-bold text-3xl text-gray-900">View Report</h2>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        
  )
}
