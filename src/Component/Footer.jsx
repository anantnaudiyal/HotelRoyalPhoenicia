import React from 'react';
import './Showcase.css'
import goldenlogo from "../Images/golden-logo.png";
import insta from "../Images/footer-icon/inst.png";
import facebook from "../Images/footer-icon/face.png";
import youtube from "../Images/footer-icon/youtube.png";
const Footer = () => {
    const mediaquery = 'h-[800px] w-[640px] pt-[100px] max-[850px]:w-screen max-[850px]:flex max-[850px]:h-auto max-[850px]:pt-[0px] max-[850px]:w-screen max-[850px]:flex max-[850px]:h-auto max-[850px]:pt-[0px]'
    return (
        <div className='h-auto w-screen flex max-[850px]:flex-col max-[850px]:items-center max-[850px]:h-auto'>
            <div className= {`${mediaquery} bg-[#3A6A89]  text-center`}>
                <ul className=" max-[850px]:text-center  max-[850px]:text-[25px] max-[850px]:leading-[70px] list-[upper-roman] hero__title list-inside text-[38px] text-[#D4D4D4] leading-[80px] font-semibold tracking-[6%]">
                    <li >Suitess</li>
                    <li className='max-[850px]:mt-[5px] mt-[30px]'>Wellness</li>
                    <li className='max-[850px]:mt-[5px] mt-[30px]'>Gastro</li>
                    <li className='max-[850px]:mt-[5px] mt-[30px]'>Hotel</li>
                    <li className='max-[850px]:mt-[5px] mt-[30px]'>Events</li>
                </ul>
            </div>
            <div className={`${mediaquery} bg-[#3A6A89] max-[850px]:flex-col `}>
                <p className='hero__title list-inside text-[32px] text-[#D4D4D4] max-[850px]:text-[30px] leading-[80px] font-normal tracking-[6%]'>More abouts room</p>
                <ul className='para-hero text-[#C5C5C5] text-[16px] '>
                    <li className='p-[10px]'>120 comfortable rooms </li>
                    <li className='p-[10px]'>Dinings </li>
                    <li className='p-[10px]'>Deals</li>
                    <li className='p-[10px]'>Pools</li>
                </ul>
            </div>

            <div className={`${mediaquery} bg-[#1B3D5D]  m-auto  flex justify-center max-[850px]:pb-5`}>
                <div>
                    <div className='flex justify-center items-center  max-[850px]:pt-5'>
                        <img src={goldenlogo} alt="goldenlogo" />
                    </div>
                    <div className='w-[370px]'>
                        <h2 className='text-center hero__title text-[#FFFFFF] text-[40px] leading-[80px] font-semibold tracking-[6%] '>Wellness & Pools Hotel Royal Phoenicia </h2>
                        <p className=' para-hero m-auto text-center text-[#C5C5C5] w-[269px] text-[16px] leading-[20px] font-[500px] tracking-[6%]'>Building 1288 <br /> Road 3931, Block 339 <br /> Umm Al Hasam – Manama Bahrain </p>
                        <p className=' para-hero text-center text-[#C5C5C5] mt-7'>+973 1730 7307 <br /> info@royalphoeniciahotel.com <br /> Contacts →</p>
                    </div>
                    <div className='w-[370px] flex justify-center items-center gap-5 mt-16 '>
                        <img src={insta} alt="insta" />
                        <img src={facebook} alt="facebook" />
                        <img src={youtube} alt="youtube" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;