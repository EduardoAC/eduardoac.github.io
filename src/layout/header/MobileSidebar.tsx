import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Divider,
  Toolbar,
} from "@mui/material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { navigationLinks } from "./constants";

interface MobileSideBarProps {
  handleDrawerToggle: any;
}

export function MobileSideBar({ handleDrawerToggle }: MobileSideBarProps) {
  return (
    <Box component="div" onClick={handleDrawerToggle}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
          Menu
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>

      <Divider />
      <List>
        {navigationLinks.map(({ label, url }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton href={url} sx={{ textAlign: "center" }}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
