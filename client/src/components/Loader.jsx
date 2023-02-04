import React from "react";
import { Container } from "@mui/system";
import { Box } from "@mui/material";

const Loader = () => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <img
          src="https://s3.scoopwhoop.com/anj/loading/594155876.gif"
          alt="loader"
        />
      </Box>
    </Container>
  );
};

export default Loader;
