import { CircularProgress } from "@mui/material";
import React from "react";
const Loading = (props) => {
  return (
    <div
      className="loading"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <CircularProgress size={35} style={{ color: "black" }} />
    </div>
  );
};

export default Loading;
