import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const [donationsStat, setDonationsStat] = useState([]);

  useEffect(() => {
    const addDonationStat = JSON.parse(localStorage.getItem("donations"));
    setDonationsStat(addDonationStat || []);
  }, []);

  const allDonation = donationsStat.length;
  const donationInPercent = ((allDonation / 12) * 100).toFixed(2);

  const data = [
    { name: "Donations", value: parseFloat(donationInPercent) },
    { name: "Remaining", value: parseFloat(100 - donationInPercent) },
  ];

  const COLORS = ["#79C23F", "#FF444A"];

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={0}
            outerRadius={120}
            fill="#8884d8"
            label={(entry) => `${entry.name} ${entry.value}%`}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div>
        <div className="flex gap-10 justify-center items-center mt-16">
          <p className="font-semibold">
            Your Donation <span className=" ml-3 px-12  bg-[#79C23F]"></span>
          </p>{" "}
          <p className="font-semibold">
            Your Remaining <span className=" ml-3 px-12 bg-[#FF444A]"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
