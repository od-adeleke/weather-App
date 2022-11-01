import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TemperatureDetails from './components/TemperatureDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons'
import getWeatherData from './services/weatherService';

function App() {

  const fetchWeather = async () => {
    const data = await getWeatherData('weather', {q: 'Ibadan'})
    console.log(data);
  }

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButtons/>
      <Inputs/>

      <TimeAndLocation/>
      <TemperatureDetails/>
      <Forecast title="hourly forecast"/>
      <Forecast title="daily forecast"/>
    </div>
  );
}

export default App;