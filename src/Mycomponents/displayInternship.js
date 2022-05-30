import React from "react";

 function App(){
      return (
        <div className='pl-80 py-20'> 
        <button className="right-0 float-right mx-40 my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Edit</button>             <div>
                <div><h1 className='text-4xl text-white bold pb-6'>ABC COMPANY, COIMBATORE BRANCH</h1></div>
            </div>
            <div>
                <div><h2 className='text-4xl text-white bold pb-6'>Summer Intern</h2></div>
            </div>
            <div className='bg-white backdrop-filter backdrop-blur-xl bg-opacity-10 rounded-lg mr-40'>
                <div className="flex flex-row  text-white text-lg px-10 pt-8">
                    <h3 className="basis-1/3">Start Date </h3>
                    <h2 className="basis-1/3">-</h2>
                    <h3 className="basis-1/3">July 20,2022</h3>
                </div>
                <div className="flex flex-row  text-white text-lg px-10 pt-8">
                    <h3 className="basis-1/3">End Date </h3>
                    <h2 className="basis-1/3">-</h2>
                    <h3 className="basis-1/3">August 31,2022</h3>
                </div>
                <div className="flex flex-row  text-white text-lg px-10 pt-8">
                    <h3 className="basis-1/3">Duration</h3>
                    <h2 className="basis-1/3">-</h2>
                    <h3 className="basis-1/3">2 months</h3>
                </div>
                <div className="flex flex-row  text-white text-lg px-10 pt-8">
                    <h3 className="basis-1/3">Domain</h3>
                    <h2 className="basis-1/3">-</h2>
                    <h3 className="basis-1/3">Blockchain</h3>
                </div>
                <div className="flex flex-row  text-white text-lg px-10 pt-8">
                    <h3 className="basis-1/3">Stipend</h3>
                    <h2 className="basis-1/3">-</h2>
                    <h3 className="basis-1/3">Rs. 10000</h3>
                </div>
                <div className="flex flex-row  text-white text-lg px-10 pt-8">
                    <h3 className="basis-1/3">Trainee Type</h3>
                    <h2 className="basis-1/3">-</h2>
                    <h3 className="basis-1/3">Students</h3>
                </div>
                <div className="flex  flex-row text-white text-lg px-10 pt-8">
                    <h3 className="basis-1/3">Requirement</h3>
                    <h2 className="basis-1/3">-</h2>
                    <h3 className="basis-1/3">25 Students </h3>
                </div>
                <div className="flex  flex-row  text-white text-lg px-10 pt-8 pb-8">
                    <h3 className="basis-1/3">Pre-Requisites</h3>
                    <h2 className="basis-1/3">-</h2>
                    <h3 className="basis-1/3">Fundamentals of Blockchain</h3>
                </div>
            </div>
            <button className="object-bottom mx-96 my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
               Approve Student/Faculty List
            </button>
        </div>  
    );
}
export default App;

