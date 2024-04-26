import React from 'react'
import { Form } from 'antd'
import Link from 'next/link'

function PromptThanksConsultation({ closeModal }) {
  return (
    <div
      className="fixed left-0 top-0 z-[1055] h-full w-full flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <div
        className=" p-9 relative w-auto opacity-100 transition-all duration-300 ease-in-out min-[576px] mx-auto mt-7  bg-[#272626] rounded-md border-none shadow-4 outline-none dark:bg-surface-dark"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end cursor-pointer" onClick={closeModal}>
          <img className="" src="/closeicon.svg" width={30} height={30} />
        </div>
        <main className="PromtConsultationForm">
          <div className="mainContainer">
            <div className="formBox">
              <p className="leading-[52px] mb-2 raleway  drop-shadow-md  text-[35px]" style={{color:'white'}} >
                Thanks For Your Consultation
              </p>
              <p className="text-2xl" style={{color:'white'}}>
                Our agent will contact you shortly
              </p>
              
              <div className="flex justify-center mt-[15px]">
                <div className="flex justify-center items-center">
                  <p className="px-[2px] py-[5px] text-white text-[1rem] raleway">
                    Or contact us right now via
                  </p>
                  <a
                    className="flex"
                    href="https://wa.me/+971557969234"
                    target="_blank"
                  >
                    <div className="ml-4 flex cursor-pointer">
                      <img alt="none" src="/whatsappIcon.svg" />
                      <p className="mr-1 px-[2px] py-[5px] text-[#ECA33A] text-[1rem] raleway">
                        WhatsApp
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PromptThanksConsultation
