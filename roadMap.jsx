import Image from "next/image";
import { useState } from "react";
import roadmapAcher from "@/assets/nft/Roadmap/ROADMAP-ARCHER-DEFAULT.webp";
import roadmapAcherClick from "@/assets/nft/Roadmap/ROADMAP-ARCHER-CLICK.webp";
import roadmapAssassin from "@/assets/nft/Roadmap/ROADMAP-ASSASSIN-DEFAULT.webp";
import roadmapAssassinClick from "@/assets/nft/Roadmap/ROADMAP-ASSASSIN-CLICK.webp";
import roadmapDragon from "@/assets/nft/Roadmap/ROADMAP-DEFAULT-DRAGON.webp";
import roadmapDragonClick from "@/assets/nft/Roadmap/ROADMAP-DRAGON-CLICK.webp";
import roadmapKnight from "@/assets/nft/Roadmap/ROADMAP-KNIGHT-DEFAULT.webp";
import roadmapKnightClick from "@/assets/nft/Roadmap/ROADMAP-KNIGHT-CLICK.webp";
import roadmapMage from "@/assets/nft/Roadmap/ROADMAP-MAGE-DEFAULT.webp";
import roadmapMageClick from "@/assets/nft/Roadmap/ROADMAP-MAGE-CLICK.webp";
import nftRoadmapArrow from "@/assets/nft/Roadmap/roadmap-arrow.webp"

const RoadMap = (props) => {
  let [active, setActive] = useState({
    phase1: true,
    phase2: false,
    phase3: false,
    phase4: false,
    phase5: false,
  });

  const addActive = (phase1, phase2, phase3, phase4, phase5) => {
    setActive({
      ...active,
      phase1: phase1,
      phase2: phase2,
      phase3: phase3,
      phase4: phase4,
      phase5: phase5,
    });
  };

  const displayRoadmap = (e) => {
    let btnValue = e.target.name;
    if (btnValue === "phase1") {
      addActive(true, false, false, false, false);
    } else if (btnValue === "phase2") {
      addActive(false, true, false, false, false);
    } else if (btnValue === "phase3") {
      addActive(false, false, true, false, false);
    } else if (btnValue === "phase4") {
      addActive(false, false, false, true, false);
    } else if (btnValue === "phase5") {
      addActive(false, false, false, false, true);
    } else {
      addActive(true, false, false, false, false);
    }
  };

  return (
    <>
      <div className="hidden xmd:block">
        <div className=" h-[227px]">
          {/* phase 2 */}
          <div
            className={` ${active.phase2 ? "block" : "hidden"
              } py-6 border rounded-3xl max-w-[1300px] mx-auto w-[70%] border-yellow px-11 animate__animated animate__fadeInUp `}
          >
            <h4
              className={`font-bodoni-condensed tracking-wide text-center text-3xl mb-2 text-yellow`}
            >
              PHASE 2: THE ECHANTMENT
            </h4>
            <ul className="list-disc ">
              <li
                className={`font-band-gothic text-center leading-5 text-sm font-bold tracking-wide`}
              >
                DYNAMIC SKINS: UNVIELING A COLLECTION OF DYNAMIC SKINS THAT
                BRINGS YOUR NFT CHARACTER TO LIFE. THESE SKINS EVOLVE AND CHANGE
                OVER TIME, ADDING A NEW DIMENSION TO YOUR COLLECTION
              </li>
              <li
                className={`font-band-gothic text-center leading-5 text-sm font-bold tracking-wide`}
              >
                EXCLUSIVE LORK: REVEAL OF RICH BACKSTORIES AND LORE FOR EACH NFT
                CHARACTER, EMMERSING COLLECTORS IN AN INTRICATE MEDIEVAL
                UNIVERSE.
              </li>
            </ul>
          </div>
          {/* phase 4 */}
          <div
            className={` ${active.phase4 ? "block" : "hidden"
              } py-6 border rounded-3xl max-w-[1300px] mx-auto w-[70%] border-yellow px-11 animate__animated animate__fadeInUp `}
          >
            <h4
              className={`font-bodoni-condensed tracking-wide text-center text-3xl mb-2 text-yellow`}
            >
              PHASE 4: THE ECHANTMENT
            </h4>
            <ul className="list-disc ">
              <li
                className={`font-band-gothic text-center leading-5 text-sm font-bold tracking-wide`}
              >
                NFT INTEGRATION IN GAME: FULL INTEGRATION OF NFT CHARACTER AND
                PETS INTO THE INFINITE CRUSADE RUNNER, ALLOWING PLAYER TO USE
                THEIR NFTs IN THE GAME WORLD
              </li>
              <li
                className={`font-band-gothic text-center leading-5 text-sm font-bold tracking-wide`}
              >
                CROSS PLATFORM TRADING: IMPLEMENTATION OF CROSS-PLATFORM NFT
                TRADING, ENABLING COLLECTIONS TO TRADE AND SHOWCASE THEIR NFTs
                IN THE VARIOS VIRTUAL WORLDS AND METAVERSE PLATFORM.
              </li>
            </ul>
          </div>
        </div>
        <div className="relative flex items-start justify-center gap-4">
          <div className="absolute left-0 right-0 top-8 flex items-center justify-center w-full h-8 z-[-1]">
            <Image src={nftRoadmapArrow} width={800} height={100} quality={90} />
          </div>
          <Image
            className="transition-all ease-linear hover:-translate-y-3"
            onClick={displayRoadmap}
            name="phase1"
            src={active.phase1 ? roadmapKnightClick : roadmapKnight}
            width={100}
            height={100}
            quality={80}
          />
          <Image
            onClick={displayRoadmap}
            name="phase2"
            className="transition-all ease-linear hover:-translate-y-3"
            src={active.phase2 ? roadmapAssassinClick : roadmapAssassin}
            width={100}
            height={100}
            quality={80}
          />
          <Image
            onClick={displayRoadmap}
            name="phase3"
            className="transition-all ease-linear hover:-translate-y-3"
            src={active.phase3 ? roadmapAcherClick : roadmapAcher}
            width={100}
            height={100}
            quality={80}
          />
          <Image
            onClick={displayRoadmap}
            name="phase4"
            className="transition-all ease-linear hover:-translate-y-3"
            src={active.phase4 ? roadmapMageClick : roadmapMage}
            width={100}
            height={100}
            quality={80}
          />
          <Image
            onClick={displayRoadmap}
            name="phase5"
            className="transition-all ease-linear hover:-translate-y-3"
            src={active.phase5 ? roadmapDragonClick : roadmapDragon}
            width={100}
            height={100}
            quality={80}
          />
        </div>
        <div className=" h-[197px]">
          {/* phase 1 */}
          <div
            className={` ${active.phase1 ? "block" : "hidden"
              } py-6 border rounded-3xl max-w-[1300px] mx-auto w-[70%] border-yellow px-11 animate__animated animate__fadeInDown `}
          >
            <h4
              className={`font-bodoni-condensed tracking-wide text-center text-3xl mb-2 text-yellow`}
            >
              PHASE 1: THE NFT GENESIS
            </h4>
            <ul className="list-disc ">
              <li
                className={`font-band-gothic text-center leading-5 text-sm font-bold tracking-wide`}
              >
                MEDIEVAL MASTERPIECES: RELEASE OF THE INITIAL WAVE OF 3333
                MIDIEVAL-INSPIRED NFT MODEL, OFFERING COLLECTORS A CHANCE TO OWN
                A PIECE OF HISTORY.
              </li>
              <li
                className={`font-band-gothic text-center leading-5 text-sm font-bold tracking-wide`}
              >
                PETS UNLEASHED: INTRODUCTION OF UNIQUE PETS AS COMPANIONS FOR
                YOUR NFT CHARACTER, ADDING ANOTHER LAYER OF COLLECTIBILITY AND
                GAMEPLAY.
              </li>
            </ul>
          </div>

          {/* phase 3 */}
          <div
            className={` ${active.phase3 ? "block" : "hidden"
              } py-6 border rounded-3xl max-w-[1300px] mx-auto w-[70%] border-yellow px-11 animate__animated animate__fadeInDown `}
          >
            <h4
              className={`font-bodoni-condensed tracking-wide text-center text-3xl mb-2 text-yellow`}
            >
              PHASE 3: THE EVOLUTION
            </h4>
            <ul className="list-disc ">
              <li
                className={`font-band-gothic text-center leading-5 text-sm font-bold tracking-wide`}
              >
                INTERACTIVE ENVIRONMENTS: INTRODUCTIONS OF INTERACTIVE NFT
                ENVIRONMENTS WHERE COLLECTORS CAN PLACE THEIR NFT CHARACTER AND
                PETS, CREATING UNIQUE VIRTUAL WORLDS.
              </li>
              <li
                className={`font-band-gothic text-center leading-5 text-sm font-bold tracking-wide`}
              >
                COMMUNITY-DESIGN NFTs: COLLABORATIVE NFT CREATION, WHERE THE
                COMMUNITY CONTRIBUTES TO DESIGNING NEW CHARACTER AND SKINS,
                FOSTERING A SENSE OF OWNERSHIP.
              </li>
            </ul>
          </div>
          {/* phase 5 */}
          <div
            className={` ${active.phase5 ? "block" : "hidden"
              } py-6 border rounded-3xl mx-auto max-w-[1300px] w-[70%] border-yellow px-11 animate__animated animate__fadeInDown `}
          >
            <h4
              className={`font-bodoni-condensed tracking-wide text-center text-3xl mb-2 text-yellow`}
            >
              PHASE 5: THE INFINITE FUTURE (BEYOND 2025)
            </h4>
            <ul className="list-disc ">
              <li
                className={`font-band-gothic text-center leading-5 text-sm font-bold tracking-wide`}
              >
                REAL-WORLD NFT EXPERIENCES: BRIDGE THE DIGITAL AND PHYSICAL
                REALMS BY OFFERING EXCLUSIVE REAL WORLD EXPERIENCES AND
                MERCHANDISE TO NFT COLLECTORS.
              </li>
              <li
                className={`font-band-gothic text-center leading-5 text-sm font-bold tracking-wide`}
              >
                VITUAL REALITY (VR) NFTs: DEVELOPMENT OF VR-COMPATIBLE NFTs,
                ALLOWING COLLECTORS TO EXPERIENCE THEIR NFT CHARACTERS AND
                ENVIRONMENTS IN VIRTUAL REALITY
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" xmd:hidden">
        {/* phase 1 */}
        <div
          className={` py-6 border mb-3 rounded-3xl w-full border-yellow px-7 animate__animated animate__fadeIn `}
        >
          <h4
            className={`font-bodoni-condensed tracking-wide text-center text-2xl sm:text-3xl mb-2 text-yellow`}
          >
            PHASE 1: THE NFT GENESIS
          </h4>
          <ul className="list-disc ">
            <li
              className={`font-band-gothic text-start leading-5 text-sm font-bold tracking-wide`}
            >
              MEDIEVAL MASTERPIECES: RELEASE OF THE INITIAL WAVE OF 3333
              MIDIEVAL-INSPIRED NFT MODEL, OFFERING COLLECTORS A CHANCE TO OWN A
              PIECE OF HISTORY.
            </li>
            <li
              className={`font-band-gothic text-start leading-5 text-sm font-bold tracking-wide`}
            >
              PETS UNLEASHED: INTRODUCTION OF UNIQUE PETS AS COMPANIONS FOR YOUR
              NFT CHARACTER, ADDING ANOTHER LAYER OF COLLECTIBILITY AND
              GAMEPLAY.
            </li>
          </ul>
        </div>
        {/* phase 2 */}
        <div
          className={` py-6 border mb-3 rounded-3xl w-full border-yellow px-7 animate__animated animate__fadeIn `}
        >
          <h4
            className={`font-bodoni-condensed tracking-wide text-center text-2xl sm:text-3xl mb-2 text-yellow`}
          >
            PHASE 2: THE ECHANTMENT
          </h4>
          <ul className="list-disc ">
            <li
              className={`font-band-gothic text-start leading-5 text-sm font-bold tracking-wide`}
            >
              DYNAMIC SKINS: UNVIELING A COLLECTION OF DYNAMIC SKINS THAT BRINGS
              YOUR NFT CHARACTER TO LIFE. THESE SKINS EVOLVE AND CHANGE OVER
              TIME, ADDING A NEW DIMENSION TO YOUR COLLECTION
            </li>
            <li
              className={`font-band-gothic text-start leading-5 text-sm font-bold tracking-wide`}
            >
              EXCLUSIVE LORK: REVEAL OF RICH BACKSTORIES AND LORE FOR EACH NFT
              CHARACTER, EMMERSING COLLECTORS IN AN INTRICATE MEDIEVAL UNIVERSE.
            </li>
          </ul>
        </div>
        {/* phase 3 */}
        <div
          className={` py-6 border mb-3 rounded-3xl w-full border-yellow px-7 animate__animated animate__fadeIn `}
        >
          <h4
            className={`font-bodoni-condensed tracking-wide text-center text-2xl sm:text-3xl mb-2 text-yellow`}
          >
            PHASE 3: THE EVOLUTION
          </h4>
          <ul className="list-disc ">
            <li
              className={`font-band-gothic text-start leading-5 text-sm font-bold tracking-wide`}
            >
              INTERACTIVE ENVIRONMENTS: INTRODUCTIONS OF INTERACTIVE NFT
              ENVIRONMENTS WHERE COLLECTORS CAN PLACE THEIR NFT CHARACTER AND
              PETS, CREATING UNIQUE VIRTUAL WORLDS.
            </li>
            <li
              className={`font-band-gothic text-start leading-5 text-sm font-bold tracking-wide`}
            >
              COMMUNITY-DESIGN NFTs: COLLABORATIVE NFT CREATION, WHERE THE
              COMMUNITY CONTRIBUTES TO DESIGNING NEW CHARACTER AND SKINS,
              FOSTERING A SENSE OF OWNERSHIP.
            </li>
          </ul>
        </div>
        {/* phase 4 */}
        <div
          className={` py-6 border mb-3 rounded-3xl w-full border-yellow px-8 animate__animated animate__fadeIn `}
        >
          <h4
            className={`font-bodoni-condensed tracking-wide text-center text-2xl sm:text-3xl mb-2 text-yellow`}
          >
            PHASE 4: THE ECHANTMENT
          </h4>
          <ul className="list-disc ">
            <li
              className={`font-band-gothic text-start leading-5 text-sm font-bold tracking-wide`}
            >
              NFT INTEGRATION IN GAME: FULL INTEGRATION OF NFT CHARACTER AND
              PETS INTO THE INFINITE CRUSADE RUNNER, ALLOWING PLAYER TO USE
              THEIR NFTs IN THE GAME WORLD
            </li>
            <li
              className={`font-band-gothic text-start leading-5 text-sm font-bold tracking-wide`}
            >
              CROSS PLATFORM TRADING: IMPLEMENTATION OF CROSS-PLATFORM NFT
              TRADING, ENABLING COLLECTIONS TO TRADE AND SHOWCASE THEIR NFTs IN
              THE VARIOS VIRTUAL WORLDS AND METAVERSE PLATFORM.
            </li>
          </ul>
        </div>
        {/* phase 5 */}
        <div
          className={` py-6 border rounded-3xl w-full border-yellow px-7 animate__animated animate__fadeIn `}
        >
          <h4
            className={`font-bodoni-condensed tracking-wide text-center text-2xl sm:text-3xl mb-2 text-yellow`}
          >
            PHASE 5: THE INFINITE FUTURE (BEYOND 2025)
          </h4>
          <ul className="list-disc ">
            <li
              className={`font-band-gothic text-start leading-5 text-sm font-bold tracking-wide`}
            >
              REAL-WORLD NFT EXPERIENCES: BRIDGE THE DIGITAL AND PHYSICAL REALMS
              BY OFFERING EXCLUSIVE REAL WORLD EXPERIENCES AND MERCHANDISE TO
              NFT COLLECTORS.
            </li>
            <li
              className={`font-band-gothic text-start leading-5 text-sm font-bold tracking-wide`}
            >
              VITUAL REALITY (VR) NFTs: DEVELOPMENT OF VR-COMPATIBLE NFTs,
              ALLOWING COLLECTORS TO EXPERIENCE THEIR NFT CHARACTERS AND
              ENVIRONMENTS IN VIRTUAL REALITY
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RoadMap;
