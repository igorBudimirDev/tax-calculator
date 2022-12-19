import React from 'react';
import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
const Income = () => {
  const [dropdownState, setDropdownState] = useState(false);

  return (
    <div className="income-details w-[100%] h-[70%] bg-mainOverlay rounded-[20px] flex flex-col items-center justify-center gap-5">
      <div className="relative flex justify-center gap-1">
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
                className="dropdown-menu-box flex flex-col items-center justify-around"
                style={{
                  display: dropdownState ? 'flex' : 'none',
                }}
              >
                <button
                  className="text-sm"
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
                  className="text-sm"
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
                  className="text-sm"
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
                  className="text-sm"
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
      <div className="total-income w-[80%] h-[10%] bg-mainGreen text-black rounded-[20px] flex items-center justify-center">
        <span className="text-2xl">$79,500</span>
      </div>
      <div className="table-wrapper w-[80%] h-[40%] bg-white rounded-[20px]">
      <div className="tbl bg-white w-[170%] flex flex-col p-5">
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
              <div className="grid-col">$10</div> {/*{(currentTax / 52).toFixed(0)} */}
              <div className="grid-col">Net Income</div>
            </div>
          </div>
          <div className="tbl-row border-b border-b-slate-100">
            <div className="tbl-row grid grid-cols-4">
              <div className="grid-col">Fortnightly</div>
              <div className="grid-col">Gross Income</div>
              <div className="grid-col">$10</div> {/*{({(currentTax / 26).toFixed(0)}*/}
              <div className="grid-col">Net Income</div>
            </div>
          </div>
          <div className="tbl-row border-b border-b-slate-100">
            <div className="tbl-row grid grid-cols-4">
              <div className="grid-col">Monthly</div>
              <div className="grid-col">Gross Income</div>
              <div className="grid-col">$10</div> {/**{(currentTax / 12).toFixed(0)} */}
              <div className="grid-col">Net Income</div>
            </div>
          </div>
          <div className="tbl-row border-b border-b-slate-100">
            <div className="tbl-row grid grid-cols-4">
              <div className="grid-col">Anually</div>
              <div className="grid-col">Gross Income</div>
              <div className="grid-col">$10</div> {/**{(currentTax).toFixed(0)} */}
              <div className="grid-col">Net Income</div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="compare-lenders h-[20%] flex flex-col items-center gap-2">
        <h3>Compare lenders and get your finance</h3>
        <button
        className="px-5 w-[60%] h-[40%] text-xl rounded-[15px] bg-mainGreen 
                   text-white font-bolder border border-white"
      >
        Apply now    
      </button>
      </div>
    </div>
  );
};

export default Income;
