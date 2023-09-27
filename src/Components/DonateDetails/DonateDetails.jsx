import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonateDetails = ({ showDetails }) => {
  const { id, image, price, title, description, text_color } =
    showDetails || {};

  const handleAddDonation = () => {
    const addDonationArray = [];

    const addDonation = JSON.parse(localStorage.getItem("donations"));

    if (!addDonation) {
      addDonationArray.push(showDetails);
      localStorage.setItem("donations", JSON.stringify(addDonationArray));
      toast.success("Donation Successful!");
    } else {
      const isExists = addDonation.find((showDetails) => showDetails.id == id);
      if (!isExists) {
        addDonationArray.push(...addDonation, showDetails);
        localStorage.setItem("donations", JSON.stringify(addDonationArray));
        toast.success("Donation Successful!");
      } else {
        toast.error("Already donated");
      }
    }
  };

  const categoryBgColorBtn = {
    backgroundColor: text_color,
  };

  return (
    <div>
      <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <div className="relative">
            <img className="rounded-t-lg w-full" src={image} alt="" />
            <div className="absolute inset-0 top-72 bg-black opacity-50"></div>
          </div>
          <Link>
            <button
              onClick={handleAddDonation}
              style={categoryBgColorBtn}
              className="btn border-none text-white font-normal text-sm rounded-sm  absolute -mt-14 ml-4"
            >
              Donate: ${price}
            </button>
          </Link>
        </div>

        <div className="p-5">
          <a href="#">
            <h5 className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};
DonateDetails.propTypes = {
  showDetails: PropTypes.object,
};
export default DonateDetails;
