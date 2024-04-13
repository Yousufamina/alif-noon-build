// import React from 'react';
// import { Select } from 'antd';

// const { Option } = Select;

// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };

// const SelectInput = ({placeholder, options}) => (
//   <Select
//     mode="tags"
//     style={{
//       width: '100%',
//       borderRadius: 0,
//       height: '44px',
      
//     }}
//     className='selectInput'
//     onChange={handleChange}
//     tokenSeparators={[',']}
//     placeholder={placeholder}
//   >
//     {options.map((option) => (
//       <Option key={option.value} value={option.value}>
//         {option.label}
//       </Option>
//     ))}
//   </Select>
// );

// export default SelectInput;


import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SelectInput = ({ placeholder, options, onChange }) => {
  const handleChange = (value) => {
    if (onChange) {
      onChange(value); // Call the onChange callback with the selected value(s)
    }
  };

  return (
    <Select
      mode="tags"
      style={{
        width: '100%',
        borderRadius: 0,
        height: '44px',
      }}
      className='selectInput'
      onChange={handleChange}
      tokenSeparators={[',']}
      placeholder={placeholder}
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default SelectInput;
