import React from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [location, setLocation] = React.useState("Bhiwandi");

  function handleChange(event) {
    setInput(event.target.value);
  }
  console.log(input);

  function locate() {
    setLocation(input);
    setInput("");
  }
  console.log(location);

  React.useEffect(() => {
    console.log("run use effects");
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=ZSSB7KBM3DY9AAFBFW54BV7P8&contentType=json`
    )
      .then((res) => res.json())
      .then((data) => setWeather([data]));
  }, [location]);
  console.log(weather);

  // switch (main) {
  //   case "Snow":
  //     document.getElementById("wrapper-bg").style.backgroundImage =
  //       "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
  //     break;
  //   case "Clouds":
  //     document.getElementById("wrapper-bg").style.backgroundImage =
  //       "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
  //     break;
  //   case "Fog":
  //     document.getElementById("wrapper-bg").style.backgroundImage =
  //       "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
  //     break;
  //   case "Rain":
  //     document.getElementById("wrapper-bg").style.backgroundImage =
  //       "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
  //     break;
  //   case "Clear":
  //     document.getElementById("wrapper-bg").style.backgroundImage =
  //       "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
  //     break;
  //   case "Thunderstorm":
  //     document.getElementById("wrapper-bg").style.backgroundImage =
  //       "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
  //     break;
  //   default:
  //     document.getElementById("wrapper-bg").style.backgroundImage =
  //       "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
  //     break;
  // }

  return (
    <div className="bg">
      <div className="input-and-btn">
        <input
          type="text"
          placeholder="Seacrh..."
          onChange={handleChange}
          value={input.trimStart()}
        />
        <button
          onClick={locate}
          disabled={input.trimStart() === "" ? true : false}
          className="add-btn"
        >
          +
        </button>
      </div>
      {weather.map((w) => (
        <div className="details">
          <div>
            <h1>{w.address}</h1>
            <h1>{w.currentConditions.temp}&#176;</h1>
            <p>{w.currentConditions.icon}</p>
            <p>
              H:{w.days[0].tempmax}&#176; &nbsp; L:{w.days[0].tempmin}&#176;
            </p>
            <p>Timezone : {w.timezone} </p>
          </div>
          <div className="next-days-div">
            <div className="next-days">
              <h3>{w.days[1].datetime}</h3>
              <h4>
                H:{w.days[1].tempmax}&#176; &nbsp;L:{w.days[1].tempmin}&#176;
              </h4>
              <p>{w.days[1].conditions}</p>
            </div>
            <div className="next-days">
              <h3>{w.days[2].datetime}</h3>
              <h4>
                H:{w.days[2].tempmax}&#176; &nbsp;L:{w.days[2].tempmin}&#176;
              </h4>
              <p>{w.days[2].conditions}</p>
            </div>
            <div className="next-days">
              <h3>{w.days[3].datetime}</h3>
              <h4>
                H:{w.days[3].tempmax}&#176; &nbsp;L:{w.days[3].tempmin}&#176;
              </h4>
              <p>{w.days[3].conditions}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

