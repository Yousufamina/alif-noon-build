import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
// import { Form } from 'antd'
// import Link from 'next/link'
// import PromptThanksConsultation from '@/components/PromptThanksConsultation'

function PromptConsultation({ closeModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  })
  // const [showPromptModal, setShowPromptModal] = useState(false)


  // const closePromptModal = () => {
  //   setShowPromptModal(false)
  // }

  const form = useRef()
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name == '' || formData.email == '' || formData.phoneNumber == ''){
      
    }else{
      // Send formData as a message using emailjs
      emailjs
      .sendForm(
        'service_y7n5bh3',
        'template_2dy764k',
        form.current,
        'DvNf_xZQEKCCfTPrU'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text)   
          closeModal()
          // after email sucfess shows the prompt for thanks
          // setShowPromptModal(true)
          // Optionally, reset form fields after successful submission
          setFormData({
            name: '',
            email: '',
            phoneNumber: '',
          })


        },
        (error) => {
          console.error('Email sending failed:', error.text)
        }
      )
    }   
  }


  return (
    <div
      className="fixed p-6 md:p-0 left-0 top-0 z-[1055] h-full w-full flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <div
        className=" p-9 relative w-full md:w-auto  opacity-100 transition-all duration-300 ease-in-out min-[576px] mx-auto mt-7  bg-[#272626] rounded-md border-none shadow-4 outline-none dark:bg-surface-dark"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end cursor-pointer" onClick={closeModal}>
          <img className="" src="/closeicon.svg" width={30} height={30} />
        </div>
        <main className="PromtConsultationForm">
          <div className="mainContainer">
            <div className="formBox">
              <p className="leading-[52px] mb-2 raleway uppercase drop-shadow-md  text-[20px] md:text-[35]">
                Prompt Consulation
              </p>
              <p className="text-lg md:text-2xl">
                Fill form below and our agent will contact you shortly
              </p>
              <form 
              ref={form}
              onSubmit={handleSubmit}>
                <div className="mt-6 md:mt-10 formFields flex flex-col md:flex-row md:justify-between">
                  <div className="ml-3">
                    <label>
                      <div class="relative h-11 w-full min-w-[200px]">
                        <input
                          type="text"
                          required
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="h-11 w-full min-w-[200px] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
                        />
                      </div>
                    </label>
                  </div>
                  <div className="ml-3">
                    <label>
                      <div class="relative h-11 w-full min-w-[200px]">
                        <input
                          type="text"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          required
                          className="h-11 w-full min-w-[200px] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
                        />
                      </div>
                    </label>
                  </div>
                  <div className="ml-3">
                    <label>
                      <div class="relative h-11 w-full min-w-[200px]">
                        <input
                         type="email"
                         name="email"
                         placeholder="Your Email"
                         value={formData.email}
                         onChange={handleInputChange}
                         required
                         className="h-11 w-full min-w-[200px] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
                        />
                      </div>
                    </label>
                  </div>
                  <div className="ml-3 md:ml-0">
                    <button
                      type="submit"
                      value="Send"
                      className="w-full mt-4 md:mt-0 md:w-auto px-5 py-1.5 border border-[#ECA33A] md:ml-3"
                    >
                      {/* <Link href="#" className="text-[#ECA33A]"> */}
                        SEND
                      {/* </Link> */}
                    </button>
                   
                  </div>
                </div>
              </form>
              <div className=" md:flex md:justify-center mt-6 md:mt-[15px]">
                <p className="text-white text-sm md:text-base raleway">
                  Or contact us right now via
                </p>

                <a
                  className=" ml-1 flex justify-center   md:ml-2"
                  href="https://wa.me/+971557969234"
                  target="_blank"
                >
                  <img alt="none" src="/whatsappIcon.svg" />
                  <p className="ml-2 md:ml-1 mt-1 md:mt-0 text-[#ECA33A] text-sm md:text-base raleway">
                    WhatsApp
                  </p>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PromptConsultation
