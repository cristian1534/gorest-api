import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CustomButton = ({ params }) => {
  return (
    <div>
      <Link to={`/edit/${params.id}`} style={{"textDecoration":"none"}}>
        <Button variant="contained" color="primary" size="small">
          Edit
        </Button>
      </Link>
    </div>
  );
};

export default CustomButton;
