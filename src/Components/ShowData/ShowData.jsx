import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ShowData = ({ data }) => {
  const cardStyles = {
    backgroundColor: data.card_bg_color,
  };

  const textStyles = {
    color: data.text_color,
  };
  return (
    <div>
      <Link to={"/donation"}>
        <div
          className="card card-compact mt-8 bg-base-100 shadow-xl "
          style={cardStyles}
        >
          <figure>
            <img src={data.image} alt="" />
          </figure>
          <div className="card-body">
            <h4 style={textStyles}> {data.category}</h4>
            <h2 className="card-title" style={textStyles}>
              {data.title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};
ShowData.propTypes = {
  data: PropTypes.object,
};
export default ShowData;
