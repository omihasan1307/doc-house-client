const Title = ({ title, subtitle }) => {
  return (
    <div className="text-center lg:pt-10">
      <h1 className="text-4xl font-bold my-5">{title}</h1>
      <p className="w-[70%] mx-auto">{subtitle}</p>
    </div>
  );
};

export default Title;
