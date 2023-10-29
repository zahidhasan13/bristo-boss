
const Cover = ({img, title, subTitle}) => {
    return (
        <div className="hero h-[500px]" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="mx-20 bg-[rgb(0,0,0)] bg-opacity-30 px-40 py-10">
      <h1 className="mb-5 text-5xl font-bold uppercase text-white">{title}</h1>
      <p className="mb-5 text-white uppercase">{subTitle}</p>
    </div>
  </div>
</div>
    );
};

export default Cover;