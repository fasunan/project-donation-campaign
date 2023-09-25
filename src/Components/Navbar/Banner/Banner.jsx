const Banner = () => {
  return (
    <div>
      <div className="card  shadow-inner image-full">
        <figure>
          <img className=" w-96" src="/src/assets/banner.jpg" alt="" />
        </figure>
        <div className="card-body justify-center">
          <h2 className="card-title">I Grow By Helping People In Need</h2>

          <div className="card-actions justify-center">
            <button className="btn btn-primary">search</button>
          </div>
        </div>
      </div>
      <h1 className=""></h1>
    </div>
  );
};

export default Banner;
