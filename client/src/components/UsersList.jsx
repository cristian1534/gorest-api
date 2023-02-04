import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/users";
import TableUsers from "./TableUsers";
import Loader from "./Loader";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      {users.isFetching ? (
        <Loader />
      ) : (
        <TableUsers dataSource={users.users.data} isFetching={users.isFetching} />
      )}
    </div>
  );
};

export default UsersList;
