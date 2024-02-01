const Character = (props) => {
  return (
    <div
      className={`${props.activeCharacter ? "grid" : "hidden"
        } grid-cols-1 xl:grid-cols-2 gap-3 border-4 rounded-3xl border-violet animate__animated animate__fadeIn animate__delay-1s`}
    >
      <div className="w-full h-full rounded-3xl">
        <video className="w-full h-auto rounded-3xl" autoPlay loop muted>
          <source src={props.video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-col justify-center pl-3 pr-3 lg:pl-0 lg:pr-3 py-9">
        <div>
          <h1
            className={`font-bodoni-condensed   tracking-wide text-3xl md:text-4xl lg:text-5xl text-center text-yellow `}
          >
            {props.name}
          </h1>
          <p
            className={`font-lora  tracking-wide text-base lg:text-xl text-center mb-8 lg:mb-14 text-dark `}
          >
            {props.position}
          </p>
          <p
            className={`font-band-gothic   tracking-wide font-bold text-sm lg:text-base text-center mb-8 text-dark `}
          >
            {props.description}
          </p>
        </div>
        {/* <div className="flex items-center justify-center">
          <div className="w-full px-8 py-2 border-2 rounded-full ssm:w-auto border-violet">
            <div className=" grid ssm:grid-cols-[150px_1fr]">
              <p className="text-lg tracking-wide text-center ssm:text-start font-bodoni-condensed">
                Network:
              </p>
              <p className="text-lg tracking-wide text-center ssm:text-start font-bodoni-condensed">
                ETHEREUM
              </p>
            </div>
            <div className=" grid ssm:grid-cols-[150px_1fr]">
              <p className="text-lg tracking-wide text-center ssm:text-start font-bodoni-condensed">
                Contract Address:
              </p>
              <p className="self-center w-[150px] ssm:w-[142px] text-center mx-auto ssm:text-start text-ssm tracking-wide text-blue-600 underline truncate font-bodoni-condensed">
                0x000000000000000000000000000
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Character;
