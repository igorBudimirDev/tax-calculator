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
  const [income, setincome] = useState(0);
  const [incomeType, setIncomeType] = useState('');
  const [incomeFrequency, setIncomeFrequency] = useState('Monthly');
  return (
    <div
      className="hero w-[85%] h-[100%] flex flex-col 
    lg:w-[60%]
    2xl:w-[45%]
    2xl:relative"
    >
      <div className="hero__header w-[100%] h-[10%] flex justify-between">
        <div className="hero__header--heading w-[70%] flex items-center gap-2">
          <div
            className="svg-wrapper h-[100%] w-[15%] flex items-center
          lg:w-[10%]"
          >
            <House />
          </div>
          <h2 className="sm:text-2xl">Income Tax Calculator</h2>
        </div>
        <div className="hero__header-hamburger w-[30%] flex items-center justify-end cursor-pointer">
          <RxHamburgerMenu
            className="text-3xl"
            onClick={() => setSideBar(true)}
          />
        </div>
      </div>
      <div
        className={`side-menu flex flex-col justify-center gap-5 items-center w-[60%] h-[100%] bg-black fixed right-0 opacity-80
        2xl:h-[70%]
        2xl:top-[10%]
        2xl:right-[27.5%]
        ${
          sideBar
            ? 'md:w-[30%] lg:w-[20%] 2xl:w-[15%] w-[30%] opacity-1'
            : '2xl-w-[5%] w-[5%] opacity-0'
        }
        ease-in-out duration-[0.5s]
        `}
        style={{
          borderTopRightRadius: '20px',
          borderBottomRightRadius: '20px',
        }}
      >
        <TfiClose
          className="text-white text-3xl absolute top-5 right-0 cursor-pointer"
          onClick={() => setSideBar(false)}
        />
        <button
          onClick={() => {
            setMainComponent('incomeDetailsComponent');
            setSideBar(false);
          }}
          className="side-menu-btn1 w-[75%] h-[7%] bg-white uppercase opacity-100
          sm:text-xl"
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
          className="side-menu-btn2 w-[75%] h-[7%] bg-white uppercase opacity-100
          sm:text-xl"
          style={{
            backgroundColor: mainComponent === 'incomeComponent' && '#4ECF20',
          }}
        >
          Income
        </button>
      </div>
      {mainComponent === 'incomeDetailsComponent' ? (
        <IncomeDetails
          income={(value) => setincome(value)}
          incomeType={(value) => setIncomeType(value)}
          incomeFrequency={(value) => setIncomeFrequency(value)}
          mainComponent={(value) => setMainComponent(value)}
        />
      ) : (
        <Income
          income={
            incomeFrequency === 'Annually'
              ? Number(income)
              : incomeFrequency === 'Monthly'
              ? Number(income) * 12
              : incomeFrequency === 'Fortnightly'
              ? Number(income) * 26
              : incomeFrequency === 'Weekly' && Number(income) * 52
          }
          incomeType={incomeType}
          incomeFrequency={incomeFrequency}
        />
      )}
    </div>
  );
};

export default App;
