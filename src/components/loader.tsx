import { Spinner } from "@material-tailwind/react";
import React from "react";

const Loader = () => {
  return (
    <Spinner
      className="h-4 w-4 mr-2"
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    />
  );
};

export default Loader;
