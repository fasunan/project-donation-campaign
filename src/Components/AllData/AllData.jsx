import { useEffect, useState } from "react";
import ShowData from "../ShowData/ShowData";
import Banner from "../Navbar/Banner/Banner";

const AllData = () => {
  const [allData, setAllData] = useState([]);
  // const [searchCategory, setSearchCategory] = useState([]);
  // console.log(allData)
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      const categoryData = allData?.filter(
        (donation) => donation.category === search
      );
      setAllData(categoryData);
      console.log(categoryData);
      console.log(search);
    }
  };

  return (
    <div>
      <div>
        <Banner
          handleSearch={handleSearch}
          setSearch={setSearch}
          search={search}
        ></Banner>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-5">
        {allData.map((data) => (
          <ShowData key={data.id} data={data}></ShowData>
        ))}
      </div>
    </div>
  );
};

export default AllData;
