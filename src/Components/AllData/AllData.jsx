import { useEffect, useState } from "react";
import ShowData from "../ShowData/ShowData";

const AllData = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {allData.map((data) => (
        <ShowData key={data.id} data={data}></ShowData>
      ))}
    </div>
  );
};

export default AllData;
