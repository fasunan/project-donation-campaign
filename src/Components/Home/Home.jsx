import AllData from "../AllData/AllData";
import Banner from "../Navbar/Banner/Banner";
import ShowDetails from "../ShowDetails/ShowDetails";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllData></AllData>
      <ShowDetails></ShowDetails>
    </div>
  );
};

export default Home;
