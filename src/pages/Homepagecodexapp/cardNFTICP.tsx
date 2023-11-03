import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";
import Header from "components/Header";




const FeatureCard = ({ title, subtitle, description, buttonText, onClick }) => {
  return (
    <div className="common-pointer common-card gradient-background">
       <img
        src="/images/info.png" // Adjust the path based on your project structure
        alt="Info Icon"
        className="absolute top-2 right-2 w-7 h-7"
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
        <Button className="space-card bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[87px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] hover:bg-blue-900" onClick={onClick}>
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

const CardNFTICP = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleNavigate = () => {
    navigate('/Createtokenliquidgeneratortoken'); // Assuming '/Tokengenerator' is the route you want to navigate to
  };

  return (
    <>
      {/* Your existing JSX code */}

      <div className="absolute top-[30%] flex flex-col font-raleway inset-x-[0] items-center justify-start max-w-[1440px] mx-auto md:px-10 px-20 sm:px-5 w-full">
        <div className="gap-16 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
          <FeatureCard
            title="DIP721"
            subtitle="ICP DIP721 Standard"
            description="Transfer, Approve and Balance"
            buttonText="Deploy"
            onClick={() => navigateTo("http://localhost:3001/daohomegenerator")}
          />
          <FeatureCard
            title="DIP721"
            subtitle="ICP DIP721 Advance"
            description="Burn, Pause and mint"
            buttonText="Deploy"
            onClick={() => navigateTo("http://localhost:3003")}
          />
             <FeatureCard
            title="DIP721"
            subtitle="ICP DIP721 Liquidity"
            description="Burn, Pause and mint"
            buttonText="Deploy"
            onClick={handleNavigate}/>     
               <FeatureCard
            title="DIP721"
            subtitle="ICP DIP721 Governance"
            description="Burn, Pause and mint"
            buttonText="Deploy"
            onClick={() => navigateTo("http://localhost:3003")}
          />
               <FeatureCard
            title="DIP721"
            subtitle="ICP DIP721 Vesting"
            description="Burn, Pause and mint"
            buttonText="Deploy"
            onClick={() => navigateTo("http://localhost:3003")}
          />
               <FeatureCard
            title="DIP721"
            subtitle="ICP DIP721 Staking"
            description="Burn, Pause and mint"
            buttonText="Deploy"
            onClick={() => navigateTo("http://localhost:3003")}
          />
               <FeatureCard
            title="DIP721"
            subtitle="ICP DIP721 Airdrop"
            description="Burn, Pause and mint"
            buttonText="Deploy"
            onClick={() => navigateTo("http://localhost:3003")}
          />
               <FeatureCard
            title="DIP721"
            subtitle="ICP DIP721 Wrapped"
            description="Burn, Pause and mint"
            buttonText="Deploy"
            onClick={() => navigateTo("http://localhost:3003")}
          />
         
        </div>
      </div>

      {/* Your existing JSX code */}
    </>
  );
};

export default CardNFTICP;
