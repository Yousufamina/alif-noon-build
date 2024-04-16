import React from 'react'
import { Form } from 'antd'
import Link from 'next/link'

function PromptConsultation({ closeModal }) {
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
              <p className="leading-[52px] mb-2 raleway uppercase drop-shadow-md  text-[45px]">
                Prompt Consulation
              </p>
              <p className="text-2xl">
                Fill form below and our agent will contact you shortly
              </p>
              <Form>
                <div className="mt-10 formFields justify-between flex">
                  <div className="">
                    <label>
                      <div class="relative h-11 w-full min-w-[200px]">
                        <input
                          placeholder="Your Name"
                          class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                      </div>
                    </label>
                  </div>
                  <div className="ml-3">
                    <label>
                      <div class="relative h-11 w-full min-w-[200px]">
                        <input
                          placeholder="Your Phone"
                          class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                      </div>
                    </label>
                  </div>
                  <div className="ml-3">
                    <label>
                      <div class="relative h-11 w-full min-w-[200px]">
                        <input
                          placeholder="Your E-mail"
                          class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                      </div>
                    </label>
                  </div>
                  <button
                    type="button"
                    className="px-5 py-1.5 ml-3 border border-[#ECA33A]"
                  >
                    <Link href="#" className="text-[#ECA33A]">
                      SEND
                    </Link>
                  </button>
                </div>
              </Form>
              <div className="flex justify-center mt-[15px]">
                <div className="flex justify-center items-center">
                  <p className="px-[2px] py-[5px] text-white text-[1rem] raleway">
                    Or contact us right now via
                  </p>
                  <a
                    className="flex"
                    href="https://wa.me/+923040602781"
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

export default PromptConsultation
