import { useEffect, useState } from "react";
import DonationPage from "../DonationPage/DonationPage";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [noDonationData, setNoDonationData] = useState(false);

  const [isSeeAll, setIsSeeAll] = useState(false);

  useEffect(() => {
    const addDonation = JSON.parse(localStorage.getItem("donations"));
    if (addDonation) {
      setDonations(addDonation);
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
                className="btn bg-red-400 mt-8 "
              >
                See All
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
