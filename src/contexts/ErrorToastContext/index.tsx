import { Snackbar, Tooltip } from '@mui/material';
import { createContext, FC, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { ErrorToast } from './interfaces';
import { StackStyled, AlertStyled } from './styles';

export const ErrorToastContext = createContext<ErrorToast>({} as ErrorToast);

export const ErrorToastProvider: FC = ({ children }) => {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [isCopyTooltipShown, setIsCopyTooltipShown] = useState(false);

  function handleToastOpen(error: string) {
    setIsToastOpen(true);
    setErrorMessage(error);

    setTimeout(() => {
      setIsToastOpen(false);
      setErrorMessage('');
    }, 6000);
  }

  function handleMessageCopy() {
    setIsCopyTooltipShown(true);

    setTimeout(() => {
      setIsCopyTooltipShown(false);
    }, 1500);
  }

  return (
    <ErrorToastContext.Provider value={{ showError: handleToastOpen }}>
      <StackStyled spacing={2}>
        <CopyToClipboard text={errorMessage} onCopy={handleMessageCopy}>
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
              <AlertStyled severity="error">{errorMessage}</AlertStyled>
            </Snackbar>
          </Tooltip>
        </CopyToClipboard>
      </StackStyled>
      {children}
    </ErrorToastContext.Provider>
  );
};
