import React, {useEffect} from 'react';
import { useStateProvider } from '../../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../../utils/Constants';
import './dashboard.css';

const currentDate = new Date();
const time = currentDate.getHours()
var showSongs = false

export default function Dashboard() {

    const [{token, username, topSongs }, dispatch] = useStateProvider();

useEffect(() => {
    const getUsername = async () => {
        const response = await axios.get(
            'https://api.spotify.com/v1/me', 
            {
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
            }
        );
        const username = response.data['display_name']
        
        dispatch({type:reducerCases.SET_USERNAME, username})
    }
    getUsername();

    const getTopSongs = async () => {
        const response = await axios.get(
            "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10", 
            {
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
            }
        );
        console.log(response)
        const { items } = response.data;
        console.log(items);
        const topSongs = items.map(({name, id}) => {
            return { name, id };
         });
        dispatch({type:reducerCases.SET_TOP_SONGS,topSongs})
        
         
    }
    getTopSongs();


}, [token, dispatch])

const handleClick = () => {
    showSongs = !showSongs;
    console.log(showSongs)
}

return (

    <div>
        <div className='db-head'>
            {time > 12 ? <h1>Good afternoon <span className='username'>{username}</span></h1> : <h1>Good morning {username}</h1>}
        <div className='db-body'>
            <button className='log-in-button'
                    onClick={handleClick}>
                        Get my top 10 songs
            </button>
            <ol>
            { topSongs.map(({name, id}) => {
                return (
                    <li key={id}>{name}</li>
                )
            })}
            </ol>
        </div>
        </div>
            
    </div>
    )
}
