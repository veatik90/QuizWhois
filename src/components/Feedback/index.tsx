import { FC, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Feedback: FC = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [isOpen, setIsOpen] = useState(false);

  const handleFeedbackOpen = () => {
    setIsOpen(true);
  };

  const handleFeedbackClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isMobile ? (
        <IconButton size="large" color="inherit" onClick={handleFeedbackOpen}>
          <EmailIcon />
        </IconButton>
      ) : (
        <IconButton size="large" color="inherit" onClick={handleFeedbackOpen}>
          <EmailIcon />
          &nbsp;
          <Typography variant="body2">Обратная связь </Typography>
        </IconButton>
      )}

      <Dialog fullWidth maxWidth="sm" open={isOpen} onClose={handleFeedbackClose}>
        <DialogTitle>Привет!</DialogTitle>
        <DialogContent>
          <DialogContentText>Мы с радостью ответим на любые ваши вопросы!</DialogContentText>
          <TextField multiline autoFocus margin="dense" id="dialog" fullWidth rows={4} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFeedbackClose}>Отмена</Button>
          <Button onClick={handleFeedbackClose}>Отправить</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
