import React from 'react'
import { Link } from 'react-router-dom'
export default function CompanyDetails() {
  return (
      <>
    <section class="text-gray-600 body-font ">
  <div class="container px-3 py-20 mx-auto flex flex-wrap ">
    <div class="flex flex-wrap -m-4">
    <div class="pl-72 lg:w 1/2 md:w-full">
        <div class="w-3/4 flex border-2 shadow-2xl rounded-lg border-gray-200 border-opacity-50 p-6 mr-5 sm:flex-row flex-col">
          <div class="flex-grow">
            <h2 class="text-gray-50 text-2xl title-font font-medium mb-3">Infosys Pvt Ltd, Chennai
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" class="w-10 h-10 ml-2 float-right" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              </h2>
          </div>
        </div>
        <br/>
      </div>
      <div class="pl-72 lg:w 1/2 md:w-full">
        <div class=" w-3/4 flex border-2 shadow-2xl rounded-lg border-gray-200 border-opacity-50 p-6 mr-5 sm:flex-row flex-col">
          <div class="flex-grow">
            <h2 class="text-gray-50 text-2xl title-font font-medium mb-3">Zoho Corporation Ltd, Chennai
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" class="w-10 h-10 ml-2 float-right" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg></h2>
          </div>
        </div>
        <br />
      </div>
      <div class="pl-72 lg:w 1/2 md:w-full">
        <div class=" w-3/4 flex border-2 shadow-2xl rounded-lg border-gray-200 border-opacity-50 p-6 mr-5 sm:flex-row flex-col">
          <div class="flex-grow">
            <h2 class="text-gray-50 text-2xl title-font font-medium mb-3">Cognizant Pvt Ltd, Chennai
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" class="w-10 h-10 ml-2 float-right" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg></h2>
          </div>
        </div>
        <br />
      </div>
      <div class="pl-72 lg:w 1/2 md:w-full">
        <div class="w-3/4 flex border-2 shadow-2xl rounded-lg border-gray-200 border-opacity-50 p-6 mr-5 sm:flex-row flex-col">
          <div class="flex-grow">
            <h2 class="text-gray-50 text-2xl title-font font-medium mb-3">Accenture Info Ltd, Chennai
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" class="w-10 h-10 ml-2 float-right" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg></h2>
          </div>
        </div>
        <br />
      </div>
      <div class="pl-72 lg:w 1/2 md:w-full">
        <div class="w-3/4 flex border-2 shadow-2xl rounded-lg border-gray-200 border-opacity-50 p-6 mr-5 sm:flex-row flex-col">
          <div class="flex-grow">
            <h2 class="text-gray-50 text-2xl title-font font-medium mb-3">Amazon Pvt Ltd, Chennai
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" class="w-10 h-10 ml-2 float-right" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg></h2>
          </div>
        </div>
        <br />
      </div>
      <div class="pl-72 lg:w 1/2 md:w-full">
        <div class="w-3/4 flex border-2 shadow-2xl rounded-lg border-gray-200 border-opacity-50 p-6 mr-5 sm:flex-row flex-col">
          <div class="flex-grow">
            <h2 class="text-gray-50 text-2xl title-font font-medium mb-3">Title Park Pvt Ltd, Chennai
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" class="w-10 h-10 ml-2 float-right" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg></h2>
          </div>
        </div>
        <br/>
      </div>
      <div class="pl-72 lg:w 1/2 md:w-full">
        <div class="w-3/4 flex border-2 shadow-2xl rounded-lg border-gray-200 border-opacity-50 p-6 mr-5 mb-5 sm:flex-row flex-col">
          <div class="flex-grow">
            <h2 class="text-gray-50 text-2xl title-font font-medium mb-3">Olympia Tech Pvt Ltd, Chennai
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" class="w-10 h-10 ml-2 float-right" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg></h2>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded-full " style={{margin:'auto',
  width: '15%',
  padding: '10px',
  }}>
  <Link to="/addcompany">+ Add Company</Link>
</button>
    </div>
  </div>
</section>
</>
)
}