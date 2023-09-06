import {
  List,
  ListItem,
  Typography,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./sidebar.css";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

type MyComponentProps = {
  children: ReactNode;
};

const Sidebar: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <>
      <div id="sidebar">
        <Typography variant="h6" gutterBottom>
          DASHBOARD
        </Typography>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
              <Link to="/users">
                <ListItemAvatar>
                  <ListIcon />
                </ListItemAvatar>
                <ListItemText primary="Listes des clients" />
              </Link>
            </ListItem>

            <ListItem>
              <Link to="/users/new">
                <ListItemAvatar>
                  <AddCircleOutlineIcon />
                </ListItemAvatar>
                <ListItemText primary="Créer client" />
              </Link>
            </ListItem>
          </List>
        </nav>
      </div>
      <div id="detail"> {children} </div>
    </>
  );
};

export default Sidebar;
