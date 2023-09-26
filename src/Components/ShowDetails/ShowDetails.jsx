import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonateDetails from "../DonateDetails/DonateDetails";

const ShowDetails = () => {
  const [showDetails, SetShowDetails] = useState({});

  const { id } = useParams();

  const details = useLoaderData();

  useEffect(() => {
    const findDetails = details?.find((detail) => detail.id == id);

    SetShowDetails(findDetails);
  }, [id, details]);

  return (
    <div className="flex justify-center">
      <DonateDetails showDetails={showDetails}></DonateDetails>
    </div>
  );
};

export default ShowDetails;
