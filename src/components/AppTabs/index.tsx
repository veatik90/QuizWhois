import { Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { appTabsConfig } from '../../configs/appTabs';

export const AppTabs: FC = () => {
  const { pathname } = useLocation();
  return (
    <Box>
      <Tabs value={pathname} centered>
        {Object.values(appTabsConfig).map((tab) => (
          <Tab key={tab.order} label={tab.label} value={tab.url} component={Link} to={tab.url} />
        ))}
      </Tabs>
    </Box>
  );
};
