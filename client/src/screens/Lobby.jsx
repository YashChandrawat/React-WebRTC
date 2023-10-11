import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import { Container, Typography, TextField, Button } from "@mui/material";
import "./LobbyScreen.css";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  const headingStyles = {
    fontFamily: "Quicksand",
    fontSize: "3rem",
    color: "#111",
    marginBottom: "1rem",
  };

  const background = {
    backgroundImage:
      'url("https://img.freepik.com/free-photo/close-up-hands-with-smartphone_23-2148938362.jpg?w=1060&t=st=1697003614~exp=1697004214~hmac=6c0b4f4521c6f4f121c1464514577cb541703e6bcb18b296f0255afe2e61b4dd")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // filter: "blur(1px)", // Add this line to apply a blur effect (adjust the value as needed)
  };

  const leftStyle = {
    width: "40%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight : "5%",
    marginLeft : "5%"
  };

  const main = {
    height: "100%",
    width: "80%",
    marginInline: "auto",
    display: "flex",
  };

  const rightStyle = {
    width: "60%",
    display: "flex",
  };

  

  return (
    <div style={main}>
      <div style={leftStyle}>
        <Typography variant="h4" sx={headingStyles}>
          Chat Fusion
        </Typography>
        <form onSubmit={handleSubmitForm}>
          <TextField
            fullWidth
            label="Email ID"
            variant="outlined"
            type="email"
            required
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              marginBottom: "1rem",
              backgroundColor: "white",
            }} // Example: Set background color
          />
          <TextField
            fullWidth
            label="Room Number"
            variant="outlined"
            type="text"
            id="room"
            required
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            sx={{ marginBottom: "1rem", backgroundColor: "white" }} // Example: Set background color
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              backgroundColor: "#ff5722",
              "&:hover": { backgroundColor: "#f4511e" },
            }} // Example: Change button color
          >
            Join
          </Button>
        </form>
      </div>
      <div style={rightStyle}>
        <img
          src={
            "https://img.freepik.com/free-vector/remote-meeting-concept-illustration_114360-4360.jpg?w=996&t=st=1697004451~exp=1697005051~hmac=f364770f057bb2829cd1d65269aae3fddf1b81c0a61108986b438f2cf17019ea"
          }
          alt=""
          className="img-lobby"
        />
      </div>
    </div>
  );
};

export default LobbyScreen;
