"use client"

// import React from 'react';
import { useState,useEffect } from "react";
import { Space, Table, Tag } from 'antd';
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Catagory',
    key: 'category',
    dataIndex:'category',
  },
  {
    title: 'Property Type',
    dataIndex: 'propertyType',
    key: 'propertyType',
  },
  {
    title: 'Bedrooms',
    dataIndex: 'bedrooms',
    key: 'room',
  },
  {
    title: 'City',
    dataIndex: 'cities',
    key: 'city',
  },
  {
    title: 'Features & Amenities',
    key: 'feature&Aminities',
    dataIndex:'feature&Aminities',
  },{
    title: 'Location',
    key: 'location',
    dataIndex:'location',
  
    // render: (_, { tags }) => (
    //   <>
    //     {tags.map((tag) => {
    //       let color = tag.length > 5 ? 'geekblue' : 'green';
    //       if (tag === 'loser') {
    //         color = 'volcano';
    //       }
    //       return (
    //         <Tag color={color} key={tag}>
    //           {tag.toUpperCase()}
    //         </Tag>
    //       );
    //     })}
    //   </>
    // ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        {/* {record.name} */}
        <a>Delete</a>
      </Space>
    ),
  },
];

// const App = () => <Table columns={columns} dataSource={data} />;
// export default App;

 function Properties() {
  const [propData, setPropData] = useState([])
  const fetchData = async () => {
    await fetch(`${SERVER_URL}GetData`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setPropData(data.data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
};
  fetchData()

  return (
    <div className="AddProperty raleway">
      <div className="content py-[9px] px-[14px] bg-[#231F20] flex flex-wrap">
        <div class="max-w-100 py-10 px-5 m-auto w-full">
        <div style={{letterSpacing:'2px'}} class="text-[#ECA33A] font-bold text-2xl mb-[28px] text-left ">
            Property Listing
          </div>
    <Table style={{background:'transparent'}} columns={columns} dataSource={propData} /> 
    </div>
    </div>
    </div>
  )
}

export default Properties