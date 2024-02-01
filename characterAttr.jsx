import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import mageAttr from "@/assets/game/MAGE-ATTRIBUTES.svg";
import assassinAttr from "@/assets/game/ASSASSIN-ATTRIBUTE.svg";
import archerAttr from "@/assets/game/ARCHER-ATTRIBUTE.svg";
import knightAttr from "@/assets/game/KNIGHT-ATTRIBUTE.svg";
import mage from "@/assets/game/MELODY.webp";
import claire from "@/assets/game/CLAIRE.webp";
import royokie from "@/assets/game/ROYOKIE.webp";
import ortheus from "@/assets/game/ortheus-knight1.webp";

const CharacterAttribute = (props) => {
  // let [displayChar, setDisplayChar] = useState({
  //   melody: true,
  //   claire: false,
  //   ortheus: false,
  //   royokie: false,
  // });

  // let activeChar = (melody, claire, ortheus, royokie) => {
  //   setDisplayChar({
  //     ...displayChar,
  //     melody: melody,
  //     claire: claire,
  //     ortheus: ortheus,
  //     royokie: royokie,
  //   });
  // };

  // let setActiveCharacter = (e) => {
  //   let charcaterName = e.target.id;
  //   if (charcaterName === "melody") {
  //     activeChar(true, false, false, false);
  //   } else if (charcaterName === "claire") {
  //     activeChar(false, true, false, false);
  //   } else if (charcaterName === "ortheus") {
  //     activeChar(false, false, true, false);
  //   } else if (charcaterName === "royokie") {
  //     activeChar(false, false, false, true);
  //   } else {
  //     activeChar(true, false, false, false);
  //   }
  // };

  // useEffect(() => {

  //   const videoElement = document.getElementById('melody');
  //   if (displayChar.melody) {
  //     videoElement.play();
  //   } else {
  //     videoElement.pause();
  //   }
  // }, [displayChar]);
  const [displayChar, setDisplayChar] = useState({
    melody: true,
    claire: false,
    ortheus: false,
    royokie: false,
  });

  const characters = Object.keys(displayChar);
  const videoRefs = useRef({});

  const activeChar = (charName) => {
    const newDisplayChar = {};
    characters.forEach((character) => {
      newDisplayChar[character] = character === charName;
    });
    setDisplayChar(newDisplayChar);
  };

  const setActiveCharacter = (charName) => {
    activeChar(charName);
  };

  useEffect(() => {
    characters.forEach((character) => {
      const videoElement = videoRefs.current[character];

      if (videoElement) {
        if (displayChar[character]) {
          videoElement.play().catch((error) => console.error(error));
        } else {
          videoElement.pause();
        }
      }
    });
  }, [displayChar]);

  return (
    <>
      <main>
        <div className="mb-10 h-auto xl:h-[480px]">
          {/* melody */}
          <div
            className={` ${displayChar.melody ? "grid" : "hidden"
              } relative w-full h-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1fr_400px] animate__animated animate__fadeIn animate__delay-1s`}
          >
            <div className="absolute z-10 hidden transition-all ease-linear hover:-translate-y-3 xl:block ">
              <Image src={mageAttr} width={600} quality={80} />
            </div>
            <div className="hidden xl:block"></div>
            <div className="relative ">
              <div className="absolute top-0 right-[-42px] w-full max-w-48 ssm:max-w-64 md:max-w-80 xl:hidden ">
                <Image src={mageAttr} width={600} quality={80} />
              </div>
              <Image
                src={mage}
                width={700}
                quality={80}
                className="transition-all ease-linear hover:-translate-y-3"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h1
                className={`font-bodoni-condensed tracking-wide text-4xl lg:text-5xl text-violet `}
              >
                MELODY
              </h1>
              <p
                className={`font-lora tracking-wide -mt-2 mb-3 text-xs text-dark `}
              >
                MAGE/ELEMENTAL SPECIALIST
              </p>
              <p
                className={`font-lora tracking-wide text-base md:text-lg text-violet `}
              >
                "MAGIC SINGS IN ALL THINGS"
              </p>
              <p
                className={`font-band-gothic tracking-wide font-bold text-sm md:text-base text-dark `}
              >
                MELODY IS A GIFTED MAGE WITH A RARE ABILITY TO HEAR THE VERY
                SONG OF THE ELEMENTS, SHE EMBRAKS ON A JOURNEY TO HARMONIZE THE
                DISCORDANT ENERGIES THAT THREATEN TO TEAR THE WORLD APART.
              </p>
            </div>
          </div>

          {/* claire */}
          <div
            className={` ${displayChar.claire ? "grid" : "hidden"
              } relative w-full h-auto md:grid-cols-2 xl:grid-cols-[1fr_1fr_400px] animate__animated animate__fadeIn animate__delay-1s`}
          >
            <div className="absolute z-10 hidden transition-all ease-linear xl:block hover:-translate-y-3">
              <Image src={archerAttr} width={600} quality={80} />
            </div>
            <div className="hidden xl:block"></div>
            <div className="relative">
              <div className="absolute top-0 left-[-42px] w-full max-w-44 ssm:max-w-60 md:max-w-80 xl:hidden">
                <Image src={archerAttr} width={600} quality={80} />
              </div>
              <Image
                src={claire}
                width={700}
                quality={80}
                className="transition-all ease-linear hover:-translate-y-3"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h1
                className={`font-bodoni-condensed tracking-wide text-4xl lg:text-5xl text-yellow `}
              >
                CLAIRE
              </h1>
              <p
                className={`font-lora tracking-wide -mt-2 mb-3 text-xs text-dark `}
              >
                ARCHER/ARROW SLINGER
              </p>
              <p
                className={`font-lora tracking-wide text-base md:text-lg text-yellow `}
              >
                "THE WINDS GUIDE MY AIM"
              </p>
              <p
                className={`font-band-gothic tracking-wide font-bold text-sm md:text-base text-dark `}
              >
                CLAIRE IS A WONDERER FROM A MYSTICAL FOREST, ARMED WITH A BOW
                PASSED DOWN BY HER ELEVEN ANCESTOR. SHE EMBRAKS ON A QUEST TO
                SAVE HER HOMELAND FROM AN ENCROACHING DARKNESS.
              </p>
            </div>
          </div>

          {/* ortheus */}
          <div
            className={` ${displayChar.ortheus ? "grid" : "hidden"
              } relative w-full h-auto md:grid-cols-1 xl:grid-cols-[1fr_1fr_400px] animate__animated animate__fadeIn animate__delay-1s`}
          >
            <div className="absolute z-10 hidden transition-all ease-linear xl:block hover:-translate-y-3">
              <Image src={knightAttr} width={600} quality={80} />
            </div>
            {/* <div className="hidden xl:block"></div> */}
            <div className="relative flex items-center justify-end col-span-2 ">
              <div className="absolute -top-6 ssm:bottom-0 -right-[50px] md:-left-[42px] w-full max-w-48 ssm:max-w-60 sm:max-w-72 md:max-w-80 xl:hidden">
                <Image src={knightAttr} width={600} quality={80} />
              </div>
              <Image
                src={ortheus}
                width={600}
                quality={100}
                className="transition-all -mt-[47px] ease-linear  hover:-translate-y-3"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h1
                className={`font-bodoni-condensed  tracking-wide text-4xl lg:text-5xl text-yellow `}
              >
                ORTHEUS
              </h1>
              <p
                className={`font-lora tracking-wide -mt-2 mb-3 text-xs text-dark `}
              >
                KNIGHT/GUARDIAN OF VALOR
              </p>
              <p
                className={`font-lora  tracking-wide text-base md:text-lg text-yellow `}
              >
                "FOR HONOR AND STEEL, I SHALL PROTECT"
              </p>
              <p
                className={`font-band-gothic tracking-wide font-bold text-sm md:text-base text-dark `}
              >
                Ortheus, once a humble blacksmith's apprentice, now wields a
                blade infused with the spirit of valor itself. He seeks to
                uncover the secrets of his weapon and the ancient order it
                represents, all while defending the realm from darkness.
              </p>
            </div>
          </div>

          {/* royokie */}
          <div
            className={` ${displayChar.royokie ? "grid" : "hidden"
              } relative w-full h-auto md:grid-cols-2 xl:grid-cols-[1fr_1fr_400px] animate__animated animate__fadeIn animate__delay-1s`}
          >
            <div className="absolute z-10 hidden transition-all ease-linear xl:block hover:-translate-y-3">
              <Image src={assassinAttr} width={600} quality={80} />
            </div>
            <div className="hidden xl:block"></div>
            <div className="relative">
              <div className="absolute top-0 -left-[8px] md:-left-[42px] w-full max-w-40 ssm:max-w-48 sm:max-w-72 md:max-w-80 xl:hidden">
                <Image src={assassinAttr} width={600} quality={80} />
              </div>
              <Image
                src={royokie}
                width={800}
                quality={80}
                className="transition-all ease-linear hover:-translate-y-3"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h1
                className={`font-bodoni-condensed tracking-wide text-4xl lg:text-5xl text-yellow `}
              >
                ROYOKIE
              </h1>
              <p
                className={`font-lora tracking-wide -mt-2 mb-3 text-xs text-dark `}
              >
                ASSASSIN/SILENT SHADOW
              </p>
              <p
                className={`font-lora tracking-wide text-base md:text-lg text-yellow `}
              >
                "IN SHADOW, WE FIND TRUTH"
              </p>
              <p
                className={`font-band-gothic tracking-wide font-bold text-sm md:text-base text-dark `}
              >
                ROYOKIE, BORN INTO A MYSTERIOUS GUILD OF ASSASSIN, IS DRIVEN BY
                A TRAGIC PAST, HE SEARCHES FOR ANSWERS ABOUT HIS FAMILY'S
                DISAPPEARANCE AND GRAPPLES WITH THE MORAL DILEMMA OF HIS CHOSEN
                PATH.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <div className="inline-flex flex-wrap items-center justify-center p-5 transition-all ease-linear border-4 gap-7 sm:gap-10 md:gap-16 border-violet rounded-3xl">
            {characters.map((character) => (
              <button
                key={character}
                className="relative w-14 h-14 ssm:w-20 ssm:h-20 md:w-24 md:h-24 overflow-hidden border-2 rounded-full border-white shadow-[0px_0px_13px_5px_#FF2EE2]"
                onClick={() => setActiveCharacter(character)}
              >
                <video
                  ref={(ref) => (videoRefs.current[character] = ref)}
                  className="w-full h-full rounded-full"
                  autoPlay={displayChar[character] ? true : false}
                  loop
                  muted
                >
                  <source src={`/${character}.webm`} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </button>
            ))}

          </div>
        </div>
      </main>
    </>
  );
};

export default CharacterAttribute;
