import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 sm:px-12 xl:px-8 mt-10 md:mt-16 pb-12 gap-10 md:gap-6 w-full">
      {/* left */}
      <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left md:max-w-[50%]">
        <h1 className="text-3xl sm:text-[40px] md:text-[35px] lg:text-[49px] xl:text-6xl text-center md:text-left font-extrabold">
          Build Your Ideal
          <span className="block bg-linear-to-r from-[#F97316] via-[#EC4899] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-gray-500 text-sm md:text-xs lg:text-[15px] max-w-sm sm:max-w-md md:max-w-lg font-medium font-jakarta">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex justify-center md:justify-start gap-4 pt-4 w-full sm:w-auto">
          <button className="btn bg-linear-to-r from-[#F97316] to-[#EC4899] text-white rounded-xl">Explore Technologies</button>
          <button className="btn rounded-xl px-10 text-[#374151]">Learn More</button>
        </div>
      </div>

      {/* right */}
      <div className="w-full max-w-md sm:max-w-xl md:max-w-[45%] flex justify-center items-center">
        <img src={BannerImg} alt="BannerImg" className="w-full h-auto object-contain max-h-[400px] md:max-h-[500px]"/>
      </div>
    </div>
  );
};

export default Banner;
