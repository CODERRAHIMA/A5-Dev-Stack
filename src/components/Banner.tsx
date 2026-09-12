import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex justify-around items-center max-w-7xl mx-auto mt-6 pb-4">
      {/* left */}
      <div className="space-y-4">
        <h1 className="text-6xl font-extrabold">
          Build Your Ideal
          <span className="block bg-linear-to-r from-[#F97316] via-[#EC4899] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-gray-500 text-xl max-w-xl">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-4 mt-10">
          <button className="btn bg-linear-to-r from-[#F97316] to-[#EC4899] text-white rounded-xl">Explore Technologies</button>
          <button className="btn rounded-xl px-10 text-[#374151]">Learn More</button>
        </div>
      </div>

      {/* right */}
      <img src={BannerImg} alt="BannerImg"/>
    </div>
  );
};

export default Banner;
