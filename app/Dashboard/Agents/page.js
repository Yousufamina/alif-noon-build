"use client"

import React , {useState }from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Field',
    dataIndex: 'field',
    key: 'field',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
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
    field: 'Marketing',

  },
  {
    key: '2',
    name: 'Ahmed',
    phone: 32,
    field: 'Sales Manager',
  },
  {
    key: '3',
    name: 'Bin Qasim',
    phone: 32,
    field: 'Developer',
  },
];
// const App = () => <Table columns={columns} dataSource={data} />;
// export default App;

function Agents() {

  const [agentData, setAgentData] = useState([])
  const fetchData = async () => {
    await fetch('http://localhost:3000/GetAgentData')
    // await fetch('http://localhost:3000/GetAgentData')
    // await fetch('https://alifnoon.ae/GetAgentData')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setAgentData(data.data);
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
            Agent Listing
          </div>
    <Table style={{background:'transparent'}} columns={columns} dataSource={agentData} /> 
    </div>
    </div>
    </div>
  )
}
export default Agents;