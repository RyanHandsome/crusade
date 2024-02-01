import { useState } from "react";
import Image from "next/image";
import metamaskLogo from "@/assets/nft/METAMASK-ICON.webp";
import usdtCoin from "@/assets/nft/usdt-coin.webp";
import chest from "@/assets/nft/CHEST.webp";

const ConnectWallet = (props) => {
  let [paymentModal, setPaymentModal] = useState(false);
  let [orderModal, setOrderModal] = useState(false);

  let connect = () => {
    setPaymentModal(true);
    props.setOpenModal(false);
  };

  let processOrder = () => {
    setOrderModal(true);
    setPaymentModal(false);
  };

  let closePayment = () => {
    setPaymentModal(false);
    props.setOpenModal(true);
  };

  let closeOrder = () => {
    setPaymentModal(true);
    setOrderModal(false);
  };

  return (
    <div
      className={`${props.bgModal ? "flex" : "hidden"
        } fixed inset-0 z-30 items-center justify-center w-full h-auto min-h-screen bg-opacity-50 animate__animated animate__fadeIn bg-yellow`}
    >
      <div
        className={` ${props.openModal ? "block" : "hidden"
          } px-4 pt-3 pb-8 bg-white border-2 rounded-3xl border-violet animate__animated animate__fadeIn animate__delay-1s`}
      >
        <div className="flex items-center justify-center gap-3 mb-20 ">
          <button
            onClick={props.connectWallet}
            className="flex items-center justify-center w-10 h-10 border rounded-full bg-yellow border-dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <h1
            className={`font-bodoni-condensed tracking-wide text-5xl text-yellow`}
          >
            CONNECT WALLET
          </h1>
        </div>
        <div className="flex items-center gap-4 mb-20 ">
          <Image src={metamaskLogo} width={80} height={80} quality={80} />
          <button className="flex items-center gap-16 px-6 py-4 rounded-full bg-violet">
            <p
              className={`font-band-gothic text-white text-start  text-base font-bold tracking-wide`}
            >
              METAMASK WALLET
            </p>
            <div className="w-8 h-8 border-4 border-white rounded-full "></div>
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={connect}
            className={`font-bodoni-condensed hover:bg-violet hover:text-white transition-all ease-in-out py-2 px-14 border border-violet rounded-full tracking-wide text-3xl text-yellow`}
          >
            CONNECT
          </button>
        </div>
      </div>

      {/* payment method */}
      <div
        className={` ${paymentModal ? "block" : "hidden"
          } px-4 pt-3 pb-8 bg-white border-2 rounded-3xl border-violet animate__animated animate__fadeIn animate__delay-1s`}
      >
        <div className="flex items-center justify-center gap-3 mb-20 ">
          <button
            onClick={closePayment}
            className="flex items-center justify-center w-10 h-10 border rounded-full bg-yellow border-dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <h1
            className={`font-bodoni-condensed tracking-wide text-5xl text-yellow`}
          >
            PAYMENT METHOD
          </h1>
        </div>
        <div className="flex items-center gap-4 mb-20 ">
          <Image src={metamaskLogo} width={80} height={80} quality={80} />
          <button className="flex items-center gap-16 px-6 py-4 rounded-full bg-violet">
            <div>
              <p
                className={`font-band-gothic text-white text-start  text-base font-bold tracking-wide`}
              >
                METAMASK WALLET
              </p>
              <p
                className={`font-band-gothic text-dark flex items-center gap-3 text-start  text-xs font-bold tracking-wide`}
              >
                TRANSACTION FEE
                <Image src={usdtCoin} width={20} height={20} quality={80} />
              </p>
            </div>
            <div className="w-8 h-8 border-4 border-white rounded-full "></div>
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={processOrder}
            className={`font-bodoni-condensed hover:bg-violet hover:text-white transition-all ease-in-out py-2 px-14 border border-violet rounded-full tracking-wide text-3xl text-yellow`}
          >
            CONTINUE
          </button>
        </div>
      </div>

      {/* order modal */}
      <div
        className={` ${orderModal ? "block" : "hidden"
          } px-8 pt-3 pb-8 bg-white border-2 rounded-3xl border-violet animate__animated animate__fadeIn animate__delay-1s`}
      >
        <div className="flex items-center justify-center gap-3 mb-10 ">
          <button
            onClick={closeOrder}
            className="flex items-center justify-center w-10 h-10 border rounded-full bg-yellow border-dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <h1
            className={`font-bodoni-condensed uppercase tracking-wide text-5xl text-yellow`}
          >
            ORDER DETAILS
          </h1>
        </div>
        <div className="mb-20 ">
          <div className="flex items-center justify-between w-full mb-10 ">
            <div className="flex items-center w-full gap-11 ">
              <div className="flex items-center justify-center w-20 h-20 border rounded-full border-dark bg-violet">
                <div>
                  <Image src={chest} width={100} height={100} quality={80} />
                </div>
              </div>
              <p
                className={`font-band-gothic text-base font-bold  hover:text-dark `}
              >
                INFINITE NFT
              </p>
            </div>
            <div>
              <p
                className={`font-band-gothic text-base font-bold   hover:text-dark `}
              >
                x1
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-3">
              <p
                className={`font-band-gothic text-sm font-bold  hover:text-dark `}
              >
                PRICE
              </p>
              <Image src={usdtCoin} width={20} height={20} quality={80} />
            </div>
            <div className="flex items-center justify-between mb-3">
              <p
                className={`font-band-gothic text-sm font-bold  hover:text-dark `}
              >
                MINTING FEE
              </p>
              <Image src={usdtCoin} width={20} height={20} quality={80} />
            </div>
            <div className="flex items-center justify-between">
              <p
                className={`font-band-gothic text-sm font-bold  hover:text-dark `}
              >
                TOTAL PAYABLE
              </p>
              <Image src={usdtCoin} width={20} height={20} quality={80} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={closeOrder}
            className={`font-bodoni-condensed mb-2 text-blue-500 hover:underline`}
          >
            Choose Payment Method
          </button>
          <button
            className={`font-bodoni-condensed hover:bg-violet hover:text-white transition-all ease-in-out py-2 px-14 border border-violet rounded-full tracking-wide text-3xl text-yellow`}
          >
            PROCEED
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
