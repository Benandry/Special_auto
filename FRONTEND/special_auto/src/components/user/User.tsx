import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import "./user.css";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { IUser } from "../../typings/user";
import { useEffect, useState } from "react";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

const user = () => {
  const [userData, setUserData] = useState<IUser[]>([]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "first_name", headerName: "Nom", width: 255 },
    { field: "last_name", headerName: "Prenom ", width: 255 },
    { field: "number_cin", headerName: "Numero CIN ", width: 130 },
    { field: "delivery_cin", headerName: "Délivrèe à  ", width: 130 },
    { field: "starting_point", headerName: "Lieu de depart ", width: 130 },
    { field: "ending_point", headerName: "Lieu de d'arrivée ", width: 130 },
    { field: "Actions", headerName: "Actions ", width: 255 },
  ];
  const handleEditClick = () => {
    console.log("ddsfsdfsdfsd");
  };

  const fetchDataUser = async () => {
    try {
      // URL DE BACKEND
      const URL_DU_BACKEND = "http://localhost:4000/api_special_auto";

      const responseUser = await axios.get(`${URL_DU_BACKEND}/users`);
      if (responseUser.statusText === "OK") {
        const user_data = await responseUser.data;
        setUserData(
          Object.values([
            ...user_data,
            // {
            //   field: "actions",
            //   headerName: "Actions",
            //   sortable: false,
            //   width: 150,
            //   renderCell: (params) => (
            //     <div>
            //       <IconButton
            //         color="primary"
            //         onClick={() => handleEditClick(params.row.id)}
            //       >
            //         <EditIcon />
            //       </IconButton>
            //       <IconButton
            //         color="secondary"
            //         onClick={() => handleDeleteClick(params.row.id)}
            //       >
            //         <DeleteIcon />
            //       </IconButton>
            //     </div>
            //   ),
            // },
          ])
        );
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };

  useEffect(() => {
    fetchDataUser();
  }, []);
  console.log("userData", userData);

  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <Item>
          <Typography variant="h4" gutterBottom>
            Listes Utilisateur partants
          </Typography>
        </Item>
        <Item>
          <Grid container spacing={2}>
            <Grid item xs={12} justifyContent="flex-end">
              <Link to="/users/new">
                <Button variant="contained">Inserer nouveau utilisateur</Button>
              </Link>
            </Grid>
          </Grid>
        </Item>
        <Item>
          <DataGrid
            rows={userData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </Item>
      </Stack>
    </Box>
  );
};

export default user;
