'use client'

import React from 'react'
import bcrypt from 'bcryptjs'
import { useState } from 'react'
import axios from 'axios'

function LoginPage() {
  const [email, SetEmail] = useState(' ')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userError, setUserError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

  const loginValidation = async (e) => {
    e.preventDefault()
    setPasswordError(false)
    setUserError(false)
    // const salt = bcrypt.genSaltSync(10)
    // const hashedPassword = bcrypt.hashSync(password, salt)
    // console.log(hashedPassword)
    let obj = { username: username, password: password }
    const userResData = await axios.post(
      `${SERVER_URL}GetAdminUser`,
      obj
    )
    let userData = userResData.data;
    if (userData) {
      const isValid = bcrypt.compareSync(password, userData.password)
      if (isValid) {
        const payload = {
          userInfo: userData
        };
        localStorage.setItem('loginUserDetails', JSON.stringify(payload));
        window.location.href = '/Dashboard/properties'
      } else {
        setPasswordError(true)
      }
    } else {
      setUserError(true)
    }

  }

  return (
    <div className="LoginPage bg-cover bg-center bg-fixed">
      <div className="h-screen flex justify-center items-center">
        <div className="bg-transparent mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-[30%]">
          {/* <h1 className="text-6xl raleway font-bold mb-8 text-center">Login</h1> */}
          <img
            alt="none"
            className="m-auto w-[220px] h-[150px]"
            src="/Alif Noon Logo Header Logo.gif"
          />
          <form className="mt-[40px]">
            <div className="mb-4">
              <label
                className="text-left block text-[18px] font-semibold text-gray-300 mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                style={{
                  backdropFilter: 'blur(10px)',
                  background: 'transparent',
                }}
                className="border raleway text-[20px] rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
              {userError && (
                <p style={{ color: 'red' }}>Please enter valid username</p>
              )}
            </div>
            <div className="mb-4 flex flex-col">
              <label
                className="text-left raleway text-[18px] block font-semibold text-gray-300 mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                style={{
                  backdropFilter: 'blur(10px)',
                  background: 'transparent',
                }}
                className="border rounded-lg w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none text-[20px] focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <p style={{ color: 'red' }}>Please enter valid password</p>
              )}
              <a
                className="text-center text-white hover:text-[#ECA33A]"
                href="#"
              >
                Forgot your password?
              </a>
            </div>
            <div className="flex justify-center w-full justify-center">
              <button
                // href={buttonDisabled ? "/Dashboard/properties" : ""}
                style={{
                  border: '1px solid white',
                  transition: 'all ease 0.5s',
                }}
                className="m-auto mb-6 w-[100%] bg-[#231F20] hover:bg-[#ECA33A] text-white font-bold py-2 px-4 rounded-lg focus:outline-none text-center raleway focus:shadow-outline disabled"
                onClick={(e) => loginValidation(e)}
                // type="button"
                aria-disabled
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
