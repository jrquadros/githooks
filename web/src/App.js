import React, { useState, useEffect } from 'react';

export default function App() {
  const [location, setLocation] = useState({});
  
  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived)
  }, []);

  function handlePositionReceived({coords}) {
    const {latitude, longitude } = coords;
    setLocation({ latitude, longitude })
    console.log(coords)
  }

  return (

    <>
    Latitude: {location.latitude} <br />
    Longitude: {location.longitude}
    </>

  )
}
