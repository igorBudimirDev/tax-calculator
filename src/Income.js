import React from 'react';
import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
const Income = () => {
  const [dropdownState, setDropdownState] = useState(false);

  return (
    <div className="income-details w-[100%] h-[70%] bg-mainOverlay rounded-[20px] flex flex-col items-center justify-center gap-5">
      <div className='wrapper h-[10%]
      lg:h-[20%] lg:flex lg:flex-col lg:items-center lg:gap-2'>
        <div
          className="relative w-[100%] flex justify-center items-center gap-1
      sm:text-2xl"
        >
          <span>Your total NET</span>
          <div className="btn-menu flex items-center">
            <div className="btn-wrapper relative">
              <button
                onClick={() => {
                  setDropdownState(!dropdownState);
                }}
                className="flex items-center"
              >
                monthly
                <IoMdArrowDropdown />
              </button>
              <div className="dropdown-menu">
                <div
                  className="dropdown-menu-box flex flex-col items-center justify-around
                sm:h-[150px]"
                  style={{
                    display: dropdownState ? 'flex' : 'none',
                  }}
                >
                  <button
                    className="text-sm 
                  sm:text-[1.25rem]
                  lg:text-[1.120rem]"
                    onClick={() => {
                      //setIncomeFrequency('Weekly');
                    }}
                    style={
                      {
                        //color: incomeFrequency === 'Weekly' && '#4ECF20',
                      }
                    }
                  >
                    Weekly
                  </button>
                  <button
                    className="text-sm 
                  sm:text-[1.25rem]
                  lg:text-[1.120rem]"
                    onClick={() => {
                      //setIncomeFrequency('Fortnightly');
                    }}
                    style={
                      {
                        //color: incomeFrequency === 'Fortnightly' && '#4ECF20',
                      }
                    }
                  >
                    Fortnightly
                  </button>
                  <button
                    className="text-sm 
                  sm:text-[1.25rem]
                  lg:text-[1.120rem]"
                    onClick={() => {
                      //setIncomeFrequency('Monthly');
                    }}
                    style={
                      {
                        //color: incomeFrequency === 'Monthly' && '#4ECF20',
                      }
                    }
                  >
                    Monthly
                  </button>
                  <button
                    className="text-sm 
                  sm:text-[1.25rem]
                  lg:text-[1.120rem]"
                    onClick={() => {
                      //setIncomeFrequency('Annually');
                    }}
                    style={
                      {
                        //color: incomeFrequency === 'Annually' && '#4ECF20',
                      }
                    }
                  >
                    Annually
                  </button>
                </div>
              </div>
            </div>
            <span>income</span>
          </div>
        </div>
        <div className="total-income h-[70%] bg-mainGreen text-black rounded-[20px] flex items-center justify-center
        lg:w-[50%] lg: p-5">
          <span
            className="text-2xl
        sm:text-3xl"
          >
            $79,500
          </span>
        </div>
      </div>
      <div className="table-wrapper w-[80%] h-[40%] bg-white rounded-[20px]">
        <div
          className="tbl bg-white w-[170%] flex flex-col p-5 
      sm:justify-around sm:h-[100%] sm:text-xl"
        >
          <div className="tbl-head">
            <div className="tbl-row border-b border-b-slate-100">
              <div className="tbl-row grid grid-cols-4">
                <div className="grid-col">Frequency</div>
                <div className="grid-col">Gross Income</div>
                <div className="grid-col">Tax</div>
                <div className="grid-col">Net Income</div>
              </div>
            </div>
          </div>
          <div className="tbl-body flex flex-col h-[100%] justify-around">
            <div className="tbl-row border-b border-b-slate-100">
              <div className="tbl-row grid grid-cols-4">
                <div className="grid-col">Weekly</div>
                <div className="grid-col">Gross Income</div>
                <div className="grid-col">$10</div>{' '}
                {/*{(currentTax / 52).toFixed(0)} */}
                <div className="grid-col">Net Income</div>
              </div>
            </div>
            <div className="tbl-row border-b border-b-slate-100">
              <div className="tbl-row grid grid-cols-4">
                <div className="grid-col">Fortnightly</div>
                <div className="grid-col">Gross Income</div>
                <div className="grid-col">$10</div>{' '}
                {/*{({(currentTax / 26).toFixed(0)}*/}
                <div className="grid-col">Net Income</div>
              </div>
            </div>
            <div className="tbl-row border-b border-b-slate-100">
              <div className="tbl-row grid grid-cols-4">
                <div className="grid-col">Monthly</div>
                <div className="grid-col">Gross Income</div>
                <div className="grid-col">$10</div>{' '}
                {/**{(currentTax / 12).toFixed(0)} */}
                <div className="grid-col">Net Income</div>
              </div>
            </div>
            <div className="tbl-row border-b border-b-slate-100">
              <div className="tbl-row grid grid-cols-4">
                <div className="grid-col">Anually</div>
                <div className="grid-col">Gross Income</div>
                <div className="grid-col">$10</div>{' '}
                {/**{(currentTax).toFixed(0)} */}
                <div className="grid-col">Net Income</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="compare-lenders h-[20%] flex flex-col items-center gap-2">
        <h3 className="sm:text-2xl">Compare lenders and get your finance</h3>
        <button
          className="px-5 w-[60%] h-[40%] text-xl rounded-[15px] bg-mainGreen 
                   text-white font-bolder border border-white
                   sm:text-2xl"
        >
          Apply now
        </button>
      </div>
    </div>
  );
};

export default Income;
