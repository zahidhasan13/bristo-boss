const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center py-4 md:py-6 lg:py-8">
      <p className="text-[#D99904] mb-2 text-sm md:text-base lg:text-lg">
        {subHeading}
      </p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl inline-block border-t-3 border-b-3 border-[#E8E8E8] py-2 md:py-4 lg:py-6 px-4 md:px-6 lg:px-8">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
