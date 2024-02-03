const SectionTitle = ({ heading, subHeading, textColor }) => {
  return (
    <div className="text-center py-8">
      <p className="text-sm md:text-lg text-[#D99904] mb-2">{subHeading}</p>
      <h2
        className={`text-${textColor} text-xl md:text-3xl inline-block border-t-[3px] border-b-[3px] border-[#E8E8E8] py-4 px-8`}
      >
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
