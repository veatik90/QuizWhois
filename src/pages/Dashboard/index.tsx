import * as React from 'react';
import { Tabs, Tab, Box, Container } from '@mui/material';
import { GameCatalog } from '../GameCatalog';

interface TabPanelProps {
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, value, index, ...other } = props;

  return (
    <>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </>
  );
}

export function Dashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.warn(newValue);
    setValue(newValue);
  };

  return (
    <Box>
      <Container component="main" maxWidth="lg">
        <Box>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="1" />
            <Tab label="Каталог игр" />
            <Tab label="Архив игр" />
            <Tab label="Тренировочная игра" />
            <Tab label="Моментальная игра" />
            <Tab label="Создание пакета" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item 1
        </TabPanel>
        {value === 1 && <GameCatalog />}

        <TabPanel value={value} index={2}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Three
        </TabPanel>
      </Container>
    </Box>
  );
}
