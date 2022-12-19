import React from 'react';
import { useState, useEffect } from 'react';
import IncomeDetails from './IncomeDetails';
import House from './small-components/House';
import { RxHamburgerMenu } from 'react-icons/rx'
const App = () => {

  const strahinja = function(){
    console.log('strahinja');
  }
  const igor = () => {
    console.log('strahinja');
  }

  return (
    <div className="hero w-[85%] h-[100%] flex flex-col">
      <div className="hero__header w-[100%] h-[10%] flex justify-between">
        <div className="hero__header--heading w-[70%] flex items-center gap-2">
          <div className="svg-wrapper h-[100%] w-[15%] flex items-center">
            <House />
          </div>
          <h2>Income Tax Calculator</h2>
        </div>
        <div className="hero__header-hamburger w-[30%] flex items-center justify-end">
          <RxHamburgerMenu  className='text-3xl'/>
        </div>
      </div>

      <IncomeDetails/>

    </div>
  );
};

export default App;
