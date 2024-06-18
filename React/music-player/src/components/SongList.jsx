import React from "react";

const SongList = () => {
    let songs = ["Bhag Milkha Bhag", "Galliyan", "Chak De India", "Sawar Loon", "Von Dekhey Mein"];
    return (
        <>
            <div className="songList">
                <h1>Songs List</h1>
                <ul className="list">
                    {
                        songs.map((song, index) => (
                            <li><b>{index + 1}</b> - {song}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}
export default SongList;