import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowIdDetails from "../ShowIdDetails/ShowIdDetails";

const ShowDetails = () => {
  const [showDetails, setShowDetails] = useState([]);

  const { id } = useParams();

  const details = useLoaderData();

  useEffect(() => {
    const findId = details?.find((showId) => showId.id === id);
    setShowDetails(findId);
  }, [id, details]);
  return (
    <div>
      <ShowIdDetails showDetails={showDetails}></ShowIdDetails>
    </div>
  );
};

export default ShowDetails;
