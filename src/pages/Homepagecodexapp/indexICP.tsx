import React, { useState } from "react";

import { To, useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";
import Header from "components/Header";
import HomePageCodexAppColumnonboard from "components/HomePageCodexAppColumnonboard";
import Tokengenerator from "./tokengeneratorICP";
import Modal from 'react-modal';
Modal.setAppElement('#root'); // Set the root element for accessibility

const HomeICP: React.FC = () => {
  const navigate = useNavigate();


  const handleNavigate = () => {
    navigate('/Tokengenerator'); // Assuming '/Tokengenerator' is the route you want to navigate to
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOptionClick = (option) => {
    // Handle the selected option here
    console.log('Selected Option:', option);
    closeModal();
  };
  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dim background with a bit of transparency
      backdropFilter: 'blur(8px)', // Apply background blur
    },
    content: {
      width: '250px',
      height: '250px',
      margin: 'auto', // Center the modal
      background: 'transparent', // Transparent background
      border: '1px solid lightblue', // Border color and width
      borderRadius: '8px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center', // Center title and button
      color: 'white', // Text color
      fontSize: '24px', // Text size
      gap: '30px', // Space between title and button
      marginTop: '20px', // Space from top
      
    },
  };
  
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway sm:gap-10 md:gap-10 gap-[1367px] items-center justify-end mx-auto w-full">
        <div className="md:h-[2285px] h-[2308px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start mt-20 w-[59%]">
            <Img
              className="h-[600px] md:h-auto object-cover w-full"
              src="images/img_fixdesignanimation.gif"
              alt="fixdesignanimat"
            />
          </div>
          <div className="absolute md:h-[2285px] h-[2308px] inset-[0] justify-center m-auto pb-[23px] w-full">
            <Img
              className="absolute h-[2285px] inset-[0] justify-center m-auto object-cover md:w-full"
              src="images/img_group370839.png"
              alt="group370839"
            />
            <Img
              className="absolute h-[3px] inset-x-[0] mx-auto top-[22%]"
              src="images/img_vector_deep_purple_300.svg"
              alt="vector"
            />
            <div className="absolute flex flex-col gap-8 justify-center max-w-[660px] px-4 py-20 right-[6%] top-[7%] w-full">
              <div className="flex flex-col gap-8 items-center justify-start">
                <Text
                  className="capitalize leading-[140.00%] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px] w-full"
                  size="txtRalewayRomanSemiBold48"
                >
                  Explore the No-Code World
                </Text>
                <Text
                  className="leading-[160.00%] text-white-A700 text-xl tracking-[1.00px] w-full"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                 Create your DApp effortlessly in CodeX. CodeX can transform your business idea into a minimum viable product (MVP) in under 5 minutes by merely completing a simple form.
                </Text>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-row h-[3px] items-center justify-start w-[1%] md:w-full"
                style={{
                  backgroundImage:
                    "url('images/img_vector_deep_purple_300.svg')",
                }}
              >
                <Img
                  className="h-[3px]"
                  src="images/img_vector_deep_purple_300.svg"
                  alt="vector_One"
                />
              </div>
            </div>
            <div className="absolute flex flex-col md:gap-10 gap-[102px] inset-x-[0] items-end justify-start mx-auto top-[29%] w-[89%]">
              <List
                className="sm:flex-col flex-row gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
                orientation="horizontal"
              >

                 <div className="flex flex-col items-center justify-start w-full">
<div className="bg-black-900_01 flex flex-col gap-8 h-[459px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[396px] sm:w-full hover:bg-gray-900">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-24 items-start justify-start p-3.5 "
                        style={{
                          backgroundImage: "url('images/icon.png')",
                        }}
                      >
                        <Img
                          className="h-[63px]"
                          src="images/Group370879.png"
                          alt="ticket"
                        />
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <Text
                          className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                          size="txtRalewayRomanSemiBold32WhiteA700e5"
                        >
                          Connect Wallet
                        </Text>
                        <Text
                          className="leading-[160.00%] max-w-[332px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                          size="txtRalewayRomanRegular16"
                        >
                          Choose your wallet based on the chain you wish to deploy; CodeX offers various wallet options for your seamless deployment.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-8 items-start justify-start w-auto">
                    <button >
            
            <img                           className="h-[63px]"
src="images/icp.png" alt="ICP Logo" />
</button>

                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-black-900_01 flex flex-col gap-8 h-[459px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[396px] sm:w-full hover:hover:bg-gray-900">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                       <div
                        className="bg-cover bg-no-repeat flex flex-col h-24 items-start justify-start p-3.5 "
                        style={{
                          backgroundImage: "url('images/icon.png')",
                        }}
                      >
                        <Img
                          className="h-[63px]"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <Text
                          className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                          size="txtRalewayRomanSemiBold32WhiteA700e5"
                        >
                         Select Project
                        </Text>
                        <Text
                          className="leading-[160.00%] max-w-[332px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                          size="txtRalewayRomanRegular16"
                        >
                          Pick an existing template and complete the form, ensuring you understand the parameters involved.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-8 items-start justify-start w-auto">
                    <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[87px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-blue-900">
                        Explore
                      </Button>
                      
                    </div>
                  </div>
                </div>
                   <div className="flex flex-col items-center justify-start w-full">
                   <div className="bg-black-900_01 flex flex-col gap-8 h-[459px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[396px] sm:w-full hover:bg-gray-900">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-24 items-start justify-start p-3.5 "
                        style={{
                          backgroundImage: "url('images/icon.png')",
                        }}
                      >
                        <Img
                          className="h-[63px]"
                          src="images/Group.png"
                          alt="ticket"
                        />
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <Text
                          className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                          size="txtRalewayRomanSemiBold32WhiteA700e5"
                        >
                          Deploy
                        </Text>
                        <Text
                          className="leading-[160.00%] max-w-[332px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                          size="txtRalewayRomanRegular16"
                        >
Your project will be primed for deployment. Just click "deploy," proceed with the payment, and you're all set!                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-8 items-start justify-start w-auto">
                    
                     
                    </div>
                  </div>
                </div>
</List>
              
  </div>


            <div className="absolute top-[55%] flex flex-col font-raleway inset-x-[0] items-center justify-start max-w-[1440px] mx-auto md:px-10 px-20 sm:px-5 w-full">
              <div className="gap-16 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
               
               
               
                <div 
                className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full hover:bg-green-400_7f"
                onClick={handleNavigate}>
               

              
                
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Text
                      className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12 "
                      size="txtRalewayRomanSemiBold16WhiteA700"
                    >
                      CTG
                    </Text>
                    <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                      <Text
                        className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                        size="txtRalewayRomanSemiBold24"
                      >
                        CodeX Token Generator
                      </Text>
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanMedium16WhiteA700e5"
                      >
                        Standard, advance, liquidity, staking
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                    size="txtRalewayRomanRegular16"
                  >
                    Effortlessly create no-code name services for B2B and B2C
                    needs. Just fill a form and deploy, whether as an individual
                    or franchise. Unveil the future with CodeX!
                  </Text>

                  <div className="flex flex-row gap-8 items-start justify-start w-auto">
                  
                      <Button className="bg-black-900_01 border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[85px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-deep_purple-900">
                        Explore
                      </Button>
                    </div>
                  </div>
               
                <div
                  className="common-pointer bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full hover:bg-green-400_7f"
                  onClick={() => (window.location.href = " http://localhost:3003")}
                >
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Text
                      className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                      size="txtRalewayRomanSemiBold16WhiteA700"
                    >
                      CNG
                    </Text>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                        size="txtRalewayRomanSemiBold24"
                      >
                        CodeX NFT Generator
                      </Text>
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanMedium16WhiteA700e5"
                      >
                        NFT Collection, Tikets, Loyalty and more
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                    size="txtRalewayRomanRegular16"
                  >
                    CodeX: No-code DAO creation. Empower self-governed
                    communities effortlessly.
                  </Text>
                  <div className="flex flex-row gap-8 items-start justify-start w-auto">
                  <Button className="bg-black-900_01 border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[85px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-deep_purple-900">
                        Explore
                      </Button>
                    </div>
                 
                </div>
                

                <div 
                className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full hover:bg-green-400_7f"
              onClick={() => (window.location.href = " http://localhost:3001/daohomegenerator")}>

              
                
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Text
                      className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12 "
                      size="txtRalewayRomanSemiBold16WhiteA700"
                    >
                      CSMG
                    </Text>
                    <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                      <Text
                        className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                        size="txtRalewayRomanSemiBold24"
                      >
                        CodeX Smart Contract Generator
                      </Text>
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanMedium16WhiteA700e5"
                      >
                        Payments, Wallets, DAOs, Marketplaces, Tokens, NFTs
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                    size="txtRalewayRomanRegular16"
                  >
                    Effortlessly create no-code name services for B2B and B2C
                    needs. Just fill a form and deploy, whether as an individual
                    or franchise. Unveil the future with CodeX!
                  </Text>

                  <div className="flex flex-row gap-8 items-start justify-start w-auto">
                  <Button className="bg-black-900_01 border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[85px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-deep_purple-900">
                        Explore
                      </Button>
                    </div>
                  </div>
               
                <div
                  className="common-pointer bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full hover:bg-green-400_7f"
                  onClick={() => (window.location.href = " http://localhost:3003")}
                >
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Text
                      className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                      size="txtRalewayRomanSemiBold16WhiteA700"
                    >
                      DAO0
                    </Text>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                        size="txtRalewayRomanSemiBold24"
                      >
                        DAO
                      </Text>
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanMedium16WhiteA700e5"
                      >
                        Level 0 (No-Code)
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                    size="txtRalewayRomanRegular16"
                  >
                    CodeX: No-code DAO creation. Empower self-governed
                    communities effortlessly.
                  </Text>
                  <div className="flex flex-row gap-8 items-start justify-start w-auto">
                    <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[87px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-blue-900">
                        Deploy
                      </Button>
                      <Button className="bg-black-900_01 border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[85px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-deep_purple-900">
                        Demo
                      </Button>
                    </div>
                 
                </div> 






                <div
                className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full hover:bg-green-400_7f"
                onClick={() => navigate("/nocodenfthomepage")}
                >
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Text
                        className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                        size="txtRalewayRomanSemiBold16WhiteA700"
                      >
                        CM0
                      </Text>
                      <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                          size="txtRalewayRomanSemiBold24"
                        >
                          Marketplace Generator
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanMedium16WhiteA700e5"
                        >
                          Buy, sale, acution and trade NFTs
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      CodeX: No-code NFT minting. Create unique digital assets
                      effortlessly.
                    </Text>
                     <div className="flex flex-row gap-8 items-start justify-start w-auto">
                    <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[87px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-blue-900">
                        Deploy
                      </Button>
                      <Button className="bg-black-900_01 border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[85px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                        Demo
                      </Button>
                    </div>
                  </div>



                <div
                  className="common-pointer bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full hover:bg-green-400_7f"
                  onClick={() => navigate("/launchpad")}
                >
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Text
                      className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                      size="txtRalewayRomanSemiBold16WhiteA700"
                    >
                      CL0
                    </Text>
                    <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                      <Text
                        className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                        size="txtRalewayRomanSemiBold24"
                      >
                        Launchpad Generator
                      </Text>
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanMedium16WhiteA700e5"
                      >
                        IDO, ILO, Seed and private fundraising tools
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                    size="txtRalewayRomanRegular16"
                  >
                    CodeX enables the creation of decentralized applications
                    (DApps) without coding, offering a no-code platform for
                    effortless development.
                  </Text>
                  <div className="flex flex-row gap-8 items-start justify-start w-auto">
                    <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[87px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-blue-900">
                        Deploy
                      </Button>
                      <Button className="bg-black-900_01 border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[85px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-deep_purple-900">
                        Demo
                      </Button>
                    </div>
                </div>






              <div
                className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full hover:bg-green-400_7f"
                onClick={() => navigate("/nocodenfthomepage")}
                >
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Text
                        className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                        size="txtRalewayRomanSemiBold16WhiteA700"
                      >
                        CNS
                      </Text>
                      <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                          size="txtRalewayRomanSemiBold24"
                        >
                          Name Services Generator
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanMedium16WhiteA700e5"
                        >
                          Buy, sale, acution and trade Domains
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      CodeX: No-code NFT minting. Create unique digital assets
                      effortlessly.
                    </Text>
                     <div className="flex flex-row gap-8 items-start justify-start w-auto">
                    <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[87px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-blue-900">
                        Deploy
                      </Button>
                      <Button className="bg-black-900_01 border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[85px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                        Demo
                      </Button>
                    </div>
                  </div>
                <div
                  className="common-pointer bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full hover:bg-green-400_7f"
                  onClick={() => navigate("/launchpad")}
                >
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Text
                      className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                      size="txtRalewayRomanSemiBold16WhiteA700"
                    >
                      CPG
                    </Text>
                    <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                      <Text
                        className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                        size="txtRalewayRomanSemiBold24"
                      >
                        Payments Generator
                      </Text>
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanMedium16WhiteA700e5"
                      >
                        Crowdfunding fundraising, Automated KYC and SAFT
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                    size="txtRalewayRomanRegular16"
                  >
                    CodeX enables the creation of decentralized applications
                    (DApps) without coding, offering a no-code platform for
                    effortless development.
                  </Text>
                  <div className="flex flex-row gap-8 items-start justify-start w-auto">
                    <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[87px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-blue-900">
                        Deploy
                      </Button>
                      <Button className="bg-black-900_01 border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[85px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-deep_purple-900">
                        Demo
                      </Button>
                    </div>
                    
                </div>


                <div
                className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full hover:bg-deep_purple-900 gradient-background"
                onClick={() => navigate("/nocodenfthomepage")}
                >
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Text
                  className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  GM
                </Text>
                <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                  <Text
                    className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                    size="txtRalewayRomanSemiBold24"
                  >
                    Game Dapp Builder
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanMedium16WhiteA700e5"
                  >
                    Level 0 (No-Code)
                  </Text>
                </div>
              </div>
              <Text
                className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                size="txtRalewayRomanRegular16"
              >
                <>
                  CodeX&#39;s no-code platform enables effortless creation of
                  web3 and web2 games without coding, allowing
                  users to using tools set and prebuild game asset to fast creating new games.
                </>
              </Text>
              <div className="flex flex-row gap-8 items-start justify-start w-auto">
                    <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[87px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-red-900">
                        Deploy
                      </Button>
                      <Button className="bg-black-900_01 border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[85px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-red-900">
                        Demo
                      </Button>
                    </div>
                    <div className="hover-info">
          <Text
           className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
           size="txtRalewayRomanSemiBold24"
          >
            Coming Soon
          </Text>
          </div>
            </div>
          

            <div
                  className="common-pointer bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full hover:bg-deep_purple-900 gradient-background"
                  onClick={() => navigate("/launchpad")}
                >
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Text
                  className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  DX
                </Text>
                <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                  <Text
                    className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                    size="txtRalewayRomanSemiBold24"
                  >
                    DEX Generator
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanMedium16WhiteA700e5"
                  >
                    Level 0 (No-Code)
                  </Text>
                </div>
              </div>
              <Text
                className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                size="txtRalewayRomanRegular16"
              >
                <>
                  CodeX&#39;s no-code platform enables effortless creation of
                  custom Decentralise Exchange  without coding, allowing
                  users to trade assets and launch digital currencies easily.
                </>
              </Text>
              <div className="flex flex-row gap-8 items-start justify-start w-auto">
                    <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[87px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-red-900">
                        Deploy 
                      </Button>
                      <Button className="bg-black-900_01 border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[85px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-red-900">
                        Demo 
                      </Button>
                    </div>

              <div className="hover-info">
          <Text
           className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
           size="txtRalewayRomanSemiBold24"
          >
            Coming Soon
          </Text>
          </div>
            </div>



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

export default HomeICP;
