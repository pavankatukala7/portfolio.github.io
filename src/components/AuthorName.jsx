import React from "react";
import { Typography } from "@mui/material";
import { AUTHOR_NAME } from "../constants/displayConstants";

const AuthorName = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        fontFamily: "monospace",
        fontWeight: 700,
        color: "inherit",
        textDecoration: "none",
      }}
    >
      {AUTHOR_NAME}
    </Typography>
  );
};

export default AuthorName;
