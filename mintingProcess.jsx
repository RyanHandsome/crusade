const MintingProcess = (props) => {
  return (
    <div
      className="grid xmd:grid-cols-[300px_1fr] mb-9 xmd:mb-4 max-w-[57rem] mx-auto "
      data-aos={props.dataAos}
      data-aos-anchor-placement={props.dataAosAnchorPlacement}
      data-aos-delay={props.dataAosDelay}
    >
      <div className="flex flex-col items-center justify-center ">
        <p
          className={`font-bodoni-condensed tracking-wide uppercase text-center text-3xl xmd:text-4xl mb-2 text-violet`}
        >
          STEP {props.step}
        </p>
      </div>
      <div className="px-5 py-3 border-4 rounded-full sm:py-6 sm:px-7 xmd:px-10 border-violet">
        <h2
          className={`font-bodoni-condensed tracking-wide text-center text-lg sm:text-2xl xmd:text-3xl mb-2 text-yellow`}
        >
          {props.title}
        </h2>
      </div>
    </div>
  );
};

export default MintingProcess;
