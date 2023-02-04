import React, { useState } from "react";
import {
  Box,
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name || !password) {
      return swal({
        title: "COULD NOT LOGGED IN",
        text: "Field must be completed",
        icon: "error",
      });
    }
    name === user
      ? navigate("/home")
      : swal({
          title: "COULD NOT LOGGED IN",
          text: "Verify Name or Password",
          icon: "error",
        });
  };

  return (
    <div className="App">
      <div className="Update-Form">
        <Typography component="h2" variant="h2">
          Login
        </Typography>
        <Box my={2}>
          <Card>
            <CardContent>
              <Grid container direction="row" spacring={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    required
                    error={false}
                    label="Name"
                    type="text"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    helperText="Field Required"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    error={false}
                    label="Password"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    helperText="Field Required"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Grid>

                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  fullWidth
                  onClick={handleLogin}
                >
                  CONFIRM
                </Button>
              </Grid>
              <Grid>
                <Link to="/register">
                  <Typography>Register HERE if do not have account.</Typography>
                </Link>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
  );
};

export default LoginForm;
