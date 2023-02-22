import React from "react";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DescriptionIcon from "@mui/icons-material/Description";

import AttachFileIcon from "@mui/icons-material/AttachFile";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const SidebarData = [
  {
    tittle: "Dashboard",
    icon: <DashboardIcon />,
    link: "/admin",
  },
  {
    tittle: "Users",
    icon: <PeopleAltIcon />,
    link: "/admin/users",
  },
  {
    tittle: "Show Data",
    icon: <DescriptionIcon />,
    link: "/admin/data",
  },

  {
    tittle: "Manage Files",
    icon: <AttachFileIcon />,
    link: "/admin/manage-files",
  },
];
