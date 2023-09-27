import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ShowData = ({ data }) => {
  const cardStyles = {
    backgroundColor: data.card_bg_color,
  };
  const categoryBgColor = {
    backgroundColor: data.category_bg_color,
  };
  const textStyles = {
    color: data.text_color,
  };
  return (
    <div>
      <Link to={`/showdetails/${data.id}`}>
        <div
          className="card card-compact mt-8 bg-base-100 shadow-xl "
          style={cardStyles}
        >
          <figure className="h-[185px]">
            <img src={data.image} alt="" />
          </figure>
          <div className="card-body" style={textStyles}>
            <h4
              className="text-sm font-medium px-2 py-1 w-fit rounded-lg"
              style={categoryBgColor}
            >
              {data.category}
            </h4>
            <h2 className="card-title">{data.title}</h2>
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
