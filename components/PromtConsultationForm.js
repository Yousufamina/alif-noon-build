import { Form, Input } from 'antd'
import Link from 'next/link'
import React from 'react'

const PromtConsultationForm = () => {
  return (
    <main className="PromtConsultationForm">
      <div className="mainContainer">
        <div className="formBox">
          <h1>Prompt Consulation</h1>
          <h5>Fill form below and our agent will contact you shortly</h5>
          <Form>
            <div className="formFields justify-between">
              <label>
                <Input
                  type="text"
                  className="max-w-sm"
                  placeholder="Your Name"
                />
              </label>
              <label>
                <Input
                  type="text"
                  className="max-w-sm"
                  placeholder="Your Phone"
                />
              </label>
              <label>
                <Input
                  type="text"
                  className="max-w-sm"
                  placeholder="Your Email"
                />
              </label>
              <button type="button" className="px-10 py-2.5 mr-2">
                <Link href="#" className="text-[#ECA33A]">
                  SEND
                </Link>
              </button>
            </div>
          </Form>
          <div className="flex justify-center mt-[15px]">
            <div className="flex justify-center items-center">
              <p className="px-[2px] py-[5px] text-white text-[1rem] raleway">
                {' '}
                Or get availability via
              </p>
              <a
                className="flex"
                href="https://wa.me/+971557969234"
                target="_blank"
              >
                <img alt="none" src="/whatsappIcon.svg" />
                <p className="px-[2px] py-[5px] text-[#ECA33A] text-[1rem] raleway">
                  {' '}
                  WhatsApp
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PromtConsultationForm
