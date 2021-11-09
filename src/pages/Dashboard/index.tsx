import * as React from 'react';
import { Tabs, Tab, Box, Container, MenuItem, Menu, Button } from '@mui/material';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { GameCatalog } from '../GameCatalog';
import { PackCreation } from '../PackCreation';

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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();
  const { page } = useParams<{ page: string }>();

  const tabNameToIndex: { [key: number]: string } = {
    0: 'allGames',
    1: 'archive',
    2: 'training',
    3: 'momentary',
    4: 'packCreation',
  };

  const indexToTabName: { [key: string]: number } = {
    allGames: 0,
    archive: 1,
    training: 2,
    momentary: 3,
    packCreation: 4,
  };
  const getTab = (index: keyof typeof tabNameToIndex): string => {
    return tabNameToIndex[index];
  };
  const getIndex = (index: keyof typeof indexToTabName): number => {
    return indexToTabName[index];
  };
  const [value, setValue] = React.useState(getIndex(page));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    history.push(`/${getTab(newValue)}`);
    console.warn(newValue);
    setValue(newValue);
  };

  return (
    <Box>
      <Container component="main" maxWidth="lg">
        <Box>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Каталог игр" />
            <Tab label="Архив игр" />
            <Tab
              label={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <div>
                  <Button color="inherit" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                    Тренировочная игра
                  </Button>
                  <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem onClick={() => history.push('/training/randomQuestion')}>Случайный вопрос</MenuItem>
                    <MenuItem onClick={() => history.push('/training/randomPack')}>Случайный пакет</MenuItem>
                    <MenuItem onClick={() => history.push('/training/readyPack')}>Готовый пакет</MenuItem>
                  </Menu>
                </div>
              }
            />
            <Tab label="Моментальная игра" />
            <Tab label="Создание пакета" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <GameCatalog />
        </TabPanel>
        <TabPanel value={value} index={1}>
          архив
        </TabPanel>
        <TabPanel value={value} index={2}>
          тренировочная
        </TabPanel>
        <TabPanel value={value} index={3}>
          моментальная
        </TabPanel>
        <TabPanel value={value} index={4}>
          <PackCreation />
        </TabPanel>
      </Container>
    </Box>
  );
}
