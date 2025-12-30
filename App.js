import './App.css';
import { useState } from 'react';

function App() {

  const api = {
    key: '13cd3d31bb8ac08c89843a637e6fbb0c',
    base: 'https://api.openweathermap.org/data/2.5/'
  };

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const searchpressed = () => {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setWeather(data);
      });
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter your City Name"
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={searchpressed}>Search</button>
      </div>

      {weather ? (
        <>
          <p>City:{weather.name}</p>
          <p>Temperature:{weather.main.temp} °C</p>
          <p>TimeZone:{weather.timezone}</p>
        </>
      ) : (
        <p>Enter city and click search</p> 
      )}
    </>
  );
}

export default App;
