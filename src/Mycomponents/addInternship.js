import React from 'react'

function AddInternship() {
  return (
    <div >
        <div className='pl-80 py-20'>
        <div><h1 className='text-4xl text-white bold pb-6'>Add Company Details</h1></div>
        <div className='bg-white backdrop-filter backdrop-blur-xl bg-opacity-10 rounded-lg mr-40'>
          <form>
            <div className='flex flex-row'>
            <label className='basis-1/2 bg-transparent ml-20 mt-20 text-white text-lg'>Company Name</label>
            <select className="basis-1/3 form-select bg-transparent border-b-2 w-4/12 mt-20 text-white text-lg leading-tight">
            <option value="Amazon" className="text-black">Amazon</option>
            <option value="Google" className="text-black">Google</option>
            <option value="TCS" className="text-black">TCS</option>
            <option value="Wipro" className="text-black">Wipro</option>
            </select>
            </div>
            {/* <input type="text" className='bg-transparent border-b-2 w-4/12 ml-10 mt-10 text-white text-lg' ></input> */}
            <br></br>
            <div className='flex flex-row'>
            <label className='basis-1/2 break-all bg-transparent ml-20 mt-10 text-white text-lg'>Internship Name</label>
            <input type="text" className='basis-1/3 bg-transparent border-b-2 w-4/12 mt-10 text-white text-lg' ></input>
            </div>
            <br></br>
            <div className='flex flex-row'>
            <label className='basis-1/2 bg-transparent ml-20 mt-10 text-white text-lg'>Start Date</label>
            <input type="text" className='basis-1/3 bg-transparent border-b-2 w-4/12 mt-10 text-white text-lg' ></input>
            </div>
            <br></br>
            <div className='flex flex-row'>
            <label className='basis-1/2 bg-transparent ml-20 mt-10 text-white text-lg'>End Date</label>
            <input type="text" className='basis-1/3 bg-transparent border-b-2 w-4/12 mt-10 text-white text-lg' ></input>
            </div>
            <br></br>
            <div className='flex flex-row'>
            <label className='basis-1/2 bg-transparent ml-20 mt-10 text-white text-lg'>Duration</label>
            <input type="text" className='basis-1/3 bg-transparent border-b-2 w-4/12 mt-10 text-white text-lg' ></input>
            </div>
            <br></br>
            <div className='flex flex-row'>
            <label className='basis-1/2 bg-transparent ml-20 mt-10 text-white text-lg'>Domain</label>
            <select className='basis-1/3 form-select bg-transparent border-b-2 w-4/12 mt-10 text-white text-lg leading-tight'>
              <option value="Web Development" className="text-black">Web Development</option>
              <option value="Mobile App Development" className="text-black">Mobile App development</option>
              <option value="Tyre MAnufacture" className="text-black">Tyre Manufacture</option>
              <option value="IoT" className="text-black">IoT</option>
            </select>
            </div>
            {/* <input type="text" className='bg-transparent border-b-2  w-4/12 ml-10 mt-10 text-white text-lg' ></input> */}
            <br></br>
            <div className='flex flex-row'>
            <label className='basis-1/2 bg-transparent ml-20 mt-10 text-white text-lg'>Stipend (per Month)</label>
            <input type="text" className='basis-1/3 bg-transparent border-b-2 w-4/12 text-white text-lg' ></input>
            </div>
            <br></br>
            <div className='flex flex-row'>
            <label className='basis-1/2 bg-transparent ml-20 mt-10 text-white text-lg'>Trainee Type (Student/Faculty)</label>
            <select className="basis-1/3 form-select bg-transparent border-b-2 w-4/12 mt-10 text-white text-lg leading-tight">
            <option value="Student" className="text-black">Student</option>
            <option value="Faculty" className="text-black">Faculty</option>
            </select>
            </div>
            {/* <input type="text" className='bg-transparent border-b-2 w-4/12 ml-10 mt-10 text-white text-lg' ></input> */}
            <br></br>
            <div className='flex flex-row'>
            <label className='basis-1/2 bg-transparent ml-20 mt-10 text-white text-lg'>Requirement (No of Students)</label>
            <input type="text" className='basis-1/3 bg-transparent border-b-2 w-4/12 text-white text-lg' ></input>
            </div>
            <br></br>
            <div className='flex flex-row pb-20'>
            <label className='basis-1/2 bg-transparent ml-20 mt-10 text-white text-lg'>Pre-requisites</label>
            <input type="text" className='basis-1/3 bg-transparent border-b-2 w-4/12 text-white text-lg' ></input>
            </div>
          </form>
        </div>
        </div>
    </div>
      
  )
} 

export default AddInternship