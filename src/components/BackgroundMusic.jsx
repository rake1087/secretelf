import React from 'react'
import Sound from 'react-sound-2';
import Christmas from '../media/Christmas.mp3'
import { useState } from 'react';
import Button from '@mui/material/Button';



const BackgroundMusic= (
       /* handleSongLoading,
        handleSongPlaying,
        handleSongFinishedPlaying */
) => {
  //  const [isPlaying, setIsPlaying] = useState(false)
    const playAudio = () => {
    new Audio(Christmas).play();
  }

   
    return (
    <div>
        <Button variant="contained"
            onClick = {playAudio}>
        </Button>
       
    </div>)
 
}

export default BackgroundMusic