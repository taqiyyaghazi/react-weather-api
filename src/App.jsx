import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherNow from "./WeatherNow";
import WeatherForecast from "./WeatherForecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1>Weather Today</h1>
          <WeatherNow />
          <h1 className="mt-3">Forecast</h1>
          <WeatherForecast />
        </div>
      </div>
    </div>
  );
}

export default App;
