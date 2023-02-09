import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SettingsIcon from "@mui/icons-material/Settings";
import "../App.css";

export const SidebarData = [
  { tittle: "Dashboard", icon: <DashboardIcon />, link: "/" },
  { tittle: "Profile", icon: <PersonIcon />, link: "/profile" },
  { tittle: "Assistance", icon: <SummarizeIcon />, link: "/assistance" },
  { tittle: "Settings", icon: <SettingsIcon />, link: "/settings" },
];
