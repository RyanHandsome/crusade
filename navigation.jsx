import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";


const Navigation = () => {
  let [openMenu, setOpenMenu] = useState(false);

  let menuOpen = () => [setOpenMenu((state) => !state)];

  return (
    <>
      {/* without airdrop */}
      <nav className="hidden w-full mb-0 xmd:block sm:mb-5 animate__animated animate__fadeIn animate__delay-2s">
        <ul
          className={`flex items-center justify-between font-bodoni-condensed border-2 border-violet rounded-full py-2 pl-4 px-12`}
        >
          <li>
            <Link href="/">
              <Image
                src={logo}
                width={100}
                height={100}
                alt="Infinite Crusade"
              />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-lg tracking-wide drop-shadow-lg sm:text-2xl text-yellow"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/nft"
              className="text-lg tracking-wide sm:text-2xl drop-shadow-lg text-yellow"
            >
              NFT
            </Link>
          </li>
          <li>
            <Link
              href="/game"
              className="text-lg tracking-wide sm:text-2xl drop-shadow-lg text-yellow"
            >
              GAME
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-lg tracking-wide sm:text-2xl drop-shadow-lg text-yellow"
            >
              WHITEPAPER
            </Link>
          </li>
        </ul>
      </nav>

      <div className="fixed top-0 left-0 right-0 z-20 block xmd:hidden">
        <nav className="max-w-7xl w-[90%] mx-auto mt-4 mb-0 sm:mb-5 animate__animated animate__fadeIn animate__delay-2s">
          <ul
            className={`flex items-center gap-2 bg-white justify-between font-bodoni-condensed border-2 border-violet rounded-full py-2 px-4`}
          >
            <li>
              <Link href="/">
                <Image
                  src={logo}
                  width={65}
                  height={65}
                  alt="Infinite Crusade"
                />
              </Link>
            </li>
            <li>
              <p
                className={` tracking-wide  drop-shadow-lg mr-4 text-[1.25rem] text-yellow`}
              >
                INFINITE CRUSADE
              </p>
            </li>
            <li>
              <button
                className="flex items-center justify-center"

              >
                <svg
                  onClick={menuOpen}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
        <div
          className={` ${openMenu ? "block" : "hidden"
            } max-w-7xl w-[90%] mt-4 mx-auto bg-white animate__animated animate__fadeIn`}
        >
          <ul
            className={`flex flex-col gap-4 items-center justify-between font-bodoni-condensed border-2 border-violet rounded-3xl py-3 `}
          >
            <li>
              <Link
                href="/"
                className="text-[1.25rem] tracking-wide drop-shadow-lg text-yellow"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/nft"
                className="text-[1.25rem] tracking-wide drop-shadow-lg text-yellow"
              >
                NFT
              </Link>
            </li>
            <li>
              <Link
                href="/game"
                className="text-[1.25rem] tracking-wide drop-shadow-lg text-yellow"
              >
                GAME
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[1.25rem] tracking-wide drop-shadow-lg text-yellow"
              >
                WHITEPAPER
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* with airdrop */}
      {/* <nav className="hidden w-full mb-0 xmd:block sm:mb-5 animate__animated animate__fadeIn animate__delay-2s">
        <ul
          className={`flex items-center justify-between font-bodoni-condensed border-2 border-violet rounded-full py-2 pl-4 px-12`}
        >
          <li>
            <Link href="/">
              <Image
                src={logo}
                width={100}
                height={100}
                alt="Infinite Crusade"
              />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-lg tracking-wide drop-shadow-lg sm:text-2xl text-yellow"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/nft"
              className="text-lg tracking-wide sm:text-2xl drop-shadow-lg text-yellow"
            >
              NFT
            </Link>
          </li>
          <li>
            <Link
              href="/game"
              className="text-lg tracking-wide sm:text-2xl drop-shadow-lg text-yellow"
            >
              GAME
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-lg tracking-wide sm:text-2xl drop-shadow-lg text-yellow"
            >
              AIRDROP
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-lg tracking-wide sm:text-2xl drop-shadow-lg text-yellow"
            >
              WHITEPAPER
            </Link>
          </li>
        </ul>
      </nav>

      <div className="fixed top-0 left-0 right-0 z-20 block xmd:hidden">
        <nav className="max-w-7xl w-[90%] mx-auto mt-4 mb-0 sm:mb-5 animate__animated animate__fadeIn animate__delay-2s">
          <ul
            className={`flex items-center bg-white justify-between font-bodoni-condensed border-2 border-violet rounded-full py-2 px-4`}
          >
            <li>
              <Link href="/">
                <Image
                  src={logo}
                  width={70}
                  height={70}
                  alt="Infinite Crusade"
                />
              </Link>
            </li>
            <li>
              <p
                className={` text-yellow  text-xs font-bold tracking-wider`}
              >
                INFINITE CRUSADE
              </p>
            </li>
            <li>
              <button
                className="flex items-center justify-center"
                onClick={menuOpen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
        <div
          className={` ${openMenu ? "block" : "hidden"
            } max-w-7xl w-[90%] mt-4 mx-auto bg-white animate__animated animate__fadeIn`}
        >
          <ul
            className={`flex flex-col gap-4 items-center justify-between font-bodoni-condensed border-2 border-violet rounded-3xl py-3 `}
          >
            <li>
              <Link
                href="/"
                className="text-lg tracking-wide drop-shadow-lg sm:text-2xl text-yellow"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/nft"
                className="text-lg tracking-wide drop-shadow-lg sm:text-2xl text-yellow"
              >
                NFT
              </Link>
            </li>
            <li>
              <Link
                href="/game"
                className="text-lg tracking-wide drop-shadow-lg sm:text-2xl text-yellow"
              >
                GAME
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-lg tracking-wide sm:text-2xl drop-shadow-lg text-yellow"
              >
                AIRDROP
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-lg tracking-wide drop-shadow-lg sm:text-2xl text-yellow"
              >
                WHITEPAPER
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Navigation;
