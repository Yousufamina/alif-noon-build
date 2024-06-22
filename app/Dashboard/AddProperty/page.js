"use client"

import React, { useState, useEffect } from "react";
import AdminNavbar from "@/components/adminComponents/Navbar/AdminNavbar";
import Sidebar from "@/components/adminComponents/Sidebar/Sidebar";
import { catagorypuchasing, FeaturesAndAminities,bedroomsEnums,uaeCitiesEnums,propertyTypesEnums } from "@/app/utills/enums";
import { Col, Form, Input, Row, Select } from "antd";
import FileUpload from "@/components/FileUpload";
import TextArea from "antd/es/input/TextArea";
// import { useDispatch } from "react-redux";
import { addProperty } from "../../globalStore/features/propertiesSlice"
import { dbConnect } from "@/src/dbConnect";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

// import { useDispatch } from "react-redux";
const { Option } = Select;

function AddProperty() {
  // const dispatch = useDispatch()
  const [formData, setFormData] = useState({});

  const onFinish = async (values) => {
    try {

      const modifiedFileUpload = values.fileUpload.map(file => ({
        name: file.name,
        preview: file.preview,
        thumbUrl: file.thumbUrl
      }));

      values.fileUpload=modifiedFileUpload;

      if(values.name && values.category  && values.cities && values.bedrooms && values.fileUpload && values.propertyType && values.featureAndAminities){
        toast.info('Adding Your Data..');
        setFormData(values);
        var dataObj=values;
        localStorage.setItem('dataObj', dataObj);
        await axios.post(`${SERVER_URL}Api`, dataObj ,{
          headers: {'Content-Type': 'application/json'}
        }).then(response => {
          toast.success('Property Added Successfully!');
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

  const handleImageData=(data)=>{
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }
  
  const handleChange = (value) => {
  };

  const handleReset = (e)=>{
    e.preventDefault();
    window.location.reload();
  }
  return (
    <div className="AddProperty raleway">
      <div className="content py-[9px] px-[14px] bg-[#231F20] flex flex-wrap">
        <div class="max-w-100 py-10 px-5 m-auto w-full">
        <div style={{letterSpacing:'2px'}} class="uppercase text-[#ECA33A] font-bold text-2xl mb-[28px] text-left ">
            Add Property from here
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
          <div className="grid grid-cols-3 gap-y-0 gap-x-6 max-w-90 m-auto">
            <div className="col-span-2 lg:col-span-1">
              <label for="placeName" className="text-[16px] text-white">
                Name
              </label>
              <Form.Item name='name'>
              <input name="name"  required
                style={{borderRadius:'6px',
                border:'1px solid #ECA33A'
              }}
                className="mt-2 transition  outline-none focus:border-[#cecece] ease-out bg-transparent text-white border-solid border-gray-400 py-2 px-3 text-[15px] w-full"
                placeholder="Name"
              />
              </Form.Item>

            </div>
            <div className="col-span-2 lg:col-span-1">
              <label for="propertyType" className="text-[16px] text-white">
                Property Types
              </label>
              <Form.Item name='propertyType'>
              <Select
              placeholder='Select Type' required
                mode="tags"
                // defaultValue="Duplexes"
                style={{
                  width: "100%",
                  borderRadius: '6px',
                  marginTop:'8px',
                  border:"none",
                }}
                className="mt-2 transition outline-none focus:border-[#cecece] ease-out bg-transparent text-white border-solid border-gray-400 py-2 text-[15px] w-full"
                onChange={handleChange}
              
                tokenSeparators={[","]}
              >
                {propertyTypesEnums.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
              </Form.Item>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <label for="type" className="text-[16px] text-white">
                Category
              </label>
              <Form.Item name='category'>
              <Select
                // mode="tags"
                // defaultValue=" "
                style={{
                  width: "100%",
                  borderRadius: '6px',
                  border:"none",
                  marginTop:'8px',
                  height:'40px',
                  // padding:'10px'
                }}
                required
                placeholder='Select Category'
                className="TabSet mt-2 transition outline-none focus:border-[#cecece] ease-out bg-transparent text-white border-solid border-gray-400 py-2 text-[15px] w-full"
                onChange={handleChange}
                tokenSeparators={[","]}
              >
                {catagorypuchasing.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
              </Form.Item>
            </div>

            <div class="col-span-2 lg:col-span-1">
              <label for="price" className="text-[16px] mb-6 text-white">
                Price
              </label>
              <Form.Item name='price'>
              <input name="price"
              required
                type="number"
                style={{borderRadius:'6px',
                border:'1px solid #ECA33A',
                
              }}
                className="mt-2 transition outline-none focus:border-[#cecece] ease-out bg-transparent text-white border-solid border-gray-400 py-2 px-3 text-[15px] w-full"
                placeholder="Price"
              />
              </Form.Item>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <label for="bedrooms" className="text-[16px] mb-6 text-white">
                Bedrooms
              </label>
              <Form.Item name='bedrooms'>
              <input name ="bedrooms" required
                type="string"
                style={{borderRadius:'6px',
                border:'1px solid #ECA33A'
              }}
                className="mt-2 transition  outline-none focus:border-[#cecece] ease-out bg-transparent text-white border-solid border-gray-400 py-2 px-3 text-[15px] w-full"
                placeholder="Number of Rooms"
              />
              </Form.Item>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <label for="area" className="text-[16px] mb-6 text-white">
                Area
              </label>
              <Form.Item name='area'>
              <input name ="area" required
                type="string"
                style={{borderRadius:'6px',
                border:'1px solid #ECA33A'
              }}
                className="mt-2 transition  outline-none focus:border-[#cecece] ease-out bg-transparent text-white border-solid border-gray-400 py-2 px-3 text-[15px] w-full"
                placeholder="Area"
              />
              </Form.Item>
            </div>
  
            <div className="col-span-2 lg:col-span-1">
              <label for="type" className="text-[16px] text-white">
                Features & Amenities
              </label>
              <Form.Item name='featureAndAminities'>
              <Select
              placeholder='Select Feature & Aminities'
                mode="tags"
                required
                // defaultValue="Kitchen Appliences"
                style={{
                  width: "100%",
                  borderRadius: '6px',
                  marginTop:'8px',
                  border:"none",
                }}
                className="border-[white] border border-solid transition focus:border focus:border-solid outline-none hover:border-[#ECA33A] focus:border-[#ECA33A] ease-out bg-transparent text-white border-solid border-gray-400 py-2 md:text-xl w-full"
                onChange={handleChange}
                tokenSeparators={[","]}
              >
                {FeaturesAndAminities.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
              </Form.Item>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label for="type" className="text-[16px] text-white">
                Cities
              </label>
              <Form.Item name='cities'>
              <Select
                placeholder='Select cities'
                required
                // mode="tags"
                // defaultValue="Dubai"
                style={{
                  width: "100%",
                  borderRadius: '6px',
                  border:"none",
                  marginTop:'8px',
                }}
                className="TabSet border-[white] border border-solid transition focus:border focus:border-solid outline-none hover:border-[#ECA33A] focus:border-[#ECA33A] ease-out bg-transparent text-white border-solid border-gray-400 py-2 md:text-xl w-full"
                onChange={handleChange}
                tokenSeparators={[","]}
              >
                {uaeCitiesEnums.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
              </Form.Item>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label for="location" className="text-[16px] mb-6 text-white">
                Location
              </label>
              <Form.Item name='location'>
              <input name="location"
                type="text"
                required
                style={{borderRadius:'6px',
                border:'1px solid #ECA33A'
              }}
                className="mt-2 transition  outline-none focus:border-[#cecece] ease-out bg-transparent text-white border-solid border-gray-400 py-2 px-3 text-[15px] w-full"
                placeholder="Locations in cities"
              />
              </Form.Item>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <label for="description" className="text-[16px] mb-6 text-white">
                Description
              </label>
              <Form.Item name='description'>
              <textarea 
                name="description" 
                type="string"
                required
                  style={{borderRadius:'6px',
                  border:'1px solid #ECA33A'
                }}
                className="mt-2 transition  outline-none focus:border-[#cecece] ease-out bg-transparent text-white border-solid border-gray-400 py-2 px-3 text-[15px] w-full"
                placeholder="Description" 
                cols="20" rows="3">
              </textarea> 
              </Form.Item>
            </div>      
          </div>
          <Row gutter={15} className="flex mt-[0px] lg:col-span-1">
          <Col lg={12} className="flex-col">
              <label for="type" className="text-[16px] mb-6 text-white">
                Images
              </label>
            </Col> 
          <Col lg={12} className="flex-col">
              <label for="type" className="text-[16px] mb-2 text-white">
                File Upload
              </label>
              <Form.Item name='fileUpload'>
              <FileUpload onChange = {handleImageData}/>
              </Form.Item>
            </Col> 
          </Row>
          
          <div className="mt-[30px] flex text-left">
              <button
                style={{ border: "1px solid #ECA33A", borderRadius: "6px" }}
                className="transition ease-out py-1.5 px-2 hover:bg-[#ECA33A] bg-#231F20 text-white w-full sm:w-24"
              >
                Submit
              </button>

              <button
                style={{ border: "1px solid #ECA33A", borderRadius: "6px" }}
                onClick={handleReset}
                className="ml-4 transition ease-out py-1.5 px-2 hover:bg-[#ECA33A] hover:text-white bg-white text-[#ECA33A] font-bold w-full sm:w-24"
              >
                Reset
              </button>
          </div>

        </Form> 
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
