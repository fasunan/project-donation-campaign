import bannerImage from "../../../assets/banner.jpg";
const Banner = () => {
  return (
    <div>
      <div
        className="hero h-72 mb-6 -mt-10"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="hero-overlay bg-opacity-90 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-10 text-5xl font-bold text-black">
              I Grow By Helping People In Need
            </h1>

            <div className="mt-4">
              <input
                type="text"
                placeholder="Search here..."
                className="px-4 py-2 rounded-l-lg outline-1  w-64"
              />
              <button className="bg-[#FF444A] text-white font-bold py-2 px-4 rounded">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
