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

    window.location.href = 'https://code-x-chain.vercel.app/ERC20Standard';
    
  };
  const handleOpenClick1 = () => {

    window.location.href = 'https://code-x-chain.vercel.app/ERC20Advance';
    
  };
  const handleOpenClick2 = () => {

    window.location.href = 'https://code-x-chain.vercel.app/ERC20Vote';
    
  };
  const handleOpenClick3 = () => {

    window.location.href = 'https://code-x-chain.vercel.app/ERC20Staking';
    
  };

  const handleOpenClick4 = () => {

    window.location.href = 'https://code-x-chain.vercel.app/ERC20SignatureMintVote';
    
  };

  const handleOpenClick5 = () => {

    window.location.href = 'https://code-x-chain.vercel.app/ERC20SignatureMint';
    
  };

  const handleOpenClick6 = () => {

    window.location.href = 'https://code-x-chain.vercel.app/ERC20DropVote';
    
  };

  const handleOpenClick7 = () => {

    window.location.href = 'https://code-x-chain.vercel.app/ERC20Drop';
    
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
            description="Create cryptocurrency compliant with ERC20 standard"
            buttonText="Deploy"
            onButtonClick={handleOpenClick}
            onInfoClick={handleInfoClick}        />
          
          <FeatureCard
            title="TGA"
            subtitle="Token Advance"
            description="Burnable ERC20, Pausable ERC20, Mintable ERC20."
            buttonText="Deploy"
            onButtonClick={handleOpenClick1}
            onInfoClick={handleInfoClick}        />
             <FeatureCard
            title="TVT"
            subtitle="Token Vote"
            description="Vote using the token to shape project decisions in a decentralized organization.."
            buttonText="Deploy"
            onButtonClick={handleOpenClick2}
            onInfoClick={handleInfoClick}        />
            <FeatureCard
            title="TSK"
            subtitle="Token Staking"
            description="Token holders have voting rights proportional to the number of tokens they hold."
            buttonText="Deploy"
            onButtonClick={handleOpenClick3}
            onInfoClick={handleInfoClick}        />
               <FeatureCard
            title="TSM"
            subtitle="Token Signature Mint Vote"
            description="A combination of various concepts related to tokens, signatures, minting, and voting."
            buttonText="Deploy"
            onButtonClick={handleOpenClick4}
            onInfoClick={handleInfoClick}        />
               <FeatureCard
            title="TSM"
            subtitle="Token Signature Mint"
            description="A combination of various concepts related to tokens, signatures and minting"
            buttonText="Deploy"
            onButtonClick={handleOpenClick5}
            onInfoClick={handleInfoClick}        />
               <FeatureCard
            title="TDV"
            subtitle="Token Drop Vote"
            description="The distribution of tokens to individuals for free or without any cost to enable the voting process"
            buttonText="Deploy"
            onButtonClick={handleOpenClick6}
            onInfoClick={handleInfoClick}        />
               <FeatureCard
            title="TD"
            subtitle="Token Drop"
            description="The distribution of tokens to individuals for free or without any cost."
            buttonText="Deploy"
            onButtonClick={handleOpenClick7}
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

