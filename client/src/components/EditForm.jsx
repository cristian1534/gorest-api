import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser, updateOneUser } from "../redux/actions/users";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Container,
} from "@mui/material";

const EditForm = () => {
  const [userUpdate, setUserUpdate] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  const user = useSelector((state) => state.users.users.data);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();


  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateOneUser(id, userUpdate));
    navigate("/home");
  };
  useEffect(() => {
    dispatch(getOneUser(id));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className="App">
      <Container className="Update-Form">
        <Typography component="h2" variant="h" my={2}>
          Update User
        </Typography>
        <Box my={2}>
          <Card>
            <CardContent>
              <Grid container direction="row" spacring={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    required
                    error={false}
                    label={user ? user.name : ""}
                    type="text"
                    value={userUpdate.name}
                    onChange={(e) =>
                      setUserUpdate({
                        ...user,
                        name: e.target.value,
                      })
                    }
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    helperText="Field Required"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    error={false}
                    label={user ? user.email : ""}
                    type="text"
                    value={userUpdate.email}
                    onChange={(e) =>
                      setUserUpdate({ ...user, email: e.target.value })
                    }
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    helperText="Field Required"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    error={false}
                    label={user ? user.gender : ""}
                    type="text"
                    value={userUpdate.gender}
                    onChange={(e) =>
                      setUserUpdate({ ...user, gender: e.target.value })
                    }
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    helperText="Field Required"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    error={false}
                    label={user ? user.status : ""}
                    type="text"
                    value={userUpdate.status}
                    onChange={(e) =>
                      setUserUpdate({ ...user, status: e.target.value })
                    }
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    helperText="Field Required"
                  />
                </Grid>
                <Button
                  onClick={handleUpdate}
                  color="primary"
                  variant="contained"
                  size="small"
                  fullWidth
                >
                  UPDATE
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default EditForm;
