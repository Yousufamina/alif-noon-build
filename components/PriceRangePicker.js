import React, { useState } from 'react';
import { Slider, InputNumber, Row, Col, Dropdown, Input } from 'antd';

function PriceRangePicker() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedValue, setSelectedValue] = useState('Price Range');
  // selectedValue.style.color = "gray";
  const handlePriceChange = (value) => {
    setPriceRange(value);
    setSelectedValue(`$${value[0]} - $${value[1]}`);
  };

  const handleMinPriceChange = (value) => {
    setPriceRange([value, priceRange[1]]);
    setSelectedValue(`$${value} - $${priceRange[1]}`);
  };

  const handleMaxPriceChange = (value) => {
    setPriceRange([priceRange[0], value]);
    setSelectedValue(`$${priceRange[0]} - $${value}`);
  };

  const menu = (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Slider
            range
            min={0}
            max={1000}
            step={10}
            value={priceRange}
            onChange={handlePriceChange}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={priceRange[1]}
            value={priceRange[0]}
            onChange={handleMinPriceChange}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={priceRange[0]}
            max={1000}
            value={priceRange[1]}
            onChange={handleMaxPriceChange}
          />
        </Col>
      </Row>
    </div>
  );

  return (
    <div>
      <h1>Price Range Picker</h1>
      <Dropdown overlay={menu} trigger={['click']}>
        <Input
          className={`rangePickerInputPlaceholder`}
          style={{color: 'black !important'}}
          value={selectedValue}
          readOnly
          suffix={<span className="ant-input-suffix">▼</span>}
        />
      </Dropdown>
    </div>
  );
}

export default PriceRangePicker;
