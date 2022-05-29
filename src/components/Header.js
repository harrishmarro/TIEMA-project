import React from 'react'
import Logo from "../img/logo2.png";
import report from "../img/report.png";
import allocated from "../img/allocated.png";
import company from "../img/company.png";
// import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
    <div className='fixed '>
    <div className="w-56  shadow-2xl bg-white/10 absolute" id="sidenavSecExample">
  <div className="pt-4 pb-2 px-6">
    <a href="#!">
      <div className="flex items-center">
        <div className="shrink-0">
          {/* <Link to="/"> */}
          <img src={Logo} className="rounded-full w-48" alt="Avatar"/>
          {/* </Link> */}
        </div>
        
      </div>
    </a>
  </div>
  <hr className="my-2"/>
  <ul className="relative px-1">
    <li className="relative h-48">
      <a className="flex flex-col items-center text-sm py-10 px-6 h-48 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="/CompanyDetails" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <div className="1 flex">
        <img aria-hidden="true" src={company} focusable="false" data-prefix="fas" className="w-20 h-20 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"/>

        </div>
        <div className="2 flex">
        <span className="text-xl text-white font-bold py-5">Company Details</span>

        </div>
      </a>
    </li>
  </ul>

  <hr className="my-2"/>
  <ul className="relative px-1">
    <li className="relative h-48">
      <a className="flex flex-col items-center text-sm py-10 px-6 h-48 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <div className="1 flex">
        <img aria-hidden="true" src={allocated} focusable="false" data-prefix="fas" className="w-20 h-20 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"/>
        </div>
       <div className="2 flex">
       <span className="text-xl font-bold text-white  py-5">Allocate Internship</span>
       </div>
       
      </a>
    </li>
    
    
  </ul>
  <hr className="my-2"/>
  <ul className="relative px-1">
    <li className="relative h-48">
      <a className="flex flex-col items-center text-sm py-10 px-6 h-48 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <div className="1 flex"> 
        <img aria-hidden="true" src={report} focusable="false" data-prefix="fas" className="w-20 h-20 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"/>
        </div>
       <div className="2 flex"><span className="text-xl  text-white font-bold py-5">Report Verification</span></div>
        
      </a>
    </li>  
  </ul>
</div>
</div>
<button className="fixed right-0 float-right mx-5 my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Log Out
  {/* <Link to="/login"></Link> */}
</button>
</>
  )
}
