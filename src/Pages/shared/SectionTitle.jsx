const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center py-8">
      <p className="text-[#D99904] mb-2">{subHeading}</p>
      <h2 className="text-3xl inline-block border-t-[3px] border-b-[3px] border-[#E8E8E8] py-4 px-8">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
