import React, { useEffect } from 'react'
import Login from './components/LoginPage/Login'
import Dashboard from './components/Dashboard/Dashboard'
import './app.css'
import { useStateProvider } from './utils/StateProvider'
import { reducerCases } from './utils/Constants';

export default function App() {
  const [{ token }, dispatch ] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({type :reducerCases.SET_TOKEN, token});
    }
    
  }, [token, dispatch])
  return (
    <div className="App">
      <header className="App-header">
        { token ? <Dashboard></Dashboard> : <Login></Login>}
        
      </header>
    </div>
  )
}



