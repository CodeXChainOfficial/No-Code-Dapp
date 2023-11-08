import React from "react";

import { Button, Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {

 

  return (
    <>
      <header className={props.className}>
        <Img
          className="h-20 w-44"
          src="images/img_frame370831.svg"
          alt="frame370831"
        />
        <div className="flex md:flex-col flex-row gap-12 items-center justify-start w-auto md:w-full">
          <ul className="flex sm:flex-col flex-row gap-8 sm:hidden items-start justify-start w-auto common-row-list">
            <li>
              <Text
                className="capitalize text-base text-white-A700 tracking-[0.80px]"
                size="txtRalewayRomanSemiBold16WhiteA700"
              >
                Products
              </Text>
            </li>
            <li>
              <Text
                className="capitalize text-base hover:text-white-A700 text-white-A700_99 tracking-[0.80px]"
                size="txtRalewayRomanSemiBold16WhiteA70099"
              >
                Project
              </Text>
            </li>
            <li>
              <Text
                className="capitalize text-base hover:text-white-A700 text-white-A700_99 tracking-[0.80px]"
                size="txtRalewayRomanSemiBold16WhiteA70099"
              >
                Ecosystem
              </Text>
            </li>
            <li>
              <Text
                className="capitalize text-base hover:text-white-A700 text-white-A700_99 tracking-[0.80px]"
                size="txtRalewayRomanSemiBold16WhiteA70099"
              >
                About us
              </Text>
            </li>
            <li>
              <Text
                className="capitalize text-base hover:text-white-A700 text-white-A700_99 tracking-[0.80px]"
                size="txtRalewayRomanSemiBold16WhiteA70099"
              >
                doc
              </Text>
            </li>
          </ul>
          <Button className="bg-gradient1  capitalize cursor-pointer font-raleway font-semibold min-w-[160px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px] hover:bg-green-400_7f"

          >
            connect wallet
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
