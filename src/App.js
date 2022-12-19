import React from 'react';
import { useState, useEffect } from 'react';
import IncomeDetails from './IncomeDetails';
import Income from './Income';
import House from './small-components/House';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';
const App = () => {
  const [mainComponent, setMainComponent] = useState('incomeDetailsComponent');
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="hero w-[85%] h-[100%] flex flex-col">
      <div className="hero__header w-[100%] h-[10%] flex justify-between">
        <div className="hero__header--heading w-[70%] flex items-center gap-2">
          <div className="svg-wrapper h-[100%] w-[15%] flex items-center">
            <House />
          </div>
          <h2>Income Tax Calculator</h2>
        </div>
        <div className="hero__header-hamburger w-[30%] flex items-center justify-end cursor-pointer">
          <RxHamburgerMenu
            className="text-3xl"
            onClick={() => setSideBar(true)}
          />
        </div>
      </div>
      <div
        className="side-menu flex flex-col justify-center gap-5 items-center w-[60%] h-[100%] bg-black absolute right-0 opacity-80"
        style={{
          display: sideBar ? 'flex' : 'none',
        }}
      >
        <TfiClose
          className="text-white text-3xl absolute top-5 right-5 cursor-pointer"
          onClick={() => setSideBar(false)}
        />
        <button
          onClick={() => {
            setMainComponent('incomeDetailsComponent');
            setSideBar(false);
          }}
          className="side-menu-btn1 w-[75%] h-[7%] bg-white uppercase opacity-100"
          style={{
            backgroundColor:
              mainComponent === 'incomeDetailsComponent' && '#4ECF20',
          }}
        >
          Income Details
        </button>
        <button
          onClick={() => {
            setMainComponent('incomeComponent');
            setSideBar(false);
          }}
          className="side-menu-btn2 w-[75%] h-[7%] bg-white uppercase opacity-100"
          style={{
            backgroundColor: mainComponent === 'incomeComponent' && '#4ECF20',
          }}
        >
          Income
        </button>
      </div>
      {mainComponent === 'incomeDetailsComponent' ? (
        <IncomeDetails />
      ) : (
        <Income />
      )}
    </div>
  );
};

export default App;
