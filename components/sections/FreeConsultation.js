'use client'
import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import PromptConsultation from '@/components/PromptConsultation'

const FreeConsultation = () => {
  const [userError, setUserError] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  })
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

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
      setUserError(true)
    }else{
      setUserError(false)
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
          
          // after email sucfess here shows the prompt for thanks



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
    <div className="FreeConseltation">
      <div className="mainContainer text-center">
        <div className="SubFreeConseltation">
          <div style={{ borderRadius: '10px' }}>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="FreeConseltationInput"
            >
              <div className="FreeConseltationColumn rounded-l-[4px] text-[20px]">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="FreeConseltationColumn text-[20px] leading-[35px] ">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="FreeConseltationColumn text-[20px] leading-[35px]">
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                value="Send"
                className="FreeConseltationColumn rounded-r-[4px] text-[#ECA33A] bg-[#231F20] hover:text-white hover:bg-[#ECA33A] leading-[35px] text-[20px] raleway transition ease-in-out delay-150 hover:border-[#ECA33A]"
               
              >
                Consult Now
              </button>
              {/* {showModal && <PromptConsultation closeModal={closeModal} />} */}
            </form>
            {userError && (
                <p style={{ color: 'red' }}>Please fill out the form</p>
              )}
          </div>
        </div>
        <div className="flex justify-center mt-[8px]">
          <div className="flex max-[780px]:flex-col justify-center items-center">
            <p className="px-[2px] font-bold py-[5px] text-white text-[20px] raleway">
              Or get availability via
            </p>
            <a className="flex" href="https://wa.me/+971557969234">
              <img
                alt="none"
                className="mx-[10px] w-[30px] h-full"
                src="/whatsappIcon.svg"
              />
              <p className="px-[2px] font-bold py-[5px] text-[#ECA33A] text-[20px] raleway">
                {' '}
                WhatsApp{' '}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FreeConsultation
