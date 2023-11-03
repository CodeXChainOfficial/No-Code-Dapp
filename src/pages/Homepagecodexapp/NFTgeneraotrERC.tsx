import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";
import Header from "components/Header";
import HomePageCodexAppColumnonboard from "components/HomePageCodexAppColumnonboard";
import CardNFTERC from "./cardNFTERC";
const NFTERC: React.FC = () => {
  const navigate = useNavigate();


  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway sm:gap-10 md:gap-10 gap-[1367px] items-center justify-end mx-auto w-full">
        <div className="md:h-[2285px] h-[2308px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start mt-20 w-[59%]">
            <Img
              className="h-[600px] md:h-auto object-cover w-full"
              src="../images/img_fixdesignanimation.gif"
              alt="fixdesignanimat"
            />
          </div>
          <div className="absolute md:h-[2285px] h-[2308px] inset-[0] justify-center m-auto pb-[23px] w-full">
            <Img
              className="absolute h-[2285px] inset-[0] justify-center m-auto object-cover md:w-full"
              src="../images/img_group370839.png"
              alt="group370839"
            />
            <Img
              className="absolute h-[3px] inset-x-[0] mx-auto top-[22%]"
              src="../images/img_vector_deep_purple_300.svg"
              alt="vector"
            />
            <div className="absolute flex flex-col gap-8 justify-center max-w-[660px] px-4 py-20 right-[6%] top-[7%] w-full">
              <div className="flex flex-col gap-8 items-center justify-start">
                <Text
                  className="capitalize leading-[140.00%] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px] w-full"
                  size="txtRalewayRomanSemiBold48"
                >
                  Token Generator
                </Text>
                <Text
                  className="leading-[160.00%] text-white-A700 text-xl tracking-[1.00px] w-full"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  Create your token functionality without code
                </Text>
                
              </div>
              <Button className="bg-black-900_01 border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[85px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-deep_purple-900 max-w-[240px]">
Dapp                      </Button>
              <div
                className="bg-cover bg-no-repeat flex flex-row h-[3px] items-center justify-start w-[1%] md:w-full"
                style={{
                  backgroundImage:
                    "url('../images/img_vector_deep_purple_300.svg')",
                }}
              >
                <Img
                  className="h-[3px]"
                  src="../images/img_vector_deep_purple_300.svg"
                  alt="vector_One"
                />
              </div>
            </div>
            <div className="absolute flex flex-col md:gap-10 gap-[102px] inset-x-[0] items-end justify-start mx-auto top-[29%] w-[89%]">
             
              
  </div>


            <div className="absolute top-[30%] flex flex-col font-raleway inset-x-[0] items-center justify-start max-w-[1440px] mx-auto md:px-10 px-20 sm:px-5 w-full">
              <div className="gap-16 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
               
               
<CardNFTERC></CardNFTERC>


            </div>
               

           
                       

           </div>
            


          

            



            
            </div>



            

           






         


            <style>
        {`
          .hover-info {
            display: none;
            text-align: center;
          }
          
          .common-pointer:hover .hover-info {
            display: block;
          }
          
          .common-pointer:hover .hover-content {
            display: none;
          }
     
          
        `}
      </style>



            <Header className="absolute bg-black-900_cc flex md:flex-col font-raleway md:gap-10 inset-x-[0] items-center justify-between mx-auto md:px-10 px-20 sm:px-5 top-[0] w-full" />
          </div>
          <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-4 w-full" />

          
          </div>





          
     

     
      
    </>
  );
};

export default NFTERC;
