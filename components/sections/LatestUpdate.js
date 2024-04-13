import React from 'react'
import Image from 'next/image'
import { Row,Col } from 'antd'
import Link from 'next/link'

function LatestUpdate() {
  return (
    <> 
        <main className='h-[auto] relative w-full align-center justify-center latestUpdateSection'>
        <div className='mainContainer'>
          <Row className='justify-center'> 
          <Col className='grid' md={12} xs={24}>
          <h1 className="text-center uppercase leading-[55px] raleway font-semibold text-[50px] mb-3 text-[#ECA33A]">
                Latest Updates
              </h1>
              <p className="mb-[20px] text-center text-white raleway-light  text-[25px]">
                Our team constantly share the lates news of life, the real estate, market and important events.
              </p>
          </Col>
          </Row>
          <br />
        <Row className="flex overflow-auto barlow max-[780px]:flex-col justify-between secRow">
          
            <Col md={8} sm={24} className='mb-10 latestUpdateBox'>
              <div className='dateBox'>
                  <h3>23 <br/> MAR</h3>
                  <img src='/squareIcon.svg' /> 
              </div>
            <Image className='min-w-[100px]' width={500} height={500} src="/Buysell5.svg"></Image>
            <div className='absolute absoluteLayer text-[16px]'>
                  <h4> THE NEW MASTER PLAN VISION BY NAKHEEL AND RECORD GROWTH IN NON-OIL TRADE The new master plan vision for 5 artificial Dubai Islands (Deira Islands) was unveiled by Nakheel
                    Total area – 17km²</h4>
                  <Link href="#" className='text-[1em] font-extrabold text-black'> READ MORE </Link> 
                </div>
            </Col>
            <Col md={7} sm={25} className='mb-10 latestUpdateBox'>
              <div className='dateBox'>
                  <h3>6 <br/> AUG</h3>
                  <img src='/squareIcon.svg' /> 
              </div>
              <Image width={500} className='centerImage' height={700} src="/Buysell4.svg"></Image>
              <div className='absolute absoluteLayer pt-[23px] text-[15px]'>
                  <h4> THE NEW MASTER PLAN VISION BY NAKHEEL AND RECORD GROWTH IN NON-OIL TRADE The new master plan vision for 5 artificial Dubai Islands (Deira Islands) was unveiled by Nakheel
                    Total area – 17km²</h4><Link href="#" className='text-[1em] font-extrabold text-black'> READ MORE </Link> 
                </div>
            </Col>
            <Col md={8} sm={24} className='mb-10 latestUpdateBox'>
              <div className='dateBox'>
                  <h3>6 <br/> AUG</h3>
                  <img src='/squareIcon.svg' /> 
              </div>
              <Image className='min-w-[100px]' width={500} height={500} src="/Buysell3.svg"></Image>
              <div className='absolute absoluteLayer text-[16px]'>
                  <h4> THE NEW MASTER PLAN VISION BY NAKHEEL AND RECORD GROWTH IN NON-OIL TRADE The new master plan vision for 5 artificial Dubai Islands (Deira Islands) was unveiled by Nakheel
                    Total area – 17km²</h4>
                  <Link href="#" className='text-[1em] font-extrabold text-black'> READ MORE </Link> 
                </div>
            </Col>
        </Row> 
        <div className='secondRow'> 
            <div className='latestUpdateBox'>
              <div className='dateBox'>
                  <h3>23 <br/> MAR</h3>
                  <img src='/squareIcon.svg' /> 
              </div>
              <Image className='min-w-[100px]' width={700} height={500} src="/Buysell2.svg"></Image>
              <div className='absolute absoluteLayer secondCol text-[16px]'>
                  <h4> THE NEW MASTER PLAN VISION BY NAKHEEL AND RECORD GROWTH IN NON-OIL TRADE The new master plan vision for 5 artificial Dubai Islands (Deira Islands) was unveiled by Nakheel
                    Total area – 17km²</h4>
                  <Link href="#" className='text-[1em] font-extrabold text-black'> READ MORE </Link> 
                </div>
            </div>
              <div className='latestUpdateBox max-[768px]:mt-[-10px]'>
                <div className='dateBox'>
                    <h3>7 <br/> JAN</h3>
                    <img src='/squareIcon.svg' /> 
                </div>
                <Image className='min-w-[100px] ' width={700} height={500} src="/Buysell1.svg"></Image>
                <div className='absolute absoluteLayer secondCol text-[16px]'>
                    <h4> THE NEW MASTER PLAN VISION BY NAKHEEL AND RECORD GROWTH IN NON-OIL TRADE The new master plan vision for 5 artificial Dubai Islands (Deira Islands) was unveiled by Nakheel
                      Total area – 17km²</h4>
                    <Link href="#" className=' text-[1em] font-extrabold text-black'> READ MORE </Link> 
                  </div>
            </div>
          
        </div>
        </div>
        <Image className="w-[50%] seperaterVector" height={100} width={100} src="/vector.svg" />
        </main>  
    </>
  )
}

export default LatestUpdate