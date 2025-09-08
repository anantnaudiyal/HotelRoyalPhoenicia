import React, { useState } from 'react';
import '../Component/Showcase.css';
import { MdKeyboardArrowRight } from "react-icons/md";

const Accommodation = () => {
    const [isHovered, setIsHovered] = useState(false);


    const defaultBtn = 'w-[150px] h-[68px] max-[1280px]:w-[100px] max-[1280px]:h-[50px] border-gray-400 rounded-4xl border-2 text-gray-500 font-semibold';
    const hoveredBtn = 'w-[150px] h-[150px] max-[1280px]:w-[100px] max-[1280px]:h-[100px] bg-[#214766] rounded-full text-white';

    return (
        <div className="bg-white h-[100vh] max-[1280px]:h-auto w-[100vw] flex flex-col justify-around items-center gap-4 max-[1280px]:pt-4">
            <div className="h-[84px] w-[64px]  max-[1280px]:w-[50px] max-[1280px]:h-[70px] max-[1280px]:p-0 border-2 border-[#CDCDCD] flex justify-center items-center p-4">
                <div className="h-[62px] w-[42px] max-[1280px]:w-[28px] max-[1280px]:h-[58px] border-2 border-[#B0ACAC] text-[#979797] flex justify-center items-center">
                    <p
                        className="
    hero__title
    text-[#979797]
    font-normal
    text-[32px] leading-[40px]
    tracking-[0.06em]
    text-center align-middle
  ">
                        I
                    </p>
                </div>
            </div>
            <h2 className="font-semibold hero__title max-[1280px]:text-[30px] max-[1280px]:p-3 text-[50.4px] text-center bg-gradient-to-b from-[#5C5956] to-[#8D8D8D] bg-clip-text text-transparent">
                The stay at Wellness & pool Hotel <br />
                RoyalPhoenicia means enjoying every moment. <br />
                Relax. Find inspiration. Be fascinated.
            </h2>
            <div className='h-[120px] max-[1280px]:h-[70px]'>
                <button
                    className={`flex justify-center items-center transition-all duration-600 ${isHovered ? hoveredBtn : defaultBtn
                        }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {isHovered ? <MdKeyboardArrowRight size={50} /> : 'Hotel'}
                </button>
            </div>
        </div>
    );
};

export default Accommodation;
