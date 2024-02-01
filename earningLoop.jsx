import Image from "next/image";

import casino2 from "@/assets/home/Casino-2.png";
import marketplaceIcon from "@/assets/home/Marketplace-Icon.png";
import ownershipIcon from "@/assets/home/Ownership-Icon.png";
import royaltyIcon from "@/assets/home/Royalty-Icon.png";
import stakingIcon from "@/assets/home/Staking-Icon.png";
import whitelistIcon from "@/assets/home/Whitelist.png";

const EarningLoop = (props) => {
  return (
    <div
      className="flex flex-col items-center gap-4 sm:flex-row "
      data-aos={props.dataAos}
      data-aos-anchor-placement={props.dataAosAnchorPlacement}
      data-aos-delay={props.dataAosDelay}
    >
      <div className=" max-w-[180px] w-full">
        <Image src={props.image} width={180} height={180} quality={80} />
      </div>
      <div>
        <h2
          className={`font-bodoni-condensed tracking-wide text-center text-xl mb-2 text-yellow`}
        >
          {props.title}
        </h2>
        <p
          className={`font-band-gothic mb-10 text-center sm:text-start leading-7 text-base font-bold tracking-wide`}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default EarningLoop;
