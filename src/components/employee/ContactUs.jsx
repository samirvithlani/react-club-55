import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../context/context";

export const ContactUs = () => {
  const { user } = useContext(AppContext);
  console.log(user);
  var location = useLocation();
  console.log(location);
  return (
    <div>
      ContactUs
      {location?.state?.data?.name}
    </div>
  );
};
