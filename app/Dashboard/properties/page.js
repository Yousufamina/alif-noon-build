"use client"

import React from 'react';
import { Space, Table, Tag } from 'antd';
// import { useSelector } from 'react-redux'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Bedrooms',
    dataIndex: 'bedrooms',
    key: 'room',
  },
  {
    title: 'Catagory',
    key: 'category',
    dataIndex:'category',
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
const data = [
  {
    key: '1',
    name: 'John Brown',
    phone: 32,
    room: 32,
    typesNCatagory: 'Duplexes Penthouse',
    featuresNAmenities: 'Shared gym kitchen',
    location:'Dubai'
  },
  {
    key: '2',
    name: 'Jim Green',
    phone: 32,
    room: 32,
    typesNCatagory: 'Vila Duplexes',
    featuresNAmenities: 'Shared gym kitchen',
    location:'Abu dhabi'
  },
  {
    key: '3',
    name: 'Joe Black',
    phone: 32,
    room: 32,
    typesNCatagory: 'Duplexes Penthouse',
    featuresNAmenities: 'Shared gym kitchen',
    location:'Sharja'
  },
];
// const App = () => <Table columns={columns} dataSource={data} />;
// export default App;

 function Properties() {
  
  return (
    <div className="AddProperty raleway">
      <div className="content py-[9px] px-[14px] bg-[#231F20] flex flex-wrap">
        <div class="max-w-100 py-10 px-5 m-auto w-full">
        <div style={{letterSpacing:'2px'}} class="text-[#ECA33A] font-bold text-2xl mb-[28px] text-left ">
            Property Listing
          </div>
    <Table style={{background:'transparent'}} columns={columns} dataSource={data} /> 
    </div>
    </div>
    </div>
  )
}

export default Properties