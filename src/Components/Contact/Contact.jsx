import React from 'react'

export default function Contact() {
  return <>
  
  <div className="contact py-5">

  <div className='text-center pt-4 adress ' >
        <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>conatct section</h2>
      
    </div>
    <div className='bars'>
        <div className='bar me-3' ></div>
        <i class="fa-solid fa-star" ></i>
        <div className='bar ms-3'></div>

    </div>
    <form className='w-50 p-3 mx-auto mt-5 ng-valid ng-touched ng-submitted ng-dirty'>
        <input type="text" className='form-control mb-4' placeholder='userName'/>
        <input type="text" className='form-control mb-4' placeholder='userAge'/>
        <input type="text" className='form-control mb-4' placeholder='userEmail'/>
        <input type="text" className='form-control mb-4' placeholder='userPassword'/>

        <button type="button" class="btn btn-success"> send Message </button>

    </form>




  </div>
  
  
  
  
  </>
}
