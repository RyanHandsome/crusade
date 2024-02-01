import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import telegram from "@/assets/footer/telegram.webp";
import twitter from "@/assets/footer/twitter.webp";
import instagram from "@/assets/footer/instagram.webp";
import backToTopIcon from "@/assets/home/Back-To-Top.png";
import leftDesign from "@/assets/footer/left-footer-design.webp";
import rightDesign from "@/assets/footer/right-footer-design.webp";

const Footer = () => {
  let [termConditions, setTermsConditions] = useState(false);

  const termConditionActive = () => {
    setTermsConditions((state) => !state);
  };

  return (
    <footer className="pb-5 pt-10 relative w-[100%] mx-auto mb-10 border-t-4 border-violet">
      <h2
        className={`font-bodoni-condensed tracking-wide text-center text-3xl ssm:text-4xl mb-12 text-yellow`}
      >
        Sign Up For Early Access
      </h2>
      <div className="flex items-center justify-center mb-12">
        <form action="">
          <div className="flex flex-col items-center gap-4 p-10 border-4 md:flex-row rounded-3xl border-violet sm:p-14">
            <input
              type="text"
              placeholder="TYPE YOUR EMAIL"
              className={`font-band-gothic text-justify leading-7 text-base font-bold tracking-wide rounded-md border border-yellow px-3 py-2 rounded-sm active:border-yellow focus:outline-none`}
            />
            <button
              className={`font-band-gothic flex transition-colors ease-linear items-center group gap-2 leading-7 hover:text-violet hover:bg-white border hover:border-violet text-sm font-bold tracking-wide bg-violet text-white  px-2 py-1 rounded-lg`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 group-hover:text-violet"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                  clipRule="evenodd"
                />
              </svg>
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
      <div className=" flex items-center justify-center sm:grid sm:grid-cols-[1fr_160px_1fr] gap-3 mb-12">
        {/* <div className="flex flex-col items-center justify-center gap-10 sm:flex-row lg:justify-start lg:gap-24">
          <Image src={logo} width={100} height={100} alt="Infinite Crusade" />
          <p
            className={`font-bodoni-condensed tracking-wide text-center text-base text-dark`}
          >
            Copyright 2023
          </p>
          <p
            className={`font-bodoni-condensed tracking-wide text-center text-base text-dark`}
          >
            Infinite.business@gmail.com
          </p>
        </div> */}
        <div className="relative hidden w-full h-8 sm:block">
          <Image src={leftDesign} fill={true} quality={90} />
        </div>
        <div className=" lg:mb-0">
          <ul className="flex items-center gap-5 ">
            <li>
              <Link href="#">
                <Image
                  className="transition-all ease-linear hover:-translate-y-1"
                  src={twitter}
                  width={42}
                  height={42}
                  quality={90}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  className="transition-all ease-linear hover:-translate-y-1"
                  src={telegram}
                  width={42}
                  height={42}
                  quality={90}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  className="transition-all ease-linear hover:-translate-y-1"
                  src={instagram}
                  width={42}
                  height={42}
                  quality={90}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative hidden w-full h-8 sm:block ">
          <Image src={rightDesign} fill={true} quality={90} />
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <button
          onClick={termConditionActive}
          className="text-sm font-bold tracking-wide underline font-band-gothic"
        >
          Terms of Use
        </button>
      </div>
      <div className="absolute right-[160px] hidden md:block transform -translate-y-1/2 top-[46%] bottom-[30%] ">
        <Link href="#">
          <Image className="" src={backToTopIcon} height={100} quality={100} />
        </Link>
      </div>
      <div
        className={`${termConditions ? "flex" : "hidden"
          } fixed inset-0 z-30 items-center pb-10 pt-10 overflow-y-auto justify-center bg-yellow bg-opacity-40 animate__animated animate__fadeIn animate__delay-2s`}
      >
        <div
          className={`px-3 mt-24 bg-white border-4 rounded-xl border-violet py-7 max-w-[78rem] w-[90%] h-[500px] ssm:h-[700px] overflow-y-auto animate__animated animate__fadeInDown`}
        >
          <h4 className="mb-1 text-base font-bold tracking-wide sm:text-2xl font-band-gothic">
            TERMS OF USE FOR INFINITE CRUSADE DAO
          </h4>
          <p className="mb-1 text-xs font-normal tracking-wide md:text-sm font-band-gothic">
            WELCOME TO INFINITE CRUSADE DAO! BEFORE YOU IMBARK ON THIS EXCITING
            JOURNEY WITH US, PLEASE TAKE A MOMENT TO UNDERSTAND OUR TERMS OF
            USE.
          </p>
          <div className="mb-1 ml-3">
            <h5 className="text-sm font-bold tracking-wide md:text-xl font-band-gothic">
              1. NO INVESTMENT ADVICE PROVIDED:
            </h5>
            <p className="grid grid-cols-[14px_1fr] mb-1 text-xs md:text-sm font-normal tracking-wider ml-5 font-band-gothic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-1 lucide lucide-circle"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              INFINITE CRUSADE DAO PROVIDES A GAMING AND DIGITAL EXPERIENCE
              USING BLOCKCHAIN TECHNOLOGY. IT'S IMPORTANT TO NOTE THAT WE DO
              NOT PROVIDE INVESTMENT ADVISE OF ANY KIND. OUR PLATFORM AND
              SERVICES ARE DESIGN FOR ENTERTAINMENT AND EDUCATIONAL PURPOSES
              ONLY.
            </p>
            <h5 className="text-sm font-bold tracking-wide md:text-xl font-band-gothic">
              2. USER'S RESPONSIBILITY:
            </h5>
            <p className="grid grid-cols-[14px_1fr] mb-1 text-xs md:text-sm font-normal tracking-wider ml-5 font-band-gothic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-1 lucide lucide-circle"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              ANY DECISION TO BUY, SELL, TRADE, OR OTHERWISE ENGAGE WITH OUR
              NFTs, TOKENS, OR ANY RELATED DIGITAL ASSETS ON INFINITE CRUSADE
              DAO IS ENTIRELY AT YOUr OWN RISK AND DISCRETION. YOU ACKNOWLEDGE
              THAT YOU ARE SOLELY RESPONSIBLE FOR DECISIONS AND ACTIONS TO TAKE
              ON THE PLATFORM.
            </p>
            <h5 className="text-sm font-bold tracking-wide md:text-xl font-band-gothic">
              3. NO GUARANTEE OF PROFIT:
            </h5>
            <p className="grid grid-cols-[14px_1fr] mb-1 text-xs md:text-sm font-normal tracking-wider ml-5 font-band-gothic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-1 lucide lucide-circle"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              INFINITE CRUSADE DAO MAKES NO PROMISES OR GUARANTEES OF PROFIT OR
              RETURNS FROM PARTICIPATION IN OUR GAMES, NFT MARKETPLACE, OR ANY
              OTHER SERVICES. THE VALUE OF DIGITAL ASSETS IS HIGHLY VOLATILE AND
              SUBJECTIVE.
            </p>
            <h5 className="text-sm font-bold tracking-wide md:text-xl font-band-gothic">
              4. RISK ACKNOWLEDGEMENT:
            </h5>
            <p className="grid grid-cols-[14px_1fr] mb-1 text-xs md:text-sm font-normal tracking-wider ml-5 font-band-gothic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-1 lucide lucide-circle"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              YOU ACKNOWLEDGE THAT INVOLVEMENT IN DIGITAL ASSETS, BLOCKCHAIN
              TECHNOLOGY, AND GAMING CAN CARRY SIGNIFICANT FINANCIAL RISK. YOU
              AGREE THE INFINITE CRUSADE DAO IS NOT RESPONSIBLE FOR ANY
              FINANCIAL LOSSES INCURRED WHILE USING OUR PLATFORM.
            </p>
            <h5 className="text-sm font-bold tracking-wide md:text-xl font-band-gothic">
              5. COMPLIANCE WITH LOCAL LAWS:
            </h5>
            <p className="grid grid-cols-[14px_1fr] mb-1 text-xs md:text-sm font-normal tracking-wider ml-5 font-band-gothic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-1 lucide lucide-circle"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              IT IS YOUR RESPONSIBILITY TO ENSURE THAT YOUR ENGAGEMENT WITH
              INFINIT CRUSADE DAO COMPLIES WITH LOCAL LAWS AND REGULATIONS IN
              YOUR JURISDICTION, INCLUDING BUT NOT LIMITED TO REGULATIONS
              RELATING TO CRYPTOCURRENCIES AND ONLINE GAMING.
            </p>
            <h5 className="text-sm font-bold tracking-wide md:text-xl font-band-gothic">
              6. CHANGES OF TERMS:
            </h5>
            <p className="grid grid-cols-[14px_1fr] mb-1 text-xs md:text-sm font-normal tracking-wider ml-5 font-band-gothic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-1 lucide lucide-circle"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              INFINIT CRUSADE DAO RESERVES THE RIGHT TO MODIFY THESE TERMS OF
              USE AT ANY TIME. CONTINUED USE OF OUR SERVICES FOLLOWING ANY SUCH
              CHANGES WILL CONSTITUTE YOUR ACCEPTANCE OF THE NERW TERMS.
            </p>
          </div>
          <div className="mb-3 ">
            <p className="mb-1 text-xs font-normal tracking-wider md:text-sm font-band-gothic">
              BY USING INFINITE CRUSADE DAO'S SERVICES, YOU ACKNOWLEDGE THAT YOU
              HAVE READ, UNDERSTOOD, AND AGREED TO THESE TERMS OF USE. THANK YOU
              FOR BEING A PART OF INFINITE CRUSADE DAO!
            </p>
          </div>
          <div className="flex items-center justify-center ">
            <button
              onClick={termConditionActive}
              className="px-4 py-2 text-lg tracking-wide border-4 rounded-full md:text-2xl font-bodoni-condensed text-yellow border-yellow"
            >
              AGREE AND CONTINUE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
