import React from "react";

import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const SidebarData = [
  {
    tittle: "Dashboard",
    icon: <DashboardIcon />,
    link: "/teacher",
  },
  {
    tittle: "Profile",
    icon: <PersonIcon />,
    link: "teacher/profile",
  },
  {
    tittle: "Assistance",
    icon: <DescriptionIcon />,
    link: "teacher/assistance",
  },

  {
    tittle: "Settings",
    icon: <SettingsIcon />,
    link: "teacher/settings",
  },
];
