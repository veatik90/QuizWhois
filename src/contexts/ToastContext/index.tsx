import { Snackbar, Tooltip, AlertColor } from '@mui/material';
import { createContext, FC, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Toast } from './interfaces';
import { StackStyled, AlertStyled } from './styles';

export const ToastContext = createContext<Toast>({} as Toast);

export const ToastProvider: FC = ({ children }) => {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<AlertColor | undefined>('info');

  const [isCopyTooltipShown, setIsCopyTooltipShown] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  function handleToastOpen(error: string, type: AlertColor | undefined) {
    setIsToastOpen(true);
    setMessage(error);
    setType(type);
    setTimeout(() => {
      setIsToastOpen(false);
      setMessage('');
    }, 6000);
  }

  function handleMessageCopy() {
    setIsCopyTooltipShown(true);

    setTimeout(() => {
      setIsCopyTooltipShown(false);
    }, 1500);
  }

  return (
    <ToastContext.Provider value={{ showMessage: handleToastOpen }}>
      <StackStyled spacing={2}>
        <CopyToClipboard text={message} onCopy={handleMessageCopy}>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            open={isCopyTooltipShown}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="Ошибка скопирована"
          >
            <Snackbar open={isToastOpen} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
              <AlertStyled severity={type}>{message}</AlertStyled>
            </Snackbar>
          </Tooltip>
        </CopyToClipboard>
      </StackStyled>
      {children}
    </ToastContext.Provider>
  );
};
