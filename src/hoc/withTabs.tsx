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
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <>
        <Box>
          <Tabs value={pathname} centered>
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
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                      >
                        Тренировочная игра
                      </Button>
                      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem onClick={() => history.push(Routes.RANDOM_QUESTION)}>Случайный вопрос</MenuItem>
                        <MenuItem onClick={() => history.push(Routes.RANDOM_PACK)}>Случайный пакет</MenuItem>
                        <MenuItem onClick={() => history.push(Routes.READY_PACK)}>Готовый пакет</MenuItem>
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
