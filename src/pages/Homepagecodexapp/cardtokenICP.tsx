import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";
import Header from "components/Header";
import "./card.css"
import Modal from 'react-modal';
import ContractInfoModal from './contractInfo'; // Import your custom modal


const FeatureCard = ({ title, subtitle, description, buttonText, onButtonClick, onInfoClick }) => {
  
 

  return (
    <div className="common-pointer common-card gradient-background">
      <img
        src="/images/info.png"
        alt="Info Icon"
        className="absolute top-2 right-2 w-7 h-7"
        onClick={onInfoClick}

      />
      <img
        src="/images/icp.png"
        alt="Info Icon"
        className="absolute bottom-2 right-2 w-7 h-7"
      />
      <div className="space-card flex flex-row gap-4 items-center justify-start w-auto">
        <Text className="space-card bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12" size="txtRalewayRomanSemiBold16WhiteA700">
          {title}
        </Text>
        <div sapce-card className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text className="space-card capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto" size="txtRalewayRomanSemiBold24">
            {subtitle}
          </Text>
        </div>
      </div>
      <Text className="space-card leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]" size="txtRalewayRomanRegular16">
        {description}
      </Text>
      <div className="flex flex-row gap-8 items-start justify-start w-auto">
        <Button className="space-card bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[87px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-blue-900"           onClick={onButtonClick}
>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

const ComingSoonCard = ({ title }) => {
  return (
    <div className="common-pointer bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full hover:bg-deep_purple-900 gradient-background">
      <div className="flex flex-row gap-4 items-center justify-start w-auto">
        <Text className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12" size="txtRalewayRomanSemiBold16WhiteA700">
          {title}
        </Text>
        <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
          <Text className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto" size="txtRalewayRomanSemiBold24">
            Coming Soon
          </Text>
        </div>
      </div>
      <div className="hover-info">
        <Text className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto" size="txtRalewayRomanSemiBold24">
          Coming Soon
        </Text>
      </div>
    </div>
  );
};

const CardtokenICP = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenClick = () => {

    window.location.href = 'https://icp-master.vercel.app/';
    
  };

  const handleInfoClick = () => {
    console.log("openmodal");

    openModal();
  };

  const openModal = () => {
    console.log("openmodal");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const mockContractInfo = {
    description: 'This is a sample smart contract description.',
    // Add more properties as needed
  };
  return (
    <>
      {/* Your existing JSX code */}

      <div className="absolute top-[30%] flex flex-col font-raleway inset-x-[0] items-center justify-start max-w-[1440px] mx-auto md:px-10 px-20 sm:px-5 w-full">
        <div className="gap-16 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
          <FeatureCard
            title="TGS"
            subtitle="Token Standard"
            description="A standard DIP20 token with basic functionality like transfer, balanceOf, and approve."
            buttonText="Deploy"
            onButtonClick={handleOpenClick}
            onInfoClick={handleInfoClick}        />
          
          <FeatureCard
            title="TGA"
            subtitle="Token Advance"
            description="Burnable DIP20, Pausable DIP20 & Mintable DIP20."
            buttonText="Deploy"
            onButtonClick={handleOpenClick}
            onInfoClick={handleInfoClick}        />
             <FeatureCard
            title="TGL"
            subtitle="Token Liquidity"
            description="An ICP token designed for providing liquidity in decentralized exchanges."
            buttonText="Deploy"
            onButtonClick={handleOpenClick}
            onInfoClick={handleInfoClick}        />
            <FeatureCard
            title="TGG"
            subtitle="Token Governance"
            description="Token holders have voting rights proportional to the number of tokens they hold."
            buttonText="Deploy"
            onButtonClick={handleOpenClick}
            onInfoClick={handleInfoClick}        />
               <FeatureCard
            title="TGV"
            subtitle="Token Vesting"
            description="This can be used for team tokens, advisors, or any situation where you want to incentivize long-term holding."
            buttonText="Deploy"
            onButtonClick={handleOpenClick}
            onInfoClick={handleInfoClick}        />
               <FeatureCard
            title="TGS"
            subtitle="Token Staking"
            description="Token staking allowing you lock crypto assets for a set period of time to help support the operation."
            buttonText="Deploy"
            onButtonClick={handleOpenClick}
            onInfoClick={handleInfoClick}        />
               <FeatureCard
            title="TA"
            subtitle="Token Airdrop"
            description="An ICP token used for distributing tokens via airdrops."
            buttonText="Deploy"
            onButtonClick={handleOpenClick}
            onInfoClick={handleInfoClick}        />
               <FeatureCard
            title="TW"
            subtitle="Token Wrapped"
            description="Tokens that represent assets on another blockchain."
            buttonText="Deploy"
            onButtonClick={handleOpenClick}
            onInfoClick={handleInfoClick}        />
         
        </div>
      </div>

      <ContractInfoModal
        contractInfo={mockContractInfo}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      />

      {/* Your existing JSX code */}
    </>
  );
};

export default CardtokenICP;

