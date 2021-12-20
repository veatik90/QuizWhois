import {
  FormGroup,
  FormControlLabel,
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  MenuItem,
  Button,
  Badge,
} from '@mui/material';
import React, { FC, useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CheckIcon from '@mui/icons-material/Check';
import Switch from '@mui/material/Switch';
import { NavLink } from 'react-router-dom';
import { BoxStyled, SecondaryTextWithBorderStyled, LoginTypographyStyled, LogoutStyled } from './styles';
import { IUserInfo } from './interfaces';
import { MenuStyled } from '../../pages/QuestionCrud/styles';
import { Feedback } from '../Feedback';
import { PACKS } from '../../pages/Notifications/constants';
import { Pack } from '../../pages/Notifications/interfaces';
import { Routes } from '../../configs/routes';

export const Header: FC = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    email: 'user@mail.com',
    login: 'user',
    roles: { isAdmin: true, isPlayer: false },
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [packs, setPacks] = useState<Pack[]>(PACKS);
  const filteredPacks = packs.filter((p) => p.isDraft === true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAuth(event.target.checked);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setIsAuth(false);
    setAnchorEl(null);
  };

  const handleAdminRoleChange = () => {
    if (!userInfo.roles.isAdmin) {
      setUserInfo({
        email: userInfo.email,
        login: userInfo.login,
        roles: {
          isAdmin: !userInfo.roles.isAdmin,
          isPlayer: !userInfo.roles.isPlayer,
        },
      });
    }
    setAnchorEl(null);
  };

  const handlePlayerRoleChange = () => {
    if (!userInfo.roles.isPlayer) {
      setUserInfo({
        email: userInfo.email,
        login: userInfo.login,
        roles: {
          isAdmin: !userInfo.roles.isAdmin,
          isPlayer: !userInfo.roles.isPlayer,
        },
      });
    }
    handleClose();
  };

  return (
    <BoxStyled>
      <FormGroup style={{ position: 'absolute', bottom: '0', left: '0' }}>
        <FormControlLabel
          control={<Switch checked={isAuth} onChange={handleChange} aria-label="login switch" />}
          label={isAuth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'primary.contrastText',
            }}
          >
            QuizWhoIs
          </Typography>
          {isAuth ? (
            <div>
              <Feedback />
              <IconButton
                component={NavLink}
                to={Routes.NOTIFICATIONS}
                size="large"
                aria-label="notifications"
                color="inherit"
              >
                <Badge badgeContent={filteredPacks.length} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuClick}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <MenuStyled
                className="app-bar-menu"
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <LoginTypographyStyled className="login-title" mx={2}>
                  {userInfo.login}
                </LoginTypographyStyled>
                <SecondaryTextWithBorderStyled className="email-title">{userInfo.email}</SecondaryTextWithBorderStyled>
                <MenuItem onClick={handleAdminRoleChange}>
                  <Typography mr={1}>Admin</Typography>
                  {userInfo.roles.isAdmin ? <CheckIcon /> : null}
                </MenuItem>
                <MenuItem onClick={handlePlayerRoleChange}>
                  <Typography mr={1}>Player</Typography>
                  {userInfo.roles.isPlayer ? <CheckIcon /> : null}
                </MenuItem>
                <LogoutStyled className="logout-menu-item" onClick={handleLogout}>
                  Logout
                </LogoutStyled>
              </MenuStyled>
            </div>
          ) : (
            <div>
              <Button component={NavLink} to="/auth" variant="outlined" color="secondary" size="medium">
                Sign In
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </BoxStyled>
  );
};
