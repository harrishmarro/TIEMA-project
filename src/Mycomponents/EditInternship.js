import React from "react";
// import { MdEdit } from "react-icons/md";

 function Edit(){
    return (
    <div>
        <div className='pl-80 py-10'>   
        <div className="text-white bold">
            <h1 className='text-4xl pb-6'>Edit intership details</h1>
            <h1 className="text-2xl">ABC COMPANY, COIMBATORE BRANCH</h1>
            <h2>Summer Intern</h2>
        </div>
        <div className='bg-white backdrop-filter backdrop-blur-xl bg-opacity-10 rounded-lg mr-40'>
                <div className="flex flex-row w-11/12 ml-10 mt-10 text-white text-lg pt-9">
                    <h3 className="basis-1/3">End Date</h3>
                    <h3 className="basis-1/3"> - </h3>
                    <h3 className="basis-1/3">March 18,2022</h3>
                </div>

                <div className="flex flex-row w-11/12 ml-10 mt-10 text-white text-lg">    
                    <h3 className="basis-1/3">Start Date</h3>
                    <h3 className="basis-1/3"> - </h3>
                    <h3 className="basis-1/3">May 20,2022</h3>
                </div>

                <div className="flex flex-row w-11/12 ml-10 mt-10 text-white text-lg">    
                    <h3 className="basis-1/3">Duration</h3>
                    <h3 className="basis-1/3"> - </h3>
                    <h3 className="basis-1/3">2 months</h3>
                </div>

                <div className="flex flex-row w-11/12 ml-10 mt-10 text-white text-lg">    
                    <h3 className="basis-1/3">Domain</h3>
                    <h3 className="basis-1/3"> -  </h3>
                    <h3 className="basis-1/3">Blockchain</h3>
                </div>

                <div className="flex flex-row w-11/12 ml-10 mt-10 text-white text-lg">    
                    <h3 className="basis-1/3">Stipend</h3>
                    <h3 className="basis-1/3"> -  </h3>
                    <h3 className="basis-1/3">Rs. 10000</h3>
                </div>

                <div className="flex flex-row w-11/12 ml-10 mt-10 text-white text-lg">    
                    <h3 className="basis-1/3">Trainee Type</h3>
                    <h3 className="basis-1/3"> -  </h3>
                    <h3 className="basis-1/3">Students</h3>
                </div>

                <div className="flex flex-row w-11/12 ml-10 mt-10 text-white text-lg">    
                    <h3 className="basis-1/3">Requirement</h3>
                    <h3 className="basis-1/3"> -  </h3>
                    <h3 className="basis-1/3">25 Students</h3>
                </div>

                <div className="flex flex-row w-11/12 ml-10 mt-10 text-white text-lg pb-9">    
                    <h3 className="basis-1/3">Pre-Requisites</h3>
                    <h3 className="basis-1/3"> -  </h3>
                    <h3 className="basis-1/3">Fundamentals of Blockchain</h3>
                </div>
        </div>
            <button className="mx-5 my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">SAVE</button>
            <button className="mx-5 my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">CANCEL</button>
        </div>
    </div>
    );
}

export default Edit;