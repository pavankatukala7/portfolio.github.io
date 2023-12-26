import React, { useEffect, useState } from "react";
import { StyledAppBar } from "../styles/Styles";
import {
  Avatar,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AUTHOR_NAME } from "../constants/displayConstants";
import profileImage from "../assets/profile.jpeg";
import BasicPopover from "./Calendar";

const AppBarComponent = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <StyledAppBar>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <IconButton color="inherit">
          <Avatar
            alt="Remy Sharp"
            src={profileImage}
            sx={{ width: 48, height: 48 }}
          />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {AUTHOR_NAME}
        </Typography>
        <BasicPopover  formattedDateTime={formattedDateTime}/>
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBarComponent;
