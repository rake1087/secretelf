import React, { Component } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Image from '../media/tree.jpg';
import Image2 from '../media/paty.png';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Modal from './Modal'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Hints2 from './Hints2'
import Image3 from '../media/question.png'









export default class InitialPage extends Component {
    constructor(props) {
        super(props);
        this.state = { isCorrect: null, isCorrect2: null };
      }
  render() {

    const theme = createTheme();
    const handleChange = event => {
        if (event.target.value === 'Paty'){
            this.setState({isCorrect: true});
            console.log(this.state.isCorrect)
            

        }else{
            console.log(this.state.isCorrect)
            
        }
        
      };
      const handle2ndChange = event => {
        if (event.target.value === 'Dario'){
            this.setState({isCorrect2: true});
            console.log(this.state.isCorrect2)
            

        }else{
            console.log(this.state.isCorrect2)
            
        }
        
      };

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
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} bgcolor = '#5cdb95' color = '#edf5e1' square>
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
                            }} src= {this.state.isCorrect ? Image2 : Image3 }/>
                        <Modal />
                            <Typography variant = 'h6' >
                            <Grid container spacing={3} columns={16}>
                                <Grid item xs={8} mt = {2}>
                                    Merry Christmas,
                                </Grid>
                                <Grid item xs={8}>
                                    
                                <TextField id="standard-basic" name='name' label="Guess the Name!" variant="standard" error = {!this.state.isCorrect} helperText = {this.state.isCorrect ? "That is correct" : "Keep Trying, Its Case Sensitve"} onChange = {handleChange} disabled = {this.state.isCorrect} color = {!this.state.isCorrect ? 'success' : 'warning'}/>

                                </Grid>
                            </Grid>

                            </Typography> 

                            <Typography variant = 'h6'>
                                I bet you didn't know Christmas elfs knew ReactJS, huh. Well I hope you enjoy you holidays, and even though I'm still getting to know you, I hope you can figure out who I am! It might be kind of hard since I only added the things Ive seen so far (clue? maybe, maybe not). Anyway, enjoy your holidays, and Ill share the github with you because hosting costs money haha! Merry Christmas, 
                            </Typography>
                            <Typography variant = 'h6'>
                                Your Secret Elf,
                            </Typography>
                            <TextField id="standard-basic" label="Guess the Name!" variant="standard" error = {!this.state.isCorrect2} helperText = {this.state.isCorrect2 ? "That is correct" : "Keep Trying, Its Case Sensitive"} onChange = {handle2ndChange} disabled = {this.state.isCorrect2} color = {!this.state.isCorrect2 ? 'success' : 'warning'}/>
                       

                </Box>
                <Hints2 />





            </Grid>

            
        </Grid>
     </ThemeProvider>
        

    )
  }
}
