import React ,{useRef, useState} from 'react'
import './Music.css'



export const Music = ({audioSrc}) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration ,setDuration] = useState(0);

    const audioRef = useRef(null);

    const handleSeek = (e) => {}

    const handlePlay =()=>{
        audioRef.current.play();
        setIsPlaying(true);

    }

    const handlePause = () =>{
        audioRef.current.pause();
        setIsPlaying(false);
    }

    const handlePlayPause =() => {
        if(isPlaying){
            handlePause();
        }else{
            handlePlay();
        }
    };
    
    return (
        <div className="player-card">
            <img src="./solo-leveling.png" alt="cover image" />
            <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            />
            <audio ref={audioRef} src={audioSrc} />

            <div className='track-duration'>
                <p>{currentTime}</p>
                <p>{duration}</p>
            </div>

            <button onClick={handlePlayPause}>
                <span className="material-symbols-outlined">
                    {isPlaying ? "pause" : "play_arrow"}
                </span>
            </button>
        </div>

    )
}
