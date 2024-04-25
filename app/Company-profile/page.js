"use client"
import React from 'react'
import Footer from '@/components/sections/Footer'
import FreeConsultation from '@/components/sections/FreeConsultation'
import Header from '@/components/header/Index'
import { Row,Col } from 'antd'
import SocialIconScroll from '@/components/SocialIconScroll';
import ScrollTopButton from "@/components/ScrollTopButton";

function page() {
  return (
    <div className='CompanyProfileMax'>
    <Header />
    <ScrollTopButton />
    <SocialIconScroll />
    <div className='CompanyProfileSection relative'>
    
        <img className='innerpagesBg' style={{height:'110vh', width:'100%'}} src='/companyProfileBg.png' alt='none' /> 
        <div className='mainContainer off-planContainer pb-[50px]'>
            <div className='absoluteLayer'>
                <h1> OUR </h1>
                <h2>IDENTITY AND MISSION </h2>
                <h3> Empowering Your Journey with Our Values and Vision </h3>
            </div>
            <img style={{ marginBottom:'40px',height:'80px', width:'100%'}} src='/VectorPng.png' alt='none' /> 
            <Row gutter={2}>
                <Col sm={24} md={12}>
                    <div className='flex'>
                        <div  className='InnerPageZoomEffect w-[50%] pt-[70px] pr-[20px] pb-[10px]'>
                            <img style={{ height:'100%', width:'100%'}} src='/CompanyProfile2.png' alt='none' /> 
                        </div>
                        <div className='InnerPageZoomEffect w-[50%] pb-[10px]'>
                        <img style={{ height:'100%', width:'100%'}} src='/CompanyProfile1.png' alt='none' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='InnerPageZoomEffect w-[50%] pt-[10px] pb-[40px] pr-[20px] pl-[60px]'>
                            <img style={{ height:'100%', width:'100%'}} src='/CompanyProfile3.png' alt='none' /> 
                        </div>
                        <div className='InnerPageZoomEffect w-[50%] pt-[10px] pr-[40px]'> 
                            <img style={{ height:'100%', width:'100%'}} src='/CompanyProfile4.png' alt='none' /> 
                        </div>
                    </div>
                </Col>
                <Col className='firstTextResponsiveCol' sm={24} md={12}>
                    <div className='textSection pl-[70px] pr-[0px] pb-[40px] pt-[40px]'>
                        <h4 className='leading-[50px] raleway text-[#ECA33A] text-[45px] font-bold'> Alif Noon Properties</h4>
                        <h5 className='leading-[50px] raleway text-white text-[40px] font-light'>A Real Estate Agency in Dubai </h5>
                        <p style={{letterSpacing:'2px'}} className='mt-[20px] raleway leading-[26px] text-[#cecece] text-[16px] font-light'>
                            Welcome to Alif Noon Properties, your premier destination for
                            all your real estate needs in the vibrant city of Dubai. With
                            years of experience in the industry, we have built a reputation
                            for excellence, professionalism, and unparalleled customer
                            service.{' '}
                        </p>
                        <p style={{letterSpacing:'2px'}} className='mt-[20px] raleway leading-[26px] text-[#cecece] text-[16px] font-light'>
                           At Alif Noon, we understand that buying or renting property is not just a financial decision, but a significant life investment. That's why our team of dedicated experts is committed to guiding you every step of the way, ensuring a smooth and hassle-free experience.
                        </p>
                        <br/>
                        
                        <div className='flex'>
                        <div className='w-[5%] mr-4 flex flex-col '>
                            <img style={{margin:'8px auto'}} className='w-[20px] h-[20px]' src='/TickSignDetail.svg' alt='none' />
                            <div style={{margin:'8px auto',width:'1px', height:'55px',backgroundColor:'#ECA33A'}}></div>
                            <img style={{margin:'8px auto'}} className=' w-[20px] h-[20px]' src='/TickSignDetail.svg' alt='none' />
                            <div style={{margin:'8px auto', width:'1px', height:'55px',backgroundColor:'#ECA33A'}}></div>
                            <img style={{margin:'8px auto'}} className=' w-[20px] h-[20px]' src='/TickSignDetail.svg' alt='none' />
                        </div>
                        <div className='w-[95%]'>
                            <div className='flex'>
                                <p className='raleway leading-[26px] text-[#cecece] text-[16px] font-light'> <p style={{color:'#ECA33A'}}>  Fast Service: </p>Benefit from our prompt response and efficient processes to expedite your real estate needs.</p>
                            </div>
                            <div className='flex mt-[30px]'>
                                <p className='raleway leading-[26px] text-[#cecece] text-[16px] font-light'> <p style={{color:'#ECA33A'}}>Reliable Solutions: </p>
                                Trust in our proven track record of dependable service and sound real estate expertise.</p>
                            </div>
                            <div className='flex mt-[30px]'>
                                <p className='raleway leading-[26px] text-[#cecece] text-[16px] font-light'><p style={{color:'#ECA33A'}}>Competitive Market Advantage: </p>Gain a competitive edge with our in-depth market knowledge and cost-effective options.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <img style={{ marginTop:'40px',marginBottom:'40px',height:'80px', width:'100%'}} src='/VectorPng.png' alt='none' /> 
            
            <h6 className='my-[20px] text-center leading-[50px] raleway text-[#ECA33A] max-[800px]:text-[32px] text-[55px] font-bold'>
                OUR SERVICES
             </h6>

            <Row className='contentDetailResponsive' gutter={2}>
                <Col sm={24} md={12}>
                    <div className='pr-[40px] pb-[30px] pl-[40px] pt-[40px] mt-[40%]'>
                        <h6 className='text-right mb-2 leading-[50px] raleway text-[#ECA33A] text-[35px] font-bold'>
                            CONSULTING
                        </h6>
                        <p style={{letterSpacing:'2px'}} className='ml-auto w-[85%] raleway text-right leading-[29px] text-white text-[18px] font-bold'>
                        Our expert consultants provide invaluable insights to make informed real estate decisions.
                        </p>
                        <p style={{letterSpacing:'2px'}} className='ml-auto w-[85%] raleway text-right leading-[29px] text-white text-[18px] font-bold'>
                        We offer tailored consulting services, ensuring your investments align with your goals.
                        </p>
                    </div>
                </Col>
                <Col sm={24} md={12} className='PhotoImage pt-[50px] relative'>
                    <div style={{top:'46px',left:'513px'}} className='CrossImage absolute bg-[#ECA33A] w-[43px] h-[40px]'></div>
                    <div className='InnerPageZoomEffect Images h-[450px] w-[550px] relative'>
                        <img className='w-full h-full' src='/CompanyProfile5.png' alt='none' />
                    </div>
                    <img style={{left:'-47px',bottom:'-48px'}} className="CrossImage z-10 absolute w-[100px] h-[100px]" src="/CrossImageDesign1.svg" alt="none" />
                </Col>
            </Row>
            <Row className='contentDetailResponsive column-reverse-responsive' gutter={2}>
                <Col style={{paddingLeft:'112px'}} sm={24} md={12} className='PhotoImage relative'>
                <div style={{bottom:'-1px',right:'512px'}} className='CrossImage absolute bg-[#ECA33A] w-[43px] h-[40px]'></div>
                <div className='InnerPageZoomEffect Images relative h-[450px] w-[550px]'>
                        <img className='w-full h-full' src='/CompanyProfile6.png' alt='none' />
                    </div>
                    <img style={{transform:'rotateX(180deg)',right:'-53px',bottom:'-51px'}} className="CrossImage z-10 absolute w-[100px] h-[100px]" src="/CrossImageDesign1.svg" alt="none" />
                    
                </Col>
                <Col sm={24} md={12}>
                <div className='pr-[40px] pl-[40px] pb-[30px] pt-[40px] mt-[33%]'>
                        <h6 className='uppercase mb-2 text-left leading-[50px] raleway text-[#ECA33A] text-[35px] font-bold'>
                                purchasing support
                        </h6>
                        <p style={{letterSpacing:'2px'}} className='ml-auto pr-[15%] raleway text-left leading-[29px] text-white text-[18px] font-bold'>
                        We streamline the property acquisition process, making your investment journey hassle-free
                        </p>
                        <p style={{letterSpacing:'2px'}} className=' ml-auto pr-[15%] raleway text-left leading-[29px] text-white text-[18px] font-bold'>
                        Get comprehensive support from property search to final purchase, tailored to your needs.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className='contentDetailResponsive' gutter={2}>
                <Col sm={24} md={12}>
                    <div className='pr-[40px] pb-[30px] pl-[40px] pt-[40px] mt-[32%]'>
                        <h6 className='uppercase mb-2 text-right leading-[50px] raleway text-[#ECA33A] text-[35px] font-bold'>
                        Selecting property
                        </h6>
                        <p style={{letterSpacing:'2px'}} className='ml-auto w-[85%] raleway text-right leading-[29px] text-white text-[18px] font-bold'>
                        Discover a range of properties, handpicked to match your investment preferences.
                        </p>
                        <p style={{letterSpacing:'2px'}} className='ml-auto w-[85%] raleway text-right leading-[29px] text-white text-[18px] font-bold'>
                        We assist you in finding properties that align with your goals, location, and budget.
                        </p>
                    </div>
                </Col>
                <Col sm={24} md={12} className='PhotoImage relative pt-[0px]'>
                <div style={{top:'-4px',left:'513px'}} className='CrossImage absolute bg-[#ECA33A] w-[43px] h-[40px]'></div>
                    <div className='InnerPageZoomEffect Images relative h-[450px] w-[550px]'>
                        <img className='w-full h-full' src='/CompanyProfile7.png' alt='none' />
                    </div>
                    <img style={{left:'-47px',bottom:'-48px'}} className="CrossImage z-10 absolute w-[100px] h-[100px]" src="/CrossImageDesign1.svg" alt="none" />
                </Col>
            </Row>
            <Row className='contentDetailResponsive column-reverse-responsive' gutter={2}>
                <Col sm={24} style={{paddingLeft:'112px'}} md={12} className='PhotoImage relative'>
                <div style={{bottom:'-4px',right:'512px'}} className='CrossImage absolute bg-[#ECA33A] w-[43px] h-[40px]'></div>
                <div className='InnerPageZoomEffect Images h-[450px] w-[550px] relative'>
                        <img className='w-full h-full' src='/CompanyProfile8.png' alt='none' />
                    </div>
                    <img style={{zIndex:'998', transform:'rotateX(180deg)', right:'-53px',bottom:'-51px'}} className="CrossImage z-10 absolute w-[100px] h-[100px]" src="/CrossImageDesign1.svg" alt="none" />
                    
                </Col>
                <Col sm={24} md={12}>
                <div className='pr-[40px] pl-[40px] pb-[30px] pt-[40px] mt-[32%]'>
                        <h6 className='uppercase text-left leading-[50px] raleway text-[#ECA33A] text-[35px] font-bold'>
                        after-sales service
                        </h6>
                        <p style={{letterSpacing:'2px'}} className='pr-[15%] ml-auto raleway text-left leading-[29px] text-white text-[18px] font-bold'>
                        Our commitment doesn't end at the sale; we're here to ensure your satisfaction.
                        </p>
                        <p style={{letterSpacing:'2px',wordSpacing:'15px'}} className='pr-[15%] ml-auto raleway text-left leading-[29px] text-white text-[18px] font-bold'>
                        Post-purchase, we provide comprehensive support for any queries or concerns.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className='contentDetailResponsive' gutter={2}>
                <Col style={{zIndex:'998'}} sm={24} md={12}>
                    <div className='pr-[40px] pb-[30px] pl-[40px] pt-[40px] mt-[32%]'>
                        <h6 className='uppercase mb-2 text-right leading-[50px] raleway text-[#ECA33A] text-[35px] font-bold'>
                        business managment
                        </h6>
                        <p style={{ letterSpacing:'2px'}} className='ml-auto w-[85%] raleway text-right leading-[32px] text-white text-[18px] font-bold'>
                        We take care of your real estate assets, optimizing returns and minimizing risks.
                        </p>
                        <p style={{ letterSpacing:'2px'}} className='ml-auto w-[85%] raleway text-right leading-[32px] text-white text-[18px] font-bold'>
                        Our business management services provide a full spectrum of property-related solutions.
                        </p>
                    </div>
                </Col>
                <Col sm={24} md={12} className='pt-[0px] relative PhotoImage'>
                <div style={{ zIndex:'996', top:'-5px',left:'510px'}} className='CrossImage absolute bg-[#ECA33A] w-[43px] h-[40px]'></div>
                    <div style={{zIndex:'997'}} className='InnerPageZoomEffect Images h-[450px] w-[550px] relative'>
                        <img className='w-full h-full' src='/CompanyProfile9.png' alt='none' />
                    </div>
                </Col>
            </Row>
        </div>
        <img className='bottomBgImage' style={{marginTop:'-640px', height:'auto', width:'100%'}} src='/CompanyProfile10.png' alt='none' /> 
        
    </div>

    <FreeConsultation />
    <Footer />
    </div>
  )
}

export default page