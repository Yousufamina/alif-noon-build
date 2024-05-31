'use client'

import React  from 'react'
import Prod from '@/components/Prod';

const PropertyDetail = () => {
  // const [propertyData, setPropertyData] = useState([]);
  // const {id} = useParams ()
  // let dataObj = {'_id': id}

  // const fetchData = async () => {
  //   const response = await axios.post('http://localhost:3000/GetFilteredData', dataObj ,{
  //     headers: {'Content-Type': 'application/json'}
  //   });
  //   // const response = await axios.post('https://alifnoon.ae/GetFilteredData', dataObj ,{
  //   //   headers: {'Content-Type': 'application/json'}
  //   // });
  //   console.log("response")
  //   let data = response.data
  //   setPropertyData(data.data)
  // }
  // fetchData()
  
  return (
    <>
        <Prod/>
    </>
  )
}

export default PropertyDetail