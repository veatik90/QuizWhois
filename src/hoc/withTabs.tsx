import { Tab, Tabs, MenuItem, Menu, Button } from '@mui/material';
import { Box } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ElementType, useState } from 'react';
import { useHistory } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import { appTabsConfig } from '../configs/appTabs';
import { Routes } from '../configs/routes';

export function withTabs(Component: ElementType) {
  return () => {
    const { pathname } = useLocation();
    const history = useHistory();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorEl);

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    const handleMenuItemClick = (event: React.MouseEvent<HTMLLIElement>) => {
      const { url = '' } = event.currentTarget?.dataset;
      history.push(url);
    };

    const checkTabValue = () => {
      return [Routes.RANDOM_QUESTION, Routes.RANDOM_PACK, Routes.READY_PACK].some((path) => path === pathname)
        ? Routes.TRAINING
        : pathname;
    };

    return (
      <>
        <Box>
          <Tabs value={checkTabValue()} centered>
            {Object.values(appTabsConfig).map((tab) => {
              return tab.url === Routes.TRAINING ? (
                <Tab
                  key={tab.order}
                  label={
                    // eslint-disable-next-line react/jsx-wrap-multilines
                    <div>
                      <Button
                        disableElevation
                        disableRipple
                        disableFocusRipple
                        color="inherit"
                        aria-expanded={isOpen ? 'true' : undefined}
                        onClick={handleMenuClick}
                        endIcon={<KeyboardArrowDownIcon />}
                      >
                        Тренировочная игра
                      </Button>
                      <Menu anchorEl={anchorEl} open={isOpen} onClose={handleMenuClose}>
                        <MenuItem
                          data-url={Routes.RANDOM_QUESTION}
                          onClick={handleMenuItemClick}
                          selected={pathname === Routes.RANDOM_QUESTION}
                        >
                          Случайный вопрос
                        </MenuItem>
                        <MenuItem
                          data-url={Routes.RANDOM_PACK}
                          onClick={handleMenuItemClick}
                          selected={pathname === Routes.RANDOM_PACK}
                        >
                          Случайный пакет
                        </MenuItem>
                        <MenuItem
                          data-url={Routes.READY_PACK}
                          onClick={handleMenuItemClick}
                          selected={pathname === Routes.READY_PACK}
                        >
                          Готовый пакет
                        </MenuItem>
                      </Menu>
                    </div>
                  }
                  value={tab.url}
                />
              ) : (
                <Tab key={tab.order} label={tab.label} value={tab.url} component={Link} to={tab.url} />
              );
            })}
          </Tabs>
        </Box>
        <Component />
      </>
    );
  };
}
