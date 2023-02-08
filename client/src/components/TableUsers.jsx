import { useState } from "react";
import { useMemo } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/system";
import CustomButton from "../customHooks/CustomButton";
import Loader from "../components/Loader";

const TableUsers = ({ dataSource, isFetching }) => {
  const [pageSize, setPageSize] = useState(5);
  console.log(dataSource)

  const columns =
    [
      {
        title: "Picture",
        field: "photoURL",
        sortable: false,
        width: 80,
        renderCell: (params) => (
          <Avatar
            src="https://p7.hiclipart.com/preview/496/49/113/nadona-user-profile-computer-icons-avatar-windows-vector.jpg"
            alt="avatar"
          />
        ),
      },
      {
        title: "Id",
        field: "id",
        width: 70,
        sortable: false,
      },
      {
        title: "Name",
        field: "name",
        width: 130,
        sortable: false,
      },
      {
        title: "Email",
        field: "email",
        width: 280,
        sortable: false,
      },
      {
        title: "Gender",
        field: "gender",
        editable: true,
        width: 100,
        type: "singleSelect",
        valueOptions: ["male", "female"],
      },
      {
        title: "Status",
        field: "status",
        width: 100,
        sortable: false,
      },
      {
        title: "Edit",
        field: "edit",
        sortable: false,
        width: 100,
        renderCell: (params) => <CustomButton params={params} />,
      },
    ]
    

  return (
    <Container maxWidth="md">
      {dataSource ? (
         <Box
         sx={{
           height: 400,
           widows: "100%",
         }}
       >
         <Typography
           variant="h3"
           component="h3"
           color="#29b6f6"
           sx={{ textAlign: "center", mt: 3, mb: 3 }}
         >
           GO REST API
         </Typography>
         <DataGrid
           columns={columns}
           rows={dataSource}
           getRowId={(row) => row.id}
           rowsPerPageOptions={[5, 10, 15]}
           pageSize={pageSize}
           onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
           textAlign="center"
         />
       </Box>
      ):
      <Loader/>} 
     
    </Container>
  );
};

export default TableUsers;
