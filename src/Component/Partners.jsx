import React from 'react';
import { useState } from 'react';
import companyimg from '../Images/company.png';
import "./Showcase.css";
import { MdKeyboardArrowRight } from "react-icons/md";


const Partners = () => {
  const stylestr = ' max-[850px]:text-[90px] hero__title font-normal text-[179.2px] leading-[126px] tracking-[0.06em] text-center align-middle'
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [secondButtonHovered, setsecondButtonHovered] = useState(false);
  const defaultBtn = 'w-[120px] h-[48px] rounded-[50px] text-[#6A6C6D] border-gray-400 rounded-3xl border-2 ';
  const hoveredBtn = 'max-[850px]:w-[55px] max-[850px]:h-[55px] w-[100px] h-[100px] bg-[#214766] border-none rounded-full text-white border-2';

  return (
    <div className=" relative h-screen w-screen bg-gradient-to-b from-[rgba(199,199,204,0)] via-[rgba(107,107,121,0.6)] to-[#2F6587]">
      {/* Scrolling Text Behind */}
      <div
        className=" absolute top-1/3 left-full animate-marquee inline-flex whitespace-nowrap font-bold text-[#e2e2e2] -translate-y-1/2 z-10 space-x-50">
        <span className={`${stylestr}`}>Corporate Events</span>
        <span className={`${stylestr}`}>Social Celebrations</span>
        <span className={`${stylestr}`}>Corporate Events</span>
        <span className={`${stylestr}`}>Social Celebrations</span>
        <span className={`${stylestr}`}>Corporate Events</span>
        <span className={`${stylestr}`}>Social Celebrations</span>
      </div>
      <div className="relative max-[850px]:w-screen w-[1200px] h-[600px] flex justify-center items-center overflow-hidden mx-auto">
        <img
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={companyimg} alt='company-image'
        />


        <div className=" top-4 z-8 absolute h-[84px] w-[64px] border-2 border-[#CDCDCD] flex m-auto justify-center items-center p-4 mb-[20px]">
          <div className="h-[62px] w-[42px] border-2 border-[#B0ACAC] text-gray-400 font-bold flex items-center justify-center">
            <p className=" hero__title  text-[#979797]  font-normal text-[32px] leading-[40px] tracking-[0.06em] text-center ">
              V
            </p>
          </div>
        </div>

        <div className='flex flex-col overflow-y-scroll h-full  pt-[120px] pb-[100px] gap-[200px] scrollbar-hide'>
          <div className="max-[850px]:w-[300px] h-[440px] w-[440px] border-[0.8px] border-[#B0ACAC] p-[20px] flex justify-center items-center relative mx-auto z-10">
            <div className="max-[850px]:w-[260px] h-[400px] w-[400px] bg-white p-[20px] flex justify-center items-center">
              <div className="max-[850px]:p-0 h-[360px] w-[360px] border-[0.8px] border-[#B0ACAC] text-[#5F5C59] p-5 text-center">
                <h2 className="max-[850px]:text-[25px] hero__title text-center font-normal text-[40px] leading-[50px] tracking-[0.06em] align-middle">
                  For companies
                </h2>
                <p className="  max-[850px]:mt-1 mt-4 para-hero text-center text-[#777777] font-normal text-[16px] leading-[20px] tracking-[0.01em] align-middle">
                  Host your formal business meetings in a unique and refreshing setting. Enjoy elegant venues, comfortable accommodations, and exceptional cuisine that elevate every professional gathering.
                </p>

                <div className="text-center flex justify-center items-center mt-8">
                  <button
                    className={`flex justify-center para-hero items-center transition-all duration-600 ${isButtonHovered ? hoveredBtn : defaultBtn
                      }`}
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                  >
                    {isButtonHovered ? (
                      <MdKeyboardArrowRight size={50} />
                    ) : (
                      "MORE"
                    )}
                  </button>
                </div>

              </div>
            </div>
          </div>
          <div className="max-[850px]:w-[300px]  h-[440px] w-[440px] border-[0.8px] border-[#B0ACAC] p-[20px] flex justify-center items-center relative mx-auto z-10">
            <div className="max-[850px]:w-[260px] h-[400px] w-[400px] bg-white p-[20px] flex justify-center items-center">
              <div className="max-[850px]:p-0 h-[360px] w-[360px] border-[0.8px] border-[#B0ACAC] text-[#5F5C59] p-3 text-center">
                <h2 className="max-[850px]:text-[25px] hero__title text-center font-normal text-[40px] leading-[50px] tracking-[0.06em] align-middle">
                  Family Gatherings
                </h2>
                <p className=" max-[850px]:mt-1 mt-4 para-hero text-center text-[#777777] font-normal text-[16px] leading-[20px] tracking-[0.01em] align-middle px-2">
                  We know how much your events means to you- be it a jubilee,anniversary, or wedding, we're here to make every detail count with elegance, care and unforgettable experiences tailored just for you.
                </p>

                <div className="text-center flex justify-center items-center mt-8">
                  <button
                    className={`flex justify-center para-hero items-center transition-all duration-600 ${secondButtonHovered ? hoveredBtn : defaultBtn
                      }`}
                    onMouseEnter={() => setsecondButtonHovered(true)}
                    onMouseLeave={() => setsecondButtonHovered(false)}
                  >
                    {secondButtonHovered ? (
                      <MdKeyboardArrowRight size={50} />
                    ) : (
                      "MORE"
                    )}
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Partners;
