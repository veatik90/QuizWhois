import { Global } from '@emotion/react';
import { Divider, List, ListItem, ListItemButton, SwipeableDrawer, Typography, useTheme } from '@mui/material';
import { FC, useState } from 'react';
import { drawerBleeding } from '../../../../shared/constants';
import { IDrower } from './interfaces';
import {
  Puller,
  QuestionsNumberBoxStyled,
  QuestionsNumberStyled,
  QuestionsListBoxStyled,
  ListItemTextStyled,
} from './styles';

export const SwipeableEdgeDrawer: FC<IDrower> = ({ questions, handleQuestionQlick }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <QuestionsNumberBoxStyled theme={theme} className="questions-number-box">
          <Puller theme={theme} />
          <QuestionsNumberStyled theme={theme}>
            {`Количество созданных вопросов: ${questions.length}`}
          </QuestionsNumberStyled>
        </QuestionsNumberBoxStyled>
        <QuestionsListBoxStyled theme={theme}>
          <List>
            {questions.length > 0 ? (
              questions.map((elem, index) => (
                <>
                  <ListItem key={elem.id} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        handleQuestionQlick(elem.id);
                        setOpen(false);
                      }}
                    >
                      <ListItemTextStyled theme={theme} primary={`${index + 1}) ${elem.question}`} />
                    </ListItemButton>
                  </ListItem>
                  <Divider component="li" />
                </>
              ))
            ) : (
              <Typography align="center" color="gray">
                Пока нет созданных вопросов
              </Typography>
            )}
          </List>
        </QuestionsListBoxStyled>
      </SwipeableDrawer>
    </>
  );
};
