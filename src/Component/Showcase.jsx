import React from 'react';
import './Showcase.css';
export default function Showcase() {
  return (
    <section className="flex flex-col justify-center items-center h-[70vh] text-center">
      <h1 className="hero__title max-[1020px]:text-[42px] max-[1024px]:leading-[40px] max-[850px]-font-bold  font-semibold text-[126.72px] leading-[120px] text-[#E2E2E2]">
        Hotel <br /> Royal Phoenicia
      </h1>
      <p className="para-hero max-[1020px]:text-[16px] text-[26px] leading-[49.5px] text-[#CFCFCF] mt-[20px]">
        YOUR FAVOURITE PLACE. OUR FAMILY STORY.
      </p>
    </section>

  );
}
