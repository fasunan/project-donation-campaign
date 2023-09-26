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
          <p
            className="text-lg font-medium px-2 py-1 w-fit rounded-lg"
            style={donationCardStyle}
          >
            <span style={DonationTextStyles}> {category}</span>
          </p>
          <h2 className="card-title">{title}</h2>
          <p style={DonationTextStyles}>$: {price}</p>
          <div className="card-actions">
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
