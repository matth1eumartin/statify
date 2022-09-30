import React from 'react'
import './login.css'

export default function Login() {
    const handleClick = () => {
        const client_id = "6020771a2b41445ab4b3d0a00f9bddb2";
        const redirect_uri = "http://localhost:3000/";
        const api_uri = "https://accounts.spotify.com/authorize";
        const scope = [
          "user-read-private",
          "user-read-email",
          "user-modify-playback-state",
          "user-read-playback-state",
          "user-read-currently-playing",
          "user-read-recently-played",
          "user-top-read",
        ];
        window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
          " "
        )}&response_type=token&show_dialog=true`;
      };
  return (
    <container>
        <h1>Welcome to Statify</h1>
        <button className='log-in-button'
                onClick={handleClick}>
                    Connect spotify
        </button>
    </container>
  )
}
