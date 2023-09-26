import { useEffect, useState } from "react";
import DonationPage from "../DonationPage/DonationPage";
import Statistics from "../Statistics/Statistics";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [noDonationData, setNoDonationData] = useState(false);

  const [isSeeAll, setIsSeeAll] = useState(false);
  const totalDonationCount = donations.length;

  // const [donationPrice, SetDonationPrice] = useState(0);

  useEffect(() => {
    const addDonation = JSON.parse(localStorage.getItem("donations"));
    if (addDonation) {
      setDonations(addDonation);
      // const totalDonation = addDonation.reduce(
      //   (preValue, currentDonateValue) => preValue + currentDonateValue.price,
      //   0
      // );
      // SetDonationPrice(totalDonation);
    } else {
      setNoDonationData("Please donate First");
    }
  }, []);

  return (
    <div>
      {/* <div>total donate:{donations.length}</div> */}
      {noDonationData ? (
        <p className="h-[80vh] flex justify-center items-center text-xl font-semibold">
          {noDonationData}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-5">
            {isSeeAll
              ? donations.map((donations) => (
                  <DonationPage
                    key={donations.id}
                    donations={donations}
                  ></DonationPage>
                ))
              : donations
                  .slice(0, 4)
                  .map((donations) => (
                    <DonationPage
                      key={donations.id}
                      donations={donations}
                    ></DonationPage>
                  ))}
          </div>
          <div className="flex justify-center items-center">
            {donations.length > 4 && (
              <button
                onClick={() => setIsSeeAll(!isSeeAll)}
                className="btn bg-red-400 "
              >
                See All
              </button>
            )}
          </div>
        </div>
      )}
      {<Statistics totalDonationCount={totalDonationCount}></Statistics>}
    </div>
  );
};

export default Donation;
