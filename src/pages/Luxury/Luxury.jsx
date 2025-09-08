import React from 'react';
import Poolside from '../../Component/Poolside';
import Suites from '../../Component/Suites';

const Luxury = () => {
  return (
    <div className="bg-[linear-gradient(180deg,_#FFFFFF_0%,_#DBCFBA_29.51%,_#FEFBF9_100%)] max-[1280px]:pt-[50px] max-[1280px]:pb-[50px] pt-[150px] pb-[150px]">
      <Poolside />
      <Suites />
    </div>
  );
};

export default Luxury;
