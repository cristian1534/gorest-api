import React, { useEffect } from "react";
import { Container, Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const MustLogIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);

  return (
    <div>
      <Container maxWidth="md">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <img
            src="https://4.bp.blogspot.com/-n1vI5vXiG6g/WLlb1chdt6I/AAAAAAAAB9Y/MLQs_lxkQpkzmSAA1ZAuWrJ1dhZQWkZvACLcB/s1600/login.png"
            alt="mustLoggIn"
          />
        </Box>
      </Container>
    </div>
  );
};

export default MustLogIn;
