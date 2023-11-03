import React from "react";

import { Button, Img, Input, Text } from "components";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";
  
const TokenList: React.FC = () => {

    const navigate = useNavigate();
  
    const navigateTo = (path) => {
      navigate(path);
    };
const handleNavigate = () => {
    navigate('/TokenList'); // Assuming '/Tokengenerator' is the route you want to navigate to
  };
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-start mx-auto py-28 w-full">
        <div className="bg-black-900 flex flex-col items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-start justify-start px-20 md:px-5 w-auto">
            <Text
              className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px] w-auto"
              size="txtRalewayRomanSemiBold48"
            >
              token
            </Text>
          </div>
          <div className="bg-black-900 flex flex-col items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-2 w-full">
            <div className="flex flex-col items-center justify-start max-w-7xl mx-auto py-2 w-full">
              <div className="flex flex-row gap-8 items-start justify-start w-auto">
                <Button 
                                     className="bg-black-900_01 border border-light_blue-500 border-solid capitalize min-w-[155px] py-[13px] cursor-pointer font-semibold min-w-[85px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-deep_purple-900">

                  create token
                </Button>
                <div className="flex flex-col items-start justify-start  rounded-lg w-auto">
                  <Button
                className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[128px] py-[13px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]" onClick={handleNavigate}>
                
                    my tokens
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black-900_01 flex flex-col gap-8 items-end justify-start max-w-7xl mb-[244px] mx-auto p-8 md:px-5 rounded-lg w-full">
        
          <Button 
                   className="bg-black-900_01 border border-light_blue-500 border-solid capitalize min-w-[85px] py-[13px] cursor-pointer font-semibold min-w-[85px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-deep_purple-900">
                   return
          </Button>
          <Button className="bg-gradient1  capitalize cursor-pointer font-semibold min-w-[80px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
            Apply
          </Button>
          <Header className="absolute bg-black-900_cc flex md:flex-col font-raleway md:gap-10 inset-x-[0] items-center justify-between mx-auto md:px-10 px-20 sm:px-5 top-[0] w-full" />
          </div>
          <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-4 w-full" />

          
          </div>
    </>
  );
};

export default TokenList;
