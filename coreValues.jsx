import { useState } from "react";
import Image from "next/image";

// images
import decetralize from "@/assets/home/CoreValues/decentralize.webp";
import community from "@/assets/home/CoreValues/community.webp";
import exploration from "@/assets/home/CoreValues/exploration.webp";
import royalty from "@/assets/home/CoreValues/royalties.webp";
import arrow from "@/assets/home/CoreValues/arrow.webp";

const CoreValues = () => {
  let [activeCore, setActiveCore] = useState({
    decentralize: true,
    exploration: false,
    community: false,
    royalties: false,
  });

  const setActive = (dec, exp, com, roy) => {
    setActiveCore({
      ...activeCore,
      decentralize: dec,
      exploration: exp,
      community: com,
      royalties: roy,
    });
  };

  const setCoreActive = (e) => {
    let coreValue = e.target.name;
    switch (coreValue) {
      case "decentralize":
        setActive(true, false, false, false);
        break;
      case "exploration":
        setActive(false, true, false, false);
        break;
      case "community":
        setActive(false, false, true, false);
        break;
      case "royalties":
        setActive(false, false, false, true);
        break;
      default:
        setActive(true, false, false, false);
        break;
    }
  };

  return (
    <>
      <main>
        <h2
          className={`font-bodoni-condensed mb-9 tracking-wide text-center text-4xl  text-yellow`}
        >
          CORE VALUES
        </h2>
        <ul className="flex gap-3 justify-between max-w-[62rem] w-full mx-auto mb-0">
          <li className="flex flex-col items-center ">
            <button className=" w-[90px] h-[90px] md:w-[150px] md:h-[150px] p-4 rounded-full flex items-center justify-center border-4 border-pink">
              <Image
                name="decentralize"
                onClick={setCoreActive}
                src={decetralize}
                width={120}
                height={120}
                quality={90}
                alt="decentralize"
              />
            </button>
            <div className="text-lg tracking-wide md:text-2xl font-bodoni-condensed text-pink">
              DECENTRALIZE
              <div
                className={`${activeCore.decentralize ? "block" : "hidden"
                  } w-[143px] h-[140px] -mt-1 `}
              >
                <Image
                  src={arrow}
                  width={140}
                  height={300}
                  quality={90}
                  alt="arrow"
                />
              </div>
            </div>
          </li>
          <li className="flex flex-col items-center ">
            <button className="  w-[90px] h-[90px] md:w-[150px] md:h-[150px] p-4 rounded-full flex items-center justify-center border-4 border-pink">
              <Image
                name="exploration"
                onClick={setCoreActive}
                src={exploration}
                width={130}
                height={130}
                quality={90}
                alt="exploration"
              />
            </button>
            <div className="text-lg tracking-wide md:text-2xl font-bodoni-condensed text-pink">
              EXPLORATION
              <div
                className={`${activeCore.exploration ? "block" : "hidden"
                  } w-[133px] h-[140px] -mt-1 `}
              >
                <Image
                  src={arrow}
                  width={140}
                  height={300}
                  quality={90}
                  alt="arrow"
                />
              </div>
            </div>
          </li>
          <li className="flex flex-col items-center ">
            <button className=" w-[90px] h-[90px] md:w-[150px] md:h-[150px] p-4 rounded-full flex items-center justify-center border-4 border-pink">
              <Image
                name="community"
                onClick={setCoreActive}
                src={community}
                width={120}
                height={120}
                quality={90}
                alt="community"
              />
            </button>
            <div className="text-lg tracking-wide md:text-2xl font-bodoni-condensed text-pink">
              COMMUNITY
              <div
                className={`${activeCore.community ? "block" : "hidden"
                  } w-[119px] h-[140px] -mt-1 `}
              >
                <Image
                  src={arrow}
                  width={140}
                  height={300}
                  quality={90}
                  alt="arrow"
                />
              </div>
            </div>
          </li>
          <li className="flex flex-col items-center ">
            <button className="  w-[90px] h-[90px] md:w-[150px] md:h-[150px] p-4 rounded-full flex items-center justify-center border-4 border-pink">
              <Image
                name="royalties"
                onClick={setCoreActive}
                src={royalty}
                width={120}
                height={120}
                quality={90}
                alt="royalties"
              />
            </button>
            <div className="text-lg tracking-wide md:text-2xl font-bodoni-condensed text-pink">
              ROYALTIES
              <div
                className={`${activeCore.royalties ? "block" : "hidden"
                  } w-[103px] h-[140px] -mt-1 `}
              >
                <Image
                  src={arrow}
                  width={140}
                  height={300}
                  quality={90}
                  alt="arrow"
                />
              </div>
            </div>
          </li>
        </ul>

        <div
          className={` ${activeCore.decentralize ? "block" : "hidden"
            } py-16 border-4 rounded-2xl border-pink px-9 animate__animated animate__fadeInDown`}
        >
          <p className="text-base font-bold leading-5 tracking-wide text-center font-band-gothic lg:text-justify sm:leading-7">
            INFINITE CRUSADE DAO IS NOT YOUR TYPICAL ORGANIZATION. WE'RE
            DECENTRALIZED, WHICH MEANS DECISION-MAKING IS SPREAD ACROSS MULTIPLE
            CENTERS. WE DON'T OPERATE IN SILOS; WE TALK TIO OUR COMMUNITY AND
            TOGETHER, WE SHAPE THE DIRECTION OF OUR ECOSYSTEM.
          </p>
        </div>

        <div
          className={` ${activeCore.exploration ? "block" : "hidden"
            } py-16 border-4 rounded-2xl border-pink px-9 animate__animated animate__fadeInDown`}
        >
          <p className="text-base font-bold leading-5 tracking-wide text-center font-band-gothic lg:text-justify sm:leading-7">
            OUR JOURNEY IS ALL ABOUT EXPLORATION OF WEB3, GAMING, AND NFTs,
            WE'RE NOT JUST CREATING PRODUCTS; WE'RE FORGING NEW PATHS IN THE
            DIGITAL REALM, EVERY STEP TOWARDS DISCOVERING THE INFINITE
            POSSIBILITIES OF THIS EXCITNG ERA
          </p>
        </div>

        <div
          className={` ${activeCore.community ? "block" : "hidden"
            } py-16 border-4 rounded-2xl border-pink px-9 animate__animated animate__fadeInDown`}
        >
          <p className="text-base font-bold leading-5 tracking-wide text-center font-band-gothic lg:text-justify sm:leading-7">
            WE'RE NOT JUST HERE TO PROVIDE VALUE; WE'RE HERE TO EMPOWER YOU. OUR
            COMMUNITY IS AT THE HEART OF EVERYTHING WE DO. YOUR VOICE MATTERS,
            AND YOUR IDEAS SHAPE OUR DECISIONS. WE'RE IN THIS TOGETHER,
            PIONEERING A MOVEMENT THAT'S TRULY FOR AND BY THE COMMUNITY.
          </p>
        </div>
        <div
          className={` ${activeCore.royalties ? "block" : "hidden"
            } py-16 border-4 rounded-2xl border-pink px-9 animate__animated animate__fadeInDown`}
        >
          <p className="text-base font-bold leading-5 tracking-wide text-center font-band-gothic lg:text-justify sm:leading-7">
            YOUR SUPPORT GOES A LONG WAY. NFT PASS HOLDERS RECEIVE ROYALTIES
            FROM THE PROFITS GENERATED BY THE ENTIRE ECOSYSTEM. YOUR INVESTMENT
            FUELS OUR GROWTH AND REWARDS YOU IN THE PROCESS.
          </p>
        </div>
      </main>
    </>
  );
};

export default CoreValues;
