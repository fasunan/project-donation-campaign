import bannerImage from "../../../assets/banner.jpg";
const Banner = () => {
  return (
    <div>
      <div
        className="card bg-cover bg-center h-64 shadow-xl  inset-0 bg-white opacity-20"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="card-body text-center">
          <h2 className="text-3xl font-bold text-black">
            I Grow By Helping People In Need
          </h2>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Search here..."
              className="px-4 py-2 rounded-l-lg focus:outline-none  w-64"
            />
            <button className="bg-[#FF444A] text-white font-bold py-2 px-4 rounded">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
