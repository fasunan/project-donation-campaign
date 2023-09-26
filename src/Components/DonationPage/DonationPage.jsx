import PropTypes from "prop-types";

const DonationPage = ({ donations }) => {
  const {
    image,
    title,
    price,
    category,
    card_bg_color,
    text_color,
    category_bg_color,
  } = donations;

  const donationCardStyle = {
    backgroundColor: card_bg_color,
  };
  const DonationCategoryBgColor = {
    backgroundColor: category_bg_color,
  };
  const DonationTextStyles = {
    color: text_color,
  };

  return (
    <div>
      <div
        className="card card-side bg-base-100 shadow-xl "
        style={donationCardStyle}
      >
        <figure>
          <img className="w-96" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <p style={DonationTextStyles}>{category}</p>
          <h2 className="card-title">{title}</h2>
          <p style={DonationTextStyles}>{price}</p>
          <div className="card-actions justify-end">
            <button
              style={DonationCategoryBgColor}
              className="btn btn-primary border-none"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
DonationPage.propTypes = {
  donations: PropTypes.object,
};
export default DonationPage;
