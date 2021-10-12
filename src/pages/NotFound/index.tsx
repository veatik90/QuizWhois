import { Box, Button, Stack, ThemeProvider, Typography } from '@mui/material';
import { theme } from '../../themes';


export const NotFound = () => 
    <Box
    sx={{
    width: '100%',
    minHeight: '100vh',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
    }}
    >
      <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      >
        <ThemeProvider theme={theme}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQAw3md2--EMzzKYG7AyImi9BeJvaJLO4riQ&usqp=CAU" alt="telescope" style={{borderRadius:'50%'}}/>
            <Typography variant="subtitle1" align='center'>
                404 | Page not found
            </Typography>
            <Button href='/' variant='outlined' color='primary' size='large'>home</Button>
        </ThemeProvider>
    </Stack>
    </Box>
