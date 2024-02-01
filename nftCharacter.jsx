import { useState } from "react";
import Character from "./character";

const NftCharacter = (props) => {
  let [activeCharacter, setActiveCharacter] = useState({
    ortheus: true,
    royokie: false,
    claire: false,
    melody: false,
  });

  const active = (ortheus, royokie, claire, melody) => {
    setActiveCharacter({
      ...activeCharacter,
      ortheus: ortheus,
      royokie: royokie,
      claire: claire,
      melody: melody,
    });
  };

  const selectCharacter = (e) => {
    console.log(e.target.name);
    if (e.target.name === "ortheus") {
      active(true, false, false, false);
    } else if (e.target.name === "royokie") {
      active(false, true, false, false);
    } else if (e.target.name === "claire") {
      active(false, false, true, false);
    } else if (e.target.name === "melody") {
      active(false, false, false, true);
    } else {
      active(true, false, false, false);
    }
  };

  return (
    <>
      <h1
        className={`font-bodoni-condensed  tracking-wide text-5xl text-center mb-8 text-yellow animate__animated animate__fadeInDown animate__delay-4s`}
      >
        MEET OUR NFT CHARACTER
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8 sm:gap-5 md:gap-10">
        <button
          onClick={selectCharacter}
          name="ortheus"
          className={`font-bodoni-condensed ${activeCharacter.ortheus ? "bg-violet text-white" : "text-yellow"
            } hover:bg-violet hover:text-white transition-colors ease-in-out border-2 py-1 px-8 rounded-2xl border-violet tracking-wide text-lg text-center mb-2 `}
        >
          ORTHEUS
        </button>
        <button
          onClick={selectCharacter}
          name="royokie"
          className={`font-bodoni-condensed ${activeCharacter.royokie ? "bg-violet text-white" : "text-yellow"
            } hover:bg-violet hover:text-white transition-colors ease-in-out border-2 py-1 px-8 rounded-2xl border-violet tracking-wide text-lg text-center mb-2 `}
        >
          ROYOKIE
        </button>
        <button
          onClick={selectCharacter}
          name="claire"
          className={`font-bodoni-condensed ${activeCharacter.claire ? "bg-violet text-white" : "text-yellow"
            } hover:bg-violet hover:text-white transition-colors ease-in-out border-2 py-1 px-8 rounded-2xl border-violet tracking-wide text-lg text-center mb-2 `}
        >
          CLAIRE
        </button>
        <button
          onClick={selectCharacter}
          name="melody"
          className={`font-bodoni-condensed ${activeCharacter.melody ? "bg-violet text-white" : "text-yellow"
            } hover:bg-violet hover:text-white transition-colors ease-in-out border-2 py-1 px-8 rounded-2xl border-violet tracking-wide text-lg text-center mb-2 `}
        >
          MELODY
        </button>
      </div>

      <div>
        {/* 1st */}
        <Character
          activeCharacter={activeCharacter.ortheus}
          video="/KnightDragon.webm"
          name="ORTHEUS"
          position="ROYAL GUARDIAN AND THE SCALE BOUND SERAPH"
          description="ORTHEUS, ONCE A HUMBLE BLACKSMITH'S APPRENTICE, NOW WIELDS A BLADE
            INFUSED WITH THE SPIRIT OF VALOR ITSELF, HE SEEKS TO UNCOVER THE
            SECRET OF HIS HIS WEAPON AND THE ANCIENT ORDER IT REPRESENTS, ALL
            WHILE DEFENDING THE REALM FROM DARKNESS."
        />
        {/* 2nd */}
        <Character
          activeCharacter={activeCharacter.royokie}
          video="/AssasinDragon.webm"
          name="ROYOKIE"
          position="NIGHT SHADE STALKER AND THE SCALE BOUND SERAPH"
          description="ROYOKIE, BORN INTO A MYSTERIOUS GUILD OF ASSASSINS, IS DRIVEN BY
          A TRAGIC PAST. HE SEARCHES FOR ANSWERS ABOUT HIS FAMILY'S
          DISAPPEARANCE AND GRAPPLES WITH THE MORAL DILEMMA OF HIS CHOSEN
          PATH."
        />
        {/* 3nd */}
        <Character
          activeCharacter={activeCharacter.claire}
          video="/HuntressDragon.webm"
          name="CLAIRE"
          position="START FALL RANGER AND THE SCALE BOUND SERAPH"
          description="CLAIRE IS A WANDERER FROM A MYSTICAL FOREST, ARMED WITH A BOW
          PASSED DOWN BY HER ELEVEN ANCESTORS. SHE EMBARK ON A QUEST TO
          SAVE HER HOMELAND FROM AN ENCROACHING DARKNESS."
        />
        <Character
          activeCharacter={activeCharacter.melody}
          video="/MageDragon.webm"
          name="MELODY"
          position="CELESTIAL ENCHANTER AND THE SCALE BOUND SERAPH"
          description="MELODY IS A GIFTED MAGE WITH A RARE ABILITY TO HEAR THE VERY
          SONG OF THE ELEMENT. SHE EMBARKS ON A JOURNEY TO HARMONIZE THE
          DISCORDANT ENERGIES THAT THREATEN THE TEAR THE WORLD APART."
        />
        {/* 4th */}
      </div>
    </>
  );
};

export default NftCharacter;
