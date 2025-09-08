import React from 'react';
import "./Showcase.css";
import lawimg from "../Images/law.png";
import lawimg2 from "../Images/law2.png";
import lawimg3 from "../Images/law3.png";

const Highlights = () => {
    return (
        <div className=' pt-[120px] max-[1024px]:pt-5 max-[1024px]:w-screen max-[1024px]:h-auto '>
            <div className="max-[1024px]:h-[70px] max-[1024px]:p-0 h-[84px] w-[64px] border-2 border-[#CDCDCD] flex m-auto justify-center items-center p-4 mb-[20px]">
                <div className="max-[1024px]:h-[50px] h-[62px] w-[42px] border-2 border-[#B0ACAC] text-gray-400 font-bold flex items-center justify-center">
                    <p className=" hero__title  text-[#979797]  font-normal text-[32px] leading-[40px] tracking-[0.06em] text-center ">
                        IV
                    </p>
                </div>
            </div>
            <h2 className=" mx-auto mt-20 text-center hero__title font-normal max-[1024px]:mt-10 max-[1024px]:text-[30px]  max-[1024px]:leading-[40px] text-[90px] leading-[80px] tracking-[0.06em] align-middle ">
                Highlights gastronomy <br />served in elegant spaces.
            </h2>

            <div className='max-[1024px]:pl-0 max-[1024px]:gap-4 max-[1024px]:px-5 max-[1024px]:flex-col-reverse max-[1024px]:h-auto  max-[1024px]:w-screen  max-[1024px]:mt-0 w-[1297px] h-[784] mt-40 flex justify-between pt-4 pl-4 wrap mx-auto'>
                <div className='max-[1024px]:mt-6 max-[1024px]:w-screen max-[1024px]:h-[40vh] w-[620px] h-[700px] overflow-y-scroll scrollbar-hide'>
                    <img src={lawimg} alt="lawimg" className='h-full w-full max-[1024px]:mb-10 mb-30' />
                    <img src={lawimg2} alt="lawimg2" className='h-full w-full max-[1024px]:mb-10 mb-30' />
                    <img src={lawimg3} alt="lawimg3" className='h-full w-full max-[1024px]:mb-10 mb-30' />
                </div>

                <div className='w-[400px] h-[400px] max-[1024px]:w-screen max-[1024px]:px-2 max-[1024px]:mb-4'>
                    <h2 className=" hero__title font-normal text-[40px]  max-[1024px]:text-[25px] leading-[80px] tracking-[0.06em] ">
                        About Us
                    </h2>

                    <p className='text-[#777777] para-hero font-medium text-[16px] leading-[20px] tracking-[0.01em] align-middle'>Royal Phoenicia Hotel offers an array of top-tier facilities designed to enhance the comfort and convenience of every guest. The hotel features a luxurious spa and wellness center, where guests can indulge in soothing treatments and rejuvenating massages. For those seeking to maintain their fitness routine, the fully equipped gym provides a space for exercise, while the outdoor pool offers a relaxing environment to unwind. Dining at the hotel is a pleasure, with an on-site restaurant offering a diverse selection of cuisines in an elegant atmosphere. Additionally, the hotel provides business facilities, including meeting rooms and event spaces, ideal for corporate travelers. With its comprehensive range of services.</p>
                </div>
                
            </div>
            <hr className='mt-15 text-[#777777] mx-auto border-[0.8px] border-gray-600 mb-20'/>
        </div>


    )
}

export default Highlights;