// 'use client'

// import React, { useState } from 'react';
// import { PlusOutlined } from '@ant-design/icons';
// import { Modal, Upload } from 'antd';

// const getBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// const FileUpload = () => {
//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [previewImage, setPreviewImage] = useState('');
//   const [previewTitle, setPreviewTitle] = useState('');
//   const [fileList, setFileList] = useState([ ]);
//   const handleCancel = () => setPreviewOpen(false);
//   const handlePreview = async (file) => {
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj);
//     }
//     setPreviewImage(file.url || file.preview);
//     setPreviewOpen(true);
//     setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
//   };
//   const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
//   const uploadButton = (
//     <div>
//       <PlusOutlined />
//       <div
//         style={{
//           marginTop: 8,
//         }}
//       >
//         Upload
//       </div>
//     </div>
//   );
//   return (
//     <>
//       <Upload
//         action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
//         listType="picture-card"
//         fileList={fileList}
//         onPreview={handlePreview}
//         onChange={handleChange}
//       >
//         {fileList.length >= 8 ? null : uploadButton}
//       </Upload>
//       <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
//         <img
//           alt="example"
//           style={{
//             width: '100%',
//           }}
//           src={previewImage}
//         />
//       </Modal>
//     </>
//   );
// };
// export default FileUpload;

import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const FileUpload = ({ onChange }) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewVisible(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = async ({ fileList }) => {
    // Filter out only the images
    const imageFiles = fileList.filter(file => file.type.includes('image'));
  
    // Convert each image to Base64 format
    const updatedFileList = await Promise.all(imageFiles.map(async (file) => {
      if (!file.url && !file.preview) {
        // Convert image to Base64 if not already done
        file.preview = await getBase64(file.originFileObj);
      }
      return file;
    }));
  
    setFileList(updatedFileList);
    // Pass the fileList to the parent component
    onChange(updatedFileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return (
    <div>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  );
};

export default FileUpload;
