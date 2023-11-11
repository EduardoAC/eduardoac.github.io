import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Link,
} from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { navigationLinks } from "./constants";
import { MobileSideBar } from "./MobileSidebar";

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" underline="none">
              My Interactive CV
            </Link>
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Desktop links to display */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navigationLinks.map(({ label, url }) => (
              <Button key={label} sx={{ color: "#fff" }} href={url}>
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {/* Mobile menu to display */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}
      >
        <MobileSideBar handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </>
  );
}
