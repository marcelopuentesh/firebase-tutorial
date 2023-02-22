import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SettingsIcon from "@mui/icons-material/Settings";
import "../App.css";

export const StudentSidebar = [
  { tittle: "Dashboard", icon: <DashboardIcon />, link: "/student" },
  { tittle: "Profile", icon: <PersonIcon />, link: "student/profile" },
  {
    tittle: "Assistance",
    icon: <SummarizeIcon />,
    link: "student/assistance",
  },
  { tittle: "Settings", icon: <SettingsIcon />, link: "student/settings" },
];
