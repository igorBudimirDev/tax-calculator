import React from 'react';
import { ReactDOM } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { HiArrowRight } from 'react-icons/hi';
import { RiArrowUpSFill } from 'react-icons/ri';
import BtnMenu from './small-components/BtnMenu';
import { useState } from 'react';

const IncomeDetails = () => {
  const [income, setIncome] = useState(0);
  const [dropdownState, setDropdownState] = useState(false);
  const [incomeFrequency, setIncomeFrequency] = useState('Monthly');
  const [incomeType, setIncomeType] = useState('');
  return (
    <div className="income-details w-[100%] h-[70%] bg-mainOverlay rounded-[20px] flex items-center justify-center gap-5 flex-col">
      <div className="total-income w-[100%] h-[70px]  flex flex-col items-center justify-center gap-2">
        <h3 className="text-white">What is your total income?</h3>

        <div className="total-income--input w-[80%] h-[80%] flex bg-white items-center justify-around rounded-[20px]">
          <div className="flex items-center">
            <span className="text-[14px]">$</span>
          </div>
          <input
            className="w-[50%] h-[100%]"
            type="number"
            placeholder="e.g 12,000"
            onChange={(e) => setIncome(e.target.value)}
          />
          <div className="btn-menu flex items-center relative">
            <button
              onClick={() => {
                setDropdownState(!dropdownState);
              }}
              className="flex items-center"
            >
              {incomeFrequency}
              <IoMdArrowDropdown />
            </button>

            <div className="dropdown-menu">
              <div
                className="dropdown-menu-box flex flex-col items-center justify-around"
                style={{
                  display: dropdownState ? 'flex' : 'none',
                }}
              >
                <button
                  className="text-sm"
                  onClick={() => {
                    setIncomeFrequency('Weekly');
                  }}
                  style={{
                    color: incomeFrequency === 'Weekly' && '#4ECF20',
                  }}
                >
                  Weekly
                </button>
                <button
                  className="text-sm"
                  onClick={() => {
                    setIncomeFrequency('Fortnightly');
                  }}
                  style={{
                    color: incomeFrequency === 'Fortnightly' && '#4ECF20',
                  }}
                >
                  Fortnightly
                </button>
                <button
                  className="text-sm"
                  onClick={() => {
                    setIncomeFrequency('Monthly');
                  }}
                  style={{
                    color: incomeFrequency === 'Monthly' && '#4ECF20',
                  }}
                >
                  Monthly
                </button>
                <button
                  className="text-sm"
                  onClick={() => {
                    setIncomeFrequency('Annually');
                  }}
                  style={{
                    color: incomeFrequency === 'Annually' && '#4ECF20',
                  }}
                >
                  Annually
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="income-type h-[40%] w-[80%] rounded-[20px] flex flex-col items-center justify-around">
        <h3 className="text-black ">Please choose the income type</h3>

        <div className="income-type--buttons w-[100%] h-[55%] flex flex-col items-center gap-2">
          <button
            className="px-5 w-[80%] h-[100%] rounded-[15px] bg-white
           hover:bg-mainGreen hover:text-white"
            onClick={() => setIncomeType('grossState')}
            style={{
              backgroundColor: incomeType === 'grossState' && '#4ECF20',
              color: incomeType === 'grossState' && 'white',
            }}
          >
            Gross Income
          </button>
          <button
            className="px-5 w-[80%] h-[100%] rounded-[15px] bg-white 
          hover:bg-mainGreen hover:text-white"
            onClick={() => setIncomeType('netState')}
            style={{
              backgroundColor: incomeType === 'netState' && '#4ECF20',
              color: incomeType === 'netState' && 'white',
            }}
          >
            Net Income
          </button>
        </div>
      </div>
      <button
        className="px-5 w-[80%] h-[10%] text-xl rounded-[15px] bg-white 
       hover:bg-mainGreen hover:text-white flex justify-center items-center gap-1"
        disabled={incomeType === '' || income < 1 ? true : false}
      >
        <span>Calculate</span>
        <HiArrowRight />
      </button>
    </div>
  );
};

export default IncomeDetails;
