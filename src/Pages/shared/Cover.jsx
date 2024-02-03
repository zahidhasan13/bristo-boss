const Cover = ({ img, title, subTitle }) => {
  return (
    <div
      className="hero md:h-[500px]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="lg:mx-20 bg-[rgb(0,0,0)] bg-opacity-30 md:px-40 md:py-10 px-5 py-3">
          <h1 className="md:mb-5 md:text-5xl text-2xl font-bold uppercase text-white">
            {title}
          </h1>
          <p className="md:mb-5 text-white uppercase text-sm md:text-xl">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
