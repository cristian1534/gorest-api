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
import { Link } from "react-router-dom";
import swal from "sweetalert";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return swal({
        title: "COULD NOT REGISTER",
        text: "Field must be completed",
        icon: "error",
      });
    }
    localStorage.setItem("user", name);
    navigate("/login");
  };

  return (
    <div className="App">
      <div className="Update-Form">
        <Typography component="h2" variant="h2">
          Register
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
                    label="Email"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    helperText="Field Required"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    error={false}
                    type="password"
                    label="Password"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    helperText="Field Required"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>

                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  size="small"
                  fullWidth
                  onClick={handleSubmit}
                >
                  CONFIRM
                </Button>
              </Grid>
              <Grid>
                <Link to="/login">
                  <Typography>Login HERE if have account.</Typography>
                </Link>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
  );
};

export default RegisterForm;
