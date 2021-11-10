import { MenuItem, Menu, Button } from '@mui/material';
import { FC, useState } from 'react';
import { useHistory } from 'react-router';

export const TrainingTabMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();
  return (
    // eslint-disable-next-line react/jsx-wrap-multilines
    <div>
      <Button color="inherit" size="small" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
        Тренировочная игра
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => history.push('/training/randomQuestion')}>Случайный вопрос</MenuItem>
        <MenuItem onClick={() => history.push('/training/randomPack')}>Случайный пакет</MenuItem>
        <MenuItem onClick={() => history.push('/training/readyPack')}>Готовый пакет</MenuItem>
      </Menu>
    </div>
  );
};
