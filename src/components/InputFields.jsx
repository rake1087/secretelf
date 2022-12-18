import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';



export default function InputFields() {
    const [valueString, setValueString] = React.useState('Paty');
    const handleChange = event => {
        if(event.target.value === valueString){
            return true;
        }else{
            return false;
        }
      };
    
  return (
    <div> 
        <Typography variant = 'h6' >
    <Grid container spacing={3} columns={16}>
        <Grid item xs={8} mt = {2}>
            Merry Christmas,
        </Grid>
        <Grid item xs={8}>
            <TextField id="standard-basic" label="Guess the Name!" variant="standard" error = {handleChange}/>
        </Grid>
    </Grid>

    </Typography> 
         <Typography variant = 'h6'>
            I bet you didn't know Christmas elfs knew ReactJS, huh. Well I hope you enjoy you holidays, and even though I'm still getting to know you, I hope you can figure out who I am! It might be kind of hard since I only added the things Ive seen so far (clue? maybe, maybe not). Anyway, enjoy your holidays, and Ill share the github with you because hosting costs money haha! Merry Christmas, 
        </Typography>
        <Typography variant = 'h6'>
        Your Secret Elf,
        </Typography>
        <TextField id="standard-basic" label="Guess the Name!" variant="standard"  />
    </div>
  )
}
