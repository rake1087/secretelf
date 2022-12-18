import React, { Component } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Image from '../media/tree.jpg';
import Image2 from '../media/paty.png';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';








export default class InitialPage extends Component {
  render() {
    const theme = createTheme();
    return (
     <ThemeProvider theme={theme}>
        <Grid container component='main' sx={{ height: '100vh'}}>
            <CssBaseline />
            <Grid
                item
                xs = {false}
                sm = {4}
                md = {7}
                sx = {{
                    backgroundImage: `url(${Image})`,
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box 
                    sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}>
                        <Avatar sx={{ 
                            m: 1,
                            height: 75,
                            width: 75
                            }} src= {Image2}/>
                            
                       

                </Box>
            </Grid>

            
        </Grid>
     </ThemeProvider>
        

    )
  }
}
