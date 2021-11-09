import { Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { appTabsConfig } from '../../configs/appTabs';
import { Routes } from '../../configs/routes';

export const AppTabs: FC = () => {
  const [activeTab, setActiveTab] = useState(Routes.CATALOG);

  const handleChange = (event: React.SyntheticEvent, newTab: Routes) => {
    setActiveTab(newTab);
  };
  return (
    <Box>
      <Tabs value={activeTab} onChange={handleChange} centered>
        {Object.values(appTabsConfig).map((tab) => (
          <Tab key={tab.order} label={tab.label} value={tab.url} component={Link} to={tab.url} />
        ))}
      </Tabs>
    </Box>
  );
};
