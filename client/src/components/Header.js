import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Avatar,
  Tooltip,
  ThemeProvider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import MenuBar from "./MenuBar";
import ButtonCo from "./ButtonCo";
import darkTheme from "../theme/DarkMod";

const Header = ({ pages, settings }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    setting === "Logout" && setIsLogin(!isLogin);
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar data-testid="header" position="sticky">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              component="section"
              sx={{
                mr: 5,
                display: { xs: "none", md: "flex" },
              }}
            >
              <img
                className="header-logo"
                src={require("../assets/image/logo.png")}
                alt=""
              />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <MenuBar
                items={pages}
                anchorEl={anchorElNav}
                handleClose={handleCloseNavMenu}
              />
            </Box>
            <Box
              component="section"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
              }}
            >
              <img
                className="header-logo"
                src={require("../assets/image/logo.png")}
                alt=""
              />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <ButtonCo
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "flex" }}
                  startIcon={page === "Home" && <HomeIcon />}
                >
                  {page}
                </ButtonCo>
              ))}
            </Box>

            {isLogin ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Profile"
                      src={require("../assets/image/profile.jpg")}
                    />
                  </IconButton>
                </Tooltip>
                <MenuBar
                  items={settings}
                  anchorEl={anchorElUser}
                  handleClose={handleCloseUserMenu}
                />
              </Box>
            ) : (
              <ButtonCo
                onClick={() => setIsLogin(!isLogin)}
                sx={{ my: 2, color: "white", display: "flex" }}
                startIcon={<LoginIcon />}
              >
                Login
              </ButtonCo>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
