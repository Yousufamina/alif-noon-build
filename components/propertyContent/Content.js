"use client"

import { Button } from "antd";
import React from "react";
import { Select, Space } from "antd";
const items = [
  {
    value: "usd",
    label: "USD",
  },
  {
    value: "aed",
    label: "AED",
  },
  {
    value: "pkr",
    label: "PKR",
  },
];
const handleChange = (value) => {
    // console.log(`selected ${value}`);
  };

const Content = ({
  title,
  price,
  location,
  propertyType,
  bedrooms,
  baths,
  sqrft,
}) => {
  return (
    <div className="propertyContent">
      <h1>{title}</h1>
      <div className="price_icons flex justify-between">
        <div className="price flex items-center">
          <h2>{price}</h2>      
        <Select
        defaultValue="USD"
        style={{
            width: '75px',
            marginLeft:'10px'
        }}
        onChange={handleChange}
        options={items}
        />
        </div>
        <div className="icons flex">
          <img src="/comparisionIcon.svg" className="mr-[4]" />
          <img src="/saveIcon.svg" />
        </div>
      </div>
      <div className="flex atributes raleway justify-between">
        <div className="inner1 flex">
          <div className="flex">
            <img className="mt-[5px] h-[18px]" src="/pinVector.png" />
            <h5>{location}</h5>
          </div>
          <div className="flex">
            <h5>{propertyType}</h5>
          </div>
          <div className="flex">
            <img src="/saveIcon.svg" />
            <h5>{bedrooms}</h5>
          </div>
          <div className="flex">
            <img src="/saveIcon.svg" />
            <h5>{baths}</h5>
          </div>
          <div className="flex">
            <img src="/saveIcon.svg" />
            <h5>{sqrft}</h5>
          </div>
        </div>
        <div className="inner2">
          <div className="flex">
            <Button className="box">sq.ft</Button>
            <Button className="box">sq.m</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
