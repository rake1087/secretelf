import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Christmas from '../media/Christmas.mp3'
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';



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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}