import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AiFillHome } from "react-icons/ai";
import logo from "./Logo3.png";

export default function ButtonAppBar() {
  const imgStyle = {
    width: "50px",
    height: "auto",
    marginRight: "3px", // Adjust the margin as needed
  };

  const flexContainer = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" sx={{ background: "transparent" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ color: "#2bb38a", fontFamily: "Quicksand" }}
          >
            <div style={flexContainer}>
              <img src={logo} alt="" style={imgStyle} />
              CHAT-FUSION
            </div>
          </Typography>
          <Button style={{ fontSize: "1.5rem", color: "#2bb38a" }}>
            <AiFillHome />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
