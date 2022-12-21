import * as React from 'react';
import Modal from '@mui/material/Modal';
import Christmas from '../media/Christmas.mp3'
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Image2 from '../media/wrap.jpg'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [audio, setAudio] = React.useState(new Audio(Christmas));


  const handleClose = () => {
    setOpen(false);
    toggleAudio();
    audio.loop = true;
};
  const toggleAudio = () => (

     isPlaying ? (audio.play(), setIsPlaying(!isPlaying), console.log('PLAYING'), null) : (audio.pause(), setIsPlaying(!isPlaying), console.log('PAUSED'), null)
    

  )
  window.toggleAudio = toggleAudio;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
                <Grid container component='main' sx={{ height: '100vh'}}>
            
            <Grid
                item
                xs = {false}
                sm = {4}
                md = {12}
                sx = {{
                    backgroundImage: `url(${Image2})`,
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            </Grid>
      </Modal>
    </div>
  );
}