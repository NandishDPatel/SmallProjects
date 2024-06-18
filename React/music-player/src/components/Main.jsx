import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import { useState } from "react";
import audio1 from '../audio_files/01_Bhaag Milkha Bhaag Shankar Ehsaan Loy 128 Kbps.mp3';
import audio2 from '../audio_files/02_Galliyan.mp3';
import audio3 from '../audio_files/03_Chak De India Title Song 128 Kbps.mp3';
import audio4 from '../audio_files/04_Sawaar Loon Lootera 128 Kbps.mp3';
import audio5 from '../audio_files/05_Voh Dekhnay Mein - London, Paris, New York 128 Kbps.mp3';

const Main = () => {
    const images = [img1, img2, img3, img4, img5];
    const artists = ['Arijit Singh', 'Arman Malik', 'Shreya Ghosal', 'Suniti Chauhan', 'Sindhu Moosewala'];
    const songs = ["Bhag Milkha Bhag", "Galliyan", "Chak De India", "Sawar Loon", "Von Dekhey Mein"];
    const audios = [audio1, audio2, audio3, audio4, audio5];
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentNo, setCurrentNo] = useState(0);
    const audioRef = useRef(null);
    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);

    }
    const handleNext = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
        setIsPlaying(false);
        if (currentNo !== 4) {
            setCurrentNo(currentNo + 1);
        } else {
            setCurrentNo(0);
        }
    }
    const handlePrev = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
        setIsPlaying(false);
        if (currentNo !== 0) {
            setCurrentNo(currentNo - 1);
        } else {
            setCurrentNo(4);
        }
    }
    return (
        <>
            <div className="device">
                <div className="profileIcon">
                    <img className="profileImg" src={images[currentNo]} height="100%" width="100%" alt="" />
                </div>
                <h1 className="songTitle">{songs[currentNo]}</h1>
                <h3 className="artistName">{artists[currentNo]}</h3>
                <div className="timeline">
                    <audio src={audios[currentNo]} ref={audioRef} />
                </div>
                <div className="buttons">
                    <FontAwesomeIcon className="previous btn " onClick={handleNext} icon={faArrowLeft} />
                    <FontAwesomeIcon className="play btn " onClick={handlePlayPause} icon={isPlaying ? faPause : faPlay} />
                    <FontAwesomeIcon className="next btn " onClick={handlePrev} icon={faArrowRight} />
                </div>
            </div>
        </>
    );
}
export default Main;