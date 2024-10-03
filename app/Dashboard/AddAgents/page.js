"use client"

import React ,{ useState }from 'react'
import { Form } from "antd";
import FileUpload from "@/components/FileUpload";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

function AddAgent() {
  
  const [formData, setFormData] = useState({});
  
  const onFinish = async (values) => {
    try {

      const modifiedFileUpload = values.fileUpload.map(file => ({
        name: file.name,
        preview: file.preview,
        thumbUrl: file.thumbUrl
      }));

      values.fileUpload = modifiedFileUpload;

      if(values.name && values.description  && values.field && values.phone && values.email && values.language){
        toast.info('Adding Your Data..');
        setFormData(values);
        var dataObj=values;
        localStorage.setItem('dataObj', dataObj);
        await axios.post(`${SERVER_URL}AddAgentApi`, dataObj ,{
          headers: {'Content-Type': 'application/json'}
        }).then(response => {
              toast.success('Agent Added Successfully!');
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
      }
      else{
        toast.error('Please add all fields!');
      }
      
    } catch (error) {
      // Handle fetch error
      console.error('Error:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  const handleReset = (e)=>{
    e.preventDefault();
    window.location.reload();
  }
  return (
    <div className="AddProperty raleway">
      <div className="content py-[9px] px-[14px] bg-[#231F20] flex flex-wrap">
        <div class="max-w-100 py-10 px-5 m-auto w-full">
          <div style={{letterSpacing:'2px'}} class="uppercase text-[#ECA33A] font-bold text-2xl mb-[28px] text-left ">
            Add Agent from here
          </div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Form onFinish={onFinish}>
            <div className="grid grid-cols-3 mb-3 gap-6 max-w-90 m-auto">
              <div class="col-span-2 lg:col-span-1">
                <label for="type" className="text-[15px] text-white">
                  Name
                </label>
                <Form.Item name='name'>
                <input
                  type="text"
                  required
                  style={{borderRadius:'6px',
                  border:'1px solid #ECA33A'
                }}
                  className="mt-2 transition  outline-none focus:border-[#cecece] ease-out bg-transparent text-white border-solid border-gray-400 py-2 px-3 text-[15px] w-full"
                  placeholder="Name"
                />
                </Form.Item>
              </div>

              <div class="col-span-2 lg:col-span-1">
                <label for="description" className="text-[15px] mb-6 text-white">
                  Description
                </label>
                <Form.Item name='description'>
                <input
                  type="text"
                  required
                  name="description"
                  style={{borderRadius:'6px',
                  border:'1px solid #ECA33A'
                }}
                  className="mt-2 transition  outline-none focus:border-[#cecece] ease-out bg-transparent text-white border-solid border-gray-400 py-2 px-3 text-[15px] w-full"
                  placeholder="Description here"
                />
                </Form.Item>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <label for="field" className="text-[15px] mb-6 text-white">
                  Fields
                </label>
                <Form.Item name='field'>
                <input
                  type="text"
                  required
                  name="field"
                  style={{borderRadius:'6px',
                  border:'1px solid #ECA33A'
                }}
                  className="mt-2 transition  outline-none focus:border-[#cecece] ease-out bg-transparent text-white border-solid border-gray-400 py-2 px-3 text-[15px] w-full"
                  placeholder="Working Fields"
                />
                </Form.Item>
              </div>

              <div class="col-span-2 lg:col-span-1">
                <label for="email" className="text-[15px] text-white">
                  Email address
                </label>
                <Form.Item name='email'>
                <input
                  type="text"
                  required
                  name="email"
                  style={{borderRadius:'6px',
                  border:'1px solid #ECA33A'
                }}
                  className="mt-2 transition  outline-none focus:border-[#cecece] ease-out bg-transparent text-white border-solid border-gray-400 py-2 px-3 text-[15px] w-full"
                  placeholder="email"
                /> 
                </Form.Item>       
              </div>

              <div class="col-span-2 lg:col-span-1">
                <label for="location" className="text-[15px] mb-6 text-white">
                    Language
                </label>
                <Form.Item name='language'>
                <input
                  type="text"
                  name="language"
                  style={{borderRadius:'6px',
                  border:'1px solid #ECA33A'
                }}
                  className="mt-2 transition  outline-none focus:border-[#cecece] ease-out bg-transparent text-white border-solid border-gray-400 py-2 px-3 text-[15px] w-full"
                  placeholder="Language"
                />
                </Form.Item>  
              </div>

              <div className="col-span-2 lg:col-span-1">
                <label for="phone" className="text-[15px] mb-6 text-white">
                  Phone Number
                </label>
                <Form.Item name='phone'>
                <input
                  type="text"
                  name="phone"
                  style={{borderRadius:'6px',
                  border:'1px solid #ECA33A'
                }}
                  className="mt-2 transition  outline-none focus:border-[#cecece] ease-out bg-transparent text-white border-solid border-gray-400 py-2 px-3 text-[15px] w-full"
                  placeholder="Phone Number"
                />
                </Form.Item>
              </div>
            </div>
            <label for="image" className="mt-2 text-[16px] mb-2 text-white">
                  Image Upload
            </label>
            <Form.Item name='fileUpload'>
                  <FileUpload />
            </Form.Item>
            <div className="mt-[30px] flex text-left">
                <button
                  style={{ border: "1px solid #ECA33A", borderRadius: "6px" }}
                  className="transition ease-out py-1.5 px-2 hover:bg-[#ECA33A] bg-#231F20 text-white w-full sm:w-24"
                >
                  Submit
                </button>
                <button
                  style={{ border: "1px solid #ECA33A", borderRadius: "6px" }}
                  className="ml-4 transition ease-out py-1.5 px-2 hover:bg-[#ECA33A] hover:text-white bg-white text-[#ECA33A] font-bold w-full sm:w-24"
                  onClick={handleReset}
                >
                  Reset
                </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default AddAgent