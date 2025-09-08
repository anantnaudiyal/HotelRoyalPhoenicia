import React from 'react'
import luxyryvideo from "../Videos/luxury-bg.mp4"

const Poolside = () => {
    return (
        <div className="relative max-[850px]:w-screen max-[850px]:h-screen w-[1200px] h-[600px] flex justify-center items-center overflow-hidden mx-auto">
            <video
                className="absolute max-[850px]:w-100vw inset-0 w-full h-full object-cover z-0"
                src={luxyryvideo}
                autoPlay
                loop
                muted
                playsInline
            />

            <div className=" max-[850px]:m-0 h-[440px] w-[440px] border-[0.8px] border-[#B0ACAC] p-[20px] flex justify-center items-center absolute mx-auto z-10">
                <div className="h-[400px] w-[400px]  bg-white p-[20px] flex justify-center items-center">
                    <div className="h-[360px] w-[360px] border-[0.8px] border-[#B0ACAC] text-[#5F5C59] py-[50px] text-center">
                        <p className="text-[20px] leading-[50px] tracking-[0.06em] font-semibold">Favorite hotel</p>
                        <p className="text-[20px] leading-[50px] tracking-[0.06em] font-semibold">Business and Event Spaces</p>
                        <p className="text-[20px] leading-[50px] tracking-[0.06em] font-semibold">Diverse Dining Options</p>
                        <p className="text-[20px] leading-[50px] tracking-[0.06em] font-semibold">Multiple Poolsideming Pools</p>
                        <p className="text-[20px] leading-[50px] tracking-[0.06em] font-semibold">Family-Friendly Amenities</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poolside
