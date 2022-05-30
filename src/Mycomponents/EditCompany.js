import React from "react";
import { MdEdit } from "react-icons/md";

 function Edit(){
    return (
    <div>
        <div className='pl-80 py-10'>   
        <div className="text-white bold">
            <h1 className='text-4xl pb-6'>Edit Company details</h1>
            <h1 className="text-2xl flex flex-row items-center">ABC COMPANY, COIMBATORE BRANCH<div className="px-2"><MdEdit size="26.3px" /></div></h1>
        </div>
        <div className='bg-white backdrop-filter backdrop-blur-xl bg-opacity-10 rounded-lg mr-40'>
                <div className="flex flex-row w-11/12 ml-10 mt-10 text-white text-lg pt-9">
                    <h3 className="basis-1/3">CIN/TIN Number</h3>
                    <h3 className="basis-1/3"> - </h3>
                    <h3 className="basis-1/3">L21091KA2019OPC1413</h3>
                    <MdEdit size="26.3px" />
                </div>

                <div className="flex flex-row w-11/12 ml-10 mt-10 text-white text-lg">    
                    <h3 className="basis-1/3">Udyog Aadhar</h3>
                    <h3 className="basis-1/3"> - </h3>
                    <h3 className="basis-1/3">3982420568</h3>
                    <MdEdit size="26.3px" />
                </div>

                <div className="flex flex-row w-11/12 ml-10 mt-10 text-white text-lg">    
                    <h3 className="basis-1/3">GST</h3>
                    <h3 className="basis-1/3"> - </h3>
                    <h3 className="basis-1/3">TN2391847</h3>
                    <MdEdit size="26.3px" />
                </div>

                <div className="flex flex-row w-11/12 ml-10 mt-10 text-white text-lg">    
                    <h3 className="basis-1/3">Company Address</h3>
                    <h3 className="basis-1/3"> - </h3>
                    <h3 className="basis-1/3">Sri Sairam Engineering College, West Tambaram, Kanchipuram - 600044</h3>
                    <MdEdit size="26.3px" />
                </div>

                <div className="flex flex-row w-11/12 ml-10 mt-10 text-white text-lg">    
                    <h3 className="basis-1/3">Company SPOC 1 Name</h3>
                    <h3 className="basis-1/3"> -  </h3>
                    <h3 className="basis-1/3">Gokul</h3>
                    <MdEdit size="26.3px" />
                </div>

                <div className="flex flex-row w-11/12 ml-10 mt-10 text-white text-lg">    
                    <h3 className="basis-1/3">Company SPOC 1 Email ID</h3>
                    <h3 className="basis-1/3"> -  </h3>
                    <h3 className="basis-1/3">gokul@gmail.com</h3>
                    <MdEdit size="26.3px" />
                </div>

                <div className="flex flex-row w-11/12 ml-10 mt-10 text-white text-lg pb-9">    
                    <h3 className="basis-1/3">Company SPOC 1 number</h3>
                    <h3 className="basis-1/3"> -  </h3>
                    <h3 className="basis-1/3">7358416777</h3>
                    <MdEdit size="26.3px" />
                </div>
        </div>
            <button className="mx-5 my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">SAVE</button>
            <button className="mx-5 my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">CANCEL</button>
        </div>
    </div>
    );
}

export default Edit;