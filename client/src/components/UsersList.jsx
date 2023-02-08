import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/users";
import { useState } from "react";
import TableUsers from "./TableUsers";
import { Button, Grid } from "@mui/material";
import MustLogIn from "./MustLogIn";

const UsersList = () => {
  const [page, setPage] = useState(1);
  const user = localStorage.getItem("user")

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers(page));
  }, [page]);

  return (
      <div>
        {!user && <MustLogIn/>}
        <Grid container spacing={3}>
          <Grid item xs>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => setPage(page - 1)}
              style={{ marginLeft: "85%", display: "flex", marginTop: "50%" }}
            >
              PREV
            </Button>
          </Grid>
          <Grid item xs={6}>
            <TableUsers
              dataSource={users.users.data}
              isFetching={users.isFetching}
            />
          </Grid>
          <Grid item xs>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => setPage(page + 1)}
              style={{
                marginRight: "85%",
                display: "flex",
                marginTop: "50%",
              }}
            >
              NEXT
            </Button>
          </Grid>
        </Grid>
      </div>
  );
};

export default UsersList;
