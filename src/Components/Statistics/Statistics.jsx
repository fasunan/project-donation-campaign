import { useEffect, useState } from "react";

const Statistics = () => {
  const [donationsStat, setDonationsStat] = useState([]);

  useEffect(() => {
    const addDonationStat = JSON.parse(localStorage.getItem("donations"));
    setDonationsStat(addDonationStat);
  }, []);

  return (
    <div>
      <h3>donation: {donationsStat.length}</h3>
    </div>
  );
};

export default Statistics;
