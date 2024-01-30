import React from 'react'
import './Card.css'
import musics from '../data/index'
function Card({ props: { musicNumber, setMusicNumber } }) {

    return (
        <div className="card">
            <div className="nav">
                <i className="material-symbols-outlined">expand_more</i>
                <span>Now Playing {musicNumber + 1}/{musics.length}</span>
                <i className="material-symbols-outlined">
                    queue_music
                </i>
            </div>

            <div className="img">
                <img src={musics[musicNumber].thumbnail} alt="" />
            </div>

            <div className="details">
                <p className='title'>{musics[musicNumber].title}</p>
                <p className='artist'>{musics[musicNumber].artist}</p>
            </div>

            <div className="progress">
                <input type="range" min={0} max={100} />
            </div>

            <div className="timer">
                <span>00:00</span>
                <span>03:43</span>
            </div>

            <div className="controls">
                <i className="material-symbols-outlined">
                    repeat
                </i>
                <i className="material-symbols-outlined" id="prev">
                    skip_previous
                </i>
                <div className="play">
                    <i className="material-symbols-outlined" >
                        play_arrow
                    </i>
                </div>

                <i className="material-symbols-outlined" id="next">
                    skip_next
                </i>

                {/*volume*/}
                <i className="material-symbols-outlined"   >
                    volume_up
                </i>

                <div className="volume">
                    <i className="material-symbols-outlined"   >
                        volume_up
                    </i>
                    <input type="range" min={0} max={100}></input>
                    <span>50</span>
                </div>


            </div>

            <audio src={musics[musicNumber].src} hidden></audio>
        </div>
    )
}

export default Card